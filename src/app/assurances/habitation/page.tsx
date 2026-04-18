import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assurance habitation au Québec 2026 — Locataire ou propriétaire | ArgentQC.ca",
  description:
    "Guide assurance habitation Québec 2026 : différences locataire vs propriétaire, ce qui est couvert, prix moyens par type de logement et comment évaluer vos biens.",
  keywords: [
    "assurance habitation Québec",
    "prix assurance habitation Québec 2026",
    "assurance locataire Québec",
    "assurance propriétaire Québec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const comparaisonLocProp = [
  { aspect: "Qui en a besoin ?", locataire: "Toute personne qui loue", proprietaire: "Tout propriétaire d'immeuble résidentiel" },
  { aspect: "Ce qui est assuré", locataire: "Vos biens personnels + responsabilité civile", proprietaire: "Le bâtiment + vos biens + responsabilité civile" },
  { aspect: "Prix moyen", locataire: "25–50 $/mois", proprietaire: "100–200 $/mois (maison)" },
  { aspect: "Obligatoire légalement ?", locataire: "Non — mais souvent exigée par le proprio", proprietaire: "Non — mais exigée par le prêteur hypothécaire" },
  { aspect: "Valeur assurée", locataire: "Valeur de vos effets personnels", proprietaire: "Valeur de reconstruction du bâtiment + contenu" },
  { aspect: "Hypothèque incluse ?", locataire: "Non applicable", proprietaire: "Le prêteur hypothécaire est souvent bénéficiaire" },
];

const couvertures = [
  { risque: "Incendie et fumée", couvert: true, note: "Couvert par la grande majorité des polices standard." },
  { risque: "Vol et vandalisme", couvert: true, note: "Couvert. La franchise s'applique. Certains biens (bijoux, art) ont des plafonds séparés." },
  { risque: "Dégât des eaux (refoulement)", couvert: true, note: "Couvert dans la plupart des polices, mais vérifiez — certains assureurs l'excluent." },
  { risque: "Responsabilité civile", couvert: true, note: "Si un visiteur se blesse chez vous ou si vous causez des dommages chez un voisin." },
  { risque: "Foudre", couvert: true, note: "Couvert, incluant les dommages aux appareils électroniques causés par surtension." },
  { risque: "Inondation par débordement de cours d'eau", couvert: false, note: "Généralement EXCLU des polices standard. Une protection contre les inondations peut être ajoutée en option." },
  { risque: "Tremblement de terre", couvert: false, note: "EXCLU par défaut. Disponible en option dans certaines régions à risque." },
  { risque: "Dommages intentionnels", couvert: false, note: "EXCLU. Un dommage que vous causez volontairement n'est jamais couvert." },
  { risque: "Usure normale", couvert: false, note: "EXCLU. L'assurance ne remplace pas ce qui se détériore normalement avec le temps." },
];

const prixLogements = [
  { type: "Studio / 3½ (locataire)", biens: "15 000–25 000 $", prime: "20–35 $/mois", note: "Biens peu nombreux, faible risque." },
  { type: "4½ / 5½ (locataire)", biens: "25 000–50 000 $", prime: "30–55 $/mois", note: "Profil le plus courant pour un locataire." },
  { type: "Maison (locataire)", biens: "40 000–80 000 $", prime: "45–80 $/mois", note: "Plus de biens à assurer." },
  { type: "Condo (propriétaire)", biens: "Unité + biens", prime: "60–110 $/mois", note: "Le syndicat de copropriété assure les parties communes." },
  { type: "Maison unifamiliale (proprio)", biens: "Bâtiment + biens", prime: "100–200 $/mois", note: "Varie selon la valeur de reconstruction et la région." },
  { type: "Plex / duplex (proprio)", biens: "Bâtiment + biens", prime: "150–350 $/mois", note: "Inclut la responsabilité envers les locataires." },
];

const evaluationBiens = [
  { categorie: "Électroniques", exemple: "Ordinateur portable, télé, console, tablette, appareils photo", fourchette: "2 000–8 000 $" },
  { categorie: "Vêtements et chaussures", exemple: "Manteaux, chaussures, vêtements de sport, accessoires", fourchette: "3 000–10 000 $" },
  { categorie: "Mobilier", exemple: "Sofa, lit, bureau, table, chaises, armoires", fourchette: "5 000–20 000 $" },
  { categorie: "Appareils électroménagers", exemple: "Frigo, laveuse, sécheuse (si vous les possédez)", fourchette: "2 000–6 000 $" },
  { categorie: "Sport et loisirs", exemple: "Vélo, skis, équipement de gym, instruments de musique", fourchette: "1 000–10 000 $" },
  { categorie: "Bijoux et montres", exemple: "Bijoux, montres de valeur (souvent avec plafond séparé)", fourchette: "500–5 000 $+" },
];

