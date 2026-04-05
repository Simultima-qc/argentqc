import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Combien coûte un déménagement au Québec en 2026 ? | ArgentQC.ca",
  description:
    "Coût moyen d'un déménagement au Québec en 2026 : location de camion vs déménageurs professionnels, prix selon la taille du logement (3½, 4½, 5½), coûts cachés et conseils pour économiser.",
  keywords: [
    "coût déménagement Québec",
    "prix déménagement Québec 2026",
    "combien coûte déménager Québec",
    "tarif déménageurs Québec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const coutsTaille = [
  { taille: "Studio / 3½", pieces: "1–2 pièces", camion: "150–350 $", professionnel: "400–800 $", duree: "2–4 h" },
  { taille: "4½", pieces: "3–4 pièces", camion: "250–500 $", professionnel: "700–1 400 $", duree: "4–6 h" },
  { taille: "5½", pieces: "4–5 pièces", camion: "400–700 $", professionnel: "1 100–2 000 $", duree: "6–10 h" },
  { taille: "Maison / 6½+", pieces: "5+ pièces", camion: "600–1 000 $", professionnel: "1 800–3 500 $", duree: "8–14 h" },
];

const cachesCouts = [
  { item: "Matériaux d'emballage", fourchette: "50–200 $", note: "Boîtes, papier bulle, ruban, marqueurs. Économisez en récupérant des boîtes gratuites (SAQ, épiceries)." },
  { item: "Frais de stationnement / permis", fourchette: "0–200 $", note: "Certaines villes exigent un permis pour réserver des places sur rue (Montréal : ~75 $)." },
  { item: "Nettoyage de l'ancien logement", fourchette: "100–400 $", note: "Souvent requis pour récupérer le dépôt de sécurité ou éviter des frais." },
  { item: "Électroménagers neufs", fourchette: "500–3 000 $", note: "Si le nouveau logement n'en inclut pas. Prévoyez frais de livraison et d'installation." },
  { item: "Peinture / petites rénovations", fourchette: "200–800 $", note: "Pour personnaliser le nouveau logement ou réparer des dommages à l'ancien." },
  { item: "Frais de garde-meubles", fourchette: "100–400 $/mois", note: "Si vous devez stocker vos affaires entre deux logements." },
  { item: "Assurance habitation (premier mois)", fourchette: "50–150 $", note: "À souscrire avant d'entrer dans le nouveau logement. Parfois pro-rata." },
  { item: "Restauration le jour J", fourchette: "50–150 $", note: "Pizzas, boissons pour vous et les aides. Souvent oublié dans le budget !" },
];

const conseils = [
  { titre: "Déménagez hors 1er juillet", detail: "Les tarifs des camions et déménageurs sont 30 à 50% plus élevés autour du 1er juillet. Fin août ou septembre revient bien moins cher.", emoji: "📅" },
  { titre: "Obtenez 3 soumissions", detail: "Les prix varient énormément. Comparez au moins 3 compagnies et vérifiez leur accréditation auprès de l'Association canadienne du déménagement.", emoji: "📝" },
  { titre: "Récupérez des boîtes gratuites", detail: "SAQ, LCBO, épiceries, quincailleries — elles ont souvent des boîtes solides à donner. Facebook Marketplace aussi pour les boîtes usagées.", emoji: "📦" },
  { titre: "Désencombrez avant", detail: "Moins vous avez d'affaires à déménager, moins ça coûte. Vendez sur Marketplace, donnez à Kijiji Dons ou aux ressourceries.", emoji: "🗑️" },
  { titre: "Louez un camion pour peu d'affaires", detail: "Pour un 3½ bien organisé, louer soi-même un petit camion et demander de l'aide à des amis peut revenir à 200-400 $ vs 600-900 $ pour des pros.", emoji: "🚛" },
  { titre: "Gardez vos reçus", detail: "Si vous déménagez pour le travail (40 km+ plus près de l'emploi), les frais de déménagement sont déductibles d'impôt au fédéral.", emoji: "🧾" },
];

