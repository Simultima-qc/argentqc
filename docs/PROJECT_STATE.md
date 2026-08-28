# ArgentQC — PROJECT STATE

Operational source of truth. Keep this compact; detailed backlog belongs in GitHub Issues.

**Snapshot:** 2026-08-28. Temporal release facts below are snapshots, not permanent truths.

## Product

ArgentQC (`argentqc.ca`) is a French/English Quebec-focused personal-finance information and discovery site. The current product surfaces financial programs and practical guides, with a questionnaire/matching funnel and topic hubs covering budget/financial assistance, taxes, retirement, insurance, internet and moving. The site also publishes SEO guides/blog content and calculators/comparators.

The product handles financially sensitive claims. Official values, estimates, editorial assumptions, eligibility rules, dates, rates and thresholds must be distinguished and source-backed according to the versioned data/claims documentation.

## Architecture

- Repository: `Simultima-qc/argentqc`.
- Framework: Next.js 16.2.1 / React 19.2.4 / TypeScript.
- Styling/tooling: Tailwind CSS 4, ESLint 9.
- App structure: Next.js App Router under `src/app`, including localized routes.
- Content/data: versioned TypeScript/JSON under `src/data`; financial 2026 modules under `src/data/finance-2026`; source-backed claim ledgers under `docs/claims`.
- Email dependency: Resend is versioned as an application dependency; exact production usage/configuration is not asserted by this snapshot.
- Tests: Node targeted unit tests plus Playwright smoke tests.
- SEO validation: `scripts/check-seo.mjs` via `npm run check:seo` and as part of `npm run build`.
- Hosting: Netlify with `@netlify/plugin-nextjs`.
- Database: **Non vérifié / none established from the audited versioned configuration.**
- GitHub Actions: no `.github/workflows` directory was present in the audited `main` tree; deployment validation is primarily observable through Netlify for the current setup.

## Release state

Snapshot verified 2026-08-28 before this governance change:

- Default branch: `main`.
- PROD branch: `main`, verified from the current Netlify production deploy.
- Pre-governance `main` HEAD: `8c9a745b30e4613543873501947a03917c418dab` (`Securise le JSON-LD des pages prioritaires`).
- Hosting project: Netlify site `argentqc`, primary URL `https://argentqc.ca`.
- Verified production deploy before governance: Netlify deploy `6a8a4d912bc77a0008429c11`, state `ready`, context `production`, branch `main`, commit `8c9a745b30e4613543873501947a03917c418dab`, published 2026-08-23.
- Netlify build command: `npm run build && npx playwright install chromium && npx playwright test`.
- GitHub open Issues at audit start: none.
- GitHub open PRs at audit start: none.
- GitHub Actions workflows at audit start: none established in repository.
- Environment variables/secrets: **Non vérifié**; do not infer values or mutate them without an explicit Issue.

## Functional state

Verified from repository and recent durable history:

- Localized home and topic surfaces are implemented.
- Questionnaire/matching, SEO route registry, blog/guides, calculators/comparators and financial-program data are versioned.
- Data-reliability conventions exist for sensitive 2026 financial datasets.
- Source-backed claim ledgers exist for multiple priority financial articles.
- Recent delivered work includes audits of assurance-emploi, aide sociale, SRG, RQAP and Sécurité de la vieillesse claims; SRG questionnaire funnel optimization; homepage trust improvements; and hardened JSON-LD serialization for priority pages.
- Latest verified PROD before governance is healthy at the hosting layer (`ready`). Full independent browser/content smoke of every surface: **Non vérifié** in this snapshot.

## Known blockers

No P0/P1 blocker was established by the 2026-08-28 repository/hosting audit.

Do not promote old observations from documentation to P0/P1 without reproducing them against current code/PROD.

## Gates / workstreams closed

Durable Git history establishes completion of these recent workstreams:

- source-backed claim ledgers introduced;
- assurance-emploi 2026 claims audit;
- aide sociale 2026 claims audit;
- SRG 2026 claims audit;
- RQAP 2026 claims audit;
- Sécurité de la vieillesse 2026 claims audit;
- SRG → questionnaire funnel optimization;
- homepage trust reinforcement;
- priority JSON-LD hardening and hostile serialization test.

## NEXT WORKSTREAM

**Re-baseline the current SEO/content priority from actual production/search evidence and current code, then produce a ranked, source-backed next-action plan before making further SEO content changes.**

Reason: the repository has no open Issues/PRs, recent priority financial claim work has materially advanced beyond older roadmap notes, and the next product/SEO target cannot be selected safely from stale documentation alone. The first operational Issue should therefore be a bounded read-only prioritization audit with explicit stop-before-mutation.

## Hard rules

- One GitHub Issue should normally map to one fresh Codex conversation.
- Read `AGENTS.md`, this file, the assigned Issue/comments, and relevant domain docs before significant work.
- GitHub Issue scope is the authorization boundary.
- Audit/findings do not authorize mutation.
- Never change PROD/external services/data unless explicitly authorized and the target/version are verified.
- Preserve unrelated work and report pre-existing changes.
- Use only repository-defined commands; never invent tests.
- Financially sensitive claims require source-backed handling and status discipline.
- New SEO routes must respect route/canonical/sitemap/localization conventions and `npm run check:seo`.
- Keep `PROJECT_STATE.md` operational and compact; use Issues for detailed backlog/history.

## Structural backlog

Non-prioritized until validated by a current Issue:

- Continue centralizing repeated sensitive financial values from blog/pages into shared versioned data modules where justified.
- Add/strengthen automated validation of financial dataset metadata and freshness where useful.
- Reassess remaining React/Next.js warnings/deprecations against the current Next.js version before scheduling fixes.
- Continue route/localization/canonical governance and contract coverage as SEO surfaces evolve.
- Replace the generic scaffold `README.md` with accurate contributor/project documentation when that becomes a scoped documentation workstream.
