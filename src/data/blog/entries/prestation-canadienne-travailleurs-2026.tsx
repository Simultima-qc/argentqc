import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "prestation-canadienne-travailleurs-2026";

const baseMetadata: Metadata = {
  title: "Allocation canadienne pour les travailleurs 2026 : Un supplément pour les bas salaires",
  description:
    "Guide complet sur l'Allocation canadienne pour les travailleurs (ACT, anciennement Prestation canadienne pour les travailleurs) en 2026 : montants de base, supplément handicap, seuils de revenu et versements anticipés trimestriels.",
  keywords: [
    "allocation canadienne travailleurs 2026",
    "ACT 2026",
    "prestation canadienne travailleurs",
    "incitatif au travail Canada",
    "supplément bas salaire Canada",
    "crédit impôt travailleurs faible revenu",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/prestation-canadienne-travailleurs-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Emploi</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Allocation canadienne pour les travailleurs 2026 : Un supplément pour les bas salaires
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            L&apos;Allocation canadienne pour les travailleurs (ACT), anciennement appelée Prestation canadienne
            pour les travailleurs (PCT), est un crédit d&apos;impôt
            <strong> remboursable</strong>{" "}conçu pour soutenir les personnes qui travaillent mais gagnent
            un faible revenu. Pour 2026, un résident du Québec peut recevoir jusqu&apos;à{" "}
            <strong>1 665 $ pour une personne seule</strong>{" "}
            et <strong>2 869 $ pour un couple avec enfant</strong>{" "} — et elle est versée en avance, sans attendre la déclaration d&apos;impôt.
            Le Québec suit un barème (annexe 6) distinct du reste du Canada.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Jusqu&apos;à <strong>1 665 $</strong>{" "}pour une personne seule au Québec (2026, revenu sous 27 392 $)</li>
            <li>✓ Jusqu&apos;à <strong>2 869 $</strong>{" "}pour un couple avec enfant au Québec (2026, revenu familial sous 31 251 $)</li>
            <li>✓ Supplément handicap : jusqu&apos;à <strong>860 $</strong>{" "}de plus si admissible au CIPH (2026, Québec)</li>
            <li>✓ <strong>3 versements anticipés</strong>{" "}en cours d&apos;année (juillet, octobre, janvier)</li>
            <li>✓ Le Québec, l&apos;Alberta et le Nunavut suivent un barème distinct du reste du Canada</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que l&apos;ACT ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Anciennement appelée la Prestation fiscale pour le revenu de travail, puis la Prestation canadienne
            pour les travailleurs (PCT), l&apos;Allocation canadienne pour les travailleurs (ACT) — son nom
            officiel actuel depuis l&apos;année d&apos;imposition 2019 — est un crédit d&apos;impôt remboursable qui
            récompense les gens qui travaillent mais dont le revenu demeure faible.
          </p>
          <p className="text-slate-600 leading-relaxed">
            L&apos;ACT est <strong>remboursable</strong>{" "}— si elle dépasse votre impôt à payer, vous recevez
            la différence en chèque. Et depuis 2023, l&apos;ARC verse automatiquement des acomptes
            trimestriels aux personnes admissibles, sans même qu&apos;elles aient à en faire la demande.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants et seuils de l&apos;ACT en 2026 pour le Québec</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le Québec, l&apos;Alberta et le Nunavut utilisent une annexe 6 distincte du reste du Canada, avec des
            seuils propres. Voici les montants 2026 applicables aux résidents du Québec :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-4">
            <p className="font-bold text-blue-800 mb-3">Personne seule admissible (Québec)</p>
            <div className="space-y-2 text-sm">
              {[
                { label: "Revenu minimum pour bénéficier", valeur: "2 400 $" },
                { label: "Maximum de la prestation de base", valeur: "1 665 $" },
                { label: "Maximum reçu si le revenu ne dépasse pas", valeur: "27 392 $" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                  <span className="text-blue-900">{item.label}</span>
                  <span className="font-bold text-blue-800">{item.valeur}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-bold text-blue-800 mb-3">Couple avec enfant admissible (Québec)</p>
            <div className="space-y-2 text-sm">
              {[
                { label: "Revenu minimum pour bénéficier", valeur: "3 600 $" },
                { label: "Maximum de la prestation de base", valeur: "2 869 $" },
                { label: "Maximum reçu si le revenu familial ne dépasse pas", valeur: "31 251 $" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between border-b border-blue-100 pb-2 last:border-0 last:pb-0">
                  <span className="text-blue-900">{item.label}</span>
                  <span className="font-bold text-blue-800">{item.valeur}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-3">
            <strong>Hors Québec, Alberta et Nunavut :</strong>{" "}les montants 2025 (dernières données confirmées pour
            le reste du Canada) sont plutôt de 1 633 $ (personne seule) et 2 813 $ (famille); consultez votre
            annexe 6 pour le montant exact de votre province.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Le supplément pour personnes handicapées</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Si vous êtes admissible au Crédit d&apos;impôt pour personnes handicapées (CIPH), vous pouvez
            recevoir un montant supplémentaire par-dessus la prestation de base.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="space-y-2 text-sm">
              {[
                { label: "Supplément maximum (2026, Québec)", valeur: "860 $" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-slate-700">{item.label}</span>
                  <span className="font-bold text-slate-800">{item.valeur}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Les seuils de réduction du supplément handicap n&apos;ont pas pu être confirmés séparément pour le
            Québec dans cet audit : consultez l&apos;annexe 6 de l&apos;ARC pour le montant exact de votre situation.
            Pour y avoir droit, vous devez avoir un certificat T2201 approuvé par l&apos;ARC.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Les versements anticipés trimestriels</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Depuis 2023, l&apos;ARC verse automatiquement <strong>50 % de votre ACT estimée</strong>{" "}en avance,
            répartis sur trois versements dans l&apos;année. Pas besoin de faire une demande.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { mois: "Juillet", detail: "1er versement anticipé (basé sur votre déclaration de l&apos;an passé)" },
              { mois: "Octobre", detail: "2e versement anticipé" },
              { mois: "Janvier", detail: "3e versement anticipé" },
              { mois: "Printemps suivant", detail: "Solde final ajusté lors de votre déclaration de revenus" },
            ].map((item) => (
              <div key={item.mois} className="flex gap-4 items-center bg-white border border-slate-100 rounded-xl px-4 py-3">
                <div className="w-20 text-center">
                  <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-1 rounded-full">{item.mois}</span>
                </div>
                <p className="text-slate-600 text-sm" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Si votre revenu a changé de façon importante, les versements anticipés peuvent différer
            de votre ACT réelle — l&apos;ajustement se fait au moment de votre déclaration.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment réclamer l&apos;ACT</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Produisez votre déclaration de revenus",
                texte: "L&apos;ACT est réclamée à la ligne 45300 de votre déclaration fédérale. La plupart des logiciels d&apos;impôt (TurboImpôt, Wealthsimple Impôt, etc.) la calculent automatiquement.",
              },
              {
                num: "2",
                titre: "Remplissez l&apos;annexe 6",
                texte: "L&apos;annexe 6 de votre déclaration est consacrée au calcul de l&apos;ACT (une annexe 6 distincte s&apos;applique aux résidents du Québec). Elle vous guide à travers les revenus admissibles et le montant final.",
              },
              {
                num: "3",
                titre: "Recevez les versements anticipés automatiquement",
                texte: "Si vous étiez admissible l&apos;an passé, l&apos;ARC vous verse automatiquement des acomptes en juillet, octobre et janvier. Assurez-vous que vos coordonnées bancaires sont à jour dans Mon dossier CRA.",
              },
            ].map((etape) => (
              <div key={etape.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
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

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Calculez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            ACT, ACEBE, Allocation famille — découvrez les aides à vérifier selon votre revenu et votre situation.
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
            href="https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/ligne-45300-allocation-canadienne-travailleurs-act.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca — Ligne 45300, Allocation canadienne pour les travailleurs (ACT)
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
  titre: "Allocation canadienne pour les travailleurs 2026 : Un supplément pour les bas salaires",
  description:
    "Tout sur l'Allocation canadienne pour les travailleurs (ACT, anciennement PCT) en 2026 : montants, seuils de revenu, supplément handicap et versements trimestriels anticipés.",
  date: "2026-07-05",
  categorie: "Emploi",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
