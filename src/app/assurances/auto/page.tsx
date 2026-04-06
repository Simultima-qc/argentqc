import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assurance auto au Québec en 2026 — Fonctionnement et économies | ArgentQC.ca",
  description:
    "Comment fonctionne l'assurance auto au Québec en 2026 : régime mixte SAAQ/privé, couvertures disponibles, prix moyens par profil et 7 conseils pour réduire votre prime.",
  keywords: [
    "assurance auto Québec",
    "prix assurance auto Québec 2026",
    "assurance auto Montréal",
    "réduire prime assurance auto Québec",
    "SAAQ assurance privée Québec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const couvertures = [
  {
    nom: "Responsabilité civile",
    obligatoire: true,
    desc: "Couvre les dommages matériels que vous causez à autrui (autres véhicules, clôtures, bâtiments). Minimum légal au Québec : 50 000 $. Recommandé : 1 000 000 $ et plus.",
    emoji: "⚖️",
  },
  {
    nom: "Collision (A)",
    obligatoire: false,
    desc: "Couvre les dommages à votre propre véhicule lors d'une collision avec un autre véhicule ou objet, peu importe la responsabilité.",
    emoji: "💥",
  },
  {
    nom: "Risques spéciaux (B)",
    obligatoire: false,
    desc: "Couvre les dommages causés par des événements hors collision : vol, vandalisme, incendie, bris de vitre, grêle, inondation.",
    emoji: "🌩️",
  },
  {
    nom: "Tous risques (A+B)",
    obligatoire: false,
    desc: "Combinaison des deux — la couverture la plus complète. Recommandée pour les véhicules neufs ou de valeur élevée.",
    emoji: "🛡️",
  },
  {
    nom: "Véhicule de remplacement",
    obligatoire: false,
    desc: "Vous fournit un véhicule de remplacement si le vôtre est en réparation ou volé. Disponible en option chez la plupart des assureurs.",
    emoji: "🔄",
  },
  {
    nom: "Protection d'indemnisation directe",
    obligatoire: false,
    desc: "Permet d'être indemnisé directement par votre propre assureur, même si l'autre conducteur est responsable. Évite les délais de réclamation.",
    emoji: "⚡",
  },
];

const facteurs = [
  { facteur: "Région", impact: "Élevé", detail: "Montréal coûte significativement plus cher (taux de vol et d'accidents plus élevé). Laval et Longueuil sont moins chères. Les régions sont les moins chères.", emoji: "📍" },
  { facteur: "Âge du conducteur", impact: "Très élevé", detail: "Les 16-25 ans paient souvent 2 à 3× plus cher qu'un conducteur de 35-50 ans. Les 70+ ans voient aussi leur prime augmenter.", emoji: "🎂" },
  { facteur: "Dossier de conduite", impact: "Très élevé", detail: "Chaque réclamation ou infraction peut augmenter votre prime de 10 à 50% pour 3 à 6 ans. Un bon dossier est votre meilleur atout.", emoji: "📋" },
  { facteur: "Type de véhicule", impact: "Élevé", detail: "Les véhicules souvent volés (Honda CR-V, Ford F-150) coûtent plus cher à assurer. La puissance du moteur influence aussi la prime.", emoji: "🚙" },
  { facteur: "Kilométrage annuel", impact: "Modéré", detail: "Moins vous conduisez, moins vous risquez d'avoir un accident. Déclarer un kilométrage réaliste peut réduire votre prime.", emoji: "🔢" },
  { facteur: "Usage du véhicule", impact: "Modéré", detail: "Usage personnel < usage pour le travail (navette) < usage commercial. Les livraisons et covoiturage rémunéré changent la couverture nécessaire.", emoji: "📦" },
  { facteur: "Franchise choisie", impact: "Direct", detail: "Une franchise plus élevée (ex : 1 000 $ au lieu de 500 $) réduit votre prime. Assurez-vous de pouvoir payer cette franchise en cas de sinistre.", emoji: "💰" },
];

