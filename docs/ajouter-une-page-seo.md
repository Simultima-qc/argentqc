# Ajouter une nouvelle page SEO

## Article de blogue

1. Creez un fichier `src/data/blog/entries/<slug>.tsx`.
2. Exportez un objet article avec `slug`, `titre`, `description`, `date`, `categorie`, `tempsLecture`, `metadata` et `Content`.
3. Lancez `npm run check:seo`.

Le sitemap XML, l'index `/blog` et la route `/blog/<slug>` seront mis a jour automatiquement depuis ce seul fichier.

## Page editoriale statique

1. Creez la route `src/app/<slug>/page.tsx`.
2. Exportez un objet `metadata` dans la page.
3. Ajoutez la page a `src/data/seo-pages.ts`.
4. Si la page doit apparaitre dans le hub de l'accueil, activez `includeInHomeHub`.
5. Lancez `npm run check:seo`.

Le sitemap XML et le hub editorial de l'accueil seront mis a jour automatiquement depuis `src/data/seo-pages.ts`.

## Regles

- N'ajoutez pas de pages utilitaires ou non indexables dans `src/data/seo-pages.ts`.
- Gardez `resultats` en `noindex`.
- Toute incoherence entre routes, articles et registre SEO fait echouer `npm run check:seo` et `npm run build`.

