import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Allocation enfant Québec 2026 – Combien puis-je recevoir ?",
  description:
    "Vérifiez les montants 2026 de l'Allocation famille et de l'ACE, leurs fréquences et les démarches officielles.",
  keywords: ["allocation enfant Québec", "combien allocation enfant Québec", "allocation famille Québec 2026", "montant allocation enfant"],
  alternates: { canonical: "https://argentqc.ca/allocation-enfant-quebec" },
};

const programmes: Programme[] = [
  {
    id: "irapvf-qc",
    nom: "Allocation famille (Québec)",
    organisme: "Retraite Québec",
    niveau: "provincial",
    categorie: "famille",
    montant_min: 0,
    montant_max: 3068,
    montant_affiche: "Jusqu'à 3 068 $ par enfant en 2026 — à vérifier",
    montant_sommable: false,
    preselection_only: true,
    description: "Allocation québécoise calculée selon la situation familiale et le revenu. Elle est versée trimestriellement par défaut, ou mensuellement sur demande.",
    conditions: ["Résider au Québec", "Avoir au moins un enfant de moins de 18 ans", "Être le principal responsable de l'enfant"],
    lien_officiel: "https://www.retraitequebec.gouv.qc.ca/fr/enfants/allocation-famille/Pages/allocation-famille.aspx",
    criteres: { enfants: true, provinces: ["QC"] },
  },
  {
    id: "ace-fed",
    nom: "Allocation canadienne pour enfants (ACE)",
    organisme: "Gouvernement du Canada",
    niveau: "federal",
    categorie: "famille",
    montant_min: 0,
    montant_max: 8157,
    montant_affiche: "Jusqu'à 8 157 $ par enfant de moins de 6 ans — à vérifier",
    montant_sommable: false,
    preselection_only: true,
    description: "Prestation mensuelle non imposable calculée selon le RFNR 2025. Une demande à l'ARC est requise; la déclaration de revenus maintient le calcul à jour.",
    conditions: ["Avoir au moins un enfant de moins de 18 ans", "Résider au Canada", "Être le principal responsable des soins de l'enfant"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu.html",
    criteres: { enfants: true },
  },
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
