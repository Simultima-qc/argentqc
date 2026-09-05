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
            En 2026, les propriétaires peuvent obtenir jusqu&apos;à <strong>20 000 $</strong> selon l&apos;ampleur du projet pour
            améliorer l&apos;efficacité énergétique de leur maison — le plafond a été relevé au-delà de l&apos;ancien maximum de
            10 000 $, mais le montant exact dépend de votre dossier. Voici tout ce qu&apos;il faut savoir.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>? Subvention de <strong>100 $ à 20 000 $</strong> selon les travaux (plafond relevé au-delà de l&apos;ancien maximum de 10 000 $)</li>
            <li>? Combinable avec LogisVert Hydro-Québec pour des travaux distincts (ex. : isolation via Rénoclimat + thermopompe via LogisVert)</li>
            <li>? Évaluation énergétique obligatoire avant ET après les travaux</li>
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
            Le montant de la subvention dépend de <strong>l&apos;amélioration de la cote énergétique</strong>{" "}de votre maison,
            mesurée en unités ÉnerGuide. Plus l&apos;amélioration est grande, plus la subvention est élevée.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Exemples de subventions typiques</p>
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
                texte: "Votre habitation doit être construite et habitée depuis au moins 12 mois — aucune année de construction n'est exclue. Rénoclimat accepte les maisons unifamiliales, duplex, triplex, petits multilogements, syndicats de copropriété, entreprises et OBNL, et même certains chalets quatre saisons; la propriété n'a pas besoin d'être votre résidence principale.",
              },
              {
                num: "2",
                titre: "Première évaluation énergétique",
                texte: "Engagez un conseiller en énergie certifié Rénoclimat. Il évalue votre maison et établit une cote ÉnerGuide de départ. Cette étape est obligatoire — aucune subvention n'est possible sans elle. Coût : 150 $ + taxes.",
              },
              {
                num: "3",
                titre: "Réalisez vos travaux",
                texte: "Rénoclimat n'exige pas que l'ensemble des travaux soit réalisé par un entrepreneur licencié RBQ — seuls les travaux réglementés (plomberie, électricité, etc.) doivent être confiés au professionnel requis par la loi. Gardez toutes vos factures — elles seront nécessaires pour votre demande.",
              },
              {
                num: "4",
                titre: "Deuxième évaluation énergétique",
                texte: "Après les travaux, le même conseiller (ou un autre certifié) refait l'évaluation pour mesurer l'amélioration obtenue. Cette deuxième évaluation est gratuite.",
              },
              {
                num: "5",
                titre: "Soumettez votre demande",
                texte: "Votre conseiller vous aide à soumettre la demande de subvention en ligne. Le versement arrive généralement 8 à 10 semaines après l'évaluation après travaux.",
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

