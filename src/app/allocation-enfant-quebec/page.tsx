import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import { getProgrammeFromCatalogue } from "@/data/finance-2026";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Allocation enfant Québec 2026 – Combien puis-je recevoir ?",
  description:
    "Vérifiez les montants 2026 de l'Allocation famille et de l'ACE, leurs fréquences et les démarches officielles.",
  keywords: ["allocation enfant Québec", "combien allocation enfant Québec", "allocation famille Québec 2026", "montant allocation enfant"],
  alternates: { canonical: "https://argentqc.ca/allocation-enfant-quebec" },
};

const programmes: Programme[] = [
  getProgrammeFromCatalogue("irapvf-qc"),
  getProgrammeFromCatalogue("ace-fed"),
];

const faqs = [
  {
    question: "Combien reçoit-on par enfant au Québec en 2026 ?",
    reponse: "Pour juillet 2026 à juin 2027, l'ACE maximale est de 8 157 $ pour un enfant de moins de 6 ans et de 6 883 $ de 6 à 17 ans. L'Allocation famille 2026 peut atteindre 3 068 $ par enfant, plus un supplément monoparental maximal de 1 077 $ par famille. Le montant réel doit être vérifié séparément auprès de chaque administration.",
  },
  {
    question: "L'allocation augmente-t-elle avec le nombre d'enfants ?",
    reponse: "Oui. Chaque enfant admissible donne droit à une allocation supplémentaire. Il n'y a pas de plafond sur le nombre d'enfants — chaque enfant génère sa propre prestation.",
  },
  {
    question: "Quand les versements sont-ils effectués ?",
    reponse: "L'ACE est mensuelle. L'Allocation famille est trimestrielle par défaut; vous pouvez demander des versements mensuels à Retraite Québec. Consultez les calendriers officiels pour les dates exactes.",
  },
  {
    question: "Que se passe-t-il si mon revenu augmente ?",
    reponse: "Les allocations sont recalculées chaque année en juillet, basées sur votre déclaration de revenus de l'année précédente. Une hausse de revenu peut réduire le montant, mais les allocations ne disparaissent pas complètement sauf pour les revenus très élevés.",
  },
];

export default function AllocationEnfantQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Allocation enfant Québec 2026 – Combien puis-je recevoir ?"
      sousTitre="Comparez les deux allocations et vérifiez séparément votre situation auprès de l'ARC et de Retraite Québec."
      intro="Au Québec, l'Allocation famille et l'Allocation canadienne pour enfants (ACE) sont deux prestations distinctes. Les maximums ne constituent pas une estimation personnalisée et ne doivent pas être additionnés automatiquement : l'âge des enfants, le revenu familial net rajusté et la situation de garde modifient le résultat."
      programmes={programmes}
      faqs={faqs}
      motCle="Allocation enfant Québec"
    />
  );
}
