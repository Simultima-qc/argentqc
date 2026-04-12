import LocalizedQuestionnaire from "@/components/LocalizedQuestionnaire";
import { getDictionary } from "@/i18n/content";
import { buildPageMetadata } from "@/lib/seo";
import { isLocale } from "@/i18n/routing";

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
    routeKey: "questionnaire",
    title: dictionary.questionnaire.metadata.title,
    description: dictionary.questionnaire.metadata.description,
  });
}

export default async function QuestionnairePage({
  params,
}: {
  params: Promise<{ locale: "fr" | "en" }>;
}) {
  const { locale } = await params;
  return <LocalizedQuestionnaire locale={locale} dictionary={getDictionary(locale).questionnaire} />;
}
