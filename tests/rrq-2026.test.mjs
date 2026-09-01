import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import ts from "typescript";
import vm from "node:vm";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(join(rootDir, file), "utf8");

function loadRetirementModule() {
  const filePath = join(rootDir, "src", "data", "finance-2026", "retirement-2026.ts");
  const { outputText } = ts.transpileModule(readFileSync(filePath, "utf8"), {
    compilerOptions: {
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: filePath,
  });
  const compiledModule = { exports: {} };
  vm.runInNewContext(outputText, {
    exports: compiledModule.exports,
    module: compiledModule,
    require: (request) => {
      if (request === "@/data/finance-2026/schema") {
        return { defineVersionedDataset: (dataset, meta, values) => ({ dataset, meta, values }) };
      }
      throw new Error(`Unexpected import: ${request}`);
    },
    Number,
    Math,
  }, { filename: filePath });
  return compiledModule.exports;
}

const retirement = loadRetirementModule();

test("RRQ 2026 central facts match the official ceilings, rates and ages", () => {
  const contributions = retirement.rrqContributions2026;
  const pension = retirement.rrqPension2026;

  assert.equal(contributions.generalExemption, 3_500);
  assert.equal(contributions.maximumPensionableEarnings, 74_600);
  assert.equal(contributions.maximumContributoryEarnings, 71_100);
  assert.equal(contributions.employeeEmployerRate, 0.063);
  assert.equal(contributions.employeeEmployerMaximum, 4_479.3);
  assert.equal(contributions.additionalMaximumPensionableEarnings, 85_000);
  assert.equal(contributions.secondAdditionalRate, 0.04);
  assert.equal(contributions.secondAdditionalMaximum, 416);
  assert.equal(contributions.employeeEmployerTotalMaximum, 4_895.3);
  assert.equal(contributions.selfEmployedRate, 0.126);
  assert.equal(contributions.selfEmployedSecondAdditionalRate, 0.08);
  assert.equal(pension.earliestAge, 60);
  assert.equal(pension.referenceAge, 65);
  assert.equal(pension.latestAge, 72);
  assert.equal(pension.earlyMonthlyReductionMinimum, 0.005);
  assert.equal(pension.earlyMonthlyReductionMaximum, 0.006);
  assert.equal(pension.latestIncrease, 0.588);
});

test("RRQ contribution calculator covers exemption, MGA, second band and MSGA", () => {
  const calculate = retirement.calculateRrqContributions2026;

  assert.equal(JSON.stringify(calculate(3_500)), JSON.stringify({ salary: 3_500, firstBand: 0, secondBand: 0, employee: 0, employer: 0, employeeAndEmployer: 0, selfEmployed: 0 }));
  assert.equal(calculate(30_000).employee, 1_669.5);
  assert.equal(calculate(50_000).employee, 2_929.5);
  assert.equal(calculate(68_500).employee, 4_095);
  assert.equal(calculate(74_600).employee, 4_479.3);
  assert.equal(calculate(85_000).secondBand, 416);
  assert.equal(calculate(85_000).employee, 4_895.3);
  assert.equal(calculate(85_000).selfEmployed, 9_790.6);
  assert.equal(calculate(100_000).employee, 4_895.3);
});

test("published RRQ surfaces keep age 72, variable early reduction and bounded CTAs", () => {
  const files = [
    "src/components/LocalizedRetirementRrqPage.tsx",
    "src/data/blog/entries/rrq-rente-retraite-2026.tsx",
    "src/i18n/subguides.ts",
    "src/app/scenarios/pre-retraite/page.tsx",
    "src/app/strategies/decaissement-retraite/page.tsx",
  ].map(read).join("\n");

  assert.match(files, /72 ans/);
  assert.match(files, /0,5 % à 0,6 %/);
  assert.match(files, /ne calcule pas (?:votre|la) rente RRQ/i);
  assert.doesNotMatch(files, /portrait complet de votre situation/i);
  assert.doesNotMatch(files, /Calculer mes prestations/i);
  assert.doesNotMatch(files, /presque toujours gagnant/i);
  assert.doesNotMatch(files, /100 000-200 000 \$/i);
  assert.doesNotMatch(files, /40 meilleures années/i);
});

test("RRQ program is localized, orientation-only and non-summable", () => {
  const programmes = JSON.parse(read("src/data/programmes.json"));
  const rrq = programmes.find((programme) => programme.id === "rrq-rentes-qc");
  const translations = read("src/i18n/programmes.ts");

  assert.ok(rrq);
  assert.equal(rrq.preselection_only, true);
  assert.equal(rrq.montant_sommable, false);
  assert.equal(rrq.montant_min, 0);
  assert.equal(rrq.montant_max, 0);
  assert.match(rrq.description, /60 à 72 ans/);
  assert.match(rrq.lien_officiel, /retraitequebec\.gouv\.qc\.ca/);
  assert.match(translations, /"rrq-rentes-qc"/);
  assert.match(translations, /cannot be calculated by this questionnaire/);
});

test("RRQ ledger and SEO enforcement cover the sensitive article", () => {
  const ledger = read("docs/claims/rrq-rente-retraite-2026.md");
  const seoCheck = read("scripts/check-seo.mjs");

  assert.match(seoCheck, /"rrq-rente-retraite-2026"/);
  assert.match(ledger, /claim \| source officielle \| date de vérification \| statut \| prochaine vérification \| action/);
  assert.match(ledger, /2026-08-31/);
  assert.match(ledger, /74 600 \$/);
  assert.match(ledger, /85 000 \$/);
  assert.match(ledger, /4 895,30 \$/);
  assert.match(ledger, /58,8 %/);
  assert.match(ledger, /montant_sommable: false/);
});

test("legacy RRQ route contains only a permanent redirect", () => {
  const legacy = read("src/app/retraite/rrq/page.tsx");
  assert.match(legacy, /permanentRedirect\("\/fr\/retraite\/rrq"\)/);
  assert.doesNotMatch(legacy, /40 meilleures|RPC2|68 500|73 200/);
});
