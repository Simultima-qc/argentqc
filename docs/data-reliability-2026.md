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

## Prochaine tranche recommandee

1. Extraire les montants repetes du blog vers des modules 2026 partages
2. Ajouter une verification CI pour echouer si un module 2026 a une date invalide
3. Remplacer progressivement les chiffres sensibles restants dans `src/app/*/page.tsx`
