<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ArgentQC agent governance

## Roles

- Product Owner = project owner; decides product direction and authorizes consequential releases/mutations.
- ChatGPT = chief of staff, independent reviewer, context keeper, and author of durable GitHub work orders.
- Codex = implementation and technical operations engineer executing the assigned GitHub Issue.
- GitHub = durable technical memory: issues define work, PRs/commits/comments preserve execution evidence.

Recommended operating convention: **1 GitHub Issue = 1 new Codex conversation**. An issue must be autonomous enough for a fresh Codex thread.

## Required reading before significant work

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. Assigned GitHub Issue and its recent comments
4. Relevant product, claims, data, SEO, architecture, or operational documentation

Do not rely on a previous chat thread as the only source of requirements.

## Sources of truth

1. Versioned code / configuration / data = implementation truth
2. `docs/PROJECT_STATE.md` = current operational snapshot and known state
3. Assigned GitHub Issue = mandate, scope, authorization, acceptance criteria, and stop conditions
4. PR / commits / GitHub comments = durable execution evidence
5. Product / roadmap / editorial documentation = strategic direction

Strategic documentation is **not** implicit authorization to mutate production, production data, external services, or unrelated code.

## Git discipline

Before work, Codex must inspect and report:

- current branch and HEAD;
- reference remote branch and its SHA;
- ahead / behind;
- worktree status;
- existing diff;
- untracked files;
- pre-existing changes.

Preserve all unrelated work. Use a dedicated branch and small targeted commits unless the Issue explicitly authorizes another workflow. Never hide, overwrite, reset, or opportunistically absorb unrelated user changes.

## Production discipline

Finding a problem does not authorize fixing it in PROD.

Before any consequential mutation, verify:

- environment;
- deployed SHA/version when applicable;
- exact target;
- affected data/services;
- explicit authorization in the Issue.

If the production target or version cannot be established with confidence: **NO-GO**. Audit/findings are not automatic authorization to mutate, merge, deploy, or alter external data/services.

## Repo Commands

Use only commands actually defined by the repository. Current versioned commands are:

- `npm run dev`: starts Next.js locally.
- `npm run build`: runs `npm run check:seo` then `next build`.
- `npm run start`: starts the production Next.js server.
- `npm run lint`: runs ESLint.
- `npm run check:seo`: validates the SEO registry, static routes, blog slugs, localized routes, and questionnaire propagation.
- `npm run indexnow`: submits IndexNow through `scripts/submit-indexnow.mjs`.
- `npm run test:unit`: runs the targeted Node tests defined in `package.json`.
- `npm test`: runs unit tests then Playwright smoke tests.
- `npm run test:ui`: opens Playwright UI.

Do not invent test/build/lint commands. Report exactly which commands ran, their result, which relevant commands did not run, CI status, and environment failures separately from product failures.

## Repo Workflows

- New static SEO page: create `src/app/<slug>/page.tsx`, export `metadata`, add the route to `src/data/seo-pages.ts`, then run `npm run check:seo`.
- New blog article: create `src/data/blog/entries/<slug>.tsx`; sitemap XML, `/blog`, and `/blog/<slug>` derive from that source; run `npm run check:seo`.
- Playwright locally starts `npm run dev`; with `CI=1`, configuration starts `npx next start` after the build.
- Netlify production build is defined in `netlify.toml`: `npm run build && npx playwright install chromium && npx playwright test`, with Playwright browser cache under `.playwright-browsers`.
- Sensitive 2026 financial values follow `docs/data-reliability-2026.md` and the source-backed claim ledgers under `docs/claims/`.

## Findings classification

- **P0** = corruption, data loss, critical incident, or dangerous behavior.
- **P1** = blocker that must be resolved before release, deployment, or gate.
- **P2** = real defect, non-blocking for the current gate.
- **P3** = improvement, tuning, debt, or observation.

An audit/gate is not permission to repair every P2/P3 opportunistically. Record out-of-scope findings and stop where the Issue says to stop.

## Durable completion report

When Codex finishes an Issue, publish the complete report in GitHub (Issue and/or linked PR). Include as applicable:

- preflight;
- work performed;
- files changed;
- commits;
- PR;
- commands/tests and results;
- CI;
- deployment;
- data/metrics;
- findings with P0-P3 classification;
- GO / NO-GO;
- remaining risks;
- safest next action;
- deviations from mandate.

Never require the Product Owner to copy the report manually into ChatGPT. ChatGPT reviews the durable GitHub evidence independently.
