import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import TrackingLink from "@/components/TrackingLink";
import type { BlogArticle } from "@/data/blog/types";
import { serializeJsonLd } from "@/utils/jsonLd";

const slug = "securite-vieillesse-quebec-2026";

const baseMetadata: Metadata = {
  title: "Sécurité de la vieillesse 2026 : Montants, admissibilité et comment faire votre demande",
  description:
    "Sécurité de la vieillesse en 2026 : maximums de juillet à septembre, admissibilité à 65 ans, report à 70 ans et cumul possible avec le SRG.",
  keywords: [
    "Sécurité de la vieillesse 2026",
    "pension SV montant 2026",
    "SV admissibilité Québec",
    "bonification SV 70 ans",
    "SRG supplément revenu garanti",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/securite-vieillesse-quebec-2026",
  },
};

const faqs = [
  {
    q: "Quel est le montant maximal de la Sécurité de la vieillesse en 2026?",
    r: "De juillet à septembre 2026, le maximum mensuel est de 751,97 $ pour les 65 à 74 ans et de 827,17 $ pour les 75 ans et plus. Le montant réel peut être inférieur.",
  },
  {
    q: "Combien d'années faut-il avoir vécu au Canada pour recevoir la SV?",
    r: "Une personne qui vit au Canada doit généralement y avoir résidé au moins 10 ans depuis l'âge de 18 ans. Une pension complète exige généralement 40 ans de résidence; d'autres règles s'appliquent à l'étranger.",
  },
  {
    q: "Est-ce avantageux de reporter la SV jusqu'à 70 ans?",
    r: "Le paiement augmente de 0,6 % par mois de report, jusqu'à 36 % à 70 ans. Le choix dépend toutefois des autres revenus et de l'admissibilité au SRG, qui ne peut pas être reçu pendant le report de la SV.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.r,
    },
  })),
};

