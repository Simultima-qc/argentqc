import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import { getProgrammeFromCatalogue } from "@/data/finance-2026";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Allocation logement Québec 2026 : montant, admissibilité et demande",
  description:
    "Découvrez l'allocation logement au Québec en 2026 : qui peut y avoir droit, montants possibles, critères d'admissibilité et étapes pour faire une demande.",
  keywords: ["allocation logement 2026", "allocation logement Québec 2026", "montant allocation logement", "demande allocation logement"],
};

const programmes: Programme[] = [
  getProgrammeFromCatalogue("allocation-logement-qc"),
  getProgrammeFromCatalogue("credit-loyer-qc"),
  getProgrammeFromCatalogue("aide-solidarite-qc"),
];

const faqs = [
  {
    question: "Qui a droit à l'allocation logement en 2026?",
    reponse: "L'allocation logement s'adresse aux ménages québécois à faible revenu qui consacrent une part importante de leur revenu au logement. L'admissibilité dépend notamment de l'âge, de la situation familiale, du revenu, du loyer et du type de logement.",
  },
  {
    question: "Quel est le montant de l'allocation logement?",
    reponse: "Le montant peut varier selon le revenu, le loyer et la composition du ménage. Vérifiez toujours le montant exact et les seuils en vigueur sur le site officiel de la Société d'habitation du Québec avant de déposer une demande.",
  },
  {
    question: "Comment faire une demande?",
    reponse: "La demande se fait auprès de la Société d'habitation du Québec ou selon les consignes du programme. Préparez vos preuves de revenu, votre bail ou preuve de loyer, vos renseignements personnels et tout document demandé dans le formulaire officiel.",
  },
  {
    question: "L'allocation logement est-elle imposable?",
    reponse: "L'allocation logement est une aide gouvernementale. Son traitement fiscal peut dépendre de votre situation; conservez vos avis et consultez les instructions officielles ou un professionnel au besoin.",
  },
  {
    question: "Puis-je cumuler l'allocation logement et le crédit de solidarité?",
    reponse: "Oui, ce sont deux programmes distincts. Le crédit de solidarité est administré par Revenu Québec, alors que l'allocation logement relève de la SHQ. Les deux peuvent être pertinents pour un ménage locataire à revenu faible ou modeste.",
  },
];

export default function AllocationLogementQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Allocation logement Québec 2026"
      sousTitre="Montants possibles, critères d'admissibilité, demande et documents à préparer pour vérifier votre droit."
      intro="Réponse rapide : l'allocation logement Québec 2026 vise les ménages à faible revenu pour qui le coût du logement pèse lourd dans le budget. L'admissibilité dépend du revenu, du loyer, de la composition du ménage et de certaines conditions liées à l'âge ou aux enfants à charge. Vérifiez le montant exact sur le site officiel avant de déposer votre demande."
      programmes={programmes}
      faqs={faqs}
      motCle="Allocation logement Québec 2026"
      sections={[
        {
          titre: "Critères d'admissibilité à vérifier",
          contenu: [
            "Vérifiez le revenu du ménage, le loyer payé, la composition familiale, l'âge des personnes dans le ménage et le type de logement. Ces critères peuvent influencer autant l'admissibilité que le montant.",
            "Si vous avez aussi droit au crédit d'impôt pour solidarité, les deux programmes doivent être examinés séparément : l'un relève de la SHQ, l'autre de Revenu Québec.",
          ],
        },
        {
          titre: "Comment faire une demande d'allocation logement",
          contenu: [
            "Commencez par consulter la page officielle de la SHQ, puis rassemblez les preuves de revenu, de loyer et de résidence demandées. Le formulaire officiel précisera les documents exigés pour votre situation.",
            "Après l'envoi, conservez une copie de votre demande et surveillez les avis reçus. Les montants et les dates de paiement doivent être confirmés auprès de l'organisme officiel.",
          ],
        },
      ]}
      pagesRelies={[
        { href: "/fr/budget/credit-solidarite", titre: "Crédit de solidarité Québec" },
        { href: "/aide-sociale-quebec", titre: "Aide sociale Québec 2026" },
        { href: "/fr/questionnaire", titre: "Questionnaire aides financières" },
        { href: "/credit-impot-quebec", titre: "Tous les crédits d'impôt Québec" },
        { href: "/aide-famille-quebec", titre: "Aide financière famille Québec" },
      ]}
    />
  );
}
