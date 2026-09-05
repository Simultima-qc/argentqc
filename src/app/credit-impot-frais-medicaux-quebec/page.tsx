import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import { getProgrammeFromCatalogue } from "@/data/finance-2026";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Crédit d'impôt frais médicaux Québec 2026 – Montants et dépenses admissibles",
  description:
    "Tout sur le crédit d'impôt pour frais médicaux au Québec en 2026 : dépenses admissibles (lunettes, dentiste, médicaments), montants, et comment le réclamer.",
  keywords: ["crédit impôt frais médicaux Québec", "frais médicaux déductibles Québec 2026", "remboursement frais médicaux Québec"],
};

const programmes: Programme[] = [
  // frais-medicaux-qc-2/frais-medicaux-fed-2 were page-local copies that
  // drifted from the governed catalogue (issue #93): they still claimed a
  // refundable, income-variable-rate Québec credit and an outdated federal
  // rate paired with a stale dollar threshold presented as current. Issue
  // #88 revalidated both credits against official sources (ARC line
  // 33099/33199; Revenu Québec ligne 381): Québec's credit is non-refundable
  // at a fixed 20% on expenses above 3% of net family income (no fixed
  // dollar cap), and the federal rate/threshold are the 2026 governed values
  // below. Both credits now source the catalogue under
  // credit-frais-medicaux-qc/-fed; see the durable reports on issues #88 and
  // #93 for the full revalidation detail.
  getProgrammeFromCatalogue("credit-frais-medicaux-qc"),
  getProgrammeFromCatalogue("credit-frais-medicaux-fed"),
  getProgrammeFromCatalogue("credit-maintien-qc"),
];

const faqs = [
  {
    question: "Quelles dépenses médicales sont admissibles au crédit d'impôt ?",
    reponse: "Les dépenses admissibles incluent : lunettes et verres de contact prescrits, médicaments sur ordonnance, soins dentaires (extractions, couronnes, orthodontie), physiothérapie, ergothérapie, psychologie, appareils auditifs, fauteuils roulants, et bien d'autres. Les dépenses esthétiques (blanchiment des dents, chirurgie esthétique) ne sont généralement pas admissibles.",
  },
  {
    question: "Comment calculer mon crédit d'impôt pour frais médicaux ?",
    reponse: "Au fédéral : additionnez toutes vos dépenses médicales de 12 mois consécutifs, soustrayez le seuil (le moindre de 3% de votre revenu net ou 2 834 $ pour l'année d'imposition 2025 — le seuil 2026 n'est pas encore publié par l'ARC), et multipliez par 14% (taux en vigueur pour 2026). Au provincial : le crédit québécois est non remboursable, à un taux fixe de 20% sur la partie des dépenses admissibles qui dépasse 3% de votre revenu familial net, sans plafond en dollars fixe. Les deux crédits sont cumulables.",
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
      sousTitre="Récupérez 20% de vos dépenses médicales admissibles au provincial, en plus du crédit fédéral — lunettes, dentiste, médicaments et plus."
      intro="Le crédit d'impôt pour frais médicaux est l'un des crédits les plus méconnus et pourtant les plus accessibles. Au Québec, le crédit provincial est non remboursable et récupère 20% de vos dépenses médicales admissibles qui dépassent 3% de votre revenu familial net, en plus du crédit fédéral (14% pour l'année d'imposition 2026, sur les dépenses dépassant le moindre de 3% du revenu net ou 2 834 $ pour 2025 — le seuil 2026 n'est pas encore publié par l'ARC). Une famille qui cumule dentiste, lunettes et médicaments sur ordonnance peut facilement réclamer 2 000 $ à 5 000 $ en dépenses admissibles — et récupérer plusieurs centaines de dollars. La clé : garder tous ses reçus."
      programmes={programmes}
      faqs={faqs}
      motCle="Crédit impôt frais médicaux Québec 2026"
      pagesRelies={[
        { href: "/aide-lunettes-quebec", titre: "Aide pour lunettes Québec" },
        { href: "/credit-impot-quebec", titre: "Tous les crédits d'impôt Québec" },
        { href: "/fr/budget/credit-solidarite", titre: "Crédit de solidarité Québec" },
      ]}
    />
  );
}
