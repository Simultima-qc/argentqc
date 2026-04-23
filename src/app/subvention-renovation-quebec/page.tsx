import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export const metadata: Metadata = {
  title: "Subvention rénovation Québec : montants, admissibilité et estimation",
  description:
    "Voyez combien vous pourriez recevoir pour des travaux de rénovation au Québec, les critères à vérifier et comment maximiser le montant possible selon votre projet.",
  keywords: [
    "subvention rénovation Québec",
    "aide rénovation Québec",
    "subventions maison Québec",
    "rénovation énergétique Québec",
    "montant subvention rénovation",
  ],
};

const quickFacts = [
  ["Potentiel", "Variable selon les travaux"],
  ["Temps pour vérifier", "2 minutes"],
  ["Complexité", "Modérée"],
  ["Travaux liés", "Isolation, thermopompe, rénovation énergétique"],
];

const amountRanges = [
  {
    title: "Travaux ciblés",
    range: "potentiel plus limité",
    text: "Une rénovation précise peut parfois donner une aide utile, mais le montant reste souvent plus mesuré.",
  },
  {
    title: "Rénovation énergétique",
    range: "potentiel souvent plus élevé",
    text: "Les travaux qui améliorent la performance du bâtiment peuvent changer fortement le potentiel récupérable.",
  },
  {
    title: "Projet plus large",
    range: "potentiel supérieur",
    text: "Quand plusieurs leviers sont envisagés ensemble, le montant global peut devenir beaucoup plus intéressant.",
  },
];

const examples = [
  {
    title: "Petit projet ciblé",
    text: "Un projet précis peut parfois permettre de récupérer une aide utile, mais souvent plus limitée.",
    estimate: "Potentiel indicatif : utile, mais plus mesuré",
  },
  {
    title: "Projet optimisé",
    text: "Quand la rénovation s'insère dans une logique plus réfléchie, le potentiel peut devenir plus intéressant.",
    estimate: "Potentiel indicatif : plus intéressant selon les choix",
  },
  {
    title: "Projet global",
    text: "Une vision plus large du projet permet souvent de mieux voir où se trouve le vrai potentiel d'aide.",
    estimate: "Potentiel indicatif : plusieurs leviers à vérifier",
  },
];

const missedItems = [
  "Tous les travaux de rénovation ne créent pas le même potentiel.",
  "Les projets liés à l'efficacité énergétique changent souvent la donne.",
  "Beaucoup de gens pensent aux travaux, mais pas à la stratégie d'aide.",
  "Le vrai potentiel apparaît souvent mieux lorsqu'on regarde le projet dans son ensemble.",
  "Lire une fiche programme ne suffit pas à comprendre ce que votre projet peut réellement valoir.",
  "Le bon ordre des décisions peut compter avant de signer ou de commencer.",
];

const maximizeTips = [
  "Pensez votre projet comme un ensemble plutôt qu'une série de décisions séparées.",
  "Vérifiez tôt les travaux qui ont le plus de sens dans votre cas.",
  "Comparez plusieurs scénarios avant d'avancer.",
  "Regardez les pistes liées à l'efficacité énergétique.",
  "Évitez les raccourcis qui réduisent votre marge de manoeuvre.",
];

const processSteps = [
  {
    title: "De quoi dépend le montant",
    text: "Du type de bâtiment, des travaux envisagés, de leur portée et des programmes applicables au moment du projet.",
  },
  {
    title: "Pourquoi certains travaux valent plus",
    text: "Les travaux qui améliorent l'efficacité énergétique ou structurent mieux le bâtiment peuvent ouvrir un potentiel plus intéressant.",
  },
  {
    title: "Pourquoi vérifier son cas",
    text: "Deux projets semblables sur papier peuvent mener à des résultats très différents selon le bâtiment, les démarches et l'ordre des décisions.",
  },
];

