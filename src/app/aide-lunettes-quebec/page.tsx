import type { Metadata } from "next";
import SeoProgrammesPage from "@/components/SeoProgrammesPage";
import { getProgrammeFromCatalogue } from "@/data/finance-2026";
import type { Programme } from "@/types";

export const metadata: Metadata = {
  title: "Aide pour lunettes Québec 2026 – Remboursements et crédits disponibles",
  description:
    "Découvrez les aides disponibles pour payer vos lunettes au Québec en 2026 : RAMQ, crédit d'impôt pour frais médicaux provincial et fédéral. Calculez votre remboursement.",
  keywords: ["aide lunettes Québec", "remboursement lunettes Québec 2026", "RAMQ lunettes", "crédit impôt frais médicaux lunettes"],
};

const programmes: Programme[] = [
  // frais-medicaux-fed/frais-medicaux-qc were page-local copies with no
  // catalogue counterpart representing the same claim (issue #86 residual).
  // Issue #88 revalidated both credits against official sources (ARC line
  // 33099/33199; Revenu Québec ligne 381) and reconciled the real
  // disagreement found on the Québec side: this page previously described
  // it as a "remboursable" credit capped at 1 500 $ varying by income, but
  // the credit that applies to eyeglasses generally is the non-refundable
  // 20 % credit on expenses above 3 % of net family income, with no fixed
  // dollar cap (a separate, narrower refundable credit for low-income
  // workers exists but is out of this page's scope). Both credits now
  // source the catalogue under credit-frais-medicaux-fed/-qc; see the
  // durable report on issue #88 and programmes-2026.ts sourceNote for the
  // full revalidation detail.
  getProgrammeFromCatalogue("credit-frais-medicaux-fed"),
  getProgrammeFromCatalogue("credit-frais-medicaux-qc"),
  // credit-solidarite-sante was a page-local alias for the same governed
  // program as credit-loyer-qc (Crédit d'impôt pour solidarité), already
  // at 0 $/0 $ "à vérifier" on both sides — a safe id consolidation, not a
  // claim change (issue #86).
  getProgrammeFromCatalogue("credit-loyer-qc"),
];

const faqs = [
  {
    question: "Est-ce que la RAMQ couvre les lunettes au Québec ?",
    reponse: "La RAMQ couvre les examens de la vue pour les enfants de moins de 18 ans et les personnes de 65 ans et plus. Pour les lunettes, la RAMQ ne rembourse généralement pas les montures ni les verres pour la majorité des adultes, sauf pour les prestataires d'aide sociale. Par contre, les crédits d'impôt provincial et fédéral pour frais médicaux permettent de récupérer une partie du coût.",
  },
  {
    question: "Combien puis-je récupérer pour mes lunettes avec les crédits d'impôt ?",
    reponse: "Si vos lunettes coûtent 500 $ et que votre revenu est de 40 000 $, votre seuil fédéral est d'environ 1 200 $. Si vos dépenses médicales totales dépassent ce seuil, vous récupérez 15% de l'excédent. Avec le crédit provincial québécois, vous pouvez récupérer jusqu'à 20% supplémentaire selon votre revenu.",
  },
  {
    question: "Les verres de contact sont-ils des dépenses médicales admissibles ?",
    reponse: "Oui. Les verres de contact prescrits par un optométriste ou un médecin sont admissibles comme frais médicaux, tant au fédéral qu'au provincial. Conservez vos reçus et l'ordonnance.",
  },
  {
    question: "Dois-je avoir une prescription pour que mes lunettes soient admissibles ?",
    reponse: "Oui, pour être admissibles comme frais médicaux, les lunettes doivent être prescrites par un optométriste ou un médecin. Les lunettes de lecture achetées sans prescription en pharmacie ne sont généralement pas admissibles.",
  },
];

export default function AideLunettesQuebecPage() {
  return (
    <SeoProgrammesPage
      titre="Aide pour lunettes Québec 2026"
      sousTitre="Crédits d'impôt provincial et fédéral pour récupérer une partie du coût de vos lunettes."
      intro="Les lunettes coûtent cher, et beaucoup de Québécois ne savent pas qu'ils peuvent en récupérer une partie via les crédits d'impôt pour frais médicaux. Entre le crédit fédéral (15%) et le crédit provincial québécois (jusqu'à 20% selon le revenu), une famille qui cumule plusieurs dépenses médicales dans l'année peut obtenir un remboursement significatif. La clé : conserver tous ses reçus et les déclarer correctement."
      programmes={programmes}
      faqs={faqs}
      motCle="Aide lunettes Québec 2026"
      pagesRelies={[
        { href: "/credit-impot-frais-medicaux-quebec", titre: "Crédit d'impôt frais médicaux Québec" },
        { href: "/credit-impot-quebec", titre: "Tous les crédits d'impôt Québec" },
        { href: "/fr/budget/credit-solidarite", titre: "Crédit de solidarité Québec" },
      ]}
    />
  );
}
