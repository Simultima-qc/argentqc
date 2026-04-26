import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "securite-vieillesse-quebec-2026";

const baseMetadata: Metadata = {
  title: "Sécurité de la vieillesse 2026 : Montants, admissibilité et comment faire votre demande",
  description:
    "Tout sur la pension de la Sécurité de la vieillesse en 2026 : montants mensuels, qui y a droit à 65 ans, bonification à 70 ans et cumul avec le Supplément de revenu garanti (SRG).",
  keywords: [
    "Sécurité de la vieillesse 2026",
    "pension SV montant 2026",
    "SV admissibilité Québec",
    "bonification SV 70 ans",
    "SRG supplément revenu garanti",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/securite-vieillesse-quebec-2026",
  },
};

function Content() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>? Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        {/* En-tête article */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Retraite</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 6 avril 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Sécurité de la vieillesse 2026 : Montants, admissibilité et comment faire votre demande
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            La pension de la Sécurité de la vieillesse (SV) est la prestation fédérale versée automatiquement à la plupart
            des Canadiens dès 65 ans. En 2026, elle peut atteindre jusqu&apos;à <strong>727 $ par mois</strong>{' '} — et
            jusqu&apos;à <strong>800 $ si vous avez 75 ans ou plus</strong>{" "}. Cumulée avec le Supplément de revenu garanti,
            certains aînés reçoivent plus de <strong>1 800 $ par mois</strong>{' '} du gouvernement fédéral seulement.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>? Admissible dès <strong>65 ans</strong>{' '} si vous avez vécu au Canada au moins 10 ans depuis vos 18 ans</li>
            <li>? Montant 2026 : environ <strong>727 $/mois</strong>{' '} (65-74 ans) ou <strong>800 $/mois</strong>{' '} (75 ans et plus)</li>
            <li>? Différer à 70 ans augmente votre pension de <strong>36 %</strong>{' '} à vie</li>
            <li>? Cumulable avec le SRG : jusqu&apos;à <strong>1 073 $ de plus</strong>{' '} par mois si votre revenu est faible</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi la Sécurité de la vieillesse ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            La Sécurité de la vieillesse est un programme fédéral administré par Service Canada. Contrairement au Régime
            de rentes du Québec (RRQ), elle ne dépend <strong>pas de vos cotisations</strong>{' '} au cours de votre vie active.
            Son admissibilité repose uniquement sur votre âge et le nombre d&apos;années de résidence au Canada.
          </p>
          <p className="text-slate-600 leading-relaxed">
            La pension SV est imposable, mais elle est indexée trimestriellement à l&apos;Indice des prix à la consommation
            (IPC), ce qui lui permet de suivre le coût de la vie. Pour 2026, les ajustements du premier trimestre ont
            maintenu les montants relativement stables après les augmentations des années précédentes.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui y a droit ? Les conditions d&apos;admissibilité</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour recevoir la pension complète de la SV, vous devez remplir les trois conditions suivantes :
          </p>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              { titre: "Âge", desc: "Avoir 65 ans ou plus au moment de la demande." },
              { titre: "Résidence au Canada", desc: "Avoir vécu légalement au Canada pendant au moins 40 ans après vos 18 ans (pour la pension complète)." },
              { titre: "Citoyenneté ou statut légal", desc: "Être citoyen canadien ou résident légal au moment de l'approbation de votre demande." },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <p className="font-semibold mb-1">Pension partielle</p>
            <p>
              Si vous avez vécu au Canada entre 10 et 39 ans, vous recevez une <strong>pension partielle</strong>{' '} :
              1/40e de la pension complète par année de résidence. Par exemple, 25 ans de résidence =
              25/40e (62,5 %) de la pension maximale.
            </p>
          </div>
        </section>

        {/* Section 3 — Montants */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants de la SV en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les montants sont indexés chaque trimestre. Voici les montants en vigueur au début de 2026 :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Pension mensuelle maximale</p>
            <div className="space-y-3">
              {[
                { groupe: "65 à 74 ans", montant: "727,67 $", note: "montant trimestriel indexé à l'IPC" },
                { groupe: "75 ans et plus", montant: "800,44 $", note: "bonification permanente de 10 % depuis 2022" },
              ].map((row) => (
                <div key={row.groupe} className="flex justify-between items-start text-sm">
                  <div>
                    <span className="text-blue-900 font-medium">{row.groupe}</span>
                    <p className="text-blue-600 text-xs mt-0.5">{row.note}</p>
                  </div>
                  <span className="font-extrabold text-blue-800 text-base whitespace-nowrap ml-4">{row.montant}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-500 text-xs mt-4">* Pension complète (40 ans de résidence). Revérifiez sur canada.ca pour le trimestre en cours.</p>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            La récupération (clawback) s&apos;applique si votre revenu net dépasse <strong>90 997 $ en 2025</strong>{" "}
            (seuil indexé annuellement). Au-delà, la pension est réduite de 0,15 $ pour chaque dollar de revenu
            supplémentaire jusqu&apos;à extinction complète vers 147 000 $.
          </p>
        </section>

        {/* Section 4 — Bonification à 70 ans */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Différer sa pension : la bonification à 70 ans</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Vous pouvez choisir de <strong>retarder</strong>{' '} le début de votre pension SV jusqu&apos;à l&apos;âge de 70 ans.
            Pour chaque mois de report après 65 ans, la pension augmente de <strong>0,6 %</strong>{" "}, soit une
            bonification permanente de <strong>36 %</strong>{' '} si vous attendez jusqu&apos;à 70 ans.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-4">
            <p className="font-bold text-green-800 mb-3">Comparaison : 65 ans vs 70 ans (groupe 65-74)</p>
            <div className="space-y-2 text-sm">
              {[
                { age: "Pension à 65 ans", mensuel: "727,67 $/mois", annuel: "8 732 $/an" },
                { age: "Pension à 70 ans (+36 %)", mensuel: "989,63 $/mois", annuel: "11 876 $/an" },
              ].map((row) => (
                <div key={row.age} className="flex justify-between">
                  <span className="text-green-900">{row.age}</span>
                  <div className="text-right">
                    <span className="font-bold text-green-800">{row.mensuel}</span>
                    <p className="text-green-600 text-xs">{row.annuel}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-green-200 pt-2">
                <p className="text-green-700 text-xs">
                  Point d&apos;équilibre : environ 83 ans. Si vous êtes en bonne santé, reporter peut être avantageux.
                </p>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            <strong>Attention :</strong>{' '} il n&apos;est plus possible de demander un paiement rétroactif au-delà de 11 mois.
            Assurez-vous de faire votre demande à temps pour ne pas perdre de versements.
          </p>
        </section>

        {/* Section 5 — SRG */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le SRG : jusqu&apos;à 1 073 $ de plus par mois</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le Supplément de revenu garanti (SRG) est une prestation <strong>non imposable</strong>{' '} versée en plus de la
            pension SV aux aînés à faible revenu. Contrairement à la SV, il faut en faire la demande chaque année
            (ou activer le renouvellement automatique via votre déclaration de revenus).
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">SRG maximum mensuel 2026 (approximatif)</p>
            <div className="space-y-2 text-sm">
              {[
                { situation: "Personne seule", srg: "1 073 $", revenu: "Revenu annuel &lt; 21 768 $" },
                { situation: "Couple (2 bénéficiaires SV)", srg: "645 $ chacun", revenu: "Revenu du couple &lt; 28 752 $" },
                { situation: "Couple (1 bénéficiaire SV)", srg: "1 073 $", revenu: "Revenu du couple &lt; 52 080 $" },
              ].map((row) => (
                <div key={row.situation} className="flex justify-between items-start text-sm border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                  <div>
                    <span className="text-blue-900 font-medium">{row.situation}</span>
                    <p className="text-blue-600 text-xs mt-0.5" dangerouslySetInnerHTML={{ __html: row.revenu }} />
                  </div>
                  <span className="font-bold text-blue-800 whitespace-nowrap ml-4">{row.srg}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            SV + SRG combinés : une personne seule à faible revenu peut recevoir jusqu&apos;à <strong>1 801 $/mois</strong>{' '} du
            gouvernement fédéral, soit plus de <strong>21 600 $ par an</strong>{' '} — entièrement libre d&apos;impôt pour la
            portion SRG. Pour en savoir plus sur l&apos;admissibilité, consultez notre guide sur le{" "}
            <Link href="/blog/renoclimat-2026-guide-complet" className="text-blue-700 underline">SRG 2026</Link>.
          </p>
        </section>

        {/* Section 6 — Faire sa demande */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Service Canada inscrit automatiquement la plupart des Canadiens à la SV. Vous recevrez une lettre
            6 mois avant vos 65 ans si vous êtes inscrit automatiquement. Sinon, voici les étapes :
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Vérifiez si vous êtes inscrit automatiquement",
                texte: "Connectez-vous à Mon dossier Service Canada ou attendez la lettre de Service Canada envoyée ~6 mois avant vos 65 ans. Si vous recevez cette lettre, aucune démarche n'est nécessaire.",
              },
              {
                num: "2",
                titre: "Faites la demande en ligne ou par courrier",
                texte: "Sur My Service Canada Account (MSCA) ou en remplissant le formulaire ISP-3000 disponible sur canada.ca. Vous pouvez soumettre la demande jusqu'à 11 mois avant votre 65e anniversaire.",
              },
              {
                num: "3",
                titre: "Demandez le SRG en même temps",
                texte: "Si votre revenu est faible, cochez la case SRG dans le formulaire de demande de SV. Le SRG se renouvelle automatiquement si vous remplissez votre déclaration de revenus chaque année.",
              },
              {
                num: "4",
                titre: "Recevez vos versements mensuels",
                texte: "Les paiements sont versés le dernier jour ouvrable de chaque mois par dépôt direct. Le premier versement arrive généralement le mois suivant l'approbation.",
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
        </section>

        {/* CTA */}
        <div style={{ background: "#060D1A" }} className="text-white rounded-2xl p-6 text-center mb-8">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            SV, SRG, crédit de solidarité, allocation logement — notre questionnaire gratuit identifie chaque programme en 2 minutes.
          </p>
          <Link
            href="/questionnaire"
            className="inline-block font-bold px-6 py-3 rounded-xl"
            style={{ background: "#F5C842", color: "#060D1A" }}
          >
            Trouver mes aides ?
          </Link>
        </div>

        {/* Source officielle */}
        <p className="text-center text-slate-400 text-xs">
          Source officielle :{" "}
          <a
            href="https://www.canada.ca/fr/emploi-developpement-social/programmes/securite-vieillesse.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca – Sécurité de la vieillesse
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
  titre: "Sécurité de la vieillesse 2026 : Montants, admissibilité et comment faire votre demande",
  description: "Pension SV 2026 : jusqu'à 800 $/mois à 75 ans, bonification de 36 % si vous reportez à 70 ans, et cumul avec le SRG pour les aînés à faible revenu.",
  date: "2026-04-06",
  categorie: "Retraite",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;

