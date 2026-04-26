import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Ordre de décaissement à la retraite au Québec 2026 | ArgentQC.ca",
  description:
    "REER, CELI, non enregistré, RRQ : quel ordre pour minimiser l'impôt à la retraite au Québec ? Guide complet avec calculs concrets.",
  alternates: { canonical: "https://argentqc.ca/strategies/decaissement-retraite" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function DecaissementRetraitePage() {
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
              <span>Décaissement à la retraite</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Ordre de décaissement optimal à la retraite
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              L&apos;ordre dans lequel tu retires tes épargnes peut faire une différence de 3 000 $ à 8 000 $/an en impôt — pour le même niveau de vie.
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
                Robert, 65 ans — Besoin de 70 000 $/an, REER 480k$, CELI 95k$, RRQ 14 000 $/an
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["Stratégie naïve : tout tirer du FERR (REER)", "impôt ~18 200 $/an"],
                  ["Stratégie optimale : FERR + CELI + RRQ différée", "impôt ~12 400 $/an"],
                  ["Différer RRQ à 70 ans (+ 42 % à vie)", "+ 5 880 $/an garantis"],
                  ["CELI pour combler les revenus variables", "0 $ d'impôt supplémentaire"],
                ].map(([label, montant]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", gap: "8px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                    <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>{montant}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "14px" }}>Économie annuelle</span>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem" }}>~ 5 800 $/an</span>
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
                { step: "1", text: "Inventorie tes sources de revenus à la retraite : RRQ, SV, FERR, CELI, régime d'employeur, non enregistré" },
                { step: "2", text: "Calcule l'écart entre ton revenu fixe (RRQ + SV) et ton besoin réel — c'est ce que tes comptes doivent combler" },
                { step: "3", text: "Consulte un planificateur financier pour modéliser les scénarios de retrait sur 20-30 ans" },
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

        {/* ── ORDRE DE DÉCAISSEMENT ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.75rem" }}>
              La stratégie de décaissement étape par étape
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  step: "1",
                  titre: "Utiliser d'abord les revenus non enregistrés",
                  desc: "Comptes bancaires, placements non enregistrés, revenus de dividendes. Ces retraits n'augmentent pas ton revenu imposable de la même manière que le FERR.",
                  conseil: "Vider les comptes non enregistrés en premier préserve la croissance libre d'impôt du CELI et retarde les retraits FERR.",
                  badge: "Phase 65-70 ans",
                },
                {
                  step: "2",
                  titre: "Tirer du FERR (ex-REER) en gestion du taux marginal",
                  desc: "Le FERR oblige des retraits minimums dès 72 ans. Mais retirer stratégiquement entre 65 et 71 ans, avant la SV et quand le taux marginal est bas, peut réduire l'impôt futur.",
                  conseil: "Principe clé : ne jamais laisser le FERR forcer des retraits dans un palier fiscal trop élevé. Anticiper en retirant progressivement.",
                  badge: "Toujours",
                },
                {
                  step: "3",
                  titre: "Utiliser le CELI pour les retraits variables",
                  desc: "Besoin exceptionnel (rénovation, voyage, urgence médicale) ? Le CELI ne génère aucun impôt et ne réduit pas les prestations basées sur le revenu (SV, SRG, Allocation-logement).",
                  conseil: "Le CELI est l'outil de flexibilité parfait à la retraite. Conserver une réserve CELI pour les imprévus plutôt que de tout retirer au départ.",
                  badge: "Retraits ponctuels",
                },
                {
                  step: "4",
                  titre: "Décider du moment optimal pour la RRQ",
                  desc: "Chaque mois de report après 65 ans augmente la RRQ de 0,7 % (8,4 %/an). Reporter à 70 ans = +42 % à vie. Si tu as d'autres revenus ou des épargnes, différer est souvent avantageux.",
                  conseil: "Règle pratique : si tu es en bonne santé et as d'autres revenus de 65 à 70 ans, reporter la RRQ est presque toujours gagnant sur le long terme.",
                  badge: "Décision clé",
                },
              ].map((item) => (
                <div key={item.step} style={{ background: "white", borderRadius: "14px", border: "1px solid #EDE9E0", overflow: "hidden" }}>
                  <div style={{ background: DARK, padding: "12px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{
                      width: "30px", height: "30px", borderRadius: "50%",
                      background: GOLD, color: DARK,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-playfair)", fontSize: "13px", fontWeight: 800, flexShrink: 0,
                    }}>{item.step}</span>
                    <h3 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 700, fontSize: "0.95rem", margin: 0, flex: 1 }}>{item.titre}</h3>
                    <span style={{ background: "rgba(245,200,66,0.15)", color: GOLD, fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", flexShrink: 0 }}>
                      {item.badge}
                    </span>
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <p style={{ fontSize: "14px", color: "#57534E", lineHeight: 1.7, marginBottom: "10px" }}>{item.desc}</p>
                    <div style={{ background: PARCH, borderRadius: "8px", padding: "10px 14px", fontSize: "13px", color: "#44403C", lineHeight: 1.6, border: "1px solid #EDE9E0" }}>
                      <span style={{ color: GREEN, fontWeight: 700 }}>💡 </span>{item.conseil}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FERR vs CELI : COMPARATIF ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              Impact sur les prestations gouvernementales
            </h2>
            <div style={{ border: "1px solid #EDE9E0", borderRadius: "14px", overflow: "hidden" }}>
              {[
                { source: "Retrait FERR", impact: "Imposable — augmente le revenu net", effetSv: "Peut déclencher récupération SV", effetSrg: "Réduit ou élimine le SRG" },
                { source: "Retrait CELI", impact: "Non imposable — neutre", effetSv: "Aucun impact", effetSrg: "Aucun impact" },
                { source: "Dividendes non enregistrés", impact: "Imposables au taux réduit", effetSv: "Impact modéré", effetSrg: "Peut réduire le SRG" },
                { source: "RRQ", impact: "Imposable", effetSv: "Inclus dans le calcul", effetSrg: "Réduit le SRG" },
              ].map((row, i) => (
                <div key={row.source} style={{ padding: "14px 18px", borderBottom: i < 3 ? "1px solid #F5F0EA" : "none" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
                    <div style={{ minWidth: "120px" }}>
                      <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{row.source}</span>
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "12px", color: "#57534E" }}>Impôt : {row.impact}</span>
                      <span style={{ fontSize: "12px", color: "#57534E" }}>SV : {row.effetSv}</span>
                      <span style={{ fontSize: "12px", color: "#57534E" }}>SRG : {row.effetSrg}</span>
                    </div>
                  </div>
                </div>
              ))}
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
                  q: "Dois-je commencer à retirer du FERR avant 71 ans ?",
                  r: "Ce n'est pas obligatoire avant 71 ans, mais ça peut être avantageux. Si ton revenu est bas entre 65 et 71 ans, retirer du FERR à un taux faible évite des retraits forcés plus élevés plus tard.",
                },
                {
                  q: "Quand vaut-il mieux prendre la RRQ à 60 ans plutôt que de reporter ?",
                  r: "Si tu as des problèmes de santé sérieux, si tu as besoin des revenus immédiatement, ou si tu n'as pas d'autres épargnes. Dans tous les autres cas, reporter à au moins 65 ans est généralement optimal.",
                },
                {
                  q: "La SV est-elle récupérée si mon revenu est trop élevé ?",
                  r: "Oui. En 2026, la récupération (clawback) commence à environ 90 997 $ de revenu net. Chaque dollar au-delà de ce seuil réduit la SV de 15 cents. D'où l'importance de gérer les retraits FERR sous ce seuil.",
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

        {/* ── CTA ── */}
        <section style={{ background: DARK }} className="px-5 py-10">
          <div className="max-w-lg mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Planifier ton décaissement
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Le diagnostic identifie les stratégies de retraite les plus adaptées à ta situation actuelle.
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
          legalText={"Outil informatif non affilié au gouvernement. Consultez un planificateur financier agréé pour un plan de décaissement personnalisé."}
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
