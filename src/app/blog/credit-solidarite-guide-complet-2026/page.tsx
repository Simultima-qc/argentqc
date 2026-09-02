import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Crédit de solidarité Québec 2026 | ArgentQC.ca",
  description: "Redirection vers le guide crédit de solidarité Québec 2026-2027.",
};

export default function CreditSolidariteGuideCompletLegacyPage() {
  permanentRedirect("/fr/budget/credit-solidarite");
}
