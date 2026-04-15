import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Réduire ses assurances auto et habitation au Québec 2026 | ArgentQC.ca",
  description:
    "Guide pour comparer et réduire ses assurances auto et habitation au Québec. Stratégies concrètes, calculs d'économies et conseils de négociation.",
  alternates: { canonical: "https://argentqc.ca/depenses/assurances" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function DepensesAssurancesPage() {
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
              <Link href="/depenses" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Dépenses</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <span>Assurances</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Réduire ses assurances auto et habitation
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              Obtenir 3 soumissions avant le renouvellement prend 30 minutes et économise en moyenne 300 à 900 $/an. Voici comment s'y prendre.
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
                Famille Tremblay — 2 voitures, maison à Laval, fidèles chez Intact depuis 8 ans
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["Prime auto + habitation actuelle (Intact)", "3 840 $/an"],
                  ["Meilleure offre Belair direct (regroupement)", "3 040 $/an"],
                  ["Meilleure offre Sonnet (numérique)", "3 120 $/an"],
                  ["Économie en changeant d'assureur", "- 800 $/an"],
                  ["Temps investi", "45 minutes de démarches"],
                ].map(([label, montant]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", gap: "8px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                    <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>{montant}</span>
                  </div>
                ))}
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
                { step: "1", text: "Trouve ta date de renouvellement (sur ta police d'assurance) — commence les démarches 4 à 6 semaines avant" },
                { step: "2", text: "Obtiens 3 soumissions : 1 courtier + 1 assureur direct + 1 assureur numérique (Sonnet, Belair, Lemonade)" },
                { step: "3", text: "Appelle ton assureur actuel avec la meilleure offre — demander un alignement de prix est légitime et souvent accordé" },
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
              href="/assurances/comparateur"
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
              🛡️ Comparer les assurances →
            </Link>
          </div>
        </section>

        {/* ── STRATÉGIES D'ÉCONOMIE ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.75rem" }}>
              6 leviers pour réduire tes primes
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  emoji: "🔗",
                  titre: "Regrouper auto + habitation",
                  potentiel: "10 – 25 %",
                  desc: "La majorité des assureurs offrent un rabais de 10 à 25 % quand tu regroupes auto et habitation chez eux. Si tu es dans deux compagnies différentes, c'est probablement de l'argent laissé sur la table.",
                },
                {
                  emoji: "📈",
                  titre: "Augmenter la franchise",
                  potentiel: "5 – 15 %",
                  desc: "Passer d'une franchise de 500 $ à 1 000 $ ou 1 500 $ réduit la prime de 5 à 15 % selon l'assureur. Si tu n'as jamais eu de sinistre, tu accumules l'économie chaque année.",
                },
                {
                  emoji: "🚗",
                  titre: "Retirer la valeur de remplacement sur vieille voiture",
                  potentiel: "8 – 12 %",
                  desc: "La valeur de remplacement (ou valeur à neuf) ne vaut plus la peine dès que la voiture a 5-6 ans. L'assureur ne remboursera de toute façon pas plus que la valeur marchande en cas de perte totale.",
                },
                {
                  emoji: "🏠",
                  titre: "Réviser la valeur de reconstruction",
                  potentiel: "Variable",
                  desc: "Si ta maison est surAssurée, tu paies des primes inutilement. La valeur de reconstruction (coût de rebâtir, pas la valeur marchande) doit être revue aux 2-3 ans selon les coûts de construction actuels.",
                },
                {
                  emoji: "📱",
                  titre: "Essayer les assureurs numériques",
                  potentiel: "10 – 20 %",
                  desc: "Sonnet, Lemonade et Belair Direct n'ont pas de bureaux physiques — leurs frais sont plus bas et souvent répercutés sur les primes. À couverture équivalente, ils sont régulièrement moins chers.",
                },
                {
                  emoji: "🎯",
                  titre: "Programme de kilométrage réduit",
                  potentiel: "5 – 10 %",
                  desc: "Si tu fais moins de 10 000-15 000 km/an (télétravail, retraite), signale-le à ton assureur. Plusieurs offrent des rabais kilométriques ou des programmes de tarification à l'usage.",
                },
              ].map((levier) => (
                <div key={levier.titre} style={{ background: "white", borderRadius: "14px", border: "1px solid #EDE9E0", padding: "16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "1.3rem" }}>{levier.emoji}</span>
                      <h3 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "0.95rem", color: "#1C1C1E", margin: 0 }}>{levier.titre}</h3>
                    </div>
                    <span style={{ background: "#D1FAE5", color: "#065F46", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", flexShrink: 0 }}>
                      {levier.potentiel}
                    </span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#57534E", lineHeight: 1.6 }}>{levier.desc}</p>
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
                  q: "Changer d'assureur peut-il affecter mon dossier ?",
                  r: "Non. Changer d'assureur n'a aucun impact négatif sur ton dossier d'assurance. Ton historique (sinistres, réclamations) reste dans le relevé de conduite et est accessible à tous les assureurs.",
                },
                {
                  q: "Vaut-il mieux passer par un courtier ou un assureur direct ?",
                  r: "Un courtier compare plusieurs assureurs et peut trouver la meilleure offre globale. Un assureur direct est souvent moins cher mais ne compare pas. L'idéal est de faire les deux et de comparer.",
                },
                {
                  q: "Est-ce que déposer une réclamation fait toujours augmenter ma prime ?",
                  r: "Pour les accidents de faute, oui — typiquement 10 à 25 % sur 3 à 6 ans. Pour les sinistres sans faute (vol, vandalisme, dégât d'eau) l'impact est moindre ou nul selon l'assureur et le produit.",
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
              Diagnostique toutes tes opportunités
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Au-delà des assurances, le diagnostic identifie aussi les crédits et aides financières auxquels tu as droit.
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
              Outil informatif non affilié aux assureurs. Comparez toujours les offres et lisez les conditions avant de changer d'assureur.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