const prixProfils = [
  { profil: "Jeune conducteur 16-24 ans", vehicule: "Citadine 2019", montreal: "2 800–4 500 $", laval: "2 200–3 500 $", regions: "1 800–2 800 $", par: "/an" },
  { profil: "Conducteur 25-39 ans", vehicule: "VUS 2021", montreal: "1 400–2 200 $", laval: "1 100–1 700 $", regions: "900–1 400 $", par: "/an" },
  { profil: "Conducteur 40-59 ans", vehicule: "Berline 2020", montreal: "1 100–1 700 $", laval: "850–1 350 $", regions: "700–1 100 $", par: "/an" },
  { profil: "Conducteur 60+ ans", vehicule: "Berline 2018", montreal: "1 200–1 900 $", laval: "950–1 500 $", regions: "800–1 200 $", par: "/an" },
];

const conseils = [
  { conseil: "Magasinez à chaque renouvellement", detail: "Obtenez au moins 3 soumissions — Intact, Desjardins, Industrielle Alliance, CAA. Les écarts peuvent dépasser 500 $/an pour une couverture identique.", emoji: "🔍" },
  { conseil: "Augmentez votre franchise", detail: "Passer de 500 $ à 1 000 $ de franchise peut réduire votre prime de 10 à 20%. Idéal si vous avez ce montant disponible en épargne d'urgence.", emoji: "📈" },
  { conseil: "Regroupez auto + habitation", detail: "La plupart des assureurs offrent 5 à 15% de rabais si vous combinez assurance auto et habitation. Souvent le meilleur rapport qualité/prix.", emoji: "🏠" },
  { conseil: "Suivez un cours de conduite avancé", detail: "Certains assureurs offrent des rabais aux conducteurs ayant suivi des cours de conduite reconnus, surtout pour les jeunes.", emoji: "🎓" },
  { conseil: "Installez un télémètre (télématique)", detail: "Desjardins (Ajusto), Intact (my Driving Discount) offrent des rabais pouvant atteindre 25% si vous conduisez prudemment selon leur application.", emoji: "📱" },
  { conseil: "Vérifiez votre dossier SAAQ", detail: "Des points d'inaptitude ou infractions oubliées peuvent faire grimper votre prime. Vérifiez votre dossier de conduite sur le site de la SAAQ.", emoji: "📄" },
  { conseil: "Retirez la collision sur les vieux véhicules", detail: "Si votre véhicule vaut moins de 5 000 $, la couverture collision coûte souvent plus cher sur 3 ans que la valeur du véhicule. Évaluez la pertinence.", emoji: "🧮" },
];

