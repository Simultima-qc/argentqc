import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import TrackingLink from "@/components/TrackingLink";

export const metadata: Metadata = {
  title: "Retraite Québec 2026 : REER, CELI, CELIAPP et stratégies",
  description:
    "Optimisez votre retraite au Québec avec les bons outils : REER, CELI, CELIAPP, RAP, impôts et stratégies concrètes pour éviter les erreurs coûteuses.",
  keywords: [
    "retraite Québec 2026",
    "stratégie retraite Québec",
    "REER CELI CELIAPP",
    "REER ou CELI",
    "RAP REER Québec",
  ],
};

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";

const tools = [
  {
    title: "REER",
    href: "/retraite/reer",
    tag: "Réduire l'impôt maintenant",
    text: "Utile quand votre taux d'imposition actuel est plus élevé que celui prévu à la retraite.",
  },
  {
    title: "CELI",
    href: "/retraite/celi",
    tag: "Garder de la flexibilité",
    text: "Les retraits ne sont pas imposables et peuvent compléter vos revenus sans alourdir la facture fiscale.",
  },
  {
    title: "REER ou CELI",
    href: "/retraite/reer-vs-celi",
    tag: "Choisir le bon ordre",
    text: "Comparer les deux comptes selon votre revenu, vos projets et votre besoin de flexibilité.",
  },
  {
    title: "CELIAPP",
    href: "/retraite/celiapp",
    tag: "Premier achat + avantage fiscal",
    text: "Un outil puissant si vous êtes admissible et qu'un achat immobilier fait partie du plan.",
  },
  {
    title: "RAP",
    href: "/retraite/reer",
    tag: "Utiliser le REER pour acheter",
    text: "Peut aider à financer une mise de fonds, mais doit être planifié pour ne pas nuire à la retraite.",
  },
];

const mistakes = [
  "Cotiser au REER sans comparer avec le CELI.",
  "Choisir un véhicule seulement pour le remboursement d'impôt immédiat.",
  "Oublier que les retraits REER seront imposables plus tard.",
  "Négliger le CELIAPP avant un premier achat admissible.",
  "Accumuler des comptes sans ordre clair ni objectif de décaissement.",
];

const examples = [
  {
    title: "Salarié à 75 000 $",
    text: "Le REER peut devenir intéressant si la cotisation réduit un palier d'impôt, surtout si le remboursement est réinvesti au lieu d'être dépensé.",
  },
  {
    title: "Couple avec projet immobilier",
    text: "Le CELIAPP peut passer avant le CELI ou le REER classique si l'achat est réaliste et que les droits de cotisation sont disponibles.",
  },
  {
    title: "Personne proche retraite",
    text: "Le CELI peut parfois être préférable pour garder des retraits flexibles et éviter de gonfler le revenu imposable futur.",
  },
];

const startSteps = [
  {
    step: "1",
    title: "Clarifier votre objectif",
    text: "Retraite seulement, achat immobilier, réduction d'impôt ou flexibilité?",
    links: [
      { href: "/retraite/celiapp", label: "Voir le CELIAPP" },
      { href: "/retraite/reer", label: "Voir le REER" },
    ],
  },
  {
    step: "2",
    title: "Comparer REER et CELI",
    text: "Le bon choix dépend surtout de votre revenu actuel, de votre revenu futur et de votre besoin de liquidité.",
    links: [
      { href: "/retraite/reer-vs-celi", label: "Comparatif REER vs CELI" },
      { href: "/retraite/reer", label: "Guide REER" },
      { href: "/retraite/celi", label: "Guide CELI" },
    ],
  },
  {
    step: "3",
    title: "Choisir un ordre de cotisation",
    text: "Un ordre logique évite de cotiser au mauvais endroit et de payer trop d'impôt à long terme.",
    links: [{ href: "/questionnaire", label: "Voir ma stratégie" }],
  },
];

const guides = [
  {
    href: "/retraite/reer-vs-celi",
    title: "REER ou CELI",
    text: "Comparer les deux comptes et choisir un ordre de priorité.",
  },
  {
    href: "/retraite/reer",
    title: "Guide REER",
    text: "Cotisations, déductions, remboursement d'impôt et erreurs fréquentes.",
  },
  {
    href: "/retraite/celi",
    title: "Guide CELI",
    text: "Droits de cotisation, retraits non imposables et stratégie retraite.",
  },
  {
    href: "/retraite/celiapp",
    title: "Guide CELIAPP",
    text: "Premier achat, plafonds, fiscalité et lien avec le REER.",
  },
];

