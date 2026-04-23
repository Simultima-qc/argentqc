import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

export const metadata: Metadata = {
  title: "Rénoclimat Québec : montants, admissibilité et estimation",
  description:
    "Voyez combien Rénoclimat pourrait vous permettre de récupérer au Québec, les critères à vérifier et comment maximiser votre projet de rénovation énergétique.",
  keywords: [
    "Rénoclimat Québec",
    "subvention Rénoclimat",
    "montant Rénoclimat",
    "rénovation énergétique Québec",
    "subventions maison Québec",
  ],
};

const quickFacts = [
  ["Potentiel", "Fort si le projet est structuré"],
  ["Temps pour vérifier", "2 minutes"],
  ["Complexité", "Modérée à élevée"],
  ["Travaux liés", "Thermopompe, isolation, rénovation énergétique"],
];

const amountRanges = [
  {
    title: "Projet ciblé",
    range: "potentiel plus limité",
    text: "Un seul type de travaux peut parfois donner un résultat utile, mais le montant reste souvent plus mesuré.",
  },
  {
    title: "Rénovation énergétique plus large",
    range: "potentiel plus élevé",
    text: "Le potentiel se renforce lorsque les travaux améliorent clairement la performance du bâtiment.",
  },
  {
    title: "Projet global",
    range: "potentiel supérieur",
    text: "Quand plusieurs leviers sont coordonnés, Rénoclimat peut donner beaucoup plus de valeur au projet complet.",
  },
];

const examples = [
  {
    title: "Projet ciblé",
    text: "Un propriétaire qui envisage un seul type de travaux peut parfois obtenir un résultat intéressant, mais souvent plus modeste que prévu.",
    estimate: "Potentiel indicatif : mesuré, mais utile",
  },
  {
    title: "Projet optimisé",
    text: "Quand Rénoclimat s'insère dans une stratégie plus réfléchie avec des travaux cohérents, le potentiel peut devenir beaucoup plus intéressant.",
    estimate: "Potentiel indicatif : plus élevé selon les choix",
  },
  {
    title: "Projet global",
    text: "Une rénovation énergétique plus large permet souvent de mieux voir où se trouve le vrai potentiel d'aide.",
    estimate: "Potentiel indicatif : plusieurs leviers à vérifier",
  },
];

const missedItems = [
  "Rénoclimat prend souvent plus de sens dans un projet réfléchi que dans une décision isolée.",
  "Tous les travaux ne créent pas le même potentiel.",
  "Le bon ordre des démarches peut faire une vraie différence.",
  "Plusieurs personnes regardent un seul travail au lieu de voir l'ensemble du projet.",
  "Lire une simple fiche ne suffit pas à comprendre ce que votre projet peut réellement valoir.",
];

const maximizeTips = [
  "Pensez votre projet comme un ensemble plutôt qu'une suite de décisions séparées.",
  "Vérifiez tôt les travaux qui ont le plus de sens pour votre bâtiment.",
  "Comparez plusieurs scénarios avant d'avancer.",
  "Regardez comment Rénoclimat s'intègre avec les autres aides pertinentes.",
  "Évitez les raccourcis qui peuvent réduire votre marge de manoeuvre.",
];

const processSteps = [
  {
    title: "À quoi sert Rénoclimat",
    text: "À replacer certains travaux dans une logique de rénovation énergétique plutôt que dans une simple dépense isolée.",
  },
  {
    title: "De quoi dépend le montant",
    text: "Du bâtiment, des travaux envisagés, de leur portée et des critères applicables au moment du projet.",
  },
  {
    title: "Pourquoi vérifier avant",
    text: "Parce que deux projets similaires sur papier peuvent mener à des résultats très différents selon l'ordre des étapes.",
  },
];

