import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import { getProgrammeFromCatalogue } from "@/data/finance-2026";
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
  getProgrammeFromCatalogue("subv-bornes-recharge-qc"),
  getProgrammeFromCatalogue("subv-auto-elec-qc"),
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
    reponse: "Oui, les deux subventions du programme Roulez vert sont entièrement cumulables. Un propriétaire qui achète un véhicule électrique neuf et installe une borne peut recevoir jusqu'à 2 000 $ (véhicule, montant 2026) + 600 $ (borne) = 2 600 $ au total de Roulez vert, en plus des crédits fédéraux. Le programme se termine le 31 décembre 2026.",
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
