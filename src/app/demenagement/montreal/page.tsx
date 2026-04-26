import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Déménager à Montréal en 2026 : guide complet | ArgentQC.ca",
  description:
    "Tout ce qu'il faut savoir pour déménager à Montréal en 2026 : loyers par quartier, le 1er juillet, permis de stationnement, ressources locales et démarches administratives.",
  keywords: [
    "déménager à Montréal",
    "déménagement Montréal 2026",
    "loyer Montréal quartier",
    "guide déménagement Montréal",
    "1er juillet Montréal",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const quartiers = [
  {
    nom: "Le Plateau-Mont-Royal",
    emoji: "🏘️",
    loyer31: "1 100–1 500 $",
    loyer41: "1 400–2 000 $",
    loyer51: "1 800–2 800 $",
    profil: "Jeunes professionnels, artistes, familles branchées",
    note: "Quartier le plus demandé — marché très tendu, disponibilités rares.",
  },
  {
    nom: "Rosemont–La Petite-Patrie",
    emoji: "🌿",
    loyer31: "1 000–1 400 $",
    loyer41: "1 300–1 850 $",
    loyer51: "1 700–2 500 $",
    profil: "Familles, jeunes professionnels, cyclistes",
    note: "Quartier prisé avec pistes cyclables, marchés locaux et bonne desserte STM.",
  },
  {
    nom: "Verdun",
    emoji: "🌊",
    loyer31: "900–1 200 $",
    loyer41: "1 150–1 600 $",
    loyer51: "1 450–2 100 $",
    profil: "Familles, premiers acheteurs de quartier, bord de fleuve",
    note: "En forte gentrification — encore accessible mais les prix montent vite.",
  },
  {
    nom: "Villeray–Saint-Michel",
    emoji: "🏙️",
    loyer31: "900–1 150 $",
    loyer41: "1 100–1 500 $",
    loyer51: "1 350–1 950 $",
    profil: "Familles, immigrants récents, budget modéré",
    note: "Quartier diversifié, bien desservi par le métro (ligne orange).",
  },
  {
    nom: "Notre-Dame-de-Grâce (NDG)",
    emoji: "🎓",
    loyer31: "950–1 250 $",
    loyer41: "1 200–1 700 $",
    loyer51: "1 500–2 200 $",
    profil: "Étudiants, familles anglophones, professionnels",
    note: "Ambiance résidentielle calme, proche de Concordia et McGill.",
  },
  {
    nom: "Hochelaga-Maisonneuve",
    emoji: "🏭",
    loyer31: "800–1 100 $",
    loyer41: "1 000–1 400 $",
    loyer51: "1 250–1 750 $",
    profil: "Artistes, jeunes, budget serré",
    note: "Le quartier le plus abordable proche du centre — en gentrification rapide.",
  },
  {
    nom: "Côte-des-Neiges",
    emoji: "🌐",
    loyer31: "850–1 150 $",
    loyer41: "1 050–1 500 $",
    loyer51: "1 350–1 950 $",
    profil: "Étudiants (UdeM), communautés immigrantes, familles",
    note: "Quartier très multiculturel, bien desservi, logements souvent disponibles.",
  },
  {
    nom: "Saint-Laurent",
    emoji: "🏢",
    loyer31: "900–1 200 $",
    loyer41: "1 100–1 550 $",
    loyer51: "1 400–2 000 $",
    profil: "Familles, travailleurs des zones industrielles",
    note: "Bon accès à l'autoroute et aux parcs industriels — moins touristique.",
  },
];

const ressourcesLocales = [
  {
    label: "Permis de stationnement — Ville de Montréal",
    desc: "Réserver des places sur rue pour le jour du déménagement (~75 $)",
    href: "https://montreal.ca/sujets/permis-de-stationnement-pour-demenagement",
  },
  {
    label: "STM — Planifier votre trajet",
    desc: "Métro, bus, REM — vérifier l'accès en transport en commun de votre nouveau quartier",
    href: "https://www.stm.info/fr/infos/reseaux/metro",
  },
  {
    label: "Registre des loyers — TAL",
    desc: "Vérifier le loyer payé par l'ancien locataire dans votre logement",
    href: "https://www.tal.gouv.qc.ca/fr/registre-des-loyers",
  },
  {
    label: "Bibliothèque de Montréal — Carte de bibliothèque",
    desc: "Accès gratuit à plus de 45 bibliothèques — à mettre à jour après le déménagement",
    href: "https://montreal.ca/articles/obtenir-ou-renouveler-une-carte-de-bibliotheque",
  },
  {
    label: "Cour municipale — Changement d'adresse",
    desc: "Si vous avez des contraventions en cours ou un dossier ouvert",
    href: "https://montreal.ca/sujets/cour-municipale-de-montreal",
  },
  {
    label: "SAAQ — Changement d'adresse (30 jours)",
    desc: "Obligatoire dans les 30 jours suivant le déménagement",
    href: "https://saaq.gouv.qc.ca/services-en-ligne/changement-adresse/",
  },
];

const conseilsMontreal = [
  {
    emoji: "🚗",
    titre: "Réservez un permis de stationnement",
    detail:
      "La Ville de Montréal exige un permis pour bloquer des cases de stationnement sur rue lors d'un déménagement. Coût : environ 75 $. Faites la demande au moins 5 jours ouvrables à l'avance sur Montreal.ca.",
  },
  {
    emoji: "📅",
    titre: "Évitez absolument le 1er juillet",
    detail:
      "Montréal est l'épicentre du 1er juillet québécois. Les camions sont réservés 3 à 4 mois à l'avance, les tarifs explosent (+30 à 50 %), et les rues sont bloquées. Si vous pouvez déménager le 29 ou 30 juin, vous économisez et vous évitez le chaos.",
  },
  {
    emoji: "🚇",
    titre: "Vérifiez l'accès au métro et au REM",
    detail:
      "La STM dessert la majorité des quartiers centraux. Le REM dessert maintenant la Rive-Sud, l'Ouest-de-l'Île et la Rive-Nord. Un logement à 5 minutes d'une station vaut souvent un loyer légèrement plus élevé si vous évitez une voiture.",
  },
  {
    emoji: "📦",
    titre: "Montez-meubles et ascenseurs : réservez tôt",
    detail:
      "Dans les immeubles en hauteur, les ascenseurs de service doivent être réservés. Contactez votre syndicat de copropriété ou votre propriétaire dès que vous connaissez la date. Certains immeubles louent aussi un monte-meubles pour les étages.",
  },
  {
    emoji: "🔍",
    titre: "Utilisez le Registre des loyers avant de signer",
    detail:
      "À Montréal, les hausses de loyer abusives sont fréquentes. Avant de signer votre bail, vérifiez gratuitement sur le Registre des loyers du TAL quel loyer payait le locataire précédent. Vous pouvez contester une hausse abusive.",
  },
  {
    emoji: "🅿️",
    titre: "Vérifiez les règles de vignettes de stationnement",
    detail:
      "Plusieurs quartiers montréalais ont des zones de stationnement réservées aux résidents. Assurez-vous que votre rue permet l'obtention d'une vignette avant de déménager si vous avez une voiture.",
  },
];

const arrondissements = [
  { profil: "👨‍👩‍👧 Famille avec enfants", recommandations: "Rosemont, Villeray, Verdun, Saint-Laurent", raison: "Parcs, écoles, espaces verts, loyers plus accessibles" },
  { profil: "🎓 Étudiant", recommandations: "Côte-des-Neiges, NDG, Plateau, Hochelaga", raison: "Proxi universités (UdeM, McGill, UQAM, Concordia)" },
  { profil: "💼 Professionnel sans voiture", recommandations: "Plateau, Rosemont, Mile-End, Verdun", raison: "Métro, REM, pistes cyclables — tout à pied ou à vélo" },
  { profil: "💰 Budget serré", recommandations: "Hochelaga, Villeray, Saint-Michel, Côte-des-Neiges", raison: "Loyers encore accessibles sous les 1 100 $ pour un 3½" },
  { profil: "🌍 Nouveaux arrivants", recommandations: "Côte-des-Neiges, Saint-Laurent, Villeray", raison: "Communautés établies, ressources d'accueil, services multilingues" },
];

const faqs = [
  {
    q: "Quelle est la meilleure période pour déménager à Montréal ?",
    r: "Évitez le 1er juillet à tout prix — c'est la journée la plus chaotique de l'année à Montréal. La meilleure période est de mi-août à fin septembre : les camions sont disponibles, les tarifs sont normaux et la météo est encore clémente. Janvier-février est le moins cher, mais le froid et la neige compliquent la logistique.",
  },
  {
    q: "Ai-je besoin d'un permis pour déménager à Montréal ?",
    r: "Pas un permis de déménagement en tant que tel, mais si vous voulez bloquer des cases de stationnement sur rue pour votre camion, vous devez obtenir un permis de stationnement temporaire auprès de la Ville de Montréal (~75 $). Faites la demande au moins 5 jours ouvrables à l'avance sur Montreal.ca.",
  },
  {
    q: "Quel quartier est le plus abordable à Montréal en 2026 ?",
    r: "Hochelaga-Maisonneuve reste le quartier central le plus abordable, avec des 3½ entre 800 $ et 1 100 $. Villeray–Saint-Michel et Côte-des-Neiges offrent aussi de bons rapports qualité-prix. Pour moins cher encore, les arrondissements périphériques comme Saint-Laurent ou Montréal-Nord sont accessibles mais moins branchés.",
  },
  {
    q: "Mon propriétaire peut-il refuser que je déménage le 1er juillet ?",
    r: "Non. Si votre bail se termine le 30 juin, vous avez le droit de quitter le logement le 1er juillet. Le propriétaire ne peut pas vous forcer à rester. Assurez-vous simplement d'avoir donné votre préavis dans les délais requis (3 mois pour un bail annuel).",
  },
  {
    q: "Comment vérifier si le loyer demandé est raisonnable à Montréal ?",
    r: "Utilisez le Registre des loyers du Tribunal administratif du logement (TAL) pour vérifier le loyer payé par le locataire précédent dans le même logement. Si le nouveau propriétaire demande une hausse importante, vous pouvez la contester devant le TAL dans les 10 jours suivant la réception de l'avis.",
  },
  {
    q: "Quelles démarches administratives dois-je faire après mon déménagement à Montréal ?",
    r: "Dans les 30 jours : SAAQ (permis de conduire et immatriculation), banque, employeur, Revenu Québec (Mon dossier), Revenu Canada (Mon dossier CRA), RAMQ (carte d'assurance maladie). Pensez aussi à la STM (abonnement), la bibliothèque de Montréal et votre vignette de stationnement si applicable.",
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
            {" › "}
            <Link
              href="/demenagement"
              style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}
            >
              Déménagement
            </Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Montréal</span>
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
            Guide local · Déménagement Montréal 2026
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
            Déménager à Montréal en 2026 : guide complet
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
            selon votre profil — tout ce qu&apos;il faut savoir pour bien déménager à Montréal.
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
              Coûts du déménagement →
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
              Ma checklist →
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
          Publicité
        </div>

        {/* Le 1er juillet — bloc d'alerte */}
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
            <span style={{ fontSize: "1.5rem" }}>📅</span>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "#92400E",
                margin: 0,
              }}
            >
              Le 1er juillet à Montréal — ce qu&apos;il faut savoir
            </h2>
          </div>
          <p style={{ fontSize: "13px", color: "#78350F", lineHeight: 1.65, margin: 0 }}>
            Montréal est l&apos;épicentre du 1er juillet québécois. La majorité des baux se
            terminant le 30 juin, des{" "}
            <strong>dizaines de milliers de ménages déménagent le même jour</strong>{" "}dans toute la
            ville. Camions réservés des mois à l&apos;avance, rues bloquées, tarifs en hausse de 30
            à 50 %, ascenseurs monopolisés — la journée peut vite tourner au cauchemar.
            <br />
            <br />
            <strong>Notre conseil :</strong>{" "}déménagez le 29 ou 30 juin si possible, ou choisissez
            un bail qui se termine à une autre date. Sinon, réservez votre camion{" "}
            <strong>au minimum 3 à 4 mois à l&apos;avance</strong>{" "}et prévoyez une journée longue.
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
          Loyers moyens par quartier à Montréal (2026)
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.65, marginBottom: "1.25rem" }}>
          Estimations basées sur les données du marché locatif montréalais en 2026. Les prix varient
          selon l&apos;état, l&apos;étage et les commodités du logement.
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
                  3½
                </th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>
                  4½
                </th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>
                  5½
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
          Publicité
        </div>

        {/* Conseils spécifiques Montréal */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.4rem",
            fontWeight: 800,
            color: "#1C1C1E",
            marginBottom: "1.25rem",
          }}
        >
          6 choses à savoir avant de déménager à Montréal
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

        {/* Droits locataires Montréal */}
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
            ⚖️ Vos droits comme locataire à Montréal
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
              "Le locataire a le droit au maintien dans les lieux — le propriétaire ne peut vous expulser sans motif légal valide.",
              "Une hausse de loyer doit vous être signifiée au moins 3 mois avant la fin du bail — vous avez 1 mois pour la contester.",
              "Utilisez le Registre des loyers du TAL pour vérifier le loyer de l'ancien locataire avant de signer.",
              "Pour les logements construits avant 2005, la clause G (reconduction) s'applique — le bail est reconduit automatiquement.",
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
          Ressources utiles pour déménager à Montréal
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
                ↗
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
          Questions fréquentes
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
              emoji: "💸",
              titre: "Combien coûte un déménagement à Montréal ?",
              desc: "Camion vs déménageurs, coûts cachés, conseils pour économiser",
            },
            {
              href: "/demenagement/checklist",
              emoji: "✅",
              titre: "Checklist déménagement complète",
              desc: "Ne rien oublier — 8 semaines avant au jour J",
            },
            {
              href: "/assurances/habitation",
              emoji: "🛡️",
              titre: "Assurance habitation au Québec",
              desc: "À souscrire avant d'emménager dans votre nouveau logement",
            },
            {
              href: "/budget/calculateur",
              emoji: "📊",
              titre: "Calculateur budget mensuel",
              desc: "Simulez votre budget avec le nouveau loyer montréalais",
            },
            {
              href: "/demenagement",
              emoji: "📋",
              titre: "Guide complet déménagement Québec",
              desc: "Toutes les étapes, droits des locataires, loyers par ville",
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
              <span style={{ color: "#3B82F6", fontSize: "14px", flexShrink: 0 }}>→</span>
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
          Publicité
        </div>
        <p
          style={{
            color: "#A8A29E",
            fontSize: "11px",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          Les loyers indiqués sont des estimations basées sur les données du marché locatif
          montréalais en 2026. Les prix varient selon le quartier, l&apos;état et les commodités du
          logement.
        </p>
      </div>

      <SiteFooter
        legalText={"Outil informatif non affilié au gouvernement."}
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ background: DARK, padding: "24px 16px" }}
        brandStyle={{ color: GOLD }}
        contactLinkStyle={{ marginTop: "6px" }}
      />
    </main>
  );
}
