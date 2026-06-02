import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Crédit d'impôt solidarité Québec 2026 : montant, seuils et paiement",
  description:
    "Voyez comment fonctionne le crédit d'impôt solidarité au Québec en 2026 : admissibilité, seuils, montants possibles et paiements.",
  keywords: ["credit de solidarite quebec", "crédit d'impôt pour solidarité", "credit solidarite quebec", "seuil crédit impot solidarité"],
};

const programmes: Programme[] = [
  {
    id: "credit-loyer-qc",
    nom: "Crédit d'impôt pour solidarité",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "credits_impot",
    montant_min: 150,
    montant_max: 2000,
    montant_affiche: "150 $ – 2 000 $",
    description: "Crédit d'impôt remboursable combinant trois composantes : TVQ, habitation et village nordique. Versé mensuellement ou annuellement selon le montant.",
    conditions: ["Résider au Québec au 31 décembre", "Revenu familial sous les seuils établis", "Produire une déclaration de revenus au Québec"],
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
    description: "Paiements trimestriels non imposables pour aider les personnes et familles à revenus faibles ou modestes à récupérer une partie de la TPS/TVH payée.",
    conditions: ["Résider au Canada", "Produire une déclaration de revenus", "Avoir 19 ans ou plus (ou avoir un conjoint/enfant)"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/credit-taxe-produits-services-taxe-vente-harmonisee-tps-tvh.html",
    criteres: { revenu_max: 50000 },
  },
  {
    id: "allocation-logement-qc",
    nom: "Allocation-logement (Québec)",
    organisme: "Société d'habitation du Québec (SHQ)",
    niveau: "provincial",
    categorie: "logement",
    montant_min: 100,
    montant_max: 2040,
    montant_affiche: "Jusqu'à 170 $ par mois",
    description: "Aide financière mensuelle pour les locataires à faible revenu qui consacrent une trop grande part de leurs revenus au loyer.",
    conditions: ["Être locataire au Québec", "Avoir 50 ans ou plus, ou avoir un enfant à charge", "Revenu annuel brut sous les seuils établis"],
    lien_officiel: "https://www.habitation.gouv.qc.ca/programme/programme/allocation-logement",
    criteres: { locataire: true, provinces: ["QC"], revenu_max: 35000 },
  },
];

const faqs = [
  {
    question: "C'est quoi le crédit d'impôt pour solidarité?",
    reponse: "C'est un crédit d'impôt remboursable de Revenu Québec destiné aux ménages à revenu faible ou modeste. Il peut inclure une composante TVQ, une composante logement et, dans certains cas, une composante village nordique.",
  },
  {
    question: "Quels sont les seuils du crédit solidarité?",
    reponse: "Les seuils varient selon le revenu familial, la situation conjugale, le nombre d'enfants et les composantes applicables. Consultez Revenu Québec pour les seuils exacts de l'année visée avant d'estimer votre montant.",
  },
  {
    question: "Comment recevoir le crédit de solidarité?",
    reponse: "Vous devez produire votre déclaration de revenus du Québec et remplir les renseignements demandés, notamment ceux liés à votre logement lorsque requis. Revenu Québec calcule ensuite le crédit selon votre situation.",
  },
  {
    question: "Quand les paiements sont-ils versés?",
    reponse: "La fréquence des paiements dépend du montant accordé et des règles de Revenu Québec. Vérifiez votre avis de détermination ou votre dossier Revenu Québec pour les dates et la fréquence applicables.",
  },
  {
    question: "Puis-je cumuler le crédit de solidarité et le crédit TPS fédéral?",
    reponse: "Oui. Le crédit de solidarité est provincial et le crédit TPS/TVH est fédéral. Les deux crédits sont distincts et peuvent s'appliquer au même ménage si les conditions sont remplies.",
  },
];

export default function CreditSolidariteQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Crédit de solidarité Québec 2026"
      sousTitre="Admissibilité, seuils de revenu, montants possibles, paiements et étapes pour le recevoir."
      intro="Réponse rapide : le crédit d'impôt pour solidarité Québec 2026 est calculé par Revenu Québec à partir de votre déclaration provinciale. Le montant dépend de votre revenu familial, de votre situation de logement, de votre situation familiale et des composantes applicables. Pour améliorer votre dossier, produisez votre déclaration et vérifiez les seuils officiels avant de conclure que vous n'y avez pas droit."
      programmes={programmes}
      faqs={faqs}
      motCle="Crédit de solidarité Québec 2026"
      sections={[
        {
          titre: "Seuils du crédit d'impôt pour solidarité",
          contenu: [
            "Les seuils ne se lisent pas comme un montant unique : ils dépendent du revenu familial, de la situation conjugale, du nombre d'enfants et des composantes applicables. Utilisez la page officielle de Revenu Québec pour confirmer les seuils exacts.",
            "Si votre revenu est près d'un seuil, produisez quand même votre déclaration et remplissez les renseignements demandés. Revenu Québec calcule le montant admissible à partir des données déclarées.",
          ],
        },
        {
          titre: "Paiements et réception du crédit",
          contenu: [
            "Le paiement peut être mensuel, trimestriel ou annuel selon le montant accordé et les règles en vigueur. Les dates exactes apparaissent dans votre avis de détermination ou dans votre dossier Revenu Québec.",
            "Pour le recevoir, assurez-vous que votre déclaration du Québec est produite, que les renseignements de logement sont complets lorsque requis et que vos informations de dépôt direct sont à jour.",
          ],
        },
      ]}
      pagesRelies={[
        { href: "/fr/budget/allocation-logement", titre: "Allocation logement Québec" },
        { href: "/aide-sociale-quebec", titre: "Aide sociale Québec 2026" },
        { href: "/supplement-revenu-garanti-2026", titre: "Supplément de revenu garanti 2026" },
        { href: "/credit-impot-quebec", titre: "Tous les crédits d'impôt Québec" },
        { href: "/aide-famille-quebec", titre: "Aide financière famille Québec" },
      ]}
    />
  );
}
