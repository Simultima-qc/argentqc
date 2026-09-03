import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "REER ou CELI : lequel choisir ? | ArgentQC.ca",
  description: "Redirection vers le guide REER vs CELI consolidé au Québec.",
};

export default function StrategiesReerVsCeliLegacyPage() {
  permanentRedirect("/retraite/reer-vs-celi");
}
