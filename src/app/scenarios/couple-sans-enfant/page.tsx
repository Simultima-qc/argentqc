import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Scénario : Couple sans enfant, 120 000 $ — Réduire 1 200 $/an | ArgentQC.ca",
  description:
    "Couple propriétaire, revenu combiné 120 000 $. Optimisation dépenses (internet, assurances), fractionnement REER, stratégies fiscales. Calculs et plan d'action.",
  alternates: { canonical: "https://argentqc.ca/scenarios/couple-sans-enfant" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export default function ScenarioCouplePage() {
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
              <span>Couple sans enfant</span>
            </nav>
            <div style={{
              display: "inline-block",
              background: "rgba(251,191,36,0.15)",
              color: GOLD,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "100px",
              marginBottom: "1rem",
            }}>
              👫 Scénario couple
            </div>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.3rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Couple propriétaire — 1 200 $/an en économies
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75 }}>
              Amélie et Patrick, propriétaires, revenu combiné de 120 000 $. Sans enfants, leurs principales opportunités sont dans l&apos;optimisation des dépenses et la stratégie fiscale.
            </p>
          </div>
        </section>

        <section style={{ background: "#0F172A" }} className="px-5 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ color: GOLD, fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1rem", marginBottom: "14px" }}>📋 Profil</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Situation familiale", "Couple sans enfant"],
                ["Revenu combiné", "120 000 $ (70k + 50k)"],
                ["Logement", "Propriétaires (maison)"],
                ["Véhicules", "2 voitures conventionnelles"],
                ["REER", "Partiellement cotisé"],
                ["CELI", "Sous-utilisé"],
              ].map(([label, val]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "10px", padding: "12px 14px" }}>
                  <div style={{ fontSize: "11px", color: "rgba(240,235,224,0.4)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
                  <div style={{ fontSize: "13px", color: "#F0EBE0", fontWeight: 600, lineHeight: 1.4 }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "white" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              💰 Optimisations disponibles
            </h2>
            <div style={{ border: "1px solid #EDE9E0", borderRadius: "14px", overflow: "hidden" }}>
              {[
                { label: "Regroupement assurances auto + habitation", montant: "- 380 $", detail: "Rabais 15-20 % pour regroupement chez un même assureur — 2 voitures + maison" },
                { label: "Changement fournisseur internet", montant: "- 300 $", detail: "Passage Bell/Vidéotron → Fizz fibres équivalent à 25 $/mois de moins" },
                { label: "REER de conjoint (Amélie → Patrick)", montant: "≈ 1 500 $", detail: "Patrick cotise dans le REER d'Amélie (revenu plus faible). Déduction à 70k, décaissement à 50k" },
                { label: "Optimisation téléphonie (2 lignes)", montant: "- 240 $", detail: "Passage forfaits mobiles illimités → forfaits adaptés via opérateur virtuel" },
                { label: "Maximiser CELI (2 × 7 000 $)", montant: "Libre d'impôt", detail: "Déplacer l'épargne existante dans les CELI des deux conjoints — croissance non imposable" },
              ].map((item, i) => (
                <div key={item.label} style={{ padding: "16px 20px", borderBottom: i < 4 ? "1px solid #F5F0EA" : "none" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E", marginBottom: "4px" }}>{item.label}</div>
                      <div style={{ fontSize: "12px", color: "#A8A29E", lineHeight: 1.5 }}>{item.detail}</div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: "1rem", color: "#059669", flexShrink: 0 }}>{item.montant}</div>
                  </div>
                </div>
              ))}
              <div style={{ padding: "16px 20px", background: "#F0FDF4", borderTop: "2px solid #10B981" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E" }}>Économies directes estimées</span>
                  <span style={{ fontWeight: 900, fontSize: "1.4rem", color: "#059669" }}>~ 1 220 $/an</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              🎯 Plan d&apos;action — 3 étapes
            </h2>
            <ol style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                {
                  step: "1",
                  titre: "Audit dépenses fixes : internet + assurances + téléphonie",
                  detail: "Rassemble les dernières factures, compare avec les outils ArgentQC. Les économies sont réalisables en 2-3 appels téléphoniques.",
                  lien: "/depenses",
                  cta: "Guides dépenses",
                },
                {
                  step: "2",
                  titre: "Ouvrir un REER de conjoint pour Amélie",
                  detail: "Patrick (70k) cotise dans le REER d'Amélie (50k). La déduction est faite à 70k (taux ~38 %) mais le retrait futur sera au taux d'Amélie (~30 %). Économie estimée : 1 500-2 000 $/an.",
                  lien: "/retraite/reer",
                  cta: "Guide REER de conjoint",
                },
                {
                  step: "3",
                  titre: "Maximiser les CELI des deux conjoints",
                  detail: "Déplacer l'épargne dans le CELI protège les rendements de l'impôt chaque année. À 120 000 $ de revenu combiné, l'impact fiscal de ne pas utiliser le CELI peut être de 300-700 $/an en impôt évitable.",
                  lien: "/retraite/celi",
                  cta: "Guide CELI",
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
              Analyse ta situation personnelle
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem" }}>
              Le diagnostic adapte les recommandations à ton revenu, ton statut et tes projets.
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
                { label: "Propriétaire avec hypothèque", href: "/scenarios/proprietaire-hypotheque" },
                { label: "Pré-retraite · 55 ans", href: "/scenarios/pre-retraite" },
              ].map((sc) => (
                <Link key={sc.href} href={sc.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "white", border: "1px solid #EDE9E0", borderRadius: "10px", padding: "12px 16px", textDecoration: "none", fontSize: "14px", fontWeight: 600, color: "#1C1C1E" }}>
                  {sc.label}
                  <span style={{ color: "#3B82F6" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter
          legalText={"Outil informatif non affilié au gouvernement. Les montants sont des estimations — consultez les sites officiels pour confirmer votre admissibilité."}
          contentClassName="max-w-lg mx-auto text-center"
          style={{ background: DARK, padding: "32px 20px" }}
          brandStyle={{ color: GOLD, fontSize: "1.1rem", marginBottom: "8px" }}
          legalStyle={{ fontSize: "12px", lineHeight: 1.7 }}
          contactLinkStyle={{ marginTop: "6px" }}
        />
      </main>
    </>
  );
}
