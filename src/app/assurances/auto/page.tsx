import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assurance auto au QuÃ©bec en 2026 â€” Fonctionnement et Ã©conomies | ArgentQC.ca",
  description:
    "Comment fonctionne l'assurance auto au QuÃ©bec en 2026 : rÃ©gime mixte SAAQ/privÃ©, couvertures disponibles, prix moyens par profil et 7 conseils pour rÃ©duire votre prime.",
  keywords: [
    "assurance auto QuÃ©bec",
    "prix assurance auto QuÃ©bec 2026",
    "assurance auto MontrÃ©al",
    "rÃ©duire prime assurance auto QuÃ©bec",
    "SAAQ assurance privÃ©e QuÃ©bec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const couvertures = [
  {
    nom: "ResponsabilitÃ© civile",
    obligatoire: true,
    desc: "Couvre les dommages matÃ©riels que vous causez Ã  autrui (autres vÃ©hicules, clÃ´tures, bÃ¢timents). Minimum lÃ©gal au QuÃ©bec : 50 000 $. RecommandÃ© : 1 000 000 $ et plus.",
    emoji: "âš–ï¸",
  },
  {
    nom: "Collision (A)",
    obligatoire: false,
    desc: "Couvre les dommages Ã  votre propre vÃ©hicule lors d'une collision avec un autre vÃ©hicule ou objet, peu importe la responsabilitÃ©.",
    emoji: "ðŸ’¥",
  },
  {
    nom: "Risques spÃ©ciaux (B)",
    obligatoire: false,
    desc: "Couvre les dommages causÃ©s par des Ã©vÃ©nements hors collision : vol, vandalisme, incendie, bris de vitre, grÃªle, inondation.",
    emoji: "ðŸŒ©ï¸",
  },
  {
    nom: "Tous risques (A+B)",
    obligatoire: false,
    desc: "Combinaison des deux â€” la couverture la plus complÃ¨te. RecommandÃ©e pour les vÃ©hicules neufs ou de valeur Ã©levÃ©e.",
    emoji: "ðŸ›¡ï¸",
  },
  {
    nom: "VÃ©hicule de remplacement",
    obligatoire: false,
    desc: "Vous fournit un vÃ©hicule de remplacement si le vÃ´tre est en rÃ©paration ou volÃ©. Disponible en option chez la plupart des assureurs.",
    emoji: "ðŸ”„",
  },
  {
    nom: "Protection d'indemnisation directe",
    obligatoire: false,
    desc: "Permet d'Ãªtre indemnisÃ© directement par votre propre assureur, mÃªme si l'autre conducteur est responsable. Ã‰vite les dÃ©lais de rÃ©clamation.",
    emoji: "âš¡",
  },
];

const facteurs = [
  { facteur: "RÃ©gion", impact: "Ã‰levÃ©", detail: "MontrÃ©al coÃ»te significativement plus cher (taux de vol et d'accidents plus Ã©levÃ©). Laval et Longueuil sont moins chÃ¨res. Les rÃ©gions sont les moins chÃ¨res.", emoji: "ðŸ“" },
  { facteur: "Ã‚ge du conducteur", impact: "TrÃ¨s Ã©levÃ©", detail: "Les 16-25 ans paient souvent 2 Ã  3Ã— plus cher qu'un conducteur de 35-50 ans. Les 70+ ans voient aussi leur prime augmenter.", emoji: "ðŸŽ‚" },
  { facteur: "Dossier de conduite", impact: "TrÃ¨s Ã©levÃ©", detail: "Chaque rÃ©clamation ou infraction peut augmenter votre prime de 10 Ã  50% pour 3 Ã  6 ans. Un bon dossier est votre meilleur atout.", emoji: "ðŸ“‹" },
  { facteur: "Type de vÃ©hicule", impact: "Ã‰levÃ©", detail: "Les vÃ©hicules souvent volÃ©s (Honda CR-V, Ford F-150) coÃ»tent plus cher Ã  assurer. La puissance du moteur influence aussi la prime.", emoji: "ðŸš™" },
  { facteur: "KilomÃ©trage annuel", impact: "ModÃ©rÃ©", detail: "Moins vous conduisez, moins vous risquez d'avoir un accident. DÃ©clarer un kilomÃ©trage rÃ©aliste peut rÃ©duire votre prime.", emoji: "ðŸ”¢" },
  { facteur: "Usage du vÃ©hicule", impact: "ModÃ©rÃ©", detail: "Usage personnel < usage pour le travail (navette) < usage commercial. Les livraisons et covoiturage rÃ©munÃ©rÃ© changent la couverture nÃ©cessaire.", emoji: "ðŸ“¦" },
  { facteur: "Franchise choisie", impact: "Direct", detail: "Une franchise plus Ã©levÃ©e (ex : 1 000 $ au lieu de 500 $) rÃ©duit votre prime. Assurez-vous de pouvoir payer cette franchise en cas de sinistre.", emoji: "ðŸ’°" },
];

