import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-tps-tvh-canada-2026";

const baseMetadata: Metadata = {
  title: "Crédit TPS/TVH 2026 : Qui y a droit et comment calculer votre remboursement",
  description:
    "Tout sur le crédit TPS/TVH en 2026 : montants trimestriels selon votre revenu et situation familiale, seuils d&apos;admissibilité, dates de versement et comment s&apos;assurer de le recevoir automatiquement.",
  keywords: [
    "crédit TPS TVH 2026",
    "remboursement TPS",
    "crédit TPS Canada",
    "montant TPS TVH 2026",
  ],
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
        {/* En-tête article */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Fiscal fédéral</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 5 septembre 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit TPS/TVH 2026 : Qui y a droit et comment calculer votre remboursement
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le crédit pour la taxe sur les produits et services (TPS/TVH) est un versement trimestriel
            non imposable du gouvernement fédéral conçu pour aider les personnes et familles à revenu faible
            ou modeste à récupérer une partie de la TPS/TVH qu&apos;elles paient. En 2026, des millions de
            Canadiens le reçoivent automatiquement — mais beaucoup ne savent pas exactement à combien ils
            ont droit ni comment s&apos;assurer de ne pas le manquer.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Versement <strong>trimestriel non imposable</strong>{" "} : janvier, avril, juillet, octobre</li>
            <li>✓ Jusqu&apos;à <strong>533 $ par adulte</strong>{" "} et <strong>281 $ par enfant de moins de 19 ans</strong>{" "} par année (2026)</li>
            <li>✓ Attribution <strong>automatique</strong>{" "} à la production de la déclaration de revenus — aucune demande distincte requise</li>
            <li>✓ Réduction progressive au-delà d&apos;un revenu familial net de <strong>43 000 $</strong>{" "} environ</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que le crédit TPS/TVH exactement ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit TPS/TVH est une aide fédérale administrée par l&apos;Agence du revenu du Canada (ARC).
            Il compense une partie de la TPS que vous avez payée sur vos achats courants au cours de l&apos;année.
            Plus votre revenu est bas, plus le crédit est élevé — et il diminue progressivement à mesure
            que le revenu familial net augmente, jusqu&apos;à disparaître au-delà d&apos;un certain seuil.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Le crédit est calculé en fonction de votre situation au <strong>1er janvier</strong>{" "} de l&apos;année
            de versement (état civil, nombre d&apos;enfants de moins de 19 ans) et de votre revenu familial net
            de l&apos;année précédente. Par exemple, les versements de juillet 2026 à juin 2027 sont basés
            sur votre déclaration de revenus de 2025.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants du crédit TPS/TVH pour 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour l&apos;année de crédit 2026-2027 (versements de juillet 2026 à juin 2027, basés sur la déclaration
            2025), les montants annuels maximaux sont les suivants :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Montants annuels maximaux</p>
            <div className="space-y-2">
              {[
                { situation: "Personne seule", montant: "533 $" },
                { situation: "Conjoint(e) ou conjoint(e) de fait", montant: "533 $ supplémentaires" },
                { situation: "Chaque enfant de moins de 19 ans", montant: "281 $ par enfant" },
                { situation: "Parent seul admissible (1er enfant)", montant: "533 $ (au lieu de 281 $)" },
              ].map((ex) => (
                <div key={ex.situation} className="flex justify-between text-sm">
                  <span className="text-blue-900">{ex.situation}</span>
                  <span className="font-bold text-blue-800">{ex.montant}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm mb-4">
            Ces montants sont divisés en quatre versements trimestriels égaux. Par exemple, une personne
            seule sans enfant reçoit environ <strong>133 $ par trimestre</strong>.
          </p>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="font-semibold text-slate-700 text-sm mb-2">Exemple — Famille avec deux enfants</p>
            <div className="space-y-1 text-sm text-slate-600">
              <div className="flex justify-between"><span>Adulte 1</span><span>533 $</span></div>
              <div className="flex justify-between"><span>Adulte 2</span><span>533 $</span></div>
              <div className="flex justify-between"><span>2 enfants (× 281 $)</span><span>562 $</span></div>
              <div className="flex justify-between font-bold border-t border-slate-200 pt-1 mt-1 text-slate-800"><span>Total annuel</span><span>1 628 $</span></div>
              <div className="flex justify-between text-slate-400"><span>Versement trimestriel</span><span>407 $</span></div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Seuils d&apos;admissibilité et réduction progressive</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit commence à diminuer dès que votre <strong>revenu familial net ajusté</strong>{" "} dépasse
            un certain seuil. Pour 2026 :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                titre: "Seuil de réduction (célibataire)",
                desc: "Environ 43 000 $ de revenu net — le crédit est réduit de 5 % pour chaque dollar au-delà",
              },
              {
                titre: "Seuil de réduction (famille avec enfants)",
                desc: "Le seuil est plus élevé pour les familles; le calcul exact est fait par l&apos;ARC selon votre situation",
              },
              {
                titre: "Seuil de disparition complète (personne seule)",
                desc: "Environ 53 000 $ — au-delà, le crédit est de 0 $ pour un adulte sans enfant",
              },
              {
                titre: "Seuil de disparition complète (famille de 4)",
                desc: "Environ 76 000 $ — le seuil augmente avec chaque enfant à charge",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Important : le revenu du conjoint est inclus dans le calcul du revenu familial net. L&apos;ARC
            utilise automatiquement les données de vos deux déclarations pour déterminer le montant.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment recevoir le crédit : démarche simple</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Produisez votre déclaration de revenus chaque année",
                texte: "Il n&apos;existe aucune demande séparée pour le crédit TPS/TVH. L&apos;ARC l&apos;attribue automatiquement à partir de votre déclaration de revenus fédérale — même si vous n&apos;avez eu aucun revenu. C&apos;est pourquoi il est crucial de produire votre déclaration chaque année, même à revenu zéro.",
              },
              {
                num: "2",
                titre: "Vérifiez vos informations personnelles",
                texte: "Signalez tout changement de situation à l&apos;ARC dès qu&apos;il se produit : mariage ou union de fait, séparation, naissance ou garde d&apos;un enfant. Ces changements influencent directement votre crédit.",
              },
              {
                num: "3",
                titre: "Inscrivez-vous au dépôt direct",
                texte: "Vous pouvez recevoir vos versements trimestriels directement dans votre compte bancaire via Mon dossier de l&apos;ARC. C&apos;est plus rapide et vous ne risquez pas de perdre un chèque.",
              },
              {
                num: "4",
                titre: "Vérifiez votre avis de crédit",
                texte: "Chaque juillet, l&apos;ARC vous envoie un avis indiquant le montant de votre crédit pour la prochaine année (juillet à juin). Consultez-le dans Mon dossier ou par courrier.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Dates de versement 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les versements du crédit TPS/TVH sont émis quatre fois par an, autour du <strong>5e jour</strong>{" "}
            des mois de janvier, avril, juillet et octobre. Pour l&apos;année de crédit 2026-2027 :
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { mois: "5 juillet 2026", label: "1er versement 2026-2027" },
              { mois: "5 octobre 2026", label: "2e versement" },
              { mois: "5 janvier 2027", label: "3e versement" },
              { mois: "5 avril 2027", label: "4e versement" },
            ].map((v) => (
              <div key={v.mois} className="bg-white border border-slate-200 rounded-xl p-3 text-sm">
                <p className="font-bold text-slate-800">{v.mois}</p>
                <p className="text-slate-400 text-xs mt-0.5">{v.label}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Si le montant annuel calculé est inférieur à 50 $, l&apos;ARC verse l&apos;ensemble du crédit en un
            seul paiement en juillet plutôt qu&apos;en quatre versements.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Cumulez avec d&apos;autres aides fédérales</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit TPS/TVH est entièrement cumulable avec d&apos;autres prestations fédérales et provinciales.
            Si votre revenu est faible, vous pourriez également avoir droit à :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { titre: "Prestation canadienne pour enfants (PCE)", desc: "Aide mensuelle non imposable pour les familles avec enfants de moins de 18 ans — peut représenter plusieurs milliers de dollars par an" },
              { titre: "Prestation canadienne des travailleurs (PCT)", desc: "Crédit remboursable pour les travailleurs à faible revenu, jusqu&apos;à 1 518 $ pour une personne seule en 2026" },
              { titre: "Prestation dentaire canadienne", desc: "Pour les enfants de moins de 12 ans dont les parents n&apos;ont pas d&apos;assurance dentaire collective" },
              { titre: "Allocation de logement Québec", desc: "Aide provinciale pour les locataires et propriétaires aînés ou à faible revenu — jusqu&apos;à 170 $/mois" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "#1a2f5e" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-blue-200 text-sm mb-4">TPS/TVH, PCE, allocations provinciales — notre outil calcule tout en 2 minutes.</p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Trouver mes aides →
          </Link>
        </div>

        {/* Source officielle */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.canada.ca/fr/agence-revenu/services/prestations/credit-taxe-produits-services-taxe-valeur-ajoutee-harmonisee.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            ARC – Crédit pour la taxe sur les produits et services / taxe de vente harmonisée
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
  description:
    "Tout sur le crédit TPS/TVH en 2026 : montants trimestriels selon votre revenu et situation familiale, seuils d&apos;admissibilité, dates de versement et comment s&apos;assurer de le recevoir automatiquement.",
  date: "2026-09-05",
  categorie: "Fiscal fédéral",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
