import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
          Google Analytics (GA4 production G-EHYFT9BFCN).
          Garde production (issue #103) : le tag n'est chargé et `window.gtag`
          n'est défini QUE lorsque le hostname runtime est exactement
          `argentqc.ca`. Sur localhost, previews Netlify et CI/Playwright,
          rien n'est injecté et aucun hit ne peut partir.
          Règle alignée sur `isProductionAnalyticsHost()` de `src/utils/analytics-host.ts`.
        */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            (function () {
              if (window.location.hostname !== 'argentqc.ca') return;
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-EHYFT9BFCN');
              var s = document.createElement('script');
              s.async = true;
              s.src = 'https://www.googletagmanager.com/gtag/js?id=G-EHYFT9BFCN';
              document.head.appendChild(s);
            })();
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
