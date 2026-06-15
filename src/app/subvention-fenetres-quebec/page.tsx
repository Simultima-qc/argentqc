import type { Metadata } from "next";
import Link from "next/link";
import TrackingLink from "@/components/TrackingLink";
import SiteFooter from "@/components/SiteFooter";

const DARK = "#060D1A";
const GOLD = "#F5C842";
const PARCH = "#F7F3EC";
const PAGE_URL = "https://argentqc.ca/subvention-fenetres-quebec";

export const metadata: Metadata = {
  title: "Subvention fenêtres Québec 2026 : aide pour remplacer vos fenêtres",
  description:
    "Voyez quelles aides peuvent s'appliquer au remplacement de fenêtres au Québec, quoi vérifier avant les travaux et comment éviter les erreurs fréquentes.",
  keywords: [
    "subvention fenêtres Québec 2026",
    "subvention fenêtres écoénergétiques Québec",
    "subvention remplacement fenêtres Québec",
    "aide financière fenêtres Québec",
    "subvention portes et fenêtres Québec",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Subvention fenêtres Québec 2026 : quoi vérifier avant les travaux",
    description:
      "Aides possibles, ordre des démarches et critères à vérifier avant de remplacer des fenêtres, portes ou portes-fenêtres au Québec.",
    url: PAGE_URL,
    siteName: "ArgentQC.ca",
    locale: "fr_CA",
    type: "website",
  },
};

const quickAnswers = [
  "Il n'existe pas toujours une subvention simple et automatique pour toutes les fenêtres.",
  "Les aides sont souvent liées à l'efficacité énergétique ou à une rénovation plus large.",
  "Une évaluation ou des critères précis peuvent être exigés selon le programme.",
  "Le bon réflexe : vérifier l'admissibilité avant les travaux, pas après.",
];

const openingTypes = [
  {
    title: "Fenêtres",
    text: "Le remplacement peut être admissible selon le programme, la performance recherchée et les caractéristiques du bâtiment.",
  },
  {
    title: "Portes extérieures",
    text: "Une porte ne devient pas automatiquement admissible parce qu'elle est neuve ou plus isolante. Les critères doivent être vérifiés.",
  },
  {
    title: "Portes-fenêtres",
    text: "Les exigences peuvent différer de celles des fenêtres ordinaires selon le produit et le programme actif.",
  },
  {
    title: "Isolation et étanchéité",
    text: "Le calfeutrage, l'installation et l'isolation autour des ouvertures influencent la performance réelle des travaux.",
  },
  {
    title: "Travaux combinés",
    text: "Un projet avec isolation, étanchéité ou thermopompe peut être évalué autrement qu'un remplacement de fenêtres isolé.",
  },
];

const programs = [
  {
    href: "/reno-climat-quebec",
    title: "Rénoclimat Québec",
    text: "Comprendre le rôle possible de l'évaluation énergétique et l'ordre des démarches.",
  },
  {
    href: "/subvention-renovation-quebec",
    title: "Subvention rénovation Québec",
    text: "Voir les aides qui peuvent entourer un projet de rénovation résidentielle plus large.",
  },
  {
    href: "/subvention-isolation-quebec",
    title: "Subvention isolation Québec",
    text: "Comparer les fenêtres avec les travaux d'isolation et d'étanchéité du bâtiment.",
  },
  {
    href: "/subventions-maison-quebec",
    title: "Subventions maison Québec",
    text: "Obtenir une vue d'ensemble des programmes qui pourraient s'appliquer à votre maison.",
  },
];

const commonErrors = [
  "Signer une soumission avant de vérifier l'aide et l'ordre des démarches.",
  "Croire que toutes les fenêtres, portes et portes-fenêtres sont admissibles.",
  "Oublier l'évaluation énergétique lorsqu'elle est exigée par le programme.",
  "Comparer seulement le prix sans vérifier la performance et l'admissibilité du produit.",
  "Négliger l'isolation et l'étanchéité autour des ouvertures.",
  "Confondre un crédit d'impôt, une subvention et un prêt.",
];

const scenarios = [
  {
    label: "Courants d'air",
    title: "Vieilles fenêtres qui laissent entrer l'air",
    text: "Vérifiez si le problème vient des fenêtres, de l'installation ou de l'étanchéité autour des ouvertures. Une évaluation peut aider à prioriser les travaux.",
  },
  {
    label: "Projet esthétique",
    title: "Remplacement surtout pour moderniser la maison",
    text: "Une amélioration esthétique seule ne garantit pas une aide. Vérifiez les exigences de performance avant de choisir les produits.",
  },
  {
    label: "Projet combiné",
    title: "Rénovation majeure avec isolation",
    text: "Regardez le projet dans son ensemble. L'ordre des travaux et l'évaluation énergétique peuvent influencer les options selon le programme.",
  },
  {
    label: "Pertes de chaleur",
    title: "Maison avec chauffage coûteux",
    text: "Avant de tout remplacer, comparez l'impact possible des fenêtres, de l'isolation, de l'étanchéité et du système de chauffage.",
  },
];