const faqs = [
  {
    q: "Quel est le prix moyen d'un déménagement au Québec ?",
    r: "Le coût moyen d'un déménagement professionnel pour un 4½ à Montréal se situe entre 700 $ et 1 400 $ en 2026 (hors 1er juillet). Pour un 5½, comptez 1 100 à 2 000 $. La location d'un camion pour un déménagement en autonomie coûte 250 à 500 $ plus les frais d'essence et de carburant.",
  },
  {
    q: "Vaut-il mieux louer un camion ou engager des déménageurs professionnels ?",
    r: "Ça dépend de la quantité d'affaires, de votre capacité physique et du temps disponible. Pour un 3½ ou un petit 4½ bien organisé avec des amis disponibles, la location est avantageuse. Pour un 5½ ou une maison, les déménageurs professionnels valent leur prix en temps et en sécurité pour les meubles fragiles.",
  },
  {
    q: "Les déménageurs peuvent-ils augmenter leur tarif le jour du déménagement ?",
    r: "Une compagnie sérieuse vous remet une soumission écrite et s'y tient. Méfiez-vous des compagnies qui donnent des estimations verbales très basses — certaines pratiques abusives existent. Vérifiez que la compagnie est membre de l'ACM (Association canadienne du déménagement) et lisez les avis Google.",
  },
  {
    q: "Puis-je déduire mes frais de déménagement ?",
    r: "Oui, si vous déménagez d'au moins 40 km plus près d'un nouvel emploi ou d'un établissement d'enseignement à temps plein. Vous pouvez déduire les frais de déménagement dans votre déclaration fédérale (formulaire T1-M). Gardez tous vos reçus de déménageurs, camion, carburant et matériaux.",
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
            {" › "}
            <Link href="/demenagement" style={{ color: "rgba(240,235,224,0.4)", textDecoration: "none" }}>Déménagement</Link>
            {" › "}
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Coûts</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide · Coût déménagement Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Combien coûte un déménagement au Québec en 2026 ?
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7 }}>
            Tableaux comparatifs selon la taille du logement, camion vs déménageurs professionnels,
            coûts cachés à prévoir et conseils pour économiser.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Tableau principal */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Coûts moyens selon la taille du logement
        </h2>
        <p style={{ fontSize: "13px", color: "#78716C", lineHeight: 1.65, marginBottom: "1.25rem" }}>
          Les prix ci-dessous sont des estimations pour un déménagement local à Montréal (moins de 50 km),{" "}
          <strong>hors période du 1er juillet</strong>{" "}(+30 à 50 % autour du 1er juillet).
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, fontSize: "12px" }}>Logement</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>🚛 Camion (DIY)</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>👷 Déménageurs</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>⏱ Durée</th>
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
          Publicité
        </div>

        {/* Camion vs pros */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Location de camion vs déménageurs professionnels
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={{ background: "white", border: `2px solid ${GREEN}`, borderRadius: "16px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <span style={{ fontSize: "1.5rem" }}>🚛</span>
              <h3 style={{ fontWeight: 800, fontSize: "16px", color: "#1C1C1E", margin: 0 }}>Location de camion (DIY)</h3>
            </div>
            <div style={{ marginBottom: "0.75rem" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: GREEN, marginBottom: "4px" }}>✅ Avantages</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#44403C", lineHeight: 1.7 }}>
                <li>Coût total moins élevé</li>
                <li>Flexible sur les horaires</li>
                <li>Bon pour peu d&apos;affaires</li>
              </ul>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#EF4444", marginBottom: "4px" }}>❌ Inconvénients</p>
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
              <span style={{ fontSize: "1.5rem" }}>👷</span>
              <h3 style={{ fontWeight: 800, fontSize: "16px", color: "#1C1C1E", margin: 0 }}>Déménageurs professionnels</h3>
            </div>
            <div style={{ marginBottom: "0.75rem" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: GREEN, marginBottom: "4px" }}>✅ Avantages</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#44403C", lineHeight: 1.7 }}>
                <li>Rapide et efficace</li>
                <li>Assurance sur les meubles</li>
                <li>Équipement professionnel</li>
                <li>Idéal pour gros meubles</li>
              </ul>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#EF4444", marginBottom: "4px" }}>❌ Inconvénients</p>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "12px", color: "#44403C", lineHeight: 1.7 }}>
                <li>Coût plus élevé</li>
                <li>Disponibilité limitée en juillet</li>
                <li>Compagnies peu fiables existent</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coûts cachés */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Coûts cachés à prévoir
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
          6 façons d&apos;économiser sur votre déménagement
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
        <div className="flex flex-col gap-3 mb-8">
          <Link href="/assurances/habitation" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.5rem" }}>🛡️</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Assurance habitation — à prévoir avant le déménagement</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Locataire ou propriétaire, prix moyens au Québec</div>
            </div>
            <span style={{ color: "#3B82F6" }}>→</span>
          </Link>
          <Link href="/budget/calculateur" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.5rem" }}>📊</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Calculer votre nouveau budget mensuel</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Intégrez votre nouveau loyer + coûts de déménagement</div>
            </div>
            <span style={{ color: "#3B82F6" }}>→</span>
          </Link>
          <Link href="/demenagement/checklist" style={{ display: "flex", alignItems: "center", gap: "12px", background: "white", border: "1px solid #EDE9E0", borderRadius: "14px", padding: "14px 16px", textDecoration: "none" }}>
            <span style={{ fontSize: "1.5rem" }}>✅</span>
            <div className="flex-1">
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>Checklist déménagement complète</div>
              <div style={{ fontSize: "12px", color: "#A8A29E" }}>Ne rien oublier — organismes à aviser, étapes clés</div>
            </div>
            <span style={{ color: "#3B82F6" }}>→</span>
          </Link>
        </div>

        {/* Ad bas */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px" }}>
          Publicité
        </div>
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
