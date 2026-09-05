import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import { getProgrammeFromCatalogue } from "@/data/finance-2026";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Aide financière famille Québec 2026 – Tous les programmes",
  description:
    "Découvrez les aides financières disponibles pour les familles au Québec en 2026 : allocation famille, ACE, crédit solidarité et plus. Repérez les programmes à vérifier en 2 minutes.",
  keywords: ["aide financière famille Québec", "aide famille Québec 2026", "programme famille Québec"],
  alternates: { canonical: "https://argentqc.ca/aide-famille-quebec" },
};

const programmes: Programme[] = [
  getProgrammeFromCatalogue("irapvf-qc"),
  getProgrammeFromCatalogue("ace-fed"),
  getProgrammeFromCatalogue("credit-loyer-qc"),
  getProgrammeFromCatalogue("credit-tps-fed"),
];

const faqs = [
  {
    question: "Quelle est la différence entre l'Allocation famille du Québec et l'ACE fédérale ?",
    reponse: "L'Allocation famille est versée par Retraite Québec et est propre au Québec. L'ACE (Allocation canadienne pour enfants) est versée par le gouvernement fédéral. Les deux sont cumulables — une famille québécoise reçoit les deux.",
  },
  {
    question: "Dois-je faire une demande pour recevoir ces aides ?",
    reponse: "L'ACE exige une demande à l'ARC. À la naissance, l'enregistrement provincial peut transmettre les renseignements à l'ARC si vous consentez au service automatisé. Pour l'Allocation famille, vérifiez la démarche applicable auprès de Retraite Québec.",
  },
  {
    question: "À combien ai-je droit si j'ai deux enfants et un revenu de 50 000 $ ?",
    reponse: "Le montant dépend notamment de l'âge des enfants, du RFNR 2025 et de la situation de garde. Le questionnaire fournit seulement des pistes; utilisez ensuite les calculateurs de l'ARC et de Retraite Québec pour vérifier chaque montant.",
  },
  {
    question: "Ces prestations sont-elles imposables ?",
    reponse: "L'ACE et l'Allocation famille du Québec sont non imposables. Le crédit de solidarité est un crédit remboursable de Revenu Québec; consultez Revenu Québec pour son traitement fiscal exact selon votre situation.",
  },
];

export default function AideFamilleQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Aide financière famille Québec 2026"
      sousTitre="Toutes les allocations et aides auxquelles votre famille a droit — provinciales et fédérales."
      intro="Les familles québécoises peuvent être admissibles à plusieurs aides distinctes. Le questionnaire sert de préfiltre : il ne confirme pas l'admissibilité et n'additionne pas les maximums de l'ACE et de l'Allocation famille, puisque chaque administration applique son propre calcul."
      programmes={programmes}
      faqs={faqs}
      motCle="Aide financière famille Québec"
      pagesRelies={[
        { href: "/allocation-enfant-quebec", titre: "Allocation enfant Québec – montants" },
        { href: "/aide-financiere-sport-enfant-quebec", titre: "Aides sport enfant Québec" },
        { href: "/fr/budget/credit-solidarite", titre: "Crédit de solidarité Québec" },
        { href: "/aides-financieres/famille", titre: "Hub aides financières famille" },
      ]}
      questionnaireCtaLabel="Vérifier les aides pour ma famille →"
      questionnaireCtaName="verifier_les_aides_pour_ma_famille"
    />
  );
}
