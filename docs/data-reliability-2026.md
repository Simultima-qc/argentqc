# Fiabilite des donnees 2026

## Objectif

Centraliser les valeurs 2026 sensibles pour reduire les ecarts entre guides, comparateurs, calculateurs, CTA et dataset des programmes.

## Source centrale

- `src/data/finance-2026/schema.ts`
- `src/data/finance-2026/internet-offers-2026.ts`
- `src/data/finance-2026/insurance-2026.ts`
- `src/data/finance-2026/tax-2026.ts`
- `src/data/finance-2026/retirement-2026.ts`
- `src/data/finance-2026/programmes-2026.ts`

## Conventions 2026

- Un domaine sensible = un module `*-2026.ts`
- Chaque dataset expose `meta.year`, `meta.lastUpdated`, `meta.status`, `meta.sourceNote`
- `status` doit etre `official`, `estimate` ou `editorial`
- Une valeur de nature estimative doit rester dans un module 2026, jamais dispersee dans plusieurs pages
- Les pages doivent importer des structures depuis `@/data/finance-2026`

## Inventaire initial par domaine

### Internet

- `src/app/internet/comparateur/ComparateurInternetClient.tsx`
- Risque: prix mensuels, vitesse, frais modem, contrat, couverture regionale
- Etat: branche sur `internet-offers-2026.ts`

### Assurances

- `src/app/assurances/comparateur/ComparateurClient.tsx`
- Risque: fourchettes de prix, multiplicateurs d'estimation, profils region/age/usage
- Etat: branche sur `insurance-2026.ts`

### Fiscalite

- `src/app/impots/dates/page.tsx`
- Risque: dates limites, penalites, delais, calendrier fiscal
- Etat: branche sur `tax-2026.ts`

### Retraite

- `src/app/retraite/rrq/page.tsx`
- Risque: montants RRQ, comparaison RRQ/RPC, cotisations et hypotheses de rente
- Etat: branche sur `retirement-2026.ts`

### Programmes

- `src/data/programmes.json`
- `src/lib/matching.ts`
- Risque: montants, seuils, admissibilite, liens officiels, dates de programme
- Etat: charge via `programmes-2026.ts` avec validation minimale d'IDs et champs requis

### Blog et guides recurrents

- `src/data/blog/entries/*.tsx`
- Risque: duplication de montants RRQ, SV, RAP, Rénoclimat, frais de garde, etc.
- Etat: inventaire confirme, refactor complet encore a faire

## Gouvernance de fraicheur et de couverture (issue #28)

- `DataSourceMeta` (schema.ts) exige desormais aussi `nextReviewAt`, `criticality` (`critical`/`high`/`medium`) et un `staleException?` optionnel, valides a la construction de chaque dataset.
- Le registre central `src/data/finance-2026/claims-registry.mjs` relie chaque ledger de `docs/claims/` et chaque article financier sensible a son etat de gouvernance (`governed` ou `explicitly-out-of-scope`), et est recoupe automatiquement avec le systeme de fichiers par `npm run check:seo`.
- La politique de fraicheur executable (bloquant/avertissement/exception) est implementee dans `scripts/lib/claims-freshness.mjs`, avec une horloge injectable (`ARGENTQC_FRESHNESS_NOW`) pour des tests deterministes. Voir `tests/claims-freshness.test.mjs` et `tests/finance-2026-schema.test.mjs`.

### Alerte proactive de fraicheur (issue #64)

- En plus du mecanisme bloquant existant (qui ne reagit qu'une fois `nextReviewAt` atteinte ou depassee), `scripts/lib/claims-freshness.mjs` expose `evaluateUpcomingReview`, qui emet un **avertissement non bloquant** des qu'une claim/surface approche de sa `nextReviewAt`.
- Fenetre par defaut : **J-30**, centralisee dans la constante exportee `UPCOMING_REVIEW_WARNING_DAYS`. Meme fenetre pour toutes les criticites (`critical`/`high`/`medium`) : c'est une visibilite informative, pas un changement de politique de blocage.
- `npm run check:seo` appelle cette fonction pour chaque dataset finance-2026 et chaque entree de registre gouvernee sans module dedie, et affiche le resultat dans le meme bloc `Claims freshness warnings (non-blocking, N)` que les avertissements existants (fraicheur haute/medium depassee, derive d'annee). Chaque ligne identifie la claim/surface, la date `nextReviewAt` et le nombre de jours restants.
- Une claim non echue en dehors de la fenetre de 30 jours n'est **jamais** traitee comme `stale` ni averti : `evaluateUpcomingReview` reste silencieux tant qu'il reste plus de 30 jours.
- Des que `nextReviewAt` est atteinte ou depassee, l'alerte proactive s'efface d'elle-meme (elle est exclusivement pre-echeance) et la politique bloquante existante (`evaluateCalendarStatus`) prend seule le relais : une claim `critical` depassee reste bloquante, une claim `high`/`medium` depassee reste un avertissement non bloquant, sans aucun changement de comportement.
- `staleException` garde exactement sa semantique actuelle (couvre une echeance deja depassee sur une claim critique) ; elle ne doit jamais etre posee pour faire taire l'alerte proactive d'une echeance a venir normale.
- **Reaction attendue d'un mainteneur** face a l'avertissement : planifier/effectuer la revalidation source-backed de la claim concernee avant sa `nextReviewAt`, ou documenter une `staleException` justifiee si l'echeance est reellement depassee et non regularisable immediatement. L'avertissement seul ne bloque jamais `check:seo` ni `next build`.

## Prochaine tranche recommandee

1. Etendre le registre aux 17 articles actuellement `explicitly-out-of-scope`, en commencant par les plus denses (voir scopeNote de chaque entree)
2. Revalider humainement `tax-2026.ts`, `internet-offers-2026.ts`, `insurance-2026.ts` et `programmes-2026.ts`, actuellement en avertissement de fraicheur non bloquant
3. Remplacer progressivement les chiffres sensibles restants dans `src/app/*/page.tsx`
