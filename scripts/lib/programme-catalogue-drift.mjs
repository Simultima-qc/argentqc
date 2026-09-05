// Pure, dependency-free helpers detecting drift between a locally
// hardcoded `Programme[]` literal in an SEO page (see SeoProgrammesPage.tsx
// and its ~10 src/app/*-quebec/page.tsx consumers) and the governed
// catalogue in src/data/programmes.json. Mirrors scripts/lib/route-registry.mjs:
// imported both by scripts/check-seo.mjs (the production gate) and by
// tests/programme-catalogue-drift.test.mjs.
//
// This does not require every SEO page to import the catalogue (issue #69
// migrated only the 3 confirmed defects); it generically protects any
// hardcoded copy - present or future - whose "id" happens to already match
// a catalogue entry, instead of a fixed allowlist of known-bad files.

const PROGRAMMES_ARRAY_START = /const\s+programmes\s*:\s*Programme\[\]\s*=\s*\[/;

// Finds `const programmes: Programme[] = [ ... ]` and returns the bracketed
// array literal text (including the outer [ ]), tracking bracket depth so a
// nested `criteres: { revenu_max: ... }` or similar does not confuse the end.
export function extractProgrammeArrayText(source) {
  const startMatch = source.match(PROGRAMMES_ARRAY_START);
  if (!startMatch) return null;

  const start = startMatch.index + startMatch[0].length - 1; // position of the opening "["
  let depth = 0;
  for (let i = start; i < source.length; i += 1) {
    const char = source[i];
    if (char === "[") depth += 1;
    else if (char === "]") {
      depth -= 1;
      if (depth === 0) {
        return source.slice(start, i + 1);
      }
    }
  }
  return null;
}

// Splits an array-literal text into its top-level `{ ... }` object
// substrings, respecting nested braces (e.g. `criteres: { ... }`).
export function splitTopLevelBraceObjects(arrayText) {
  const objects = [];
  let depth = 0;
  let objectStart = -1;

  for (let i = 0; i < arrayText.length; i += 1) {
    const char = arrayText[i];
    if (char === "{") {
      if (depth === 0) objectStart = i;
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0 && objectStart !== -1) {
        objects.push(arrayText.slice(objectStart, i + 1));
        objectStart = -1;
      }
    }
  }

  return objects;
}

// Extracts { id, montant_min, montant_max } for every hardcoded programme
// object literal in a page source. Object literals that are not a plain
// `{ id: "...", montant_min: N, montant_max: N, ... }` (e.g. a call like
// `getProgrammeFromCatalogue("...")` already sourced from the catalogue)
// simply yield no match and are skipped - they cannot drift.
export function extractLocalProgrammeCopies(source) {
  const arrayText = extractProgrammeArrayText(source);
  if (!arrayText) return [];

  const copies = [];
  for (const objectText of splitTopLevelBraceObjects(arrayText)) {
    const idMatch = objectText.match(/\bid:\s*"([^"]+)"/);
    const minMatch = objectText.match(/\bmontant_min:\s*(-?\d+)/);
    const maxMatch = objectText.match(/\bmontant_max:\s*(-?\d+)/);
    if (!idMatch || !minMatch || !maxMatch) continue;

    copies.push({
      id: idMatch[1],
      montant_min: Number(minMatch[1]),
      montant_max: Number(maxMatch[1]),
    });
  }
  return copies;
}

// A route permanently redirected at the middleware layer (src/middleware.ts
// legacyRedirects map) never actually renders its page.tsx - the request is
// redirected before Next.js reaches it. Its hardcoded Programme[] literal is
// dead code, not a live surface, so it is excluded from the drift gate (see
// issue #63/#66: allocation-logement-quebec and credit-solidarite-quebec).
export function isMiddlewareRedirectedRoute(routePath, middlewareSource) {
  const escaped = routePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`"${escaped}":\\s*"`).test(middlewareSource);
}

// Splits an array-literal text (including its outer [ ]) into its
// top-level comma-separated elements, respecting nested {}, [], (), and
// quoted strings. Unlike splitTopLevelBraceObjects, an element does not
// have to be a `{ ... }` object literal - it can equally be a call
// expression like `getProgrammeFromCatalogue("id")` - so this is the
// primitive findUngovernedLocalProgrammes needs to tell the two shapes
// apart per array entry.
// Blanks out // line comments and /* */ block comments (replacing them with
// spaces, so character offsets and line breaks are preserved) while leaving
// quoted strings untouched, so a `//`/`/*` inside a "montant_affiche" string
// is never mistaken for a comment. Array-literal comments between entries
// (see aide-lunettes-quebec/page.tsx) must be removed before splitting on
// top-level commas, or a comment would otherwise be mistaken for its own
// array element.
function blankComments(source) {
  let result = "";
  let quote = null;
  let escaped = false;

  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    const next = source[i + 1];

    if (quote) {
      result += char;
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === "\"" || char === "'" || char === "`") {
      quote = char;
      result += char;
      continue;
    }

    if (char === "/" && next === "/") {
      const end = source.indexOf("\n", i + 2);
      const stop = end === -1 ? source.length : end;
      result += " ".repeat(stop - i);
      i = stop - 1;
      continue;
    }

    if (char === "/" && next === "*") {
      const end = source.indexOf("*/", i + 2);
      const stop = end === -1 ? source.length : end + 2;
      result += source.slice(i, stop).replace(/[^\n]/g, " ");
      i = stop - 1;
      continue;
    }

    result += char;
  }

  return result;
}

