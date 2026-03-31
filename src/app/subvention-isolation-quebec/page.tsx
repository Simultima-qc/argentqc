import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Subvention isolation maison Québec 2026 – Jusqu'à 5 000 $ via Rénoclimat",
  description:
    "Subventions pour isoler votre maison au Québec en 2026 : murs, grenier, sous-sol, fenêtres. Guide complet Rénoclimat, montants et étapes pour faire votre demande.",
  keywords: [
    "subvention isolation maison Québec",
    "aide isolation Québec 2026",
    "Rénoclimat isolation",
    "subvention isolation murs Québec",
    "aide isolation grenier Québec",
  ],
};

const programmes: Programme[] = [
  {
    id: "renoclimat-isolation",
    nom: "Rénoclimat – Isolation",
    organisme: "Transition énergétique Québec",
    niveau: "provincial",
    categorie: "renovation",
    montant_min: 100,
    montant_max: 10000,
    montant_affiche: "100 $ – 10 000 $",
    description: "Programme principal pour l'isolation au Québec. La subvention est calculée selon l'amélioration de la cote ÉnerGuide de votre maison : plus vos travaux réduisent vos pertes de chaleur, plus vous recevez. L'isolation des murs, du grenier et du sous-sol est parmi les travaux les mieux subventionnés.",
    conditions: [
      "Être propriétaire d'une résidence principale au Québec",
      "Maison construite avant 2012",
      "Évaluation énergétique AVANT et APRÈS les travaux (par un conseiller accrédité)",
      "Travaux réalisés par un entrepreneur certifié RBQ",
    ],
    lien_officiel: "https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/renoclimat",
    criteres: { proprietaire: true, provinces: ["QC"], renovation: true },
  },
  {
    id: "renoclimat-fenetre",
    nom: "Rénoclimat – Fenêtres et portes",
    organisme: "Transition énergétique Québec",
    niveau: "provincial",
    categorie: "renovation",
    montant_min: 100,
    montant_max: 3000,
    montant_affiche: "Variable selon cote ÉnerGuide",
    description: "Le remplacement des fenêtres et portes extérieures est admissible à Rénoclimat s'il améliore suffisamment la cote énergétique de la maison. Combiné à l'isolation, l'effet est maximal.",
    conditions: [
      "Être propriétaire d'une résidence principale au Québec",
      "Maison construite avant 2012",
      "Évaluation énergétique avant et après les travaux",
      "Produits certifiés ENERGY STAR recommandés",
    ],
    lien_officiel: "https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/renoclimat",
    criteres: { proprietaire: true, provinces: ["QC"], renovation: true },
  },
];

const faqs = [
  {
    question: "Quelle isolation est la plus subventionnée par Rénoclimat ?",
    reponse: "L'isolation du grenier et des murs extérieurs donnent généralement le meilleur résultat en termes d'amélioration de cote ÉnerGuide, et donc de subvention. Une maison mal isolée qui reçoit une isolation complète peut gagner 30 à 50 points ÉnerGuide et recevoir entre 2 000 $ et 5 000 $ de subvention.",
  },
  {
    question: "Dois-je obligatoirement faire évaluer ma maison avant de commencer ?",
    reponse: "Oui, c'est obligatoire pour Rénoclimat. Vous devez mandater un conseiller en énergie accrédité pour une évaluation avant les travaux. Cette étape est payante (environ 150 $ à 300 $), mais le coût est partiellement remboursé par le programme. Ne commencez jamais les travaux avant cette évaluation — vous perdriez votre droit à la subvention.",
  },
  {
    question: "Puis-je cumuler Rénoclimat avec d'autres subventions pour l'isolation ?",
    reponse: "Oui. En 2026, Rénoclimat reste le programme principal pour l'isolation. Il n'y a pas d'autre programme provincial dédié à l'isolation, mais vous pouvez combiner Rénoclimat avec certains crédits fédéraux. Vérifiez avec notre questionnaire pour voir toutes vos options.",
  },
  {
    question: "Mon sous-sol non chauffé est-il admissible ?",
    reponse: "Oui, l'isolation des fondations et du plancher entre un sous-sol non chauffé et le reste de la maison est admissible à Rénoclimat. C'est souvent un investissement très rentable car les pertes de chaleur par le plancher peuvent représenter 15% à 25% des pertes totales d'une maison.",
  },
];

export default function SubventionIsolationQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Subvention isolation maison Québec 2026"
      sousTitre="Isolez votre maison et recevez jusqu'à 5 000 $ via Rénoclimat — murs, grenier, sous-sol, fenêtres."
      intro="L'isolation est l'un des investissements les plus rentables pour un propriétaire québécois. En plus de réduire votre facture de chauffage de 20% à 40%, les travaux d'isolation sont parmi les mieux subventionnés par le programme Rénoclimat de Transition énergétique Québec. Une maison mal isolée construite avant 2000 peut recevoir entre 2 000 $ et 5 000 $ de subvention selon l'ampleur des travaux. Voici tout ce qu'il faut savoir pour obtenir votre aide financière pour l'isolation au Québec en 2026."
      programmes={programmes}
      faqs={faqs}
      motCle="Subvention isolation maison Québec 2026"
      pagesRelies={[
        { href: "/subventions-maison-quebec", titre: "Toutes les subventions maison Québec 2026" },
        { href: "/reno-climat-quebec", titre: "Guide Rénoclimat Québec 2026 — étape par étape" },
        { href: "/subvention-thermopompe-quebec", titre: "Subvention thermopompe Québec 2026" },
        { href: "/subvention-renovation-quebec", titre: "Subvention rénovation Québec 2026" },
      ]}
    />
  );
}
