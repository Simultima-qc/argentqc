import type { Metadata } from "next";
import supplementRevenuGaranti2026 from "@/data/blog/entries/supplement-revenu-garanti-2026";

export const metadata: Metadata = {
  title: "Supplément de revenu garanti 2026 : montants, tableau et admissibilité",
  description:
    "Voyez les montants du Supplément de revenu garanti en 2026, les critères d'admissibilité, les seuils de revenu et les étapes pour vérifier votre situation.",
  keywords: [
    "supplément de revenu garanti 2026",
    "supplément de revenu garanti 2026 tableau",
    "montant supplément revenu garanti 2026",
    "sécurité de la vieillesse 2026",
    "SRG 2026",
  ],
  alternates: {
    canonical: "https://argentqc.ca/supplement-revenu-garanti-2026",
  },
};

export default function SupplementRevenuGaranti2026Page() {
  const Content = supplementRevenuGaranti2026.Content;

  return <Content />;
}
