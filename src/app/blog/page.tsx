import type { Metadata } from "next";
import Link from "next/link";
import articles from "@/data/articles";

export const metadata: Metadata = {
  title: "Blogue – Guides sur les aides gouvernementales au Québec | ArgentQC.ca",
  description:
    "Guides pratiques sur les subventions, crédits d'impôt et aides gouvernementales au Québec. Rénoclimat, allocation famille, crédit solidarité et plus.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-blue-700 text-white px-4 py-4 shadow-md">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-base">ArgentQC.ca</Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Blogue</h1>
        <p className="text-slate-500 mb-8">Guides pratiques pour maximiser vos aides gouvernementales au Québec.</p>

        <div className="flex flex-col gap-5">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:border-blue-200 transition-colors"
            >
              <div className="flex gap-2 mb-3">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{article.categorie}</span>
                <span className="text-xs text-slate-400 py-0.5">{article.tempsLecture} de lecture</span>
              </div>
              <h2 className="font-bold text-slate-800 text-lg leading-snug mb-2">{article.titre}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">{article.description}</p>
              <p className="text-blue-600 text-sm font-medium">Lire l&apos;article →</p>
            </Link>
          ))}
        </div>
      </div>

      <footer className="bg-slate-800 text-slate-400 py-5 px-4 mt-8">
        <div className="max-w-2xl mx-auto text-center text-xs">
          ArgentQC.ca – Outil informatif non affilié au gouvernement.
        </div>
      </footer>
    </main>
  );
}
