import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Crédit d'impôt frais médicaux Québec 2026 – Montants et dépenses admissibles",
  description:
    "Tout sur le crédit d'impôt pour frais médicaux au Québec en 2026 : dépenses admissibles (lunettes, dentiste, médicaments), montants, et comment le réclamer.",
  keywords: ["crédit impôt frais médicaux Québec", "frais médicaux déductibles Québec 2026", "remboursement frais médicaux Québec"],
};

const programmes: Programme[] = [
  {
    id: "frais-medicaux-qc-2",
    nom: "Crédit d'impôt pour frais médicaux (Québec)",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "sante",
    montant_min: 0,
    montant_max: 2000,
    montant_affiche: "Jusqu'à 20% des dépenses",
    description: "Crédit d'impôt remboursable sur vos frais médicaux admissibles. Le taux varie entre 5% et 20% selon votre revenu familial — les ménages à faible revenu reçoivent un crédit plus élevé. Couvre lunettes, médicaments sur ordonnance, dentiste, physio, et plus.",
    conditions: [
      "Résider au Québec",
      "Produire une déclaration de revenus provinciale",
      "Frais médicaux payés pour vous, votre conjoint ou vos enfants à charge",
      "Conserver tous les reçus et ordonnances"
    ],
    lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-frais-medicaux/",
    criteres: { provinces: ["QC"] },
  },
  {
    id: "frais-medicaux-fed-2",
    nom: "Crédit d'impôt pour frais médicaux (fédéral)",
    organisme: "Gouvernement du Canada",
    niveau: "federal",
    categorie: "sante",
    montant_min: 0,
    montant_max: 3000,
    montant_affiche: "15% des dépenses au-delà du seuil",
    description: "Crédit d'impôt fédéral de 15% sur les frais médicaux admissibles dépassant 3% de votre revenu net (ou 2 635 $ en 2026). Cumulable avec le crédit provincial québécois.",
    conditions: [
      "Résider au Canada",
      "Dépenses dépassant 3% du revenu net ou 2 635 $ (le moins élevé)",
      "Frais pour vous, votre conjoint ou vos enfants à charge",
      "Reçus obligatoires"
    ],
    lien_officiel: "https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/ligne-33099-33199-depenses-admissibles-frais-medicaux.html",
    criteres: { provinces: ["QC", "ON", "BC", "AB", "MB", "SK", "NB", "NS", "PE", "NL"] },
  },
  {
    id: "credit-maintien-qc-2",
    nom: "Crédit d'impôt pour maintien à domicile des aînés",
    organisme: "Revenu Québec",
    niveau: "provincial",
    categorie: "sante",
    montant_min: 500,
    montant_max: 6000,
    montant_affiche: "Jusqu'à 6 000 $",
    description: "Pour les aînés de 70 ans et plus : crédit remboursable de 40% sur les dépenses de soins à domicile admissibles, incluant soins infirmiers, aide ménagère et services de santé à domicile.",
    conditions: [
      "Avoir 70 ans ou plus",
      "Résider au Québec",
      "Services admissibles rendus à domicile (soins, aide ménagère, etc.)"
    ],
    lien_officiel: "https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-maintien-a-domicile/",
    criteres: { provinces: ["QC"], age_min: 70 },
  },
];

const faqs = [
  {
    question: "Quelles dépenses médicales sont admissibles au crédit d'impôt ?",
    reponse: "Les dépenses admissibles incluent : lunettes et verres de contact prescrits, médicaments sur ordonnance, soins dentaires (extractions, couronnes, orthodontie), physiothérapie, ergothérapie, psychologie, appareils auditifs, fauteuils roulants, et bien d'autres. Les dépenses esthétiques (blanchiment des dents, chirurgie esthétique) ne sont généralement pas admissibles.",
  },
  {
    question: "Comment calculer mon crédit d'impôt pour frais médicaux ?",
    reponse: "Au fédéral : additionnez toutes vos dépenses médicales de 12 mois consécutifs, soustrayez le seuil (3% de votre revenu net ou 2 635 $, le moins élevé), et multipliez par 15%. Au provincial : le calcul est similaire mais le taux varie entre 5% et 20% selon votre revenu. Les deux crédits sont cumulables.",
  },
  {
    question: "Puis-je inclure les frais médicaux de mon conjoint et de mes enfants ?",
    reponse: "Oui. Vous pouvez regrouper les frais médicaux de votre conjoint et de vos enfants à charge avec les vôtres. Il est souvent avantageux que le conjoint avec le revenu le plus faible réclame tous les frais médicaux de la famille, car le seuil est calculé sur son revenu (plus bas = seuil plus bas = crédit plus élevé).",
  },
  {
    question: "Dois-je joindre mes reçus à ma déclaration de revenus ?",
    reponse: "Non, vous ne soumettez pas les reçus avec votre déclaration, mais vous devez les conserver pendant 6 ans au cas où Revenu Québec ou l'ARC vous demanderait de les présenter lors d'une vérification.",
  },
];

export default function CreditImpotFraisMedicauxPage() {
  return (
    <SeoProgrammesPage
      titre="Crédit d'impôt pour frais médicaux Québec 2026"
      sousTitre="Récupérez jusqu'à 20% de vos dépenses médicales — lunettes, dentiste, médicaments et plus."
      intro="Le crédit d'impôt pour frais médicaux est l'un des crédits les plus méconnus et pourtant les plus accessibles. Au Québec, vous pouvez récupérer jusqu'à 20% de vos dépenses médicales admissibles grâce au crédit provincial, en plus du 15% fédéral. Une famille qui cumule dentiste, lunettes et médicaments sur ordonnance peut facilement réclamer 2 000 $ à 5 000 $ en dépenses admissibles — et récupérer plusieurs centaines de dollars. La clé : garder tous ses reçus."
      programmes={programmes}
      faqs={faqs}
      motCle="Crédit impôt frais médicaux Québec 2026"
      pagesRelies={[
        { href: "/aide-lunettes-quebec", titre: "Aide pour lunettes Québec" },
        { href: "/credit-impot-quebec", titre: "Tous les crédits d'impôt Québec" },
        { href: "/credit-solidarite-quebec", titre: "Crédit de solidarité Québec" },
      ]}
    />
  );
}
