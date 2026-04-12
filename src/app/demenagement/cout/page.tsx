import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Combien coÃ»te un dÃ©mÃ©nagement au QuÃ©bec en 2026 ? | ArgentQC.ca",
  description:
    "CoÃ»t moyen d'un dÃ©mÃ©nagement au QuÃ©bec en 2026 : location de camion vs dÃ©mÃ©nageurs professionnels, prix selon la taille du logement (3Â½, 4Â½, 5Â½), coÃ»ts cachÃ©s et conseils pour Ã©conomiser.",
  keywords: [
    "coÃ»t dÃ©mÃ©nagement QuÃ©bec",
    "prix dÃ©mÃ©nagement QuÃ©bec 2026",
    "combien coÃ»te dÃ©mÃ©nager QuÃ©bec",
    "tarif dÃ©mÃ©nageurs QuÃ©bec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const coutsTaille = [
  { taille: "Studio / 3Â½", pieces: "1â€“2 piÃ¨ces", camion: "150â€“350 $", professionnel: "400â€“800 $", duree: "2â€“4 h" },
  { taille: "4Â½", pieces: "3â€“4 piÃ¨ces", camion: "250â€“500 $", professionnel: "700â€“1 400 $", duree: "4â€“6 h" },
  { taille: "5Â½", pieces: "4â€“5 piÃ¨ces", camion: "400â€“700 $", professionnel: "1 100â€“2 000 $", duree: "6â€“10 h" },
  { taille: "Maison / 6Â½+", pieces: "5+ piÃ¨ces", camion: "600â€“1 000 $", professionnel: "1 800â€“3 500 $", duree: "8â€“14 h" },
];

const cachesCouts = [
  { item: "MatÃ©riaux d'emballage", fourchette: "50â€“200 $", note: "BoÃ®tes, papier bulle, ruban, marqueurs. Ã‰conomisez en rÃ©cupÃ©rant des boÃ®tes gratuites (SAQ, Ã©piceries)." },
  { item: "Frais de stationnement / permis", fourchette: "0â€“200 $", note: "Certaines villes exigent un permis pour rÃ©server des places sur rue (MontrÃ©al : ~75 $)." },
  { item: "Nettoyage de l'ancien logement", fourchette: "100â€“400 $", note: "Souvent requis pour rÃ©cupÃ©rer le dÃ©pÃ´t de sÃ©curitÃ© ou Ã©viter des frais." },
  { item: "Ã‰lectromÃ©nagers neufs", fourchette: "500â€“3 000 $", note: "Si le nouveau logement n'en inclut pas. PrÃ©voyez frais de livraison et d'installation." },
  { item: "Peinture / petites rÃ©novations", fourchette: "200â€“800 $", note: "Pour personnaliser le nouveau logement ou rÃ©parer des dommages Ã  l'ancien." },
  { item: "Frais de garde-meubles", fourchette: "100â€“400 $/mois", note: "Si vous devez stocker vos affaires entre deux logements." },
  { item: "Assurance habitation (premier mois)", fourchette: "50â€“150 $", note: "Ã€ souscrire avant d'entrer dans le nouveau logement. Parfois pro-rata." },
  { item: "Restauration le jour J", fourchette: "50â€“150 $", note: "Pizzas, boissons pour vous et les aides. Souvent oubliÃ© dans le budget !" },
];

const conseils = [
  { titre: "DÃ©mÃ©nagez hors 1er juillet", detail: "Les tarifs des camions et dÃ©mÃ©nageurs sont 30 Ã  50% plus Ã©levÃ©s autour du 1er juillet. Fin aoÃ»t ou septembre revient bien moins cher.", emoji: "ðŸ“…" },
  { titre: "Obtenez 3 soumissions", detail: "Les prix varient Ã©normÃ©ment. Comparez au moins 3 compagnies et vÃ©rifiez leur accrÃ©ditation auprÃ¨s de l'Association canadienne du dÃ©mÃ©nagement.", emoji: "ðŸ“" },
  { titre: "RÃ©cupÃ©rez des boÃ®tes gratuites", detail: "SAQ, LCBO, Ã©piceries, quincailleries â€” elles ont souvent des boÃ®tes solides Ã  donner. Facebook Marketplace aussi pour les boÃ®tes usagÃ©es.", emoji: "ðŸ“¦" },
  { titre: "DÃ©sencombrez avant", detail: "Moins vous avez d'affaires Ã  dÃ©mÃ©nager, moins Ã§a coÃ»te. Vendez sur Marketplace, donnez Ã  Kijiji Dons ou aux ressourceries.", emoji: "ðŸ—‘ï¸" },
  { titre: "Louez un camion pour peu d'affaires", detail: "Pour un 3Â½ bien organisÃ©, louer soi-mÃªme un petit camion et demander de l'aide Ã  des amis peut revenir Ã  200-400 $ vs 600-900 $ pour des pros.", emoji: "ðŸš›" },
  { titre: "Gardez vos reÃ§us", detail: "Si vous dÃ©mÃ©nagez pour le travail (40 km+ plus prÃ¨s de l'emploi), les frais de dÃ©mÃ©nagement sont dÃ©ductibles d'impÃ´t au fÃ©dÃ©ral.", emoji: "ðŸ§¾" },
];

