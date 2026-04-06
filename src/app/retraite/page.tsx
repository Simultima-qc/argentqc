import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planifier sa retraite au Québec — Guide 2026 | ArgentQC.ca",
  description:
    "Guide complet pour planifier sa retraite au Québec en 2026 : les 5 piliers (RRQ, RPC, REER, CELI, régime d'employeur), à quel âge prendre sa retraite et combien épargner.",
  keywords: [
    "retraite Québec",
    "planification retraite Québec 2026",
    "âge retraite Québec",
    "combien épargner retraite Québec",
    "RRQ REER CELI Québec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const piliers = [
  {
    nom: "Rente de retraite du Québec (RRQ)",
    type: "Obligatoire",
    typeColor: "#1D4ED8",
    typeBg: "#DBEAFE",
    emoji: "🏛️",
    desc: "Régime public obligatoire pour tous les travailleurs du Québec. Cotisations prélevées sur le salaire tout au long de la carrière. La rente est versée à partir de 60 ans (avec réduction) ou 65 ans.",
    montant: "~820 $/mois (max. à 65 ans)",
    href: "/retraite/rrq",
  },
  {
    nom: "Régime de pensions du Canada (RPC)",
    type: "Fédéral",
    typeColor: "#D97706",
    typeBg: "#FEF3C7",
    emoji: "🍁",
    desc: "L'équivalent fédéral de la RRQ. Les travailleurs du Québec cotisent UNIQUEMENT à la RRQ, pas au RPC — sauf pour la bonification RPC2 depuis 2024.",
    montant: "Non applicable pour la majorité des Québécois",
    href: null,
  },
  {
    nom: "Sécurité de la vieillesse (SV)",
    type: "Fédéral",
    typeColor: "#D97706",
    typeBg: "#FEF3C7",
    emoji: "🇨🇦",
    desc: "Pension mensuelle fédérale versée à toute personne de 65 ans et plus ayant résidé au Canada suffisamment longtemps. Pas besoin d'avoir travaillé.",
    montant: "~698 $/mois à 65 ans (2026)",
    href: null,
  },
  {
    nom: "REER (Régime enregistré d'épargne-retraite)",
    type: "Épargne privée",
    typeColor: "#065F46",
    typeBg: "#D1FAE5",
    emoji: "💰",
    desc: "Compte d'épargne à avantage fiscal. Vos cotisations réduisent votre revenu imposable. Les placements fructifient à l'abri de l'impôt jusqu'au retrait.",
    montant: "18% du revenu gagné (max. 32 490 $ en 2026)",
    href: "/retraite/reer",
  },
  {
    nom: "CELI (Compte d'épargne libre d'impôt)",
    type: "Épargne privée",
    typeColor: "#065F46",
    typeBg: "#D1FAE5",
    emoji: "📈",
    desc: "Épargne et investissements qui croissent sans impôt, et les retraits sont aussi sans impôt. Plus flexible que le REER — idéal pour compléter la retraite.",
    montant: "7 000 $/an en 2026 (cumulatif depuis 2009 : ~95 000 $)",
    href: "/retraite/celi",
  },
  {
    nom: "Régime de retraite d'employeur",
    type: "Optionnel",
    typeColor: "#7C3AED",
    typeBg: "#EDE9FE",
    emoji: "🏢",
    desc: "Régime à prestations déterminées (RPD) ou à cotisations déterminées (RCD). Offert par certains employeurs — secteur public, grandes entreprises. Très avantageux si disponible.",
    montant: "Variable selon le régime",
    href: null,
  },
];

const ageRetraite = [
  {
    age: "60 ans",
    emoji: "⏰",
    rrq: "Réduction permanente de 7,2%/an avant 65 ans (max. -36%)",
    sv: "Non disponible (commence à 65 ans)",
    avantages: "Liberté anticipée, profiter de sa santé",
    inconvenients: "Rente RRQ réduite pour toujours, moins d'années de cotisation REER/CELI",
    color: "#FEF3C7",
    borderColor: "#FCD34D",
  },
  {
    age: "65 ans",
    emoji: "✅",
    rrq: "Montant standard — aucune réduction ni bonification",
    sv: "Pension SV complète disponible",
    avantages: "Rente standard + SV, point d'équilibre optimal pour la majorité",
    inconvenients: "Devoir continuer à travailler 5 ans de plus qu'à 60 ans",
    color: "#D1FAE5",
    borderColor: "#34D399",
  },
  {
    age: "70 ans",
    emoji: "📈",
    rrq: "Bonification de 8,4%/an après 65 ans (+42% à 70 ans)",
    sv: "Bonification de 7,2%/an (+36% à 70 ans)",
    avantages: "Rente maximale, protection longévité, moins d'années à financer",
    inconvenients: "Moins d'années pour profiter de la retraite, dépend de la santé",
    color: "#EDE9FE",
    borderColor: "#8B5CF6",
  },
];

