<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Repo Commands

- `npm run dev`: demarre Next.js en local sur `http://localhost:3000`
- `npm run build`: execute `npm run check:seo` puis `next build`
- `npm run check:seo`: valide le registre SEO, les routes statiques, les slugs du blog, les routes localisees et la propagation du questionnaire
- `npm run test:unit`: lance les tests Node cibles sans build complet
- `npm test`: lance `npm run test:unit` puis les smoke tests Playwright
- `npm run test:ui`: ouvre Playwright en mode UI
- `npm run indexnow`: soumet IndexNow via `scripts/submit-indexnow.mjs`

## Repo Workflows

- Nouvelle page SEO statique: creer `src/app/<slug>/page.tsx`, exporter `metadata`, ajouter la route a `src/data/seo-pages.ts`, puis lancer `npm run check:seo`
- Nouvel article de blogue: creer `src/data/blog/entries/<slug>.tsx`, laisser le sitemap XML, `/blog` et `/blog/<slug>` se regenerer depuis ce seul fichier, puis lancer `npm run check:seo`
- Smoke tests Playwright: en local, la config demarre `npm run dev`; en CI avec `CI=1`, elle demarre `npx next start` apres le build
- Netlify: le build execute `npm run build && npx playwright install chromium && npx playwright test`, avec cache des binaires Playwright dans `.playwright-browsers`
