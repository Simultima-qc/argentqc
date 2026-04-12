import type { Metadata } from "next";
import Link from "next/link";
import {
  rrqCotisations2026,
  rrqMontantsAge2026,
  rrqVsRpc2026,
} from "@/data/finance-2026";

export const metadata: Metadata = {
  title: "RRQ — Comprendre votre rente de retraite au Québec 2026 | ArgentQC.ca",
  description:
    "Guide complet RRQ 2026 : fonctionnement, montants selon l'âge (60, 65, 70 ans), différence RRQ vs RPC, travailler après 65 ans et comment estimer votre rente.",
  keywords: [
    "RRQ Québec",
    "rente RRQ montant 2026",
    "âge RRQ Québec",
    "RRQ vs RPC",
    "Retraite Québec rente",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const montantsAge = rrqMontantsAge2026;
const rrqVsRpc = rrqVsRpc2026;
const cotisations = rrqCotisations2026;

const faqs = [
  {
    q: "Comment est calculée ma rente RRQ ?",
    r: "La rente RRQ est basée sur vos revenus cotisables tout au long de votre carrière. Le calcul tient compte des 40 meilleures années (en excluant les années de faible revenu), ajustées pour l'inflation. Plus vous avez cotisé longtemps et sur un revenu élevé, plus votre rente sera élevée. Pour obtenir votre estimation personnelle, créez un compte sur le site de Retraite Québec.",
  },
  {
    q: "Les Québécois cotisent-ils au RPC (Régime de pensions du Canada) ?",
    r: "La majorité des travailleurs du Québec cotisent UNIQUEMENT à la RRQ, pas au RPC de base. Cependant, depuis 2024, une bonification fédérale (RPC2) s'applique à tous les travailleurs canadiens, incluant les Québécois, sur les revenus entre 68 500 $ et 73 200 $. Cette bonification RPC2 génère une petite rente fédérale supplémentaire.",
  },
  {
    q: "Est-ce que la rente RRQ est imposable ?",
    r: "Oui. La rente RRQ est un revenu imposable, déclaré sur le T4A(P) et le Relevé 2. Elle s'ajoute à vos autres revenus (SV, FERR, travail si applicable) et est imposée selon votre taux marginal. Planifier le décaissement de toutes ses sources de revenus à la retraite est important pour minimiser l'impôt.",
  },
  {
    q: "Puis-je recevoir la RRQ si je vis à l'extérieur du Québec ou du Canada ?",
    r: "Oui. Si vous avez cotisé à la RRQ pendant votre carrière au Québec, vous avez droit à votre rente peu importe où vous résidez à la retraite — au Canada ou à l'étranger. Une retenue d'impôt à la source s'applique pour les non-résidents du Canada (généralement 25%, réduit par convention fiscale).",
  },
  {
    q: "Vaut-il mieux demander la RRQ à 60, 65 ou 70 ans ?",
    r: "Cela dépend principalement de votre espérance de vie. Le 'point d'équilibre' pour commencer à 65 ans vs 60 ans est vers 73-75 ans — si vous vivez plus longtemps que ça, 65 ans est plus avantageux. Pour 70 ans vs 65 ans, le point d'équilibre est vers 78-80 ans. Les personnes en bonne santé avec des antécédents familiaux de longévité ont intérêt à attendre. La planification avec un conseiller financier est recommandée.",
  },
];

export default function RrqPage() {
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

      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Accueil</Link>
            {" › "}
            <Link href="/retraite" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Retraite</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>RRQ</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet · RRQ Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            RRQ — Comprendre votre rente de retraite au Québec
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Montants 2026 selon l&apos;âge choisi (60, 65 ou 70 ans), différence RRQ vs RPC,
            cotisations et comment estimer votre rente personnelle.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Montants de la RRQ selon l&apos;âge choisi (2026)
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {montantsAge.map((a) => (
            <div key={a.age} style={{ background: a.color, border: `1.5px solid ${a.border}`, borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.4rem" }}>{a.emoji}</span>
                  <h3 style={{ fontWeight: 800, fontSize: "16px", color: a.textColor, margin: 0 }}>Début à {a.age}</h3>
                </div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: a.textColor, background: "rgba(255,255,255,0.5)", padding: "3px 8px", borderRadius: "100px" }}>{a.reduction}</span>
              </div>
              <div className="grid grid-cols-2 gap-3" style={{ marginBottom: "8px" }}>
                <div style={{ background: "rgba(255,255,255,0.6)", borderRadius: "10px", padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: "10px", color: a.textColor, opacity: 0.7, marginBottom: "3px" }}>Montant moyen</div>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", color: a.textColor }}>{a.montantMoyen}</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.6)", borderRadius: "10px", padding: "10px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: "10px", color: a.textColor, opacity: 0.7, marginBottom: "3px" }}>Maximum</div>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", color: a.textColor }}>{a.montantMax}</div>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: a.textColor, margin: 0, opacity: 0.8 }}>{a.reductionDetail}</p>
            </div>
          ))}
        </div>

        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Aspect</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>RRQ (Québec)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>RPC (Canada)</th>
              </tr>
            </thead>
            <tbody>
              {rrqVsRpc.map((r, i) => (
                <tr key={r.aspect} style={{ borderBottom: i < rrqVsRpc.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600, color: "#44403C", fontSize: "12px" }}>{r.aspect}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#1C1C1E", fontSize: "12px" }}>{r.rrq}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#1C1C1E", fontSize: "12px" }}>{r.rpc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 mb-10">
          {cotisations.map((c) => (
            <div key={c.salaire} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <span style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Salaire {c.salaire}</span>
                <span style={{ background: "#D1FAE5", color: "#065F46", fontSize: "12px", fontWeight: 700, padding: "3px 8px", borderRadius: "100px" }}>{c.renteEst}</span>
              </div>
              <div style={{ fontSize: "12px", color: "#78716C" }}>
                Cotisation employé : <strong>{c.cotEmpl}/an</strong> · Total (avec employeur) : <strong>{c.cotTot}/an</strong>
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