const prixProfils = [
  { profil: "Jeune conducteur 16-24 ans", vehicule: "Citadine 2019", montreal: "2 800â€“4 500 $", laval: "2 200â€“3 500 $", regions: "1 800â€“2 800 $", par: "/an" },
  { profil: "Conducteur 25-39 ans", vehicule: "VUS 2021", montreal: "1 400â€“2 200 $", laval: "1 100â€“1 700 $", regions: "900â€“1 400 $", par: "/an" },
  { profil: "Conducteur 40-59 ans", vehicule: "Berline 2020", montreal: "1 100â€“1 700 $", laval: "850â€“1 350 $", regions: "700â€“1 100 $", par: "/an" },
  { profil: "Conducteur 60+ ans", vehicule: "Berline 2018", montreal: "1 200â€“1 900 $", laval: "950â€“1 500 $", regions: "800â€“1 200 $", par: "/an" },
];

const conseils = [
  { conseil: "Magasinez Ã  chaque renouvellement", detail: "Obtenez au moins 3 soumissions â€” Intact, Desjardins, Industrielle Alliance, CAA. Les Ã©carts peuvent dÃ©passer 500 $/an pour une couverture identique.", emoji: "ðŸ”" },
  { conseil: "Augmentez votre franchise", detail: "Passer de 500 $ Ã  1 000 $ de franchise peut rÃ©duire votre prime de 10 Ã  20%. IdÃ©al si vous avez ce montant disponible en Ã©pargne d'urgence.", emoji: "ðŸ“ˆ" },
  { conseil: "Regroupez auto + habitation", detail: "La plupart des assureurs offrent 5 Ã  15% de rabais si vous combinez assurance auto et habitation. Souvent le meilleur rapport qualitÃ©/prix.", emoji: "ðŸ " },
  { conseil: "Suivez un cours de conduite avancÃ©", detail: "Certains assureurs offrent des rabais aux conducteurs ayant suivi des cours de conduite reconnus, surtout pour les jeunes.", emoji: "ðŸŽ“" },
  { conseil: "Installez un tÃ©lÃ©mÃ¨tre (tÃ©lÃ©matique)", detail: "Desjardins (Ajusto), Intact (my Driving Discount) offrent des rabais pouvant atteindre 25% si vous conduisez prudemment selon leur application.", emoji: "ðŸ“±" },
  { conseil: "VÃ©rifiez votre dossier SAAQ", detail: "Des points d'inaptitude ou infractions oubliÃ©es peuvent faire grimper votre prime. VÃ©rifiez votre dossier de conduite sur le site de la SAAQ.", emoji: "ðŸ“„" },
  { conseil: "Retirez la collision sur les vieux vÃ©hicules", detail: "Si votre vÃ©hicule vaut moins de 5 000 $, la couverture collision coÃ»te souvent plus cher sur 3 ans que la valeur du vÃ©hicule. Ã‰valuez la pertinence.", emoji: "ðŸ§®" },
];

