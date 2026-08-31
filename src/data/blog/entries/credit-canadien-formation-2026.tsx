import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-canadien-formation-2026";

const baseMetadata: Metadata = {
  title: "Crédit canadien pour la formation 2026 : calcul et admissibilité",
  description:
    "Guide complet sur le Crédit canadien pour la formation en 2026 : accumulation de droits, cours admissibles, comment réclamer à l'impôt et combinaison avec les aides provinciales.",
  keywords: [
    "crédit canadien formation 2026",
    "CCF 2026",
    "formation continue crédit impôt Canada",
    "remboursement formation Canada",
    "droits formation Canada",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/credit-canadien-formation-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">Formation</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Crédit canadien pour la formation 2026 : calcul et admissibilité
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Vous souhaitez suivre une formation, obtenir une certification ou changer de carrière ?
            Le Crédit canadien pour la formation (CCF) est un crédit remboursable calculé à partir de
            votre plafond disponible et de vos frais admissibles. Le montant de 250 $ correspond à
            l&apos;augmentation annuelle possible du plafond pour une année admissible, pas à un remboursement annuel garanti.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ <strong>250 $ de droits de formation</strong>{" "}s&apos;accumulent chaque année admissible</li>
            <li>✓ Plafond viager : <strong>5 000 $</strong>, sous réserve des années admissibles</li>
            <li>✓ Réclamation : le moindre du plafond disponible et de 50 % des frais admissibles</li>
            <li>✓ Consultez votre solde dans Mon dossier ARC — pas de formulaire à remplir à l&apos;avance</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment fonctionnent les droits de formation ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Le Crédit canadien pour la formation (CCF) fonctionne comme un compte de formation personnel.
            Pour chaque année où toutes les conditions sont remplies, l&apos;ARC peut augmenter de <strong>250 $</strong>{" "}
            votre plafond du CCF, jusqu&apos;au plafond viager de 5 000 $. Consultez votre avis de cotisation pour connaître
            le plafond réellement disponible avant d&apos;engager une dépense.
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            Lorsque vous payez des frais de scolarité admissibles, vous pouvez réclamer le moins élevé entre :
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-3">
            <ul className="space-y-2 text-sm text-blue-900">
              <li>• <strong>50 %</strong>{" "}des frais de scolarité admissibles que vous avez payés</li>
              <li>• Le <strong>solde de vos droits de formation</strong>{" "}accumulés</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Ce crédit est <strong>remboursable</strong>{" "}— même si vous ne devez aucun impôt, vous recevez
            un chèque de remboursement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qui peut accumuler des droits de formation ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour accumuler 250 $ de droits dans une année donnée, vous devez satisfaire à <strong>tous</strong>{" "}ces critères :
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              { critere: "Avoir entre 26 et 65 ans", detail: "Les moins de 26 ans et les plus de 65 ans n&apos;accumulent pas de droits" },
              { critere: "Être résident canadien toute l&apos;année", detail: "Résidence fiscale au Canada pour toute l&apos;année d&apos;imposition" },
              { critere: "Avoir eu au moins 12 058 $ de revenu de travail en 2025", detail: "Seuil utilisé pour établir le plafond du CCF 2026" },
              { critere: "Avoir eu un revenu net de 177 882 $ ou moins en 2025", detail: "Plafond de revenu utilisé pour le CCF 2026" },
              { critere: "Avoir produit une déclaration de revenus", detail: "L&apos;ARC calcule automatiquement vos droits lors de la production" },
            ].map((item) => (
              <div key={item.critere} className="bg-white border border-slate-100 rounded-xl px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.critere}</p>
                <p className="text-slate-500 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quels cours et programmes sont admissibles ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les frais de scolarité doivent être payés à un <strong>établissement d&apos;enseignement admissible</strong>{" "}
            et le cours doit être lié à une compétence professionnelle reconnue. Sont admissibles :
          </p>
          <div className="grid grid-cols-1 gap-2">
            {[
              "Universités, cégeps et collèges canadiens",
              "Établissements offrant des cours de formation professionnelle",
              "Cours en ligne d&apos;établissements certifiés",
              "Programmes de certification et de perfectionnement professionnel",
              "Cours dont les frais satisfont aux règles fiscales officielles applicables",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-purple-50 border border-purple-100 rounded-xl px-4 py-2.5">
                <span className="text-purple-500 font-bold text-sm mt-0.5">✓</span>
                <span className="text-slate-700 text-sm" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Les cours de loisirs, de sport ou à but non professionnel ne sont pas admissibles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Comment réclamer le crédit à l&apos;impôt</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "1",
                titre: "Vérifiez votre solde de droits",
                texte: "Connectez-vous à Mon dossier ARC. Votre solde de droits de formation accumulés est affiché dans votre profil. Vous recevez aussi un avis annuel par courrier.",
              },
              {
                num: "2",
                titre: "Obtenez votre T2202 ou reçu officiel",
                texte: "Votre établissement d&apos;enseignement vous remet un formulaire T2202 (ou reçu officiel) indiquant les frais de scolarité admissibles que vous avez payés.",
              },
              {
                num: "3",
                titre: "Remplissez l&apos;annexe 11 de votre déclaration",
                texte: "Lors de votre déclaration de revenus, remplissez l&apos;annexe 11 et inscrivez le montant du crédit que vous souhaitez réclamer (maximum : 50 % des frais ou votre solde disponible).",
              },
              {
                num: "4",
                titre: "Recevez votre remboursement",
                texte: "Le crédit est remboursable — si vous êtes admissible, l&apos;ARC vous verse le montant même si vous n&apos;avez pas d&apos;impôt à payer. Le remboursement arrive avec votre avis de cotisation.",
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

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Cumulez avec les aides québécoises</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le CCF fédéral peut être combiné avec plusieurs programmes québécois pour maximiser
            votre remboursement de formation :
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div className="space-y-3">
              {[
                { programme: "Crédit canadien pour la formation (fédéral)", montant: "Selon le plafond disponible" },
                { programme: "Crédit d&apos;impôt pour frais de scolarité (Québec)", montant: "8 % des frais admissibles" },
                { programme: "Aide financière aux études", montant: "Selon le programme et la situation" },
                { programme: "Mesures de formation de Services Québec", montant: "Conditionnel — à confirmer" },
              ].map((item) => (
                <div key={item.programme} className="flex justify-between items-center text-sm border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                  <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: item.programme }} />
                  <span className="font-semibold text-slate-800 shrink-0 ml-2" dangerouslySetInnerHTML={{ __html: item.montant }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Trouvez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            Formation, famille, logement — obtenez des pistes à vérifier selon votre situation.
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
            href="https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/ligne-45350-credit-canadien-pour-la-formation.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca — Crédit canadien pour la formation
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
  titre: "Crédit canadien pour la formation 2026 : calcul et admissibilité",
  description:
    "Guide complet sur le Crédit canadien pour la formation en 2026 : accumulation de droits, cours admissibles, comment réclamer à l'impôt et combinaison avec les aides québécoises.",
  date: "2026-07-05",
  categorie: "Formation",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
