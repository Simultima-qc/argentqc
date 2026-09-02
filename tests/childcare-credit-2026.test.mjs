import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(join(rootDir, file), "utf8");

test("childcare credit programme stays orientation-only and non-summable in the catalogue", () => {
  const programmes = JSON.parse(read("src/data/programmes.json"));
  const credit = programmes.find((programme) => programme.id === "credit-frais-garde-qc");

  assert.ok(credit);
  assert.equal(credit.preselection_only, true);
  assert.equal(credit.montant_sommable, false);
  assert.equal(credit.montant_min, 0);
  assert.equal(credit.montant_max, 0);
  assert.match(credit.description, /14 ans/);
  assert.doesNotMatch(credit.description, /16 ans/);
  assert.match(credit.lien_officiel, /credit-dimpot-pour-frais-de-garde-denfants/);
});

test("calculerTotal excludes the childcare credit from generic totals", () => {
  const source = read("src/lib/matching.ts");
  assert.match(source, /montant_sommable !== false/);

  const programmes = JSON.parse(read("src/data/programmes.json"));
  const credit = programmes.find((programme) => programme.id === "credit-frais-garde-qc");
  const sommable = [credit].filter((programme) => programme.montant_sommable !== false);
  assert.equal(sommable.length, 0);
});

test("versioned dataset exposes the source-backed 2026 rate schedule, ceilings and age rule", () => {
  const dataset = read("src/data/finance-2026/childcare-credit-2026.ts");

  assert.match(dataset, /rateMin: 0\.67/);
  assert.match(dataset, /rateMax: 0\.78/);
  assert.match(dataset, /minIncome: 0, maxIncome: 25_305, rate: 0\.78/);
  assert.match(dataset, /minIncome: 25_305, maxIncome: 44_620, rate: 0\.75/);
  assert.match(dataset, /minIncome: 44_620, maxIncome: 46_270, rate: 0\.74/);
  assert.match(dataset, /minIncome: 46_270, maxIncome: 47_935, rate: 0\.73/);
  assert.match(dataset, /minIncome: 47_935, maxIncome: 49_565, rate: 0\.72/);
  assert.match(dataset, /minIncome: 49_565, maxIncome: 51_225, rate: 0\.71/);
  assert.match(dataset, /minIncome: 51_225, maxIncome: 122_290, rate: 0\.7/);
  assert.match(dataset, /minIncome: 122_290, maxIncome: null, rate: 0\.67/);

  assert.match(dataset, /severeAndProlongedImpairment: 17_145/);
  assert.match(dataset, /under7NoImpairment: 12_525/);
  assert.match(dataset, /otherEligibleChild: 6_305/);
  assert.match(dataset, /eligibleChildMaxIncome: 13_938/);

  assert.match(dataset, /generalMaxAgeExclusive: 14/);
  assert.match(dataset, /subsidizedCareExcluded: true/);
  assert.match(dataset, /montantSommable: false/);
});

test("no active cluster surface still carries an obsolete 2026 rate range or age rule", () => {
  const forbidden = [
    /26 ?[–-] ?75 ?%/,
    /67 ?[–-] ?75 ?%/,
    /26 ?[–-] ?78 ?%/,
    /33 ?655 ?\$/,
    /157 ?179 ?\$/,
    /moins de 16 ans/,
  ];

  const activeSurfaces = [
    "src/data/programmes.json",
    "src/data/blog/entries/frais-garde-enfants-quebec-2026.tsx",
    "src/data/blog/entries/bouclier-fiscal-quebec-2026.tsx",
    "src/app/aides-financieres/page.tsx",
    "src/app/aides-financieres/famille/page.tsx",
    "src/app/cout-vie-quebec/page.tsx",
    "src/app/scenarios/famille-2-enfants/page.tsx",
    "src/app/aide-financiere-sport-enfant-quebec/page.tsx",
  ].map(read).join("\n");

  for (const pattern of forbidden) {
    assert.doesNotMatch(activeSurfaces, pattern);
  }
});

test("the ~55% / ~4 400 $ example at a 60 000 $ income does not return", () => {
  const article = read("src/data/blog/entries/frais-garde-enfants-quebec-2026.tsx");
  assert.doesNotMatch(article, /~55%/);
  assert.doesNotMatch(article, /~4 ?400 \$/);
  assert.match(article, /70%/);
});

test("consolidated sport pages: legacy route permanently redirects and is dropped from the SEO registry", () => {
  const legacy = read("src/app/subvention-sport-enfant-quebec/page.tsx");
  const seoPages = read("src/data/seo-pages.ts");

  assert.match(legacy, /permanentRedirect\("\/aide-financiere-sport-enfant-quebec"\)/);
  assert.doesNotMatch(seoPages, /"\/subvention-sport-enfant-quebec"/);
  assert.match(seoPages, /"\/aide-financiere-sport-enfant-quebec"/);
});

test("no internal link still points to the retired sport route", () => {
  const surfaces = [
    "src/data/blog/entries/frais-garde-enfants-quebec-2026.tsx",
    "src/app/aides-financieres/page.tsx",
    "src/app/aide-famille-quebec/page.tsx",
    "src/app/aide-financiere-sport-enfant-quebec/page.tsx",
  ].map(read).join("\n");

  assert.doesNotMatch(surfaces, /href: "\/subvention-sport-enfant-quebec"/);
  assert.doesNotMatch(surfaces, /lien: "\/subvention-sport-enfant-quebec"/);
});

test("childcare credit claim ledger exists with the required traceability columns and is wired into check:seo", () => {
  const ledger = read("docs/claims/credit-frais-garde-enfants-2026.md");
  const seoCheck = read("scripts/check-seo.mjs");
  const requiredColumns = [
    "programme/incitatif", "surface/fichier", "affirmation", "valeur ou formulation actuelle",
    "source officielle précise", "date de la source ou date de récupération", "statut", "risque",
    "action ultérieure recommandée",
  ];
  for (const column of requiredColumns) assert.match(ledger, new RegExp(column));
  assert.match(ledger, /17 145 \$/);
  assert.match(ledger, /12 525 \$/);
  assert.match(ledger, /6 305 \$/);
  assert.match(seoCheck, /checkChildcareCreditGuardrails/);
  assert.match(seoCheck, /credit-frais-garde-enfants-2026\.md/);
});

test("finance-2026 index re-exports the childcare credit dataset", () => {
  const index = read("src/data/finance-2026/index.ts");
  assert.match(index, /childcare-credit-2026/);
});
