import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assurance habitation au QuÃ©bec 2026 â€” Locataire ou propriÃ©taire | ArgentQC.ca",
  description:
    "Guide assurance habitation QuÃ©bec 2026 : diffÃ©rences locataire vs propriÃ©taire, ce qui est couvert, prix moyens par type de logement et comment Ã©valuer vos biens.",
  keywords: [
    "assurance habitation QuÃ©bec",
    "prix assurance habitation QuÃ©bec 2026",
    "assurance locataire QuÃ©bec",
    "assurance propriÃ©taire QuÃ©bec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const comparaisonLocProp = [
  { aspect: "Qui en a besoin ?", locataire: "Toute personne qui loue", proprietaire: "Tout propriÃ©taire d'immeuble rÃ©sidentiel" },
  { aspect: "Ce qui est assurÃ©", locataire: "Vos biens personnels + responsabilitÃ© civile", proprietaire: "Le bÃ¢timent + vos biens + responsabilitÃ© civile" },
  { aspect: "Prix moyen", locataire: "25â€“50 $/mois", proprietaire: "100â€“200 $/mois (maison)" },
  { aspect: "Obligatoire lÃ©galement ?", locataire: "Non â€” mais souvent exigÃ©e par le proprio", proprietaire: "Non â€” mais exigÃ©e par le prÃªteur hypothÃ©caire" },
  { aspect: "Valeur assurÃ©e", locataire: "Valeur de vos effets personnels", proprietaire: "Valeur de reconstruction du bÃ¢timent + contenu" },
  { aspect: "HypothÃ¨que incluse ?", locataire: "Non applicable", proprietaire: "Le prÃªteur hypothÃ©caire est souvent bÃ©nÃ©ficiaire" },
];

const couvertures = [
  { risque: "Incendie et fumÃ©e", couvert: true, note: "Couvert par la grande majoritÃ© des polices standard." },
  { risque: "Vol et vandalisme", couvert: true, note: "Couvert. La franchise s'applique. Certains biens (bijoux, art) ont des plafonds sÃ©parÃ©s." },
  { risque: "DÃ©gÃ¢t des eaux (refoulement)", couvert: true, note: "Couvert dans la plupart des polices, mais vÃ©rifiez â€” certains assureurs l'excluent." },
  { risque: "ResponsabilitÃ© civile", couvert: true, note: "Si un visiteur se blesse chez vous ou si vous causez des dommages chez un voisin." },
  { risque: "Foudre", couvert: true, note: "Couvert, incluant les dommages aux appareils Ã©lectroniques causÃ©s par surtension." },
  { risque: "Inondation par dÃ©bordement de cours d'eau", couvert: false, note: "GÃ©nÃ©ralement EXCLU des polices standard. Une protection contre les inondations peut Ãªtre ajoutÃ©e en option." },
  { risque: "Tremblement de terre", couvert: false, note: "EXCLU par dÃ©faut. Disponible en option dans certaines rÃ©gions Ã  risque." },
  { risque: "Dommages intentionnels", couvert: false, note: "EXCLU. Un dommage que vous causez volontairement n'est jamais couvert." },
  { risque: "Usure normale", couvert: false, note: "EXCLU. L'assurance ne remplace pas ce qui se dÃ©tÃ©riore normalement avec le temps." },
];

const prixLogements = [
  { type: "Studio / 3Â½ (locataire)", biens: "15 000â€“25 000 $", prime: "20â€“35 $/mois", note: "Biens peu nombreux, faible risque." },
  { type: "4Â½ / 5Â½ (locataire)", biens: "25 000â€“50 000 $", prime: "30â€“55 $/mois", note: "Profil le plus courant pour un locataire." },
  { type: "Maison (locataire)", biens: "40 000â€“80 000 $", prime: "45â€“80 $/mois", note: "Plus de biens Ã  assurer." },
  { type: "Condo (propriÃ©taire)", biens: "UnitÃ© + biens", prime: "60â€“110 $/mois", note: "Le syndicat de copropriÃ©tÃ© assure les parties communes." },
  { type: "Maison unifamiliale (proprio)", biens: "BÃ¢timent + biens", prime: "100â€“200 $/mois", note: "Varie selon la valeur de reconstruction et la rÃ©gion." },
  { type: "Plex / duplex (proprio)", biens: "BÃ¢timent + biens", prime: "150â€“350 $/mois", note: "Inclut la responsabilitÃ© envers les locataires." },
];

