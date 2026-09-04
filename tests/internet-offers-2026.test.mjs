/**
 * Regression tests for the internet-offers-2026 dataset
 * (src/data/finance-2026/internet-offers-2026.ts), following the source-backed
 * revalidation done for issue #47 (3rd pass; independent review rejected the
 * 1st pass for bumping freshness metadata without any real correction, and
 * the 2nd pass for retyping Videotron's "500" tier without fixing its stale
 * upload speed and price, which were still the old "400/20 at $69" values).
 *
 * WebFetch access to every provider's official domain stayed blocked in this
 * environment on all 3 passes (EGRESS_BLOCKED, confirmed even on
 * en.wikipedia.org and web.archive.org — not provider-specific). This pass
 * corrects Videotron's two remaining offers using a named, structured
 * secondary source (WhistleOut's per-plan pages) that converges with the
 * independent review chain and several other aggregators, without ever
 * inventing a replacement figure. Every offer still carries an unconfirmed
 * price/speed relative to a direct primary-source fetch, so each one still
 * declares `termesVerifies: false`, and the comparator UI renders a visible
 * warning per offer card instead of hiding that uncertainty only in
 * sourceNote.
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

test("Videotron offers no longer claim a modem fee (gateway confirmed free)", () => {
  const videotronOffers = internetData.internetOffers2026.filter((offer) => offer.fournisseur === "Videotron");
  assert.equal(videotronOffers.length, 2);
  for (const offer of videotronOffers) {
    assert.equal(offer.modemInclus, true, "Videotron gateway is confirmed included at no charge");
    assert.equal(offer.fraisModem, undefined, "no modem fee should be published for Videotron");
    assert.equal(offer.contrat, false, "Videotron plans are confirmed contract-free");
  }
});

test("Videotron '500' offer matches the WhistleOut-confirmed spec, not the stale 400/20 @ $69 or the half-corrected 500/20 @ $69", () => {
  const offer = internetData.internetOffers2026.find(
    (o) => o.fournisseur === "Videotron" && o.vitesseDL === 500
  );
  assert.ok(offer, "expected a Videotron 500 Mbps offer");
  assert.equal(offer.type, "Fibre", "WhistleOut categorizes Videotron Internet 500 under Fiber");
  assert.equal(offer.vitesseUL, 50, "WhistleOut confirms 500/50 Mbps, not the stale 20 Mbps upload");
  assert.equal(offer.prix, 75, "WhistleOut + convergent aggregators confirm $75/month, not the stale $69");
  assert.notEqual(offer.vitesseUL, 20, "20 Mbps upload was the unconfirmed legacy value rejected by independent review");
  assert.notEqual(offer.prix, 69, "$69 was the unconfirmed legacy price rejected by independent review");
});

test("Videotron GIGA offer matches the WhistleOut-confirmed spec, not the stale symmetric 1000/1000 @ $89", () => {
  const offer = internetData.internetOffers2026.find(
    (o) => o.fournisseur === "Videotron" && o.vitesseDL === 1000
  );
  assert.ok(offer, "expected a Videotron GIGA (1000 Mbps) offer");
  assert.equal(offer.type, "Fibre");
  assert.equal(offer.vitesseUL, 50, "WhistleOut confirms GIGA is 940/50 Mbps (asymmetric), not a symmetric 1000/1000 — symmetric upload is only confirmed for the higher '2 GIGA'/'2.5 GIGA' tiers");
  assert.equal(offer.prix, 80, "WhistleOut + convergent aggregators confirm $80/month, not the stale $89");
  assert.notEqual(offer.vitesseUL, 1000, "a fully symmetric 1000 Mbps upload was the unconfirmed legacy value rejected by independent review");
  assert.notEqual(offer.prix, 89, "$89 was the unconfirmed legacy price rejected by independent review");
});

test("no Videotron offer keeps the 400 Mbps tier that does not exist in the current confirmed lineup", () => {
  const videotronOffers = internetData.internetOffers2026.filter((offer) => offer.fournisseur === "Videotron");
  for (const offer of videotronOffers) {
    assert.notEqual(offer.vitesseDL, 400, "400 Mbps is not a current confirmed Videotron tier (100/500/GIGA/2 GIGA/2.5 GIGA)");
  }
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

test("internet-offers-2026 freshness metadata documents the 3rd revalidation pass honestly, not a mechanical bump", () => {
  const meta = internetData.internetComparatorUi2026.meta;
  assert.equal(meta.status, "estimate", "no offer was confirmed against an official source, so status must not be promoted to official");
  assert.match(meta.sourceNote, /issue #47/);
  assert.match(meta.sourceNote, /EGRESS_BLOCKED/);
  assert.match(meta.sourceNote, /Cogeco/);
  assert.match(meta.sourceNote, /WhistleOut/);
  assert.match(meta.sourceNote, /termesVerifies/);
  assert.equal(meta.criticality, "medium");
  assert.equal(meta.reviewCadence, "monthly");
});

test("internet-offers-2026 freshness metadata documents the 4th revalidation pass (issue #76) honestly: no invented price, nextReviewAt tightened rather than pushed out", () => {
  const meta = internetData.internetComparatorUi2026.meta;
  assert.equal(meta.lastUpdated, "2026-09-04");
  assert.equal(meta.nextReviewAt, "2026-09-25", "most claims stayed unverified this pass, so nextReviewAt must be brought closer, never pushed further out mechanically");
  assert.match(meta.sourceNote, /issue #76/);
  assert.match(meta.sourceNote, /non verifi\w* avec confiance/i);
  assert.match(meta.sourceNote, /RAPPROCHEE/, "the note must document that nextReviewAt was brought closer, not pushed out");
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
