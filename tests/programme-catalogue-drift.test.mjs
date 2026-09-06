import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

import {
  extractLocalProgrammeCopies,
  extractProgrammeArrayText,
  findProgrammeCatalogueDrift,
  findUngovernedLocalProgrammes,
  isMiddlewareRedirectedRoute,
  splitTopLevelArrayElements,
  splitTopLevelBraceObjects,
} from "../scripts/lib/programme-catalogue-drift.mjs";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appDir = path.join(rootDir, "src", "app");
const programmesJsonFile = path.join(rootDir, "src", "data", "programmes.json");
const middlewareFile = path.join(rootDir, "src", "middleware.ts");
const read = (filePath) => fs.readFileSync(filePath, "utf8");
const relative = (filePath) => path.relative(rootDir, filePath).replace(/\\/g, "/");

// ── Unit rules (fixtures, no filesystem) ────────────────────────────────

test("extractProgrammeArrayText finds a Programme[] literal despite nested braces", () => {
  const source = `
    const programmes: Programme[] = [
      { id: "a", montant_min: 1, montant_max: 2, criteres: { revenu_max: 30000 } },
    ];
    const other = [1, 2, 3];
  `;
  const arrayText = extractProgrammeArrayText(source);
  assert.ok(arrayText.startsWith("["));
  assert.ok(arrayText.endsWith("]"));
  assert.ok(arrayText.includes('"a"'));
  assert.ok(!arrayText.includes("const other"));
});

test("extractProgrammeArrayText returns null when there is no local Programme[] literal", () => {
  assert.equal(extractProgrammeArrayText("export default function Page() { return null; }"), null);
});

test("splitTopLevelBraceObjects only splits at depth-1 braces, not nested criteres braces", () => {
  const arrayText = '[{ id: "a", criteres: { revenu_max: 1 } }, { id: "b", criteres: {} }]';
  const objects = splitTopLevelBraceObjects(arrayText);
  assert.equal(objects.length, 2);
  assert.match(objects[0], /"a"/);
  assert.match(objects[1], /"b"/);
});

test("extractLocalProgrammeCopies reads id/montant_min/montant_max from hardcoded literals", () => {
  const source = `
    const programmes: Programme[] = [
      {
        id: "roulez-vert-veh",
        nom: "x",
        montant_min: 4000,
        montant_max: 7000,
        montant_affiche: "4 000 $ – 7 000 $",
        criteres: { provinces: ["QC"] },
      },
    ];
  `;
  const copies = extractLocalProgrammeCopies(source);
  assert.deepEqual(copies, [{ id: "roulez-vert-veh", montant_min: 4000, montant_max: 7000 }]);
});

test("extractLocalProgrammeCopies skips entries already sourced from the catalogue (no literal to drift)", () => {
  const source = `
    const programmes: Programme[] = [
      getProgrammeFromCatalogue("subv-auto-elec-qc"),
      getProgrammeFromCatalogue("subv-bornes-recharge-qc"),
    ];
  `;
  assert.deepEqual(extractLocalProgrammeCopies(source), []);
});

test("isMiddlewareRedirectedRoute detects a route in middleware.ts legacyRedirects", () => {
  const middlewareSource = `
    const legacyRedirects: Record<string, string> = {
      "/allocation-logement-quebec": "/fr/budget/allocation-logement",
      "/credit-solidarite-quebec": "/fr/budget/credit-solidarite",
    };
  `;
  assert.equal(isMiddlewareRedirectedRoute("/allocation-logement-quebec", middlewareSource), true);
  assert.equal(isMiddlewareRedirectedRoute("/borne-recharge-quebec", middlewareSource), false);
});

test("splitTopLevelArrayElements ignores // and /* */ comments placed between array entries (aide-lunettes-quebec pattern)", () => {
  const arrayText = `[
    // a leading comment explaining the next call
    getProgrammeFromCatalogue("a"),
    /* a block comment
       spanning multiple lines */
    getProgrammeFromCatalogue("b"),
  ]`;
  const elements = splitTopLevelArrayElements(arrayText);
  assert.deepEqual(elements, ['getProgrammeFromCatalogue("a")', 'getProgrammeFromCatalogue("b")']);
});

