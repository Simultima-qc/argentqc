import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impôts au Québec en 2026 - Tout ce qu'il faut savoir | ArgentQC.ca",
  description:
    "Déclaration d'impôts au Québec 2026 : deux déclarations obligatoires, dates limites, crédits utiles et logiciels gratuits.",
  keywords: ["impôts Québec 2026", "déclaration Québec", "ARC Revenu Québec", "logiciels impôts"],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const comparatifDeclarations = [
  { critere: "Organisme", federal: "Agence du revenu du Canada", provincial: "Revenu Québec" },
  { critere: "Formulaire principal", federal: "T1", provincial: "TP-1" },
  { critere: "Date limite salarié", federal: "30 avril 2026", provincial: "30 avril 2026" },
  { critere: "Date limite autonome", federal: "15 juin 2026", provincial: "15 juin 2026" },
  { critere: "Transmission", federal: "IMPÔTNET", provincial: "ImpôtNet Québec" },
];

const credits = [
  "Crédit de solidarité",
  "Crédit d'impôt pour frais médicaux",
  "Crédit TPS/TVH fédéral",
  "Allocation canadienne pour enfants",
  "Cotisation REER",
];

const faqs = [
  { q: "Faut-il vraiment produire deux déclarations ?", r: "Oui. Le Québec exige une déclaration fédérale et une déclaration provinciale distincte." },
  { q: "Puis-je utiliser un logiciel gratuit ?", r: "Oui, plusieurs options gratuites ou à contribution volontaire existent pour les dossiers simples." },
  { q: "Quand arrive le remboursement ?", r: "Avec dépôt direct et transmission en ligne, le fédéral est souvent plus rapide, puis le provincial suit dans les semaines suivantes." },
];

export default function ImpotsPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px" }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/questionnaire" style={{ color: GOLD, fontSize: "13px", fontWeight: 600, textDecoration: "underline" }}>Trouver mes aides</Link>
        </div>
      </header>

      <section style={{ background: DARK }} className="px-5 py-12">
        <div className="max-w-3xl mx-auto">
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.45)", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "rgba(240,235,224,0.45)", textDecoration: "none" }}>Accueil</Link>
            {" › "}
            <span>Impôts</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Guide impôts Québec 2026</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "12px" }}>
            Impôts au Québec en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.72)", fontSize: "15px", lineHeight: 1.7, maxWidth: "720px" }}>
            Les résidents du Québec doivent gérer deux déclarations. Voici la vue simple des dates, des outils et des crédits à ne pas oublier.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        <section style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "16px", padding: "16px" }}>
          <strong style={{ color: "#92400E" }}>Date limite : 30 avril 2026.</strong>
          <p style={{ margin: "8px 0 0 0", color: "#78350F", fontSize: "13px", lineHeight: 1.6 }}>Si vous avez un solde à payer, les pénalités peuvent commencer dès le 1er mai.</p>
        </section>

        <section>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>Fédéral vs provincial</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: DARK, color: "#F0EBE0" }}>
                  <th style={{ padding: "12px", textAlign: "left" }}>Critère</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Fédéral</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Provincial</th>
                </tr>
              </thead>
              <tbody>
                {comparatifDeclarations.map((row, i) => (
                  <tr key={row.critere} style={{ borderBottom: i < comparatifDeclarations.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                    <td style={{ padding: "12px", fontWeight: 600 }}>{row.critere}</td>
                    <td style={{ padding: "12px" }}>{row.federal}</td>
                    <td style={{ padding: "12px" }}>{row.provincial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "20px" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1rem" }}>Crédits à surveiller</h2>
          <ul style={{ margin: 0, paddingLeft: "1.25rem", lineHeight: 1.8, color: "#44403C" }}>
            {credits.map((credit) => <li key={credit}>{credit}</li>)}
          </ul>
        </section>

        <section style={{ background: DARK, borderRadius: "20px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.25rem", fontWeight: 800, marginBottom: "8px" }}>Besoin d&apos;une vue plus large sur vos aides ?</p>
          <p style={{ color: "rgba(240,235,224,0.68)", fontSize: "14px", lineHeight: 1.7, marginBottom: "16px" }}>Le questionnaire regroupe crédits, allocations et programmes utiles selon votre profil.</p>
          <Link href="/questionnaire" style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "14px", padding: "12px 22px", borderRadius: "12px", textDecoration: "none" }}>Trouver mes aides →</Link>
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

