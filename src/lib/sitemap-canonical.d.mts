export type CanonicalValue =
  | string
  | URL
  | { url: string | URL }
  | null
  | undefined;

export function canonicalUrlValue(canonical: CanonicalValue): string | null;

export function getArticleSitemapUrl(input: {
  slug: string;
  canonical: CanonicalValue;
  siteUrl: string;
}): string | null;