test("splitTopLevelArrayElements separates object literals from catalogue calls without splitting nested criteres braces", () => {
  const arrayText = '[{ id: "a", criteres: { revenu_max: 1 } }, getProgrammeFromCatalogue("b"), { id: "c" }]';
  const elements = splitTopLevelArrayElements(arrayText);
  assert.equal(elements.length, 3);
  assert.match(elements[0], /"a"/);
  assert.equal(elements[1], 'getProgrammeFromCatalogue("b")');
  assert.match(elements[2], /"c"/);
});

// ── findUngovernedLocalProgrammes (issue #96) ───────────────────────────
// General fix for the gap left open by #93: id-based drift detection can
// only compare a local copy against a catalogue entry that shares its id.
// findUngovernedLocalProgrammes instead rejects any raw object literal in
// the governed array, whatever id it declares - so a page cannot smuggle
// in a duplicate benefit just by inventing a local id with no catalogue
// counterpart, which is exactly what frais-medicaux-qc-2/-fed did.

test("reproduces the historical frais-medicaux-qc-2/frais-medicaux-fed-2 pattern (issue #93): a local id with no catalogue counterpart is still caught", () => {
  const pages = [
    {
      filePath: "src/app/credit-impot-frais-medicaux-quebec/page.tsx",
      source: `
        const programmes: Programme[] = [
          { id: "frais-medicaux-qc-2", montant_min: 0, montant_max: 0, montant_affiche: "x" },
          { id: "frais-medicaux-fed-2", montant_min: 0, montant_max: 0, montant_affiche: "x" },
        ];
      `,
    },
  ];

  const violations = findUngovernedLocalProgrammes({ pages });
  assert.equal(violations.length, 2);
  assert.deepEqual(violations.map((violation) => violation.id).sort(), ["frais-medicaux-fed-2", "frais-medicaux-qc-2"]);
});

test("a page fully sourced via getProgrammeFromCatalogue produces no violation", () => {
  const pages = [
    {
      filePath: "src/app/credit-impot-frais-medicaux-quebec/page.tsx",
      source: `
        const programmes: Programme[] = [
          getProgrammeFromCatalogue("credit-frais-medicaux-qc"),
          getProgrammeFromCatalogue("credit-frais-medicaux-fed"),
        ];
      `,
    },
  ];

  assert.deepEqual(findUngovernedLocalProgrammes({ pages }), []);
});

test("a local object literal whose id already matches a catalogue entry is still flagged (duplicate source of truth, even with no active montant drift)", () => {
  const pages = [
    {
      filePath: "src/app/credit-impot-quebec/page.tsx",
      source: `
        const programmes: Programme[] = [
          { id: "credit-loyer-qc", montant_min: 0, montant_max: 0, montant_affiche: "x" },
        ];
      `,
    },
  ];

  const violations = findUngovernedLocalProgrammes({ pages });
  assert.equal(violations.length, 1);
  assert.equal(violations[0].id, "credit-loyer-qc");
});

test("a local Programme hoisted into a variable and referenced in the array is still flagged (default-deny, not just literal-{} matching)", () => {
  const pages = [
    {
      filePath: "src/app/some-page/page.tsx",
      source: `
        const localProgramme: Programme = { id: "duplicate-local", montant_min: 0, montant_max: 0 };
        const programmes: Programme[] = [
          localProgramme,
          getProgrammeFromCatalogue("credit-maintien-qc"),
        ];
      `,
    },
  ];

  const violations = findUngovernedLocalProgrammes({ pages });
  assert.equal(violations.length, 1);
  assert.equal(violations[0].id, "localProgramme");
});

test("a spread of a non-governed array is still flagged (default-deny catches any element that is not exactly getProgrammeFromCatalogue(...))", () => {
  const pages = [
    {
      filePath: "src/app/some-page/page.tsx",
      source: `
        const programmes: Programme[] = [
          ...localProgrammes,
          getProgrammeFromCatalogue("credit-maintien-qc"),
        ];
      `,
    },
  ];

  const violations = findUngovernedLocalProgrammes({ pages });
  assert.equal(violations.length, 1);
  assert.equal(violations[0].id, "...localProgrammes");
});

