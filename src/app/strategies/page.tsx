import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Stratégies financières au Québec 2026 | REER, CELI, optimisation fiscale | ArgentQC.ca",
  description:
    "Stratégies financières concrètes pour les Québécois : REER vs CELI, fractionnement du revenu, décaissement retraite, optimisation fiscale 2026.",
  alternates: { canonical: "https://argentqc.ca/strategies" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const strategies = [
  {
    emoji: "🏦",
    titre: "REER vs CELI : choisir le bon compte",
    niveau: "Essentiel",
    niveauColor: "#DBEAFE",
    niveauText: "#1D4ED8",
    desc: "La règle de base : contribue au REER si ton revenu actuel est plus élevé que ton revenu futur à la retraite. Sinon, priorise le CELI.",
    calcul: {
      label: "Exemple — Revenu actuel : 75 000 $",
      lignes: [
        ["Cotisation REER 18 000 $", "économie d'impôt ~5 400 $"],
        ["Même argent en CELI", "aucune économie immédiate"],
        ["Différence en main", "+ 5 400 $ cette année"],
      ],
    },
    actions: [
      "Calcule ton taux marginal d'imposition actuel",
      "Estime ton revenu prévu à la retraite",
      "Si revenu retraite < revenu actuel → REER prioritaire",
      "Utilise le CELI pour les projets à court et moyen terme",
    ],
    lien: "/strategies/reer-vs-celi",
  },
  {
    emoji: "📊",
    titre: "Fractionnement du revenu en couple",
    niveau: "Intermédiaire",
    niveauColor: "#FEF3C7",
    niveauText: "#92400E",
    desc: "Réduire la facture fiscale combinée d'un couple en transférant du revenu vers le conjoint à revenu plus faible.",
    calcul: {
      label: "Exemple — Couple, 120 000 $ combiné (80k + 40k)",
      lignes: [
        ["Cotisation REER au nom du conjoint (40k)", "déduction à 80k"],
        ["Décaissement futur au taux de 40k", "économie ~4 200 $"],
        ["Pension de retraite fractionnée", "jusqu'à 2 000 $ économisés/an"],
      ],
    },
    actions: [
      "Ouvrir un REER de conjoint si ton revenu est significativement plus élevé",
      "Prévoir un fractionnement de la pension (après 65 ans)",
      "Prêter de l'argent au conjoint au taux prescrit pour investir",
    ],
    lien: "/strategies/fractionnement-revenu",
  },
  {
    emoji: "🎯",
    titre: "Maximiser son CELIAPP (acheteurs)",
    niveau: "Essentiel",
    niveauColor: "#D1FAE5",
    niveauText: "#065F46",
    desc: "Le Compte d'épargne libre d'impôt pour l'achat d'une première propriété combine les avantages du REER et du CELI.",
    calcul: {
      label: "Exemple — Premier acheteur, revenu 65 000 $",
      lignes: [
        ["Cotisation annuelle max", "8 000 $"],
        ["Économie d'impôt annuelle", "~ 2 400 $"],
        ["Croissance libre d'impôt", "4 ans × 8k = 32k disponibles"],
      ],
    },
    actions: [
      "Ouvrir un CELIAPP dès maintenant si tu prévois acheter dans < 5 ans",
      "Cotiser le maximum annuel (8 000 $) avant le 31 décembre",
      "Combiner avec le RAP REER pour maximiser la mise de fonds",
    ],
    lien: "/retraite/celiapp",
  },
  {
    emoji: "📅",
    titre: "Optimisation du décaissement à la retraite",
    niveau: "Avancé",
    niveauColor: "#EDE9FE",
    niveauText: "#5B21B6",
    desc: "L'ordre dans lequel tu retires tes épargnes (REER, CELI, non enregistré) a un impact majeur sur ta facture fiscale.",
    calcul: {
      label: "Exemple — 65 ans, revenus projetés 70 000 $/an",
      lignes: [
        ["Retrait REER en premier", "impôt élevé sur tout"],
        ["Stratégie mixte REER + CELI", "facture réduite ~3 000-6 000 $/an"],
        ["Différer RRQ à 70 ans", "+ 42 % sur chaque versement à vie"],
      ],
    },
    actions: [
      "Convertir le REER en FERR entre 65 et 71 ans selon ton taux marginal",
      "Utiliser le CELI pour combler les revenus variables",
      "Évaluer si différer la RRQ (jusqu'à 70 ans) est avantageux",
    ],
    lien: "/strategies/decaissement-retraite",
  },
];

const faqs = [
  {
    q: "Est-ce que je dois maximiser mon REER avant de cotiser au CELI ?",
    r: "Pas nécessairement. La règle d'or : REER si ton taux marginal actuel dépasse ton taux estimé à la retraite. Sinon, le CELI est souvent préférable pour la flexibilité.",
  },
  {
    q: "À partir de quel revenu vaut-il la peine de planifier la fiscalité ?",
    r: "Dès 45 000 $ de revenu, des stratégies simples comme maximiser le REER ou ouvrir un CELI peuvent générer des économies significatives.",
  },
  {
    q: "Ai-je besoin d'un planificateur financier ?",
    r: "Pour les stratégies de base (REER, CELI, CELIAPP), les guides d'ArgentQC sont suffisants. Pour les situations complexes (fractionnement, décaissement, fiducie), un planificateur financier agréé (PFA) est recommandé.",
  },
];

export default function StrategiesPage() {
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
              <span>Stratégies financières</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Stratégies financières pour Québécois
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              REER, CELI, fractionnement, décaissement — des stratégies concrètes avec des chiffres réels pour optimiser ta situation fiscale.
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
                Marc — Célibataire, 38 ans, revenu 72 000 $, REER peu utilisé
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["Cotisation REER max (18 % du revenu = 12 960 $)", "économie ~3 900 $"],
                  ["CELIAPP ouvert + 8 000 $ contribués", "économie ~2 400 $"],
                  ["Crédit de solidarité + TPS", "+ 760 $"],
                  ["Optimisation assurances + internet", "- 600 $/an"],
                ].map(([label, montant]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", gap: "8px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                    <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>{montant}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "14px" }}>Impact annuel total</span>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem" }}>~ 7 660 $</span>
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
                { step: "1", text: "Identifie tes droits de cotisation REER et CELI (disponibles dans ton avis de cotisation ARC)" },
                { step: "2", text: "Choisis ta stratégie principale selon ton âge et ton revenu (guide ci-dessous)" },
                { step: "3", text: "Lance le diagnostic pour voir les stratégies les plus pertinentes pour toi" },
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
              🚀 Lancer le diagnostic →
            </Link>
          </div>
        </section>

        {/* ── STRATÉGIES ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#1C1C1E",
              marginBottom: "1.75rem",
            }}>
              Stratégies détaillées
            </h2>
            <div className="flex flex-col gap-6">
              {strategies.map((strat) => (
                <div key={strat.titre} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", overflow: "hidden" }}>
                  <div style={{ background: DARK, padding: "14px 20px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "1.4rem" }}>{strat.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 700, fontSize: "1rem", margin: 0 }}>{strat.titre}</h3>
                    </div>
                    <span style={{
                      background: strat.niveauColor,
                      color: strat.niveauText,
                      fontSize: "10px",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: "100px",
                      flexShrink: 0,
                    }}>
                      {strat.niveau}
                    </span>
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <p style={{ fontSize: "14px", color: "#57534E", lineHeight: 1.7, marginBottom: "14px" }}>{strat.desc}</p>

                    {/* Calcul */}
                    <div style={{
                      background: PARCH,
                      borderRadius: "10px",
                      padding: "14px 16px",
                      marginBottom: "16px",
                      border: "1px solid #EDE9E0",
                    }}>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: "#A8A29E", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "8px" }}>
                        {strat.calcul.label}
                      </p>
                      {strat.calcul.lignes.map(([label, montant]) => (
                        <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "4px", gap: "8px" }}>
                          <span style={{ color: "#57534E" }}>{label}</span>
                          <span style={{ fontWeight: 700, color: "#059669", flexShrink: 0 }}>{montant}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
                      {strat.actions.map((action) => (
                        <li key={action} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#44403C" }}>
                          <span style={{ color: GREEN, flexShrink: 0 }}>✓</span>
                          {action}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={strat.lien}
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
                      En savoir plus →
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

        {/* ── LIENS SCÉNARIOS ── */}
        <section style={{ background: PARCH, borderTop: "1px solid #E8E0D4" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
              Vois comment ça s&apos;applique à ta situation
            </h2>
            <p style={{ fontSize: "14px", color: "#78716C", marginBottom: "1.5rem" }}>
              Explore les scénarios types pour voir des calculs concrets selon ton profil.
            </p>
            <Link
              href="/scenarios"
              style={{
                display: "inline-block",
                background: DARK,
                color: GOLD,
                fontWeight: 700,
                fontSize: "14px",
                padding: "0.85rem 1.75rem",
                borderRadius: "12px",
                textDecoration: "none",
                border: "1px solid rgba(245,200,66,0.2)",
              }}
            >
              Voir les scénarios types →
            </Link>
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