const faqs = [
  {
    q: "Est-ce que l'assurance habitation est obligatoire pour un locataire au Québec ?",
    r: "Légalement, non — un locataire n'est pas tenu par la loi d'avoir une assurance habitation au Québec. Cependant, beaucoup de propriétaires l'exigent à la signature du bail. Surtout, en cas de sinistre sans assurance, vous perdez tous vos biens sans aucune compensation. Pour 25 à 50 $ par mois, c'est une protection essentielle.",
  },
  {
    q: "Quelle est la différence entre la valeur de remplacement et la valeur actuelle ?",
    r: "La valeur de remplacement couvre le coût d'achat d'un bien neuf équivalent. La valeur actuelle tient compte de la dépréciation — un ordinateur de 3 ans sera remboursé à sa valeur actuelle, soit bien moins que le prix neuf. Toujours choisir la valeur de remplacement si possible, même si la prime est un peu plus élevée.",
  },
  {
    q: "Mon propriétaire a une assurance sur l'immeuble. Pourquoi aurais-je besoin de la mienne ?",
    r: "L'assurance du propriétaire couvre le bâtiment (les murs, la structure), pas vos effets personnels. Si un incendie détruit votre appartement, le propriétaire sera remboursé pour le bâtiment — mais vous ne recevrez rien pour vos meubles, vêtements, électroniques et objets personnels sans votre propre assurance.",
  },
  {
    q: "Quand dois-je souscrire une assurance habitation lors d'un déménagement ?",
    r: "Idéalement, souscrivez votre nouvelle assurance habitation avant votre date de déménagement — le jour où vous prenez possession des clés. Vos biens sont à risque dès que vous commencez à les déplacer. La plupart des assureurs peuvent émettre une police en 24 à 48 heures.",
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
            {" › "}
            <Link href="/assurances" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Assurances</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Habitation</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide · Assurance habitation Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Assurance habitation au Québec — Locataire ou propriétaire
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Ce qui est couvert, les différences locataire/propriétaire, les prix moyens par type de logement
            et comment bien évaluer la valeur de vos biens.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Lien déménagement */}
        <div style={{ background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: "14px", padding: "1rem 1.25rem", marginBottom: "1.5rem", display: "flex", gap: "12px", alignItems: "center" }}>
          <span style={{ fontSize: "1.3rem" }}>📦</span>
          <p style={{ fontSize: "13px", color: "#92400E", lineHeight: 1.6, margin: 0 }}>
            <strong>Vous déménagez ?</strong>{" "}C&apos;est le moment idéal pour revoir votre couverture — ou en souscrire une nouvelle.{" "}
            <Link href="/demenagement" style={{ color: "#92400E", fontWeight: 700 }}>Voir notre guide déménagement →</Link>
          </p>
        </div>

        {/* Locataire vs propriétaire */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Locataire vs propriétaire — les différences clés
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700 }}>Aspect</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>🔑 Locataire</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700 }}>🏡 Propriétaire</th>
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
          Ce qui est couvert — et ce qui ne l&apos;est pas
        </h2>
        <div className="flex flex-col gap-2 mb-10">
          {couvertures.map((c) => (
            <div key={c.risque} style={{ background: "white", border: `1px solid ${c.couvert ? "#A7F3D0" : "#FECACA"}`, borderRadius: "12px", padding: "10px 14px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>{c.couvert ? "✅" : "❌"}</span>
              <div>
                <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{c.risque}</span>
                <p style={{ fontSize: "12px", color: "#78716C", margin: "3px 0 0 0", lineHeight: 1.5 }}>{c.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ad placeholder */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          Publicité
        </div>

        {/* Prix par logement */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Prix moyens au Québec par type de logement
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {prixLogements.map((p) => (
            <div key={p.type} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "4px" }}>
                <span style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{p.type}</span>
                <span style={{ background: "#DBEAFE", color: "#1D4ED8", fontWeight: 700, fontSize: "12px", padding: "2px 8px", borderRadius: "100px", flexShrink: 0 }}>{p.prime}</span>
              </div>
              <div style={{ fontSize: "11px", color: "#A8A29E" }}>Biens assurés estimés : {p.biens}</div>
              <p style={{ fontSize: "12px", color: "#78716C", margin: "4px 0 0 0", lineHeight: 1.5 }}>{p.note}</p>
            </div>
          ))}
        </div>

        {/* Évaluation des biens */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "0.75rem" }}>
          Comment évaluer la valeur de vos biens
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.65, marginBottom: "1.25rem" }}>
          La plupart des gens sous-estiment leurs biens. Voici une méthode pratique : listez chaque catégorie
          et estimez le coût de remplacement à neuf. La somme vous surprendra souvent.
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
            💡 <strong>Conseil :</strong>{" "}prenez des photos ou une vidéo de chaque pièce et conservez-les dans le nuage (Google Photos, iCloud).
            En cas de sinistre, cette preuve vous aidera à documenter vos pertes auprès de l&apos;assureur.
          </p>
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
            { href: "/demenagement", emoji: "📦", titre: "Guide déménagement Québec", desc: "Souscrire une assurance habitation est une étape clé avant le déménagement" },
            { href: "/assurances/auto", emoji: "🚗", titre: "Assurance auto Québec", desc: "Regroupez auto + habitation pour un rabais de 5 à 15%" },
            { href: "/assurances/vie", emoji: "❤️", titre: "Protégez aussi votre famille — Assurance vie", desc: "Temporaire ou permanente : estimez votre couverture idéale" },
            { href: "/budget/calculateur", emoji: "📊", titre: "Calculateur budget mensuel", desc: "Intégrez votre prime habitation à votre budget" },
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
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif. Les prix sont des estimations — obtenez des soumissions pour votre situation précise.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
