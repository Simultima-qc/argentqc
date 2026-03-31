import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coût de la vie au Québec 2026 – Budget mensuel complet",
  description:
    "Combien ça coûte vraiment vivre au Québec en 2026 ? Logement, épicerie, enfants, sport, transport — et toutes les aides gouvernementales pour réduire vos dépenses.",
  keywords: [
    "coût de la vie Québec 2026",
    "budget mensuel Québec",
    "combien coûte vivre au Québec",
    "coût enfant Québec",
  ],
};

const postes = [
  {
    categorie: "Logement",
    emoji: "🏠",
    coutSeul: "900 $ – 1 800 $",
    coutFamille: "1 400 $ – 2 500 $",
    note: "Loyer moyen à Montréal. Québec et régions: 20-30% moins cher.",
    aides: [
      { label: "Allocation-logement SHQ", href: "/allocation-logement-quebec" },
      { label: "Crédit de solidarité", href: "/credit-solidarite-quebec" },
    ],
  },
  {
    categorie: "Épicerie",
    emoji: "🛒",
    coutSeul: "350 $ – 500 $",
    coutFamille: "800 $ – 1 200 $",
    note: "Famille de 4 personnes. Les prix ont augmenté de ~20% depuis 2022.",
    aides: [
      { label: "Crédit TPS/TVH", href: "/credit-impot-quebec" },
      { label: "Crédit de solidarité", href: "/credit-solidarite-quebec" },
    ],
  },
  {
    categorie: "Enfants & garderie",
    emoji: "👶",
    coutSeul: "–",
    coutFamille: "200 $ – 1 500 $",
    note: "CPE subventionné à ~10 $/jour. Garderie privée non subventionnée: 40-55 $/jour.",
    aides: [
      { label: "Crédit frais de garde (75%)", href: "/blog/frais-garde-enfants-quebec-2026" },
      { label: "Allocation famille", href: "/aide-famille-quebec" },
    ],
  },
  {
    categorie: "Sport & loisirs enfants",
    emoji: "⚽",
    coutSeul: "–",
    coutFamille: "500 $ – 3 000 $",
    note: "Soccer, hockey, natation — les sports d'hiver (hockey) sont les plus coûteux.",
    aides: [
      { label: "Guide aides sport enfant", href: "/aide-financiere-sport-enfant-quebec" },
      { label: "Jumpstart (familles modestes)", href: "https://jumpstart.canadiantire.ca/fr" },
    ],
  },
  {
    categorie: "Transport",
    emoji: "🚗",
    coutSeul: "150 $ – 800 $",
    coutFamille: "300 $ – 1 200 $",
    note: "Transport en commun ~100 $/mois à Montréal. Voiture: assurance + essence + entretien.",
    aides: [
      { label: "Subvention véhicule électrique", href: "/vehicule-electrique-quebec" },
      { label: "Borne de recharge (600 $)", href: "/vehicule-electrique-quebec" },
    ],
  },
  {
    categorie: "Santé",
    emoji: "🏥",
    coutSeul: "100 $ – 400 $",
    coutFamille: "200 $ – 800 $",
    note: "Médicaments, dentiste, lunettes, physio — couverts partiellement par les crédits d'impôt.",
    aides: [
      { label: "Crédit frais médicaux", href: "/credit-impot-frais-medicaux-quebec" },
      { label: "Aide lunettes Québec", href: "/aide-lunettes-quebec" },
    ],
  },
];

const profils = [
  {
    profil: "Personne seule, Montréal",
    revenu: "45 000 $",
    depenses: "2 800 $ / mois",
    aides: "~1 200 $ / an",
    emoji: "👤",
  },
  {
    profil: "Couple sans enfant",
    revenu: "80 000 $",
    depenses: "4 200 $ / mois",
    aides: "~800 $ / an",
    emoji: "👫",
  },
  {
    profil: "Famille 2 enfants",
    revenu: "70 000 $",
    depenses: "5 500 $ / mois",
    aides: "~12 000 $ / an",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    profil: "Aîné seul, 70 ans",
    revenu: "22 000 $",
    depenses: "2 000 $ / mois",
    aides: "~14 000 $ / an",
    emoji: "👴",
  },
];

const satellites = [
  { href: "/aide-famille-quebec", titre: "Aide financière famille Québec", desc: "ACE, allocation famille, crédit solidarité", emoji: "👨‍👩‍👧" },
  { href: "/blog/frais-garde-enfants-quebec-2026", titre: "Coût garderie Québec – crédit jusqu'à 75%", desc: "Récupérez une grande partie de vos frais", emoji: "🏫" },
  { href: "/aide-financiere-sport-enfant-quebec", titre: "Coût sport enfant Québec", desc: "Aides disponibles pour les activités", emoji: "⚽" },
  { href: "/allocation-logement-quebec", titre: "Allocation logement Québec", desc: "Aide pour locataires à faible revenu", emoji: "🏠" },
  { href: "/credit-impot-frais-medicaux-quebec", titre: "Crédit frais médicaux Québec", desc: "Récupérez jusqu'à 20% de vos dépenses", emoji: "💊" },
  { href: "/subventions-maison-quebec", titre: "Subventions maison Québec", desc: "Réduire le coût de votre propriété", emoji: "🔨" },
];

