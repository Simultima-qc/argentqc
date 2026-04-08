import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide complet pour déménager au Québec en 2026 | ArgentQC.ca",
  description:
    "Tout ce qu'il faut savoir pour déménager au Québec en 2026 : étapes, coûts, droits des locataires, le 1er juillet et les ressources officielles.",
  keywords: [
    "déménagement Québec",
    "déménager au Québec 2026",
    "guide déménagement Québec",
    "étapes déménagement Québec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const etapes = [
  {
    semaines: "8 semaines avant",
    emoji: "📋",
    taches: [
      "Donner son préavis au propriétaire (minimum 3 mois pour un bail annuel)",
      "Commencer la recherche de logement (Kijiji, LesPAC, Centris, Facebook Marketplace)",
      "Obtenir des soumissions de compagnies de déménagement",
      "Commencer à désencombrer et donner / vendre ce qu'on ne garde pas",
    ],
  },
  {
    semaines: "4 semaines avant",
    emoji: "📦",
    taches: [
      "Réserver la compagnie de déménagement ou louer le camion",
      "Commencer à emballer les objets non essentiels",
      "Aviser Canada Post du changement d'adresse",
      "Prévoir l'assurance habitation au nouveau logement",
    ],
  },
  {
    semaines: "2 semaines avant",
    emoji: "📮",
    taches: [
      "Aviser : SAAQ, Revenu Québec, Revenu Canada (Mon dossier), banques",
      "Aviser : employeur, médecin, dentiste, école des enfants",
      "Réserver l'ascenseur ou le monte-meuble si nécessaire",
      "Préparer les boîtes essentielles (à déballer en premier)",
    ],
  },
  {
    semaines: "1 semaine avant",
    emoji: "🔑",
    taches: [
      "Confirmer les détails avec la compagnie de déménagement",
      "Faire les changements d'adresse restants",
      "Préparer une boîte de survie (draps, café, nécessaire salle de bain)",
      "Vérifier l'état du nouveau logement et documenter (photos)",
    ],
  },
  {
    semaines: "Jour J",
    emoji: "🚛",
    taches: [
      "Photographier chaque pièce de l'ancien logement avant de partir",
      "Lire les compteurs (eau, gaz, électricité) et aviser Hydro-Québec",
      "Remettre les clés au propriétaire et obtenir une confirmation écrite",
      "Vérifier la livraison de tous les meubles et colis",
    ],
  },
  {
    semaines: "Après le déménagement",
    emoji: "✅",
    taches: [
      "Mettre à jour le permis de conduire et l'immatriculation (SAAQ — 30 jours)",
      "Faire les changements d'adresse manquants (Cégep, université, RAMQ)",
      "Tester les détecteurs de fumée et de CO",
      "Conserver les reçus des frais de déménagement (déductibles si déménagement pour le travail)",
    ],
  },
];

const villes = [
  { ville: "Montréal", emoji: "🏙️", loyer31: "950–1 350 $", loyer41: "1 200–1 800 $", loyer51: "1 600–2 500 $", note: "Marché tendu. Le Plateau, Rosemont, Verdun très populaires." },
  { ville: "Québec", emoji: "🏰", loyer31: "750–1 000 $", loyer41: "900–1 350 $", loyer51: "1 100–1 700 $", note: "Marché plus abordable. Limoilou et Saint-Roch attirent les jeunes." },
  { ville: "Laval", emoji: "🌿", loyer31: "850–1 150 $", loyer41: "1 050–1 500 $", loyer51: "1 350–2 000 $", note: "Banlieue de Montréal avec accès métro (ligne orange)." },
  { ville: "Longueuil", emoji: "🌉", loyer31: "750–1 050 $", loyer41: "950–1 400 $", loyer51: "1 200–1 750 $", note: "Rive-Sud accessible en métro (ligne jaune)." },
  { ville: "Sherbrooke", emoji: "🎓", loyer31: "650–900 $", loyer41: "800–1 150 $", loyer51: "950–1 400 $", note: "Ville universitaire dynamique, coûts de vie parmi les plus bas." },
  { ville: "Gatineau", emoji: "🌲", loyer31: "850–1 100 $", loyer41: "1 000–1 400 $", loyer51: "1 250–1 800 $", note: "Près d'Ottawa — marché plus cher que les autres villes régionales." },
];

