import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArgentQC.ca – Trouvez les aides gouvernementales auxquelles vous avez droit",
  description:
    "Découvrez en 2 minutes tous les crédits, subventions et aides gouvernementales auxquels vous avez droit au Québec et au Canada. Gratuit et sans inscription.",
  keywords: ["subventions", "aides gouvernementales", "crédits d'impôt", "Québec", "Canada"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const htmlLang = requestHeaders.get("x-argentqc-locale") ?? "fr";

  return (
    <html lang={htmlLang} className="h-full">
      <head>
        {/* Google Analytics – dans <head> pour validation Search Console */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EHYFT9BFCN"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EHYFT9BFCN');
          `}
        </Script>

        {/* Google AdSense – Auto ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2932496105657945"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