const faqs = [
  {
    q: "Combien faut-il épargner pour la retraite au Québec ?",
    r: "La règle du 70% suggère qu'à la retraite, vous aurez besoin d'environ 70% de votre revenu de travail pour maintenir votre style de vie. Pour un revenu de 60 000 $/an, visez 42 000 $/an à la retraite. En soustrayant la RRQ (~9 800 $/an) et la SV (~8 400 $/an), il faut générer environ 23 800 $/an de sources privées (REER, CELI, régime d'employeur). Avec un taux de retrait prudent de 4%, cela représente un capital d'environ 595 000 $.",
  },
  {
    q: "Est-ce que la RRQ et la SV suffisent pour vivre à la retraite au Québec ?",
    r: "En 2026, la RRQ maximale est d'environ 820 $/mois et la SV d'environ 698 $/mois — soit environ 1 518 $/mois (18 216 $/an) combinés. C'est insuffisant pour maintenir un style de vie confortable au Québec, mais le Supplément de revenu garanti (SRG) peut s'ajouter pour les personnes à faible revenu. L'épargne personnelle via REER et CELI reste essentielle.",
  },
  {
    q: "REER ou CELI — lequel prioriser pour la retraite ?",
    r: "Si votre revenu actuel est plus élevé que votre revenu prévu à la retraite, le REER est généralement plus avantageux (vous économisez de l'impôt maintenant, vous en payez moins à la retraite). Si votre revenu sera similaire, ou si vous voulez plus de flexibilité, le CELI est excellent. Idéalement, utilisez les deux selon vos droits disponibles.",
  },
  {
    q: "Puis-je recevoir la RRQ et continuer à travailler après 65 ans ?",
    r: "Oui. Depuis 2013, vous pouvez recevoir votre rente RRQ tout en continuant à travailler après 65 ans au Québec. Si vous continuez à cotiser après 65 ans (obligatoire si vous êtes employé), votre rente augmentera. Vous pouvez aussi choisir de cesser de cotiser à la RRQ après 65 ans si vous recevez déjà votre rente.",
  },
];

