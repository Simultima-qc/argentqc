import type { Metadata } from "next";
import Link from "next/link";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import TrackingLink from "@/components/TrackingLink";
import SiteFooter from "@/components/SiteFooter";
import {
  rrqContributions2026,
  rrqMontantsAge2026,
  rrqOfficialUrls,
} from "@/data/finance-2026";
import type { BlogArticle } from "@/data/blog/types";

const slug = "rrq-rente-retraite-2026";

const baseMetadata: Metadata = {
  title: "RRQ 2026 : montant maximum, rente de retraite et âge de demande",
  description:
    "RRQ 2026 : cotisations officielles, montants de référence de 60 à 72 ans, réduction variable et bonification selon l'âge.",
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
  const rrqGuidePath = "/fr/retraite/rrq";
  const questionnairePath = "/fr/questionnaire";
  const formatCurrency = (value: number) => new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
  const formatPercent = (value: number, digits = 0) => new Intl.NumberFormat("fr-CA", {
    style: "percent",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
  const rrqMax65 = rrqMontantsAge2026.find((item) => item.age === 65)?.maximumMonthly ?? 1_507.65;

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
            RRQ 2026 : montant maximum, rente de retraite et âge de demande
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Régime de rentes du Québec verse chaque mois une rente à vie aux Québécois
            qui ont cotisé en cours d&apos;emploi. En 2026, le maximum à 65 ans est autour de 1 500 $/mois selon Retraite Québec
            (<strong>{formatCurrency(rrqMax65)}/mois</strong>), mais la rente réelle peut être plus basse selon votre historique de cotisation
            et votre âge de demande. Voici comment fonctionne le RRQ et comment réfléchir au bon moment pour demander la rente.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Rente disponible dès <strong>60 ans</strong>{" "} (avec réduction) ou jusqu&apos;à <strong>72 ans</strong> (avec bonification)</li>
            <li>✓ À 60 ans, la réduction varie de <strong>30 % à 36 %</strong>{" "} selon le dossier</li>
            <li>✓ Après 65 ans, la rente augmente de <strong>0,7 % par mois</strong>, jusqu&apos;à 58,8 % à 72 ans</li>
            <li>✓ Depuis 2019, vous pouvez travailler ET recevoir votre rente en même temps</li>
          </ul>
          <p className="mt-4 text-sm text-green-900">
            Pour les moyennes et maximums officiels 2026 de 60 à 72 ans, consultez la page principale :{" "}
            <Link href={rrqGuidePath} className="font-bold underline">
              montant maximum de la RRQ en 2026
            </Link>.
          </p>
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
            En 2026, le taux combinant la cotisation de base et la première cotisation supplémentaire est de
            <strong> {formatPercent(rrqContributions2026.employeeEmployerRate, 2)}</strong> pour le salarié et autant pour l&apos;employeur, sur les gains entre l&apos;exemption
            de <strong>{formatCurrency(rrqContributions2026.generalExemption)}</strong> et le MGA de <strong>{formatCurrency(rrqContributions2026.maximumPensionableEarnings)}</strong>. La cotisation maximale de chacun sous
            le MGA est de <strong>{formatCurrency(rrqContributions2026.employeeEmployerMaximum)}</strong>.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Une deuxième cotisation de <strong>{formatPercent(rrqContributions2026.secondAdditionalRate)}</strong> par côté s&apos;applique entre {formatCurrency(rrqContributions2026.maximumPensionableEarnings)} et le MSGA de
            <strong> {formatCurrency(rrqContributions2026.additionalMaximumPensionableEarnings)}</strong>, jusqu&apos;à {formatCurrency(rrqContributions2026.secondAdditionalMaximum)} chacun. Le maximum total salarié ou employeur est donc de
            <strong> {formatCurrency(rrqContributions2026.employeeEmployerTotalMaximum)}</strong>. Le travailleur autonome paie les deux parts : {formatPercent(rrqContributions2026.selfEmployedRate, 2)} sous le MGA et {formatPercent(rrqContributions2026.selfEmployedSecondAdditionalRate)}
            sur la deuxième tranche.
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
                { facteur: "Période de cotisation", explication: "Les revenus inscrits entre le mois de votre 18e anniversaire et le premier des événements prévus par le régime, au plus tard le mois de vos 72 ans" },
                { facteur: "Revenus cotisés", explication: "Vos gains annuels ajustés en fonction de l'évolution des salaires au Québec" },
                { facteur: "Âge à la demande", explication: "La rente peut commencer entre 60 et 72 ans; elle cesse d'augmenter à 72 ans" },
                { facteur: "Périodes d'exclusion", explication: "Certains mois d'invalidité, d'indemnité CNESST ou de prestations familiales peuvent être exclus; jusqu'à 15 % des mois aux revenus les plus faibles peuvent aussi être écartés si cela vous avantage" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-3">À quel âge demander votre rente : de 60 à 72 ans?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C&apos;est la question centrale de la planification de retraite au Québec. Le RRQ permet de demander
            la rente entre 60 et 72 ans, avec un mécanisme de réduction ou de bonification selon l&apos;âge choisi.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Repères officiels pour les personnes ayant demandé leur rente en 2026</p>
            <div className="space-y-2">
              {[
                { age: "60 ans", ajustement: "−30 % à −36 %", montant: "moy. 490 $ · max. 964,90 $", note: "Réduction de 0,5 % à 0,6 % par mois selon le dossier" },
                { age: "65 ans", ajustement: "0 %", montant: "moy. 731 $ · max. 1 507,65 $", note: "Âge de référence" },
                { age: "70 ans", ajustement: "+42 %", montant: "moy. 1 038 $ · max. 2 141 $", note: "Bonification de 0,7 % par mois après 65 ans" },
                { age: "72 ans", ajustement: "+58,8 %", montant: "moy. 1 161 $ · max. 2 394,15 $", note: "La rente cesse d'augmenter à 72 ans" },
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
            Il n&apos;existe pas d&apos;âge universellement optimal. Le besoin de revenu immédiat, la santé, les autres
            sources de revenu et la protection recherchée contre le risque de longévité doivent être analysés ensemble.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Consultez votre relevé de participation dans Mon dossier pour comparer les montants liés à votre
            historique réel; les exemples ci-dessus ne constituent pas une recommandation personnalisée.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le RRQ bonifié (RRQ+) : une couche supplémentaire depuis 2019</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Depuis 2019, le RRQ a été amélioré par l&apos;ajout du <strong>RRQ bonifié</strong>, parfois appelé
            RRQ+. En plus des cotisations de base, les travailleurs versent des cotisations supplémentaires
            sur leurs gains. En 2026, la deuxième tranche se situe entre le MGA de
            <strong> {formatCurrency(rrqContributions2026.maximumPensionableEarnings)}</strong> et le MSGA de <strong>{formatCurrency(rrqContributions2026.additionalMaximumPensionableEarnings)}</strong>, à un taux de {formatPercent(rrqContributions2026.secondAdditionalRate)} par côté.
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
                texte: "Décidez si vous voulez commencer entre 60 et 72 ans. Une annulation est possible dans les 6 mois suivant le premier paiement, à condition de rembourser les sommes reçues.",
              },
              {
                num: "3",
                titre: "Faites votre demande en ligne ou par courrier",
                texte: "Soumettez votre demande en ligne ou au moyen du formulaire officiel. Retraite Québec suggère de la présenter environ 3 mois avant la date souhaitée; elle peut être faite jusqu'à 12 mois à l'avance.",
              },
              {
                num: "4",
                titre: "Recevez vos versements mensuels",
                texte: "La rente est versée mensuellement, le dernier jour ouvrable. Le dépôt direct est offert, sans être présenté ici comme l'unique mode. La rente est imposable et la retenue d'impôt n'est pas automatique; vous pouvez la demander.",
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
            cotisation de travailleur retraité) est obligatoire de 60 à 64 ans. Entre 65 et 72 ans, une personne
            qui travaille et reçoit déjà une rente RRQ ou RPC peut choisir de cesser de cotiser. Les cotisations
            cessent automatiquement le 1er janvier suivant le 72e anniversaire.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Chaque année de cotisation supplémentaire génère un <strong>supplément de rente</strong>{" "} versé
            à la rente. Le choix de continuer ou de cesser de cotiser après 65 ans dépend de la situation de la personne.
          </p>
        </section>

        {/* CTA */}
        <div style={{ background: "#1a1f3c" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Explorez des programmes à vérifier selon votre profil</p>
          <p className="text-slate-300 text-sm mb-4">
            Le questionnaire fournit des pistes d&apos;orientation. Il ne calcule pas votre rente RRQ et ne confirme
            pas votre admissibilité aux programmes.
          </p>
          <TrackingLink
            href={questionnairePath}
            tracking={{ cta_name: "rrq_blog", cta_location: "final", destination: questionnairePath }}
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Voir mes pistes de programmes →
          </TrackingLink>
        </div>

        {/* Lien officiel */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <TrackedExternalLink
            href={rrqOfficialUrls.pensionCalculation}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            tracking={{ cta_name: "rrq_blog_official_source", cta_location: "article_source", destination: rrqOfficialUrls.pensionCalculation }}
          >
            Retraite Québec – Rente de retraite
          </TrackedExternalLink>
        </p>
      </article>

      <SiteFooter
        legalText="Outil informatif non affilié au gouvernement. Les maximums RRQ 2026 cités proviennent des montants clés de Retraite Québec; votre rente réelle dépend de votre dossier."
        contactLabel="Contactez-nous"
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ marginTop: "16px" }}
      />
    </main>
  );
}

const article: BlogArticle = {
  slug,
  titre: "RRQ 2026 : montant maximum, rente de retraite et âge de demande",
  description: "RRQ 2026 : cotisations officielles, montants de référence de 60 à 72 ans, réduction variable et bonification selon l'âge.",
  date: "2026-06-13",
  categorie: "Retraite",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
