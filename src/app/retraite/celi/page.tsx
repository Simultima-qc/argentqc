import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CELI â€” Tout comprendre pour mieux Ã©pargner en 2026 | ArgentQC.ca",
  description:
    "Guide complet CELI 2026 : droits de cotisation cumulatifs, placements admissibles, erreurs classiques (surcotisation, retraits) et comment utiliser le CELI selon vos objectifs.",
  keywords: [
    "CELI QuÃ©bec",
    "CELI 2026",
    "droits de cotisation CELI 2026",
    "comment utiliser CELI",
    "CELI placement",
    "CELI vs REER",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const droitsCumulatifs = [
  { annee: "2009", plafond: "5 000 $", cumul: "5 000 $" },
  { annee: "2010", plafond: "5 000 $", cumul: "10 000 $" },
  { annee: "2011", plafond: "5 000 $", cumul: "15 000 $" },
  { annee: "2012", plafond: "5 000 $", cumul: "20 000 $" },
  { annee: "2013", plafond: "5 500 $", cumul: "25 500 $" },
  { annee: "2014", plafond: "5 500 $", cumul: "31 000 $" },
  { annee: "2015", plafond: "10 000 $", cumul: "41 000 $" },
  { annee: "2016", plafond: "5 500 $", cumul: "46 500 $" },
  { annee: "2017", plafond: "5 500 $", cumul: "52 000 $" },
  { annee: "2018", plafond: "5 500 $", cumul: "57 500 $" },
  { annee: "2019", plafond: "6 000 $", cumul: "63 500 $" },
  { annee: "2020", plafond: "6 000 $", cumul: "69 500 $" },
  { annee: "2021", plafond: "6 000 $", cumul: "75 500 $" },
  { annee: "2022", plafond: "6 000 $", cumul: "81 500 $" },
  { annee: "2023", plafond: "6 500 $", cumul: "88 000 $" },
  { annee: "2024", plafond: "7 000 $", cumul: "95 000 $" },
  { annee: "2025", plafond: "7 000 $", cumul: "102 000 $" },
  { annee: "2026", plafond: "7 000 $", cumul: "109 000 $" },
];

const placements = [
  { type: "DÃ©pÃ´ts Ã  terme et CPG", emoji: "ðŸ¦", desc: "SÃ»rs et garantis. Taux actuels : 3â€“5%. IdÃ©al pour l'Ã©pargne d'urgence ou un objectif Ã  court terme.", risque: "Faible" },
  { type: "FNB d'indices (ETF)", emoji: "ðŸ“Š", desc: "Fonds nÃ©gociÃ©s en bourse qui reproduisent un indice (S&P 500, TSX). Frais trÃ¨s bas (~0,1%), diversification automatique. RecommandÃ© pour la retraite.", risque: "Moyen-Ã©levÃ©" },
  { type: "Fonds communs de placement", emoji: "ðŸ’¼", desc: "GÃ©rÃ©s activement, frais plus Ã©levÃ©s que les FNB. Vendus par les banques et conseillers. VÃ©rifiez le ratio des frais de gestion (RFG).", risque: "Moyen" },
  { type: "Actions individuelles", emoji: "ðŸ“ˆ", desc: "Acheter des actions d'entreprises directement. Plus de risque et de gestion nÃ©cessaire, mais potentiel plus Ã©levÃ©.", risque: "Ã‰levÃ©" },
  { type: "Obligations", emoji: "ðŸ“œ", desc: "PrÃªts Ã  des gouvernements ou entreprises. Plus stables que les actions, rendement plus prÃ©visible.", risque: "Faible-moyen" },
  { type: "Compte d'Ã©pargne Ã  intÃ©rÃªt Ã©levÃ© (CEIE)", emoji: "ðŸ’°", desc: "Liquide et sans risque. IdÃ©al pour le fonds d'urgence dans le CELI ou en attendant d'investir.", risque: "Minimal" },
];

const usages = [
  {
    usage: "Fonds d'urgence",
    emoji: "ðŸš¨",
    desc: "Gardez 3 Ã  6 mois de dÃ©penses dans un CELI avec un compte d'Ã©pargne Ã  intÃ©rÃªt Ã©levÃ©. Accessible immÃ©diatement, sans impÃ´t au retrait.",
    ideal: "Court terme",
    color: "#FEF3C7",
    textColor: "#92400E",
  },
  {
    usage: "Ã‰pargne pour un projet",
    emoji: "ðŸ ",
    desc: "Achat d'une voiture, voyage, maison (avec le CELIAPP en parallÃ¨le), rÃ©novations. Retirez quand vous voulez, sans consÃ©quence fiscale.",
    ideal: "Moyen terme",
    color: "#DBEAFE",
    textColor: "#1D4ED8",
  },
  {
    usage: "Retraite complÃ©mentaire",
    emoji: "ðŸ–ï¸",
    desc: "Investissez en FNB d'indices. Les retraits Ã  la retraite ne s'ajoutent pas Ã  votre revenu â€” ne rÃ©duisent pas la SV ni le SRG.",
    ideal: "Long terme",
    color: "#D1FAE5",
    textColor: "#065F46",
  },
  {
    usage: "Revenu passif dÃ©fiscalisÃ©",
    emoji: "ðŸ’¸",
    desc: "Dividendes et gains en capital dans le CELI ne sont jamais imposÃ©s, mÃªme lors du retrait. IdÃ©al pour accumuler des revenus passifs.",
    ideal: "Long terme",
    color: "#EDE9FE",
    textColor: "#5B21B6",
  },
];

const erreurs = [
  {
    erreur: "Surcotiser au CELI",
    detail: "Si vous dÃ©passez vos droits de cotisation, l'ARC impose une pÃ©nalitÃ© de 1%/mois sur le montant en excÃ¨s. VÃ©rifiez vos droits sur Mon dossier CRA avant de cotiser.",
    emoji: "âš ï¸",
    grave: true,
  },
  {
    erreur: "Retirer et recotiser dans la mÃªme annÃ©e civile",
    detail: "Les droits libÃ©rÃ©s par un retrait ne sont rÃ©cupÃ©rables qu'au 1er janvier de l'annÃ©e SUIVANTE. Retirer 5 000 $ en juin et le remettre en aoÃ»t = surcotisation. Attendez janvier.",
    emoji: "ðŸ“…",
    grave: true,
  },
  {
    erreur: "Garder son CELI en dÃ©pÃ´t bancaire seulement",
    detail: "Un CELI avec 1,5% d'intÃ©rÃªt sur 30 ans fait peu. Investir en FNB d'indices dans le CELI avec un rendement moyen de 7% transforme 7 000 $/an en ~660 000 $ en 30 ans.",
    emoji: "ðŸ“‰",
    grave: false,
  },
  {
    erreur: "Penser que les retraits rÃ©duisent les prestations gouvernementales",
    detail: "Les retraits CELI ne comptent PAS comme revenu. Ils n'affectent donc pas le SRG, l'allocation famille, les crÃ©dits d'impÃ´t basÃ©s sur le revenu â€” contrairement aux retraits REER.",
    emoji: "âœ…",
    grave: false,
  },
  {
    erreur: "Ne pas maximiser les droits accumulÃ©s",
    detail: "Si vous avez 18 ans ou plus depuis 2009 et n'avez jamais ouvert de CELI, vous avez potentiellement 109 000 $ de droits disponibles en 2026. Chaque annÃ©e perdue = croissance perdue.",
    emoji: "â°",
    grave: false,
  },
];

const faqs = [
  {
    q: "Quel est le plafond de cotisation CELI en 2026 ?",
    r: "Le nouveau plafond annuel 2026 est de 7 000 $. Si vous Ãªtes admissible depuis 2009 et n'avez jamais cotisÃ©, vos droits cumulatifs totaux sont de 109 000 $ en 2026. Vos droits personnels (incluant retraits passÃ©s) figurent sur Mon dossier CRA.",
  },
  {
    q: "Qu'arrive-t-il Ã  mes droits CELI si je ne cotise pas une annÃ©e ?",
    r: "Ils s'accumulent indÃ©finiment. Si vous ne cotisez pas pendant 5 ans (7 000 $/an), vous accumulez 35 000 $ de droits supplÃ©mentaires que vous pouvez utiliser n'importe quand par la suite. Les droits inutilisÃ©s ne disparaissent pas.",
  },
  {
    q: "Puis-je avoir plusieurs CELI dans diffÃ©rentes institutions ?",
    r: "Oui. Vous pouvez avoir autant de CELI que vous voulez dans diffÃ©rentes banques ou courtiers. Mais le plafond total s'applique Ã  l'ensemble de vos CELI combinÃ©s â€” pas par compte. C'est Ã  vous de suivre vos cotisations pour ne pas dÃ©passer vos droits.",
  },
  {
    q: "CELI ou REER pour ma retraite â€” lequel prioriser ?",
    r: "Si votre revenu actuel est Ã©levÃ© (50 000 $+), le REER est souvent prioritaire pour la dÃ©duction immÃ©diate. Si votre revenu est plus faible, ou si vous prÃ©voyez un revenu similaire Ã  la retraite, le CELI est plus flexible. IdÃ©alement, maximisez les deux. La rÃ¨gle simple : REER pour rÃ©duire l'impÃ´t maintenant, CELI pour la flexibilitÃ© Ã  long terme.",
  },
];

export default function CeliPage() {
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
            <Link href="/retraite" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Retraite</Link>
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>CELI</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet Â· CELI 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            CELI â€” Tout comprendre pour mieux Ã©pargner en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Droits cumulatifs depuis 2009, placements admissibles, usages stratÃ©giques
            et les erreurs classiques qui coÃ»tent cher.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Explication */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            ðŸ“ˆ C&apos;est quoi un CELI, concrÃ¨tement ?
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, marginBottom: "12px" }}>
            Le CELI (Compte d&apos;Ã©pargne libre d&apos;impÃ´t) est le compte d&apos;Ã©pargne le plus flexible offert aux Canadiens. Disponible depuis 2009 pour toute personne de 18 ans et plus, il offre :
          </p>
          <div className="flex flex-col gap-2">
            {[
              "Croissance des placements Ã  l'abri de l'impÃ´t",
              "Retraits sans impÃ´t â€” en tout temps, pour n'importe quelle raison",
              "Les retraits ne comptent pas comme revenu (n'affectent pas SV, SRG, crÃ©dits)",
              "Droits de cotisation rÃ©cupÃ©rÃ©s l'annÃ©e suivante aprÃ¨s un retrait",
              "Aucun Ã¢ge limite de cotisation",
            ].map((a, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", color: "#065F46" }}>
                <span style={{ color: GREEN, flexShrink: 0, marginTop: "1px" }}>âœ…</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plafond 2026 */}
        <div style={{ background: DARK, borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem", textAlign: "center" }}>
          <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Plafond CELI 2026</p>
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "2rem", fontWeight: 800, marginBottom: "4px" }}>7 000 $</p>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "13px" }}>nouveau plafond annuel Â· droits cumulatifs depuis 2009 : <strong style={{ color: "#F0EBE0" }}>109 000 $</strong></p>
        </div>

        {/* Tableau droits cumulatifs */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Droits de cotisation cumulatifs depuis 2009
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "9px 14px", textAlign: "center", fontWeight: 700 }}>AnnÃ©e</th>
                <th style={{ padding: "9px 14px", textAlign: "center", fontWeight: 700 }}>Plafond annuel</th>
                <th style={{ padding: "9px 14px", textAlign: "center", fontWeight: 700 }}>Cumul total</th>
              </tr>
            </thead>
            <tbody>
              {droitsCumulatifs.map((d, i) => (
                <tr key={d.annee} style={{
                  borderBottom: i < droitsCumulatifs.length - 1 ? "1px solid #F0EBE0" : "none",
                  background: d.annee === "2026" ? "#ECFDF5" : "white",
                }}>
                  <td style={{ padding: "7px 14px", textAlign: "center", fontWeight: d.annee === "2026" ? 800 : 400, color: d.annee === "2026" ? "#065F46" : "#44403C" }}>{d.annee}</td>
                  <td style={{ padding: "7px 14px", textAlign: "center", color: "#44403C" }}>{d.plafond}</td>
                  <td style={{ padding: "7px 14px", textAlign: "center", fontWeight: d.annee === "2026" ? 800 : 600, color: d.annee === "2026" ? GREEN : "#1C1C1E" }}>{d.cumul}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ad */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Placements */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Ce qu&apos;on peut mettre dans un CELI
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {placements.map((p) => (
            <div key={p.type} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{p.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{p.type}</span>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, padding: "2px 6px", borderRadius: "100px",
                    background: p.risque === "Minimal" || p.risque === "Faible" ? "#D1FAE5" : p.risque === "Ã‰levÃ©" ? "#FEE2E2" : "#FEF3C7",
                    color: p.risque === "Minimal" || p.risque === "Faible" ? "#065F46" : p.risque === "Ã‰levÃ©" ? "#991B1B" : "#92400E",
                    flexShrink: 0,
                  }}>Risque {p.risque}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Usages */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          CELI pour urgence, projet ou retraite ?
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {usages.map((u) => (
            <div key={u.usage} style={{ background: u.color, border: `1px solid ${u.color}`, borderRadius: "14px", padding: "1.1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.3rem" }}>{u.emoji}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "13px", color: u.textColor }}>{u.usage}</div>
                  <div style={{ fontSize: "11px", color: u.textColor, opacity: 0.7 }}>Horizon : {u.ideal}</div>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: u.textColor, lineHeight: 1.65, margin: 0, opacity: 0.85 }}>{u.desc}</p>
            </div>
          ))}
        </div>

        {/* Erreurs */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Erreurs classiques Ã  Ã©viter avec le CELI
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {erreurs.map((e) => (
            <div key={e.erreur} style={{ background: "white", border: `1px solid ${e.grave ? "#FECACA" : "#EDE9E0"}`, borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{e.emoji}</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  {e.grave && <span style={{ background: "#FEE2E2", color: "#DC2626", fontSize: "10px", fontWeight: 700, padding: "1px 6px", borderRadius: "100px" }}>PÃ©nalitÃ© possible</span>}
                  <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{e.erreur}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{e.detail}</p>
              </div>
            </div>
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

        {/* CTAs */}
        <div className="flex flex-col gap-3 mb-4">
          {[
            { href: "/retraite/reer", emoji: "ðŸ’°", titre: "REER â€” Guide complet", desc: "Comparer REER et CELI, plafond 2026, Ã©conomies d'impÃ´t" },
            { href: "/retraite/celiapp", emoji: "ðŸ¡", titre: "CELIAPP vs CELI â†’", desc: "DiffÃ©rences clÃ©s, rÃ¨gles d'admissibilitÃ© et stratÃ©gie combinÃ©e" },
            { href: "/retraite/rrq", emoji: "ðŸ›ï¸", titre: "RRQ â€” Votre rente de retraite", desc: "Montants et impact du choix de l'Ã¢ge de retraite" },
            { href: "/retraite", emoji: "ðŸ–ï¸", titre: "Guide retraite QuÃ©bec", desc: "Les 5 piliers â€” RRQ, SV, REER, CELI, rÃ©gime d'employeur" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{l.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{l.titre}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E" }}>{l.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>â†’</span>
            </Link>
          ))}
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif. Consultez un conseiller financier pour une planification personnalisÃ©e.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
