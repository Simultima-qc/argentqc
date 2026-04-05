import type { Metadata } from "next";
import ChecklistClient from "./ChecklistClient";

export const metadata: Metadata = {
  title: "Checklist déménagement Québec 2026 — Ne rien oublier | ArgentQC.ca",
  description:
    "Checklist déménagement complète pour le Québec : 8 semaines avant au jour J. Cases à cocher interactives, liste des organismes à aviser (SAAQ, Revenu Québec, Canada Post, etc.).",
  keywords: [
    "checklist déménagement Québec",
    "liste déménagement Québec",
    "que faire avant déménagement Québec",
    "organismes aviser déménagement Québec",
  ],
};

export default function ChecklistPage() {
  return <ChecklistClient />;
}
