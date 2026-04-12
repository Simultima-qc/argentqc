import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide complet pour dÃ©mÃ©nager au QuÃ©bec en 2026 | ArgentQC.ca",
  description:
    "Tout ce qu'il faut savoir pour dÃ©mÃ©nager au QuÃ©bec en 2026 : Ã©tapes, coÃ»ts, droits des locataires, le 1er juillet et les ressources officielles.",
  keywords: [
    "dÃ©mÃ©nagement QuÃ©bec",
    "dÃ©mÃ©nager au QuÃ©bec 2026",
    "guide dÃ©mÃ©nagement QuÃ©bec",
    "Ã©tapes dÃ©mÃ©nagement QuÃ©bec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const etapes = [
  {
    semaines: "8 semaines avant",
    emoji: "ðŸ“‹",
    taches: [
      "Donner son prÃ©avis au propriÃ©taire (minimum 3 mois pour un bail annuel)",
      "Commencer la recherche de logement (Kijiji, LesPAC, Centris, Facebook Marketplace)",
      "Obtenir des soumissions de compagnies de dÃ©mÃ©nagement",
      "Commencer Ã  dÃ©sencombrer et donner / vendre ce qu'on ne garde pas",
    ],
  },
  {
    semaines: "4 semaines avant",
    emoji: "ðŸ“¦",
    taches: [
      "RÃ©server la compagnie de dÃ©mÃ©nagement ou louer le camion",
      "Commencer Ã  emballer les objets non essentiels",
      "Aviser Canada Post du changement d'adresse",
      "PrÃ©voir l'assurance habitation au nouveau logement",
    ],
  },
  {
    semaines: "2 semaines avant",
    emoji: "ðŸ“®",
    taches: [
      "Aviser : SAAQ, Revenu QuÃ©bec, Revenu Canada (Mon dossier), banques",
      "Aviser : employeur, mÃ©decin, dentiste, Ã©cole des enfants",
      "RÃ©server l'ascenseur ou le monte-meuble si nÃ©cessaire",
      "PrÃ©parer les boÃ®tes essentielles (Ã  dÃ©baller en premier)",
    ],
  },
  {
    semaines: "1 semaine avant",
    emoji: "ðŸ”‘",
    taches: [
      "Confirmer les dÃ©tails avec la compagnie de dÃ©mÃ©nagement",
      "Faire les changements d'adresse restants",
      "PrÃ©parer une boÃ®te de survie (draps, cafÃ©, nÃ©cessaire salle de bain)",
      "VÃ©rifier l'Ã©tat du nouveau logement et documenter (photos)",
    ],
  },
  {
    semaines: "Jour J",
    emoji: "ðŸš›",
    taches: [
      "Photographier chaque piÃ¨ce de l'ancien logement avant de partir",
      "Lire les compteurs (eau, gaz, Ã©lectricitÃ©) et aviser Hydro-QuÃ©bec",
      "Remettre les clÃ©s au propriÃ©taire et obtenir une confirmation Ã©crite",
      "VÃ©rifier la livraison de tous les meubles et colis",
    ],
  },
  {
    semaines: "AprÃ¨s le dÃ©mÃ©nagement",
    emoji: "âœ…",
    taches: [
      "Mettre Ã  jour le permis de conduire et l'immatriculation (SAAQ â€” 30 jours)",
      "Faire les changements d'adresse manquants (CÃ©gep, universitÃ©, RAMQ)",
      "Tester les dÃ©tecteurs de fumÃ©e et de CO",
      "Conserver les reÃ§us des frais de dÃ©mÃ©nagement (dÃ©ductibles si dÃ©mÃ©nagement pour le travail)",
    ],
  },
];

const villes = [
  { ville: "MontrÃ©al", emoji: "ðŸ™ï¸", loyer31: "950â€“1 350 $", loyer41: "1 200â€“1 800 $", loyer51: "1 600â€“2 500 $", note: "MarchÃ© tendu. Le Plateau, Rosemont, Verdun trÃ¨s populaires." },
  { ville: "QuÃ©bec", emoji: "ðŸ°", loyer31: "750â€“1 000 $", loyer41: "900â€“1 350 $", loyer51: "1 100â€“1 700 $", note: "MarchÃ© plus abordable. Limoilou et Saint-Roch attirent les jeunes." },
  { ville: "Laval", emoji: "ðŸŒ¿", loyer31: "850â€“1 150 $", loyer41: "1 050â€“1 500 $", loyer51: "1 350â€“2 000 $", note: "Banlieue de MontrÃ©al avec accÃ¨s mÃ©tro (ligne orange)." },
  { ville: "Longueuil", emoji: "ðŸŒ‰", loyer31: "750â€“1 050 $", loyer41: "950â€“1 400 $", loyer51: "1 200â€“1 750 $", note: "Rive-Sud accessible en mÃ©tro (ligne jaune)." },
  { ville: "Sherbrooke", emoji: "ðŸŽ“", loyer31: "650â€“900 $", loyer41: "800â€“1 150 $", loyer51: "950â€“1 400 $", note: "Ville universitaire dynamique, coÃ»ts de vie parmi les plus bas." },
  { ville: "Gatineau", emoji: "ðŸŒ²", loyer31: "850â€“1 100 $", loyer41: "1 000â€“1 400 $", loyer51: "1 250â€“1 800 $", note: "PrÃ¨s d'Ottawa â€” marchÃ© plus cher que les autres villes rÃ©gionales." },
];

