import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Allocation logement Québec 2026 – Aide pour locataires",
  description:
    "L'allocation-logement du Québec aide les locataires à faible revenu. Découvrez les montants 2026, les conditions et comment faire votre demande à la SHQ.",
  keywords: ["allocation logement Québec", "aide logement locataire Québec 2026", "SHQ allocation logement"],
};

const programmes: Programme[] = [
  {
    id: "allocation-logement-qc",
    nom: "Allocation-logement (Québec)",
    organisme: "Société d'habitation du Québec (SHQ)",
    niveau: "provincial",
    categorie: "logement",
    montant_min: 100,
    montant_max: 2040,
    montant_affiche: "Jusqu'à 170 $ par mois",
    description: "Aide financière mensuelle pour les locataires à faible revenu qui consacrent une trop grande part de leurs revenus au loyer. Le montant est calculé selon votre revenu et votre loyer.",
    conditions: ["Être locataire au Québec", "Avoir 50 ans ou plus, ou avoir un enfant à charge", "Revenu annuel brut sous les seuils établis"],
    lien_officiel: "https://www.habitation.gouv.qc.ca/programme/programme/allocation-logement",
    criteres: { locataire: true, provinces: ["QC"], revenu_max: 35000 },
  },
  {
    id: "credit-loyer-qc",
    nom: "Crédit d'impôt pour solidarité",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "credits_impot",
    montant_min: 150,
    montant_max: 2000,
    montant_affiche: "150 $ – 2 000 $",
    description: "Crédit d'impôt remboursable pour les ménages à revenus faibles ou modestes, incluant une composante habitation pour les locataires et propriétaires.",
    conditions: ["Résider au Québec au 31 décembre", "Revenu familial sous les seuils établis", "Produire une déclaration de revenus au Québec"],
    lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/",
    criteres: { provinces: ["QC"], revenu_max: 60000 },
  },
  {
    id: "aide-solidarite-qc",
    nom: "Aide sociale",
    organisme: "Gouvernement du Québec",
    niveau: "provincial",
    categorie: "logement",
    montant_min: 700,
    montant_max: 12000,
    montant_affiche: "Jusqu'à 12 000 $ par année",
    description: "Aide financière de dernier recours pour les personnes sans emploi et sans autres ressources au Québec.",
    conditions: ["Résider au Québec", "Avoir peu ou pas de revenus et d'actifs", "Être dans une situation de besoin financier"],
    lien_officiel: "https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale",
    criteres: { provinces: ["QC"], revenu_max: 15000 },
  },
];

const faqs = [
  {
    question: "Qui peut recevoir l'allocation-logement du Québec ?",
    reponse: "L'allocation-logement s'adresse aux locataires québécois à faible revenu qui consacrent une part importante de leur revenu au loyer. Vous devez avoir 50 ans ou plus, ou avoir au moins un enfant à charge. Des seuils de revenu s'appliquent selon la taille du ménage.",
  },
  {
    question: "Quel est le montant de l'allocation-logement en 2026 ?",
    reponse: "Le montant maximal est de 170 $ par mois (2 040 $ par année). Le montant réel dépend de votre revenu et de votre loyer mensuel. Plus votre loyer représente une grande part de votre revenu, plus vous recevrez d'aide.",
  },
  {
    question: "Comment faire une demande d'allocation-logement ?",
    reponse: "Vous devez faire une demande directement auprès de la Société d'habitation du Québec (SHQ). La demande peut être faite en ligne sur le site de la SHQ ou par courrier. Vous devrez fournir une preuve de loyer et vos informations de revenus.",
  },
  {
    question: "Puis-je cumuler l'allocation-logement et le crédit de solidarité ?",
    reponse: "Oui. L'allocation-logement (SHQ) et le crédit de solidarité (Revenu Québec) sont deux programmes distincts et cumulables. En les combinant, un locataire à faible revenu peut recevoir jusqu'à 4 000 $ d'aide annuelle pour son logement.",
  },
];

export default function AllocationLogementQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Allocation logement Québec 2026"
      sousTitre="Aide financière mensuelle pour les locataires à faible revenu — jusqu'à 170 $ par mois."
      intro="L'allocation-logement de la Société d'habitation du Québec (SHQ) est une aide méconnue qui peut faire une vraie différence pour les locataires à faible revenu. Combinée au crédit de solidarité de Revenu Québec, elle peut représenter plus de 3 000 $ par année pour les ménages admissibles. Pourtant, de nombreux Québécois qui y ont droit ne la réclament pas."
      programmes={programmes}
      faqs={faqs}
      motCle="Allocation logement Québec 2026"
      pagesRelies={[
        { href: "/credit-solidarite-quebec", titre: "Crédit de solidarité Québec" },
        { href: "/credit-impot-quebec", titre: "Tous les crédits d'impôt Québec" },
        { href: "/aide-famille-quebec", titre: "Aide financière famille Québec" },
      ]}
    />
  );
}