const checklist = [
  "Noter l'âge, l'état et les problèmes observés pour chaque ouverture.",
  "Définir si le projet vise les fenêtres, les portes, les portes-fenêtres ou leur installation.",
  "Prendre des photos et conserver les documents disponibles sur la maison.",
  "Lire les exigences du programme actif avant de demander ou signer une soumission.",
  "Vérifier les qualifications de l'entrepreneur et les détails inclus dans l'installation.",
  "Comparer la performance énergétique des produits, pas seulement leur prix.",
  "Confirmer l'ordre des démarches : évaluation, inscription, soumission, travaux et preuves.",
];

const guides = [
  {
    href: "/subventions-maison-quebec",
    title: "Subventions maison au Québec",
    text: "La vue d'ensemble des aides liées à la maison.",
  },
  {
    href: "/subvention-renovation-quebec",
    title: "Subvention rénovation au Québec",
    text: "Les pistes à vérifier pour un projet de rénovation.",
  },
  {
    href: "/subvention-isolation-quebec",
    title: "Subvention isolation au Québec",
    text: "Comparer l'impact possible de l'isolation et des fenêtres.",
  },
  {
    href: "/reno-climat-quebec",
    title: "Rénoclimat au Québec",
    text: "Comprendre la démarche d'efficacité énergétique.",
  },
  {
    href: "/subvention-thermopompe-quebec",
    title: "Subvention thermopompe au Québec",
    text: "Évaluer un autre levier possible pour réduire les coûts de chauffage.",
  },
];

