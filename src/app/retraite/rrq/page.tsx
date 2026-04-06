import type { Metadata } from "next";
import Link from "next/link";

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
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const montantsAge = [
  {
    age: "60 ans",
    montantMoyen: "~490 $/mois",
    montantMax: "~574 $/mois",
    reduction: "-36% vs 65 ans",
    reductionDetail: "7,2%/an × 5 ans = 36% de réduction permanente",
    emoji: "⏰",
    color: "#FEF3C7",
    border: "#FCD34D",
    textColor: "#78350F",
  },
  {
    age: "65 ans",
    montantMoyen: "~766 $/mois",
    montantMax: "~897 $/mois",
    reduction: "Montant de référence",
    reductionDetail: "Aucune réduction ni bonification — montant standard",
    emoji: "✅",
    color: "#ECFDF5",
    border: "#34D399",
    textColor: "#065F46",
  },
  {
    age: "70 ans",
    montantMoyen: "~1 087 $/mois",
    montantMax: "~1 273 $/mois",
    reduction: "+42% vs 65 ans",
    reductionDetail: "8,4%/an × 5 ans = 42% de bonification permanente",
    emoji: "📈",
    color: "#EDE9FE",
    border: "#8B5CF6",
    textColor: "#5B21B6",
  },
];

const rrqVsRpc = [
  { aspect: "Qui y cotise ?", rrq: "Tous les travailleurs du Québec", rpc: "Travailleurs hors Québec (et bonification RPC2 pour QC depuis 2024)" },
  { aspect: "Taux de cotisation 2026", rrq: "5,9% employé + 5,9% employeur (jusqu'à 68 500 $)", rpc: "5,95% (base) + 4% (bonification) — hors Québec" },
  { aspect: "Âge de début", rrq: "60 à 70 ans au choix", rpc: "60 à 70 ans au choix" },
  { aspect: "Montant maximum 2026", rrq: "~897 $/mois à 65 ans", rpc: "~1 364 $/mois à 65 ans (avec bonification)" },
  { aspect: "Prestation de décès", rrq: "2 500 $ versés à la succession", rpc: "2 500 $ versés à la succession" },
  { aspect: "Rente de conjoint survivant", rrq: "Oui — selon revenu et âge", rpc: "Oui — selon revenu et âge" },
];

const cotisations = [
  { salaire: "30 000 $", cotEmpl: "~1 714 $", cotTot: "~3 428 $", renteEst: "~550 $/mois à 65 ans" },
  { salaire: "50 000 $", cotEmpl: "~2 857 $", cotTot: "~5 714 $", renteEst: "~700 $/mois à 65 ans" },
  { salaire: "68 500 $+", cotEmpl: "~3 891 $", cotTot: "~7 782 $", renteEst: "~897 $/mois à 65 ans (max)" },
];

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

      {/* Hero */}
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

        {/* C'est quoi la RRQ */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            🏛️ C&apos;est quoi la RRQ ?
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7 }}>
            La Rente de retraite du Québec (RRQ) est un régime public obligatoire géré par <strong>Retraite Québec</strong>.
            Tout travailleur au Québec y cotise automatiquement, et reçoit en retour une rente mensuelle à la retraite.
            C&apos;est l&apos;équivalent québécois du RPC (Régime de pensions du Canada) dans les autres provinces — mais distinct.
          </p>
          <div className="grid grid-cols-3 gap-3" style={{ marginTop: "1rem", textAlign: "center" }}>
            {[
              { val: "68 500 $", label: "Salaire cotisable max. 2026" },
              { val: "5,9%", label: "Taux de cotisation (employé)" },
              { val: "40 ans", label: "Meilleures années retenues" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#F7F3EC", borderRadius: "10px", padding: "10px 8px" }}>
                <div style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "1.1rem", color: DARK }}>{s.val}</div>
                <div style={{ fontSize: "10px", color: "#78716C", marginTop: "3px", lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Montants selon l'âge */}
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

        {/* Estimateur lien */}
        <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "14px", padding: "1.1rem", marginBottom: "2rem", display: "flex", gap: "12px", alignItems: "center" }}>
          <span style={{ fontSize: "1.3rem" }}>🖥️</span>
          <div>
            <p style={{ fontSize: "13px", color: "#1E40AF", margin: 0, lineHeight: 1.6 }}>
              <strong>Estimez votre rente personnelle</strong>{" "}sur le site officiel de Retraite Québec (compte Mon dossier requis).{" "}
              <a href="https://www.retraitequebec.gouv.qc.ca/" target="_blank" rel="noopener noreferrer" style={{ color: "#1D4ED8", fontWeight: 700 }}>
                retraitequebec.gouv.qc.ca ↗
              </a>
            </p>
          </div>
        </div>

        {/* RRQ vs RPC */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          RRQ vs RPC — Quelle est la différence ?
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Aspect</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>🏛️ RRQ (Québec)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>🍁 RPC (Canada)</th>
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

        {/* Ad */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
        </div>

        {/* Cotisations */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Cotisations annuelles et rente estimée
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", marginBottom: "1.25rem" }}>
          Cotisations 2026 pour un salarié (l&apos;employeur double le montant). Les estimations de rente supposent une carrière complète à ce salaire.
        </p>
        <div className="flex flex-col gap-3 mb-10">
          {cotisations.map((c) => (
            <div key={c.salaire} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <span style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Salaire {c.salaire}</span>
                <span style={{ background: "#D1FAE5", color: "#065F46", fontSize: "12px", fontWeight: 700, padding: "3px 8px", borderRadius: "100px" }}>{c.renteEst}</span>
              </div>
              <div style={{ fontSize: "12px", color: "#78716C" }}>
                Cotisation employé : <strong>{c.cotEmpl}/an</strong>{" "}· Total (avec employeur) : <strong>{c.cotTot}/an</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Travailler après 65 */}
        <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "16px", padding: "1.25rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "#065F46", marginBottom: "12px" }}>
            💼 RRQ et travail simultané après 65 ans
          </h2>
          <p style={{ fontSize: "13px", color: "#047857", lineHeight: 1.7, margin: 0 }}>
            Depuis 2013, il est possible de <strong>recevoir la rente RRQ et de continuer à travailler</strong>{" "}après 65 ans au Québec.
            Si vous continuez à cotiser à la RRQ après 65 ans (obligatoire si vous êtes salarié), votre rente augmentera grâce
            à une <strong>rente supplémentaire annuelle</strong>{" "}calculée sur vos cotisations post-65 ans.
            Vous pouvez aussi choisir de cesser de cotiser si vous recevez déjà votre rente (formulaire auprès de Retraite Québec).
          </p>
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
            { href: "/retraite/reer", emoji: "💰", titre: "REER — Guide complet", desc: "Compléter la RRQ avec l'épargne privée" },
            { href: "/retraite/celi", emoji: "📈", titre: "CELI — Guide complet", desc: "Retraits sans impôt pour compléter la RRQ et la SV" },
            { href: "/retraite", emoji: "🏖️", titre: "Guide retraite Québec", desc: "Les 5 piliers et combien épargner selon votre profil" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{l.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{l.titre}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E" }}>{l.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>→</span>
            </Link>
          ))}
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif. Consultez Retraite Québec pour votre estimation personnelle officielle.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
