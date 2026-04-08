import type { Metadata } from "next";
import Link from "next/link";
import ComparateurClient from "./ComparateurClient";

export const metadata: Metadata = {
  title: "Comparateur assurance Québec 2026 | ArgentQC.ca",
  description:
    "Comparez les prix d'assurance habitation et auto au Québec selon votre profil. Estimations par assureur, conseils pour économiser et liens vers les vraies soumissions.",
  keywords: [
    "comparateur assurance Québec",
    "prix assurance habitation Québec 2026",
    "comparateur assurance auto Québec",
    "meilleure assurance Québec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const faqs = [
  {
    q: "Comment fonctionne ce comparateur ?",
    r: "C'est un outil éducatif basé sur des fourchettes moyennes du marché québécois 2026, pas un vrai comparateur en temps réel. Les estimations sont calculées à partir de profils types et ajustées selon des multiplicateurs régionaux et démographiques. Pour obtenir un prix exact, cliquez sur « Obtenir une soumission réelle » chez l'assureur de votre choix.",
  },
  {
    q: "Quelle assurance est la moins chère au Québec ?",
    r: "Cela dépend entièrement de votre profil. Pour la habitation, Belair Direct et La Personnelle sont souvent compétitifs. Pour l'auto, Promutuel est avantageux en région, Belair Direct en ville. Le seul moyen d'obtenir le meilleur prix est d'obtenir plusieurs soumissions — c'est gratuit et sans engagement.",
  },
  {
    q: "Comment économiser sur mon assurance habitation au Québec ?",
    r: "Regroupez votre assurance auto et habitation chez le même assureur (rabais de 10 à 20 %), augmentez votre franchise (de 500 $ à 1 000 $ peut réduire la prime de 10 à 15 %), évitez les petites réclamations qui font augmenter votre prime, et magasinez à chaque renouvellement. Les fidèles clients ne sont généralement pas les mieux récompensés.",
  },
  {
    q: "Comment économiser sur mon assurance auto au Québec ?",
    r: "Optez pour un programme de télématique (Ajusto chez Desjardins, IntelliDrive chez Intact) qui récompense une conduite prudente avec des rabais jusqu'à 25 %. Regroupez auto et habitation chez le même assureur. Augmentez votre franchise collision. Réduisez votre kilométrage déclaré si vous travaillez de la maison. Un bon dossier sans accident vaut de l'or.",
  },
  {
    q: "Un courtier ou acheter en direct ?",
    r: "Un courtier d'assurance représente plusieurs assureurs et compare les prix pour vous — c'est gratuit (ils sont rémunérés par les assureurs), idéal pour les profils complexes ou pour quiconque veut déléguer la comparaison. Acheter en direct (Belair Direct, Desjardins en ligne) est plus rapide et peut parfois être moins cher pour les profils simples, mais vous devez faire la comparaison vous-même.",
  },
];

export default function ComparateurAssurancesPage() {
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
              href="/assurances"
              style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}
            >
              Assurances
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
            Comparateur assurance Québec 2026
          </h1>
          <p
            style={{
              color: "rgba(240,235,224,0.6)",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            Estimez votre prime d&apos;assurance habitation ou auto selon votre profil.
            Comparez 6 assureurs québécois et obtenez une vraie soumission en un clic.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">
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
        <ComparateurClient />

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
          Guides détaillés
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          <Link
            href="/assurances/auto"
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
            <span style={{ fontSize: "1.5rem" }}>🚗</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                Guide assurance auto Québec
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#A8A29E",
                  marginTop: "2px",
                }}
              >
                Régime SAAQ/privé, prix moyens, 7 conseils pour économiser
              </div>
            </div>
            <span style={{ color: "#3B82F6", fontSize: "14px" }}>→</span>
          </Link>
          <Link
            href="/assurances/habitation"
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
            <span style={{ fontSize: "1.5rem" }}>🏠</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                Guide assurance habitation Québec
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#A8A29E",
                  marginTop: "2px",
                }}
              >
                Locataire vs propriétaire, couvertures, prix moyens 2026
              </div>
            </div>
            <span style={{ color: "#3B82F6", fontSize: "14px" }}>→</span>
          </Link>
          <Link
            href="/assurances"
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
            <span style={{ fontSize: "1.5rem" }}>📋</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                Guide complet des assurances
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#A8A29E",
                  marginTop: "2px",
                }}
              >
                Tous les types d&apos;assurance, courtier vs direct, erreurs à éviter
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
              <div
                style={{
                  fontSize: "12px",
                  color: "#A8A29E",
                  marginTop: "2px",
                }}
              >
                Intégrez le coût de vos assurances dans votre budget mensuel
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
          <p
            style={{
              color: "rgba(240,235,224,0.3)",
              fontSize: "11px",
            }}
          >
            Outil informatif non affilié aux assureurs ou au gouvernement.
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
