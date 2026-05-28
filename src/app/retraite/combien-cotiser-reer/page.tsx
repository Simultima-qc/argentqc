import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import TrackingLink from "@/components/TrackingLink";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export const metadata: Metadata = {
  title: "Combien cotiser à son REER au Québec?",
  description:
    "Voyez comment estimer combien cotiser à votre REER selon votre revenu, votre impôt, vos objectifs de retraite et votre marge de manœuvre.",
  alternates: { canonical: "https://argentqc.ca/retraite/combien-cotiser-reer" },
  openGraph: {
    title: "Combien cotiser à son REER au Québec?",
    description:
      "Un guide concret pour estimer la bonne cotisation REER selon votre revenu, votre taux d'impôt et vos objectifs au Québec.",
    url: "https://argentqc.ca/retraite/combien-cotiser-reer",
    siteName: "ArgentQC.ca",
    locale: "fr_CA",
    type: "article",
  },
};

const quickAnswers = [
  {
    title: "Revenu élevé",
    text: "Le REER peut être très pertinent : la déduction réduit un impôt élevé maintenant, surtout si le remboursement est réinvesti.",
  },
  {
    title: "Budget serré",
    text: "Mieux vaut éviter de cotiser un montant qui force ensuite un retrait. Un retrait hors RAP coûte cher.",
  },
  {
    title: "Revenu modeste",
    text: "Le CELI peut souvent être prioritaire. Le REER est plus puissant quand le taux marginal est plus élevé.",
  },
  {
    title: "Le maximum n'est pas toujours le bon objectif",
    text: "La bonne cotisation est celle qui améliore votre situation sans fragiliser votre budget ou votre fonds d'urgence.",
  },
];

const cinqQuestions = [
  {
    numero: "1",
    question: "Quel est mon revenu imposable cette année?",
    detail:
      "Plus votre revenu est élevé, plus la déduction REER génère un remboursement important. C'est le premier critère à évaluer.",
  },
  {
    numero: "2",
    question: "Mon taux d'impôt est-il plus élevé maintenant qu'il le sera à la retraite?",
    detail:
      "C'est souvent le cas pour les travailleurs en milieu de carrière. Si c'est votre situation, le REER peut valoir davantage que le CELI.",
  },
  {
    numero: "3",
    question: "Combien puis-je cotiser sans nuire à mon fonds d'urgence?",
    detail:
      "Un REER n'est pas un compte liquide. Si vous devez retirer pour une urgence, vous paierez de l'impôt. Gardez une réserve hors REER.",
  },
  {
    numero: "4",
    question: "Qu'est-ce que je vais faire avec le remboursement d'impôt?",
    detail:
      "Le remboursement REER devient beaucoup plus puissant s'il est réinvesti ou utilisé pour rembourser une dette coûteuse, pas dépensé.",
  },
  {
    numero: "5",
    question: "Est-ce que j'ai aussi besoin de flexibilité avec un CELI?",
    detail:
      "Le CELI permet des retraits sans impôt. Si vous anticipez des dépenses importantes à moyen terme, il peut être plus utile qu'une cotisation REER supplémentaire.",
  },
];

const quandCotiserPlus = [
  "Votre revenu imposable est élevé cette année.",
  "Vous avez reçu un bonus ou un revenu exceptionnel.",
  "La déduction peut vous faire descendre dans un palier d'imposition plus bas.",
  "Vous êtes en mesure de réinvestir le remboursement d'impôt.",
  "Votre retraite approche et votre épargne est en retard par rapport à vos objectifs.",
  "Vous avez des droits inutilisés accumulés depuis plusieurs années.",
];

const quandCotiserMoins = [
  "Votre revenu est faible ou temporairement réduit (congé, retour aux études, etc.).",
  "Vous avez des dettes à taux élevé (carte de crédit, marge de crédit).",
  "Vous n'avez pas encore de fonds d'urgence suffisant (3 à 6 mois de dépenses).",
  "Vous anticipez devoir retirer du REER dans les prochaines années.",
  "Le CELI serait une meilleure option selon votre situation fiscale actuelle.",
];

