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
