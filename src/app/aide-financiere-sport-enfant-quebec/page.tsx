import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aide financiÃ¨re sport enfant QuÃ©bec 2026 â€“ Tous les programmes",
  description:
    "Toutes les aides disponibles pour financer le sport de vos enfants au QuÃ©bec en 2026 : crÃ©dits d'impÃ´t, subventions municipales, Jumpstart, camps de jour. Montants et conditions.",
  keywords: [
    "aide financiÃ¨re sport enfant QuÃ©bec 2026",
    "subvention sport enfant QuÃ©bec",
    "crÃ©dit impÃ´t sport enfant QuÃ©bec",
    "programme sport jeunesse QuÃ©bec",
  ],
};

const programmes = [
  {
    nom: "Allocation canadienne pour enfants (ACE)",
    organisme: "Gouvernement du Canada",
    montant: "Jusqu'Ã  7 787 $/enfant/an",
    description: "Paiement mensuel non imposable pour familles avec enfants de moins de 18 ans. Couvre les activitÃ©s sportives.",
    href: "/aide-famille-quebec",
    badge: "FÃ©dÃ©ral",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    nom: "Allocation famille (QuÃ©bec)",
    organisme: "Retraite QuÃ©bec",
    montant: "Jusqu'Ã  2 782 $/enfant/an",
    description: "Versements mensuels non imposables pour familles quÃ©bÃ©coises avec enfants de moins de 18 ans.",
    href: "/aide-famille-quebec",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    nom: "CrÃ©dit pour frais de garde (camps sportifs)",
    organisme: "Revenu QuÃ©bec",
    montant: "26% Ã  75% des frais",
    description: "Les camps de jour sportifs d'Ã©tÃ© sont admissibles au crÃ©dit pour frais de garde â€” jusqu'Ã  75% remboursÃ©s.",
    href: "/blog/frais-garde-enfants-quebec-2026",
    badge: "Provincial",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    nom: "Jumpstart â€“ Canadian Tire",
    organisme: "Fondation Canadian Tire",
    montant: "Jusqu'Ã  300 $ par enfant",
    description: "Programme national qui aide les enfants de familles Ã  faible revenu Ã  participer aux sports organisÃ©s.",
    href: "https://jumpstart.canadiantire.ca/fr",
    badge: "PrivÃ©",
    badgeColor: "bg-green-100 text-green-700",
    externe: true,
  },
];

const satellites = [
  {
    href: "/subvention-sport-enfant-quebec",
    titre: "Subvention sport enfant QuÃ©bec",
    desc: "ACE, allocation famille, frais de garde",
    emoji: "âš½",
  },
  {
    href: "/aide-famille-quebec",
    titre: "Aide financiÃ¨re famille QuÃ©bec",
    desc: "Tous les programmes pour les familles",
    emoji: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§",
  },
  {
    href: "/allocation-enfant-quebec",
    titre: "Allocation enfant QuÃ©bec â€“ montants",
    desc: "Calculez vos versements 2026",
    emoji: "ðŸ’°",
  },
  {
    href: "/blog/frais-garde-enfants-quebec-2026",
    titre: "CrÃ©dit frais de garde â€“ jusqu'Ã  75%",
    desc: "Camps sportifs inclus",
    emoji: "ðŸ•ï¸",
  },
];

const municipaux = [
  { ville: "MontrÃ©al", programme: "AccÃ¨s loisirs", desc: "Tarifs rÃ©duits et gratuitÃ©s pour familles Ã  faible revenu" },
  { ville: "QuÃ©bec", programme: "AccÃ¨s-Famille", desc: "RÃ©duction sur les activitÃ©s de loisirs municipales" },
  { ville: "Laval", programme: "Programme d'accessibilitÃ©", desc: "Aide aux familles Ã  revenus modestes" },
  { ville: "Longueuil", programme: "Loisirs accessibles", desc: "Tarifs adaptÃ©s selon le revenu familial" },
];

