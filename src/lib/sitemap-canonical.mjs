export function canonicalUrlValue(canonical) {
  if (!canonical) {
    return null;
  }

  if (canonical instanceof URL) {
    return canonical.toString();
  }

  if (typeof canonical === "string") {
    return canonical;
  }

  if (typeof canonical === "object" && "url" in canonical) {
    return canonicalUrlValue(canonical.url);
  }

  return null;
}

export function getArticleSitemapUrl({ slug, canonical, siteUrl }) {
  const routeUrl = new URL(`/blog/${slug}`, siteUrl).toString();
  const canonicalValue = canonicalUrlValue(canonical);

  if (!canonicalValue) {
    return routeUrl;
  }

  const canonicalUrl = new URL(canonicalValue, siteUrl).toString();
  return canonicalUrl === routeUrl ? routeUrl : null;
}
