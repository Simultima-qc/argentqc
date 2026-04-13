import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coût de la vie au Québec en 2026 - Budget mensuel complet | ArgentQC.ca",
  description:
    "Coût de la vie au Québec en 2026 : loyer, épicerie, transport, enfants par ville. Comparaison Montréal vs Québec vs régions et repères utiles pour un budget réaliste.",
  keywords: ["coût de la vie Québec 2026", "budget mensuel Québec", "Montréal vs Québec", "vivre au Québec"],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const postesDepenses = [
  { poste: "Loyer", emoji: "🏠", montreal: "950 à 1 800 $", quebec: "750 à 1 350 $", regions: "600 à 1 100 $" },
  { poste: "Épicerie", emoji: "🛒", montreal: "350 à 500 $", quebec: "320 à 480 $", regions: "300 à 450 $" },
  { poste: "Transport", emoji: "🚌", montreal: "94 à 110 $", quebec: "88 à 105 $", regions: "0 à 70 $" },
  { poste: "Voiture", emoji: "🚗", montreal: "350 à 700 $", quebec: "300 à 600 $", regions: "280 à 550 $" },
  { poste: "Internet + cellulaire", emoji: "📱", montreal: "100 à 150 $", quebec: "90 à 140 $", regions: "95 à 145 $" },
  { poste: "Électricité", emoji: "⚡", montreal: "50 à 100 $", quebec: "45 à 90 $", regions: "50 à 110 $" },
];

const profils = [
  { profil: "Personne seule - Montréal", emoji: "👤", total: "2 800 à 3 400 $", aides: "~1 100 $ /an" },
  { profil: "Couple sans enfant - Québec", emoji: "👫", total: "3 800 à 4 500 $", aides: "~700 $ /an" },
  { profil: "Famille 2 enfants - Laval", emoji: "👨‍👩‍👧‍👦", total: "5 200 à 6 000 $", aides: "~10 500 $ /an" },
  { profil: "Aîné seul - Région", emoji: "🧓", total: "1 800 à 2 400 $", aides: "~14 000 $ /an" },
];

const atouts = [
  "Hydro-Québec reste très compétitif.",
  "Les services de garde subventionnés réduisent fortement le budget famille.",
  "Hors Montréal, les loyers restent souvent plus bas que dans plusieurs grandes villes canadiennes.",
];

const faqs = [
  { q: "Combien coûte la vie au Québec par mois ?", r: "Pour une personne seule à Montréal, un budget réaliste tombe souvent autour de 2 800 $ à 3 400 $ par mois." },
  { q: "Québec est-elle moins chère que Montréal ?", r: "Oui, surtout sur le logement. Les écarts les plus visibles se jouent sur le loyer." },
  { q: "La région est-elle toujours plus économique ?", r: "Souvent oui sur le logement, mais il faut intégrer le coût d'une voiture dans plusieurs cas." },
];

export default function BudgetPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px" }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/budget/calculateur" style={{ color: GOLD, fontSize: "13px", fontWeight: 600, textDecoration: "underline" }}>Calculateur budget</Link>
        </div>
      </header>

      <section style={{ background: DARK }} className="px-5 py-12">
        <div className="max-w-3xl mx-auto">
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.45)", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "rgba(240,235,224,0.45)", textDecoration: "none" }}>Accueil</Link>
            {" › "}
            <span>Budget</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Guide budget Québec 2026</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "12px" }}>
            Coût de la vie au Québec en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.72)", fontSize: "15px", lineHeight: 1.7, maxWidth: "720px" }}>
            Vue d&apos;ensemble des postes qui pèsent le plus dans un budget québécois, avec des repères par ville et quelques profils types.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        <section>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>Profils types</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {profils.map((p) => (
              <div key={p.profil} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "16px" }}>
                <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "8px", color: "#1C1C1E" }}>{p.emoji} {p.profil}</div>
                <div style={{ fontSize: "13px", color: "#44403C" }}>Budget mensuel : <strong>{p.total}</strong></div>
                <div style={{ fontSize: "13px", color: GREEN, marginTop: "4px" }}>Aides potentielles : {p.aides}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>Repères par ville</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  <th style={{ padding: "12px", textAlign: "left" }}>Poste</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>Montréal</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>Québec</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>Régions</th>
                </tr>
              </thead>
              <tbody>
                {postesDepenses.map((p, i) => (
                  <tr key={p.poste} style={{ borderBottom: i < postesDepenses.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px", fontWeight: 600 }}>{p.emoji} {p.poste}</td>
                    <td style={{ padding: "12px", textAlign: "center" }}>{p.montreal}</td>
                    <td style={{ padding: "12px", textAlign: "center" }}>{p.quebec}</td>
                    <td style={{ padding: "12px", textAlign: "center" }}>{p.regions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>Pourquoi le Québec reste souvent compétitif</h2>
          <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#44403C", lineHeight: 1.7 }}>
            {atouts.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section style={{ background: DARK, borderRadius: "20px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px" }}>Calculez votre budget personnalisé</p>
          <p style={{ color: "rgba(240,235,224,0.68)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>Utilisez le calculateur pour intégrer vos vrais revenus, votre logement et vos autres dépenses.</p>
          <Link href="/budget/calculateur" style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "14px", padding: "12px 22px", borderRadius: "12px", textDecoration: "none" }}>Ouvrir le calculateur →</Link>
        </section>

        <section>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>Questions fréquentes</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "16px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "8px" }}>{faq.q}</h3>
                <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: 0 }}>{faq.r}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

