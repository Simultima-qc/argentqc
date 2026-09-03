// Pure, dependency-free helpers for the inverse SEO registry gate (issue
// #39): detect a real src/app page route that is live and indexable but
// absent from the SEO registry (src/data/seo-pages.ts), instead of only
// checking that registered routes have a matching file.
//
// Everything here is plain, side-effect-free JavaScript on purpose, mirroring
// scripts/lib/claims-freshness.mjs: imported both by scripts/check-seo.mjs
// (the production gate) and by tests/route-registry.test.mjs, so "the code
// under test" and "the code that actually runs in CI/build" are the same
// functions. File contents and route paths are always received as
// parameters, never read from disk in here.

const DYNAMIC_SEGMENT_PATTERN = /\[[^\]]+\]/;
const PERMANENT_REDIRECT_PATTERN = /permanentRedirect\(/;
const NOINDEX_ROBOTS_PATTERN = /robots:\s*{\s*index:\s*false/;

// A dynamic App Router route (e.g. "/blog/[slug]", "/[locale]/[section]")
// has no fixed URL of its own to register in the SEO page-by-page registry.
export function isDynamicRoutePath(routePath) {
  return DYNAMIC_SEGMENT_PATTERN.test(routePath);
}

// A legacy route consolidated with permanentRedirect(...) never renders
// indexable content of its own: the redirect target is what search engines
// see and index, so the stub route does not need a registry entry.
export function isPermanentRedirectPage(source) {
  return PERMANENT_REDIRECT_PATTERN.test(source);
}

// A page whose metadata explicitly opts out of indexing (robots: { index:
// false, ... }) is not an indexable orphan by definition.
export function isNoindexPage(source) {
  return NOINDEX_ROBOTS_PATTERN.test(source);
}

/**
 * @param {{ routePath: string, source: string }[]} pages - every src/app
 *   page.tsx route, with its file content.
 * @param {Iterable<string>} registeredPaths - paths already covered by the
 *   SEO registry (seoPageDefinitions + blogIndexDefinition).
 * @param {Iterable<string>} [legitimateExceptions] - paths intentionally
 *   outside the registry but covered by another documented mechanism (e.g.
 *   a legal page listed directly in sitemap.ts).
 * @returns {string[]} route paths that are static, indexable, and missing
 *   from the registry - sorted for deterministic reporting.
 */
export function findUnregisteredIndexableRoutes({ pages, registeredPaths, legitimateExceptions = [] }) {
  const registered = new Set(registeredPaths);
  const exceptions = new Set(legitimateExceptions);

  return pages
    .filter(({ routePath }) => !isDynamicRoutePath(routePath))
    .filter(({ routePath }) => !registered.has(routePath))
    .filter(({ routePath }) => !exceptions.has(routePath))
    .filter(({ source }) => !isPermanentRedirectPage(source))
    .filter(({ source }) => !isNoindexPage(source))
    .map(({ routePath }) => routePath)
    .sort((a, b) => a.localeCompare(b));
}