test("a call to a helper other than getProgrammeFromCatalogue is still flagged", () => {
  const pages = [
    {
      filePath: "src/app/some-page/page.tsx",
      source: `
        const programmes: Programme[] = [
          buildLocalProgramme("credit-maintien-qc"),
        ];
      `,
    },
  ];

  const violations = findUngovernedLocalProgrammes({ pages });
  assert.equal(violations.length, 1);
  assert.equal(violations[0].id, 'buildLocalProgramme("credit-maintien-qc")');
});

test("an explicitly declared (filePath, id) exception is not flagged", () => {
  const pages = [
    {
      filePath: "src/app/some-page/page.tsx",
      source: `
        const programmes: Programme[] = [
          { id: "programme-local-uniquement", montant_min: 0, montant_max: 100, montant_affiche: "x" },
        ];
      `,
    },
  ];

  const violations = findUngovernedLocalProgrammes({
    pages,
    exceptions: [{ filePath: "src/app/some-page/page.tsx", id: "programme-local-uniquement" }],
  });
  assert.deepEqual(violations, []);
});

// issue #98: credit-impot-quebec/page.tsx used to keep credit-loyer-qc,
// credit-tps-fed, and credit-reno-fed as page-local Programme literals (a
// temporary, tracked exception in governedProgrammeSourcingExceptions,
// scripts/check-seo.mjs) because credit-reno-fed's prose had a flat 15%
// rate claim that needed revalidating against an official ARC source before
// being migrated onto the catalogue. This credit is legally arrimé to the
// lowest federal bracket rate (Income Tax Act s.122.92 and s.248(1)),
// confirmed at 14% for the 2026 tax year onward by the Loi de 2026 sur
// l'abordabilité, the ARC's 2026 tax rates, and the Department of Finance's
// 2026 tax expenditures report - so credit-reno-fed's catalogue entry is
// 14% / $7,000 for the 2026 tax year (not the prior flat 15% / $7,500
// claim, and not the transitional 14.5% / $7,250 that applied only to 2025
// tax-year expenses during the mid-year 15%->14% rate cut on 1 July 2025).
// programmes.json's credit-reno-fed entry was corrected accordingly and all
// three ids are now sourced from the catalogue; the exception is removed
// (empty array).

test("the real src/app tree has zero pages mixing a local Programme literal into the governed array pattern (live routes only)", () => {
  const middlewareSource = read(middlewareFile);
  const pageFiles = [];
  walkPageFiles(appDir, pageFiles);

  const pages = pageFiles
    .map((filePath) => ({ filePath: relative(filePath), routePath: routePathForPageFile(filePath), source: read(filePath) }))
    .filter(({ routePath }) => !isMiddlewareRedirectedRoute(routePath, middlewareSource));

  assert.deepEqual(findUngovernedLocalProgrammes({ pages, exceptions: [] }), []);
});

test("credit-impot-quebec/page.tsx sources credit-loyer-qc, credit-tps-fed, credit-maintien-qc, and credit-reno-fed from the catalogue instead of page-local copies (issue #98)", () => {
  const source = read(path.join(appDir, "credit-impot-quebec", "page.tsx"));

  assert.deepEqual(extractLocalProgrammeCopies(source), []);
  for (const id of ["credit-loyer-qc", "credit-tps-fed", "credit-maintien-qc", "credit-reno-fed"]) {
    assert.match(source, new RegExp(`getProgrammeFromCatalogue\\("${id}"\\)`));
  }
});

test("catalogue's credit-reno-fed reflects the issue #98 ARC revalidation for the 2026 tax year (14% / $7,000, not the prior flat 15% / $7,500 claim nor the 2025-only transitional 14.5% / $7,250)", () => {
  const catalogue = JSON.parse(read(programmesJsonFile));
  const renoFed = catalogue.find((programme) => programme.id === "credit-reno-fed");

  assert.equal(renoFed.montant_max, 7000);
  assert.match(renoFed.description, /remboursable de 14 ?%/);
  assert.doesNotMatch(renoFed.description, /remboursable de 15 ?%/);
  assert.doesNotMatch(renoFed.montant_affiche, /7 ?250/);
  assert.doesNotMatch(renoFed.description, /Dépenses admissibles minimales de 500/);
  assert.deepEqual(renoFed.conditions, ["Créer un logement secondaire dans votre domicile", "Le logement est destiné à un aîné (65+) ou une personne handicapée", "Dépenses admissibles maximales de 50 000 $"]);
});

// ── findProgrammeCatalogueDrift (fixtures) ──────────────────────────────