const scenarios = [
  {
    titre: "Revenu modeste, budget serré",
    detail:
      "Le CELI peut être prioritaire pour garder de la flexibilité. Une petite cotisation REER peut avoir du sens si un remboursement est attendu et sera réinvesti.",
    orientation: "Orientation : CELI d'abord, ou petite cotisation REER ciblée.",
  },
  {
    titre: "Revenu confortable, bon fonds d'urgence",
    detail:
      "Le REER devient souvent plus pertinent. La déduction génère un remboursement intéressant, surtout si ce remboursement est versé au CELI ou remboursé sur une dette.",
    orientation: "Orientation : REER prioritaire, remboursement réinvesti.",
  },
  {
    titre: "Année avec bonus ou revenu exceptionnel",
    detail:
      "Une cotisation REER ponctuelle peut permettre de réduire l'impôt sur ce revenu plus élevé. L'effet est souvent plus marqué que lors d'une année ordinaire.",
    orientation: "Orientation : cotisation REER ponctuelle peut valoir le coup.",
  },
  {
    titre: "Proche de la retraite",
    detail:
      "L'arbitrage devient plus délicat. Des cotisations REER généreront des retraits imposables bientôt. La comparaison avec le CELI mérite d'être faite attentivement.",
    orientation: "Orientation : comparer retraits futurs avant de cotiser automatiquement.",
  },
];

const guides = [
  {
    href: "/retraite/reer-vs-celi",
    title: "REER ou CELI",
    text: "Comparer les deux comptes et choisir un ordre de priorité selon votre situation.",
  },
  {
    href: "/fr/retraite/reer",
    title: "Guide REER",
    text: "Comprendre la déduction, les retraits et les erreurs fréquentes.",
  },
  {
    href: "/fr/retraite/celi",
    title: "Guide CELI",
    text: "Voir la flexibilité, les retraits sans impôt et les usages retraite.",
  },
  {
    href: "/fr/retraite",
    title: "Retraite Québec",
    text: "La vue d'ensemble : REER, CELI, RRQ, CELIAPP et stratégies.",
  },
];

const faqs = [
  {
    q: "Combien devrais-je cotiser à mon REER?",
    r: "Il n'existe pas de montant universel. La bonne cotisation dépend surtout de votre revenu imposable, de votre taux marginal d'imposition, de vos droits disponibles et de votre capacité réelle d'épargne. Une cotisation qui fragilise votre budget ou force un retrait plus tard peut coûter plus cher qu'elle ne rapporte.",
  },
  {
    q: "Est-ce que je devrais maximiser mon REER?",
    r: "Pas nécessairement. Maximiser le REER peut avoir du sens si votre revenu est élevé, votre fonds d'urgence est solide et vous êtes en mesure de réinvestir le remboursement. Pour plusieurs ménages, une cotisation ciblée est plus utile qu'une cotisation maximale.",
  },
  {
    q: "Est-ce mieux de cotiser au REER ou au CELI?",
    r: "Les deux ont leur place, selon la situation. Le REER est souvent plus avantageux à revenu élevé, parce que la déduction réduit un impôt important maintenant. Le CELI est souvent préférable si votre revenu est plus faible ou si vous avez besoin de flexibilité pour des retraits futurs sans impôt.",
  },
  {
    q: "Que faire avec le remboursement d'impôt du REER?",
    r: "Le remboursement d'impôt n'est pas un cadeau : c'est un impôt reporté. Il est beaucoup plus puissant s'il est réinvesti (au CELI, dans un autre placement) ou utilisé pour rembourser une dette coûteuse. Le dépenser réduit considérablement l'avantage net du REER.",
  },
  {
    q: "Est-ce une bonne idée de cotiser au REER si mon revenu est faible?",
    r: "Souvent non, du moins pas en priorité. Quand le revenu est faible, le taux marginal est plus bas et le remboursement est moins important. Le CELI peut alors être plus avantageux. Une stratégie possible : accumuler des droits REER pour cotiser lors d'une année de revenu plus élevé.",
  },
  {
    q: "Est-ce trop tard pour cotiser au REER proche de la retraite?",
    r: "Pas nécessairement, mais l'analyse est plus délicate. Les retraits imposables surviendront bientôt. Il faut comparer votre taux d'impôt actuel avec celui prévu à la retraite, et s'assurer que la cotisation ne génère pas plus d'impôt futur qu'elle n'en économise aujourd'hui.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.r },
  })),
};