const faqItems = [
  {
    q: "Est-ce que tous les travaux de rénovation donnent droit à une aide?",
    r: "Non. Le potentiel dépend du type de travaux, du bâtiment et des critères applicables au programme visé.",
  },
  {
    q: "Combien peut-on recevoir pour des rénovations?",
    r: "Le montant varie beaucoup selon la nature des travaux et le contexte global du projet. Un petit projet ciblé et une rénovation énergétique plus complète ne mènent pas au même potentiel.",
  },
  {
    q: "Peut-on combiner plusieurs programmes?",
    r: "Dans certains cas, oui. Il faut regarder le projet dans son ensemble pour comprendre le vrai potentiel plutôt que de se limiter à une seule fiche programme.",
  },
  {
    q: "Faut-il faire certaines démarches avant les travaux?",
    r: "Selon les programmes visés, oui. Il vaut mieux vérifier tôt plutôt qu'après coup, parce que certaines étapes ou validations peuvent compter avant de commencer.",
  },
  {
    q: "Les travaux d'efficacité énergétique sont-ils plus avantageux?",
    r: "Souvent, ce sont eux qui offrent le potentiel le plus intéressant, surtout lorsqu'ils s'insèrent dans un projet plus structuré.",
  },
  {
    q: "Combien de temps faut-il pour recevoir l'argent?",
    r: "Les délais varient selon la démarche, le programme concerné, les documents transmis et le traitement du dossier.",
  },
  {
    q: "Est-ce qu'un projet global est souvent plus intéressant?",
    r: "Souvent oui, parce que le vrai potentiel apparaît mieux quand plusieurs décisions cohérentes sont regardées ensemble.",
  },
];

const relatedLinks = [
  { href: "/subventions-maison-quebec", title: "Subventions maison au Québec", text: "Vue d'ensemble des aides pour la maison, l'énergie et la rénovation." },
  { href: "/subvention-thermopompe-quebec", title: "Subvention thermopompe au Québec", text: "Voir le potentiel d'une thermopompe dans un projet énergétique." },
  { href: "/subvention-isolation-quebec", title: "Subvention isolation au Québec", text: "Comprendre comment l'isolation peut augmenter le potentiel d'aide." },
  { href: "/reno-climat-quebec", title: "Rénoclimat au Québec", text: "Voir les démarches liées à la rénovation énergétique." },
  { href: "/chauffez-vert-quebec", title: "Chauffez vert au Québec", text: "Explorer les aides liées au remplacement d'un système de chauffage admissible." },
  { href: "/questionnaire", title: "Estimation personnalisée", text: "Vérifier rapidement quels programmes pourraient s'appliquer à votre situation." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.r,
    },
  })),
};

