import type { Metadata } from "next";
import Link from "next/link";
import type { BlogArticle } from "@/data/blog/types";

const slug = "allocation-famille-quebec-calcul-2026";

const baseMetadata: Metadata = {
  title: "Allocation famille Québec 2026 : Calculez combien vous recevez",
  description:
    "Allocation famille Québec 2026 : montants selon le nombre d'enfants et le revenu familial, comment calculer votre aide, versements mensuels de Retraite Québec.",
  keywords: ["allocation famille québec 2026", "allocation famille montant", "allocation famille calcul", "retraite québec enfants", "aide famille québec"],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/allocation-famille-quebec-calcul-2026",
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
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Famille</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 25 avril 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Allocation famille Québec 2026 : Calculez combien vous recevez
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            L&apos;allocation famille est un versement mensuel de <strong>Retraite Québec</strong>{" "} destiné aux familles
            avec enfants de moins de 18 ans. En 2026, certaines familles reçoivent jusqu&apos;à{" "}
            <strong>990 $ par mois</strong>{" "} selon leur situation. Voici comment calculer votre montant.
          </p>
        </div>

        {/* Encadré résumé */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Versements mensuels automatiques de Retraite Québec pour chaque enfant de moins de 18 ans</li>
            <li>✓ Montant calculé en fonction du nombre d&apos;enfants et du revenu familial net</li>
            <li>✓ Jusqu&apos;à <strong>2 973 $ par année</strong>{" "} pour un premier enfant (maximum 2026)</li>
            <li>✓ Supplément pour enfant handicapé et supplément pour famille monoparentale disponibles</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que l&apos;allocation famille ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            L&apos;allocation famille est un programme provincial administré par <strong>Retraite Québec</strong>{" "} qui verse
            chaque mois une aide financière aux familles ayant des enfants à charge de moins de 18 ans. Contrairement
            à l&apos;Allocation canadienne pour enfants (fédérale), celle-ci est spécifique au Québec et s&apos;y ajoute.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            L&apos;allocation est <strong>automatiquement versée</strong>{" "} dès que votre enfant est inscrit à l&apos;état civil
            québécois — il n&apos;est généralement pas nécessaire de faire une demande si vous avez déclaré la naissance
            au Directeur de l&apos;état civil. Les versements arrivent le 1er de chaque mois directement dans votre compte bancaire.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Le montant est révisé chaque année en juillet selon un taux d&apos;indexation basé sur l&apos;indice des prix
            à la consommation. Il tient compte de votre revenu familial net de l&apos;année précédente, tel que déclaré
            dans votre déclaration de revenus provinciale.
          </p>
        </section>

        {/* Section 2 — Montants */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants de l&apos;allocation famille en 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le montant annuel varie selon le nombre d&apos;enfants et le revenu familial net. Chaque famille reçoit
            un montant compris entre un <strong>montant minimum</strong>{" "} et un <strong>montant maximum</strong>.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Montants maximums 2026 (revenu faible)</p>
            <div className="space-y-2">
              {[
                { situation: "1 enfant", annuel: "2 973 $", mensuel: "248 $" },
                { situation: "2 enfants", annuel: "5 948 $", mensuel: "496 $" },
                { situation: "3 enfants", annuel: "8 680 $", mensuel: "723 $" },
                { situation: "4 enfants", annuel: "11 875 $", mensuel: "990 $" },
              ].map((ligne) => (
                <div key={ligne.situation} className="flex justify-between items-center text-sm border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                  <span className="text-blue-900 font-medium">{ligne.situation}</span>
                  <div className="text-right">
                    <span className="font-bold text-blue-800 block">{ligne.annuel}/an</span>
                    <span className="text-blue-600 text-xs">{ligne.mensuel}/mois</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-4">
            <p className="font-bold text-slate-700 mb-3">Montants minimums 2026 (revenu élevé)</p>
            <div className="space-y-2">
              {[
                { situation: "1 enfant", annuel: "900 $", mensuel: "75 $" },
                { situation: "2 enfants", annuel: "1 801 $", mensuel: "150 $" },
                { situation: "3 enfants", annuel: "2 632 $", mensuel: "219 $" },
                { situation: "4 enfants", annuel: "3 601 $", mensuel: "300 $" },
              ].map((ligne) => (
                <div key={ligne.situation} className="flex justify-between items-center text-sm border-b border-slate-200 pb-2 last:border-0 last:pb-0">
                  <span className="text-slate-700 font-medium">{ligne.situation}</span>
                  <div className="text-right">
                    <span className="font-bold text-slate-800 block">{ligne.annuel}/an</span>
                    <span className="text-slate-500 text-xs">{ligne.mensuel}/mois</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-xs">
            * Les montants ci-dessus sont indexés au 1er janvier 2026. La transition entre maximum et minimum
            se fait progressivement selon le revenu familial net.
          </p>
        </section>

        {/* Section 3 — Comment le calcul fonctionne */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment est calculé votre montant ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le calcul de l&apos;allocation famille suit une formule progressive. Vous recevez le montant maximum
            si votre revenu familial net est inférieur à environ <strong>52 000 $</strong>. Au-delà de ce seuil,
            le montant diminue graduellement — mais ne descend jamais en dessous du minimum.
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                revenu: "Moins de 52 000 $",
                couleur: "bg-green-100 border-green-200",
                texte: "Montant maximum — vous recevez la totalité de l&apos;aide pour votre nombre d&apos;enfants.",
                textColor: "text-green-900",
              },
              {
                revenu: "52 000 $ – 110 000 $",
                couleur: "bg-yellow-50 border-yellow-200",
                texte: "Montant réduit progressivement — chaque dollar de revenu supplémentaire réduit légèrement l&apos;allocation.",
                textColor: "text-yellow-900",
              },
              {
                revenu: "Plus de 110 000 $",
                couleur: "bg-slate-100 border-slate-200",
                texte: "Montant minimum garanti — même les ménages à revenus élevés reçoivent une aide de base.",
                textColor: "text-slate-700",
              },
            ].map((tranche) => (
              <div key={tranche.revenu} className={`border rounded-xl p-4 ${tranche.couleur}`}>
                <p className={`font-bold text-sm mb-1 ${tranche.textColor}`}>{tranche.revenu}</p>
                <p className={`text-sm ${tranche.textColor}`} dangerouslySetInnerHTML={{ __html: tranche.texte }} />
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            En cas de <strong>garde partagée</strong>, chaque parent reçoit la moitié du montant qui correspondrait
            à la garde exclusive. Les deux parents doivent déclarer la garde partagée à Retraite Québec.
          </p>
        </section>

        {/* Section 4 — Suppléments */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Suppléments additionnels disponibles</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            En plus du montant de base, certaines familles ont droit à des suppléments qui s&apos;ajoutent
            automatiquement à l&apos;allocation mensuelle.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                titre: "Supplément pour enfant handicapé",
                desc: "Jusqu&apos;à 239 $/mois par enfant ayant des contraintes importantes liées à un handicap. Demande requise auprès de Retraite Québec.",
              },
              {
                titre: "Supplément pour famille monoparentale",
                desc: "Environ 988 $/an (82 $/mois) pour les parents seuls qui ont la garde principale de leurs enfants.",
              },
              {
                titre: "Allocation canadienne pour enfants (fédérale)",
                desc: "Programme distinct d&apos;Ottawa, cumulable avec l&apos;allocation provinciale. Jusqu&apos;à 7 787 $/an pour un enfant de moins de 6 ans.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm mb-1">{item.titre}</p>
                <p className="text-slate-500 text-sm" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 — Comment faire la demande / vérifier */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment vérifier ou mettre à jour votre dossier</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Dans la grande majorité des cas, l&apos;allocation famille démarre <strong>automatiquement</strong>{" "} après
            la naissance ou l&apos;adoption. Cependant, certaines situations nécessitent une démarche active.
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Déclaration de naissance",
                texte: "Déclarez la naissance au Directeur de l&apos;état civil dans les 30 jours. Retraite Québec reçoit automatiquement l&apos;information et démarre les versements.",
              },
              {
                num: "2",
                titre: "Vérifiez votre espace Mon dossier",
                texte: "Sur le site de Retraite Québec, Mon dossier permet de consulter vos versements, votre revenu déclaré et de signaler tout changement de situation (séparation, garde, déménagement).",
              },
              {
                num: "3",
                titre: "Mettez à jour votre revenu",
                texte: "L&apos;allocation est recalculée chaque année en juillet à partir de votre déclaration de revenus. Produisez votre déclaration provinciale avant le 30 avril pour éviter les délais.",
              },
              {
                num: "4",
                titre: "Signalez un changement de garde",
                texte: "En cas de séparation ou de changement de garde, avisez Retraite Québec rapidement. Les versements seront ajustés dès le mois suivant.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {etape.num}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{etape.titre}</p>
                  <p className="text-slate-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: etape.texte }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — Exemple concret */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Exemple concret : famille de 2 enfants</h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-bold text-green-800 mb-3">Famille Tremblay — revenu familial net 68 000 $/an</p>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-green-900">Allocation famille Québec (2 enfants, revenu réduit)</span>
                <span className="font-bold text-green-800">~4 100 $/an</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-900">Allocation canadienne pour enfants (fédérale)</span>
                <span className="font-bold text-green-800">~10 000 $/an</span>
              </div>
              <div className="border-t border-green-200 pt-2 flex justify-between">
                <span className="font-bold text-green-900">Total combiné</span>
                <span className="font-extrabold text-green-800 text-base">~14 100 $/an</span>
              </div>
            </div>
            <p className="text-green-700 text-xs">
              Soit environ <strong>1 175 $/mois</strong>{" "} combinés des deux programmes. Les montants varient selon
              l&apos;âge des enfants et le revenu exact.
            </p>
          </div>
        </section>

        {/* Liens internes */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Autres aides pour les familles québécoises</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { href: "/aide-famille-quebec", titre: "Aide aux familles Québec", desc: "Vue d&apos;ensemble des programmes provinciaux pour familles" },
              { href: "/allocation-enfant-quebec", titre: "Allocation pour enfant", desc: "Détails sur l&apos;allocation canadienne pour enfants au Québec" },
              { href: "/blog/frais-garde-enfants-quebec-2026", titre: "Frais de garde 2026", desc: "Crédit d&apos;impôt et services de garde subventionnés" },
            ].map((lien) => (
              <Link key={lien.href} href={lien.href} className="bg-white rounded-xl border border-slate-100 px-4 py-3 flex items-center gap-3 no-underline hover:border-purple-200 transition-colors">
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{lien.titre}</p>
                  <p className="text-slate-500 text-xs" dangerouslySetInnerHTML={{ __html: lien.desc }} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "#060D1A" }} className="text-white rounded-2xl p-6 text-center mb-6">
          <p className="font-bold text-lg mb-2">Découvrez toutes les aides auxquelles vous avez droit</p>
          <p className="text-sm mb-4" style={{ color: "rgba(240,235,224,0.6)" }}>
            Allocation famille, crédits d&apos;impôt, aides logement — répondez à quelques questions et obtenez
            votre liste personnalisée en 2 minutes.
          </p>
          <Link
            href="/questionnaire"
            style={{ background: "#F5C842", color: "#060D1A" }}
            className="inline-block font-bold px-6 py-3 rounded-xl"
          >
            Calculer mes aides →
          </Link>
        </div>

        {/* Source officielle */}
        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.retraitequebec.gouv.qc.ca/fr/produits-services/familles/pages/af.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Retraite Québec – Allocation famille
          </a>
        </p>
      </article>

      <footer style={{ background: "#060D1A", padding: "24px 16px", marginTop: "16px" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-playfair)", color: "#F5C842", fontSize: "1rem", fontWeight: 700, marginBottom: "6px" }}>ArgentQC.ca</p>
          <p style={{ color: "rgba(240,235,224,0.3)", fontSize: "11px" }}>Outil informatif non affilié au gouvernement. Les montants sont des estimations.</p>
          <div style={{ marginTop: "6px", display: "flex", justifyContent: "center", gap: "16px" }}>
            <Link href="/contact" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px" }}>Contactez-nous</Link>
            <Link href="/politique-confidentialite" style={{ color: "rgba(240,235,224,0.45)", fontSize: "11px" }}>Politique de confidentialité</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

const article: BlogArticle = {
  slug,
  titre: "Allocation famille Québec 2026 : Calculez combien vous recevez",
  description: "Montants de l'allocation famille Québec 2026, comment calculer votre aide selon votre revenu et le nombre d'enfants, suppléments disponibles et versements mensuels.",
  date: "2026-04-25",
  categorie: "Famille",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
