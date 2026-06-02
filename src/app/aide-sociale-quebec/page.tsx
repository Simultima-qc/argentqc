import type { Metadata } from "next";
import aideSocialeQuebec2026 from "@/data/blog/entries/aide-sociale-quebec-2026";

export const metadata: Metadata = {
  title: "Aide sociale Québec 2026 : montants, demande et dates de dépôt",
  description:
    "Consultez les montants d'aide sociale au Québec en 2026, les dates de dépôt, les critères d'admissibilité et les étapes pour faire une demande.",
  keywords: [
    "aide sociale",
    "aide sociale Québec",
    "demande aide sociale",
    "demande d'aide sociale",
    "depot aide sociale 2026",
    "montant aide sociale 2026",
  ],
  alternates: {
    canonical: "https://argentqc.ca/aide-sociale-quebec",
  },
};

export default function AideSocialeQuebecPage() {
  const Content = aideSocialeQuebec2026.Content;

  return <Content />;
}
