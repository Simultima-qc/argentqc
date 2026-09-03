/**
 * Central governance registry for financially sensitive claims (issue #28,
 * following the read-only audit in issue #27).
 *
 * WHY THIS FILE IS PLAIN JAVASCRIPT (.mjs) AND NOT TYPESCRIPT:
 * `scripts/check-seo.mjs` runs as a plain `node scripts/check-seo.mjs`
 * process with zero build/compilation step, on Node 20 in the Netlify
 * production build (see netlify.toml) where TypeScript is not natively
 * importable. The script's own established convention (see
 * `checkSolidarityCreditGuardrails`, `checkChildcareCreditGuardrails`, the
 * SEO route checks, etc.) is to read raw source with `fs` and never compile
 * TypeScript. Nothing in the Next.js app needs to import this registry at
 * runtime, so keeping it as a directly `import()`-able ESM module is the
 * smaller, more robust choice demonstrated by the surrounding code, per the
 * issue's own allowance ("le design exact peut être ajusté s'il reste plus
 * simple et plus robuste" / "sauf meilleure convention démontrée par le
 * code"). Business logic living in real TypeScript datasets
 * (`src/data/finance-2026/*.ts`) is unaffected: this registry only points at
 * them by relative path.
 *
 * @typedef {"critical" | "high" | "medium"} ClaimCriticality
 * @typedef {"governed" | "explicitly-out-of-scope"} ClaimGovernanceStatus
 * @typedef {"active" | "historical-corrected"} ClaimHistoricalStatus
 *
 * @typedef {Object} StaleExceptionEntry
 * @property {string} until - ISO date (YYYY-MM-DD) the exception expires.
 * @property {string} reason - Non-empty justification, shown in check:seo output.
 *
 * @typedef {Object} ClaimRegistryEntry
 * @property {string} slug - Stable identifier for the surface/cluster.
 * @property {"blog-article" | "static-surface"} kind
 * @property {string} [articleFile] - Path (repo-relative) under src/data/blog/entries.
 * @property {string} [ledgerFile] - Path (repo-relative) under docs/claims.
 * @property {string} [datasetModule] - Path (repo-relative) under src/data/finance-2026,
 *   when a versioned dataset (defineVersionedDataset) is the source of truth for
 *   nextReviewAt/criticality. When set, the gate reads freshness from that
 *   module's own meta instead of from this entry.
 * @property {ClaimCriticality} criticality
 * @property {ClaimGovernanceStatus} status
 * @property {string} [nextReviewAt] - ISO date. Required for "governed" entries
 *   that have no datasetModule (the ledger itself is the sole source of truth).
 * @property {StaleExceptionEntry} [staleException]
 * @property {ClaimHistoricalStatus} [historicalStatus] - Defaults to "active".
 *   "historical-corrected" entries are exempt from calendar checks: they
 *   document a retired/corrected claim, not a live one requiring revalidation.
 * @property {string} scopeNote - Always required; must be concrete and bounded,
 *   never a generic excuse (see issue #28 "ne pas utiliser explicitly-out-of-scope
 *   comme échappatoire générique").
 */

