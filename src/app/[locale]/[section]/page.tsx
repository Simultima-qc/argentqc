import { notFound } from "next/navigation";
import LocalizedHubPage from "@/components/LocalizedHubPage";
import { getHubDictionary, localizedHubRouteKeys } from "@/i18n/hubs";
import { buildPageMetadata } from "@/lib/seo";
import { getRouteKeyForLocalizedSegment, getRoutePath, isLocale, locales, type Locale } from "@/i18n/routing";

// Hub pages are editorial and should be served from the static cache on traffic/RSC prefetch.
export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    localizedHubRouteKeys.map((routeKey) => ({
      locale,
      section: getRoutePath(locale, routeKey).split("/").filter(Boolean)[1],
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const routeKey = getRouteKeyForLocalizedSegment(locale, section);
  if (!routeKey || !localizedHubRouteKeys.includes(routeKey as (typeof localizedHubRouteKeys)[number])) {
    return {};
  }

  const dictionary = getHubDictionary(locale, routeKey as (typeof localizedHubRouteKeys)[number]);
  return buildPageMetadata({
    locale,
    routeKey,
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  });
}

export default async function LocalizedHubRoute({
  params,
}: {
  params: Promise<{ locale: Locale; section: string }>;
}) {
  const { locale, section } = await params;
  const routeKey = getRouteKeyForLocalizedSegment(locale, section);

  if (!routeKey || !localizedHubRouteKeys.includes(routeKey as (typeof localizedHubRouteKeys)[number])) {
    notFound();
  }

  return (
    <LocalizedHubPage
      locale={locale}
      dictionary={getHubDictionary(locale, routeKey as (typeof localizedHubRouteKeys)[number])}
    />
  );
}
