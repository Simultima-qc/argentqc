import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide complet pour déménager au Québec en 2026 | ArgentQC.ca",
  description:
    "Tout ce qu'il faut savoir pour déménager au Québec en 2026 : étapes, coûts, droits des locataires, 1er juillet et ressources officielles.",
  keywords: ["déménagement Québec", "guide déménagement", "1er juillet Québec", "loyers Québec"],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const etapes = [
  { semaines: "8 semaines avant", emoji: "📋", taches: ["Donner son préavis", "Chercher le prochain logement", "Comparer des soumissions", "Commencer à trier"] },
  { semaines: "4 semaines avant", emoji: "📦", taches: ["Réserver le camion ou les déménageurs", "Commencer l'emballage", "Faire suivre le courrier", "Prévoir l'assurance habitation"] },
  { semaines: "2 semaines avant", emoji: "🗂️", taches: ["Mettre à jour la SAAQ et les dossiers fiscaux", "Prévenir banques et employeur", "Réserver l'ascenseur si besoin", "Préparer les cartons essentiels"] },
  { semaines: "Jour J", emoji: "🚚", taches: ["Photographier l'ancien logement", "Relever les compteurs", "Remettre les clés", "Vérifier l'arrivée de tous les biens"] },
];

const villes = [
  { ville: "Montréal", loyer31: "950 à 1 350 $", loyer41: "1 200 à 1 800 $", loyer51: "1 600 à 2 500 $" },
  { ville: "Québec", loyer31: "750 à 1 000 $", loyer41: "900 à 1 350 $", loyer51: "1 100 à 1 700 $" },
  { ville: "Laval", loyer31: "850 à 1 150 $", loyer41: "1 050 à 1 500 $", loyer51: "1 350 à 2 000 $" },
  { ville: "Sherbrooke", loyer31: "650 à 900 $", loyer41: "800 à 1 150 $", loyer51: "950 à 1 400 $" },
];

const ressources = [
  { label: "Tribunal administratif du logement (TAL)", href: "https://www.tal.gouv.qc.ca/" },
  { label: "Registre des loyers", href: "https://www.tal.gouv.qc.ca/fr/registre-des-loyers" },
  { label: "SAAQ - changement d'adresse", href: "https://saaq.gouv.qc.ca/services-en-ligne/changement-adresse/" },
  { label: "Canada Post - réexpédition", href: "https://www.canadapost-postescanada.ca/cpc/fr/particuliers/postez-et-recevez/gerer-votre-courrier/reacheminement.page" },
];

const faqs = [
  { q: "Quand donner son préavis ?", r: "Pour un bail annuel, le délai est souvent de 3 mois avant la fin du bail, selon la situation." },
  { q: "Pourquoi le 1er juillet est-il si chargé ?", r: "Parce qu'une grande part des baux québécois se termine au 30 juin, ce qui concentre beaucoup de déménagements le même jour." },
  { q: "Peut-on déduire certains frais de déménagement ?", r: "Oui dans certains cas liés à un emploi ou à des études, sous conditions fédérales précises." },
];

export default function DemenagementPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px" }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/demenagement/checklist" style={{ color: GOLD, fontSize: "13px", fontWeight: 600, textDecoration: "underline" }}>Checklist</Link>
        </div>
      </header>

      <section style={{ background: DARK }} className="px-5 py-12">
        <div className="max-w-3xl mx-auto">
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.45)", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "rgba(240,235,224,0.45)", textDecoration: "none" }}>Accueil</Link>
            {" › "}
            <span>Déménagement</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Guide déménagement Québec 2026</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "12px" }}>
            Déménager au Québec en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.72)", fontSize: "15px", lineHeight: 1.7, maxWidth: "720px" }}>
            Préavis, 1er juillet, loyers, organismes à prévenir et étapes clés : la base pour éviter les oublis coûteux.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        <section style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "16px", padding: "16px" }}>
          <strong style={{ color: "#92400E" }}>Le 1er juillet reste la période la plus tendue.</strong>
          <p style={{ margin: "8px 0 0 0", color: "#78350F", fontSize: "13px", lineHeight: 1.6 }}>Réservez tôt le camion, les déménageurs et l&apos;installation internet si vous bougez autour de cette date.</p>
        </section>

        <section>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>Étapes clés</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {etapes.map((e) => (
              <div key={e.semaines} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "16px" }}>
                <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "8px", color: "#1C1C1E" }}>{e.emoji} {e.semaines}</div>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#44403C", lineHeight: 1.7 }}>
                  {e.taches.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>Repères de loyers</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  <th style={{ padding: "12px", textAlign: "left" }}>Ville</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>3 1/2</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>4 1/2</th>
                  <th style={{ padding: "12px", textAlign: "center" }}>5 1/2</th>
                </tr>
              </thead>
              <tbody>
                {villes.map((v, i) => (
                  <tr key={v.ville} style={{ borderBottom: i < villes.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px", fontWeight: 600 }}>{v.ville}</td>
                    <td style={{ padding: "12px", textAlign: "center" }}>{v.loyer31}</td>
                    <td style={{ padding: "12px", textAlign: "center" }}>{v.loyer41}</td>
                    <td style={{ padding: "12px", textAlign: "center" }}>{v.loyer51}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>Ressources officielles</h2>
          <div className="space-y-3">
            {ressources.map((r) => (
              <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "space-between", gap: "12px", background: "#FAF8F4", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 14px", textDecoration: "none", color: "#1C1C1E" }}>
                <span>{r.label}</span>
                <span style={{ color: "#3B82F6" }}>↗</span>
              </a>
            ))}
          </div>
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

