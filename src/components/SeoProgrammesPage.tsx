import Link from "next/link";
import type { Programme } from "@/types";

const NIVEAUX_LABELS: Record<string, { label: string; couleur: string }> = {
  federal: { label: "Fédéral", couleur: "bg-red-100 text-red-700" },
  provincial: { label: "Provincial", couleur: "bg-blue-100 text-blue-700" },
  municipal: { label: "Municipal", couleur: "bg-green-100 text-green-700" },
};

interface FaqItem {
  question: string;
  reponse: string;
}

interface PageReliee {
  href: string;
  titre: string;
}

interface Props {
  titre: string;
  sousTitre: string;
  intro: string;
  programmes: Programme[];
  faqs: FaqItem[];
  motCle: string;
  pagesRelies?: PageReliee[];
}

export default function SeoProgrammesPage({
  titre,
  sousTitre,
  intro,
  programmes,
  faqs,
  motCle,
  pagesRelies,
}: Props) {
  const totalMax = programmes.reduce((acc, p) => acc + p.montant_max, 0);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-blue-700 text-white px-4 py-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-base">
            ArgentQC.ca
          </Link>
          <Link href="/questionnaire" className="text-yellow-300 text-sm font-medium underline">
            Calculer mes aides
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white px-5 py-10">
        <div className="max-w-lg mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-wide font-semibold mb-2">
            {motCle}
          </p>
          <h1 className="text-2xl font-extrabold leading-tight mb-3">{titre}</h1>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">{sousTitre}</p>
          <Link
            href="/questionnaire"
            className="block w-full bg-yellow-400 text-blue-900 font-bold text-base py-4 rounded-2xl text-center"
          >
            Calculer mes aides personnalisées →
          </Link>
        </div>
      </section>

      <div className="max-w-lg mx-auto px-4 py-6">

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 mb-5">
          <p className="text-slate-700 text-sm leading-relaxed">{intro}</p>
        </div>

        {/* Résumé */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-5 text-center">
          <p className="text-xs text-blue-600 uppercase font-semibold tracking-wide mb-1">
            Potentiel total estimé
          </p>
          <p className="text-3xl font-extrabold text-blue-800">
            {new Intl.NumberFormat("fr-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(totalMax)}
          </p>
          <p className="text-xs text-blue-500 mt-1">{programmes.length} programmes disponibles</p>
        </div>

        {/* Liste des programmes */}
        <h2 className="text-base font-bold text-slate-700 uppercase tracking-wide mb-3">
          Programmes disponibles
        </h2>

        <div className="flex flex-col gap-4 mb-8">
          {programmes.map((prog) => {
            const niveau = NIVEAUX_LABELS[prog.niveau];
            return (
              <div key={prog.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-green-50 border-b border-green-100 px-4 py-3 flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${niveau.couleur}`}>
                      {niveau.label}
                    </span>
                  </div>
                  <span className="text-green-700 font-extrabold text-base shrink-0 ml-2">
                    {prog.montant_affiche}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-800 text-base leading-snug mb-1">
                    {prog.nom}
                  </h3>
                  <p className="text-slate-400 text-xs mb-3">{prog.organisme}</p>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">{prog.description}</p>
                  <ul className="space-y-1 mb-4">
                    {prog.conditions.map((c, i) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2 leading-snug">
                        <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={prog.lien_officiel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-700 text-white text-sm font-semibold py-3 rounded-xl text-center"
                  >
                    Faire une demande →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ */}
        <h2 className="text-base font-bold text-slate-700 uppercase tracking-wide mb-3">
          Questions fréquentes
        </h2>
        <div className="flex flex-col gap-3 mb-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
              <h3 className="font-bold text-slate-800 text-sm mb-2">{faq.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.reponse}</p>
            </div>
          ))}
        </div>

        {/* Pages reliées */}
        {pagesRelies && pagesRelies.length > 0 && (
          <div className="mb-8">
            <h2 className="text-base font-bold text-slate-700 uppercase tracking-wide mb-3">
              Pages reliées
            </h2>
            <div className="flex flex-col gap-2">
              {pagesRelies.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-center justify-between bg-white border border-slate-100 rounded-xl px-4 py-3 hover:border-blue-200 transition-colors"
                >
                  <span className="text-slate-700 text-sm font-medium">{page.titre}</span>
                  <span className="text-blue-500 text-sm shrink-0 ml-2">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA final */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg mb-1">Trouvez tout ce à quoi vous avez droit</p>
          <p className="text-blue-200 text-sm mb-4">
            Répondez à 8 questions — résultats personnalisés en 2 minutes.
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
        <div className="max-w-lg mx-auto text-center text-xs">
          ArgentQC.ca – Outil informatif non affilié au gouvernement.
        </div>
      </footer>
    </main>
  );
}
