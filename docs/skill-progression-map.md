# Progression des competences ArgentQC

Mise a jour: 14 juin 2026.

Cette carte s'appuie sur les commits `4f744d8`, `5895c4b`, `4c97f60` et `621c39f`, les revues du 8 au 14 juin, et l'etat courant du depot.

La priorite du 7 juin, les contrats Playwright pour les nouvelles routes SEO, est livree sur `origin/main` par `621c39f`. Les trois contrats passent, tout comme les 34 tests unitaires et le controle SEO sur 66 routes statiques et 13 articles.

## 1. Competence validee: clore une tranche jusqu'a son activation en CI

### Evidence recente

- Les revues des 12, 13 et 14 juin signalent les memes tests Playwright termines mais non commites.
- `621c39f` ajoute les contrats pour `/aide-sociale-quebec`, `/supplement-revenu-garanti-2026` et `/retraite/combien-cotiser-reer`.
- Les regex accentuees utilisent maintenant `[e\u00e9]` plutot qu'un point generique.
- Le fichier vide `.lock`, non trace et sans usage, a ete retire avant le commit.
- Le commit a ete rebase sans conflit sur trois nouveaux articles, puis pousse sans force sur `origin/main`.
- GitHub ne publie aucun status, check-run ou deployment pour ce commit; le declenchement Netlify n'est donc pas observable par l'API publique.

### Competence a approfondir

Transformer la definition de "termine" en boucle de livraison:

1. verifier le scope avec `git status` et `git diff`;
2. separer les changements utiles des artefacts temporaires;
3. lancer les controles proportionnes au changement;
4. creer un commit atomique qui nomme le comportement protege;
5. pousser le commit et verifier que la CI execute bien les nouveaux tests;
6. ne pas commencer une nouvelle tranche tant que la precedente reste uniquement locale.

### Resultat concret

- contrats Playwright: 3/3;
- tests unitaires: 34/34;
- controle SEO: 66 routes statiques et 13 articles;
- commit distant: `621c39f`;
- changement utilisateur dans `AGENTS.md`: preserve et exclu du commit.

### Critere de maitrise

Un controle termine ne reste pas plus d'une journee dans le working tree sans commit, blocage documente ou decision explicite d'abandon.

## 2. Validation editoriale source-backed des contenus financiers

### Evidence recente

- `4f744d8`, genere par ArgentQC Agent, publie 286 lignes sur l'assurance-emploi 2026.
- L'article affirme notamment `695 $/semaine`, `65 700 $/an`, `1,66 %` et `420 a 700 heures`.
- Les revues du 8, 13 et 14 juin repetent qu'aucune verification contre Service Canada n'est documentee.
- Le point est ouvert depuis la revue du 2 juin alors que la page est indexee.
- Les pages de `4c97f60` ciblent des recherches de montants 2026, ce qui augmente le cout d'une information obsolete ou non sourcee.
- `54f94f5`, `2b405ea` et `182820a` ajoutent trois autres articles financiers generes sur le RQAP, le credit TPS/TVH et la RRQ.

### Competence a approfondir

Construire une discipline de publication pour les affirmations a impact financier:

1. inventorier chaque montant, taux, plafond, delai et regle d'admissibilite;
2. associer une source officielle, une date de verification et une periode de validite;
3. distinguer valeur officielle, approximation, exemple et placeholder;
4. bloquer la publication lorsqu'une affirmation sensible n'est pas verifiable;
5. definir une date de revalidation pour les valeurs annuelles ou indexees.

### Exercice concret

Auditer d'abord:

- `src/data/blog/entries/assurance-emploi-guide-complet-2026.tsx`;
- `src/data/blog/entries/aide-sociale-quebec-2026.tsx`;
- `src/data/blog/entries/supplement-revenu-garanti-2026.tsx`.

Produire une table `affirmation -> source officielle -> date -> statut -> action`, puis corriger uniquement les affirmations confirmees.

### Critere de maitrise

Chaque article financier genere par agent possede une trace de verification exploitable avant publication, ou un statut editorial qui empeche sa mise en ligne.

## 3. Hygiene des avertissements React et Next.js

### Evidence recente

- Les contrats Playwright passent, mais le serveur emet `Received false for a non-boolean attribute locale`.
- La source est visible dans `src/components/LanguageSwitcher.tsx`, ou le `Link` de Next recoit `locale={false}`.
- Le meme run signale que la convention `middleware.ts` est depreciee au profit de `proxy`.
- Ces avertissements ne cassent pas encore les tests, donc ils peuvent rester invisibles jusqu'a une mise a niveau plus couteuse.

