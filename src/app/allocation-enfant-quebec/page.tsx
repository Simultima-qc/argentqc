import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Allocation enfant Québec 2026 – Combien puis-je recevoir ?",
  description:
    "Calculez le montant de l'allocation enfant au Québec en 2026. Allocation famille Retraite Québec + ACE fédérale. Estimez votre montant en 2 minutes.",
  keywords: ["allocation enfant Québec", "combien allocation enfant Québec", "allocation famille Québec 2026", "montant allocation enfant"],
};

const programmes: Programme[] = [
  {
    id: "irapvf-qc",
    nom: "Allocation famille (Québec)",
    organisme: "Retraite Québec",
    niveau: "provincial",
    categorie: "famille",
    montant_min: 100,
    montant_max: 2782,
    montant_affiche: "Jusqu'à 2 782 $ par enfant/année",
    description: "Versements mensuels pour les familles québécoises. Le montant varie selon le revenu familial et le nombre d'enfants. Le montant maximal a été bonifié en 2026.",
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
    montant_min: 1000,
    montant_max: 7787,
    montant_affiche: "Jusqu'à 7 787 $ par enfant/année",
    description: "La plus importante prestation pour enfants au Canada. Versée mensuellement, non imposable, calculée selon le revenu familial net de l'année précédente.",
    conditions: ["Avoir au moins un enfant de moins de 18 ans", "Résider au Canada", "Être le principal responsable des soins de l'enfant"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu.html",
    criteres: { enfants: true },
  },
];

const faqs = [
  {
    question: "Combien reçoit-on par enfant au Québec en 2026 ?",
    reponse: "En combinant l'ACE fédérale et l'Allocation famille du Québec, une famille à revenu moyen peut recevoir entre 5 000 $ et 10 000 $ par enfant de moins de 6 ans, et entre 4 000 $ et 8 000 $ pour un enfant de 6 à 17 ans. Les montants exacts dépendent de votre revenu familial net.",
  },
  {
    question: "L'allocation augmente-t-elle avec le nombre d'enfants ?",
    reponse: "Oui. Chaque enfant admissible donne droit à une allocation supplémentaire. Il n'y a pas de plafond sur le nombre d'enfants — chaque enfant génère sa propre prestation.",
  },
  {
    question: "Quand les versements sont-ils effectués ?",
    reponse: "L'ACE fédérale est versée le 20 de chaque mois. L'Allocation famille du Québec est versée le 1er de chaque mois ou trimestriellement selon votre choix.",
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
      sousTitre="Estimez le montant de vos allocations pour enfants — provinciale et fédérale combinées."
      intro="Au Québec, les parents reçoivent deux allocations distinctes pour leurs enfants : l'Allocation famille versée par Retraite Québec (provincial) et l'Allocation canadienne pour enfants (ACE) versée par Ottawa (fédéral). Ces deux prestations sont cumulables, non imposables, et peuvent représenter plusieurs milliers de dollars par année selon votre situation. Les montants ont été bonifiés en 2026."
      programmes={programmes}
      faqs={faqs}
      motCle="Allocation enfant Québec"
    />
  );
}
