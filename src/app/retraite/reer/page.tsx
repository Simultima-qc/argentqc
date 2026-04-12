import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "REER â€” Guide complet pour les QuÃ©bÃ©cois en 2026 | ArgentQC.ca",
  description:
    "Tout sur le REER en 2026 : plafond de cotisation, Ã©conomie d'impÃ´t avec exemples chiffrÃ©s, REER vs CELI, RAP pour l'achat d'une maison et erreurs frÃ©quentes Ã  Ã©viter.",
  keywords: [
    "REER QuÃ©bec",
    "REER 2026",
    "cotisation maximale REER 2026",
    "comment fonctionne REER",
    "REER vs CELI",
    "RAP REER premier acheteur",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const economiesImpot = [
  { revenu: "35 000 $", taux: "~27%", cotisation: "3 000 $", economie: "~810 $" },
  { revenu: "50 000 $", taux: "~37%", cotisation: "5 000 $", economie: "~1 850 $" },
  { revenu: "75 000 $", taux: "~43%", cotisation: "8 000 $", economie: "~3 440 $" },
  { revenu: "100 000 $", taux: "~48%", cotisation: "10 000 $", economie: "~4 800 $" },
  { revenu: "150 000 $", taux: "~53%", cotisation: "18 000 $", economie: "~9 540 $" },
];

const reerVsCeli = [
  { critere: "Cotisation rÃ©duit le revenu imposable ?", reer: "âœ… Oui â€” remboursement d'impÃ´t immÃ©diat", celi: "âŒ Non â€” pas de dÃ©duction" },
  { critere: "Retrait imposable ?", reer: "âœ… Oui â€” imposÃ© comme revenu Ã  la retraite", celi: "âŒ Non â€” retraits toujours libres d'impÃ´t" },
  { critere: "Plafond de cotisation 2026", reer: "18% du revenu gagnÃ© (max. 32 490 $)", celi: "7 000 $/an (+ droits inutilisÃ©s)" },
  { critere: "Droits rÃ©cupÃ©rÃ©s aprÃ¨s retrait ?", reer: "âŒ Non â€” un retrait perd les droits", celi: "âœ… Oui â€” rÃ©cupÃ©rÃ©s l'annÃ©e suivante" },
  { critere: "Ã‚ge limite de cotisation", reer: "71 ans â€” conversion en FERR obligatoire", celi: "Aucun Ã¢ge limite" },
  { critere: "IdÃ©al pour", reer: "Revenu Ã©levÃ© maintenant, plus faible Ã  la retraite", celi: "FlexibilitÃ©, revenus similaires avant/aprÃ¨s retraite" },
];

const erreurs = [
  { erreur: "Cotiser sans tenir compte de son taux marginal", detail: "Cotiser au REER quand votre revenu est bas (moins de 40 000 $) peut Ãªtre sous-optimal â€” le remboursement d'impÃ´t est plus faible. Attendez une annÃ©e de revenu plus Ã©levÃ©, ou priorisez le CELI.", emoji: "ðŸ’¸" },
  { erreur: "Retirer le REER avant 65 ans pour autre chose que le RAP/LLP", detail: "Un retrait hors RAP ou LLP est imposÃ© comme revenu ordinaire â€” et vous perdez dÃ©finitivement ces droits de cotisation.", emoji: "ðŸš«" },
  { erreur: "Oublier le dÃ©lai de 60 jours", detail: "Les cotisations REER des 60 premiers jours d'une annÃ©e peuvent Ãªtre dÃ©duites pour l'annÃ©e fiscale prÃ©cÃ©dente. La date limite 2026 : ~1er mars 2027 pour l'annÃ©e d'imposition 2026.", emoji: "ðŸ“…" },
  { erreur: "Investir le REER dans un compte d'Ã©pargne ordinaire", detail: "Un REER est un contenant, pas un placement. Ce qu'il contient est crucial : FNB d'indices, fonds de retraite â€” pas juste un dÃ©pÃ´t Ã  2%. L'abri fiscal ne vaut rien si le capital ne fructifie pas.", emoji: "ðŸ“Š" },
  { erreur: "Ne pas planifier la dÃ©cumulation", detail: "Comment dÃ©caisser le REER (converti en FERR Ã  71 ans) sans exploser votre taux d'imposition est aussi important que l'accumulation. Combiner FERR + CELI + SV + RRQ demande une stratÃ©gie.", emoji: "ðŸ§®" },
];

const faqs = [
  {
    q: "Quel est le plafond de cotisation REER en 2026 ?",
    r: "Le plafond de cotisation REER 2026 est de 18% du revenu gagnÃ© en 2025, jusqu'Ã  un maximum de 32 490 $. Votre plafond personnel est indiquÃ© sur votre avis de cotisation de l'Agence du revenu du Canada (ARC). N'oubliez pas d'ajouter vos droits inutilisÃ©s des annÃ©es prÃ©cÃ©dentes.",
  },
  {
    q: "C'est quoi le RAP (RÃ©gime d'accession Ã  la propriÃ©tÃ©) ?",
    r: "Le RAP permet de retirer jusqu'Ã  35 000 $ de son REER sans impÃ´t pour acheter une premiÃ¨re propriÃ©tÃ©. Un couple peut retirer jusqu'Ã  70 000 $ combinÃ©s. Le montant doit Ãªtre remboursÃ© dans le REER sur 15 ans (Ã  partir de la 2e annÃ©e suivant le retrait), sinon la partie non remboursÃ©e est incluse dans le revenu. Depuis 2023, le plafond est passÃ© de 35 000 $ Ã  35 000 $.",
  },
  {
    q: "Qu'est-ce que le LLP (RÃ©gime d'encouragement Ã  l'Ã©ducation permanente) ?",
    r: "Le LLP permet de retirer jusqu'Ã  10 000 $/an (max. 20 000 $ au total) de son REER pour financer ses Ã©tudes ou celles de son conjoint dans un Ã©tablissement d'enseignement agrÃ©Ã©. Le montant doit Ãªtre remboursÃ© sur 10 ans. Moins connu que le RAP, mais trÃ¨s utile pour un retour aux Ã©tudes.",
  },
  {
    q: "Ã€ quel Ã¢ge commencer Ã  cotiser au REER ?",
    r: "Le plus tÃ´t possible â€” l'intÃ©rÃªt composÃ© fait des miracles sur de longues pÃ©riodes. Une cotisation de 5 000 $ Ã  25 ans dans un FNB avec un rendement moyen de 7%/an vaudra environ 74 000 $ Ã  65 ans. La mÃªme cotisation faite Ã  45 ans vaudra environ 19 000 $. Chaque annÃ©e compte.",
  },
];

export default function ReerPage() {
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
            <span style={{ color: "rgba(240,235,224,0.7)" }}>REER</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet Â· REER QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            REER â€” Guide complet pour les QuÃ©bÃ©cois en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Plafond de cotisation 2026, Ã©conomie d&apos;impÃ´t concrÃ¨te, REER vs CELI, RAP pour l&apos;achat
            d&apos;une maison et les 5 erreurs Ã  Ã©viter.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Explication simple */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            ðŸ’° C&apos;est quoi un REER, concrÃ¨tement ?
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.7, marginBottom: "12px" }}>
            Un REER est un <strong>compte d&apos;Ã©pargne enregistrÃ©</strong>{" "}qui vous permet d&apos;investir Ã  l&apos;abri de l&apos;impÃ´t jusqu&apos;Ã  votre retraite. Deux avantages fiscaux majeurs :
          </p>
          <div className="flex flex-col gap-3">
            <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "10px", padding: "10px 14px" }}>
              <p style={{ fontSize: "13px", color: "#065F46", margin: 0, lineHeight: 1.6 }}>
                <strong>1. DÃ©duction immÃ©diate :</strong>{" "}chaque dollar cotisÃ© rÃ©duit votre revenu imposable de l&apos;annÃ©e â€” vous recevez un remboursement d&apos;impÃ´t.
              </p>
            </div>
            <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "10px", padding: "10px 14px" }}>
              <p style={{ fontSize: "13px", color: "#065F46", margin: 0, lineHeight: 1.6 }}>
                <strong>2. Croissance Ã  l&apos;abri de l&apos;impÃ´t :</strong>{" "}les intÃ©rÃªts, dividendes et gains en capital accumulÃ©s dans le REER ne sont pas imposÃ©s tant qu&apos;ils y restent.
              </p>
            </div>
          </div>
          <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "10px", padding: "10px 14px", marginTop: "10px" }}>
            <p style={{ fontSize: "12px", color: "#92400E", margin: 0, lineHeight: 1.6 }}>
              âš ï¸ <strong>Important :</strong>{" "}les retraits sont imposÃ©s comme revenu ordinaire. L&apos;idÃ©e est de cotiser quand votre taux marginal est Ã©levÃ©, et retirer quand il est plus bas (Ã  la retraite).
            </p>
          </div>
        </div>

        {/* Plafond 2026 */}
        <div style={{ background: DARK, borderRadius: "16px", padding: "1.25rem", marginBottom: "2rem", textAlign: "center" }}>
          <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Plafond REER 2026</p>
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "2rem", fontWeight: 800, marginBottom: "4px" }}>32 490 $</p>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "13px" }}>ou 18% du revenu gagnÃ© en 2025, selon le moins Ã©levÃ© des deux</p>
          <p style={{ color: "rgba(240,235,224,0.4)", fontSize: "11px", marginTop: "8px" }}>
            Votre plafond personnel (incluant les droits inutilisÃ©s) figure sur votre avis de cotisation ARC.
          </p>
        </div>

        {/* Tableau Ã©conomies d'impÃ´t */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Combien rÃ©cupÃ©rez-vous en impÃ´ts ? (QuÃ©bec 2026)
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Le remboursement d&apos;impÃ´t dÃ©pend de votre taux marginal combinÃ© fÃ©dÃ©ral + provincial.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Revenu imposable</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Taux marginal QC</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Cotisation ex.</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Remboursement</th>
              </tr>
            </thead>
            <tbody>
              {economiesImpot.map((e, i) => (
                <tr key={e.revenu} style={{ borderBottom: i < economiesImpot.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600, color: "#1C1C1E" }}>{e.revenu}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>{e.taux}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>{e.cotisation}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, color: GREEN }}>{e.economie}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ad */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* REER vs CELI */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          REER vs CELI â€” Lequel choisir ?
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>CritÃ¨re</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>ðŸ’° REER</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>ðŸ“ˆ CELI</th>
              </tr>
            </thead>
            <tbody>
              {reerVsCeli.map((r, i) => (
                <tr key={r.critere} style={{ borderBottom: i < reerVsCeli.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600, color: "#44403C", fontSize: "12px" }}>{r.critere}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#1C1C1E", fontSize: "12px" }}>{r.reer}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#1C1C1E", fontSize: "12px" }}>{r.celi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RAP et LLP */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Utiliser le REER autrement : RAP et LLP
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div style={{ background: "white", border: "2px solid #BFDBFE", borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>ðŸ </div>
            <h3 style={{ fontWeight: 800, fontSize: "14px", color: "#1E40AF", marginBottom: "8px" }}>RAP â€” RÃ©gime d&apos;accession Ã  la propriÃ©tÃ©</h3>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#1E3A8A", lineHeight: 1.75 }}>
              <li>Retrait max. : <strong>35 000 $</strong>{" "}par personne</li>
              <li>Couple : jusqu&apos;Ã  <strong>70 000 $</strong>{" "}combinÃ©s</li>
              <li>Sans impÃ´t si remboursÃ© sur 15 ans</li>
              <li>RÃ©servÃ© aux premiers acheteurs</li>
            </ul>
            <Link href="/blog/rap-reer-premier-acheteur-quebec-2026" style={{ display: "block", marginTop: "10px", color: "#1D4ED8", fontWeight: 700, fontSize: "12px", textDecoration: "none" }}>
              Lire notre guide complet RAP â†’
            </Link>
          </div>
          <div style={{ background: "white", border: "2px solid #D1FAE5", borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>ðŸŽ“</div>
            <h3 style={{ fontWeight: 800, fontSize: "14px", color: "#065F46", marginBottom: "8px" }}>LLP â€” RÃ©gime d&apos;encouragement Ã  l&apos;Ã©ducation permanente</h3>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#047857", lineHeight: 1.75 }}>
              <li>Retrait max. : <strong>10 000 $/an</strong></li>
              <li>Maximum cumulatif : <strong>20 000 $</strong></li>
              <li>Pour vous ou votre conjoint</li>
              <li>Remboursement sur 10 ans</li>
            </ul>
          </div>
        </div>

        {/* Erreurs */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          5 erreurs frÃ©quentes avec le REER
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {erreurs.map((e, i) => (
            <div key={e.erreur} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#FEF2F2", border: "1px solid #FECACA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800, color: "#DC2626", flexShrink: 0 }}>
                {i + 1}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "4px" }}>{e.erreur}</div>
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
            { href: "/retraite/celi", emoji: "ðŸ“ˆ", titre: "CELI â€” Guide complet", desc: "Comparer REER et CELI, droits 2026, erreurs Ã  Ã©viter" },
            { href: "/retraite/celiapp", emoji: "ðŸ¡", titre: "Combinez avec le CELIAPP â†’", desc: "REER + CELIAPP = stratÃ©gie optimale pour le premier achat" },
            { href: "/retraite/rrq", emoji: "ðŸ›ï¸", titre: "RRQ â€” Votre rente de retraite", desc: "Montants 2026 et impact du choix de l'Ã¢ge" },
            { href: "/retraite", emoji: "ðŸ–ï¸", titre: "Guide retraite QuÃ©bec", desc: "Les 5 piliers et combien Ã©pargner selon votre profil" },
            { href: "/impots/remboursement", emoji: "ðŸ§¾", titre: "Calculez votre retour d'impÃ´ts REER", desc: "CrÃ©dits, dÃ©lais de remboursement et maximiser votre retour" },
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
