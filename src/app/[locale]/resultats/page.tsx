import type { ReponseQuestionnaire } from "@/types";
import LocalizedResultsPage from "@/components/LocalizedResultsPage";
import { getDictionary } from "@/i18n/content";
import { buildPageMetadata } from "@/lib/seo";
import { parseQuestionnaireAnswers } from "@/lib/questionnaire-url";
import { isLocale, type Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);
  return buildPageMetadata({
    locale,
    routeKey: "results",
    title: dictionary.results.metadata.title,
    description: dictionary.results.metadata.description,
    index: false,
  });
}

export default async function ResultsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const { locale } = await params;
  const query = await searchParams;

  const reponses: ReponseQuestionnaire = parseQuestionnaireAnswers(query);

  return <LocalizedResultsPage locale={locale} dictionary={getDictionary(locale).results} reponses={reponses} />;
}
