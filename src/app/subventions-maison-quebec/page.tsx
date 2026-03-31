import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subventions maison Québec 2026 – Guide complet (jusqu'à 50 000 $)",
  description:
    "Toutes les subventions et aides disponibles pour votre maison au Québec en 2026 : thermopompe, rénovation, isolation, premier acheteur. Montants, conditions et liens officiels.",
  keywords: [
    "subventions maison Québec 2026",
    "aide financière maison Québec",
    "subvention rénovation Québec 2026",
    "programme maison Québec",
  ],
};

const programmes = [
  {
    nom: "LogisVert – Thermopompe",
    organisme: "Hydro-Québec",
    montant: "Jusqu'à 6 700 $",
    description: "Aide directe pour l'achat et l'installation d'une thermopompe certifiée ENERGY STAR.",
    href: "/subvention-thermopompe-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
    categorie: "Énergie",
  },
  {
    nom: "Rénoclimat",
    organisme: "Transition énergétique Québec",
    montant: "100 $ – 10 000 $",
    description: "Subvention basée sur l'amélioration de l'efficacité énergétique : isolation, fenêtres, thermopompe.",
    href: "/subvention-renovation-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
    categorie: "Rénovation",
  },
  {
    nom: "Crédit rénovations multigénérationnelles",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'à 7 500 $",
    description: "Crédit remboursable de 15% pour créer un logement secondaire pour un aîné ou une personne handicapée.",
    href: "/subvention-renovation-quebec",
    badge: "Fédéral",
    badgeColor: "bg-red-100 text-red-700",
    categorie: "Rénovation",
  },
  {
    nom: "Crédit accessibilité domiciliaire (CIHA)",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'à 3 750 $",
    description: "Crédit de 15% sur les travaux d'accessibilité pour aider les aînés ou personnes handicapées à rester chez elles.",
    href: "/subvention-renovation-quebec",
    badge: "Fédéral",
    badgeColor: "bg-red-100 text-red-700",
    categorie: "Rénovation",
  },
  {
    nom: "RAP – Régime d'accession à la propriété",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'à 35 000 $ par personne",
    description: "Retirez jusqu'à 35 000 $ de votre REER sans impôt pour acheter votre première maison (70 000 $ pour un couple).",
    href: "/questionnaire",
    badge: "Fédéral",
    badgeColor: "bg-red-100 text-red-700",
    categorie: "Achat",
  },
  {
    nom: "Borne de recharge – Roulez vert",
    organisme: "Transition énergétique Québec",
    montant: "600 $",
    description: "Subvention pour l'achat et l'installation d'une borne de recharge de niveau 2 à domicile.",
    href: "/vehicule-electrique-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
    categorie: "Transport",
  },
];

const satellites = [
  {
    href: "/subvention-thermopompe-quebec",
    titre: "Subvention thermopompe Québec 2026",
    desc: "LogisVert + Rénoclimat, jusqu'à 9 700 $",
    emoji: "🌡️",
  },
  {
    href: "/subvention-renovation-quebec",
    titre: "Subvention rénovation Québec 2026",
    desc: "Rénoclimat, crédits fédéraux, guide complet",
    emoji: "🔨",
  },
  {
    href: "/blog/renoclimat-2026-guide-complet",
    titre: "Rénoclimat 2026 – Guide étape par étape",
    desc: "Comment faire votre demande et maximiser votre subvention",
    emoji: "📋",
  },
  {
    href: "/vehicule-electrique-quebec",
    titre: "Subvention borne de recharge Québec",
    desc: "600 $ pour installer une borne à domicile",
    emoji: "⚡",
  },
];

const faqs = [
  {
    q: "Peut-on cumuler plusieurs subventions pour la même maison ?",
    r: "Oui, dans la majorité des cas. Par exemple, pour une thermopompe, vous pouvez cumuler LogisVert (Hydro-Québec) et Rénoclimat pour un total allant jusqu'à 9 700 $. Les programmes fédéraux et provinciaux sont généralement cumulables. Utilisez notre questionnaire pour voir tout ce à quoi vous avez droit.",
  },
  {
    q: "Est-ce que je dois être propriétaire pour avoir droit aux subventions maison ?",
    r: "La plupart des subventions pour la maison (Rénoclimat, LogisVert, CIHA) sont réservées aux propriétaires. Cependant, certains programmes comme la borne de recharge sont accessibles aux locataires avec l'accord du propriétaire. Le RAP s'adresse aux acheteurs d'une première propriété.",
  },
  {
    q: "Ma maison doit-elle avoir quel âge pour être admissible à Rénoclimat ?",
    r: "Rénoclimat est accessible aux maisons construites avant 2012. Les maisons plus récentes sont généralement trop efficaces pour bénéficier du programme, car leur cote énergétique de départ est déjà élevée.",
  },
  {
    q: "Combien de temps faut-il pour recevoir les subventions ?",
    r: "Les délais varient selon le programme : LogisVert (Hydro-Québec) prend 4 à 8 semaines, Rénoclimat prend 8 à 16 semaines après la deuxième évaluation énergétique. Planifiez vos travaux en conséquence.",
  },
  {
    q: "Faut-il un entrepreneur certifié pour avoir droit aux subventions ?",
    r: "Oui, pour la majorité des programmes. Rénoclimat et LogisVert exigent que les travaux soient réalisés par un entrepreneur certifié RBQ. Assurez-vous d'obtenir un devis d'un entrepreneur qualifié avant de commencer.",
  },
];

