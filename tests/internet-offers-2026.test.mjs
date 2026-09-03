/**
 * Regression tests for the internet-offers-2026 dataset
 * (src/data/finance-2026/internet-offers-2026.ts), following the source-backed
 * revalidation done for issue #47 (2nd pass, after independent review rejected
 * the 1st pass for bumping freshness metadata without any real correction).
 *
 * WebFetch access to every provider's official domain (and to web.archive.org)
 * stayed blocked in this environment (EGRESS_BLOCKED) on this 2nd pass too, but
 * indirect evidence (independent review chain + convergent WebSearch results,
 * including cogeco.ca's own indexed PDF filenames) was strong enough this time
 * to apply real, non-invented corrections for Videotron's and Fizz's modem
 * fees, and to conclude the Cogeco entry no longer matches Cogeco's current
 * "UltraFibre" lineup and must be retired rather than republished or guessed.
 * Every remaining offer still carries an unconfirmed price/speed, so each one
 * now declares `termesVerifies: false`, and the comparator UI renders a visible
 * warning per offer card instead of hiding that uncertainty only in sourceNote.
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

test("dataset lists exactly 5 distinct providers across 8 offers (Cogeco retired)", () => {
  const offers = internetData.internetOffers2026;
  assert.equal(offers.length, 8);
  const providers = new Set(offers.map((offer) => offer.fournisseur));
  assert.equal(providers.size, 5);
  assert.ok(!providers.has("Cogeco"), "Cogeco was retired: its listed offer no longer matches Cogeco's current UltraFibre lineup");
});

test("every offer URL is https and points to the expected provider domain", () => {
  const expectedDomains = {
    Videotron: "www.videotron.com",
    Bell: "www.bell.ca",
    Fizz: "fizz.ca",
    Oxio: "oxio.ca",
    TekSavvy: "www.teksavvy.com",
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

test("Oxio offer points at the internet plans page, not the bare homepage", () => {
  const oxio = internetData.internetOffers2026.find((offer) => offer.fournisseur === "Oxio");
  assert.ok(oxio);
  assert.equal(oxio.url, "https://oxio.ca/fr/internet");
});

test("Videotron offers no longer claim a modem fee (gateway confirmed free) and drop the stale 400 Mbps tier", () => {
  const videotronOffers = internetData.internetOffers2026.filter((offer) => offer.fournisseur === "Videotron");
  assert.equal(videotronOffers.length, 2);
  for (const offer of videotronOffers) {
    assert.equal(offer.modemInclus, true, "Videotron gateway is confirmed included at no charge");
    assert.equal(offer.fraisModem, undefined, "no modem fee should be published for Videotron");
  }
  const cableOffer = videotronOffers.find((offer) => offer.type === "Cable");
  assert.ok(cableOffer);
  assert.notEqual(cableOffer.vitesseDL, 400, "400 Mbps is not a current confirmed Videotron tier (100/500/GIGA/2 GIGA/2.5 GIGA)");
  assert.equal(cableOffer.vitesseDL, 500);
});

test("Fizz offers no longer claim a modem fee (modem-router + free delivery confirmed)", () => {
  const fizzOffers = internetData.internetOffers2026.filter((offer) => offer.fournisseur === "Fizz");
  assert.equal(fizzOffers.length, 2);
  for (const offer of fizzOffers) {
    assert.equal(offer.modemInclus, true, "Fizz includes the modem-router with free delivery");
    assert.equal(offer.fraisModem, undefined, "no modem fee should be published for Fizz");
  }
});

test("every remaining offer explicitly declares its price/speed as unconfirmed (termesVerifies: false)", () => {
  for (const offer of internetData.internetOffers2026) {
    assert.equal(
      offer.termesVerifies,
      false,
      `${offer.fournisseur} ${offer.type} ${offer.vitesseDL}Mbps: no offer's price/speed was confirmed against an official current source this pass`
    );
  }
});

test("internet-offers-2026 freshness metadata documents the 2nd revalidation pass honestly, not a mechanical bump", () => {
  const meta = internetData.internetComparatorUi2026.meta;
  assert.equal(meta.lastUpdated, "2026-09-03");
  assert.equal(meta.status, "estimate", "no offer was confirmed against an official source, so status must not be promoted to official");
  assert.match(meta.sourceNote, /issue #47/);
  assert.match(meta.sourceNote, /EGRESS_BLOCKED/);
  assert.match(meta.sourceNote, /Cogeco/);
  assert.match(meta.sourceNote, /termesVerifies/);
  assert.equal(meta.criticality, "medium");
  assert.equal(meta.reviewCadence, "monthly");
});

test("published comparator pages state the correct distinct provider count (5, no dangling Cogeco mention)", () => {
  const comparateurPage = read("src/app/internet/comparateur/page.tsx");
  assert.match(comparateurPage, /Comparez les forfaits de 5 fournisseurs internet au Qu[ée]bec/);
  assert.doesNotMatch(comparateurPage, /6 fournisseurs internet|7 fournisseurs internet/);

  const internetHubPage = read("src/app/internet/page.tsx");
  assert.doesNotMatch(internetHubPage, /Cogeco/);
});

test("non-localized and localized comparator UI render a visible warning for unconfirmed offers instead of hiding it only in sourceNote", () => {
  const client = read("src/app/internet/comparateur/ComparateurInternetClient.tsx");
  assert.match(client, /f\.termesVerifies/);

  const localizedClient = read("src/components/LocalizedInternetComparatorClient.tsx");
  assert.match(localizedClient, /offer\.termesVerifies/);
  assert.match(localizedClient, /dictionary\.unverifiedPriceLabel/);

  const dictionaries = read("src/i18n/subguides.ts");
  assert.match(dictionaries, /unverifiedPriceLabel:/);
});
