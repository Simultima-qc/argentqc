import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-tps-tvh-canada-2026";

const baseMetadata: Metadata = {
  title: "Crédit TPS/TVH 2026 : Qui y a droit et comment calculer votre remboursement",
  description:
    "Tout sur le crédit TPS/TVH en 2026 : montants selon votre situation familiale, seuils d&apos;admissibilité et calendrier des versements trimestriels automatiques.",
  keywords: ["crédit TPS TVH 2026", "crédit TPS Canada", "remboursement TPS", "crédit TVH admissibilité"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/credit-tps-tvh-canada-2026",
  },
};

function Content() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/fr" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>← Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Impôts</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 9 juin 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit TPS/TVH 2026 : Qui y a droit et comment calculer votre remboursement
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le crédit pour la TPS/TVH est une aide fédérale versée automatiquement chaque trimestre aux Canadiens à revenu faible ou modeste. En 2026, une personne seule peut recevoir jusqu&apos;à{" "}
            <strong>357 $</strong>{" "}par année — sans avoir à remplir de formulaire supplémentaire si vous produisez déjà votre déclaration de revenus.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Jusqu&apos;à <strong>357 $ par adulte</strong>{" "}et <strong>124 $ par enfant</strong>{" "}par année</li>
            <li>✓ Versé automatiquement en <strong>4 paiements trimestriels</strong>{" "}(juillet, octobre, janvier, avril)</li>
            <li>✓ Admissible dès 19 ans — ou avant si marié(e) ou parent</li>
            <li>✓ Aucune demande requise : calculé à partir de votre déclaration de revenus</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi le crédit pour la TPS/TVH ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit pour la taxe sur les produits et services (TPS) et la taxe de vente harmonisée (TVH) est un crédit d&apos;impôt fédéral{" "}
            <strong>non imposable</strong>{" "}conçu pour aider les personnes à revenu faible ou modeste à compenser une partie des taxes qu&apos;elles paient sur leurs achats quotidiens.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Administré par l&apos;Agence du revenu du Canada (ARC), ce crédit est calculé automatiquement à partir de votre déclaration de revenus de l&apos;année précédente. Il n&apos;y a aucun formulaire séparé à remplir — l&apos;ARC le calcule pour vous et envoie les versements par dépôt direct ou par chèque.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui a droit au crédit TPS/TVH en 2026 ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour être admissible, vous devez satisfaire à <strong>toutes</strong>{" "}les conditions suivantes :
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { titre: "Résidence au Canada", desc: "Être résident canadien aux fins de l'impôt sur le revenu au 1er juillet de l'année de prestations." },
              { titre: "Âge minimum de 19 ans", desc: "Avoir 19 ans ou plus — OU être marié(e) ou conjoint(e) de fait, OU avoir un enfant à charge sous votre garde." },
              { titre: "Déclaration de revenus produite", desc: "Avoir produit sa déclaration de revenus pour l'année précédente, même si votre revenu est nul." },
              { titre: "Revenu dans les seuils admissibles", desc: "Avoir un revenu familial net ajusté inférieur au seuil de réduction progressive (environ 39 500 $ en 2026 pour une personne seule)." },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm">
            Rappel important : même si vous n&apos;avez aucun revenu, vous devez produire votre déclaration pour recevoir ce crédit. Ne pas produire = ne pas recevoir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants du crédit TPS/TVH en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour l&apos;année de prestations 2025-2026 (juillet 2025 à juin 2026), les montants maximaux annuels sont les suivants :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Montants annuels maximaux</p>
            <div className="space-y-2">
              {[
                { situation: "Pour vous-même", montant: "357 $" },
                { situation: "Pour votre conjoint(e) ou conjoint(e) de fait", montant: "357 $" },
                { situation: "Pour chaque enfant de moins de 19 ans", montant: "124 $" },
                { situation: "Montant pour parent célibataire (1er enfant)", montant: "357 $" },
              ].map((ligne) => (
                <div key={ligne.situation} className="flex justify-between text-sm border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                  <span className="text-blue-900">{ligne.situation}</span>
                  <span className="font-bold text-blue-800">{ligne.montant}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p className="font-bold text-slate-700 mb-3">Exemples selon la situation familiale</p>
            <div className="space-y-3 text-sm">
              {[
                { profil: "Personne seule (revenu ≤ 39 500 $)", annuel: "357 $/an", trim: "~89 $/trimestre" },
                { profil: "Couple sans enfant (revenu ≤ 39 500 $)", annuel: "714 $/an", trim: "~179 $/trimestre" },
                { profil: "Couple avec 2 enfants (revenu ≤ 39 500 $)", annuel: "962 $/an", trim: "~241 $/trimestre" },
                { profil: "Parent seul avec 1 enfant (revenu ≤ 39 500 $)", annuel: "714 $/an", trim: "~179 $/trimestre" },
              ].map((ex) => (
                <div key={ex.profil} className="border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                  <p className="text-slate-700 font-medium">{ex.profil}</p>
                  <div className="flex gap-4 mt-0.5">
                    <span className="text-slate-500">Annuel : <strong className="text-slate-700">{ex.annuel}</strong></span>
                    <span className="text-slate-500">Trimestriel : <strong className="text-slate-700">{ex.trim}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment le crédit est-il calculé et réduit ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit est <strong>réduit progressivement</strong>{" "}à mesure que le revenu familial net augmente. Il n&apos;y a pas de coupure abrupte : pour chaque tranche de <strong>100 $</strong>{" "}de revenu au-delà du seuil d&apos;environ 39 500 $, votre crédit annuel diminue de <strong>2 $</strong>.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-4">
            <p className="font-bold text-amber-800 mb-2">Exemple concret</p>
            <p className="text-amber-900 text-sm leading-relaxed">
              Marie est célibataire avec un revenu net de <strong>45 000 $</strong>. Le seuil est de 39 500 $. Son revenu excède le seuil de 5 500 $, ce qui réduit son crédit de (5 500 ÷ 100 × 2 $) = <strong>110 $</strong>. Elle reçoit donc 357 $ − 110 $ = <strong>247 $/an</strong>, soit environ <strong>62 $ par trimestre</strong>.
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Pour les familles avec enfants, le seuil de réduction est plus élevé, ce qui permet à davantage de ménages de recevoir un crédit partiel même avec des revenus supérieurs à 39 500 $.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Calendrier des versements et comment les recevoir</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit TPS/TVH est versé en <strong>quatre paiements trimestriels</strong>{" "}au cours de l&apos;année de prestations 2025-2026 :
          </p>
          <div className="flex flex-col gap-4 mb-5">
            {[
              { num: "1", mois: "Juillet 2025", detail: "1er versement — début de l'année de prestations 2025-2026" },
              { num: "2", mois: "Octobre 2025", detail: "2e versement trimestriel" },
              { num: "3", mois: "Janvier 2026", detail: "3e versement trimestriel" },
              { num: "4", mois: "Avril 2026", detail: "4e et dernier versement de l'année" },
            ].map((v) => (
              <div key={v.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {v.num}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{v.mois}</p>
                  <p className="text-slate-500 text-sm">{v.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong>À noter :</strong>{" "}si votre crédit annuel est inférieur à <strong>100 $</strong>, l&apos;ARC verse le montant total en un seul paiement en juillet. Pour recevoir vos paiements par dépôt direct, inscrivez-vous sur le site de l&apos;ARC ou via Mon dossier CRA.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combiner le crédit fédéral avec les aides provinciales</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit TPS/TVH fédéral est <strong>cumulable</strong>{" "}avec le crédit d&apos;impôt pour solidarité du Québec, qui comprend lui aussi une composante liée à la taxe de vente (TVQ). Les deux programmes sont calculés séparément et versés indépendamment.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            Les familles avec enfants peuvent également cumuler ce crédit avec l&apos;<strong>Allocation canadienne pour enfants (ACE)</strong>, une aide fédérale mensuelle non imposable calculée selon le revenu familial et le nombre d&apos;enfants de moins de 18 ans.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Le gouvernement fédéral a aussi émis ponctuellement des <strong>versements supplémentaires</strong>{" "}au crédit TPS/TVH lors de périodes d&apos;inflation élevée pour aider les ménages à revenu modeste. Ces bonifications ponctuelles sont versées automatiquement aux personnes déjà admissibles.
          </p>
        </section>

        <div style={{ background: "#060D1A" }} className="text-white rounded-2xl p-6 text-center mb-6">
          <p className="font-bold text-lg mb-2">Découvrez toutes vos aides gouvernementales</p>
          <p className="text-slate-300 text-sm mb-4">Crédit TPS/TVH, crédit de solidarité, allocations — calculez tout ce à quoi vous avez droit en 2 minutes.</p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Calculer mes aides →
          </Link>
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/credit-tps-tvh.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca – Crédit pour la TPS/TVH
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
  titre: "Crédit TPS/TVH 2026 : Qui y a droit et comment calculer votre remboursement",
  description: "Tout sur le crédit TPS/TVH en 2026 : montants selon votre situation familiale, seuils d'admissibilité et calendrier des versements trimestriels automatiques.",
  date: "2026-06-09",
  categorie: "Impôts",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
