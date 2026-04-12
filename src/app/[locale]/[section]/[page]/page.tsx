import { notFound } from "next/navigation";
import LocalizedBudgetCalculator from "@/components/LocalizedBudgetCalculator";
import LocalizedBudgetCostOfLivingPage from "@/components/LocalizedBudgetCostOfLivingPage";
import LocalizedBudgetHousingAllowancePage from "@/components/LocalizedBudgetHousingAllowancePage";
import LocalizedBudgetSolidarityCreditPage from "@/components/LocalizedBudgetSolidarityCreditPage";
import LocalizedInsuranceAutoPage from "@/components/LocalizedInsuranceAutoPage";
import LocalizedInsuranceComparatorPage from "@/components/LocalizedInsuranceComparatorPage";
import LocalizedInsuranceHomePage from "@/components/LocalizedInsuranceHomePage";
import LocalizedInsuranceLifePage from "@/components/LocalizedInsuranceLifePage";
import LocalizedInternetComparatorPage from "@/components/LocalizedInternetComparatorPage";
import LocalizedMovingChecklist from "@/components/LocalizedMovingChecklist";
import LocalizedMovingCostPage from "@/components/LocalizedMovingCostPage";
import LocalizedMovingMontrealPage from "@/components/LocalizedMovingMontrealPage";
import LocalizedRetirementFhsaPage from "@/components/LocalizedRetirementFhsaPage";
import LocalizedRetirementRrqPage from "@/components/LocalizedRetirementRrqPage";
import LocalizedRetirementRrspPage from "@/components/LocalizedRetirementRrspPage";
import LocalizedRetirementRrspTransferPage from "@/components/LocalizedRetirementRrspTransferPage";
import LocalizedRetirementTfsaPage from "@/components/LocalizedRetirementTfsaPage";
import LocalizedTaxSoftwarePage from "@/components/LocalizedTaxSoftwarePage";
import LocalizedTaxDeadlinesPage from "@/components/LocalizedTaxDeadlinesPage";
import LocalizedTaxRefundPage from "@/components/LocalizedTaxRefundPage";
import { localizedSubguideRouteKeys, getBudgetCalculatorDictionary, getBudgetCostOfLivingDictionary, getInsuranceAutoDictionary, getInsuranceComparatorDictionary, getInsuranceHomeDictionary, getInsuranceLifeDictionary, getInternetComparatorDictionary, getMovingChecklistDictionary, getMovingCostDictionary, getMovingMontrealDictionary, getRetirementFhsaDictionary, getRetirementRrqDictionary, getRetirementRrspDictionary, getRetirementTfsaDictionary, getStaticSubguideDictionary, getTaxSoftwareDictionary } from "@/i18n/subguides";
import { getBudgetHousingAllowanceDictionary } from "@/i18n/budgetHousingAllowance";
import { getBudgetSolidarityCreditDictionary } from "@/i18n/budgetSolidarityCredit";
import { getRetirementRrspTransferDictionary } from "@/i18n/retirementRrspTransfer";
import { buildPageMetadata } from "@/lib/seo";
import { getRouteKeyFromLocalizedPath, getRoutePath, isLocale, locales, type Locale } from "@/i18n/routing";

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
  const { locale, section, page } = await params;
  const routeKey = getRouteKeyFromLocalizedPath(locale, `${section}/${page}`);

  if (!routeKey || !localizedSubguideRouteKeys.includes(routeKey as (typeof localizedSubguideRouteKeys)[number])) {
    notFound();
  }

  if (routeKey === "budgetCalculator") {
    return <LocalizedBudgetCalculator locale={locale} />;
  }

  if (routeKey === "budgetCostOfLiving") {
    return <LocalizedBudgetCostOfLivingPage locale={locale} />;
  }

  if (routeKey === "budgetHousingAllowance") {
    return <LocalizedBudgetHousingAllowancePage locale={locale} />;
  }

  if (routeKey === "budgetSolidarityCredit") {
    return <LocalizedBudgetSolidarityCreditPage locale={locale} />;
  }

  if (routeKey === "taxesDeadlines") {
    return <LocalizedTaxDeadlinesPage locale={locale} />;
  }

  if (routeKey === "taxesRefund") {
    return <LocalizedTaxRefundPage locale={locale} />;
  }

  if (routeKey === "taxesSoftware") {
    return <LocalizedTaxSoftwarePage locale={locale} />;
  }

  if (routeKey === "internetComparator") {
    return <LocalizedInternetComparatorPage locale={locale} />;
  }

  if (routeKey === "retirementRrq") {
    return <LocalizedRetirementRrqPage locale={locale} />;
  }

  if (routeKey === "retirementFhsa") {
    return <LocalizedRetirementFhsaPage locale={locale} />;
  }

  if (routeKey === "retirementRrsp") {
    return <LocalizedRetirementRrspPage locale={locale} />;
  }

  if (routeKey === "retirementRrspTransfer") {
    return <LocalizedRetirementRrspTransferPage locale={locale} />;
  }

  if (routeKey === "retirementTfsa") {
    return <LocalizedRetirementTfsaPage locale={locale} />;
  }

  if (routeKey === "insuranceAuto") {
    return <LocalizedInsuranceAutoPage locale={locale} />;
  }

  if (routeKey === "insuranceComparator") {
    return <LocalizedInsuranceComparatorPage locale={locale} />;
  }

  if (routeKey === "insuranceHome") {
    return <LocalizedInsuranceHomePage locale={locale} />;
  }

  if (routeKey === "insuranceLife") {
    return <LocalizedInsuranceLifePage locale={locale} />;
  }

  if (routeKey === "movingChecklist") {
    return <LocalizedMovingChecklist locale={locale} />;
  }

  if (routeKey === "movingCost") {
    return <LocalizedMovingCostPage locale={locale} />;
  }

  if (routeKey === "movingMontreal") {
    return <LocalizedMovingMontrealPage locale={locale} />;
  }

  notFound();
}