test("reproduces the exact borne-recharge-quebec defect from issue #66/#69 as a caught drift", () => {
  const pages = [
    {
      filePath: "src/app/borne-recharge-quebec/page.tsx",
      source: `
        const programmes: Programme[] = [
          { id: "roulez-vert-veh", montant_min: 4000, montant_max: 7000, montant_affiche: "x" },
        ];
      `,
    },
  ];
  const catalogue = [{ id: "roulez-vert-veh", montant_min: 500, montant_max: 2000 }];

  const drifts = findProgrammeCatalogueDrift({ pages, catalogue });
  assert.equal(drifts.length, 1);
  assert.equal(drifts[0].id, "roulez-vert-veh");
  assert.deepEqual(drifts[0].local, { montant_min: 4000, montant_max: 7000 });
  assert.deepEqual(drifts[0].canonical, { montant_min: 500, montant_max: 2000 });
});

test("reproduces the exact credit-maintien-qc defect (6 000 $ vs governed 10 200 $) as a caught drift", () => {
  const pages = [
    {
      filePath: "src/app/credit-impot-quebec/page.tsx",
      source: `
        const programmes: Programme[] = [
          { id: "credit-maintien-qc", montant_min: 500, montant_max: 6000, montant_affiche: "Jusqu'à 6 000 $" },
        ];
      `,
    },
  ];
  const catalogue = [{ id: "credit-maintien-qc", montant_min: 500, montant_max: 10200 }];

  const drifts = findProgrammeCatalogueDrift({ pages, catalogue });
  assert.equal(drifts.length, 1);
  assert.deepEqual(drifts[0].canonical, { montant_min: 500, montant_max: 10200 });
});

test("a local copy that matches the catalogue exactly produces no drift", () => {
  const pages = [
    {
      filePath: "src/app/vehicule-electrique-quebec/page.tsx",
      source: `
        const programmes: Programme[] = [
          { id: "subv-auto-elec-qc", montant_min: 500, montant_max: 2000, montant_affiche: "x" },
        ];
      `,
    },
  ];
  const catalogue = [{ id: "subv-auto-elec-qc", montant_min: 500, montant_max: 2000 }];

  assert.deepEqual(findProgrammeCatalogueDrift({ pages, catalogue }), []);
});

test("a local id absent from the catalogue is not flagged (not (yet) a governed duplicate)", () => {
  const pages = [
    {
      filePath: "src/app/some-page/page.tsx",
      source: `
        const programmes: Programme[] = [
          { id: "programme-local-uniquement", montant_min: 0, montant_max: 100, montant_affiche: "x" },
        ];
      `,
    },
  ];
  assert.deepEqual(findProgrammeCatalogueDrift({ pages, catalogue: [] }), []);
});

// ── Integration facts (real repo tree, issue #69) ───────────────────────

function walkPageFiles(currentDir, files) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const entryPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "api" || entry.name.startsWith("_")) continue;
      walkPageFiles(entryPath, files);
      continue;
    }
    if (entry.name === "page.tsx") files.push(entryPath);
  }
}

function routePathForPageFile(filePath) {
  const relativeDir = path.relative(appDir, path.dirname(filePath)).replace(/\\/g, "/");
  return relativeDir === "" ? "/" : `/${relativeDir}`;
}

test("the real src/app tree has zero drift between local programme copies and the governed catalogue (live routes only)", () => {
  const catalogue = JSON.parse(read(programmesJsonFile));
  const middlewareSource = read(middlewareFile);
  const pageFiles = [];
  walkPageFiles(appDir, pageFiles);

  const pages = pageFiles
    .map((filePath) => ({ filePath: relative(filePath), routePath: routePathForPageFile(filePath), source: read(filePath) }))
    .filter(({ routePath }) => !isMiddlewareRedirectedRoute(routePath, middlewareSource));

  const drifts = findProgrammeCatalogueDrift({ pages, catalogue });
  assert.deepEqual(drifts, []);
});

