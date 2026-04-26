import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "REER ou CELI : lequel choisir selon votre revenu 2026 | ArgentQC.ca",
  description:
    "REER vs CELI au Québec : guide complet pour choisir le bon compte selon ton revenu, ton taux marginal et tes objectifs. Calculs concrets et plan d'action.",
  alternates: { canonical: "https://argentqc.ca/strategies/reer-vs-celi" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function ReerVsCeliPage() {
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
              <span>REER vs CELI</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              REER ou CELI : lequel choisir ?
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              La réponse dépend de ton revenu actuel et de ton revenu prévu à la retraite. Un mauvais choix peut coûter des milliers de dollars sur 20 ans.
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
                Sophie, 34 ans — Revenu 68 000 $, prévoit 45 000 $ à la retraite
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["Taux marginal actuel (68k$)", "37,1 %"],
                  ["Taux marginal estimé retraite (45k$)", "26,5 %"],
                  ["Cotisation REER 12 000 $ → économie immédiate", "+ 4 452 $"],
                  ["Même montant en CELI", "0 $ d'économie aujourd'hui"],
                  ["Avantage REER sur 25 ans (intérêts composés)", "~ 38 000 $"],
                ].map(([label, montant]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", gap: "8px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                    <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>{montant}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "14px" }}>Conclusion</span>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1rem" }}>REER prioritaire ✓</span>
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
                { step: "1", text: "Trouve ton taux marginal d'imposition actuel (disponible dans ton avis de cotisation ARC)" },
                { step: "2", text: "Estime ton revenu prévu à la retraite : RRQ + épargnes + autres revenus" },
                { step: "3", text: "Applique la règle : REER si revenu actuel > revenu retraite, CELI sinon — ou une stratégie mixte" },
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
            <Link
              href="/questionnaire"
              style={{
                display: "block",
                background: GOLD,
                color: DARK,
                fontWeight: 800,
                fontSize: "0.95rem",
                padding: "0.9rem",
                borderRadius: "12px",
                textAlign: "center",
                textDecoration: "none",
                marginTop: "1.5rem",
              }}
            >
              🚀 Voir ma stratégie personnalisée →
            </Link>
          </div>
        </section>

        {/* ── LA RÈGLE D'OR ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.75rem" }}>
              La règle d&apos;or REER vs CELI
            </h2>

            <div className="flex flex-col gap-5">
              {[
                {
                  titre: "Choisir le REER",
                  emoji: "🏦",
                  badgeLabel: "Revenu élevé",
                  badgeColor: "#DBEAFE",
                  badgeText: "#1D4ED8",
                  desc: "Le REER est avantageux quand ton taux marginal aujourd'hui est plus élevé que celui prévu à la retraite. La déduction réduit ton impôt maintenant, et le retrait futur sera imposé à un taux plus bas.",
                  criteres: [
                    "Revenu actuel > 55 000 $ (taux marginal significatif)",
                    "Revenu de retraite prévu inférieur au revenu actuel",
                    "Horizons de placement à long terme (10+ ans)",
                    "Droits de cotisation disponibles (18 % du revenu gagné)",
                  ],
                  montant: "Économie typique : 300-500 $ par tranche de 1 000 $ cotisée",
                },
                {
                  titre: "Choisir le CELI",
                  emoji: "💚",
                  badgeLabel: "Flexibilité",
                  badgeColor: "#D1FAE5",
                  badgeText: "#065F46",
                  desc: "Le CELI est préférable quand ton revenu actuel est faible ou similaire à ton revenu de retraite prévu. Aucun impôt sur le retrait — idéal pour projets à court terme ou épargne d'urgence.",
                  criteres: [
                    "Revenu actuel < 45 000 $ (taux marginal faible)",
                    "Revenu de retraite prévu équivalent ou supérieur au revenu actuel",
                    "Besoin de flexibilité — retraits sans conséquences fiscales",
                    "Droits CELI accumulés depuis 2009 (jusqu'à 95 000 $ en 2026)",
                  ],
                  montant: "Avantage : retraits non imposables, droits récupérés l'année suivante",
                },
                {
                  titre: "Stratégie mixte (idéale)",
                  emoji: "⚖️",
                  badgeLabel: "Optimal",
                  badgeColor: "#FEF3C7",
                  badgeText: "#92400E",
                  desc: "Dans la majorité des cas, une combinaison REER + CELI est optimale. Cotiser au REER jusqu'au seuil de taux marginal supérieur, puis mettre le reste en CELI.",
                  criteres: [
                    "REER jusqu'à saturation du palier fiscal (ex. : jusqu'à 112 655 $ de revenu imposable)",
                    "Remboursement d'impôt REER → réinvestir dans le CELI",
                    "CELI pour fonds d'urgence et projets < 5 ans",
                    "Réévaluer chaque année selon le revenu réel",
                  ],
                  montant: "Impact combiné : souvent 5 000-8 000 $/an optimisés",
                },
              ].map((item) => (
                <div key={item.titre} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", overflow: "hidden" }}>
                  <div style={{ background: DARK, padding: "14px 20px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "1.3rem" }}>{item.emoji}</span>
                    <h3 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 700, fontSize: "1rem", margin: 0, flex: 1 }}>{item.titre}</h3>
                    <span style={{ background: item.badgeColor, color: item.badgeText, fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "100px", flexShrink: 0 }}>
                      {item.badgeLabel}
                    </span>
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <p style={{ fontSize: "14px", color: "#57534E", lineHeight: 1.7, marginBottom: "14px" }}>{item.desc}</p>
                    <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
                      {item.criteres.map((c) => (
                        <li key={c} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#44403C" }}>
                          <span style={{ color: GREEN, flexShrink: 0 }}>✓</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div style={{ background: PARCH, borderRadius: "8px", padding: "10px 14px", fontSize: "12px", fontWeight: 700, color: "#059669", border: "1px solid #EDE9E0" }}>
                      {item.montant}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TABLEAU COMPARATIF ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              Comparatif REER vs CELI en chiffres
            </h2>
            <div style={{ border: "1px solid #EDE9E0", borderRadius: "14px", overflow: "hidden" }}>
              {[
                { critere: "Cotisation déductible d'impôt", reer: "Oui", celi: "Non" },
                { critere: "Croissance à l'abri de l'impôt", reer: "Oui", celi: "Oui" },
                { critere: "Retrait imposable", reer: "Oui", celi: "Non" },
                { critere: "Droits récupérés après retrait", reer: "Non", celi: "Oui (l'année suivante)" },
                { critere: "Plafond 2026", reer: "18 % du revenu (max 31 560 $)", celi: "7 000 $/an (cumul : 95 000 $)" },
                { critere: "Âge limite de conversion", reer: "71 ans (→ FERR)", celi: "Aucun" },
                { critere: "Impact sur crédits basés sur revenu", reer: "Réduit le revenu net (↑ crédits)", celi: "Aucun impact" },
              ].map((row, i) => (
                <div key={row.critere} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", padding: "12px 18px", borderBottom: i < 6 ? "1px solid #F5F0EA" : "none", gap: "8px", alignItems: "center" }}>
                  <span style={{ fontSize: "13px", color: "#44403C", fontWeight: 500 }}>{row.critere}</span>
                  <span style={{ fontSize: "12px", color: "#1D4ED8", fontWeight: 600, textAlign: "center" }}>{row.reer}</span>
                  <span style={{ fontSize: "12px", color: "#065F46", fontWeight: 600, textAlign: "center" }}>{row.celi}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", padding: "8px 18px", gap: "8px" }}>
              <span style={{ fontSize: "11px", color: "#A8A29E" }}></span>
              <span style={{ fontSize: "11px", color: "#1D4ED8", fontWeight: 700, textAlign: "center" }}>REER</span>
              <span style={{ fontSize: "11px", color: "#065F46", fontWeight: 700, textAlign: "center" }}>CELI</span>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "Puis-je cotiser au REER et au CELI la même année ?",
                  r: "Oui, absolument. Les deux comptes sont indépendants. Beaucoup de Québécois cotisent d'abord au REER pour obtenir le remboursement d'impôt, puis réinvestissent ce remboursement dans le CELI.",
                },
                {
                  q: "Que faire si j'ai des droits REER inutilisés depuis plusieurs années ?",
                  r: "Les droits s'accumulent indéfiniment. Si tu as une année à revenu plus élevé (bonus, vente d'actif), c'est le bon moment pour les utiliser en une seule contribution importante.",
                },
                {
                  q: "Le CELI est-il vraiment sans impôt à la retraite ?",
                  r: "Oui — les retraits CELI ne s'ajoutent pas à ton revenu imposable et n'affectent pas la SV, le SRG ou les crédits basés sur le revenu. C'est son principal avantage pour les retraités.",
                },
              ].map((faq) => (
                <div key={faq.q} style={{ borderBottom: "1px solid #EDE9E0", paddingBottom: "16px" }}>
                  <p style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E", marginBottom: "6px" }}>{faq.q}</p>
                  <p style={{ fontSize: "14px", color: "#57534E", lineHeight: 1.7 }}>{faq.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIENS CONNEXES ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
              Guides connexes
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Guide REER complet", href: "/retraite/reer" },
                { label: "Guide CELI et plafonds", href: "/retraite/celi" },
                { label: "Fractionnement du revenu", href: "/strategies/fractionnement-revenu" },
                { label: "Décaissement à la retraite", href: "/strategies/decaissement-retraite" },
                { label: "Toutes les stratégies", href: "/strategies" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "inline-block",
                    background: PARCH,
                    color: DARK,
                    fontWeight: 600,
                    fontSize: "13px",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    border: "1px solid #EDE9E0",
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: DARK }} className="px-5 py-10">
          <div className="max-w-lg mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Quelle est ta situation exacte ?
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Le diagnostic gratuit identifie la stratégie REER/CELI optimale selon ton revenu réel et tes objectifs.
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
        <SiteFooter
          legalText={"Outil informatif non affilié au gouvernement. Consultez un planificateur financier agréé pour des conseils personnalisés."}
          contentClassName="max-w-lg mx-auto text-center"
          style={{ background: DARK, padding: "32px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          brandStyle={{ color: GOLD, fontSize: "1.1rem", marginBottom: "8px" }}
          legalStyle={{ fontSize: "12px", lineHeight: 1.7 }}
          contactLinkStyle={{ marginTop: "6px" }}
        />
      </main>
    </>
  );
}
