import type { ReponseQuestionnaire } from "@/types";
import LocalizedResultsPage from "@/components/LocalizedResultsPage";
import { getDictionary } from "@/i18n/content";
import { buildPageMetadata } from "@/lib/seo";
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

  const reponses: ReponseQuestionnaire = {
    province: "QC",
    statut_logement: (query.statut_logement as ReponseQuestionnaire["statut_logement"]) ?? "proprietaire",
    situation_familiale: (query.situation_familiale as ReponseQuestionnaire["situation_familiale"]) ?? "seul",
    enfants: query.enfants === "true",
    revenu: query.revenu ?? "50000-75000",
    vehicule_elec: query.vehicule_elec ?? "non",
    renovation: query.renovation === "true",
    retraite: query.retraite === "true",
    age: query.age ?? "31-45",
    etudiant: query.etudiant === "true",
  };

  return <LocalizedResultsPage locale={locale} dictionary={getDictionary(locale).results} reponses={reponses} />;
}
