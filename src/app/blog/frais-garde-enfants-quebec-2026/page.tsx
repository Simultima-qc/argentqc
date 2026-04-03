import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frais de garde d'enfants Québec 2026 – Crédit d'impôt jusqu'à 75%",
  description:
    "Le crédit d'impôt pour frais de garde au Québec peut couvrir jusqu'à 75% de vos frais de garderie, camp de jour ou service de garde. Montants 2026, conditions et comment le réclamer.",
  keywords: ["frais garde enfants Québec 2026", "crédit impôt frais garde Québec", "remboursement garderie Québec 2026"],
};

export default function ArticleFraisGarde() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>ArgentQC.ca</Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>← Blogue</Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Famille</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 30 mars 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Frais de garde d&apos;enfants au Québec 2026 : récupérez jusqu&apos;à 75% de vos dépenses
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le crédit d&apos;impôt pour frais de garde est l&apos;un des plus généreux au Canada. Au Québec, certaines
            familles à faible revenu récupèrent <strong>75% de leurs frais de garderie</strong>. Pourtant, beaucoup
            de parents ne réclament pas tout ce à quoi ils ont droit.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Crédit <strong>remboursable</strong> de 26% à 75% selon votre revenu</li>
            <li>✓ Garderie, camp de jour, garde en milieu familial, aide à domicile admissibles</li>
            <li>✓ Enfants de moins de 16 ans (sans limite si handicap)</li>
            <li>✓ Cumulable avec la déduction fédérale pour frais de garde</li>
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
            Le taux du crédit varie entre <strong>26% et 75%</strong>{" "}de vos frais admissibles, selon votre revenu
            familial. Plus votre revenu est faible, plus le pourcentage remboursé est élevé. C&apos;est une des
            mesures les plus progressives du système fiscal québécois.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien puis-je récupérer ?</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Taux du crédit selon le revenu familial 2026</p>
            <div className="space-y-2 text-sm">
              {[
                { revenu: "Moins de 35 000 $", taux: "75%" },
                { revenu: "35 000 $ – 50 000 $", taux: "65% – 75%" },
                { revenu: "50 000 $ – 75 000 $", taux: "45% – 65%" },
                { revenu: "75 000 $ – 100 000 $", taux: "26% – 45%" },
                { revenu: "Plus de 100 000 $", taux: "26%" },
              ].map((ligne) => (
                <div key={ligne.revenu} className="flex justify-between">
                  <span className="text-blue-900">{ligne.revenu}</span>
                  <span className="font-bold text-blue-800">{ligne.taux}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            * Les taux sont approximatifs. Le calcul exact est fait selon votre revenu net familial.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Exemple concret</h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-5">
            <p className="font-semibold text-slate-800 mb-3">Famille avec 2 enfants, revenu 60 000 $</p>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-slate-600">Frais de garderie annuels (2 enfants)</span>
                <span className="font-medium text-slate-800">8 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Taux de crédit applicable</span>
                <span className="font-medium text-slate-800">~55%</span>
              </div>
              <div className="border-t border-slate-100 pt-2 flex justify-between">
                <span className="font-bold text-slate-800">Crédit remboursable reçu</span>
                <span className="font-extrabold text-green-700 text-base">~4 400 $</span>
              </div>
            </div>
            <p className="text-slate-500 text-xs">En plus du crédit québécois, cette famille peut aussi déduire les frais de garde au fédéral.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quels frais sont admissibles ?</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { titre: "Garderie et CPE", desc: "Incluant les garderies non subventionnées à 10 $ et les garderies privées" },
              { titre: "Garde en milieu familial", desc: "Reconnaissance par un bureau coordonnateur requis" },
              { titre: "Camps de jour", desc: "Sports, arts, nature — si l'enfant a moins de 16 ans et que vous travaillez ou étudiez" },
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
                <span className="font-bold text-green-800">26% – 75%</span>
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
            href="/questionnaire"
            style={{ display: "inline-block", background: "#F5C842", color: "#060D1A", fontWeight: 800, padding: "12px 24px", borderRadius: "12px", textDecoration: "none", fontSize: "14px" }}
          >
            Calculer mes aides →
          </Link>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Articles reliés</p>
          {[
            { href: "/aide-famille-quebec", titre: "Aide financière famille Québec 2026" },
            { href: "/allocation-enfant-quebec", titre: "Allocation enfant Québec – montants 2026" },
            { href: "/subvention-sport-enfant-quebec", titre: "Aides sport enfant Québec" },
            { href: "/blog/renoclimat-2026-guide-complet", titre: "Guide complet Rénoclimat 2026" },
          ].map((lien) => (
            <Link
              key={lien.href}
              href={lien.href}
              className="flex items-center justify-between bg-white border border-slate-100 rounded-xl px-4 py-3 hover:border-blue-200 transition-colors"
            >
              <span className="text-slate-700 text-sm">{lien.titre}</span>
              <span className="text-blue-500 text-sm">→</span>
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

      <footer style={{ background: "#060D1A", padding: "24px 16px", marginTop: "16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F5C842", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié au gouvernement. Les montants sont des estimations.</p>
          <div style={{ marginTop: "8px", display: "flex", justifyContent: "center", gap: "16px" }}>
            <a href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px" }}>Contact</a>
            <a href="mailto:contact@argentqc.ca" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px" }}>contact@argentqc.ca</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
