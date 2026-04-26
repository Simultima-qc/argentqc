import type { Metadata } from "next";
import Link from "next/link";
import ComparateurInternetClient from "./ComparateurInternetClient";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Comparateur Internet Québec 2026 — Meilleur Fournisseur | ArgentQC.ca",
  description:
    "Comparez les forfaits internet des fournisseurs au Québec : Vidéotron, Bell, Fizz, Oxio, TekSavvy. Trouvez le meilleur prix selon votre vitesse et budget.",
  keywords: [
    "comparateur internet Québec",
    "meilleur fournisseur internet Québec",
    "forfait internet Québec 2026",
    "internet pas cher Québec",
    "fibre internet Québec",
  ],
  alternates: {
    canonical: "https://argentqc.ca/internet/comparateur",
  },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const faqs = [
  {
    q: "Quel est le fournisseur internet le moins cher au Québec en 2026 ?",
    r: "Oxio (44 $/mois, 120 Mbps) et Fizz (47 $/mois, 200 Mbps) sont les options les moins chères disponibles à Montréal et Québec. Ces fournisseurs n'exigent aucun contrat et offrent un modem en location à faible coût. Pour les régions hors des grands centres, Bell est souvent le seul fournisseur fibre disponible.",
  },
  {
    q: "Fibre ou câble : quelle différence pour le quotidien ?",
    r: "La fibre offre des vitesses d'envoi (upload) beaucoup plus rapides — un avantage majeur pour le télétravail, les visioconférences et le téléversement de fichiers. Le câble est asymétrique : téléchargement rapide, envoi lent. Pour la navigation et le streaming, la différence est imperceptible. Pour le télétravail intensif, la fibre est recommandée.",
  },
  {
    q: "Bell exige-t-il toujours un contrat de 24 mois ?",
    r: "Bell propose généralement ses forfaits avec un engagement de 24 mois, en échange d'un prix fixe et du modem inclus. Des forfaits sans contrat existent mais à prix plus élevé. Si vous cherchez la flexibilité, Fizz, Oxio et TekSavvy offrent des forfaits sans engagement.",
  },
  {
    q: "Combien de temps faut-il pour l'installation lors d'un déménagement ?",
    r: "Pour le câble dans un immeuble déjà câblé, l'activation peut prendre 2–5 jours ouvrables. Pour la fibre ou un nouvel immeuble, prévoyez 2–3 semaines pour le rendez-vous technicien. Planifiez votre abonnement au moins 3 semaines avant votre déménagement pour éviter une interruption de service.",
  },
];

