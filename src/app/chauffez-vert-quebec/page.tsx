import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Chauffez vert Québec 2026 – Volet gaz naturel actif, volet mazout terminé",
  description:
    "Le volet mazout/propane de Chauffez vert a pris fin le 31 mars 2026, mais le volet biénergie électricité-gaz naturel reste actif (jusqu'à 7 400 $, via Énergir). Guide complet des alternatives 2026.",
  keywords: [
    "Chauffez vert Québec 2026",
    "biénergie électricité gaz naturel Énergir",
    "remplacement mazout Québec 2026",
    "aide chauffage électrique Québec",
    "programme Chauffez vert gaz naturel",
    "subvention thermopompe mazout Québec",
  ],
};

const programmes: Programme[] = [
  {
    id: "chauffez-vert-qc",
    nom: "Chauffez vert — volet Passage à la biénergie électricité-gaz naturel",
    organisme: "Gouvernement du Québec / Énergir",
    niveau: "provincial",
    categorie: "energie",
    montant_min: 500,
    montant_max: 7400,
    montant_affiche: "Jusqu'à 7 400 $ (jusqu'à 80 % des coûts d'installation)",
    description:
      "Depuis le 1er avril 2026, l'aide pour convertir un chauffage central au gaz naturel en système biénergie (électricité en source principale, gaz naturel en appoint) est administrée directement par Énergir pour ses clients résidentiels. Ne s'applique pas au remplacement d'un chauffage au mazout ou au propane (volet distinct, terminé).",
    conditions: [
      "Être propriétaire d'une résidence chauffée au gaz naturel desservie par Énergir",
      "Installer un système biénergie avec l'électricité comme source principale",
      "S'inscrire directement auprès d'Énergir",
    ],
    lien_officiel:
      "https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/conversion-bienergie-electricite-gaz-naturel",
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
      "Pour remplacer un chauffage au mazout ou au propane par une thermopompe, maintenant que ce volet de Chauffez vert est terminé, LogisVert d'Hydro-Québec offre jusqu'à 6 700 $ pour l'achat d'une thermopompe centrale ou de mini-splits certifiée ENERGY STAR.",
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
      "Cela dépend du volet. Le volet conversion mazout/propane a cessé d'accepter de nouvelles demandes le 31 mars 2026. Le volet distinct « Passage à la biénergie électricité-gaz naturel » reste actif depuis le 1er avril 2026, mais il est désormais administré directement par Énergir pour ses clients, et non plus par une demande gouvernementale classique.",
  },
  {
    question: "Je chauffe au mazout ou au propane, quelles sont mes options ?",
    reponse:
      "Le volet Chauffez vert pour ce cas précis est terminé. LogisVert d'Hydro-Québec (jusqu'à 6 700 $ pour une thermopompe certifiée ENERGY STAR) et Rénoclimat restent des aides actives à vérifier pour votre projet.",
  },
  {
    question: "Je chauffe au gaz naturel, ai-je encore droit à une aide ?",
    reponse:
      "Oui, si vous êtes client résidentiel d'Énergir. Le volet biénergie électricité-gaz naturel offre jusqu'à 7 400 $ (jusqu'à 80 % des coûts d'installation) pour convertir votre système en biénergie, avec l'électricité comme source principale. L'inscription se fait directement auprès d'Énergir depuis le 1er avril 2026.",
  },
  {
    question: "Que faire si j'avais commencé une démarche Chauffez vert (volet mazout/propane) avant sa fin ?",
    reponse:
      "Vérifiez votre dossier directement auprès du ministère : une demande déposée avant la date de fin peut encore être traitée selon les règles en vigueur au moment du dépôt. Ce site ne peut pas confirmer le statut d'une demande individuelle.",
  },
];

export default function ChauffezVertQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Chauffez vert Québec 2026"
      sousTitre="Volet mazout/propane terminé le 31 mars 2026 — volet biénergie électricité-gaz naturel toujours actif (jusqu'à 7 400 $, via Énergir)."
      intro="Le programme Chauffez vert comptait deux volets distincts. Le volet conversion mazout/propane a cessé d'accepter de nouvelles demandes le 31 mars 2026 : pour ce cas, LogisVert d'Hydro-Québec et Rénoclimat restent vos meilleures options. Le volet Passage à la biénergie électricité-gaz naturel, lui, reste actif depuis le 1er avril 2026 pour les clients résidentiels d'Énergir qui souhaitent convertir leur chauffage au gaz naturel en système biénergie, avec une aide pouvant atteindre 7 400 $."
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
