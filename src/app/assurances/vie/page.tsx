import type { Metadata } from "next";
import Link from "next/link";
import AssuranceVieCalculateurClient from "./AssuranceVieCalculateurClient";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Assurance Vie au Québec 2026 — Guide Complet et Comparatif | ArgentQC.ca",
  description:
    "Temporaire ou permanente? Comparez les assurances vie au Québec : Industrielle Alliance, Beneva, Desjardins, SSQ. Calculez le montant de couverture dont vous avez besoin.",
  keywords: [
    "assurance vie Québec",
    "meilleure assurance vie Québec",
    "combien d'assurance vie ai-je besoin",
    "assurance vie temporaire permanente Québec",
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
  { critere: "Durée de la couverture", temporaire: "Période fixe : 10, 20 ou 30 ans", permanente: "Toute la vie (sans expiration)" },
  { critere: "Coût mensuel", temporaire: "Faible à l'achat (ex: 25–50 $/mois à 30 ans)", permanente: "Beaucoup plus élevé (3–5× plus cher)" },
  { critere: "Valeur de rachat", temporaire: "❌ Aucune valeur accumulée", permanente: "✅ Capital qui s'accumule avec le temps" },
  { critere: "Renouvellement", temporaire: "Possible — prime augmente à chaque renouvellement", permanente: "N/A — couverture garantie à vie" },
  { critere: "Prime fixe dans le temps ?", temporaire: "Oui (pendant la période)", permanente: "Oui (vie entière) ou variable (vie universelle)" },
  { critere: "Succession et legs", temporaire: "Limité à la période couverte", permanente: "✅ Garantit un héritage peu importe l'âge du décès" },
  { critere: "Idéal pour", temporaire: "Hypothèque, jeune famille, dettes importantes", permanente: "Planification successorale, legs, revenu passif" },
];

const assureurs = [
  {
    nom: "Industrielle Alliance (iA)",
    emoji: "🏦",
    type: "Temporaire + Permanente",
    pointFort: "Leader au Québec, large réseau de conseillers, gamme iA Tempo très populaire pour les familles.",
    couleur: "#DBEAFE",
    textColor: "#1E40AF",
  },
  {
    nom: "Beneva",
    emoji: "🌿",
    type: "Temporaire + Permanente",
    pointFort: "Né de la fusion Desjardins Assurances vie, SSQ et La Capitale. Forte présence au Québec, orienté coopératif et mutuelliste.",
    couleur: "#D1FAE5",
    textColor: "#065F46",
  },
  {
    nom: "Desjardins Assurances",
    emoji: "🍁",
    type: "Temporaire + Permanente",
    pointFort: "Intégration facile avec autres produits Desjardins (hypothèque, REER). Très accessible pour membres des caisses Desjardins.",
    couleur: "#FEF3C7",
    textColor: "#92400E",
  },
  {
    nom: "Canada Vie",
    emoji: "🇨🇦",
    type: "Temporaire + Vie universelle",
    pointFort: "Grande institution nationale, solide réputation. Offre notamment la vie universelle pour la planification successorale avancée.",
    couleur: "#EDE9FE",
    textColor: "#5B21B6",
  },
  {
    nom: "Sun Life",
    emoji: "☀️",
    type: "Temporaire + Permanente",
    pointFort: "Vaste réseau de conseillers indépendants. Produits flexibles incluant assurance vie avec protection maladies graves intégrée.",
    couleur: "#FEF9C3",
    textColor: "#854D0E",
  },
];

