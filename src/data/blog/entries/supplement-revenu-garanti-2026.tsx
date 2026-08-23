import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import TrackingLink from "@/components/TrackingLink";
import type { BlogArticle } from "@/data/blog/types";
import { serializeJsonLd } from "@/utils/jsonLd";

const slug = "supplement-revenu-garanti-2026";

const baseMetadata: Metadata = {
  title: "Supplément de revenu garanti 2026 : montants, tableau et admissibilité",
  description:
    "Tout savoir sur le SRG 2026 : montants mensuels selon votre situation conjugale, seuils de revenu, comment faire la demande et cumul avec la pension de Sécurité de la vieillesse.",
  keywords: [
    "supplément revenu garanti 2026",
    "SRG aînés Québec",
    "montant SRG 2026",
    "sécurité vieillesse supplément",
    "aide revenu faible aîné",
    "SRG seuil revenu",
    "supplément revenu garanti demande",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/supplement-revenu-garanti-2026",
  },
};

const faqs = [
  {
    q: "Qui est admissible au Supplément de revenu garanti en 2026?",
    r: "Vous devez généralement recevoir la pension de la Sécurité de la vieillesse, résider au Canada et avoir un revenu annuel sous les seuils applicables à votre situation.",
  },
  {
    q: "Où trouver le tableau des montants du SRG 2026?",
    r: "Le tableau officiel des montants et seuils doit être vérifié sur Canada.ca ou auprès de Service Canada, car les montants peuvent changer selon la période de paiement.",
  },
  {
    q: "Le SRG est-il imposable?",
    r: "Le SRG est généralement non imposable, mais il reste important de produire votre déclaration de revenus chaque année pour maintenir ou renouveler votre admissibilité.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/fr" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>← Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        {/* En-tête article */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">Retraite</span>
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · 21 avril 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Supplément de revenu garanti 2026 : montants, tableau et admissibilité
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Supplément de revenu garanti (SRG) est une prestation fédérale mensuelle non imposable
            versée aux aînés de 65 ans et plus qui ont un faible revenu. En 2026, le montant
            dépend de votre revenu, de votre situation conjugale et de votre admissibilité à la
            pension de la Sécurité de la vieillesse.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Prestation <strong>non imposable</strong>{" "} versée en plus de la pension de Sécurité de la vieillesse (SV)</li>
            <li>✓ Montant variable selon votre revenu, votre état civil et les seuils officiels en vigueur</li>
            <li>✓ Admissible dès <strong>65 ans</strong>{" "} si votre revenu net annuel est sous les seuils établis</li>
            <li>✓ Cumulable avec la pension SV, le crédit de solidarité et l&apos;allocation logement du Québec</li>
          </ul>
        </div>

        <div style={{ background: "#060D1A" }} className="rounded-2xl p-5 text-center mb-8">
          <p className="font-bold text-white mb-2">Vérifiez les aides qui peuvent s&apos;ajouter au SRG</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            Le questionnaire croise retraite, revenu, logement et situation familiale.
          </p>
          <TrackingLink
            href="/fr/questionnaire"
            className="inline-block font-bold px-5 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#060D1A" }}
            tracking={{ cta_name: "verifier_mes_aides", cta_location: "srg_intro", destination: "/fr/questionnaire" }}
          >
            Vérifier mes aides →
          </TrackingLink>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi le Supplément de revenu garanti ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le SRG est un programme fédéral administré par Service Canada. Il s&apos;adresse aux aînés qui
            reçoivent déjà la pension de la{" "}
            <Link href="/blog/securite-vieillesse-quebec-2026" className="text-blue-600 underline">Sécurité de la vieillesse (SV)</Link>{" "}
            et dont le revenu annuel est insuffisant pour subvenir à leurs besoins essentiels.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            Contrairement à la pension SV, qui est imposable, le SRG est entièrement{" "}
            <strong>exonéré d&apos;impôt</strong>. Il est ajouté à votre pension SV sous forme d&apos;un seul
            paiement mensuel, par dépôt direct ou par chèque.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Le montant est recalculé chaque année en juillet à partir de votre déclaration de revenus
            de l&apos;année précédente. Si votre revenu annuel diminue à cause d&apos;une retraite ou de la
            réduction d&apos;une autre pension, Service Canada peut plutôt estimer votre revenu de l&apos;année en cours.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui a droit au SRG en 2026 ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour recevoir le SRG, vous devez remplir <strong>toutes</strong>{" "} les conditions suivantes :
          </p>
          <div className="space-y-3 mb-4">
            {[
              {
                titre: "Avoir 65 ans ou plus",
                texte: "Vous devez avoir atteint l&apos;âge de 65 ans pour faire la demande."
              },
              {
                titre: "Recevoir la pension de la Sécurité de la vieillesse",
                texte: "Le SRG est un supplément à la SV — vous devez être admissible à la pension SV et en faire la demande en même temps ou l&apos;avoir déjà."
              },
              {
                titre: "Résider au Canada",
                texte: "Vous devez être citoyen canadien ou résident autorisé, vivre au Canada et ne pas avoir d&apos;entente de parrainage en cours, sauf exception officielle."
              },
              {
                titre: "Avoir un revenu en dessous du seuil",
                texte: "Votre revenu annuel net (excluant la SV et le SRG) doit être inférieur aux seuils établis selon votre situation conjugale."
              },
            ].map((item) => (
              <div key={item.titre} className="flex gap-3 items-start">
                <div className="w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                  <p className="text-slate-500 text-sm" dangerouslySetInnerHTML={{ __html: item.texte }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            <strong>Bon à savoir :</strong>{" "} Si vous avez entre 60 et 64 ans et que votre conjoint(e)
            reçoit la SV et le SRG, vous pourriez avoir droit à l&apos;<strong>Allocation</strong>{" "} —
            un programme connexe de Service Canada. Renseignez-vous auprès de Service Canada.
          </p>
        </section>

        {/* Section 3 — Montants */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants du SRG en 2026 selon votre situation</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les montants sont révisés en janvier, avril, juillet et octobre selon l&apos;indice des prix à la
            consommation. Voici les maximums officiels en vigueur de juillet à septembre 2026.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Maximums du SRG — juillet à septembre 2026</p>
            <div className="space-y-3">
              {[
                {
                  situation: "Personne seule, veuve ou divorcée",
                  srg: "1 123,17 $/mois",
                  seuil: "Revenu inférieur à 22 800 $",
                },
                {
                  situation: "Couple : les deux reçoivent la SV",
                  srg: "676,09 $/mois par personne",
                  seuil: "Revenu combiné inférieur à 30 096 $",
                },
                {
                  situation: "Couple : le conjoint reçoit l’Allocation",
                  srg: "676,09 $/mois",
                  seuil: "Revenu combiné inférieur à 42 144 $",
                },
                {
                  situation: "Couple : le conjoint ne reçoit ni la SV ni l’Allocation",
                  srg: "1 123,17 $/mois",
                  seuil: "Revenu combiné inférieur à 54 624 $",
                },
              ].map((row) => (
                <div key={row.situation} className="bg-white rounded-xl p-4 border border-blue-100">
                  <p className="font-semibold text-blue-900 text-sm mb-2">{row.situation}</p>
                  <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                    <div>
                      <p className="text-blue-600">SRG maximal</p>
                      <p className="font-bold text-blue-800">{row.srg}</p>
                    </div>
                    <div>
                      <p className="text-blue-600">Seuil applicable</p>
                      <p className="font-bold text-blue-800">{row.seuil}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-blue-600 text-xs mt-3">
              * Maximums non garantis : le paiement réel varie selon le revenu. Ces valeurs ne conviennent pas aux personnes qui reçoivent une pension partielle de la SV.
            </p>
            <p className="text-blue-700 text-xs mt-2">
              Source :{" "}
              <a
                href="https://www.canada.ca/fr/services/prestations/pensionspubliques/securite-vieillesse/supplement-revenu-garanti/montant-prestation.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                montants officiels du SRG
              </a>.
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed text-sm">
            Le SRG diminue généralement à mesure que votre revenu augmente. Certains revenus peuvent
            être exclus ou traités différemment; vérifiez les règles officielles avant de planifier un
            retrait REER, une rente ou un revenu d&apos;emploi.
          </p>
        </section>

        {/* Section 4 — Seuils */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Seuils de revenu pour avoir droit au SRG en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Votre <strong>revenu annuel net</strong>{" "} (excluant la SV et le SRG eux-mêmes) doit être
            inférieur aux seuils applicables à votre situation pour recevoir au moins un montant partiel de SRG :
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-4">
            <p className="font-bold text-amber-800 mb-3">Seuils de revenu — juillet à septembre 2026</p>
            <div className="space-y-2 text-sm">
              {[
                { situation: "Personne seule, veuve ou divorcée", seuil: "Moins de 22 800 $" },
                { situation: "Couple : les deux reçoivent la SV", seuil: "Moins de 30 096 $ combinés" },
                { situation: "Couple : le conjoint reçoit l’Allocation", seuil: "Moins de 42 144 $ combinés" },
                { situation: "Couple : le conjoint ne reçoit ni la SV ni l’Allocation", seuil: "Moins de 54 624 $ combinés" },
              ].map((row) => (
                <div key={row.situation} className="flex justify-between items-center py-1.5 border-b border-amber-200 last:border-0">
                  <span className="text-amber-900">{row.situation}</span>
                  <span className="font-bold text-amber-800 whitespace-nowrap ml-4">{row.seuil}</span>
                </div>
              ))}
            </div>
            <p className="text-amber-700 text-xs mt-3">
              * Les seuils n&apos;incluent pas la pension SV, les premiers 5 000 $ de revenu d&apos;emploi ou de travail autonome, ni 50 % de la tranche comprise entre 5 000 $ et 15 000 $.
            </p>
            <p className="text-amber-800 text-xs mt-2">
              Source :{" "}
              <a
                href="https://www.canada.ca/fr/emploi-developpement-social/programmes/pensions/pension/statistiques/rapport-trimestriel/2026-trimestriel-juillet-septembre.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                rapport trimestriel officiel de juillet à septembre 2026
              </a>.
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed text-sm">
            <strong>Exemple de lecture :</strong>{" "} Une personne seule de 68 ans doit comparer ses revenus
            imposables, excluant les revenus que Service Canada ne retient pas dans le calcul, avec le
            seuil officiel applicable. Le montant final doit être confirmé dans Mon dossier Service Canada
            ou auprès de Service Canada.
          </p>
        </section>

        <aside className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5" aria-labelledby="srg-next-step-title">
          <p id="srg-next-step-title" className="font-bold text-amber-950 mb-2">
            Votre revenu semble sous le seuil du SRG?
          </p>
          <p className="text-sm leading-relaxed text-amber-900 mb-4">
            Le SRG n&apos;est qu&apos;une des aides possibles. Vérifiez aussi les programmes liés au logement,
            aux crédits d&apos;impôt et au revenu selon votre situation complète.
          </p>
          <TrackingLink
            href="/fr/questionnaire"
            className="inline-block rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950"
            tracking={{
              cta_name: "voir_mes_autres_aides",
              cta_location: "srg_after_thresholds",
              destination: "/fr/questionnaire",
            }}
          >
            Voir mes autres aides possibles →
          </TrackingLink>
          <p className="mt-3 text-xs text-amber-800">
            Outil indicatif de 2 minutes. L&apos;admissibilité finale doit être confirmée auprès des organismes officiels.
          </p>
        </aside>

        {/* Section 5 — Comment faire la demande */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande de SRG ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Dans la plupart des cas, si vous avez déjà reçu le SRG et que vous produisez votre
            déclaration de revenus chaque année, le renouvellement est <strong>automatique</strong>.
            Pour une première inscription, voici les étapes :
          </p>

          <div className="space-y-4">
            {[
              {
                num: "1",
                titre: "Vérifiez votre lettre d’inscription",
                texte: "Peu après votre 64e anniversaire, Service Canada peut confirmer votre inscription automatique à la SV et tenter de vous inscrire automatiquement au SRG.",
              },
              {
                num: "2",
                titre: "Produisez votre déclaration de revenus annuellement",
                texte: "Le renouvellement du SRG est automatique si vous produisez votre déclaration de revenus chaque année avant le 30 avril. Service Canada utilise les données de votre déclaration.",
              },
              {
                num: "3",
                titre: "Signalez tout changement de revenu en cours d&apos;année",
                texte: "Si votre revenu annuel baisse en raison d&apos;une retraite ou de la réduction d&apos;une pension, appelez Service Canada : le calcul peut alors utiliser une estimation du revenu de l&apos;année en cours.",
              },
              {
                num: "4",
                titre: "Présentez une demande au besoin",
                texte: "Si Service Canada vous le demande, utilisez Mon dossier Service Canada ou envoyez le formulaire papier correspondant à votre situation.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 items-start bg-white rounded-2xl border border-slate-100 p-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold shrink-0" style={{ background: "#060D1A", color: "#F5C842" }}>
                  {step.num}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm mb-1">{step.titre}</p>
                  <p className="text-slate-500 text-sm" dangerouslySetInnerHTML={{ __html: step.texte }} />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-4">
            <p className="text-sm text-slate-700">
              <strong>Astuce :</strong>{" "} Service Canada envoie en juillet une lettre indiquant si la
              prestation est renouvelée, modifiée ou arrêtée. Si votre paiement de juillet manque,
              contactez rapidement Service Canada avec vos renseignements de revenu.
            </p>
          </div>
        </section>

        {/* Section 6 — Cumul */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">SRG + SV + aides québécoises : maximisez votre revenu</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le SRG est <strong>cumulable</strong>{" "} avec plusieurs autres programmes, tant fédéraux
            que provinciaux. Un aîné québécois à faible revenu peut combiner :
          </p>
          <div className="space-y-3 mb-4">
            {[
              { label: "Pension de la Sécurité de la vieillesse (SV)", montant: "selon l&apos;âge et le dossier", href: "/blog/securite-vieillesse-quebec-2026", federal: true },
              { label: "Supplément de revenu garanti (SRG)", montant: "montant selon revenu", href: null, federal: true },
              { label: "Crédit de solidarité Québec (composante TVQ + habitation)", montant: "selon la situation", href: "/fr/budget/credit-solidarite", federal: false },
              { label: "Allocation logement du Québec", montant: "jusqu&apos;à 170 $/mois", href: "/fr/budget/allocation-logement", federal: false },
              { label: "Crédit d&apos;impôt pour frais médicaux", montant: "variable selon les dépenses", href: "/credit-impot-frais-medicaux-quebec", federal: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between bg-white rounded-xl border border-slate-100 px-4 py-3 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`text-xs px-1.5 py-0.5 rounded font-semibold shrink-0 ${item.federal ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>
                    {item.federal ? "Fédéral" : "Québec"}
                  </span>
                  {item.href ? (
                    <Link href={item.href} className="text-sm text-blue-700 font-medium truncate" dangerouslySetInnerHTML={{ __html: item.label }} />
                  ) : (
                    <span className="text-sm text-slate-700 font-medium truncate" dangerouslySetInnerHTML={{ __html: item.label }} />
                  )}
                </div>
                <span className="text-sm font-bold text-slate-800 whitespace-nowrap ml-2" dangerouslySetInnerHTML={{ __html: item.montant }} />
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            En cumulant tous ces programmes, un aîné québécois seul et locataire avec un faible revenu
            peut devoir coordonner plusieurs programmes. L&apos;important est de vérifier chaque aide avec
            sa source officielle, car les revenus qui réduisent le SRG peuvent aussi influencer d&apos;autres
            crédits basés sur le revenu.
          </p>
        </section>

        {/* Liens internes */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Autres aides qui pourraient vous intéresser</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { texte: "Sécurité de la vieillesse 2026", href: "/blog/securite-vieillesse-quebec-2026" },
              { texte: "Allocation logement du Québec", href: "/fr/budget/allocation-logement" },
              { texte: "Crédit de solidarité Québec", href: "/fr/budget/credit-solidarite" },
              { texte: "Crédit d&apos;impôt pour frais médicaux", href: "/credit-impot-frais-medicaux-quebec" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors"
                dangerouslySetInnerHTML={{ __html: "→ " + item.texte }}
              />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Questions fréquentes sur le SRG 2026</h2>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <article key={faq.q} className="bg-white rounded-xl border border-slate-100 p-4">
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.r}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "#060D1A" }} className="rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg text-white mb-2">Découvrez toutes vos aides en 2 minutes</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            SRG, crédit de solidarité, allocation logement — notre questionnaire identifie tous les programmes auxquels vous avez droit.
          </p>
          <TrackingLink
            href="/fr/questionnaire"
            className="inline-block font-bold px-6 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#060D1A" }}
            tracking={{ cta_name: "trouver_mes_aides", cta_location: "srg_final", destination: "/fr/questionnaire" }}
          >
            Trouver mes aides →
          </TrackingLink>
        </div>

        {/* Source officielle */}
        <p className="text-center text-slate-400 text-xs mt-4">
          Source officielle :{" "}
          <a
            href="https://www.canada.ca/fr/services/prestations/pensionspubliques/securite-vieillesse/supplement-revenu-garanti.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Service Canada – Supplément de revenu garanti
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
  titre: "Supplément de revenu garanti 2026 : montants, tableau et admissibilité",
  description:
    "Tout savoir sur le SRG 2026 : montants mensuels selon votre situation conjugale, seuils de revenu, comment faire la demande et cumul avec la pension SV.",
  date: "2026-04-21",
  categorie: "Retraite",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
