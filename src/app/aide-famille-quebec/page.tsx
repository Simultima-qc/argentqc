import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Aide financière famille Québec 2026 – Tous les programmes",
  description:
    "Découvrez toutes les aides financières disponibles pour les familles au Québec en 2026 : allocation famille, ACE, crédit solidarité et plus. Calculez votre montant en 2 minutes.",
  keywords: ["aide financière famille Québec", "aide famille Québec 2026", "programme famille Québec"],
  alternates: { canonical: "https://argentqc.ca/aide-famille-quebec" },
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
    description: "Allocation québécoise versée trimestriellement par défaut, ou mensuellement sur demande. Le montant dépend de la situation familiale et du revenu.",
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
    description: "Paiement mensuel non imposable basé sur le RFNR 2025. Une demande à l'ARC est requise; produire les déclarations maintient le calcul à jour.",
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
    nom: "Allocation canadienne pour l’épicerie et les besoins essentiels (ACEBE)",
    organisme: "Gouvernement du Canada",
    niveau: "federal",
    categorie: "credits_impot",
    montant_min: 0,
    montant_max: 0,
    montant_affiche: "Montant calculé par l’ARC — à vérifier",
    montant_sommable: false,
    preselection_only: true,
    description: "Prestation trimestrielle non imposable calculée selon le revenu familial net rajusté de 2025 et la composition familiale.",
    conditions: ["Résider au Canada", "Produire une déclaration de revenus", "Faire vérifier le montant par l’ARC"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-epicerie-besoins-essentiels.html",
    criteres: {},
  },
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
    reponse: "Non. L'ACE, l'Allocation famille du Québec et le crédit de solidarité sont tous non imposables. Vous n'avez pas à les déclarer comme revenus.",
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
        { href: "/subvention-sport-enfant-quebec", titre: "Aides sport enfant Québec" },
        { href: "/fr/budget/credit-solidarite", titre: "Crédit de solidarité Québec" },
        { href: "/aides-financieres/famille", titre: "Hub aides financières famille" },
      ]}
      questionnaireCtaLabel="Vérifier les aides pour ma famille →"
      questionnaireCtaName="verifier_les_aides_pour_ma_famille"
    />
  );
}
