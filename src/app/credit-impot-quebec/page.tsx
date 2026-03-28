import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Crédits d'impôt Québec 2026 – Combien puis-je récupérer ?",
  description:
    "Tous les crédits d'impôt disponibles au Québec en 2026 : crédit solidarité, maintien à domicile, TPS/TVH et plus. Calculez votre remboursement en 2 minutes.",
  keywords: ["crédit impôt Québec", "crédit impôt Québec combien", "crédits impôt remboursables Québec 2026", "récupérer impôt Québec"],
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
    description: "Crédit d'impôt remboursable combinant trois composantes : TVQ, logement et communautés autochtones. Versé mensuellement aux ménages à revenus faibles ou modestes.",
    conditions: ["Résider au Québec au 31 décembre", "Revenu familial sous les seuils établis", "Produire une déclaration de revenus du Québec"],
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
    description: "Paiements trimestriels non imposables pour récupérer une partie de la TPS payée. Attribué automatiquement lors de votre déclaration de revenus fédérale.",
    conditions: ["Résider au Canada", "Produire une déclaration de revenus fédérale", "Avoir 19 ans ou plus (ou avoir un conjoint/enfant)"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/credit-taxe-produits-services-taxe-vente-harmonisee-tps-tvh.html",
    criteres: { revenu_max: 50000 },
  },
  {
    id: "credit-maintien-qc",
    nom: "Crédit d'impôt pour maintien à domicile des aînés",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "credits_impot",
    montant_min: 500,
    montant_max: 6000,
    montant_affiche: "Jusqu'à 6 000 $",
    description: "Crédit remboursable de 40% en 2026 sur les dépenses d'aide à domicile pour les personnes de 70 ans et plus. Peut être versé en avance mensuellement.",
    conditions: ["Avoir 70 ans ou plus", "Résider au Québec", "Dépenses pour services admissibles (aide ménagère, soins, livraison de repas)"],
    lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-maintien-a-domicile/",
    criteres: { provinces: ["QC"], age_min: 70, retraite: true },
  },
  {
    id: "credit-reno-fed",
    nom: "Crédit pour rénovations multigénérationnelles",
    organisme: "Gouvernement du Canada",
    niveau: "federal",
    categorie: "credits_impot",
    montant_min: 0,
    montant_max: 7500,
    montant_affiche: "Jusqu'à 7 500 $",
    description: "Crédit d'impôt remboursable de 15% pour créer un logement secondaire dans votre domicile pour un aîné ou une personne handicapée.",
    conditions: ["Créer un logement secondaire dans votre domicile", "Le logement est destiné à un aîné (65+) ou une personne handicapée", "Dépenses admissibles entre 500 $ et 50 000 $"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/programmes/a-propos-agence-revenu-canada-arc/impot-cible/credit-renovation-domiciliaire-multigeneration.html",
    criteres: { proprietaire: true, renovation: true },
  },
];

const faqs = [
  {
    question: "Quelle est la différence entre un crédit remboursable et non remboursable ?",
    reponse: "Un crédit remboursable vous est versé même si vous n'avez pas d'impôt à payer — vous recevez un chèque. Un crédit non remboursable réduit seulement l'impôt que vous devez. Au Québec, plusieurs crédits sont remboursables, ce qui est avantageux pour les personnes à faible revenu.",
  },
  {
    question: "Est-ce que je dois faire une demande ou c'est automatique ?",
    reponse: "Le crédit TPS/TVH et le crédit de solidarité sont accordés automatiquement lors de votre déclaration de revenus. Le crédit pour maintien à domicile nécessite de remplir l'annexe J de votre déclaration provinciale.",
  },
  {
    question: "Puis-je recevoir plusieurs crédits en même temps ?",
    reponse: "Oui, les crédits sont cumulables. Un aîné à faible revenu au Québec peut recevoir simultanément le crédit de solidarité, le crédit TPS/TVH, le crédit pour maintien à domicile, le SRG et la Sécurité de la vieillesse.",
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
      intro="Les Québécois ont accès à plusieurs crédits d'impôt remboursables qui permettent de récupérer de l'argent même sans impôt à payer. Le crédit de solidarité (Revenu Québec), le crédit TPS/TVH (fédéral) et le crédit pour maintien à domicile des aînés sont parmi les plus méconnus. Beaucoup de personnes admissibles ne les réclament tout simplement pas."
      programmes={programmes}
      faqs={faqs}
      motCle="Crédits d'impôt Québec 2026"
    />
  );
}