const faqs = [
  {
    q: "REER ou CELI : lequel choisir pour la retraite?",
    r: "Le REER est souvent plus intéressant si votre revenu actuel est élevé et que votre revenu de retraite sera plus bas. Le CELI est souvent préférable si vous voulez de la flexibilité ou si votre taux d'imposition futur risque d'être semblable.",
  },
  {
    q: "Quand le REER devient-il vraiment intéressant?",
    r: "Le REER devient généralement plus puissant quand la déduction réduit un impôt élevé aujourd'hui et que les retraits seront faits à un taux plus bas plus tard. Le remboursement devrait idéalement être utilisé pour épargner ou rembourser une dette coûteuse.",
  },
  {
    q: "Le CELIAPP vaut-il la peine au Québec?",
    r: "Oui, si vous êtes admissible et qu'un premier achat immobilier est plausible. Il combine une déduction comme le REER avec des retraits non imposables pour un achat admissible, ce qui peut être très avantageux.",
  },
  {
    q: "Peut-on utiliser REER, CELI et CELIAPP en même temps?",
    r: "Oui. La vraie question est l'ordre de priorité. Selon votre revenu, votre projet immobilier et votre horizon de retraite, il peut être préférable de remplir un compte avant un autre.",
  },
  {
    q: "Le RAP est-il une bonne stratégie?",
    r: "Le RAP peut aider à acheter une première propriété avec des fonds REER, mais il faut rembourser les montants au REER selon les règles. Sans plan de remboursement, il peut affaiblir l'épargne retraite.",
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

function CtaButton({ location, className = "" }: { location: string; className?: string }) {
  return (
    <TrackingLink
      href="/questionnaire"
      tracking={{
        cta_name: "Voir ma stratégie retraite",
        cta_location: location,
        destination: "/questionnaire",
      }}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl bg-yellow-400 px-5 py-4 text-center text-sm font-extrabold text-slate-950 no-underline shadow-[0_18px_55px_rgba(245,200,66,0.28)] transition hover:bg-yellow-300 ${className}`}
    >
      Voir ma stratégie retraite
    </TrackingLink>
  );
}

export default function RetraitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: PARCH }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section className="px-5 py-12 text-white sm:py-16" style={{ background: DARK }}>
          <div className="mx-auto max-w-4xl">
            <nav className="mb-4 text-xs text-slate-400">
              <Link href="/" className="text-slate-400 no-underline">
                Accueil
              </Link>
              <span aria-hidden="true"> › </span>
              <span className="text-slate-300">Retraite</span>
            </nav>

            <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
                  Retraite Québec 2026
                </p>
                <h1
                  className="mb-4 text-[clamp(2rem,6vw,3.6rem)] font-extrabold leading-[1.05]"
                  style={{ color: "#F0EBE0", fontFamily: "var(--font-playfair)" }}
                >
                  Retraite au Québec : les stratégies qui peuvent vraiment faire une différence
                </h1>
                <p className="mb-6 max-w-2xl text-base leading-7 text-slate-300">
                  Le bon ordre entre{" "}
                  <Link href="/retraite/reer" className="font-bold text-yellow-300 underline">
                    REER
                  </Link>
                  ,{" "}
                  <Link href="/retraite/celi" className="font-bold text-yellow-300 underline">
                    CELI
                  </Link>{" "}
                  et{" "}
                  <Link href="/retraite/celiapp" className="font-bold text-yellow-300 underline">
                    CELIAPP
                  </Link>{" "}
                  peut changer vos impôts, vos revenus futurs et les erreurs coûteuses à éviter.
                </p>
                <CtaButton location="hero" className="w-full sm:w-auto" />
                <p className="mt-3 rounded-2xl border border-yellow-300/25 bg-yellow-300/10 px-4 py-3 text-center text-sm font-extrabold text-yellow-200 sm:inline-flex sm:text-left">
                  💰 Une bonne stratégie peut représenter des milliers de dollars de différence à long terme
                </p>
              </div>

              <aside className="border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
                  À optimiser
                </p>
                <p className="mt-4 text-4xl font-black leading-none text-white">REER + CELI</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Le montant cotisé compte. L&apos;ordre, le compte utilisé et le moment du retrait comptent souvent autant.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-10">
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Les outils les plus importants</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Une stratégie retraite n&apos;est pas seulement une cotisation. C&apos;est le choix du bon compte, au bon moment.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {tools.map((tool) => (
                <Link
                  key={tool.title}
                  href={tool.href}
                  className="border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-blue-300"
                >
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-emerald-700">
                    {tool.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold text-slate-950">{tool.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{tool.text}</p>
                  <span className="mt-4 block text-sm font-bold text-blue-700">Voir le guide →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-12 bg-slate-950 p-6 text-white sm:p-8">
            <h2 className="text-2xl font-extrabold">Ce que beaucoup de Québécois font mal</h2>
            <div className="mt-6 grid gap-3">
              {mistakes.map((mistake) => (
                <div key={mistake} className="flex gap-3 border-t border-white/10 pt-4">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-yellow-400" aria-hidden="true" />
                  <p className="text-sm leading-6 text-slate-300">{mistake}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Exemples concrets</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {examples.map((example) => (
                <article key={example.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-extrabold text-slate-950">{example.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{example.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12 rounded-[28px] border border-yellow-200 bg-yellow-50 p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold text-slate-950">Par où commencer</h2>
            <div className="mt-5 grid gap-3">
              {startSteps.map((item) => (
                <article key={item.step} className="bg-white p-4 sm:flex sm:gap-4">
                  <span className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-extrabold text-yellow-300 sm:mb-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.links.map((link) => (
                        <Link
                          key={link.href + link.label}
                          href={link.href}
                          className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-900 no-underline"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-950">Guides les plus utiles</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Approfondissez le compte qui a le plus d&apos;impact sur votre situation avant de cotiser.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-blue-300"
                >
                  <span className="block text-base font-extrabold text-slate-950">{guide.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-600">{guide.text}</span>
                  <span className="mt-4 block text-sm font-bold text-blue-700">Lire le guide →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-12">
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

          <section className="mb-10 rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-center sm:p-8">
            <h2 className="text-xl font-extrabold text-slate-950">
              Votre stratégie retraite pourrait être plus rentable que vous pensez
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              Prenez quelques minutes pour voir quel ordre de priorité pourrait convenir à votre situation.
            </p>
            <CtaButton location="final" className="mt-5 w-full sm:w-auto" />
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
