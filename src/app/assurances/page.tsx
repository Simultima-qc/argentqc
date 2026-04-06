import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assurances au Québec — Guide complet 2026 | ArgentQC.ca",
  description:
    "Guide complet des assurances au Québec en 2026 : auto (régime mixte SAAQ/privé), habitation, vie et invalidité. Comment comparer les assureurs et éviter les erreurs courantes.",
  keywords: [
    "assurance Québec",
    "comparateur assurance Québec",
    "types assurance Québec",
    "assurance auto habitation Québec 2026",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const typesAssurance = [
  {
    type: "Assurance auto",
    emoji: "🚗",
    obligatoire: true,
    desc: "Obligatoire pour tout véhicule immatriculé. Régime mixte unique au Québec : la SAAQ couvre les dommages corporels, un assureur privé couvre les dommages matériels.",
    href: "/assurances/auto",
    cta: "Guide assurance auto →",
  },
  {
    type: "Assurance habitation",
    emoji: "🏠",
    obligatoire: false,
    desc: "Non obligatoire légalement, mais fortement recommandée (et souvent exigée par le propriétaire). Couvre les dommages à vos biens et votre responsabilité civile.",
    href: "/assurances/habitation",
    cta: "Guide assurance habitation →",
  },
  {
    type: "Assurance vie",
    emoji: "❤️",
    obligatoire: false,
    desc: "Protège vos proches en cas de décès. Recommandée dès que vous avez des dépendants (enfants, conjoint) ou des dettes importantes (hypothèque).",
    href: null,
    cta: null,
  },
  {
    type: "Assurance invalidité",
    emoji: "🩺",
    obligatoire: false,
    desc: "Remplace une partie de vos revenus si vous ne pouvez plus travailler. Souvent offerte par les employeurs. Les travailleurs autonomes doivent s'en procurer une eux-mêmes.",
    href: null,
    cta: null,
  },
];

const erreurs = [
  {
    erreur: "Ne pas lire sa police d'assurance",
    detail: "La plupart des gens ne lisent jamais leur contrat. Résultat : des surprises au moment d'une réclamation. Prenez 30 minutes pour connaître vos exclusions.",
    emoji: "📄",
  },
  {
    erreur: "Sous-assurer ses biens",
    detail: "Beaucoup de locataires sous-estiment la valeur de leurs effets personnels. Un ordinateur, un vélo, une télévision, des vêtements — ça monte vite à 20 000–30 000 $.",
    emoji: "📉",
  },
  {
    erreur: "Négliger l'assurance invalidité",
    detail: "Le risque d'être invalide avant 65 ans est plus élevé que le risque de décéder. La CNESST ne couvre que les accidents du travail — pas les maladies.",
    emoji: "⚠️",
  },
  {
    erreur: "Ne pas magasiner à chaque renouvellement",
    detail: "Les assureurs récompensent rarement la fidélité. Obtenir 3 soumissions à chaque renouvellement peut économiser 200–600 $/an.",
    emoji: "💰",
  },
  {
    erreur: "Ignorer le régime SAAQ pour l'auto",
    detail: "Au Québec, les dommages corporels en cas d'accident sont TOUJOURS couverts par la SAAQ — peu importe qui est à blâme. Beaucoup de Québécois ne le savent pas.",
    emoji: "🚗",
  },
];

const faqs = [
  {
    q: "Quelle est la particularité du régime d'assurance auto au Québec ?",
    r: "Le Québec est la seule province canadienne avec un régime mixte : la SAAQ (gouvernement) couvre obligatoirement tous les dommages corporels pour toute personne impliquée dans un accident automobile, peu importe la faute. Un assureur privé couvre séparément les dommages matériels (votre véhicule, les autres véhicules et les biens). Ce régime élimine les poursuites civiles pour dommages corporels liés à l'automobile.",
  },
  {
    q: "Vaut-il mieux passer par un courtier ou acheter directement chez un assureur ?",
    r: "Un courtier d'assurance représente plusieurs assureurs et peut comparer les prix pour vous — c'est gratuit (ils sont rémunérés par les assureurs). Acheter directement (Intact Direct, Desjardins en ligne) peut parfois être moins cher, mais vous devez comparer vous-même. Pour une première assurance ou une situation complexe, le courtier est souvent avantageux.",
  },
  {
    q: "Dois-je avoir une assurance habitation si je suis locataire ?",
    r: "Légalement, non — un locataire n'est pas obligé d'avoir une assurance habitation. Mais la plupart des propriétaires l'exigent dans le bail. Surtout, en cas de sinistre (incendie, dégât des eaux), sans assurance vous perdez tous vos biens sans compensation. Le coût moyen pour un locataire est de 25–40 $/mois — une protection essentielle pour peu cher.",
  },
  {
    q: "Quand faut-il revoir ses assurances ?",
    r: "À chaque renouvellement (annuel), mais aussi lors de changements de vie importants : achat d'une propriété, déménagement, naissance d'un enfant, achat d'un véhicule, rénovations importantes, ou changement de situation professionnelle (travailleur autonome).",
  },
];

export default function AssurancesPage() {
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
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Assurances</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet · Assurances Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Assurances au Québec — Guide complet 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Auto, habitation, vie, invalidité — tout ce qu&apos;il faut savoir sur les assurances au Québec,
            incluant la spécificité unique du régime mixte SAAQ/privé pour l&apos;automobile.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Ad placeholder */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2rem" }}>
          Publicité
        </div>

        {/* Types d'assurance */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Les types d&apos;assurance au Québec
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {typesAssurance.map((t) => (
            <div key={t.type} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ fontSize: "1.5rem" }}>{t.emoji}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 800, fontSize: "15px", color: "#1C1C1E", margin: 0 }}>{t.type}</h3>
                </div>
                {t.obligatoire && (
                  <span style={{ background: "#FEF3C7", color: "#92400E", fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "100px", flexShrink: 0 }}>
                    Obligatoire
                  </span>
                )}
              </div>
              <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: "0 0 12px 0" }}>{t.desc}</p>
              {t.href && (
                <Link
                  href={t.href}
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: DARK, color: GOLD, fontWeight: 700, fontSize: "13px", padding: "9px 16px", borderRadius: "10px", textDecoration: "none" }}
                >
                  {t.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Spécificité SAAQ */}
        <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "16px", padding: "1.25rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#1E40AF", marginBottom: "12px" }}>
            🚗 La particularité québécoise : le régime SAAQ/privé
          </h2>
          <p style={{ fontSize: "13px", color: "#1E40AF", lineHeight: 1.7, marginBottom: "12px" }}>
            Le Québec est la <strong>seule province canadienne</strong>{" "}avec un régime d&apos;assurance automobile mixte. Voici comment ça fonctionne :
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "10px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "#1E40AF", color: "white" }}>
                  <th style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700 }}>Couverture</th>
                  <th style={{ padding: "9px 12px", textAlign: "center", fontWeight: 700 }}>Qui paie ?</th>
                  <th style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700 }}>Détail</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #EFF6FF" }}>
                  <td style={{ padding: "9px 12px", fontWeight: 600, color: "#1C1C1E" }}>Dommages corporels</td>
                  <td style={{ padding: "9px 12px", textAlign: "center" }}><span style={{ background: "#DBEAFE", color: "#1D4ED8", fontWeight: 700, padding: "2px 8px", borderRadius: "100px" }}>SAAQ</span></td>
                  <td style={{ padding: "9px 12px", color: "#44403C" }}>Blessures à vous, aux passagers, aux piétons — peu importe la faute</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #EFF6FF" }}>
                  <td style={{ padding: "9px 12px", fontWeight: 600, color: "#1C1C1E" }}>Dommages matériels</td>
                  <td style={{ padding: "9px 12px", textAlign: "center" }}><span style={{ background: "#FEF3C7", color: "#92400E", fontWeight: 700, padding: "2px 8px", borderRadius: "100px" }}>Assureur privé</span></td>
                  <td style={{ padding: "9px 12px", color: "#44403C" }}>Votre véhicule, les autres véhicules, les biens endommagés</td>
                </tr>
                <tr>
                  <td style={{ padding: "9px 12px", fontWeight: 600, color: "#1C1C1E" }}>Responsabilité civile</td>
                  <td style={{ padding: "9px 12px", textAlign: "center" }}><span style={{ background: "#FEF3C7", color: "#92400E", fontWeight: 700, padding: "2px 8px", borderRadius: "100px" }}>Assureur privé</span></td>
                  <td style={{ padding: "9px 12px", color: "#44403C" }}>Protection si vous causez des dommages matériels à autrui (min. 50 000 $)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "12px", color: "#3730A3", marginTop: "10px", lineHeight: 1.6 }}>
            Conséquence importante : au Québec, <strong>personne ne peut poursuivre civilement pour dommages corporels</strong>{" "}liés à un accident de voiture. La SAAQ indemnise tout le monde.
          </p>
        </div>

        {/* Courtier vs direct */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Courtier vs achat direct — Quoi choisir ?
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div style={{ background: "white", border: "2px solid #A7F3D0", borderRadius: "16px", padding: "1.25rem" }}>
            <h3 style={{ fontWeight: 800, fontSize: "15px", color: "#065F46", marginBottom: "10px" }}>🤝 Courtier d&apos;assurance</h3>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "13px", color: "#044F3C", lineHeight: 1.75 }}>
              <li>Représente plusieurs assureurs</li>
              <li>Compare les prix pour vous</li>
              <li>Service gratuit (rémunéré par les assureurs)</li>
              <li>Conseils personnalisés</li>
              <li>Idéal pour situations complexes</li>
            </ul>
          </div>
          <div style={{ background: "white", border: "2px solid #BFDBFE", borderRadius: "16px", padding: "1.25rem" }}>
            <h3 style={{ fontWeight: 800, fontSize: "15px", color: "#1E40AF", marginBottom: "10px" }}>💻 Achat direct (en ligne)</h3>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "13px", color: "#1E3A8A", lineHeight: 1.75 }}>
              <li>Intact Direct, Desjardins, CAA</li>
              <li>Rapide et pratique</li>
              <li>Parfois moins cher (pas de commission)</li>
              <li>Limité à un seul assureur</li>
              <li>Vous devez comparer vous-même</li>
            </ul>
          </div>
        </div>

        {/* Erreurs courantes */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          5 erreurs courantes des Québécois en assurance
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {erreurs.map((e, i) => (
            <div key={e.erreur} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{e.emoji}</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ background: "#FEF2F2", color: "#991B1B", fontSize: "10px", fontWeight: 700, padding: "1px 6px", borderRadius: "100px" }}>Erreur #{i + 1}</span>
                  <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{e.erreur}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{e.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cards CTA */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Guides détaillés
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <Link href="/assurances/auto" style={{ display: "block", background: DARK, borderRadius: "16px", padding: "1.25rem", textDecoration: "none" }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🚗</div>
            <h3 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.1rem", fontWeight: 800, marginBottom: "8px" }}>
              Assurance auto Québec
            </h3>
            <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "12px", lineHeight: 1.6, marginBottom: "12px" }}>
              Fonctionnement SAAQ/privé, prix moyens par profil, 7 conseils pour économiser.
            </p>
            <span style={{ color: GOLD, fontWeight: 700, fontSize: "13px" }}>Lire le guide →</span>
          </Link>
          <Link href="/assurances/habitation" style={{ display: "block", background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1.25rem", textDecoration: "none" }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🏠</div>
            <h3 style={{ fontFamily: "var(--font-playfair)", color: "#1C1C1E", fontSize: "1.1rem", fontWeight: 800, marginBottom: "8px" }}>
              Assurance habitation Québec
            </h3>
            <p style={{ color: "#78716C", fontSize: "12px", lineHeight: 1.6, marginBottom: "12px" }}>
              Locataire vs propriétaire, ce qui est couvert, prix moyens par type de logement.
            </p>
            <span style={{ color: "#3B82F6", fontWeight: 700, fontSize: "13px" }}>Lire le guide →</span>
          </Link>
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

        {/* Lien demenagement */}
        <Link href="/demenagement/cout" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none", marginBottom: "1rem" }}>
          <span style={{ fontSize: "1.4rem" }}>📦</span>
          <div className="flex-1">
            <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Vous déménagez ? Pensez à votre assurance habitation</div>
            <div style={{ fontSize: "12px", color: "#A8A29E" }}>À souscrire avant d&apos;entrer dans votre nouveau logement</div>
          </div>
          <span style={{ color: "#3B82F6" }}>→</span>
        </Link>

        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginTop: "1.5rem" }}>
          Publicité
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié aux assureurs ou au gouvernement.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
