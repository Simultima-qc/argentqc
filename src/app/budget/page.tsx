import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CoÃ»t de la vie au QuÃ©bec en 2026 â€” Budget mensuel complet | ArgentQC.ca",
  description:
    "CoÃ»t de la vie au QuÃ©bec en 2026 : loyer, Ã©picerie, transport, enfants par ville. Comparaison MontrÃ©al vs QuÃ©bec vs rÃ©gions et tout ce qui coÃ»te moins cher qu'ailleurs au Canada.",
  keywords: [
    "coÃ»t de la vie QuÃ©bec 2026",
    "budget mensuel QuÃ©bec",
    "coÃ»t vie MontrÃ©al vs QuÃ©bec",
    "combien coÃ»te vivre QuÃ©bec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const GREEN = "#10B981";
const PARCH = "#F7F3EC";

const postesDepenses = [
  { poste: "Loyer", emoji: "ðŸ ", montreal: "950â€“1 800 $", quebec: "750â€“1 350 $", regions: "600â€“1 100 $", note: "Plus grande diffÃ©rence entre MontrÃ©al et les rÃ©gions." },
  { poste: "Ã‰picerie (seul)", emoji: "ðŸ›’", montreal: "350â€“500 $", quebec: "320â€“480 $", regions: "300â€“450 $", note: "Peu de variation â€” chaÃ®nes nationales partout." },
  { poste: "Transport (commun)", emoji: "ðŸšŒ", montreal: "94â€“110 $", quebec: "88â€“105 $", regions: "0â€“70 $", note: "STM MontrÃ©al : ~95 $/mois. En rÃ©gion : souvent indispensable d'avoir une voiture." },
  { poste: "Voiture (assurance + essence)", emoji: "ðŸš—", montreal: "350â€“700 $", quebec: "300â€“600 $", regions: "280â€“550 $", note: "Assurance auto plus chÃ¨re Ã  MontrÃ©al (vol, accidents). Voir notre guide assurance auto." },
  { poste: "Internet + cellulaire", emoji: "ðŸ“±", montreal: "100â€“150 $", quebec: "90â€“140 $", regions: "95â€“145 $", note: "Peu de variation. Comparer Bell, Videotron, Fizz, Koodo." },
  { poste: "Ã‰lectricitÃ© (Hydro-QC)", emoji: "âš¡", montreal: "50â€“100 $", quebec: "45â€“90 $", regions: "50â€“110 $", note: "Parmi les tarifs les plus bas en AmÃ©rique du Nord." },
  { poste: "Restaurants & sorties", emoji: "ðŸ½ï¸", montreal: "200â€“500 $", quebec: "150â€“400 $", regions: "100â€“300 $", note: "TrÃ¨s variable selon les habitudes." },
  { poste: "SantÃ© (dentiste, physio)", emoji: "ðŸ’Š", montreal: "50â€“300 $", quebec: "50â€“250 $", regions: "40â€“200 $", note: "Partiellement couvert par les crÃ©dits d'impÃ´t pour frais mÃ©dicaux." },
];

const profils = [
  {
    profil: "Personne seule â€” MontrÃ©al",
    emoji: "ðŸ‘¤",
    revenu: "45 000 $",
    loyer: "1 200 $",
    total: "2 800â€“3 400 $",
    aides: "~1 100 $ /an",
    note: "CrÃ©dit TPS, crÃ©dit solidaritÃ© selon revenu.",
  },
  {
    profil: "Couple sans enfant â€” QuÃ©bec",
    emoji: "ðŸ‘«",
    revenu: "75 000 $",
    loyer: "1 100 $",
    total: "3 800â€“4 500 $",
    aides: "~700 $ /an",
    note: "Principalement crÃ©dit TPS fÃ©dÃ©ral.",
  },
  {
    profil: "Famille 2 enfants â€” Laval",
    emoji: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦",
    revenu: "70 000 $",
    loyer: "1 350 $",
    total: "5 200â€“6 000 $",
    aides: "~10 500 $ /an",
    note: "ACE + allocation famille + crÃ©dit frais de garde + crÃ©dit solidaritÃ©.",
  },
  {
    profil: "AÃ®nÃ© seul â€” RÃ©gion",
    emoji: "ðŸ‘´",
    revenu: "22 000 $",
    loyer: "750 $",
    total: "1 800â€“2 400 $",
    aides: "~14 000 $ /an",
    note: "SV + SRG + crÃ©dit solidaritÃ© + allocation logement.",
  },
];

const avantagesQC = [
  { item: "Ã‰lectricitÃ©", detail: "Tarif rÃ©sidentiel d'Hydro-QuÃ©bec parmi les plus bas en AmÃ©rique du Nord â€” environ 3x moins cher qu'en Ontario.", emoji: "âš¡" },
  { item: "Services de garde (CPE)", detail: "Places subventionnÃ©es Ã  ~10,30 $/jour en 2026 vs 40â€“70 $ dans les autres provinces. Ã‰conomie de 10 000â€“20 000 $ par enfant.", emoji: "ðŸ‘¶" },
  { item: "Loyers (hors MontrÃ©al)", detail: "QuÃ©bec, Sherbrooke, Saguenay : des loyers significativement plus bas qu'Ã  Toronto ou Vancouver.", emoji: "ðŸ " },
  { item: "Aides gouvernementales", detail: "CrÃ©dit de solidaritÃ©, allocation famille, allocation logement â€” le filet social quÃ©bÃ©cois est gÃ©nÃ©reux comparÃ© au reste du Canada.", emoji: "ðŸ’°" },
  { item: "Transport en commun", detail: "La STM Ã  MontrÃ©al est moins chÃ¨re que le TTC Ã  Toronto (~94 $ vs ~150 $ CAD/mois).", emoji: "ðŸšŒ" },
];

const plusCherQC = [
  { item: "Assurance auto Ã  MontrÃ©al", detail: "Le rÃ©gime mixte SAAQ/privÃ© reste coÃ»teux Ã  MontrÃ©al en raison du taux de vol et d'accidents.", emoji: "ðŸš—" },
  { item: "Taxes de bienvenue (MontrÃ©al)", detail: "La taxe de mutation immobiliÃ¨re Ã  MontrÃ©al comporte un palier additionnel de 3,5 % au-dessus de 500 000 $.", emoji: "ðŸ¡" },
  { item: "Restaurants et bars", detail: "Les prix ont rattrapÃ© les autres grandes villes canadiennes depuis la pandÃ©mie.", emoji: "ðŸº" },
];

const faqs = [
  {
    q: "Combien coÃ»te la vie au QuÃ©bec par mois pour une personne seule ?",
    r: "Pour une personne seule Ã  MontrÃ©al, comptez 2 800 $ Ã  3 400 $ par mois (loyer 3Â½ + Ã©picerie + transport + services). Ã€ QuÃ©bec ou en rÃ©gion, vous pouvez Ã©conomiser 400 $ Ã  700 $ par mois sur le loyer principalement.",
  },
  {
    q: "Est-ce que QuÃ©bec (ville) est vraiment moins cher que MontrÃ©al ?",
    r: "Oui, surtout pour le logement. Les loyers Ã  QuÃ©bec sont en moyenne 20 Ã  30% moins Ã©levÃ©s qu'Ã  MontrÃ©al pour un appartement comparable. Les autres postes de dÃ©penses (Ã©picerie, services) sont similaires.",
  },
  {
    q: "Vaut-il mieux vivre Ã  MontrÃ©al ou en rÃ©gion pour son budget ?",
    r: "En rÃ©gion, le coÃ»t de la vie est plus bas grÃ¢ce aux loyers moins Ã©levÃ©s, mais souvent une voiture est indispensable (coÃ»t additionnel de 500â€“800 $/mois). Ã€ MontrÃ©al, le mÃ©tro remplace la voiture pour beaucoup. Il faut calculer selon son profil.",
  },
  {
    q: "Le QuÃ©bec est-il moins cher que le reste du Canada pour Ã©lever une famille ?",
    r: "Oui, significativement. Les CPE subventionnÃ©s Ã  ~10 $/jour reprÃ©sentent une Ã©conomie de 10 000 Ã  20 000 $ par enfant par rapport aux autres provinces. CombinÃ© aux crÃ©dits familiaux provinciaux et fÃ©dÃ©raux, une famille avec 2 enfants peut recevoir 8 000 Ã  15 000 $ d'aides annuelles au QuÃ©bec.",
  },
];

export default function BudgetPage() {
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
            <span style={{ color: "rgba(240,235,224,0.7)" }}>Budget</span>
          </nav>
          <p style={{ color: GOLD, fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Guide Â· CoÃ»t de la vie QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            CoÃ»t de la vie au QuÃ©bec en 2026 â€” Chiffres rÃ©els
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
            Loyer, Ã©picerie, transport, enfants â€” ce que Ã§a coÃ»te vraiment vivre au QuÃ©bec par ville,
            ce qui est moins cher qu&apos;ailleurs au Canada et toutes les aides disponibles pour allÃ©ger votre budget.
          </p>
          <Link
            href="/budget/calculateur"
            style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "14px", padding: "12px 20px", borderRadius: "12px", textDecoration: "none" }}
          >
            Calculer mon budget â†’
          </Link>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Profils */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Budget mensuel selon votre profil
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {profils.map((p) => (
            <div key={p.profil} style={{ background: "white", border: "1px solid #EDE9E0", borderRadius: "16px", padding: "1rem 1.25rem", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.emoji}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "#1C1C1E" }}>{p.profil}</div>
                  <div style={{ fontSize: "12px", color: "#A8A29E" }}>Revenu : {p.revenu}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3" style={{ textAlign: "center" }}>
                <div style={{ background: "#F7F3EC", borderRadius: "10px", padding: "10px 8px" }}>
                  <div style={{ fontSize: "11px", color: "#A8A29E", marginBottom: "3px" }}>Loyer</div>
                  <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{p.loyer}</div>
                </div>
                <div style={{ background: "#F7F3EC", borderRadius: "10px", padding: "10px 8px" }}>
                  <div style={{ fontSize: "11px", color: "#A8A29E", marginBottom: "3px" }}>DÃ©penses</div>
                  <div style={{ fontWeight: 700, fontSize: "13px", color: "#1C1C1E" }}>{p.total}</div>
                </div>
                <div style={{ background: "#ECFDF5", borderRadius: "10px", padding: "10px 8px" }}>
                  <div style={{ fontSize: "11px", color: "#065F46", marginBottom: "3px" }}>Aides /an</div>
                  <div style={{ fontWeight: 700, fontSize: "13px", color: GREEN }}>{p.aides}</div>
                </div>
              </div>
              <p style={{ fontSize: "11px", color: "#78716C", marginTop: "8px", lineHeight: 1.5 }}>{p.note}</p>
            </div>
          ))}
        </div>

        {/* Ad mid */}
        <div style={{ background: "#EDE9E0", borderRadius: "12px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8A29E", fontSize: "11px", marginBottom: "2.5rem" }}>
          PublicitÃ©
        </div>

        {/* Tableau par ville */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Comparaison des dÃ©penses â€” MontrÃ©al vs QuÃ©bec vs RÃ©gions
        </h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #EDE9E0" }}>
            <thead>
              <tr style={{ background: DARK, color: "#F0EBE0" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, fontSize: "12px" }}>Poste</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>ðŸ™ï¸ MontrÃ©al</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>ðŸ° QuÃ©bec</th>
                <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 700, fontSize: "12px" }}>ðŸŒ² RÃ©gions</th>
              </tr>
            </thead>
            <tbody>
              {postesDepenses.map((p, i) => (
                <tr key={p.poste} style={{ borderBottom: i < postesDepenses.length - 1 ? "1px solid #F0EBE0" : "none" }}>
                  <td style={{ padding: "10px 14px" }}>
                    <span style={{ marginRight: "6px" }}>{p.emoji}</span>
                    <span style={{ fontWeight: 600, color: "#1C1C1E" }}>{p.poste}</span>
                    <div style={{ fontSize: "11px", color: "#A8A29E", marginTop: "2px" }}>{p.note}</div>
                  </td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C", fontSize: "12px" }}>{p.montreal}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C", fontSize: "12px" }}>{p.quebec}</td>
                  <td style={{ padding: "10px 14px", textAlign: "center", color: "#44403C", fontSize: "12px" }}>{p.regions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Moins cher qu'ailleurs */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Ce qui coÃ»te moins cher au QuÃ©bec qu&apos;ailleurs au Canada
        </h2>
        <div className="flex flex-col gap-3 mb-8">
          {avantagesQC.map((a) => (
            <div key={a.item} style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{a.emoji}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#065F46" }}>{a.item}</div>
                <p style={{ fontSize: "12px", color: "#047857", lineHeight: 1.6, margin: "4px 0 0 0" }}>{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Plus cher */}
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 800, color: "#1C1C1E", marginBottom: "1.25rem" }}>
          Ce qui coÃ»te plus cher au QuÃ©bec
        </h2>
        <div className="flex flex-col gap-3 mb-10">
          {plusCherQC.map((a) => (
            <div key={a.item} style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "12px", padding: "12px 16px", display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{a.emoji}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#991B1B" }}>{a.item}</div>
                <p style={{ fontSize: "12px", color: "#B91C1C", lineHeight: 1.6, margin: "4px 0 0 0" }}>{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA calculateur */}
        <div style={{ background: DARK, borderRadius: "20px", padding: "1.5rem", textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "1.2rem", fontWeight: 800, marginBottom: "8px" }}>
            Calculez votre budget personnalisÃ©
          </p>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "13px", marginBottom: "1.25rem", lineHeight: 1.6 }}>
            Entrez vos revenus et dÃ©penses pour obtenir votre bilan mensuel avec graphique.
          </p>
          <Link
            href="/budget/calculateur"
            style={{ display: "inline-block", background: GOLD, color: DARK, fontWeight: 800, fontSize: "15px", padding: "14px 28px", borderRadius: "14px", textDecoration: "none" }}
          >
            Ouvrir le calculateur â†’
          </Link>
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

        {/* Liens internes */}
        <div className="flex flex-col gap-3 mb-8">
          {[
            { href: "/demenagement", emoji: "ðŸ“¦", titre: "Guide dÃ©mÃ©nagement QuÃ©bec", desc: "Loyers par ville, Ã©tapes clÃ©s, 1er juillet" },
            { href: "/retraite", emoji: "ðŸ–ï¸", titre: "Pensez Ã  votre retraite", desc: "REER, CELI, RRQ â€” comment Ã©pargner au QuÃ©bec" },
            { href: "/impots", emoji: "ðŸ§¾", titre: "Planifiez votre saison d'impÃ´ts", desc: "Dates limites, remboursements et logiciels gratuits" },
            { href: "/questionnaire", emoji: "ðŸ”", titre: "Trouver mes aides gouvernementales", desc: "Subventions, crÃ©dits, allocations auxquels j'ai droit" },
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