function CtaButton({ location, name, className = "" }: { location: string; name: string; className?: string }) {
  return (
    <TrackingLink
      href="/fr/questionnaire"
      tracking={{ cta_name: name, cta_location: location, destination: "/fr/questionnaire" }}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl bg-yellow-400 px-5 py-4 text-center text-sm font-extrabold text-slate-950 no-underline shadow-[0_18px_55px_rgba(245,200,66,0.28)] transition hover:bg-yellow-300 ${className}`}
    >
      Voir ma stratégie retraite
    </TrackingLink>
  );
}

export default function CombienCotiserReerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: PARCH }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="px-5 py-12 text-white sm:py-16" style={{ background: DARK }}>
          <div className="mx-auto max-w-4xl">
            <nav className="mb-4 text-xs text-slate-400">
              <Link href="/fr" className="text-slate-400 no-underline">Accueil</Link>
              <span aria-hidden="true"> &gt; </span>
              <Link href="/fr/retraite" className="text-slate-400 no-underline">Retraite</Link>
              <span aria-hidden="true"> &gt; </span>
              <span className="text-slate-300">Combien cotiser au REER</span>
            </nav>

            <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
                  Épargne retraite · Québec
                </p>
                <h1
                  className="mb-4 text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-[1.05]"
                  style={{ color: "#F0EBE0", fontFamily: "var(--font-playfair)" }}
                >
                  Combien cotiser à son REER?
                </h1>
                <p className="mb-4 max-w-2xl text-base leading-7 text-slate-300">
                  La bonne cotisation dépend surtout du revenu imposable, du taux d&apos;impôt actuel, des droits
                  disponibles, des objectifs de retraite et de la capacité réelle d&apos;épargne.
                </p>
                <p className="mb-6 max-w-2xl rounded-2xl border border-yellow-300/25 bg-yellow-300/10 px-4 py-3 text-sm font-bold leading-6 text-yellow-100">
                  Le bon montant n&apos;est pas toujours le maximum : c&apos;est celui qui améliore votre situation sans fragiliser votre budget.
                </p>
                <CtaButton location="hero" name="combien_cotiser_reer_hero" className="w-full sm:w-auto" />
              </div>

              <aside className="border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
                  À retenir
                </p>
                <p className="mt-4 text-4xl font-black leading-none text-white">Contexte &gt; montant</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Le montant idéal n&apos;existe pas dans l&apos;absolu. Il dépend du revenu, du taux d&apos;impôt, du budget et de l&apos;usage du remboursement.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-10">

          {/* Réponse rapide */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Réponse rapide</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {quickAnswers.map((answer) => (
                <article key={answer.title} className="border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-slate-950">{answer.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{answer.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* 5 questions */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Les 5 questions à se poser avant de cotiser</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Plutôt que de viser un montant arbitraire, posez-vous ces questions pour orienter votre décision.
            </p>
            <div className="mt-5 grid gap-3">
              {cinqQuestions.map((item) => (
                <article key={item.numero} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-extrabold text-yellow-300">
                    {item.numero}
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-950">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Quand cotiser davantage / moins — deux colonnes */}
          <section className="mb-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-950">Quand cotiser davantage peut avoir du sens</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {quandCotiserPlus.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/fr/retraite/reer" className="mt-5 inline-block text-sm font-bold text-blue-700 no-underline">
                Lire le guide REER &gt;
              </Link>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-950">Quand cotiser moins peut être plus intelligent</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {quandCotiserMoins.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/fr/retraite/celi" className="mt-5 inline-block text-sm font-bold text-blue-700 no-underline">
                Lire le guide CELI &gt;
              </Link>
            </article>
          </section>

          {/* L'erreur classique */}
          <section className="mb-12 bg-slate-950 p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">L&apos;erreur classique : cotiser pour le remboursement</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Le remboursement d&apos;impôt du REER n&apos;est pas un cadeau gratuit. C&apos;est souvent de l&apos;impôt reporté
              à la retraite. Cotiser au REER uniquement pour recevoir un remboursement, puis dépenser ce
              remboursement, réduit considérablement l&apos;avantage net du compte.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Le REER devient beaucoup plus puissant quand le remboursement est utilisé intelligemment :
              versé au CELI, investi dans un autre compte, ou utilisé pour rembourser une dette coûteuse.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Cotiser au REER seulement pour le remboursement, puis dépenser ce remboursement.",
                "Croire que le remboursement est un gain net — c'est un impôt reporté à la retraite.",
                "Oublier de planifier comment les retraits futurs seront imposés.",
              ].map((item) => (
                <div key={item} className="flex gap-3 border-t border-white/10 pt-4">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-yellow-400" aria-hidden="true" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Scénarios concrets */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Scénarios concrets</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Ces orientations sont générales et ne remplacent pas une analyse personnalisée.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {scenarios.map((scenario) => (
                <article key={scenario.titre} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-slate-950">{scenario.titre}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{scenario.detail}</p>
                  <p className="mt-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-900">
                    {scenario.orientation}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* REER, CELI ou les deux? */}
          <section className="mb-12 rounded-[28px] border border-yellow-200 bg-yellow-50 p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-slate-950">REER, CELI ou les deux?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
              La vraie question n&apos;est pas seulement &quot;combien cotiser au REER&quot;, mais dans quel ordre utiliser
              REER et CELI selon votre situation. Les deux comptes sont souvent complémentaires, et choisir
              le bon ordre peut faire une différence significative à long terme.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/retraite/reer-vs-celi" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-yellow-300 no-underline">
                Comparatif REER vs CELI →
              </Link>
              <Link href="/fr/retraite/reer" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 no-underline ring-1 ring-slate-200">
                Guide REER
              </Link>
              <Link href="/fr/retraite/celi" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 no-underline ring-1 ring-slate-200">
                Guide CELI
              </Link>
            </div>
          </section>

          {/* Guides utiles */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Guides utiles</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-blue-300"
                >
                  <span className="block text-base font-extrabold text-slate-950">{guide.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-600">{guide.text}</span>
                  <span className="mt-4 block text-sm font-bold text-blue-700">Lire le guide &gt;</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <section className="mb-12 rounded-[28px] px-6 py-8 text-center" style={{ background: DARK }}>
            <h2
              className="text-2xl font-extrabold text-stone-100"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vous ne savez pas combien cotiser?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-300">
              Répondez à quelques questions et voyez quelle stratégie pourrait mieux correspondre à votre situation.
            </p>
            <CtaButton location="final" name="combien_cotiser_reer_final" className="mt-5 w-full sm:w-auto" />
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-slate-950">Questions fréquentes</h2>
            <div className="mt-5 grid gap-3">
              {faqs.map((faq) => (
                <article key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-slate-950">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{faq.r}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <SiteFooter
          legalText={"Outil informatif. Consultez un planificateur financier pour votre situation personnelle."}
          contentClassName="mx-auto max-w-4xl text-center"
          style={{ background: DARK }}
          brandStyle={{ color: GOLD, marginBottom: "4px" }}
          legalStyle={{ color: "rgb(100 116 139)" }}
          linkStyle={{ color: "rgb(148 163 184)" }}
          contactLinkStyle={{ marginTop: "8px" }}
        />
      </main>
    </>
  );
}
