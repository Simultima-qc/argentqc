import type { Metadata } from "next";
import Link from "next/link";
import CeliappCalculateurClient from "./CeliappCalculateurClient";

export const metadata: Metadata = {
  title: "CELIAPP 2026 â€” Tout Savoir sur le Compte Ã‰pargne Achat PropriÃ©tÃ© | ArgentQC.ca",
  description:
    "CELIAPP : plafond 8 000$/an, 40 000$ Ã  vie, retraits libres d'impÃ´t pour votre premiÃ¨re propriÃ©tÃ©. Guide complet + calculateur d'Ã©pargne pour QuÃ©bÃ©cois.",
  keywords: [
    "CELIAPP QuÃ©bec",
    "CELIAPP 2026",
    "CELIAPP premier achat maison",
    "comment fonctionne CELIAPP",
    "CELIAPP vs CELI vs REER",
    "compte Ã©pargne achat propriÃ©tÃ©",
  ],
  alternates: {
    canonical: "https://argentqc.ca/retraite/celiapp",
  },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const regles = [
  { regle: "Plafond annuel de cotisation", valeur: "8 000 $", emoji: "ðŸ“…", detail: "Vous pouvez cotiser jusqu'Ã  8 000 $ par annÃ©e civile dans votre CELIAPP." },
  { regle: "Plafond Ã  vie", valeur: "40 000 $", emoji: "ðŸ†", detail: "Le total des cotisations ne peut jamais dÃ©passer 40 000 $ par personne, peu importe le nombre d'annÃ©es." },
  { regle: "Ã‚ge minimum", valeur: "18 ans", emoji: "ðŸŽ‚", detail: "Vous devez Ãªtre Ã¢gÃ© d'au moins 18 ans et rÃ©sider au Canada pour ouvrir un CELIAPP." },
  { regle: "Condition propriÃ©taire", valeur: "4 ans", emoji: "ðŸ ", detail: "Vous ne devez pas avoir Ã©tÃ© propriÃ©taire d'une rÃ©sidence principale au cours des 4 derniÃ¨res annÃ©es civiles." },
  { regle: "DÃ©lai minimal avant retrait", valeur: "1 an", emoji: "â³", detail: "Les fonds doivent rester dans le compte au moins 1 an avant de pouvoir Ãªtre retirÃ©s sans impÃ´t pour l'achat." },
  { regle: "DurÃ©e maximale du compte", valeur: "15 ans", emoji: "ðŸ“†", detail: "Le CELIAPP doit Ãªtre fermÃ© au plus tard 15 ans aprÃ¨s son ouverture ou Ã  vos 71 ans, selon la premiÃ¨re Ã©ventualitÃ©." },
];

const celiappVsCeliVsReer = [
  { critere: "Cotisation dÃ©ductible d'impÃ´t ?", celiapp: "âœ… Oui â€” remboursement immÃ©diat", celi: "âŒ Non", reer: "âœ… Oui â€” remboursement immÃ©diat" },
  { critere: "Croissance libre d'impÃ´t ?", celiapp: "âœ… Oui", celi: "âœ… Oui", reer: "âœ… Oui" },
  { critere: "Retrait libre d'impÃ´t ?", celiapp: "âœ… Si achat admissible", celi: "âœ… Toujours", reer: "âŒ ImposÃ© comme revenu" },
  { critere: "Plafond annuel", celiapp: "8 000 $", celi: "7 000 $ (2026)", reer: "18% revenus (max 32 490 $)" },
  { critere: "Plafond Ã  vie", celiapp: "40 000 $", celi: "Aucun (cumulatif)", reer: "Aucun" },
  { critere: "Droits rÃ©cupÃ©rÃ©s aprÃ¨s retrait ?", celiapp: "âŒ Non", celi: "âœ… L'annÃ©e suivante", reer: "âŒ Non" },
  { critere: "IdÃ©al pour", celiapp: "Premier achat maison", celi: "Ã‰pargne flexible / retraite", reer: "Retraite (revenu Ã©levÃ©)" },
];

const faqs = [
  {
    q: "Qui peut ouvrir un CELIAPP ?",
    r: "Tout rÃ©sident canadien de 18 ans et plus qui n'a pas Ã©tÃ© propriÃ©taire d'une rÃ©sidence principale â€” ni son conjoint ou conjointe de fait â€” au cours des 4 derniÃ¨res annÃ©es civiles peut ouvrir un CELIAPP. Il faut Ã©galement ne jamais avoir bÃ©nÃ©ficiÃ© de retraits d'un CELIAPP pour un premier achat admissible dans le passÃ©.",
  },
  {
    q: "Peut-on combiner CELIAPP et RAP ?",
    r: "Oui, et c'est mÃªme la stratÃ©gie recommandÃ©e pour maximiser la mise de fonds. Le CELIAPP permet des retraits jusqu'Ã  40 000 $ entiÃ¨rement libres d'impÃ´t. Le RAP (RÃ©gime d'accession Ã  la propriÃ©tÃ©) permet en plus de retirer jusqu'Ã  35 000 $ de son REER sans impÃ´t immÃ©diat (Ã  rembourser sur 15 ans). Un couple peut ainsi combiner jusqu'Ã  150 000 $ : 80 000 $ en CELIAPP et 70 000 $ en RAP.",
  },
  {
    q: "Que se passe-t-il si on n'achÃ¨te pas de propriÃ©tÃ© ?",
    r: "Si vous n'effectuez pas d'achat admissible, vous pouvez transfÃ©rer le solde de votre CELIAPP dans un REER ou un FERR sans impÃ´t immÃ©diat et sans utiliser vos droits de cotisation REER. Ce transfert doit Ãªtre effectuÃ© avant la fermeture obligatoire du compte (15 ans ou 71 ans). Les dÃ©ductions fiscales obtenues lors des cotisations sont conservÃ©es, mais aucun retrait non admissible n'est possible sans impÃ´t.",
  },
  {
    q: "Quelles banques offrent le CELIAPP au QuÃ©bec ?",
    r: "La majoritÃ© des grandes institutions financiÃ¨res au QuÃ©bec offrent le CELIAPP : Desjardins, Banque Nationale, BMO, RBC, TD, Scotiabank, CIBC, Banque Laurentienne, ainsi que certains courtiers en ligne comme Questrade et Wealthsimple. Les types de placements admissibles (CPG, FNB, fonds communs, actions) et les frais varient selon l'institution â€” comparez avant d'ouvrir.",
  },
];

export default function CeliappPage() {
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
            <span style={{ color: "rgba(240,235,224,0.7)" }}>CELIAPP</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet Â· CELIAPP QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            CELIAPP 2026 â€” Tout Savoir sur le Compte Ã‰pargne Achat PropriÃ©tÃ©
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Plafond 8 000$/an, 40 000$ Ã  vie, retraits libres d&apos;impÃ´t pour votre premiÃ¨re propriÃ©tÃ©.
            Guide complet + calculateur d&apos;Ã©pargne.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Intro SEO */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            ðŸ¡ C&apos;est quoi le CELIAPP, concrÃ¨tement ?
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.75, marginBottom: "12px" }}>
            Le <strong>Compte d&apos;Ã©pargne libre d&apos;impÃ´t pour l&apos;achat d&apos;une premiÃ¨re propriÃ©tÃ© (CELIAPP)</strong> est un compte enregistrÃ© lancÃ© en 2023 spÃ©cifiquement pour aider les Canadiens Ã  acheter leur premiÃ¨re maison ou condo. Il combine les meilleurs avantages du REER et du CELI en un seul compte.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.75, marginBottom: "12px" }}>
            Contrairement au CELI, les cotisations au CELIAPP sont <strong>dÃ©ductibles d&apos;impÃ´t</strong> â€” vous obtenez un remboursement chaque annÃ©e. Et contrairement au REER, les retraits admissibles pour l&apos;achat d&apos;une propriÃ©tÃ© sont <strong>entiÃ¨rement libres d&apos;impÃ´t</strong>, sans obligation de remboursement.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.75, marginBottom: "16px" }}>
            Pour les QuÃ©bÃ©cois qui visent un premier achat immobilier, le CELIAPP est devenu <strong>l&apos;outil d&apos;Ã©pargne numÃ©ro un</strong> Ã  ouvrir dÃ¨s que possible â€” mÃªme si l&apos;achat est encore dans 3 Ã  5 ans. Chaque annÃ©e sans CELIAPP est une annÃ©e de droits et de rendements perdus.
          </p>
          <div className="flex flex-col gap-2">
            {[
              "Cotisations dÃ©ductibles d'impÃ´t â€” remboursement immÃ©diat Ã  la dÃ©claration",
              "Croissance des placements entiÃ¨rement Ã  l'abri de l'impÃ´t",
              "Retrait libre d'impÃ´t au moment de l'achat (pas de remboursement requis)",
              "Combinable avec le RAP (REER) pour maximiser la mise de fonds",
              "Transfert vers REER/FERR possible si vous n'achetez finalement pas",
            ].map((a, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", color: "#065F46" }}>
                <span style={{ color: GREEN, flexShrink: 0, marginTop: "1px" }}>âœ…</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plafond highlight */}
        <div style={{ background: DARK, borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", textAlign: "center" }}>
          <div>
            <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>Plafond annuel</p>
            <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1.8rem", fontWeight: 800, marginBottom: "4px" }}>8 000 $</p>
            <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px" }}>par annÃ©e civile</p>
          </div>
          <div>
            <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>Plafond Ã  vie</p>
            <p style={{ fontFamily: "var(--font-playfair)", color: GREEN, fontSize: "1.8rem", fontWeight: 800, marginBottom: "4px" }}>40 000 $</p>
            <p style={{ color: "rgba(240,235,224,0.5)", fontSize: "11px" }}>par personne</p>
          </div>
        </div>

        {/* Ad 1 */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* RÃ¨gles essentielles */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          RÃ¨gles essentielles du CELIAPP
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {regles.map((r) => (
            <div key={r.regle} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{r.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{r.regle}</span>
                  <span style={{ background: "#ECFDF5", color: "#065F46", fontSize: "12px", fontWeight: 800, padding: "2px 8px", borderRadius: "100px", flexShrink: 0 }}>{r.valeur}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{r.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Combinaison CELIAPP + RAP */}
        <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "16px", padding: "1.25rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 800, color: "#1E40AF", marginBottom: "10px" }}>
            ðŸ’¡ StratÃ©gie : CELIAPP + RAP = mise de fonds maximale
          </h2>
          <p style={{ fontSize: "13px", color: "#1E40AF", lineHeight: 1.7, marginBottom: "12px" }}>
            Le CELIAPP et le RAP (retrait REER pour premier achat) peuvent Ãªtre utilisÃ©s <strong>simultanÃ©ment</strong> lors d&apos;un mÃªme achat. C&apos;est la combinaison optimale pour maximiser votre mise de fonds sans impÃ´t immÃ©diat.
          </p>
          <div style={{ background: "white", borderRadius: "10px", padding: "12px 16px", fontSize: "13px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ color: "#1E40AF", fontWeight: 600 }}>CELIAPP (par personne)</span>
              <span style={{ fontWeight: 800, color: "#1E40AF" }}>40 000 $</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "#1E40AF", fontWeight: 600 }}>RAP â€” retrait REER (par personne)</span>
              <span style={{ fontWeight: 800, color: "#1E40AF" }}>35 000 $</span>
            </div>
            <div style={{ borderTop: "1px solid #BFDBFE", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#1E40AF", fontWeight: 700 }}>Couple â€” total combinÃ©</span>
              <span style={{ fontWeight: 800, color: "#1D4ED8", fontSize: "15px" }}>150 000 $</span>
            </div>
          </div>
          <Link href="/retraite/reer" style={{ display: "inline-block", marginTop: "10px", color: "#1D4ED8", fontWeight: 700, fontSize: "12px", textDecoration: "none" }}>
            En savoir plus sur le RAP â†’
          </Link>
        </div>

        {/* Tableau CELIAPP vs CELI vs REER */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          CELIAPP vs CELI vs REER â€” Comparatif
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Chaque compte a ses forces selon votre objectif. Le CELIAPP cumule les avantages des deux autres, mais uniquement pour l&apos;achat d&apos;une premiÃ¨re propriÃ©tÃ©.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700 }}>CritÃ¨re</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>ðŸ¡ CELIAPP</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>ðŸ“ˆ CELI</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>ðŸ’° REER</th>
              </tr>
            </thead>
            <tbody>
              {celiappVsCeliVsReer.map((r, i) => (
                <tr key={r.critere} style={{ borderBottom: i < celiappVsCeliVsReer.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "9px 12px", fontWeight: 600, color: "#44403C", fontSize: "11px" }}>{r.critere}</td>
                  <td style={{ padding: "9px 12px", textAlign: "center", color: "#1C1C1E", fontSize: "11px" }}>{r.celiapp}</td>
                  <td style={{ padding: "9px 12px", textAlign: "center", color: "#1C1C1E", fontSize: "11px" }}>{r.celi}</td>
                  <td style={{ padding: "9px 12px", textAlign: "center", color: "#1C1C1E", fontSize: "11px" }}>{r.reer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Calculateur */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Calculateur CELIAPP â€” Simulez votre Ã©pargne
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Estimez l&apos;Ã©pargne accumulÃ©e dans votre CELIAPP et l&apos;Ã©conomie d&apos;impÃ´t selon votre profil.
        </p>

        <CeliappCalculateurClient />

        {/* Ad 2 */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
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
            { href: "/retraite/reer", emoji: "ðŸ’°", titre: "REER â€” Guide complet", desc: "Plafond 2026, RAP pour l'achat d'une maison, Ã©conomie d'impÃ´t" },
            { href: "/retraite/celi", emoji: "ðŸ“ˆ", titre: "CELI â€” Tout comprendre", desc: "Droits de cotisation, placements admissibles, CELI vs CELIAPP" },
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