function CtaButton({ location, className = "" }: { location: string; className?: string }) {
  return (
    <TrackingLink
      href="/questionnaire"
      tracking={{
        cta_name: "Voir combien je peux recevoir",
        cta_location: location,
        destination: "/questionnaire",
      }}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl bg-yellow-400 px-5 py-4 text-center text-sm font-extrabold text-slate-950 no-underline shadow-[0_18px_50px_rgba(245,200,66,0.24)] transition hover:bg-yellow-300 ${className}`}
    >
      Voir combien je peux recevoir
    </TrackingLink>
  );
}

export default function SubventionRenovationQuebecPage() {
  return (
    <main className="min-h-screen" style={{ background: PARCH }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header
        className="sticky top-0 z-10 px-4 py-3 shadow-[0_1px_0_rgba(255,255,255,0.06)]"
        style={{ background: DARK }}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link
            href="/"
            className="text-[15px] font-extrabold no-underline"
            style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}
          >
            ArgentQC.ca
          </Link>
          <TrackingLink
            href="/questionnaire"
            tracking={{
              cta_name: "Voir combien je peux recevoir",
              cta_location: "header",
              destination: "/questionnaire",
            }}
            className="text-xs font-semibold underline"
            style={{ color: GOLD }}
          >
            Voir combien je peux recevoir
          </TrackingLink>
        </div>
      </header>

      <section className="px-5 py-12 text-white sm:py-16" style={{ background: DARK }}>
        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-[1.35fr_0.85fr] md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
              Subvention rénovation Québec
            </p>
            <h1
              className="mb-4 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-[1.05]"
              style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0" }}
            >
              Subvention rénovation Québec : combien pouvez-vous recevoir?
            </h1>
            <p className="mb-5 max-w-2xl text-base leading-7 text-slate-300">
              Les travaux de rénovation n&apos;ouvrent pas tous le même potentiel. Voici l&apos;essentiel pour estimer ce
              que vous pourriez récupérer selon votre projet et éviter les erreurs fréquentes.
            </p>
            <CtaButton location="hero" className="w-full sm:w-auto" />
            <p className="mt-2 text-center text-xs text-slate-400 sm:max-w-sm">
              Estimation rapide selon votre situation
            </p>
          </div>

          <aside className="border border-white/10 bg-white/[0.04] p-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
              Infos rapides
            </p>
            <dl className="space-y-4">
              {quickFacts.map(([label, value]) => (
                <div key={label} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <dt className="text-xs text-slate-400">{label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-100">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Montants indicatifs pour des travaux de rénovation au Québec
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Le montant réel dépend du projet, mais voici quelques ordres de grandeur pour vous situer rapidement.
          </p>
          <div className="mt-5 grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
            {amountRanges.map((item) => (
              <article
                key={item.title}
                className="border-b border-slate-100 pb-4 last:border-0 last:pb-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4 sm:last:border-r-0 sm:last:pr-0"
              >
                <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xl font-extrabold text-emerald-700">{item.range}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Les montants sont indicatifs. Le résultat réel dépend notamment du bâtiment, des travaux et des programmes applicables.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Exemples concrets</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Deux projets de rénovation peuvent mener à des résultats très différents. Voici quelques exemples illustratifs.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {examples.map((example) => (
              <article key={example.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-extrabold text-slate-900">{example.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{example.text}</p>
                <p className="mt-4 text-sm font-bold text-emerald-700">{example.estimate}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">Exemples illustratifs à titre informatif.</p>
        </section>

        <section className="mb-10 rounded-[28px] bg-slate-950 p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold">Ce que la plupart des gens manquent</h2>
          <div className="mt-5 grid gap-3">
            {missedItems.map((item) => (
              <div key={item} className="border-t border-white/10 pt-3 text-sm leading-6 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Comment maximiser ce que vous pouvez recevoir</h2>
          <div className="mt-5 grid gap-3">
            {maximizeTips.map((tip, index) => (
              <div key={tip} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-extrabold text-emerald-800">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
            <p className="text-sm leading-6 text-slate-800">
              Le but n&apos;est pas de cocher une liste de programmes. C&apos;est de comprendre si votre projet peut être
              mieux pensé avant de perdre une aide, de choisir les mauvais travaux ou de faire les démarches trop tard.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Comment ça fonctionne</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Le montant possible dépend notamment du type de bâtiment, des travaux envisagés, de leur portée et des
            programmes applicables au moment du projet. L&apos;objectif n&apos;est pas seulement de savoir si une aide existe,
            mais de voir si votre projet mérite une analyse plus poussée.
          </p>
          <div className="mt-5 grid gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.title}>
                <h3 className="text-sm font-extrabold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            Le bon réflexe est de relier votre projet aux{" "}
            <Link href="/subventions-maison-quebec" className="font-semibold text-blue-700 underline">subventions maison au Québec</Link>,
            aux travaux spécialisés comme la{" "}
            <Link href="/subvention-thermopompe-quebec" className="font-semibold text-blue-700 underline">subvention thermopompe</Link>{" "}
            et la <Link href="/subvention-isolation-quebec" className="font-semibold text-blue-700 underline">subvention isolation</Link>,
            ainsi qu&apos;aux démarches de{" "}
            <Link href="/reno-climat-quebec" className="font-semibold text-blue-700 underline">Rénoclimat</Link>{" "}
            ou de <Link href="/chauffez-vert-quebec" className="font-semibold text-blue-700 underline">Chauffez vert</Link>.
          </p>
        </section>

        <section className="mb-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">Besoin d&apos;une estimation plus ciblée?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Répondez à quelques questions pour relier vos travaux, votre bâtiment et votre situation aux programmes qui
            pourraient s&apos;appliquer.
          </p>
          <CtaButton location="mid-page" className="mt-5 w-full sm:w-auto" />
          <p className="mt-2 text-center text-xs text-slate-500 sm:text-left">
            En quelques minutes, voyez quels programmes pourraient s&apos;appliquer.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-slate-900">Questions fréquentes</h2>
          <div className="grid gap-3">
            {faqItems.map((faq) => (
              <article key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-extrabold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.r}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold text-slate-900">À voir aussi</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-blue-300"
              >
                <span className="block text-sm font-extrabold text-slate-900">{item.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">{item.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] p-6 text-center text-white sm:p-8" style={{ background: DARK }}>
          <h2 className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-playfair)" }}>
            Vous voulez savoir si vos travaux pourraient débloquer plus d&apos;aide que vous le pensez?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            En quelques minutes, voyez quels programmes pourraient s&apos;appliquer à votre situation.
          </p>
          <CtaButton location="final" className="mt-6 w-full sm:w-auto" />
          <p className="mt-2 text-xs text-slate-400">
            Estimation rapide selon votre situation.
          </p>
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          ArgentQC.ca est un outil informatif non affilié au gouvernement. Les montants sont des estimations :
          confirmez toujours les critères et les montants auprès des sources officielles avant de prendre une décision.
        </p>
      </div>

      <footer className="px-4 py-6" style={{ background: DARK }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-1 text-base font-bold" style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}>
            ArgentQC.ca
          </p>
          <p className="text-[11px] text-slate-500">Outil informatif non affilié au gouvernement.</p>
          <Link href="/contact" className="mt-2 block text-[11px] text-slate-400">
            Contactez-nous
          </Link>
        </div>
      </footer>
    </main>
  );
}
