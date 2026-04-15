import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Scénario : Pré-retraite 55 ans — Optimiser REER, CELI et RRQ | ArgentQC.ca",
  description:
    "55 ans, revenu 80 000 $, retraite dans 10 ans. Stratégie décaissement REER/CELI, RRQ différée, crédit d'âge, planification fiscale. Calculs concrets.",
  alternates: { canonical: "https://argentqc.ca/scenarios/pre-retraite" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function ScenarioPreRetraitePage() {
  return (
    <>
      <Header />
      <main style={{ background: PARCH, minHeight: "100vh" }}>

        <section style={{ background: DARK }} className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
              <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Accueil</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <Link href="/scenarios" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Scénarios</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <span>Pré-retraite</span>
            </nav>
            <div style={{ display: "inline-block", background: "rgba(239,68,68,0.15)", color: "#FCA5A5", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "100px", marginBottom: "1rem" }}>
              👴 Scénario pré-retraite
            </div>
            <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.75rem, 5vw, 2.3rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
              Pré-retraite (55 ans) — 6 000 $ d'impôt évités/an
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75 }}>
              Gilles, 55 ans, propriétaire, revenu de 80 000 $, prévoit prendre sa retraite à 65 ans. 10 ans pour optimiser sa stratégie — les décisions prises maintenant auront un impact majeur.
            </p>
          </div>
        </section>

        <section style={{ background: "#0F172A" }} className="px-5 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ color: GOLD, fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1rem", marginBottom: "14px" }}>📋 Profil</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Âge", "55 ans"],
                ["Situation familiale", "Couple, propriétaires"],
                ["Revenu actuel", "80 000 $/an"],
                ["REER accumulé", "220 000 $"],
                ["CELI", "45 000 $"],
                ["Retraite prévue", "65 ans (dans 10 ans)"],
              ].map(([label, val]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "10px", padding: "12px 14px" }}>
                  <div style={{ fontSize: "11px", color: "rgba(240,235,224,0.4)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
                  <div style={{ fontSize: "13px", color: "#F0EBE0", fontWeight: 600, lineHeight: 1.4 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DÉCISIONS CLÉS ── */}
        <section style={{ background: "white" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              🎯 Les 4 décisions financières critiques avant 65 ans
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  titre: "1. Continuer de cotiser au REER jusqu'à 71 ans",
                  impact: "Économie d'impôt immédiate de ~3 000 $/an",
                  detail: "À 80 000 $, le taux marginal est ~38 %. Chaque 8 000 $ cotisé génère ~3 040 $ de remboursement. Droits REER inutilisés peuvent être utilisés jusqu'à 71 ans.",
                  lien: "/retraite/reer",
                  bon: true,
                },
                {
                  titre: "2. Différer la RRQ jusqu'à 70 ans (si bonne santé)",
                  impact: "+ 42 % sur chaque versement à vie",
                  detail: "Chaque année de report après 65 ans augmente la pension de 8,4 %. Reporter de 65 à 70 ans = +42 % sur tous les versements futurs. Stratégie gagnante si espérance de vie > 78 ans.",
                  lien: "/retraite/rrq",
                  bon: true,
                },
                {
                  titre: "3. Planifier le décaissement mixte REER + CELI",
                  impact: "Économie de 3 000-6 000 $/an vs tout REER",
                  detail: "En retirant d'abord une partie du REER et complétant avec le CELI, Gilles peut maintenir son revenu imposable sous le seuil du SRG ou du crédit de solidarité, réduisant l'impôt payé.",
                  lien: "/strategies",
                  bon: true,
                },
                {
                  titre: "4. Crédit en raison de l'âge (dès 65 ans)",
                  impact: "Jusqu'à 1 530 $ d'économie/an",
                  detail: "Crédit d'impôt fédéral pour les 65 ans et plus. Réductible selon le revenu — optimal si le revenu imposable est contrôlé par la stratégie de décaissement.",
                  lien: "/impots",
                  bon: true,
                },
              ].map((item) => (
                <div key={item.titre} style={{ background: PARCH, borderRadius: "12px", padding: "18px", border: "1px solid #EDE9E0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
                    <p style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E", margin: 0 }}>{item.titre}</p>
                    <span style={{ background: "#D1FAE5", color: "#065F46", fontSize: "11px", fontWeight: 700, padding: "2px 10px", borderRadius: "100px", flexShrink: 0 }}>
                      {item.impact}
                    </span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7, marginBottom: "10px" }}>{item.detail}</p>
                  <Link href={item.lien} style={{ display: "inline-block", background: "white", color: DARK, fontWeight: 700, fontSize: "13px", padding: "6px 14px", borderRadius: "8px", textDecoration: "none", border: "1px solid #EDE9E0" }}>
                    En savoir plus →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TABLEAU COMPARATIF RRQ ── */}
        <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>
              📊 Impact de l'âge de début de la RRQ
            </h2>
            <div style={{ background: "white", borderRadius: "14px", border: "1px solid #EDE9E0", overflow: "hidden" }}>
              <div style={{ background: DARK, padding: "12px 20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                <span style={{ fontSize: "12px", color: "rgba(240,235,224,0.6)", fontWeight: 700 }}>Âge de début</span>
                <span style={{ fontSize: "12px", color: "rgba(240,235,224,0.6)", fontWeight: 700, textAlign: "center" }}>Ajustement</span>
                <span style={{ fontSize: "12px", color: "rgba(240,235,224,0.6)", fontWeight: 700, textAlign: "right" }}>Pension mensuelle*</span>
              </div>
              {[
                { age: "60 ans", adj: "- 36 %", pension: "640 $", note: true },
                { age: "65 ans", adj: "Référence", pension: "1 000 $", note: false },
                { age: "70 ans", adj: "+ 42 %", pension: "1 420 $", note: false },
              ].map((row) => (
                <div key={row.age} style={{ padding: "14px 20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", borderBottom: "1px solid #F5F0EA", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#1C1C1E" }}>{row.age}</span>
                  <span style={{ fontSize: "13px", color: row.adj.startsWith("+") ? "#059669" : row.adj.startsWith("-") ? "#DC2626" : "#57534E", fontWeight: 700, textAlign: "center" }}>{row.adj}</span>
                  <span style={{ fontSize: "14px", fontWeight: 800, color: "#059669", textAlign: "right" }}>{row.pension}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "12px", color: "#A8A29E", marginTop: "8px" }}>* Exemples basés sur une pension de référence de 1 000 $/mois à 65 ans. Ta pension réelle dépend de tes cotisations.</p>
          </div>
        </section>

        {/* ── PLAN D'ACTION ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              🗓️ Plan d'action — Les 10 prochaines années
            </h2>
            <ol style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                {
                  step: "1",
                  titre: "Maximiser les cotisations REER maintenant (55-65 ans)",
                  detail: "C'est la fenêtre où le taux marginal est le plus élevé. Cotiser le maximum chaque année jusqu'à 71 ans, puis convertir en FERR.",
                  lien: "/retraite/reer",
                  cta: "Guide REER complet",
                },
                {
                  step: "2",
                  titre: "Évaluer la stratégie RRQ avec un planificateur financier",
                  detail: "La décision de différer la RRQ à 70 ans peut valoir 100 000-200 000 $ de plus sur une vie selon l'espérance de vie. Cette décision mérite une analyse personnalisée.",
                  lien: "/retraite/rrq",
                  cta: "Guide RRQ et décaissement",
                },
                {
                  step: "3",
                  titre: "Préparer un budget de décaissement avant 65 ans",
                  detail: "Calculer les revenus projetés (REER, CELI, RRQ, SV) et planifier l'ordre de retrait pour minimiser l'impôt chaque année de retraite.",
                  lien: "/strategies",
                  cta: "Stratégies de décaissement",
                },
              ].map((item) => (
                <li key={item.step} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: DARK, color: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-playfair)", fontSize: "14px", fontWeight: 800, flexShrink: 0, marginTop: "2px" }}>{item.step}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E", marginBottom: "6px" }}>{item.titre}</p>
                    <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.7, marginBottom: "10px" }}>{item.detail}</p>
                    <Link href={item.lien} style={{ display: "inline-block", background: PARCH, color: DARK, fontWeight: 700, fontSize: "13px", padding: "6px 14px", borderRadius: "8px", textDecoration: "none", border: "1px solid #EDE9E0" }}>
                      {item.cta} →
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section style={{ background: DARK }} className="px-5 py-10">
          <div className="max-w-lg mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Analyse ta propre situation
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem" }}>
              Le diagnostic identifie les priorités selon ton âge, ton REER actuel et tes projets de retraite.
            </p>
            <Link href="/questionnaire" style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "1rem", padding: "0.95rem 2rem", borderRadius: "14px", textDecoration: "none" }}>
              🚀 Lancer le diagnostic →
            </Link>
          </div>
        </section>

        <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>Autres scénarios</h2>
            <div className="flex flex-col gap-2">
              {[
                { label: "Famille avec 2 enfants · 90 000 $", href: "/scenarios/famille-2-enfants" },
                { label: "Célibataire locataire · 50 000 $", href: "/scenarios/celibataire-locataire" },
                { label: "Couple sans enfant · 120 000 $", href: "/scenarios/couple-sans-enfant" },
                { label: "Propriétaire avec hypothèque", href: "/scenarios/proprietaire-hypotheque" },
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
              Outil informatif non affilié au gouvernement. Les montants sont des estimations — consultez les sites officiels et un planificateur financier pour votre situation spécifique.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
