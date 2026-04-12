import type { Metadata } from "next";
import Link from "next/link";
import {
  taxCalendrier2026,
  taxDatesLimites2026,
  taxPenalites2026,
} from "@/data/finance-2026";

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

const datesLimites = taxDatesLimites2026;
const penalites = taxPenalites2026;
const calendrier = taxCalendrier2026;

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
    r: "Non — si vous attendez un remboursement, il n'y a techniquement aucune pénalité de retard. Vous risquez seulement de recevoir votre remboursement plus tard.",
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

      <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Tableau des dates limites 2026
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Situation</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>ARC (fédéral)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Revenu Québec</th>
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

        <div className="grid grid-cols-1 gap-4 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {penalites.map((p) => (
            <div key={p.organisme} style={{ background: p.couleur, border: `1px solid ${p.couleur}`, borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ fontWeight: 800, fontSize: "14px", color: p.couleurTexte, marginBottom: "12px" }}>{p.organisme}</div>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li style={{ fontSize: "12px", color: p.couleurTexte, lineHeight: 1.6 }}><strong>Pénalité initiale :</strong> {p.penaliteBase}</li>
                <li style={{ fontSize: "12px", color: p.couleurTexte, lineHeight: 1.6 }}><strong>Pénalité mensuelle :</strong> {p.penaliteMensuelle}</li>
                <li style={{ fontSize: "12px", color: p.couleurTexte, lineHeight: 1.6 }}><strong>Récidive :</strong> {p.recidive}</li>
                <li style={{ fontSize: "12px", color: p.couleurTexte, lineHeight: 1.6 }}><strong>Intérêts :</strong> {p.interets}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 mb-10">
          {calendrier.map((item, i) => (
            <div key={i} style={{ background: "white", border: item.urgent ? "1px solid #FCD34D" : "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
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

        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "1rem 1.25rem" }}>
              <h3 style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "8px" }}>{faq.q}</h3>
              <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: 0 }}>{faq.r}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
