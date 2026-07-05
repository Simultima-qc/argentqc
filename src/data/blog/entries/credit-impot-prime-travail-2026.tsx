import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "credit-impot-prime-travail-2026";

const baseMetadata: Metadata = {
  title: "Prime au travail 2026 : Un crédit remboursable pour les travailleurs à faible revenu",
  description:
    "Guide complet sur la Prime au travail du Québec en 2026 : montants selon la situation familiale, seuils de revenu, versements anticipés et comment réclamer ce crédit remboursable.",
  keywords: [
    "prime au travail 2026",
    "crédit impôt prime travail Québec",
    "prime travail faible revenu Québec",
    "incitatif travail Québec 2026",
    "travailleur faible revenu Québec crédit",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/credit-impot-prime-travail-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Emploi</span>
            <span className="text-xs text-slate-400 py-0.5">5 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            Prime au travail 2026 : Un crédit remboursable pour les travailleurs à faible revenu
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            La Prime au travail est un crédit d&apos;impôt québécois <strong>remboursable</strong>{" "}qui récompense
            les personnes qui occupent un emploi malgré un revenu modeste. En 2026, elle peut atteindre
            jusqu&apos;à <strong>2 895 $ pour une famille</strong>{" "}— et elle peut être versée en avance,
            sans attendre votre déclaration d&apos;impôt.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ Jusqu&apos;à <strong>1 075 $</strong>{" "}pour une personne seule sans enfant</li>
            <li>✓ Jusqu&apos;à <strong>2 895 $</strong>{" "}pour une famille avec enfants</li>
            <li>✓ Crédit <strong>remboursable</strong>{" "}— vous le recevez même sans impôt à payer</li>
            <li>✓ Versements anticipés possibles — demandez-les à Revenu Québec</li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Qu&apos;est-ce que la Prime au travail ?</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            La Prime au travail est un programme exclusif au Québec, administré par Revenu Québec.
            Son objectif est similaire à la Prestation canadienne pour les travailleurs (PCT) fédérale,
            mais elle est calculée indépendamment et peut être <strong>cumulée</strong>{" "}avec elle.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Elle est calculée en fonction de votre revenu de travail et de votre situation familiale.
            Comme elle est remboursable, vous la recevez intégralement même si vous ne devez aucun
            impôt provincial.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Montants et seuils 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le montant varie selon votre situation familiale. La Prime au travail augmente jusqu&apos;à un
            plafond, puis diminue progressivement au-delà d&apos;un certain revenu.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="font-bold text-blue-800 mb-3">Montants maximaux par situation</p>
            <div className="space-y-3">
              {[
                { situation: "Personne seule", max: "1 075 $", revenuMax: "Réduite à zéro autour de 21 000 $" },
                { situation: "Couple sans enfant", max: "1 648 $", revenuMax: "Réduite à zéro autour de 30 000 $" },
                { situation: "Famille monoparentale", max: "2 219 $", revenuMax: "Réduite à zéro autour de 40 000 $" },
                { situation: "Couple avec enfants", max: "2 895 $", revenuMax: "Réduite à zéro autour de 50 000 $" },
              ].map((item) => (
                <div key={item.situation} className="border-b border-blue-100 pb-3 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <p className="font-semibold text-blue-900 text-sm">{item.situation}</p>
                    <span className="font-bold text-blue-800 text-sm">{item.max}</span>
                  </div>
                  <p className="text-blue-600 text-xs mt-0.5">{item.revenuMax}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-3">
            La prime s&apos;applique sur le revenu de travail dépassant un seuil minimal (environ 2 400 $
            pour une personne seule). Les seuils sont indexés annuellement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">La version bonifiée pour personnes handicapées</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Si vous avez une contrainte sévère à l&apos;emploi reconnue par Revenu Québec,
            vous pouvez bénéficier de la <strong>version adaptée</strong>{" "}de la Prime au travail,
            qui offre des montants plus généreux et un seuil de revenu plus élevé avant réduction.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="font-semibold text-slate-700 text-sm mb-2">Personnes avec contrainte sévère à l&apos;emploi</p>
            <div className="space-y-1 text-sm">
              {[
                { situation: "Personne seule", max: "1 186 $" },
                { situation: "Couple sans enfant", max: "1 815 $" },
                { situation: "Famille monoparentale", max: "2 449 $" },
                { situation: "Couple avec enfants", max: "3 193 $" },
              ].map((item) => (
                <div key={item.situation} className="flex justify-between">
                  <span className="text-slate-600">{item.situation}</span>
                  <span className="font-bold text-slate-800">{item.max}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Les versements anticipés</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Vous n&apos;avez pas à attendre votre déclaration d&apos;impôt pour recevoir votre Prime au travail.
            Vous pouvez demander des versements anticipés à Revenu Québec.
          </p>
          <div className="flex flex-col gap-3">
            {[
              { etape: "Demandez vos versements anticipés", detail: "Remplissez le formulaire TP-1015.3 ou faites la demande via Mon dossier de Revenu Québec. Vous pouvez recevoir jusqu&apos;à 50 % de votre prime estimée en avance." },
              { etape: "Versements en juillet et en octobre", detail: "Les versements anticipés sont généralement émis en juillet et octobre. Le solde final est calculé lors de votre déclaration." },
              { etape: "Ajustement à la déclaration", detail: "Si votre revenu réel est différent de l&apos;estimation, Revenu Québec ajuste votre Prime au moment de votre déclaration — vers le haut ou vers le bas." },
            ].map((item) => (
              <div key={item.etape} className="bg-white border border-slate-100 rounded-xl px-4 py-3">
                <p className="font-semibold text-slate-800 text-sm">{item.etape}</p>
                <p className="text-slate-500 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Cumuler la Prime au travail avec la PCT fédérale</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La Prime au travail québécoise et la Prestation canadienne pour les travailleurs fédérale
            sont <strong>deux crédits distincts et cumulables</strong>. Un même travailleur peut les recevoir toutes les deux.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-bold text-green-800 mb-3">Exemple : Personne seule, 18 000 $ de revenus</p>
            <div className="space-y-2 text-sm">
              {[
                { source: "Prime au travail (Québec)", montant: "~850 $" },
                { source: "Prestation canadienne pour les travailleurs (fédéral)", montant: "~1 200 $" },
                { source: "Total combiné", montant: "~2 050 $", gras: true },
              ].map((item) => (
                <div key={item.source} className={`flex justify-between ${item.gras ? "border-t border-green-200 pt-2 font-bold" : ""}`}>
                  <span className="text-green-900">{item.source}</span>
                  <span className={`text-green-800 ${item.gras ? "text-base" : "font-medium"}`}>{item.montant}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Calculez toutes vos aides en 2 minutes</p>
          <p className="text-blue-200 text-sm mb-4">
            Prime au travail, PCT, Crédit de solidarité — trouvez tout ce à quoi vous avez droit selon votre revenu.
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
            href="https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/comment-remplir-votre-declaration/credits-dimpot/prime-au-travail/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            revenuquebec.ca — Prime au travail
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
  titre: "Prime au travail 2026 : Un crédit remboursable pour les travailleurs à faible revenu",
  description:
    "Tout sur la Prime au travail du Québec en 2026 : montants selon la situation familiale, seuils de revenu, versements anticipés et cumul avec la PCT fédérale.",
  date: "2026-07-05",
  categorie: "Emploi",
  tempsLecture: "5 min",
  metadata,
  Content,
};

export default article;