const faqs = [
  {
    q: "Quel est le prix moyen d'un dÃ©mÃ©nagement au QuÃ©bec ?",
    r: "Le coÃ»t moyen d'un dÃ©mÃ©nagement professionnel pour un 4Â½ Ã  MontrÃ©al se situe entre 700 $ et 1 400 $ en 2026 (hors 1er juillet). Pour un 5Â½, comptez 1 100 Ã  2 000 $. La location d'un camion pour un dÃ©mÃ©nagement en autonomie coÃ»te 250 Ã  500 $ plus les frais d'essence et de carburant.",
  },
  {
    q: "Vaut-il mieux louer un camion ou engager des dÃ©mÃ©nageurs professionnels ?",
    r: "Ã‡a dÃ©pend de la quantitÃ© d'affaires, de votre capacitÃ© physique et du temps disponible. Pour un 3Â½ ou un petit 4Â½ bien organisÃ© avec des amis disponibles, la location est avantageuse. Pour un 5Â½ ou une maison, les dÃ©mÃ©nageurs professionnels valent leur prix en temps et en sÃ©curitÃ© pour les meubles fragiles.",
  },
  {
    q: "Les dÃ©mÃ©nageurs peuvent-ils augmenter leur tarif le jour du dÃ©mÃ©nagement ?",
    r: "Une compagnie sÃ©rieuse vous remet une soumission Ã©crite et s'y tient. MÃ©fiez-vous des compagnies qui donnent des estimations verbales trÃ¨s basses â€” certaines pratiques abusives existent. VÃ©rifiez que la compagnie est membre de l'ACM (Association canadienne du dÃ©mÃ©nagement) et lisez les avis Google.",
  },
  {
    q: "Puis-je dÃ©duire mes frais de dÃ©mÃ©nagement ?",
    r: "Oui, si vous dÃ©mÃ©nagez d'au moins 40 km plus prÃ¨s d'un nouvel emploi ou d'un Ã©tablissement d'enseignement Ã  temps plein. Vous pouvez dÃ©duire les frais de dÃ©mÃ©nagement dans votre dÃ©claration fÃ©dÃ©rale (formulaire T1-M). Gardez tous vos reÃ§us de dÃ©mÃ©nageurs, camion, carburant et matÃ©riaux.",
  },
];

