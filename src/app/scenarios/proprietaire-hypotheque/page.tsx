import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Scénario : Propriétaire avec hypothèque — 15 000 $ en subventions | ArgentQC.ca",
  description:
    "Couple propriétaire avec hypothèque de 350 000 $. Subventions Rénoclimat, RAP REER, crédit rénovation fédéral. Calculs concrets et plan d'action.",
  alternates: { canonical: "https://argentqc.ca/scenarios/proprietaire-hypotheque" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

export default function ScenarioProprietairePage() {
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
              <span>Propriétaire avec hypothèque</span>
            </nav>
            <div style={{ display: "inline-block", background: "rgba(139,92,246,0.15)", color: "#A78BFA", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "100px", marginBottom: "1rem" }}>
              🏡 Scénario propriétaire
            </div>
            <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.75rem, 5vw, 2.3rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem" }}>
              Propriétaire avec hypothèque — 15 000 $ en subventions
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75 }}>
              Julie et Marc, propriétaires d'une maison de 1970 avec hypothèque de 350 000 $. Ils veulent rénover et réduire leur facture d'énergie. Voici ce qui est disponible.
            </p>
          </div>
        </section>

        <section style={{ background: "#0F172A" }} className="px-5 py-8">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ color: GOLD, fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: "1rem", marginBottom: "14px" }}>📋 Profil</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Situation", "Couple propriétaire"],
                ["Maison", "1970, bungalow"],
                ["Hypothèque", "350 000 $ (18 ans restants)"],
                ["Revenu combiné", "110 000 $/an"],
                ["Projet", "Thermopompe + isolation + fenêtres"],
                ["Budget rénos", "25 000 $"],
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
              💰 Subventions et crédits disponibles
            </h2>
            <div style={{ border: "1px solid #EDE9E0", borderRadius: "14px", overflow: "hidden" }}>
              {[
                { label: "Rénoclimat (fenêtres + isolation + thermopompe)", montant: "jusqu'à 10 000 $", detail: "Programme Hydro-Québec + Transition énergétique Québec — cumulables", badge: "Provincial" },
                { label: "Crédit d'impôt rénovation résidentielle fédéral", montant: "jusqu'à 7 500 $", detail: "15 % des dépenses admissibles (max 50 000 $) — programme fédéral Rénover vert", badge: "Fédéral" },
                { label: "Chauffez vert (remplacement mazout)", montant: "jusqu'à 12 000 $", detail: "Si la maison est chauffée au mazout — remplacement vers thermopompe géothermique ou air-air", badge: "Provincial" },
                { label: "RAP REER — retrait pour rénos (si premier achat récent)", montant: "jusqu'à 35 000 $", detail: "Utilisable si achat il y a moins de 2 ans. Sans remboursement si critères rénovation majeure respectés.", badge: "Fédéral" },
              ].map((item, i) => (
                <div key={item.label} style={{ padding: "16px 20px", borderBottom: i < 3 ? "1px solid #F5F0EA" : "none" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "4px", alignItems: "center" }}>
                        <span style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E" }}>{item.label}</span>
                        <span style={{ background: item.badge === "Fédéral" ? "#DBEAFE" : "#D1FAE5", color: item.badge === "Fédéral" ? "#1D4ED8" : "#065F46", fontSize: "10px", fontWeight: 700, padding: "1px 7px", borderRadius: "100px" }}>{item.badge}</span>
                      </div>
                      <div style={{ fontSize: "12px", color: "#A8A29E", lineHeight: 1.5 }}>{item.detail}</div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#059669", flexShrink: 0, textAlign: "right" }}>{item.montant}</div>
                  </div>
                </div>
              ))}
              <div style={{ padding: "16px 20px", background: "#F0FDF4", borderTop: "2px solid #10B981" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E" }}>Potentiel total subventions</span>
                  <span style={{ fontWeight: 900, fontSize: "1.4rem", color: "#059669" }}>~ 15 000 $+</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "12px", color: "#A8A29E", marginTop: "8px" }}>
              * Les montants maximaux ne sont pas tous cumulables. Consultez un conseiller en rénovation écoénergétique pour le calcul exact selon vos travaux.
            </p>
          </div>
        </section>

        <section style={{ background: "white", borderTop: "1px solid #F0EBE0" }} className="px-5 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
              🎯 Plan d'action — 3 étapes
            </h2>
            <ol style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                {
                  step: "1",
                  titre: "Demander une évaluation Rénoclimat AVANT de commencer les travaux",
                  detail: "L'évaluation doit être faite avant les travaux pour être admissible. Un conseiller écoénergétique certifié visite la maison et identifie les travaux subventionnables. Coût de l'évaluation : ~150 $ (remboursable avec les subventions).",
                  lien: "/reno-climat-quebec",
                  cta: "Guide Rénoclimat complet",
                },
                {
                  step: "2",
                  titre: "Prioriser la thermopompe — le retour sur investissement le plus rapide",
                  detail: "Une thermopompe biénergie réduit la facture Hydro de 20-35 % et génère la plus grande subvention individuelle (jusqu'à 5 000 $). Amortissement typique : 4-6 ans.",
                  lien: "/subvention-thermopompe-quebec",
                  cta: "Guide subvention thermopompe",
                },
                {
                  step: "3",
                  titre: "Maximiser le REER pour financer la partie non subventionnée",
                  detail: "À 110 000 $ de revenu combiné, chaque 1 000 $ cotisé au REER génère ~380-400 $ de remboursement. Ce remboursement peut servir à financer les rénovations non couvertes par les subventions.",
                  lien: "/retraite/reer",
                  cta: "Guide REER",
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
            <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>Ta maison, ton profil spécifique</h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem" }}>Le diagnostic identifie les subventions disponibles selon ta situation géographique et ton type de chauffage.</p>
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

        <footer style={{ background: DARK }} className="py-8 px-5">
          <div className="max-w-lg mx-auto text-center">
            <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>ArgentQC.ca</p>
            <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", lineHeight: 1.7 }}>
              Outil informatif non affilié au gouvernement. Les montants sont des estimations — consultez les sites officiels pour confirmer votre admissibilité.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
