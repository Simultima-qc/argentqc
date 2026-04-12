import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DÃ©mÃ©nager Ã  MontrÃ©al en 2026 : guide complet | ArgentQC.ca",
  description:
    "Tout ce qu'il faut savoir pour dÃ©mÃ©nager Ã  MontrÃ©al en 2026 : loyers par quartier, le 1er juillet, permis de stationnement, ressources locales et dÃ©marches administratives.",
  keywords: [
    "dÃ©mÃ©nager Ã  MontrÃ©al",
    "dÃ©mÃ©nagement MontrÃ©al 2026",
    "loyer MontrÃ©al quartier",
    "guide dÃ©mÃ©nagement MontrÃ©al",
    "1er juillet MontrÃ©al",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const quartiers = [
  {
    nom: "Le Plateau-Mont-Royal",
    emoji: "ðŸ˜ï¸",
    loyer31: "1 100â€“1 500 $",
    loyer41: "1 400â€“2 000 $",
    loyer51: "1 800â€“2 800 $",
    profil: "Jeunes professionnels, artistes, familles branchÃ©es",
    note: "Quartier le plus demandÃ© â€” marchÃ© trÃ¨s tendu, disponibilitÃ©s rares.",
  },
  {
    nom: "Rosemontâ€“La Petite-Patrie",
    emoji: "ðŸŒ¿",
    loyer31: "1 000â€“1 400 $",
    loyer41: "1 300â€“1 850 $",
    loyer51: "1 700â€“2 500 $",
    profil: "Familles, jeunes professionnels, cyclistes",
    note: "Quartier prisÃ© avec pistes cyclables, marchÃ©s locaux et bonne desserte STM.",
  },
  {
    nom: "Verdun",
    emoji: "ðŸŒŠ",
    loyer31: "900â€“1 200 $",
    loyer41: "1 150â€“1 600 $",
    loyer51: "1 450â€“2 100 $",
    profil: "Familles, premiers acheteurs de quartier, bord de fleuve",
    note: "En forte gentrification â€” encore accessible mais les prix montent vite.",
  },
  {
    nom: "Villerayâ€“Saint-Michel",
    emoji: "ðŸ™ï¸",
    loyer31: "900â€“1 150 $",
    loyer41: "1 100â€“1 500 $",
    loyer51: "1 350â€“1 950 $",
    profil: "Familles, immigrants rÃ©cents, budget modÃ©rÃ©",
    note: "Quartier diversifiÃ©, bien desservi par le mÃ©tro (ligne orange).",
  },
  {
    nom: "Notre-Dame-de-GrÃ¢ce (NDG)",
    emoji: "ðŸŽ“",
    loyer31: "950â€“1 250 $",
    loyer41: "1 200â€“1 700 $",
    loyer51: "1 500â€“2 200 $",
    profil: "Ã‰tudiants, familles anglophones, professionnels",
    note: "Ambiance rÃ©sidentielle calme, proche de Concordia et McGill.",
  },
  {
    nom: "Hochelaga-Maisonneuve",
    emoji: "ðŸ­",
    loyer31: "800â€“1 100 $",
    loyer41: "1 000â€“1 400 $",
    loyer51: "1 250â€“1 750 $",
    profil: "Artistes, jeunes, budget serrÃ©",
    note: "Le quartier le plus abordable proche du centre â€” en gentrification rapide.",
  },
  {
    nom: "CÃ´te-des-Neiges",
    emoji: "ðŸŒ",
    loyer31: "850â€“1 150 $",
    loyer41: "1 050â€“1 500 $",
    loyer51: "1 350â€“1 950 $",
    profil: "Ã‰tudiants (UdeM), communautÃ©s immigrantes, familles",
    note: "Quartier trÃ¨s multiculturel, bien desservi, logements souvent disponibles.",
  },
  {
    nom: "Saint-Laurent",
    emoji: "ðŸ¢",
    loyer31: "900â€“1 200 $",
    loyer41: "1 100â€“1 550 $",
    loyer51: "1 400â€“2 000 $",
    profil: "Familles, travailleurs des zones industrielles",
    note: "Bon accÃ¨s Ã  l'autoroute et aux parcs industriels â€” moins touristique.",
  },
];

const ressourcesLocales = [
  {
    label: "Permis de stationnement â€” Ville de MontrÃ©al",
    desc: "RÃ©server des places sur rue pour le jour du dÃ©mÃ©nagement (~75 $)",
    href: "https://montreal.ca/sujets/permis-de-stationnement-pour-demenagement",
  },
  {
    label: "STM â€” Planifier votre trajet",
    desc: "MÃ©tro, bus, REM â€” vÃ©rifier l'accÃ¨s en transport en commun de votre nouveau quartier",
    href: "https://www.stm.info/fr/infos/reseaux/metro",
  },
  {
    label: "Registre des loyers â€” TAL",
    desc: "VÃ©rifier le loyer payÃ© par l'ancien locataire dans votre logement",
    href: "https://www.tal.gouv.qc.ca/fr/registre-des-loyers",
  },
  {
    label: "BibliothÃ¨que de MontrÃ©al â€” Carte de bibliothÃ¨que",
    desc: "AccÃ¨s gratuit Ã  plus de 45 bibliothÃ¨ques â€” Ã  mettre Ã  jour aprÃ¨s le dÃ©mÃ©nagement",
    href: "https://montreal.ca/articles/obtenir-ou-renouveler-une-carte-de-bibliotheque",
  },
  {
    label: "Cour municipale â€” Changement d'adresse",
    desc: "Si vous avez des contraventions en cours ou un dossier ouvert",
    href: "https://montreal.ca/sujets/cour-municipale-de-montreal",
  },
  {
    label: "SAAQ â€” Changement d'adresse (30 jours)",
    desc: "Obligatoire dans les 30 jours suivant le dÃ©mÃ©nagement",
    href: "https://saaq.gouv.qc.ca/services-en-ligne/changement-adresse/",
  },
];

const conseilsMontreal = [
  {
    emoji: "ðŸš—",
    titre: "RÃ©servez un permis de stationnement",
    detail:
      "La Ville de MontrÃ©al exige un permis pour bloquer des cases de stationnement sur rue lors d'un dÃ©mÃ©nagement. CoÃ»t : environ 75 $. Faites la demande au moins 5 jours ouvrables Ã  l'avance sur Montreal.ca.",
  },
  {
    emoji: "ðŸ“…",
    titre: "Ã‰vitez absolument le 1er juillet",
    detail:
      "MontrÃ©al est l'Ã©picentre du 1er juillet quÃ©bÃ©cois. Les camions sont rÃ©servÃ©s 3 Ã  4 mois Ã  l'avance, les tarifs explosent (+30 Ã  50 %), et les rues sont bloquÃ©es. Si vous pouvez dÃ©mÃ©nager le 29 ou 30 juin, vous Ã©conomisez et vous Ã©vitez le chaos.",
  },
  {
    emoji: "ðŸš‡",
    titre: "VÃ©rifiez l'accÃ¨s au mÃ©tro et au REM",
    detail:
      "La STM dessert la majoritÃ© des quartiers centraux. Le REM dessert maintenant la Rive-Sud, l'Ouest-de-l'ÃŽle et la Rive-Nord. Un logement Ã  5 minutes d'une station vaut souvent un loyer lÃ©gÃ¨rement plus Ã©levÃ© si vous Ã©vitez une voiture.",
  },
  {
    emoji: "ðŸ“¦",
    titre: "Montez-meubles et ascenseurs : rÃ©servez tÃ´t",
    detail:
      "Dans les immeubles en hauteur, les ascenseurs de service doivent Ãªtre rÃ©servÃ©s. Contactez votre syndicat de copropriÃ©tÃ© ou votre propriÃ©taire dÃ¨s que vous connaissez la date. Certains immeubles louent aussi un monte-meubles pour les Ã©tages.",
  },
  {
    emoji: "ðŸ”",
    titre: "Utilisez le Registre des loyers avant de signer",
    detail:
      "Ã€ MontrÃ©al, les hausses de loyer abusives sont frÃ©quentes. Avant de signer votre bail, vÃ©rifiez gratuitement sur le Registre des loyers du TAL quel loyer payait le locataire prÃ©cÃ©dent. Vous pouvez contester une hausse abusive.",
  },
  {
    emoji: "ðŸ…¿ï¸",
    titre: "VÃ©rifiez les rÃ¨gles de vignettes de stationnement",
    detail:
      "Plusieurs quartiers montrÃ©alais ont des zones de stationnement rÃ©servÃ©es aux rÃ©sidents. Assurez-vous que votre rue permet l'obtention d'une vignette avant de dÃ©mÃ©nager si vous avez une voiture.",
  },
];

const arrondissements = [
  { profil: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§ Famille avec enfants", recommandations: "Rosemont, Villeray, Verdun, Saint-Laurent", raison: "Parcs, Ã©coles, espaces verts, loyers plus accessibles" },
  { profil: "ðŸŽ“ Ã‰tudiant", recommandations: "CÃ´te-des-Neiges, NDG, Plateau, Hochelaga", raison: "Proxi universitÃ©s (UdeM, McGill, UQAM, Concordia)" },
  { profil: "ðŸ’¼ Professionnel sans voiture", recommandations: "Plateau, Rosemont, Mile-End, Verdun", raison: "MÃ©tro, REM, pistes cyclables â€” tout Ã  pied ou Ã  vÃ©lo" },
  { profil: "ðŸ’° Budget serrÃ©", recommandations: "Hochelaga, Villeray, Saint-Michel, CÃ´te-des-Neiges", raison: "Loyers encore accessibles sous les 1 100 $ pour un 3Â½" },
  { profil: "ðŸŒ Nouveaux arrivants", recommandations: "CÃ´te-des-Neiges, Saint-Laurent, Villeray", raison: "CommunautÃ©s Ã©tablies, ressources d'accueil, services multilingues" },
];

const faqs = [
  {
    q: "Quelle est la meilleure pÃ©riode pour dÃ©mÃ©nager Ã  MontrÃ©al ?",
    r: "Ã‰vitez le 1er juillet Ã  tout prix â€” c'est la journÃ©e la plus chaotique de l'annÃ©e Ã  MontrÃ©al. La meilleure pÃ©riode est de mi-aoÃ»t Ã  fin septembre : les camions sont disponibles, les tarifs sont normaux et la mÃ©tÃ©o est encore clÃ©mente. Janvier-fÃ©vrier est le moins cher, mais le froid et la neige compliquent la logistique.",
  },
  {
    q: "Ai-je besoin d'un permis pour dÃ©mÃ©nager Ã  MontrÃ©al ?",
    r: "Pas un permis de dÃ©mÃ©nagement en tant que tel, mais si vous voulez bloquer des cases de stationnement sur rue pour votre camion, vous devez obtenir un permis de stationnement temporaire auprÃ¨s de la Ville de MontrÃ©al (~75 $). Faites la demande au moins 5 jours ouvrables Ã  l'avance sur Montreal.ca.",
  },
  {
    q: "Quel quartier est le plus abordable Ã  MontrÃ©al en 2026 ?",
    r: "Hochelaga-Maisonneuve reste le quartier central le plus abordable, avec des 3Â½ entre 800 $ et 1 100 $. Villerayâ€“Saint-Michel et CÃ´te-des-Neiges offrent aussi de bons rapports qualitÃ©-prix. Pour moins cher encore, les arrondissements pÃ©riphÃ©riques comme Saint-Laurent ou MontrÃ©al-Nord sont accessibles mais moins branchÃ©s.",
  },
  {
    q: "Mon propriÃ©taire peut-il refuser que je dÃ©mÃ©nage le 1er juillet ?",
    r: "Non. Si votre bail se termine le 30 juin, vous avez le droit de quitter le logement le 1er juillet. Le propriÃ©taire ne peut pas vous forcer Ã  rester. Assurez-vous simplement d'avoir donnÃ© votre prÃ©avis dans les dÃ©lais requis (3 mois pour un bail annuel).",
  },
  {
    q: "Comment vÃ©rifier si le loyer demandÃ© est raisonnable Ã  MontrÃ©al ?",
    r: "Utilisez le Registre des loyers du Tribunal administratif du logement (TAL) pour vÃ©rifier le loyer payÃ© par le locataire prÃ©cÃ©dent dans le mÃªme logement. Si le nouveau propriÃ©taire demande une hausse importante, vous pouvez la contester devant le TAL dans les 10 jours suivant la rÃ©ception de l'avis.",
  },
  {
    q: "Quelles dÃ©marches administratives dois-je faire aprÃ¨s mon dÃ©mÃ©nagement Ã  MontrÃ©al ?",
    r: "Dans les 30 jours : SAAQ (permis de conduire et immatriculation), banque, employeur, Revenu QuÃ©bec (Mon dossier), Revenu Canada (Mon dossier CRA), RAMQ (carte d'assurance maladie). Pensez aussi Ã  la STM (abonnement), la bibliothÃ¨que de MontrÃ©al et votre vignette de stationnement si applicable.",
  },
];

export default function DemenagementMontrealPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <header
        style={{
          background: DARK,
          position: "sticky",
          top: 0,
          zIndex: 10,
          padding: "14px 16px",
          boxShadow: "0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 800,
              fontSize: "15px",
              color: GOLD,
              textDecoration: "none",
            }}
          >
            ArgentQC.ca
          </Link>
          <Link
            href="/questionnaire"
            style={{
              color: GOLD,
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "underline",
              opacity: 0.85,
            }}
          >
            Trouver mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{ background: DARK, position: "relative", overflow: "hidden" }}
        className="px-5 py-12"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.05,
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <nav style={{ fontSize: "12px", color: "rgba(240,235,224,0.4)", marginBottom: "12px" }}>
            <Link href="/" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>
              Accueil
            </Link>
            {" â€º "}
            <Link
              href="/demenagement"
              style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}
            >
              DÃ©mÃ©nagement
            </Link>
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>MontrÃ©al</span>
          </nav>
          <p
            style={{
              color: GOLD,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
              opacity: 0.8,
            }}
          >
            Guide local Â· DÃ©mÃ©nagement MontrÃ©al 2026
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              color: "#F0EBE0",
              fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            DÃ©mÃ©nager Ã  MontrÃ©al en 2026 : guide complet
          </h1>
          <p
            style={{
              color: "rgba(240,235,224,0.6)",
              fontSize: "14px",
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            Loyers par quartier, le 1er juillet, permis de stationnement, meilleurs arrondissements
            selon votre profil â€” tout ce qu&apos;il faut savoir pour bien dÃ©mÃ©nager Ã  MontrÃ©al.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/demenagement/cout"
              style={{
                display: "inline-block",
                background: GOLD,
                color: DARK,
                fontWeight: 800,
                fontSize: "14px",
                padding: "12px 20px",
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              CoÃ»ts du dÃ©mÃ©nagement â†’
            </Link>
            <Link
              href="/demenagement/checklist"
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.08)",
                color: "#F0EBE0",
                fontWeight: 600,
                fontSize: "14px",
                padding: "12px 20px",
                borderRadius: "12px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Ma checklist â†’
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Ad placeholder */}
        <div
          style={{
            background: "#EDE9E0",
            borderRadius: "12px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#A8A29E",
            fontSize: "11px",
            marginBottom: "2rem",
          }}
        >
          PublicitÃ©
        </div>

        {/* Le 1er juillet â€” bloc d'alerte */}
        <div
          style={{
            background: "#FEF3C7",
            border: "1px solid #FCD34D",
            borderRadius: "16px",
            padding: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <span style={{ fontSize: "1.5rem" }}>ðŸ“…</span>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "#92400E",
                margin: 0,
              }}
            >
              Le 1er juillet Ã  MontrÃ©al â€” ce qu&apos;il faut savoir
            </h2>
          </div>
          <p style={{ fontSize: "13px", color: "#78350F", lineHeight: 1.65, margin: 0 }}>
            MontrÃ©al est l&apos;Ã©picentre du 1er juillet quÃ©bÃ©cois. La majoritÃ© des baux se
            terminant le 30 juin, des{" "}
            <strong>dizaines de milliers de mÃ©nages dÃ©mÃ©nagent le mÃªme jour</strong>{" "}dans toute la
            ville. Camions rÃ©servÃ©s des mois Ã  l&apos;avance, rues bloquÃ©es, tarifs en hausse de 30
            Ã  50 %, ascenseurs monopolisÃ©s â€” la journÃ©e peut vite tourner au cauchemar.
            <br />
            <br />
            <strong>Notre conseil :</strong>{" "}dÃ©mÃ©nagez le 29 ou 30 juin si possible, ou choisissez
            un bail qui se termine Ã  une autre date. Sinon, rÃ©servez votre camion{" "}
            <strong>au minimum 3 Ã  4 mois Ã  l&apos;avance</strong>{" "}et prÃ©voyez une journÃ©e longue.
          </p>
        </div>

        {/* Loyers par quartier */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "0.5rem",
          }}
        >
          Loyers moyens par quartier Ã  MontrÃ©al (2026)
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.65, marginBottom: "1.25rem" }}>
          Estimations basÃ©es sur les donnÃ©es du marchÃ© locatif montrÃ©alais en 2026. Les prix varient
          selon l&apos;Ã©tat, l&apos;Ã©tage et les commoditÃ©s du logement.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "13px",
              background: "white",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #EDE9E0",
            }}
          >
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, fontSize: "12px" }}>
                  Quartier
                </th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>
                  3Â½
                </th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>
                  4Â½
                </th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>
                  5Â½
                </th>
              </tr>
            </thead>
            <tbody>
              {quartiers.map((q, i) => (
                <tr
                  key={q.nom}
                  style={{ borderBottom: i < quartiers.length - 1 ? "1px solid #F0EBE0" : "none" }}
                >
                  <td style={{ padding: "10px 14px" }}>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                      {q.emoji} {q.nom}
                    </div>
                    <div style={{ fontSize: "11px", color: "#A8A29E", fontWeight: 400, marginTop: "2px" }}>
                      {q.note}
                    </div>
                  </td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>
                    {q.loyer31}
                  </td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>
                    {q.loyer41}
                  </td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C" }}>
                    {q.loyer51}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quel quartier selon votre profil */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          Quel quartier choisir selon votre profil ?
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {arrondissements.map((a) => (
            <div
              key={a.profil}
              style={{
                background: "white",
                border: "1px solid #EDE9E0",
                borderRadius: "14px",
                padding: "14px 16px",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "4px" }}>
                {a.profil}
              </div>
              <div style={{ fontSize: "13px", color: DARK, fontWeight: 600, marginBottom: "2px" }}>
                {a.recommandations}
              </div>
              <div style={{ fontSize: "12px", color: "#78716C" }}>{a.raison}</div>
            </div>
          ))}
        </div>

        {/* Ad mid */}
        <div
          style={{
            background: "#EDE9E0",
            borderRadius: "12px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#A8A29E",
            fontSize: "11px",
            marginBottom: "2.5rem",
          }}
        >
          PublicitÃ©
        </div>

        {/* Conseils spÃ©cifiques MontrÃ©al */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          6 choses Ã  savoir avant de dÃ©mÃ©nager Ã  MontrÃ©al
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {conseilsMontreal.map((c) => (
            <div
              key={c.titre}
              style={{
                background: "white",
                border: "1px solid #EDE9E0",
                borderRadius: "12px",
                padding: "14px 16px",
                display: "flex",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{c.emoji}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "4px" }}>
                  {c.titre}
                </div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>
                  {c.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Droits locataires MontrÃ©al */}
        <div
          style={{
            background: "#EEF2FF",
            border: "1px solid #C7D2FE",
            borderRadius: "16px",
            padding: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "#312E81",
              marginBottom: "0.75rem",
            }}
          >
            âš–ï¸ Vos droits comme locataire Ã  MontrÃ©al
          </h2>
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {[
              "Le locataire a le droit au maintien dans les lieux â€” le propriÃ©taire ne peut vous expulser sans motif lÃ©gal valide.",
              "Une hausse de loyer doit vous Ãªtre signifiÃ©e au moins 3 mois avant la fin du bail â€” vous avez 1 mois pour la contester.",
              "Utilisez le Registre des loyers du TAL pour vÃ©rifier le loyer de l'ancien locataire avant de signer.",
              "Pour les logements construits avant 2005, la clause G (reconduction) s'applique â€” le bail est reconduit automatiquement.",
              "Le TAL (Tribunal administratif du logement) est accessible gratuitement, sans avocat, pour tout litige locatif.",
            ].map((d, i) => (
              <li key={i} style={{ fontSize: "13px", color: "#3730A3", lineHeight: 1.6 }}>
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Ressources locales */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          Ressources utiles pour dÃ©mÃ©nager Ã  MontrÃ©al
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {ressourcesLocales.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "white",
                border: "1px solid #EDE9E0",
                borderRadius: "12px",
                padding: "12px 16px",
                textDecoration: "none",
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E" }}>{r.label}</div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>{r.desc}</div>
              </div>
              <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0, marginLeft: "8px" }}>
                â†—
              </span>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          Questions frÃ©quentes
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "16px",
                border: "1px solid #EDE9E0",
                padding: "1rem 1.25rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#1C1C1E",
                  marginBottom: "8px",
                }}
              >
                {faq.q}
              </h3>
              <p style={{ fontSize: "13px", color: "#44403C", lineHeight: 1.65, margin: 0 }}>
                {faq.r}
              </p>
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
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.r,
                },
              })),
            }),
          }}
        />

        {/* CTAs internes */}
        <div className="grid grid-cols-1 gap-3 mb-10">
          {[
            {
              href: "/demenagement/cout",
              emoji: "ðŸ’¸",
              titre: "Combien coÃ»te un dÃ©mÃ©nagement Ã  MontrÃ©al ?",
              desc: "Camion vs dÃ©mÃ©nageurs, coÃ»ts cachÃ©s, conseils pour Ã©conomiser",
            },
            {
              href: "/demenagement/checklist",
              emoji: "âœ…",
              titre: "Checklist dÃ©mÃ©nagement complÃ¨te",
              desc: "Ne rien oublier â€” 8 semaines avant au jour J",
            },
            {
              href: "/assurances/habitation",
              emoji: "ðŸ›¡ï¸",
              titre: "Assurance habitation au QuÃ©bec",
              desc: "Ã€ souscrire avant d'emmÃ©nager dans votre nouveau logement",
            },
            {
              href: "/budget/calculateur",
              emoji: "ðŸ“Š",
              titre: "Calculateur budget mensuel",
              desc: "Simulez votre budget avec le nouveau loyer montrÃ©alais",
            },
            {
              href: "/demenagement",
              emoji: "ðŸ“‹",
              titre: "Guide complet dÃ©mÃ©nagement QuÃ©bec",
              desc: "Toutes les Ã©tapes, droits des locataires, loyers par ville",
            },
          ].map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "white",
                border: "1px solid #EDE9E0",
                borderRadius: "14px",
                padding: "14px 16px",
                textDecoration: "none",
              }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{cta.emoji}</span>
              <div className="flex-1 min-w-0">
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>
                  {cta.titre}
                </div>
                <div style={{ fontSize: "12px", color: "#A8A29E", marginTop: "2px" }}>
                  {cta.desc}
                </div>
              </div>
              <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0 }}>â†’</span>
            </Link>
          ))}
        </div>

        {/* Ad bas */}
        <div
          style={{
            background: "#EDE9E0",
            borderRadius: "12px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#A8A29E",
            fontSize: "11px",
            marginBottom: "1rem",
          }}
        >
          PublicitÃ©
        </div>
        <p
          style={{
            color: "#A8A29E",
            fontSize: "11px",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Les loyers indiquÃ©s sont des estimations basÃ©es sur les donnÃ©es du marchÃ© locatif
          montrÃ©alais en 2026. Les prix varient selon le quartier, l&apos;Ã©tat et les commoditÃ©s du
          logement.
        </p>
      </div>

      <footer style={{ background: DARK, padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              color: GOLD,
              fontSize: "1rem",
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            ArgentQC.ca
          </p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>
            Outil informatif non affiliÃ© au gouvernement.
          </p>
          <Link
            href="/contact"
            style={{
              color: "rgba(240,235,224,0.45)",
              fontSize: "11px",
              display: "block",
              marginTop: "6px",
            }}
          >
            Contactez-nous
          </Link>
        </div>
      </footer>
    </main>
  );
}
