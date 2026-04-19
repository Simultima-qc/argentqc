import { notFound } from "next/navigation";
import { localizedSubguideRouteKeys, getBudgetCalculatorDictionary, getBudgetCostOfLivingDictionary, getInsuranceAutoDictionary, getInsuranceComparatorDictionary, getInsuranceHomeDictionary, getInsuranceLifeDictionary, getInternetComparatorDictionary, getMovingChecklistDictionary, getMovingCostDictionary, getMovingMontrealDictionary, getRetirementFhsaDictionary, getRetirementRrqDictionary, getRetirementRrspDictionary, getRetirementTfsaDictionary, getStaticSubguideDictionary, getTaxSoftwareDictionary } from "@/i18n/subguides";
import { getBudgetHousingAllowanceDictionary } from "@/i18n/budgetHousingAllowance";
import { getBudgetSolidarityCreditDictionary } from "@/i18n/budgetSolidarityCredit";
import { getRetirementRrspTransferDictionary } from "@/i18n/retirementRrspTransfer";
import { buildPageMetadata } from "@/lib/seo";
import { logCriticalRender, startServerTimer } from "@/lib/server-timing";
import { getRouteKeyFromLocalizedPath, getRoutePath, isLocale, locales, type Locale } from "@/i18n/routing";

// Stable guide content: prerender known bilingual pages and reuse cached RSC payloads.
export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    localizedSubguideRouteKeys.map((routeKey) => {
      const segments = getRoutePath(locale, routeKey).split("/").filter(Boolean);

      return {
        locale,
        section: segments[1],
        page: segments[2],
      };
    })
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string; page: string }>;
}) {
  const { locale, section, page } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const routeKey = getRouteKeyFromLocalizedPath(locale, `${section}/${page}`);
  if (!routeKey || !localizedSubguideRouteKeys.includes(routeKey as (typeof localizedSubguideRouteKeys)[number])) {
    return {};
  }

  if (routeKey === "budgetCalculator") {
    const dictionary = getBudgetCalculatorDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "budgetCostOfLiving") {
    const dictionary = getBudgetCostOfLivingDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "budgetHousingAllowance") {
    const dictionary = getBudgetHousingAllowanceDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "budgetSolidarityCredit") {
    const dictionary = getBudgetSolidarityCreditDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "internetComparator") {
    const dictionary = getInternetComparatorDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "taxesSoftware") {
    const dictionary = getTaxSoftwareDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "retirementRrq") {
    const dictionary = getRetirementRrqDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "retirementFhsa") {
    const dictionary = getRetirementFhsaDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "retirementRrsp") {
    const dictionary = getRetirementRrspDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "retirementRrspTransfer") {
    const dictionary = getRetirementRrspTransferDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "retirementTfsa") {
    const dictionary = getRetirementTfsaDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "insuranceAuto") {
    const dictionary = getInsuranceAutoDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "insuranceComparator") {
    const dictionary = getInsuranceComparatorDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "insuranceHome") {
    const dictionary = getInsuranceHomeDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "insuranceLife") {
    const dictionary = getInsuranceLifeDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "movingChecklist") {
    const dictionary = getMovingChecklistDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "movingCost") {
    const dictionary = getMovingCostDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  if (routeKey === "movingMontreal") {
    const dictionary = getMovingMontrealDictionary(locale);
    return buildPageMetadata({
      locale,
      routeKey,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    });
  }

  const dictionary = getStaticSubguideDictionary(locale, routeKey === "taxesRefund" ? "taxesRefund" : "taxesDeadlines");
  return buildPageMetadata({
    locale,
    routeKey,
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  });
}

export default async function LocalizedSubguidePage({
  params,
}: {
  params: Promise<{ locale: Locale; section: string; page: string }>;
}) {
  const timer = startServerTimer();
  const { locale, section, page } = await params;
  const routeKey = getRouteKeyFromLocalizedPath(locale, `${section}/${page}`);

  if (!routeKey || !localizedSubguideRouteKeys.includes(routeKey as (typeof localizedSubguideRouteKeys)[number])) {
    notFound();
  }

  if (routeKey === "budgetCalculator") {
    const { default: LocalizedBudgetCalculator } = await import("@/components/LocalizedBudgetCalculator");
    return <LocalizedBudgetCalculator locale={locale} />;
  }

  if (routeKey === "budgetCostOfLiving") {
    const { default: LocalizedBudgetCostOfLivingPage } = await import("@/components/LocalizedBudgetCostOfLivingPage");
    return <LocalizedBudgetCostOfLivingPage locale={locale} />;
  }

  if (routeKey === "budgetHousingAllowance") {
    const { default: LocalizedBudgetHousingAllowancePage } = await import("@/components/LocalizedBudgetHousingAllowancePage");
    return <LocalizedBudgetHousingAllowancePage locale={locale} />;
  }

  if (routeKey === "budgetSolidarityCredit") {
    const { default: LocalizedBudgetSolidarityCreditPage } = await import("@/components/LocalizedBudgetSolidarityCreditPage");
    return <LocalizedBudgetSolidarityCreditPage locale={locale} />;
  }

  if (routeKey === "taxesDeadlines") {
    const { default: LocalizedTaxDeadlinesPage } = await import("@/components/LocalizedTaxDeadlinesPage");
    return <LocalizedTaxDeadlinesPage locale={locale} />;
  }

  if (routeKey === "taxesRefund") {
    logCriticalRender("taxesRefund", timer);
    const { default: LocalizedTaxRefundPage } = await import("@/components/LocalizedTaxRefundPage");
    return <LocalizedTaxRefundPage locale={locale} />;
  }

  if (routeKey === "taxesSoftware") {
    logCriticalRender("taxesSoftware", timer);
    const { default: LocalizedTaxSoftwarePage } = await import("@/components/LocalizedTaxSoftwarePage");
    return <LocalizedTaxSoftwarePage locale={locale} />;
  }

  if (routeKey === "internetComparator") {
    const { default: LocalizedInternetComparatorPage } = await import("@/components/LocalizedInternetComparatorPage");
    return <LocalizedInternetComparatorPage locale={locale} />;
  }

  if (routeKey === "retirementRrq") {
    const { default: LocalizedRetirementRrqPage } = await import("@/components/LocalizedRetirementRrqPage");
    return <LocalizedRetirementRrqPage locale={locale} />;
  }

  if (routeKey === "retirementFhsa") {
    const { default: LocalizedRetirementFhsaPage } = await import("@/components/LocalizedRetirementFhsaPage");
    return <LocalizedRetirementFhsaPage locale={locale} />;
  }

  if (routeKey === "retirementRrsp") {
    logCriticalRender("retirementRrsp", timer);
    const { default: LocalizedRetirementRrspPage } = await import("@/components/LocalizedRetirementRrspPage");
    return <LocalizedRetirementRrspPage locale={locale} />;
  }

  if (routeKey === "retirementRrspTransfer") {
    const { default: LocalizedRetirementRrspTransferPage } = await import("@/components/LocalizedRetirementRrspTransferPage");
    return <LocalizedRetirementRrspTransferPage locale={locale} />;
  }

  if (routeKey === "retirementTfsa") {
    const { default: LocalizedRetirementTfsaPage } = await import("@/components/LocalizedRetirementTfsaPage");
    return <LocalizedRetirementTfsaPage locale={locale} />;
  }

  if (routeKey === "insuranceAuto") {
    const { default: LocalizedInsuranceAutoPage } = await import("@/components/LocalizedInsuranceAutoPage");
    return <LocalizedInsuranceAutoPage locale={locale} />;
  }

  if (routeKey === "insuranceComparator") {
    const { default: LocalizedInsuranceComparatorPage } = await import("@/components/LocalizedInsuranceComparatorPage");
    return <LocalizedInsuranceComparatorPage locale={locale} />;
  }

  if (routeKey === "insuranceHome") {
    const { default: LocalizedInsuranceHomePage } = await import("@/components/LocalizedInsuranceHomePage");
    return <LocalizedInsuranceHomePage locale={locale} />;
  }

  if (routeKey === "insuranceLife") {
    const { default: LocalizedInsuranceLifePage } = await import("@/components/LocalizedInsuranceLifePage");
    return <LocalizedInsuranceLifePage locale={locale} />;
  }

  if (routeKey === "movingChecklist") {
    const { default: LocalizedMovingChecklist } = await import("@/components/LocalizedMovingChecklist");
    return <LocalizedMovingChecklist locale={locale} />;
  }

  if (routeKey === "movingCost") {
    const { default: LocalizedMovingCostPage } = await import("@/components/LocalizedMovingCostPage");
    return <LocalizedMovingCostPage locale={locale} />;
  }

  if (routeKey === "movingMontreal") {
    const { default: LocalizedMovingMontrealPage } = await import("@/components/LocalizedMovingMontrealPage");
    return <LocalizedMovingMontrealPage locale={locale} />;
  }

  notFound();
}
