import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";
import vm from "node:vm";

// ---------------------------------------------------------------------------
// Issue #103 — garde production GA4.
// Prouve que le tag / les helpers analytics n'émettent un hit QUE sur
// `argentqc.ca` (production), et restent no-op sur localhost, previews
// Netlify et CI/Playwright.
// ---------------------------------------------------------------------------

function compile(relPath) {
  const source = readFileSync(new URL(relPath, import.meta.url), "utf8");
  return ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
}

/** Évalue du code CommonJS dans `sandbox` (contexte vm déjà créé). */
function evalCjs(sandbox, code, requireFn) {
  const mod = { exports: {} };
  const factory = vm.runInContext(
    `(function (module, exports, require) {\n${code}\n})`,
    sandbox
  );
  factory(mod, mod.exports, requireFn ?? (() => {
    throw new Error("require indisponible");
  }));
  return mod.exports;
}

function loadAnalyticsHost() {
  const sandbox = {}; // pas de `window` -> simule le rendu serveur
  vm.createContext(sandbox);
  return evalCjs(sandbox, compile("../src/utils/analytics-host.ts"));
}

/**
 * Charge `analytics.ts` avec un faux `window` (hostname configurable) et un
 * espion `window.gtag`. Retourne les helpers + le journal des appels gtag.
 */
function loadAnalytics(hostname) {
  const gtagCalls = [];
  const win = {
    location: { hostname, pathname: "/fr", search: "", origin: `https://${hostname}` },
    dataLayer: [],
    gtag: (...args) => gtagCalls.push(args),
    sessionStorage: {
      _s: new Map(),
      getItem(k) {
        return this._s.has(k) ? this._s.get(k) : null;
      },
      setItem(k, v) {
        this._s.set(k, String(v));
      },
    },
  };

  const sandbox = { window: win, URL };
  vm.createContext(sandbox);

  const host = evalCjs(sandbox, compile("../src/utils/analytics-host.ts"));
  const api = evalCjs(sandbox, compile("../src/utils/analytics.ts"), (spec) => {
    if (spec === "./analytics-host") return host;
    throw new Error(`Unexpected require: ${spec}`);
  });

  return { api, gtagCalls, win };
}

// -- 1. Helper pur -----------------------------------------------------------

const { isProductionAnalyticsHost, PRODUCTION_ANALYTICS_HOSTNAME } = loadAnalyticsHost();

test("PRODUCTION_ANALYTICS_HOSTNAME est le domaine apex de production", () => {
  assert.equal(PRODUCTION_ANALYTICS_HOSTNAME, "argentqc.ca");
});

test("isProductionAnalyticsHost: true uniquement pour argentqc.ca exact", () => {
  assert.equal(isProductionAnalyticsHost("argentqc.ca"), true);
});

test("isProductionAnalyticsHost: false sur localhost / 127.0.0.1", () => {
  assert.equal(isProductionAnalyticsHost("localhost"), false);
  assert.equal(isProductionAnalyticsHost("127.0.0.1"), false);
});

test("isProductionAnalyticsHost: false sur previews Netlify", () => {
  assert.equal(isProductionAnalyticsHost("deploy-preview-42--argentqc.netlify.app"), false);
  assert.equal(isProductionAnalyticsHost("argentqc.netlify.app"), false);
});

test("isProductionAnalyticsHost: false sur sous-domaines ou domaines voisins", () => {
  assert.equal(isProductionAnalyticsHost("www.argentqc.ca"), false);
  assert.equal(isProductionAnalyticsHost("staging.argentqc.ca"), false);
  assert.equal(isProductionAnalyticsHost("argentqc.ca.evil.com"), false);
});

test("isProductionAnalyticsHost: false quand window est absent (SSR)", () => {
  assert.equal(isProductionAnalyticsHost(), false);
});

// -- 2. Helpers analytics.ts ----------------------------------------------------

test("analytics.ts: no-op complet sur localhost", () => {
  const { api, gtagCalls } = loadAnalytics("localhost");

  api.trackCtaClick({ cta_name: "hero", cta_location: "home", destination: "/questionnaire" });
  api.trackQuestionnaireView({ locale: "fr" });
  api.trackQuestionnaireStep({ step_number: 1, question_name: "statut", locale: "fr" });
  api.trackQuestionnaireCompleted({ total_questions: 8, locale: "fr" });
  api.trackQuestionnaireAbandoned({ last_step: 2, locale: "fr" });
  api.trackResultsView({
    locale: "fr",
    matched_program_count: 3,
    estimated_total_min: 100,
    estimated_total_max: 900,
  });
  api.trackLeadCaptureSubmitted({ locale: "fr" });
  api.trackLeadCaptureSuccess({ locale: "fr" });
  api.trackLeadCaptureError({ locale: "fr" });

  assert.equal(gtagCalls.length, 0, "aucun hit GA4 ne doit partir sur localhost");
});

test("analytics.ts: no-op complet sur preview Netlify", () => {
  const { api, gtagCalls } = loadAnalytics("deploy-preview-7--argentqc.netlify.app");

  api.trackCtaClick({ cta_name: "hero", cta_location: "home", destination: "/questionnaire" });
  api.trackQuestionnaireView({ locale: "fr" });
  api.trackResultsView({
    locale: "fr",
    matched_program_count: 1,
    estimated_total_min: 0,
    estimated_total_max: 0,
  });

  assert.equal(gtagCalls.length, 0, "aucun hit GA4 ne doit partir sur une preview Netlify");
});

test("analytics.ts: émission autorisée sur argentqc.ca", () => {
  const { api, gtagCalls } = loadAnalytics("argentqc.ca");

  api.trackCtaClick({ cta_name: "hero", cta_location: "home", destination: "/questionnaire" });
  api.trackQuestionnaireView({ locale: "fr" });
  api.trackQuestionnaireCompleted({ total_questions: 8, locale: "fr" });

  assert.equal(gtagCalls.length, 3, "les 3 événements doivent être émis en production");
  assert.deepEqual(gtagCalls[0].slice(0, 2), ["event", "cta_click"]);
  assert.deepEqual(gtagCalls[1].slice(0, 2), ["event", "questionnaire_view"]);
  assert.deepEqual(gtagCalls[2].slice(0, 2), ["event", "questionnaire_completed"]);
});

test("analytics.ts: l'attribution funnel (sessionStorage) fonctionne même hors production", () => {
  const { api, win } = loadAnalytics("localhost");

  api.trackCtaClick({ cta_name: "hero", cta_location: "home", destination: "/fr/questionnaire" });

  // persistQuestionnaireSource ne dépend pas de GA4 : la navigation ne doit pas être cassée.
  assert.equal(win.sessionStorage.getItem("argentqc_cta_name"), "hero");
  assert.equal(win.sessionStorage.getItem("argentqc_cta_location"), "home");
});
