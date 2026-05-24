# Progression des competences ArgentQC

Ce document transforme les constats des revues recentes en pratiques concretes a renforcer. Il sert de checklist avant de lancer Codex sur les zones sensibles du projet.

## 1. Tests Playwright pour pages financieres interactives

### Evidence recente

- Le calculateur `/impots/calculateur-economies-fiscales` a ajoute une logique fiscale visible par l'utilisateur.
- Les revues du 19, 20, 21 et 23 mai ont note que les tests unitaires couvrent `src/lib/tax-calculator.ts`, mais pas le rendu ni l'interaction du composant client.
- Le refactor fiscal a deja cause une erreur TypeScript quand des fonctions locales sont restees dans le composant apres extraction de la lib.

### Standard a appliquer

Pour chaque calculateur, ajouter au moins un test Playwright qui couvre:

1. la route repond en HTTP 200;
2. le H1 ou titre principal confirme la bonne page;
3. un controle utilisateur change un etat visible;
4. le resultat principal reste visible apres interaction;
5. un lien de sortie vers le tunnel de decision existe.

### Heuristique de cout

- Cible minimale: 2 a 4 tests dans `tests/smoke.spec.ts`.
- Ne pas tester tous les chiffres au pixel pres dans Playwright; les calculs exacts restent en tests unitaires.
- Preferer des selecteurs accessibles (`getByRole`, labels, ids stables) aux chemins DOM.

### Prompt Codex recommande

```text
Ajoute un smoke test Playwright cible pour [route du calculateur].
Ne modifie pas la logique applicative. Verifie HTTP 200, H1, interaction d'un controle, resultat visible, et lien de sortie vers questionnaire/comparateur. Lance le test cible si l'arbre de travail est propre; sinon explique le blocage.
```

## 2. Validation source-backed des donnees financieres

### Evidence recente

- Les paliers 2026 dans `src/lib/tax-calculator.ts` sont documentes, mais les revues du 21 et du 23 mai demandent encore une validation manuelle contre ARC et Revenu Quebec.
- Le site manipule des montants et seuils qui influencent les recommandations REER/CELI, les guides fiscaux et les pages SEO.
- Les docs `docs/data-reliability-2026.md` et `docs/data-update-guide-2026.md` existent deja, mais le calculateur fiscal doit etre relie explicitement a cette discipline.

### Standard a appliquer

Pour chaque valeur financiere sensible:

1. declarer la valeur dans un module central ou une lib dediee;
2. conserver une URL source officielle proche de la constante;
3. noter `year`, `lastUpdated`, `status` quand la donnee vient d'un dataset;
4. ajouter un test qui protege au moins une valeur frontiere;
5. relire la copie UI pour distinguer valeur officielle, estimation et exemple editorial.

### Donnees a verifier en premier

- Paliers federaux 2026: `58_523`, `117_045`, `181_440`, `258_482`.
- Abattement Quebec: `FEDERAL_QUEBEC_ABATEMENT = 0.835`.
- Paliers Quebec 2026: `54_345`, `108_680`, `132_245`.
- Taux Quebec du dernier palier: `0.2575`.

### Prompt Codex recommande

```text
Verifie les donnees fiscales 2026 utilisees par `src/lib/tax-calculator.ts`.
Ancre chaque constante a une source officielle existante dans les commentaires ou docs, ajoute ou ajuste des tests unitaires pour les frontieres de paliers, et ne change pas les valeurs sans preuve explicite dans le rapport final.
```

## 3. Refactors larges en lots atomiques

### Evidence recente

- La revue du 24 mai a signale 77 fichiers locaux modifies dans un refactor i18n `/fr`.
- Les changements touchent routes, liens, analytics, composants localises et tests, ce qui multiplie les risques de melange entre migration, nettoyage et correction.
- Le repo est actuellement en retard d'un commit sur `origin/main`, donc tout refactor large doit commencer par une decision explicite: conserver, finir, stasher ou restaurer.

### Standard a appliquer

Avant un refactor de plus de 10 fichiers:

1. capturer `git status --short --branch`;
2. decrire le but en une phrase testable;
3. etablir une matrice des fichiers/routes touches;
4. faire une tranche verticale complete plutot qu'une substitution globale;
5. lancer `npm run test:unit` et le smoke cible apres chaque tranche;
6. committer ou documenter le checkpoint avant de commencer une deuxieme tranche.

### Anti-patterns a eviter

- Rewriting global de liens, analytics et routes dans la meme passe.
- Modifier les tests avant que la route cible compile.
- Ajouter des redirects permanents sans verifier sitemap, canonical et smoke.
- Laisser une branche locale en retard pendant une migration de routes.

### Prompt Codex recommande

```text
Prepare une migration atomique pour [objectif].
Commence par status + diff stat. Propose une tranche de moins de 10 fichiers, liste les routes touchees, puis implemente uniquement cette tranche. Lance les tests cibles et arrete avant toute deuxieme tranche.
```

## 4. Discipline SEO/i18n pour migrations de routes

### Evidence recente

- Les commits recents ont ajoute des canoniques retraite, une redirection `/strategies/reer-vs-celi` vers `/retraite/reer-vs-celi`, puis une migration locale vers des liens `/fr/*`.
- `tests/smoke.spec.ts` couvre deja plusieurs routes SEO, mais les migrations i18n exigent une matrice plus explicite.
- Les liens internes, `src/data/seo-pages.ts`, `src/app/sitemap.ts`, les pages `[locale]` et le middleware peuvent diverger si la migration est faite par remplacement texte.

### Matrice obligatoire par route

| Champ | Question |
| --- | --- |
| Route source | Quelle ancienne URL reste accessible? |
| Route cible | Quelle URL canonique doit etre indexee? |
| Redirect | 307 temporaire ou 308 permanent? Pourquoi? |
| Canonical | Quelle URL apparait dans `metadata.alternates.canonical`? |
| Sitemap | La route indexable est-elle presente une seule fois? |
| Liens internes | Les hubs et CTAs pointent-ils vers la cible choisie? |
| Test | Quel smoke test prouve le comportement? |

### Prompt Codex recommande

```text
Pour la migration SEO/i18n de [route ou cluster], construis d'abord une matrice old URL -> new URL -> canonical -> sitemap -> smoke test. Ne change les fichiers qu'apres la matrice. Evite les redirects permanents tant que la route cible n'est pas stabilisee et testee.
```

## Priorite actuelle

Priorite no1: renforcer Playwright sur les calculateurs financiers.

Raison: le cout est bas, le changement est local, et le benefice est immediat pour eviter les regressions visibles sur les pages qui manipulent des resultats financiers. Cette competence protege aussi les trois autres: les donnees source-backed, les refactors atomiques et les migrations SEO/i18n finissent tous par avoir besoin d'un test utilisateur qui confirme que la page fonctionne.

