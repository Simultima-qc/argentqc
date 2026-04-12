import type { Metadata } from "next";
import Link from "next/link";
import AssuranceVieCalculateurClient from "./AssuranceVieCalculateurClient";

export const metadata: Metadata = {
  title: "Assurance Vie au QuÃ©bec 2026 â€” Guide Complet et Comparatif | ArgentQC.ca",
  description:
    "Temporaire ou permanente? Comparez les assurances vie au QuÃ©bec : Industrielle Alliance, Beneva, Desjardins, SSQ. Calculez le montant de couverture dont vous avez besoin.",
  keywords: [
    "assurance vie QuÃ©bec",
    "meilleure assurance vie QuÃ©bec",
    "combien d'assurance vie ai-je besoin",
    "assurance vie temporaire permanente QuÃ©bec",
    "assurance vie 2026",
  ],
  alternates: {
    canonical: "https://argentqc.ca/assurances/vie",
  },
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const tempVsPerm = [
  { critere: "DurÃ©e de la couverture", temporaire: "PÃ©riode fixe : 10, 20 ou 30 ans", permanente: "Toute la vie (sans expiration)" },
  { critere: "CoÃ»t mensuel", temporaire: "Faible Ã  l'achat (ex: 25â€“50 $/mois Ã  30 ans)", permanente: "Beaucoup plus Ã©levÃ© (3â€“5Ã— plus cher)" },
  { critere: "Valeur de rachat", temporaire: "âŒ Aucune valeur accumulÃ©e", permanente: "âœ… Capital qui s'accumule avec le temps" },
  { critere: "Renouvellement", temporaire: "Possible â€” prime augmente Ã  chaque renouvellement", permanente: "N/A â€” couverture garantie Ã  vie" },
  { critere: "Prime fixe dans le temps ?", temporaire: "Oui (pendant la pÃ©riode)", permanente: "Oui (vie entiÃ¨re) ou variable (vie universelle)" },
  { critere: "Succession et legs", temporaire: "LimitÃ© Ã  la pÃ©riode couverte", permanente: "âœ… Garantit un hÃ©ritage peu importe l'Ã¢ge du dÃ©cÃ¨s" },
  { critere: "IdÃ©al pour", temporaire: "HypothÃ¨que, jeune famille, dettes importantes", permanente: "Planification successorale, legs, revenu passif" },
];

const assureurs = [
  {
    nom: "Industrielle Alliance (iA)",
    emoji: "ðŸ¦",
    type: "Temporaire + Permanente",
    pointFort: "Leader au QuÃ©bec, large rÃ©seau de conseillers, gamme iA Tempo trÃ¨s populaire pour les familles.",
    couleur: "#DBEAFE",
    textColor: "#1E40AF",
  },
  {
    nom: "Beneva",
    emoji: "ðŸŒ¿",
    type: "Temporaire + Permanente",
    pointFort: "NÃ© de la fusion Desjardins Assurances vie, SSQ et La Capitale. Forte prÃ©sence au QuÃ©bec, orientÃ© coopÃ©ratif et mutuelliste.",
    couleur: "#D1FAE5",
    textColor: "#065F46",
  },
  {
    nom: "Desjardins Assurances",
    emoji: "ðŸ",
    type: "Temporaire + Permanente",
    pointFort: "IntÃ©gration facile avec autres produits Desjardins (hypothÃ¨que, REER). TrÃ¨s accessible pour membres des caisses Desjardins.",
    couleur: "#FEF3C7",
    textColor: "#92400E",
  },
  {
    nom: "Canada Vie",
    emoji: "ðŸ‡¨ðŸ‡¦",
    type: "Temporaire + Vie universelle",
    pointFort: "Grande institution nationale, solide rÃ©putation. Offre notamment la vie universelle pour la planification successorale avancÃ©e.",
    couleur: "#EDE9FE",
    textColor: "#5B21B6",
  },
  {
    nom: "Sun Life",
    emoji: "â˜€ï¸",
    type: "Temporaire + Permanente",
    pointFort: "Vaste rÃ©seau de conseillers indÃ©pendants. Produits flexibles incluant assurance vie avec protection maladies graves intÃ©grÃ©e.",
    couleur: "#FEF9C3",
    textColor: "#854D0E",
  },
];

const faqs = [
  {
    q: "Quelle diffÃ©rence entre temporaire et permanente ?",
    r: "L'assurance temporaire couvre une pÃ©riode dÃ©finie (10, 20 ou 30 ans) Ã  une prime abordable â€” idÃ©ale pendant les annÃ©es oÃ¹ vous avez une hypothÃ¨que ou des enfants Ã  charge. L'assurance permanente (vie entiÃ¨re ou universelle) couvre toute la vie et peut accumuler une valeur de rachat, mais les primes sont beaucoup plus Ã©levÃ©es. Pour la grande majoritÃ© des QuÃ©bÃ©cois, la temporaire est suffisante.",
  },
  {
    q: "Combien d'assurance vie ai-je besoin ?",
    r: "Une rÃ¨gle de base : entre 7 et 10 fois votre revenu annuel. Une mÃ©thode plus prÃ©cise : (revenu annuel Ã— annÃ©es Ã  couvrir) + solde hypothÃ©caire + (50 000$ Ã— enfants Ã  charge). Pour une famille type au QuÃ©bec avec un revenu de 70 000$ et une hypothÃ¨que de 300 000$, cela reprÃ©sente environ 1,0 Ã  1,4 M$ de couverture recommandÃ©e. Notre estimateur ci-dessus vous donne un calcul personnalisÃ©.",
  },
  {
    q: "Ã€ quel Ã¢ge souscrire une assurance vie ?",
    r: "Le plus tÃ´t possible â€” les primes augmentent significativement avec l'Ã¢ge et l'Ã©tat de santÃ©. Un homme de 30 ans en bonne santÃ© paiera typiquement 25â€“40 $/mois pour 500 000$ de couverture temporaire 20 ans. Le mÃªme profil Ã  45 ans paiera 80â€“130 $/mois. Souscrivez dÃ¨s que vous avez des dÃ©pendants (enfants, conjoint) ou des dettes importantes (hypothÃ¨que).",
  },
  {
    q: "L'assurance vie est-elle dÃ©ductible d'impÃ´t au Canada ?",
    r: "En gÃ©nÃ©ral, non â€” les primes d'assurance vie personnelle ne sont pas dÃ©ductibles d'impÃ´t pour les particuliers. En revanche, les prestations de dÃ©cÃ¨s reÃ§ues par les bÃ©nÃ©ficiaires sont entiÃ¨rement libres d'impÃ´t au Canada. Exception : certains travailleurs autonomes peuvent dÃ©duire les primes dans des circonstances trÃ¨s prÃ©cises (assurance vie servant de garantie pour un prÃªt d'entreprise). Consultez un conseiller fiscal pour votre situation.",
  },
];

export default function AssuranceViePage() {
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
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Assurance vie</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet Â· Assurance vie QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Assurance Vie au QuÃ©bec 2026 â€” Guide Complet et Comparatif
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Temporaire ou permanente, combien de couverture, quels assureurs â€” tout ce qu&apos;il faut savoir
            pour protÃ©ger vos proches et calculer le montant adaptÃ© Ã  votre situation.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Intro SEO */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            â¤ï¸ Pourquoi souscrire une assurance vie ?
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.75, marginBottom: "12px" }}>
            L&apos;assurance vie est conÃ§ue pour <strong>protÃ©ger financiÃ¨rement les personnes qui dÃ©pendent de vous</strong> en cas de dÃ©cÃ¨s. Contrairement Ã  l&apos;assurance auto ou habitation, elle n&apos;est pas obligatoire â€” mais elle devient essentielle dÃ¨s que vous avez des responsabilitÃ©s financiÃ¨res envers d&apos;autres personnes.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.75, marginBottom: "12px" }}>
            Pour une <strong>jeune famille quÃ©bÃ©coise</strong> avec une hypothÃ¨que, des enfants et un seul revenu (ou deux revenus indispensables), la disparition soudaine d&apos;un revenu peut Ãªtre catastrophique. L&apos;assurance vie remplace ce revenu et permet au conjoint survivant de rembourser l&apos;hypothÃ¨que, couvrir les frais d&apos;Ã©ducation des enfants et maintenir le train de vie familial.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.75, marginBottom: "16px" }}>
            Les primes d&apos;assurance vie augmentent avec l&apos;Ã¢ge et se basent sur votre Ã©tat de santÃ© au moment de la souscription. Souscrire tÃ´t â€” idÃ©alement avant 35 ans ou Ã  l&apos;achat de votre premiÃ¨re propriÃ©tÃ© â€” vous garantit des primes basses et une couverture complÃ¨te.
          </p>
          <div className="flex flex-col gap-2">
            {[
              "ProtÃ¨ge votre famille si vous dÃ©cÃ©dez pendant les annÃ©es de dettes (hypothÃ¨que, prÃªts)",
              "Les prestations reÃ§ues par les bÃ©nÃ©ficiaires sont entiÃ¨rement libres d'impÃ´t",
              "Les primes fixes Ã  la souscription â€” moins cher si on souscrit jeune et en bonne santÃ©",
              "Peut couvrir les frais d'obsÃ¨ques et les dettes de succession",
              "Combinable avec l'assurance invaliditÃ© pour une protection complÃ¨te des revenus",
            ].map((a, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", color: "#065F46" }}>
                <span style={{ color: GREEN, flexShrink: 0, marginTop: "1px" }}>âœ…</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ad 1 */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Temporaire vs Permanente */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Temporaire vs Permanente â€” Laquelle choisir ?
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Le choix entre temporaire et permanente dÃ©pend de vos objectifs : protÃ©ger un risque limitÃ© dans le temps (hypothÃ¨que, enfants) ou planifier une succession.
        </p>
        <div className="grid grid-cols-1 gap-4 mb-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div style={{ background: "white", border: "2px solid #BFDBFE", borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>â±ï¸</div>
            <h3 style={{ fontWeight: 800, fontSize: "14px", color: "#1E40AF", marginBottom: "6px" }}>Assurance temporaire</h3>
            <p style={{ fontSize: "12px", color: "#1E3A8A", lineHeight: 1.65, marginBottom: "10px" }}>
              Couvre une pÃ©riode dÃ©finie. La prime est fixe pendant la durÃ©e choisie, puis augmente au renouvellement. Aucune valeur de rachat.
            </p>
            <div style={{ background: "#DBEAFE", borderRadius: "8px", padding: "8px 12px", fontSize: "12px", color: "#1E40AF", fontWeight: 600 }}>
              âœ… IdÃ©al pour : hypothÃ¨que, jeune famille, budget limitÃ©
            </div>
          </div>
          <div style={{ background: "white", border: "2px solid #A7F3D0", borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>â™¾ï¸</div>
            <h3 style={{ fontWeight: 800, fontSize: "14px", color: "#065F46", marginBottom: "6px" }}>Assurance permanente</h3>
            <p style={{ fontSize: "12px", color: "#047857", lineHeight: 1.65, marginBottom: "10px" }}>
              Couvre toute la vie. Accumule une valeur de rachat pouvant Ãªtre utilisÃ©e de votre vivant. Prime plus Ã©levÃ©e mais stable.
            </p>
            <div style={{ background: "#D1FAE5", borderRadius: "8px", padding: "8px 12px", fontSize: "12px", color: "#065F46", fontWeight: 600 }}>
              âœ… IdÃ©al pour : planification successorale, legs, patrimoine
            </div>
          </div>
        </div>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700 }}>CritÃ¨re</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>â±ï¸ Temporaire</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>â™¾ï¸ Permanente</th>
              </tr>
            </thead>
            <tbody>
              {tempVsPerm.map((r, i) => (
                <tr key={r.critere} style={{ borderBottom: i < tempVsPerm.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "9px 12px", fontWeight: 600, color: "#44403C", fontSize: "11px" }}>{r.critere}</td>
                  <td style={{ padding: "9px 12px", textAlign: "center", color: "#1C1C1E", fontSize: "11px" }}>{r.temporaire}</td>
                  <td style={{ padding: "9px 12px", textAlign: "center", color: "#1C1C1E", fontSize: "11px" }}>{r.permanente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Assureurs */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Principaux assureurs vie au QuÃ©bec
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Les primes varient selon votre Ã¢ge, votre Ã©tat de santÃ©, le montant et la durÃ©e. Obtenez plusieurs soumissions ou passez par un courtier indÃ©pendant pour comparer.
        </p>
        <div className="flex flex-col gap-3 mb-10">
          {assureurs.map((a) => (
            <div key={a.nom} style={{ background: a.couleur, border: `1px solid ${a.couleur}`, borderRadius: "14px", padding: "1rem 1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <span style={{ fontSize: "1.3rem" }}>{a.emoji}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "14px", color: a.textColor }}>{a.nom}</div>
                  <div style={{ fontSize: "11px", color: a.textColor, opacity: 0.7 }}>{a.type}</div>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: a.textColor, lineHeight: 1.65, margin: 0, opacity: 0.85 }}>{a.pointFort}</p>
            </div>
          ))}
        </div>

        {/* Ad 2 */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Estimateur */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Estimateur de besoin en assurance vie
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Calculez le montant de couverture recommandÃ© selon votre situation personnelle.
          Formule : <strong>(revenu Ã— annÃ©es) + hypothÃ¨que + (50 000 $ Ã— enfants)</strong>.
        </p>

        <AssuranceVieCalculateurClient />

        {/* Ad 3 */}
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
            { href: "/assurances/auto", emoji: "ðŸš—", titre: "Assurance auto QuÃ©bec", desc: "RÃ©gime SAAQ/privÃ©, prix moyens, conseils pour Ã©conomiser" },
            { href: "/assurances/habitation", emoji: "ðŸ ", titre: "Assurance habitation QuÃ©bec", desc: "Locataire vs propriÃ©taire, ce qui est couvert, prix moyens" },
            { href: "/assurances/comparateur", emoji: "âš–ï¸", titre: "Comparer les assureurs au QuÃ©bec", desc: "Estimations habitation et auto par profil â€” 6 assureurs" },
            { href: "/assurances", emoji: "ðŸ›¡ï¸", titre: "Guide assurances QuÃ©bec", desc: "Auto, habitation, vie, invaliditÃ© â€” tout comprendre" },
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
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affiliÃ© aux assureurs. Les estimations ne remplacent pas une soumission personnalisÃ©e.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
