import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Subvention borne de recharge Québec 2026 – 600 $ disponibles",
  description:
    "Obtenez 600 $ de subvention pour installer une borne de recharge niveau 2 à domicile au Québec via le programme Roulez vert. Guide complet 2026.",
  keywords: [
    "subvention borne de recharge Québec",
    "aide borne recharge Québec 2026",
    "Roulez vert borne recharge",
    "installation borne recharge maison Québec",
    "subvention véhicule électrique Québec",
  ],
};

const programmes: Programme[] = [
  {
    id: "roulez-vert-borne",
    nom: "Roulez vert – Borne de recharge résidentielle",
    organisme: "Transition énergétique Québec",
    niveau: "provincial",
    categorie: "transport",
    montant_min: 600,
    montant_max: 600,
    montant_affiche: "600 $",
    description: "Subvention de 600 $ pour l'achat et l'installation d'une borne de recharge de niveau 2 (240V) à domicile, dans le cadre du programme Roulez vert. La borne doit être certifiée et installée par un électricien licencié. Cette aide est cumulable avec la subvention à l'achat d'un véhicule électrique.",
    conditions: [
      "Posséder ou commander un véhicule électrique ou hybride rechargeable admissible",
      "Résider au Québec",
      "Borne de niveau 2 certifiée sur la liste des appareils reconnus",
      "Installation par un électricien titulaire d'une licence de la CMEQ",
      "Faire la demande avant ou dans les 6 mois suivant l'installation",
    ],
    lien_officiel: "https://vehiculeselectriques.gouv.qc.ca/rabais/borne-recharge/index.asp",
    criteres: { provinces: ["QC"] },
  },
  {
    id: "roulez-vert-veh",
    nom: "Roulez vert – Véhicule électrique neuf",
    organisme: "Transition énergétique Québec",
    niveau: "provincial",
    categorie: "transport",
    montant_min: 4000,
    montant_max: 7000,
    montant_affiche: "4 000 $ – 7 000 $",
    description: "En plus de la subvention pour la borne, vous pouvez recevoir jusqu'à 7 000 $ pour l'achat d'un véhicule électrique neuf via le programme Roulez vert. Ces deux aides sont cumulables.",
    conditions: [
      "Résider au Québec",
      "Acheter ou louer un véhicule électrique neuf admissible",
      "Prix de vente maximal établi par le programme",
      "Demande soumise au moment de l'achat chez le concessionnaire",
    ],
    lien_officiel: "https://vehiculeselectriques.gouv.qc.ca/rabais/vehicule-neuf/index.asp",
    criteres: { provinces: ["QC"] },
  },
];

const faqs = [
  {
    question: "Quelle borne de recharge choisir pour avoir droit à la subvention ?",
    reponse: "Vous devez choisir une borne de niveau 2 (240V) sur la liste des appareils reconnus par Roulez vert. Les bornes de niveau 1 (120V, prise standard) ne sont pas subventionnées. Les marques populaires admissibles incluent ChargePoint, Bosch, FLO, Schneider Electric et plusieurs autres. Consultez la liste officielle sur vehiculeselectriques.gouv.qc.ca avant d'acheter.",
  },
  {
    question: "Puis-je installer une borne si je suis locataire ?",
    reponse: "Oui, les locataires peuvent être admissibles à la subvention, mais vous devez obtenir l'autorisation écrite de votre propriétaire pour les modifications électriques. La borne doit être installée par un électricien licencié. En pratique, la majorité des installations subventionnées se font chez des propriétaires.",
  },
  {
    question: "Combien coûte l'installation d'une borne de recharge niveau 2 ?",
    reponse: "Le coût total varie entre 800 $ et 2 500 $ selon la distance entre votre tableau électrique et l'emplacement souhaité pour la borne, et selon si des mises à niveau électriques sont nécessaires. La subvention de 600 $ couvre donc une partie significative du coût — parfois 30% à 75% du total.",
  },
  {
    question: "La subvention borne de recharge est-elle cumulable avec la subvention véhicule électrique ?",
    reponse: "Oui, les deux subventions du programme Roulez vert sont entièrement cumulables. Un propriétaire qui achète un véhicule électrique et installe une borne peut recevoir jusqu'à 7 000 $ (véhicule) + 600 $ (borne) = 7 600 $ au total de Roulez vert, en plus des crédits fédéraux.",
  },
];

export default function BorneRechargeQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Subvention borne de recharge Québec 2026"
      sousTitre="600 $ pour installer une borne de niveau 2 à domicile via le programme Roulez vert — cumulable avec la subvention véhicule électrique."
      intro="Vous avez un véhicule électrique ou prévoyez en acheter un ? Le programme Roulez vert de Transition énergétique Québec offre 600 $ pour l'installation d'une borne de recharge de niveau 2 à votre domicile. Cette aide est cumulable avec la subvention à l'achat du véhicule (jusqu'à 7 000 $), pour un total potentiel de 7 600 $. La borne de niveau 2 recharge votre véhicule en 4 à 8 heures (contre 20+ heures avec une prise 120V), rendant la recharge à domicile pratique et économique."
      programmes={programmes}
      faqs={faqs}
      motCle="Subvention borne de recharge Québec 2026"
      pagesRelies={[
        { href: "/vehicule-electrique-quebec", titre: "Toutes les subventions véhicule électrique Québec" },
        { href: "/subventions-maison-quebec", titre: "Toutes les subventions maison Québec 2026" },
        { href: "/cout-vie-quebec", titre: "Coût de la vie au Québec 2026" },
      ]}
    />
  );
}
