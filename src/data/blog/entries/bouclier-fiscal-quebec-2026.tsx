import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "bouclier-fiscal-quebec-2026";

const baseMetadata: Metadata = {
  title: "Bouclier fiscal Québec : aboli à compter de l'année d'imposition 2026",
  description:
    "Le crédit d'impôt Bouclier fiscal du Québec a été aboli à compter de l'année d'imposition 2026 (Budget 2025-2026). L'année d'imposition 2025 (déclaration 2026) était la dernière année où il pouvait être réclamé : explications et exemples historiques.",
  keywords: ["bouclier fiscal Québec", "bouclier fiscal aboli 2026", "bouclier fiscal calcul", "prime au travail bouclier fiscal"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/bouclier-fiscal-quebec-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Fiscalité</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 21 juin 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Bouclier fiscal Québec : aboli à compter de l&apos;année d&apos;imposition 2026
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le crédit d&apos;impôt Bouclier fiscal du Québec a été <strong>aboli à compter de l&apos;année d&apos;imposition 2026</strong>{" "}
            (Budget du Québec 2025-2026, déposé le 25 mars 2025). L&apos;année d&apos;imposition 2025 — déclaration produite
            au printemps 2026 — était la <strong>dernière année</strong>{" "}où il pouvait être réclamé. Ce guide explique
            comment il fonctionnait, à titre historique, pour les personnes qui doivent encore le réclamer sur une
            déclaration 2025.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-amber-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-amber-900">
            <li>⚠ <strong>Aboli à compter de l&apos;année d&apos;imposition 2026</strong>{" "}— il n&apos;existe plus pour votre déclaration 2026</li>
            <li>✓ Pour l&apos;année d&apos;imposition 2025 (dernière année), il compensait <strong>50 % de la réduction</strong>{" "}de vos crédits quand votre revenu augmentait</li>
            <li>✓ Protégeait la prime au travail et le crédit pour frais de garde d&apos;enfants</li>
            <li>✓ Se réclamait à la <strong>ligne 460</strong>{" "}de la déclaration provinciale (formulaire TP-1029.BF)</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le piège de la hausse de revenu</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Plusieurs crédits d&apos;impôt provinciaux sont calculés selon votre revenu de l&apos;année précédente.
            Quand vous gagnez davantage — une promotion, plus d&apos;heures, un deuxième emploi — ces crédits
            se réduisent automatiquement l&apos;année suivante.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le résultat peut être pervers : une personne qui augmente son revenu de <strong>5 000 $</strong>{" "}perd
            parfois 1 500 $ en crédits, ce qui réduit le gain net réel à moins de 3 500 $. On appelle cela le
            &quot;piège de la pauvreté&quot; ou l&apos;effet de falaise des aides sociales.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Le bouclier fiscal, en vigueur de l&apos;année d&apos;imposition <strong>2016</strong>{" "}à <strong>2025</strong>,{" "}
            atténuait cet effet en remboursant la moitié de la perte de certains crédits ciblés. Il a été aboli
            à compter de l&apos;année d&apos;imposition 2026.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quels crédits étaient protégés ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Jusqu&apos;à l&apos;année d&apos;imposition 2025, le bouclier fiscal couvrait spécifiquement deux crédits
            provinciaux sensibles aux variations de revenu de travail :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                titre: "Prime au travail",
                desc: "Crédit remboursable pour les personnes et familles à faible ou moyen revenu qui travaillent. Il diminue progressivement quand le revenu dépasse certains seuils.",
              },
              {
                titre: "Crédit d'impôt pour frais de garde d'enfants",
                desc: "Remboursement partiel des frais de garde payés à une garderie, un CPE, un milieu familial ou une gardienne reconnue — la contribution réduite elle-même (place subventionnée) est exclue, mais certains frais additionnels attestés au relevé 24 peuvent rester admissibles. Le taux de crédit (67 % à 78 %) baisse avec le revenu.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">
            Note : Le crédit de solidarité et le soutien aux enfants ne font pas partie du bouclier fiscal —
            ils sont recalculés annuellement selon votre revenu, sans mécanisme de protection similaire.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui pouvait en bénéficier (année d&apos;imposition 2025) ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour avoir droit au bouclier fiscal sur votre déclaration 2025 — la dernière année où il s&apos;appliquait —
            vous deviez remplir toutes ces conditions :
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                num: "1",
                texte: "Votre revenu de travail (emploi ou travail autonome) a augmenté entre l'année précédente et l'année en cours.",
              },
              {
                num: "2",
                texte: "Vous aviez droit à la prime au travail ou au crédit pour frais de garde l'année précédente.",
              },
              {
                num: "3",
                texte: "La hausse de revenu a causé une réduction d'au moins un de ces deux crédits.",
              },
              {
                num: "4",
                texte: "Vous résidez au Québec au 31 décembre de l'année d'imposition.",
              },
            ].map((cond) => (
              <div key={cond.num} className="flex gap-4 items-start">
                <div className="w-7 h-7 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">
                  {cond.num}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed pt-0.5">{cond.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment était-il calculé ? Exemples historiques (année d&apos;imposition 2025)</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La formule était simple : le bouclier fiscal était égal à <strong>50 % de la réduction combinée</strong>{" "}des
            deux crédits protégés attribuable à la hausse du revenu de travail. Les exemples ci-dessous sont des
            illustrations pédagogiques pour l&apos;année d&apos;imposition 2025 — ils ne s&apos;appliquent plus à l&apos;année
            d&apos;imposition 2026.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Exemple : Marie, parent seul avec un enfant</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-blue-900">Revenu de travail 2024</span>
                <span className="font-semibold text-blue-800">32 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Revenu de travail 2025</span>
                <span className="font-semibold text-blue-800">38 500 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Perte de prime au travail</span>
                <span className="font-semibold text-blue-800">– 780 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Perte de crédit frais de garde</span>
                <span className="font-semibold text-blue-800">– 540 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-900">Perte totale de crédits</span>
                <span className="font-semibold text-blue-800">– 1 320 $</span>
              </div>
              <div className="border-t border-blue-200 pt-2 flex justify-between">
                <span className="font-bold text-blue-900">Bouclier fiscal reçu (50 %)</span>
                <span className="font-extrabold text-blue-800 text-base">+ 660 $</span>
              </div>
            </div>
            <p className="text-blue-700 text-xs">
              Sans le bouclier, Marie aurait récupéré seulement 5 180 $ net sur 6 500 $ de hausse brute. Avec le
              bouclier, elle récupère 5 840 $ — une protection réelle.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-bold text-green-800 mb-3">Exemple : Couple sans enfant</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-green-900">Hausse de revenu du ménage</span>
                <span className="font-semibold text-green-800">+ 4 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">Perte de prime au travail</span>
                <span className="font-semibold text-green-800">– 480 $</span>
              </div>
              <div className="border-t border-green-200 pt-2 flex justify-between">
                <span className="font-bold text-green-900">Bouclier fiscal reçu (50 %)</span>
                <span className="font-extrabold text-green-800 text-base">+ 240 $</span>
              </div>
            </div>
            <p className="text-green-700 text-xs">
              Montant modeste mais entièrement automatique — aucune action requise.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment le réclamer sur une déclaration 2025 (dernière année)</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Pour l&apos;année d&apos;imposition 2025 — la dernière où il s&apos;applique — voici comment il fonctionnait
            dans la pratique :
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Déclarez vos revenus normalement",
                texte: "Remplissez votre déclaration provinciale 2025 (TP-1) comme d'habitude. Indiquez vos revenus d'emploi ou de travail autonome.",
              },
              {
                num: "2",
                titre: "Le calcul se fait automatiquement",
                texte: "Revenu Québec compare vos revenus de travail 2025 à ceux de 2024. Si vous avez gagné davantage et perdu des crédits, le bouclier fiscal est calculé à partir de la case 99 de l'annexe C ou de la case 5 de l'annexe P (ligne 460), ou du formulaire TP-1029.BF si vous préférez le calculer vous-même.",
              },
              {
                num: "3",
                titre: "Le montant s'applique à votre remboursement",
                texte: "Le bouclier fiscal vient réduire votre impôt à payer ou augmenter votre remboursement. Il est versé en une seule fois avec votre remboursement d'impôt. Il n'existe plus pour l'année d'imposition 2026 : aucune démarche n'est possible sur une déclaration 2026.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {etape.num}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{etape.titre}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{etape.texte}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">
            Astuce : si vous utilisez un logiciel d&apos;impôt comme ImpôtRapide, H&R Block ou Turbo Impôt, l&apos;annexe P
            est remplie automatiquement dès que vos données sont saisies.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Questions fréquentes sur le bouclier fiscal</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                q: "Le bouclier fiscal existe-t-il encore en 2026 ?",
                r: "Non. Le budget du Québec 2025-2026 (déposé le 25 mars 2025) a aboli le crédit d'impôt Bouclier fiscal à compter de l'année d'imposition 2026. L'année d'imposition 2025 (déclaration produite au printemps 2026) était la dernière année où il pouvait être réclamé.",
              },
              {
                q: "Est-ce que le bouclier fiscal s'appliquait si je passais du chômage à l'emploi ?",
                r: "Oui, pour une année d'imposition où il existait encore (jusqu'à 2025 inclusivement), si votre revenu de travail (emploi ou travail autonome) était plus élevé qu'en N-1, même si vous receviez des prestations d'assurance-emploi l'an dernier. L'important était la comparaison du revenu de travail, pas du revenu total.",
              },
              {
                q: "Et si j'avais deux emplois en 2025 mais un seul en 2024 ?",
                r: "Le bouclier s'appliquait tant que le revenu de travail avait augmenté et que la personne avait droit à l'un des deux crédits protégés l'année précédente.",
              },
              {
                q: "Le bouclier compensait-il la perte complète des crédits ?",
                r: "Non — il compensait seulement 50 % de la réduction. Il subsistait quand même une perte nette, mais elle était atténuée de moitié.",
              },
              {
                q: "Y avait-il un montant maximum au bouclier fiscal ?",
                r: "Il n'y avait pas de plafond fixe annoncé. Le montant était limité par la réduction réelle des deux crédits protégés — pour une perte de 200 $ en crédits, le bouclier était de 100 $.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-slate-100 px-4 py-4">
                <p className="font-semibold text-slate-800 text-sm mb-1">{faq.q}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.r}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg mb-2">Découvrez toutes vos aides fiscales actuelles</p>
          <p className="text-slate-300 text-sm mb-4">
            Le bouclier fiscal a été aboli, mais la prime au travail et le crédit de solidarité existent toujours en 2026 — faites le tour complet de ce à quoi vous avez droit.
          </p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-xl"
          >
            Calculer mes aides →
          </Link>
        </div>

        {/* Lien officiel */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/comment-remplir-votre-declaration-de-revenus/aide-par-ligne/451-a-480-remboursement-ou-solde-a-payer/ligne-460/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Revenu Québec – Bouclier fiscal (ligne 460, aboli à compter de l&apos;année d&apos;imposition 2026)
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
  titre: "Bouclier fiscal Québec 2026 : Protégez vos aides lors d'une hausse de revenus",
  description: "Le bouclier fiscal Québec compense 50 % de la perte de vos crédits quand votre revenu augmente. Qui en bénéficie, calcul et exemples concrets d'économies.",
  date: "2026-06-21",
  categorie: "Fiscalité",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
