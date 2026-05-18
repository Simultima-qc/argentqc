/**
 * Unit tests for src/lib/tax-calculator.ts
 *
 * Loads the TypeScript source via ts.transpileModule + vm so no build step is
 * required — mirrors the approach used in questionnaire-url.test.mjs.
 */

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";
import vm from "node:vm";

// ---------------------------------------------------------------------------
// Module loader
// ---------------------------------------------------------------------------

function loadTaxCalculatorModule() {
  const source = readFileSync(
    new URL("../src/lib/tax-calculator.ts", import.meta.url),
    "utf8",
  );

  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });

  const module = { exports: {} };
  vm.runInNewContext(outputText, { exports: module.exports, module });
  return module.exports;
}

const {
  FEDERAL_QUEBEC_ABATEMENT,
  federalQuebecBrackets2026,
  quebecBrackets2026,
  calculateProgressiveTax,
  calculateTotalTax,
  getMarginalRate,
} = loadTaxCalculatorModule();

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

/** Asserts that |actual - expected| <= tolerance (default 0.01). */
function assertClose(actual, expected, tolerance = 0.01, label = "") {
  const diff = Math.abs(actual - expected);
  assert.ok(
    diff <= tolerance,
    `${label ? label + ": " : ""}expected ${expected} +/- ${tolerance}, got ${actual} (diff ${diff})`,
  );
}

// ---------------------------------------------------------------------------
// FEDERAL_QUEBEC_ABATEMENT
// ---------------------------------------------------------------------------

test("FEDERAL_QUEBEC_ABATEMENT is 0.835 (16.5 % reduction)", () => {
  assertClose(FEDERAL_QUEBEC_ABATEMENT, 0.835, 1e-10);
});

// ---------------------------------------------------------------------------
// calculateProgressiveTax -- bracket structure
// ---------------------------------------------------------------------------

test("calculateProgressiveTax: zero income returns 0", () => {
  assert.equal(calculateProgressiveTax(0, quebecBrackets2026), 0);
});

test("calculateProgressiveTax: negative income is treated as zero", () => {
  assert.equal(calculateProgressiveTax(-50000, quebecBrackets2026), 0);
});

test("calculateProgressiveTax: income entirely within first bracket (QC)", () => {
  // 30 000 < 54 345 -> 30 000 x 14 % = 4 200
  assertClose(calculateProgressiveTax(30_000, quebecBrackets2026), 4_200);
});

test("calculateProgressiveTax: income exactly at first bracket limit (QC)", () => {
  // 54 345 x 14 % = 7 608.30
  assertClose(calculateProgressiveTax(54_345, quebecBrackets2026), 7_608.30);
});

test("calculateProgressiveTax: income spanning two brackets (QC)", () => {
  // bracket 1: 54 345 x 14 % = 7 608.30
  // bracket 2: (65 000 - 54 345) x 19 % = 10 655 x 19 % = 2 024.45
  // total = 9 632.75
  assertClose(calculateProgressiveTax(65_000, quebecBrackets2026), 9_632.75);
});

test("calculateProgressiveTax: income spanning all four QC brackets", () => {
  // bracket 1: 54 345 x 0.14       =  7 608.30
  // bracket 2: 54 335 x 0.19       = 10 323.65   (108 680 - 54 345)
  // bracket 3: 23 565 x 0.24       =  5 655.60   (132 245 - 108 680)
  // bracket 4: 67 755 x 0.2575     = 17 446.9125 (200 000 - 132 245)
  // total                          = 41 034.4625
  assertClose(calculateProgressiveTax(200_000, quebecBrackets2026), 41_034.4625, 0.01);
});

// ---------------------------------------------------------------------------
// calculateProgressiveTax -- federal brackets (spot-check abatement is baked in)
// ---------------------------------------------------------------------------

test("calculateProgressiveTax: income within first federal bracket carries abatement", () => {
  // 50 000 x (0.14 x 0.835) = 50 000 x 0.1169 = 5 845
  assertClose(calculateProgressiveTax(50_000, federalQuebecBrackets2026), 5_845);
});

