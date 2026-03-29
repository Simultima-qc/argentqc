import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rénoclimat 2026 : Guide complet pour obtenir votre subvention",
  description:
    "Tout sur Rénoclimat en 2026 : montants jusqu'à 10 000 $, travaux admissibles, étapes de demande et comment cumuler avec LogisVert Hydro-Québec.",
  keywords: ["Rénoclimat 2026", "subvention Rénoclimat", "comment faire demande Rénoclimat", "Rénoclimat montant"],
};

export default function ArticleRenoclimat() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-blue-700 text-white px-4 py-4 shadow-md">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-base">ArgentQC.ca</Link>
          <Link href="/blog" className="text-blue-200 text-sm">← Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        {/* En-tête article */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Rénovation</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 29 mars 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Rénoclimat 2026 : Guide complet pour obtenir votre subvention
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Rénoclimat est le programme phare de subvention à la rénovation écoénergétique au Québec.
            En 2026, les propriétaires peuvent obtenir jusqu&apos;à <strong>10 000 $</strong> pour améliorer l&apos;efficacité
            énergétique de leur maison. Voici tout ce qu&apos;il faut savoir.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Subvention de <strong>100 $ à 10 000 $</strong> selon les travaux</li>
            <li>✓ Cumulable avec LogisVert Hydro-Québec (jusqu&apos;à 6 700 $ de plus)</li>
            <li>✓ Évaluation énergétique obligatoire avant ET après les travaux</li>
            <li>✓ Maisons construites avant 2012 seulement</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi Rénoclimat exactement ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Rénoclimat est un programme administré par Transition énergétique Québec (TEQ) qui offre des subventions
            aux propriétaires résidentiels pour améliorer l&apos;efficacité énergétique de leur logement.
            L&apos;objectif est de réduire la consommation d&apos;énergie des bâtiments résidentiels, ce qui
            bénéficie à la fois au portefeuille du propriétaire et à l&apos;environnement.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Contrairement à plusieurs autres programmes, Rénoclimat est basé sur une <strong>évaluation énergétique</strong> :
            un conseiller certifié évalue votre maison avant les travaux, puis une deuxième évaluation après
            les travaux confirme l&apos;amélioration. C&apos;est cette différence qui détermine le montant de votre subvention.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quels travaux sont admissibles ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Rénoclimat couvre une large gamme de travaux écoénergétiques :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { titre: "Isolation", desc: "Murs, toiture, fondation, vide sanitaire — souvent le meilleur retour sur investissement" },
              { titre: "Thermopompe", desc: "Centrale ou mini-splits — cumulable avec LogisVert d'Hydro-Québec" },
              { titre: "Fenêtres et portes", desc: "Remplacement de fenêtres ou portes extérieures peu performantes" },
              { titre: "Ventilation", desc: "Système VRC (ventilation avec récupération de chaleur)" },
              { titre: "Chauffe-eau", desc: "Chauffe-eau thermodynamique ou solaire" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien pouvez-vous recevoir ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le montant de la subvention dépend de <strong>l&apos;amélioration de la cote énergétique</strong> de votre maison,
            mesurée en unités ÉnerGuide. Plus l&apos;amélioration est grande, plus la subvention est élevée.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Exemples de subventions typiques</p>
            <div className="space-y-2">
              {[
                { travaux: "Isolation du grenier", montant: "500 $ – 1 500 $" },
                { travaux: "Isolation des murs", montant: "1 000 $ – 4 000 $" },
                { travaux: "Thermopompe + isolation", montant: "3 000 $ – 7 000 $" },
                { travaux: "Rénovation écoénergétique complète", montant: "7 000 $ – 10 000 $" },
              ].map((ex) => (
                <div key={ex.travaux} className="flex justify-between text-sm">
                  <span className="text-blue-900">{ex.travaux}</span>
                  <span className="font-bold text-blue-800">{ex.montant}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            * Ces montants sont indicatifs. Le montant réel dépend de l&apos;évaluation énergétique de votre maison.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Les étapes pour faire votre demande</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Vérifiez votre admissibilité",
                texte: "Votre maison doit avoir été construite avant 2012 et être votre résidence principale au Québec. Les copropriétés et immeubles locatifs sont aussi admissibles sous certaines conditions.",
              },
              {
                num: "2",
                titre: "Première évaluation énergétique",
                texte: "Engagez un conseiller en énergie certifié Rénoclimat. Il évalue votre maison et établit une cote ÉnerGuide de départ. Cette étape est obligatoire — aucune subvention n'est possible sans elle. Coût typique : 150 $ à 300 $.",
              },
              {
                num: "3",
                titre: "Réalisez vos travaux",
                texte: "Faites effectuer les travaux par un entrepreneur qualifié RBQ. Gardez toutes vos factures — elles seront nécessaires pour votre demande.",
              },
              {
                num: "4",
                titre: "Deuxième évaluation énergétique",
                texte: "Après les travaux, le même conseiller (ou un autre certifié) refait l'évaluation pour mesurer l'amélioration obtenue.",
              },
              {
                num: "5",
                titre: "Soumettez votre demande",
                texte: "Votre conseiller vous aide à soumettre la demande de subvention en ligne. Le remboursement arrive généralement dans les 4 à 12 semaines.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {etape.num}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{etape.titre}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{etape.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le truc des experts : cumuler les programmes</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Ce que beaucoup de propriétaires ignorent : Rénoclimat est <strong>cumulable</strong> avec d&apos;autres programmes.
            En combinant les aides, certains projets peuvent être financés à plus de 50%.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-bold text-green-800 mb-3">Exemple : installation d&apos;une thermopompe</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-green-900">Rénoclimat</span>
                <span className="font-bold text-green-800">jusqu&apos;à 3 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">LogisVert Hydro-Québec</span>
                <span className="font-bold text-green-800">jusqu&apos;à 6 700 $</span>
              </div>
              <div className="border-t border-green-200 pt-2 flex justify-between">
                <span className="font-bold text-green-900">Total cumulé possible</span>
                <span className="font-extrabold text-green-800 text-base">jusqu&apos;à 9 700 $</span>
              </div>
            </div>
            <p className="text-green-700 text-xs">Pour une thermopompe qui coûte typiquement 8 000 $ à 15 000 $.</p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-700 text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Calculez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">Rénoclimat, LogisVert, crédits fédéraux — découvrez tout ce à quoi vous avez droit.</p>
          <Link
            href="/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Calculer mes aides →
          </Link>
        </div>

        {/* Lien officiel */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/renoclimat"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            quebec.ca – Rénoclimat
          </a>
        </p>
      </article>

      <footer className="bg-slate-800 text-slate-400 py-5 px-4 mt-4">
        <div className="max-w-2xl mx-auto text-center text-xs">
          ArgentQC.ca – Outil informatif non affilié au gouvernement. Les montants sont des estimations.
        </div>
      </footer>
    </main>
  );
}