function Content() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />
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
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 6 avril 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Sécurité de la vieillesse 2026 : Montants, admissibilité et comment faire votre demande
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            La pension de la Sécurité de la vieillesse (SV) est une prestation fédérale mensuelle offerte aux personnes
            admissibles dès 65 ans. De juillet à septembre 2026, son maximum atteint <strong>751,97 $ par mois</strong>{' '}
            pour les 65 à 74 ans et <strong>827,17 $ pour les 75 ans et plus</strong>. Le montant réel dépend notamment
            de l&apos;âge, du revenu et des années de résidence au Canada.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Admissible dès <strong>65 ans</strong>{' '} sous réserve du statut légal, de la résidence et du revenu</li>
            <li>✓ Maximums de juillet à septembre 2026 : <strong>751,97 $/mois</strong>{' '} (65-74 ans) ou <strong>827,17 $/mois</strong>{' '} (75 ans et plus)</li>
            <li>✓ Différer à 70 ans augmente la pension de <strong>36 %</strong>{' '} par rapport au montant à 65 ans</li>
            <li>✓ Cumul possible avec le SRG : jusqu&apos;à <strong>1 123,17 $ de plus</strong>{' '} par mois pour une personne seule admissible</li>
          </ul>
        </div>

        <div style={{ background: "#060D1A" }} className="rounded-2xl p-5 text-center mb-8">
          <p className="font-bold text-white mb-2">Vérifiez les prestations qui peuvent s&apos;ajouter à la SV</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            Le questionnaire aide à repérer les programmes liés à la retraite, au revenu et au logement.
          </p>
          <TrackingLink
            href="/fr/questionnaire"
            className="inline-block font-bold px-5 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#060D1A" }}
            tracking={{ cta_name: "verifier_mes_prestations", cta_location: "securite_vieillesse_intro", destination: "/fr/questionnaire" }}
          >
            Vérifier mes prestations →
          </TrackingLink>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi la Sécurité de la vieillesse ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            La Sécurité de la vieillesse est un programme fédéral administré par Service Canada. Contrairement au Régime
            de rentes du Québec (RRQ), elle ne dépend <strong>pas de vos cotisations</strong>{' '} au cours de votre vie active.
            Son admissibilité ne dépend pas de vos cotisations : elle repose notamment sur l&apos;âge, le statut légal,
            la résidence au Canada et le revenu.
          </p>
          <p className="text-slate-600 leading-relaxed">
            La pension SV est imposable, mais elle est indexée trimestriellement à l&apos;Indice des prix à la consommation
            (IPC). Les paiements sont révisés en janvier, avril, juillet et octobre et ne diminuent pas si le coût de la vie baisse.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui y a droit ? Les conditions d&apos;admissibilité</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour recevoir généralement la pension complète de la SV tout en vivant au Canada, vérifiez ces quatre conditions :
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { titre: "Âge", desc: "Avoir 65 ans ou plus au moment de la demande." },
              { titre: "Résidence au Canada", desc: "Avoir vécu légalement au Canada pendant au moins 40 ans après vos 18 ans (pour la pension complète)." },
              { titre: "Citoyenneté ou statut légal", desc: "Être citoyen canadien ou résident légal au moment de l'approbation de votre demande." },
              { titre: "Revenu", desc: "Avoir un revenu net sous le seuil annuel applicable à votre groupe d'âge." },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <p className="font-semibold mb-1">Pension partielle</p>
            <p>
              Si vous avez vécu au Canada entre 10 et 39 ans, vous recevez une <strong>pension partielle</strong>{' '} :
              1/40e de la pension complète par année de résidence. Par exemple, 25 ans de résidence =
              25/40e (62,5 %) de la pension maximale.
            </p>
          </div>
        </section>

        {/* Section 3 — Montants */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants de la SV en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les montants sont indexés chaque trimestre. Voici les maximums officiels de juillet à septembre 2026 :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Pension mensuelle maximale</p>
            <div className="space-y-3">
              {[
                { groupe: "65 à 74 ans", montant: "751,97 $", note: "maximum mensuel, pension complète" },
                { groupe: "75 ans et plus", montant: "827,17 $", note: "inclut l'augmentation automatique de 10 %" },
              ].map((row) => (
                <div key={row.groupe} className="flex justify-between items-start text-sm">
                  <div>
                    <span className="text-blue-900 font-medium">{row.groupe}</span>
                    <p className="text-blue-600 text-xs mt-0.5">{row.note}</p>
                  </div>
                  <span className="font-extrabold text-blue-800 text-base whitespace-nowrap ml-4">{row.montant}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-500 text-xs mt-4">
              * Maximums non garantis pour une pension complète. Vérifiez le trimestre courant sur{" "}
              <a href="https://www.canada.ca/fr/services/prestations/pensionspubliques/securite-vieillesse/paiements.html" target="_blank" rel="noopener noreferrer" className="underline">Canada.ca</a>.
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Pour les paiements fondés sur le revenu de 2025, l&apos;impôt de récupération peut s&apos;appliquer si votre
            revenu net dépasse <strong>93 454 $</strong>. Le seuil et le montant à rembourser varient selon l&apos;année;
            consultez le{" "}
            <a href="https://www.canada.ca/fr/services/prestations/pensionspubliques/securite-vieillesse/montant-prestation.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">calcul officiel</a>{" "}
            avant de planifier un retrait imposable.
          </p>
        </section>

        {/* Section 4 — Bonification à 70 ans */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Différer sa pension : la bonification à 70 ans</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Vous pouvez choisir de <strong>retarder</strong>{' '} le début de votre pension SV jusqu&apos;à l&apos;âge de 70 ans.
            Pour chaque mois de report après 65 ans, la pension augmente de <strong>0,6 %</strong>{" "}, soit une
            bonification permanente de <strong>36 %</strong>{' '} si vous attendez jusqu&apos;à 70 ans.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-4">
            <p className="font-bold text-green-800 mb-3">Comparaison : 65 ans vs 70 ans (groupe 65-74)</p>
            <div className="space-y-2 text-sm">
              {[
                { age: "Pension à 65 ans", mensuel: "751,97 $/mois", annuel: "9 024 $/an" },
                { age: "Pension à 70 ans (+36 %)", mensuel: "1 022,68 $/mois", annuel: "12 272 $/an" },
              ].map((row) => (
                <div key={row.age} className="flex justify-between">
                  <span className="text-green-900">{row.age}</span>
                  <div className="text-right">
                    <span className="font-bold text-green-800">{row.mensuel}</span>
                    <p className="text-green-600 text-xs">{row.annuel}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-green-700 text-xs mt-3">
              Exemple fondé sur le maximum de juillet à septembre 2026. Le choix de reporter dépend notamment de vos
              autres revenus et de votre admissibilité au SRG; il n&apos;y a aucun avantage à reporter au-delà de 70 ans.{" "}
              <a href="https://www.canada.ca/fr/services/prestations/pensionspubliques/securite-vieillesse/quand-debut.html" target="_blank" rel="noopener noreferrer" className="underline">Voir les règles officielles du report</a>.
            </p>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            <strong>Attention :</strong>{' '} après 65 ans, un paiement rétroactif peut couvrir au maximum 11 mois à
            compter de la réception de la demande. Aucun paiement rétroactif n&apos;est versé pour une période où vous avez choisi de reporter la SV.
          </p>
        </section>

        {/* Section 5 — SRG */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le SRG : jusqu&apos;à 1 123,17 $ de plus par mois</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le Supplément de revenu garanti (SRG) est une prestation <strong>non imposable</strong>{' '} versée en plus de la
            pension SV aux aînés à faible revenu. Service Canada tente l&apos;inscription automatique lorsqu&apos;il possède
            assez de renseignements; produire sa déclaration de revenus chaque année aide à maintenir les paiements.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">SRG maximum mensuel — juillet à septembre 2026</p>
            <div className="space-y-2 text-sm">
              {[
                { situation: "Personne seule", srg: "1 123,17 $", revenu: "Revenu annuel &lt; 22 800 $" },
                { situation: "Couple (2 bénéficiaires SV)", srg: "676,09 $ chacun", revenu: "Revenu du couple &lt; 30 096 $" },
                { situation: "Couple (conjoint sans SV ni Allocation)", srg: "1 123,17 $", revenu: "Revenu du couple &lt; 54 624 $" },
              ].map((row) => (
                <div key={row.situation} className="flex justify-between items-start text-sm border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                  <div>
                    <span className="text-blue-900 font-medium">{row.situation}</span>
                    <p className="text-blue-600 text-xs mt-0.5" dangerouslySetInnerHTML={{ __html: row.revenu }} />
                  </div>
                  <span className="font-bold text-blue-800 whitespace-nowrap ml-4">{row.srg}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Pour une personne seule admissible de 65 à 74 ans, les maximums affichés totalisent jusqu&apos;à{" "}
            <strong>1 875,14 $/mois</strong>, avant toute réduction liée au revenu ou à une pension partielle. La portion
            SRG est non imposable, tandis que la pension SV est imposable. Pour en savoir plus, consultez notre guide sur le{" "}
            <Link href="/supplement-revenu-garanti-2026" className="text-blue-700 underline">SRG 2026</Link>.
          </p>
        </section>

        {/* Section 6 — Faire sa demande */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Service Canada peut vous inscrire automatiquement s&apos;il possède vos renseignements d&apos;admissibilité.
            La lettre arrive généralement autour du 64e anniversaire. Sinon, voici les étapes :
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Vérifiez si vous êtes inscrit automatiquement",
                texte: "Si un mois s'est écoulé depuis votre 64e anniversaire sans lettre d'inscription, communiquez avec Service Canada pour savoir si vous devez présenter une demande.",
              },
              {
                num: "2",
                titre: "Faites la demande en ligne ou par courrier",
                texte: "Présentez la demande dans Mon dossier Service Canada ou utilisez le formulaire papier Demande de pension de la SV et de SRG (ISP-3550).",
              },
              {
                num: "3",
                titre: "Demandez le SRG en même temps",
                texte: "Si votre revenu est faible, demandez aussi le SRG. Produisez votre déclaration de revenus chaque année pour permettre le recalcul et éviter une interruption des paiements.",
              },
              {
                num: "4",
                titre: "Recevez vos versements mensuels",
                texte: "Le premier paiement est versé le mois suivant votre 65e anniversaire ou à la date de début choisie. Les paiements sont mensuels, par dépôt direct ou par chèque.",
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

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Questions fréquentes sur la SV en 2026</h2>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-xl border border-slate-100 bg-white p-4">
                <h3 className="mb-1 text-sm font-semibold text-slate-800">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{faq.r}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "#060D1A" }} className="text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            SV, SRG, crédit de solidarité, allocation logement — notre questionnaire gratuit identifie chaque programme en 2 minutes.
          </p>
          <TrackingLink
            href="/fr/questionnaire"
            className="inline-block font-bold px-6 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#060D1A" }}
            tracking={{ cta_name: "trouver_mes_aides", cta_location: "securite_vieillesse_final", destination: "/fr/questionnaire" }}
          >
            Trouver mes aides →
          </TrackingLink>
        </div>

        {/* Source officielle */}
        <p className="text-center text-slate-400 text-xs">
          Source officielle :{" "}
          <a
            href="https://www.canada.ca/fr/emploi-developpement-social/programmes/securite-vieillesse.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca – Sécurité de la vieillesse
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
  titre: "Sécurité de la vieillesse 2026 : Montants, admissibilité et comment faire votre demande",
  description: "Pension SV 2026 : jusqu'à 827,17 $/mois à 75 ans, bonification de 36 % si vous reportez à 70 ans, et cumul possible avec le SRG.",
  date: "2026-04-06",
  categorie: "Retraite",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;
