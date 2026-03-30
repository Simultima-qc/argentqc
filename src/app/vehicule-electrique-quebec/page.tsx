import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Subvention véhicule électrique Québec 2026 – Roulez vert",
  description:
    "Découvrez toutes les subventions pour l'achat d'un véhicule électrique au Québec en 2026 : Roulez vert, borne de recharge. Jusqu'à 2 600 $ disponibles.",
  keywords: ["subvention véhicule électrique Québec", "Roulez vert 2026", "rabais auto électrique Québec", "subvention VE Québec 2026"],
};

const programmes: Programme[] = [
  {
    id: "subv-auto-elec-qc",
    nom: "Roulez vert – Rabais à l'achat d'un VE",
    organisme: "Transition énergétique Québec",
    niveau: "provincial",
    categorie: "transport",
    montant_min: 500,
    montant_max: 2000,
    montant_affiche: "500 $ – 2 000 $",
    description: "Rabais direct à l'achat ou à la location d'un VÉ neuf ou d'occasion. 2 000 $ pour un 100% électrique neuf, 1 000 $ pour un usage admissible. Programme valide jusqu'au 31 décembre 2026.",
    conditions: ["Résider au Québec", "Véhicule admissible neuf ou d'occasion", "Prix de détail suggéré inférieur à 65 000 $", "Programme valide jusqu'au 31 décembre 2026"],
    lien_officiel: "https://roulezelectrique.gouv.qc.ca/Accueil",
    criteres: { provinces: ["QC"], vehicule_elec: true },
  },
  {
    id: "subv-bornes-recharge-qc",
    nom: "Borne de recharge à domicile – Roulez vert",
    organisme: "Transition énergétique Québec",
    niveau: "provincial",
    categorie: "transport",
    montant_min: 600,
    montant_max: 600,
    montant_affiche: "600 $",
    description: "Subvention de 600 $ pour l'achat et l'installation d'une borne de recharge de niveau 2 à domicile. Cumulable avec le rabais à l'achat du VE.",
    conditions: ["Être propriétaire ou locataire au Québec", "Posséder un véhicule électrique rechargeable", "Installation par un électricien certifié RBQ"],
    lien_officiel: "https://roulezelectrique.gouv.qc.ca/Accueil",
    criteres: { provinces: ["QC"], vehicule_elec: true },
  },
];

const faqs = [
  {
    question: "Est-ce que les subventions VE sont encore disponibles en 2026 ?",
    reponse: "Oui, le programme Roulez vert est toujours actif en 2026 avec un rabais de 2 000 $ pour un VÉ 100% électrique neuf. Le programme se termine le 31 décembre 2026, donc il faut agir avant la fin de l'année.",
  },
  {
    question: "Peut-on cumuler le rabais sur le VE et la subvention pour la borne ?",
    reponse: "Oui, les deux sont cumulables. Vous pouvez recevoir jusqu'à 2 600 $ en achetant un VÉ neuf (2 000 $) et en installant une borne de recharge à domicile (600 $).",
  },
  {
    question: "Le rabais s'applique-t-il aussi aux véhicules d'occasion ?",
    reponse: "Oui, un rabais de 1 000 $ est disponible pour l'achat d'un VÉ d'occasion admissible, à condition que le véhicule n'ait jamais bénéficié de l'aide gouvernementale auparavant.",
  },
  {
    question: "Comment faire la demande de rabais Roulez vert ?",
    reponse: "La demande se fait en ligne sur roulezelectrique.gouv.qc.ca. Vous avez généralement 90 jours après la date d'achat pour soumettre votre demande avec les pièces justificatives.",
  },
];

export default function VehiculeElectriqueQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Subvention véhicule électrique Québec 2026"
      sousTitre="Roulez vert et borne de recharge — toutes les aides disponibles pour passer à l'électrique."
      intro="Le Québec offre encore en 2026 des rabais pour l'achat de véhicules électriques via le programme Roulez vert. Avec un rabais de 2 000 $ à l'achat d'un VÉ neuf et 600 $ pour l'installation d'une borne de recharge à domicile, vous pouvez économiser jusqu'à 2 600 $. Attention : le programme se termine le 31 décembre 2026."
      programmes={programmes}
      faqs={faqs}
      motCle="Subvention véhicule électrique Québec 2026"
      pagesRelies={[
        { href: "/subvention-thermopompe-quebec", titre: "Subvention thermopompe Québec" },
        { href: "/subvention-renovation-quebec", titre: "Subvention rénovation Québec" },
        { href: "/credit-impot-quebec", titre: "Tous les crédits d'impôt Québec" },
      ]}
    />
  );
}
