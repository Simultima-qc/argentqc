import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Scénario : Célibataire locataire, 50 000 $ — Optimisation REER vs CELI | ArgentQC.ca",
  description:
    "Célibataire, 32 ans, locataire, revenu 50 000 $. Optimisation REER vs CELI, crédits de base, crédit de solidarité. Calculs concrets et plan d'action.",
  alternates: { canonical: "https://argentqc.ca/scenarios/celibataire-locataire" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function ScenarioCelibatairePage() {
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
              <span>Célibataire locataire</span>
            </nav>
            <div style={{
              display: "inline-block",
              background: "rgba(59,130,246,0.15)",
              color: "#60A5FA",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "100px",
              marginBottom: "1rem",
            }}>
              🧑 Scénario célibataire
            </div>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.3rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Célibataire locataire — 4 680 $ optimisés
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75 }}>
              Simon, 32 ans, locataire à Montréal, revenu de 50 000 $. REER et CELI sous-utilisés. Voici comment maximiser sa situation financière.
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
                ["Situation familiale", "Célibataire, sans enfant"],
                ["Âge", "32 ans"],
                ["Revenu", "50 000 $/an (salarié)"],
                ["Logement", "Locataire (loyer 1 250 $/mois)"],
                ["REER accumulé", "8 000 $ (droits inutilisés : 22 000 $)"],
                ["CELI utilisé", "5 000 $ sur 51 000 $ disponibles"],
              ].map(([label, val]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "10px", padding: "12px 14px" }}>
                  <div style={{ fontSize: "11px", color: "rgba(240,235,224,0.4)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
                  <div style={{ fontSize: "13px", color: "#F0EBE0", fontWeight: 600, lineHeight: 1.4 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALCULS ── */}
        <section style={{ background: "white" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              💰 Optimisation possible
            </h2>
            <div style={{ border: "1px solid #EDE9E0", borderRadius: "14px", overflow: "hidden" }}>
              {[
                {
                  label: "Cotisation REER (9 000 $ = 18 % du revenu)",
                  montant: "2 700 $",
                  detail: "Remboursement d'impôt estimé au taux marginal de ~30 % à 50 000 $",
                  type: "Économie",
                },
                {
                  label: "Crédit TPS/TVH fédéral",
                  montant: "+ 496 $",
                  detail: "Versement trimestriel — automatique après déclaration fédérale",
                  type: "Aide",
                },
                {
                  label: "Crédit de solidarité (volet logement + TVQ)",
                  montant: "+ 1 185 $",
                  detail: "Locataire à Montréal à 50 000 $ de revenu — versement mensuel",
                  type: "Aide",
                },
                {
                  label: "CELI — transfert épargne non enregistrée",
                  montant: "Libre d'impôt",
                  detail: "Déplacer les épargnes vers le CELI élimine l'impôt sur le revenu de placement",
                  type: "Stratégie",
                },
                {
                  label: "Optimisation internet + téléphonie",
                  montant: "- 300 $",
                  detail: "Comparatif opérateurs virtuels vs grands fournisseurs à revenu identique",
                  type: "Économie",
                },
              ].map((item, i) => (
                <div key={item.label} style={{
                  padding: "16px 20px",
                  borderBottom: i < 4 ? "1px solid #F5F0EA" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                        <span style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E" }}>{item.label}</span>
                        <span style={{
                          background: item.type === "Aide" ? "#D1FAE5" : item.type === "Économie" ? "#FEF3C7" : "#EDE9FE",
                          color: item.type === "Aide" ? "#065F46" : item.type === "Économie" ? "#92400E" : "#5B21B6",
                          fontSize: "10px",
                          fontWeight: 700,
                          padding: "1px 7px",
                          borderRadius: "100px",
                        }}>{item.type}</span>
                      </div>
                      <div style={{ fontSize: "12px", color: "#A8A29E", lineHeight: 1.5 }}>{item.detail}</div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: "1rem", color: "#059669", flexShrink: 0 }}>{item.montant}</div>
                  </div>
                </div>
              ))}
              <div style={{ padding: "16px 20px", background: "#F0FDF4", borderTop: "2px solid #10B981" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E" }}>Impact financier total estimé</span>
                  <span style={{ fontWeight: 900, fontSize: "1.4rem", color: "#059669" }}>~ 4 681 $/an</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "12px", color: "#A8A29E", marginTop: "8px" }}>
              * Estimations basées sur les barèmes 2026. Consultez un conseiller pour votre situation exacte.
            </p>
          </div>
        </section>

        {/* ── REER VS CELI ── */}
        <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
              🏦 REER ou CELI ? La règle pour Simon
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div style={{ background: "white", borderRadius: "12px", padding: "16px", border: `2px solid ${GREEN}` }}>
                <p style={{ fontWeight: 800, fontSize: "14px", color: "#1C1C1E", marginBottom: "8px" }}>✅ REER — prioritaire</p>
                <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    "Revenu actuel 50 000 $ → taux marginal ~30 %",
                    "Retraite prévue à revenu plus bas",
                    "Remboursement immédiat de 2 700 $",
                    "Droits inutilisés de 22 000 $ disponibles",
                  ].map((p) => (
                    <li key={p} style={{ fontSize: "12px", color: "#44403C", lineHeight: 1.5, display: "flex", gap: "6px" }}>
                      <span style={{ color: GREEN, flexShrink: 0 }}>✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: "white", borderRadius: "12px", padding: "16px", border: "1px solid #EDE9E0" }}>
                <p style={{ fontWeight: 800, fontSize: "14px", color: "#1C1C1E", marginBottom: "8px" }}>💡 CELI — aussi important</p>
                <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    "51 000 $ de droits disponibles",
                    "Idéal pour projets court/moyen terme",
                    "Retraits sans impact fiscal",
                    "Protège les placements des impôts sur revenus",
                  ].map((p) => (
                    <li key={p} style={{ fontSize: "12px", color: "#44403C", lineHeight: 1.5, display: "flex", gap: "6px" }}>
                      <span style={{ color: "#3B82F6", flexShrink: 0 }}>→</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PLAN D'ACTION ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              🎯 Plan d'action — 3 étapes
            </h2>
            <ol style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                {
                  step: "1",
                  titre: "Cotiser 9 000 $ au REER avant le 28 février",
                  detail: "Pour maximiser le remboursement d'impôt sur l'année fiscale courante. Utilise le remboursement reçu (~2 700 $) pour cotiser à nouveau l'année suivante (stratégie de mise de fonds accélérée).",
                  lien: "/retraite/reer",
                  cta: "Guide REER",
                },
                {
                  step: "2",
                  titre: "Produire les deux déclarations pour activer les crédits",
                  detail: "Le crédit de solidarité (1 185 $/an) et le crédit TPS (496 $/an) sont automatiquement déclenchés par la déclaration. Sans déclaration = aucun crédit.",
                  lien: "/credit-solidarite-quebec",
                  cta: "Guide crédit de solidarité",
                },
                {
                  step: "3",
                  titre: "Comparer internet + téléphonie (30 min, 300 $/an)",
                  detail: "Les opérateurs virtuels (Fizz, Public Mobile) offrent des forfaits 40-60 % moins chers pour une qualité équivalente. Une comparaison rapide peut économiser 25 $/mois sans sacrifice.",
                  lien: "/internet",
                  cta: "Comparateur internet",
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

        {/* ── CTA + AUTRES SCÉNARIOS ── */}
        <section style={{ background: DARK }} className="px-5 py-10">
          <div className="max-w-lg mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Ta situation est différente ?
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem" }}>
              Le diagnostic personnalisé adapte les recommandations à ton profil exact.
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

        <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
              Autres scénarios
            </h2>
            <div className="flex flex-col gap-2">
              {[
                { label: "Famille avec 2 enfants · 90 000 $", href: "/scenarios/famille-2-enfants" },
                { label: "Couple sans enfant · 120 000 $", href: "/scenarios/couple-sans-enfant" },
                { label: "Propriétaire avec hypothèque", href: "/scenarios/proprietaire-hypotheque" },
                { label: "Pré-retraite · 55 ans", href: "/scenarios/pre-retraite" },
              ].map((sc) => (
                <Link key={sc.href} href={sc.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "white", border: "1px solid #EDE9E0", borderRadius: "10px", padding: "12px 16px", textDecoration: "none", fontSize: "14px", fontWeight: 600, color: "#1C1C1E" }}>
                  {sc.label}
                  <span style={{ color: "#3B82F6" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer style={{ background: DARK }} className="py-8 px-5">
          <div className="max-w-lg mx-auto text-center">
            <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>ArgentQC.ca</p>
            <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", lineHeight: 1.7 }}>
              Outil informatif non affilié au gouvernement. Les montants sont des estimations — consultez les sites officiels pour confirmer votre admissibilité.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
