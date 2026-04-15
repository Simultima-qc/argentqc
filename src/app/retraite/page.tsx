import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Planifier sa retraite au QuÃ©bec â€” Guide 2026 | ArgentQC.ca",
  description:
    "Guide complet pour planifier sa retraite au QuÃ©bec en 2026 : les 5 piliers (RRQ, RPC, REER, CELI, rÃ©gime d'employeur), Ã  quel Ã¢ge prendre sa retraite et combien Ã©pargner.",
  keywords: [
    "retraite QuÃ©bec",
    "planification retraite QuÃ©bec 2026",
    "Ã¢ge retraite QuÃ©bec",
    "combien Ã©pargner retraite QuÃ©bec",
    "RRQ REER CELI QuÃ©bec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const piliers = [
  {
    nom: "Rente de retraite du QuÃ©bec (RRQ)",
    type: "Obligatoire",
    typeColor: "#1D4ED8",
    typeBg: "#DBEAFE",
    emoji: "ðŸ›ï¸",
    desc: "RÃ©gime public obligatoire pour tous les travailleurs du QuÃ©bec. Cotisations prÃ©levÃ©es sur le salaire tout au long de la carriÃ¨re. La rente est versÃ©e Ã  partir de 60 ans (avec rÃ©duction) ou 65 ans.",
    montant: "~820 $/mois (max. Ã  65 ans)",
    href: "/retraite/rrq",
  },
  {
    nom: "RÃ©gime de pensions du Canada (RPC)",
    type: "FÃ©dÃ©ral",
    typeColor: "#D97706",
    typeBg: "#FEF3C7",
    emoji: "ðŸ",
    desc: "L'Ã©quivalent fÃ©dÃ©ral de la RRQ. Les travailleurs du QuÃ©bec cotisent UNIQUEMENT Ã  la RRQ, pas au RPC â€” sauf pour la bonification RPC2 depuis 2024.",
    montant: "Non applicable pour la majoritÃ© des QuÃ©bÃ©cois",
    href: null,
  },
  {
    nom: "SÃ©curitÃ© de la vieillesse (SV)",
    type: "FÃ©dÃ©ral",
    typeColor: "#D97706",
    typeBg: "#FEF3C7",
    emoji: "ðŸ‡¨ðŸ‡¦",
    desc: "Pension mensuelle fÃ©dÃ©rale versÃ©e Ã  toute personne de 65 ans et plus ayant rÃ©sidÃ© au Canada suffisamment longtemps. Pas besoin d'avoir travaillÃ©.",
    montant: "~698 $/mois Ã  65 ans (2026)",
    href: null,
  },
  {
    nom: "REER (RÃ©gime enregistrÃ© d'Ã©pargne-retraite)",
    type: "Ã‰pargne privÃ©e",
    typeColor: "#065F46",
    typeBg: "#D1FAE5",
    emoji: "ðŸ’°",
    desc: "Compte d'Ã©pargne Ã  avantage fiscal. Vos cotisations rÃ©duisent votre revenu imposable. Les placements fructifient Ã  l'abri de l'impÃ´t jusqu'au retrait.",
    montant: "18% du revenu gagnÃ© (max. 32 490 $ en 2026)",
    href: "/retraite/reer",
  },
  {
    nom: "CELI (Compte d'Ã©pargne libre d'impÃ´t)",
    type: "Ã‰pargne privÃ©e",
    typeColor: "#065F46",
    typeBg: "#D1FAE5",
    emoji: "ðŸ“ˆ",
    desc: "Ã‰pargne et investissements qui croissent sans impÃ´t, et les retraits sont aussi sans impÃ´t. Plus flexible que le REER â€” idÃ©al pour complÃ©ter la retraite.",
    montant: "7 000 $/an en 2026 (cumulatif depuis 2009 : ~95 000 $)",
    href: "/retraite/celi",
  },
  {
    nom: "RÃ©gime de retraite d'employeur",
    type: "Optionnel",
    typeColor: "#7C3AED",
    typeBg: "#EDE9FE",
    emoji: "ðŸ¢",
    desc: "RÃ©gime Ã  prestations dÃ©terminÃ©es (RPD) ou Ã  cotisations dÃ©terminÃ©es (RCD). Offert par certains employeurs â€” secteur public, grandes entreprises. TrÃ¨s avantageux si disponible.",
    montant: "Variable selon le rÃ©gime",
    href: null,
  },
];