export function splitTopLevelArrayElements(arrayText) {
  const inner = blankComments(arrayText.slice(1, -1));
  const elements = [];
  let depth = 0;
  let quote = null;
  let escaped = false;
  let start = 0;

  for (let i = 0; i < inner.length; i += 1) {
    const char = inner[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === "\"" || char === "'" || char === "`") {
      quote = char;
      continue;
    }

    if (char === "{" || char === "[" || char === "(") {
      depth += 1;
    } else if (char === "}" || char === "]" || char === ")") {
      depth -= 1;
    } else if (char === "," && depth === 0) {
      elements.push(inner.slice(start, i).trim());
      start = i + 1;
    }
  }

  const last = inner.slice(start).trim();
  if (last) elements.push(last);

  return elements.filter(Boolean);
}

const CATALOGUE_CALL_PATTERN = /^getProgrammeFromCatalogue\(\s*"[^"]+"\s*\)$/;

// Structural guardrail for issue #96 (gap left open by #69/#93): id-based
// drift detection (findProgrammeCatalogueDrift above) only catches a local
// copy when it reuses the *same* id as a catalogue entry. It cannot catch
// the historical frais-medicaux-qc-2/frais-medicaux-fed-2 pattern (#93),
// where a page recreated an already-governed benefit under a *different*
// local id - there is no shared id for the comparison to key on.
//
// The chosen invariant does not try to detect "same benefit, different id"
// semantically (fragile, un-reviewable). Instead it is deterministic and
// structural: a page that opts into the governed array pattern (the same
// `const programmes: Programme[] = [...]` literal SeoProgrammesPage
// consumes) must source *every* entry through getProgrammeFromCatalogue().
// The check is default-deny, not default-allow: any top-level array
// element that is not *exactly* a `getProgrammeFromCatalogue("id")` call is
// rejected, whatever shape it takes - a raw `{ id: ..., ... }` object
// literal, a variable reference to one declared above the array (e.g.
// `const localProgramme = { id: ... }; const programmes = [localProgramme]`),
// a `...spread` of a non-governed array, or any other helper/call. An
// earlier version of this check only special-cased literal `{ ... }`
// entries and silently ignored anything else, which a reviewer found still
// let a hoisted-variable or spread indirection smuggle in a duplicate
// benefit undetected. So a new local id (or an indirected one) can never
// smuggle in a duplicate benefit. Legitimate local-only entries (a benefit
// not yet catalogued) must be added to `exceptions` explicitly, one line
// per (file, id), so the exception is reviewable and bounded rather than a
// silent gap.
export function findUngovernedLocalProgrammes({ pages, exceptions = [] }) {
  const exceptionKeys = new Set(exceptions.map(({ filePath, id }) => `${filePath}::${id}`));
  const violations = [];

  for (const { filePath, source } of pages) {
    const arrayText = extractProgrammeArrayText(source);
    if (!arrayText) continue;

    for (const element of splitTopLevelArrayElements(arrayText)) {
      if (CATALOGUE_CALL_PATTERN.test(element)) continue;

      const idMatch = element.match(/\bid:\s*"([^"]+)"/);
      const id = idMatch ? idMatch[1] : element.length > 60 ? `${element.slice(0, 60)}…` : element;
      if (exceptionKeys.has(`${filePath}::${id}`)) continue;

      violations.push({ filePath, id });
    }
  }

  return violations;
}

/**
 * @param {{ filePath: string, source: string }[]} pages
 * @param {{ id: string, montant_min: number, montant_max: number }[]} catalogue
 * @returns {{ filePath: string, id: string, local: { montant_min: number, montant_max: number }, canonical: { montant_min: number, montant_max: number } }[]}
 */
export function findProgrammeCatalogueDrift({ pages, catalogue }) {
  const catalogueById = new Map(catalogue.map((programme) => [programme.id, programme]));
  const drifts = [];

  for (const { filePath, source } of pages) {
    for (const copy of extractLocalProgrammeCopies(source)) {
      const canonical = catalogueById.get(copy.id);
      if (!canonical) continue; // not (yet) a duplicate of a governed programme

      if (copy.montant_min !== canonical.montant_min || copy.montant_max !== canonical.montant_max) {
        drifts.push({
          filePath,
          id: copy.id,
          local: { montant_min: copy.montant_min, montant_max: copy.montant_max },
          canonical: { montant_min: canonical.montant_min, montant_max: canonical.montant_max },
        });
      }
    }
  }

  return drifts;
}
