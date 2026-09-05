import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import TrackingLink from "@/components/TrackingLink";
import type { BlogArticle } from "@/data/blog/types";

const slug = "allocation-logement-quebec-2026";

const baseMetadata: Metadata = {
  title: "Guide allocation-logement Québec 2026 : exemples et démarches",
  description:
    "Guide explicatif sur l’allocation-logement au Québec : exemples, points à vérifier et démarches, avec un lien vers la fiche principale du programme.",
  keywords: ["allocation-logement Québec 2026", "aide loyer Québec", "subvention logement Québec", "allocation logement faible revenu"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/allocation-logement-quebec-2026",
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
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Logement</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 29 juin 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Guide explicatif de l&apos;allocation-logement au Québec en 2026
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            L&apos;allocation-logement est une aide mensuelle versée aux locataires et propriétaires à faible revenu
            qui consacrent une trop grande part de leurs revenus à se loger. Le programme relève de la Société
            d&apos;habitation du Québec (SHQ) et les demandes sont administrées par Revenu Québec. Pour la période
            d&apos;octobre 2025 à septembre 2026, ce programme peut
            vous rapporter jusqu&apos;à <strong>170 $ par mois</strong>{" "} — soit <strong>2 040 $ par année</strong>{" "} — directement dans votre compte bancaire.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8">
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Ce guide explique le programme avec des exemples. Pour la fiche de référence sur le montant,
            l&apos;admissibilité et la demande, consultez la{" "}
            <Link href="/fr/budget/allocation-logement" className="font-semibold text-blue-700 underline">
              page principale sur l&apos;allocation logement
            </Link>.
          </p>
          <TrackingLink
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-5 py-3 rounded-xl"
            tracking={{ cta_name: "verifier_mes_aides_logement", cta_location: "allocation_logement_blog_intro", destination: "/fr/questionnaire" }}
          >
            Vérifier mes aides logement →
          </TrackingLink>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ 100 $, 150 $ ou <strong>170 $/mois</strong>{" "}selon votre taux d&apos;effort au logement (jusqu&apos;à 2 040 $/an)</li>
            <li>✓ Pour les ménages où une personne a <strong>50 ans et plus</strong>{" "}OU qui ont <strong>au moins un enfant à charge</strong>{" "}(locataires et propriétaires)</li>
            <li>✓ Revenu admissible jusqu&apos;à environ <strong>40 740 $ à 46 640 $</strong>{" "}selon la composition du ménage, et avoir moins de 50 000 $ en épargne (comptes, CELI, placements)</li>
            <li>✓ Aide non imposable, demande gratuite en ligne via Revenu Québec</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi l&apos;allocation-logement ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            L&apos;allocation-logement est un programme du gouvernement du Québec administré par <strong>Retraite Québec</strong>.
            Elle vise à soutenir les personnes à faible revenu dont une portion importante du budget mensuel est absorbée par les coûts d&apos;habitation.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            Contrairement à un logement subventionné comme les HLM, l&apos;allocation-logement n&apos;est pas liée à un logement particulier.
            Vous pouvez déménager et continuer à la recevoir tant que vous respectez les critères. Elle est versée <strong>mensuellement</strong>,
            directement par dépôt bancaire, et n&apos;est <strong>pas imposable</strong>.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Elle s&apos;adresse aux locataires, mais aussi aux <strong>propriétaires-occupants</strong>{" "} qui paient des charges élevées
            liées à leur logement : taxes foncières, intérêts hypothécaires, frais de copropriété.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui peut faire une demande en 2026 ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour être admissible, vous devez répondre à <strong>tous ces critères</strong>{" "} simultanément :
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              {
                titre: "Âge ou situation familiale",
                desc: "Vous ou votre conjoint avez 50 ans ou plus, OU vous avez au moins un enfant à charge (peu importe votre âge)",
              },
              {
                titre: "Résidence au Québec",
                desc: "Résider au Québec à titre de locataire ou de propriétaire-occupant de votre résidence principale",
              },
              {
                titre: "Revenu familial net",
                desc: "Revenu inférieur aux seuils établis : environ 40 740 $ à 46 640 $ selon la composition du ménage (personne seule, couple, avec ou sans enfants)",
              },
              {
                titre: "Épargne et placements",
                desc: "Avoir moins de 50 000 $ au total dans vos comptes bancaires, CELI et placements non enregistrés (vous et votre conjoint)",
              },
              {
                titre: "Loyer ou charges admissibles",
                desc: "Consacrer au moins 30 % de votre revenu familial à votre loyer ou à vos charges d'habitation",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            Attention : les personnes vivant dans un HLM, une résidence pour aînés à but non lucratif subventionnée,
            ou bénéficiant déjà d&apos;une aide directe au logement ne sont généralement pas admissibles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien pouvez-vous recevoir ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            L&apos;allocation-logement verse un montant fixe parmi trois paliers, selon votre{" "}
            <strong>taux d&apos;effort au logement</strong>{" "}(la part de votre revenu familial consacrée au loyer ou
            aux charges d&apos;habitation) :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Paliers de versement mensuel (octobre 2025 à septembre 2026)</p>
            <div className="space-y-2">
              {[
                { situation: "Taux d'effort de 30 % à 49,9 % du revenu", montant: "100 $/mois" },
                { situation: "Taux d'effort de 50 % à 79,9 % du revenu", montant: "150 $/mois" },
                { situation: "Taux d'effort de 80 % et plus du revenu", montant: "170 $/mois" },
              ].map((ex) => (
                <div key={ex.situation} className="flex justify-between text-sm gap-4">
                  <span className="text-blue-900">{ex.situation}</span>
                  <span className="font-bold text-blue-800 shrink-0">{ex.montant}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            * L&apos;allocation-logement n&apos;est pas un calcul continu : c&apos;est l&apos;un de ces trois montants fixes qui est
            versé selon le palier atteint. Vérifiez votre taux d&apos;effort exact et votre admissibilité (y compris le
            plafond d&apos;épargne de 50 000 $) avec le simulateur officiel de Revenu Québec.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande ?</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Rassemblez vos documents",
                texte: "Préparez votre dernier avis de cotisation provincial (Revenu Québec), votre bail ou contrat de location (ou relevé de taxes foncières si vous êtes propriétaire), et votre numéro d'assurance sociale.",
              },
              {
                num: "2",
                titre: "Accédez à Mon dossier de Revenu Québec",
                texte: "Rendez-vous sur revenuquebec.ca et connectez-vous via Mon dossier ou clicSÉQUR. La demande se fait entièrement en ligne — aucun déplacement requis. Le programme relève de la Société d'habitation du Québec, mais Revenu Québec traite les demandes.",
              },
              {
                num: "3",
                titre: "Remplissez le formulaire de demande",
                texte: "Indiquez vos revenus, la composition de votre ménage, le montant mensuel de votre loyer ou de vos charges d'habitation, et vos coordonnées bancaires pour le dépôt direct.",
              },
              {
                num: "4",
                titre: "Attendez la décision",
                texte: "Revenu Québec analyse votre demande et vous envoie une décision. Le traitement prend généralement environ 45 jours pour un dossier complet. En cas de refus, vous pouvez demander une révision.",
              },
              {
                num: "5",
                titre: "Recevez vos paiements et renouvelez chaque année",
                texte: "Une fois approuvée, l'allocation est versée mensuellement. Vous devez renouveler votre demande chaque année — Revenu Québec vous enverra un avis à cet effet.",
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

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Ce que plusieurs Québécois ignorent</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            L&apos;allocation-logement est l&apos;une des aides les plus sous-utilisées au Québec, simplement parce qu&apos;elle est méconnue.
            Voici trois points importants à retenir :
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <div className="space-y-4 text-sm text-green-900">
              <div>
                <p className="font-semibold">Non imposable et sans impact sur vos autres aides</p>
                <p className="text-green-700 mt-0.5">
                  L&apos;allocation-logement n&apos;est pas incluse dans votre revenu imposable. Elle ne réduit pas non plus
                  votre droit au crédit de solidarité ni au Supplément de revenu garanti fédéral.
                </p>
              </div>
              <div>
                <p className="font-semibold">Cumulable avec d&apos;autres programmes</p>
                <p className="text-green-700 mt-0.5">
                  Elle est compatible avec le crédit d&apos;impôt pour maintien à domicile (70 ans et plus),
                  le Supplément de revenu garanti (SRG) et les crédits provinciaux comme la solidarité.
                  Vous pouvez recevoir tout cela en même temps.
                </p>
              </div>
              <div>
                <p className="font-semibold">Les propriétaires aussi peuvent en bénéficier</p>
                <p className="text-green-700 mt-0.5">
                  Si vous êtes propriétaire-occupant à faible revenu et que vos charges d&apos;habitation
                  (taxes, intérêts hypothécaires, frais de condo) sont élevées, vous êtes aussi admissible.
                  Beaucoup de propriétaires à la retraite passent à côté de cette aide.
                </p>
              </div>
              <div>
                <p className="font-semibold">Pas seulement pour les 50 ans et plus</p>
                <p className="text-green-700 mt-0.5">
                  Un ménage avec au moins un enfant à charge peut être admissible même si personne n&apos;a
                  50 ans, en plus de respecter les seuils de revenu et le plafond d&apos;épargne de 50 000 $.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-blue-700 text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-blue-200 text-sm mb-4">
            Allocation-logement, Supplément de revenu garanti, crédit de solidarité — faites le tour complet en 2 minutes.
          </p>
          <TrackingLink
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
            tracking={{ cta_name: "trouver_mes_aides", cta_location: "allocation_logement_blog_final", destination: "/fr/questionnaire" }}
          >
            Trouver mes aides →
          </TrackingLink>
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.revenuquebec.ca/fr/citoyens/votre-situation/faible-revenu/programme-allocation-logement/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Revenu Québec – Programme Allocation-logement
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
  titre: "Guide allocation-logement Québec 2026 : exemples et démarches",
  description: "Guide explicatif sur l’allocation-logement au Québec : exemples, points à vérifier et démarches, avec un lien vers la fiche principale du programme.",
  date: "2026-06-29",
  categorie: "Logement",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
