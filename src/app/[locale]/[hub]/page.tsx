import { notFound } from "next/navigation";
import LocalizedHubPage from "@/components/LocalizedHubPage";
import { getHubDictionary, localizedHubRouteKeys } from "@/i18n/hubs";
import { getRouteKeyForLocalizedSegment, getRoutePath, isLocale, locales, type Locale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    localizedHubRouteKeys.map((routeKey) => ({
      locale,
      hub: getRoutePath(locale, routeKey).split("/").filter(Boolean)[1],
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; hub: string }>;
}) {
  const { locale, hub } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const routeKey = getRouteKeyForLocalizedSegment(locale, hub);
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
  params: Promise<{ locale: Locale; hub: string }>;
}) {
  const { locale, hub } = await params;
  const routeKey = getRouteKeyForLocalizedSegment(locale, hub);

  if (!routeKey || !localizedHubRouteKeys.includes(routeKey as (typeof localizedHubRouteKeys)[number])) {
    notFound();
  }

  return <LocalizedHubPage locale={locale} dictionary={getHubDictionary(locale, routeKey as (typeof localizedHubRouteKeys)[number])} />;
}
