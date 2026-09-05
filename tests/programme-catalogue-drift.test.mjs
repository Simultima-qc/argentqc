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
  isMiddlewareRedirectedRoute,
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