const faqs = [
  {
    q: "Y a-t-il une subvention directe pour inscrire mon enfant au soccer au QuÃ©bec ?",
    r: "Il n'existe pas de subvention provinciale ou fÃ©dÃ©rale directe pour les inscriptions sportives en 2026. Cependant, plusieurs programmes indirects couvrent ces coÃ»ts : l'ACE et l'allocation famille vous versent de l'argent utilisable pour le sport, et les camps sportifs d'Ã©tÃ© peuvent Ãªtre rÃ©clamÃ©s dans le crÃ©dit pour frais de garde (jusqu'Ã  75%). De plus, la plupart des municipalitÃ©s quÃ©bÃ©coises ont des programmes d'accÃ¨s aux loisirs pour les familles Ã  faible revenu.",
  },
  {
    q: "Les inscriptions sportives sont-elles des frais de garde admissibles ?",
    r: "Les camps sportifs de jour sont admissibles au crÃ©dit pour frais de garde d'enfants, si l'enfant a moins de 16 ans et que le camp est offert pendant que vous travaillez ou Ã©tudiez. Les inscriptions Ã  une ligue sportive le samedi matin ne sont gÃ©nÃ©ralement pas admissibles â€” le critÃ¨re est que la garde permette au parent de travailler.",
  },
  {
    q: "Comment accÃ©der au programme Jumpstart ?",
    r: "Jumpstart (Fondation Canadian Tire) aide les enfants de familles Ã  faible revenu Ã  participer au sport. La demande se fait en ligne sur le site de Jumpstart ou via un club sportif partenaire. Le programme peut couvrir les frais d'inscription, l'Ã©quipement et le transport.",
  },
  {
    q: "OÃ¹ trouver un club de soccer ou d'activitÃ©s sportives prÃ¨s de chez moi ?",
    r: "Vous pouvez trouver des clubs de soccer et d'autres sports organisÃ©s au QuÃ©bec sur soccerclubs.ca, qui rÃ©pertorie les clubs par rÃ©gion.",
  },
];

export default function AideFinanciereSportEnfantPage() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
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
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,200,66,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.05, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ color: "#F5C842", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px", opacity: 0.8 }}>
            Page de rÃ©fÃ©rence Â· Aide sport enfant QuÃ©bec 2026
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontSize: "clamp(1.6rem, 5vw, 2.2rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "12px" }}>
            Financer le sport de vos enfants au QuÃ©bec â€” toutes les aides disponibles
          </h1>
          <p style={{ color: "rgba(240,235,224,0.6)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
            ACE, allocation famille, crÃ©dits pour frais de garde, programmes municipaux et Jumpstart â€”
            une famille quÃ©bÃ©coise peut recevoir <strong style={{ color: "#F0EBE0" }}>plus de 10 000 $/an</strong> en aides
            utilisables pour les activitÃ©s sportives de ses enfants.
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

        {/* RÃ©sumÃ© */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 text-center">
          <p className="text-xs text-blue-600 uppercase font-semibold tracking-wide mb-1">Potentiel annuel estimÃ©</p>
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
                  <p className="text-blue-500 text-xs mt-0.5">DÃ©tails â†’</p>
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
                  <p className="text-blue-500 text-xs mt-0.5">DÃ©tails â†’</p>
                </div>
              </Link>
            )
          ))}
        </div>

        {/* Programmes municipaux */}
        <h2 className="text-lg font-bold text-slate-800 mb-3">Programmes municipaux</h2>
        <p className="text-slate-500 text-sm mb-4">
          La plupart des grandes villes du QuÃ©bec offrent des programmes d&apos;accÃ¨s aux loisirs pour
          les familles Ã  faible revenu. Contactez le service des loisirs de votre municipalitÃ©.
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
          <p className="font-bold text-green-800 text-base mb-2">âš½ Trouver un club prÃ¨s de chez vous</p>
          <p className="text-green-700 text-sm leading-relaxed mb-3">
            Une fois vos aides en poche, trouvez le club de soccer idÃ©al pour votre enfant.
            soccerclubs.ca rÃ©pertorie tous les clubs du QuÃ©bec par rÃ©gion, niveau et tranche d&apos;Ã¢ge.
          </p>
          <a
            href="https://soccerclubs.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 text-white font-bold px-5 py-3 rounded-xl text-sm"
          >
            Trouver un club de soccer â†’
          </a>
        </div>

        {/* Satellites */}
        <h2 className="text-lg font-bold text-slate-800 mb-4">Guides dÃ©taillÃ©s</h2>
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

        {/* CTA final */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-xl mb-2">Calculez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            ACE, allocation famille, crÃ©dits d&apos;impÃ´t â€” dÃ©couvrez tout ce Ã  quoi vous avez droit.
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
          ArgentQC.ca est un outil informatif non affiliÃ© au gouvernement. Les montants sont des estimations.
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