const faqs = [
  {
    q: "Pourquoi l'assurance auto est-elle plus chÃ¨re Ã  MontrÃ©al ?",
    r: "MontrÃ©al affiche un taux de vol de vÃ©hicules parmi les plus Ã©levÃ©s au Canada, ainsi qu'une densitÃ© de circulation plus importante qui se traduit par plus d'accidents. Ces facteurs de risque sont directement rÃ©percutÃ©s dans les primes. Laval et Longueuil sont gÃ©nÃ©ralement 15 Ã  25% moins chÃ¨res que MontrÃ©al pour un profil similaire.",
  },
  {
    q: "La SAAQ couvre-t-elle tout en cas d'accident ?",
    r: "Non. La SAAQ couvre uniquement les dommages corporels (blessures, dÃ©cÃ¨s, rÃ©adaptation) pour toute personne impliquÃ©e dans un accident automobile au QuÃ©bec, peu importe la faute. Les dommages matÃ©riels (votre vÃ©hicule, les autres vÃ©hicules, les bÃ¢timents) sont couverts par votre assureur privÃ©, selon les garanties souscrites.",
  },
  {
    q: "Suis-je couvert si j'utilise mon vÃ©hicule pour Uber ou DoorDash ?",
    r: "Non, en rÃ¨gle gÃ©nÃ©rale. L'utilisation commerciale de votre vÃ©hicule (livraison, covoiturage rÃ©munÃ©rÃ©) n'est pas couverte par une assurance personnelle standard. Vous devez dÃ©clarer cet usage Ã  votre assureur et souscrire une couverture commerciale, sans quoi une rÃ©clamation pourrait Ãªtre refusÃ©e.",
  },
  {
    q: "Comment contester une hausse de prime injustifiÃ©e ?",
    r: "Vous pouvez d'abord demander une explication Ã©crite Ã  votre assureur. Si vous n'Ãªtes pas satisfait, contactez le Bureau d'assurance du Canada (BAC) ou l'AutoritÃ© des marchÃ©s financiers (AMF) du QuÃ©bec. Magasiner chez un autre assureur reste souvent la solution la plus rapide.",
  },
];

