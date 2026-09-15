# Pull Request Template

Canonical structure for Simultima implementation PRs. GitHub or an execution tool may or may not pre-populate a template; PR content should retain these review-critical fields.

`Refs #<issue>` by default for STAGED feature PRs. Use `Closes #<issue>` only when this merge satisfies the Issue definition of done.

## Summary
- <what changed>

## Scope
- **In scope:** <scope>
- **Out of scope / deviations:** None | <details>

## Delivery
- **Mode:** STAGED | DIRECT | HOTFIX | N/A
- **Merge target:** `integration` | production branch | <other>
- **Production deploy from this merge:** YES | NO | N/A
- **Later Release Gate required:** YES | NO | N/A

## Validation
- **Targeted tests:** N/A | <exact command/check + result>
- **Full tests:** N/A | <exact command/check + result>
- **Lint / static:** N/A | <exact command/check + result>
- **Build:** N/A | <exact command/check + result>
- **Preview / branch validation:** N/A | <preview/reproduction/artifact + result>

## Acceptance criteria evidence

Map the Issue's acceptance-criterion identifiers to concrete proof. Closely related criteria may share evidence when the same proof genuinely covers each one.

| Acceptance criterion | Evidence / artifact | Result |
|---|---|---|
| AC1 | <command/check/log/preview/reproduction/inspection> | <PASS / FAIL / BLOCKED / N/A — reason> |
| AC2 | <command/check/log/preview/reproduction/inspection> | <PASS / FAIL / BLOCKED / N/A — reason> |

Do not write only `tests pass` or equivalent. Identify what actually ran or was inspected and the relevant result. Keep LOW-risk evidence concise; provide stronger fit-for-purpose proof for MEDIUM/HIGH-risk work.

## CI / head
- **Head SHA:** `<sha>`
- **CI / checks:** pending | green | <check/run details>

## DB / deployment
- **Database / migrations:** None | <details + evidence when applicable>
- **Environment / deployment:** None | <details + evidence when applicable>

## Risks / residuals
None | <details>

## Gate
- **State:** `READY FOR VALIDATION` | `REVALIDATION READY` | `READY FOR RELEASE VALIDATION`
- **Merge/release:** per `MERGE-POLICY.md` and `RELEASE-POLICY.md`; explicit Product Owner authorization required for the immediate gated action.
