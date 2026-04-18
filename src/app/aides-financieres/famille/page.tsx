import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Aides financières famille Québec 2026 | Allocations, crédits, subventions | ArgentQC.ca",
  description:
    "Toutes les aides financières pour les familles québécoises en 2026 : ACE, allocation famille, crédit frais de garde, aide sport enfant. Montants et démarches.",
  alternates: { canonical: "https://argentqc.ca/aides-financieres/famille" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function AidesFinancieresFamillePage() {
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
              <Link href="/aides-financieres" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Aides financières</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <span>Famille</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Aides financières famille Québec
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              Allocations fédérales et provinciales, crédits d&apos;impôt pour la garde, subventions sport — une famille de 2 enfants peut récupérer 3 000 $ à 10 000 $/an selon sa situation.
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
                Marie et Jean — Famille de 4, 2 enfants (5 et 8 ans), revenu combiné 85 000 $
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["Allocation canadienne pour enfants (ACE)", "+ 4 200 $/an"],
                  ["Allocation famille Québec", "+ 2 100 $/an"],
                  ["Crédit de solidarité (volets TVQ + logement)", "+ 680 $/an"],
                  ["Subvention activités sportives (2 enfants)", "+ 300 $/an"],
                  ["Crédit frais de garde (garderie non subventionnée)", "variable"],
                ].map(([label, montant]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", gap: "8px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                    <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>{montant}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "14px" }}>Total estimé</span>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem" }}>7 280 $/an</span>
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
                { step: "1", text: "Produis tes deux déclarations d'impôt (fédérale + provinciale) avant le 30 avril — elles déclenchent la plupart des aides automatiquement" },
                { step: "2", text: "Fais le questionnaire ArgentQC pour vérifier toutes les aides auxquelles tu as droit selon tes revenus exacts" },
                { step: "3", text: "Consulte les guides de chaque programme ci-dessous pour compléter les demandes spécifiques si nécessaire" },
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
              🚀 Voir les aides pour ma famille →
            </Link>
          </div>
        </section>

        {/* ── PROGRAMMES ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.75rem" }}>
              Programmes disponibles pour les familles
            </h2>
            <div className="flex flex-col gap-5">
              {[
                {
                  emoji: "🍁",
                  badge: "Fédéral",
                  badgeColor: "#DBEAFE",
                  badgeText: "#1D4ED8",
                  titre: "Allocation canadienne pour enfants (ACE)",
                  montant: "Jusqu'à 7 787 $/enfant/an",
                  desc: "Versement mensuel non imposable de l'ARC pour les familles avec enfants de moins de 18 ans. Le montant diminue progressivement à partir d'un revenu familial de 36 502 $.",
                  details: [
                    "Jusqu'à 7 787 $/an pour les enfants de moins de 6 ans",
                    "Jusqu'à 6 570 $/an pour les enfants de 6 à 17 ans",
                    "Versement mensuel automatique après la déclaration de revenus",
                    "Non imposable — ne s'ajoute pas au revenu",
                  ],
                  lien: "/allocation-enfant-quebec",
                  libelleBtn: "Guide ACE complet",
                },
                {
                  emoji: "🏠",
                  badge: "Provincial",
                  badgeColor: "#D1FAE5",
                  badgeText: "#065F46",
                  titre: "Allocation famille Québec",
                  montant: "Jusqu'à 2 847 $/enfant/an",
                  desc: "Programme provincial versé par Retraite Québec aux familles avec enfants à charge. Le montant est majoré pour les familles à faible revenu et les familles monoparentales.",
                  details: [
                    "Montant de base : 1 167 $ à 2 847 $/enfant selon le revenu",
                    "Supplément famille monoparentale disponible",
                    "Versement trimestriel automatique",
                    "Déclenché par la déclaration de revenus provinciale",
                  ],
                  lien: "/aide-famille-quebec",
                  libelleBtn: "Guide Allocation famille",
                },
                {
                  emoji: "🏫",
                  badge: "Provincial",
                  badgeColor: "#D1FAE5",
                  badgeText: "#065F46",
                  titre: "Crédit d'impôt pour frais de garde",
                  montant: "Jusqu'à 75 % des frais remboursés",
                  desc: "Si tes enfants fréquentent une garderie non subventionnée, une gardienne ou un service de garde hors-réseau, le crédit d'impôt provincial peut rembourser entre 67 % et 75 % des frais payés.",
                  details: [
                    "75 % des frais pour les revenus familiaux sous 33 655 $/an",
                    "Dégressif — 26 % pour les revenus de 157 179 $ et plus",
                    "S'applique à la garderie non subventionnée, gardienne et camps de jour",
                    "À réclamer dans la déclaration provinciale (annexe C)",
                  ],
                  lien: "/questionnaire",
                  libelleBtn: "Calculer mon crédit",
                },
                {
                  emoji: "⚽",
                  badge: "Municipal / Fédéral",
                  badgeColor: "#FEF3C7",
                  badgeText: "#92400E",
                  titre: "Aide financière pour activités sportives",
                  montant: "Jusqu'à 300 $/enfant",
                  desc: "Plusieurs municipalités, organismes sportifs et le gouvernement fédéral offrent des programmes d'aide pour les activités sportives et culturelles des enfants.",
                  details: [
                    "Programme fédéral : crédit d'impôt pour activités des enfants (aboli — vérifier les programmes provinciaux)",
                    "Renseignements auprès de ta municipalité pour les subventions locales",
                    "Organismes comme Kino-Québec et Sport-Québec ont des programmes régionaux",
                    "Certains organismes sportifs ont leurs propres fonds d'aide",
                  ],
                  lien: "/aide-financiere-sport-enfant-quebec",
                  libelleBtn: "Guide aide sport enfant",
                },
              ].map((prog) => (
                <div key={prog.titre} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", overflow: "hidden" }}>
                  <div style={{ background: DARK, padding: "14px 20px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "1.3rem" }}>{prog.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 700, fontSize: "0.95rem", margin: 0 }}>{prog.titre}</h3>
                    </div>
                    <span style={{ background: prog.badgeColor, color: prog.badgeText, fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", flexShrink: 0 }}>{prog.badge}</span>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ display: "inline-block", background: "#F0FDF4", color: "#059669", fontWeight: 800, fontSize: "13px", padding: "4px 12px", borderRadius: "100px", marginBottom: "12px" }}>
                      {prog.montant}
                    </div>
                    <p style={{ fontSize: "14px", color: "#57534E", lineHeight: 1.7, marginBottom: "12px" }}>{prog.desc}</p>
                    <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "5px", marginBottom: "14px" }}>
                      {prog.details.map((d) => (
                        <li key={d} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#44403C" }}>
                          <span style={{ color: GREEN, flexShrink: 0 }}>✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Link href={prog.lien} style={{ display: "inline-block", background: PARCH, color: DARK, fontWeight: 700, fontSize: "13px", padding: "8px 16px", borderRadius: "10px", textDecoration: "none", border: "1px solid #EDE9E0" }}>
                      {prog.libelleBtn} →
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
                  q: "L'ACE et l'allocation famille Québec sont-elles cumulables ?",
                  r: "Oui. Ce sont deux programmes distincts (fédéral et provincial) qui se reçoivent séparément. La plupart des familles reçoivent les deux automatiquement après avoir produit leurs deux déclarations d'impôt.",
                },
                {
                  q: "Mon enfant est en garderie à 7 $/jour — ai-je droit au crédit frais de garde ?",
                  r: "Non. Le crédit s'applique aux garderies non subventionnées seulement. Si tu paies la contribution parentale réduite (CPE, garderie subventionnée), tu ne peux pas réclamer le crédit pour ces frais.",
                },
                {
                  q: "Dois-je faire une demande pour recevoir l'ACE ?",
                  r: "L'ACE se déclenche automatiquement si tu coches la case appropriée dans ta déclaration fédérale. Pour un nouveau-né, tu dois aviser l'ARC dans les délais. Une inscription directe sur My CRA Account est également possible.",
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
              Vérifier toutes les aides pour ta famille
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Réponds à 8 questions et reçois une liste des aides disponibles selon ton revenu, ta situation familiale et ton logement.
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
              Outil informatif non affilié au gouvernement. Consultez les sites officiels (ARC, Revenu Québec, Retraite Québec) pour confirmer votre admissibilité.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
