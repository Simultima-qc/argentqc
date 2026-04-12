import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liste des subventions maison QuÃ©bec 2026 (thermopompe, rÃ©novation, Ã©nergie)",
  description:
    "Guide complet des subventions maison au QuÃ©bec en 2026 : thermopompe, isolation, rÃ©novation Ã©coÃ©nergÃ©tique, premier acheteur. Montants, admissibilitÃ© et liens officiels.",
  keywords: [
    "subventions maison QuÃ©bec 2026",
    "aide rÃ©novation QuÃ©bec",
    "subvention thermopompe QuÃ©bec",
    "programme rÃ©novation QuÃ©bec",
    "aide Ã©nergie QuÃ©bec",
    "aide financiÃ¨re maison QuÃ©bec",
    "subvention isolation maison QuÃ©bec",
    "RÃ©noclimat 2026",
    "LogisVert Hydro-QuÃ©bec",
  ],
};

const programmes = [
  {
    nom: "LogisVert â€“ Thermopompe",
    organisme: "Hydro-QuÃ©bec",
    montant: "Jusqu'Ã  6 700 $",
    href: "/subvention-thermopompe-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
    categorie: "Ã‰nergie",
  },
  {
    nom: "RÃ©noclimat",
    organisme: "Transition Ã©nergÃ©tique QuÃ©bec",
    montant: "100 $ â€“ 10 000 $",
    href: "/reno-climat-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
    categorie: "RÃ©novation",
  },
  {
    nom: "CrÃ©dit rÃ©novations multigÃ©nÃ©rationnelles",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'Ã  7 500 $",
    href: "/subvention-renovation-quebec",
    badge: "FÃ©dÃ©ral",
    badgeColor: "bg-red-100 text-red-700",
    categorie: "RÃ©novation",
  },
  {
    nom: "CrÃ©dit accessibilitÃ© domiciliaire (CIHA)",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'Ã  3 750 $",
    href: "/subvention-renovation-quebec",
    badge: "FÃ©dÃ©ral",
    badgeColor: "bg-red-100 text-red-700",
    categorie: "RÃ©novation",
  },
  {
    nom: "RAP â€“ RÃ©gime d'accession Ã  la propriÃ©tÃ©",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'Ã  35 000 $ / personne",
    href: "/questionnaire",
    badge: "FÃ©dÃ©ral",
    badgeColor: "bg-red-100 text-red-700",
    categorie: "Achat",
  },
  {
    nom: "Chauffez vert",
    organisme: "Transition Ã©nergÃ©tique QuÃ©bec",
    montant: "1 000 $ â€“ 5 000 $",
    href: "/chauffez-vert-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
    categorie: "Ã‰nergie",
  },
  {
    nom: "Borne de recharge â€“ Roulez vert",
    organisme: "Transition Ã©nergÃ©tique QuÃ©bec",
    montant: "600 $",
    href: "/borne-recharge-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
    categorie: "Transport",
  },
];

const cumuls = [
  { programme: "LogisVert â€“ Thermopompe", montant: "6 700 $", organisme: "Hydro-QuÃ©bec" },
  { programme: "RÃ©noclimat (isolation, fenÃªtres, VRCâ€¦)", montant: "10 000 $", organisme: "TEQ" },
  { programme: "RÃ©novations multigÃ©nÃ©rationnelles", montant: "7 500 $", organisme: "FÃ©dÃ©ral" },
  { programme: "CrÃ©dit accessibilitÃ© domiciliaire (CIHA)", montant: "3 750 $", organisme: "FÃ©dÃ©ral" },
  { programme: "RAP REER (premier acheteur)", montant: "35 000 $ / personne", organisme: "FÃ©dÃ©ral" },
  { programme: "Chauffez vert (remplacement mazout/propane)", montant: "5 000 $", organisme: "TEQ" },
  { programme: "Borne de recharge Roulez vert", montant: "600 $", organisme: "TEQ" },
];

