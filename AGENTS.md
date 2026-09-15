<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ArgentQC agent governance

## Roles

- Product Owner = project owner; decides product direction and authorizes consequential releases/mutations.
- ChatGPT / Engineering OS = chief of staff, independent reviewer, context keeper, author of durable GitHub work orders, default merge executor after explicit authorization, and executor of supported bounded control-plane work.
- Codex and Claude Code = interchangeable implementation providers executing the assigned GitHub Issue according to the active Execution Strategy.
- GitHub = durable technical memory: Issues define work, PRs/commits/comments preserve execution evidence.

Recommended operating convention: **1 GitHub Issue = 1 new implementation-agent conversation** when Codex or Claude Code is used. An Issue must be autonomous enough for a fresh execution thread.

## Central Playbook

Cross-project workflow is governed by the latest `Simultima-qc/AI-Development-Playbook` on its default branch. Before significant software-development work, apply the current Playbook plus these ArgentQC-specific rules. In particular, use `WORKFLOW.md`, `MERGE-POLICY.md`, `RELEASE-POLICY.md`, `OPERATIONS-POLICY.md`, `REPOSITORY-INTEROPERABILITY.md`, `PULL-REQUEST-TEMPLATE.md`, `AGENT-ROUTING.md`, `VALIDATION-GATES.md`, `SECURITY.md`, `MODEL-CATALOG.yml` and `VERSION` as applicable.

The central Playbook is authoritative for cross-project workflow, routing, validation, merge/release semantics and control-plane execution. This file remains authoritative for ArgentQC-specific architecture, data/claim reliability, SEO, commands and product constraints. A stricter project rule remains stricter; a true workflow conflict must be surfaced rather than silently resolved.

When `.simultima/workflow.yml` exists, use it only as a non-secret discovery accelerator. Repository/runtime reality plus current central/local rules win if the profile becomes stale. On resumed work, refresh current PR/Issue/CI state plus material Playbook/local-instruction/profile drift; instruction drift alone does not require rebasing application code.

For PR structure, resolve the template in this order: active branch `.github/pull_request_template.md`, default-branch template, then central `PULL-REQUEST-TEMPLATE.md`. Do not ask the Product Owner to relay a template already available in GitHub.

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

Before work, the implementation agent must inspect and report:

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

When the implementation agent finishes an Issue, publish the complete report in GitHub (Issue and/or linked PR). Include as applicable:

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

Never require the Product Owner to copy the report manually into ChatGPT. ChatGPT reviews the durable GitHub evidence independently. When a PR exists, the PR is the primary live coordination/revalidation thread. After `NO-GO`, consume findings directly from GitHub, fix only blockers inside scope, post `REVALIDATION READY`, and stop for revalidation.

At merge-ready, Codex/Claude stop. ChatGPT / Engineering OS performs the merge only after explicit Product Owner authorization for the immediate gate. If ChatGPT cannot perform a suitable control-plane action because access/tooling is missing, use central access-recovery rules before asking for manual fallback.
