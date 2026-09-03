/**
 * Regression tests for the internet-offers-2026 dataset
 * (src/data/finance-2026/internet-offers-2026.ts), following the source-backed
 * revalidation attempt done for issue #47.
 *
 * WebFetch access to every provider's official domain (and to web.archive.org)
 * was blocked in the review environment (EGRESS_BLOCKED), and indirect WebSearch
 * evidence was too fragmentary/address-dependent to confirm or correct any
 * individual price, speed, or contract term. No commercial value was changed;
 * these tests guard the parts that *were* revalidated: the freshness metadata
 * honestly reflects "incertain" (not silently promoted to "official"), and the
 * four provider URLs corrected against confirmed indexed content do not regress
 * back to their stale/imprecise prior paths.
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

function loadInternetOffersModule() {
  const filePath = join(rootDir, "src", "data", "finance-2026", "internet-offers-2026.ts");
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

const internetData = loadInternetOffersModule();

test("dataset lists exactly 6 distinct providers across 9 offers", () => {
  const offers = internetData.internetOffers2026;
  assert.equal(offers.length, 9);
  const providers = new Set(offers.map((offer) => offer.fournisseur));
  assert.equal(providers.size, 6);
});

test("every offer URL is https and points to the expected provider domain", () => {
  const expectedDomains = {
    Videotron: "www.videotron.com",
    Bell: "www.bell.ca",
    Fizz: "fizz.ca",
    Oxio: "oxio.ca",
    TekSavvy: "www.teksavvy.com",
    Cogeco: "www.cogeco.ca",
  };

  for (const offer of internetData.internetOffers2026) {
    const url = new URL(offer.url);
    assert.equal(url.protocol, "https:", `${offer.fournisseur} URL should be https`);
    assert.equal(
      url.hostname,
      expectedDomains[offer.fournisseur],
      `${offer.fournisseur} URL should point to its own official domain`
    );
  }
});

test("Bell offers use the precise Fibe plans URL confirmed via indexed content (issue #47)", () => {
  const bellOffers = internetData.internetOffers2026.filter((offer) => offer.fournisseur === "Bell");
  assert.equal(bellOffers.length, 2);
  for (const offer of bellOffers) {
    assert.equal(offer.url, "https://www.bell.ca/Services_Internet/Acces_Internet");
  }
});

test("TekSavvy offer does not regress to the stale non-www /fr/internet link", () => {
  const teksavvy = internetData.internetOffers2026.find((offer) => offer.fournisseur === "TekSavvy");
  assert.ok(teksavvy);
  assert.equal(teksavvy.url, "https://www.teksavvy.com/fr/nos-services/internet/");
  assert.notEqual(teksavvy.url, "https://teksavvy.com/fr/internet");
});

test("Cogeco offer points at the specific forfaits page, not just the internet landing page", () => {
  const cogeco = internetData.internetOffers2026.find((offer) => offer.fournisseur === "Cogeco");
  assert.ok(cogeco);
  assert.equal(cogeco.url, "https://www.cogeco.ca/fr/internet/forfaits");
});

test("Oxio offer points at the internet plans page, not the bare homepage", () => {
  const oxio = internetData.internetOffers2026.find((offer) => offer.fournisseur === "Oxio");
  assert.ok(oxio);
  assert.equal(oxio.url, "https://oxio.ca/fr/internet");
});

test("internet-offers-2026 freshness metadata reflects a real but blocked revalidation attempt, not a mechanical bump", () => {
  const meta = internetData.internetComparatorUi2026.meta;
  assert.equal(meta.lastUpdated, "2026-09-03");
  assert.equal(meta.status, "estimate", "no offer was confirmed against an official source, so status must not be promoted to official");
  assert.match(meta.sourceNote, /issue #47/);
  assert.match(meta.sourceNote, /EGRESS_BLOCKED/);
  assert.match(meta.sourceNote, /incertain/);
  assert.equal(meta.criticality, "medium");
  assert.equal(meta.reviewCadence, "monthly");
});

test("published comparator page states the correct distinct provider count (6, not 7)", () => {
  const page = read("src/app/internet/comparateur/page.tsx");
  assert.match(page, /Comparez les forfaits de 6 fournisseurs internet au Qu[ée]bec/);
  assert.doesNotMatch(page, /7 fournisseurs internet/);
});
