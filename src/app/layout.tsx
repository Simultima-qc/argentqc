import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
    <html lang="fr" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
