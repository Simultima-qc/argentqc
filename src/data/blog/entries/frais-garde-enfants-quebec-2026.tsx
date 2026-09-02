import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "frais-garde-enfants-quebec-2026";

const baseMetadata: Metadata = {
  title: "Frais de garde d'enfants Québec 2026 – Crédit d'impôt de 67% à 78%",
  description:
    "Le crédit d'impôt pour frais de garde au Québec couvre entre 67% et 78% de vos frais admissibles de garderie, camp de jour ou service de garde non subventionné. Barème 2026, plafonds, conditions et comment le réclamer.",
  keywords: ["frais garde enfants Québec 2026", "crédit impôt frais garde Québec", "remboursement garderie Québec 2026"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/frais-garde-enfants-quebec-2026",
  },
};

function Content() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/fr" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>? Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Famille</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 30 mars 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Frais de garde d&apos;enfants au Québec 2026 : de 67% à 78% de vos dépenses remboursées
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le crédit d&apos;impôt pour frais de garde est l&apos;un des plus généreux au Canada. Au Québec, les
            familles à revenu modeste récupèrent <strong>jusqu&apos;à 78% de leurs frais de garde non subventionnée</strong>,
            et même les familles à revenu élevé conservent un taux plancher de 67%. Pourtant, beaucoup de parents ne
            réclament pas tout ce à quoi ils ont droit.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>? Crédit <strong>remboursable</strong> de 67% à 78% selon votre revenu familial (barème 2026)</li>
            <li>? Garderie, camp de jour, garde en milieu familial, aide à domicile — seulement si non subventionnés</li>
            <li>? Enfants de moins de 14 ans (sans limite si déficience grave et prolongée)</li>
            <li>? Cumulable avec la déduction fédérale pour frais de garde</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi exactement ce crédit ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit d&apos;impôt pour frais de garde d&apos;enfants est un crédit <strong>remboursable</strong>{" "}du
            gouvernement du Québec. Remboursable signifie que même si vous ne devez pas d&apos;impôt, vous recevez
            quand même l&apos;argent — c&apos;est un chèque que vous recevez.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Le taux du crédit varie entre <strong>67% et 78%</strong>{" "}de vos frais admissibles, selon votre revenu
            familial net et un barème à paliers. Plus votre revenu est faible, plus le pourcentage remboursé est
            élevé, mais le taux ne descend jamais sous 67%, même pour les revenus les plus élevés. La{" "}
            <strong>contribution réduite</strong>{" "}elle-même (place subventionnée en CPE, garderie ou milieu
            familial) n&apos;y donne jamais droit — mais certains frais additionnels facturés en plus de cette
            contribution peuvent rester admissibles s&apos;ils sont attestés au relevé 24 par le prestataire; vérifiez
            toujours le détail exact auprès de Revenu Québec.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien puis-je récupérer ?</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Barème des taux 2026 selon le revenu familial net</p>
            <div className="space-y-2 text-sm">
              {[
                { revenu: "0 $ – 25 305 $", taux: "78%" },
                { revenu: "25 305 $ – 44 620 $", taux: "75%" },
                { revenu: "44 620 $ – 46 270 $", taux: "74%" },
                { revenu: "46 270 $ – 47 935 $", taux: "73%" },
                { revenu: "47 935 $ – 49 565 $", taux: "72%" },
                { revenu: "49 565 $ – 51 225 $", taux: "71%" },
                { revenu: "51 225 $ – 122 290 $", taux: "70%" },
                { revenu: "Plus de 122 290 $", taux: "67%" },
              ].map((ligne) => (
                <div key={ligne.revenu} className="flex justify-between">
                  <span className="text-blue-900">{ligne.revenu}</span>
                  <span className="font-bold text-blue-800">{ligne.taux}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            Source : barème officiel 2026 de Revenu Québec. Le taux exact applicable dépend de votre revenu familial
            net déclaré.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Plafonds annuels de dépenses admissibles 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le crédit s&apos;applique aux frais admissibles jusqu&apos;à un plafond annuel qui dépend de la situation
            de l&apos;enfant, pas d&apos;un montant unique pour toutes les familles :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { titre: "Enfant avec déficience grave et prolongée", desc: "Plafond de 17 145 $ par année (aucune limite d'âge)" },
              { titre: "Enfant admissible de moins de 7 ans", desc: "Plafond de 12 525 $ par année" },
              { titre: "Tout autre enfant admissible (7 à 13 ans)", desc: "Plafond de 6 305 $ par année" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Le crédit annuel maximal par enfant correspond à ce plafond multiplié par votre taux applicable — il n&apos;existe
            pas de montant universel valable pour toutes les familles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Exemple concret</h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-5">
            <p className="font-semibold text-slate-800 mb-3">Famille avec 1 enfant de 8 ans, revenu familial net 60 000 $</p>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-slate-600">Frais de garde non subventionnée payés</span>
                <span className="font-medium text-slate-800">6 305 $ (plafond applicable)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Taux de crédit applicable (palier 51 225 $ – 122 290 $)</span>
                <span className="font-medium text-slate-800">70%</span>
              </div>
              <div className="border-t border-slate-100 pt-2 flex justify-between">
                <span className="font-bold text-slate-800">Crédit remboursable reçu</span>
                <span className="font-extrabold text-green-700 text-base">4 413,50 $</span>
              </div>
            </div>
            <p className="text-slate-500 text-xs">En plus du crédit québécois, cette famille peut aussi déduire les frais de garde au fédéral. Un revenu, des frais ou un nombre d&apos;enfants différents changent le taux et le plafond applicables.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quels frais sont admissibles ?</h2>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-4">
            <p className="text-sm text-red-800">
              <strong>Contribution réduite exclue :</strong> la contribution réduite elle-même, payée pour une place
              subventionnée (CPE, garderie ou milieu familial), <strong>ne donne jamais droit</strong> à ce crédit.
              Certains frais additionnels facturés en plus de cette contribution peuvent toutefois rester admissibles
              s&apos;ils sont attestés au relevé 24 — à confirmer auprès de Revenu Québec au cas par cas.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {[
              { titre: "Garderie ou CPE", desc: "La contribution réduite (place subventionnée, peu importe l'établissement) est exclue; certains frais additionnels attestés au relevé 24 peuvent rester admissibles" },
              { titre: "Garde en milieu familial reconnu", desc: "Reconnaissance par un bureau coordonnateur requise, hors places subventionnées" },
              { titre: "Camps de jour", desc: "Sports, arts, nature — si l'enfant a moins de 14 ans et que vous travaillez, étudiez ou cherchez un emploi" },
              { titre: "Garde à domicile", desc: "Gardienne ou aide familiale — reçus officiels obligatoires avec NAS" },
              { titre: "Pensionnat et internat", desc: "Frais de garde seulement, pas les frais de scolarité" },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment réclamer ce crédit ?</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Collectez tous vos reçus",
                texte: "Demandez un reçu officiel à chaque prestataire de services de garde. Pour une gardienne à domicile, vous avez besoin de son numéro d'assurance sociale (NAS).",
              },
              {
                num: "2",
                titre: "Remplissez l'annexe C",
                texte: "Lors de votre déclaration de revenus provinciale (TP-1), remplissez l'annexe C pour frais de garde. Le logiciel d'impôt le fait automatiquement si vous entrez les informations.",
              },
              {
                num: "3",
                titre: "Réclamez aussi au fédéral",
                texte: "La déduction fédérale pour frais de garde (ligne 21400) est différente du crédit provincial — vous pouvez bénéficier des deux. Le fédéral permet de déduire jusqu'à 8 000 $ par enfant de moins de 7 ans.",
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

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le truc : cumuler provincial et fédéral</h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-bold text-green-800 mb-3">Double avantage fiscal</p>
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span className="text-green-900">Crédit provincial (Revenu Québec)</span>
                <span className="font-bold text-green-800">67% – 78%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">Déduction fédérale (ARC)</span>
                <span className="font-bold text-green-800">jusqu&apos;à 8 000 $/enfant</span>
              </div>
              <div className="border-t border-green-200 pt-2">
                <p className="text-green-800 text-xs">Les deux s&apos;appliquent simultanément — le fédéral réduit votre revenu imposable, le provincial vous rembourse une partie des frais.</p>
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "#060D1A", borderRadius: "20px", padding: "24px", textAlign: "center", marginBottom: "24px" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 800, fontSize: "1.1rem", marginBottom: "8px" }}>Découvrez toutes vos aides en 2 minutes</p>
          <p style={{ color: "rgba(240,235,224,0.45)", fontSize: "13px", marginBottom: "16px" }}>Frais de garde, allocation famille, ACE — calculez tout ce à quoi vous avez droit.</p>
          <Link
            href="/fr/questionnaire"
            style={{ display: "inline-block", background: "#F5C842", color: "#060D1A", fontWeight: 800, padding: "12px 24px", borderRadius: "12px", textDecoration: "none", fontSize: "14px" }}
          >
            Trouver mes aides ?
          </Link>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Articles reliés</p>
          {[
            { href: "/aide-famille-quebec", titre: "Aide financière famille Québec 2026" },
            { href: "/allocation-enfant-quebec", titre: "Allocation enfant Québec – montants 2026" },
            { href: "/aide-financiere-sport-enfant-quebec", titre: "Aides sport enfant Québec" },
            { href: "/blog/renoclimat-2026-guide-complet", titre: "Guide complet Rénoclimat 2026" },
          ].map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              className="flex items-center justify-between bg-white border border-slate-100 rounded-xl px-4 py-3 hover:border-blue-200 transition-colors"
            >
              <span className="text-slate-700 text-sm">{lien.titre}</span>
              <span className="text-blue-500 text-sm">?</span>
            </Link>
          ))}
        </div>

        <p className="text-slate-400 text-xs text-center leading-relaxed">
          Source :{" "}
          <a href="https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-frais-de-garde-denfants/" target="_blank" rel="noopener noreferrer" className="underline">
            Revenu Québec – Crédit pour frais de garde
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
  titre: "Frais de garde d'enfants au Québec 2026 : de 67% à 78% de vos dépenses remboursées",
  description: "Le crédit d'impôt pour frais de garde couvre entre 67% et 78% de vos frais de garde non subventionnée. Barème et plafonds 2026, conditions et comment cumuler provincial et fédéral.",
  date: "2026-03-30",
  categorie: "Famille",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;