const ressources = [
  { label: "Tribunal administratif du logement (TAL)", desc: "Droits et obligations des locataires et propriÃ©taires", href: "https://www.tal.gouv.qc.ca/" },
  { label: "Registre des loyers â€” TAL", desc: "VÃ©rifier le loyer payÃ© par l'ancien locataire", href: "https://www.tal.gouv.qc.ca/fr/registre-des-loyers" },
  { label: "Kijiji â€” Appartements QuÃ©bec", desc: "Annonces de logements partout au QuÃ©bec", href: "https://www.kijiji.ca/b-appartement-condo/ville-de-montreal/c37l1700281" },
  { label: "LesPAC", desc: "Petites annonces quÃ©bÃ©coises incluant logements", href: "https://www.lespac.com/immobilier/location/" },
  { label: "SAAQ â€” Changement d'adresse", desc: "Mettre Ã  jour votre permis et immatriculation", href: "https://saaq.gouv.qc.ca/services-en-ligne/changement-adresse/" },
  { label: "Canada Post â€” RÃ©expÃ©dition", desc: "Faire rÃ©expÃ©dier votre courrier Ã  votre nouvelle adresse", href: "https://www.canadapost-postescanada.ca/cpc/fr/particuliers/postez-et-recevez/gerer-votre-courrier/reacheminement.page" },
];