const ageRetraite = [
  {
    age: "60 ans",
    emoji: "â°",
    rrq: "RÃ©duction permanente de 7,2%/an avant 65 ans (max. -36%)",
    sv: "Non disponible (commence Ã  65 ans)",
    avantages: "LibertÃ© anticipÃ©e, profiter de sa santÃ©",
    inconvenients: "Rente RRQ rÃ©duite pour toujours, moins d'annÃ©es de cotisation REER/CELI",
    color: "#FEF3C7",
    borderColor: "#FCD34D",
  },
  {
    age: "65 ans",
    emoji: "âœ…",
    rrq: "Montant standard â€” aucune rÃ©duction ni bonification",
    sv: "Pension SV complÃ¨te disponible",
    avantages: "Rente standard + SV, point d'Ã©quilibre optimal pour la majoritÃ©",
    inconvenients: "Devoir continuer Ã  travailler 5 ans de plus qu'Ã  60 ans",
    color: "#D1FAE5",
    borderColor: "#34D399",
  },
  {
    age: "70 ans",
    emoji: "ðŸ“ˆ",
    rrq: "Bonification de 8,4%/an aprÃ¨s 65 ans (+42% Ã  70 ans)",
    sv: "Bonification de 7,2%/an (+36% Ã  70 ans)",
    avantages: "Rente maximale, protection longÃ©vitÃ©, moins d'annÃ©es Ã  financer",
    inconvenients: "Moins d'annÃ©es pour profiter de la retraite, dÃ©pend de la santÃ©",
    color: "#EDE9FE",
    borderColor: "#8B5CF6",
  },
];

const faqs = [
  {
    q: "Combien faut-il Ã©pargner pour la retraite au QuÃ©bec ?",
    r: "La rÃ¨gle du 70% suggÃ¨re qu'Ã  la retraite, vous aurez besoin d'environ 70% de votre revenu de travail pour maintenir votre style de vie. Pour un revenu de 60 000 $/an, visez 42 000 $/an Ã  la retraite. En soustrayant la RRQ (~9 800 $/an) et la SV (~8 400 $/an), il faut gÃ©nÃ©rer environ 23 800 $/an de sources privÃ©es (REER, CELI, rÃ©gime d'employeur). Avec un taux de retrait prudent de 4%, cela reprÃ©sente un capital d'environ 595 000 $.",
  },
  {
    q: "Est-ce que la RRQ et la SV suffisent pour vivre Ã  la retraite au QuÃ©bec ?",
    r: "En 2026, la RRQ maximale est d'environ 820 $/mois et la SV d'environ 698 $/mois â€” soit environ 1 518 $/mois (18 216 $/an) combinÃ©s. C'est insuffisant pour maintenir un style de vie confortable au QuÃ©bec, mais le SupplÃ©ment de revenu garanti (SRG) peut s'ajouter pour les personnes Ã  faible revenu. L'Ã©pargne personnelle via REER et CELI reste essentielle.",
  },
  {
    q: "REER ou CELI â€” lequel prioriser pour la retraite ?",
    r: "Si votre revenu actuel est plus Ã©levÃ© que votre revenu prÃ©vu Ã  la retraite, le REER est gÃ©nÃ©ralement plus avantageux (vous Ã©conomisez de l'impÃ´t maintenant, vous en payez moins Ã  la retraite). Si votre revenu sera similaire, ou si vous voulez plus de flexibilitÃ©, le CELI est excellent. IdÃ©alement, utilisez les deux selon vos droits disponibles.",
  },
  {
    q: "Puis-je recevoir la RRQ et continuer Ã  travailler aprÃ¨s 65 ans ?",
    r: "Oui. Depuis 2013, vous pouvez recevoir votre rente RRQ tout en continuant Ã  travailler aprÃ¨s 65 ans au QuÃ©bec. Si vous continuez Ã  cotiser aprÃ¨s 65 ans (obligatoire si vous Ãªtes employÃ©), votre rente augmentera. Vous pouvez aussi choisir de cesser de cotiser Ã  la RRQ aprÃ¨s 65 ans si vous recevez dÃ©jÃ  votre rente.",
  },
];