export default function SubventionsMaisonPage() {
  const totalMax = programmes.reduce((acc, p) => {
    const match = p.montant.match(/[\d\s]+/g);
    if (!match) return acc;
    const nums = match.map((n) => parseInt(n.replace(/\s/g, ""), 10)).filter(Boolean);
    return acc + Math.max(...nums);
  }, 0);

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
            Page de référence · Subventions maison Québec 2026
          </p>
          <h1 className="text-3xl font-extrabold leading-tight mb-4">
            Toutes les subventions disponibles pour votre maison au Québec
          </h1>
          <p className="text-blue-100 text-base leading-relaxed mb-6">
            Thermopompe, isolation, rénovation écoénergétique, premier acheteur — un propriétaire
            québécois peut cumuler jusqu&apos;à <strong>50 000 $</strong> d&apos;aides gouvernementales.
            Voici tous les programmes disponibles en 2026.
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

        {/* Résumé rapide */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 text-center">
          <p className="text-xs text-blue-600 uppercase font-semibold tracking-wide mb-1">Potentiel total estimé</p>
          <p className="text-4xl font-extrabold text-blue-800">50 000 $+</p>
          <p className="text-xs text-blue-500 mt-1">{programmes.length} programmes disponibles en 2026</p>
        </div>

        {/* Tableau de tous les programmes */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Tous les programmes d&apos;un coup d&apos;œil</h2>
        <div className="flex flex-col gap-3 mb-10">
          {programmes.map((prog) => (
            <Link
              key={prog.nom}
              href={prog.href}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm px-4 py-4 flex items-center justify-between hover:border-blue-200 transition-colors"
            >
              <div className="flex-1 min-w-0 mr-3">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${prog.badgeColor}`}>
                    {prog.badge}
                  </span>
                  <span className="text-xs text-slate-400">{prog.categorie}</span>
                </div>
                <p className="font-bold text-slate-800 text-sm leading-snug">{prog.nom}</p>
                <p className="text-slate-400 text-xs mt-0.5">{prog.organisme}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-extrabold text-green-700 text-sm">{prog.montant}</p>
                <p className="text-blue-500 text-xs mt-0.5">Détails →</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Sections thématiques */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Par thème</h2>

        {/* Thermopompe */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🌡️</span>
            <div>
              <h3 className="font-bold text-slate-800">Thermopompe</h3>
              <p className="text-green-700 font-bold text-sm">Jusqu&apos;à 9 700 $</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            La meilleure combinaison disponible : <strong>LogisVert</strong>{" "}d&apos;Hydro-Québec (jusqu&apos;à 6 700 $)
            + <strong>Rénoclimat</strong>{" "}(jusqu&apos;à 3 000 $). Ces deux programmes sont cumulables et peuvent
            couvrir plus de 50% du coût d&apos;une thermopompe.
          </p>
          <Link href="/subvention-thermopompe-quebec" className="text-blue-600 text-sm font-medium">
            Guide complet thermopompe →
          </Link>
        </div>

        {/* Rénovation écoénergétique */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🔨</span>
            <div>
              <h3 className="font-bold text-slate-800">Rénovation écoénergétique</h3>
              <p className="text-green-700 font-bold text-sm">Jusqu&apos;à 10 000 $ (Rénoclimat)</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Rénoclimat couvre isolation, fenêtres, portes, VRC et plus. Le montant est calculé selon
            l&apos;amélioration de la cote énergétique de votre maison — une évaluation énergétique
            avant les travaux est obligatoire.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/subvention-renovation-quebec" className="text-blue-600 text-sm font-medium">
              Guide rénovation →
            </Link>
            <Link href="/blog/renoclimat-2026-guide-complet" className="text-blue-600 text-sm font-medium">
              Guide Rénoclimat étape par étape →
            </Link>
          </div>
        </div>

        {/* Multigen + accessibilité */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">👴</span>
            <div>
              <h3 className="font-bold text-slate-800">Aînés et accessibilité</h3>
              <p className="text-green-700 font-bold text-sm">Jusqu&apos;à 11 250 $ (fédéral)</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Le crédit pour rénovations multigénérationnelles (7 500 $) et le crédit pour
            l&apos;accessibilité domiciliaire CIHA (3 750 $) sont deux crédits fédéraux distincts
            et cumulables pour adapter votre domicile.
          </p>
          <Link href="/subvention-renovation-quebec" className="text-blue-600 text-sm font-medium">
            Voir les crédits fédéraux →
          </Link>
        </div>

        {/* Premier acheteur */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🏠</span>
            <div>
              <h3 className="font-bold text-slate-800">Premier acheteur</h3>
              <p className="text-green-700 font-bold text-sm">Jusqu&apos;à 35 000 $ par personne (RAP)</p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Le Régime d&apos;accession à la propriété (RAP) vous permet de retirer jusqu&apos;à 35 000 $
            de votre REER sans impôt pour acheter une première maison — 70 000 $ pour un couple.
            Remboursable sur 15 ans sans intérêt.
          </p>
          <Link href="/questionnaire" className="text-blue-600 text-sm font-medium">
            Vérifier mon admissibilité →
          </Link>
        </div>

        {/* Pages satellites */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Guides détaillés par programme</h2>
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
          <p className="font-bold text-xl mb-2">Découvrez tout ce à quoi vous avez droit</p>
          <p className="text-blue-200 text-sm mb-4">
            Répondez à 8 questions — liste personnalisée avec montants estimés en 2 minutes.
          </p>
          <Link
            href="/questionnaire"
            className="block w-full bg-yellow-400 text-blue-900 font-bold py-4 rounded-2xl text-center"
          >
            Commencer le questionnaire →
          </Link>
        </div>

        <p className="text-slate-400 text-xs text-center leading-relaxed">
          ArgentQC.ca est un outil informatif non affilié au gouvernement. Les montants sont des
          estimations — consultez toujours les sites officiels pour confirmer votre admissibilité.
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