const faqs = [
  {
    q: "Pourquoi l'assurance auto est-elle plus chère à Montréal ?",
    r: "Montréal affiche un taux de vol de véhicules parmi les plus élevés au Canada, ainsi qu'une densité de circulation plus importante qui se traduit par plus d'accidents. Ces facteurs de risque sont directement répercutés dans les primes. Laval et Longueuil sont généralement 15 à 25% moins chères que Montréal pour un profil similaire.",
  },
  {
    q: "La SAAQ couvre-t-elle tout en cas d'accident ?",
    r: "Non. La SAAQ couvre uniquement les dommages corporels (blessures, décès, réadaptation) pour toute personne impliquée dans un accident automobile au Québec, peu importe la faute. Les dommages matériels (votre véhicule, les autres véhicules, les bâtiments) sont couverts par votre assureur privé, selon les garanties souscrites.",
  },
  {
    q: "Suis-je couvert si j'utilise mon véhicule pour Uber ou DoorDash ?",
    r: "Non, en règle générale. L'utilisation commerciale de votre véhicule (livraison, covoiturage rémunéré) n'est pas couverte par une assurance personnelle standard. Vous devez déclarer cet usage à votre assureur et souscrire une couverture commerciale, sans quoi une réclamation pourrait être refusée.",
  },
  {
    q: "Comment contester une hausse de prime injustifiée ?",
    r: "Vous pouvez d'abord demander une explication écrite à votre assureur. Si vous n'êtes pas satisfait, contactez le Bureau d'assurance du Canada (BAC) ou l'Autorité des marchés financiers (AMF) du Québec. Magasiner chez un autre assureur reste souvent la solution la plus rapide.",
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
            {" › "}
            <Link href="/assurances" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Assurances</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Auto</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide · Assurance auto Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Assurance auto au Québec en 2026 — Fonctionnement et économies
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Régime mixte SAAQ/privé, couvertures disponibles, prix moyens par profil
            et 7 stratégies concrètes pour réduire votre prime d&apos;assurance auto.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* SAAQ vs privé */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Le régime québécois : SAAQ + assureur privé
        </h2>
        <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "16px", padding: "1.25rem", marginBottom: "1.5rem" }}>
          <p style={{ fontSize: "13px", color: "#1E3A8A", lineHeight: 1.7, marginBottom: "1rem" }}>
            Au Québec, l&apos;assurance automobile fonctionne en deux volets distincts — une particularité unique au Canada :
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "10px", overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "#1E40AF", color: "white" }}>
                  <th style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700 }}>Volet</th>
                  <th style={{ padding: "9px 12px", textAlign: "center", fontWeight: 700 }}>Gestionnaire</th>
                  <th style={{ padding: "9px 12px", textAlign: "left", fontWeight: 700 }}>Ce qui est couvert</th>
                  <th style={{ padding: "9px 12px", textAlign: "center", fontWeight: 700 }}>Payé via</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #EFF6FF" }}>
                  <td style={{ padding: "9px 12px", fontWeight: 700, color: "#1E40AF" }}>Dommages corporels</td>
                  <td style={{ padding: "9px 12px", textAlign: "center" }}><span style={{ background: "#DBEAFE", color: "#1D4ED8", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", fontSize: "11px" }}>SAAQ</span></td>
                  <td style={{ padding: "9px 12px", color: "#1C1C1E", fontSize: "12px" }}>Blessures, décès, réadaptation de toute personne — sans égard à la faute</td>
                  <td style={{ padding: "9px 12px", textAlign: "center", color: "#44403C", fontSize: "12px" }}>Immatriculation</td>
                </tr>
                <tr>
                  <td style={{ padding: "9px 12px", fontWeight: 700, color: "#92400E" }}>Dommages matériels</td>
                  <td style={{ padding: "9px 12px", textAlign: "center" }}><span style={{ background: "#FEF3C7", color: "#92400E", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", fontSize: "11px" }}>Assureur privé</span></td>
                  <td style={{ padding: "9px 12px", color: "#1C1C1E", fontSize: "12px" }}>Véhicules, biens, responsabilité civile envers les tiers</td>
                  <td style={{ padding: "9px 12px", textAlign: "center", color: "#44403C", fontSize: "12px" }}>Prime mensuelle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Ad bloc 1 — CPC fort */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "90px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
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
                    background: f.impact === "Très élevé" ? "#FEE2E2" : f.impact === "Élevé" ? "#FEF3C7" : "#F3F4F6",
                    color: f.impact === "Très élevé" ? "#991B1B" : f.impact === "Élevé" ? "#92400E" : "#44403C",
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
          Estimations pour une couverture complète (responsabilité civile 1M$ + tous risques). Les prix varient selon le véhicule et l&apos;assureur.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700 }}>Profil</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>🏙️ Montréal</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>🌿 Laval</th>
                <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 700 }}>🌲 Régions</th>
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

        {/* Ad bloc 2 — avant les conseils */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "90px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
        </div>

        {/* Conseils */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          7 façons de réduire votre prime d&apos;assurance auto
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

        {/* Liens internes */}
        <div className="flex flex-col gap-3 mb-4">
          {[
            { href: "/budget/calculateur", emoji: "📊", titre: "Intégrez votre prime à votre budget mensuel", desc: "Calculateur budget personnalisé — inclus transport et assurances" },
            { href: "/assurances/habitation", emoji: "🏠", titre: "Assurance habitation Québec", desc: "Regroupez auto + habitation pour économiser 5 à 15%" },
            { href: "/assurances", emoji: "🛡️", titre: "Retour au guide assurances Québec", desc: "Vue d'ensemble des types d'assurance" },
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

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif. Les prix sont des estimations — obtenez des soumissions auprès d&apos;assureurs pour votre situation précise.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
