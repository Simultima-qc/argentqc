import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Rénoclimat Québec 2026 – Guide complet pour obtenir votre subvention",
  description:
    "Tout savoir sur le programme Rénoclimat au Québec en 2026 : admissibilité, travaux couverts, montants, étapes et formulaires. Maximisez votre subvention rénovation.",
  keywords: [
    "Rénoclimat Québec 2026",
    "programme Rénoclimat",
    "subvention Rénoclimat",
    "aide énergie Rénoclimat",
    "rénovation écoénergétique Québec",
  ],
};

const programmes: Programme[] = [
  {
    id: "renoclimat-principal",
    nom: "Rénoclimat",
    organisme: "Transition énergétique Québec",
    niveau: "provincial",
    categorie: "renovation",
    montant_min: 100,
    montant_max: 10000,
    montant_affiche: "100 $ – 10 000 $",
    description: "Programme phare de rénovation écoénergétique du Québec. La subvention est calculée en fonction de l'amélioration de la cote ÉnerGuide de votre résidence. Plus vos travaux améliorent l'efficacité énergétique de votre maison, plus vous recevez. Travaux couverts : isolation, thermopompe, fenêtres, VRC, portes.",
    conditions: [
      "Être propriétaire d'une résidence principale au Québec",
      "Maison construite avant 2012",
      "Évaluation énergétique obligatoire AVANT les travaux",
      "Deuxième évaluation après les travaux pour calculer la subvention",
      "Travaux réalisés par un entrepreneur certifié RBQ",
    ],
    lien_officiel: "https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/renoclimat",
    criteres: { proprietaire: true, provinces: ["QC"], renovation: true },
  },
  {
    id: "logisvert-renoclimat",
    nom: "LogisVert – Thermopompe (cumulable avec Rénoclimat)",
    organisme: "Hydro-Québec",
    niveau: "provincial",
    categorie: "energie",
    montant_min: 500,
    montant_max: 6700,
    montant_affiche: "Jusqu'à 6 700 $",
    description: "En plus de Rénoclimat, les propriétaires qui installent une thermopompe peuvent aussi demander la subvention LogisVert d'Hydro-Québec. Ces deux programmes sont entièrement cumulables pour un total allant jusqu'à 9 700 $.",
    conditions: [
      "Être client Hydro-Québec résidentiel",
      "Thermopompe sur la liste des appareils reconnus",
      "Installation par un entrepreneur certifié RBQ",
      "Demande dans les 9 mois suivant l'installation",
    ],
    lien_officiel: "https://www.hydroquebec.com/residentiel/mieux-consommer/conseils/fenetres-chauffage-climatisation/thermopompes/aide-financiere.html",
    criteres: { proprietaire: true, provinces: ["QC"] },
  },
];

const faqs = [
  {
    question: "Comment fonctionne le calcul de la subvention Rénoclimat ?",
    reponse: "La subvention est calculée selon l'amélioration de la cote ÉnerGuide de votre maison, exprimée en GJ (gigajoules) d'énergie économisée par année. Plus l'amélioration est grande, plus la subvention est élevée. Une maison qui passe de 200 GJ/an à 150 GJ/an (25% d'amélioration) reçoit plus qu'une maison qui passe de 200 GJ/an à 190 GJ/an. C'est pourquoi il vaut mieux combiner plusieurs types de travaux dans une seule demande.",
  },
  {
    question: "Qui peut faire l'évaluation énergétique Rénoclimat ?",
    reponse: "L'évaluation doit être réalisée par un conseiller en énergie accrédité par Transition énergétique Québec. Vous pouvez trouver un évaluateur accrédité sur le site officiel de Rénoclimat. L'évaluation coûte généralement entre 150 $ et 300 $, mais une partie de ce coût est remboursée par le programme.",
  },
  {
    question: "Rénoclimat est-il disponible pour les condos et appartements ?",
    reponse: "Non, Rénoclimat s'adresse aux propriétaires de maisons unifamiliales, jumelées ou de petits immeubles de 1 à 4 logements. Les copropriétaires de condo ne sont généralement pas admissibles pour les unités individuelles, mais les syndicats de copropriété peuvent parfois accéder à des programmes similaires pour les parties communes.",
  },
  {
    question: "Combien de temps dure le programme Rénoclimat ?",
    reponse: "Rénoclimat est un programme permanent mais les budgets peuvent être limités. En 2026, le programme est actif. Il est recommandé de faire votre évaluation le plus tôt possible et de ne pas attendre — les listes d'attente pour les évaluateurs peuvent s'allonger en période de forte demande (automne et hiver).",
  },
  {
    question: "Peut-on faire plusieurs demandes Rénoclimat pour la même maison ?",
    reponse: "Oui, mais chaque demande doit représenter une amélioration supplémentaire mesurable de la cote ÉnerGuide. Vous ne pouvez pas demander la subvention deux fois pour les mêmes travaux, mais vous pouvez revenir pour une deuxième phase de travaux si votre cote s'améliore encore.",
  },
];

export default function RenoClimatQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Rénoclimat Québec 2026 — Guide complet"
      sousTitre="Le programme principal de subvention pour la rénovation écoénergétique au Québec. Jusqu'à 10 000 $ selon l'amélioration de votre cote ÉnerGuide."
      intro="Rénoclimat est le programme phare de Transition énergétique Québec pour aider les propriétaires à rénover leur maison de façon écoénergétique. Contrairement à d'autres subventions fixes, Rénoclimat offre un montant variable basé sur l'amélioration réelle de votre consommation d'énergie — ce qui signifie que plus vos travaux sont ambitieux, plus vous recevez. En 2026, une rénovation bien planifiée peut générer entre 1 000 $ et 10 000 $ de subvention, en plus d'être cumulable avec LogisVert d'Hydro-Québec pour la thermopompe."
      programmes={programmes}
      faqs={faqs}
      motCle="Rénoclimat Québec 2026"
      pagesRelies={[
        { href: "/subventions-maison-quebec", titre: "Toutes les subventions maison Québec 2026" },
        { href: "/subvention-thermopompe-quebec", titre: "Subvention thermopompe Québec 2026" },
        { href: "/subvention-isolation-quebec", titre: "Subvention isolation maison Québec 2026" },
        { href: "/blog/renoclimat-2026-guide-complet", titre: "Guide Rénoclimat — étapes détaillées" },
      ]}
    />
  );
}
