export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];
export type RouteKey =
  | "home"
  | "questionnaire"
  | "results"
  | "budget"
  | "budgetCalculator"
  | "budgetCostOfLiving"
  | "budgetHousingAllowance"
  | "budgetSolidarityCredit"
  | "taxes"
  | "taxesDeadlines"
  | "taxesSoftware"
  | "taxesRefund"
  | "retirement"
  | "retirementFhsa"
  | "retirementRrq"
  | "retirementRrsp"
  | "retirementRrspTransfer"
  | "retirementTfsa"
  | "insurance"
  | "insuranceAuto"
  | "insuranceComparator"
  | "insuranceHome"
  | "insuranceLife"
  | "internet"
  | "internetComparator"
  | "moving"
  | "movingChecklist"
  | "movingCost"
  | "movingMontreal";

export const defaultLocale: Locale = "fr";
export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
};

const routeSegments: Record<RouteKey, Record<Locale, string>> = {
  home: { fr: "", en: "" },
  questionnaire: { fr: "questionnaire", en: "questionnaire" },
  results: { fr: "resultats", en: "resultats" },
  budget: { fr: "budget", en: "budget" },
  budgetCalculator: { fr: "budget/calculateur", en: "budget/calculator" },
  budgetCostOfLiving: { fr: "budget/cout-vie", en: "budget/cost-of-living" },
  budgetHousingAllowance: { fr: "budget/allocation-logement", en: "budget/housing-allowance" },
  budgetSolidarityCredit: { fr: "budget/credit-solidarite", en: "budget/solidarity-tax-credit" },
  taxes: { fr: "impots", en: "taxes" },
  taxesDeadlines: { fr: "impots/dates", en: "taxes/deadlines" },
  taxesSoftware: { fr: "impots/logiciels", en: "taxes/software" },
  taxesRefund: { fr: "impots/remboursement", en: "taxes/refund" },
  retirement: { fr: "retraite", en: "retirement" },
  retirementFhsa: { fr: "retraite/celiapp", en: "retirement/fhsa" },
  retirementRrq: { fr: "retraite/rrq", en: "retirement/qpp" },
  retirementRrsp: { fr: "retraite/reer", en: "retirement/rrsp" },
  retirementRrspTransfer: { fr: "retraite/transfert-reer", en: "retirement/rrsp-transfer" },
  retirementTfsa: { fr: "retraite/celi", en: "retirement/tfsa" },
  insurance: { fr: "assurances", en: "insurance" },
  insuranceAuto: { fr: "assurances/auto", en: "insurance/auto" },
  insuranceComparator: { fr: "assurances/comparateur", en: "insurance/comparator" },
  insuranceHome: { fr: "assurances/habitation", en: "insurance/home" },
  insuranceLife: { fr: "assurances/vie", en: "insurance/life" },
  internet: { fr: "internet", en: "internet" },
  internetComparator: { fr: "internet/comparateur", en: "internet/comparator" },
  moving: { fr: "demenagement", en: "moving" },
  movingChecklist: { fr: "demenagement/checklist", en: "moving/checklist" },
  movingCost: { fr: "demenagement/cout", en: "moving/cost" },
  movingMontreal: { fr: "demenagement/montreal", en: "moving/montreal" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getRoutePath(locale: Locale, routeKey: RouteKey): string {
  const segment = routeSegments[routeKey][locale];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function getLocalizedUrl(locale: Locale, routeKey: RouteKey, siteUrl: string): string {
  return `${siteUrl}${getRoutePath(locale, routeKey)}`;
}

export function getAlternateLinks(routeKey: RouteKey, siteUrl: string): Record<string, string> {
  return {
    "fr-CA": getLocalizedUrl("fr", routeKey, siteUrl),
    "en-CA": getLocalizedUrl("en", routeKey, siteUrl),
    "x-default": getLocalizedUrl(defaultLocale, routeKey, siteUrl),
  };
}

export function swapLocaleInPathname(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return getRoutePath(targetLocale, "home");
  }

  const maybeLocale = segments[0];
  if (!isLocale(maybeLocale)) {
    return pathname;
  }

  const rest = segments.slice(1).join("/");
  const routeKey = getRouteKeyFromLocalizedPath(maybeLocale, rest);

  if (routeKey) {
    return getRoutePath(targetLocale, routeKey);
  }

  return `/${targetLocale}${rest ? `/${rest}` : ""}`;
}

export function getRouteKeyFromLocalizedPath(locale: Locale, localizedPath: string): RouteKey | null {
  const normalizedPath = localizedPath.replace(/^\/+|\/+$/g, "");
  const match = (Object.entries(routeSegments) as Array<[RouteKey, Record<Locale, string>]>).find(
    ([, segmentsByLocale]) => segmentsByLocale[locale] === normalizedPath
  );

  return match?.[0] ?? null;
}

export function getRouteKeyForLocalizedSegment(locale: Locale, segment: string): RouteKey | null {
  return getRouteKeyFromLocalizedPath(locale, segment);
}