export default function CoutDemenagementPage() {
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
            <Link href="/demenagement" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>DÃ©mÃ©nagement</Link>
            {" â€º "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>CoÃ»ts</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide Â· CoÃ»t dÃ©mÃ©nagement QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Combien coÃ»te un dÃ©mÃ©nagement au QuÃ©bec en 2026 ?
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Tableaux comparatifs selon la taille du logement, camion vs dÃ©mÃ©nageurs professionnels,
            coÃ»ts cachÃ©s Ã  prÃ©voir et conseils pour Ã©conomiser.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Tableau principal */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          CoÃ»ts moyens selon la taille du logement
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.65, marginBottom: "1.25rem" }}>
          Les prix ci-dessous sont des estimations pour un dÃ©mÃ©nagement local Ã  MontrÃ©al (moins de 50 km),{" "}
          <strong>hors pÃ©riode du 1er juillet</strong>{" "}(+30 Ã  50 % autour du 1er juillet).
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, fontSize: "12px" }}>Logement</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>ðŸš› Camion (DIY)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>ðŸ‘· DÃ©mÃ©nageurs</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>â± DurÃ©e</th>
              </tr>
            </thead>
            <tbody>
              {coutsTaille.map((c, i) => (
                <tr key={c.taille} style={{ borderBottom: i < coutsTaille.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "12px 14px" }}>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{c.taille}</div>
                    <div style={{ fontSize: "11px", color: "#A8A29E" }}>{c.pieces}</div>
                  </td>
                  <td style={{ padding: "12px 14px", textAlign: "center", fontWeight: 600, color: GREEN }}>{c.camion}</td>
                  <td style={{ padding: "12px 14px", textAlign: "center", fontWeight: 600, color: "#3B82F6" }}>{c.professionnel}</td>
                  <td style={{ padding: "12px 14px", textAlign: "center", color: "#78716C", fontSize: "12px" }}>{c.duree}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ad placeholder mid */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Camion vs pros */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Location de camion vs dÃ©mÃ©nageurs professionnels
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={{ background: "white", border: `2px solid ${GREEN}`, borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.5rem" }}>ðŸš›</span>
              <h3 style={{ fontWeight: 800, fontSize: "16px", color: "#1C1C1E", margin: 0 }}>Location de camion (DIY)</h3>
            </div>
            <div style={{ marginBottom: "0.75rem" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: GREEN, marginBottom: "4px" }}>âœ… Avantages</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#44403C", lineHeight: 1.7 }}>
                <li>CoÃ»t total moins Ã©levÃ©</li>
                <li>Flexible sur les horaires</li>
                <li>Bon pour peu d&apos;affaires</li>
              </ul>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#EF4444", marginBottom: "4px" }}>âŒ InconvÃ©nients</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#44403C", lineHeight: 1.7 }}>
                <li>Besoin d&apos;aides (amis)</li>
                <li>Risque de blessures</li>
                <li>Pas d&apos;assurance meubles</li>
                <li>Conduire un grand camion</li>
              </ul>
            </div>
          </div>
          <div style={{ background: "white", border: "2px solid #3B82F6", borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.5rem" }}>ðŸ‘·</span>
              <h3 style={{ fontWeight: 800, fontSize: "16px", color: "#1C1C1E", margin: 0 }}>DÃ©mÃ©nageurs professionnels</h3>
            </div>
            <div style={{ marginBottom: "0.75rem" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: GREEN, marginBottom: "4px" }}>âœ… Avantages</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#44403C", lineHeight: 1.7 }}>
                <li>Rapide et efficace</li>
                <li>Assurance sur les meubles</li>
                <li>Ã‰quipement professionnel</li>
                <li>IdÃ©al pour gros meubles</li>
              </ul>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#EF4444", marginBottom: "4px" }}>âŒ InconvÃ©nients</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#44403C", lineHeight: 1.7 }}>
                <li>CoÃ»t plus Ã©levÃ©</li>
                <li>DisponibilitÃ© limitÃ©e en juillet</li>
                <li>Compagnies peu fiables existent</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CoÃ»ts cachÃ©s */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          CoÃ»ts cachÃ©s Ã  prÃ©voir
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {cachesCouts.map((c) => (
            <div key={c.item} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "#1C1C1E" }}>{c.item}</div>
                <span style={{ background: "#FEF3C7", color: "#92400E", fontSize: "12px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", flexShrink: 0 }}>{c.fourchette}</span>
              </div>
              <p style={{ fontSize: "12px", color: "#78716C", marginTop: "4px", lineHeight: 1.6 }}>{c.note}</p>
            </div>
          ))}
        </div>

        {/* Conseils */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          6 faÃ§ons d&apos;Ã©conomiser sur votre dÃ©mÃ©nagement
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {conseils.map((c) => (
            <div key={c.titre} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{c.emoji}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E", marginBottom: "4px" }}>{c.titre}</div>
                <p style={{ fontSize: "12px", color: "#78716C", lineHeight: 1.6, margin: 0 }}>{c.detail}</p>
              </div>
            </div>
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
        <div className="flex flex-col gap-3 mb-8">
          <Link href="/assurances/habitation" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.5rem" }}>ðŸ›¡ï¸</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Assurance habitation â€” Ã  prÃ©voir avant le dÃ©mÃ©nagement</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Locataire ou propriÃ©taire, prix moyens au QuÃ©bec</div>
            </div>
            <span style={{ color: "#3B82F6" }}>â†’</span>
          </Link>
          <Link href="/budget/calculateur" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.5rem" }}>ðŸ“Š</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Calculer votre nouveau budget mensuel</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>IntÃ©grez votre nouveau loyer + coÃ»ts de dÃ©mÃ©nagement</div>
            </div>
            <span style={{ color: "#3B82F6" }}>â†’</span>
          </Link>
          <Link href="/demenagement/checklist" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.5rem" }}>âœ…</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Checklist dÃ©mÃ©nagement complÃ¨te</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Ne rien oublier â€” organismes Ã  aviser, Ã©tapes clÃ©s</div>
            </div>
            <span style={{ color: "#3B82F6" }}>â†’</span>
          </Link>
        </div>

        {/* Ad bas */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px" }}>
          PublicitÃ©
        </div>
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
