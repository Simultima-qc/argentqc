import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Aide sport enfant Québec 2026 | ArgentQC.ca",
  description: "Redirection vers le guide consolidé des aides financières pour le sport des enfants au Québec.",
};

export default function SubventionSportEnfantLegacyPage() {
  permanentRedirect("/aide-financiere-sport-enfant-quebec");
}