const faqs = [
  {
    q: "Quelle différence entre temporaire et permanente ?",
    r: "L'assurance temporaire couvre une période définie (10, 20 ou 30 ans) à une prime abordable — idéale pendant les années où vous avez une hypothèque ou des enfants à charge. L'assurance permanente (vie entière ou universelle) couvre toute la vie et peut accumuler une valeur de rachat, mais les primes sont beaucoup plus élevées. Pour la grande majorité des Québécois, la temporaire est suffisante.",
  },
  {
    q: "Combien d'assurance vie ai-je besoin ?",
    r: "Une règle de base : entre 7 et 10 fois votre revenu annuel. Une méthode plus précise : (revenu annuel × années à couvrir) + solde hypothécaire + (50 000$ × enfants à charge). Pour une famille type au Québec avec un revenu de 70 000$ et une hypothèque de 300 000$, cela représente environ 1,0 à 1,4 M$ de couverture recommandée. Notre estimateur ci-dessus vous donne un calcul personnalisé.",
  },
  {
    q: "À quel âge souscrire une assurance vie ?",
    r: "Le plus tôt possible — les primes augmentent significativement avec l'âge et l'état de santé. Un homme de 30 ans en bonne santé paiera typiquement 25–40 $/mois pour 500 000$ de couverture temporaire 20 ans. Le même profil à 45 ans paiera 80–130 $/mois. Souscrivez dès que vous avez des dépendants (enfants, conjoint) ou des dettes importantes (hypothèque).",
  },
  {
    q: "L'assurance vie est-elle déductible d'impôt au Canada ?",
    r: "En général, non — les primes d'assurance vie personnelle ne sont pas déductibles d'impôt pour les particuliers. En revanche, les prestations de décès reçues par les bénéficiaires sont entièrement libres d'impôt au Canada. Exception : certains travailleurs autonomes peuvent déduire les primes dans des circonstances très précises (assurance vie servant de garantie pour un prêt d'entreprise). Consultez un conseiller fiscal pour votre situation.",
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
            {" › "}
            <Link href="/assurances" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Assurances</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Assurance vie</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet · Assurance vie Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Assurance Vie au Québec 2026 — Guide Complet et Comparatif
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Temporaire ou permanente, combien de couverture, quels assureurs — tout ce qu&apos;il faut savoir
            pour protéger vos proches et calculer le montant adapté à votre situation.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Intro SEO */}
        <div style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "12px" }}>
            ❤️ Pourquoi souscrire une assurance vie ?
          </h2>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.75, marginBottom: "12px" }}>
            L&apos;assurance vie est conçue pour <strong>protéger financièrement les personnes qui dépendent de vous</strong> en cas de décès. Contrairement à l&apos;assurance auto ou habitation, elle n&apos;est pas obligatoire — mais elle devient essentielle dès que vous avez des responsabilités financières envers d&apos;autres personnes.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.75, marginBottom: "12px" }}>
            Pour une <strong>jeune famille québécoise</strong> avec une hypothèque, des enfants et un seul revenu (ou deux revenus indispensables), la disparition soudaine d&apos;un revenu peut être catastrophique. L&apos;assurance vie remplace ce revenu et permet au conjoint survivant de rembourser l&apos;hypothèque, couvrir les frais d&apos;éducation des enfants et maintenir le train de vie familial.
          </p>
          <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.75, marginBottom: "16px" }}>
            Les primes d&apos;assurance vie augmentent avec l&apos;âge et se basent sur votre état de santé au moment de la souscription. Souscrire tôt — idéalement avant 35 ans ou à l&apos;achat de votre première propriété — vous garantit des primes basses et une couverture complète.
          </p>
          <div className="flex flex-col gap-2">
            {[
              "Protège votre famille si vous décédez pendant les années de dettes (hypothèque, prêts)",
              "Les prestations reçues par les bénéficiaires sont entièrement libres d'impôt",
              "Les primes fixes à la souscription — moins cher si on souscrit jeune et en bonne santé",
              "Peut couvrir les frais d'obsèques et les dettes de succession",
              "Combinable avec l'assurance invalidité pour une protection complète des revenus",
            ].map((a, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", fontSize: "13px", color: "#065F46" }}>
                <span style={{ color: GREEN, flexShrink: 0, marginTop: "1px" }}>✅</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ad 1 */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
        </div>

        {/* Temporaire vs Permanente */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Temporaire vs Permanente — Laquelle choisir ?
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Le choix entre temporaire et permanente dépend de vos objectifs : protéger un risque limité dans le temps (hypothèque, enfants) ou planifier une succession.
        </p>
        <div className="grid grid-cols-1 gap-4 mb-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div style={{ background: "white", border: "2px solid #BFDBFE", borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>⏱️</div>
            <h3 style={{ fontWeight: 800, fontSize: "14px", color: "#1E40AF", marginBottom: "6px" }}>Assurance temporaire</h3>
            <p style={{ fontSize: "12px", color: "#1E3A8A", lineHeight: 1.65, marginBottom: "10px" }}>
              Couvre une période définie. La prime est fixe pendant la durée choisie, puis augmente au renouvellement. Aucune valeur de rachat.
            </p>
            <div style={{ background: "#DBEAFE", borderRadius: "8px", padding: "8px 12px", fontSize: "12px", color: "#1E40AF", fontWeight: 600 }}>
              ✅ Idéal pour : hypothèque, jeune famille, budget limité
            </div>
          </div>
          <div style={{ background: "white", border: "2px solid #A7F3D0", borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>♾️</div>
            <h3 style={{ fontWeight: 800, fontSize: "14px", color: "#065F46", marginBottom: "6px" }}>Assurance permanente</h3>
            <p style={{ fontSize: "12px", color: "#047857", lineHeight: 1.65, marginBottom: "10px" }}>
              Couvre toute la vie. Accumule une valeur de rachat pouvant être utilisée de votre vivant. Prime plus élevée mais stable.
            </p>
            <div style={{ background: "#D1FAE5", borderRadius: "8px", padding: "8px 12px", fontSize: "12px", color: "#065F46", fontWeight: 600 }}>
              ✅ Idéal pour : planification successorale, legs, patrimoine
            </div>
          </div>
        </div>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700 }}>Critère</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>⏱️ Temporaire</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>♾️ Permanente</th>
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
          Principaux assureurs vie au Québec
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Les primes varient selon votre âge, votre état de santé, le montant et la durée. Obtenez plusieurs soumissions ou passez par un courtier indépendant pour comparer.
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
          Publicité
        </div>

        {/* Estimateur */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Estimateur de besoin en assurance vie
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.6, marginBottom: "1.25rem" }}>
          Calculez le montant de couverture recommandé selon votre situation personnelle.
          Formule : <strong>(revenu × années) + hypothèque + (50 000 $ × enfants)</strong>.
        </p>

        <AssuranceVieCalculateurClient />

        {/* Ad 3 */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
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
            { href: "/assurances/auto", emoji: "🚗", titre: "Assurance auto Québec", desc: "Régime SAAQ/privé, prix moyens, conseils pour économiser" },
            { href: "/assurances/habitation", emoji: "🏠", titre: "Assurance habitation Québec", desc: "Locataire vs propriétaire, ce qui est couvert, prix moyens" },
            { href: "/assurances/comparateur", emoji: "⚖️", titre: "Comparer les assureurs au Québec", desc: "Estimations habitation et auto par profil — 6 assureurs" },
            { href: "/assurances", emoji: "🛡️", titre: "Guide assurances Québec", desc: "Auto, habitation, vie, invalidité — tout comprendre" },
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

      <SiteFooter
        legalText={"Outil informatif non affilié aux assureurs. Les estimations ne remplacent pas une soumission personnalisée."}
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ background: DARK, padding: "24px 16px" }}
        brandStyle={{ color: GOLD }}
        contactLinkStyle={{ marginTop: "6px" }}
      />
    </main>
  );
}
