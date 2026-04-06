import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impôts au Québec en 2026 — Tout ce qu'il faut savoir | ArgentQC.ca",
  description:
    "Déclaration d'impôts au Québec 2026 : deux déclarations obligatoires (ARC + Revenu Québec), dates limites, crédits d'impôt avantageux et logiciels gratuits.",
  keywords: [
    "impôts Québec 2026",
    "déclaration impôts Québec",
    "comment faire ses impôts Québec",
    "ARC Revenu Québec déclaration",
    "crédits impôt Québec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const comparatifDeclarations = [
  { critere: "Organisme", federal: "Agence du revenu du Canada (ARC)", provincial: "Revenu Québec" },
  { critere: "Formulaire principal", federal: "T1 — Déclaration de revenus et de prestations", provincial: "TP-1 — Déclaration de revenus" },
  { critere: "Date limite (salarié)", federal: "30 avril 2026", provincial: "30 avril 2026" },
  { critere: "Date limite (travailleur autonome)", federal: "15 juin 2026", provincial: "15 juin 2026" },
  { critere: "Dépôt en ligne", federal: "IMPÔTNET (ARC)", provincial: "ImpôtNet Québec" },
  { critere: "Mon dossier en ligne", federal: "Mon dossier ARC (canada.ca)", provincial: "Mon dossier Revenu Québec" },
  { critere: "Pénalité retard", federal: "5% + 1%/mois (max. 12 mois)", provincial: "5% + 1%/mois (max. 20 mois)" },
];

const creditsAvantageux = [
  { nom: "Crédit de solidarité", desc: "Jusqu'à 1 194 $/an — logement + TVQ + région", href: "/credit-solidarite-quebec", emoji: "🏠" },
  { nom: "Crédit d'impôt pour frais médicaux", desc: "Lunettes, dentiste, médicaments — récupérez une partie de vos dépenses", href: "/credit-impot-frais-medicaux-quebec", emoji: "💊" },
  { nom: "Crédit d'impôt pour aidants naturels", desc: "Pour les personnes qui prennent soin d'un proche", href: "/credit-impot-quebec", emoji: "🤝" },
  { nom: "Crédit TPS/TVH fédéral", desc: "Versé automatiquement 4 fois par an selon votre revenu", href: "/questionnaire", emoji: "💳" },
  { nom: "Allocation canadienne pour enfants", desc: "Jusqu'à 7 787 $ par enfant de moins de 6 ans en 2026", href: "/allocation-enfant-quebec", emoji: "👶" },
  { nom: "Cotisation REER", desc: "Réduisez votre revenu imposable — économie d'impôt immédiate", href: "/retraite/reer", emoji: "📈" },
];

const quiDoitProduire = [
  "Vous avez gagné un revenu au Québec ou au Canada en 2025",
  "Vous avez vendu une propriété ou réalisé un gain en capital",
  "Vous avez reçu des prestations d'assurance-emploi ou de REER",
  "Vous souhaitez recevoir des crédits d'impôt remboursables (solidarité, TPS, allocation famille)",
  "Vous avez un solde d'impôt dû (même sans revenu significatif)",
  "Vous avez des droits de cotisation REER inutilisés à confirmer",
];

const faqs = [
  {
    q: "Dois-je produire deux déclarations au Québec ?",
    r: "Oui — les résidents du Québec doivent produire deux déclarations distinctes chaque année : une déclaration fédérale à l'Agence du revenu du Canada (ARC) et une déclaration provinciale à Revenu Québec. C'est la seule province canadienne à exiger une déclaration provinciale séparée. Les deux sont dues le 30 avril pour les salariés (15 juin pour les travailleurs autonomes).",
  },
  {
    q: "C'est quoi la différence entre l'ARC et Revenu Québec ?",
    r: "L'ARC (Agence du revenu du Canada) est l'organisme fédéral qui administre les impôts et prestations du gouvernement du Canada : crédit TPS/TVH, Allocation canadienne pour enfants, REER. Revenu Québec est l'organisme provincial qui administre les impôts et programmes du gouvernement du Québec : crédit de solidarité, allocation famille, TVQ. Vous devez vous conformer aux deux.",
  },
  {
    q: "Que se passe-t-il si je ne produis pas ma déclaration à temps ?",
    r: "Si vous avez un solde à payer, l'ARC impose une pénalité de 5% du solde dû, plus 1% par mois complet de retard (jusqu'à 12 mois). Revenu Québec impose la même pénalité de 5% + 1%/mois mais jusqu'à 20 mois. Si vous avez un remboursement, il n'y a pas de pénalité — mais vous attendrez plus longtemps pour recevoir votre argent.",
  },
  {
    q: "Puis-je faire mes impôts moi-même gratuitement ?",
    r: "Oui — plusieurs logiciels homologués sont gratuits pour les situations simples : Wealthsimple Impôt, H&R Block gratuit, TurboImpôt gratuit. Ces logiciels produisent les deux déclarations (fédérale T1 + provinciale TP-1) en même temps et les transmettent électroniquement via IMPÔTNET et ImpôtNet Québec. Des cliniques d'impôts communautaires gratuites existent aussi pour les revenus modestes.",
  },
  {
    q: "Quand vais-je recevoir mon remboursement d'impôts ?",
    r: "En déclarant en ligne avec dépôt direct : généralement 2 semaines pour le fédéral (ARC) et 2 à 4 semaines pour le provincial (Revenu Québec). En déclarant sur papier : comptez 8 à 12 semaines. Produire tôt (dès février) accélère le remboursement car le traitement est moins congestionné.",
  },
];

