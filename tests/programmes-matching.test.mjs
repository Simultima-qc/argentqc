import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { createRequire } from "node:module";
import ts from "typescript";
import vm from "node:vm";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const nodeRequire = createRequire(import.meta.url);
const moduleCache = new Map();

function loadProgrammesJson() {
  return JSON.parse(readFileSync(join(rootDir, "src", "data", "programmes.json"), "utf8"));
}

function toCommonJs(source, filePath) {
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      resolveJsonModule: true,
    },
    fileName: filePath,
  });

  return outputText;
}

function resolveAlias(request) {
  if (!request.startsWith("@/")) return null;
  return join(rootDir, "src", request.slice(2));
}

function resolveLocalModule(basePath) {
  const candidates = extname(basePath)
    ? [basePath]
    : [
        `${basePath}.ts`,
        `${basePath}.tsx`,
        `${basePath}.js`,
        `${basePath}.json`,
        join(basePath, "index.ts"),
        join(basePath, "index.tsx"),
      ];

  return candidates.find((candidate) => {
    try {
      readFileSync(candidate);
      return true;
    } catch {
      return false;
    }
  });
}

function createTestRequire(parentPath, stubs = {}) {
  return (request) => {
    if (request in stubs) return stubs[request];

    if (request === "@/data/finance-2026") {
      return { programmes2026: loadProgrammesJson() };
    }

    if (request === "@/data/programmes.json") {
      return loadProgrammesJson();
    }

    const aliasBase = resolveAlias(request);
    const relativeBase = request.startsWith(".") ? resolve(dirname(parentPath), request) : null;
    const localPath = aliasBase ? resolveLocalModule(aliasBase) : relativeBase ? resolveLocalModule(relativeBase) : null;

    if (localPath) return loadSourceModule(localPath, stubs);
    return nodeRequire(request);
  };
}

function loadSourceModule(filePath, stubs = {}) {
  const normalizedPath = normalize(filePath);
  if (moduleCache.has(normalizedPath)) return moduleCache.get(normalizedPath).exports;

  const compiledModule = { exports: {} };
  moduleCache.set(normalizedPath, compiledModule);

  if (extname(normalizedPath) === ".json") {
    compiledModule.exports = JSON.parse(readFileSync(normalizedPath, "utf8"));
    return compiledModule.exports;
  }

  const source = readFileSync(normalizedPath, "utf8");
  const outputText = toCommonJs(source, normalizedPath);
  const context = {
    exports: compiledModule.exports,
    module: compiledModule,
    require: createTestRequire(normalizedPath, stubs),
    URL,
    URLSearchParams,
    console,
    React,
  };

  vm.runInNewContext(outputText, context, { filename: normalizedPath });
  return compiledModule.exports;
}

function makeAnswers(overrides = {}) {
  return {
    province: "QC",
    statut_logement: "locataire",
    situation_familiale: "seul",
    enfants: false,
    revenu: "30000-50000",
    vehicule_elec: "non",
    renovation: false,
    retraite: false,
    age: "31-45",
    etudiant: false,
    ...overrides,
  };
}

function programmeIds(programmes) {
  return new Set(programmes.map((programme) => programme.id));
}

const { calculerTotal, evaluerRevenu, trouverProgrammes } = loadSourceModule(join(rootDir, "src", "lib", "matching.ts"));

const resultsPageModule = loadSourceModule(join(rootDir, "src", "components", "LocalizedResultsPage.tsx"), {
  "next/link": ({ href, children, ...props }) => React.createElement("a", { href, ...props }, children),
  "@/components/AnalyticsPageView": () => null,
  "@/components/LanguageSwitcher": () => null,
  "@/components/LeadCaptureForm": () => null,
  "@/components/ProgrammeListClient": () => null,
  "@/components/ShareResultsLink": () => null,
  "@/components/SiteFooter": () => null,
  "@/components/TrackingLink": ({ href, children, ...props }) => React.createElement("a", { href, ...props }, children),
  "@/i18n/programmes": { localizeProgramme: (programme) => programme },
  "@/i18n/routing": { getRoutePath: (_locale, route) => `/${route}` },
  "@/i18n/ui": { getCommonUiLabels: () => ({ languageSwitcher: "Language" }) },
  "@/lib/matching": {
    calculerTotal: () => ({ min: 0, max: 0 }),
    formaterArgent: (amount) => String(amount),
    trouverProgrammes: () => [],
  },
});

const { getConfidenceTier, getHeroRowDisplay, getProgrammeReason, sortProgrammesForTopPistes } = resultsPageModule;

test("programmes.json catalogue structure is valid", () => {
  const programmes = loadProgrammesJson();
  const ids = new Set();

  for (const programme of programmes) {
    assert.equal(typeof programme.id, "string", "id must be present");
    assert.ok(!ids.has(programme.id), `duplicate programme id: ${programme.id}`);
    ids.add(programme.id);

    if (programme.montant_sommable === false) {
      assert.ok(programme.montant_max >= 0, `${programme.id}: non-summable montant_max must not be negative`);
    } else {
      assert.ok(programme.montant_max > 0, `${programme.id}: montant_max must be greater than 0`);
    }
    if (programme.montant_min !== undefined) {
      assert.ok(
        programme.montant_min <= programme.montant_max,
        `${programme.id}: montant_min must be <= montant_max`,
      );
    }

    assert.equal(typeof programme.lien_officiel, "string", `${programme.id}: lien_officiel is required`);
    assert.doesNotThrow(() => new URL(programme.lien_officiel), `${programme.id}: lien_officiel must be a valid URL`);
  }
});

