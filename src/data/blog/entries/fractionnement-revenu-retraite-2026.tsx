import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "fractionnement-revenu-retraite-2026";

const baseMetadata: Metadata = {
  title: "Fractionnement du revenu de retraite 2026 : Économisez des milliers en impôts",
  description:
    "Partagez jusqu&apos;à 50 % de votre revenu de pension admissible avec votre conjoint et économisez des milliers en impôts. Conditions, revenus admissibles et exemples concrets 2026.",
  keywords: [
    "fractionnement revenu retraite 2026",
    "fractionner pension conjoint",
    "T1032",
    "TP-932",
    "économie impôt retraite Québec",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/fractionnement-revenu-retraite-2026",
  },
};

function Content() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/fr" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>← Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        {/* En-tête article */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Retraite</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 25 juin 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Fractionnement du revenu de retraite 2026 : Économisez des milliers en impôts
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le fractionnement du revenu de retraite est l&apos;une des stratégies fiscales les plus puissantes — et les moins
            connues — pour les couples canadiens à la retraite. En 2026, vous pouvez transférer jusqu&apos;à{" "}
            <strong>50 % de votre revenu de pension admissible</strong>{" "}à votre conjoint, ce qui peut se
            traduire par des économies d&apos;impôt de plusieurs milliers de dollars par année.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Transférez jusqu&apos;à <strong>50 % de votre revenu de pension</strong>{" "}à votre conjoint pour réduire votre impôt</li>
            <li>✓ Économies typiques de <strong>2 000 $ à 10 000 $</strong>{" "}par année pour un couple avec revenus inégaux</li>
            <li>✓ Se fait directement dans votre déclaration de revenus — formulaires T1032 (fédéral) et TP-932 (Québec)</li>
            <li>✓ Le conjoint receveur peut aussi réclamer le <strong>crédit pour revenu de pension</strong>{" "}de 2 000 $</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi le fractionnement du revenu de retraite ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le fractionnement du revenu de retraite est une mesure fiscale qui permet à un couple de déclarer
            une partie du revenu de pension d&apos;un époux dans la déclaration de l&apos;autre. Concrètement, si
            vous touchez 80 000 $ de revenus de pension et que votre conjoint n&apos;en a que 20 000 $, vous
            pouvez attribuer jusqu&apos;à 40 000 $ (soit 50 %) à votre conjoint sur papier.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            L&apos;argent ne change pas de compte bancaire : il s&apos;agit d&apos;un <strong>choix conjoint sur votre
            déclaration de revenus</strong>. Les deux conjoints signent le formulaire, chacun déclare sa part et
            l&apos;impôt de chacun est calculé en conséquence.
          </p>
          <p className="text-slate-600 leading-relaxed">
            L&apos;avantage est simple : si un conjoint est imposé à un taux marginal élevé (par exemple 53 %) et
            l&apos;autre à un taux faible (par exemple 20 %), déplacer du revenu du premier vers le second réduit
            la facture totale d&apos;impôt du ménage.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quels revenus sont admissibles ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Tous les revenus de retraite ne sont pas admissibles au fractionnement. Voici les revenus qui
            peuvent être partagés :
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              {
                titre: "Rente viagère d&apos;un régime de pension agréé (RPA)",
                desc: "Les pensions d'employeur (régimes à prestations déterminées) sont admissibles à tout âge.",
              },
              {
                titre: "Retraits d&apos;un FERR (65 ans et plus)",
                desc: "Les retraits de votre Fonds enregistré de revenu de retraite sont admissibles si vous avez 65 ans ou plus.",
              },
              {
                titre: "Rente d&apos;un REER (65 ans et plus)",
                desc: "Les rentes provenant d'un REER converti en rente sont admissibles dès 65 ans.",
              },
              {
                titre: "Rente d&apos;un RPDB (65 ans et plus)",
                desc: "Les rentes d'un régime de participation différée aux bénéfices sont également admissibles après 65 ans.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm" dangerouslySetInnerHTML={{ __html: item.titre }} />
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p className="font-bold text-red-800 mb-2 text-sm">Revenus NON admissibles au fractionnement</p>
            <ul className="space-y-1 text-sm text-red-700">
              <li>• Pension de la Sécurité de la vieillesse (PSV)</li>
              <li>• Rente du Régime de rentes du Québec (RRQ)</li>
              <li>• Retraits du REER (avant conversion en rente ou FERR)</li>
              <li>• Retraits d&apos;un FERR avant 65 ans (sauf décès du conjoint)</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quelles sont les conditions pour y avoir droit ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le fractionnement est accessible à la plupart des couples, mais quelques conditions s&apos;appliquent :
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Vous devez être en couple",
                texte: "Être marié ou conjoint de fait reconnu par l'Agence du revenu du Canada. Les couples de même sexe ont les mêmes droits.",
              },
              {
                num: "2",
                titre: "Résider au Canada à la fin de l'année",
                texte: "Les deux conjoints doivent être résidents canadiens au 31 décembre de l'année d'imposition.",
              },
              {
                num: "3",
                titre: "Ne pas être séparés",
                texte: "Vous ne devez pas avoir vécu séparément pendant plus de 90 jours en raison d'une rupture de la relation.",
              },
              {
                num: "4",
                titre: "Avoir du revenu de pension admissible",
                texte: "Le conjoint qui transfère doit avoir des revenus de pension admissibles (voir liste ci-dessus).",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien pouvez-vous économiser ? Exemples concrets</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            L&apos;économie dépend de l&apos;écart de revenus entre les deux conjoints et de leur taux marginal d&apos;imposition.
            Plus l&apos;écart est grand, plus les économies sont importantes.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Exemple 1 : Couple avec un grand écart de revenus</p>
            <p className="text-sm text-blue-700 mb-3">
              <strong>Situation :</strong>{" "}Michel touche 90 000 $ de pension d&apos;employeur. Lucie n&apos;a que 15 000 $ de revenus.
            </p>
            <div className="space-y-1.5 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-blue-900">Sans fractionnement — impôt de Michel</span>
                <span className="font-bold text-blue-800">~28 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Avec fractionnement (45 000 $ transférés) — impôt de Michel</span>
                <span className="font-bold text-blue-800">~16 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Impôt additionnel de Lucie</span>
                <span className="font-bold text-blue-800">~7 500 $</span>
              </div>
              <div className="border-t border-blue-200 pt-2 flex justify-between">
                <span className="font-bold text-blue-900">Économie nette du ménage</span>
                <span className="font-extrabold text-blue-800 text-base">~4 500 $</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-bold text-blue-800 mb-3">Exemple 2 : Deux conjoints avec revenus modérément inégaux</p>
            <p className="text-sm text-blue-700 mb-3">
              <strong>Situation :</strong>{" "}Carole reçoit 60 000 $ de pension d&apos;employeur. Jean-Pierre en reçoit 30 000 $.
            </p>
            <div className="space-y-1.5 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-blue-900">Revenu de Carole après fractionnement</span>
                <span className="font-bold text-blue-800">45 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Revenu de Jean-Pierre après fractionnement</span>
                <span className="font-bold text-blue-800">45 000 $</span>
              </div>
              <div className="border-t border-blue-200 pt-2 flex justify-between">
                <span className="font-bold text-blue-900">Économie nette estimée</span>
                <span className="font-extrabold text-blue-800 text-base">~2 000 $</span>
              </div>
            </div>
            <p className="text-blue-600 text-xs">* Estimations basées sur les taux d&apos;imposition combinés fédéral-Québec 2026. Consultez un comptable pour votre situation exacte.</p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire la demande</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le fractionnement ne se fait pas en avance : il se déclare dans votre déclaration de revenus annuelle.
            Voici comment procéder :
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Remplir le formulaire T1032 (fédéral)",
                texte: "Le formulaire T1032 « Choix conjoint visant le fractionnement du revenu de pension » doit être rempli et signé par les deux conjoints. Il est joint à vos déclarations de revenus fédérales.",
              },
              {
                num: "2",
                titre: "Remplir le formulaire TP-932.A (Québec)",
                texte: "Le formulaire TP-932.A est l'équivalent provincial québécois. Le Québec a ses propres règles d'admissibilité qui sont généralement similaires au fédéral, mais vérifiez les détails sur le site de Revenu Québec.",
              },
              {
                num: "3",
                titre: "Optimiser le montant transféré",
                texte: "Vous n'êtes pas obligé de transférer exactement 50 %. Utilisez un logiciel fiscal ou consultez un comptable pour simuler différents montants et trouver celui qui minimise le plus l'impôt total du ménage.",
              },
              {
                num: "4",
                titre: "Refaire le choix chaque année",
                texte: "Le fractionnement n'est pas automatique : vous devez faire ce choix chaque année dans votre déclaration. Vous pouvez modifier le montant d'une année à l'autre selon l'évolution de vos revenus.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le bonus souvent oublié : le crédit pour revenu de pension</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Quand vous fractionnez votre pension avec votre conjoint, ce dernier peut réclamer le{" "}
            <strong>crédit pour revenu de pension</strong>{" "} — même s&apos;il n&apos;aurait autrement aucun revenu
            de pension admissible.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-3">
            <p className="font-bold text-green-800 mb-3">Le crédit pour revenu de pension en 2026</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-900">Crédit fédéral (15 % sur max 2 000 $)</span>
                <span className="font-bold text-green-800">jusqu&apos;à 300 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">Crédit provincial Québec (20 % sur max 2 000 $)</span>
                <span className="font-bold text-green-800">jusqu&apos;à 400 $</span>
              </div>
              <div className="border-t border-green-200 pt-2 flex justify-between">
                <span className="font-bold text-green-900">Total combiné possible</span>
                <span className="font-extrabold text-green-800 text-base">jusqu&apos;à 700 $</span>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Si votre conjoint ne touchait aucun revenu de pension avant le fractionnement, il peut maintenant
            accéder à ce crédit non remboursable grâce au montant que vous lui avez transféré. Cela s&apos;ajoute
            aux économies sur les taux marginaux.
          </p>
        </section>

        {/* CTA */}
        <div className="rounded-2xl p-6 text-center" style={{ background: "#060D1A" }}>
          <p className="font-bold text-lg mb-2 text-white">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            Fractionnement, crédit pour revenu de pension, RRQ, SV — répondez à quelques questions et obtenez votre portrait complet.
          </p>
          <Link
            href="/fr/questionnaire"
            className="inline-block font-bold px-6 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#060D1A" }}
          >
            Trouver mes aides →
          </Link>
        </div>

        {/* Sources officielles */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Sources officielles :{" "}
          <a
            href="https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/formulaires/t1032.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            ARC – Formulaire T1032
          </a>
          {" "}·{" "}
          <a
            href="https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/comment-remplir-votre-declaration/instructions-ligne-par-ligne/revenus/ligne-297-fractionnement-du-revenu-de-pension/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Revenu Québec – Fractionnement du revenu de pension
          </a>
        </p>
      </article>

      <SiteFooter
        legalText="Outil informatif non affilié au gouvernement. Les montants sont des estimations."
        contactLabel="Contactez-nous"
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ marginTop: "16px" }}
      />
    </main>
  );
}

const article: BlogArticle = {
  slug,
  titre: "Fractionnement du revenu de retraite 2026 : Économisez des milliers en impôts",
  description:
    "Partagez jusqu'à 50 % de votre revenu de pension avec votre conjoint et économisez des milliers en impôts. Conditions, revenus admissibles et exemples concrets pour 2026.",
  date: "2026-06-25",
  categorie: "Retraite",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;
