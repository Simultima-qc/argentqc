import type { Metadata } from "next";
import type { Locale, RouteKey } from "@/i18n/routing";
import { getAlternateLinks, getLocalizedUrl } from "@/i18n/routing";
import { siteUrl } from "@/data/seo-pages";

interface MetadataInput {
  locale: Locale;
  routeKey: RouteKey;
  title: string;
  description: string;
  index?: boolean;
}

export function buildPageMetadata({
  locale,
  routeKey,
  title,
  description,
  index = true,
}: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: getLocalizedUrl(locale, routeKey, siteUrl),
      languages: getAlternateLinks(routeKey, siteUrl),
    },
    robots: index
      ? undefined
      : {
          index: false,
          follow: false,
        },
  };
}
