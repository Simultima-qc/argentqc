import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RAP 2026 : Comment utiliser votre REER pour acheter votre première maison au Québec",
  description:
    "Le Régime d'accession à la propriété (RAP) vous permet de retirer jusqu'à 35 000 $ de votre REER sans impôt pour acheter votre première maison. Guide complet 2026.",
  keywords: [
    "RAP REER 2026",
    "régime accession propriété Québec",
    "retirer REER première maison",
    "RAP premier acheteur Québec",
    "CELIAPP RAP cumuler",
  ],
};

export default function ArticleRapReer() {
  return (
    <main className="min-h-screen" style={{ background: "#F7F3EC" }}>
      <header style={{ background: "#060D1A", padding: "14px 16px", boxShadow: "0 1px 0 rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800, fontSize: "15px", color: "#F5C842", textDecoration: "none" }}>
            ArgentQC.ca
          </Link>
          <Link href="/blog" style={{ color: "rgba(240,235,224,0.5)", fontSize: "13px", textDecoration: "none" }}>
            ← Blogue
          </Link>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 py-10">
        {/* En-tête */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">Immobilier</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 2 avril 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            RAP 2026 : Comment utiliser votre REER pour acheter votre première maison au Québec
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Le Régime d&apos;accession à la propriété (RAP) est l&apos;un des avantages fiscaux les plus puissants
            pour les premiers acheteurs au Canada. En 2026, vous pouvez retirer jusqu&apos;à{" "}
            <strong>35 000 $</strong> de votre REER — sans payer d&apos;impôt — pour financer l&apos;achat de votre
            première maison. Pour un couple, c&apos;est jusqu&apos;à <strong>70 000 $</strong> combinés.
          </p>
        </div>

        {/* En bref */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Retrait sans impôt de <strong>jusqu&apos;à 35 000 $</strong> par personne (70 000 $ pour un couple)</li>
            <li>✓ Remboursement étalé sur <strong>15 ans</strong> — sans intérêt</li>
            <li>✓ Cumulable avec le <strong>CELIAPP</strong> pour maximiser votre mise de fonds</li>
            <li>✓ Vous devez ne pas avoir été propriétaire au cours des <strong>4 dernières années</strong></li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">C&apos;est quoi le RAP exactement ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le Régime d&apos;accession à la propriété (RAP) est un programme du gouvernement fédéral canadien
            qui permet aux premiers acheteurs de retirer des fonds de leur REER pour acheter ou construire
            une habitation admissible. Le grand avantage : ce retrait n&apos;est <strong>pas imposé</strong>{" "}l&apos;année
            du retrait, contrairement à un retrait REER ordinaire.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Les fonds retirés doivent être remboursés dans votre REER sur une période de 15 ans.
            Si vous ne remboursez pas la tranche annuelle prévue, ce montant s&apos;ajoute à votre revenu
            imposable pour cette année. Mais sans obligation de remboursement anticipé — le calendrier
            est flexible.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui est admissible au RAP en 2026 ?</h2>
          <div className="flex flex-col gap-3 mb-4">
            {[
              { crit: "Premier acheteur", detail: "Vous (et votre conjoint, si applicable) ne devez pas avoir été propriétaire d'une résidence principale au cours des 4 dernières années civiles." },
              { crit: "REER en place depuis 90 jours", detail: "Les fonds doivent être dans votre REER depuis au moins 90 jours avant le retrait. Vous ne pouvez pas déposer de l'argent et le retirer immédiatement." },
              { crit: "Résidence admissible", detail: "La maison doit être au Canada et devenir votre résidence principale avant le 1er octobre de l'année suivant le retrait." },
              { crit: "Contrat d'achat signé", detail: "Vous devez avoir un contrat d'achat ou une entente écrite pour acheter ou construire la maison avant le 1er octobre de l'année suivant le retrait." },
            ].map((item) => (
              <div key={item.crit} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.crit}</p>
                <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — chiffres */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Combien pouvez-vous retirer ?</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-4">Montants RAP 2026</p>
            <div className="space-y-3">
              {[
                { situation: "Acheteur seul", montant: "35 000 $", detail: "Maximum par personne" },
                { situation: "Couple (2 acheteurs)", montant: "70 000 $", detail: "35 000 $ chacun" },
                { situation: "Remboursement annuel", montant: "~2 333 $", detail: "Sur 15 ans (1/15 du total)" },
                { situation: "Délai de remboursement", montant: "15 ans", detail: "À partir de la 2e année suivant le retrait" },
              ].map((row) => (
                <div key={row.situation} className="flex items-center justify-between bg-white rounded-xl px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{row.situation}</p>
                    <p className="text-slate-400 text-xs">{row.detail}</p>
                  </div>
                  <p className="font-extrabold text-blue-700 text-sm shrink-0 ml-2">{row.montant}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Important : vous pouvez faire plusieurs retraits RAP dans la même année, mais le total
            cumulatif ne peut pas dépasser 35 000 $ par personne. Si votre REER contient moins de
            35 000 $, vous pouvez retirer seulement ce que vous avez accumulé.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">RAP + CELIAPP : la combinaison gagnante</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Depuis 2023, le gouvernement fédéral a créé le <strong>Compte d&apos;épargne libre d&apos;impôt
            pour l&apos;achat d&apos;une première propriété (CELIAPP)</strong>. Bonne nouvelle : le RAP et le
            CELIAPP sont entièrement cumulables.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-4">
            <p className="font-bold text-green-800 mb-3">Exemple — couple premier acheteur</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-900">RAP — Personne 1</span>
                <span className="font-bold text-green-800">35 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">RAP — Personne 2</span>
                <span className="font-bold text-green-800">35 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">CELIAPP — Personne 1</span>
                <span className="font-bold text-green-800">40 000 $</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">CELIAPP — Personne 2</span>
                <span className="font-bold text-green-800">40 000 $</span>
              </div>
              <div className="border-t border-green-200 pt-2 flex justify-between">
                <span className="font-bold text-green-900">Mise de fonds totale possible</span>
                <span className="font-extrabold text-green-800 text-base">150 000 $</span>
              </div>
            </div>
            <p className="text-green-700 text-xs mt-2">
              * Le CELIAPP permet de cotiser jusqu&apos;à 8 000 $/an (max 40 000 $ à vie). Les retraits CELIAPP
              pour l&apos;achat d&apos;une première propriété sont complètement libres d&apos;impôt et sans remboursement requis.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire votre demande RAP</h2>
          <div className="flex flex-col gap-4">
            {[
              { num: "1", titre: "Vérifiez votre REER", texte: "Assurez-vous que vos fonds sont dans le REER depuis au moins 90 jours. Vérifiez le solde disponible auprès de votre institution financière." },
              { num: "2", titre: "Remplissez le formulaire T1036", texte: "Le formulaire T1036 (Demande de retirer des fonds d'un REER dans le cadre du RAP) est disponible sur canada.ca. Il doit être rempli pour chaque retrait." },
              { num: "3", titre: "Soumettez à votre institution financière", texte: "Remettez le formulaire T1036 à votre banque ou caisse qui effectuera le retrait sans retenue d'impôt." },
              { num: "4", titre: "Déclarez dans votre rapport d'impôt", texte: "L'institution financière émet un feuillet T4RSP. Déclarez le retrait RAP dans votre déclaration de revenus — mais aucun impôt n'est dû si vous respectez les conditions." },
              { num: "5", titre: "Remboursez à partir de la 2e année", texte: "Vous avez jusqu'au 60e jour de la 2e année civile suivant le retrait pour commencer à rembourser. Cotisez 1/15 du montant retiré chaque année." },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0" style={{ background: "#060D1A" }}>
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
        <div style={{ background: "#060D1A", borderRadius: "20px", padding: "28px 24px", textAlign: "center", marginBottom: "24px" }}>
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F0EBE0", fontWeight: 800, fontSize: "1.15rem", marginBottom: "8px" }}>
            Découvrez toutes vos aides de premier acheteur
          </p>
          <p style={{ color: "rgba(240,235,224,0.45)", fontSize: "13px", marginBottom: "18px" }}>
            RAP, CELIAPP, crédits d&apos;impôt — calculez tout ce à quoi vous avez droit en 2 minutes.
          </p>
          <Link
            href="/questionnaire"
            style={{ display: "inline-block", background: "#F5C842", color: "#060D1A", fontWeight: 800, padding: "12px 28px", borderRadius: "12px", textDecoration: "none", fontSize: "14px" }}
          >
            Calculer mes aides →
          </Link>
        </div>

        {/* Articles reliés */}
        <div className="flex flex-col gap-2 mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Articles et guides reliés</p>
          {[
            { href: "/credit-impot-quebec", titre: "Crédits d'impôt Québec — tous les remboursables" },
            { href: "/subventions-maison-quebec", titre: "Subventions maison Québec 2026 — guide complet" },
            { href: "/blog/renoclimat-2026-guide-complet", titre: "Rénoclimat 2026 — guide étape par étape" },
            { href: "/cout-vie-quebec", titre: "Coût de la vie au Québec 2026" },
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

        <p className="text-center text-slate-400 text-xs leading-relaxed">
          Source officielle :{" "}
          <a
            href="https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/reer-ferr-regimes-similaires/regime-d-accession-propriete.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Canada.ca – Régime d&apos;accession à la propriété
          </a>
        </p>
      </article>

      <footer style={{ background: "#060D1A", padding: "24px 16px", marginTop: "16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F5C842", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié au gouvernement. Les montants sont des estimations.</p>
          <a href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px", display: "block", marginTop: "6px" }}>Contact</a>
        </div>
      </footer>
    </main>
  );
}
