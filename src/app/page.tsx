import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "ArgentQC.ca | Finances personnelles au Quebec",
  description:
    "Guides, outils et strategies pour optimiser vos impots, aides, depenses et decisions de retraite au Quebec.",
  alternates: {
    canonical: "https://argentqc.ca/fr",
  },
};

export default function RootPage() {
  permanentRedirect("/fr");
}