// ---------------------------------------------------------------------------
// calculateTotalTax
// ---------------------------------------------------------------------------

test("calculateTotalTax: zero income returns 0", () => {
  assert.equal(calculateTotalTax(0), 0);
});

test("calculateTotalTax: negative income returns 0", () => {
  assert.equal(calculateTotalTax(-1), 0);
});

test("calculateTotalTax: 50 000 $ (both tables in first bracket)", () => {
  // Federal: 50 000 x 0.14 x 0.835 = 5 845.00
  // Quebec:  50 000 x 0.14          = 7 000.00
  // Total                           = 12 845.00
  assertClose(calculateTotalTax(50_000), 12_845.00);
});

test("calculateTotalTax: 60 000 $ (crosses first federal and first QC bracket)", () => {
  // Federal bracket 1: 58 523 x 0.14 x 0.835 = 6 841.34
  // Federal bracket 2:  1 477 x 0.205 x 0.835 =   252.83
  // QC bracket 1:      54 345 x 0.14           = 7 608.30
  // QC bracket 2:       5 655 x 0.19           = 1 074.45
  // Total                                       = 15 776.92
  assertClose(calculateTotalTax(60_000), 15_776.92, 0.10);
});

test("calculateTotalTax: 75 000 $ (mid-range professional)", () => {
  // Federal bracket 1: 58 523 x 0.14 x 0.835 =  6 841.34
  // Federal bracket 2: 16 477 x 0.205 x 0.835 = 2 820.46
  // QC bracket 1:      54 345 x 0.14           = 7 608.30
  // QC bracket 2:      20 655 x 0.19           = 3 924.45
  // Total                                       = 21 194.55
  assertClose(calculateTotalTax(75_000), 21_194.55, 0.10);
});

test("calculateTotalTax: RRSP deduction reduces tax (basic sanity)", () => {
  const taxBefore = calculateTotalTax(75_000);
  const taxAfter  = calculateTotalTax(75_000 - 10_000);
  assert.ok(taxAfter < taxBefore, "Tax should decrease after RRSP deduction");
});

test("calculateTotalTax: deduction savings are positive and less than contribution", () => {
  const contribution = 10_000;
  const saving = calculateTotalTax(75_000) - calculateTotalTax(75_000 - contribution);
  assert.ok(saving > 0, "Saving should be positive");
  assert.ok(saving < contribution, "Saving should be less than the contribution itself");
});

// ---------------------------------------------------------------------------
// getMarginalRate
// ---------------------------------------------------------------------------

test("getMarginalRate: 50 000 $ -> both tables in first bracket", () => {
  // Federal: 0.14 x 0.835 = 0.1169
  // QC:      0.14
  // Combined = 0.2569
  assertClose(getMarginalRate(50_000), 0.2569, 1e-6);
});

test("getMarginalRate: 60 000 $ -> second federal bracket, second QC bracket", () => {
  // Federal: 0.205 x 0.835 = 0.171175
  // QC:      0.19
  // Combined = 0.361175
  assertClose(getMarginalRate(60_000), 0.361175, 1e-6);
});

test("getMarginalRate: 200 000 $ -> fourth federal bracket, top QC bracket", () => {
  // Federal: 0.29 x 0.835 = 0.24215
  // QC:      0.2575
  // Combined = 0.49965
  assertClose(getMarginalRate(200_000), 0.49965, 1e-6);
});

test("getMarginalRate: 300 000 $ -> top federal bracket, top QC bracket", () => {
  // Federal: 0.33 x 0.835 = 0.27555
  // QC:      0.2575
  // Combined = 0.53305
  assertClose(getMarginalRate(300_000), 0.53305, 1e-6);
});

test("getMarginalRate: rate is consistent with marginal tax on last dollar", () => {
  const income = 75_000;
  const delta = 1;
  const marginalTaxOnLastDollar = calculateTotalTax(income) - calculateTotalTax(income - delta);
  assertClose(getMarginalRate(income), marginalTaxOnLastDollar / delta, 0.001);
});
