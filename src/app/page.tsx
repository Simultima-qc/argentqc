import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import articles from "@/data/articles";
import { homeHubPageDefinitions } from "@/data/seo-pages";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export const metadata: Metadata = {
  title: "ArgentQC.ca | Optimise ton argent au Québec",
  description:
    "Découvre quoi faire concrètement avec ton argent au Québec : crédits d'impôt, subventions, retraite, dépenses et stratégies. Outil gratuit, résultats en 2 minutes.",
  alternates: {
    canonical: "https://argentqc.ca",
  },
};

/* ── Données ── */

const piliers = [
  {
    emoji: "💰",
    label: "Aides financières",
    desc: "Crédits, subventions et allocations auxquels tu as droit",
    href: "/aides-financieres",
    color: "#D1FAE5",
    textColor: "#065F46",
  },
  {
    emoji: "🧾",
    label: "Impôts",
    desc: "Déclarations, crédits et remboursements au Québec",
    href: "/impots",
    color: "#FEE2E2",
    textColor: "#991B1B",
  },
  {
    emoji: "🏦",
    label: "Épargne & retraite",
    desc: "REER, CELI, RRQ — bâtir ton patrimoine",
    href: "/retraite",
    color: "#EDE9FE",
    textColor: "#5B21B6",
  },
  {
    emoji: "📡",
    label: "Dépenses",
    desc: "Internet, assurances, téléphonie — couper le gras",
    href: "/depenses",
    color: "#CFFAFE",
    textColor: "#155E75",
  },
  {
    emoji: "🧠",
    label: "Stratégies financières",
    desc: "Optimisation fiscale et décisions intelligentes",
    href: "/strategies",
    color: "#FEF3C7",
    textColor: "#92400E",
  },
];