export default function ComparateurInternetPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header
        style={{
          background: DARK,
          position: "sticky",
          top: 0,
          zIndex: 10,
          padding: "14px 16px",
          boxShadow: "0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 800,
              fontSize: "15px",
              color: GOLD,
              textDecoration: "none",
            }}
          >
            ArgentQC.ca
          </Link>
          <Link
            href="/questionnaire"
            style={{
              color: GOLD,
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "underline",
              opacity: 0.85,
            }}
          >
            Trouver mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{ background: DARK, position: "relative", overflow: "hidden" }}
        className="px-5 py-12"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.05,
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="max-w-2xl mx-auto"
          style={{ position: "relative", zIndex: 1 }}
        >
          <nav
            style={{
              fontSize: "12px",
              color: "rgba(240,235,224,0.4)",
              marginBottom: "12px",
            }}
          >
            <Link
              href="/"
              style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}
            >
              Accueil
            </Link>
            {" › "}
            <Link
              href="/internet"
              style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}
            >
              Internet
            </Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Comparateur</span>
          </nav>
          <p
            style={{
              color: GOLD,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
              opacity: 0.8,
            }}
          >
            Outil interactif · Québec 2026
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            Comparateur Internet Québec 2026
          </h1>
          <p
            style={{
              color: "rgba(240,235,224,0.6)",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            Comparez les forfaits de 7 fournisseurs internet au Québec. Filtrez par budget,
            vitesse et type de connexion pour trouver la meilleure offre selon votre
            situation.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Intro SEO crawlable */}
        <section
          style={{
            background: "white",
            borderRadius: "16px",
            border: "1px solid #EDE9E0",
            padding: "1.25rem",
            marginBottom: "1.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "#1C1C1E",
              marginBottom: "10px",
            }}
          >
            Le marché internet au Québec en 2026
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, marginBottom: "10px" }}>
            Le marché des télécommunications au Québec est dominé par{" "}
            <strong>Vidéotron</strong>{" "}et{" "}
            <strong>Bell</strong>,{" "}mais les fournisseurs alternatifs comme{" "}
            <strong>Fizz</strong>, <strong>Oxio</strong>{" "}et{" "}
            <strong>TekSavvy</strong>{" "}offrent des options compétitives sans contrat.
            La fibre optique se déploie rapidement dans les grands centres, tandis que le
            câble coaxial reste dominant en banlieue et en région.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, marginBottom: "10px" }}>
            Pour choisir le bon forfait, considérez vos{" "}
            <strong>besoins réels en vitesse</strong>{" "}(100 Mbps suffit pour la plupart des
            foyers), votre <strong>budget mensuel</strong>, et votre tolérance à un{" "}
            <strong>engagement contractuel</strong>. Les fournisseurs alternatifs n&apos;exigent
            généralement aucun contrat, mais peuvent avoir un support client moins accessible.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: 0 }}>
            N&apos;oubliez pas de prévoir la <strong>location du modem</strong>{" "}(5–10 $/mois
            selon le fournisseur) ou l&apos;achat d&apos;un modem compatible pour économiser
            sur le long terme. Lors d&apos;un déménagement, planifiez votre abonnement{" "}
            3 semaines à l&apos;avance pour éviter toute interruption de service.
          </p>
        </section>

        {/* Ad placeholder 1 */}
        <div
          style={{
            background: "#EDE9E0",
            borderRadius: "12px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#A8A29E",
            fontSize: "11px",
            marginBottom: "2rem",
          }}
        >
          Publicité
        </div>

        {/* Comparateur interactif */}
        <ComparateurInternetClient />

        {/* Liens internes */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
            marginTop: "2.5rem",
          }}
        >
          Guides connexes
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          <Link
            href="/internet"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "white",
              border: "1px solid #EDE9E0",
              borderRadius: "14px",
              padding: "14px 16px",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🌐</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                Guide internet au Québec
              </div>
              <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>
                Fibre vs câble, critères de choix, fournisseurs alternatifs
              </div>
            </div>
            <span style={{ color: "#3B82F6", fontSize: "14px" }}>→</span>
          </Link>
          <Link
            href="/demenagement"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "white",
              border: "1px solid #EDE9E0",
              borderRadius: "14px",
              padding: "14px 16px",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>📦</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                Guide déménagement Québec
              </div>
              <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>
                Résiliation, transfert internet, délais à prévoir
              </div>
            </div>
            <span style={{ color: "#3B82F6", fontSize: "14px" }}>→</span>
          </Link>
          <Link
            href="/budget/calculateur"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "white",
              border: "1px solid #EDE9E0",
              borderRadius: "14px",
              padding: "14px 16px",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🧮</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                Calculateur de budget Québec
              </div>
              <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>
                Intégrez le coût de votre internet dans votre budget mensuel
              </div>
            </div>
            <span style={{ color: "#3B82F6", fontSize: "14px" }}>→</span>
          </Link>
        </div>

        {/* FAQ */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          Questions fréquentes
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid #EDE9E0",
                padding: "1rem 1.25rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#1C1C1E",
                  marginBottom: "8px",
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#44403C",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {faq.r}
              </p>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.r },
              })),
            }),
          }}
        />

        {/* Ad placeholder 3 */}
        <div
          style={{
            background: "#EDE9E0",
            borderRadius: "12px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#A8A29E",
            fontSize: "11px",
            marginBottom: "2rem",
          }}
        >
          Publicité
        </div>
      </div>

      <SiteFooter
        legalText={"Outil informatif non affilié aux fournisseurs internet ou au gouvernement."}
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ background: DARK, padding: "24px 16px" }}
        brandStyle={{ color: GOLD }}
        contactLinkStyle={{ marginTop: "6px" }}
      />
    </main>
  );
}
