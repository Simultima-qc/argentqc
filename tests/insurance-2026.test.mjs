/**
 * Regression tests for the insurance-comparator-2026 dataset
 * (src/data/finance-2026/insurance-2026.ts), following the source-backed
 * revalidation done for issue #49 (re-baseline #31, item #5).
 *
 * WebFetch access to every insurer's official domain (and to gaa.qc.ca, the
 * Groupement des assureurs automobiles) stayed EGRESS_BLOCKED in this
 * environment, exactly as already documented for internet-offers-2026
 * (issue #47). This pass therefore follows the same convention introduced
 * there: every carrier entry declares termesVerifies: false and the
 * comparator UI renders a visible per-card warning instead of hiding the
 * uncertainty only in sourceNote.
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

function loadInsuranceModule() {
  const filePath = join(rootDir, "src", "data", "finance-2026", "insurance-2026.ts");
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

const insuranceData = loadInsuranceModule();

test("habitation and auto each list exactly 6 carriers", () => {
  assert.equal(insuranceData.assureursHabitation2026.length, 6);
  assert.equal(insuranceData.assureursAuto2026.length, 6);
});

test("SSQ is no longer named as a standalone/hyphenated brand (Beneva rebrand, effective 2023-01-01)", () => {
  for (const carrier of [...insuranceData.assureursHabitation2026, ...insuranceData.assureursAuto2026]) {
    assert.doesNotMatch(carrier.nom, /SSQ/, `${carrier.nom} should not mention SSQ (rebranded to Beneva)`);
  }
  const habBeneva = insuranceData.assureursHabitation2026.find((c) => c.nom === "Beneva");
  const autoBeneva = insuranceData.assureursAuto2026.find((c) => c.nom === "Beneva");
  assert.ok(habBeneva, "expected a 'Beneva' habitation carrier");
  assert.ok(autoBeneva, "expected a 'Beneva' auto carrier");
});

test("every carrier URL is https and every carrier declares termesVerifies: false this pass", () => {
  for (const carrier of [...insuranceData.assureursHabitation2026, ...insuranceData.assureursAuto2026]) {
    const url = new URL(carrier.url);
    assert.equal(url.protocol, "https:", `${carrier.nom}: URL should be https`);
    assert.equal(
      carrier.termesVerifies,
      false,
      `${carrier.nom}: no price/URL was confirmed against an official primary source this pass (network egress blocked)`
    );
  }
});

test("Belair Direct URLs are unchanged (exact match confirmed against indexed official pages)", () => {
  const hab = insuranceData.assureursHabitation2026.find((c) => c.nom === "Belair Direct");
  const auto = insuranceData.assureursAuto2026.find((c) => c.nom === "Belair Direct");
  assert.equal(hab.url, "https://www.belairdirect.com/fr/assurance-habitation.html");
  assert.equal(auto.url, "https://www.belairdirect.com/fr/assurance-auto.html");
});

test("Desjardins and CAA-Quebec URLs were corrected to their current site structure", () => {
  const desjardinsHab = insuranceData.assureursHabitation2026.find((c) => c.nom === "Desjardins");
  const desjardinsAuto = insuranceData.assureursAuto2026.find((c) => c.nom === "Desjardins");
  assert.equal(desjardinsHab.url, "https://www.desjardins.com/fr/assurances/habitation.html");
  assert.equal(desjardinsAuto.url, "https://www.desjardins.com/fr/assurances/auto.html");
  assert.notEqual(desjardinsHab.url, "https://www.desjardins.com/assurances/habitation/");
  assert.notEqual(desjardinsAuto.url, "https://www.desjardins.com/assurances/auto/");

  const caaHab = insuranceData.assureursHabitation2026.find((c) => c.nom === "CAA-Quebec");
  const caaAuto = insuranceData.assureursAuto2026.find((c) => c.nom === "CAA-Quebec");
  assert.equal(caaHab.url, "https://www.caaquebec.com/fr/assurances/habitation");
  assert.equal(caaAuto.url, "https://www.caaquebec.com/fr/assurances/vehicule/assurance-auto");
});

test("Promutuel auto URL was migrated off the stale promutuel.ca domain", () => {
  const promutuel = insuranceData.assureursAuto2026.find((c) => c.nom === "Promutuel");
  assert.ok(promutuel);
  const url = new URL(promutuel.url);
  assert.equal(url.hostname, "www.promutuelassurance.ca", "promutuel.ca did not surface in any current search result; the live domain is promutuelassurance.ca");
});

test("auto prix_base ranges were corrected down to align with 2025-2026 Quebec market averages (GAA-anchored), habitation ranges left unchanged", () => {
  const autoMidpoints = insuranceData.assureursAuto2026.map((c) => (c.prix_base[0] + c.prix_base[1]) / 2);
  const averageMonthly = autoMidpoints.reduce((a, b) => a + b, 0) / autoMidpoints.length;
  const averageAnnual = averageMonthly * 12;
  // Convergent 2025-2026 sources (GAA ~1006$/an 2025, KBD ~1045$/an early 2026,
  // other aggregators 850$-1352$/an) cluster well below the previous ~1377$/an
  // dataset average; the corrected average must land inside that range.
  assert.ok(averageAnnual > 900 && averageAnnual < 1300, `expected corrected auto average annual premium between 900$ and 1300$, got ${averageAnnual.toFixed(0)}$`);

  // Values come from a module evaluated in a separate vm context (a
  // different realm), so its arrays are not `instanceof` this file's Array
  // and deepEqual's cross-realm check trips on them; spread into a
  // same-realm array first so only element values are compared.
  const desjardinsAuto = insuranceData.assureursAuto2026.find((c) => c.nom === "Desjardins");
  assert.deepEqual([...desjardinsAuto.prix_base], [76, 112]);
  assert.notDeepEqual([...desjardinsAuto.prix_base], [95, 140], "the previous, uncorrected base range should not survive this pass");

  const desjardinsHab = insuranceData.assureursHabitation2026.find((c) => c.nom === "Desjardins");
  assert.deepEqual([...desjardinsHab.prix_base], [28, 45], "habitation prix_base cross-validated successfully against current market data, so it is unchanged");
});

test("Montreal auto region multiplier reflects the ~35% regional premium gap found in convergent sources", () => {
  assert.equal(insuranceData.multRegionAuto2026.montreal, 1.35);
  assert.notEqual(insuranceData.multRegionAuto2026.montreal, 1.3);
});

test("insurance-comparator-2026 freshness metadata documents this revalidation honestly, not a mechanical bump", () => {
  const meta = insuranceData.insuranceComparator2026.meta;
  assert.equal(meta.lastUpdated, "2026-09-03");
  assert.equal(meta.status, "estimate", "no carrier price was confirmed against an official primary source, so status must not be promoted to official");
  assert.match(meta.sourceNote, /issue #49/);
  assert.match(meta.sourceNote, /EGRESS_BLOCKED/);
  assert.match(meta.sourceNote, /Beneva/);
  assert.match(meta.sourceNote, /GAA/);
  assert.match(meta.sourceNote, /termesVerifies/);
  assert.equal(meta.criticality, "medium");
  assert.equal(meta.reviewCadence, "monthly");
});

test("non-localized and localized comparator UI render a visible warning for unconfirmed carriers instead of hiding it only in sourceNote", () => {
  const client = read("src/app/assurances/comparateur/ComparateurClient.tsx");
  assert.match(client, /a\.termesVerifies/);
  assert.doesNotMatch(client, /SSQ/, "the dead commented-out duplicate carrier block (with the stale SSQ label) should be removed, not left as misleading dead code");

  const localizedClient = read("src/components/LocalizedInsuranceComparatorClient.tsx");
  assert.match(localizedClient, /carrier\.termesVerifies/);
  assert.match(localizedClient, /dictionary\.unverifiedPriceLabel/);

  const dictionaries = read("src/i18n/subguides.ts");
  assert.match(dictionaries, /unverifiedPriceLabel:/);
});

test("comparateur FAQ names Intact's real telematics program (myDrive), not the fabricated 'IntelliDrive'", () => {
  const comparateurPage = read("src/app/assurances/comparateur/page.tsx");
  assert.doesNotMatch(comparateurPage, /IntelliDrive/);
  assert.match(comparateurPage, /myDrive chez Intact/);
});
