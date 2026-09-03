import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Chauffez vert Québec – Programme terminé, alternatives 2026",
  description:
    "Le programme Chauffez vert (remplacement du mazout) a pris fin le 31 mars 2026. Découvrez les alternatives actuelles : LogisVert (thermopompe) et Rénoclimat pour votre projet au Québec.",
  keywords: [
    "Chauffez vert Québec fin du programme",
    "remplacement mazout Québec 2026",
    "aide chauffage électrique Québec",
    "programme Chauffez vert terminé",
    "subvention thermopompe mazout Québec",
    "abandon mazout Québec subvention",
  ],
};

const programmes: Programme[] = [
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
    question: "Le programme Chauffez vert est-il encore disponible en 2026 ?",
    reponse:
      "Non. Le programme Chauffez vert a cessé d'accepter de nouvelles demandes le 31 mars 2026. Si vous souhaitez remplacer un système de chauffage au mazout, au propane ou au gaz naturel, LogisVert (thermopompe, Hydro-Québec) et Rénoclimat restent des aides actives à vérifier pour votre projet.",
  },
  {
    question: "Que faire si j'avais commencé une démarche Chauffez vert avant sa fin ?",
    reponse:
      "Vérifiez votre dossier directement auprès du ministère : une demande déposée avant la date de fin peut encore être traitée selon les règles en vigueur au moment du dépôt. Ce site ne peut pas confirmer le statut d'une demande individuelle.",
  },
  {
    question: "Puis-je encore obtenir de l'aide pour remplacer une thermopompe au mazout ?",
    reponse:
      "Oui, via LogisVert d'Hydro-Québec, qui offre jusqu'à 6 700 $ pour l'achat d'une thermopompe centrale ou de mini-splits certifiée ENERGY STAR, indépendamment de la fin de Chauffez vert. Vérifiez aussi Rénoclimat pour d'autres travaux d'efficacité énergétique.",
  },
  {
    question: "Y a-t-il un successeur annoncé à Chauffez vert ?",
    reponse:
      "Aucun successeur direct n'a été confirmé au moment de la rédaction. Consultez la page officielle du gouvernement du Québec sur l'aide financière à la rénovation écoénergétique pour toute nouvelle mesure.",
  },
];

export default function ChauffezVertQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Chauffez vert Québec — Programme terminé"
      sousTitre="Le programme Chauffez vert a pris fin le 31 mars 2026. Voici les alternatives actuelles pour remplacer un chauffage au mazout, au propane ou au gaz."
      intro="Le programme Chauffez vert, qui aidait les propriétaires à abandonner le chauffage au mazout, au propane ou au gaz naturel, a cessé d'accepter de nouvelles demandes le 31 mars 2026. Si vous planifiez ce type de remplacement, LogisVert d'Hydro-Québec (jusqu'à 6 700 $ pour une thermopompe certifiée ENERGY STAR) et Rénoclimat restent des aides actives à vérifier pour votre projet."
      programmes={programmes}
      faqs={faqs}
      motCle="Chauffez vert Québec"
      pagesRelies={[
        { href: "/subventions-maison-quebec", titre: "Toutes les subventions maison Québec" },
        { href: "/subvention-thermopompe-quebec", titre: "Subvention thermopompe Québec" },
        { href: "/reno-climat-quebec", titre: "Guide Rénoclimat 2026" },
      ]}
    />
  );
}
