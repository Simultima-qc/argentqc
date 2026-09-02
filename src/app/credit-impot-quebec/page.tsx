import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Crédits d'impôt Québec 2026 – Combien puis-je récupérer ?",
  description:
    "Crédits d'impôt et prestations disponibles au Québec en 2026 : crédit solidarité, maintien à domicile, ACEBE et plus. Repérez les programmes à vérifier.",
  keywords: ["crédit impôt Québec", "crédit impôt Québec combien", "crédits impôt remboursables Québec 2026", "récupérer impôt Québec"],
};

const programmes: Programme[] = [
  {
    id: "credit-loyer-qc",
    nom: "Crédit d'impôt pour solidarité",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "credits_impot",
    montant_min: 0,
    montant_max: 0,
    montant_affiche: "Montant déterminé par Revenu Québec — à vérifier",
    montant_sommable: false,
    preselection_only: true,
    description: "Crédit d'impôt remboursable combinant jusqu'à trois composantes : TVQ, logement et village nordique (pour les 14 villages nordiques du Nunavik). Montant et fréquence de versement déterminés par Revenu Québec selon le dossier complet.",
    conditions: ["Résider au Québec au 31 décembre 2025", "Produire la déclaration de revenus 2025 et l'annexe D si le logement ou le village nordique s'appliquent", "Faire vérifier le montant par Revenu Québec"],
    lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
    criteres: { provinces: ["QC"] },
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
    description: "Prestation fédérale trimestrielle non imposable qui remplace le crédit pour la TPS/TVH depuis juillet 2026.",
    conditions: ["Résider au Canada", "Produire une déclaration de revenus fédérale", "Faire vérifier le montant selon le RFNR 2025 et la composition familiale"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-epicerie-besoins-essentiels.html",
    criteres: {},
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
