import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Subvention rénovation Québec 2026 – Tous les programmes disponibles",
  description:
    "Rénoclimat, LogisVert Hydro-Québec, crédits fédéraux : découvrez toutes les subventions de rénovation disponibles au Québec en 2026. Jusqu'à 20 000 $ disponibles.",
  keywords: ["subvention rénovation Québec", "aide rénovation Québec 2026", "Rénoclimat subvention", "subvention thermopompe Québec"],
};

const programmes: Programme[] = [
  {
    id: "renoclimat-qc",
    nom: "Rénoclimat",
    organisme: "Transition énergétique Québec",
    niveau: "provincial",
    categorie: "renovation",
    montant_min: 100,
    montant_max: 10000,
    montant_affiche: "100 $ – 10 000 $",
    description: "Subventions pour améliorer l'efficacité énergétique : isolation, fenêtres, portes, thermopompe. Une évaluation énergétique avant et après les travaux est requise.",
    conditions: ["Être propriétaire d'une résidence principale au Québec", "Maison construite avant 2012", "Évaluation énergétique avant les travaux"],
    lien_officiel: "https://www.quebec.ca/logement-territoire/chauffage-consommation-energie/aides-financieres-renovations/renoclimat",
    criteres: { proprietaire: true, provinces: ["QC"], renovation: true },
  },
  {
    id: "logisvert-hydro",
    nom: "LogisVert – Thermopompe efficace",
    organisme: "Hydro-Québec",
    niveau: "provincial",
    categorie: "energie",
    montant_min: 500,
    montant_max: 6700,
    montant_affiche: "Jusqu'à 6 700 $",
    description: "Aide financière pour l'achat et l'installation d'une thermopompe certifiée ENERGY STAR. Montant calculé selon la puissance à -8°C.",
    conditions: ["Être client Hydro-Québec", "Thermopompe sur la liste reconnue par Hydro-Québec", "Installation par un entrepreneur certifié RBQ"],
    lien_officiel: "https://www.hydroquebec.com/residentiel/mieux-consommer/conseils/fenetres-chauffage-climatisation/thermopompes/aide-financiere.html",
    criteres: { proprietaire: true, provinces: ["QC"], renovation: true },
  },
  {
    id: "credit-reno-fed",
    nom: "Crédit pour rénovations multigénérationnelles",
    organisme: "Gouvernement du Canada",
    niveau: "federal",
    categorie: "renovation",
    montant_min: 0,
    montant_max: 7500,
    montant_affiche: "Jusqu'à 7 500 $",
    description: "Crédit d'impôt remboursable de 15% pour créer un logement secondaire pour un aîné ou une personne handicapée dans votre domicile.",
    conditions: ["Créer un logement secondaire dans votre domicile", "Destiné à un aîné (65+) ou une personne handicapée", "Dépenses entre 500 $ et 50 000 $"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/programmes/a-propos-agence-revenu-canada-arc/impot-cible/credit-renovation-domiciliaire-multigeneration.html",
    criteres: { proprietaire: true, renovation: true },
  },
  {
    id: "credit-impot-reno-fed",
    nom: "Crédit d'impôt pour rénovation domiciliaire (CIHA)",
    organisme: "Gouvernement du Canada",
    niveau: "federal",
    categorie: "renovation",
    montant_min: 0,
    montant_max: 3750,
    montant_affiche: "Jusqu'à 3 750 $",
    description: "Crédit d'impôt de 15% sur les dépenses de rénovation pour améliorer l'accessibilité ou la sécurité d'un domicile.",
    conditions: ["Travaux pour améliorer l'accessibilité ou la sécurité", "Maximum de 10 000 $ en dépenses admissibles", "Pour une personne âgée ou handicapée"],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tous-les-credits-deductions.html",
    criteres: { proprietaire: true, renovation: true },
  },
];

const faqs = [
  {
    question: "Puis-je cumuler Rénoclimat et LogisVert Hydro-Québec ?",
    reponse: "Oui, dans la plupart des cas ces programmes sont cumulables. Par exemple, pour l'installation d'une thermopompe, vous pouvez obtenir une subvention via Rénoclimat ET une aide via LogisVert d'Hydro-Québec, pour un total pouvant dépasser 10 000 $.",
  },
  {
    question: "Dois-je faire les travaux avant ou après avoir soumis ma demande ?",
    reponse: "Pour Rénoclimat, une évaluation énergétique avant les travaux est obligatoire. Pour LogisVert d'Hydro-Québec, vous avez 9 mois après l'installation pour soumettre votre demande. Consultez chaque programme pour les détails.",
  },
  {
    question: "Les locataires peuvent-ils profiter de ces subventions ?",
    reponse: "La plupart des subventions de rénovation s'adressent aux propriétaires. Les locataires peuvent toutefois bénéficier de l'allocation-logement et du crédit de solidarité.",
  },
  {
    question: "Quel est le délai pour recevoir les fonds ?",
    reponse: "Les délais varient selon les programmes : de 4 à 12 semaines pour Rénoclimat, et jusqu'à 9 mois pour LogisVert d'Hydro-Québec. Prévoyez ces délais dans votre planification financière.",
  },
];

export default function SubventionRenovationQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Subvention rénovation Québec 2026"
      sousTitre="Rénoclimat, LogisVert Hydro-Québec et crédits fédéraux — tous les programmes de rénovation disponibles."
      intro="Les propriétaires québécois ont accès à plusieurs programmes de subvention pour financer leurs rénovations énergétiques. En combinant Rénoclimat, LogisVert d'Hydro-Québec et les crédits fédéraux, certains projets peuvent être financés à plus de 50% par des aides gouvernementales. Ces programmes visent à réduire la consommation d'énergie et à améliorer le confort des résidences."
      programmes={programmes}
      faqs={faqs}
      motCle="Subvention rénovation Québec 2026"
    />
  );
}
