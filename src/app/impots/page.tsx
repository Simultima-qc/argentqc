import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ImpÃ´ts au QuÃ©bec en 2026 â€” Tout ce qu'il faut savoir | ArgentQC.ca",
  description:
    "DÃ©claration d'impÃ´ts au QuÃ©bec 2026 : deux dÃ©clarations obligatoires (ARC + Revenu QuÃ©bec), dates limites, crÃ©dits d'impÃ´t avantageux et logiciels gratuits.",
  keywords: [
    "impÃ´ts QuÃ©bec 2026",
    "dÃ©claration impÃ´ts QuÃ©bec",
    "comment faire ses impÃ´ts QuÃ©bec",
    "ARC Revenu QuÃ©bec dÃ©claration",
    "crÃ©dits impÃ´t QuÃ©bec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const comparatifDeclarations = [
  { critere: "Organisme", federal: "Agence du revenu du Canada (ARC)", provincial: "Revenu QuÃ©bec" },
  { critere: "Formulaire principal", federal: "T1 â€” DÃ©claration de revenus et de prestations", provincial: "TP-1 â€” DÃ©claration de revenus" },
  { critere: "Date limite (salariÃ©)", federal: "30 avril 2026", provincial: "30 avril 2026" },
  { critere: "Date limite (travailleur autonome)", federal: "15 juin 2026", provincial: "15 juin 2026" },
  { critere: "DÃ©pÃ´t en ligne", federal: "IMPÃ”TNET (ARC)", provincial: "ImpÃ´tNet QuÃ©bec" },
  { critere: "Mon dossier en ligne", federal: "Mon dossier ARC (canada.ca)", provincial: "Mon dossier Revenu QuÃ©bec" },
  { critere: "PÃ©nalitÃ© retard", federal: "5% + 1%/mois (max. 12 mois)", provincial: "5% + 1%/mois (max. 20 mois)" },
];

const creditsAvantageux = [
  { nom: "CrÃ©dit de solidaritÃ©", desc: "Jusqu'Ã  1 194 $/an â€” logement + TVQ + rÃ©gion", href: "/credit-solidarite-quebec", emoji: "ðŸ " },
  { nom: "CrÃ©dit d'impÃ´t pour frais mÃ©dicaux", desc: "Lunettes, dentiste, mÃ©dicaments â€” rÃ©cupÃ©rez une partie de vos dÃ©penses", href: "/credit-impot-frais-medicaux-quebec", emoji: "ðŸ’Š" },
  { nom: "CrÃ©dit d'impÃ´t pour aidants naturels", desc: "Pour les personnes qui prennent soin d'un proche", href: "/credit-impot-quebec", emoji: "ðŸ¤" },
  { nom: "CrÃ©dit TPS/TVH fÃ©dÃ©ral", desc: "VersÃ© automatiquement 4 fois par an selon votre revenu", href: "/questionnaire", emoji: "ðŸ’³" },
  { nom: "Allocation canadienne pour enfants", desc: "Jusqu'Ã  7 787 $ par enfant de moins de 6 ans en 2026", href: "/allocation-enfant-quebec", emoji: "ðŸ‘¶" },
  { nom: "Cotisation REER", desc: "RÃ©duisez votre revenu imposable â€” Ã©conomie d'impÃ´t immÃ©diate", href: "/retraite/reer", emoji: "ðŸ“ˆ" },
];

const quiDoitProduire = [
  "Vous avez gagnÃ© un revenu au QuÃ©bec ou au Canada en 2025",
  "Vous avez vendu une propriÃ©tÃ© ou rÃ©alisÃ© un gain en capital",
  "Vous avez reÃ§u des prestations d'assurance-emploi ou de REER",
  "Vous souhaitez recevoir des crÃ©dits d'impÃ´t remboursables (solidaritÃ©, TPS, allocation famille)",
  "Vous avez un solde d'impÃ´t dÃ» (mÃªme sans revenu significatif)",
  "Vous avez des droits de cotisation REER inutilisÃ©s Ã  confirmer",
];