const evaluationBiens = [
  { categorie: "Ã‰lectroniques", exemple: "Ordinateur portable, tÃ©lÃ©, console, tablette, appareils photo", fourchette: "2 000â€“8 000 $" },
  { categorie: "VÃªtements et chaussures", exemple: "Manteaux, chaussures, vÃªtements de sport, accessoires", fourchette: "3 000â€“10 000 $" },
  { categorie: "Mobilier", exemple: "Sofa, lit, bureau, table, chaises, armoires", fourchette: "5 000â€“20 000 $" },
  { categorie: "Appareils Ã©lectromÃ©nagers", exemple: "Frigo, laveuse, sÃ©cheuse (si vous les possÃ©dez)", fourchette: "2 000â€“6 000 $" },
  { categorie: "Sport et loisirs", exemple: "VÃ©lo, skis, Ã©quipement de gym, instruments de musique", fourchette: "1 000â€“10 000 $" },
  { categorie: "Bijoux et montres", exemple: "Bijoux, montres de valeur (souvent avec plafond sÃ©parÃ©)", fourchette: "500â€“5 000 $+" },
];

const faqs = [
  {
    q: "Est-ce que l'assurance habitation est obligatoire pour un locataire au QuÃ©bec ?",
    r: "LÃ©galement, non â€” un locataire n'est pas tenu par la loi d'avoir une assurance habitation au QuÃ©bec. Cependant, beaucoup de propriÃ©taires l'exigent Ã  la signature du bail. Surtout, en cas de sinistre sans assurance, vous perdez tous vos biens sans aucune compensation. Pour 25 Ã  50 $ par mois, c'est une protection essentielle.",
  },
  {
    q: "Quelle est la diffÃ©rence entre la valeur de remplacement et la valeur actuelle ?",
    r: "La valeur de remplacement couvre le coÃ»t d'achat d'un bien neuf Ã©quivalent. La valeur actuelle tient compte de la dÃ©prÃ©ciation â€” un ordinateur de 3 ans sera remboursÃ© Ã  sa valeur actuelle, soit bien moins que le prix neuf. Toujours choisir la valeur de remplacement si possible, mÃªme si la prime est un peu plus Ã©levÃ©e.",
  },
  {
    q: "Mon propriÃ©taire a une assurance sur l'immeuble. Pourquoi aurais-je besoin de la mienne ?",
    r: "L'assurance du propriÃ©taire couvre le bÃ¢timent (les murs, la structure), pas vos effets personnels. Si un incendie dÃ©truit votre appartement, le propriÃ©taire sera remboursÃ© pour le bÃ¢timent â€” mais vous ne recevrez rien pour vos meubles, vÃªtements, Ã©lectroniques et objets personnels sans votre propre assurance.",
  },
  {
    q: "Quand dois-je souscrire une assurance habitation lors d'un dÃ©mÃ©nagement ?",
    r: "IdÃ©alement, souscrivez votre nouvelle assurance habitation avant votre date de dÃ©mÃ©nagement â€” le jour oÃ¹ vous prenez possession des clÃ©s. Vos biens sont Ã  risque dÃ¨s que vous commencez Ã  les dÃ©placer. La plupart des assureurs peuvent Ã©mettre une police en 24 Ã  48 heures.",
  },
];

