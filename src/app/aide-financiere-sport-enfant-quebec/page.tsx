import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aide financière sport enfant Québec 2026 – Tous les programmes",
  description:
    "Toutes les aides disponibles pour financer le sport de vos enfants au Québec en 2026 : crédits d'impôt, subventions municipales, Jumpstart, camps de jour. Montants et conditions.",
  keywords: [
    "aide financière sport enfant Québec 2026",
    "subvention sport enfant Québec",
    "crédit impôt sport enfant Québec",
    "programme sport jeunesse Québec",
  ],
};

const programmes = [
  {
    nom: "Allocation canadienne pour enfants (ACE)",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'à 7 787 $/enfant/an",
    description: "Paiement mensuel non imposable pour familles avec enfants de moins de 18 ans. Couvre les activités sportives.",
    href: "/aide-famille-quebec",
    badge: "Fédéral",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    nom: "Allocation famille (Québec)",
    organisme: "Retraite Québec",
    montant: "Jusqu'à 2 782 $/enfant/an",
    description: "Versements mensuels non imposables pour familles québécoises avec enfants de moins de 18 ans.",
    href: "/aide-famille-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    nom: "Crédit pour frais de garde (camps sportifs)",
    organisme: "Revenu Québec",
    montant: "26% à 75% des frais",
    description: "Les camps de jour sportifs d'été sont admissibles au crédit pour frais de garde — jusqu'à 75% remboursés.",
    href: "/blog/frais-garde-enfants-quebec-2026",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    nom: "Jumpstart – Canadian Tire",
    organisme: "Fondation Canadian Tire",
    montant: "Jusqu'à 300 $ par enfant",
    description: "Programme national qui aide les enfants de familles à faible revenu à participer aux sports organisés.",
    href: "https://jumpstart.canadiantire.ca/fr",
    badge: "Privé",
    badgeColor: "bg-green-100 text-green-700",
    externe: true,
  },
];

const satellites = [
  {
    href: "/subvention-sport-enfant-quebec",
    titre: "Subvention sport enfant Québec",
    desc: "ACE, allocation famille, frais de garde",
    emoji: "⚽",
  },
  {
    href: "/aide-famille-quebec",
    titre: "Aide financière famille Québec",
    desc: "Tous les programmes pour les familles",
    emoji: "👨‍👩‍👧",
  },
  {
    href: "/allocation-enfant-quebec",
    titre: "Allocation enfant Québec – montants",
    desc: "Calculez vos versements 2026",
    emoji: "💰",
  },
  {
    href: "/blog/frais-garde-enfants-quebec-2026",
    titre: "Crédit frais de garde – jusqu'à 75%",
    desc: "Camps sportifs inclus",
    emoji: "🏕️",
  },
];

const municipaux = [
  { ville: "Montréal", programme: "Accès loisirs", desc: "Tarifs réduits et gratuités pour familles à faible revenu" },
  { ville: "Québec", programme: "Accès-Famille", desc: "Réduction sur les activités de loisirs municipales" },
  { ville: "Laval", programme: "Programme d'accessibilité", desc: "Aide aux familles à revenus modestes" },
  { ville: "Longueuil", programme: "Loisirs accessibles", desc: "Tarifs adaptés selon le revenu familial" },
];

const faqs = [
  {
    q: "Y a-t-il une subvention directe pour inscrire mon enfant au soccer au Québec ?",
    r: "Il n'existe pas de subvention provinciale ou fédérale directe pour les inscriptions sportives en 2026. Cependant, plusieurs programmes indirects couvrent ces coûts : l'ACE et l'allocation famille vous versent de l'argent utilisable pour le sport, et les camps sportifs d'été peuvent être réclamés dans le crédit pour frais de garde (jusqu'à 75%). De plus, la plupart des municipalités québécoises ont des programmes d'accès aux loisirs pour les familles à faible revenu.",
  },
  {
    q: "Les inscriptions sportives sont-elles des frais de garde admissibles ?",
    r: "Les camps sportifs de jour sont admissibles au crédit pour frais de garde d'enfants, si l'enfant a moins de 16 ans et que le camp est offert pendant que vous travaillez ou étudiez. Les inscriptions à une ligue sportive le samedi matin ne sont généralement pas admissibles — le critère est que la garde permette au parent de travailler.",
  },
  {
    q: "Comment accéder au programme Jumpstart ?",
    r: "Jumpstart (Fondation Canadian Tire) aide les enfants de familles à faible revenu à participer au sport. La demande se fait en ligne sur le site de Jumpstart ou via un club sportif partenaire. Le programme peut couvrir les frais d'inscription, l'équipement et le transport.",
  },
  {
    q: "Où trouver un club de soccer ou d'activités sportives près de chez moi ?",
    r: "Vous pouvez trouver des clubs de soccer et d'autres sports organisés au Québec sur soccerclubs.ca, qui répertorie les clubs par région.",
  },
];

export default function AideFinanciereSportEnfantPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
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
            Page de référence · Aide sport enfant Québec 2026
          </p>
          <h1 className="text-3xl font-extrabold leading-tight mb-4">
            Financer le sport de vos enfants au Québec — toutes les aides disponibles
          </h1>
          <p className="text-blue-100 text-base leading-relaxed mb-6">
            ACE, allocation famille, crédits pour frais de garde, programmes municipaux et Jumpstart —
            une famille québécoise peut recevoir <strong>plus de 10 000 $/an</strong> en aides
            utilisables pour les activités sportives de ses enfants.
          </p>
          <Link
            href="/questionnaire"
            className="block w-full bg-yellow-400 text-blue-900 font-bold text-base py-4 rounded-2xl text-center"
          >
            Calculer mes aides personnalisées →
          </Link>
          <p className="text-blue-300 text-xs text-center mt-2">Gratuit · 2 minutes · estimation personnalisée</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Résumé */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 text-center">
          <p className="text-xs text-blue-600 uppercase font-semibold tracking-wide mb-1">Potentiel annuel estimé</p>
          <p className="text-4xl font-extrabold text-blue-800">10 000 $+</p>
          <p className="text-xs text-blue-500 mt-1">Pour une famille avec 2 enfants</p>
        </div>

        {/* Programmes */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Les programmes disponibles</h2>
        <div className="flex flex-col gap-3 mb-10">
          {programmes.map((prog) => (
            prog.externe ? (
              <a
                key={prog.nom}
                href={prog.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-100 shadow-sm px-4 py-4 flex items-center justify-between hover:border-blue-200 transition-colors"
              >
                <div className="flex-1 min-w-0 mr-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${prog.badgeColor}`}>
                      {prog.badge}
                    </span>
                  </div>
                  <p className="font-bold text-slate-800 text-sm leading-snug">{prog.nom}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{prog.organisme}</p>
                  <p className="text-slate-500 text-xs mt-1">{prog.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-extrabold text-green-700 text-sm">{prog.montant}</p>
                  <p className="text-blue-500 text-xs mt-0.5">Détails →</p>
                </div>
              </a>
            ) : (
              <Link
                key={prog.nom}
                href={prog.href}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm px-4 py-4 flex items-center justify-between hover:border-blue-200 transition-colors"
              >
                <div className="flex-1 min-w-0 mr-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${prog.badgeColor}`}>
                      {prog.badge}
                    </span>
                  </div>
                  <p className="font-bold text-slate-800 text-sm leading-snug">{prog.nom}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{prog.organisme}</p>
                  <p className="text-slate-500 text-xs mt-1">{prog.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-extrabold text-green-700 text-sm">{prog.montant}</p>
                  <p className="text-blue-500 text-xs mt-0.5">Détails →</p>
                </div>
              </Link>
            )
          ))}
        </div>

        {/* Programmes municipaux */}
        <h2 className="text-lg font-bold text-slate-800 mb-3">Programmes municipaux</h2>
        <p className="text-slate-500 text-sm mb-4">
          La plupart des grandes villes du Québec offrent des programmes d&apos;accès aux loisirs pour
          les familles à faible revenu. Contactez le service des loisirs de votre municipalité.
        </p>
        <div className="grid grid-cols-1 gap-3 mb-10">
          {municipaux.map((m) => (
            <div key={m.ville} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-slate-800 text-sm">{m.ville}</p>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">{m.programme}</span>
              </div>
              <p className="text-slate-500 text-xs">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Pont vers soccerclubs.ca */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 text-base mb-2">⚽ Trouver un club près de chez vous</p>
          <p className="text-green-700 text-sm leading-relaxed mb-3">
            Une fois vos aides en poche, trouvez le club de soccer idéal pour votre enfant.
            soccerclubs.ca répertorie tous les clubs du Québec par région, niveau et tranche d&apos;âge.
          </p>
          <a
            href="https://soccerclubs.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 text-white font-bold px-5 py-3 rounded-xl text-sm"
          >
            Trouver un club de soccer →
          </a>
        </div>

        {/* Satellites */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Guides détaillés</h2>
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

        {/* CTA final */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-xl mb-2">Calculez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            ACE, allocation famille, crédits d&apos;impôt — découvrez tout ce à quoi vous avez droit.
          </p>
          <Link
            href="/questionnaire"
            className="block w-full bg-yellow-400 text-blue-900 font-bold py-4 rounded-2xl text-center"
          >
            Commencer le questionnaire →
          </Link>
          <p className="text-blue-300 text-xs text-center mt-2">Gratuit · 2 minutes · estimation personnalisée</p>
        </div>

        <p className="text-slate-400 text-xs text-center leading-relaxed">
          ArgentQC.ca est un outil informatif non affilié au gouvernement. Les montants sont des estimations.
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
