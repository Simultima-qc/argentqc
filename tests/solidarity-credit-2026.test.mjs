import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(join(rootDir, file), "utf8");

test("solidarity tax credit keeps the stable programme ID but is orientation-only and non-summable", () => {
  const programmes = JSON.parse(read("src/data/programmes.json"));
  const credit = programmes.find((programme) => programme.id === "credit-loyer-qc");

  assert.ok(credit);
  assert.match(credit.nom, /solidarité/);
  assert.equal(credit.preselection_only, true);
  assert.equal(credit.montant_sommable, false);
  assert.equal(credit.montant_min, 0);
  assert.equal(credit.montant_max, 0);
  assert.equal("revenu_max" in credit.criteres, false);
  assert.match(credit.lien_officiel, /credit-dimpot-pour-solidarite/);
});

test("versioned dataset exposes the source-backed 2026-2027 parameters", () => {
  const dataset = read("src/data/finance-2026/solidarity-credit-2026.ts");
  assert.match(dataset, /base: 363/);
  assert.match(dataset, /spouse: 363/);
  assert.match(dataset, /additionalLivingAlone: 172/);
  assert.match(dataset, /couple: 906/);
  assert.match(dataset, /singleOrSingleParent: 746/);
  assert.match(dataset, /perChild: 158/);
  assert.match(dataset, /perAdult: 2_134/);
  assert.match(dataset, /threshold: 43_195/);
  assert.match(dataset, /rateTwoOrMoreComponents: 0\.06/);
  assert.match(dataset, /rateOneComponent: 0\.03/);
  assert.match(dataset, /maxAnnualAmount: 240/);
  assert.match(dataset, /minAnnualAmount: 800/);
  assert.match(dataset, /montantSommable: false/);
});

test("calculerTotal excludes non-summable programmes such as the solidarity tax credit", () => {
  const source = read("src/lib/matching.ts");
  assert.match(source, /montant_sommable !== false/);

  const programmes = JSON.parse(read("src/data/programmes.json"));
  const credit = programmes.find((programme) => programme.id === "credit-loyer-qc");
  const sommable = [credit].filter((programme) => programme.montant_sommable !== false);
  assert.equal(sommable.length, 0);
});

test("guide and housing-allowance totals respect montant_sommable", () => {
  const guideComponent = read("src/components/LocalizedBudgetSolidarityCreditPage.tsx");
  const housingComponent = read("src/components/LocalizedBudgetHousingAllowancePage.tsx");
  assert.match(guideComponent, /montant_sommable !== false/);
  assert.match(housingComponent, /montant_sommable !== false/);
});

test("English catalogue translation does not promise a fixed amount range", () => {
  const translations = read("src/i18n/programmes.ts");
  assert.match(translations, /Amount determined by Revenu Quebec/);
  assert.doesNotMatch(translations, /\$150 to \$2,000/);
});

test("guide FAQ visible answers stay materially identical to the JSON-LD source", () => {
  const dictionary = read("src/i18n/budgetSolidarityCredit.ts");
  const component = read("src/components/LocalizedBudgetSolidarityCreditPage.tsx");
  // The JSON-LD is generated directly from dictionary.faqs, so visible/JSON-LD sync
  // only requires that the component renders the same faqs array without a second copy.
  assert.match(component, /dictionary\.faqs\.map/);
  assert.match(component, /mainEntity: dictionary\.faqs\.map/);
  assert.match(dictionary, /Revenu Quebec determine la frequence|La frequence n'est pas un choix/i);
});

test("active examples no longer add non-reproducible solidarity credit amounts to totals", () => {
  const activeExamples = [
    "src/i18n/hubs.ts",
    "src/app/scenarios/celibataire-locataire/page.tsx",
    "src/app/scenarios/famille-2-enfants/page.tsx",
    "src/app/aides-financieres/page.tsx",
    "src/app/aides-financieres/famille/page.tsx",
  ].map(read).join("\n");

  assert.doesNotMatch(activeExamples, /\+ 1 ?185 \$|\+ \$1,185/);
  assert.doesNotMatch(activeExamples, /\+ 680 \$|\+ 520 \$/);
  assert.match(activeExamples, /À vérifier|Verify/);
});

test("legacy article route permanently redirects to the canonical guide and the old entry is gone", () => {
  const registry = read("src/data/blog/index.ts");
  const legacy = read("src/app/blog/credit-solidarite-guide-complet-2026/page.tsx");
  assert.doesNotMatch(registry, /creditSolidariteGuideComplet2026/);
  assert.match(legacy, /permanentRedirect\("\/fr\/budget\/credit-solidarite"\)/);
  assert.throws(() => read("src/data/blog/entries/credit-solidarite-guide-complet-2026.tsx"));
});

test("solidarity tax credit decision ledger and SEO enforcement cover all required traceability fields", () => {
  const ledger = read("docs/claims/credit-impot-solidarite-2026.md");
  const seoCheck = read("scripts/check-seo.mjs");
  const requiredColumns = [
    "programme/incitatif", "surface/fichier", "affirmation", "valeur ou formulation actuelle",
    "source officielle précise", "date de la source ou date de récupération", "statut", "risque",
    "action ultérieure recommandée",
  ];
  for (const column of requiredColumns) assert.match(ledger, new RegExp(column));
  assert.match(ledger, /2026-09-01/);
  assert.match(ledger, /montant_sommable: false/);
  assert.match(seoCheck, /checkSolidarityCreditGuardrails/);
  assert.match(seoCheck, /credit-impot-solidarite-2026\.md/);
});

test("no active surface still carries the obsolete 2026 parameters or a fixed-choice payment claim", () => {
  const forbidden = [/369 \$/, /829 \$/, /649 \$/, /1 ?773 \$/, /38 ?000 \$/];
  const activeSurfaces = [
    "src/data/programmes.json",
    "src/i18n/programmes.ts",
    "src/i18n/budgetSolidarityCredit.ts",
    "src/i18n/budgetHousingAllowance.ts",
    "src/i18n/hubs.ts",
    "src/app/credit-impot-quebec/page.tsx",
    "src/app/aide-famille-quebec/page.tsx",
    "src/app/aide-lunettes-quebec/page.tsx",
    "src/app/aides-financieres/page.tsx",
    "src/app/aides-financieres/famille/page.tsx",
    "src/app/aides-financieres/logement/page.tsx",
    "src/app/scenarios/celibataire-locataire/page.tsx",
    "src/app/scenarios/famille-2-enfants/page.tsx",
    "src/components/LocalizedTaxRefundPage.tsx",
  ].map(read).join("\n");

  for (const pattern of forbidden) {
    assert.doesNotMatch(activeSurfaces, pattern);
  }
});