### Competence a approfondir

Traiter les avertissements d'execution comme une dette testable:

1. reproduire et localiser chaque avertissement;
2. verifier si la prop ou l'API appartient encore a la version courante du framework;
3. corriger par un petit changement isole;
4. ajouter une verification de console lorsque le risque de recurrence est eleve;
5. migrer les conventions de framework avant qu'elles deviennent des erreurs bloquantes.

### Critere de maitrise

Les smoke tests cibles passent sans avertissement React attribuable a l'application, et les deprecations Next connues ont un ticket ou une tranche de migration verifiee.

## 4. Utilitaire commun et testable pour le JSON-LD

### Evidence recente

- `4c97f60` a ajoute `FAQPage` dans trois composants avec une logique tres proche.
- La revue du 9 juin recommande d'extraire ce pattern duplique.
- Le depot contient de nombreux appels directs a `JSON.stringify` dans `dangerouslySetInnerHTML`.
- Les nouveaux tests prouvent que le JSON-LD est parseable et contient `FAQPage`, mais pas que la serialisation neutralise une fermeture de balise `</script>`.
- `SeoProgrammesPage` utilise toujours `key={paragraphe}`, egalement signale dans les revues.

### Competence a approfondir

Centraliser la generation de donnees structurees:

1. creer un helper `serializeJsonLd` qui echappe au minimum `<`;
2. tester une valeur contenant `</script>` et des caracteres atypiques;
3. migrer d'abord les trois composants modifies par `4c97f60`;
4. conserver les tests de rendu qui analysent le schema;
5. remplacer les cles React qui supposent le texte unique.

### Critere de maitrise

Les nouveaux composants n'implementent plus leur propre serialisation JSON-LD et la sortie du helper est protegee par un test unitaire hostile.

## 5. Gouvernance des routes localisees et canoniques

### Evidence recente

- `4c97f60` melange des guides francais sans prefixe et des routes sous `/fr`.
- Les revues du 9 juin signalent ce melange dans `priorityGuides`.
- Les canoniques, le sitemap, les liens internes et le middleware doivent rester coherents pour chaque route.
- Le warning actuel sur `LanguageSwitcher` confirme que la couche de navigation localisee merite une convention explicite.

### Competence a approfondir

Pour chaque nouvelle route, documenter avant implementation:

| Champ | Decision requise |
| --- | --- |
| Audience | FR seulement ou bilingue |
| URL indexable | route canonique unique |
| Variante locale | page, redirection ou absence assumee |
| Canonical | concorde avec l'URL indexable |
| Sitemap | contient seulement la route choisie |
| Liens internes | respectent la convention |
| Test | prouve route, redirection et canonical |

### Critere de maitrise

Une PR qui ajoute ou deplace une route SEO inclut cette matrice et son test de contrat.

## Priorite actuelle

Priorite no 1: validation editoriale source-backed des articles financiers generes.

Ratio cout/benefice:

- cout modere: commencer par un seul article et une table de verification;
- benefice eleve: reduit le risque de publier des montants, taux ou regles obsoletes;
- signal recurrent: l'article AE reste non verifie depuis le 2 juin;
- risque croissant: trois nouveaux articles financiers ont ete ajoutes le 14 juin;
- effet de levier: le format de preuve peut devenir la convention de tous les futurs articles agent.

## Prompt Codex recommande

```text
Dans le depot ArgentQC, audite les affirmations financieres de
`src/data/blog/entries/assurance-emploi-guide-complet-2026.tsx`
contre des sources officielles du gouvernement du Canada.

Commence par inventorier chaque montant, taux, plafond, nombre d'heures,
delai et regle d'admissibilite. Produis dans `docs/` une table:
`affirmation -> source officielle -> date de verification -> statut -> action`.

Regles:
1. utilise uniquement des sources officielles Canada.ca ou Service Canada;
2. distingue clairement valeur confirmee, approximation, exemple et affirmation non verifiable;
3. corrige le contenu seulement lorsqu'une source officielle contredit ou precise l'affirmation;
4. n'invente aucun remplacement pour une valeur non verifiable;
5. ajoute une date de prochaine verification pour les valeurs annuelles;
6. conserve les changements utilisateur existants et limite le commit a cet audit;
7. lance `npm run check:seo`, les tests pertinents et `git diff --check`.

Dans le rapport final, liste les affirmations corrigees, celles bloquees,
les URLs officielles consultees et les risques editoriaux restants.
```
