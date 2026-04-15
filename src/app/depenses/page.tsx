import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Réduire ses dépenses au Québec 2026 | Internet, assurances, téléphonie | ArgentQC.ca",
  description:
    "Guide pratique pour réduire tes dépenses au Québec : internet, assurances auto et habitation, téléphonie mobile. Comparatifs et stratégies concrètes.",
  alternates: { canonical: "https://argentqc.ca/depenses" },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const categoriesDepenses = [
  {
    emoji: "📡",
    titre: "Internet & télévision",
    potentiel: "200 – 600 $/an",
    actions: [
      "Comparer les offres fibres disponibles dans ta région",
      "Négocier avec ton fournisseur actuel (promotions non affichées)",
      "Évaluer si la TV câblée vaut encore son prix vs streaming",
      "Regrouper internet + mobile pour obtenir un rabais",
    ],
    lien: "/depenses/internet",
    libelleBtn: "Réduire ma facture internet",
  },
  {
    emoji: "🛡️",
    titre: "Assurances auto & habitation",
    potentiel: "300 – 900 $/an",
    actions: [
      "Obtenir 3 soumissions avant chaque renouvellement",
      "Regrouper auto + habitation chez le même assureur (rabais 10-25 %)",
      "Réviser tes franchises — une franchise plus élevée réduit la prime",
      "Retirer les couvertures inutiles (ex. valeur de remplacement sur vieille voiture)",
    ],
    lien: "/depenses/assurances",
    libelleBtn: "Réduire mes assurances",
  },
  {
    emoji: "📱",
    titre: "Téléphonie mobile",
    potentiel: "200 – 500 $/an",
    actions: [
      "Comparer les forfaits des opérateurs virtuels (Fizz, Public Mobile, Koodo)",
      "Évaluer si tu as besoin de données illimitées ou d'un forfait moindre",
      "Acheter ton téléphone déverrouillé pour changer d'opérateur librement",
      "Regrouper les lignes familiales pour un tarif de groupe",
    ],
    lien: "/internet",
    libelleBtn: "Voir les comparatifs",
  },
  {
    emoji: "⚡",
    titre: "Énergie & chauffage",
    potentiel: "300 – 800 $/an",
    actions: [
      "Installer un thermostat intelligent (économies moyennes de 15 %)",
      "Demander une vérification énergie gratuite via Hydro-Québec",
      "Convertir le chauffage au mazout vers thermopompe (subvention disponible)",
      "Isoler le grenier et les fenêtres (subvention Rénoclimat disponible)",
    ],
    lien: "/subvention-isolation-quebec",
    libelleBtn: "Voir les subventions disponibles",
  },
];

const faqs = [
  {
    q: "Par où commencer pour réduire mes dépenses ?",
    r: "Commence par les dépenses fixes récurrentes : internet, assurances et téléphonie. Ce sont les postes où les économies sont les plus rapides à réaliser sans changer tes habitudes de vie.",
  },
  {
    q: "Est-ce que ça vaut la peine de changer d'assureur chaque année ?",
    r: "Oui, si tu ne reçois pas de rabais de fidélité. Les assureurs offrent souvent leurs meilleures primes aux nouveaux clients. Un appel de 30 min peut économiser 200-400 $/an.",
  },
  {
    q: "Comment savoir si mon forfait internet est compétitif ?",
    r: "Utilise notre comparateur internet pour voir les offres disponibles à ton adresse. En moyenne, les Québécois paient 20-40 $/mois de trop pour leur internet.",
  },
];

export default function DepensesPage() {
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
              <span>Dépenses</span>
            </nav>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.75rem, 5vw, 2.4rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Réduire ses dépenses au Québec
            </h1>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px" }}>
              Internet, assurances, téléphonie, énergie — des stratégies concrètes pour couper les dépenses inutiles sans sacrifier ta qualité de vie.
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
                Sophie — Couple propriétaire, 2 voitures, revenu combiné 120 000 $
              </p>
              <div className="flex flex-col gap-2">
                {[
                  ["Changement fournisseur internet (Bell → Fizz fibres)", "- 420 $/an"],
                  ["Regroupement assurances auto + habitation", "- 380 $/an"],
                  ["Passage forfait mobile illimité → 20 Go", "- 240 $/an"],
                  ["Thermostat intelligent Hydro-Québec", "- 180 $/an"],
                ].map(([label, montant]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                    <span style={{ color: GREEN, fontWeight: 700 }}>{montant}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#F0EBE0", fontWeight: 700, fontSize: "14px" }}>Économies totales</span>
                  <span style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem" }}>1 220 $/an</span>
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
                { step: "1", text: "Rassemble tes 3 dernières factures : internet, assurances, téléphone" },
                { step: "2", text: "Utilise nos comparateurs pour voir si tu paies le juste prix dans ta région" },
                { step: "3", text: "Appelle ton fournisseur actuel avec les offres concurrentes — la rétention offre souvent de meilleurs prix" },
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

        {/* ── CATÉGORIES ── */}
        <section className="px-5 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "#1C1C1E",
              marginBottom: "1.75rem",
            }}>
              Stratégies par catégorie de dépense
            </h2>
            <div className="flex flex-col gap-5">
              {categoriesDepenses.map((cat) => (
                <div key={cat.titre} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", overflow: "hidden" }}>
                  <div style={{ background: DARK, padding: "14px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "1.4rem" }}>{cat.emoji}</span>
                        <h3 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 700, fontSize: "1rem", margin: 0 }}>{cat.titre}</h3>
                      </div>
                      <span style={{
                        background: "rgba(16,185,129,0.15)",
                        color: GREEN,
                        fontSize: "12px",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "100px",
                      }}>
                        {cat.potentiel}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                      {cat.actions.map((action) => (
                        <li key={action} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "#44403C", lineHeight: 1.5 }}>
                          <span style={{ color: GREEN, flexShrink: 0, marginTop: "2px" }}>✓</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={cat.lien}
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
                      {cat.libelleBtn} →
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

        {/* ── CTA ── */}
        <section style={{ background: DARK }} className="px-5 py-10">
          <div className="max-w-lg mx-auto text-center">
            <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
              Où en es-tu avec tes finances ?
            </h2>
            <p style={{ color: "rgba(240,235,224,0.55)", fontSize: "14px", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Le diagnostic gratuit identifie tes principales opportunités d'économies en 2 minutes.
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
              Outil informatif non affilié au gouvernement. Consultez les sites officiels pour confirmer votre admissibilité.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
