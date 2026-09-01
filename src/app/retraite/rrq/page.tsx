import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "RRQ 2026 | ArgentQC.ca",
  description: "Redirection vers le guide RRQ 2026 localisé.",
};

export default function RrqLegacyPage() {
  permanentRedirect("/fr/retraite/rrq");
}
