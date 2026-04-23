import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Scénarios financiers types au Québec 2026 | ArgentQC.ca",
  description:
    "5 scénarios financiers types pour les Québécois : famille, célibataire, couple, propriétaire, pré-retraite. Calculs concrets et plan d'action pour chaque profil.",
  alternates: { canonical: "https://argentqc.ca/scenarios" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const scenarios = [
  {
    emoji: "👨‍👩‍👧‍👦",
    titre: "Famille avec 2 enfants",
    profil: "2 enfants (5 et 8 ans) · Revenu 90 000 $",
    gain: "3 200 $",
    gainLabel: "récupérés/an",
    desc: "Crédits famille, allocations enfants, frais de garde, crédit de solidarité",
    href: "/scenarios/famille-2-enfants",
    color: "#D1FAE5",
    textColor: "#065F46",
  },
  {
    emoji: "🧑",
    titre: "Célibataire locataire",
    profil: "32 ans · Locataire · Revenu 50 000 $",
    gain: "4 680 $",
    gainLabel: "optimisés/an",
    desc: "Optimisation REER vs CELI, crédits de base, crédit de solidarité",
    href: "/scenarios/celibataire-locataire",
    color: "#DBEAFE",
    textColor: "#1D4ED8",
  },
  {
    emoji: "👫",
    titre: "Couple sans enfant",
    profil: "Propriétaires · Revenu combiné 120 000 $",
    gain: "1 200 $",
    gainLabel: "d'économies/an",
    desc: "Optimisation dépenses, fractionnement REER, réduction assurances",
    href: "/scenarios/couple-sans-enfant",
    color: "#FEF3C7",
    textColor: "#92400E",
  },
  {
    emoji: "🏡",
    titre: "Propriétaire avec hypothèque",
    profil: "Couple · Hypothèque 350 000 $ · Veulent rénover",
    gain: "15 000 $",
    gainLabel: "en subventions",
    desc: "Rénoclimat, RAP REER, crédits rénovation fédéral, thermopompe",
    href: "/scenarios/proprietaire-hypotheque",
    color: "#EDE9FE",
    textColor: "#5B21B6",
  },
  {
    emoji: "👴",
    titre: "Pré-retraite (55 ans)",
    profil: "55 ans · Revenu 80 000 $ · Retraite dans 10 ans",
    gain: "6 000 $",
    gainLabel: "d'impôt évités/an",
    desc: "Décaissement REER/CELI, RRQ différée, crédit d'âge, optimisation fiscale",
    href: "/scenarios/pre-retraite",
    color: "#FEE2E2",
    textColor: "#991B1B",
  },
];

export default function ScenariosPage() {
  return (
    <>
      <Header />
      <main style={{ background: PARCH, minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section style={{ background: DARK }} className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
              <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Accueil</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <span>Scénarios types</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Scénarios financiers types
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              Des exemples concrets avec profils réels, calculs détaillés et plan d&apos;action. Trouve le scénario qui ressemble le plus à ta situation.
            </p>
          </div>
        </section>

        {/* ── LISTE SCÉNARIOS ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col gap-4">
              {scenarios.map((sc) => (
                <Link
                  key={sc.href}
                  href={sc.href}
                  style={{
                    display: "block",
                    background: "white",
                    borderRadius: "16px",
                    border: "1px solid #EDE9E0",
                    padding: "20px",
                    textDecoration: "none",
                    boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <span style={{ fontSize: "2rem", flexShrink: 0 }}>{sc.emoji}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                        <h2 style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "1.05rem", color: "#1C1C1E", margin: 0 }}>
                          {sc.titre}
                        </h2>
                        <span style={{
                          background: sc.color,
                          color: sc.textColor,
                          fontSize: "10px",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "100px",
                        }}>
                          {sc.gain} {sc.gainLabel}
                        </span>
                      </div>
                      <p style={{ fontSize: "12px", color: "#A8A29E", marginBottom: "6px" }}>{sc.profil}</p>
                      <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.5 }}>{sc.desc}</p>
                    </div>
                    <span style={{ color: GREEN, fontSize: "18px", flexShrink: 0, marginTop: "4px" }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA DIAGNOSTIC ── */}
        <section style={{ background: DARK }} className="px-5 py-10">
          <div className="max-w-lg mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Ton profil ne ressemble à aucun de ces scénarios ?
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Le diagnostic personnalisé analyse ta situation spécifique en 2 minutes.
            </p>
            <Link
              href="/questionnaire"
              style={{
                display: "inline-block",
                background: GOLD,
                color: DARK,
                fontWeight: 800,
                fontSize: "1rem",
                padding: "0.95rem 2rem",
                borderRadius: "14px",
                textDecoration: "none",
              }}
            >
              🚀 Lancer le diagnostic →
            </Link>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,0.06)" }} className="py-8 px-5">
          <div className="max-w-lg mx-auto text-center">
            <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>ArgentQC.ca</p>
            <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", lineHeight: 1.7 }}>
              Outil informatif non affilié au gouvernement. Les montants sont des estimations — consultez les sites officiels pour confirmer votre admissibilité.
            </p>
            <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
            <Link href="/politique-confidentialite" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "4px" }}>Politique de confidentialité</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
