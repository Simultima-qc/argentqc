import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CoÃ»t de la vie au QuÃ©bec 2026 â€“ Budget mensuel complet",
  description:
    "Combien Ã§a coÃ»te vraiment vivre au QuÃ©bec en 2026 ? Logement, Ã©picerie, enfants, sport, transport â€” et toutes les aides gouvernementales pour rÃ©duire vos dÃ©penses.",
  keywords: [
    "coÃ»t de la vie QuÃ©bec 2026",
    "budget mensuel QuÃ©bec",
    "combien coÃ»te vivre au QuÃ©bec",
    "coÃ»t enfant QuÃ©bec",
  ],
};

const postes = [
  {
    categorie: "Logement",
    emoji: "ðŸ ",
    coutSeul: "900 $ â€“ 1 800 $",
    coutFamille: "1 400 $ â€“ 2 500 $",
    note: "Loyer moyen Ã  MontrÃ©al. QuÃ©bec et rÃ©gions: 20-30% moins cher.",
    aides: [
      { label: "Allocation-logement SHQ", href: "/allocation-logement-quebec" },
      { label: "CrÃ©dit de solidaritÃ©", href: "/credit-solidarite-quebec" },
    ],
  },
  {
    categorie: "Ã‰picerie",
    emoji: "ðŸ›’",
    coutSeul: "350 $ â€“ 500 $",
    coutFamille: "800 $ â€“ 1 200 $",
    note: "Famille de 4 personnes. Les prix ont augmentÃ© de ~20% depuis 2022.",
    aides: [
      { label: "CrÃ©dit TPS/TVH", href: "/credit-impot-quebec" },
      { label: "CrÃ©dit de solidaritÃ©", href: "/credit-solidarite-quebec" },
    ],
  },
  {
    categorie: "Enfants & garderie",
    emoji: "ðŸ‘¶",
    coutSeul: "â€“",
    coutFamille: "200 $ â€“ 1 500 $",
    note: "CPE subventionnÃ© Ã  ~10 $/jour. Garderie privÃ©e non subventionnÃ©e: 40-55 $/jour.",
    aides: [
      { label: "CrÃ©dit frais de garde (75%)", href: "/blog/frais-garde-enfants-quebec-2026" },
      { label: "Allocation famille", href: "/aide-famille-quebec" },
    ],
  },
  {
    categorie: "Sport & loisirs enfants",
    emoji: "âš½",
    coutSeul: "â€“",
    coutFamille: "500 $ â€“ 3 000 $",
    note: "Soccer, hockey, natation â€” les sports d'hiver (hockey) sont les plus coÃ»teux.",
    aides: [
      { label: "Guide aides sport enfant", href: "/aide-financiere-sport-enfant-quebec" },
      { label: "Jumpstart (familles modestes)", href: "https://jumpstart.canadiantire.ca/fr" },
    ],
  },
  {
    categorie: "Transport",
    emoji: "ðŸš—",
    coutSeul: "150 $ â€“ 800 $",
    coutFamille: "300 $ â€“ 1 200 $",
    note: "Transport en commun ~100 $/mois Ã  MontrÃ©al. Voiture: assurance + essence + entretien.",
    aides: [
      { label: "Subvention vÃ©hicule Ã©lectrique", href: "/vehicule-electrique-quebec" },
      { label: "Borne de recharge (600 $)", href: "/vehicule-electrique-quebec" },
    ],
  },
  {
    categorie: "SantÃ©",
    emoji: "ðŸ¥",
    coutSeul: "100 $ â€“ 400 $",
    coutFamille: "200 $ â€“ 800 $",
    note: "MÃ©dicaments, dentiste, lunettes, physio â€” couverts partiellement par les crÃ©dits d'impÃ´t.",
    aides: [
      { label: "CrÃ©dit frais mÃ©dicaux", href: "/credit-impot-frais-medicaux-quebec" },
      { label: "Aide lunettes QuÃ©bec", href: "/aide-lunettes-quebec" },
    ],
  },
];

const profils = [
  {
    profil: "Personne seule, MontrÃ©al",
    revenu: "45 000 $",
    depenses: "2 800 $ / mois",
    aides: "~1 200 $ / an",
    emoji: "ðŸ‘¤",
  },
  {
    profil: "Couple sans enfant",
    revenu: "80 000 $",
    depenses: "4 200 $ / mois",
    aides: "~800 $ / an",
    emoji: "ðŸ‘«",
  },
  {
    profil: "Famille 2 enfants",
    revenu: "70 000 $",
    depenses: "5 500 $ / mois",
    aides: "~12 000 $ / an",
    emoji: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦",
  },
  {
    profil: "AÃ®nÃ© seul, 70 ans",
    revenu: "22 000 $",
    depenses: "2 000 $ / mois",
    aides: "~14 000 $ / an",
    emoji: "ðŸ‘´",
  },
];

