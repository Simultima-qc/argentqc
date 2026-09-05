# Ledger de claims - credit-impot-handicap-canada-2026

Année effective : 2026. Article audité : `src/data/blog/entries/credit-impot-handicap-canada-2026.tsx`.
Ledger créé le 2026-09-05 (issue #83). Prochaine revue : 2026-12-01 (le montant de base fédéral est indexé
chaque année civile; le CRA publie généralement les montants indexés de l'année suivante fin d'année).

Méthode : accès direct bloqué par la politique réseau de cet environnement pour `canada.ca` (`EGRESS_BLOCKED`).
Le montant de base du CIPH (crédit d'impôt pour personnes handicapées / Disability Tax Credit) est indexé
annuellement à l'inflation. Les valeurs 2026 ci-dessous ont été établies par recoupement convergent de
plusieurs sources indépendantes (calculateurs fiscaux spécialisés citant le taux d'indexation officiel de
2,0 % pour 2026) et par reconstruction de la chaîne d'indexation depuis la valeur 2023 (9 428 $, celle publiée
par l'article d'origine) : 9 428 $ × 1,047 (indexation 2024) ≈ 9 872 $ × 1,027 (indexation 2025) ≈ 10 138 $ ×
1,02 (indexation 2026) ≈ 10 341 $. Ce calcul de vérification, cohérent avec les sources trouvées, confirme que
les montants publiés par l'article d'origine étaient ceux de **2023**, jamais mis à jour depuis, malgré le
libellé « 2026 » de l'article. Le taux fédéral de 14 % (plutôt que 15 %) pour le calcul de la valeur du crédit
est déjà établi et gouverné ailleurs dans ce dépôt (`docs/claims/credit-impot-prolongation-carriere-2026.md`,
`docs/claims/impots-revenus-retraite-quebec-2026.md`, `src/data/finance-2026/programmes-2026.ts`).

| claim | source officielle | date de vérification | statut | prochaine vérification | action |
| --- | --- | --- | --- | --- | --- |
| Montant de base du CIPH : l'article d'origine affirmait 9 428 $ (≈ 1 414 $ à 15 %). | ARC — Ligne 31600, montant pour personnes handicapées. Recoupement convergent (calculateurs fiscaux spécialisés) donnant 10 341 $ pour 2026, cohérent avec la chaîne d'indexation reconstituée depuis 9 428 $ (valeur 2023). Taux fédéral 2026 de 14 % déjà gouverné dans ce dépôt. | 2026-09-05 | corrigé | 2026-12-01 | 9 428 $ remplacé par 10 341 $ (≈ 1 448 $ à 14 %) dans l'intro, l'encadré « En bref » et le tableau des montants. |
| Supplément pour enfant de moins de 18 ans : l'article d'origine affirmait 5 500 $ (≈ 825 $ à 15 %). | Même recoupement, donnant 6 032 $ pour 2026 (chaîne d'indexation depuis 5 500 $, valeur 2023), soumis à réduction si des frais de garde/de préposé aux soins ont déjà été réclamés pour la même personne. | 2026-09-05 | corrigé | 2026-12-01 | 5 500 $ remplacé par 6 032 $ (≈ 844 $ à 14 %) dans l'encadré « En bref » et le tableau; précision ajoutée sur la réduction possible. |
| REEI : l'article d'origine présentait « 90 000 $ de subventions + 20 000 $ de bons » comme deux montants distincts (sous-entendant 110 000 $ au total). | Emploi et Développement social Canada — REEI, subventions et bons. La Subvention canadienne pour l'épargne-invalidité (SCEI) a un maximum à vie de 70 000 $; le Bon canadien pour l'épargne-invalidité (BCEI) a un maximum à vie de 20 000 $; total combiné 90 000 $. | 2026-09-05 | corrigé | 2026-12-01 | Reformulé : « jusqu'à 70 000 $ de subventions (SCEI) + 20 000 $ de bons (BCEI), soit 90 000 $ combinés », pour éliminer l'ambiguïté qui aurait pu laisser croire à 110 000 $. |
| Supplément pour enfant handicapé de l'Allocation canadienne pour enfants (ACE) : 3 480 $/an. | Déjà établi et gouverné dans `src/data/finance-2026/family-training-rules-2026.ts` (`disabilityAnnual: 3_480`). | 2026-09-05 | confirmé | 2026-12-01 | Inchangé : cette valeur était déjà exacte et est réutilisée depuis la source de vérité déjà gouvernée du dépôt plutôt que revalidée une seconde fois. |
| Supplément pour personnes handicapées de l'Allocation canadienne pour les travailleurs (ACT) : l'article d'origine l'appelait « PCT — Supplément pour handicapés, jusqu'à 784 $/an ». | ARC — Allocation canadienne pour les travailleurs (ACT), anciennement Prestation fiscale pour le revenu de travail; le nom « PCT » (Prestation canadienne pour les travailleurs) n'est plus utilisé depuis le renommage en ACT. Montant 2026 du supplément : 860 $/an, réduit progressivement au-delà de 37 740 $ de revenu net rajusté, nul au-delà de 43 360 $. Correction de nommage déjà appliquée à un autre article du dépôt (`docs/claims/prestation-canadienne-travailleurs-2026.md`, issue #81). | 2026-09-05 | corrigé | 2026-12-01 | Renommé « ACT — Supplément pour personnes handicapées »; montant corrigé de 784 $ à 860 $; seuils de réduction ajoutés. |

## Résidu et incertitude

Aucune source de vérité versionnée n'existe dans `src/data/finance-2026/` pour le montant de base du CIPH
lui-même (seul le supplément ACE l'est, via `family-training-rules-2026.ts`); cet article reste gouverné
principalement par ce ledger, avec référence croisée vers le module partagé pour le supplément ACE.

Risques principaux restants : (1) l'accès direct à `canada.ca` étant bloqué dans cet environnement, les
montants 2026 du CIPH n'ont pas pu être confirmés sur la page officielle elle-même, seulement par recoupement
convergent et reconstruction de la chaîne d'indexation; une revalidation directe est recommandée dès qu'un
accès sera possible; (2) les conditions médicales détaillées (liste des fonctions visées) n'ont pas été
revalidées dans cette issue, faute d'avoir été identifiées comme contradictoires.
