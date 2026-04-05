import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Chauffez vert Québec 2026 – Jusqu'à 5 000 $ pour abandonner le mazout",
  description:
    "Programme Chauffez vert au Québec en 2026 : obtenez jusqu'à 5 000 $ pour remplacer votre chauffage au mazout, propane ou gaz par une thermopompe ou un système électrique. Guide complet.",
  keywords: [
    "Chauffez vert Québec 2026",
    "subvention remplacement mazout Québec",
    "aide chauffage électrique Québec",
    "programme Chauffez vert TEQ",
    "subvention thermopompe mazout Québec",
    "abandon mazout Québec subvention",
  ],
};

const programmes: Programme[] = [
  {
    id: "chauffez-vert-qc",
    nom: "Chauffez vert",
    organisme: "Transition énergétique Québec",
    niveau: "provincial",
    categorie: "energie",
    montant_min: 1000,
    montant_max: 5000,
    montant_affiche: "1 000 $ – 5 000 $",
    description:
      "Aide financière pour remplacer un système de chauffage à combustibles fossiles (mazout, propane, gaz naturel) par un système propre : thermopompe, géothermie, biomasse ou chauffage électrique. Le montant varie selon le type de remplacement et la capacité du nouveau système.",
    conditions: [
      "Être propriétaire d'une résidence principale au Québec",
      "Système actuel : mazout, propane ou gaz naturel",
      "Nouveau système : thermopompe, géothermie, biomasse ou électrique",
      "Travaux réalisés par un entrepreneur certifié RBQ",
      "Faire la demande avant le début des travaux",
    ],
    lien_officiel:
      "https://www.transitionenergetique.gouv.qc.ca/residentiel/programmes/chauffez-vert",
    criteres: { proprietaire: true, provinces: ["QC"], renovation: true },
  },
  {
    id: "logisvert-hydro-cv",
    nom: "LogisVert – Thermopompe efficace",
    organisme: "Hydro-Québec",
    niveau: "provincial",
    categorie: "energie",
    montant_min: 500,
    montant_max: 6700,
    montant_affiche: "Jusqu'à 6 700 $",
    description:
      "Si vous remplacez votre mazout par une thermopompe, vous pouvez cumuler Chauffez vert avec LogisVert d'Hydro-Québec. LogisVert offre jusqu'à 6 700 $ supplémentaires pour l'achat d'une thermopompe certifiée ENERGY STAR.",
    conditions: [
      "Être client Hydro-Québec résidentiel",
      "Thermopompe sur la liste des appareils reconnus par Hydro-Québec",
      "Installation par un entrepreneur certifié RBQ",
      "Faire la demande dans les 9 mois suivant l'installation",
    ],
    lien_officiel:
      "https://www.hydroquebec.com/residentiel/mieux-consommer/conseils/fenetres-chauffage-climatisation/thermopompes/aide-financiere.html",
    criteres: { proprietaire: true, provinces: ["QC"], renovation: true },
  },
];

const faqs = [
  {
    question: "Quel est le montant exact de la subvention Chauffez vert ?",
    reponse:
      "Le montant varie selon le type de remplacement : 1 000 $ à 5 000 $ selon le nouveau système installé. Le remplacement par une thermopompe donne généralement le montant le plus élevé. Consultez le site de Transition énergétique Québec pour la grille tarifaire exacte selon votre situation.",
  },
  {
    question: "Peut-on cumuler Chauffez vert et LogisVert Hydro-Québec ?",
    reponse:
      "Oui, et c'est la combinaison la plus avantageuse. Si vous remplacez votre mazout par une thermopompe, vous pouvez recevoir jusqu'à 5 000 $ via Chauffez vert + jusqu'à 6 700 $ via LogisVert = jusqu'à 11 700 $ au total. C'est l'une des meilleures aides disponibles pour les propriétaires chauffés au mazout.",
  },
  {
    question: "Dois-je faire une demande avant ou après les travaux ?",
    reponse:
      "Pour Chauffez vert, il est fortement recommandé de faire la demande AVANT le début des travaux. Contrairement à LogisVert, une demande préalable peut être requise pour obtenir l'aide. Vérifiez les conditions actuelles sur le site officiel de TEQ avant de planifier vos travaux.",
  },
  {
    question: "Mon système de chauffage au gaz naturel est-il admissible ?",
    reponse:
      "Oui, le remplacement d'un système au gaz naturel est admissible au programme Chauffez vert, en plus du mazout et du propane. L'objectif est de réduire la dépendance aux combustibles fossiles, peu importe le type.",
  },
  {
    question: "Combien de temps pour recevoir la subvention ?",
    reponse:
      "Comptez généralement 6 à 12 semaines après la soumission du dossier complet. Assurez-vous d'avoir toutes vos factures, preuves d'installation et certification de l'entrepreneur RBQ avant de soumettre pour éviter des délais supplémentaires.",
  },
];

export default function ChauffezVertQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Chauffez vert Québec 2026"
      sousTitre="Jusqu'à 5 000 $ pour remplacer votre mazout, propane ou gaz par un système propre — cumulable avec LogisVert Hydro-Québec."
      intro="Le programme Chauffez vert de Transition énergétique Québec aide les propriétaires à abandonner le chauffage au mazout, au propane ou au gaz naturel. En 2026, cette aide peut atteindre 5 000 $ — et si vous choisissez une thermopompe comme système de remplacement, vous pouvez cumuler avec LogisVert d'Hydro-Québec pour un total pouvant dépasser 11 000 $. Pour un système qui coûte entre 8 000 $ et 18 000 $, c'est une aide considérable."
      programmes={programmes}
      faqs={faqs}
      motCle="Chauffez vert Québec 2026"
      pagesRelies={[
        { href: "/subventions-maison-quebec", titre: "Toutes les subventions maison Québec" },
        { href: "/subvention-thermopompe-quebec", titre: "Subvention thermopompe Québec" },
        { href: "/reno-climat-quebec", titre: "Guide Rénoclimat 2026" },
      ]}
    />
  );
}
