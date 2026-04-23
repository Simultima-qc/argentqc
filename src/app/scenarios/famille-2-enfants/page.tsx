import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Scénario : Famille avec 2 enfants, 90 000 $ — 3 200 $ récupérés | ArgentQC.ca",
  description:
    "Famille québécoise, 2 enfants (5 et 8 ans), revenu 90 000 $. Calcul détaillé des aides disponibles : allocations, crédits d'impôt, frais de garde. Plan d'action concret.",
  alternates: { canonical: "https://argentqc.ca/scenarios/famille-2-enfants" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function ScenarioFamillePage() {
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
              <Link href="/scenarios" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Scénarios</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <span>Famille 2 enfants</span>
            </nav>
            <div style={{
              display: "inline-block",
              background: "rgba(16,185,129,0.15)",
              color: GREEN,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "100px",
              marginBottom: "1rem",
            }}>
              👨‍👩‍👧‍👦 Scénario famille
            </div>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.3rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Famille avec 2 enfants — 3 200 $ récupérés
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75 }}>
              Marie et Jean, 2 enfants de 5 et 8 ans, revenu familial de 90 000 $. Voici les aides auxquelles ils ont droit et comment les obtenir.
            </p>
          </div>
        </section>

        {/* ── PROFIL ── */}
        <section style={{ background: "#0F172A" }} className="px-5 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ color: GOLD, fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1rem", marginBottom: "14px" }}>
              📋 Profil
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Situation familiale", "Couple avec 2 enfants (5 et 8 ans)"],
                ["Revenu familial", "90 000 $/an"],
                ["Logement", "Locataires"],
                ["Véhicule", "1 voiture conventionnelle"],
                ["Garde des enfants", "Garderie subventionnée (7 $/jour)"],
                ["REER", "Peu cotisé"],
              ].map(([label, val]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "10px", padding: "12px 14px" }}>
                  <div style={{ fontSize: "11px", color: "rgba(240,235,224,0.4)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
                  <div style={{ fontSize: "13px", color: "#F0EBE0", fontWeight: 600, lineHeight: 1.4 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALCULS CONCRETS ── */}
        <section style={{ background: "white" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              💰 Calcul des aides disponibles
            </h2>
            <div style={{ border: "1px solid #EDE9E0", borderRadius: "14px", overflow: "hidden" }}>
              {[
                {
                  label: "Allocation canadienne pour enfants (ACE)",
                  montant: "+ 2 280 $",
                  detail: "~1 140 $/enfant/an à 90 000 $ de revenu familial",
                  badge: "Fédéral",
                  badgeColor: "#DBEAFE",
                  badgeText: "#1D4ED8",
                },
                {
                  label: "Allocation famille Québec",
                  montant: "+ 1 400 $",
                  detail: "~700 $/enfant/an — versement automatique",
                  badge: "Provincial",
                  badgeColor: "#D1FAE5",
                  badgeText: "#065F46",
                },
                {
                  label: "Crédit d'impôt TPS/TVH",
                  montant: "+ 320 $",
                  detail: "Famille de 4 à 90 000 $ de revenu",
                  badge: "Fédéral",
                  badgeColor: "#DBEAFE",
                  badgeText: "#1D4ED8",
                },
                {
                  label: "Crédit de solidarité",
                  montant: "+ 520 $",
                  detail: "Volet logement (locataires) + volet TVQ",
                  badge: "Provincial",
                  badgeColor: "#D1FAE5",
                  badgeText: "#065F46",
                },
                {
                  label: "Crédit d'impôt frais de garde",
                  montant: "Variable",
                  detail: "Si garde non subventionnée : jusqu'à 75 % des frais remboursés",
                  badge: "Provincial",
                  badgeColor: "#D1FAE5",
                  badgeText: "#065F46",
                },
              ].map((item, i) => (
                <div key={item.label} style={{
                  padding: "16px 20px",
                  borderBottom: i < 4 ? "1px solid #F5F0EA" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
                        <span style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E" }}>{item.label}</span>
                        <span style={{
                          background: item.badgeColor,
                          color: item.badgeText,
                          fontSize: "10px",
                          fontWeight: 700,
                          padding: "1px 7px",
                          borderRadius: "100px",
                        }}>{item.badge}</span>
                      </div>
                      <div style={{ fontSize: "12px", color: "#A8A29E", lineHeight: 1.5 }}>{item.detail}</div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#059669", flexShrink: 0 }}>{item.montant}</div>
                  </div>
                </div>
              ))}
              {/* Total */}
              <div style={{ padding: "16px 20px", background: "#F0FDF4", borderTop: "2px solid #10B981" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E" }}>Total estimé (aides récurrentes)</span>
                  <span style={{ fontWeight: 900, fontSize: "1.4rem", color: "#059669" }}>~ 3 200 $/an</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "12px", color: "#A8A29E", marginTop: "8px", lineHeight: 1.6 }}>
              * Estimations basées sur les barèmes 2026. Les montants réels varient selon votre situation exacte. Consultez les sites gouvernementaux pour confirmer.
            </p>
          </div>
        </section>

        {/* ── PROBLÈMES / OPPORTUNITÉS ── */}
        <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              🔍 Opportunités souvent manquées
            </h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  titre: "Ne pas produire sa déclaration d'impôt",
                  impact: "Perte de l'ACE et de la plupart des crédits",
                  conseil: "Les familles à faible ou moyen revenu DOIVENT produire leur déclaration, même si elles n'ont pas d'impôt à payer.",
                },
                {
                  titre: "Ignorer le crédit de solidarité",
                  impact: "Jusqu'à 520 $/an non réclamés",
                  conseil: "Ce crédit est versé automatiquement après la déclaration provinciale — s'assurer que les deux déclarations sont produites.",
                },
                {
                  titre: "Sous-cotiser au REER",
                  impact: "Impôt payé inutilement à 90 000 $",
                  conseil: "À 90 000 $, chaque 1 000 $ cotisé au REER génère ~380 $ de remboursement d'impôt. Les droits inutilisés s'accumulent.",
                },
              ].map((item) => (
                <div key={item.titre} style={{ background: "white", borderRadius: "12px", padding: "16px", border: "1px solid #EDE9E0" }}>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "4px" }}>{item.titre}</p>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "#DC2626", marginBottom: "6px" }}>Impact : {item.impact}</p>
                  <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.6 }}>{item.conseil}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLAN D'ACTION ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              🎯 Plan d&apos;action — 3 étapes prioritaires
            </h2>
            <ol style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                {
                  step: "1",
                  titre: "Produire les deux déclarations d'impôt avant le 30 avril",
                  detail: "Déclaration fédérale (ARC) + déclaration provinciale (Revenu Québec). Déclenche automatiquement l'ACE, le crédit TPS et le crédit de solidarité.",
                  lien: "/impots",
                  cta: "Guide impôts Québec",
                },
                {
                  step: "2",
                  titre: "Vérifier les droits REER et commencer à cotiser",
                  detail: "À 90 000 $, cotiser au REER génère un remboursement d'environ 380 $ pour chaque 1 000 $ cotisé. Idéal d'utiliser ce remboursement pour cotiser encore.",
                  lien: "/retraite/reer",
                  cta: "Guide REER complet",
                },
                {
                  step: "3",
                  titre: "Vérifier l'admissibilité aux crédits frais de garde",
                  detail: "Si les enfants sont dans une garderie non subventionnée, le crédit peut couvrir jusqu'à 75 % des frais payés. À déclarer dans la déclaration provinciale.",
                  lien: "/questionnaire",
                  cta: "Diagnostic personnalisé",
                },
              ].map((item) => (
                <li key={item.step} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{
                    width: "34px", height: "34px", borderRadius: "50%",
                    background: DARK, color: GOLD,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-playfair)", fontSize: "14px", fontWeight: 800,
                    flexShrink: 0, marginTop: "2px",
                  }}>{item.step}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E", marginBottom: "6px" }}>{item.titre}</p>
                    <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7, marginBottom: "10px" }}>{item.detail}</p>
                    <Link
                      href={item.lien}
                      style={{
                        display: "inline-block",
                        background: PARCH,
                        color: DARK,
                        fontWeight: 700,
                        fontSize: "13px",
                        padding: "6px 14px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        border: "1px solid #EDE9E0",
                      }}
                    >
                      {item.cta} →
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── CTA DIAGNOSTIC ── */}
        <section style={{ background: DARK }} className="px-5 py-10">
          <div className="max-w-lg mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Ta situation est différente ?
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem" }}>
              Réponds à 8 questions et reçois une liste personnalisée pour ton profil exact.
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

        {/* ── AUTRES SCÉNARIOS ── */}
        <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
              Autres scénarios
            </h2>
            <div className="flex flex-col gap-2">
              {[
                { label: "Célibataire locataire · 50 000 $", href: "/scenarios/celibataire-locataire" },
                { label: "Couple sans enfant · 120 000 $", href: "/scenarios/couple-sans-enfant" },
                { label: "Propriétaire avec hypothèque", href: "/scenarios/proprietaire-hypotheque" },
                { label: "Pré-retraite · 55 ans", href: "/scenarios/pre-retraite" },
              ].map((sc) => (
                <Link
                  key={sc.href}
                  href={sc.href}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "white",
                    border: "1px solid #EDE9E0",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1C1C1E",
                  }}
                >
                  {sc.label}
                  <span style={{ color: "#3B82F6" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: DARK }} className="py-8 px-5">
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
