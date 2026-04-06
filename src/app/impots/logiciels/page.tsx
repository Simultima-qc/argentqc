import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meilleurs logiciels impôts gratuits Québec 2026 — Comparatif | ArgentQC.ca",
  description:
    "Quel logiciel d'impôts choisir au Québec en 2026 ? Comparatif Wealthsimple Impôt, TurboImpôt, H&R Block — options gratuites pour T1 fédéral et TP-1 provincial (Revenu Québec).",
  keywords: [
    "logiciel impôt gratuit Québec 2026",
    "meilleur logiciel impôts Canada",
    "TurboImpôt Québec",
    "Wealthsimple impôt gratuit",
    "ImpôtRapide gratuit",
    "H&R Block impôts gratuit",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const logiciels = [
  {
    nom: "Wealthsimple Impôt",
    gratuit: "✅ 100% gratuit",
    quebec: "✅",
    federal: "✅",
    netfile: "✅",
    profil: "Salariés, revenus simples à intermédiaires, investisseurs",
    avantages: "Interface la plus moderne et épurée. Paiement par don optionnel. Gère les cryptomonnaies et revenus de placement. Importation automatique des feuillets T4.",
    inconvenients: "Moins complet pour les situations très complexes (grande entreprise).",
    couleur: "#DBEAFE",
    couleurTexte: "#1D4ED8",
    emoji: "💙",
  },
  {
    nom: "H&R Block (Impôt Express — gratuit)",
    gratuit: "✅ Gratuit (version simple)",
    quebec: "✅",
    federal: "✅",
    netfile: "✅",
    profil: "Salariés, retraités, situations simples à intermédiaires",
    avantages: "Très guidé — idéal pour les premiers utilisateurs. Interface claire avec explications détaillées à chaque étape.",
    inconvenients: "Certaines situations avancées nécessitent la version payante (~19,99 $).",
    couleur: "#D1FAE5",
    couleurTexte: "#065F46",
    emoji: "💚",
  },
  {
    nom: "TurboImpôt (version gratuite)",
    gratuit: "✅ Gratuit (situations simples)",
    quebec: "✅",
    federal: "✅",
    netfile: "✅",
    profil: "Salariés simples, revenus d'emploi uniquement",
    avantages: "Marque bien connue, interface fiable. Importation T4 et RL-1 disponible.",
    inconvenients: "La version gratuite est limitée — revenus de placement, travail autonome ou location exigent la version payante (~29,99 $+).",
    couleur: "#FEF3C7",
    couleurTexte: "#92400E",
    emoji: "💛",
  },
  {
    nom: "ImpôtExpert (UFile)",
    gratuit: "Partiel — gratuit si revenu < 20 000 $ ou étudiant",
    quebec: "✅",
    federal: "✅",
    netfile: "✅",
    profil: "Étudiants, faibles revenus, situations intermédiaires",
    avantages: "Gratuit pour les revenus modestes. Gère bien les situations avec revenus de location et travailleurs autonomes.",
    inconvenients: "Payant (~19,99 $) pour les revenus plus élevés.",
    couleur: "#EDE9FE",
    couleurTexte: "#5B21B6",
    emoji: "💜",
  },
  {
    nom: "SimpleTax (maintenant Wealthsimple)",
    gratuit: "✅ Fusionné avec Wealthsimple Impôt",
    quebec: "✅",
    federal: "✅",
    netfile: "✅",
    profil: "Même produit que Wealthsimple Impôt depuis 2020",
    avantages: "Si vous utilisez SimpleTax depuis des années, vos données sont dans Wealthsimple Impôt.",
    inconvenients: "N/A — même produit.",
    couleur: "#F0FDF4",
    couleurTexte: "#166534",
    emoji: "🌿",
  },
];

const parProfil = [
  {
    profil: "Salarié avec revenus simples (T4 + RL-1 seulement)",
    recommandation: "Wealthsimple Impôt ou H&R Block gratuit",
    detail: "Situation la plus courante. Tous les logiciels gratuits conviennent. Wealthsimple est le plus intuitif.",
    emoji: "👤",
  },
  {
    profil: "Étudiant ou revenu sous 20 000 $",
    recommandation: "ImpôtExpert (UFile) — gratuit pour étudiants",
    detail: "ImpôtExpert est gratuit pour les étudiants et les revenus sous 20 000 $. Gère bien les frais de scolarité et les crédits étudiants.",
    emoji: "🎓",
  },
  {
    profil: "Travailleur autonome (revenus d'entreprise)",
    recommandation: "TurboImpôt Travailleur autonome ou H&R Block payant",
    detail: "Les versions gratuites ne gèrent pas le formulaire T2125 (état des résultats d'entreprise). Prévoyez 20–40 $ pour une version complète.",
    emoji: "💼",
  },
  {
    profil: "Propriétaire avec revenus locatifs",
    recommandation: "ImpôtExpert ou TurboImpôt payant",
    detail: "Les revenus de location (formulaire T776 / RL-31) nécessitent généralement une version payante. Budget ~20–30 $.",
    emoji: "🏠",
  },
  {
    profil: "Investisseur (gains en capital, dividendes)",
    recommandation: "Wealthsimple Impôt (cryptos incluses) ou TurboImpôt payant",
    detail: "Wealthsimple gère bien les revenus de placement et les cryptomonnaies dans sa version gratuite. Pour les situations complexes (plusieurs courtiers), une version payante est préférable.",
    emoji: "📈",
  },
  {
    profil: "Situation très complexe (entreprise + placements + location)",
    recommandation: "Comptable ou fiscaliste",
    detail: "Au-delà d'un certain niveau de complexité, un professionnel paie pour lui-même — ses honoraires sont souvent déductibles d'impôt et son expertise évite des erreurs coûteuses.",
    emoji: "🧮",
  },
];

const cliniquesImpots = [
  "Le Programme communautaire des bénévoles en matière d'impôt (PCBMI) offre de l'aide gratuite pour les déclarations simples dans les bibliothèques, CLSC et centres communautaires.",
  "Accessible si votre revenu est modeste : généralement moins de 35 000 $ (seul) ou 45 000 $ (couple).",
  "Les bénévoles sont formés par l'ARC et peuvent produire votre T1 fédéral et votre TP-1 provincial gratuitement.",
  "Pour trouver une clinique près de chez vous : recherchez « PCBMI Québec » sur canada.ca ou appelez le 1-800-959-8281.",
];

const faqs = [
  {
    q: "Un logiciel d'impôts gratuit peut-il vraiment produire ma déclaration Revenu Québec ?",
    r: "Oui — tous les logiciels homologués par l'ARC (NETFILE) et par Revenu Québec (ImpôtNet) peuvent produire les deux déclarations simultanément. Wealthsimple Impôt, H&R Block et TurboImpôt produisent le T1 fédéral ET le TP-1 provincial en une seule session, et les transmettent électroniquement aux deux organismes.",
  },
  {
    q: "Mes données fiscales sont-elles en sécurité avec ces logiciels ?",
    r: "Les logiciels homologués NETFILE et ImpôtNet doivent respecter des normes de sécurité strictes imposées par l'ARC et Revenu Québec. Wealthsimple, H&R Block et TurboImpôt sont des entreprises établies avec des mesures de chiffrement standards. Évitez les logiciels inconnus ou non homologués.",
  },
  {
    q: "Quelle est la différence entre NETFILE et ImpôtNet ?",
    r: "NETFILE est le service de transmission électronique de l'ARC pour la déclaration fédérale (T1). ImpôtNet est le service équivalent de Revenu Québec pour la déclaration provinciale (TP-1). Un logiciel homologué pour les deux vous permet de transmettre les deux déclarations en même temps, en une seule étape.",
  },
  {
    q: "Puis-je utiliser le même logiciel que l'an dernier ?",
    r: "Oui — la plupart des logiciels conservent vos informations d'une année à l'autre pour faciliter le processus. Assurez-vous d'utiliser la version 2026 (pour l'année d'imposition 2025) et non la version de l'année précédente — les tables d'impôt et les plafonds changent chaque année.",
  },
  {
    q: "Vaut-il mieux aller voir un comptable ?",
    r: "Pour la majorité des salariés québécois avec une situation simple (revenus d'emploi, REER, crédits standards), un logiciel gratuit suffit amplement. Un comptable ou fiscaliste devient utile si vous avez des revenus d'entreprise importants, des transactions immobilières, des gains en capital complexes, ou si vous avez des questions sur la planification fiscale à long terme. Les honoraires d'un fiscaliste sont souvent déductibles.",
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
            {" › "}
            <Link href="/impots" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Impôts</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Logiciels</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Comparatif · Logiciels impôts Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Meilleurs logiciels pour faire ses impôts au Québec en 2026 — gratuits et payants
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Wealthsimple, TurboImpôt, H&R Block — lequel choisir selon votre profil ? Tous produisent le T1 fédéral et le TP-1 Revenu Québec en même temps.
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
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Québec (TP1)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>Fédéral (T1)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>NETFILE/ImpôtNet</th>
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

        {/* Fiches détaillées */}
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
          Publicité
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
                  → {p.recommandation}
                </div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{p.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cliniques gratuites */}
        <div style={{ background: DARK, borderRadius: "16px", padding: "1.5rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", fontWeight: 800, color: "#F0EBE0", marginBottom: "12px" }}>
            🤝 Cliniques d&apos;impôts gratuites au Québec
          </h2>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {cliniquesImpots.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>✓</span>
                <span style={{ fontSize: "13px", color: "rgba(240,235,224,0.7)", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
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
            { href: "/impots/dates", emoji: "📅", titre: "Dates limites impôts 2026", desc: "30 avril pour les salariés — ne manquez pas la date" },
            { href: "/impots/remboursement", emoji: "💰", titre: "Maximiser votre remboursement", desc: "Crédits souvent oubliés + délais de réception" },
            { href: "/impots", emoji: "📋", titre: "Guide impôts Québec 2026", desc: "ARC vs Revenu Québec — tout comprendre" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{l.emoji}</span>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{l.titre}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{l.desc}</div>
              </div>
              <span style={{ color: "#3B82F6" }}>→</span>
            </Link>
          ))}
        </div>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié aux logiciels mentionnés. Vérifiez les conditions d&apos;utilisation et les tarifs directement auprès des éditeurs.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
