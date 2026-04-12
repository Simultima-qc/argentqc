import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meilleurs logiciels impÃ´ts gratuits QuÃ©bec 2026 â€” Comparatif | ArgentQC.ca",
  description:
    "Quel logiciel d'impÃ´ts choisir au QuÃ©bec en 2026 ? Comparatif Wealthsimple ImpÃ´t, TurboImpÃ´t, H&R Block â€” options gratuites pour T1 fÃ©dÃ©ral et TP-1 provincial (Revenu QuÃ©bec).",
  keywords: [
    "logiciel impÃ´t gratuit QuÃ©bec 2026",
    "meilleur logiciel impÃ´ts Canada",
    "TurboImpÃ´t QuÃ©bec",
    "Wealthsimple impÃ´t gratuit",
    "ImpÃ´tRapide gratuit",
    "H&R Block impÃ´ts gratuit",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const logiciels = [
  {
    nom: "Wealthsimple ImpÃ´t",
    gratuit: "âœ… 100% gratuit",
    quebec: "âœ…",
    federal: "âœ…",
    netfile: "âœ…",
    profil: "SalariÃ©s, revenus simples Ã  intermÃ©diaires, investisseurs",
    avantages: "Interface la plus moderne et Ã©purÃ©e. Paiement par don optionnel. GÃ¨re les cryptomonnaies et revenus de placement. Importation automatique des feuillets T4.",
    inconvenients: "Moins complet pour les situations trÃ¨s complexes (grande entreprise).",
    couleur: "#DBEAFE",
    couleurTexte: "#1D4ED8",
    emoji: "ðŸ’™",
  },
  {
    nom: "H&R Block (ImpÃ´t Express â€” gratuit)",
    gratuit: "âœ… Gratuit (version simple)",
    quebec: "âœ…",
    federal: "âœ…",
    netfile: "âœ…",
    profil: "SalariÃ©s, retraitÃ©s, situations simples Ã  intermÃ©diaires",
    avantages: "TrÃ¨s guidÃ© â€” idÃ©al pour les premiers utilisateurs. Interface claire avec explications dÃ©taillÃ©es Ã  chaque Ã©tape.",
    inconvenients: "Certaines situations avancÃ©es nÃ©cessitent la version payante (~19,99 $).",
    couleur: "#D1FAE5",
    couleurTexte: "#065F46",
    emoji: "ðŸ’š",
  },
  {
    nom: "TurboImpÃ´t (version gratuite)",
    gratuit: "âœ… Gratuit (situations simples)",
    quebec: "âœ…",
    federal: "âœ…",
    netfile: "âœ…",
    profil: "SalariÃ©s simples, revenus d'emploi uniquement",
    avantages: "Marque bien connue, interface fiable. Importation T4 et RL-1 disponible.",
    inconvenients: "La version gratuite est limitÃ©e â€” revenus de placement, travail autonome ou location exigent la version payante (~29,99 $+).",
    couleur: "#FEF3C7",
    couleurTexte: "#92400E",
    emoji: "ðŸ’›",
  },
  {
    nom: "ImpÃ´tExpert (UFile)",
    gratuit: "Partiel â€” gratuit si revenu < 20 000 $ ou Ã©tudiant",
    quebec: "âœ…",
    federal: "âœ…",
    netfile: "âœ…",
    profil: "Ã‰tudiants, faibles revenus, situations intermÃ©diaires",
    avantages: "Gratuit pour les revenus modestes. GÃ¨re bien les situations avec revenus de location et travailleurs autonomes.",
    inconvenients: "Payant (~19,99 $) pour les revenus plus Ã©levÃ©s.",
    couleur: "#EDE9FE",
    couleurTexte: "#5B21B6",
    emoji: "ðŸ’œ",
  },
  {
    nom: "SimpleTax (maintenant Wealthsimple)",
    gratuit: "âœ… FusionnÃ© avec Wealthsimple ImpÃ´t",
    quebec: "âœ…",
    federal: "âœ…",
    netfile: "âœ…",
    profil: "MÃªme produit que Wealthsimple ImpÃ´t depuis 2020",
    avantages: "Si vous utilisez SimpleTax depuis des annÃ©es, vos donnÃ©es sont dans Wealthsimple ImpÃ´t.",
    inconvenients: "N/A â€” mÃªme produit.",
    couleur: "#F0FDF4",
    couleurTexte: "#166534",
    emoji: "ðŸŒ¿",
  },
];

const parProfil = [
  {
    profil: "SalariÃ© avec revenus simples (T4 + RL-1 seulement)",
    recommandation: "Wealthsimple ImpÃ´t ou H&R Block gratuit",
    detail: "Situation la plus courante. Tous les logiciels gratuits conviennent. Wealthsimple est le plus intuitif.",
    emoji: "ðŸ‘¤",
  },
  {
    profil: "Ã‰tudiant ou revenu sous 20 000 $",
    recommandation: "ImpÃ´tExpert (UFile) â€” gratuit pour Ã©tudiants",
    detail: "ImpÃ´tExpert est gratuit pour les Ã©tudiants et les revenus sous 20 000 $. GÃ¨re bien les frais de scolaritÃ© et les crÃ©dits Ã©tudiants.",
    emoji: "ðŸŽ“",
  },
  {
    profil: "Travailleur autonome (revenus d'entreprise)",
    recommandation: "TurboImpÃ´t Travailleur autonome ou H&R Block payant",
    detail: "Les versions gratuites ne gÃ¨rent pas le formulaire T2125 (Ã©tat des rÃ©sultats d'entreprise). PrÃ©voyez 20â€“40 $ pour une version complÃ¨te.",
    emoji: "ðŸ’¼",
  },
  {
    profil: "PropriÃ©taire avec revenus locatifs",
    recommandation: "ImpÃ´tExpert ou TurboImpÃ´t payant",
    detail: "Les revenus de location (formulaire T776 / RL-31) nÃ©cessitent gÃ©nÃ©ralement une version payante. Budget ~20â€“30 $.",
    emoji: "ðŸ ",
  },
  {
    profil: "Investisseur (gains en capital, dividendes)",
    recommandation: "Wealthsimple ImpÃ´t (cryptos incluses) ou TurboImpÃ´t payant",
    detail: "Wealthsimple gÃ¨re bien les revenus de placement et les cryptomonnaies dans sa version gratuite. Pour les situations complexes (plusieurs courtiers), une version payante est prÃ©fÃ©rable.",
    emoji: "ðŸ“ˆ",
  },
  {
    profil: "Situation trÃ¨s complexe (entreprise + placements + location)",
    recommandation: "Comptable ou fiscaliste",
    detail: "Au-delÃ  d'un certain niveau de complexitÃ©, un professionnel paie pour lui-mÃªme â€” ses honoraires sont souvent dÃ©ductibles d'impÃ´t et son expertise Ã©vite des erreurs coÃ»teuses.",
    emoji: "ðŸ§®",
  },
];

const cliniquesImpots = [
  "Le Programme communautaire des bÃ©nÃ©voles en matiÃ¨re d'impÃ´t (PCBMI) offre de l'aide gratuite pour les dÃ©clarations simples dans les bibliothÃ¨ques, CLSC et centres communautaires.",
  "Accessible si votre revenu est modeste : gÃ©nÃ©ralement moins de 35 000 $ (seul) ou 45 000 $ (couple).",
  "Les bÃ©nÃ©voles sont formÃ©s par l'ARC et peuvent produire votre T1 fÃ©dÃ©ral et votre TP-1 provincial gratuitement.",
  "Pour trouver une clinique prÃ¨s de chez vous : recherchez Â« PCBMI QuÃ©bec Â» sur canada.ca ou appelez le 1-800-959-8281.",
];

const faqs = [
  {
    q: "Un logiciel d'impÃ´ts gratuit peut-il vraiment produire ma dÃ©claration Revenu QuÃ©bec ?",
    r: "Oui â€” tous les logiciels homologuÃ©s par l'ARC (NETFILE) et par Revenu QuÃ©bec (ImpÃ´tNet) peuvent produire les deux dÃ©clarations simultanÃ©ment. Wealthsimple ImpÃ´t, H&R Block et TurboImpÃ´t produisent le T1 fÃ©dÃ©ral ET le TP-1 provincial en une seule session, et les transmettent Ã©lectroniquement aux deux organismes.",
  },
  {
    q: "Mes donnÃ©es fiscales sont-elles en sÃ©curitÃ© avec ces logiciels ?",
    r: "Les logiciels homologuÃ©s NETFILE et ImpÃ´tNet doivent respecter des normes de sÃ©curitÃ© strictes imposÃ©es par l'ARC et Revenu QuÃ©bec. Wealthsimple, H&R Block et TurboImpÃ´t sont des entreprises Ã©tablies avec des mesures de chiffrement standards. Ã‰vitez les logiciels inconnus ou non homologuÃ©s.",
  },
  {
    q: "Quelle est la diffÃ©rence entre NETFILE et ImpÃ´tNet ?",
    r: "NETFILE est le service de transmission Ã©lectronique de l'ARC pour la dÃ©claration fÃ©dÃ©rale (T1). ImpÃ´tNet est le service Ã©quivalent de Revenu QuÃ©bec pour la dÃ©claration provinciale (TP-1). Un logiciel homologuÃ© pour les deux vous permet de transmettre les deux dÃ©clarations en mÃªme temps, en une seule Ã©tape.",
  },
  {
    q: "Puis-je utiliser le mÃªme logiciel que l'an dernier ?",
    r: "Oui â€” la plupart des logiciels conservent vos informations d'une annÃ©e Ã  l'autre pour faciliter le processus. Assurez-vous d'utiliser la version 2026 (pour l'annÃ©e d'imposition 2025) et non la version de l'annÃ©e prÃ©cÃ©dente â€” les tables d'impÃ´t et les plafonds changent chaque annÃ©e.",
  },
  {
    q: "Vaut-il mieux aller voir un comptable ?",
    r: "Pour la majoritÃ© des salariÃ©s quÃ©bÃ©cois avec une situation simple (revenus d'emploi, REER, crÃ©dits standards), un logiciel gratuit suffit amplement. Un comptable ou fiscaliste devient utile si vous avez des revenus d'entreprise importants, des transactions immobiliÃ¨res, des gains en capital complexes, ou si vous avez des questions sur la planification fiscale Ã  long terme. Les honoraires d'un fiscaliste sont souvent dÃ©ductibles.",
  },
];

export default function LogicielsImpotsPage() {
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
            <Link href="/impots" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>ImpÃ´ts</Link>
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Logiciels</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Comparatif Â· Logiciels impÃ´ts QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Meilleurs logiciels pour faire ses impÃ´ts au QuÃ©bec en 2026 â€” gratuits et payants
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Wealthsimple, TurboImpÃ´t, H&R Block â€” lequel choisir selon votre profil ? Tous produisent le T1 fÃ©dÃ©ral et le TP-1 Revenu QuÃ©bec en mÃªme temps.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Tableau comparatif */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Comparatif des logiciels 2026
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Logiciel</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Gratuit</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>QuÃ©bec (TP1)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>FÃ©dÃ©ral (T1)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>NETFILE/ImpÃ´tNet</th>
              </tr>
            </thead>
            <tbody>
              {logiciels.map((l, i) => (
                <tr key={l.nom} style={{ borderBottom: i < logiciels.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 700, color: "#1C1C1E" }}>{l.emoji}{" "}{l.nom}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>{l.gratuit}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: "14px" }}>{l.quebec}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: "14px" }}>{l.federal}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", fontSize: "14px" }}>{l.netfile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fiches dÃ©taillÃ©es */}
        <div className="flex flex-col gap-4 mb-10">
          {logiciels.map((l) => (
            <div key={l.nom} style={{ background: l.couleur, border: `1px solid ${l.couleur}`, borderRadius: "16px", padding: "1.25rem" }}>
              <div style={{ fontWeight: 800, fontSize: "15px", color: l.couleurTexte, marginBottom: "8px" }}>{l.emoji}{" "}{l.nom}</div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "10px" }}>
                <span style={{ background: "white", color: l.couleurTexte, fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px" }}>{l.gratuit}</span>
                <span style={{ background: "white", color: "#44403C", fontSize: "11px", padding: "2px 8px", borderRadius: "100px" }}>Pour : {l.profil}</span>
              </div>
              <p style={{ fontSize: "12px", color: l.couleurTexte, lineHeight: 1.65, margin: "0 0 6px" }}>
                <strong>Avantages :</strong>{" "}{l.avantages}
              </p>
              <p style={{ fontSize: "12px", color: l.couleurTexte, lineHeight: 1.65, margin: 0, opacity: 0.8 }}>
                <strong>Limites :</strong>{" "}{l.inconvenients}
              </p>
            </div>
          ))}
        </div>

        {/* Ad mid-content */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Par profil */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Quel logiciel selon votre profil ?
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {parProfil.map((p, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{p.emoji}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "4px" }}>{p.profil}</div>
                <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "8px", padding: "4px 10px", display: "inline-block", fontSize: "12px", fontWeight: 700, color: "#065F46", marginBottom: "6px" }}>
                  â†’ {p.recommandation}
                </div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{p.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cliniques gratuites */}
        <div style={{ background: DARK, borderRadius: "16px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#F0EBE0", marginBottom: "12px" }}>
            ðŸ¤ Cliniques d&apos;impÃ´ts gratuites au QuÃ©bec
          </h2>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {cliniquesImpots.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>âœ“</span>
                <span style={{ fontSize: "13px", color: "rgba(240,235,224,0.7)", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
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
            { href: "/impots/dates", emoji: "ðŸ“…", titre: "Dates limites impÃ´ts 2026", desc: "30 avril pour les salariÃ©s â€” ne manquez pas la date" },
            { href: "/impots/remboursement", emoji: "ðŸ’°", titre: "Maximiser votre remboursement", desc: "CrÃ©dits souvent oubliÃ©s + dÃ©lais de rÃ©ception" },
            { href: "/impots", emoji: "ðŸ“‹", titre: "Guide impÃ´ts QuÃ©bec 2026", desc: "ARC vs Revenu QuÃ©bec â€” tout comprendre" },
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
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affiliÃ© aux logiciels mentionnÃ©s. VÃ©rifiez les conditions d&apos;utilisation et les tarifs directement auprÃ¨s des Ã©diteurs.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