const faqItems = [
  {
    q: "Qu'est-ce que Rénoclimat?",
    r: "Rénoclimat est une démarche liée à la rénovation énergétique qui peut permettre, selon le projet, d'obtenir une aide pour certains travaux.",
  },
  {
    q: "Combien peut-on recevoir avec Rénoclimat?",
    r: "Le montant varie selon les travaux, le bâtiment et la portée globale du projet. C'est justement pourquoi il vaut mieux vérifier son cas concret plutôt que de se fier à un montant général.",
  },
  {
    q: "Est-ce que tous les travaux sont admissibles?",
    r: "Non. Le potentiel dépend du type de travaux, du bâtiment et des critères applicables au programme au moment du projet.",
  },
  {
    q: "Faut-il faire certaines démarches avant les travaux?",
    r: "Oui, selon la logique du projet, certaines étapes doivent être vérifiées tôt plutôt qu'après coup. Attendre la fin des travaux peut réduire la marge de manoeuvre.",
  },
  {
    q: "Peut-on combiner Rénoclimat avec d'autres aides?",
    r: "Dans plusieurs cas, il faut regarder le projet global pour comprendre le vrai potentiel d'aide. Rénoclimat peut être plus pertinent lorsqu'il s'insère avec d'autres travaux ou programmes.",
  },
  {
    q: "Combien de temps faut-il pour recevoir l'argent?",
    r: "Les délais varient selon la démarche, les documents transmis, les étapes requises et le traitement du dossier.",
  },
  {
    q: "Est-ce que Rénoclimat est plus intéressant dans un projet global?",
    r: "Souvent oui, parce que le vrai potentiel apparaît mieux quand plusieurs décisions cohérentes sont regardées ensemble.",
  },
];

const relatedLinks = [
  { href: "/subventions-maison-quebec", title: "Subventions maison au Québec", text: "Vue d'ensemble des aides pour la maison, l'énergie et la rénovation." },
  { href: "/subvention-thermopompe-quebec", title: "Subvention thermopompe au Québec", text: "Voir comment une thermopompe peut s'intégrer à un projet énergétique." },
  { href: "/subvention-isolation-quebec", title: "Subvention isolation au Québec", text: "Comprendre le potentiel de l'isolation dans une stratégie de rénovation." },
  { href: "/subvention-renovation-quebec", title: "Subvention rénovation au Québec", text: "Explorer les autres aides et crédits liés aux rénovations résidentielles." },
  { href: "/chauffez-vert-quebec", title: "Chauffez vert au Québec", text: "Voir les aides liées au remplacement d'un système de chauffage admissible." },
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

export default function RenoClimatQuebecPage() {
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
              Rénoclimat Québec
            </p>
            <h1
              className="mb-4 text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-[1.05]"
              style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0" }}
            >
              Rénoclimat Québec : combien pouvez-vous recevoir?
            </h1>
            <p className="mb-5 max-w-2xl text-base leading-7 text-slate-300">
              Rénoclimat prend tout son sens dans un projet bien structuré. Les travaux, l&apos;ordre des démarches et
              la situation du bâtiment peuvent faire une vraie différence sur ce que vous pourriez recevoir.
            </p>
            <CtaButton location="hero" className="w-full sm:w-auto" />
            <p className="mt-3 rounded-2xl border border-yellow-300/25 bg-yellow-300/10 px-4 py-3 text-center text-sm font-extrabold text-yellow-200 sm:inline-flex sm:text-left">
              💰 Un projet bien planifié peut débloquer plus que prévu
            </p>
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
          <h2 className="text-2xl font-extrabold text-slate-900">Montants indicatifs avec Rénoclimat</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Le montant réel dépend du projet et des travaux visés, mais voici quelques ordres de grandeur pour vous
            situer rapidement.
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
            Les montants sont indicatifs. Le résultat réel dépend notamment du bâtiment, des travaux et des critères
            applicables au moment du projet.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Exemples concrets</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Deux projets de rénovation énergétique peuvent mener à des résultats très différents. Voici quelques
            exemples illustratifs.
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
              L&apos;objectif n&apos;est pas seulement de savoir si une aide existe. C&apos;est de voir si votre scénario peut être
              mieux structuré avant de signer, d&apos;acheter ou de commencer les travaux.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">Comment ça fonctionne</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Rénoclimat s&apos;insère dans une logique de rénovation énergétique où le potentiel dépend du bâtiment, des
            travaux envisagés et des critères applicables au moment du projet.
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
            Le bon réflexe est donc de regarder votre cas concret, puis de relier Rénoclimat aux autres pistes
            pertinentes comme les <Link href="/subventions-maison-quebec" className="font-semibold text-blue-700 underline">subventions maison au Québec</Link>,
            la <Link href="/subvention-thermopompe-quebec" className="font-semibold text-blue-700 underline">subvention thermopompe</Link> ou la
            <Link href="/subvention-isolation-quebec" className="font-semibold text-blue-700 underline"> subvention isolation</Link>.
          </p>
        </section>

        <section className="mb-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">Besoin d&apos;une estimation plus ciblée?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Répondez à quelques questions pour relier votre bâtiment, vos travaux et votre situation aux programmes qui
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
            Vous voulez savoir si votre projet pourrait débloquer plus d&apos;aide que vous le pensez?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Avant de lancer les démarches, voyez si votre projet énergétique est structuré pour récupérer le maximum possible.
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