test("allocation-logement-quebec and credit-solidarite-quebec (dead code, still permanently redirected by middleware.ts per issue #63/#66) now source the catalogue directly, closing the #69 exception (issue #86)", () => {
  const legacyLoyer = path.join(appDir, "allocation-logement-quebec", "page.tsx");
  const legacySolidarite = path.join(appDir, "credit-solidarite-quebec", "page.tsx");
  const middlewareSource = read(middlewareFile);

  assert.equal(isMiddlewareRedirectedRoute(routePathForPageFile(legacyLoyer), middlewareSource), true);
  assert.equal(isMiddlewareRedirectedRoute(routePathForPageFile(legacySolidarite), middlewareSource), true);

  for (const filePath of [legacyLoyer, legacySolidarite]) {
    const source = read(filePath);
    assert.deepEqual(extractLocalProgrammeCopies(source), [], `${relative(filePath)} should no longer hold a local Programme[] literal to drift`);
    assert.match(source, /getProgrammeFromCatalogue\(/);
  }

  const catalogue = JSON.parse(read(programmesJsonFile));
  const drifts = findProgrammeCatalogueDrift({
    pages: [
      { filePath: relative(legacyLoyer), source: read(legacyLoyer) },
      { filePath: relative(legacySolidarite), source: read(legacySolidarite) },
    ],
    catalogue,
  });
  assert.deepEqual(drifts, []);
});

test("borne-recharge-quebec no longer hardcodes the obsolete 7 000 $ 2024 vehicle amount and sources the catalogue instead", () => {
  const source = read(path.join(appDir, "borne-recharge-quebec", "page.tsx"));
  assert.doesNotMatch(source, /7 ?000 ?\$/);
  assert.match(source, /getProgrammeFromCatalogue\("subv-auto-elec-qc"\)/);
  assert.match(source, /getProgrammeFromCatalogue\("subv-bornes-recharge-qc"\)/);
});

test("borne-recharge-quebec hero total (600 $ + 2 000 $ = 2 600 $) can no longer diverge from its own FAQ", () => {
  const catalogue = JSON.parse(read(programmesJsonFile));
  const byId = new Map(catalogue.map((programme) => [programme.id, programme]));
  const borne = byId.get("subv-bornes-recharge-qc");
  const vehicule = byId.get("subv-auto-elec-qc");
  assert.ok(borne && vehicule, "expected both Roulez vert programmes in the catalogue");

  const heroTotal = borne.montant_max + vehicule.montant_max;
  assert.equal(heroTotal, 2600);

  const source = read(path.join(appDir, "borne-recharge-quebec", "page.tsx"));
  assert.match(source, /2 ?000 ?\$ \(véhicule, montant 2026\) \+ 600 ?\$ \(borne\) = 2 ?600 ?\$/);
});

test("credit-impot-quebec and credit-impot-frais-medicaux-quebec no longer hardcode the pre-#54 6 000 $ maintien-à-domicile amount", () => {
  for (const relativePath of [
    "credit-impot-quebec/page.tsx",
    "credit-impot-frais-medicaux-quebec/page.tsx",
  ]) {
    const source = read(path.join(appDir, relativePath));
    assert.doesNotMatch(source, /6 ?000 ?\$/, `${relativePath} must not carry the obsolete 6 000 $ maintien-à-domicile amount`);
    assert.match(source, /getProgrammeFromCatalogue\("credit-maintien-qc"\)/);
  }

  const catalogue = JSON.parse(read(programmesJsonFile));
  const maintien = catalogue.find((programme) => programme.id === "credit-maintien-qc");
  assert.equal(maintien.montant_max, 10200);
  assert.equal(maintien.montant_min, 500);
});

// ── issue #86: the 5 live pages whose local text had drifted from the ──
// governed catalogue (organisme/description/conditions/lien_officiel),
// even though checkProgrammeCatalogueDrift's montant-only comparison saw
// no active drift. Reconciled onto the catalogue as the single governed
// source of truth (see the durable report on issue #86).

test("allocation-enfant-quebec and aide-famille-quebec source irapvf-qc/ace-fed (and, for aide-famille-quebec, credit-loyer-qc/credit-tps-fed) from the catalogue instead of a local copy", () => {
  const enfant = read(path.join(appDir, "allocation-enfant-quebec", "page.tsx"));
  assert.deepEqual(extractLocalProgrammeCopies(enfant), []);
  assert.match(enfant, /getProgrammeFromCatalogue\("irapvf-qc"\)/);
  assert.match(enfant, /getProgrammeFromCatalogue\("ace-fed"\)/);

  const famille = read(path.join(appDir, "aide-famille-quebec", "page.tsx"));
  assert.deepEqual(extractLocalProgrammeCopies(famille), []);
  for (const id of ["irapvf-qc", "ace-fed", "credit-loyer-qc", "credit-tps-fed"]) {
    assert.match(famille, new RegExp(`getProgrammeFromCatalogue\\("${id}"\\)`));
  }
});

test("chauffez-vert-quebec sources chauffez-vert-qc and consolidates its page-local logisvert-hydro-cv id onto the catalogue's logisvert-hydro", () => {
  const source = read(path.join(appDir, "chauffez-vert-quebec", "page.tsx"));
  assert.deepEqual(extractLocalProgrammeCopies(source), []);
  assert.match(source, /getProgrammeFromCatalogue\("chauffez-vert-qc"\)/);
  assert.match(source, /getProgrammeFromCatalogue\("logisvert-hydro"\)/);
  assert.doesNotMatch(source, /logisvert-hydro-cv/);
});

test("vehicule-electrique-quebec sources subv-auto-elec-qc and subv-bornes-recharge-qc from the catalogue instead of a stale local copy (was still crediting Transition énergétique Québec, dissolved into the ministry)", () => {
  const source = read(path.join(appDir, "vehicule-electrique-quebec", "page.tsx"));
  assert.deepEqual(extractLocalProgrammeCopies(source), []);
  assert.match(source, /getProgrammeFromCatalogue\("subv-auto-elec-qc"\)/);
  assert.match(source, /getProgrammeFromCatalogue\("subv-bornes-recharge-qc"\)/);
});

test("aide-lunettes-quebec sources credit-loyer-qc, credit-frais-medicaux-fed and credit-frais-medicaux-qc from the catalogue, closing the #86 residual resolved by issue #88", () => {
  const source = read(path.join(appDir, "aide-lunettes-quebec", "page.tsx"));
  assert.match(source, /getProgrammeFromCatalogue\("credit-loyer-qc"\)/);
  assert.match(source, /getProgrammeFromCatalogue\("credit-frais-medicaux-fed"\)/);
  assert.match(source, /getProgrammeFromCatalogue\("credit-frais-medicaux-qc"\)/);
  assert.doesNotMatch(source, /id:\s*"credit-solidarite-sante"/);
  assert.deepEqual(extractLocalProgrammeCopies(source), []);

  const catalogue = JSON.parse(read(programmesJsonFile));
  const fed = catalogue.find((p) => p.id === "credit-frais-medicaux-fed");
  const qc = catalogue.find((p) => p.id === "credit-frais-medicaux-qc");
  assert.ok(fed, "expected credit-frais-medicaux-fed in the governed catalogue");
  assert.ok(qc, "expected credit-frais-medicaux-qc in the governed catalogue");
  assert.deepEqual({ min: fed.montant_min, max: fed.montant_max }, { min: 0, max: 0 });
  assert.deepEqual({ min: qc.montant_min, max: qc.montant_max }, { min: 0, max: 0 });
});

test("credit-impot-frais-medicaux-quebec sources credit-frais-medicaux-qc and credit-frais-medicaux-fed from the catalogue instead of the competing frais-medicaux-qc-2/frais-medicaux-fed-2 local copies (issue #93)", () => {
  const source = read(path.join(appDir, "credit-impot-frais-medicaux-quebec", "page.tsx"));
  assert.deepEqual(extractLocalProgrammeCopies(source), []);
  assert.match(source, /getProgrammeFromCatalogue\("credit-frais-medicaux-qc"\)/);
  assert.match(source, /getProgrammeFromCatalogue\("credit-frais-medicaux-fed"\)/);
  assert.doesNotMatch(source, /id:\s*"frais-medicaux-qc-2"/);
  assert.doesNotMatch(source, /id:\s*"frais-medicaux-fed-2"/);

  // The page must no longer assert the pre-#88 15% federal rate, the old
  // 2 635 $ (2023) threshold presented as current, or the Québec credit as
  // refundable / variable 5%-20%.
  assert.doesNotMatch(source, /15%/);
  assert.doesNotMatch(source, /2 ?635 ?\$/);
  assert.doesNotMatch(source, /remboursable sur vos frais médicaux/);
  assert.doesNotMatch(source, /5% et 20%/);
});