const faqs = [
  {
    q: "Existe-t-il une subvention pour remplacer des fenêtres au Québec?",
    r: "Des aides peuvent parfois s'appliquer, notamment dans une démarche d'efficacité énergétique ou de rénovation. L'admissibilité dépend du programme actif, du bâtiment, des produits et de l'ordre des démarches.",
  },
  {
    q: "Est-ce que toutes les fenêtres sont admissibles à une aide?",
    r: "Non. Une fenêtre neuve ou écoénergétique n'est pas automatiquement admissible. Il faut vérifier les critères techniques et administratifs du programme avant l'achat.",
  },
  {
    q: "Faut-il faire une évaluation énergétique avant de changer ses fenêtres?",
    r: "Selon le programme, une évaluation avant les travaux peut être exigée. Cette étape est à vérifier avant de signer une soumission ou de commencer les travaux.",
  },
  {
    q: "Les portes et portes-fenêtres sont-elles admissibles?",
    r: "Elles peuvent être admissibles selon le programme et le produit choisi, mais les critères peuvent différer de ceux des fenêtres. Il faut confirmer chaque type d'ouverture.",
  },
  {
    q: "Est-ce mieux de changer les fenêtres ou d'isoler la maison?",
    r: "Cela dépend des pertes de chaleur et de l'état du bâtiment. Dans certaines maisons, l'isolation ou l'étanchéité peut avoir un meilleur impact que le remplacement des fenêtres.",
  },
  {
    q: "Peut-on demander une subvention après les travaux?",
    r: "Ce n'est pas toujours possible. Certains programmes exigent une inscription, une évaluation ou une approbation avant les travaux. Vérifiez les règles avant de commencer.",
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

function CtaButton({
  location,
  name,
  className = "",
}: {
  location: "hero" | "final";
  name: "subvention_fenetres_hero" | "subvention_fenetres_final";
  className?: string;
}) {
  return (
    <TrackingLink
      href="/questionnaire"
      tracking={{
        cta_name: name,
        cta_location: location,
        destination: "/questionnaire",
      }}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl bg-yellow-400 px-6 py-4 text-center text-sm font-extrabold text-slate-950 no-underline shadow-[0_18px_50px_rgba(245,200,66,0.24)] transition hover:-translate-y-0.5 hover:bg-yellow-300 ${className}`}
    >
      Vérifier mes aides
    </TrackingLink>
  );
}

export default function SubventionFenetresQuebecPage() {
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
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <Link
            href="/fr"
            className="text-[15px] font-extrabold no-underline"
            style={{ color: GOLD, fontFamily: "var(--font-playfair)" }}
          >
            ArgentQC.ca
          </Link>
          <TrackingLink
            href="/questionnaire"
            tracking={{
              cta_name: "subvention_fenetres_header",
              cta_location: "header",
              destination: "/questionnaire",
            }}
            className="text-xs font-semibold underline"
            style={{ color: GOLD }}
          >
            Vérifier mes aides
          </TrackingLink>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 py-12 text-white sm:py-16" style={{ background: DARK }}>
        <div
          className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full border border-yellow-300/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-6 top-24 h-40 w-40 rounded-full border border-yellow-300/10"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-4xl gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
              Portes et fenêtres · Québec 2026
            </p>
            <h1
              className="mb-5 text-[clamp(2rem,6vw,3.6rem)] font-extrabold leading-[1.04]"
              style={{ color: "#F0EBE0", fontFamily: "var(--font-playfair)" }}
            >
              Subvention fenêtres Québec : quoi vérifier avant de remplacer vos fenêtres
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              Le remplacement de fenêtres peut parfois être lié à un programme d&apos;efficacité énergétique. Mais
              l&apos;admissibilité dépend du type de travaux, de la maison, du programme actif et des exigences à
              respecter.
            </p>
            <CtaButton
              location="hero"
              name="subvention_fenetres_hero"
              className="mt-6 w-full sm:w-auto"
            />
            <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-yellow-100">
              Avant de signer une soumission, vérifiez si vos travaux peuvent entrer dans une aide existante.
            </p>
          </div>

          <aside className="border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: GOLD }}>
              Le point décisif
            </p>
            <p className="mt-4 text-2xl font-extrabold leading-tight text-white">
              Vérifier avant de signer
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Une inscription, une évaluation énergétique ou des critères de performance peuvent être exigés selon
              le programme.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-9 sm:py-12">
        <section className="mb-12 rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-800">Réponse rapide</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
            Une aide est possible, mais elle n&apos;est pas automatique
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {quickAnswers.map((answer) => (
              <div key={answer} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <span
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-black text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <p className="text-sm leading-6 text-slate-700">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">
            Fenêtres, portes-fenêtres, portes : ce qui peut changer
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Le mot « fenêtres » couvre souvent plusieurs travaux différents. Le type d&apos;ouverture, le produit et
            la qualité de l&apos;installation peuvent tous compter.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {openingTypes.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${
                  index === openingTypes.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="text-base font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Les programmes à regarder</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Les programmes et leurs critères changent. Utilisez ces guides pour orienter vos vérifications, puis
            confirmez l&apos;admissibilité avant les travaux.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {programs.map((program) => (
              <Link
                key={program.href}
                href={program.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300"
              >
                <span className="block text-base font-extrabold text-slate-950">{program.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">{program.text}</span>
                <span className="mt-4 block text-sm font-bold text-emerald-700">Consulter le guide →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[28px] bg-slate-950 p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
            Prioriser les bons travaux
          </p>
          <h2 className="mt-2 text-2xl font-extrabold">
            Quand les fenêtres peuvent être moins prioritaires
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Changer les fenêtres n&apos;offre pas toujours le meilleur rendement énergétique. Selon la maison, les
            pertes de chaleur peuvent venir davantage de l&apos;entretoit, des murs, du sous-sol, des fuites d&apos;air
            ou du système de chauffage.
          </p>
          <p className="mt-4 border-l-2 border-yellow-300 pl-4 text-sm font-semibold leading-7 text-slate-100">
            Une évaluation énergétique peut aider à comparer les fenêtres, l&apos;isolation, l&apos;étanchéité et la
            thermopompe avant d&apos;investir.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Erreurs fréquentes</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {commonErrors.map((error, index) => (
              <div key={error} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-black text-rose-800">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{error}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Scénarios concrets</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Le bon point de départ dépend surtout de la raison du remplacement et de l&apos;état général de la maison.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {scenarios.map((scenario) => (
              <article key={scenario.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-emerald-700">{scenario.label}</p>
                <h3 className="mt-2 text-base font-extrabold text-slate-950">{scenario.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{scenario.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[28px] border border-yellow-200 bg-yellow-50 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-950">Avant de demander une soumission</h2>
          <div className="mt-5 grid gap-3">
            {checklist.map((item, index) => (
              <div key={item} className="flex gap-4 border-t border-yellow-200 pt-3 first:border-0 first:pt-0">
                <span className="text-sm font-black text-amber-800">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Guides utiles</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition hover:border-blue-300"
              >
                <span className="block text-sm font-extrabold text-slate-950">{guide.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">{guide.text}</span>
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

        <section className="rounded-[28px] p-6 text-center text-white sm:p-9" style={{ background: DARK }}>
          <h2 className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-playfair)" }}>
            Vous pensez remplacer vos fenêtres?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Répondez à quelques questions pour voir quelles aides pourraient s&apos;appliquer à votre projet.
          </p>
          <CtaButton
            location="final"
            name="subvention_fenetres_final"
            className="mt-6 w-full sm:w-auto"
          />
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          ArgentQC.ca est un outil informatif non affilié au gouvernement. Les programmes, critères et montants
          peuvent changer. Confirmez toujours les exigences auprès des sources officielles avant de signer ou de
          commencer les travaux.
        </p>
      </div>

      <SiteFooter
        legalText={"Outil informatif non affilié au gouvernement."}
        contentClassName="mx-auto max-w-4xl text-center"
        style={{ background: DARK }}
        brandStyle={{ color: GOLD, marginBottom: "4px" }}
        legalStyle={{ color: "rgb(100 116 139)" }}
        linkStyle={{ color: "rgb(148 163 184)" }}
        contactLinkStyle={{ marginTop: "8px" }}
      />
    </main>
  );
}
