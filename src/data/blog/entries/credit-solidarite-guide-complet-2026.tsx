import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-solidarite-guide-complet-2026";

const baseMetadata: Metadata = {
  title: "Crédit de solidarité Québec 2026 : Guide complet et calcul de votre montant",
  description:
    "Tout sur le crédit de solidarité 2026 : 3 composantes (TVQ, habitation, village nordique), montants, calcul selon votre revenu et versements mensuels ou annuels.",
  keywords: [
    "crédit de solidarité 2026",
    "crédit solidarité Québec montant",
    "composante TVQ crédit solidarité",
    "crédit solidarité habitation",
    "versement crédit solidarité",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/credit-solidarite-guide-complet-2026",
  },
};

function Content() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>← Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        {/* En-tête article */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Crédit d&apos;impôt</span>
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · 17 avril 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit de solidarité Québec 2026 : Guide complet et calcul de votre montant
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le crédit de solidarité est l&apos;un des crédits d&apos;impôt remboursables les plus généreux du Québec.
            En 2026, un couple locataire à faible revenu peut recevoir jusqu&apos;à{" "}
            <strong>2 000 $ par année</strong>, versés chaque mois directement dans leur compte bancaire.
            Voici comment calculer exactement ce à quoi vous avez droit.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Crédit composé de <strong>3 parties</strong>{" "} : TVQ, habitation et village nordique</li>
            <li>✓ Jusqu&apos;à <strong>369 $</strong>{" "} par adulte admissible (composante TVQ 2026)</li>
            <li>✓ Jusqu&apos;à <strong>829 $</strong>{" "} supplémentaires pour les locataires (composante habitation)</li>
            <li>✓ Versements mensuels automatiques dès que vous produisez votre déclaration</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi le crédit de solidarité ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit de solidarité est un crédit d&apos;impôt <strong>remboursable</strong>{" "} administré par Revenu Québec.
            Contrairement à un crédit ordinaire qui réduit vos impôts à payer, un crédit remboursable vous est versé{" "}
            <strong>même si vous ne payez pas d&apos;impôt</strong>. Il remplace depuis 2013 trois anciens crédits :
            le crédit pour TVQ, l&apos;allocation-logement et le crédit pour les villages nordiques.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit est basé sur votre <strong>déclaration de revenus de l&apos;année précédente</strong>.
            Pour la période de versement de juillet 2026 à juin 2027, c&apos;est votre revenu de 2025 qui compte.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Bonne nouvelle : si votre revenu est suffisamment faible, vous recevrez le montant maximal.
            Si votre revenu dépasse un certain seuil, le crédit est réduit progressivement — mais ne disparaît
            pas complètement pour la plupart des familles de la classe moyenne.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Les 3 composantes du crédit de solidarité</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit se calcule en additionnant jusqu&apos;à trois composantes distinctes selon votre situation.
          </p>

          <div className="space-y-4">
            {/* Composante 1 */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <p className="font-bold text-slate-800 mb-1">1. Composante TVQ</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Cette partie compense la taxe de vente du Québec (TVQ) payée sur vos achats courants.
                Elle s&apos;applique à <strong>tous les adultes admissibles</strong>, peu importe que vous soyez
                propriétaire, locataire ou que vous habitiez chez vos parents.
              </p>
              <div className="bg-slate-50 rounded-xl p-3 text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-slate-600">Vous (adulte admissible)</span>
                  <span className="font-bold text-slate-800">369 $</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Votre conjoint(e)</span>
                  <span className="font-bold text-slate-800">+ 369 $</span>
                </div>
              </div>
            </div>

            {/* Composante 2 */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <p className="font-bold text-slate-800 mb-1">2. Composante habitation</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-2">
                Cette partie dépend de votre <strong>situation de logement</strong>.
                Elle est plus élevée pour les locataires, car ils contribuent indirectement aux taxes foncières
                via leur loyer. Elle est accordée par logement, non par personne.
              </p>
              <div className="bg-slate-50 rounded-xl p-3 text-sm space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-600">Locataire</span>
                  <span className="font-bold text-slate-800">829 $</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Propriétaire occupant</span>
                  <span className="font-bold text-slate-800">649 $</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Chambre en résidence privée</span>
                  <span className="font-bold text-slate-800">242 $</span>
                </div>
              </div>
            </div>

            {/* Composante 3 */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <p className="font-bold text-slate-800 mb-1">3. Composante villages nordiques</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Réservée aux résidents des <strong>14 villages nordiques du Nunavik</strong>{" "} (au nord du 55e parallèle),
                cette composante reconnaît le coût de vie élevé dans ces régions éloignées. Montant : <strong>1 773 $</strong>{" "}
                par adulte admissible en 2026. Elle s&apos;ajoute aux deux autres composantes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Exemples concrets de calcul</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Voici ce que différentes situations peuvent représenter <strong>avant réduction pour revenus</strong>.
            Ces montants s&apos;appliquent si votre revenu familial est inférieur au seuil de réduction.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-bold text-blue-800 mb-3">Montants annuels maximaux 2026</p>
            <div className="space-y-3 text-sm">
              {[
                { situation: "Personne seule, locataire", montant: "1 198 $", detail: "369 $ TVQ + 829 $ habitation" },
                { situation: "Personne seule, propriétaire", montant: "1 018 $", detail: "369 $ TVQ + 649 $ habitation" },
                { situation: "Couple, locataires", montant: "1 967 $", detail: "738 $ TVQ + 829 $ habitation" },
                { situation: "Couple, propriétaires", montant: "1 787 $", detail: "738 $ TVQ + 649 $ habitation" },
                { situation: "Famille monoparentale, locataire", montant: "1 198 $", detail: "369 $ TVQ + 829 $ habitation" },
              ].map((ex) => (
                <div key={ex.situation} className="flex justify-between items-start gap-2">
                  <div>
                    <p className="font-semibold text-blue-900">{ex.situation}</p>
                    <p className="text-blue-600 text-xs">{ex.detail}</p>
                  </div>
                  <span className="font-extrabold text-blue-800 whitespace-nowrap">{ex.montant}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-600 text-xs mt-3">* Montants estimés pour 2026. Indexés annuellement selon l&apos;inflation.</p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">À partir de quel revenu le crédit est-il réduit ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit de solidarité diminue progressivement lorsque votre <strong>revenu familial net</strong>{" "} dépasse
            un certain seuil. La réduction s&apos;applique au taux de <strong>3 % sur l&apos;excédent</strong>.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-4">
            <p className="font-bold text-amber-800 mb-3">Seuils de réduction 2026 (estimés)</p>
            <div className="space-y-2 text-sm">
              {[
                { situation: "Personne seule", seuil: "environ 38 000 $" },
                { situation: "Couple sans enfant", seuil: "environ 38 000 $" },
                { situation: "Famille avec enfants", seuil: "ajusté selon la situation" },
              ].map((ex) => (
                <div key={ex.situation} className="flex justify-between">
                  <span className="text-amber-900">{ex.situation}</span>
                  <span className="font-bold text-amber-800">{ex.seuil}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            <strong>Exemple :</strong>{" "} Un couple locataire avec un revenu familial de 48 000 $ verrait
            son crédit réduit de 3 % × (48 000 $ – 38 000 $) = 300 $. Il recevrait donc
            1 967 $ – 300 $ = <strong>1 667 $</strong>{" "} au lieu du maximum.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui a droit au crédit de solidarité ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour avoir droit au crédit de solidarité, vous devez répondre à <strong>toutes</strong>{" "}ces conditions :
          </p>
          <div className="space-y-3">
            {[
              { titre: "Résider au Québec", texte: "Être résident du Québec le 31 décembre de l&apos;année de référence." },
              { titre: "Avoir 18 ans ou plus", texte: "Ou être mineur marié, ou avoir un enfant à charge. Les jeunes de 16-17 ans vivant seuls peuvent aussi y avoir droit." },
              { titre: "Statut d&apos;immigration", texte: "Être citoyen canadien, résident permanent, réfugié reconnu ou détenteur d&apos;un permis de travail valide." },
              { titre: "Produire sa déclaration", texte: "Avoir produit sa déclaration de revenus du Québec. C&apos;est obligatoire, même si vous n&apos;avez aucun revenu." },
            ].map((item) => (
              <div key={item.titre} className="flex gap-3 items-start">
                <div className="w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                  <p className="text-slate-500 text-sm" dangerouslySetInnerHTML={{ __html: item.texte }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Versements mensuels ou versement annuel : que choisir ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Revenu Québec vous offre le choix du mode de versement lors de votre déclaration de revenus.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <p className="font-bold text-slate-800 mb-2">Versements mensuels</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Vous recevez 1/12 de votre crédit annuel chaque mois, à partir de juillet.
                Idéal pour les budgets serrés.
              </p>
              <p className="text-green-700 text-sm font-semibold">✓ Recommandé si votre revenu est stable</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <p className="font-bold text-slate-800 mb-2">Versement annuel</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Vous recevez tout votre crédit en un seul paiement en juillet.
                Utile si vous préférez un montant global.
              </p>
              <p className="text-blue-700 text-sm font-semibold">✓ Recommandé si vous voulez planifier une dépense</p>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            <strong>Attention :</strong>{" "} Si votre crédit annuel est inférieur à <strong>240 $</strong>,
            Revenu Québec émettra automatiquement un seul versement en juillet, même si vous avez choisi les versements mensuels.
          </p>
        </section>

        {/* Section liens internes */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">À cumuler avec d&apos;autres aides</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit de solidarité est <strong>cumulable</strong>{" "}avec plusieurs autres programmes d&apos;aide.
            Si vous avez un faible revenu, vous pourriez aussi avoir droit à :
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { texte: "Allocation logement (jusqu&apos;à 170 $/mois)", href: "/allocation-logement-quebec" },
              { texte: "Crédit d&apos;impôt pour frais médicaux", href: "/credit-impot-frais-medicaux-quebec" },
              { texte: "Allocation famille (enfants 0-17 ans)", href: "/allocation-enfant-quebec" },
              { texte: "Crédits d&apos;impôt Québec", href: "/credit-impot-quebec" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors"
                dangerouslySetInnerHTML={{ __html: "→ " + item.texte }}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "#060D1A" }} className="rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg text-white mb-2">Calculez toutes vos aides en 2 minutes</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            Crédit de solidarité, allocation logement, crédits famille — découvrez tout ce à quoi vous avez droit.
          </p>
          <Link
            href="/questionnaire"
            className="inline-block font-bold px-6 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#060D1A" }}
          >
            Trouver mes aides →
          </Link>
        </div>

        {/* Lien officiel */}
        <p className="text-center text-slate-400 text-xs mt-4">
          Source officielle :{" "}
          <a
            href="https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Revenu Québec – Crédit d&apos;impôt pour solidarité
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
  titre: "Crédit de solidarité Québec 2026 : Guide complet et calcul de votre montant",
  description:
    "Tout sur le crédit de solidarité 2026 : composantes TVQ, habitation et village nordique, calcul selon votre revenu, montants maximaux et versements mensuels.",
  date: "2026-04-17",
  categorie: "Crédit d&apos;impôt",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