test("trouverProgrammes matches a homeowner with children", () => {
  const ids = programmeIds(trouverProgrammes(makeAnswers({
    statut_logement: "proprietaire",
    situation_familiale: "famille",
    enfants: true,
    revenu: "50000-75000",
    renovation: true,
  })));

  assert.ok(ids.has("ace-fed"));
  assert.ok(ids.has("irapvf-qc"));
  assert.ok(ids.has("renoclimat-qc"));
  assert.ok(ids.has("credit-frais-garde-qc"));
});

test("trouverProgrammes matches a low-income renter", () => {
  const ids = programmeIds(trouverProgrammes(makeAnswers({
    statut_logement: "locataire",
    revenu: "0-30000",
  })));

  assert.ok(ids.has("credit-tps-fed"));
  assert.ok(ids.has("credit-loyer-qc"));
  assert.ok(ids.has("allocation-logement-qc"));
  assert.ok(ids.has("supplement-loyer-shq"));
});

test("allocation-logement-qc matches an eligible low-income owner-occupier, not just renters (issue #81)", () => {
  const ids = programmeIds(trouverProgrammes(makeAnswers({
    statut_logement: "proprietaire",
    revenu: "0-30000",
  })));

  assert.ok(
    ids.has("allocation-logement-qc"),
    "a low-income owner-occupier must not be silently excluded: the program covers owners as well as renters, so the catalogue's criteres must not carry a locataire-only filter",
  );
});

test("trouverProgrammes matches a retiree", () => {
  const matched = trouverProgrammes(makeAnswers({
    statut_logement: "proprietaire",
    revenu: "0-30000",
    retraite: true,
    age: "65+",
  }));
  const ids = programmeIds(matched);

  assert.ok(ids.has("sre-fed"));
  assert.ok(ids.has("psv-fed"));
  assert.ok(ids.has("rrq-rentes-qc"));
  assert.ok(ids.has("credit-maintien-qc"));

  // issue #58: credit-maintien-qc requires age_min 70, but "65+" also covers
  // 65-69. The bucket is surfaced as a lead but must not be a certain match.
  const creditMaintien = matched.find((programme) => programme.id === "credit-maintien-qc");
  assert.equal(creditMaintien.admissibiliteAgeIncertaine, true);
});

// issue #58: age bucketing regression matrix.
//
// programme                     | borne réelle  | tranche   | avant (parseAge)          | après
// credit-maintien-qc            | age_min 70    | 65+       | admissible certain (faux+) | incertain
// rqap-assurance-parentale-qc   | age_max 50    | 46-65     | exclu certain (faux-)      | incertain, toujours visible
// adaptation-domicile-shq       | age_min 55    | 46-65     | admissible certain (faux+) | incertain
// aide-retour-region-bourse-qc  | age_max 40    | 31-45     | admissible certain (faux+) | incertain
// aide-retour-region-bourse-qc  | age_max 40    | 46-65     | exclu (déjà correct)       | exclu (inchangé)
// aide-formation-adultes-qc     | age_min 24    | 31-45     | admissible (déjà correct)  | admissible certain (inchangé)
// aide-formation-adultes-qc     | age_min 24    | 18-30     | admissible certain (faux+) | incertain

test("credit-maintien-qc (age_min 70): a 65+ user is flagged uncertain, not certainly eligible (issue #58)", () => {
  const matched = trouverProgrammes(makeAnswers({ age: "65+", retraite: true, revenu: "0-30000" }));
  const programme = matched.find((p) => p.id === "credit-maintien-qc");

  assert.ok(programme, "credit-maintien-qc must still surface as a lead for a 65+ user");
  assert.equal(programme.admissibiliteAgeIncertaine, true);
});

test("rqap-assurance-parentale-qc (age_max 50): a 46-65 user is no longer wrongly excluded (issue #53/#58)", () => {
  const matchedWithOverlap = trouverProgrammes(makeAnswers({ age: "46-65", statut_logement: "locataire", enfants: true }));
  assert.ok(
    programmeIds(matchedWithOverlap).has("rqap-assurance-parentale-qc"),
    "a user aged 46-50 within the 46-65 bucket must not be excluded by the representative age 55",
  );

  const rqap = matchedWithOverlap.find((p) => p.id === "rqap-assurance-parentale-qc");
  assert.equal(rqap.admissibiliteAgeIncertaine, true);
  // Already preselection_only/non-summable: presentation as a lead is unaffected.
  assert.equal(rqap.preselection_only, true);
});