const ressources = [
  { label: "Tribunal administratif du logement (TAL)", desc: "Droits et obligations des locataires et propriétaires", href: "https://www.tal.gouv.qc.ca/" },
  { label: "Registre des loyers — TAL", desc: "Vérifier le loyer payé par l'ancien locataire", href: "https://www.tal.gouv.qc.ca/fr/registre-des-loyers" },
  { label: "Kijiji — Appartements Québec", desc: "Annonces de logements partout au Québec", href: "https://www.kijiji.ca/b-appartement-condo/ville-de-montreal/c37l1700281" },
  { label: "LesPAC", desc: "Petites annonces québécoises incluant logements", href: "https://www.lespac.com/immobilier/location/" },
  { label: "SAAQ — Changement d'adresse", desc: "Mettre à jour votre permis et immatriculation", href: "https://saaq.gouv.qc.ca/services-en-ligne/changement-adresse/" },
  { label: "Canada Post — Réexpédition", desc: "Faire réexpédier votre courrier à votre nouvelle adresse", href: "https://www.canadapost-postescanada.ca/cpc/fr/particuliers/postez-et-recevez/gerer-votre-courrier/reacheminement.page" },
];

const faqs = [
  {
    q: "Quand faut-il donner son préavis pour quitter un logement au Québec ?",
    r: "Pour un bail annuel (le cas le plus courant), vous devez aviser votre propriétaire au minimum 3 mois avant la date de fin du bail. Si votre bail se termine le 30 juin, vous devez donc aviser avant le 1er avril. Pour un bail mensuel, le délai est d'1 mois.",
  },
  {
    q: "Qu'est-ce que le 1er juillet au Québec ?",
    r: "Le 1er juillet est la date traditionnelle de fin de bail de la majorité des logements québécois. Cette concentration crée une journée de déménagement massive, avec une demande de camions et de déménageurs qui explose. Si vous déménagez le 1er juillet, réservez au minimum 4 mois à l'avance et attendez-vous à des tarifs 30 à 50% plus élevés qu'en dehors de cette période.",
  },
  {
    q: "Le propriétaire peut-il refuser mon déménagement au 1er juillet ?",
    r: "Non. La date de fin de bail est indiquée dans votre contrat. Le 1er juillet est simplement la date la plus courante. Si votre bail se termine le 30 juin, vous avez le droit de partir le 1er juillet. Votre propriétaire ne peut pas vous forcer à rester.",
  },
  {
    q: "Puis-je déduire mes frais de déménagement de mes impôts ?",
    r: "Oui, si vous déménagez d'au moins 40 km plus près d'un nouvel emploi ou d'un établissement scolaire. Vous pouvez déduire les frais de déménagement dans votre déclaration fédérale (formulaire T1-M). Gardez tous vos reçus.",
  },
];