const faqs = [
  {
    q: "Dois-je produire deux dÃ©clarations au QuÃ©bec ?",
    r: "Oui â€” les rÃ©sidents du QuÃ©bec doivent produire deux dÃ©clarations distinctes chaque annÃ©e : une dÃ©claration fÃ©dÃ©rale Ã  l'Agence du revenu du Canada (ARC) et une dÃ©claration provinciale Ã  Revenu QuÃ©bec. C'est la seule province canadienne Ã  exiger une dÃ©claration provinciale sÃ©parÃ©e. Les deux sont dues le 30 avril pour les salariÃ©s (15 juin pour les travailleurs autonomes).",
  },
  {
    q: "C'est quoi la diffÃ©rence entre l'ARC et Revenu QuÃ©bec ?",
    r: "L'ARC (Agence du revenu du Canada) est l'organisme fÃ©dÃ©ral qui administre les impÃ´ts et prestations du gouvernement du Canada : crÃ©dit TPS/TVH, Allocation canadienne pour enfants, REER. Revenu QuÃ©bec est l'organisme provincial qui administre les impÃ´ts et programmes du gouvernement du QuÃ©bec : crÃ©dit de solidaritÃ©, allocation famille, TVQ. Vous devez vous conformer aux deux.",
  },
  {
    q: "Que se passe-t-il si je ne produis pas ma dÃ©claration Ã  temps ?",
    r: "Si vous avez un solde Ã  payer, l'ARC impose une pÃ©nalitÃ© de 5% du solde dÃ», plus 1% par mois complet de retard (jusqu'Ã  12 mois). Revenu QuÃ©bec impose la mÃªme pÃ©nalitÃ© de 5% + 1%/mois mais jusqu'Ã  20 mois. Si vous avez un remboursement, il n'y a pas de pÃ©nalitÃ© â€” mais vous attendrez plus longtemps pour recevoir votre argent.",
  },
  {
    q: "Puis-je faire mes impÃ´ts moi-mÃªme gratuitement ?",
    r: "Oui â€” plusieurs logiciels homologuÃ©s sont gratuits pour les situations simples : Wealthsimple ImpÃ´t, H&R Block gratuit, TurboImpÃ´t gratuit. Ces logiciels produisent les deux dÃ©clarations (fÃ©dÃ©rale T1 + provinciale TP-1) en mÃªme temps et les transmettent Ã©lectroniquement via IMPÃ”TNET et ImpÃ´tNet QuÃ©bec. Des cliniques d'impÃ´ts communautaires gratuites existent aussi pour les revenus modestes.",
  },
  {
    q: "Quand vais-je recevoir mon remboursement d'impÃ´ts ?",
    r: "En dÃ©clarant en ligne avec dÃ©pÃ´t direct : gÃ©nÃ©ralement 2 semaines pour le fÃ©dÃ©ral (ARC) et 2 Ã  4 semaines pour le provincial (Revenu QuÃ©bec). En dÃ©clarant sur papier : comptez 8 Ã  12 semaines. Produire tÃ´t (dÃ¨s fÃ©vrier) accÃ©lÃ¨re le remboursement car le traitement est moins congestionnÃ©.",
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
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>ImpÃ´ts</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet Â· ImpÃ´ts QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            ImpÃ´ts au QuÃ©bec en 2026 â€” Tout ce qu&apos;il faut savoir
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Deux dÃ©clarations obligatoires, dates limites, crÃ©dits avantageux et logiciels gratuits â€” tout pour produire vos impÃ´ts sereinement avant le 30 avril.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Alerte urgence */}
        <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "12px", padding: "12px 16px", marginBottom: "1.5rem", display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>âš ï¸</span>
          <p style={{ fontSize: "13px", color: "#92400E", margin: 0, lineHeight: 1.6 }}>
            <strong>Date limite : 30 avril 2026.</strong>{" "}Si vous avez un solde Ã  payer, des pÃ©nalitÃ©s s&apos;appliquent dÃ¨s le 1er mai. MÃªme si vous attendez un remboursement, produire tÃ´t accÃ©lÃ¨re votre retour d&apos;impÃ´t.
          </p>
        </div>

        {/* Qui doit produire */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            ðŸ“‹ Qui doit produire une dÃ©claration ?
          </h2>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {quiDoitProduire.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>âœ“</span>
                <span style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deux dÃ©clarations */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          ARC vs Revenu QuÃ©bec â€” deux dÃ©clarations obligatoires
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Le QuÃ©bec est la <strong>seule province</strong>{" "}canadienne oÃ¹ vous devez produire deux dÃ©clarations distinctes chaque annÃ©e. Voici la diffÃ©rence entre les deux.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>CritÃ¨re</th>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>ðŸ FÃ©dÃ©ral (ARC)</th>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>ðŸ”µ Provincial (Revenu QuÃ©bec)</th>
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

        {/* CrÃ©dits avantageux */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Les crÃ©dits d&apos;impÃ´t les plus avantageux pour les QuÃ©bÃ©cois
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Ne les manquez pas â€” plusieurs sont remboursables, c&apos;est-Ã -dire que vous les recevez mÃªme si vous n&apos;avez pas payÃ© d&apos;impÃ´t.
        </p>
        <div className="flex flex-col gap-3 mb-10">
          {creditsAvantageux.map((credit) => (
            <Link key={credit.href} href={credit.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{credit.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{credit.nom}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{credit.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>â†’</span>
            </Link>
          ))}
        </div>

        {/* Ad */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Cards CTA sous-pages */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Guides impÃ´ts QuÃ©bec 2026
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {[
            { href: "/impots/dates", emoji: "ðŸ“…", titre: "Dates limites impÃ´ts 2026", desc: "30 avril, 15 juin, pÃ©nalitÃ©s de retard â€” toutes les dates clÃ©s" },
            { href: "/impots/remboursement", emoji: "ðŸ’°", titre: "Remboursement d'impÃ´ts QuÃ©bec", desc: "DÃ©lais par mÃ©thode, suivi en ligne, crÃ©dits souvent oubliÃ©s" },
            { href: "/impots/logiciels", emoji: "ðŸ’»", titre: "Meilleurs logiciels impÃ´ts gratuits", desc: "Wealthsimple, TurboImpÃ´t, H&R Block â€” comparatif complet" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{l.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{l.titre}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{l.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>â†’</span>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Questions frÃ©quentes
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
          <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Au-delÃ  des impÃ´ts</p>
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.1rem", fontWeight: 800, marginBottom: "8px" }}>
            Trouvez toutes vos aides gouvernementales
          </p>
          <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", marginBottom: "16px", lineHeight: 1.6 }}>
            CrÃ©dits, subventions, allocations â€” 8 questions pour dÃ©couvrir tout ce Ã  quoi vous avez droit.
          </p>
          <Link href="/questionnaire" style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "14px", padding: "12px 28px", borderRadius: "12px", textDecoration: "none" }}>
            Trouver mes aides â†’
          </Link>
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif. Consultez un professionnel en fiscalitÃ© pour votre situation personnelle.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