const travauxAdmissibles = [
  { type: "Thermopompe air-air ou air-eau", programmes: "LogisVert + RÃ©noclimat", montant: "Jusqu'Ã  9 700 $", href: "/subvention-thermopompe-quebec" },
  { type: "Isolation des murs, grenier, sous-sol", programmes: "RÃ©noclimat", montant: "Jusqu'Ã  5 000 $", href: "/subvention-isolation-quebec" },
  { type: "FenÃªtres et portes extÃ©rieures", programmes: "RÃ©noclimat", montant: "Variable selon cote Ã‰nerGuide", href: "/reno-climat-quebec" },
  { type: "Ventilateur rÃ©cupÃ©rateur de chaleur (VRC)", programmes: "RÃ©noclimat", montant: "Variable selon cote Ã‰nerGuide", href: "/reno-climat-quebec" },
  { type: "Remplacement chauffage mazout/propane/gaz", programmes: "Chauffez vert", montant: "1 000 $ â€“ 5 000 $", href: "/chauffez-vert-quebec" },
  { type: "Borne de recharge niveau 2 Ã  domicile", programmes: "Roulez vert", montant: "600 $", href: "/borne-recharge-quebec" },
  { type: "Logement secondaire pour aÃ®nÃ©/handicapÃ©", programmes: "CrÃ©dit multigÃ©nÃ©rationnel", montant: "Jusqu'Ã  7 500 $", href: "/subvention-renovation-quebec" },
  { type: "Travaux d'accessibilitÃ© (rampe, salle de bainâ€¦)", programmes: "CIHA fÃ©dÃ©ral", montant: "Jusqu'Ã  3 750 $", href: "/subvention-renovation-quebec" },
];

const satellites = [
  { href: "/subvention-thermopompe-quebec", titre: "Subvention thermopompe QuÃ©bec 2026", desc: "LogisVert + RÃ©noclimat, jusqu'Ã  9 700 $", emoji: "ðŸŒ¡ï¸" },
  { href: "/subvention-isolation-quebec", titre: "Subvention isolation maison QuÃ©bec 2026", desc: "RÃ©noclimat â€” isolation murs, grenier, sous-sol", emoji: "ðŸ§±" },
  { href: "/reno-climat-quebec", titre: "Guide RÃ©noclimat QuÃ©bec 2026 â€” Ã©tape par Ã©tape", desc: "Comment faire votre demande et maximiser votre subvention", emoji: "ðŸ“‹" },
  { href: "/borne-recharge-quebec", titre: "Subvention borne de recharge QuÃ©bec 2026", desc: "600 $ pour installer une borne Ã  domicile", emoji: "âš¡" },
  { href: "/subvention-renovation-quebec", titre: "Subvention rÃ©novation QuÃ©bec 2026", desc: "CrÃ©dits fÃ©dÃ©raux, multigÃ©nÃ©rationnel, accessibilitÃ©", emoji: "ðŸ”¨" },
  { href: "/chauffez-vert-quebec", titre: "Chauffez vert QuÃ©bec 2026", desc: "Abandonnez le mazout â€” jusqu'Ã  11 700 $ cumulables", emoji: "ðŸ”¥" },
];

const faqs = [
  {
    q: "Peut-on cumuler plusieurs subventions pour la mÃªme maison ?",
    r: "Oui, dans la majoritÃ© des cas. Par exemple, pour une thermopompe, vous pouvez cumuler LogisVert (Hydro-QuÃ©bec) et RÃ©noclimat pour un total allant jusqu'Ã  9 700 $. Les programmes fÃ©dÃ©raux et provinciaux sont gÃ©nÃ©ralement cumulables. Utilisez notre questionnaire pour voir tout ce Ã  quoi vous avez droit.",
  },
  {
    q: "Est-ce que je dois Ãªtre propriÃ©taire pour avoir droit aux subventions maison ?",
    r: "La plupart des subventions pour la maison (RÃ©noclimat, LogisVert, CIHA) sont rÃ©servÃ©es aux propriÃ©taires. Cependant, certains programmes comme la borne de recharge sont accessibles aux locataires avec l'accord du propriÃ©taire. Le RAP s'adresse aux acheteurs d'une premiÃ¨re propriÃ©tÃ©.",
  },
  {
    q: "Ma maison doit-elle avoir quel Ã¢ge pour Ãªtre admissible Ã  RÃ©noclimat ?",
    r: "RÃ©noclimat est accessible aux maisons construites avant 2012. Les maisons plus rÃ©centes sont gÃ©nÃ©ralement trop efficaces pour bÃ©nÃ©ficier du programme, car leur cote Ã©nergÃ©tique de dÃ©part est dÃ©jÃ  Ã©levÃ©e.",
  },
  {
    q: "Combien de temps faut-il pour recevoir les subventions ?",
    r: "Les dÃ©lais varient selon le programme : LogisVert (Hydro-QuÃ©bec) prend 4 Ã  8 semaines, RÃ©noclimat prend 8 Ã  16 semaines aprÃ¨s la deuxiÃ¨me Ã©valuation Ã©nergÃ©tique. Planifiez vos travaux en consÃ©quence.",
  },
  {
    q: "Faut-il un entrepreneur certifiÃ© pour avoir droit aux subventions ?",
    r: "Oui, pour la majoritÃ© des programmes. RÃ©noclimat et LogisVert exigent que les travaux soient rÃ©alisÃ©s par un entrepreneur certifiÃ© RBQ. Assurez-vous d'obtenir un devis d'un entrepreneur qualifiÃ© avant de commencer.",
  },
  {
    q: "Y a-t-il un plafond de revenu pour avoir droit aux subventions maison ?",
    r: "La plupart des programmes (RÃ©noclimat, LogisVert, CIHA) n'ont pas de plafond de revenu â€” ils sont ouverts Ã  tous les propriÃ©taires admissibles. Certains programmes offrent toutefois des bonifications pour les mÃ©nages Ã  faible ou moyen revenu. Par exemple, RÃ©noclimat peut accorder une aide supplÃ©mentaire aux propriÃ©taires Ã  revenus modestes.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.r,
    },
  })),
};

const programmeSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Subventions maison QuÃ©bec 2026",
  "itemListElement": programmes.map((prog, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": prog.nom,
    "description": `${prog.organisme} â€” ${prog.montant}`,
    "url": `https://argentqc.ca${prog.href}`,
  })),
};

export default function SubventionsMaisonPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programmeSchema) }}
      />
      {/* Header */}
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
        <div className="max-w-2xl mx-auto">
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <p style={{ color: "#F5C842", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8, position: "relative" }}>
            Guide de rÃ©fÃ©rence Â· Aide rÃ©novation QuÃ©bec 2026 Â· <time dateTime="2026-03">Mis Ã  jour mars 2026</time>
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px", position: "relative" }}>
            Liste des subventions maison QuÃ©bec 2026 (thermopompe, rÃ©novation, Ã©nergie)
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px", position: "relative" }}>
            Voici la liste complÃ¨te des subventions maison au QuÃ©bec en 2026, mise Ã  jour selon les programmes gouvernementaux actuels.
          </p>

          {/* Bloc En rÃ©sumÃ© */}
          <div className="bg-blue-800 border border-blue-600 rounded-2xl p-5 mb-6">
            <p className="font-bold text-white text-sm mb-3 uppercase tracking-wide">En rÃ©sumÃ©</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-yellow-400 shrink-0">ðŸ’°</span><span className="text-blue-100">Jusqu&apos;Ã  <strong>50 000 $</strong>{" "}cumulables en subventions et crÃ©dits</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 shrink-0">ðŸ </span><span className="text-blue-100">Principales aides : thermopompe, isolation, rÃ©novation Ã©coÃ©nergÃ©tique</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 shrink-0">â±</span><span className="text-blue-100">DÃ©lai pour recevoir les fonds : 4 Ã  16 semaines selon le programme</span></li>
              <li className="flex items-start gap-2"><span className="text-yellow-400 shrink-0">âœ…</span><span className="text-blue-100">AdmissibilitÃ© de base : propriÃ©taire occupant, maison construite avant 2012</span></li>
            </ul>
          </div>

          <Link
            href="/questionnaire"
            style={{ display: "block", background: "#F5C842", color: "#060D1A", fontWeight: 800, fontSize: "15px", padding: "14px", borderRadius: "14px", textAlign: "center", textDecoration: "none", boxShadow: "0 0 28px rgba(245,200,66,0.2)", position: "relative" }}
          >
            Trouver mes aides â†’
          </Link>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "12px", textAlign: "center", marginTop: "8px", position: "relative" }}>Gratuit Â· 2 minutes Â· estimation personnalisÃ©e</p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* H2 : Quelles subventions disponibles */}
        <h2 className="text-xl font-bold text-slate-800 mb-2">Quelles sont les subventions maison disponibles en 2026 ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          Le gouvernement du QuÃ©bec et le gouvernement fÃ©dÃ©ral offrent plusieurs programmes d&apos;aide financiÃ¨re
          pour les propriÃ©taires en 2026. Ces aides Ã©nergie et rÃ©novation au QuÃ©bec peuvent Ãªtre cumulÃ©es
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
                <p className="text-blue-500 text-xs mt-0.5">DÃ©tails â†’</p>
              </div>
            </Link>
          ))}
        </div>

        {/* H2 : Quels travaux admissibles */}
        <h2 className="text-xl font-bold text-slate-800 mb-2">Quels travaux sont admissibles aux subventions ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Tous les travaux ne sont pas subventionnÃ©s de la mÃªme faÃ§on. Voici les travaux les plus
          courants et les programmes auxquels ils donnent accÃ¨s :
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
        <h2 className="text-xl font-bold text-slate-800 mb-2">Combien pouvez-vous recevoir en subventions au QuÃ©bec ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Le chiffre de 50 000 $ est la somme rÃ©elle que peut atteindre un propriÃ©taire qui cumule
          intelligemment les programmes provinciaux et fÃ©dÃ©raux. Voici comment on y arrive :
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
            <p className="font-bold text-sm">Total cumulable (scÃ©nario optimal)</p>
            <p className="font-extrabold text-lg shrink-0 ml-2">&gt; 50 000 $</p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            * Le RAP REER s&apos;applique Ã  l&apos;achat d&apos;une premiÃ¨re propriÃ©tÃ© uniquement.
            Les autres programmes s&apos;appliquent Ã  la rÃ©novation d&apos;une propriÃ©tÃ© existante.
          </p>
        </div>

        {/* H2 : Qui est admissible */}
        <h2 className="text-xl font-bold text-slate-800 mb-2 mt-8">Qui est admissible aux subventions maison au QuÃ©bec ?</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Les critÃ¨res varient selon le programme, mais voici les conditions gÃ©nÃ©rales pour la majoritÃ©
          des aides disponibles en 2026 :
        </p>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-3">
          <div className="space-y-3">
            {[
              { label: "Statut", valeur: "PropriÃ©taire occupant (rÃ©sidence principale)" },
              { label: "AnnÃ©e de construction", valeur: "Avant 2012 pour RÃ©noclimat ; aucune restriction pour LogisVert et CIHA" },
              { label: "Type de bÃ¢timent", valeur: "Unifamiliale, jumelÃ©e, maison de ville, petit immeuble de 1 Ã  4 logements" },
              { label: "Localisation", valeur: "Partout au QuÃ©bec â€” programmes provinciaux et fÃ©dÃ©raux disponibles" },
              { label: "Revenu", valeur: "Aucun plafond pour la plupart des programmes ; bonifications pour mÃ©nages Ã  faible revenu" },
              { label: "Type de travaux", valeur: "Isolation, thermopompe, fenÃªtres, VRC, borne de recharge, accessibilitÃ©" },
              { label: "Entrepreneur", valeur: "CertifiÃ© RBQ obligatoire pour RÃ©noclimat et LogisVert" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 text-sm border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                <span className="text-green-500 shrink-0 mt-0.5">âœ“</span>
                <div>
                  <span className="font-semibold text-slate-800">{item.label} :</span>{" "}
                  <span className="text-slate-600">{item.valeur}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-10">
          <p className="text-amber-800 text-xs font-semibold mb-1">âš ï¸ Important</p>
          <p className="text-amber-700 text-xs leading-relaxed">
            Pour RÃ©noclimat, l&apos;Ã©valuation Ã©nergÃ©tique doit Ãªtre faite <strong>avant</strong>{" "}le dÃ©but des travaux.
            Toute demande soumise aprÃ¨s les travaux sans Ã©valuation prÃ©alable sera rejetÃ©e.
          </p>
        </div>

        {/* H2 : Comment faire une demande */}
        <h2 className="text-xl font-bold text-slate-800 mb-2">Comment faire une demande de subvention maison ?</h2>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-10">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Voici comment procÃ©der pour obtenir vos subventions maison au QuÃ©bec en 2026 :
          </p>
          <div className="space-y-3 mb-4">
            {[
              { num: "1", titre: "VÃ©rifiez votre admissibilitÃ©", texte: "Utilisez notre questionnaire gratuit pour voir tous les programmes auxquels vous avez droit â€” 2 minutes." },
              { num: "2", titre: "Faites l'Ã©valuation Ã©nergÃ©tique (si requis)", texte: "Obligatoire pour RÃ©noclimat â€” Ã  commander AVANT les travaux via un conseiller accrÃ©ditÃ©." },
              { num: "3", titre: "Obtenez des soumissions d'entrepreneurs certifiÃ©s RBQ", texte: "Comparez au moins 3 soumissions. L'entrepreneur doit Ãªtre certifiÃ© RBQ." },
              { num: "4", titre: "RÃ©alisez les travaux", texte: "Conservez toutes les factures et contrats. Prenez des photos avant/aprÃ¨s." },
              { num: "5", titre: "Soumettez votre demande", texte: "DÃ©lais max : 9 mois aprÃ¨s installation (LogisVert) ; aprÃ¨s 2e Ã©valuation (RÃ©noclimat)." },
              { num: "6", titre: "Recevez votre subvention", texte: "Par dÃ©pÃ´t direct ou chÃ¨que, en 4 Ã  16 semaines selon le programme." },
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
              VÃ©rifier mon admissibilitÃ© â†’
            </Link>
            <a href="https://www.hydroquebec.com/residentiel/mieux-consommer/conseils/fenetres-chauffage-climatisation/thermopompes/aide-financiere.html" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 font-medium py-2">
              LogisVert officiel â†—
            </a>
            <a href="https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/renoclimat" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 font-medium py-2">
              RÃ©noclimat officiel â†—
            </a>
          </div>
        </div>

        {/* Guides dÃ©taillÃ©s â€” liens SEO exacts */}
        <h2 className="text-xl font-bold text-slate-800 mb-4">Guides dÃ©taillÃ©s par programme</h2>
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

        {/* Liens internes vers autres piliers */}
        <div className="grid grid-cols-1 gap-3 mb-10">
          <Link href="/cout-vie-quebec" className="flex items-center gap-3 bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 hover:border-blue-200 transition-colors">
            <span className="text-xl shrink-0">ðŸ“Š</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-700 text-sm">CoÃ»t de la vie au QuÃ©bec 2026</div>
              <div className="text-slate-400 text-xs mt-0.5">Budget mensuel par profil + toutes les aides</div>
            </div>
            <span className="text-blue-500 text-sm shrink-0">â†’</span>
          </Link>
          <Link href="/questionnaire" className="flex items-center gap-3 bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 hover:border-blue-200 transition-colors">
            <span className="text-xl shrink-0">ðŸ’¡</span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-700 text-sm">Toutes les aides financiÃ¨res au QuÃ©bec</div>
              <div className="text-slate-400 text-xs mt-0.5">Questionnaire personnalisÃ© en 2 minutes</div>
            </div>
            <span className="text-blue-500 text-sm shrink-0">â†’</span>
          </Link>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-slate-800 mb-4">Questions frÃ©quentes â€” subventions maison QuÃ©bec</h2>
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
            RÃ©pondez Ã  8 questions â€” liste personnalisÃ©e avec montants estimÃ©s.
          </p>
          <div className="bg-blue-700 rounded-xl p-4 mb-4">
            <p className="text-xs font-semibold text-blue-300 uppercase mb-2">Mini-checklist avant de commencer</p>
            <ul className="space-y-1.5 text-sm text-blue-100">
              <li className="flex gap-2"><span className="text-green-400 shrink-0">âœ“</span> Vous Ãªtes propriÃ©taire occupant</li>
              <li className="flex gap-2"><span className="text-green-400 shrink-0">âœ“</span> Votre maison a plus de 10 ans</li>
              <li className="flex gap-2"><span className="text-green-400 shrink-0">âœ“</span> Vous planifiez des travaux (ou voulez magasiner)</li>
            </ul>
          </div>
          <Link
            href="/questionnaire"
            className="block w-full bg-yellow-400 text-blue-900 font-bold py-4 rounded-2xl text-center"
          >
            Commencer le questionnaire â†’
          </Link>
          <p className="text-blue-300 text-xs text-center mt-2">Gratuit Â· 2 minutes Â· estimation personnalisÃ©e</p>
        </div>

        <p className="text-slate-400 text-xs text-center leading-relaxed">
          ArgentQC.ca est un outil informatif non affiliÃ© au gouvernement. Les montants sont des
          estimations â€” consultez toujours les sites officiels pour confirmer votre admissibilitÃ©.
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
