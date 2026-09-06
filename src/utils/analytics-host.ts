/**
 * Garde production GA4 (issue #103).
 *
 * La propriété GA4 de production (`G-EHYFT9BFCN`) ne doit recevoir de trafic
 * que depuis le site servi sur `argentqc.ca`. Sur `localhost`, les previews
 * Netlify (`deploy-preview-*.netlify.app`, `*.netlify.app`) et les exécutions
 * Playwright/CI, cette garde retourne `false` afin que ni le script `gtag.js`
 * ni les helpers de `analytics.ts` n'émettent le moindre hit.
 *
 * Règle fonctionnelle : `window.location.hostname === "argentqc.ca"`.
 * Point de vérité unique — importé à la fois par `src/app/layout.tsx`
 * (chargement du tag) et par `src/utils/analytics.ts` (émission d'événements).
 */
export const PRODUCTION_ANALYTICS_HOSTNAME = "argentqc.ca";

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
