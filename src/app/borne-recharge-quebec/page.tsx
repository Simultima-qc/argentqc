import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Subvention borne de recharge Québec 2026 : montant, formulaire et conditions",
  description:
    "Voyez les subventions disponibles pour une borne de recharge au Québec en 2026, les conditions d'admissibilité et le formulaire de demande.",
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
    question: "Où trouver le formulaire pour la subvention borne électrique au Québec?",
    reponse: "La demande se fait sur le portail officiel du programme Roulez vert. Avant de remplir le formulaire, préparez vos factures, les preuves d'achat ou de location du véhicule admissible, les renseignements sur la borne et les documents liés à l'installation.",
  },
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
      sousTitre="Montant, conditions, documents à préparer et formulaire officiel pour demander la subvention."
      intro="Réponse rapide : pour demander la subvention borne de recharge au Québec, utilisez le formulaire officiel du programme Roulez vert et préparez vos preuves d'achat, factures d'installation, renseignements sur la borne et preuve liée au véhicule admissible. Les conditions et les montants peuvent changer; vérifiez toujours la page officielle avant d'acheter ou d'installer l'équipement."
      programmes={programmes}
      faqs={faqs}
      motCle="Subvention borne de recharge Québec 2026"
      sections={[
        {
          titre: "Formulaire pour demander la subvention borne électrique au Québec",
          contenu: [
            "La demande doit être faite à partir du formulaire ou du portail officiel indiqué par le programme Roulez vert. Utilisez toujours le lien officiel avant d'acheter la borne, car les conditions peuvent changer.",
            "Préparez les factures d'achat, la preuve d'installation, les renseignements sur la borne, la preuve liée au véhicule admissible et vos coordonnées. Si vous êtes locataire ou en copropriété, gardez aussi l'autorisation écrite requise.",
            "Le questionnaire ArgentQC peut vous aider à repérer d'autres aides liées au véhicule électrique, au logement ou aux rénovations, mais la demande finale doit être déposée sur le site gouvernemental.",
          ],
        },
      ]}
      pagesRelies={[
        { href: "/vehicule-electrique-quebec", titre: "Toutes les subventions véhicule électrique Québec" },
        { href: "/subventions-maison-quebec", titre: "Toutes les subventions maison Québec 2026" },
        { href: "/fr/questionnaire", titre: "Questionnaire aides financières" },
        { href: "/fr/budget/cout-vie", titre: "Coût de la vie au Québec 2026" },
      ]}
    />
  );
}
