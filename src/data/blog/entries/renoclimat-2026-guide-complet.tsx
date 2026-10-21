import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "renoclimat-2026-guide-complet";

const baseMetadata: Metadata = {
  title: "Rénoclimat 2026 : Guide complet pour obtenir votre subvention",
  description:
    "Tout sur Rénoclimat en 2026 : montants jusqu'à 20 000 $ selon le projet, travaux admissibles, étapes de demande et comment cumuler avec LogisVert Hydro-Québec.",
  keywords: ["Rénoclimat 2026", "subvention Rénoclimat", "comment faire demande Rénoclimat", "Rénoclimat montant"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/renoclimat-2026-guide-complet",
  },
};

function Content() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/fr" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>? Blogue</Link>
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
            Selon les anciennes modalités (jusqu&apos;au 30 septembre 2026), les propriétaires pouvaient obtenir jusqu&apos;à{" "}
            <strong>20 000 $</strong> selon l&apos;ampleur du projet. Depuis le 1er octobre 2026, l&apos;aide est établie par type
            de travaux, avec un maximum par mesure : le plafond et les exemples ci-dessous n&apos;ont pas été revalidés
            au nouveau barème. Voici tout ce qu&apos;il faut savoir.
          </p>
        </div>

        {/* Mise à jour modalités 1er octobre 2026 */}
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-8">
          <p className="font-bold text-amber-900 mb-2">Mise à jour du 21 octobre 2026 : nouvelles modalités depuis le 1er octobre</p>
          <ul className="space-y-1.5 text-sm text-amber-900 list-disc pl-5">
            <li>L&apos;évaluation énergétique avant travaux n&apos;est plus obligatoire (elle reste recommandée et une aide jusqu&apos;à 500 $ est offerte).</li>
            <li>Aide par mesure : l&apos;aide est maintenant établie par type de travaux, avec des maximums distincts. Les montants et exemples plus bas reposent en partie sur les anciennes modalités : consultez le barème officiel avant de planifier vos travaux.</li>
            <li>Transition : si votre habitation a déjà fait l&apos;objet d&apos;une évaluation, terminez vos travaux et obtenez une évaluation après travaux d&apos;ici le 31 mars 2027 pour bénéficier des anciennes modalités. Les demandes de rendez-vous avant travaux selon les anciennes modalités ne sont plus acceptées.</li>
            <li>Rénoclimat n&apos;offre plus d&apos;aide pour l&apos;installation ou le remplacement d&apos;un système de chauffage, thermopompe comprise.</li>
          </ul>
          <p className="text-amber-800 text-xs mt-3">
            Sources officielles :{" "}
            <a
              href="https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/renoclimat/nouveautes-adaptation-inondations"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              quebec.ca – nouveautés Rénoclimat
            </a>
            ,{" "}
            <a
              href="https://www.quebec.ca/habitation-territoire/chauffage-consommation-energie/aide-financiere-renovation-ecoenergetique/renoclimat/aide-financiere/subvention-systemes-mecaniques"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              quebec.ca – systèmes mécaniques
            </a>
            . Vérifié le 21 octobre 2026.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>? Anciennes modalités : subvention de <strong>100 $ à 20 000 $</strong> selon les travaux. Depuis le 1er octobre 2026 : maximum par type de travaux (barème officiel)</li>
            <li>? Combinable avec LogisVert Hydro-Québec pour des travaux distincts (ex. : isolation via Rénoclimat + thermopompe via LogisVert)</li>
            <li>? Évaluation énergétique avant travaux recommandée mais facultative depuis le 1er octobre 2026 (obligatoire sous les anciennes modalités)</li>
            <li>? Habitation construite et habitée depuis au moins 12 mois (aucune restriction liée à l&apos;année de construction)</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi Rénoclimat exactement ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Rénoclimat est un programme du gouvernement du Québec qui offre des subventions aux propriétaires
            résidentiels pour améliorer l&apos;efficacité énergétique de leur logement. L&apos;ancienne société d&apos;État
            responsable, Transition énergétique Québec (TEQ), a été dissoute en 2020-2022; le programme est
            aujourd&apos;hui administré par le ministère de l&apos;Environnement, de la Lutte contre les changements
            climatiques, de la Faune et des Parcs (MELCCFP). L&apos;objectif est de réduire la consommation
            d&apos;énergie des bâtiments résidentiels, ce qui bénéficie à la fois au portefeuille du propriétaire et à
            l&apos;environnement.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Contrairement à plusieurs autres programmes, Rénoclimat s&apos;appuie sur une <strong>évaluation énergétique</strong> :
            sous les anciennes modalités, un conseiller certifié évaluait votre maison avant les travaux, puis une
            deuxième évaluation après les travaux confirmait l&apos;amélioration, et cette différence déterminait le montant
            de votre subvention. Depuis le 1er octobre 2026, l&apos;évaluation avant travaux n&apos;est plus obligatoire.
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
              { titre: "Fenêtres et portes", desc: "Remplacement de fenêtres ou portes extérieures peu performantes" },
              { titre: "Ventilation", desc: "Système VRC (ventilation avec récupération de chaleur)" },
              { titre: "Chauffe-eau", desc: "Chauffe-eau thermodynamique ou solaire" },
              { titre: "Étanchéité à l'air", desc: "Calfeutrage et scellement de l'enveloppe du bâtiment" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Important : l&apos;installation, le remplacement ou la réparation d&apos;une <strong>thermopompe</strong>{" "}
            n&apos;est pas admissible à l&apos;aide Rénoclimat elle-même — cet équipement relève du programme{" "}
            <strong>LogisVert</strong> d&apos;Hydro-Québec. Les deux programmes peuvent être complémentaires dans un
            même projet, mais uniquement pour des travaux distincts (par exemple : Rénoclimat pour l&apos;isolation,
            LogisVert pour la thermopompe).
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien pouvez-vous recevoir ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong>Nouvelles modalités (depuis le 1er octobre 2026) :</strong> l&apos;aide est établie selon le type de
            travaux, avec un maximum par mesure. Pour une maison, par exemple : toit jusqu&apos;à 2 000 $, murs extérieurs
            jusqu&apos;à 7 000 $, fondations jusqu&apos;à 2 500 $, fenêtres jusqu&apos;à 4 500 $ (300 $ par fenêtre). Les maximums
            diffèrent pour les duplex, triplex et immeubles à logements multiples : consultez le barème officiel.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong>Anciennes modalités (transition) :</strong> le montant dépendait de{" "}
            <strong>l&apos;amélioration de la cote énergétique</strong> de votre maison, mesurée en unités ÉnerGuide.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Exemples historiques (anciennes modalités)</p>
            <div className="space-y-2">
              {[
                { travaux: "Isolation du grenier", montant: "500 $ – 1 500 $" },
                { travaux: "Isolation des murs", montant: "1 000 $ – 4 000 $" },
                { travaux: "Isolation + fenêtres et portes", montant: "3 000 $ – 7 000 $" },
                { travaux: "Rénovation écoénergétique complète", montant: "7 000 $ – 20 000 $" },
              ].map((ex) => (
                <div key={ex.travaux} className="flex justify-between text-sm">
                  <span className="text-blue-900">{ex.travaux}</span>
                  <span className="font-bold text-blue-800">{ex.montant}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            * Ces montants sont indicatifs et reposent sur les anciennes modalités ; ils n&apos;ont pas été revalidés au
            barème par mesure en vigueur depuis le 1er octobre 2026.
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
                texte: "Votre habitation doit être construite et habitée depuis au moins 12 mois — aucune année de construction n'est exclue. Rénoclimat accepte les maisons unifamiliales, duplex, triplex, petits multilogements, syndicats de copropriété, entreprises et OBNL, et même certains chalets quatre saisons; la propriété n'a pas besoin d'être votre résidence principale.",
              },
              {
                num: "2",
                titre: "Première évaluation énergétique (recommandée)",
                texte: "Un conseiller en énergie certifié Rénoclimat évalue votre maison et établit une cote ÉnerGuide de départ. Depuis le 1er octobre 2026, cette étape n'est plus obligatoire, mais elle reste recommandée pour orienter vos choix de rénovation; une aide jusqu'à 500 $ est offerte pour l'évaluation énergétique. Sous les anciennes modalités (transition jusqu'au 31 mars 2027 pour les habitations déjà évaluées), elle était obligatoire.",
              },
              {
                num: "3",
                titre: "Réalisez vos travaux",
                texte: "Nouvelles modalités : les travaux doivent avoir été effectués après le 1er octobre 2026 par un entrepreneur détenant les licences appropriées aux types de travaux (vérifiez la sous-catégorie de licence auprès de la RBQ). L'entrepreneur doit remplir et signer le formulaire d'attestation de conformité des travaux. Gardez vos factures et pièces justificatives. Sous les anciennes modalités (transition), seuls les travaux réglementés devaient être confiés au professionnel requis par la loi.",
              },
              {
                num: "4",
                titre: "Évaluation après travaux (anciennes modalités)",
                texte: "Sous les anciennes modalités, le conseiller refait l'évaluation après les travaux pour mesurer l'amélioration obtenue; elle doit avoir lieu d'ici le 31 mars 2027 pour compléter la période de transition. Pour les nouvelles modalités, vérifiez dans le Guide du participant si une évaluation après travaux est requise pour votre projet.",
              },
              {
                num: "5",
                titre: "Soumettez votre demande",
                texte: "Nouvelles modalités : selon la page officielle mise à jour le 13 octobre 2026, la demande se fera dans un nouveau portail Rénoclimat, en cours de développement et annoncé pour l'automne; d'ici là, conservez votre attestation signée, vos pièces justificatives et vos factures. Sous les anciennes modalités, votre conseiller vous aidait à soumettre la demande.",
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
            Ce que beaucoup de propriétaires ignorent : Rénoclimat peut se combiner avec d&apos;autres programmes
            dans un même projet de rénovation — <strong>à condition qu&apos;il s&apos;agisse de travaux distincts</strong>.
            Rénoclimat et LogisVert ne paient jamais pour le même équipement : Rénoclimat ne couvre pas
            l&apos;installation d&apos;une thermopompe, qui relève exclusivement de LogisVert.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-bold text-green-800 mb-3">Exemple : rénovation combinée isolation + thermopompe</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-green-900">Rénoclimat — isolation des murs et du grenier</span>
                <span className="font-bold text-green-800">jusqu&apos;à 4 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">LogisVert — installation de la thermopompe</span>
                <span className="font-bold text-green-800">jusqu&apos;à 6 700 $</span>
              </div>
              <div className="border-t border-green-200 pt-2 flex justify-between">
                <span className="font-bold text-green-900">Total combiné possible sur le projet</span>
                <span className="font-extrabold text-green-800 text-base">jusqu&apos;à 10 700 $</span>
              </div>
            </div>
            <p className="text-green-700 text-xs">
              Deux aides distinctes pour deux volets distincts du même projet — pas deux subventions pour le même équipement.
              Montants historiques (anciennes modalités) : le cumul affiché n&apos;a pas été revalidé au barème actuel et ne constitue pas une garantie.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-700 text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Calculez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">Rénoclimat, LogisVert, crédits fédéraux — découvrez tout ce à quoi vous avez droit.</p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Trouver mes aides ?
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
  titre: "Rénoclimat 2026 : Guide complet pour obtenir votre subvention",
  description: "Tout ce que vous devez savoir sur Rénoclimat : montants, travaux admissibles, étapes pour faire votre demande et comment maximiser votre remboursement.",
  date: "2026-03-29",
  categorie: "Rénovation",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;

