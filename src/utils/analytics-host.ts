/**
 * Garde production GA4 (issue #103).
 *
 * La propriété GA4 de production (`G-EHYFT9BFCN`) ne doit recevoir de trafic
 * que depuis le site servi sur `argentqc.ca`. Sur `localhost`, les previews
 * Netlify (`deploy-preview-*.netlify.app`, `*.netlify.app`) et les exécutions
 * Playwright/CI, la garde empêche toute injection du tag et tout hit.
 *
 * Règle fonctionnelle : `window.location.hostname === "argentqc.ca"`.
 * Point de vérité unique — le hostname et le Measurement ID vivent ici et sont
 * consommés par `src/app/layout.tsx` (bootstrap du tag) et par
 * `src/utils/analytics.ts` (émission d'événements).
 */
export const PRODUCTION_ANALYTICS_HOSTNAME = "argentqc.ca";

export const GA4_MEASUREMENT_ID = "G-EHYFT9BFCN";

/**
 * `true` uniquement lorsque le hostname runtime est exactement la production.
 *
 * @param hostname Hostname explicite (tests). Par défaut : `window.location.hostname`
 *                 côté navigateur, `undefined` côté serveur.
 */
export function isProductionAnalyticsHost(hostname?: string): boolean {
  const host =
    hostname ??
    (typeof window !== "undefined" ? window.location.hostname : undefined);

  return host === PRODUCTION_ANALYTICS_HOSTNAME;
}

/**
 * Source JS du bootstrap GA4 inline, injectée dans `<head>` par
 * `src/app/layout.tsx` via `next/script`.
 *
 * Sur un hostname non production : early-return — `window.gtag` reste indéfini,
 * `gtag.js` n'est jamais requis, aucun hit ne peut partir (les helpers de
 * `analytics.ts` deviennent alors no-op).
 *
 * Sur `argentqc.ca` : initialise `dataLayer` + `window.gtag`, appelle
 * `gtag('config', GA4_MEASUREMENT_ID)` et injecte `gtag.js` — comportement
 * identique au snippet GA4 historique.
 *
 * Exporté comme chaîne (et non exécuté ici) pour être testable de bout en bout
 * sans dépendre du rendu de `layout.tsx` (cf. `tests/analytics-host.test.mjs`).
 *
 * `PRODUCTION_ANALYTICS_HOSTNAME` et `GA4_MEASUREMENT_ID` ne contiennent ni
 * apostrophe ni retour de ligne : l'interpolation en littéral simple-quote est
 * sûre (et évite l'échappement `&quot;` de `next/script` dans le HTML servi).
 */
export function buildAnalyticsBootstrapScript(): string {
  const q = (value: string) => `'${value}'`;
  const gtagSrc = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;

  return `(function () {
  if (window.location.hostname !== ${q(PRODUCTION_ANALYTICS_HOSTNAME)}) return;
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', ${q(GA4_MEASUREMENT_ID)});
  var s = document.createElement('script');
  s.async = true;
  s.src = ${q(gtagSrc)};
  document.head.appendChild(s);
})();`;
}
