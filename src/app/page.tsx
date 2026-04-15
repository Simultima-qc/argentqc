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
  title: "ArgentQC.ca | Récupérez jusqu'à plusieurs milliers de dollars au Québec",
  description:
    "Crédits, impôts, dépenses et stratégies : découvrez exactement quoi faire avec votre argent selon votre situation. Outil gratuit, résultats en 2 minutes.",
  alternates: {
    canonical: "https://argentqc.ca",
  },
};

/* ── Données ── */

const piliers = [
  {
    emoji: "💰",
    label: "Aides financières",
    desc: "Trouvez les crédits et subventions que vous pouvez réellement obtenir",
    href: "/aides-financieres",
    color: "#D1FAE5",
    textColor: "#065F46",
  },
  {
    emoji: "🧾",
    label: "Impôts",
    desc: "Réduisez ce que vous payez et optimisez vos déclarations",
    href: "/impots",
    color: "#FEE2E2",
    textColor: "#991B1B",
  },
  {
    emoji: "🏦",
    label: "Épargne & retraite",
    desc: "REER, CELI, décaissement : prenez les bonnes décisions",
    href: "/retraite",
    color: "#EDE9FE",
    textColor: "#5B21B6",
  },
  {
    emoji: "📡",
    label: "Dépenses",
    desc: "Internet, assurances et autres : réduisez vos coûts récurrents",
    href: "/depenses",
    color: "#CFFAFE",
    textColor: "#155E75",
  },
  {
    emoji: "🧠",
    label: "Stratégies financières",
    desc: "Priorisez les bonnes actions selon votre situation",
    href: "/strategies",
    color: "#FEF3C7",
    textColor: "#92400E",
  },
];

const exemplesRecuperes = [
  {
    profil: "Famille avec 2 enfants",
    revenu: "revenu ~90 000 $",
    montant: "9 800 $",
    desc: "Allocation famille, ACE, crédit solidarité, optimisation REER",
    href: "/scenarios/famille-2-enfants",
  },
  {
    profil: "Propriétaire qui rénove",
    revenu: "subventions disponibles",
    montant: "16 700 $",
    desc: "Rénoclimat, thermopompe, isolation, crédit écorénov",
    href: "/scenarios/proprietaire-renovation",
  },
  {
    profil: "Aîné admissible",
    revenu: "65 ans et plus",
    montant: "14 000 $",
    desc: "Programmes et soutien disponibles selon votre situation",
    href: "/scenarios/aine",
  },
];