const faqs = [
  {
    q: "Quand faut-il donner son prÃ©avis pour quitter un logement au QuÃ©bec ?",
    r: "Pour un bail annuel (le cas le plus courant), vous devez aviser votre propriÃ©taire au minimum 3 mois avant la date de fin du bail. Si votre bail se termine le 30 juin, vous devez donc aviser avant le 1er avril. Pour un bail mensuel, le dÃ©lai est d'1 mois.",
  },
  {
    q: "Qu'est-ce que le 1er juillet au QuÃ©bec ?",
    r: "Le 1er juillet est la date traditionnelle de fin de bail de la majoritÃ© des logements quÃ©bÃ©cois. Cette concentration crÃ©e une journÃ©e de dÃ©mÃ©nagement massive, avec une demande de camions et de dÃ©mÃ©nageurs qui explose. Si vous dÃ©mÃ©nagez le 1er juillet, rÃ©servez au minimum 4 mois Ã  l'avance et attendez-vous Ã  des tarifs 30 Ã  50% plus Ã©levÃ©s qu'en dehors de cette pÃ©riode.",
  },
  {
    q: "Le propriÃ©taire peut-il refuser mon dÃ©mÃ©nagement au 1er juillet ?",
    r: "Non. La date de fin de bail est indiquÃ©e dans votre contrat. Le 1er juillet est simplement la date la plus courante. Si votre bail se termine le 30 juin, vous avez le droit de partir le 1er juillet. Votre propriÃ©taire ne peut pas vous forcer Ã  rester.",
  },
  {
    q: "Puis-je dÃ©duire mes frais de dÃ©mÃ©nagement de mes impÃ´ts ?",
    r: "Oui, si vous dÃ©mÃ©nagez d'au moins 40 km plus prÃ¨s d'un nouvel emploi ou d'un Ã©tablissement scolaire. Vous pouvez dÃ©duire les frais de dÃ©mÃ©nagement dans votre dÃ©claration fÃ©dÃ©rale (formulaire T1-M). Gardez tous vos reÃ§us.",
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
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>DÃ©mÃ©nagement</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide complet Â· DÃ©mÃ©nagement QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Guide complet pour dÃ©mÃ©nager au QuÃ©bec en 2026
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
            PrÃ©avis, recherche de logement, droits des locataires, le 1er juillet, organismes Ã  aviser â€”
            tout ce qu&apos;il faut savoir pour un dÃ©mÃ©nagement sans stress au QuÃ©bec.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/demenagement/cout"
              style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "14px", padding: "12px 20px", borderRadius: "12px", textDecoration: "none" }}
            >
              Voir les coÃ»ts â†’
            </Link>
            <Link
              href="/demenagement/checklist"
              style={{ display: "inline-block", background: "rgba(255,255,255,0.08)", color: "#F0EBE0", fontWeight: 600, fontSize: "14px", padding: "12px 20px", borderRadius: "12px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              Ma checklist â†’
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Ad placeholder */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2rem" }}>
          PublicitÃ©
        </div>

        {/* Timeline */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Les Ã©tapes clÃ©s â€” 8 semaines avant le dÃ©mÃ©nagement
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
            <span style={{ fontSize: "1.5rem" }}>ðŸ“…</span>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 800, color: "#92400E", margin: 0 }}>
              Le 1er juillet â€” particularitÃ© quÃ©bÃ©coise
            </h2>
          </div>
          <p style={{ fontSize: "13px", color: "#78350F", lineHeight: 1.65, margin: 0 }}>
            Au QuÃ©bec, la grande majoritÃ© des baux se terminent le 30 juin â€” ce qui fait du 1er juillet
            la <strong>journÃ©e de dÃ©mÃ©nagement la plus intense en AmÃ©rique du Nord</strong>{" "}par habitant.
            Les camions de dÃ©mÃ©nagement sont rÃ©servÃ©s des mois Ã  l&apos;avance, les tarifs grimpent de
            30 Ã  50%, et les rues de MontrÃ©al se transforment en parcours d&apos;obstacles.
            <br /><br />
            <strong>Conseil :</strong>{" "}si possible, choisissez de dÃ©mÃ©nager le 29 ou le 30 juin, ou
            optez pour un bail qui se termine Ã  une autre date de l&apos;annÃ©e.
          </p>
        </div>

        {/* Trouver un logement */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Trouver un logement au QuÃ©bec
        </h2>
        <div className="flex flex-col gap-3 mb-6">
          {[
            { platform: "Kijiji", desc: "Plus grand volume d'annonces au QuÃ©bec, surtout pour les appartements", emoji: "ðŸ”" },
            { platform: "LesPAC", desc: "Populaire en rÃ©gion â€” souvent des annonces de propriÃ©taires directs", emoji: "ðŸ“Œ" },
            { platform: "Centris.ca", desc: "RÃ©seau officiel des courtiers â€” surtout pour l'achat, mais aussi location", emoji: "ðŸ " },
            { platform: "Facebook Marketplace", desc: "Annonces directes, sous-locations, colocs â€” rÃ©ponse rapide", emoji: "ðŸ’¬" },
            { platform: "Registre des loyers (TAL)", desc: "VÃ©rifiez le loyer payÃ© par l'ancien locataire avant de signer", emoji: "âš–ï¸" },
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
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>3Â½</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>4Â½</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>5Â½</th>
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
            âš–ï¸ Vos droits comme locataire au QuÃ©bec
          </h2>
          <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "Le locataire a le droit au maintien dans les lieux â€” le propriÃ©taire ne peut vous expulser sans motif lÃ©gal.",
              "Une augmentation de loyer doit vous Ãªtre annoncÃ©e au moins 3 mois avant la fin du bail.",
              "Vous pouvez contester une augmentation jugÃ©e abusive devant le Tribunal administratif du logement (TAL).",
              "Le registre des loyers vous permet de vÃ©rifier le loyer payÃ© par le locataire prÃ©cÃ©dent.",
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
              <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0, marginLeft: "8px" }}>â†—</span>
            </a>
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
            { href: "/demenagement/cout", emoji: "ðŸ’¸", titre: "Combien coÃ»te un dÃ©mÃ©nagement au QuÃ©bec ?", desc: "Tableaux comparatifs, tailles de logement, coÃ»ts cachÃ©s" },
            { href: "/demenagement/checklist", emoji: "âœ…", titre: "Checklist dÃ©mÃ©nagement interactive", desc: "Ne rien oublier â€” liste cochable avec rappels" },
            { href: "/demenagement/montreal", emoji: "ðŸ™ï¸", titre: "DÃ©mÃ©nager Ã  MontrÃ©al en 2026", desc: "Quartiers, loyers, mÃ©tro, ressources locales" },
            { href: "/assurances/habitation", emoji: "ðŸ›¡ï¸", titre: "Assurance habitation QuÃ©bec", desc: "Ã€ prÃ©voir avant le jour du dÃ©mÃ©nagement" },
            { href: "/internet/comparateur", emoji: "ðŸŒ", titre: "Comparateur internet QuÃ©bec", desc: "Trouvez le meilleur forfait dans votre nouvelle adresse" },
            { href: "/budget/calculateur", emoji: "ðŸ“Š", titre: "Calculateur budget mensuel", desc: "Simulez votre nouveau budget dans la nouvelle ville" },
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
              <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0 }}>â†’</span>
            </Link>
          ))}
        </div>

        {/* Ad bas */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "1rem" }}>
          PublicitÃ©
        </div>

        <p style={{ color: "#A8A29E", fontSize: "11px", textAlign: "center", lineHeight: 1.6 }}>
          Les loyers indiquÃ©s sont des estimations basÃ©es sur des donnÃ©es du marchÃ© locatif quÃ©bÃ©cois en 2026.
          Les prix varient selon le quartier, l&apos;Ã©tat et les commoditÃ©s du logement.
        </p>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: GOLD, fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affiliÃ© au gouvernement.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
