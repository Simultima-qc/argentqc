import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liste des subventions maison Québec 2026 (thermopompe, rénovation, énergie)",
  description:
    "Guide complet des subventions maison au Québec en 2026 : thermopompe, isolation, rénovation écoénergétique, premier acheteur. Montants, admissibilité et liens officiels.",
  keywords: [
    "subventions maison Québec 2026",
    "aide rénovation Québec",
    "subvention thermopompe Québec",
    "programme rénovation Québec",
    "aide énergie Québec",
    "aide financière maison Québec",
    "subvention isolation maison Québec",
    "Rénoclimat 2026",
    "LogisVert Hydro-Québec",
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

const cumuls = [
  { programme: "LogisVert – Thermopompe", montant: "6 700 $", organisme: "Hydro-Québec" },
  { programme: "Rénoclimat (isolation, fenêtres, VRC…)", montant: "10 000 $", organisme: "TEQ" },
  { programme: "Rénovations multigénérationnelles", montant: "7 500 $", organisme: "Fédéral" },
  { programme: "Crédit accessibilité domiciliaire (CIHA)", montant: "3 750 $", organisme: "Fédéral" },
  { programme: "RAP REER (premier acheteur)", montant: "35 000 $ / personne", organisme: "Fédéral" },
  { programme: "Borne de recharge Roulez vert", montant: "600 $", organisme: "TEQ" },
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
  {
    q: "Y a-t-il un plafond de revenu pour avoir droit aux subventions maison ?",
    r: "La plupart des programmes (Rénoclimat, LogisVert, CIHA) n'ont pas de plafond de revenu — ils sont ouverts à tous les propriétaires admissibles. Certains programmes offrent toutefois des bonifications pour les ménages à faible ou moyen revenu. Par exemple, Rénoclimat peut accorder une aide supplémentaire aux propriétaires à revenus modestes.",
  },
];

export default function SubventionsMaisonPage() {
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
            Guide de référence · Aide rénovation Québec 2026
          </p>
          <h1 className="text-3xl font-extrabold leading-tight mb-6">
            Liste des subventions maison Québec 2026 (thermopompe, rénovation, énergie)
          </h1>

          {/* Bloc En résumé */}
          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-5 mb-6">
            <p className="font-bold text-white text-sm mb-3 uppercase tracking-wide">En résumé</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-yellow-400 shrink-0">💰</span><span className="text-blue-100">Jusqu&apos;à <strong>50 000 $</strong>{" "}cumulables en subventions et crédits</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 shrink-0">🏠</span><span className="text-blue-100">Principales aides : thermopompe, isolation, rénovation écoénergétique</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 shrink-0">⏱</span><span className="text-blue-100">Délai pour recevoir les fonds : 4 à 16 semaines selon le programme</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 shrink-0">✅</span><span className="text-blue-100">Admissibilité de base : propriétaire occupant, maison construite avant 2012</span></li>
            </ul>
          </div>

          <Link
            href="/questionnaire"
            className="block w-full bg-yellow-400 text-blue-900 font-bold text-base py-4 rounded-2xl text-center"
          >
            Calculer mes aides personnalisées →
          </Link>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* H2 : Quelles subventions disponibles */}
        <h2 className="text-xl font-bold text-slate-800 mb-4">Quelles sont les subventions maison disponibles en 2026 ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          Le gouvernement du Québec et le gouvernement fédéral offrent plusieurs programmes d&apos;aide financière
          pour les propriétaires en 2026. Ces programmes de rénovation et d&apos;aide énergie au Québec
          peuvent être cumulés pour maximiser votre remboursement. Voici la liste complète des subventions maison
          disponibles, par ordre de popularité.
        </p>
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

        {/* H2 : Combien pouvez-vous recevoir */}
        <h2 className="text-xl font-bold text-slate-800 mb-3">Combien pouvez-vous recevoir en subventions au Québec ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Le chiffre de 50 000 $ n&apos;est pas magique — c&apos;est la somme réelle que peut atteindre
          un propriétaire qui cumule intelligemment les programmes provinciaux et fédéraux. Voici
          comment on y arrive, programme par programme :
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-5">
          <div className="space-y-2 mb-4">
            {cumuls.map((c) => (
              <div key={c.programme} className="flex items-center justify-between bg-white rounded-xl px-4 py-3">
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{c.programme}</p>
                  <p className="text-slate-400 text-xs">{c.organisme}</p>
                </div>
                <p className="font-extrabold text-green-700 text-sm shrink-0 ml-2">{c.montant}</p>
              </div>
            ))}
          </div>
          <div className="bg-green-700 text-white rounded-xl px-4 py-3 flex items-center justify-between">
            <p className="font-bold text-sm">Total cumulable (scénario optimal)</p>
            <p className="font-extrabold text-lg shrink-0 ml-2">&gt; 50 000 $</p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            * Le RAP REER s&apos;applique à l&apos;achat d&apos;une première propriété uniquement.
            Les autres programmes s&apos;appliquent à la rénovation d&apos;une propriété existante.
            Un ménage peut recevoir plusieurs programmes simultanément.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-10">
          <p className="text-xs font-semibold text-slate-500 uppercase mb-3">Exemples de projets courants</p>
          <div className="space-y-3">
            {[
              { projet: "Thermopompe seulement", montant: "Jusqu'à 9 700 $", detail: "LogisVert 6 700 $ + Rénoclimat 3 000 $" },
              { projet: "Isolation complète", montant: "Jusqu'à 5 000 $", detail: "Rénoclimat uniquement" },
              { projet: "Rénovation écoénergétique complète", montant: "Jusqu'à 17 500 $", detail: "Rénoclimat + crédits fédéraux" },
              { projet: "Premier acheteur + rénovations", montant: "Jusqu'à 50 000 $", detail: "RAP REER + Rénoclimat + crédits fédéraux" },
            ].map((ex) => (
              <div key={ex.projet} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{ex.projet}</p>
                  <p className="text-slate-400 text-xs">{ex.detail}</p>
                </div>
                <p className="font-extrabold text-green-700 text-sm shrink-0 ml-2">{ex.montant}</p>
              </div>
            ))}
          </div>
        </div>

        {/* H2 : Subvention thermopompe */}
        <h2 className="text-xl font-bold text-slate-800 mb-3">Subvention thermopompe Québec 2026</h2>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-8">
          <p className="text-green-700 font-bold text-base mb-3">Jusqu&apos;à 9 700 $ cumulables</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            La subvention thermopompe au Québec combine deux programmes distincts : <strong>LogisVert</strong>{" "}
            d&apos;Hydro-Québec (jusqu&apos;à 6 700 $) et <strong>Rénoclimat</strong>{" "}
            (jusqu&apos;à 3 000 $). Ces deux aides énergie au Québec sont cumulables et peuvent couvrir
            50% à 70% du coût total d&apos;installation. La thermopompe remplace le chauffage électrique
            traditionnel et réduit la facture d&apos;électricité de 30% à 50% — un investissement qui se
            rembourse en 4 à 7 ans, subventions incluses.
          </p>
          <Link href="/subvention-thermopompe-quebec" className="text-blue-600 text-sm font-semibold">
            Guide complet subvention thermopompe Québec →
          </Link>
        </div>

        {/* H2 : Subvention isolation */}
        <h2 className="text-xl font-bold text-slate-800 mb-3">Subvention isolation maison Québec</h2>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-8">
          <p className="text-green-700 font-bold text-base mb-3">Jusqu&apos;à 5 000 $ via Rénoclimat</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            L&apos;isolation des murs, du toit et du sous-sol est l&apos;un des travaux les mieux
            subventionnés par le programme Rénoclimat. C&apos;est souvent le meilleur retour sur investissement :
            une maison bien isolée réduit la facture de chauffage de 20% à 40%, en plus de recevoir
            une subvention basée sur l&apos;amélioration de la cote énergétique ÉnerGuide.
            Les travaux admissibles incluent : isolation des murs extérieurs, isolation du grenier,
            isolation du sous-sol, remplacement de fenêtres et de portes.
          </p>
          <Link href="/subvention-renovation-quebec" className="text-blue-600 text-sm font-semibold">
            Guide subvention rénovation maison Québec →
          </Link>
        </div>

        {/* H2 : Programme Rénoclimat */}
        <h2 className="text-xl font-bold text-slate-800 mb-3">Programme Rénoclimat — comment ça fonctionne</h2>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-8">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Rénoclimat est le principal programme de rénovation écoénergétique au Québec. Il couvre
            isolation, thermopompe, fenêtres, VRC (ventilation) et plus. Le montant de l&apos;aide
            financière maison est calculé selon l&apos;amélioration de la cote ÉnerGuide de votre maison :
            plus les travaux améliorent l&apos;efficacité de votre habitation, plus la subvention est élevée.
            C&apos;est pourquoi il est possible de combiner plusieurs types de travaux dans une seule demande
            pour maximiser le montant reçu.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 mb-4">
            <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Étapes clés</p>
            <ol className="space-y-1.5 text-sm text-slate-700">
              <li className="flex gap-2"><span className="font-bold text-blue-700 shrink-0">1.</span> Évaluation énergétique avant les travaux (obligatoire)</li>
              <li className="flex gap-2"><span className="font-bold text-blue-700 shrink-0">2.</span> Travaux par entrepreneur certifié RBQ</li>
              <li className="flex gap-2"><span className="font-bold text-blue-700 shrink-0">3.</span> Deuxième évaluation après les travaux</li>
              <li className="flex gap-2"><span className="font-bold text-blue-700 shrink-0">4.</span> Subvention versée en 8 à 16 semaines</li>
            </ol>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/blog/renoclimat-2026-guide-complet" className="text-blue-600 text-sm font-semibold">
              Guide Rénoclimat étape par étape →
            </Link>
            <a
              href="https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/renoclimat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 text-sm font-medium"
            >
              Site officiel Rénoclimat ↗
            </a>
          </div>
        </div>

        {/* H2 : Qui est admissible */}
        <h2 className="text-xl font-bold text-slate-800 mb-3">Qui est admissible aux subventions maison au Québec ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          C&apos;est la question la plus fréquente. Les critères varient selon le programme, mais voici
          les conditions générales qui s&apos;appliquent à la majorité des aides disponibles en 2026 :
        </p>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-4">
          <div className="space-y-3">
            {[
              { label: "Statut", valeur: "Propriétaire occupant (résidence principale)" },
              { label: "Année de construction", valeur: "Avant 2012 pour Rénoclimat ; aucune restriction pour LogisVert et CIHA" },
              { label: "Type de bâtiment", valeur: "Unifamiliale, jumelée, maison de ville, petit immeuble de 1 à 4 logements" },
              { label: "Localisation", valeur: "Partout au Québec — programmes provinciaux et fédéraux disponibles" },
              { label: "Revenu", valeur: "Aucun plafond pour la plupart des programmes ; bonifications pour ménages à faible revenu" },
              { label: "Type de travaux", valeur: "Isolation, thermopompe, fenêtres, VRC, borne de recharge, accessibilité" },
              { label: "Entrepreneur", valeur: "Certifié RBQ obligatoire pour Rénoclimat et LogisVert" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 text-sm border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-slate-800">{item.label} :</span>{" "}
                  <span className="text-slate-600">{item.valeur}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-10">
          <p className="text-amber-800 text-xs font-semibold mb-1">⚠️ Important</p>
          <p className="text-amber-700 text-xs leading-relaxed">
            Pour Rénoclimat, l&apos;évaluation énergétique doit être faite <strong>avant</strong>{" "}le début des travaux.
            Toute demande soumise après les travaux sans évaluation préalable sera rejetée.
          </p>
        </div>

        {/* H2 : Comment faire une demande */}
        <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire une demande de subvention maison ?</h2>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-10">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Chaque programme a son propre processus, mais les étapes générales sont similaires.
            Voici comment procéder pour obtenir vos subventions maison au Québec en 2026 :
          </p>
          <div className="space-y-3 mb-4">
            {[
              { num: "1", titre: "Vérifiez votre admissibilité", texte: "Utilisez notre questionnaire gratuit pour voir tous les programmes auxquels vous avez droit — 2 minutes suffit." },
              { num: "2", titre: "Faites l'évaluation énergétique (si requis)", texte: "Obligatoire pour Rénoclimat — à commander AVANT les travaux via un conseiller énergétique accrédité." },
              { num: "3", titre: "Obtenez des soumissions d'entrepreneurs certifiés RBQ", texte: "Comparez au moins 3 soumissions. L'entrepreneur doit être certifié RBQ pour les programmes provinciaux." },
              { num: "4", titre: "Réalisez les travaux", texte: "Conservez toutes les factures et contrats. Prenez des photos avant/après si possible." },
              { num: "5", titre: "Soumettez votre demande", texte: "Délais maximums : 9 mois après installation (LogisVert) ; après 2e évaluation (Rénoclimat). Ne tardez pas." },
              { num: "6", titre: "Recevez votre subvention", texte: "Par dépôt direct ou chèque, en 4 à 16 semaines selon le programme." },
            ].map((e) => (
              <div key={e.num} className="flex gap-3 items-start">
                <div className="w-7 h-7 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">{e.num}</div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{e.titre}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{e.texte}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/questionnaire" className="text-sm font-semibold bg-blue-700 text-white px-4 py-2 rounded-xl">
              Vérifier mon admissibilité →
            </Link>
            <a href="https://www.hydroquebec.com/residentiel/mieux-consommer/conseils/fenetres-chauffage-climatisation/thermopompes/aide-financiere.html" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 font-medium py-2">
              LogisVert officiel ↗
            </a>
            <a href="https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/renoclimat" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 font-medium py-2">
              Rénoclimat officiel ↗
            </a>
          </div>
        </div>

        {/* Guides détaillés */}
        <h2 className="text-xl font-bold text-slate-800 mb-4">Guides détaillés par programme</h2>
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

        {/* Liens internes vers autres piliers */}
        <div className="grid grid-cols-1 gap-3 mb-10">
          <Link href="/cout-vie-quebec" className="flex items-center gap-3 bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 hover:border-blue-200 transition-colors">
            <span className="text-xl shrink-0">📊</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-700 text-sm">Coût de la vie au Québec 2026</div>
              <div className="text-slate-400 text-xs mt-0.5">Budget mensuel par profil + toutes les aides</div>
            </div>
            <span className="text-blue-500 text-sm shrink-0">→</span>
          </Link>
          <Link href="/questionnaire" className="flex items-center gap-3 bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 hover:border-blue-200 transition-colors">
            <span className="text-xl shrink-0">💡</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-700 text-sm">Toutes les aides financières au Québec</div>
              <div className="text-slate-400 text-xs mt-0.5">Questionnaire personnalisé en 2 minutes</div>
            </div>
            <span className="text-blue-500 text-sm shrink-0">→</span>
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-slate-800 mb-4">Questions fréquentes — subventions maison Québec</h2>
        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
              <h3 className="font-bold text-slate-800 text-sm mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.r}</p>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 mb-8">
          <p className="font-bold text-xl mb-2 text-center">Calculez vos subventions maison en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4 text-center">
            Répondez à 8 questions — liste personnalisée avec montants estimés.
          </p>
          <div className="bg-blue-700 rounded-xl p-4 mb-4">
            <p className="text-xs font-semibold text-blue-300 uppercase mb-2">Mini-checklist avant de commencer</p>
            <ul className="space-y-1.5 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-green-400 shrink-0">✓</span> Vous êtes propriétaire occupant</li>
              <li className="flex gap-2"><span className="text-green-400 shrink-0">✓</span> Votre maison a plus de 10 ans</li>
              <li className="flex gap-2"><span className="text-green-400 shrink-0">✓</span> Vous planifiez des travaux (ou voulez magasiner)</li>
            </ul>
          </div>
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