/** @type {ClaimRegistryEntry[]} */
export const claimsRegistry = [
  // ── 13 existing claim ledgers (docs/claims/*.md) ────────────────────────
  {
    slug: "allocation-canadienne-enfants-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/allocation-canadienne-enfants-2026.tsx",
    ledgerFile: "docs/claims/allocation-canadienne-enfants-2026.md",
    datasetModule: "src/data/finance-2026/family-training-rules-2026.ts",
    criticality: "high",
    status: "governed",
    scopeNote:
      "Allocation canadienne pour enfants (ACE) : montants et seuils centralisés dans family-training-rules-2026.ts (champ ace), ledger classique avec dates de revue structurées.",
  },
  {
    slug: "credit-canadien-formation-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-canadien-formation-2026.tsx",
    ledgerFile: "docs/claims/credit-canadien-formation-2026.md",
    datasetModule: "src/data/finance-2026/family-training-rules-2026.ts",
    criticality: "high",
    status: "governed",
    scopeNote:
      "Crédit canadien pour la formation (CCF) : partage le module family-training-rules-2026.ts (champ ccf) avec l'ACE; classé au niveau de criticité du module partagé plutôt qu'un niveau distinct pour éviter deux dates de revue divergentes sur un seul fichier source.",
  },
  {
    slug: "aide-financiere-etudes-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/aide-financiere-etudes-quebec-2026.tsx",
    ledgerFile: "docs/claims/aide-financiere-etudes-quebec-2026.md",
    datasetModule: "src/data/finance-2026/prets-bourses-2026.ts",
    criticality: "high",
    status: "governed",
    scopeNote:
      "AFE : reviewCadence corrigée à \"manual\" dans le dataset pour refléter honnêtement la prochaine échéance réelle du ledger (2026-10-12), plus rapprochée qu'un cycle trimestriel générique, plutôt que forcer une étiquette de cadence qui ne correspondrait pas à la date déjà déclarée.",
  },
  {
    slug: "assurance-emploi-guide-complet-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/assurance-emploi-guide-complet-2026.tsx",
    ledgerFile: "docs/claims/assurance-emploi-guide-complet-2026.md",
    criticality: "critical",
    status: "governed",
    nextReviewAt: "2026-10-11",
    scopeNote:
      "Aucun module finance-2026 dédié (ledger seul, schéma classique). Critique car une mesure temporaire (carence, +20 semaines) expire le 2026-10-10; nextReviewAt fixé au 2026-10-11 déclaré par le ledger.",
  },
  {
    slug: "aide-sociale-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/aide-sociale-quebec-2026.tsx",
    ledgerFile: "docs/claims/aide-sociale-quebec-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2026-11-08",
    scopeNote: "Aucun module finance-2026 dédié (ledger seul, schéma classique, barèmes mensuels).",
  },
  {
    slug: "supplement-revenu-garanti-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/supplement-revenu-garanti-2026.tsx",
    ledgerFile: "docs/claims/supplement-revenu-garanti-2026.md",
    criticality: "critical",
    status: "governed",
    nextReviewAt: "2026-10-01",
    scopeNote: "Aucun module finance-2026 dédié. Montants indexés trimestriellement (SRG); prochaine indexation 2026-10-01.",
  },
  {
    slug: "securite-vieillesse-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/securite-vieillesse-quebec-2026.tsx",
    ledgerFile: "docs/claims/securite-vieillesse-quebec-2026.md",
    criticality: "critical",
    status: "governed",
    nextReviewAt: "2026-10-01",
    scopeNote: "Aucun module finance-2026 dédié. Montants indexés trimestriellement (SV); prochaine indexation 2026-10-01.",
  },
  {
    slug: "rqap-conge-parental-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/rqap-conge-parental-quebec-2026.tsx",
    ledgerFile: "docs/claims/rqap-conge-parental-quebec-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2026-11-14",
    scopeNote: "Aucun module finance-2026 dédié (ledger seul, schéma classique, toutes les lignes reviennent au 2026-11-14).",
  },
  {
    slug: "reee-subvention-epargne-etudes-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/reee-subvention-epargne-etudes-2026.tsx",
    ledgerFile: "docs/claims/reee-subvention-epargne-etudes-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2026-11-30",
    scopeNote: "Aucun module finance-2026 dédié (ledger seul, schéma classique).",
  },
  {
    slug: "rrq-rente-retraite-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/rrq-rente-retraite-2026.tsx",
    ledgerFile: "docs/claims/rrq-rente-retraite-2026.md",
    datasetModule: "src/data/finance-2026/retirement-2026.ts",
    criticality: "critical",
    status: "governed",
    scopeNote: "RRQ : montants de cotisation/rente indexés annuellement; ledger en-tête déclare une cadence trimestrielle explicite.",
  },
  {
    slug: "allocation-canadienne-epicerie-besoins-essentiels-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/allocation-canadienne-epicerie-besoins-essentiels-2026.tsx",
    ledgerFile: "docs/claims/allocation-canadienne-epicerie-besoins-essentiels-2026.md",
    datasetModule: "src/data/finance-2026/groceries-essentials-benefit-2026.ts",
    criticality: "critical",
    status: "governed",
    scopeNote:
      "ACEBE : programme récent (transition depuis l'ancien crédit TPS/TVH). Ledger schéma \"décision\": la revue trimestrielle réelle (nextReviewAt du dataset) est fixée à 2026-12-01, cohérente avec reviewCadence: quarterly déclaré dans le module, plutôt que la borne large \"avant juillet 2027\" mentionnée en prose dans le ledger.",
  },
  {
    slug: "frais-garde-enfants-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/frais-garde-enfants-quebec-2026.tsx",
    ledgerFile: "docs/claims/credit-frais-garde-enfants-2026.md",
    datasetModule: "src/data/finance-2026/childcare-credit-2026.ts",
    criticality: "critical",
    status: "governed",
    scopeNote:
      "Nommage historique divergent (article frais-garde-enfants-quebec-2026 vs ledger credit-frais-garde-enfants-2026) déjà signalé par l'audit #27 (P1.5); ce registre relie explicitement les deux au lieu de compter sur une correspondance automatique de nom.",
  },
  {
    slug: "credit-impot-solidarite-2026",
    kind: "static-surface",
    ledgerFile: "docs/claims/credit-impot-solidarite-2026.md",
    datasetModule: "src/data/finance-2026/solidarity-credit-2026.ts",
    criticality: "critical",
    status: "governed",
    scopeNote:
      "Ancien article de blog retiré et redirigé en permanence vers /fr/budget/credit-solidarite (page statique, pas un article src/data/blog/entries). Protection métier détaillée déjà assurée par checkSolidarityCreditGuardrails() dans check-seo.mjs, conservée sans modification; cette entrée assure seulement la couverture d'inventaire (ledger <-> dataset) pour la détection de dérive.",
  },

  // ── 16 articles sans ledger dédié (audit #27, densité $/% en signal de découverte uniquement) ──
  // fractionnement-revenu-retraite-2026 reste listé ici (ordre historique par densité) mais son
  // status est "governed" depuis l'issue #41; voir son ledgerFile pour le détail.
  {
    slug: "fractionnement-revenu-retraite-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/fractionnement-revenu-retraite-2026.tsx",
    ledgerFile: "docs/claims/fractionnement-revenu-retraite-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #41 (audit source-backed ciblé). Aucun module finance-2026 dédié aux tranches d'imposition combinées ou au crédit québécois âge/personne vivant seule/revenus de retraite n'existe encore; ledger seul, schéma classique. Corrections appliquées : formulaire québécois fabriqué « TP-932/TP-932.A » remplacé par l'Annexe Q réelle, taux et montant du crédit fédéral pour revenu de pension mis à jour (14 %, ~280 $), mécanisme du crédit québécois corrigé (pas 20 % sur 2 000 $), et ajout de la condition d'âge de 65 ans propre au Québec pour une rente de RPA (absente de l'article d'origine).",
  },
  {
    slug: "impots-revenus-retraite-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/impots-revenus-retraite-quebec-2026.tsx",
    ledgerFile: "docs/claims/impots-revenus-retraite-quebec-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #43 (audit source-backed ciblé), corrigé le 2026-09-03 en deux passages suite aux revues indépendantes de la PR #44. Aucun module finance-2026 dédié aux tranches d'imposition combinées, aux taux de retenue REER/FERR ou au crédit québécois âge/personne vivant seule/revenus de retraite n'existe encore; ledger seul, schéma classique. Corrections appliquées : seuil de récupération de la PSV aligné sur le ledger securite-vieillesse-quebec-2026 (93 454 $), taux de retenue à la source REER/FERR ajoutés, fourchette d'économies du fractionnement alignée sur le ledger fractionnement-revenu-retraite-2026 (2 000 $-10 000 $), mécanisme du crédit fédéral/québécois pour revenu de pension corrigé, crédit en raison de l'âge aux montants 2026 primaires (fédéral 9 208 $ à 14 %, Québec 3 986 $ à 14 %, seuil 42 955 $), crédit pour maintien à domicile aux montants 2026 primaires (7 800 $/10 200 $), condition d'âge et montant du crédit pour la prolongation de carrière mis à jour (65 ans et plus depuis 2025; 1 786 $, calculé des paramètres 2026 primaires). Les trois exemples chiffrés d'impôt ont été retirés (formulation qualitative non chiffrée), faute de source de vérité versionnée pour les crédits non remboursables combinés.",
  },
  {
    slug: "celiapp-premier-acheteur-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/celiapp-premier-acheteur-quebec-2026.tsx",
    criticality: "medium",
    status: "explicitly-out-of-scope",
    scopeNote:
      "28 occurrences $/%. Plafonds fédéraux CELIAPP relativement stables et peu de paramètres propres au Québec; criticité moyenne. Pas de ledger dans cette issue de gouvernance.",
  },
  {
    slug: "credit-impot-maintien-domicile-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-impot-maintien-domicile-2026.tsx",
    criticality: "high",
    status: "explicitly-out-of-scope",
    scopeNote:
      "27 occurrences $/%. Crédit remboursable à taux/plafonds indexés annuellement pour aînés (YMYL); pas de ledger produit dans cette issue de gouvernance, à prioriser par densité.",
  },
  {
    slug: "bouclier-fiscal-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/bouclier-fiscal-quebec-2026.tsx",
    criticality: "high",
    status: "explicitly-out-of-scope",
    scopeNote:
      "27 occurrences $/%. Mesure fiscale à seuils indexés; cite déjà childcare-credit-2026 comme exemple (corrigé lors de l'issue #25) mais n'a pas son propre ledger de mesure. Pas de nouveau ledger dans cette issue de gouvernance.",
  },
  {
    slug: "credit-impot-prolongation-carriere-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-impot-prolongation-carriere-2026.tsx",
    criticality: "high",
    status: "explicitly-out-of-scope",
    scopeNote: "26 occurrences $/%. Crédit à taux/seuils pour travailleurs de 60 ans et plus; pas de ledger dans cette issue de gouvernance.",
  },
  {
    slug: "credit-impot-handicap-canada-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-impot-handicap-canada-2026.tsx",
    criticality: "medium",
    status: "explicitly-out-of-scope",
    scopeNote: "15 occurrences $/%. Montant fédéral fixe, indexation annuelle standard; criticité moyenne, pas de ledger dans cette issue.",
  },
  {
    slug: "prestation-dentaire-canadienne-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/prestation-dentaire-canadienne-2026.tsx",
    criticality: "high",
    status: "explicitly-out-of-scope",
    scopeNote: "12 occurrences $/%. Prestation fédérale sous condition de revenu; pas de ledger dans cette issue de gouvernance.",
  },
  {
    slug: "credit-impot-aidants-naturels-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-impot-aidants-naturels-2026.tsx",
    criticality: "medium",
    status: "explicitly-out-of-scope",
    scopeNote: "7 occurrences $/%, la densité la plus basse des 17. Pas de ledger dans cette issue de gouvernance.",
  },
  {
    slug: "credit-impot-prime-travail-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-impot-prime-travail-2026.tsx",
    criticality: "high",
    status: "explicitly-out-of-scope",
    scopeNote: "22 occurrences $/%. Crédit remboursable sous condition de revenu de travail; pas de ledger dans cette issue de gouvernance.",
  },
  {
    slug: "reer-vs-celi-lequel-choisir-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/reer-vs-celi-lequel-choisir-2026.tsx",
    criticality: "medium",
    status: "explicitly-out-of-scope",
    scopeNote:
      "22 occurrences $/%. Guide comparatif éditorial (pas d'admissibilité à un programme précis); plafonds REER/CELI fédéraux stables. Pas de ledger dans cette issue de gouvernance.",
  },
  {
    slug: "allocation-logement-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/allocation-logement-quebec-2026.tsx",
    criticality: "high",
    status: "explicitly-out-of-scope",
    scopeNote: "21 occurrences $/%. Allocation sous condition de revenu et de loyer; pas de ledger dans cette issue de gouvernance.",
  },
  {
    slug: "renoclimat-2026-guide-complet",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/renoclimat-2026-guide-complet.tsx",
    criticality: "medium",
    status: "explicitly-out-of-scope",
    scopeNote: "21 occurrences $/%. Subvention à montants fixes par mesure, moins sensible au revenu du ménage. Pas de ledger dans cette issue de gouvernance.",
  },
  {
    slug: "rap-reer-premier-acheteur-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/rap-reer-premier-acheteur-quebec-2026.tsx",
    criticality: "medium",
    status: "explicitly-out-of-scope",
    scopeNote: "20 occurrences $/%. Plafond de retrait RAP fédéral stable. Pas de ledger dans cette issue de gouvernance.",
  },
  {
    slug: "prestation-canadienne-travailleurs-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/prestation-canadienne-travailleurs-2026.tsx",
    criticality: "high",
    status: "explicitly-out-of-scope",
    scopeNote: "17 occurrences $/%. Prestation fédérale sous condition de revenu de travail; pas de ledger dans cette issue de gouvernance.",
  },
  {
    slug: "allocation-famille-quebec-calcul-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/allocation-famille-quebec-calcul-2026.tsx",
    criticality: "high",
    status: "explicitly-out-of-scope",
    scopeNote:
      "13 occurrences $/%. Recoupe les montants d'Allocation famille déjà présents dans family-training-rules-2026.ts (quebecFamilyAllowance), mais l'article lui-même n'a pas de ledger propre dans cette issue de gouvernance; à lier en priorité au module existant plutôt qu'à un nouveau ledger.",
  },
  {
    slug: "reno-adaptation-programme-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/reno-adaptation-programme-2026.tsx",
    criticality: "medium",
    status: "explicitly-out-of-scope",
    scopeNote: "13 occurrences $/%, densité comparable à un cluster déjà gouverné (credit-canadien-formation-2026). Pas de ledger dans cette issue de gouvernance.",
  },
];