export default function AssuranceAutoPage() {
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
            <Link href="/assurances" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Assurances</Link>
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Auto</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide Â· Assurance auto QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Assurance auto au QuÃ©bec en 2026 â€” Fonctionnement et Ã©conomies
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            RÃ©gime mixte SAAQ/privÃ©, couvertures disponibles, prix moyens par profil
            et 7 stratÃ©gies concrÃ¨tes pour rÃ©duire votre prime d&apos;assurance auto.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* SAAQ vs privÃ© */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Le rÃ©gime quÃ©bÃ©cois : SAAQ + assureur privÃ©
        </h2>
        <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "13px", color: "#1E3A8A", lineHeight: 1.7, marginBottom: "1rem" }}>
            Au QuÃ©bec, l&apos;assurance automobile fonctionne en deux volets distincts â€” une particularitÃ© unique au Canada :
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "10px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "#1E40AF", color: "white" }}>
                  <th style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700 }}>Volet</th>
                  <th style={{ padding: "9px 12px", textAlign: "center", fontWeight: 700 }}>Gestionnaire</th>
                  <th style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700 }}>Ce qui est couvert</th>
                  <th style={{ padding: "9px 12px", textAlign: "center", fontWeight: 700 }}>PayÃ© via</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #EFF6FF" }}>
                  <td style={{ padding: "9px 12px", fontWeight: 700, color: "#1E40AF" }}>Dommages corporels</td>
                  <td style={{ padding: "9px 12px", textAlign: "center" }}><span style={{ background: "#DBEAFE", color: "#1D4ED8", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", fontSize: "11px" }}>SAAQ</span></td>
                  <td style={{ padding: "9px 12px", color: "#1C1C1E", fontSize: "12px" }}>Blessures, dÃ©cÃ¨s, rÃ©adaptation de toute personne â€” sans Ã©gard Ã  la faute</td>
                  <td style={{ padding: "9px 12px", textAlign: "center", color: "#44403C", fontSize: "12px" }}>Immatriculation</td>
                </tr>
                <tr>
                  <td style={{ padding: "9px 12px", fontWeight: 700, color: "#92400E" }}>Dommages matÃ©riels</td>
                  <td style={{ padding: "9px 12px", textAlign: "center" }}><span style={{ background: "#FEF3C7", color: "#92400E", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", fontSize: "11px" }}>Assureur privÃ©</span></td>
                  <td style={{ padding: "9px 12px", color: "#1C1C1E", fontSize: "12px" }}>VÃ©hicules, biens, responsabilitÃ© civile envers les tiers</td>
                  <td style={{ padding: "9px 12px", textAlign: "center", color: "#44403C", fontSize: "12px" }}>Prime mensuelle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Ad bloc 1 â€” CPC fort */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "90px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Couvertures */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Les couvertures disponibles
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {couvertures.map((c) => (
            <div key={c.nom} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{c.emoji}</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{c.nom}</span>
                  {c.obligatoire && (
                    <span style={{ background: "#FEF3C7", color: "#92400E", fontSize: "10px", fontWeight: 700, padding: "2px 6px", borderRadius: "100px" }}>Obligatoire</span>
                  )}
                </div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Facteurs */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Facteurs qui influencent votre prime
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {facteurs.map((f) => (
            <div key={f.facteur} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{f.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{f.facteur}</span>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, padding: "2px 6px", borderRadius: "100px",
                    background: f.impact === "TrÃ¨s Ã©levÃ©" ? "#FEE2E2" : f.impact === "Ã‰levÃ©" ? "#FEF3C7" : "#F3F4F6",
                    color: f.impact === "TrÃ¨s Ã©levÃ©" ? "#991B1B" : f.impact === "Ã‰levÃ©" ? "#92400E" : "#44403C",
                    flexShrink: 0,
                  }}>Impact {f.impact}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{f.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prix par profil */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Prix moyens par profil (2026)
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Estimations pour une couverture complÃ¨te (responsabilitÃ© civile 1M$ + tous risques). Les prix varient selon le vÃ©hicule et l&apos;assureur.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700 }}>Profil</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>ðŸ™ï¸ MontrÃ©al</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>ðŸŒ¿ Laval</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>ðŸŒ² RÃ©gions</th>
              </tr>
            </thead>
            <tbody>
              {prixProfils.map((p, i) => (
                <tr key={p.profil} style={{ borderBottom: i < prixProfils.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 12px" }}>
                    <div style={{ fontWeight: 600, color: "#1C1C1E", fontSize: "13px" }}>{p.profil}</div>
                    <div style={{ fontSize: "11px", color: "#A8A29E" }}>{p.vehicule}</div>
                  </td>
                  <td style={{ padding: "10px 12px", textAlign: "center", color: "#44403C" }}>{p.montreal}</td>
                  <td style={{ padding: "10px 12px", textAlign: "center", color: "#44403C" }}>{p.laval}</td>
                  <td style={{ padding: "10px 12px", textAlign: "center", color: "#44403C" }}>{p.regions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ad bloc 2 â€” avant les conseils */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "90px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Conseils */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          7 faÃ§ons de rÃ©duire votre prime d&apos;assurance auto
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {conseils.map((c, i) => (
            <div key={c.conseil} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: DARK, color: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, flexShrink: 0 }}>
                {i + 1}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E", marginBottom: "4px" }}>{c.conseil}</div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{c.detail}</p>
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

        {/* Liens internes */}
        <div className="flex flex-col gap-3 mb-4">
          {[
            { href: "/budget/calculateur", emoji: "ðŸ“Š", titre: "IntÃ©grez votre prime Ã  votre budget mensuel", desc: "Calculateur budget personnalisÃ© â€” inclus transport et assurances" },
            { href: "/assurances/habitation", emoji: "ðŸ ", titre: "Assurance habitation QuÃ©bec", desc: "Regroupez auto + habitation pour Ã©conomiser 5 Ã  15%" },
            { href: "/assurances/vie", emoji: "â¤ï¸", titre: "ProtÃ©gez aussi votre famille â€” Assurance vie", desc: "Temporaire ou permanente : estimez votre couverture idÃ©ale" },
            { href: "/assurances", emoji: "ðŸ›¡ï¸", titre: "Retour au guide assurances QuÃ©bec", desc: "Vue d'ensemble des types d'assurance" },
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
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif. Les prix sont des estimations â€” obtenez des soumissions auprÃ¨s d&apos;assureurs pour votre situation prÃ©cise.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
