import type { Metadata } from "next";
import Link from "next/link";
import { trouverProgrammes, calculerTotal, formaterArgent } from "@/lib/matching";
import type { ReponseQuestionnaire } from "@/types";

export const metadata: Metadata = {
  title: "Vos résultats – ArgentQC.ca",
  description: "Voici les programmes gouvernementaux auxquels vous pourriez avoir droit.",
};

const CATEGORIES_LABELS: Record<string, string> = {
  renovation: "Rénovation",
  energie: "Énergie",
  famille: "Famille",
  transport: "Transport",
  logement: "Logement",
  credits_impot: "Crédits d'impôt",
  sante: "Santé & aînés",
  agriculture: "Agriculture",
};

const NIVEAUX_LABELS: Record<string, { label: string; couleur: string }> = {
  federal: { label: "Fédéral", couleur: "bg-red-100 text-red-700" },
  provincial: { label: "Provincial", couleur: "bg-blue-100 text-blue-700" },
  municipal: { label: "Municipal", couleur: "bg-green-100 text-green-700" },
};

interface Props {
  searchParams: Promise<Record<string, string>>;
}

export default async function ResultatsPage({ searchParams }: Props) {
  const params = await searchParams;

  const reponses: ReponseQuestionnaire = {
    province: "QC",
    statut_logement: (params.statut_logement as ReponseQuestionnaire["statut_logement"]) ?? "proprietaire",
    situation_familiale: (params.situation_familiale as ReponseQuestionnaire["situation_familiale"]) ?? "seul",
    enfants: params.enfants === "true",
    revenu: params.revenu ?? "50000-75000",
    vehicule_elec: params.vehicule_elec ?? "non",
    renovation: params.renovation === "true",
    retraite: params.retraite === "true",
    age: params.age ?? "31-45",
  };

  const programmes = trouverProgrammes(reponses);
  const total = calculerTotal(programmes);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header sticky */}
      <header className="bg-blue-700 text-white px-4 py-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-base">
            ArgentQC.ca
          </Link>
          <Link href="/questionnaire" className="text-yellow-300 text-sm font-medium underline">
            Recommencer
          </Link>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-6">

        {/* Résumé total */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 mb-5 shadow-lg">
          <p className="text-blue-200 mb-1 text-xs uppercase tracking-wide font-semibold text-center">
            Vous pourriez récupérer jusqu&apos;à
          </p>
          <div className="text-5xl font-extrabold mb-1 text-center">
            {formaterArgent(total.max)}
          </div>
          <p className="text-blue-300 text-sm text-center mb-4">
            {programmes.length} programme{programmes.length > 1 ? "s" : ""} trouvé{programmes.length > 1 ? "s" : ""}
          </p>
          <div className="border-t border-blue-500 pt-4 flex flex-col gap-2">
            {programmes.map((prog) => (
              <div key={prog.id} className="flex items-center justify-between text-sm">
                <span className="text-blue-100 flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  {prog.nom}
                </span>
                <span className="font-bold text-white shrink-0 ml-2">{prog.montant_affiche}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pub top résultats */}
        <div className="bg-white rounded-xl border border-slate-100 p-2 mb-5">
          {/* Google AdSense – remplacer ce bloc par votre code AdSense */}
          <div className="h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs">
            Publicité
          </div>
        </div>

        {programmes.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100">
            <div className="text-4xl mb-3">🔍</div>
            <h2 className="text-lg font-bold text-slate-700 mb-2">Aucun programme trouvé</h2>
            <p className="text-slate-500 text-sm mb-5">
              Selon vos réponses, nous n&apos;avons pas trouvé de programmes correspondants.
            </p>
            <Link
              href="/questionnaire"
              className="block w-full bg-blue-700 text-white font-semibold py-3 rounded-xl text-center"
            >
              Refaire le questionnaire
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-base font-bold text-slate-700 mb-3 uppercase tracking-wide">
              Vos programmes admissibles
            </h2>

            <div className="flex flex-col gap-4">
              {programmes.map((prog) => {
                const niveau = NIVEAUX_LABELS[prog.niveau];
                return (
                  <div
                    key={prog.id}
                    className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                  >
                    {/* Montant en haut bien visible */}
                    <div className="bg-green-50 border-b border-green-100 px-4 py-3 flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${niveau.couleur}`}>
                          {niveau.label}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {CATEGORIES_LABELS[prog.categorie] ?? prog.categorie}
                        </span>
                      </div>
                      <span className="text-green-700 font-extrabold text-base shrink-0 ml-2">
                        {prog.montant_affiche}
                      </span>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-slate-800 text-base leading-snug mb-0.5">
                        {prog.nom}
                      </h3>
                      <p className="text-slate-400 text-xs mb-3">{prog.organisme}</p>

                      <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                        {prog.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-slate-500 uppercase mb-1.5">
                          Conditions
                        </p>
                        <ul className="space-y-1">
                          {prog.conditions.map((c, i) => (
                            <li key={i} className="text-sm text-slate-600 flex gap-2 leading-snug">
                              <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={prog.lien_officiel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold py-3 rounded-xl text-center"
                      >
                        Faire une demande →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pub milieu */}
            <div className="bg-white rounded-xl border border-slate-100 p-2 my-5">
              {/* Google AdSense – remplacer ce bloc par votre code AdSense */}
              <div className="h-16 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs">
                Publicité
              </div>
            </div>

            {/* CTA refaire */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
              <p className="text-slate-700 font-medium text-sm mb-3">
                Votre situation a changé ? Recalculez vos aides.
              </p>
              <Link
                href="/questionnaire"
                className="block w-full bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-xl text-center"
              >
                Refaire le questionnaire
              </Link>
            </div>
          </>
        )}

        {/* Avertissement légal */}
        <p className="text-slate-400 text-xs text-center mt-6 leading-relaxed">
          Les montants affichés sont des estimations à titre informatif. L&apos;admissibilité finale
          dépend des critères officiels de chaque programme. Consultez toujours les sites
          gouvernementaux pour confirmer votre situation.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-5 px-4 mt-4">
        <div className="max-w-lg mx-auto text-center text-xs">
          ArgentQC.ca – Outil informatif non affilié au gouvernement.
        </div>
      </footer>
    </main>
  );
}
