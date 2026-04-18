import type { Metadata } from "next";
import LocalizedPretsBoursesPage from "@/components/LocalizedPretsBoursesPage";
import { getPretsBoursesPageDictionary } from "@/i18n/prets-bourses";

const d = getPretsBoursesPageDictionary("fr");

export const metadata: Metadata = {
  title: d.metadata.title,
  description: d.metadata.description,
  keywords: [
    "prêts étudiants Québec 2026",
    "bourses étudiants Québec",
    "aide financière aux études AFE",
    "REEP retour aux études",
    "Bourse Perspective Québec",
    "crédit impôt frais scolarité Canada",
    "remise dette études Québec",
    "étudiants internationaux Québec droits scolarité",
  ],
  alternates: {
    canonical: "https://argentqc.ca/prets-bourses-etudiants",
  },
};

export default function PretsBourseEtudiantsPage() {
  return <LocalizedPretsBoursesPage locale="fr" />;
}
