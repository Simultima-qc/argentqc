import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import { getProgrammeFromCatalogue } from "@/data/finance-2026";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Crédits d'impôt Québec 2026 – Combien puis-je récupérer ?",
  description:
    "Crédits d'impôt et prestations disponibles au Québec en 2026 : crédit solidarité, maintien à domicile, ACEBE et plus. Repérez les programmes à vérifier.",
  keywords: ["crédit impôt Québec", "crédit impôt Québec combien", "crédits impôt remboursables Québec 2026", "récupérer impôt Québec"],
};

const programmes: Programme[] = [
  getProgrammeFromCatalogue("credit-loyer-qc"),
  getProgrammeFromCatalogue("credit-tps-fed"),
  getProgrammeFromCatalogue("credit-maintien-qc"),
  getProgrammeFromCatalogue("credit-reno-fed"),
];

const faqs = [
  {
    question: "Quelle est la différence entre un crédit remboursable et non remboursable ?",
    reponse: "Un crédit remboursable vous est versé même si vous n'avez pas d'impôt à payer — vous recevez un chèque. Un crédit non remboursable réduit seulement l'impôt que vous devez. Au Québec, plusieurs crédits sont remboursables, ce qui est avantageux pour les personnes à faible revenu.",
  },
  {
    question: "Est-ce que je dois faire une demande ou c'est automatique ?",
    reponse: "L’ARC détermine généralement l’ACEBE à partir de votre déclaration de revenus; une nouvelle personne résidente peut devoir transmettre le formulaire RC151. Le crédit de solidarité dépend de la déclaration québécoise. Le crédit pour maintien à domicile nécessite de remplir l'annexe J.",
  },
  {
    question: "Puis-je recevoir plusieurs crédits en même temps ?",
    reponse: "Oui, plusieurs prestations peuvent s'appliquer au même ménage. Il faut toutefois vérifier séparément l’admissibilité et le montant de l’ACEBE, du crédit de solidarité, du maintien à domicile, du SRG et de la Sécurité de la vieillesse.",
  },
  {
    question: "Je n'ai pas produit ma déclaration depuis quelques années. Puis-je récupérer des crédits passés ?",
    reponse: "Oui ! Vous pouvez produire des déclarations en retard pour les 10 dernières années et récupérer rétroactivement les crédits auxquels vous aviez droit. Contactez Revenu Québec ou l'ARC pour en savoir plus.",
  },
];

export default function CreditImpotQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Crédits d'impôt Québec 2026 – Combien puis-je récupérer ?"
      sousTitre="Tous les crédits d'impôt remboursables disponibles au Québec — provincial et fédéral."
      intro="Les Québécois ont accès à plusieurs crédits et prestations. Le crédit de solidarité, l’Allocation canadienne pour l’épicerie et les besoins essentiels et le crédit pour maintien à domicile ont des règles distinctes. Cette page aide à les repérer; les montants sensibles doivent être confirmés auprès de l’administration responsable."
      programmes={programmes}
      faqs={faqs}
      motCle="Crédits d'impôt Québec 2026"
    />
  );
}
