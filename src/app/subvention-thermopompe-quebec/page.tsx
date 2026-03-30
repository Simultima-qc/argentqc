import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Subvention thermopompe Québec 2026 – Jusqu'à 9 700 $ disponibles",
  description:
    "Découvrez toutes les subventions pour installer une thermopompe au Québec en 2026 : LogisVert Hydro-Québec (6 700 $) + Rénoclimat (3 000 $). Guide complet et étapes.",
  keywords: ["subvention thermopompe Québec", "aide thermopompe Québec 2026", "LogisVert thermopompe", "Rénoclimat thermopompe"],
};

const programmes: Programme[] = [
  {
    id: "logisvert-hydro-thermo",
    nom: "LogisVert – Thermopompe efficace",
    organisme: "Hydro-Québec",
    niveau: "provincial",
    categorie: "energie",
    montant_min: 500,
    montant_max: 6700,
    montant_affiche: "Jusqu'à 6 700 $",
    description: "Aide financière directe pour l'achat et l'installation d'une thermopompe centrale ou mini-splits certifiée ENERGY STAR. Le montant est calculé selon la puissance de la thermopompe à -8°C — plus elle est performante par temps froid, plus la subvention est élevée.",
    conditions: [
      "Être client Hydro-Québec résidentiel",
      "Thermopompe sur la liste des appareils reconnus par Hydro-Québec",
      "Installation par un entrepreneur certifié RBQ",
      "Faire la demande dans les 9 mois suivant l'installation"
    ],
    lien_officiel: "https://www.hydroquebec.com/residentiel/mieux-consommer/conseils/fenetres-chauffage-climatisation/thermopompes/aide-financiere.html",
    criteres: { proprietaire: true, provinces: ["QC"] },
  },
  {
    id: "renoclimat-thermo",
    nom: "Rénoclimat",
    organisme: "Transition énergétique Québec",
    niveau: "provincial",
    categorie: "renovation",
    montant_min: 100,
    montant_max: 10000,
    montant_affiche: "100 $ – 10 000 $",
    description: "Subvention basée sur l'amélioration de la cote énergétique de votre maison. L'installation d'une thermopompe peut générer une subvention de 1 000 $ à 3 000 $ selon l'amélioration obtenue, en plus de LogisVert.",
    conditions: [
      "Être propriétaire d'une résidence principale au Québec",
      "Maison construite avant 2012",
      "Évaluation énergétique avant ET après les travaux",
      "Installation par un entrepreneur certifié RBQ"
    ],
    lien_officiel: "https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/renoclimat",
    criteres: { proprietaire: true, provinces: ["QC"], renovation: true },
  },
];

const faqs = [
  {
    question: "Peut-on cumuler LogisVert et Rénoclimat pour une thermopompe ?",
    reponse: "Oui, et c'est même recommandé. LogisVert (Hydro-Québec) et Rénoclimat sont deux programmes distincts et entièrement cumulables. Pour une thermopompe, vous pouvez recevoir jusqu'à 6 700 $ de LogisVert + jusqu'à 3 000 $ de Rénoclimat = jusqu'à 9 700 $ au total. C'est l'une des meilleures combinaisons disponibles au Québec.",
  },
  {
    question: "Quelle thermopompe choisir pour maximiser les subventions ?",
    reponse: "Pour maximiser LogisVert, choisissez une thermopompe avec une capacité élevée à -8°C (capacité de chauffage à basse température). Hydro-Québec publie une liste des appareils reconnus sur son site. En général, les thermopompes à haute performance en froid (HSPF élevé) donnent les meilleures subventions.",
  },
  {
    question: "Dois-je faire l'évaluation Rénoclimat avant d'installer ma thermopompe ?",
    reponse: "Oui, obligatoirement. Pour Rénoclimat, vous devez faire une évaluation énergétique AVANT les travaux. Si vous installez votre thermopompe sans évaluation préalable, vous perdez la subvention Rénoclimat. Par contre, LogisVert n'exige pas d'évaluation — vous avez 9 mois après l'installation pour faire la demande.",
  },
  {
    question: "Combien de temps faut-il pour recevoir les subventions ?",
    reponse: "LogisVert (Hydro-Québec) : comptez 4 à 8 semaines après la soumission de votre demande complète. Rénoclimat : comptez 8 à 16 semaines après la deuxième évaluation énergétique. Planifiez bien vos travaux — idéalement au printemps ou en été pour avoir les évaluations disponibles et recevoir l'argent avant l'hiver.",
  },
];

export default function SubventionThermopompeQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Subvention thermopompe Québec 2026"
      sousTitre="Jusqu'à 9 700 $ disponibles en cumulant LogisVert Hydro-Québec et Rénoclimat."
      intro="Installer une thermopompe au Québec en 2026 n'a jamais été aussi avantageux financièrement. En cumulant le programme LogisVert d'Hydro-Québec (jusqu'à 6 700 $) et Rénoclimat (jusqu'à 3 000 $), certains propriétaires peuvent réduire leur facture de plus de 9 000 $. Pour une thermopompe qui coûte entre 8 000 $ et 15 000 $, ça représente souvent 50% à 70% du coût total. Voici tout ce qu'il faut savoir pour maximiser vos subventions."
      programmes={programmes}
      faqs={faqs}
      motCle="Subvention thermopompe Québec 2026"
      pagesRelies={[
        { href: "/subvention-renovation-quebec", titre: "Subvention rénovation Québec" },
        { href: "/blog/renoclimat-2026-guide-complet", titre: "Guide complet Rénoclimat 2026" },
        { href: "/vehicule-electrique-quebec", titre: "Subvention véhicule électrique Québec" },
      ]}
    />
  );
}