test("adaptation-domicile-shq (age_min 55, intermediate): 46-65 overlap is uncertain, not a certain match (issue #58)", () => {
  const matched = trouverProgrammes(makeAnswers({ age: "46-65", statut_logement: "proprietaire", renovation: true }));
  const programme = matched.find((p) => p.id === "adaptation-domicile-shq");

  assert.ok(programme, "must still surface as a lead");
  assert.equal(programme.admissibiliteAgeIncertaine, true);
});

test("aide-retour-region-bourse-qc (age_max 40, intermediate): overlapping, fully-eligible and fully-excluded buckets (issue #58)", () => {
  // 31-45 overlaps the age_max 40 boundary (31-40 pass, 41-45 fail): uncertain, not a certain match.
  const overlap = trouverProgrammes(makeAnswers({ age: "31-45", etudiant: true }));
  const overlapProgramme = overlap.find((p) => p.id === "aide-retour-region-bourse-qc");
  assert.ok(overlapProgramme, "must still surface as a lead for the overlapping bucket");
  assert.equal(overlapProgramme.admissibiliteAgeIncertaine, true);

  // 46-65 is entirely above 40: a certain exclusion, correctly absent from results.
  const excluded = trouverProgrammes(makeAnswers({ age: "46-65", etudiant: true }));
  assert.ok(
    !programmeIds(excluded).has("aide-retour-region-bourse-qc"),
    "a bucket entirely past the age_max boundary must remain a certain exclusion",
  );
});

test("aide-formation-adultes-qc (age_min 24): a fully-eligible bucket stays a certain match, an overlapping bucket does not (issue #58)", () => {
  // 31-45 is entirely above 24: a certain match, unaffected by this fix.
  const fullyEligible = trouverProgrammes(makeAnswers({ age: "31-45", etudiant: true }));
  const fullyEligibleProgramme = fullyEligible.find((p) => p.id === "aide-formation-adultes-qc");
  assert.ok(fullyEligibleProgramme);
  assert.equal(fullyEligibleProgramme.admissibiliteAgeIncertaine, undefined);

  // 18-30 overlaps the age_min 24 boundary (18-23 fail, 24-30 pass): uncertain.
  const overlap = trouverProgrammes(makeAnswers({ age: "18-30", etudiant: true }));
  const overlapProgramme = overlap.find((p) => p.id === "aide-formation-adultes-qc");
  assert.ok(overlapProgramme, "must still surface as a lead for the overlapping bucket");
  assert.equal(overlapProgramme.admissibiliteAgeIncertaine, true);
});

test("calculerTotal excludes programmes whose age eligibility is uncertain, even when montant_sommable is not false (issue #58)", () => {
  const matched = trouverProgrammes(makeAnswers({ age: "65+", retraite: true, revenu: "0-30000" }));
  const creditMaintien = matched.find((p) => p.id === "credit-maintien-qc");
  assert.ok(creditMaintien);
  assert.notEqual(creditMaintien.montant_sommable, false, "precondition: this programme is summable by default");
  assert.equal(creditMaintien.admissibiliteAgeIncertaine, true);

  const totalWithout = calculerTotal(matched.filter((p) => p.id !== "credit-maintien-qc"));
  const totalWith = calculerTotal(matched);

  assert.deepEqual(
    totalWith,
    totalWithout,
    "an age-uncertain programme's montant must not inflate the presented total",
  );
});

test("getHeroRowDisplay does not present an age-uncertain programme as a confirmed amount (issue #58, PR #59 review)", () => {
  const verifierLabel = "À vérifier";

  const uncertain = getHeroRowDisplay({ montant_affiche: "Jusqu'à 6 000 $", admissibiliteAgeIncertaine: true }, verifierLabel);
  assert.equal(uncertain.icon, "?");
  assert.equal(uncertain.value, verifierLabel, "must not display the programme's montant_affiche as if it were certain");
  assert.notEqual(uncertain.value, "Jusqu'à 6 000 $");

  const certain = getHeroRowDisplay({ montant_affiche: "Jusqu'à 6 000 $", admissibiliteAgeIncertaine: false }, verifierLabel);
  assert.equal(certain.icon, "✓");
  assert.equal(certain.value, "Jusqu'à 6 000 $");
});

