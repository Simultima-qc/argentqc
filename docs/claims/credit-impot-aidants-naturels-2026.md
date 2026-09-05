# Ledger de claims - credit-impot-aidants-naturels-2026

Année effective : 2026. Article audité : `src/data/blog/entries/credit-impot-aidants-naturels-2026.tsx`.
Ledger créé le 2026-09-05 (issue #83). Prochaine revue : 2026-12-01.

## Constat majeur

Le crédit d'impôt québécois pour aidants a été **restructuré** depuis la version décrite par l'article
d'origine. L'article présentait une structure par lien de parenté (conjoint aidant à 868 $/1 383 $ selon le
niveau de soin, autre proche à 1 112 $) qui correspond à l'ancien « crédit d'impôt pour aidants naturels »
antérieur à la réforme. Le crédit actuel, renommé **« crédit d'impôt pour personnes aidantes »**, est structuré
en deux volets qui ne dépendent plus du lien de parenté avec la personne aidée, mais de son âge et de sa
condition :

- **Volet 1** : proche de 18 ans et plus ayant une déficience grave et prolongée — montant universel non
  réductible de 1 525 $ en cohabitation, plus un montant additionnel réductible pouvant atteindre 1 525 $ de
  plus (sans exigence de cohabitation pour ce second montant), soit jusqu'à 3 050 $ combinés en cohabitation.
- **Volet 2** : proche de 70 ans et plus (autre que le conjoint) en cohabitation, sans exigence de déficience —
  montant universel de 1 525 $.

Ceci n'est pas un simple ajustement de montants : c'est un changement de mécanique du crédit. L'article a été
réécrit en conséquence plutôt que de simplement remplacer les chiffres dans l'ancienne structure.

Méthode : accès direct bloqué par la politique réseau de cet environnement pour `revenuquebec.ca`
(`EGRESS_BLOCKED`). La structure et les montants 2026 ci-dessous sont recoupés sur plusieurs sources
convergentes (CFFP — Chaire en fiscalité et en finances publiques de l'Université de Sherbrooke, HR Block,
fiche de dépenses fiscales 110102 du ministère des Finances du Québec citée par ces sources) et confirmés par
la source déjà gouvernée `src/data/programmes.json` (entrée `credit-aidant-naturel-qc`, déjà nommée « Crédit
d'impôt pour personnes aidantes », déjà revalidée à l'issue #51/PR #52 avec les mêmes montants 1 525 $/3 050 $).

| claim | source officielle | date de vérification | statut | prochaine vérification | action |
| --- | --- | --- | --- | --- | --- |
| Structure et montants du crédit : l'article d'origine présentait 3 tiers par lien de parenté (868 $/1 383 $/1 112 $), correspondant à l'ancien crédit pour aidants naturels. | Ministère des Finances du Québec, fiche de dépenses fiscales 110102 (Crédit d'impôt remboursable pour les personnes aidantes), citée par CFFP et HR Block. Déjà gouverné dans `src/data/programmes.json` (`credit-aidant-naturel-qc`, issue #51) avec la même structure à deux volets et les mêmes montants (1 525 $ / 3 050 $). | 2026-09-05 | corrigé | 2026-12-01 | Structure réécrite en deux volets (proche 18+ avec déficience vs proche 70+ sans déficience); montants remplacés par 1 525 $ (universel) + jusqu'à 1 525 $ (additionnel réductible) = jusqu'à 3 050 $ (volet 1), 1 525 $ (volet 2). Réutilise la source de vérité déjà gouvernée du dépôt plutôt qu'une deuxième vérité indépendante. |
| Seuil de réduction du montant additionnel réductible : l'article d'origine affirmait un seuil de 25 000 $ de revenu de la personne aidée. | Ce seuil appartenait à l'ancienne structure du crédit; aucune source consultée dans cette issue n'a permis de confirmer avec certitude le seuil de réduction applicable à la structure actuelle en deux volets. | 2026-09-05 | incertain | 2026-12-01 | Le chiffre de 25 000 $ a été retiré plutôt que republié sans confirmation; l'article renvoie désormais le lecteur à Revenu Québec pour le seuil exact applicable à sa situation, conformément au principe de ne jamais transformer une valeur incertaine en certitude. |
| Formulaire d'attestation de déficience TP-752.0.14 et annexe H (ligne 462). | Revenu Québec — Attestation de déficience TP-752.0.14; Crédit d'impôt pour personne aidante (ligne 462). Numéro de formulaire et d'annexe inchangés sous la structure actuelle. | 2026-09-05 | confirmé | 2026-12-01 | Terminologie alignée sur « crédit pour personne aidante » plutôt que « crédits pour aidants naturels »; numéro de formulaire et de ligne inchangés. |
| Durée de cohabitation/aide requise : l'article d'origine exigeait « au moins la moitié de l'année ». | Revenu Québec : la période de cohabitation (ou d'aide fournie sans cohabitation pour le montant additionnel réductible) doit durer au moins 365 jours consécutifs, dont au moins 183 jours dans l'année d'imposition visée — pas simplement « la moitié de l'année civile ». | 2026-09-05 | corrigé | 2026-12-01 | Reformulé pour refléter la règle des 365 jours consécutifs / 183 jours dans l'année. |
| Prestations d'assurance-emploi pour proches aidants : l'article d'origine indiquait « jusqu'à 35 semaines pour prendre soin d'un proche gravement malade » sans distinction. | Service Canada — Prestations pour proches aidants de l'AE : trois programmes distincts — proche adulte (18 ans et plus) gravement malade : 15 semaines; enfant gravement malade de moins de 18 ans : 35 semaines; prestations de compassion (fin de vie, tout âge) : 26 semaines. Présenter 35 semaines comme le cas général pour « un proche » surestime l'entitlement typique (la majorité des situations d'aidance concernent un proche adulte, admissible à 15 semaines seulement). | 2026-09-05 | corrigé | 2026-12-01 | Reformulé pour distinguer les trois durées selon la situation, dans la section « Autres aides pour les proches aidants ». |
| Crédit d'impôt pour maintien à domicile référencé en aide complémentaire : l'article d'origine affirmait « jusqu'à 6 000 $ ». | Contredit directement le ledger déjà gouverné `docs/claims/credit-impot-maintien-domicile-2026.md` (issue #54), qui établit 7 800 $ (autonome) / 10 200 $ (non autonome) pour 2026. | 2026-09-05 | corrigé | 2026-12-01 | 6 000 $ remplacé par « 7 800 $ (aîné autonome) ou 10 200 $ (aîné non autonome) », aligné sur le ledger déjà gouverné plutôt que sur une valeur indépendante. |

## Résidu et incertitude

Aucune source de vérité versionnée n'existe dans `src/data/finance-2026/` pour ce crédit (contrairement à
`programmes.json`, qui n'est pas un module `finance-2026` mais un catalogue de programmes); cet article reste
gouverné par ce ledger, avec référence croisée vers `programmes.json` (`credit-aidant-naturel-qc`) et vers les
ledgers déjà gouvernés `credit-impot-maintien-domicile-2026.md`.

Risques principaux restants : (1) le seuil de réduction exact du montant additionnel réductible du volet 1
n'a pas pu être confirmé avec confiance et reste explicitement marqué incertain dans l'article; (2) les règles
détaillées applicables lorsque plusieurs personnes aidantes se partagent l'aide à un même proche n'ont pas été
revalidées dans cette issue, faute d'avoir été identifiées comme contradictoires; une revalidation directe est
recommandée dès qu'un accès à `revenuquebec.ca` sera possible depuis cet environnement.
