import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { acebe2026 } from "@/data/finance-2026/groceries-essentials-benefit-2026";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-tps-tvh-canada-2026";

const baseMetadata: Metadata = {
  title: "Crédit TPS/TVH 2026 : remplacé par l’ACEBE depuis juillet",
  description:
    "Le crédit TPS/TVH a été remplacé en juillet 2026 par l’Allocation canadienne pour l’épicerie et les besoins essentiels (ACEBE). Voyez les montants et dates officiels.",
  keywords: [
    "crédit TPS TVH 2026",
    "ACEBE 2026",
    "allocation canadienne épicerie besoins essentiels",
    "remboursement TPS 2026",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/credit-tps-tvh-canada-2026",
  },
};

const { maximumAnnual, reductionThreshold, paymentDates2026, benefitYear, taxYearUsed } = acebe2026;

function formatCad(value: number) {
  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("fr-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function Content() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/fr" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>
            ← Blogue
          </Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Fiscal fédéral</span>
            <span className="text-xs text-slate-400 py-0.5">Mis à jour le 30 septembre 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit TPS/TVH 2026 : remplacé par l’ACEBE depuis juillet
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Depuis juillet 2026, le crédit pour la TPS/TVH porte un nouveau nom : l’Allocation canadienne pour
            l’épicerie et les besoins essentiels (ACEBE). L’admissibilité et la structure générale demeurent liées
            à l’ancien crédit, mais les montants ont été bonifiés.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Le crédit TPS/TVH a été remplacé par l’ACEBE en juillet 2026.</li>
            <li>✓ Jusqu’à <strong>{formatCad(maximumAnnual.singleAdult)}</strong> par année pour une personne seule.</li>
            <li>✓ Jusqu’à <strong>{formatCad(maximumAnnual.couple)}</strong> par année pour un couple.</li>
            <li>✓ Jusqu’à <strong>{formatCad(maximumAnnual.perChildUnder19)}</strong> par enfant admissible de moins de 19 ans.</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu’est devenu le crédit TPS/TVH?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            L’Agence du revenu du Canada indique que l’ACEBE a remplacé le crédit TPS/TVH en juillet 2026.
            Le dernier versement régulier sous l’ancien nom a eu lieu le 2 avril 2026. Un versement ponctuel
            de transition a ensuite été émis le 5 juin 2026 avant le début de l’ACEBE.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Pour la période de prestations <strong>{benefitYear}</strong>, l’ARC utilise les renseignements de
            votre déclaration de revenus de <strong>{taxYearUsed}</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants maximums pour juillet 2026 à juin 2027</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-blue-900">Personne seule</span>
                <strong className="text-blue-800">{formatCad(maximumAnnual.singleAdult)} / an</strong>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-blue-900">Couple</span>
                <strong className="text-blue-800">{formatCad(maximumAnnual.couple)} / an</strong>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-blue-900">Par enfant admissible de moins de 19 ans</span>
                <strong className="text-blue-800">{formatCad(maximumAnnual.perChildUnder19)} / an</strong>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            Le montant réel dépend de votre revenu familial net rajusté et de votre situation familiale.
            Le seuil de réduction officiel pour l’année de base 2025 est de <strong>{formatCad(reductionThreshold)}</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Dates de versement en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les premiers versements sous le nom ACEBE en 2026 sont prévus aux dates suivantes :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {paymentDates2026.map((date) => (
              <div key={date} className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-center">
                <p className="font-bold text-slate-700 text-sm">{formatDate(date)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Faut-il faire une demande?</h2>
          <p className="text-slate-600 leading-relaxed">
            Pour la plupart des contribuables, aucune demande séparée n’est nécessaire : l’ARC détermine
            automatiquement l’admissibilité lorsque vous produisez votre déclaration de revenus. Les nouveaux
            résidents du Canada peuvent devoir fournir des renseignements supplémentaires à l’ARC.
          </p>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez les aides auxquelles vous pourriez avoir droit</p>
          <p className="text-blue-200 text-sm mb-4">
            ACEBE, Allocation canadienne pour enfants, crédit pour la solidarité et autres programmes.
          </p>
          <Link href="/fr/questionnaire" className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl">
            Trouver mes aides →
          </Link>
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-epicerie-besoins-essentiels.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Agence du revenu du Canada — ACEBE
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
  titre: "Crédit TPS/TVH 2026 : remplacé par l’ACEBE depuis juillet",
  description:
    "Le crédit TPS/TVH a été remplacé par l’ACEBE en juillet 2026. Montants, seuil de réduction et dates de versement officielles.",
  date: "2026-09-30",
  categorie: "Fiscal fédéral",
  tempsLecture: "4 min",
  metadata,
  Content,
};

export default article;
