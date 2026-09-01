import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(join(rootDir, file), "utf8");

test("ACEBE keeps the stable programme ID but is orientation-only and non-summable", () => {
  const programmes = JSON.parse(read("src/data/programmes.json"));
  const acebe = programmes.find((programme) => programme.id === "credit-tps-fed");

  assert.ok(acebe);
  assert.match(acebe.nom, /Allocation canadienne.*épicerie.*besoins essentiels/);
  assert.equal(acebe.preselection_only, true);
  assert.equal(acebe.montant_sommable, false);
  assert.equal(acebe.montant_min, 0);
  assert.equal(acebe.montant_max, 0);
  assert.equal("revenu_max" in acebe.criteres, false);
  assert.match(acebe.lien_officiel, /allocation-canadienne-epicerie-besoins-essentiels/);
});

test("English catalogue translation uses CGEB and does not promise a fixed amount", () => {
  const translations = read("src/i18n/programmes.ts");
  assert.match(translations, /Canada Groceries and Essentials Benefit \(CGEB\)/);
  assert.match(translations, /Amount calculated by the CRA/);
  assert.doesNotMatch(translations, /Up to \$700 per year/);
});

test("active examples no longer add legacy GST-HST amounts", () => {
  const activeExamples = [
    "src/i18n/hubs.ts",
    "src/app/scenarios/celibataire-locataire/page.tsx",
    "src/app/scenarios/famille-2-enfants/page.tsx",
  ].map(read).join("\n");

  assert.doesNotMatch(activeExamples, /Crédit TPS\/TVH fédéral|GST\/HST federal credit|Crédit d'impôt TPS\/TVH/);
  assert.doesNotMatch(activeExamples, /\+ 496 \$|\+ \$496/);
  assert.match(activeExamples, /hors ACEBE/);
  assert.match(activeExamples, /excluding CGEB/);
  assert.match(activeExamples, /À vérifier/);
});

test("new article is canonical, sourced and distinguishes the 2026 transition", () => {
  const article = read("src/data/blog/entries/allocation-canadienne-epicerie-besoins-essentiels-2026.tsx");
  assert.match(article, /const slug = "allocation-canadienne-epicerie-besoins-essentiels-2026"/);
  assert.match(article, /alternates: \{ canonical:/);
  assert.match(article, /dernier paiement trimestriel.*2 avril 2026/i);
  assert.match(article, /5 juin 2026/);
  assert.match(article, /3 juillet 2026/);
  assert.match(article, /revenu familial net rajusté de 2025/i);
  assert.match(article, /Il n’existe pas de plafond universel de revenu/);
  assert.match(article, /serializeJsonLd\(faqSchema\)/);
  assert.match(article, /\/fr\/questionnaire/);
});

test("legacy article route permanently redirects to the only current article", () => {
  const registry = read("src/data/blog/index.ts");
  const legacy = read("src/app/blog/credit-tps-tvh-canada-2026/page.tsx");
  assert.match(registry, /allocationCanadienneEpicerieBesoinsEssentiels2026/);
  assert.doesNotMatch(registry, /creditTpsTvhCanada2026/);
  assert.match(legacy, /permanentRedirect\("\/blog\/allocation-canadienne-epicerie-besoins-essentiels-2026"\)/);
});

test("ACEBE decision ledger and SEO enforcement cover all required traceability fields", () => {
  const ledger = read("docs/claims/allocation-canadienne-epicerie-besoins-essentiels-2026.md");
  const seoCheck = read("scripts/check-seo.mjs");
  const requiredColumns = [
    "programme/incitatif", "surface/fichier", "affirmation", "valeur ou formulation actuelle",
    "source officielle précise", "date de la source ou date de récupération", "statut", "risque",
    "action ultérieure recommandée",
  ];
  for (const column of requiredColumns) assert.match(ledger, new RegExp(column));
  assert.match(ledger, /2026-09-01/);
  assert.match(ledger, /montant_sommable: false/);
  assert.match(seoCheck, /"allocation-canadienne-epicerie-besoins-essentiels-2026"/);
  assert.match(seoCheck, /decisionLedgerColumns/);
});