export default function AssuranceHabitationPage() {
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
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Habitation</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide Â· Assurance habitation QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Assurance habitation au QuÃ©bec â€” Locataire ou propriÃ©taire
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Ce qui est couvert, les diffÃ©rences locataire/propriÃ©taire, les prix moyens par type de logement
            et comment bien Ã©valuer la valeur de vos biens.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Lien dÃ©mÃ©nagement */}
        <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "14px", padding: "1rem 1.25rem", marginBottom: "1.5rem", display: "flex", gap: "12px", alignItems: "center" }}>
          <span style={{ fontSize: "1.3rem" }}>ðŸ“¦</span>
          <p style={{ fontSize: "13px", color: "#92400E", lineHeight: 1.6, margin: 0 }}>
            <strong>Vous dÃ©mÃ©nagez ?</strong>{" "}C&apos;est le moment idÃ©al pour revoir votre couverture â€” ou en souscrire une nouvelle.{" "}
            <Link href="/demenagement" style={{ color: "#92400E", fontWeight: 700 }}>Voir notre guide dÃ©mÃ©nagement â†’</Link>
          </p>
        </div>

        {/* Locataire vs propriÃ©taire */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Locataire vs propriÃ©taire â€” les diffÃ©rences clÃ©s
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Aspect</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>ðŸ”‘ Locataire</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>ðŸ¡ PropriÃ©taire</th>
              </tr>
            </thead>
            <tbody>
              {comparaisonLocProp.map((row, i) => (
                <tr key={row.aspect} style={{ borderBottom: i < comparaisonLocProp.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 14px", fontWeight: 600, color: "#44403C", fontSize: "12px" }}>{row.aspect}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#1C1C1E", fontSize: "12px" }}>{row.locataire}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#1C1C1E", fontSize: "12px" }}>{row.proprietaire}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Couvertures */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Ce qui est couvert â€” et ce qui ne l&apos;est pas
        </h2>
        <div className="flex flex-col gap-2 mb-10">
          {couvertures.map((c) => (
            <div key={c.risque} style={{ background: "white", border: `1px solid ${c.couvert ? "#A7F3D0" : "#FECACA"}`, borderRadius: "12px", padding: "10px 14px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>{c.couvert ? "âœ…" : "âŒ"}</span>
              <div>
                <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{c.risque}</span>
                <p style={{ fontSize: "12px", color: "#78716C", margin: "3px 0 0 0", lineHeight: 1.5 }}>{c.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ad placeholder */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Prix par logement */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Prix moyens au QuÃ©bec par type de logement
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {prixLogements.map((p) => (
            <div key={p.type} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "4px" }}>
                <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{p.type}</span>
                <span style={{ background: "#DBEAFE", color: "#1D4ED8", fontWeight: 700, fontSize: "12px", padding: "2px 8px", borderRadius: "100px", flexShrink: 0 }}>{p.prime}</span>
              </div>
              <div style={{ fontSize: "11px", color: "#A8A29E" }}>Biens assurÃ©s estimÃ©s : {p.biens}</div>
              <p style={{ fontSize: "12px", color: "#78716C", margin: "4px 0 0 0", lineHeight: 1.5 }}>{p.note}</p>
            </div>
          ))}
        </div>

        {/* Ã‰valuation des biens */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Comment Ã©valuer la valeur de vos biens
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.65, marginBottom: "1.25rem" }}>
          La plupart des gens sous-estiment leurs biens. Voici une mÃ©thode pratique : listez chaque catÃ©gorie
          et estimez le coÃ»t de remplacement Ã  neuf. La somme vous surprendra souvent.
        </p>
        <div className="flex flex-col gap-3 mb-6">
          {evaluationBiens.map((e) => (
            <div key={e.categorie} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginBottom: "4px" }}>
                <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{e.categorie}</span>
                <span style={{ background: "#FEF3C7", color: "#92400E", fontWeight: 700, fontSize: "12px", padding: "2px 8px", borderRadius: "100px", flexShrink: 0 }}>{e.fourchette}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#A8A29E", margin: 0 }}>{e.exemple}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "12px", padding: "12px 16px", marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "13px", color: "#065F46", lineHeight: 1.65, margin: 0 }}>
            ðŸ’¡ <strong>Conseil :</strong>{" "}prenez des photos ou une vidÃ©o de chaque piÃ¨ce et conservez-les dans le nuage (Google Photos, iCloud).
            En cas de sinistre, cette preuve vous aidera Ã  documenter vos pertes auprÃ¨s de l&apos;assureur.
          </p>
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
            { href: "/demenagement", emoji: "ðŸ“¦", titre: "Guide dÃ©mÃ©nagement QuÃ©bec", desc: "Souscrire une assurance habitation est une Ã©tape clÃ© avant le dÃ©mÃ©nagement" },
            { href: "/assurances/auto", emoji: "ðŸš—", titre: "Assurance auto QuÃ©bec", desc: "Regroupez auto + habitation pour un rabais de 5 Ã  15%" },
            { href: "/assurances/vie", emoji: "â¤ï¸", titre: "ProtÃ©gez aussi votre famille â€” Assurance vie", desc: "Temporaire ou permanente : estimez votre couverture idÃ©ale" },
            { href: "/budget/calculateur", emoji: "ðŸ“Š", titre: "Calculateur budget mensuel", desc: "IntÃ©grez votre prime habitation Ã  votre budget" },
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
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif. Les prix sont des estimations â€” obtenez des soumissions pour votre situation prÃ©cise.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
