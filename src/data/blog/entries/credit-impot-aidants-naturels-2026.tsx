import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-impot-aidants-naturels-2026";

const baseMetadata: Metadata = {
  title: "Crédit d'impôt pour aidants naturels 2026 : Reconnaissance financière pour les proches aidants",
  description:
    "Guide complet sur le crédit d'impôt québécois pour aidants naturels en 2026 : qui est considéré aidant naturel, montants selon le niveau de soin, comment faire la demande.",
  keywords: [
    "crédit impôt aidants naturels 2026",
    "proche aidant crédit Québec 2026",
    "aidant naturel déduction impôt",
    "soutien proche aidant Québec",
    "crédit impôt aidant conjoint",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/credit-impot-aidants-naturels-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Famille</span>
            <span className="text-xs text-slate-400 py-0.5">6 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit d&apos;impôt pour aidants naturels 2026 : Reconnaissance financière pour les proches aidants
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Des centaines de milliers de Québécois prennent soin d&apos;un proche sans en tirer de revenus.
            Le crédit d&apos;impôt pour personnes aidantes (anciennement appelé crédit pour aidants naturels) est une
            reconnaissance financière concrète : selon votre situation, vous pouvez recevoir jusqu&apos;à{" "}
            <strong>3 050 $ remboursables</strong>{" "}
            directement dans votre poche, même si vous ne payez pas d&apos;impôt.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Crédit <strong>remboursable</strong>{" "}— vous le recevez même sans impôt à payer</li>
            <li>✓ Jusqu&apos;à <strong>3 050 $</strong>{" "}en cohabitation avec un proche de 18 ans et plus ayant une déficience grave et prolongée</li>
            <li>✓ Ou <strong>1 525 $</strong>{" "}en cohabitation avec un proche de 70 ans et plus, sans exigence de déficience</li>
            <li>✓ Réclamé dans votre déclaration de revenus du Québec (annexe H, ligne 462)</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui est considéré comme personne aidante au sens fiscal ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit d&apos;impôt québécois pour personnes aidantes comporte deux volets distincts, selon la
            personne que vous aidez — il ne varie plus selon votre lien de parenté avec elle.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
            <p className="font-semibold text-blue-800 text-sm mb-2">Volet 1 — Proche de 18 ans et plus</p>
            <p className="text-sm text-blue-900">
              Vous cohabitez avec un proche de 18 ans ou plus ayant une <strong>déficience grave et prolongée</strong>{" "}
              de ses fonctions mentales ou physiques et vous lui apportez une aide régulière pour ses activités de la
              vie quotidienne (conjoint, parent, enfant, ou toute autre personne, avec ou sans lien de parenté).
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
            <p className="font-semibold text-blue-800 text-sm mb-2">Volet 2 — Proche de 70 ans et plus</p>
            <p className="text-sm text-blue-900">
              Vous cohabitez avec un proche de 70 ans ou plus (autre que votre conjoint), sans qu&apos;une déficience
              ne soit exigée.
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Pour le volet 1, la déficience grave et prolongée de la personne aidée doit être attestée par un
            professionnel de la santé.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants du crédit selon votre situation</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le crédit varie selon le volet applicable et selon la cohabitation.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-bold text-blue-800 mb-3">Montants remboursables 2026</p>
            <div className="space-y-3">
              {[
                {
                  situation: "Volet 1 — montant universel (cohabitation)",
                  montant: "1 525 $",
                  note: "Proche de 18 ans et plus avec déficience grave et prolongée",
                },
                {
                  situation: "Volet 1 — montant additionnel réductible",
                  montant: "Jusqu&apos;à 1 525 $ de plus",
                  note: "Réductible selon le revenu de la personne aidée; cohabitation non exigée pour ce montant",
                },
                {
                  situation: "Volet 1 — total combiné en cohabitation",
                  montant: "Jusqu&apos;à 3 050 $",
                  note: "Montant universel + montant additionnel réductible",
                },
                {
                  situation: "Volet 2 — proche de 70 ans et plus",
                  montant: "1 525 $",
                  note: "Montant universel, cohabitation requise, aucune déficience exigée",
                },
              ].map((item) => (
                <div key={item.situation} className="border-b border-blue-100 pb-3 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <p className="font-semibold text-blue-900 text-sm" dangerouslySetInnerHTML={{ __html: item.situation }} />
                      <p className="text-blue-600 text-xs mt-0.5">{item.note}</p>
                    </div>
                    <span className="font-bold text-blue-800 text-sm shrink-0" dangerouslySetInnerHTML={{ __html: item.montant }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Le montant additionnel réductible du volet 1 diminue en fonction du revenu de la personne aidée; le
            seuil exact de réduction n&apos;a pas pu être confirmé avec certitude pour cette édition et doit être
            vérifié auprès de Revenu Québec pour votre situation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Conditions à respecter</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                titre: "Cohabitation",
                desc: "La période de cohabitation (ou d&apos;aide fournie sans cohabitation, pour le montant additionnel réductible du volet 1) doit avoir duré au moins 365 jours consécutifs, dont au moins 183 jours pendant l&apos;année d&apos;imposition visée.",
              },
              {
                titre: "Attestation médicale",
                desc: "Un médecin ou autre professionnel de la santé doit attester la déficience grave et prolongée de la personne aidée (formulaire TP-752.0.14).",
              },
              {
                titre: "Aide régulière",
                desc: "Vous devez apporter une aide concrète pour des activités comme l&apos;alimentation, l&apos;hygiène, les déplacements ou la prise de médicaments.",
              },
              {
                titre: "Résidence au Québec",
                desc: "Vous et la personne aidée devez résider au Québec à la fin de l&apos;année d&apos;imposition.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white border border-slate-100 rounded-xl px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.titre}</p>
                <p className="text-slate-500 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment faire la demande</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Obtenez l&apos;attestation médicale",
                texte: "Faites remplir le formulaire TP-752.0.14 par le médecin ou professionnel de santé de la personne aidée. Ce document est requis et doit être conservé — vous n&apos;avez pas à l&apos;envoyer à Revenu Québec, mais vous devez le garder en cas de vérification.",
              },
              {
                num: "2",
                titre: "Remplissez l&apos;annexe H",
                texte: "Dans votre déclaration de revenus du Québec, remplissez l&apos;annexe H consacrée au crédit d&apos;impôt pour personne aidante (ligne 462). La plupart des logiciels d&apos;impôt vous guident à travers ce formulaire.",
              },
              {
                num: "3",
                titre: "Recevez votre remboursement",
                texte: "Puisque le crédit est remboursable, le montant vous est versé directement si vous n&apos;avez pas d&apos;impôt à payer. Il s&apos;ajoute à votre remboursement d&apos;impôt habituel.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-rose-700 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {etape.num}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1" dangerouslySetInnerHTML={{ __html: etape.titre }} />
                  <p className="text-slate-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: etape.texte }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Autres aides pour les proches aidants</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                aide: "Assurance-emploi — Prestations pour proches aidants (fédéral)",
                desc: "Jusqu&apos;à 15 semaines pour un proche adulte (18 ans et plus) gravement malade, jusqu&apos;à 35 semaines si l&apos;enfant gravement malade a moins de 18 ans, ou jusqu&apos;à 26 semaines de prestations de compassion en fin de vie — trois programmes distincts aux durées différentes.",
              },
              {
                aide: "RQAP — Prestations pour proches aidants (Québec)",
                desc: "Prestations de remplacement de revenus pour accompagner un proche en fin de vie.",
              },
              {
                aide: "Crédit d&apos;impôt pour maintien à domicile (Québec)",
                desc: "Jusqu&apos;à 7 800 $ (aîné autonome) ou 10 200 $ (aîné non autonome) de crédit pour les services à domicile d&apos;une personne de 70 ans et plus.",
              },
            ].map((item) => (
              <div key={item.aide} className="bg-white border border-slate-100 rounded-xl px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.aide}</p>
                <p className="text-slate-500 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            Aidants naturels, maintien à domicile, crédits familiaux — trouvez rapidement ce à quoi vous avez droit.
          </p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Trouver mes aides →
          </Link>
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Source officielle :{" "}
          <a
            href="https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/comment-remplir-votre-declaration/annexes/annexe-h/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            revenuquebec.ca — Crédit pour aidants naturels
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
  titre: "Crédit d'impôt pour aidants naturels 2026 : Reconnaissance financière pour les proches aidants",
  description:
    "Tout sur le crédit d'impôt québécois pour personnes aidantes (anciennement aidants naturels) en 2026 : qui est admissible, montants remboursables selon le volet applicable et comment réclamer à l'impôt.",
  date: "2026-07-05",
  categorie: "Famille",
  tempsLecture: "6 min",
  metadata,
  Content,
};

export default article;