const faqs = [
  {
    q: "Combien coûte la vie au Québec par mois pour une personne seule ?",
    r: "Pour une personne seule à Montréal, le budget mensuel réaliste est de 2 500 $ à 3 500 $ : loyer (900-1 800 $), épicerie (350-500 $), transport (150-400 $), et autres dépenses. En région (Québec, Sherbrooke, Saguenay), le coût est généralement 15-25% moins élevé, principalement grâce aux loyers plus bas.",
  },
  {
    q: "Combien coûte élever un enfant au Québec ?",
    r: "Selon les estimations, élever un enfant au Québec coûte entre 10 000 $ et 15 000 $ par année jusqu'à 18 ans, incluant garderie/école, vêtements, nourriture, sports et loisirs. Grâce aux aides gouvernementales (ACE + allocation famille + crédit frais de garde), une famille peut récupérer 5 000 $ à 12 000 $ par an selon son revenu.",
  },
  {
    q: "Le Québec est-il moins cher que le reste du Canada ?",
    r: "Oui, le Québec est généralement moins cher que l'Ontario et la Colombie-Britannique, principalement grâce aux loyers plus bas (surtout hors Montréal), aux CPE subventionnés (~10 $/jour vs 40-70 $ ailleurs), aux tarifs d'électricité parmi les plus bas en Amérique du Nord, et aux nombreuses aides gouvernementales.",
  },
  {
    q: "Quelles aides sont disponibles pour réduire mon coût de la vie ?",
    r: "Plusieurs programmes gouvernementaux peuvent réduire votre coût de la vie : crédit de solidarité (jusqu'à 2 000 $/an), crédit TPS/TVH fédéral (jusqu'à 700 $/an), allocation-logement (jusqu'à 170 $/mois), crédit pour frais médicaux, et plus. Utilisez notre questionnaire pour voir tout ce à quoi vous avez droit.",
  },
];

export default function CoutVieQuebecPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-blue-700 text-white px-4 py-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-base">ArgentQC.ca</Link>
          <Link href="/questionnaire" className="text-yellow-300 text-sm font-medium underline">
            Calculer mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white px-5 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-wide font-semibold mb-2">
            Page de référence · Coût de la vie Québec 2026
          </p>
          <h1 className="text-3xl font-extrabold leading-tight mb-4">
            Coût de la vie au Québec 2026 — et comment réduire vos dépenses
          </h1>
          <p className="text-blue-100 text-base leading-relaxed mb-6">
            Logement, épicerie, enfants, sport, santé — voici ce que ça coûte vraiment vivre au Québec
            en 2026, et toutes les aides gouvernementales disponibles pour alléger votre budget.
          </p>
          <Link
            href="/questionnaire"
            className="block w-full bg-yellow-400 text-blue-900 font-bold text-base py-4 rounded-2xl text-center"
          >
            Calculer mes aides personnalisées →
          </Link>
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
                  <p className="text-slate-500 text-xs mb-0.5">Dépenses</p>
                  <p className="font-bold text-slate-800">{p.depenses}</p>
                </div>
                <div className="text-center">
                  <p className="text-slate-500 text-xs mb-0.5">Aides reçues</p>
                  <p className="font-bold text-green-700">{p.aides}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Postes de dépenses */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Coûts détaillés par poste</h2>
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
                        {aide.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pages satellites */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Guides pour réduire vos dépenses</h2>
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
              <span className="text-blue-500 text-sm shrink-0">→</span>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Questions fréquentes</h2>
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
          <p className="font-bold text-xl mb-2">Réduisez votre coût de la vie dès maintenant</p>
          <p className="text-blue-200 text-sm mb-4">
            Découvrez toutes les aides auxquelles vous avez droit en 2 minutes.
          </p>
          <Link
            href="/questionnaire"
            className="block w-full bg-yellow-400 text-blue-900 font-bold py-4 rounded-2xl text-center"
          >
            Commencer le questionnaire →
          </Link>
        </div>

        <p className="text-slate-400 text-xs text-center leading-relaxed">
          Les montants affichés sont des estimations basées sur des données disponibles en 2026.
        </p>
      </div>

      <footer className="bg-slate-800 text-slate-400 py-5 px-4">
        <div className="max-w-2xl mx-auto text-center text-xs">
          ArgentQC.ca – Outil informatif non affilié au gouvernement.
        </div>
      </footer>
    </main>
  );
}