const exemplesScenarios = [
  {
    profil: "Famille avec 2 enfants · 90 000 $",
    resultat: "3 200 $",
    desc: "Allocation famille + ACE + crédit solidarité",
    href: "/scenarios/famille-2-enfants",
  },
  {
    profil: "Célibataire locataire · 50 000 $",
    resultat: "4 680 $",
    desc: "Optimisation REER vs CELI + crédits de base",
    href: "/scenarios/celibataire-locataire",
  },
  {
    profil: "Couple propriétaire · 120 000 $",
    resultat: "1 200 $/an",
    desc: "Réduction dépenses internet, assurances, téléphonie",
    href: "/scenarios/couple-sans-enfant",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col min-h-screen">

        {/* ── HERO ── */}
        <section
          style={{ background: DARK, position: "relative", overflow: "hidden" }}
          className="px-5 pt-14 pb-12"
        >
          {/* Radial glow */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.08) 0%, transparent 70%)"
          }} />
          {/* Dot-grid texture */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.06,
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }} />

          <div className="max-w-lg mx-auto relative" style={{ zIndex: 1, textAlign: "center" }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(245,200,66,0.1)", border: "1px solid rgba(245,200,66,0.2)",
              borderRadius: "100px", padding: "6px 16px", marginBottom: "1.5rem"
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: GOLD, display: "inline-block" }} />
              <span style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" }}>
                100 % gratuit · aucune inscription
              </span>
            </div>

            {/* Titre */}
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.85rem, 6vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              marginBottom: "1.1rem",
            }}>
              Optimise ton argent au Québec,{" "}
              <em style={{ color: GOLD, fontStyle: "italic" }}>sans te casser la tête</em>
            </h1>

            <p style={{
              color: "rgba(240,235,224,0.62)",
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: "390px",
              margin: "0 auto 2rem",
            }}>
              Découvre quoi faire concrètement avec ton argent&nbsp;: crédits, impôts, retraite, dépenses et stratégies.
            </p>

            {/* 3 CTAs */}
            <div className="flex flex-col gap-3" style={{ maxWidth: "380px", margin: "0 auto" }}>
              <Link
                href="/aides-financieres"
                style={{
                  display: "block",
                  background: GOLD,
                  color: DARK,
                  fontWeight: 800,
                  fontSize: "1rem",
                  padding: "0.95rem",
                  borderRadius: "14px",
                  textAlign: "center",
                  textDecoration: "none",
                  boxShadow: "0 0 32px rgba(245,200,66,0.25)",
                }}
              >
                💰 Trouver mes aides financières
              </Link>
              <Link
                href="/depenses"
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.07)",
                  color: "#F0EBE0",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "0.95rem",
                  borderRadius: "14px",
                  textAlign: "center",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                📡 Optimiser mes dépenses
              </Link>
              <Link
                href="/retraite"
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.07)",
                  color: "#F0EBE0",
                  fontWeight: 700,
                  fontSize: "1rem",
                  padding: "0.95rem",
                  borderRadius: "14px",
                  textAlign: "center",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                🏦 Planifier ma retraite
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-2" style={{ marginTop: "1.5rem" }}>
              {["🔒 Aucune donnée sauvegardée", "✅ Programmes officiels", "🎁 100 % gratuit"].map((b) => (
                <span key={b} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "rgba(240,235,224,0.55)",
                  fontSize: "11px",
                  padding: "5px 12px",
                  borderRadius: "100px",
                }}>{b}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION PILIERS ── */}
        <section style={{ background: "white", borderBottom: "1px solid #F0EBE0" }} className="py-12 px-5">
          <div className="max-w-lg mx-auto">
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.55rem",
              fontWeight: 800,
              color: "#1C1C1E",
              textAlign: "center",
              marginBottom: "6px",
            }}>
              Par où veux-tu commencer ?
            </h2>
            <p style={{ textAlign: "center", color: "#78716C", fontSize: "13px", marginBottom: "1.75rem" }}>
              Cinq domaines pour optimiser ta situation financière
            </p>
            <div className="grid grid-cols-2 gap-3">
              {piliers.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    display: "block",
                    background: PARCH,
                    borderRadius: "14px",
                    padding: "18px 14px",
                    border: "1px solid #EDE9E0",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: "8px" }}>{p.emoji}</div>
                  <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", lineHeight: 1.3, marginBottom: "4px" }}>{p.label}</div>
                  <div style={{ fontSize: "11px", color: "#A8A29E", lineHeight: 1.5 }}>{p.desc}</div>
                  <div style={{ marginTop: "10px" }}>
                    <span style={{
                      display: "inline-block",
                      background: p.color,
                      color: p.textColor,
                      fontSize: "10px",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "100px",
                    }}>
                      Explorer →
                    </span>
                  </div>
                </Link>
              ))}
              {/* 5e carte pleine largeur */}
              {piliers.length % 2 !== 0 && null}
            </div>
          </div>
        </section>

        {/* ── EXEMPLES CONCRETS ── */}
        <section style={{ background: PARCH, borderBottom: "1px solid #E8E0D4" }} className="py-12 px-5">
          <div className="max-w-lg mx-auto">
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.55rem",
              fontWeight: 800,
              color: "#1C1C1E",
              textAlign: "center",
              marginBottom: "6px",
            }}>
              Exemples concrets
            </h2>
            <p style={{ textAlign: "center", color: "#78716C", fontSize: "13px", marginBottom: "1.75rem" }}>
              Des résultats réels pour des profils réels
            </p>
            <div className="flex flex-col gap-3">
              {exemplesScenarios.map((ex) => (
                <Link
                  key={ex.href}
                  href={ex.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "white",
                    borderLeft: `3px solid ${GREEN}`,
                    borderRadius: "12px",
                    padding: "14px 18px",
                    textDecoration: "none",
                    boxShadow: "0 1px 10px rgba(0,0,0,0.05)",
                    gap: "12px",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{ex.profil}</div>
                    <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "2px" }}>{ex.desc}</div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: "1.15rem", color: "#059669" }}>{ex.resultat}</div>
                    <div style={{ fontSize: "11px", color: "#6EE7B7" }}>récupérés</div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/scenarios"
              style={{
                display: "block",
                textAlign: "center",
                color: "#059669",
                fontSize: "14px",
                fontWeight: 700,
                marginTop: "1.25rem",
                textDecoration: "none",
              }}
            >
              👉 Voir tous les scénarios →
            </Link>
          </div>
        </section>

        {/* ── AD ── */}
        <div style={{ background: "#EDE9E0", borderBottom: "1px solid #E0D9CE" }} className="py-3 px-4">
          <div className="max-w-lg mx-auto">
            <div style={{ height: "56px", background: "#E5DFD4", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px" }}>
              Publicité
            </div>
          </div>
        </div>

        {/* ── SECTION OUTIL / QUESTIONNAIRE ── */}
        <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="py-12 px-5">
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(245,200,66,0.07) 0%, transparent 70%)"
          }} />
          <div className="max-w-lg mx-auto text-center" style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-block",
              background: "rgba(245,200,66,0.12)",
              color: GOLD,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "100px",
              marginBottom: "1.25rem",
            }}>
              Outil gratuit
            </div>
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "1.55rem",
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: "0.85rem",
            }}>
              Obtiens un plan personnalisé en 2 minutes
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.75rem" }}>
              Réponds à 8 questions sur ta situation et reçois une liste des aides, crédits et optimisations disponibles pour toi.
            </p>
            <Link
              href="/questionnaire"
              style={{
                display: "inline-block",
                background: GOLD,
                color: DARK,
                fontWeight: 800,
                fontSize: "1rem",
                padding: "1rem 2rem",
                borderRadius: "14px",
                textDecoration: "none",
                boxShadow: "0 0 32px rgba(245,200,66,0.25)",
              }}
            >
              🚀 Lancer le diagnostic →
            </Link>
            <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", marginTop: "10px" }}>
              Gratuit · 2 minutes · aucune inscription
            </p>
          </div>
        </section>

        {/* ── SECTION CRÉDIBILITÉ ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="py-10 px-5">
          <div className="max-w-lg mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center" style={{ marginBottom: "2rem" }}>
              {[
                { val: "16+", label: "programmes couverts" },
                { val: "20 k$", label: "potentiel moyen" },
                { val: "2 min", label: "pour tes résultats" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.5rem, 5vw, 2rem)",
                    fontWeight: 800,
                    color: DARK,
                    lineHeight: 1,
                  }}>{s.val}</div>
                  <div style={{ fontSize: "11px", color: "#A8A29E", marginTop: "5px", lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            {/* Texte crédibilité */}
            <div style={{
              background: PARCH,
              borderRadius: "14px",
              padding: "20px",
              border: "1px solid #EDE9E0",
            }}>
              <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: "#1C1C1E" }}>ArgentQC.ca</strong> base son contenu sur les programmes officiels du gouvernement du Québec et du Canada. Notre objectif&nbsp;: simplifier les décisions financières pour que chaque Québécois puisse agir concrètement sur sa situation — sans jargon, sans inscription, sans frais.
              </p>
            </div>
          </div>
        </section>

        {/* ── GUIDES SEO ── */}
        <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="py-12 px-5">
          <div className="max-w-lg mx-auto">
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.55rem",
              fontWeight: 800,
              color: "#1C1C1E",
              textAlign: "center",
              marginBottom: "1.75rem",
            }}>
              Guides par situation
            </h2>
            <div className="flex flex-col gap-2">
              {homeHubPageDefinitions.map((lien) => (
                <Link
                  key={lien.path}
                  href={lien.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "white",
                    border: "1px solid #EDE9E0",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E" }}>{lien.title}</div>
                    <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{lien.description}</div>
                  </div>
                  <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0, marginLeft: "8px" }}>&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── DERNIERS ARTICLES ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="py-12 px-5">
          <div className="max-w-lg mx-auto">
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.55rem",
              fontWeight: 800,
              color: "#1C1C1E",
              textAlign: "center",
              marginBottom: "1.75rem",
            }}>
              Derniers articles
            </h2>
            <div className="flex flex-col gap-3">
              {articles.slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    background: PARCH,
                    border: "1px solid #EDE9E0",
                    borderRadius: "12px",
                    padding: "14px 16px",
                    textDecoration: "none",
                  }}
                >
                  <span style={{
                    fontSize: "11px", fontWeight: 700, padding: "3px 8px",
                    borderRadius: "100px", background: "#DBEAFE", color: "#1D4ED8",
                    flexShrink: 0, marginTop: "2px", whiteSpace: "nowrap",
                  }}>{article.categorie}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E", lineHeight: 1.45 }}>{article.titre}</div>
                    <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "3px" }}>{article.tempsLecture} de lecture</div>
                  </div>
                  <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0 }}>→</span>
                </Link>
              ))}
            </div>
            <Link
              href="/blog"
              style={{
                display: "block",
                textAlign: "center",
                color: "#3B82F6",
                fontSize: "14px",
                fontWeight: 600,
                marginTop: "1rem",
                textDecoration: "none",
              }}
            >
              Voir tous les articles →
            </Link>
          </div>
        </section>

        {/* ── AD BAS ── */}
        <section style={{ background: "#EDE9E0", borderTop: "1px solid #E0D9CE" }} className="py-4 px-4">
          <div className="max-w-lg mx-auto">
            <div style={{ height: "64px", background: "#E5DFD4", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px" }}>
              Publicité
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: DARK }} className="py-8 px-5 mt-auto">
          <div className="max-w-lg mx-auto text-center">
            <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>ArgentQC.ca</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "12px" }}>
              {[
                { label: "Aides financières", href: "/aides-financieres" },
                { label: "Impôts", href: "/impots" },
                { label: "Retraite", href: "/retraite" },
                { label: "Dépenses", href: "/depenses" },
                { label: "Stratégies", href: "/strategies" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: "rgba(240,235,224,0.4)", fontSize: "12px", textDecoration: "none" }}>{l.label}</Link>
              ))}
            </div>
            <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", lineHeight: 1.7 }}>
              Outil informatif non affilié au gouvernement. Les montants sont des estimations —<br />
              consultez toujours les sites officiels pour confirmer votre admissibilité.
            </p>
            <Link href="/contact" style={{ color: "rgba(240,235,224,0.4)", fontSize: "12px", display: "block", marginTop: "8px" }}>Contactez-nous</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