export default function ImpotsPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header style={{ background: DARK, position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: GOLD, textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/questionnaire" style={{ color: GOLD, fontSize: "13px", fontWeight: 600, textDecoration: "underline", opacity: 0.85 }}>
            Trouver mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Accueil</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Impôts</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet · Impôts Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Impôts au Québec en 2026 — Tout ce qu&apos;il faut savoir
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Deux déclarations obligatoires, dates limites, crédits avantageux et logiciels gratuits — tout pour produire vos impôts sereinement avant le 30 avril.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Alerte urgence */}
        <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "12px", padding: "12px 16px", marginBottom: "1.5rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>⚠️</span>
          <p style={{ fontSize: "13px", color: "#92400E", margin: 0, lineHeight: 1.6 }}>
            <strong>Date limite : 30 avril 2026.</strong>{" "}Si vous avez un solde à payer, des pénalités s&apos;appliquent dès le 1er mai. Même si vous attendez un remboursement, produire tôt accélère votre retour d&apos;impôt.
          </p>
        </div>

        {/* Qui doit produire */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            📋 Qui doit produire une déclaration ?
          </h2>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {quiDoitProduire.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>✓</span>
                <span style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deux déclarations */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          ARC vs Revenu Québec — deux déclarations obligatoires
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Le Québec est la <strong>seule province</strong>{" "}canadienne où vous devez produire deux déclarations distinctes chaque année. Voici la différence entre les deux.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Critère</th>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>🍁 Fédéral (ARC)</th>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>🔵 Provincial (Revenu Québec)</th>
              </tr>
            </thead>
            <tbody>
              {comparatifDeclarations.map((row, i) => (
                <tr key={row.critere} style={{ borderBottom: i < comparatifDeclarations.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600, color: "#44403C", fontSize: "12px" }}>{row.critere}</td>
                  <td style={{ padding: "10px 14px", color: "#1C1C1E", fontSize: "12px" }}>{row.federal}</td>
                  <td style={{ padding: "10px 14px", color: "#1C1C1E", fontSize: "12px" }}>{row.provincial}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Crédits avantageux */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Les crédits d&apos;impôt les plus avantageux pour les Québécois
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Ne les manquez pas — plusieurs sont remboursables, c&apos;est-à-dire que vous les recevez même si vous n&apos;avez pas payé d&apos;impôt.
        </p>
        <div className="flex flex-col gap-3 mb-10">
          {creditsAvantageux.map((credit) => (
            <Link key={credit.href} href={credit.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{credit.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{credit.nom}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{credit.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>→</span>
            </Link>
          ))}
        </div>

        {/* Ad */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
        </div>

        {/* Cards CTA sous-pages */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Guides impôts Québec 2026
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {[
            { href: "/impots/dates", emoji: "📅", titre: "Dates limites impôts 2026", desc: "30 avril, 15 juin, pénalités de retard — toutes les dates clés" },
            { href: "/impots/remboursement", emoji: "💰", titre: "Remboursement d'impôts Québec", desc: "Délais par méthode, suivi en ligne, crédits souvent oubliés" },
            { href: "/impots/logiciels", emoji: "💻", titre: "Meilleurs logiciels impôts gratuits", desc: "Wealthsimple, TurboImpôt, H&R Block — comparatif complet" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{l.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{l.titre}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{l.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>→</span>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Questions fréquentes
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "1rem 1.25rem" }}>
              <h3 style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "8px" }}>{faq.q}</h3>
              <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: 0 }}>{faq.r}</p>
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.r },
              })),
            }),
          }}
        />

        {/* CTA questionnaire */}
        <div style={{ background: DARK, borderRadius: "16px", padding: "1.5rem", textAlign: "center", marginBottom: "1rem" }}>
          <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Au-delà des impôts</p>
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.1rem", fontWeight: 800, marginBottom: "8px" }}>
            Trouvez toutes vos aides gouvernementales
          </p>
          <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", marginBottom: "16px", lineHeight: 1.6 }}>
            Crédits, subventions, allocations — 8 questions pour découvrir tout ce à quoi vous avez droit.
          </p>
          <Link href="/questionnaire" style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "14px", padding: "12px 28px", borderRadius: "12px", textDecoration: "none" }}>
            Trouver mes aides →
          </Link>
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif. Consultez un professionnel en fiscalité pour votre situation personnelle.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
