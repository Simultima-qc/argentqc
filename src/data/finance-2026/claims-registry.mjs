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
      "AFE : reviewCadence \"manual\" dans le dataset. Revalidée le 2026-09-04 (issue #71, WebSearch, accès direct aux domaines " +
      "gouvernementaux bloqué) : aucune divergence trouvée sur les claims publiées ; nextReviewAt avancé à 2027-01-15, aligné sur " +
      "la claim la plus volatile du dataset (taux du crédit fédéral pour frais de scolarité, indexé annuellement) plutôt que sur " +
      "le cycle annuel du guide AFE lui-même. Voir docs/claims/aide-financiere-etudes-quebec-2026.md pour le détail.",
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
      "Aucun module finance-2026 dédié (ledger seul, schéma classique). Critique car une mesure temporaire (carence, +20 semaines) expire le 2026-10-10; nextReviewAt fixé au 2026-10-11 déclaré par le ledger. " +
      "Revalidée le 2026-09-04 (issue #71, WebSearch, accès direct aux domaines gouvernementaux toujours bloqué) : aucune divergence " +
      "trouvée, y compris confirmation additionnelle (Gazette du Canada DORS/2026-64) que les mesures temporaires ont bien été " +
      "prolongées jusqu'au 2026-10-10. nextReviewAt délibérément laissé inchangé : c'est une échéance réelle liée à l'expiration " +
      "des mesures, pas une date de vérification arbitraire à repousser. Voir docs/claims/assurance-emploi-guide-complet-2026.md.",
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
    scopeNote:
      "Aucun module finance-2026 dédié. Montants indexés trimestriellement (SRG); prochaine indexation 2026-10-01. " +
      "Revalidée le 2026-09-04 (issue #74, WebSearch, accès direct aux domaines gouvernementaux toujours bloqué) : aucune divergence " +
      "trouvée sur le trimestre juillet-septembre 2026 publié. Le rapport trimestriel octobre-décembre 2026 n'était pas encore publié " +
      "à la date de vérification; des projections tierces non officielles et mutuellement incohérentes pour ce trimestre ont été " +
      "rejetées plutôt qu'appliquées. nextReviewAt délibérément laissé inchangé : voir docs/claims/supplement-revenu-garanti-2026.md.",
  },
  {
    slug: "securite-vieillesse-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/securite-vieillesse-quebec-2026.tsx",
    ledgerFile: "docs/claims/securite-vieillesse-quebec-2026.md",
    criticality: "critical",
    status: "governed",
    nextReviewAt: "2026-10-01",
    scopeNote:
      "Aucun module finance-2026 dédié. Montants indexés trimestriellement (SV); prochaine indexation 2026-10-01. " +
      "Revalidée le 2026-09-04 (issue #74, WebSearch, accès direct aux domaines gouvernementaux toujours bloqué) : aucune divergence " +
      "trouvée sur le trimestre juillet-septembre 2026 publié. Le rapport trimestriel octobre-décembre 2026 n'était pas encore publié " +
      "à la date de vérification; des projections tierces non officielles et mutuellement incohérentes pour ce trimestre ont été " +
      "rejetées plutôt qu'appliquées. nextReviewAt délibérément laissé inchangé : voir docs/claims/securite-vieillesse-quebec-2026.md.",
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

  // ── 17 articles initialement sans ledger dédié (audit #27, densité $/% en signal de découverte
  // uniquement) ── fractionnement-revenu-retraite-2026, impots-revenus-retraite-quebec-2026,
  // credit-impot-maintien-domicile-2026 et credit-impot-prolongation-carriere-2026 restent listés ici
  // (ordre historique par densité) mais leur status est "governed" depuis, respectivement, les issues
  // #41, #43 et #54; voir leur ledgerFile pour le détail.
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
    ledgerFile: "docs/claims/celiapp-premier-acheteur-quebec-2026.md",
    criticality: "medium",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #83 : corrige une contradiction directe avec l'article rap-reer-premier-acheteur-quebec-2026 (RAP présenté à 35 000 $ dans cet article contre 60 000 $ dans l'autre, réel depuis le budget fédéral 2024); RAP corrigé à 60 000 $, total combiné CELIAPP+RAP à 100 000 $/200 000 $ pour un couple. Condition de retrait admissible « avant le 1er octobre » reformulée (c'est l'entente d'achat, pas le retrait, qui doit précéder cette date, et l'année de référence est celle suivant le retrait). Aucun module finance-2026 dédié; ledger seul, schéma classique.",
  },
  {
    slug: "credit-impot-maintien-domicile-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-impot-maintien-domicile-2026.tsx",
    ledgerFile: "docs/claims/credit-impot-maintien-domicile-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #54 (P1 YMYL actif identifié par l'audit #53) : taux corrigé de 36 %/38 % à 40 % unique, montant maximal corrigé de ~6 000 $/~9 700 $ à 7 800 $/10 200 $, alignés sur le ledger déjà gouverné impots-revenus-retraite-quebec-2026. Aucun module finance-2026 dédié; ledger seul, schéma classique.",
  },
  {
    slug: "bouclier-fiscal-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/bouclier-fiscal-quebec-2026.tsx",
    ledgerFile: "docs/claims/bouclier-fiscal-quebec-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2027-03-31",
    scopeNote:
      "Gouverné par l'issue #81 : constat majeur que le bouclier fiscal a été aboli à compter de l'année d'imposition 2026 (Budget du Québec 2025-2026); l'article, qui le présentait comme une mesure active, est corrigé pour refléter l'abolition et reformulé au passé pour l'année d'imposition 2025 (dernière année d'application). Lien officiel corrigé de la ligne 462 à la ligne 460. Aucun module finance-2026 dédié; ledger seul.",
  },
  {
    slug: "credit-impot-prolongation-carriere-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-impot-prolongation-carriere-2026.tsx",
    ledgerFile: "docs/claims/credit-impot-prolongation-carriere-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #54 (P1 YMYL actif identifié par l'audit #53) : âge d'admissibilité corrigé de 60 à 65 ans (depuis 2025), montant maximal corrigé de 1 650 $ à 1 786 $, taux/seuil/plafond alignés sur le ledger déjà gouverné impots-revenus-retraite-quebec-2026. Aucun module finance-2026 dédié; ledger seul, schéma classique.",
  },
  {
    slug: "credit-impot-handicap-canada-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-impot-handicap-canada-2026.tsx",
    ledgerFile: "docs/claims/credit-impot-handicap-canada-2026.md",
    criticality: "medium",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #83 : l'article publiait les montants de base 2023 (9 428 $/5 500 $) sous le libellé « 2026 », jamais mis à jour depuis; corrigés à 10 341 $/6 032 $ (chaîne d'indexation 2023→2026 recoupée), taux fédéral de calcul corrigé de 15 % à 14 % (déjà gouverné ailleurs dans ce dépôt). REEI reformulé pour éviter l'ambiguïté 70 000 $ (SCEI) + 20 000 $ (BCEI) = 90 000 $ combinés, pas 110 000 $. Nommage PCT→ACT corrigé (déjà appliqué à un autre article, issue #81); montant du supplément ACT corrigé de 784 $ à 860 $. Supplément ACE (3 480 $) confirmé inchangé via le module déjà gouverné family-training-rules-2026.ts.",
  },
  {
    slug: "prestation-dentaire-canadienne-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/prestation-dentaire-canadienne-2026.tsx",
    ledgerFile: "docs/claims/prestation-dentaire-canadienne-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #81 : correction prioritaire d'un numéro de téléphone erroné (associé à des tentatives de fraude imitant le programme), correction de la structure du tableau de coassurance (taux unique par palier de revenu, pas par catégorie de soin), reclassement des couronnes hors des prothèses, et mise à jour du parcours d'inscription (demande directe via Service Canada depuis 2026, sans invitation requise). Aucun module finance-2026 dédié; ledger seul.",
  },
  {
    slug: "credit-impot-aidants-naturels-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-impot-aidants-naturels-2026.tsx",
    ledgerFile: "docs/claims/credit-impot-aidants-naturels-2026.md",
    criticality: "medium",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #83 : constat majeur, le crédit québécois a été restructuré depuis la version décrite (3 tiers par lien de parenté à 868 $/1 383 $/1 112 $, ancienne structure) en un crédit à deux volets par âge/condition de la personne aidée (volet 1 : proche 18+ avec déficience, jusqu'à 3 050 $; volet 2 : proche 70+, 1 525 $), déjà gouverné dans programmes.json (credit-aidant-naturel-qc, issue #51) et repris ici sans deuxième vérité. Seuil de réduction de l'ancienne structure (25 000 $) retiré faute de confirmation sous la structure actuelle plutôt que republié sans preuve. Durée de cohabitation corrigée (365 jours/183 jours, pas « la moitié de l'année »). Prestations AE pour proches aidants distinguées par durée réelle (15/26/35 semaines selon le cas, pas 35 semaines pour tous les cas). Renvoi croisé au crédit maintien à domicile corrigé pour cohérence avec le ledger déjà gouverné credit-impot-maintien-domicile-2026.md (7 800 $/10 200 $, pas 6 000 $).",
  },
  {
    slug: "credit-impot-prime-travail-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/credit-impot-prime-travail-2026.tsx",
    ledgerFile: "docs/claims/credit-impot-prime-travail-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2026-12-15",
    scopeNote:
      "Gouverné par l'issue #81 : montants par situation familiale non confirmables de façon fiable (sources secondaires mutuellement contradictoires, risque de contamination avec des mesures voisines) et retirés du tableau statique sauf le montant du couple avec enfant, corroboré par une source spécialisée (CFFP); numéro de formulaire de versements anticipés corrigé (TPZ-1029.8.P plutôt que TP-1015.3); toute mention de « Prestation canadienne pour les travailleurs (PCT) » corrigée en « Allocation canadienne pour les travailleurs (ACT) ». Aucun module finance-2026 dédié; ledger seul.",
  },
  {
    slug: "reer-vs-celi-lequel-choisir-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/reer-vs-celi-lequel-choisir-2026.tsx",
    ledgerFile: "docs/claims/reer-vs-celi-lequel-choisir-2026.md",
    criticality: "medium",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #83 : plafonds 2025 republiés sous le libellé « 2026 » (CELI 102 000 $ cumulé, REER 32 490 $) corrigés aux valeurs 2026 réelles (109 000 $ cumulé, 33 810 $). Taux marginaux des exemples chiffrés (Marie, Jean) recalculés avec le calculateur fiscal déjà gouverné tax-calculator.ts (52 %→36 %, 40 %→31 %, 38 %→26 %) : les valeurs d'origine correspondaient à un palier d'imposition bien plus élevé que celui des profils décrits. Aucun module finance-2026 dédié aux plafonds CELI/REER; ledger seul, schéma classique.",
  },
  {
    slug: "allocation-logement-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/allocation-logement-quebec-2026.tsx",
    ledgerFile: "docs/claims/allocation-logement-quebec-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2026-10-15",
    scopeNote:
      "Gouverné par l'issue #81 : deux erreurs directes corrigées (critère d'admissibilité alternatif « limitation fonctionnelle » inexistant, remplacé par le vrai critère « enfant à charge »; organisme administrateur corrigé de Retraite Québec, sans lien avec ce programme, à Revenu Québec). Seuils de revenu, structure à trois paliers fixes (100 $/150 $/170 $) et plafond d'épargne de 50 000 $ corrigés. Défaut du moteur de correspondance corrigé (critère locataire-seulement excluant à tort les propriétaires admissibles). Aucun module finance-2026 dédié; ledger seul.",
  },
  {
    slug: "renoclimat-2026-guide-complet",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/renoclimat-2026-guide-complet.tsx",
    ledgerFile: "docs/claims/renoclimat-2026-guide-complet.md",
    criticality: "medium",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #83 : attribution à « Transition énergétique Québec (TEQ) », entité dissoute depuis 2020-2022, corrigée; plafond de 10 000 $ aligné sur la valeur déjà gouvernée de programmes.json (jusqu'à 20 000 $, issue #51, marquée « à vérifier » dans le dataset et reprise avec la même réserve ici plutôt qu'une deuxième vérité). Cumul LogisVert (jusqu'à 6 700 $) confirmé actif en 2026. Condition « maison construite avant 2012 » confirmée inchangée via la valeur déjà gouvernée de programmes.json plutôt qu'une valeur contradictoire trouvée isolément.",
  },
  {
    slug: "rap-reer-premier-acheteur-quebec-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/rap-reer-premier-acheteur-quebec-2026.tsx",
    ledgerFile: "docs/claims/rap-reer-premier-acheteur-quebec-2026.md",
    criticality: "medium",
    status: "governed",
    nextReviewAt: "2026-12-01",
    scopeNote:
      "Gouverné par l'issue #83 : plafond de 60 000 $ confirmé exact (déjà cohérent avec programmes.json, issue #51), mais délai de remboursement corrigé (premier versement dû pendant la 2e année suivant le retrait ou dans les 60 premiers jours de l'année suivante, pas « jusqu'au 60e jour de la 2e année »); allègement temporaire 2022-2025 (report à la 5e année) ajouté avec précision qu'il ne s'applique pas à un retrait fait en 2026. Aucun module finance-2026 dédié; ledger seul, schéma classique.",
  },
  {
    slug: "prestation-canadienne-travailleurs-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/prestation-canadienne-travailleurs-2026.tsx",
    ledgerFile: "docs/claims/prestation-canadienne-travailleurs-2026.md",
    criticality: "high",
    status: "governed",
    nextReviewAt: "2027-01-15",
    scopeNote:
      "Gouverné par l'issue #81 : nom du programme corrigé (« Prestation canadienne pour les travailleurs / PCT » n'est plus le nom officiel depuis 2019; renommé « Allocation canadienne pour les travailleurs / ACT »); montants alignés sur ceux déjà utilisés par le moteur de correspondance pour le Québec (programmes.json, entrée allocation-travailleurs-fed) plutôt que sur des montants génériques du reste du Canada. Aucun module finance-2026 dédié; ledger seul.",
  },
  {
    slug: "allocation-famille-quebec-calcul-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/allocation-famille-quebec-calcul-2026.tsx",
    ledgerFile: "docs/claims/allocation-famille-quebec-calcul-2026.md",
    datasetModule: "src/data/finance-2026/family-training-rules-2026.ts",
    criticality: "high",
    status: "governed",
    scopeNote:
      "Gouverné par l'issue #81 : montants de base et supplément monoparental déjà corrects, confirmés via le module partagé family-training-rules-2026.ts (quebecFamilyAllowance) plutôt qu'une deuxième vérité. Supplément pour enfant handicapé corrigé (239 $ -> 241 $/mois) et ajouté au module comme disabilitySupplementMonthly. Exemple chiffré final retiré pour incohérence interne (contredisait ses propres mentions « à vérifier »).",
  },
  {
    slug: "reno-adaptation-programme-2026",
    kind: "blog-article",
    articleFile: "src/data/blog/entries/reno-adaptation-programme-2026.tsx",
    ledgerFile: "docs/claims/reno-adaptation-programme-2026.md",
    criticality: "medium",
    status: "governed",
    nextReviewAt: "2026-11-01",
    scopeNote:
      "Gouverné par l'issue #83 : constat majeur, le programme (nom officiel actuel « Programme d'adaptation de domicile / PAD », l'article utilise l'ancien nom « Réno-Adaptation ») a été suspendu aux nouvelles inscriptions du 2025-04-01 au 2026-08-12 par la SHQ, réouvert depuis via un nouveau formulaire en ligne; l'article, publié sans cette mention, présentait une démarche continue et une procédure municipale/OSBL désormais obsolète. Montant maximal de 16 000 $ confirmé inchangé via la valeur déjà gouvernée de programmes.json (adaptation-domicile-shq, issue #51). Revue rapprochée au 2026-11-01 plutôt que 2026-12-01, la reprise étant très récente.",
  },
];
