import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ACEBE 2026 | ArgentQC.ca",
  description: "Redirection vers le guide 2026 de l’Allocation canadienne pour l’épicerie et les besoins essentiels.",
};

export default function CreditTpsTvhLegacyPage() {
  permanentRedirect("/blog/allocation-canadienne-epicerie-besoins-essentiels-2026");
}
