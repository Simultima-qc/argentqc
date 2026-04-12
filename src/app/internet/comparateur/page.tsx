import type { Metadata } from "next";
import Link from "next/link";
import ComparateurInternetClient from "./ComparateurInternetClient";

export const metadata: Metadata = {
  title: "Comparateur Internet QuÃ©bec 2026 â€” Meilleur Fournisseur | ArgentQC.ca",
  description:
    "Comparez les forfaits internet des fournisseurs au QuÃ©bec : VidÃ©otron, Bell, Fizz, Oxio, TekSavvy. Trouvez le meilleur prix selon votre vitesse et budget.",
  keywords: [
    "comparateur internet QuÃ©bec",
    "meilleur fournisseur internet QuÃ©bec",
    "forfait internet QuÃ©bec 2026",
    "internet pas cher QuÃ©bec",
    "fibre internet QuÃ©bec",
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
    q: "Quel est le fournisseur internet le moins cher au QuÃ©bec en 2026 ?",
    r: "Oxio (44 $/mois, 120 Mbps) et Fizz (47 $/mois, 200 Mbps) sont les options les moins chÃ¨res disponibles Ã  MontrÃ©al et QuÃ©bec. Ces fournisseurs n'exigent aucun contrat et offrent un modem en location Ã  faible coÃ»t. Pour les rÃ©gions hors des grands centres, Bell est souvent le seul fournisseur fibre disponible.",
  },
  {
    q: "Fibre ou cÃ¢ble : quelle diffÃ©rence pour le quotidien ?",
    r: "La fibre offre des vitesses d'envoi (upload) beaucoup plus rapides â€” un avantage majeur pour le tÃ©lÃ©travail, les visioconfÃ©rences et le tÃ©lÃ©versement de fichiers. Le cÃ¢ble est asymÃ©trique : tÃ©lÃ©chargement rapide, envoi lent. Pour la navigation et le streaming, la diffÃ©rence est imperceptible. Pour le tÃ©lÃ©travail intensif, la fibre est recommandÃ©e.",
  },
  {
    q: "Bell exige-t-il toujours un contrat de 24 mois ?",
    r: "Bell propose gÃ©nÃ©ralement ses forfaits avec un engagement de 24 mois, en Ã©change d'un prix fixe et du modem inclus. Des forfaits sans contrat existent mais Ã  prix plus Ã©levÃ©. Si vous cherchez la flexibilitÃ©, Fizz, Oxio et TekSavvy offrent des forfaits sans engagement.",
  },
  {
    q: "Combien de temps faut-il pour l'installation lors d'un dÃ©mÃ©nagement ?",
    r: "Pour le cÃ¢ble dans un immeuble dÃ©jÃ  cÃ¢blÃ©, l'activation peut prendre 2â€“5 jours ouvrables. Pour la fibre ou un nouvel immeuble, prÃ©voyez 2â€“3 semaines pour le rendez-vous technicien. Planifiez votre abonnement au moins 3 semaines avant votre dÃ©mÃ©nagement pour Ã©viter une interruption de service.",
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
            {" â€º "}
            <Link
              href="/internet"
              style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}
            >
              Internet
            </Link>
            {" â€º "}
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
            Outil interactif Â· QuÃ©bec 2026
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
            Comparateur Internet QuÃ©bec 2026
          </h1>
          <p
            style={{
              color: "rgba(240,235,224,0.6)",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            Comparez les forfaits de 7 fournisseurs internet au QuÃ©bec. Filtrez par budget,
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
            Le marchÃ© internet au QuÃ©bec en 2026
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, marginBottom: "10px" }}>
            Le marchÃ© des tÃ©lÃ©communications au QuÃ©bec est dominÃ© par{" "}
            <strong>VidÃ©otron</strong>{" "}et{" "}
            <strong>Bell</strong>,{" "}mais les fournisseurs alternatifs comme{" "}
            <strong>Fizz</strong>, <strong>Oxio</strong>{" "}et{" "}
            <strong>TekSavvy</strong>{" "}offrent des options compÃ©titives sans contrat.
            La fibre optique se dÃ©ploie rapidement dans les grands centres, tandis que le
            cÃ¢ble coaxial reste dominant en banlieue et en rÃ©gion.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, marginBottom: "10px" }}>
            Pour choisir le bon forfait, considÃ©rez vos{" "}
            <strong>besoins rÃ©els en vitesse</strong>{" "}(100 Mbps suffit pour la plupart des
            foyers), votre <strong>budget mensuel</strong>, et votre tolÃ©rance Ã  un{" "}
            <strong>engagement contractuel</strong>. Les fournisseurs alternatifs n&apos;exigent
            gÃ©nÃ©ralement aucun contrat, mais peuvent avoir un support client moins accessible.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, margin: 0 }}>
            N&apos;oubliez pas de prÃ©voir la <strong>location du modem</strong>{" "}(5â€“10 $/mois
            selon le fournisseur) ou l&apos;achat d&apos;un modem compatible pour Ã©conomiser
            sur le long terme. Lors d&apos;un dÃ©mÃ©nagement, planifiez votre abonnement{" "}
            3 semaines Ã  l&apos;avance pour Ã©viter toute interruption de service.
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
          PublicitÃ©
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
            <span style={{ fontSize: "1.5rem" }}>ðŸŒ</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                Guide internet au QuÃ©bec
              </div>
              <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>
                Fibre vs cÃ¢ble, critÃ¨res de choix, fournisseurs alternatifs
              </div>
            </div>
            <span style={{ color: "#3B82F6", fontSize: "14px" }}>â†’</span>
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
            <span style={{ fontSize: "1.5rem" }}>ðŸ“¦</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                Guide dÃ©mÃ©nagement QuÃ©bec
              </div>
              <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>
                RÃ©siliation, transfert internet, dÃ©lais Ã  prÃ©voir
              </div>
            </div>
            <span style={{ color: "#3B82F6", fontSize: "14px" }}>â†’</span>
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
            <span style={{ fontSize: "1.5rem" }}>ðŸ§®</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                Calculateur de budget QuÃ©bec
              </div>
              <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>
                IntÃ©grez le coÃ»t de votre internet dans votre budget mensuel
              </div>
            </div>
            <span style={{ color: "#3B82F6", fontSize: "14px" }}>â†’</span>
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
          Questions frÃ©quentes
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
          PublicitÃ©
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              color: GOLD,
              fontSize: "1rem",
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            ArgentQC.ca
          </p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>
            Outil informatif non affiliÃ© aux fournisseurs internet ou au gouvernement.
          </p>
          <Link
            href="/contact"
            style={{
              color: "rgba(240,235,224,0.45)",
              fontSize: "11px",
              display: "block",
              marginTop: "6px",
            }}
          >
            Contactez-nous
          </Link>
        </div>
      </footer>
    </main>
  );
}
