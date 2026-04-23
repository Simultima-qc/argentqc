import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Fractionnement du revenu en couple au Québec 2026 | ArgentQC.ca",
  description:
    "Guide complet sur le fractionnement du revenu en couple au Québec : REER de conjoint, fractionnement de pension, prêt au taux prescrit. Économies concrètes.",
  alternates: { canonical: "https://argentqc.ca/strategies/fractionnement-revenu" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function FractionnementRevenuPage() {
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
              <Link href="/strategies" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Stratégies</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <span>Fractionnement du revenu</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Fractionnement du revenu en couple
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              Quand un conjoint gagne beaucoup plus que l&apos;autre, le fractionnement du revenu réduit la facture fiscale combinée du couple — légalement et significativement.
            </p>
          </div>
        </section>

        {/* ── EXEMPLE CONCRET ── */}
        <section style={{ background: "#0F172A" }} className="px-5 py-8">
          <div className="max-w-2xl mx-auto">
            <div style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
              borderRadius: "14px",
              padding: "20px",
            }}>
              <p style={{ color: GREEN, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
                💡 Exemple concret
              </p>
              <p style={{ color: "#F0EBE0", fontSize: "15px", fontWeight: 600, lineHeight: 1.5, marginBottom: "8px" }}>
                David (82 000 $) et Camille (38 000 $) — Économie combinée de 4 200 $/an
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["REER de conjoint — David cotise 15k$ au nom de Camille", "économie ~4 650 $ pour David"],
                  ["Décaissement futur au taux de Camille (26,5 % vs 37,1 %)", "économie ~1 200 $/an à la retraite"],
                  ["Fractionnement de pension (dès 65 ans)", "économie ~2 000 $/an estimée"],
                  ["Prêt au taux prescrit (1 %) pour investissement", "revenu imposé chez Camille"],
                ].map(([label, montant]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", gap: "8px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                    <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>{montant}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "14px" }}>Économie fiscale combinée</span>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem" }}>~ 4 200 $/an</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOI FAIRE MAINTENANT ── */}
        <section style={{ background: "white", borderBottom: "1px solid #F0EBE0" }} className="px-5 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
              🎯 Quoi faire maintenant
            </h2>
            <ol style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { step: "1", text: "Calcule l'écart de revenus entre toi et ton conjoint(e) — si > 20 000 $, le fractionnement est pertinent" },
                { step: "2", text: "Ouvre un REER de conjoint si ce n'est pas déjà fait — simple à faire dans toute institution financière" },
                { step: "3", text: "Cotise au REER de conjoint chaque année jusqu'à la retraite pour maximiser l'impact à long terme" },
              ].map((item) => (
                <li key={item.step} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: DARK, color: GOLD,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px", fontWeight: 800, flexShrink: 0,
                  }}>{item.step}</span>
                  <p style={{ fontSize: "14px", color: "#44403C", lineHeight: 1.6, paddingTop: "4px" }}>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── STRATÉGIES DÉTAILLÉES ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.75rem" }}>
              3 stratégies de fractionnement
            </h2>
            <div className="flex flex-col gap-5">
              {[
                {
                  emoji: "🏦",
                  titre: "1. REER de conjoint",
                  niveau: "Accessible",
                  niveauColor: "#D1FAE5",
                  niveauText: "#065F46",
                  desc: "Le conjoint à revenu élevé cotise dans le REER au nom de l'autre. La déduction est prise par le cotisant (au taux élevé), mais le retrait futur sera imposé chez le bénéficiaire (au taux bas). Règle des 3 ans : le retrait doit attendre 3 ans après la dernière cotisation pour éviter l'attribution au cotisant.",
                  points: [
                    "Déduction prise au taux marginal le plus élevé",
                    "Retrait imposé au taux le plus bas (bénéficiaire)",
                    "Idéal si l'écart de revenus dépasse 15 000–20 000 $/an",
                    "Règle des 3 ans à respecter pour les retraits",
                  ],
                  lien: "/retraite/reer",
                  libelleBtn: "Guide REER complet",
                },
                {
                  emoji: "📊",
                  titre: "2. Fractionnement de pension (65+ ans)",
                  niveau: "À la retraite",
                  niveauColor: "#EDE9FE",
                  niveauText: "#5B21B6",
                  desc: "Dès 65 ans, les revenus de pension admissibles (FERR, rente de régime, revenus de placements) peuvent être partagés jusqu'à 50 % avec le conjoint dans les déclarations fiscales. Aucun transfert réel d'argent requis — c'est un choix fiscal annuel.",
                  points: [
                    "Jusqu'à 50 % du revenu de pension admissible transférable",
                    "Réduit l'impôt du conjoint à revenu élevé",
                    "Peut réduire l'OAS clawback (récupération SV)",
                    "Choix annuel — optimisé chaque année selon les revenus",
                  ],
                  lien: "/retraite",
                  libelleBtn: "Guide retraite Québec",
                },
                {
                  emoji: "💰",
                  titre: "3. Prêt au taux prescrit",
                  niveau: "Avancé",
                  niveauColor: "#FEF3C7",
                  niveauText: "#92400E",
                  desc: "Le conjoint à revenu élevé prête de l'argent à l'autre au taux prescrit par l'ARC (actuellement 5 %). Le conjoint emprunteur investit l'argent et déclare les revenus de placement à son propre taux marginal — plus bas. Les intérêts payés sont déductibles pour l'emprunteur.",
                  points: [
                    "Revenus de placement imposés chez le conjoint à faible revenu",
                    "Contrat de prêt formel requis avec intérêt au taux prescrit",
                    "Les intérêts doivent être payés avant le 30 janvier chaque année",
                    "Plus efficace avec un écart de revenu important et un portefeuille conséquent",
                  ],
                  lien: "/strategies",
                  libelleBtn: "Toutes les stratégies",
                },
              ].map((strat) => (
                <div key={strat.titre} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", overflow: "hidden" }}>
                  <div style={{ background: DARK, padding: "14px 20px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "1.3rem" }}>{strat.emoji}</span>
                    <h3 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 700, fontSize: "1rem", margin: 0, flex: 1 }}>{strat.titre}</h3>
                    <span style={{ background: strat.niveauColor, color: strat.niveauText, fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "100px", flexShrink: 0 }}>
                      {strat.niveau}
                    </span>
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <p style={{ fontSize: "14px", color: "#57534E", lineHeight: 1.7, marginBottom: "14px" }}>{strat.desc}</p>
                    <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
                      {strat.points.map((p) => (
                        <li key={p} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#44403C" }}>
                          <span style={{ color: GREEN, flexShrink: 0 }}>✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link href={strat.lien} style={{ display: "inline-block", background: PARCH, color: DARK, fontWeight: 700, fontSize: "13px", padding: "8px 16px", borderRadius: "10px", textDecoration: "none", border: "1px solid #EDE9E0" }}>
                      {strat.libelleBtn} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "Est-ce légal de fractionner le revenu au Canada ?",
                  r: "Oui, les stratégies décrites ici sont toutes légales et reconnues par l'ARC. Le REER de conjoint, le fractionnement de pension et le prêt au taux prescrit sont des mécanismes officiellement prévus par la loi fiscale.",
                },
                {
                  q: "Quelle économie réaliste puis-je espérer ?",
                  r: "Pour un couple avec un écart de revenus de 30 000-50 000 $, les économies combinées se situent généralement entre 2 000 $ et 6 000 $/an selon les stratégies utilisées et les taux marginaux en jeu.",
                },
                {
                  q: "Faut-il un planificateur financier pour mettre ça en place ?",
                  r: "Le REER de conjoint est simple à ouvrir seul dans n'importe quelle institution financière. Le prêt au taux prescrit et le fractionnement de pension complexes méritent une consultation avec un planificateur financier agréé (PFA).",
                },
              ].map((faq) => (
                <div key={faq.q} style={{ borderBottom: "1px solid #F0EBE0", paddingBottom: "16px" }}>
                  <p style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E", marginBottom: "6px" }}>{faq.q}</p>
                  <p style={{ fontSize: "14px", color: "#57534E", lineHeight: 1.7 }}>{faq.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: DARK }} className="px-5 py-10">
          <div className="max-w-lg mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Votre situation de couple est unique
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Le diagnostic identifie les stratégies de fractionnement les plus avantageuses selon vos revenus respectifs.
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
              Lancer le diagnostic →
            </Link>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,0.06)" }} className="py-8 px-5">
          <div className="max-w-lg mx-auto text-center">
            <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>ArgentQC.ca</p>
            <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", lineHeight: 1.7 }}>
              Outil informatif non affilié au gouvernement. Consultez un planificateur financier agréé pour des conseils personnalisés.
            </p>
            <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
            <Link href="/politique-confidentialite" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "4px" }}>Politique de confidentialité</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