const satellites = [
  { href: "/aide-famille-quebec", titre: "Aide financiÃ¨re famille QuÃ©bec", desc: "ACE, allocation famille, crÃ©dit solidaritÃ©", emoji: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§" },
  { href: "/blog/frais-garde-enfants-quebec-2026", titre: "CoÃ»t garderie QuÃ©bec â€“ crÃ©dit jusqu'Ã  75%", desc: "RÃ©cupÃ©rez une grande partie de vos frais", emoji: "ðŸ«" },
  { href: "/aide-financiere-sport-enfant-quebec", titre: "CoÃ»t sport enfant QuÃ©bec", desc: "Aides disponibles pour les activitÃ©s", emoji: "âš½" },
  { href: "/allocation-logement-quebec", titre: "Allocation logement QuÃ©bec", desc: "Aide pour locataires Ã  faible revenu", emoji: "ðŸ " },
  { href: "/credit-impot-frais-medicaux-quebec", titre: "CrÃ©dit frais mÃ©dicaux QuÃ©bec", desc: "RÃ©cupÃ©rez jusqu'Ã  20% de vos dÃ©penses", emoji: "ðŸ’Š" },
  { href: "/subventions-maison-quebec", titre: "Subventions maison QuÃ©bec", desc: "RÃ©duire le coÃ»t de votre propriÃ©tÃ©", emoji: "ðŸ”¨" },
];

const faqs = [
  {
    q: "Combien coÃ»te la vie au QuÃ©bec par mois pour une personne seule ?",
    r: "Pour une personne seule Ã  MontrÃ©al, le budget mensuel rÃ©aliste est de 2 500 $ Ã  3 500 $ : loyer (900-1 800 $), Ã©picerie (350-500 $), transport (150-400 $), et autres dÃ©penses. En rÃ©gion (QuÃ©bec, Sherbrooke, Saguenay), le coÃ»t est gÃ©nÃ©ralement 15-25% moins Ã©levÃ©, principalement grÃ¢ce aux loyers plus bas.",
  },
  {
    q: "Combien coÃ»te Ã©lever un enfant au QuÃ©bec ?",
    r: "Selon les estimations, Ã©lever un enfant au QuÃ©bec coÃ»te entre 10 000 $ et 15 000 $ par annÃ©e jusqu'Ã  18 ans, incluant garderie/Ã©cole, vÃªtements, nourriture, sports et loisirs. GrÃ¢ce aux aides gouvernementales (ACE + allocation famille + crÃ©dit frais de garde), une famille peut rÃ©cupÃ©rer 5 000 $ Ã  12 000 $ par an selon son revenu.",
  },
  {
    q: "Le QuÃ©bec est-il moins cher que le reste du Canada ?",
    r: "Oui, le QuÃ©bec est gÃ©nÃ©ralement moins cher que l'Ontario et la Colombie-Britannique, principalement grÃ¢ce aux loyers plus bas (surtout hors MontrÃ©al), aux CPE subventionnÃ©s (~10 $/jour vs 40-70 $ ailleurs), aux tarifs d'Ã©lectricitÃ© parmi les plus bas en AmÃ©rique du Nord, et aux nombreuses aides gouvernementales.",
  },
  {
    q: "Quelles aides sont disponibles pour rÃ©duire mon coÃ»t de la vie ?",
    r: "Plusieurs programmes gouvernementaux peuvent rÃ©duire votre coÃ»t de la vie : crÃ©dit de solidaritÃ© (jusqu'Ã  2 000 $/an), crÃ©dit TPS/TVH fÃ©dÃ©ral (jusqu'Ã  700 $/an), allocation-logement (jusqu'Ã  170 $/mois), crÃ©dit pour frais mÃ©dicaux, et plus. Utilisez notre questionnaire pour voir tout ce Ã  quoi vous avez droit.",
  },
];

export default function CoutVieQuebecPage() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/questionnaire" style={{ color: "#F5C842", fontSize: "13px", fontWeight: 600, textDecoration: "underline", opacity: 0.85 }}>
            Trouver mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "#060D1A", position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ color: "#F5C842", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Page de rÃ©fÃ©rence Â· CoÃ»t de la vie QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            CoÃ»t de la vie au QuÃ©bec 2026 â€” et comment rÃ©duire vos dÃ©penses
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
            Logement, Ã©picerie, enfants, sport, santÃ© â€” voici ce que Ã§a coÃ»te vraiment vivre au QuÃ©bec
            en 2026, et toutes les aides gouvernementales disponibles pour allÃ©ger votre budget.
          </p>
          <Link
            href="/questionnaire"
            style={{ display: "block", background: "#F5C842", color: "#060D1A", fontWeight: 800, fontSize: "15px", padding: "14px", borderRadius: "14px", textAlign: "center", textDecoration: "none", boxShadow: "0 0 28px rgba(245,200,66,0.2)" }}
          >
            Trouver mes aides â†’
          </Link>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", textAlign: "center", marginTop: "8px" }}>Gratuit Â· 2 minutes Â· estimation personnalisÃ©e</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Profils budget */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Budget selon votre profil</h2>
        <div className="grid grid-cols-1 gap-3 mb-10">
          {profils.map((p) => (
            <div key={p.profil} className="bg-white rounded-2xl border border-slate-100 shadow-sm px-4 py-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{p.emoji}</span>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{p.profil}</p>
                  <p className="text-slate-400 text-xs">Revenu : {p.revenu}</p>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-center">
                  <p className="text-slate-500 text-xs mb-0.5">DÃ©penses</p>
                  <p className="font-bold text-slate-800">{p.depenses}</p>
                </div>
                <div className="text-center">
                  <p className="text-slate-500 text-xs mb-0.5">Aides reÃ§ues</p>
                  <p className="font-bold text-green-700">{p.aides}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Postes de dÃ©penses */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">CoÃ»ts dÃ©taillÃ©s par poste</h2>
        <div className="flex flex-col gap-4 mb-10">
          {postes.map((poste) => (
            <div key={poste.categorie} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{poste.emoji}</span>
                <h3 className="font-bold text-slate-800">{poste.categorie}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-400 mb-1">Personne seule</p>
                  <p className="font-bold text-slate-800 text-sm">{poste.coutSeul}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-slate-400 mb-1">Famille</p>
                  <p className="font-bold text-slate-800 text-sm">{poste.coutFamille}</p>
                </div>
              </div>
              <p className="text-slate-500 text-xs mb-3">{poste.note}</p>
              {poste.aides.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-green-700 mb-1.5">Aides disponibles :</p>
                  <div className="flex flex-wrap gap-2">
                    {poste.aides.map((aide) => (
                      <Link
                        key={aide.href}
                        href={aide.href}
                        className="text-xs bg-green-50 text-green-700 border border-green-100 rounded-full px-3 py-1 hover:border-green-300 transition-colors"
                      >
                        {aide.label} â†’
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pages satellites */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Guides pour rÃ©duire vos dÃ©penses</h2>
        <div className="flex flex-col gap-3 mb-10">
          {satellites.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3 hover:border-blue-200 transition-colors"
            >
              <span className="text-xl shrink-0">{s.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-slate-800 text-sm">{s.titre}</div>
                <div className="text-slate-400 text-xs mt-0.5">{s.desc}</div>
              </div>
              <span className="text-blue-500 text-sm shrink-0">â†’</span>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Questions frÃ©quentes</h2>
        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
              <h3 className="font-bold text-slate-800 text-sm mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.r}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-xl mb-2">RÃ©duisez votre coÃ»t de la vie dÃ¨s maintenant</p>
          <p className="text-blue-200 text-sm mb-4">
            DÃ©couvrez toutes les aides auxquelles vous avez droit en 2 minutes.
          </p>
          <Link
            href="/questionnaire"
            className="block w-full bg-yellow-400 text-blue-900 font-bold py-4 rounded-2xl text-center"
          >
            Commencer le questionnaire â†’
          </Link>
          <p className="text-blue-300 text-xs text-center mt-2">Gratuit Â· 2 minutes Â· estimation personnalisÃ©e</p>
        </div>

        <p className="text-slate-400 text-xs text-center leading-relaxed">
          Les montants affichÃ©s sont des estimations basÃ©es sur des donnÃ©es disponibles en 2026.
        </p>
      </div>

      <footer style={{ background: "#060D1A", padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F5C842", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affiliÃ© au gouvernement.</p>
          <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</Link>
        </div>
      </footer>
    </main>
  );
}