test("getProgrammeReason surfaces the age-uncertainty reason even for a preselection_only programme (issue #58, PR #59 review)", () => {
  const rqapLikeAndAgeUncertain = {
    preselection_only: true,
    admissibiliteAgeIncertaine: true,
    criteres: {},
  };

  const reasonFr = getProgrammeReason(rqapLikeAndAgeUncertain, makeAnswers(), "fr");
  assert.match(reasonFr, /tranche d'âge/i, "the age-overlap reason must take priority over the generic preselection_only reason");

  const reasonEn = getProgrammeReason(rqapLikeAndAgeUncertain, makeAnswers(), "en");
  assert.match(reasonEn, /age range/i);
});

test("RRQ remains an orientation-only, non-summable lead", () => {
  const programmes = loadProgrammesJson();
  const rrq = programmes.find((programme) => programme.id === "rrq-rentes-qc");

  assert.ok(rrq);
  assert.equal(rrq.preselection_only, true);
  assert.equal(rrq.montant_sommable, false);
  assert.equal(rrq.montant_min, 0);
  assert.equal(rrq.montant_max, 0);
  assert.match(rrq.montant_affiche, /personnalisé/i);
  assert.equal(
    JSON.stringify(calculerTotal([rrq, { ...rrq, id: "summable", montant_sommable: true, montant_min: 100, montant_max: 200 }])),
    JSON.stringify({ min: 100, max: 200 }),
  );
});

test("RAP remains an orientation-only, non-summable lead", () => {
  const programmes = loadProgrammesJson();
  const rap = programmes.find((programme) => programme.id === "reer-subvention-fed");

  assert.ok(rap);
  assert.equal(rap.preselection_only, true);
  assert.equal(rap.montant_sommable, false);
  assert.equal(
    JSON.stringify(calculerTotal([rap, { ...rap, id: "summable", montant_sommable: true, montant_min: 100, montant_max: 200 }])),
    JSON.stringify({ min: 100, max: 200 }),
  );
});

test("RAP appears as a lead for a matching renter profile but is excluded from the total", () => {
  const matched = trouverProgrammes(makeAnswers({
    statut_logement: "locataire",
    revenu: "30000-50000",
  }));
  const ids = programmeIds(matched);

  assert.ok(ids.has("reer-subvention-fed"), "RAP should still surface as a lead for an eligible renter");

  const rap = matched.find((programme) => programme.id === "reer-subvention-fed");
  assert.equal(rap.preselection_only, true);
  assert.equal(rap.montant_sommable, false);

  const totalWithRap = calculerTotal(matched);
  const totalWithoutRap = calculerTotal(matched.filter((programme) => programme.id !== "reer-subvention-fed"));
  assert.deepEqual(totalWithRap, totalWithoutRap, "60 000 $ from RAP must not be added to the total");
});

test("trouverProgrammes matches a student", () => {
  const ids = programmeIds(trouverProgrammes(makeAnswers({
    age: "18-30",
    etudiant: true,
    revenu: "0-30000",
  })));

  assert.ok(ids.has("aides-etudiants-afe-qc"));
  assert.ok(ids.has("bourses-perspective-qc"));
  assert.ok(ids.has("subvention-canadienne-etudes-fed"));
  assert.ok(ids.has("credit-frais-scolarite-qc"));
});

test("municipal programmes are tiered as verifier and non-municipal programmes as principal", () => {
  assert.equal(getConfidenceTier({ niveau: "municipal" }), "verifier");
  assert.equal(getConfidenceTier({ niveau: "provincial" }), "principal");
  assert.equal(getConfidenceTier({ niveau: "federal" }), "principal");
  assert.equal(getConfidenceTier({ niveau: "provincial", preselection_only: true }), "verifier");
});

test("top pistes do not rank a verifier programme before an equivalent principal programme", () => {
  const ranked = sortProgrammesForTopPistes([
    { id: "municipal", tier: "verifier", montant_max: 5_000 },
    { id: "provincial", tier: "principal", montant_max: 5_000 },
    { id: "federal-higher", tier: "principal", montant_max: 10_000 },
  ]);

  assert.equal(JSON.stringify(ranked.map((programme) => programme.id)), JSON.stringify(["federal-higher", "provincial", "municipal"]));
});

test("ProgrammeListClient renders all programmes without pagination controls when count is below initialCount", () => {
  const { default: ProgrammeListClient } = loadSourceModule(join(rootDir, "src", "components", "ProgrammeListClient.tsx"), {
    "@/components/TrackedExternalLink": ({ href, children, ...props }) => React.createElement("a", { href, ...props }, children),
    "@/utils/analytics": { trackCtaClick: () => null },
  });

  const dictionary = {
    applyCta: "Apply",
    categoryLabels: { famille: "Family" },
    conditionsTitle: "Conditions",
    hideProgrammes: "Hide extra programmes",
    levelLabels: {
      federal: { label: "Federal", className: "" },
      municipal: { label: "Municipal", className: "" },
      provincial: { label: "Provincial", className: "" },
    },
    municipalNotice: "Municipal notice",
    programTierLabels: { principal: "Priority", verifier: "Verify" },
    showMoreProgrammes: "Show {count} more programmes",
    whyThisProgramLabel: "Why",
  };

  const programmes = [
    {
      id: "one",
      nom: "One",
      organisme: "Org",
      niveau: "provincial",
      categorie: "famille",
      montant_affiche: "100 $",
      montant_min: 100,
      montant_max: 100,
      description: "Description",
      conditions: ["Condition"],
      lien_officiel: "https://example.com/one",
      criteres: {},
      reason: "Reason",
      tier: "principal",
    },
    {
      id: "two",
      nom: "Two",
      organisme: "Org",
      niveau: "municipal",
      categorie: "famille",
      montant_affiche: "50 $",
      montant_min: 50,
      montant_max: 50,
      description: "Description",
      conditions: ["Condition"],
      lien_officiel: "https://example.com/two",
      criteres: {},
      reason: "Reason",
      tier: "verifier",
    },
  ];

  const html = renderToStaticMarkup(
    React.createElement(ProgrammeListClient, { programmes, dictionary, initialCount: 10 }),
  );

  assert.match(html, /One/);
  assert.match(html, /Two/);
  assert.doesNotMatch(html, /Show -?\d+ more programmes/);
  assert.doesNotMatch(html, /Hide extra programmes/);
});

test("closed federal/provincial programmes are not published as active (issue #51)", () => {
  const ids = programmeIds(loadProgrammesJson());

  assert.ok(
    !ids.has("canada-greener-homes-fed"),
    "canada-greener-homes-fed must stay removed: closed to new applicants since 2024-02 (issue #51 revalidation)",
  );
});

test("chauffez-vert-qc is scoped to the still-active dual-energy volet, not the closed mazout/propane volet (issue #51, PR #52 review)", () => {
  const programmes = loadProgrammesJson();
  const chauffezVert = programmes.find((programme) => programme.id === "chauffez-vert-qc");

  assert.ok(chauffezVert, "chauffez-vert-qc must be present: the biénergie électricité-gaz naturel volet remains active since 2026-04-01");
  assert.match(chauffezVert.nom, /bi[ée]nergie/i);
  assert.match(chauffezVert.description, /mazout|propane/i, "description must clarify the closed mazout/propane volet is distinct");
  assert.equal(chauffezVert.montant_max, 7400);
});

test("RQAP remains an orientation-only, non-summable lead (issue #51)", () => {
  const programmes = loadProgrammesJson();
  const rqap = programmes.find((programme) => programme.id === "rqap-assurance-parentale-qc");

  assert.ok(rqap);
  assert.equal(rqap.preselection_only, true);
  assert.equal(rqap.montant_sommable, false);
  assert.equal(rqap.montant_min, 0);
  assert.equal(rqap.montant_max, 0);
  assert.equal(
    JSON.stringify(calculerTotal([rqap, { ...rqap, id: "summable", montant_sommable: true, montant_min: 100, montant_max: 200 }])),
    JSON.stringify({ min: 100, max: 200 }),
  );
});

test("SV and SRG amounts match the governed securite-vieillesse/supplement-revenu-garanti ledgers (issue #51)", () => {
  const programmes = loadProgrammesJson();
  const psv = programmes.find((programme) => programme.id === "psv-fed");
  const sre = programmes.find((programme) => programme.id === "sre-fed");

  // Q3 2026 maxima per docs/claims/securite-vieillesse-quebec-2026.md and
  // docs/claims/supplement-revenu-garanti-2026.md: SV 827,17 $/mois (75 ans et plus),
  // SRG 1 123,17 $/mois (personne seule) -- annualized (x12).
  assert.equal(psv.montant_max, 9926);
  assert.equal(sre.montant_max, 13478);
});

test("RAP montant_max reflects the 60 000 $ limit raised by the April 2024 federal budget (issue #51)", () => {
  const programmes = loadProgrammesJson();
  const rap = programmes.find((programme) => programme.id === "reer-subvention-fed");

  assert.equal(rap.montant_max, 60000);
});

test("federal age/pension-income credits reflect the 14 % 2026 lowest tax bracket rate (issue #51)", () => {
  const programmes = loadProgrammesJson();
  const ageCredit = programmes.find((programme) => programme.id === "montant-personnes-agees-fed");
  const pensionCredit = programmes.find((programme) => programme.id === "credit-revenus-pension-fed");

  // Per docs/claims/impots-revenus-retraite-quebec-2026.md and
  // docs/claims/fractionnement-revenu-retraite-2026.md (already-governed sources reused
  // here, not re-audited): federal base 9 208 $ x 14 % ~= 1 289 $; 2 000 $ x 14 % = 280 $.
  assert.equal(ageCredit.montant_max, 1289);
  assert.equal(pensionCredit.montant_max, 280);
});

test("pension income splitting range matches the already-governed fractionnement ledger (issue #51)", () => {
  const programmes = loadProgrammesJson();
  const fractionnement = programmes.find((programme) => programme.id === "fractionnement-revenus-pension-fed");

  // docs/claims/fractionnement-revenu-retraite-2026.md: "économies typiques de 2 000 $ à 10 000 $ par année".
  assert.equal(fractionnement.montant_min, 2000);
  assert.equal(fractionnement.montant_max, 10000);
});

test("physical-work programmes require renovation:true and are excluded when the user has no renovation intent (issue #60)", () => {
  // issue #53 re-baseline (Finding C): these 5 programmes involve physical work
  // (isolation, appareil replacement, accessibility work, heat recovery installation,
  // gouttière disconnection) but were missing criteres.renovation: true, so they could
  // be matched and summed into the total even for a user who answered renovation: false.
  const renovationGatedIds = [
    "subv-isolation-munic",
    "chauffe-eau-efficace-hq",
    "accessibilite-domicile-munic",
    "recuperateur-chaleur-hq",
    "gouttiere-eaux-pluviales-munic",
  ];

  const programmes = loadProgrammesJson();
  for (const id of renovationGatedIds) {
    const programme = programmes.find((p) => p.id === id);
    assert.ok(programme, `${id}: must still exist in the catalogue`);
    assert.equal(programme.criteres.renovation, true, `${id}: must require criteres.renovation: true (issue #60)`);
  }

  const withoutRenovation = trouverProgrammes(makeAnswers({
    statut_logement: "proprietaire",
    renovation: false,
  }));
  const withoutRenovationIds = programmeIds(withoutRenovation);
  for (const id of renovationGatedIds) {
    assert.ok(
      !withoutRenovationIds.has(id),
      `${id}: must not be matched for a homeowner who answered renovation: false`,
    );
  }

  const withRenovation = trouverProgrammes(makeAnswers({
    statut_logement: "proprietaire",
    renovation: true,
  }));
  const withRenovationIds = programmeIds(withRenovation);
  for (const id of renovationGatedIds) {
    assert.ok(
      withRenovationIds.has(id),
      `${id}: must still be matched for a homeowner who answered renovation: true, when other criteria are satisfied`,
    );
  }

  // Already-correctly-scoped renovation programmes remain unchanged and unaffected.
  const alreadyGatedIds = [
    "renoclimat-qc",
    "logisvert-hydro",
    "chauffez-vert-qc",
    "aide-securite-domicile-munic",
    "reno-access-munic",
  ];
  for (const id of alreadyGatedIds) {
    const programme = programmes.find((p) => p.id === id);
    assert.ok(programme);
    assert.equal(programme.criteres.renovation, true, `${id}: must remain gated by renovation (unchanged)`);
    assert.ok(!withoutRenovationIds.has(id), `${id}: must not be matched for renovation: false`);
  }
});

test("programmes.json catalogue size is stable and every entry has a non-empty description (issue #51)", () => {
  const programmes = loadProgrammesJson();

  assert.equal(programmes.length, 84, "unexpected catalogue size change -- update this count deliberately if programmes were added/removed");

  for (const programme of programmes) {
    assert.ok(
      typeof programme.description === "string" && programme.description.trim().length > 0,
      `${programme.id}: description must not be empty`,
    );
  }
});

// issue #67: income bucketing regression tests.
//
// Same root cause as issue #58 (age), but for revenu_min/revenu_max: parseRevenu()
// used to collapse a questionnaire income bucket into a single fictitious
// representative value (15000/40000/62500/87500/120000) before comparing it to a
// programme's revenu_min/revenu_max. Whenever a threshold fell inside a bucket
// rather than on its boundary, that produced a certain (and wrong) admissible or
// excluded verdict. evaluerRevenu() now compares the bucket's real numeric interval
// to the threshold and returns "incertain" whenever the bucket overlaps it.

test("sre-fed (revenu_max 22000): the 0-30000 bucket is uncertain, not a certain match (issue #67)", () => {
  const matched = trouverProgrammes(makeAnswers({
    statut_logement: "proprietaire",
    revenu: "0-30000",
    retraite: true,
    age: "65+",
  }));
  const programme = matched.find((p) => p.id === "sre-fed");

  assert.ok(programme, "sre-fed must still surface as a lead for the 0-30000 bucket");
  assert.equal(programme.admissibiliteRevenuIncertaine, true);
});

test("allocation-sv-conjoint-survivant-fed (revenu_max 28000): the 0-30000 bucket is uncertain (issue #67)", () => {
  const matched = trouverProgrammes(makeAnswers({ revenu: "0-30000", retraite: true, age: "46-65" }));
  const programme = matched.find((p) => p.id === "allocation-sv-conjoint-survivant-fed");

  assert.ok(programme, "must still surface as a lead");
  assert.equal(programme.admissibiliteRevenuIncertaine, true);
});

test("aide-solidarite-qc (revenu_max 15000): the 0-30000 bucket is uncertain (issue #67)", () => {
  const matched = trouverProgrammes(makeAnswers({ revenu: "0-30000" }));
  const programme = matched.find((p) => p.id === "aide-solidarite-qc");

  assert.ok(programme, "must still surface as a lead");
  assert.equal(programme.admissibiliteRevenuIncertaine, true);
});

test("allocation-logement-qc (revenu_max 46640, issue #81): the 30000-50000 bucket is uncertain, no longer a false-negative exclusion (issue #67)", () => {
  const matched = trouverProgrammes(makeAnswers({
    statut_logement: "locataire",
    revenu: "30000-50000",
  }));
  const ids = programmeIds(matched);

  assert.ok(
    ids.has("allocation-logement-qc"),
    "a user earning 30 000-46 640 $ within the 30000-50000 bucket must no longer be silently excluded by the representative income of 40 000 $",
  );

  const programme = matched.find((p) => p.id === "allocation-logement-qc");
  assert.equal(programme.admissibiliteRevenuIncertaine, true);
});

test("allocation-travailleurs-fed (revenu_max 33000): the 30000-50000 bucket is uncertain (issue #67)", () => {
  const matched = trouverProgrammes(makeAnswers({ revenu: "30000-50000" }));
  const programme = matched.find((p) => p.id === "allocation-travailleurs-fed");

  assert.ok(programme, "must still surface as a lead");
  assert.equal(programme.admissibiliteRevenuIncertaine, true);
});

test("a threshold exactly on a bucket boundary produces a certain verdict on both sides (issue #67)", () => {
  // supplement-loyer-shq: revenu_max 30000, exactly the 0-30000 / 30000-50000 boundary.
  assert.equal(
    evaluerRevenu("0-30000", { revenu_max: 30000 }),
    "admissible",
    "a bucket entirely at or under the threshold must be a certain match",
  );
  assert.equal(
    evaluerRevenu("30000-50000", { revenu_max: 30000 }),
    "incertain",
    "the adjacent bucket still overlaps the threshold and must be uncertain",
  );
});

test("a bucket entirely under revenu_max is a certain admissible match (issue #67)", () => {
  // allocation-logement-qc: revenu_max 35000; the 0-30000 bucket is entirely under it.
  assert.equal(evaluerRevenu("0-30000", { revenu_max: 35000 }), "admissible");
});

test("a bucket entirely over revenu_max is a certain exclusion, and the programme is dropped from results (issue #67)", () => {
  assert.equal(evaluerRevenu("50000-75000", { revenu_max: 22000 }), "exclu");

  const matched = trouverProgrammes(makeAnswers({
    statut_logement: "proprietaire",
    revenu: "50000-75000",
    retraite: true,
    age: "65+",
  }));
  assert.ok(
    !programmeIds(matched).has("sre-fed"),
    "a bucket entirely past revenu_max must remain a certain exclusion, not just flagged uncertain",
  );
});

test("revenu_min alone: below, straddling and above the threshold (issue #67)", () => {
  const criteres = { revenu_min: 40000 };

  assert.equal(evaluerRevenu("0-30000", criteres), "exclu", "a bucket entirely under revenu_min must be excluded");
  assert.equal(evaluerRevenu("30000-50000", criteres), "incertain", "a bucket straddling revenu_min must be uncertain");
  assert.equal(evaluerRevenu("50000-75000", criteres), "admissible", "a bucket entirely over revenu_min must be a certain match");
});

test("revenu_max alone: below, straddling and above the threshold (issue #67)", () => {
  const criteres = { revenu_max: 60000 };

  assert.equal(evaluerRevenu("30000-50000", criteres), "admissible", "a bucket entirely under revenu_max must be a certain match");
  assert.equal(evaluerRevenu("50000-75000", criteres), "incertain", "a bucket straddling revenu_max must be uncertain");
  assert.equal(evaluerRevenu("75000-100000", criteres), "exclu", "a bucket entirely over revenu_max must be excluded");
});

test("revenu_min and revenu_max combined narrow the certain-admissible window (issue #67)", () => {
  const criteres = { revenu_min: 30000, revenu_max: 75000 };

  assert.equal(evaluerRevenu("0-30000", criteres), "incertain", "straddles revenu_min");
  assert.equal(evaluerRevenu("30000-50000", criteres), "admissible", "entirely within [revenu_min, revenu_max]");
  assert.equal(evaluerRevenu("50000-75000", criteres), "admissible", "entirely within [revenu_min, revenu_max]");
  assert.equal(evaluerRevenu("75000-100000", criteres), "incertain", "straddles revenu_max");
  assert.equal(evaluerRevenu("100000+", criteres), "exclu", "entirely past revenu_max");
});

test("calculerTotal excludes programmes whose income eligibility is uncertain (issue #67)", () => {
  const matched = trouverProgrammes(makeAnswers({
    statut_logement: "locataire",
    revenu: "30000-50000",
  }));
  const programme = matched.find((p) => p.id === "allocation-logement-qc");
  assert.ok(programme);
  assert.notEqual(programme.montant_sommable, false, "precondition: this programme is summable by default");
  assert.equal(programme.admissibiliteRevenuIncertaine, true);

  const totalWithout = calculerTotal(matched.filter((p) => p.id !== "allocation-logement-qc"));
  const totalWith = calculerTotal(matched);

  assert.deepEqual(
    totalWith,
    totalWithout,
    "an income-uncertain programme's montant must not inflate the presented total",
  );
});

test("age and income uncertainty coexist correctly on the same programme (issue #67)", () => {
  // sre-fed: age_min 65, revenu_max 22000. A "65+" / "0-30000" profile overlaps
  // both boundaries at once.
  const matched = trouverProgrammes(makeAnswers({
    statut_logement: "proprietaire",
    revenu: "0-30000",
    retraite: true,
    age: "65+",
  }));
  const programme = matched.find((p) => p.id === "sre-fed");

  assert.ok(programme, "must still surface as a lead");
  assert.equal(programme.admissibiliteAgeIncertaine, undefined, "sre-fed age_min 65 does not overlap the 65+ bucket");
  assert.equal(programme.admissibiliteRevenuIncertaine, true);

  const total = calculerTotal(matched);
  const totalWithoutSre = calculerTotal(matched.filter((p) => p.id !== "sre-fed"));
  assert.deepEqual(total, totalWithoutSre, "sre-fed must not be summed while income-uncertain");
});

test("revenu bucketing regression matrix: internal thresholds stay uncertain, not silently certain (issue #67, protects #66's 19 findings)", () => {
  const programmes = loadProgrammesJson();

  // Bucket in which each programme's revenu_max threshold falls strictly inside
  // (not on a bucket boundary). Issue #66 identified 19 such thresholds across the
  // catalogue; a future programme added with an internal threshold must also be
  // added here and must fail if it silently regresses to a certain verdict.
  const internalThresholds = {
    "sre-fed": "0-30000",
    "aide-solidarite-qc": "0-30000",
    "allocation-logement-qc": "30000-50000",
    "aide-urgence-logement-qc": "0-30000",
    "hlm-logement-social-qc": "0-30000",
    "renoregion-shq": "30000-50000",
    "prafr-shq": "0-30000",
    "allocation-travailleurs-fed": "30000-50000",
    "credit-aidant-naturel-qc": "50000-75000",
    "credit-aidant-naturel-fed": "50000-75000",
    "aide-premier-achat-municipal-qc": "75000-100000",
    "allocation-sv-conjoint-survivant-fed": "0-30000",
    "aide-energie-faible-revenu-hq": "30000-50000",
    "acces-loisirs-qc": "30000-50000",
    "aide-alimentaire-scolaire-qc": "30000-50000",
    "bourse-recherche-grad-fed": "50000-75000",
    "cooperative-habitation-qc": "50000-75000",
    "aide-locataire-munic": "30000-50000",
    "programme-objectif-emploi-qc": "0-30000",
  };

  assert.equal(
    Object.keys(internalThresholds).length,
    19,
    "regression matrix must cover exactly the 19 internal thresholds identified by issue #66",
  );

  for (const [id, tranche] of Object.entries(internalThresholds)) {
    const programme = programmes.find((p) => p.id === id);
    assert.ok(programme, `${id}: must exist in the catalogue`);
    assert.equal(
      evaluerRevenu(tranche, programme.criteres),
      "incertain",
      `${id}: tranche ${tranche} overlaps revenu_max=${programme.criteres.revenu_max} and must be uncertain, not a certain match`,
    );
  }

  // The remaining catalogue thresholds sit exactly on a bucket boundary: the
  // bucket below is a certain match, the bucket above overlaps and is uncertain.
  const boundaryThresholds = {
    "supplement-loyer-shq": { below: "0-30000", above: "30000-50000" },
    "tarif-reduit-transport-munic": { below: "0-30000", above: "30000-50000" },
    "subvention-canadienne-etudes-fed": { below: "30000-50000", above: "50000-75000" },
    "prog-regional-hab-qc": { below: "30000-50000", above: "50000-75000" },
  };

  for (const [id, { below, above }] of Object.entries(boundaryThresholds)) {
    const programme = programmes.find((p) => p.id === id);
    assert.ok(programme, `${id}: must exist in the catalogue`);
    assert.equal(
      evaluerRevenu(below, programme.criteres),
      "admissible",
      `${id}: tranche ${below} sits entirely under revenu_max=${programme.criteres.revenu_max} and must be a certain match`,
    );
    assert.equal(
      evaluerRevenu(above, programme.criteres),
      "incertain",
      `${id}: tranche ${above} overlaps revenu_max=${programme.criteres.revenu_max} and must be uncertain`,
    );
  }

  const withRevenu = programmes.filter(
    (p) => p.criteres.revenu_min !== undefined || p.criteres.revenu_max !== undefined,
  );
  assert.equal(
    withRevenu.length,
    Object.keys(internalThresholds).length + Object.keys(boundaryThresholds).length,
    "unexpected number of programmes with a revenu criterion -- update this regression matrix deliberately if programmes were added/removed",
  );
});

test("getHeroRowDisplay does not present an income-uncertain programme as a confirmed amount (issue #67)", () => {
  const verifierLabel = "À vérifier";

  const uncertain = getHeroRowDisplay({ montant_affiche: "Jusqu'à 1 000 $", admissibiliteRevenuIncertaine: true }, verifierLabel);
  assert.equal(uncertain.icon, "?");
  assert.equal(uncertain.value, verifierLabel);
  assert.notEqual(uncertain.value, "Jusqu'à 1 000 $");
});

test("getConfidenceTier demotes an income-uncertain programme to verifier (issue #67)", () => {
  assert.equal(getConfidenceTier({ niveau: "federal", admissibiliteRevenuIncertaine: true }), "verifier");
  assert.equal(getConfidenceTier({ niveau: "federal", admissibiliteRevenuIncertaine: false }), "principal");
});

test("getProgrammeReason surfaces the income-uncertainty reason, including for preselection_only programmes (issue #67)", () => {
  const revenuUncertain = {
    preselection_only: true,
    admissibiliteRevenuIncertaine: true,
    criteres: {},
  };

  const reasonFr = getProgrammeReason(revenuUncertain, makeAnswers(), "fr");
  assert.match(reasonFr, /tranche de revenu/i, "the income-overlap reason must take priority over the generic preselection_only reason");

  const reasonEn = getProgrammeReason(revenuUncertain, makeAnswers(), "en");
  assert.match(reasonEn, /income range/i);
});
