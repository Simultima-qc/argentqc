import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { buildAnalyticsBootstrapScript } from "@/utils/analytics-host";

export const metadata: Metadata = {
  title: "ArgentQC.ca – Trouvez les aides gouvernementales auxquelles vous avez droit",
  description:
    "Découvrez en 2 minutes tous les crédits, subventions et aides gouvernementales auxquels vous avez droit au Québec et au Canada. Gratuit et sans inscription.",
  keywords: ["subventions", "aides gouvernementales", "crédits d'impôt", "Québec", "Canada"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        {/*
          Google Analytics (GA4).
          Garde production (issue #103) : le tag n'est chargé et `window.gtag`
          n'est défini QUE lorsque le hostname runtime est exactement le
          hostname de production. Sur localhost, previews Netlify et CI/Playwright,
          rien n'est injecté et aucun hit ne peut partir.
          Hostname et Measurement ID proviennent de `src/utils/analytics-host.ts`
          (point de vérité unique, partagé avec `src/utils/analytics.ts`).
        */}
        <Script id="google-analytics" strategy="afterInteractive">
          {buildAnalyticsBootstrapScript()}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
