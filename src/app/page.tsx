import Link from "next/link";
import articles from "@/data/articles";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white px-5 pt-14 pb-12">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
            100% gratuit · Aucune inscription
          </div>
          <h1 className="text-3xl font-extrabold leading-tight mb-4">
            Découvrez l&apos;argent que vous laissez sur la table
          </h1>
          <p className="text-base text-blue-100 mb-8 leading-relaxed">
            Crédits d&apos;impôt, subventions Hydro-Québec, aide auto électrique, allocations
            familiales… Répondez à 8 questions pour obtenir votre liste personnalisée.
          </p>
          <Link
            href="/questionnaire"
            className="block w-full bg-yellow-400 active:bg-yellow-300 text-blue-900 font-bold text-lg py-4 rounded-2xl shadow-lg text-center"
          >
            Calculer mes aides →
          </Link>
          <p className="mt-3 text-blue-300 text-xs">
            Moins de 2 minutes · Résultats immédiats
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {[
              "🔒 Aucune donnée sauvegardée",
              "✅ Programmes officiels",
              "🎁 100% gratuit",
            ].map((badge) => (
              <span key={badge} className="bg-blue-800 text-blue-100 text-xs px-3 py-1.5 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Exemples concrets */}
      <section className="bg-white py-8 px-5 border-b border-slate-100">
        <div className="max-w-lg mx-auto">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">
            Exemples de profils
          </p>
          <div className="flex flex-col gap-3">
            {[
              { profil: "Famille avec 2 enfants", montant: "9 800 $", desc: "Allocation famille + ACE + crédit solidarité" },
              { profil: "Propriétaire qui rénove", montant: "16 700 $", desc: "Rénoclimat + LogisVert + crédits fédéraux" },
              { profil: "Aîné de 70 ans", montant: "14 000 $", desc: "SV + SRG + maintien à domicile" },
            ].map((ex) => (
              <div key={ex.profil} className="flex items-center justify-between bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{ex.profil}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{ex.desc}</div>
                </div>
                <div className="text-green-700 font-extrabold text-base shrink-0 ml-3">{ex.montant}<span className="text-xs font-normal text-green-600">/an</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 px-4">
        <div className="max-w-lg mx-auto">
          {/* Google AdSense – remplacer ce bloc par votre code AdSense */}
          <div className="h-14 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-xs">
            Publicité
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-white py-8 px-5 border-b border-slate-100">
        <div className="max-w-lg mx-auto grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-2xl font-extrabold text-blue-700">16</div>
            <div className="text-slate-500 mt-0.5 text-xs leading-tight">Programmes couverts</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-blue-700">20 k$</div>
            <div className="text-slate-500 mt-0.5 text-xs leading-tight">Potentiel moyen</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-blue-700">2 min</div>
            <div className="text-slate-500 mt-0.5 text-xs leading-tight">Pour vos résultats</div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-10 px-5">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-7 text-slate-800">
            Comment ça fonctionne
          </h2>
          <div className="flex flex-col gap-5">
            {[
              {
                num: "1",
                titre: "Répondez à 8 questions",
                texte: "Situation familiale, revenus, logement, véhicule électrique…",
              },
              {
                num: "2",
                titre: "Notre algorithme analyse",
                texte: "On croise vos réponses avec 16 programmes provinciaux et fédéraux.",
              },
              {
                num: "3",
                titre: "Récupérez votre argent",
                texte: "Liste claire avec montants estimés et liens vers les formulaires officiels.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-lg font-bold shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{item.titre}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/questionnaire"
            className="block w-full bg-blue-700 active:bg-blue-800 text-white font-bold text-base py-4 rounded-2xl text-center mt-8 shadow"
          >
            Commencer maintenant →
          </Link>
        </div>
      </section>

      {/* Catégories */}
      <section className="bg-white py-10 px-5 border-t border-slate-100">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-slate-800">
            Programmes couverts
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { emoji: "🏠", label: "Rénovation & logement" },
              { emoji: "⚡", label: "Énergie & thermopompe" },
              { emoji: "👨‍👩‍👧", label: "Famille & enfants" },
              { emoji: "🚗", label: "Auto électrique" },
              { emoji: "💰", label: "Crédits d'impôt" },
              { emoji: "👴", label: "Aînés & retraite" },
              { emoji: "🌱", label: "Environnement" },
              { emoji: "🏙️", label: "Aide sociale QC" },
            ].map((cat) => (
              <div
                key={cat.label}
                className="bg-slate-50 rounded-xl p-4 text-center border border-slate-100"
              >
                <div className="text-2xl mb-1">{cat.emoji}</div>
                <div className="text-xs font-medium text-slate-700 leading-snug">{cat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens SEO */}
      <section className="py-10 px-5 bg-white border-t border-slate-100">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-slate-800">
            Guides par situation
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { href: "/aide-famille-quebec", titre: "Aide financière famille Québec", desc: "Allocations, ACE, crédit solidarité" },
              { href: "/allocation-enfant-quebec", titre: "Allocation enfant Québec – combien ?", desc: "Montants 2026 détaillés" },
              { href: "/credit-impot-quebec", titre: "Crédits d'impôt Québec", desc: "Tous les crédits remboursables" },
              { href: "/subvention-renovation-quebec", titre: "Subvention rénovation Québec", desc: "Rénoclimat, LogisVert, fédéral" },
              { href: "/vehicule-electrique-quebec", titre: "Subvention véhicule électrique", desc: "Roulez vert 2026" },
              { href: "/credit-solidarite-quebec", titre: "Crédit de solidarité Québec", desc: "Montants 2026 et conditions" },
              { href: "/allocation-logement-quebec", titre: "Allocation logement Québec", desc: "Aide pour locataires à faible revenu" },
              { href: "/subvention-thermopompe-quebec", titre: "Subvention thermopompe Québec", desc: "LogisVert + Rénoclimat, jusqu'à 9 700 $" },
              { href: "/credit-impot-frais-medicaux-quebec", titre: "Crédit frais médicaux Québec", desc: "Lunettes, dentiste, médicaments" },
              { href: "/aide-lunettes-quebec", titre: "Aide pour lunettes Québec", desc: "Crédits d'impôt disponibles" },
              { href: "/subvention-sport-enfant-quebec", titre: "Aides sport enfant Québec", desc: "ACE, allocation famille, frais de garde" },
            ].map((lien) => (
              <Link
                key={lien.href}
                href={lien.href}
                className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 hover:border-blue-200 transition-colors"
              >
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{lien.titre}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{lien.desc}</div>
                </div>
                <span className="text-blue-500 text-sm shrink-0 ml-2">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Derniers articles */}
      <section className="py-10 px-5 border-t border-slate-100">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6 text-slate-800">
            Derniers articles
          </h2>
          <div className="flex flex-col gap-3">
            {articles.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3 hover:border-blue-200 transition-colors"
              >
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 shrink-0 mt-0.5">{article.categorie}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-800 text-sm leading-snug">{article.titre}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{article.tempsLecture} de lecture</div>
                </div>
                <span className="text-blue-500 text-sm shrink-0">→</span>
              </Link>
            ))}
          </div>
          <Link
            href="/blog"
            className="block text-center text-blue-600 text-sm font-medium mt-4 hover:underline"
          >
            Voir tous les articles →
          </Link>
        </div>
      </section>

      {/* Ad Banner bas de page */}
      <section className="py-4 px-4 bg-slate-100">
        <div className="max-w-lg mx-auto">
          {/* Google AdSense – remplacer ce bloc par votre code AdSense */}
          <div className="h-16 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-xs">
            Publicité
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-6 px-5 mt-auto">
        <div className="max-w-lg mx-auto text-center text-xs leading-relaxed">
          <p className="mb-1 font-medium text-slate-300">ArgentQC.ca</p>
          <p>
            Outil informatif non affilié au gouvernement. Les montants sont des estimations —
            consultez toujours les sites officiels pour confirmer votre admissibilité.
          </p>
        </div>
      </footer>
    </main>
  );
}