export default function RetraitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: PARCH }}>

      {/* Hero */}
      <section style={{ background: DARK, position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Accueil</Link>
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Retraite</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet Â· Retraite QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Planifier sa retraite au QuÃ©bec â€” Guide 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Les 5 piliers de la retraite quÃ©bÃ©coise, l&apos;impact du choix de l&apos;Ã¢ge de retraite,
            combien Ã©pargner et comment combiner RRQ, SV, REER et CELI.
          </p>
        </div>
      </section>

      {/* ── EXEMPLE CONCRET ── */}
      <section style={{ background: "#0F172A" }} className="px-5 py-8">
        <div className="max-w-2xl mx-auto">
          <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: "14px", padding: "20px" }}>
            <p style={{ color: GREEN, fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>
              💡 Exemple concret
            </p>
            <p style={{ color: "#F0EBE0", fontSize: "15px", fontWeight: 600, lineHeight: 1.5, marginBottom: "10px" }}>
              Gilles, 58 ans, revenu 75 000 $ — impact des décisions de retraite
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                ["Cotisation REER max (13 500 $)", "remboursement ~5 130 $"],
                ["Différer RRQ de 65 à 70 ans", "+ 42 % sur chaque versement à vie"],
                ["Stratégie CELI pour décaissement", "3 000-6 000 $/an d'impôt évité"],
                ["Crédit en raison de l'âge (dès 65 ans)", "jusqu'à 1 530 $/an"],
              ].map(([label, montant]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", gap: "8px" }}>
                  <span style={{ color: "rgba(240,235,224,0.65)" }}>{label}</span>
                  <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>{montant}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "8px" }}>
                <Link href="/scenarios/pre-retraite" style={{ color: GREEN, fontWeight: 700, fontSize: "13px", textDecoration: "underline" }}>
                  → Voir le scénario pré-retraite complet
                </Link>
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
              { step: "1", text: "Vérifier tes droits REER disponibles dans l'avis de cotisation de l'ARC (Mon dossier ARC en ligne)" },
              { step: "2", text: "Décider si tu priorises le REER ou le CELI selon ton taux marginal actuel vs estimé à la retraite" },
              { step: "3", text: "Planifier l'âge de début de la RRQ — différer jusqu'à 70 ans peut valoir 100 000 $ ou plus sur une vie" },
            ].map((item) => (
              <li key={item.step} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: DARK, color: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, flexShrink: 0 }}>{item.step}</span>
                <p style={{ fontSize: "14px", color: "#44403C", lineHeight: 1.6, paddingTop: "4px" }}>{item.text}</p>
              </li>
            ))}
          </ol>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "1.25rem" }}>
            <Link href="/retraite/reer" style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 700, fontSize: "13px", padding: "8px 16px", borderRadius: "10px", textDecoration: "none" }}>
              Guide REER complet →
            </Link>
            <Link href="/scenarios/pre-retraite" style={{ display: "inline-block", background: PARCH, color: DARK, fontWeight: 700, fontSize: "13px", padding: "8px 16px", borderRadius: "10px", textDecoration: "none", border: "1px solid #EDE9E0" }}>
              Scénario pré-retraite →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Ad */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2rem" }}>
          Publicité
        </div>

        {/* 5 piliers */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Les 5 piliers de la retraite quÃ©bÃ©coise
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
                  Guide complet â†’
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* RÃ¨gle du 70% */}
        <div style={{ background: DARK, borderRadius: "20px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.2rem", fontWeight: 800, marginBottom: "12px" }}>
            ðŸ’¡ La rÃ¨gle du 70% â€” combien Ã©pargner ?
          </h2>
          <p style={{ color: "rgba(240,235,224,0.7)", fontSize: "13px", lineHeight: 1.7, marginBottom: "1rem" }}>
            Ã€ la retraite, la plupart des dÃ©penses diminuent (hypothÃ¨que payÃ©e, enfants autonomes, moins de transport). La rÃ¨gle dit qu&apos;il vous faut environ <strong style={{ color: GOLD }}>70% de votre revenu de travail</strong>{" "}pour maintenir votre style de vie.
          </p>
          <div style={{ background: "rgba(245,200,66,0.08)", border: "1px solid rgba(245,200,66,0.15)", borderRadius: "12px", padding: "1rem" }}>
            <p style={{ color: "#F0EBE0", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: GOLD }}>Exemple :</strong>{" "}Revenu de travail 65 000 $/an
              <br />â†’ Besoin Ã  la retraite : <strong style={{ color: GOLD }}>45 500 $/an</strong>
              <br />â†’ RRQ (moy.) : ~9 800 $/an | SV : ~8 400 $/an
              <br />â†’ Ã€ gÃ©nÃ©rer par l&apos;Ã©pargne privÃ©e : <strong style={{ color: GOLD }}>~27 300 $/an</strong>
              <br />â†’ Capital requis (taux 4%) : <strong style={{ color: GOLD }}>~682 500 $</strong>
            </p>
          </div>
        </div>

        {/* Ã‚ge de retraite */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Ã€ quel Ã¢ge prendre sa retraite ? Impact sur la RRQ
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {ageRetraite.map((a) => (
            <div key={a.age} style={{ background: a.color, border: `1.5px solid ${a.borderColor}`, borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ fontSize: "1.4rem" }}>{a.emoji}</span>
                <h3 style={{ fontWeight: 800, fontSize: "16px", color: "#1C1C1E", margin: 0 }}>Retraite Ã  {a.age}</h3>
              </div>
              <div className="grid grid-cols-1 gap-2" style={{ fontSize: "12px" }}>
                <div><span style={{ fontWeight: 700, color: "#44403C" }}>RRQ : </span><span style={{ color: "#44403C" }}>{a.rrq}</span></div>
                <div><span style={{ fontWeight: 700, color: "#44403C" }}>SV : </span><span style={{ color: "#44403C" }}>{a.sv}</span></div>
                <div style={{ marginTop: "4px" }}>
                  <span style={{ fontWeight: 700, color: "#065F46" }}>âœ… Avantages : </span><span style={{ color: "#065F46" }}>{a.avantages}</span>
                </div>
                <div>
                  <span style={{ fontWeight: 700, color: "#991B1B" }}>âš ï¸ InconvÃ©nients : </span><span style={{ color: "#991B1B" }}>{a.inconvenients}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards CTA */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Guides dÃ©taillÃ©s
        </h2>
        <div className="grid grid-cols-1 gap-3 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {[
            { href: "/retraite/reer", emoji: "ðŸ’°", titre: "REER â€” Guide complet", desc: "Plafond 2026, Ã©conomie d'impÃ´t, REER vs CELI", color: DARK, titleColor: "#F0EBE0", descColor: "rgba(240,235,224,0.6)", ctaColor: GOLD },
            { href: "/retraite/celi", emoji: "ðŸ“ˆ", titre: "CELI â€” Tout comprendre", desc: "Droits de cotisation, placements, erreurs Ã  Ã©viter", color: "white", titleColor: "#1C1C1E", descColor: "#78716C", ctaColor: "#3B82F6" },
            { href: "/retraite/rrq", emoji: "ðŸ›ï¸", titre: "RRQ â€” Votre rente", desc: "Montants 2026, Ã¢ge optimal, RRQ vs RPC", color: "white", titleColor: "#1C1C1E", descColor: "#78716C", ctaColor: "#3B82F6" },
            { href: "/retraite/celiapp", emoji: "ðŸ¡", titre: "CELIAPP â€” Premier achat", desc: "8 000$/an, 40 000$ Ã  vie, retraits libres d'impÃ´t", color: "white", titleColor: "#1C1C1E", descColor: "#78716C", ctaColor: "#3B82F6" },
          ].map((c) => (
            <Link key={c.href} href={c.href} style={{ display: "block", background: c.color, border: c.color === "white" ? "1px solid #EDE9E0" : "none", borderRadius: "16px", padding: "1.25rem", textDecoration: "none" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "8px" }}>{c.emoji}</div>
              <h3 style={{ fontFamily: "var(--font-playfair)", color: c.titleColor, fontSize: "1rem", fontWeight: 800, marginBottom: "6px" }}>{c.titre}</h3>
              <p style={{ color: c.descColor, fontSize: "12px", lineHeight: 1.6, marginBottom: "10px" }}>{c.desc}</p>
              <span style={{ color: c.ctaColor, fontWeight: 700, fontSize: "13px" }}>Lire le guide â†’</span>
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

        {/* Liens */}
        <div className="flex flex-col gap-3 mb-4">
          <Link href="/budget/calculateur" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.4rem" }}>ðŸ“Š</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Calculateur budget mensuel</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>IntÃ©grez vos cotisations REER et CELI Ã  votre budget</div>
            </div>
            <span style={{ color: "#3B82F6" }}>â†’</span>
          </Link>
          <Link href="/assurances/vie" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.4rem" }}>â¤ï¸</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Assurance vie et planification retraite</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>ProtÃ©gez vos proches et intÃ©grez l&apos;assurance Ã  votre plan</div>
            </div>
            <span style={{ color: "#3B82F6" }}>â†’</span>
          </Link>
        </div>

        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginTop: "1.5rem" }}>
          PublicitÃ©
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
    </>
  );
}