export default function DemenagementPage() {
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
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Déménagement</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet · Déménagement Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Guide complet pour déménager au Québec en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
            Préavis, recherche de logement, droits des locataires, le 1er juillet, organismes à aviser —
            tout ce qu&apos;il faut savoir pour un déménagement sans stress au Québec.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/demenagement/cout"
              style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "14px", padding: "12px 20px", borderRadius: "12px", textDecoration: "none" }}
            >
              Voir les coûts →
            </Link>
            <Link
              href="/demenagement/checklist"
              style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "#F0EBE0", fontWeight: 600, fontSize: "14px", padding: "12px 20px", borderRadius: "12px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              Ma checklist →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Ad placeholder */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2rem" }}>
          Publicité
        </div>

        {/* Timeline */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Les étapes clés — 8 semaines avant le déménagement
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {etapes.map((e) => (
            <div key={e.semaines} style={{ background: "white", borderRadius: "16px", border: "1px solid #EDE9E0", padding: "1rem 1.25rem", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.4rem" }}>{e.emoji}</span>
                <h3 style={{ fontWeight: 700, fontSize: "15px", color: DARK }}>{e.semaines}</h3>
              </div>
              <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "6px" }}>
                {e.taches.map((t, i) => (
                  <li key={i} style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.55 }}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Le 1er juillet */}
        <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "16px", padding: "1.25rem", marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <span style={{ fontSize: "1.5rem" }}>📅</span>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "#92400E", margin: 0 }}>
              Le 1er juillet — particularité québécoise
            </h2>
          </div>
          <p style={{ fontSize: "13px", color: "#78350F", lineHeight: 1.65, margin: 0 }}>
            Au Québec, la grande majorité des baux se terminent le 30 juin — ce qui fait du 1er juillet
            la <strong>journée de déménagement la plus intense en Amérique du Nord</strong>{" "}par habitant.
            Les camions de déménagement sont réservés des mois à l&apos;avance, les tarifs grimpent de
            30 à 50%, et les rues de Montréal se transforment en parcours d&apos;obstacles.
            <br /><br />
            <strong>Conseil :</strong>{" "}si possible, choisissez de déménager le 29 ou le 30 juin, ou
            optez pour un bail qui se termine à une autre date de l&apos;année.
          </p>
        </div>

        {/* Trouver un logement */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Trouver un logement au Québec
        </h2>
        <div className="flex flex-col gap-3 mb-6">
          {[
            { platform: "Kijiji", desc: "Plus grand volume d'annonces au Québec, surtout pour les appartements", emoji: "🔍" },
            { platform: "LesPAC", desc: "Populaire en région — souvent des annonces de propriétaires directs", emoji: "📌" },
            { platform: "Centris.ca", desc: "Réseau officiel des courtiers — surtout pour l'achat, mais aussi location", emoji: "🏠" },
            { platform: "Facebook Marketplace", desc: "Annonces directes, sous-locations, colocs — réponse rapide", emoji: "💬" },
            { platform: "Registre des loyers (TAL)", desc: "Vérifiez le loyer payé par l'ancien locataire avant de signer", emoji: "⚖️" },
          ].map((p) => (
            <div key={p.platform} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{p.emoji}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{p.platform}</div>
                <div style={{ fontSize: "12px", color: "#78716C", marginTop: "2px" }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Loyers par ville */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem", marginTop: "2.5rem" }}>
          Loyers moyens par ville (2026)
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "12px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, fontSize: "12px" }}>Ville</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>3½</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>4½</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>5½</th>
              </tr>
            </thead>
            <tbody>
              {villes.map((v, i) => (
                <tr key={v.ville} style={{ borderBottom: i < villes.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600 }}>
                    <span style={{ marginRight: "6px" }}>{v.emoji}</span>{v.ville}
                    <div style={{ fontSize: "11px", color: "#A8A29E", fontWeight: 400, marginTop: "2px" }}>{v.note}</div>
                  </td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>{v.loyer31}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>{v.loyer41}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>{v.loyer51}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Droits locataires */}
        <div style={{ background: "#EEF2FF", border: "1px solid #C7D2FE", borderRadius: "16px", padding: "1.25rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "#312E81", marginBottom: "0.75rem" }}>
            ⚖️ Vos droits comme locataire au Québec
          </h2>
          <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Le locataire a le droit au maintien dans les lieux — le propriétaire ne peut vous expulser sans motif légal.",
              "Une augmentation de loyer doit vous être annoncée au moins 3 mois avant la fin du bail.",
              "Vous pouvez contester une augmentation jugée abusive devant le Tribunal administratif du logement (TAL).",
              "Le registre des loyers vous permet de vérifier le loyer payé par le locataire précédent.",
              "En cas de litige, le TAL est gratuit et accessible sans avocat.",
            ].map((d, i) => (
              <li key={i} style={{ fontSize: "13px", color: "#3730A3", lineHeight: 1.6 }}>{d}</li>
            ))}
          </ul>
        </div>

        {/* Liens utiles */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Ressources officielles
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {ressources.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", textDecoration: "none" }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E" }}>{r.label}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{r.desc}</div>
              </div>
              <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0, marginLeft: "8px" }}>↗</span>
            </a>
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

        {/* Schema FAQ */}
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

        {/* CTAs internes */}
        <div className="grid grid-cols-1 gap-3 mb-10">
          {[
            { href: "/demenagement/cout", emoji: "💸", titre: "Combien coûte un déménagement au Québec ?", desc: "Tableaux comparatifs, tailles de logement, coûts cachés" },
            { href: "/demenagement/checklist", emoji: "✅", titre: "Checklist déménagement interactive", desc: "Ne rien oublier — liste cochable avec rappels" },
            { href: "/demenagement/montreal", emoji: "🏙️", titre: "Déménager à Montréal en 2026", desc: "Quartiers, loyers, métro, ressources locales" },
            { href: "/assurances/habitation", emoji: "🛡️", titre: "Assurance habitation Québec", desc: "À prévoir avant le jour du déménagement" },
            { href: "/budget/calculateur", emoji: "📊", titre: "Calculateur budget mensuel", desc: "Simulez votre nouveau budget dans la nouvelle ville" },
          ].map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{cta.emoji}</span>
              <div className="flex-1 min-w-0">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{cta.titre}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{cta.desc}</div>
              </div>
              <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0 }}>→</span>
            </Link>
          ))}
        </div>

        {/* Ad bas */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "1rem" }}>
          Publicité
        </div>

        <p style={{ color: "#A8A29E", fontSize: "11px", textAlign: "center", lineHeight: 1.6 }}>
          Les loyers indiqués sont des estimations basées sur des données du marché locatif québécois en 2026.
          Les prix varient selon le quartier, l&apos;état et les commodités du logement.
        </p>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié au gouvernement.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
