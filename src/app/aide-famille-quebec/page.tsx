import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Aide financière famille Québec 2026 – Tous les programmes",
  description:
    "Découvrez toutes les aides financières disponibles pour les familles au Québec en 2026 : allocation famille, ACE, crédit solidarité et plus. Calculez votre montant en 2 minutes.",
  keywords: ["aide financière famille Québec", "aide famille Québec 2026", "programme famille Québec"],
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
    description: "Versements mensuels pour les familles québécoises ayant des enfants de moins de 18 ans. S'ajoute à l'Allocation canadienne pour enfants.",
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
    description: "Paiement mensuel non imposable pour les familles qui élèvent des enfants de moins de 18 ans. Montant basé sur le revenu familial net.",
    conditions: ["Avoir au moins un enfant de moins de 18 ans", "Résider au Canada", "Être le principal responsable des soins de l'enfant"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu.html",
    criteres: { enfants: true },
  },
  {
    id: "credit-loyer-qc",
    nom: "Crédit d'impôt pour solidarité",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "credits_impot",
    montant_min: 150,
    montant_max: 2000,
    montant_affiche: "150 $ – 2 000 $",
    description: "Crédit d'impôt remboursable pour les ménages à revenus faibles ou modestes. Versé mensuellement ou annuellement.",
    conditions: ["Résider au Québec", "Revenu familial sous les seuils établis", "Produire une déclaration de revenus au Québec"],
    lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
    criteres: { provinces: ["QC"], revenu_max: 60000 },
  },
  {
    id: "credit-tps-fed",
    nom: "Crédit pour la TPS/TVH",
    organisme: "Gouvernement du Canada",
    niveau: "federal",
    categorie: "credits_impot",
    montant_min: 100,
    montant_max: 700,
    montant_affiche: "Jusqu'à 700 $ par année",
    description: "Paiements trimestriels non imposables pour les familles à revenus faibles ou modestes.",
    conditions: ["Résider au Canada", "Produire une déclaration de revenus", "Revenu familial modeste"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/credit-taxe-produits-services-taxe-vente-harmonisee-tps-tvh.html",
    criteres: { revenu_max: 50000 },
  },
];

const faqs = [
  {
    question: "Quelle est la différence entre l'Allocation famille du Québec et l'ACE fédérale ?",
    reponse: "L'Allocation famille est versée par Retraite Québec et est propre au Québec. L'ACE (Allocation canadienne pour enfants) est versée par le gouvernement fédéral. Les deux sont cumulables — une famille québécoise reçoit les deux.",
  },
  {
    question: "Dois-je faire une demande pour recevoir ces aides ?",
    reponse: "L'ACE est calculée automatiquement lors de votre déclaration de revenus fédérale. L'Allocation famille du Québec nécessite une inscription auprès de Retraite Québec à la naissance de l'enfant ou à votre arrivée au Québec.",
  },
  {
    question: "À combien ai-je droit si j'ai deux enfants et un revenu de 50 000 $ ?",
    reponse: "Avec deux enfants et un revenu familial de 50 000 $, vous pouvez recevoir environ 8 000 $ à 15 000 $ par année en combinant l'ACE, l'Allocation famille du Québec et le crédit de solidarité. Utilisez notre questionnaire pour une estimation personnalisée.",
  },
  {
    question: "Ces prestations sont-elles imposables ?",
    reponse: "Non. L'ACE, l'Allocation famille du Québec et le crédit de solidarité sont tous non imposables. Vous n'avez pas à les déclarer comme revenus.",
  },
];

export default function AideFamilleQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Aide financière famille Québec 2026"
      sousTitre="Toutes les allocations et aides auxquelles votre famille a droit — provinciales et fédérales."
      intro="Les familles québécoises peuvent cumuler plusieurs sources d'aide financière gouvernementale. Entre l'Allocation famille de Retraite Québec, l'Allocation canadienne pour enfants (ACE) et le crédit de solidarité, une famille avec deux enfants peut recevoir plus de 15 000 $ par année en prestations non imposables. Pourtant, plusieurs familles ne réclament pas tout ce à quoi elles ont droit par manque d'information."
      programmes={programmes}
      faqs={faqs}
      motCle="Aide financière famille Québec"
    />
  );
}
