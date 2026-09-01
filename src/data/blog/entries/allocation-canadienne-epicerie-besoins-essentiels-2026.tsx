import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";
import { acebe2026, acebeOfficialUrls } from "@/data/finance-2026/groceries-essentials-benefit-2026";
import { serializeJsonLd } from "@/utils/jsonLd";

const slug = "allocation-canadienne-epicerie-besoins-essentiels-2026";

const metadata: Metadata = {
  title: "ACEBE 2026 : admissibilité, montants et versements",
  description:
    "Guide 2026 de l’Allocation canadienne pour l’épicerie et les besoins essentiels : transition du crédit TPS/TVH, calcul, montants maximaux et dates.",
  keywords: ["ACEBE 2026", "allocation épicerie Canada", "Canada Groceries and Essentials Benefit", "crédit TPS TVH remplacement"],
  alternates: { canonical: `https://argentqc.ca/blog/${slug}` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "L’ACEBE remplace-t-elle le crédit pour la TPS/TVH?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. L’ACEBE remplace le crédit pour la TPS/TVH à compter de juillet 2026. Le dernier versement trimestriel de l’ancien crédit a eu lieu le 2 avril 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Quel revenu sert au calcul de l’ACEBE en 2026-2027?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L’ARC utilise le revenu familial net rajusté de 2025. Le revenu brut seul ne permet pas de déterminer un montant fiable.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il demander l’ACEBE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En général, l’ARC établit l’admissibilité à partir de la déclaration de revenus. Une nouvelle personne résidente peut devoir transmettre le formulaire RC151.",
      },
    },
  ],
};

const money = (amount: number) => `${amount.toLocaleString("fr-CA")} $`;

function Content() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />
      <header style={{ background: "#060D1A", padding: "14px 16px" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/fr" className="font-extrabold text-yellow-300">ArgentQC.ca</Link>
          <Link href="/blog" className="text-sm text-slate-300">← Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Prestations</span>
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · 1 septembre 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Allocation canadienne pour l’épicerie et les besoins essentiels 2026
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            L’ACEBE est la prestation fédérale trimestrielle non imposable qui remplace le crédit pour la TPS/TVH depuis juillet 2026. Son montant n’est pas déterminable avec un simple revenu brut : l’ARC utilise le revenu familial net rajusté de 2025 et la composition familiale.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-amber-900 mb-2">À retenir</p>
          <ul className="space-y-2 text-sm text-amber-950">
            <li>• Année de prestations : {acebe2026.benefitYear}.</li>
            <li>• Versements 2026 : 3 juillet et 5 octobre.</li>
            <li>• L’admissibilité et le montant exact doivent être confirmés par l’ARC.</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">La transition en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le dernier paiement trimestriel de l’ancien crédit pour la TPS/TVH a été versé le 2 avril 2026. Un paiement complémentaire de transition a suivi le 5 juin 2026, puis l’ACEBE a commencé avec le versement du 3 juillet 2026.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Le changement de nom n’autorise donc pas à continuer d’afficher l’ancien crédit comme programme courant ni à additionner ses anciens montants dans une estimation 2026-2027.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants maximaux publiés</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour l’année de prestations {acebe2026.benefitYear}, l’ARC publie les maximums annuels suivants. Ce sont des plafonds, pas une estimation personnalisée.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 space-y-3 text-sm">
            <div className="flex justify-between"><span>Personne seule</span><strong>{money(acebe2026.maximumAnnual.singleAdult)}</strong></div>
            <div className="flex justify-between"><span>Couple</span><strong>{money(acebe2026.maximumAnnual.couple)}</strong></div>
            <div className="flex justify-between"><span>Par enfant de moins de 19 ans</span><strong>{money(acebe2026.maximumAnnual.perChildUnder19)}</strong></div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mt-4">
            La réduction fondée sur le revenu commence à un RFNR de {money(acebe2026.reductionThreshold)}. Il n’existe pas de plafond universel de revenu : le point où la prestation devient nulle varie selon la situation familiale.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Admissibilité et démarche</h2>
          <ul className="space-y-2 text-slate-600 leading-relaxed">
            <li>• Produisez votre déclaration de revenus, même si vous n’avez aucun revenu.</li>
            <li>• Vous devez généralement avoir au moins 19 ans, ou avoir un conjoint ou un enfant.</li>
            <li>• Signalez rapidement à l’ARC les changements de conjoint, d’enfant ou de résidence.</li>
            <li>• Si vous êtes une nouvelle personne résidente, consultez le formulaire RC151.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Pourquoi ArgentQC ne calcule pas le montant</h2>
          <p className="text-slate-600 leading-relaxed">
            Le questionnaire peut signaler l’ACEBE comme programme à vérifier, mais il ne recueille pas tous les éléments du RFNR ni toutes les données familiales utilisées par l’ARC. Pour éviter un faux montant, l’ACEBE est exclue des totaux estimés et renvoie vers la source officielle.
          </p>
        </section>

        <div className="bg-slate-950 text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg mb-2">Repérez les programmes à vérifier</p>
          <p className="text-slate-300 text-sm mb-4">Le questionnaire donne une présélection; confirmez ensuite chaque montant auprès de l’organisme responsable.</p>
          <Link href="/fr/questionnaire" className="inline-block bg-yellow-400 text-blue-950 font-bold px-6 py-3 rounded-xl">
            Commencer le questionnaire →
          </Link>
        </div>

        <section className="border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-800 mb-3">Sources officielles</h2>
          <ul className="space-y-2 text-sm">
            <li><a className="underline text-blue-700" href={acebeOfficialUrls.overview} target="_blank" rel="noopener noreferrer">ARC — Allocation canadienne pour l’épicerie et les besoins essentiels</a></li>
            <li><a className="underline text-blue-700" href={acebeOfficialUrls.calculation} target="_blank" rel="noopener noreferrer">ARC — Guide RC4210 et calcul des prestations</a></li>
            <li><a className="underline text-blue-700" href={acebeOfficialUrls.payments} target="_blank" rel="noopener noreferrer">ARC — Dates de versement des prestations</a></li>
            <li><a className="underline text-blue-700" href={acebeOfficialUrls.newResidents} target="_blank" rel="noopener noreferrer">ARC — Formulaire RC151 pour les nouveaux résidents</a></li>
          </ul>
          <p className="text-xs text-slate-400 mt-4">Sources vérifiées le 1 septembre 2026.</p>
        </section>
      </article>

      <SiteFooter
        legalText="Outil informatif non affilié au gouvernement. Vérifiez l’admissibilité et les montants auprès de l’ARC."
        contactLabel="Contactez-nous"
        contentClassName="max-w-2xl mx-auto text-center"
      />
    </main>
  );
}

const article: BlogArticle = {
  slug,
  titre: "Allocation canadienne pour l’épicerie et les besoins essentiels 2026",
  description: "ACEBE 2026 : transition du crédit TPS/TVH, admissibilité, montants maximaux et dates de versement officielles.",
  date: "2026-09-01",
  categorie: "Prestations",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
