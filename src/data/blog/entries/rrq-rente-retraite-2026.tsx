import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "rrq-rente-retraite-2026";

const baseMetadata: Metadata = {
  title: "RRQ 2026 : Comment fonctionne votre rente de retraite et quel âge choisir",
  description:
    "Tout sur la rente de retraite du RRQ en 2026 : calcul selon vos gains cotisés, impact de prendre la rente à 60, 65 ou 70 ans, bonification et réduction.",
  keywords: ["RRQ 2026", "rente retraite Québec", "Régime de rentes du Québec", "âge retraite RRQ", "rente maximale RRQ"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/rrq-rente-retraite-2026",
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
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · 13 juin 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            RRQ 2026 : Comment fonctionne votre rente de retraite et quel âge choisir
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Régime de rentes du Québec verse chaque mois une rente à vie à tous les Québécois
            qui ont cotisé en cours d&apos;emploi. En 2026, la rente maximale à 65 ans dépasse
            <strong> 1 400 $ par mois</strong>{" "} — mais l&apos;âge auquel vous la demandez peut faire varier
            ce montant de plus de 75 %. Voici comment fonctionne le RRQ et comment prendre la meilleure décision.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Rente disponible dès <strong>60 ans</strong>{" "} (avec réduction) ou jusqu&apos;à 70 ans (avec bonification)</li>
            <li>✓ Prendre la rente à 60 ans réduit le montant de <strong>36 %</strong>{" "} par rapport à 65 ans</li>
            <li>✓ Attendre jusqu&apos;à 70 ans augmente le montant de <strong>42 %</strong>{" "} par rapport à 65 ans</li>
            <li>✓ Depuis 2019, vous pouvez travailler ET recevoir votre rente en même temps</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que le RRQ et qui y cotise ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le Régime de rentes du Québec (RRQ) est un régime d&apos;assurance public obligatoire administré par
            <strong> Retraite Québec</strong>. Tous les travailleurs québécois de 18 ans et plus qui gagnent plus
            de 3 500 $ par année y cotisent automatiquement, ainsi que leurs employeurs.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            En 2026, le taux de cotisation de base est de <strong>6,40 %</strong>{" "} sur les gains compris entre
            l&apos;exemption de base (3 500 $) et le maximum des gains admissibles (MGA), établi à environ
            <strong> 73 200 $</strong>. L&apos;employeur verse un montant équivalent — pour un total de 12,80 %
            par dollar de salaire cotisé.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Les travailleurs autonomes paient les deux parts (employeur + employé), soit environ 12,80 % de leurs
            gains nets admissibles.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment est calculée votre rente ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le montant de votre rente de retraite est calculé en fonction de vos <strong>gains cotisés
            au cours de votre carrière</strong>. Plus vous avez cotisé longtemps et sur des revenus élevés,
            plus votre rente sera généreuse.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-4">
            <p className="font-bold text-slate-800 mb-3">Les facteurs qui influencent votre rente</p>
            <div className="space-y-3">
              {[
                { facteur: "Durée de cotisation", explication: "La période entre vos 18 ans et l'âge auquel vous demandez la rente (max 47 ans), en excluant les 15 % des années les plus faibles" },
                { facteur: "Revenus cotisés", explication: "Vos gains annuels ajustés en fonction de l'évolution des salaires au Québec" },
                { facteur: "Âge à la demande", explication: "La rente est calculée au moment où vous la demandez — entre 60 et 70 ans" },
                { facteur: "Périodes d'exclusion", explication: "Les années à faible revenu liées à la garde d'enfants (avant 7 ans) ou à une invalidité peuvent être exclues du calcul" },
              ].map((item) => (
                <div key={item.facteur} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                  <p className="font-semibold text-slate-800 text-sm">{item.facteur}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{item.explication}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Pour connaître votre rente estimée, consultez votre <strong>relevé de participation</strong>{" "}
            disponible dans votre espace MonDossier sur le site de Retraite Québec.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">À quel âge prendre votre rente : 60, 65 ou 70 ans ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C&apos;est la question centrale de la planification de retraite au Québec. Le RRQ permet de demander
            la rente entre 60 et 70 ans, avec un mécanisme de réduction ou de bonification selon l&apos;âge choisi.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Exemple avec une rente de base de 1 200 $/mois à 65 ans</p>
            <div className="space-y-2">
              {[
                { age: "60 ans", ajustement: "− 36 %", montant: "768 $/mois", note: "Réduction de 0,6 % par mois avant 65 ans" },
                { age: "62 ans", ajustement: "− 21,6 %", montant: "941 $/mois", note: "Réduction de 0,6 % × 36 mois" },
                { age: "65 ans", ajustement: "0 %", montant: "1 200 $/mois", note: "Montant de référence" },
                { age: "68 ans", ajustement: "+ 25,2 %", montant: "1 502 $/mois", note: "Bonification de 0,7 % par mois après 65 ans" },
                { age: "70 ans", ajustement: "+ 42 %", montant: "1 704 $/mois", note: "Bonification maximale de 0,7 % × 60 mois" },
              ].map((ligne) => (
                <div key={ligne.age} className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                  <div>
                    <span className="font-bold text-blue-900">{ligne.age}</span>
                    <span className="text-blue-700 ml-2">({ligne.ajustement})</span>
                    <p className="text-blue-600 text-xs mt-0.5">{ligne.note}</p>
                  </div>
                  <span className="font-extrabold text-blue-800 text-base mt-1 sm:mt-0">{ligne.montant}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">
            <strong>Quand a-t-il intérêt à prendre la rente tôt ?</strong>{" "}Si votre espérance de vie est
            réduite, si vous avez besoin du revenu immédiatement, ou si vous comptez investir la différence
            à un rendement supérieur au taux de bonification du RRQ.
          </p>
          <p className="text-slate-600 leading-relaxed">
            <strong>Quand a-t-il intérêt à attendre ?</strong>{" "}Si vous êtes en bonne santé, si vous avez
            d&apos;autres sources de revenu jusqu&apos;à 70 ans, et si vous voulez maximiser votre protection
            contre la longévité — la rente est versée à vie, peu importe combien de temps vous vivez.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le RRQ bonifié (RRQ+) : une couche supplémentaire depuis 2019</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Depuis 2019, le RRQ a été amélioré par l&apos;ajout du <strong>RRQ bonifié</strong>, parfois appelé
            RRQ+. En plus des cotisations de base, les travailleurs versent des cotisations supplémentaires
            sur leurs gains entre le premier MGA (73 200 $) et un deuxième seuil d&apos;environ <strong>82 700 $</strong>.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            Ce programme augmentera graduellement les rentes futures. Les travailleurs qui ont cotisé depuis 2019
            recevront une rente plus élevée que les générations précédentes. À terme, la rente pourra remplacer
            jusqu&apos;à <strong>33 % des revenus admissibles</strong>{" "} au lieu de 25 % historiquement.
          </p>
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5">
            <p className="font-bold text-purple-800 mb-2">Bon à savoir</p>
            <p className="text-purple-900 text-sm">
              Contrairement à ce que plusieurs croient, les cotisations RRQ+ versées depuis 2019 s&apos;accumulent
              séparément dans votre dossier. Elles génèreront une rente additionnelle au moment de votre retraite,
              en plus de la rente de base. Vous n&apos;avez rien de spécial à faire — c&apos;est automatique.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande de rente</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Consultez votre relevé de participation",
                texte: "Connectez-vous à MonDossier sur le site de Retraite Québec (retraitequebec.ca) pour voir votre historique de cotisations et votre rente estimée à différents âges. Cela vous aidera à planifier le bon moment.",
              },
              {
                num: "2",
                titre: "Choisissez votre âge de début",
                texte: "Décidez si vous voulez commencer à 60, 65, 70 ans ou n'importe quel mois entre les deux. La décision est permanente — une fois la rente commencée, vous ne pouvez pas changer l'âge de début (sauf annulation dans les 6 mois).",
              },
              {
                num: "3",
                titre: "Faites votre demande en ligne ou par courrier",
                texte: "Soumettez votre demande via MonDossier sur retraitequebec.ca, ou demandez le formulaire par courrier. Prévoyez de soumettre votre demande au moins 3 mois avant la date souhaitée de début.",
              },
              {
                num: "4",
                titre: "Recevez vos versements mensuels",
                texte: "La rente est versée le dernier jour ouvrable de chaque mois, par dépôt direct dans votre compte bancaire. Elle est imposable — pensez à demander une retenue à la source si vous ne voulez pas payer un montant important au moment des impôts.",
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">RRQ et travail : les nouvelles règles avantageuses</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Depuis 2019, vous pouvez <strong>travailler tout en recevant votre rente RRQ</strong>{" "} — et
            continuer à cotiser pour augmenter votre rente future. Cette cotisation après retraite (appelée
            cotisation de travailleur retraité) est optionnelle si vous avez 65 ans et plus, mais obligatoire
            si vous avez entre 60 et 64 ans et que vous continuez à travailler.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Chaque année de cotisation supplémentaire génère un <strong>supplément de rente</strong>{" "} versé
            dès janvier de l&apos;année suivante. C&apos;est une façon efficace de bonifier sa retraite tout
            en continuant à travailler à temps partiel.
          </p>
        </section>

        {/* CTA */}
        <div style={{ background: "#1a1f3c" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-slate-300 text-sm mb-4">
            RRQ, SRG, Sécurité de vieillesse, crédits d&apos;impôt — répondez à quelques questions
            et obtenez un portrait complet de votre situation.
          </p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Calculer mes prestations →
          </Link>
        </div>

        {/* Lien officiel */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.retraitequebec.ca/fr/rrq/rente-de-retraite/Pages/rente-de-retraite.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Retraite Québec – Rente de retraite
          </a>
        </p>
      </article>

      <SiteFooter
        legalText="Outil informatif non affilié au gouvernement. Les montants sont des estimations basées sur les paramètres 2026 de Retraite Québec."
        contactLabel="Contactez-nous"
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ marginTop: "16px" }}
      />
    </main>
  );
}

const article: BlogArticle = {
  slug,
  titre: "RRQ 2026 : Comment fonctionne votre rente de retraite et quel âge choisir",
  description: "Tout sur la rente de retraite du RRQ en 2026 : calcul selon vos gains cotisés, impact de prendre la rente à 60, 65 ou 70 ans, bonification et réduction.",
  date: "2026-06-13",
  categorie: "Retraite",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
