import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import type { BlogArticle } from "@/data/blog/types";

const slug = "reer-vs-celi-lequel-choisir-2026";

const baseMetadata: Metadata = {
  title: "REER ou CELI en 2026 : Lequel choisir selon votre situation",
  description:
    "Comparatif REER vs CELI en 2026 : impact fiscal selon votre tranche de revenu, quand prioriser l'un vs l'autre, plafonds de cotisation et exemples chiffrés pour vous guider.",
  keywords: [
    "REER vs CELI 2026",
    "REER ou CELI choisir",
    "comparatif REER CELI",
    "épargne retraite Québec 2026",
    "CELI 2026 plafond",
  ],
};

const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    ...baseMetadata.alternates,
    canonical: "https://argentqc.ca/blog/reer-vs-celi-lequel-choisir-2026",
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
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">Épargne</span>
            <span className="text-xs text-slate-400 py-0.5">7 min de lecture · 5 juillet 2026</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-4">
            REER ou CELI en 2026 : Lequel choisir selon votre situation
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            REER ou CELI ? La question revient chaque début d&apos;année. La bonne réponse dépend
            avant tout de <strong>votre tranche de revenu</strong>{" "}— maintenant et à la retraite.
            Voici une analyse claire pour guider votre décision en 2026.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
          <p className="font-bold text-green-800 mb-2">En bref</p>
          <ul className="space-y-1.5 text-sm text-green-900">
            <li>✓ <strong>REER</strong>{" "} : meilleur si votre revenu actuel est élevé et sera plus faible à la retraite</li>
            <li>✓ <strong>CELI</strong>{" "} : meilleur si votre revenu actuel est faible ou si vos retraits risquent de réduire vos prestations (PSV, SRG)</li>
            <li>✓ Plafond CELI 2026 : <strong>7 000 $/an</strong>{" "}(cumul total possible : jusqu&apos;à 102 000 $)</li>
            <li>✓ Plafond REER 2026 : <strong>18 % du revenu gagné</strong>, max <strong>32 490 $</strong></li>
          </ul>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">La différence fondamentale entre REER et CELI</h2>
          <div className="grid grid-cols-1 gap-3 mb-4">
            {[
              {
                compte: "REER",
                couleur: "bg-blue-50 border-blue-200",
                texte: "Vous déduisez votre cotisation de votre revenu imposable aujourd&apos;hui (économie d&apos;impôt immédiate). Vous payez l&apos;impôt au retrait, à la retraite.",
                badge: "Déduction maintenant, impôt plus tard",
                badgeCouleur: "bg-blue-700 text-white",
              },
              {
                compte: "CELI",
                couleur: "bg-emerald-50 border-emerald-200",
                texte: "Vous cotisez avec de l&apos;argent après impôt. La croissance et les retraits sont entièrement libres d&apos;impôt — pour toujours.",
                badge: "Impôt maintenant, libre après",
                badgeCouleur: "bg-emerald-700 text-white",
              },
            ].map((item) => (
              <div key={item.compte} className={`border rounded-xl p-4 ${item.couleur}`}>
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-slate-800 text-lg">{item.compte}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${item.badgeCouleur}`}>{item.badge}</span>
                </div>
                <p className="text-slate-600 text-sm" dangerouslySetInnerHTML={{ __html: item.texte }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quand prioriser le REER ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le REER est avantageux quand votre taux d&apos;imposition marginal actuel est <strong>supérieur</strong>{" "}
            à celui que vous aurez à la retraite. La déduction génère une économie d&apos;impôt immédiate élevée,
            et vous payez moins d&apos;impôt au retrait.
          </p>
          <div className="flex flex-col gap-2">
            {[
              "Vous gagnez plus de 60 000 $ (taux marginal québécois élevé)",
              "Vous prévoyez prendre votre retraite avec un revenu plus faible qu&apos;aujourd&apos;hui",
              "Vous souhaitez profiter du RAP (jusqu&apos;à 60 000 $ pour l&apos;achat d&apos;une première maison)",
              "Vous souhaitez utiliser le REEP (régime d&apos;encouragement à l&apos;éducation permanente)",
              "Votre employeur offre un RPDB ou un REER collectif avec cotisations patronales",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5">
                <span className="text-blue-500 font-bold text-sm mt-0.5">✓</span>
                <span className="text-slate-700 text-sm" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Quand prioriser le CELI ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le CELI est préférable quand votre taux d&apos;imposition actuel est faible, ou quand
            des retraits REER à la retraite pourraient réduire vos prestations gouvernementales.
          </p>
          <div className="flex flex-col gap-2">
            {[
              "Vous gagnez moins de 50 000 $ (peu d&apos;avantage à déduire du REER)",
              "Vous prévoyez toucher des prestations comme la PSV ou le SRG à la retraite (les retraits REER les réduiraient)",
              "Vous avez besoin de flexibilité — les retraits CELI ne sont jamais imposables et les droits sont regagnés l&apos;année suivante",
              "Vous avez déjà maximisé votre REER ou n&apos;avez plus de droits de cotisation disponibles",
              "Vous économisez pour un objectif à court ou moyen terme (voyage, mise de fonds, projets)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2.5">
                <span className="text-emerald-500 font-bold text-sm mt-0.5">✓</span>
                <span className="text-slate-700 text-sm" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Exemples chiffrés pour 2026</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                profil: "Marie, 35 ans, ingénieure — 95 000 $/an",
                choix: "REER en priorité",
                couleur: "bg-blue-50 border-blue-200",
                explication: "Taux marginal québécois : ~52 %. Chaque 1 000 $ en REER lui fait économiser ~520 $ en impôt maintenant. À la retraite avec 55 000 $, son taux sera ~40 % — elle paiera moins à la sortie.",
              },
              {
                profil: "Jean, 28 ans, technicien — 42 000 $/an",
                choix: "CELI en priorité",
                couleur: "bg-emerald-50 border-emerald-200",
                explication: "Taux marginal : ~38 %. La déduction REER rapporte moins. En économisant dans un CELI, il garde la flexibilité et évite de réduire ses futures prestations gouvernementales.",
              },
              {
                profil: "Claire, 58 ans, retraitée anticipée — 28 000 $/an",
                choix: "CELI exclusivement",
                couleur: "bg-emerald-50 border-emerald-200",
                explication: "Ses retraits REER s&apos;ajouteraient à son revenu imposable et pourraient réduire son SRG à 65 ans. Le CELI lui permet de retirer sans impact sur ses prestations.",
              },
            ].map((ex) => (
              <div key={ex.profil} className={`border rounded-2xl p-4 ${ex.couleur}`}>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <p className="font-semibold text-slate-800 text-sm">{ex.profil}</p>
                  <span className="text-xs font-bold bg-white/60 px-2 py-1 rounded-full text-slate-700 shrink-0">{ex.choix}</span>
                </div>
                <p className="text-slate-600 text-sm" dangerouslySetInnerHTML={{ __html: ex.explication }} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Plafonds de cotisation 2026</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <div className="space-y-3">
              {[
                {
                  compte: "CELI",
                  plafond2026: "7 000 $ par année",
                  cumul: "Jusqu&apos;à 102 000 $ depuis 2009 (si vous avez 18 ans en 2009)",
                  note: "Les droits non utilisés se reportent indéfiniment",
                },
                {
                  compte: "REER",
                  plafond2026: "18 % du revenu gagné, max 32 490 $",
                  cumul: "Les droits inutilisés se cumulent depuis 1991",
                  note: "Expirent à 71 ans — le REER doit être converti en FERR",
                },
              ].map((item) => (
                <div key={item.compte} className="border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                  <p className="font-bold text-slate-800 mb-1">{item.compte}</p>
                  <div className="space-y-0.5 text-sm text-slate-600">
                    <p>Plafond 2026 : <strong>{item.plafond2026}</strong></p>
                    <p dangerouslySetInnerHTML={{ __html: `Cumul possible : ${item.cumul}` }} />
                    <p className="text-slate-500 text-xs">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ background: "#0F1F3D" }} className="text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">Découvrez vos autres aides gouvernementales</p>
          <p className="text-blue-200 text-sm mb-4">
            CELIAPP, REEE, crédits d&apos;impôt — en 2 minutes, trouvez tous les programmes auxquels vous avez droit.
          </p>
          <Link
            href="/fr/questionnaire"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl"
          >
            Trouver mes aides →
          </Link>
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Sources officielles :{" "}
          <a
            href="https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/lignes-20800-21699-contributions-reer-prfra/contributions-reer-prfra.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca — REER
          </a>
          {" "}·{" "}
          <a
            href="https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/compte-epargne-libre-impot.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            canada.ca — CELI
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
  titre: "REER ou CELI en 2026 : Lequel choisir selon votre situation",
  description:
    "Comparatif REER vs CELI en 2026 : impact fiscal selon votre revenu, quand prioriser l'un vs l'autre, plafonds de cotisation et exemples concrets pour guider votre décision.",
  date: "2026-07-05",
  categorie: "Épargne",
  tempsLecture: "7 min",
  metadata,
  Content,
};

export default article;