const scenariosConcrets = [
  {
    emoji: "👨‍👩‍👧‍👦",
    profil: "Famille avec 2 enfants",
    detail: "90 000 $",
    gain: "+ 3 200 $/an",
    href: "/scenarios/famille-2-enfants",
  },
  {
    emoji: "👤",
    profil: "Célibataire locataire",
    detail: "50 000 $",
    gain: "+ 4 681 $/an",
    href: "/scenarios/celibataire-locataire",
  },
  {
    emoji: "👫",
    profil: "Couple sans enfant",
    detail: "120 000 $",
    gain: "+ 1 220 $/an",
    href: "/scenarios/couple-sans-enfant",
  },
  {
    emoji: "🏠",
    profil: "Propriétaire avec hypothèque",
    detail: "projet de rénovation",
    gain: "+ 15 000 $ en subventions",
    href: "/scenarios/proprietaire-renovation",
  },
  {
    emoji: "🧓",
    profil: "Pré-retraite",
    detail: "55 ans",
    gain: "6 000 $ optimisés",
    href: "/scenarios/pre-retraite",
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
                100 % gratuit — aucune inscription
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
              Récupérez jusqu&apos;à{" "}
              <em style={{ color: GOLD, fontStyle: "italic" }}>plusieurs milliers de dollars</em>{" "}
              au Québec
            </h1>

            <p style={{
              color: "rgba(240,235,224,0.72)",
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: "390px",
              margin: "0 auto 1.25rem",
            }}>
              Crédits, impôts, dépenses et stratégies : découvrez exactement quoi faire avec votre argent selon votre situation.
            </p>

            {/* Preuve immédiate */}
            <div style={{
              display: "inline-block",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              borderRadius: "10px",
              padding: "10px 18px",
              marginBottom: "1.75rem",
            }}>
              <span style={{ color: "#6EE7B7", fontSize: "13px", fontWeight: 600 }}>
                En moyenne, nos utilisateurs identifient entre{" "}
                <strong style={{ color: "#34D399", fontWeight: 800 }}>1 000 $</strong>{" "}
                et{" "}
                <strong style={{ color: "#34D399", fontWeight: 800 }}>5 000 $</strong>{" "}
                par année.
              </span>
            </div>

            {/* CTA principal */}
            <div style={{ maxWidth: "380px", margin: "0 auto" }}>
              <Link
                href="/questionnaire"
                style={{
                  display: "block",
                  background: GOLD,
                  color: DARK,
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  padding: "1.05rem",
                  borderRadius: "14px",
                  textAlign: "center",
                  textDecoration: "none",
                  boxShadow: "0 0 40px rgba(245,200,66,0.3)",
                  letterSpacing: "-0.01em",
                }}
              >
                👉 Voir combien je peux récupérer
              </Link>
              <p style={{ color: "rgba(240,235,224,0.35)", fontSize: "12px", marginTop: "10px" }}>
                2 minutes · estimation personnalisée · aucune donnée conservée
              </p>
            </div>
          </div>
        </section>

        {/* ── CE QUE VOUS PERDEZ ── */}
        <section style={{ background: "#0F1B2D", borderBottom: "1px solid rgba(255,255,255,0.06)" }} className="py-10 px-5">
          <div className="max-w-lg mx-auto">
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "1.45rem",
              fontWeight: 800,
              textAlign: "center",
              marginBottom: "1.5rem",
            }}>
              Ce que vous perdez en ce moment
            </h2>
            <div className="flex flex-col gap-3" style={{ marginBottom: "1.5rem" }}>
              {[
                "Crédits et aides non réclamés",
                "Mauvaises décisions REER vs CELI",
                "Dépenses trop élevées (internet, assurances, etc.)",
              ].map((item) => (
                <div key={item} style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  padding: "14px 16px",
                }}>
                  <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>❌</span>
                  <span style={{ color: "rgba(240,235,224,0.75)", fontSize: "14px", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{
              textAlign: "center", color: "rgba(240,235,224,0.5)", fontSize: "13px",
              lineHeight: 1.7, marginBottom: "1.25rem",
            }}>
              La majorité des Québécois laissent de l&apos;argent sur la table sans le savoir.
            </p>
            <div style={{ textAlign: "center" }}>
              <Link
                href="/questionnaire"
                style={{
                  display: "inline-block",
                  background: "rgba(245,200,66,0.12)",
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "12px",
                  textDecoration: "none",
                  border: "1px solid rgba(245,200,66,0.25)",
                }}
              >
                👉 Voir ce que je peux récupérer
              </Link>
            </div>
          </div>
        </section>

        {/* ── EXEMPLES RÉELS DE MONTANTS RÉCUPÉRÉS ── */}
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
              Exemples réels de montants récupérés
            </h2>
            <p style={{ textAlign: "center", color: "#78716C", fontSize: "13px", marginBottom: "1.75rem" }}>
              Des résultats concrets pour des profils réels
            </p>
            <div className="flex flex-col gap-4">
              {exemplesRecuperes.map((ex) => (
                <Link
                  key={ex.href}
                  href={ex.href}
                  style={{
                    display: "block",
                    background: "white",
                    borderLeft: `4px solid ${GREEN}`,
                    borderRadius: "14px",
                    padding: "18px 20px",
                    textDecoration: "none",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E" }}>{ex.profil}</div>
                      <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "2px" }}>{ex.revenu}</div>
                      <div style={{ fontSize: "12px", color: "#78716C", marginTop: "6px", lineHeight: 1.5 }}>{ex.desc}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{
                        fontFamily: "var(--font-playfair)",
                        fontWeight: 800, fontSize: "1.5rem", color: "#059669", lineHeight: 1,
                      }}>{ex.montant}</div>
                      <div style={{ fontSize: "11px", color: "#6EE7B7", marginTop: "2px" }}>récupérés</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
              <Link
                href="/scenarios"
                style={{
                  display: "inline-block",
                  color: "#059669",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                👉 Voir des exemples similaires à ma situation →
              </Link>
            </div>
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

        {/* ── POSITIONNEMENT ── */}
        <section style={{ background: "white", borderBottom: "1px solid #F0EBE0" }} className="py-10 px-5">
          <div className="max-w-lg mx-auto">
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.55rem",
              fontWeight: 800,
              color: "#1C1C1E",
              textAlign: "center",
              marginBottom: "1rem",
            }}>
              Plus qu&apos;un site d&apos;information
            </h2>
            <div style={{
              background: PARCH,
              borderRadius: "14px",
              padding: "20px",
              border: "1px solid #EDE9E0",
            }}>
              <p style={{ fontSize: "14px", color: "#57534E", lineHeight: 1.85, margin: 0 }}>
                Les sites gouvernementaux vous <strong style={{ color: "#1C1C1E" }}>expliquent les programmes</strong>.{" "}
                Ici, vous voyez concrètement ce que ça donne <strong style={{ color: "#1C1C1E" }}>dans votre situation</strong>{" "}
                et quoi faire.
              </p>
            </div>
          </div>
        </section>

        {/* ── PILIERS ── */}
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
              Optimisez votre argent, pas juste vos crédits
            </h2>
            <p style={{ textAlign: "center", color: "#78716C", fontSize: "13px", marginBottom: "1.75rem" }}>
              Cinq domaines pour agir concrètement sur votre situation financière
            </p>
            <div className="grid grid-cols-2 gap-3">
              {piliers.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    display: "block",
                    background: "white",
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
            </div>
          </div>
        </section>

        {/* ── SCÉNARIOS CONCRETS ── */}
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
              Voyez exactement quoi faire selon votre situation
            </h2>
            <p style={{ textAlign: "center", color: "#78716C", fontSize: "13px", marginBottom: "1.75rem" }}>
              Cliquez sur le profil qui vous ressemble le plus
            </p>
            <div className="flex flex-col gap-3">
              {scenariosConcrets.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: PARCH,
                    border: "1px solid #EDE9E0",
                    borderRadius: "12px",
                    padding: "14px 18px",
                    textDecoration: "none",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{s.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{s.profil}</div>
                      <div style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "2px" }}>{s.detail}</div>
                    </div>
                  </div>
                  <div style={{
                    fontWeight: 800, fontSize: "13px", color: "#059669",
                    background: "#D1FAE5", padding: "4px 10px", borderRadius: "100px",
                    flexShrink: 0, whiteSpace: "nowrap",
                  }}>
                    {s.gain}
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
              <Link
                href="/questionnaire"
                style={{
                  display: "inline-block",
                  background: "#059669",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "12px",
                  textDecoration: "none",
                }}
              >
                👉 Voir mon scénario
              </Link>
            </div>
          </div>
        </section>

        {/* ── OUTIL / QUESTIONNAIRE ── */}
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
              Obtenez un plan personnalisé en 2 minutes
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "0.5rem" }}>
              Répondez à quelques questions et obtenez :
            </p>
            <div className="flex flex-col gap-2" style={{ marginBottom: "1.75rem", textAlign: "left", maxWidth: "300px", margin: "0 auto 1.75rem" }}>
              {[
                "une estimation des montants récupérables",
                "des actions concrètes à prioriser",
                "des recommandations adaptées à votre situation",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: GREEN, flexShrink: 0, marginTop: "1px" }}>✓</span>
                  <span style={{ color: "rgba(240,235,224,0.65)", fontSize: "14px" }}>{item}</span>
                </div>
              ))}
            </div>
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
              🚀 Lancer mon diagnostic →
            </Link>
            <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", marginTop: "10px" }}>
              Gratuit · 2 minutes · aucune inscription
            </p>
          </div>
        </section>

        {/* ── COMMENT ÇA FONCTIONNE ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="py-10 px-5">
          <div className="max-w-lg mx-auto">
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.45rem",
              fontWeight: 800,
              color: "#1C1C1E",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}>
              Comment ça fonctionne
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { num: "1", text: "Vous répondez à quelques questions" },
                { num: "2", text: "Nous analysons votre situation" },
                { num: "3", text: "Vous obtenez des résultats concrets et actionnables" },
              ].map((step) => (
                <div key={step.num} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  background: PARCH, borderRadius: "12px", padding: "16px",
                  border: "1px solid #EDE9E0",
                }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: GOLD, color: DARK,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "15px", flexShrink: 0,
                  }}>{step.num}</div>
                  <span style={{ fontSize: "14px", color: "#1C1C1E", fontWeight: 500 }}>{step.text}</span>
                </div>
              ))}
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
              Outil informatif non affilié au gouvernement.<br />
              Les montants sont des estimations à valider selon votre situation.
            </p>
            <Link href="/contact" style={{ color: "rgba(240,235,224,0.4)", fontSize: "12px", display: "block", marginTop: "8px" }}>Contactez-nous</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
