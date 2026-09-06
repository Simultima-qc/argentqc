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

/**
 * Exécute le bootstrap GA4 exact de `layout.tsx` (chaîne produite par
 * `buildAnalyticsBootstrapScript()`) dans un DOM factice. Le sandbox vm EST
 * l'objet `window` (comme dans un navigateur), donc `window`, `document` et
 * `dataLayer` s'y résolvent globalement.
 */
function runBootstrap(hostname) {
  const injected = [];
  const win = {
    location: { hostname },
    document: {
      createElement: () => ({ async: false, src: "" }),
      head: { appendChild: (el) => injected.push(el) },
    },
  };
  win.window = win;
  vm.createContext(win);
  vm.runInContext(buildAnalyticsBootstrapScript(), win);
  return { win, injected };
}

// -- 1. Helper pur -----------------------------------------------------------

const {
  isProductionAnalyticsHost,
  PRODUCTION_ANALYTICS_HOSTNAME,
  GA4_MEASUREMENT_ID,
  buildAnalyticsBootstrapScript,
} = loadAnalyticsHost();

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

// -- 3. Bootstrap du tag (src/app/layout.tsx) ---------------------------------

test("bootstrap: sur argentqc.ca, le tag GA4 est réellement chargé", () => {
  const { win, injected } = runBootstrap(PRODUCTION_ANALYTICS_HOSTNAME);

  // 1) window.gtag défini
  assert.equal(typeof win.gtag, "function", "window.gtag doit être défini en production");

  // 2) gtag('js', Date) puis gtag('config', <measurement id>)
  const calls = win.dataLayer.map((args) => Array.from(args));
  assert.deepEqual(calls[0].slice(0, 1), ["js"]);
  // `Date` vient d'un autre realm vm -> pas d'`instanceof`, on vérifie le tag.
  assert.equal(Object.prototype.toString.call(calls[0][1]), "[object Date]", "gtag('js', new Date())");
  assert.deepEqual(calls[1], ["config", GA4_MEASUREMENT_ID]);

  // 3) gtag.js réellement injecté, async, avec le bon Measurement ID
  assert.equal(injected.length, 1, "exactement un <script> gtag.js injecté");
  assert.equal(injected[0].async, true);
  assert.equal(
    injected[0].src,
    `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
  );
});

for (const hostname of ["localhost", "127.0.0.1", "deploy-preview-3--argentqc.netlify.app", "www.argentqc.ca"]) {
  test(`bootstrap: sur ${hostname}, aucun effet GA4 (early-return)`, () => {
    const { win, injected } = runBootstrap(hostname);

    assert.equal(win.gtag, undefined, "window.gtag doit rester indéfini");
    assert.equal(win.dataLayer, undefined, "dataLayer ne doit pas être initialisé");
    assert.equal(injected.length, 0, "gtag.js ne doit jamais être injecté");
  });
}

test("bootstrap: le Measurement ID production reste G-EHYFT9BFCN (inchangé)", () => {
  assert.equal(GA4_MEASUREMENT_ID, "G-EHYFT9BFCN");
});
