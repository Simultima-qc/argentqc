/**
 * Regression tests for the tax-guide-2026 dataset (src/data/finance-2026/tax-2026.ts)
 * and its directly coupled surfaces, following the source-backed revalidation done
 * for issue #45.
 *
 * These guard against reintroducing claims already identified as inaccurate or
 * unconfirmed during that revalidation: a mismatched federal/Quebec balance-due
 * date, an over-long Quebec late-filing penalty cap, unadjusted weekend/Saturday
 * deadlines, a stale fixed-percentage interest approximation, and a Quebec
 * repeat-offender penalty claim copied from the federal rule without a distinct
 * Revenu Quebec primary source confirming it applies the same way provincially.
 */

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import ts from "typescript";
import vm from "node:vm";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(join(rootDir, file), "utf8");

function loadTaxDatasetModule() {
  const filePath = join(rootDir, "src", "data", "finance-2026", "tax-2026.ts");
  const { outputText } = ts.transpileModule(readFileSync(filePath, "utf8"), {
    compilerOptions: {
      esModuleInterop: true,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: filePath,
  });
  const compiledModule = { exports: {} };
  vm.runInNewContext(
    outputText,
    {
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
      Date,
    },
    { filename: filePath }
  );
  return compiledModule.exports;
}

const taxData = loadTaxDatasetModule();

test("federal and Quebec balance-due dates match (both April 30, 2026)", () => {
  const row = taxData.taxDatesLimites2026.find((entry) => entry.situation === "Paiement du solde du");
  assert.ok(row, "expected a 'Paiement du solde du' row");
  assert.equal(row.federal, "30 avril 2026");
  assert.equal(row.provincial, "30 avril 2026");
});

test("testamentary trust deadline is bound to the trust's own tax year, not just 'the year'", () => {
  const row = taxData.taxDatesLimites2026.find((entry) => entry.situation === "Fiducie testamentaire");
  assert.ok(row);
  assert.match(row.federal, /annee d'imposition de la fiducie/);
  assert.match(row.provincial, /annee d'imposition de la fiducie/);
});

test("Quebec late-filing penalty cap matches the federal structure (12 months, not 20)", () => {
  const [arc, rq] = taxData.taxPenalites2026;
  assert.match(arc.penaliteMensuelle, /max\. 12 mois/);
  assert.match(rq.penaliteMensuelle, /max\. 12 mois/);
  assert.doesNotMatch(rq.penaliteMensuelle, /20 mois/);
});

test("interest wording avoids a stale fixed-percentage annual approximation", () => {
  for (const entry of taxData.taxPenalites2026) {
    assert.doesNotMatch(entry.interets, /~\s*8\s*%/, `${entry.organisme} should not claim a fixed ~8% rate`);
  }
  // The ARC and Quebec prescribed rates are set independently each quarter and
  // are not guaranteed to be equal; the two entries should not be worded identically.
  const [arc, rq] = taxData.taxPenalites2026;
  assert.notEqual(arc.interets, rq.interets);
});

test("Quebec repeat-offender penalty is not asserted without a distinct primary source", () => {
  const [arc, rq] = taxData.taxPenalites2026;
  // The federal repeat-offender rule (10% + 2%/month, up to 20 months) is
  // grounded in Income Tax Act s.162(2); no equivalent Revenu Quebec primary
  // source was found confirming the same mechanism applies provincially (Revenu
  // Quebec documents a structurally different non-compliance penalty instead).
  // Republishing the federal figure under the Quebec entry would misrepresent
  // it as confirmed, so the claim must not carry an unqualified percentage.
  assert.match(arc.recidive, /10%/);
  assert.doesNotMatch(rq.recidive, /10%/);
  assert.match(rq.recidive, /[Nn]on confirme/);
});

test("REER contribution and T4/RL-1 deadlines account for the Feb 28 / Mar 1, 2026 weekend", () => {
  const reer = taxData.taxCalendrier2026.find((entry) => entry.evenement.includes("cotisation REER"));
  const slips = taxData.taxCalendrier2026.find((entry) => entry.evenement.includes("T4/RL-1"));
  assert.ok(reer && slips);
  assert.equal(reer.date, "2 mars 2026");
  assert.equal(slips.date, "2 mars 2026");
});

test("NETFILE / ImpotNet Quebec opening date reflects the actual February 2026 opening", () => {
  const opening = taxData.taxCalendrier2026.find((entry) => entry.evenement.includes("IMPOTNET"));
  assert.ok(opening);
  assert.equal(opening.date, "23 fevrier 2026");
});

test("published tax-dates surfaces no longer claim a May 1 Quebec balance-due date", () => {
  const files = [
    "src/app/impots/dates/page.tsx",
    "src/components/LocalizedTaxDeadlinesPage.tsx",
  ]
    .map(read)
    .join("\n");

  assert.doesNotMatch(files, /1er mai pour Revenu Québec/);
  assert.doesNotMatch(files, /"May 1, 2026"/);
  assert.doesNotMatch(files, /up to 20 months/);
  assert.doesNotMatch(files, /~8%/);
});

test("English mirror does not claim an unconfirmed Quebec repeat-offender percentage", () => {
  const localized = read("src/components/LocalizedTaxDeadlinesPage.tsx");
  const rqBlock = localized.slice(localized.indexOf('organisme: "Revenu Quebec (provincial)"'));

  assert.match(rqBlock, /recidive: "Not confirmed by a Revenu Quebec primary source/);
  assert.doesNotMatch(rqBlock.slice(0, rqBlock.indexOf("interets:")), /10%/);
});

test("tax-guide-2026 freshness metadata reflects a real revalidation (not a mechanical bump)", () => {
  assert.equal(taxData.taxGuide2026.meta.lastUpdated, "2026-09-03");
  assert.match(taxData.taxGuide2026.meta.sourceNote, /issue #45/);
  assert.equal(taxData.taxGuide2026.meta.criticality, "high");
});
