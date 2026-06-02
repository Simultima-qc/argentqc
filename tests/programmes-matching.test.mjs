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

const { trouverProgrammes } = loadSourceModule(join(rootDir, "src", "lib", "matching.ts"));

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

const { getConfidenceTier, sortProgrammesForTopPistes } = resultsPageModule;

test("programmes.json catalogue structure is valid", () => {
  const programmes = loadProgrammesJson();
  const ids = new Set();

  for (const programme of programmes) {
    assert.equal(typeof programme.id, "string", "id must be present");
    assert.ok(!ids.has(programme.id), `duplicate programme id: ${programme.id}`);
    ids.add(programme.id);

    assert.ok(programme.montant_max > 0, `${programme.id}: montant_max must be greater than 0`);
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

test("trouverProgrammes matches a retiree", () => {
  const ids = programmeIds(trouverProgrammes(makeAnswers({
    statut_logement: "proprietaire",
    revenu: "0-30000",
    retraite: true,
    age: "65+",
  })));

  assert.ok(ids.has("sre-fed"));
  assert.ok(ids.has("psv-fed"));
  assert.ok(ids.has("rrq-rentes-qc"));
  assert.ok(ids.has("credit-maintien-qc"));
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
