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
    href: "/subvention-thermopompe-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
    categorie: "Énergie",
  },
  {
    nom: "Rénoclimat",
    organisme: "Transition énergétique Québec",
    montant: "100 $ – 10 000 $",
    href: "/reno-climat-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
    categorie: "Rénovation",
  },
  {
    nom: "Crédit rénovations multigénérationnelles",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'à 7 500 $",
    href: "/subvention-renovation-quebec",
    badge: "Fédéral",
    badgeColor: "bg-red-100 text-red-700",
    categorie: "Rénovation",
  },
  {
    nom: "Crédit accessibilité domiciliaire (CIHA)",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'à 3 750 $",
    href: "/subvention-renovation-quebec",
    badge: "Fédéral",
    badgeColor: "bg-red-100 text-red-700",
    categorie: "Rénovation",
  },
  {
    nom: "RAP – Régime d'accession à la propriété",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'à 35 000 $ / personne",
    href: "/questionnaire",
    badge: "Fédéral",
    badgeColor: "bg-red-100 text-red-700",
    categorie: "Achat",
  },
  {
    nom: "Borne de recharge – Roulez vert",
    organisme: "Transition énergétique Québec",
    montant: "600 $",
    href: "/borne-recharge-quebec",
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

const travauxAdmissibles = [
  { type: "Thermopompe air-air ou air-eau", programmes: "LogisVert + Rénoclimat", montant: "Jusqu'à 9 700 $", href: "/subvention-thermopompe-quebec" },
  { type: "Isolation des murs, grenier, sous-sol", programmes: "Rénoclimat", montant: "Jusqu'à 5 000 $", href: "/subvention-isolation-quebec" },
  { type: "Fenêtres et portes extérieures", programmes: "Rénoclimat", montant: "Variable selon cote ÉnerGuide", href: "/reno-climat-quebec" },
  { type: "Ventilateur récupérateur de chaleur (VRC)", programmes: "Rénoclimat", montant: "Variable selon cote ÉnerGuide", href: "/reno-climat-quebec" },
  { type: "Borne de recharge niveau 2 à domicile", programmes: "Roulez vert", montant: "600 $", href: "/borne-recharge-quebec" },
  { type: "Logement secondaire pour aîné/handicapé", programmes: "Crédit multigénérationnel", montant: "Jusqu'à 7 500 $", href: "/subvention-renovation-quebec" },
  { type: "Travaux d'accessibilité (rampe, salle de bain…)", programmes: "CIHA fédéral", montant: "Jusqu'à 3 750 $", href: "/subvention-renovation-quebec" },
];

const satellites = [
  { href: "/subvention-thermopompe-quebec", titre: "Subvention thermopompe Québec 2026", desc: "LogisVert + Rénoclimat, jusqu'à 9 700 $", emoji: "🌡️" },
  { href: "/subvention-isolation-quebec", titre: "Subvention isolation maison Québec 2026", desc: "Rénoclimat — isolation murs, grenier, sous-sol", emoji: "🧱" },
  { href: "/reno-climat-quebec", titre: "Guide Rénoclimat Québec 2026 — étape par étape", desc: "Comment faire votre demande et maximiser votre subvention", emoji: "📋" },
  { href: "/borne-recharge-quebec", titre: "Subvention borne de recharge Québec 2026", desc: "600 $ pour installer une borne à domicile", emoji: "⚡" },
  { href: "/subvention-renovation-quebec", titre: "Subvention rénovation Québec 2026", desc: "Crédits fédéraux, multigénérationnel, accessibilité", emoji: "🔨" },
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
      <header style={{ background: "#060D1A", position: "sticky", top: 0, zIndex: 10, padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/questionnaire" style={{ color: "#F5C842", fontSize: "13px", fontWeight: 600, textDecoration: "underline", opacity: 0.85 }}>
            Calculer mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "#060D1A", position: "relative", overflow: "hidden" }} className="px-5 py-12">
        <div className="max-w-2xl mx-auto">
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <p style={{ color: "#F5C842", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8, position: "relative" }}>
            Guide de référence · Aide rénovation Québec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px", position: "relative" }}>
            Liste des subventions maison Québec 2026 (thermopompe, rénovation, énergie)
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px", position: "relative" }}>
            Voici la liste complète des subventions maison au Québec en 2026, mise à jour selon les programmes gouvernementaux actuels.
          </p>

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
            style={{ display: "block", background: "#F5C842", color: "#060D1A", fontWeight: 800, fontSize: "15px", padding: "14px", borderRadius: "14px", textAlign: "center", textDecoration: "none", boxShadow: "0 0 28px rgba(245,200,66,0.2)", position: "relative" }}
          >
            Calculer mes aides personnalisées →
          </Link>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", textAlign: "center", marginTop: "8px", position: "relative" }}>Gratuit · 2 minutes · estimation personnalisée</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* H2 : Quelles subventions disponibles */}
        <h2 className="text-xl font-bold text-slate-800 mb-2">Quelles sont les subventions maison disponibles en 2026 ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          Le gouvernement du Québec et le gouvernement fédéral offrent plusieurs programmes d&apos;aide financière
          pour les propriétaires en 2026. Ces aides énergie et rénovation au Québec peuvent être cumulées
          pour maximiser votre remboursement.
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

        {/* H2 : Quels travaux admissibles */}
        <h2 className="text-xl font-bold text-slate-800 mb-2">Quels travaux sont admissibles aux subventions ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Tous les travaux ne sont pas subventionnés de la même façon. Voici les travaux les plus
          courants et les programmes auxquels ils donnent accès :
        </p>
        <div className="flex flex-col gap-2 mb-10">
          {travauxAdmissibles.map((t) => (
            <Link
              key={t.type}
              href={t.href}
              className="bg-white rounded-xl border border-slate-100 px-4 py-3 flex items-center justify-between hover:border-blue-200 transition-colors"
            >
              <div className="flex-1 min-w-0 mr-3">
                <p className="font-semibold text-slate-800 text-sm">{t.type}</p>
                <p className="text-slate-400 text-xs mt-0.5">{t.programmes}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-green-700 text-xs">{t.montant}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* H2 : Combien pouvez-vous recevoir */}
        <h2 className="text-xl font-bold text-slate-800 mb-2">Combien pouvez-vous recevoir en subventions au Québec ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Le chiffre de 50 000 $ est la somme réelle que peut atteindre un propriétaire qui cumule
          intelligemment les programmes provinciaux et fédéraux. Voici comment on y arrive :
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
          </p>
        </div>

        {/* H2 : Qui est admissible */}
        <h2 className="text-xl font-bold text-slate-800 mb-2 mt-8">Qui est admissible aux subventions maison au Québec ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Les critères varient selon le programme, mais voici les conditions générales pour la majorité
          des aides disponibles en 2026 :
        </p>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-3">
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
        <h2 className="text-xl font-bold text-slate-800 mb-2">Comment faire une demande de subvention maison ?</h2>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-10">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Voici comment procéder pour obtenir vos subventions maison au Québec en 2026 :
          </p>
          <div className="space-y-3 mb-4">
            {[
              { num: "1", titre: "Vérifiez votre admissibilité", texte: "Utilisez notre questionnaire gratuit pour voir tous les programmes auxquels vous avez droit — 2 minutes." },
              { num: "2", titre: "Faites l'évaluation énergétique (si requis)", texte: "Obligatoire pour Rénoclimat — à commander AVANT les travaux via un conseiller accrédité." },
              { num: "3", titre: "Obtenez des soumissions d'entrepreneurs certifiés RBQ", texte: "Comparez au moins 3 soumissions. L'entrepreneur doit être certifié RBQ." },
              { num: "4", titre: "Réalisez les travaux", texte: "Conservez toutes les factures et contrats. Prenez des photos avant/après." },
              { num: "5", titre: "Soumettez votre demande", texte: "Délais max : 9 mois après installation (LogisVert) ; après 2e évaluation (Rénoclimat)." },
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

        {/* Guides détaillés — liens SEO exacts */}
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
          <p className="text-blue-300 text-xs text-center mt-2">Gratuit · 2 minutes · estimation personnalisée</p>
        </div>

        <p className="text-slate-400 text-xs text-center leading-relaxed">
          ArgentQC.ca est un outil informatif non affilié au gouvernement. Les montants sont des
          estimations — consultez toujours les sites officiels pour confirmer votre admissibilité.
        </p>
      </div>

      <footer style={{ background: "#060D1A", padding: "24px 16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F5C842", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié au gouvernement.</p>
          <a href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contactez-nous</a>
        </div>
      </footer>
    </main>
  );
}