export default function RetraitePage() {
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
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Retraite</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet · Retraite Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Planifier sa retraite au Québec — Guide 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Les 5 piliers de la retraite québécoise, l&apos;impact du choix de l&apos;âge de retraite,
            combien épargner et comment combiner RRQ, SV, REER et CELI.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Ad */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2rem" }}>
          Publicité
        </div>

        {/* 5 piliers */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Les 5 piliers de la retraite québécoise
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {piliers.map((p) => (
            <div key={p.nom} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "10px" }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "4px" }}>
                    <h3 style={{ fontWeight: 800, fontSize: "14px", color: "#1C1C1E", margin: 0 }}>{p.nom}</h3>
                    <span style={{ background: p.typeBg, color: p.typeColor, fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px" }}>{p.type}</span>
                  </div>
                  <div style={{ fontSize: "12px", color: GREEN, fontWeight: 600 }}>{p.montant}</div>
                </div>
              </div>
              <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: "0 0 12px 0" }}>{p.desc}</p>
              {p.href && (
                <Link href={p.href} style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#F7F3EC", border: "1px solid #EDE9E0", color: "#1C1C1E", fontWeight: 700, fontSize: "12px", padding: "7px 14px", borderRadius: "8px", textDecoration: "none" }}>
                  Guide complet →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Règle du 70% */}
        <div style={{ background: DARK, borderRadius: "20px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.2rem", fontWeight: 800, marginBottom: "12px" }}>
            💡 La règle du 70% — combien épargner ?
          </h2>
          <p style={{ color: "rgba(240,235,224,0.7)", fontSize: "13px", lineHeight: 1.7, marginBottom: "1rem" }}>
            À la retraite, la plupart des dépenses diminuent (hypothèque payée, enfants autonomes, moins de transport). La règle dit qu&apos;il vous faut environ <strong style={{ color: GOLD }}>70% de votre revenu de travail</strong>{" "}pour maintenir votre style de vie.
          </p>
          <div style={{ background: "rgba(245,200,66,0.08)", border: "1px solid rgba(245,200,66,0.15)", borderRadius: "12px", padding: "1rem" }}>
            <p style={{ color: "#F0EBE0", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: GOLD }}>Exemple :</strong>{" "}Revenu de travail 65 000 $/an
              <br />→ Besoin à la retraite : <strong style={{ color: GOLD }}>45 500 $/an</strong>
              <br />→ RRQ (moy.) : ~9 800 $/an | SV : ~8 400 $/an
              <br />→ À générer par l&apos;épargne privée : <strong style={{ color: GOLD }}>~27 300 $/an</strong>
              <br />→ Capital requis (taux 4%) : <strong style={{ color: GOLD }}>~682 500 $</strong>
            </p>
          </div>
        </div>

        {/* Âge de retraite */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          À quel âge prendre sa retraite ? Impact sur la RRQ
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {ageRetraite.map((a) => (
            <div key={a.age} style={{ background: a.color, border: `1.5px solid ${a.borderColor}`, borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ fontSize: "1.4rem" }}>{a.emoji}</span>
                <h3 style={{ fontWeight: 800, fontSize: "16px", color: "#1C1C1E", margin: 0 }}>Retraite à {a.age}</h3>
              </div>
              <div className="grid grid-cols-1 gap-2" style={{ fontSize: "12px" }}>
                <div><span style={{ fontWeight: 700, color: "#44403C" }}>RRQ : </span><span style={{ color: "#44403C" }}>{a.rrq}</span></div>
                <div><span style={{ fontWeight: 700, color: "#44403C" }}>SV : </span><span style={{ color: "#44403C" }}>{a.sv}</span></div>
                <div style={{ marginTop: "4px" }}>
                  <span style={{ fontWeight: 700, color: "#065F46" }}>✅ Avantages : </span><span style={{ color: "#065F46" }}>{a.avantages}</span>
                </div>
                <div>
                  <span style={{ fontWeight: 700, color: "#991B1B" }}>⚠️ Inconvénients : </span><span style={{ color: "#991B1B" }}>{a.inconvenients}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards CTA */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Guides détaillés
        </h2>
        <div className="grid grid-cols-1 gap-3 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {[
            { href: "/retraite/reer", emoji: "💰", titre: "REER — Guide complet", desc: "Plafond 2026, économie d'impôt, REER vs CELI", color: DARK, titleColor: "#F0EBE0", descColor: "rgba(240,235,224,0.6)", ctaColor: GOLD },
            { href: "/retraite/celi", emoji: "📈", titre: "CELI — Tout comprendre", desc: "Droits de cotisation, placements, erreurs à éviter", color: "white", titleColor: "#1C1C1E", descColor: "#78716C", ctaColor: "#3B82F6" },
            { href: "/retraite/rrq", emoji: "🏛️", titre: "RRQ — Votre rente", desc: "Montants 2026, âge optimal, RRQ vs RPC", color: "white", titleColor: "#1C1C1E", descColor: "#78716C", ctaColor: "#3B82F6" },
          ].map((c) => (
            <Link key={c.href} href={c.href} style={{ display: "block", background: c.color, border: c.color === "white" ? "1px solid #EDE9E0" : "none", borderRadius: "16px", padding: "1.25rem", textDecoration: "none" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "8px" }}>{c.emoji}</div>
              <h3 style={{ fontFamily: "var(--font-playfair)", color: c.titleColor, fontSize: "1rem", fontWeight: 800, marginBottom: "6px" }}>{c.titre}</h3>
              <p style={{ color: c.descColor, fontSize: "12px", lineHeight: 1.6, marginBottom: "10px" }}>{c.desc}</p>
              <span style={{ color: c.ctaColor, fontWeight: 700, fontSize: "13px" }}>Lire le guide →</span>
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

        {/* Liens */}
        <div className="flex flex-col gap-3 mb-4">
          <Link href="/budget/calculateur" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.4rem" }}>📊</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Calculateur budget mensuel</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Intégrez vos cotisations REER et CELI à votre budget</div>
            </div>
            <span style={{ color: "#3B82F6" }}>→</span>
          </Link>
        </div>

        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginTop: "1.5rem" }}>
          Publicité
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif. Consultez un planificateur financier pour votre situation personnelle.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
