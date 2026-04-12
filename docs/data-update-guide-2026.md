# Guide de mise a jour editoriale 2026

## Ou modifier une valeur

- Internet: `src/data/finance-2026/internet-offers-2026.ts`
- Assurances: `src/data/finance-2026/insurance-2026.ts`
- Impots: `src/data/finance-2026/tax-2026.ts`
- Retraite: `src/data/finance-2026/retirement-2026.ts`
- Programmes: `src/data/programmes.json` puis validation via `src/data/finance-2026/programmes-2026.ts`

## Procedure

1. Modifier la valeur dans le module 2026 du domaine
2. Mettre a jour `meta.lastUpdated`
3. Ajuster `meta.status` si la valeur devient une estimation ou une donnee editoriale
4. Completer `meta.sourceNote` si la provenance change
5. Verifier les pages qui consomment ce module
6. Lancer `npm run build`

## Regles editoriales

- Une valeur officielle ne doit pas etre reformulee comme une estimation
- Une estimation doit etre explicite dans le dataset ou dans la copie affichée
- Ne pas copier un chiffre depuis une page vers un article si le module 2026 existe deja
- Ne pas modifier plusieurs pages a la main pour une meme valeur sensible

## Checklist rapide

- La valeur a-t-elle un point de mise a jour unique ?
- La date `lastUpdated` est-elle correcte ?
- Le statut de fiabilite est-il coherent ?
- Les CTA, comparateurs et guides racontent-ils la meme chose ?
