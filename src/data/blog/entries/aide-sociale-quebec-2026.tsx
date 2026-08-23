import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import TrackingLink from "@/components/TrackingLink";
import type { BlogArticle } from "@/data/blog/types";
import { serializeJsonLd } from "@/utils/jsonLd";

const slug = "aide-sociale-quebec-2026";

const baseMetadata: Metadata = {
  title: "Aide sociale Québec 2026 : Montants, conditions et comment faire une demande",
  description:
    "Aide sociale et solidarité sociale 2026 : montants selon votre situation, conditions d'admissibilité, démarches de demande et prestations spéciales.",
  keywords: [
    "aide sociale Québec 2026",
    "montant aide sociale 2026",
    "comment faire demande aide sociale Québec",
    "solidarité sociale Québec",
    "aide de dernier recours Québec",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/aide-sociale-quebec",
  },
};

const faqs = [
  {
    q: "Comment faire une demande d'aide sociale au Québec?",
    r: "Remplissez les formulaires officiels, puis transmettez-les en ligne, par la poste ou à un bureau de Services Québec. Après leur réception, une vérification d'identité en personne est requise.",
  },
  {
    q: "Quels sont les montants d'aide sociale en 2026?",
    r: "En 2026, un adulte seul reçoit 845 $ par mois à l'aide sociale sans contraintes de santé, 1 014 $ avec contraintes de santé, ou 1 318 $ à la solidarité sociale. La situation familiale, les revenus, les biens et les ajustements peuvent modifier le montant.",
  },
  {
    q: "Quand les dépôts d'aide sociale sont-ils versés?",
    r: "Les prestations sont versées chaque mois. En 2026, le calendrier officiel prévoit notamment des versements le 30 janvier, le 27 février, le 1er avril et le 31 juillet. Consultez Québec.ca ou votre dossier pour toutes les dates et votre prochain versement.",
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
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>? Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        {/* En-tête article */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Aide sociale</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · Publié le 11 avril 2026 · Vérifié le 8 août 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Aide sociale Québec 2026 : Montants, conditions et comment faire une demande
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            L&apos;aide financière de dernier recours est un filet de sécurité géré par le ministère de
            l&apos;Emploi et de la Solidarité sociale. Le Ministère administre quatre programmes d&apos;assistance
            sociale; ce guide se concentre sur le <strong>Programme d&apos;aide sociale</strong>{" "}et le{" "}
            <strong>Programme de solidarité sociale</strong>.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>• Aide sociale : 845 $ par mois pour un adulte seul sans contraintes de santé</li>
            <li>• Solidarité sociale : 1 318 $ par mois pour un adulte seul</li>
            <li>• Revenus, avoirs, biens et composition familiale peuvent modifier la prestation</li>
            <li>• Formulaires transmissibles en ligne, par la poste ou à Services Québec; vérification d&apos;identité en personne</li>
          </ul>
        </div>

        <div style={{ background: "#060D1A" }} className="rounded-2xl p-5 text-center mb-8">
          <p className="font-bold text-white mb-2">Voyez les autres aides possibles selon votre situation</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            Le questionnaire tient compte du revenu, du logement, de la famille et des crédits connexes.
          </p>
          <TrackingLink
            href="/fr/questionnaire"
            className="inline-block font-bold px-5 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#060D1A" }}
            tracking={{ cta_name: "voir_les_aides_possibles", cta_location: "aide_sociale_intro", destination: "/fr/questionnaire" }}
          >
            Voir les aides possibles →
          </TrackingLink>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Aide sociale vs solidarité sociale : quelle différence ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Au Québec, l&apos;aide de dernier recours est divisée en deux programmes bien distincts. Le choix
            du programme ne vous appartient pas : c&apos;est votre situation qui détermine lequel s&apos;applique.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                titre: "Programme d'aide sociale",
                desc: "Pour un adulte seul ou une famille sans contraintes sévères de santé. Le montant dépend notamment de la composition familiale, des contraintes de santé, du type d'hébergement et des revenus.",
              },
              {
                titre: "Programme de solidarité sociale",
                desc: "Pour un adulte seul ou une famille dont au moins un adulte présente des contraintes sévères de santé. Le montant dépend notamment de la composition familiale, du type d'hébergement, des revenus et des biens.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 — Montants */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants 2026 selon votre situation</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les montants mensuels ci-dessous sont ceux publiés pour 2026. Les revenus, les biens, le type
            d&apos;hébergement, les contraintes de santé, la composition familiale et les ajustements applicables
            peuvent changer le montant réellement versé.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Programme d&apos;aide sociale — montants mensuels</p>
            <div className="space-y-2">
              {[
                { situation: "Adulte seul, sans contraintes de santé", montant: "845 $" },
                { situation: "Adulte seul, avec contraintes de santé", montant: "1 014 $" },
                { situation: "Deux adultes, sans contraintes de santé", montant: "1 283 $" },
                { situation: "Deux adultes, situations différentes", montant: "1 452 $" },
                { situation: "Deux adultes, avec contraintes de santé", montant: "1 574 $" },
              ].map((ex) => (
                <div key={ex.situation} className="flex justify-between text-sm">
                  <span className="text-blue-900">{ex.situation}</span>
                  <span className="font-bold text-blue-800">{ex.montant}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-700 text-xs mt-3">
              Source :{" "}
              <a href="https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale/information-aide-financiere/montants-prestations-aide-sociale" target="_blank" rel="noopener noreferrer" className="underline">
                barème mensuel officiel de l&apos;aide sociale
              </a>.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5">
            <p className="font-bold text-purple-800 mb-3">Programme de solidarité sociale — montants mensuels</p>
            <div className="space-y-2">
              {[
                { situation: "Adulte seul", montant: "1 318 $" },
                { situation: "Deux adultes", montant: "1 934 $" },
              ].map((ex) => (
                <div key={ex.situation} className="flex justify-between text-sm">
                  <span className="text-purple-900">{ex.situation}</span>
                  <span className="font-bold text-purple-800">{ex.montant}</span>
                </div>
              ))}
            </div>
            <p className="text-purple-700 text-xs mt-3">
              Source :{" "}
              <a href="https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale/information-aide-financiere/montants-prestations-solidarite-sociale" target="_blank" rel="noopener noreferrer" className="underline">
                barème mensuel officiel de la solidarité sociale
              </a>.
            </p>
          </div>
        </section>

        {/* Section 3 — Admissibilité */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui peut faire une demande ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les critères de base publiés par Québec.ca sont les suivants :
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                icone: "??",
                titre: "Résider au Québec",
                texte: "Vous devez résider au Québec. Des formulaires ou documents supplémentaires peuvent être requis selon votre situation, notamment pour un demandeur d'asile.",
              },
              {
                icone: "??",
                titre: "Avoir 18 ans ou plus",
                texte: "Si vous avez moins de 18 ans, vous devez aussi être marié ou l'avoir déjà été, ou être parent d'un enfant à charge.",
              },
              {
                icone: "??",
                titre: "Avoir des ressources insuffisantes",
                texte: "Votre argent, vos biens, vos gains, vos avantages et vos revenus doivent être égaux ou inférieurs aux barèmes réglementaires.",
              },
              {
                icone: "??",
                titre: "Faire évaluer l'ensemble de vos ressources",
                texte: "L'aide accordée varie selon votre situation. Le simulateur officiel donne une première indication, mais la décision appartient au Ministère.",
              },
            ].map((point) => (
              <div key={point.titre} className="flex gap-4 items-start bg-white rounded-xl border border-slate-100 px-4 py-3">
                <span className="text-xl shrink-0">{point.icone}</span>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{point.titre}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{point.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Démarches */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande étape par étape</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Rassemblez vos documents",
                texte: "Remplissez les formulaires officiels et réunissez une pièce d'identité avec photo délivrée par un organisme public. Des formulaires ou documents supplémentaires peuvent être exigés selon votre situation.",
              },
              {
                num: "2",
                titre: "Transmettez les formulaires",
                texte: "Vous pouvez transmettre les formulaires en ligne, par la poste ou les déposer à un bureau de Services Québec. Une vérification d'identité en personne reste requise après leur réception.",
              },
              {
                num: "3",
                titre: "Répondez aux demandes de précision",
                texte: "Un agent peut communiquer avec vous et demander des documents pour clarifier certains renseignements. L'analyse commence lorsque tous les documents essentiels ont été fournis.",
              },
              {
                num: "4",
                titre: "Recevez la décision",
                texte: "Le Ministère annonce un avis de décision dans les 5 jours ouvrables suivant la réception de tous les documents essentiels. Si la demande est acceptée, l'avis indique le montant accordé.",
              },
              {
                num: "5",
                titre: "Déclarez tout changement sans délai",
                texte: "Signalez dès qu'il survient tout changement de situation, par exemple un emploi, une variation de revenu, une nouvelle adresse ou un changement dans la composition familiale.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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

        {/* Section 5 — Avantages connexes */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Prestations spéciales et mesures connexes</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Certaines protections sont liées au carnet de réclamation; d&apos;autres aides exigent une autorisation, des justificatifs ou une demande séparée.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <div className="space-y-3 text-sm">
              {[
                { avantage: "Carnet de réclamation", detail: "Permet au prestataire et à sa famille d'obtenir certains médicaments et services de santé sans frais; il est transmis chaque mois." },
                { avantage: "Prestations spéciales", detail: "Peuvent couvrir certains médicaments, services optométriques ou dentaires, transports médicaux et besoins particuliers, selon les conditions." },
                { avantage: "Soutien à l'emploi", detail: "Des services d'aide à l'emploi et certains remboursements peuvent être offerts selon la démarche et le programme." },
                { avantage: "Crédits et aide au logement", detail: "Le crédit d'impôt pour solidarité et l'Allocation-logement ont leurs propres critères; ils ne sont pas accordés automatiquement avec l'aide sociale." },
              ].map((item) => (
                <div key={item.avantage} className="flex gap-3">
                  <span className="text-green-600 font-bold shrink-0">?</span>
                  <div>
                    <span className="font-semibold text-green-900">{item.avantage}</span>
                    <span className="text-green-800">{" "}— {item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            Pour comparer ces mesures avec d&apos;autres programmes, consultez aussi le hub des{" "}
            <Link href="/aides-financieres" className="text-blue-600 underline">aides financières au Québec</Link>{" "}
            et le guide des{" "}
            <Link href="/aides-financieres/logement" className="text-blue-600 underline">aides au logement</Link>.
          </p>
        </section>

        {/* Section 6 — Cumul */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Peut-on travailler tout en recevant l&apos;aide sociale ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Oui. Une partie du revenu de travail est exclue du calcul, puis un supplément peut réduire
            l&apos;effet du revenu excédentaire sur la prestation. Voici les règles publiées pour 2026 :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-bold text-blue-800 mb-3">Revenus de travail permis sans réduction</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-blue-900">Un adulte</span>
                <span className="font-bold text-blue-800">200 $ par mois</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Deux adultes</span>
                <span className="font-bold text-blue-800">300 $ par mois</span>
              </div>
            </div>
            <p className="text-blue-700 text-xs">
              La part du revenu qui dépasse le montant permis est d&apos;abord soustraite de la prestation.
              Si au moins 1 $ de prestation demeure, un supplément égal à 25 % de cet excédent est ensuite
              ajouté. Le revenu et tout changement de situation doivent être déclarés sans délai.
            </p>
            <p className="text-blue-700 text-xs mt-3">Source : barèmes mensuels officiels de l&apos;aide sociale et de la solidarité sociale.</p>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            Des programmes de supplément au salaire comme <strong>Prime au travail</strong>{" "} peuvent aussi
            bonifier vos revenus lors du retour en emploi. Consultez notre{" "}
            <Link href="/credit-impot-quebec" className="text-blue-600 underline">guide des crédits d&apos;impôt</Link>{" "}
            pour en savoir plus.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Questions fréquentes sur l&apos;aide sociale 2026</h2>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <article key={faq.q} className="bg-white rounded-xl border border-slate-100 p-4">
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.r}</p>
              </article>
            ))}
          </div>
        </section>

        <div style={{ background: "#060D1A" }} className="text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            Au-delà de l&apos;aide sociale, il existe des dizaines de programmes provinciaux et fédéraux.
            Répondez à quelques questions pour voir ce qui s&apos;applique à votre situation.
          </p>
          <TrackingLink
            href="/fr/questionnaire"
            className="inline-block font-bold px-6 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#060D1A" }}
            tracking={{ cta_name: "trouver_mes_aides", cta_location: "aide_sociale_final", destination: "/fr/questionnaire" }}
          >
            Trouver mes aides ?
          </TrackingLink>
        </div>

        {/* Lien officiel */}
        <p className="text-center text-slate-400 text-xs mt-6 leading-relaxed">
          Sources officielles :{" "}
          <a href="https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale" target="_blank" rel="noopener noreferrer" className="underline">description des programmes</a>
          {" · "}
          <a href="https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale/etapes-a-suivrepour-presenter-une-demande" target="_blank" rel="noopener noreferrer" className="underline">faire une demande</a>
          {" · "}
          <a href="https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale/information-aide-financiere" target="_blank" rel="noopener noreferrer" className="underline">montants et dates</a>
          {" · "}
          <a href="https://www.quebec.ca/famille-et-soutien-aux-personnes/aide-sociale-et-solidarite-sociale/prestations-de-base" target="_blank" rel="noopener noreferrer" className="underline">prestations spéciales</a>
          .
        </p>
      </article>

      <SiteFooter
        legalText="Outil informatif non affilié au gouvernement. Le montant réel dépend de l'évaluation officielle de votre dossier."
        contactLabel="Contactez-nous"
        contentClassName="max-w-2xl mx-auto text-center"
        style={{ marginTop: "16px" }}
      />
    </main>
  );
}

const article: BlogArticle = {
  slug,
  titre: "Aide sociale Québec 2026 : Montants, conditions et comment faire une demande",
  description: "Aide sociale et solidarité sociale 2026 : montants selon votre situation, conditions d'admissibilité, démarches de demande, dates de dépôt et avantages connexes.",
  date: "2026-04-11",
  categorie: "Aide sociale",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;
