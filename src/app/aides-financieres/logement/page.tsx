import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Aides au logement Québec 2026 | Allocation-logement, crédit solidarité | ArgentQC.ca",
  description:
    "Guide complet des aides au logement au Québec en 2026 : allocation-logement, crédit de solidarité, aide achat première maison. Montants et conditions.",
  alternates: { canonical: "https://argentqc.ca/aides-financieres/logement" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function AidesFinancieresLogementPage() {
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
              <span>Logement</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Aides au logement au Québec
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              Locataires, propriétaires et acheteurs — plusieurs programmes gouvernementaux peuvent réduire le poids du logement dans votre budget. Tour d&apos;horizon complet pour 2026.
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
                Isabelle, 29 ans — Locataire seule, revenu 44 000 $, loyer 1 200 $/mois
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["Crédit de solidarité — volet logement", "+ 668 $/an"],
                  ["Crédit de solidarité — volet TVQ", "+ 343 $/an"],
                  ["Allocation-logement (si loyer > 30 % du revenu)", "admissible, vérifier"],
                  ["CELIAPP — épargne pour premier achat", "8 000 $ déduits/an"],
                ].map(([label, montant]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", gap: "8px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                    <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>{montant}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "14px" }}>Aides reçues automatiquement</span>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem" }}>1 011 $/an</span>
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
                { step: "1", text: "Produis tes deux déclarations d'impôt — le crédit de solidarité est automatique après la déclaration provinciale" },
                { step: "2", text: "Vérifie ton admissibilité à l'allocation-logement si ton loyer dépasse 30 % de ton revenu brut" },
                { step: "3", text: "Si tu prévois acheter dans les 5 ans, ouvre un CELIAPP dès maintenant — les droits ne sont pas rétroactifs" },
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
              🚀 Voir mes aides logement →
            </Link>
          </div>
        </section>

        {/* ── PROGRAMMES ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.75rem" }}>
              Programmes d&apos;aide au logement
            </h2>
            <div className="flex flex-col gap-5">
              {[
                {
                  emoji: "🏠",
                  badge: "Provincial",
                  badgeColor: "#D1FAE5",
                  badgeText: "#065F46",
                  titre: "Crédit de solidarité",
                  montant: "Jusqu'à 2 279 $/an",
                  qui: "Locataires et propriétaires à revenu faible ou moyen",
                  desc: "Le crédit de solidarité combine trois volets : logement (pour locataires ou propriétaires admissibles), TVQ (pour tous) et village nordique. Il est versé trimestriellement de façon automatique.",
                  details: [
                    "Volet logement : jusqu'à 668 $/an pour les locataires",
                    "Volet TVQ : jusqu'à 343 $/an pour tous les adultes admissibles",
                    "Versement automatique après la déclaration provinciale",
                    "Aucune demande à remplir — calculé par Revenu Québec",
                  ],
                  lien: "/credit-solidarite-quebec",
                  libelleBtn: "Guide crédit solidarité",
                },
                {
                  emoji: "🏢",
                  badge: "Provincial",
                  badgeColor: "#D1FAE5",
                  badgeText: "#065F46",
                  titre: "Allocation-logement",
                  montant: "Jusqu'à 170 $/mois (2 040 $/an)",
                  qui: "Locataires à faible revenu dont le loyer dépasse 30 % du revenu brut",
                  desc: "Programme québécois pour les locataires à faible revenu. Le montant est calculé en fonction du revenu, du loyer payé et de la composition du ménage.",
                  details: [
                    "Pour les ménages dont le loyer dépasse 30 % du revenu brut",
                    "Montant mensuel variant selon revenu, loyer et ménage",
                    "Demande à faire auprès de la Société d'habitation du Québec (SHQ)",
                    "Liste d'attente dans certaines régions",
                  ],
                  lien: "/allocation-logement-quebec",
                  libelleBtn: "Guide allocation-logement",
                },
                {
                  emoji: "🔑",
                  badge: "Fédéral",
                  badgeColor: "#DBEAFE",
                  badgeText: "#1D4ED8",
                  titre: "CELIAPP — Épargne pour premier achat",
                  montant: "8 000 $/an déductibles (max 40 000 $)",
                  qui: "Premiers acheteurs qui prévoient acheter dans les 5 prochaines années",
                  desc: "Le Compte d'épargne libre d'impôt pour l'achat d'une première propriété combine les avantages du REER (déduction) et du CELI (retrait non imposable). Ouvert en 2023, il n'est pas rétroactif.",
                  details: [
                    "Cotisation annuelle max : 8 000 $ (cumul : 40 000 $)",
                    "Déductible du revenu imposable (comme le REER)",
                    "Retrait pour l'achat de la maison : entièrement non imposable",
                    "Se combine avec le RAP REER pour maximiser la mise de fonds",
                  ],
                  lien: "/retraite/celiapp",
                  libelleBtn: "Guide CELIAPP",
                },
                {
                  emoji: "🏗️",
                  badge: "Fédéral + Provincial",
                  badgeColor: "#EDE9FE",
                  badgeText: "#5B21B6",
                  titre: "Subventions rénovation (propriétaires)",
                  montant: "Jusqu'à 15 000 $ selon les travaux",
                  qui: "Propriétaires effectuant des rénovations écoénergétiques",
                  desc: "Plusieurs programmes (Rénoclimat, Chauffez vert, crédit fédéral) offrent des subventions pour les rénovations améliorant l'efficacité énergétique : isolation, fenêtres, thermopompe.",
                  details: [
                    "Rénoclimat : jusqu'à 10 000 $ pour travaux écoénergétiques",
                    "Chauffez vert : jusqu'à 12 000 $ pour conversion du mazout",
                    "Subvention thermopompe : jusqu'à 5 000 $",
                    "Crédit fédéral rénovation : 15 % des travaux admissibles",
                  ],
                  lien: "/subventions-maison-quebec",
                  libelleBtn: "Guide subventions maison",
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
                    <div style={{ display: "flex", gap: "10px", marginBottom: "10px", flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{ display: "inline-block", background: "#F0FDF4", color: "#059669", fontWeight: 800, fontSize: "13px", padding: "4px 12px", borderRadius: "100px" }}>
                        {prog.montant}
                      </span>
                      <span style={{ fontSize: "12px", color: "#A8A29E" }}>Pour : {prog.qui}</span>
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
                  q: "Le crédit de solidarité s'applique-t-il aussi aux propriétaires ?",
                  r: "Oui, le volet TVQ du crédit de solidarité s'applique à tous les résidents admissibles, propriétaires ou locataires. Le volet logement est réservé aux locataires et aux propriétaires de résidences dans un village nordique.",
                },
                {
                  q: "Comment savoir si mon loyer est trop élevé par rapport à mon revenu ?",
                  r: "La règle généralement utilisée est que ton loyer ne devrait pas dépasser 30 % de ton revenu brut mensuel. Si ton loyer dépasse ce seuil, tu pourrais être admissible à l'allocation-logement de la SHQ.",
                },
                {
                  q: "Puis-je utiliser le CELIAPP si j'ai déjà possédé une maison il y a 10 ans ?",
                  r: "Si tu n'as pas habité dans une maison dont tu étais propriétaire depuis le 1er janvier de l'année en cours et les 4 années civiles précédentes, tu pourrais être considéré comme un premier acheteur admissible au CELIAPP.",
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
              Vérifier toutes les aides disponibles
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Locataire, propriétaire ou futur acheteur — le diagnostic identifie les programmes les plus pertinents pour ta situation.
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
        <SiteFooter
          legalText={"Outil informatif non affilié au gouvernement. Consultez la SHQ, Revenu Québec et l'ARC pour confirmer votre admissibilité."}
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
