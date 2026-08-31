import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(join(rootDir, file), "utf8");

test("ACE and Allocation famille questionnaire entries remain preselection-only", () => {
  const programmes = JSON.parse(read("src/data/programmes.json"));
  const expected = new Map([
    ["ace-fed", 8157],
    ["irapvf-qc", 3068],
  ]);

  for (const [id, maximum] of expected) {
    const programme = programmes.find((entry) => entry.id === id);
    assert.ok(programme, `${id} must exist`);
    assert.equal(programme.montant_max, maximum);
    assert.equal(programme.preselection_only, true);
    assert.equal(programme.montant_sommable, false);
  }
});

test("central 2026 rules contain the audited ACE, Quebec and CCF parameters", () => {
  const source = read("src/data/finance-2026/family-training-rules-2026.ts");
  for (const token of [
    "under6Annual: 8_157",
    "age6To17Annual: 6_883",
    "disabilityAnnual: 3_480",
    "firstThreshold: 38_237",
    "secondThreshold: 82_847",
    "baseMaxAnnual: 3_068",
    "singleParentSupplementAnnual: 1_077",
    "annualLimitIncrease: 250",
    "lifetimeLimit: 5_000",
    "minimumWorkingIncome: 12_058",
    "maximumNetIncome: 177_882",
    "quebecTuitionCreditRate: 0.08",
  ]) {
    assert.match(source, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("audited family and training surfaces do not reintroduce stale claims", () => {
  const files = [
    "src/app/allocation-enfant-quebec/page.tsx",
    "src/app/aide-famille-quebec/page.tsx",
    "src/app/aides-financieres/page.tsx",
    "src/app/aides-financieres/famille/page.tsx",
    "src/app/aide-financiere-sport-enfant-quebec/page.tsx",
    "src/app/subvention-sport-enfant-quebec/page.tsx",
    "src/data/blog/entries/allocation-canadienne-enfants-2026.tsx",
    "src/data/blog/entries/allocation-famille-quebec-calcul-2026.tsx",
    "src/data/blog/entries/credit-canadien-formation-2026.tsx",
    "src/data/blog/entries/credit-impot-handicap-canada-2026.tsx",
  ];
  const content = files.map(read).join("\n");

  for (const forbidden of [
    /\b7[\s\u00a0]?787\b/,
    /\b2[\s\u00a0]?(?:782|847|986)\b/,
    /\b3[\s\u00a0]?432\b/,
    /\b36[\s\u00a0]?502\b/,
    /\b10[\s\u00a0]?994\b/,
    /\b173[\s\u00a0]?205\b/,
    /20 % des frais admissibles/i,
    /subvention jusqu.{0,15}100 %/i,
    /via Service Canada/i,
  ]) {
    assert.doesNotMatch(content, forbidden);
  }
});

test("ACE and CCF ledgers are current and fully verified", () => {
  const ledgers = [
    read("docs/claims/allocation-canadienne-enfants-2026.md"),
    read("docs/claims/credit-canadien-formation-2026.md"),
  ].join("\n");

  assert.doesNotMatch(ledgers, /non vérifiable|approximation/i);
  assert.match(ledgers, /2026-08-29/);
  assert.match(ledgers, /ligne-45350-credit-canadien-pour-la-formation/);
});

test("SEO programme totals exclude non-summable preselection entries", () => {
  const source = read("src/components/SeoProgrammesPage.tsx");
  assert.match(source, /programme\.montant_sommable !== false/);
  assert.match(source, /Orientation personnalisée/);
  assert.doesNotMatch(source, /Potentiel total estimé/);
});
