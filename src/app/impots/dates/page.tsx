import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Date limite impôts Québec 2026 — 30 avril et 15 juin | ArgentQC.ca",
  description:
    "Dates limites pour produire vos impôts au Québec en 2026 : 30 avril pour les salariés, 15 juin pour les travailleurs autonomes. Pénalités de retard et comment obtenir un délai.",
  keywords: [
    "date limite impôts Québec 2026",
    "date limite déclaration impôts Québec",
    "30 avril impôts Canada",
    "15 juin travailleur autonome impôts",
    "pénalité retard impôts ARC",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const datesLimites = [
  {
    situation: "Particulier salarié",
    federal: "30 avril 2026",
    provincial: "30 avril 2026",
    highlight: true,
  },
  {
    situation: "Travailleur autonome (ou conjoint autonome)",
    federal: "15 juin 2026",
    provincial: "15 juin 2026",
    highlight: false,
  },
  {
    situation: "Paiement du solde dû",
    federal: "30 avril 2026",
    provincial: "1er mai 2026",
    highlight: true,
  },
  {
    situation: "Personne décédée (avant novembre 2025)",
    federal: "30 avril 2026",
    provincial: "30 avril 2026",
    highlight: false,
  },
  {
    situation: "Personne décédée (nov.–déc. 2025)",
    federal: "6 mois après le décès",
    provincial: "6 mois après le décès",
    highlight: false,
  },
  {
    situation: "Fiducie testamentaire",
    federal: "90 jours après la fin d'année",
    provincial: "90 jours après la fin d'année",
    highlight: false,
  },
];

const penalites = [
  {
    organisme: "ARC (fédéral)",
    emoji: "🍁",
    penaliteBase: "5% du solde dû",
    penaliteMensuelle: "+ 1% par mois complet (max. 12 mois)",
    recidive: "10% si récidive dans les 3 ans",
    interets: "Intérêts composés quotidiennement au taux prescrit (~8%)",
    couleur: "#DBEAFE",
    couleurTexte: "#1E40AF",
  },
  {
    organisme: "Revenu Québec (provincial)",
    emoji: "🔵",
    penaliteBase: "5% du solde dû",
    penaliteMensuelle: "+ 1% par mois complet (max. 20 mois)",
    recidive: "10% si récidive dans les 3 ans",
    interets: "Intérêts composés quotidiennement au taux prescrit",
    couleur: "#D1FAE5",
    couleurTexte: "#065F46",
  },
];

const calendrier = [
  { date: "1er mars 2026", evenement: "Date limite cotisation REER (pour l'année fiscale 2025)", note: "Déjà passée — gardez en tête pour 2027", urgent: false },
  { date: "Fin février 2026", evenement: "Réception des feuillets T4/RL-1 de votre employeur", note: "Vérifiez que vous avez bien tout reçu avant de produire", urgent: false },
  { date: "Dès mars 2026", evenement: "Ouverture du service IMPÔTNET (ARC) et ImpôtNet Québec", note: "Produisez tôt pour recevoir votre remboursement plus vite", urgent: false },
  { date: "30 avril 2026", evenement: "Date limite — salariés et paiement du solde dû", note: "Pénalités automatiques dès le 1er mai si solde non payé", urgent: true },
  { date: "15 juin 2026", evenement: "Date limite — travailleurs autonomes", note: "Le solde dû reste payable au 30 avril malgré cette extension", urgent: true },
];

const faqs = [
  {
    q: "La date limite du 30 avril s'applique-t-elle aussi au Québec ?",
    r: "Oui — la date limite du 30 avril 2026 s'applique aux deux déclarations : fédérale (ARC) et provinciale (Revenu Québec). Si le 30 avril tombe un samedi ou dimanche, la date est reportée au prochain jour ouvrable. En 2026, le 30 avril est un jeudi — la date limite est donc bien le 30 avril pour les deux organismes.",
  },
  {
    q: "Est-ce que je dois payer mon solde même si j'ai jusqu'au 15 juin (travailleur autonome) ?",
    r: "Non — l'extension du 15 juin concerne uniquement la production de la déclaration, pas le paiement. Si vous avez un solde à payer, il reste dû au 30 avril pour l'ARC et au 1er mai pour Revenu Québec. Des intérêts s'accumulent sur le solde non payé dès le lendemain de la date limite de paiement.",
  },
  {
    q: "Comment obtenir un délai supplémentaire pour produire ma déclaration ?",
    r: "L'ARC accorde des délais dans certaines situations exceptionnelles (maladie grave, catastrophe naturelle, décès d'un proche). Vous devez soumettre une demande en ligne via Mon dossier ARC ou par courrier. Revenu Québec peut également accorder des délais sur demande motivée. Ces délais ne s'appliquent pas au paiement du solde dû — les intérêts continuent de courir.",
  },
  {
    q: "Que se passe-t-il si j'attends un remboursement — y a-t-il une pénalité de retard ?",
    r: "Non — si vous attendez un remboursement, il n'y a techniquement aucune pénalité de retard. Vous risquez seulement de recevoir votre remboursement plus tard (car les logiciels fiscaux et l'ARC traitent d'abord les déclarations reçues en premier). Il n'y a aucune raison d'attendre si vous êtes en situation de remboursement.",
  },
  {
    q: "La date limite est-elle différente si j'ai des revenus de placement ?",
    r: "Non — les revenus de placement (intérêts, dividendes, gains en capital) ne modifient pas la date limite de production. Elle reste le 30 avril pour les particuliers. C'est uniquement le revenu d'un travail autonome ou d'une entreprise individuelle qui donne accès au délai du 15 juin.",
  },
];

export default function DateImpotsPage() {
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
            <Link href="/impots" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Impôts</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Dates limites</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Urgent · Date limite 30 avril 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Dates limites pour produire vos impôts au Québec en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            30 avril pour les salariés, 15 juin pour les travailleurs autonomes. Les pénalités s&apos;appliquent automatiquement au lendemain de la date limite.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Tableau dates */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Tableau des dates limites 2026
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Situation</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>🍁 ARC (fédéral)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>🔵 Revenu Québec</th>
              </tr>
            </thead>
            <tbody>
              {datesLimites.map((row, i) => (
                <tr key={row.situation} style={{ borderBottom: i < datesLimites.length - 1 ? "1px solid #F0EBE0" : "none", background: row.highlight ? "#FFFBEB" : "white" }}>
                  <td style={{ padding: "10px 14px", fontWeight: row.highlight ? 700 : 500, color: "#1C1C1E", fontSize: "12px" }}>{row.situation}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, color: row.highlight ? "#B45309" : "#44403C", fontSize: "12px" }}>{row.federal}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, color: row.highlight ? "#B45309" : "#44403C", fontSize: "12px" }}>{row.provincial}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ad après tableau */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
        </div>

        {/* Pénalités */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Pénalités de retard — ce que ça coûte vraiment
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {penalites.map((p) => (
            <div key={p.organisme} style={{ background: p.couleur, border: `1px solid ${p.couleur}`, borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ fontWeight: 800, fontSize: "14px", color: p.couleurTexte, marginBottom: "12px" }}>{p.emoji}{" "}{p.organisme}</div>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li style={{ fontSize: "12px", color: p.couleurTexte, lineHeight: 1.6 }}>
                  <strong>Pénalité initiale :</strong>{" "}{p.penaliteBase}
                </li>
                <li style={{ fontSize: "12px", color: p.couleurTexte, lineHeight: 1.6 }}>
                  <strong>Pénalité mensuelle :</strong>{" "}{p.penaliteMensuelle}
                </li>
                <li style={{ fontSize: "12px", color: p.couleurTexte, lineHeight: 1.6 }}>
                  <strong>Récidive :</strong>{" "}{p.recidive}
                </li>
                <li style={{ fontSize: "12px", color: p.couleurTexte, lineHeight: 1.6 }}>
                  <strong>Intérêts :</strong>{" "}{p.interets}
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Exemple chiffré */}
        <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "14px", padding: "1.25rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontWeight: 800, fontSize: "14px", color: "#991B1B", marginBottom: "10px" }}>📊 Exemple concret : 2 000 $ de solde dû, 3 mois de retard</h3>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
            <li style={{ fontSize: "13px", color: "#7F1D1D", lineHeight: 1.6 }}>Pénalité initiale ARC : <strong>5% × 2 000 $ = 100 $</strong></li>
            <li style={{ fontSize: "13px", color: "#7F1D1D", lineHeight: 1.6 }}>Pénalité mensuelle ARC : <strong>3 × 1% × 2 000 $ = 60 $</strong></li>
            <li style={{ fontSize: "13px", color: "#7F1D1D", lineHeight: 1.6 }}>Intérêts (~8%/an, 3 mois) : <strong>~40 $</strong></li>
            <li style={{ fontSize: "13px", color: "#7F1D1D", lineHeight: 1.6, fontWeight: 700, borderTop: "1px solid #FECACA", paddingTop: "6px", marginTop: "4px" }}>
              Total pénalités fédérales : ~200 $ (+ pénalités Revenu Québec similaires)
            </li>
          </ul>
        </div>

        {/* Calendrier clé */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Calendrier fiscal — saison 2026
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {calendrier.map((item, i) => (
            <div key={i} style={{ background: "white", border: item.urgent ? `1px solid #FCD34D` : "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ background: item.urgent ? "#FEF3C7" : PARCH, border: `1px solid ${item.urgent ? "#FCD34D" : "#EDE9E0"}`, borderRadius: "8px", padding: "4px 10px", fontSize: "11px", fontWeight: 700, color: item.urgent ? "#B45309" : "#78716C", whiteSpace: "nowrap" }}>
                  {item.date}
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "2px" }}>{item.evenement}</div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.5, margin: 0 }}>{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comment obtenir un délai */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            Comment obtenir un délai ?
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, marginBottom: "12px" }}>
            L&apos;ARC et Revenu Québec peuvent accorder des délais dans des <strong>circonstances exceptionnelles</strong>{" "}(maladie grave documentée, catastrophe naturelle, décès immédiat). La demande doit être faite avant ou peu après la date limite.
          </p>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>→</span>
              <span style={{ fontSize: "13px", color: "#44403C" }}>
                <strong>ARC :</strong>{" "}via Mon dossier ARC (canada.ca) ou en appelant le 1-800-959-8281
              </span>
            </li>
            <li style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>→</span>
              <span style={{ fontSize: "13px", color: "#44403C" }}>
                <strong>Revenu Québec :</strong>{" "}via Mon dossier Revenu Québec ou en appelant le 1-800-267-6299
              </span>
            </li>
          </ul>
          <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "10px", padding: "10px 14px", marginTop: "12px" }}>
            <p style={{ fontSize: "12px", color: "#92400E", margin: 0, lineHeight: 1.6 }}>
              ⚠️ <strong>Important :</strong>{" "}un délai pour produire ne reporte pas la date de paiement du solde dû. Les intérêts continuent de courir sur le solde impayé.
            </p>
          </div>
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

        {/* CTAs */}
        <div className="flex flex-col gap-3 mb-4">
          {[
            { href: "/impots/logiciels", emoji: "💻", titre: "Choisir un logiciel d'impôt gratuit", desc: "Wealthsimple, TurboImpôt, H&R Block — comparatif 2026" },
            { href: "/impots/remboursement", emoji: "💰", titre: "Quand vais-je recevoir mon remboursement ?", desc: "Délais par méthode et comment suivre votre dossier" },
            { href: "/impots", emoji: "📋", titre: "Guide impôts Québec 2026", desc: "Tout ce qu'il faut savoir sur vos deux déclarations" },
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
