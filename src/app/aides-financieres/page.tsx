import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Aides financières au Québec 2026 | Crédits, subventions, allocations | ArgentQC.ca",
  description:
    "Tous les crédits d'impôt, subventions et allocations disponibles au Québec en 2026. Guide complet par situation : famille, logement, énergie, retraite.",
  alternates: { canonical: "https://argentqc.ca/aides-financieres" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const categoriesAides = [
  {
    emoji: "👨‍👩‍👧",
    titre: "Famille & enfants",
    guideLien: "/aides-financieres/famille",
    aides: [
      { nom: "Allocation canadienne pour enfants (ACE)", montant: "jusqu'à 7 787 $/enfant/an", lien: "/allocation-enfant-quebec" },
      { nom: "Allocation famille Québec", montant: "jusqu'à 2 847 $/enfant/an", lien: "/aide-famille-quebec" },
      { nom: "Crédit d'impôt frais de garde", montant: "75 % des frais couverts", lien: "/questionnaire" },
      { nom: "Subvention sport enfant", montant: "jusqu'à 300 $/an", lien: "/subvention-sport-enfant-quebec" },
    ],
  },
  {
    emoji: "🏠",
    titre: "Logement & rénovation",
    guideLien: "/aides-financieres/logement",
    aides: [
      { nom: "Allocation-logement Québec", montant: "jusqu'à 170 $/mois", lien: "/allocation-logement-quebec" },
      { nom: "Crédit de solidarité", montant: "jusqu'à 2 279 $/an", lien: "/credit-solidarite-quebec" },
      { nom: "Rénoclimat + subventions chauffage", montant: "jusqu'à 10 000 $", lien: "/reno-climat-quebec" },
      { nom: "Subvention thermopompe", montant: "jusqu'à 5 000 $", lien: "/subvention-thermopompe-quebec" },
    ],
  },
  {
    emoji: "⚡",
    titre: "Énergie & environnement",
    aides: [
      { nom: "Crédit véhicule électrique", montant: "jusqu'à 7 000 $", lien: "/vehicule-electrique-quebec" },
      { nom: "Subvention borne de recharge", montant: "jusqu'à 600 $", lien: "/borne-recharge-quebec" },
      { nom: "Chauffez vert (mazout → thermopompe)", montant: "jusqu'à 12 000 $", lien: "/chauffez-vert-quebec" },
      { nom: "Subvention isolation maison", montant: "jusqu'à 5 000 $", lien: "/subvention-isolation-quebec" },
    ],
  },
  {
    emoji: "👴",
    titre: "Aînés & retraite",
    aides: [
      { nom: "Sécurité de la vieillesse (SV)", montant: "jusqu'à 8 580 $/an", lien: "/retraite" },
      { nom: "Supplément de revenu garanti (SRG)", montant: "jusqu'à 13 137 $/an", lien: "/retraite" },
      { nom: "Crédit en raison de l'âge", montant: "jusqu'à 1 530 $ d'économie", lien: "/impots" },
      { nom: "Maintien à domicile (Québec)", montant: "jusqu'à 6 000 $/an", lien: "/questionnaire" },
    ],
  },
  {
    emoji: "🧾",
    titre: "Crédits d'impôt généraux",
    aides: [
      { nom: "Crédit TPS/TVH fédéral", montant: "jusqu'à 680 $/an", lien: "/credit-impot-quebec" },
      { nom: "Crédit d'impôt frais médicaux", montant: "variable", lien: "/credit-impot-frais-medicaux-quebec" },
      { nom: "Déduction REER", montant: "18 % du revenu", lien: "/retraite/reer" },
      { nom: "Cotisation syndicale et professionnelle", montant: "100 % déductible", lien: "/impots" },
    ],
  },
];

const faqs = [
  {
    q: "Comment savoir quelles aides me sont accessibles ?",
    r: "Réponds au questionnaire ArgentQC (2 min) et tu reçois une liste personnalisée basée sur ta situation réelle.",
  },
  {
    q: "Les aides sont-elles cumulables ?",
    r: "Oui, dans la majorité des cas. Par exemple, une famille peut recevoir simultanément l'ACE fédérale, l'allocation famille provinciale et le crédit de solidarité.",
  },
  {
    q: "Faut-il faire une demande pour chaque aide ?",
    r: "Certaines aides sont automatiques (ACE, allocation famille), d'autres nécessitent une demande. Les guides sur chaque page expliquent la démarche.",
  },
];

export default function AidesFinancieresPage() {
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
              <span>Aides financières</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Toutes les aides financières au Québec
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              Crédits d&apos;impôt, subventions, allocations — un guide complet des programmes disponibles en 2026 selon ta situation.
            </p>
          </div>
        </section>

        {/* ── BLOC EXEMPLE CONCRET ── */}
        <section style={{ background: "#0F172A" }} className="px-5 py-8">
          <div className="max-w-2xl mx-auto">
            <div style={{
              background: "rgba(16,185,129,0.1)",
              border: `1px solid rgba(16,185,129,0.25)`,
              borderRadius: "14px",
              padding: "20px",
            }}>
              <p style={{ color: GREEN, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
                💡 Exemple concret
              </p>
              <p style={{ color: "#F0EBE0", fontSize: "15px", fontWeight: 600, lineHeight: 1.5, marginBottom: "8px" }}>
                Marie et Jean — Famille de 4, revenu combiné 85 000 $
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["Allocation canadienne pour enfants", "+ 4 200 $"],
                  ["Allocation famille Québec", "+ 2 100 $"],
                  ["Crédit de solidarité", "+ 680 $"],
                  ["Crédit frais médicaux", "+ 320 $"],
                ].map(([label, montant]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                    <span style={{ color: GREEN, fontWeight: 700 }}>{montant}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "14px" }}>Total estimé</span>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem" }}>7 300 $/an</span>
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
                { step: "1", text: "Lance le questionnaire pour identifier les aides auxquelles tu as droit selon ta situation" },
                { step: "2", text: "Consulte les guides par catégorie ci-dessous pour comprendre les montants et les conditions" },
                { step: "3", text: "Fais tes demandes directement sur les sites gouvernementaux (liens fournis dans chaque guide)" },
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
              🚀 Lancer le diagnostic gratuit →
            </Link>
          </div>
        </section>

        {/* ── CATÉGORIES D'AIDES ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#1C1C1E",
              marginBottom: "1.75rem",
            }}>
              Aides par catégorie
            </h2>
            <div className="flex flex-col gap-6">
              {categoriesAides.map((cat) => (
                <div key={cat.titre} style={{ background: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
                  <div style={{ background: DARK, padding: "14px 20px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "1.4rem" }}>{cat.emoji}</span>
                    <h3 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 700, fontSize: "1rem", margin: 0 }}>{cat.titre}</h3>
                  </div>
                  <div>
                    {cat.aides.map((aide, i) => (
                      <Link
                        key={aide.nom}
                        href={aide.lien}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "14px 20px",
                          textDecoration: "none",
                          borderBottom: i < cat.aides.length - 1 ? "1px solid #F5F0EA" : "none",
                          gap: "12px",
                        }}
                      >
                        <span style={{ fontSize: "14px", color: "#1C1C1E", fontWeight: 500, flex: 1 }}>{aide.nom}</span>
                        <span style={{ fontSize: "13px", fontWeight: 700, color: "#059669", flexShrink: 0 }}>{aide.montant}</span>
                      </Link>
                    ))}
                    {cat.guideLien && (
                      <div style={{ padding: "12px 20px", borderTop: "1px solid #F5F0EA" }}>
                        <Link
                          href={cat.guideLien}
                          style={{
                            display: "inline-block",
                            background: PARCH,
                            color: DARK,
                            fontWeight: 700,
                            fontSize: "13px",
                            padding: "8px 16px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            border: "1px solid #EDE9E0",
                          }}
                        >
                          Guide complet →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.5rem" }}>
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} style={{ borderBottom: "1px solid #F0EBE0", paddingBottom: "16px" }}>
                  <p style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1E", marginBottom: "6px" }}>{faq.q}</p>
                  <p style={{ fontSize: "14px", color: "#57534E", lineHeight: 1.7 }}>{faq.r}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: DARK }} className="py-8 px-5">
          <div className="max-w-lg mx-auto text-center">
            <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>ArgentQC.ca</p>
            <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", lineHeight: 1.7 }}>
              Outil informatif non affilié au gouvernement. Consultez les sites officiels pour confirmer votre admissibilité.
            </p>
            <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
            <Link href="/politique-confidentialite" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "4px" }}>Politique de confidentialité</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
