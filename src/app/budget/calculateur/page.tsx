import type { Metadata } from "next";
import CalculateurClient from "./CalculateurClient";

export const metadata: Metadata = {
  title: "Calculateur budget mensuel Québec 2026 | ArgentQC.ca",
  description:
    "Calculez votre budget mensuel au Québec : entrez vos revenus nets, loyer, épicerie, transport et dettes pour obtenir votre bilan personnalisé avec graphique camembert.",
  keywords: [
    "calculateur budget Québec",
    "budget mensuel Québec",
    "calcul budget personnel Québec",
    "planification budget Québec 2026",
  ],
};

export default function CalculateurPage() {
  return <CalculateurClient />;
}
