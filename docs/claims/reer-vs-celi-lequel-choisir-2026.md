# Ledger de claims - reer-vs-celi-lequel-choisir-2026

Année effective : 2026. Article audité : `src/data/blog/entries/reer-vs-celi-lequel-choisir-2026.tsx`.
Ledger créé le 2026-09-05 (issue #83). Prochaine revue : 2026-12-01 (les plafonds CELI/REER de l'année
suivante sont généralement annoncés par l'ARC en fin d'année civile; cette revue permet de vérifier qu'aucune
annonce anticipée ne rend les montants 2026 caducs avant la fin de l'année).

Méthode : accès direct bloqué par la politique réseau de cet environnement pour `canada.ca` (`EGRESS_BLOCKED`).
Les plafonds ci-dessous sont recoupés sur plusieurs sources convergentes (RBC, BMO, Fidelity, Retraite101,
Finance et Investissement) citant explicitement les montants officiels publiés par l'ARC pour l'année
d'imposition 2026. Les taux marginaux des exemples chiffrés ont été recalculés avec le calculateur fiscal déjà
gouverné du dépôt (`src/lib/tax-calculator.ts`, paliers fédéraux/Québec 2026 revalidés à l'issue #45).

| claim | source officielle | date de vérification | statut | prochaine vérification | action |
| --- | --- | --- | --- | --- | --- |
| Plafond CELI 2026 de 7 000 $/an. | ARC — plafond de cotisation CELI 2026, inchangé depuis 2024 (l'indexation à l'inflation, arrondie au 500 $ près, n'a pas fait franchir de nouveau palier). Confirmé par recoupement convergent (Retraite101, Conseiller, RBC). | 2026-09-05 | confirmé | 2026-12-01 | Inchangé, précision ajoutée sur la raison de la stabilité du plafond. |
| Cumul CELI total possible : l'article d'origine affirmait « jusqu'à 102 000 $ » (valeur exacte pour 2025, mais périmée pour 2026). | ARC : cumul de 109 000 $ pour une personne admissible depuis 2009 et n'ayant jamais cotisé, une fois le plafond 2026 de 7 000 $ ajouté aux 102 000 $ cumulés jusqu'en 2025. Confirmé par recoupement convergent. | 2026-09-05 | corrigé | 2026-12-01 | 102 000 $ remplacé par 109 000 $ dans l'encadré « En bref » et le tableau des plafonds. |
| Plafond REER 2026 : l'article d'origine affirmait « max 32 490 $ » (valeur exacte pour l'année d'imposition 2025, mais périmée pour 2026). | ARC : plafond REER 2026 (18 % du revenu gagné de 2025, jusqu'à un maximum) de 33 810 $. Confirmé par recoupement convergent (Questrade, Globe and Mail, Yahoo Finance Canada citant les nouveaux chiffres fiscaux 2026 de l'ARC). | 2026-09-05 | corrigé | 2026-12-01 | 32 490 $ remplacé par 33 810 $ dans l'encadré « En bref » et le tableau des plafonds; précision ajoutée que le 18 % s'applique au revenu gagné de l'année précédente (2025 pour une cotisation 2026). |
| Exemple chiffré de Marie (95 000 $/an) : l'article d'origine affirmait un taux marginal québécois d'« environ 52 % », réduit à « environ 40 % » à la retraite avec 55 000 $. | Calcul avec `src/lib/tax-calculator.ts` (paliers fédéraux après abattement québécois + paliers Québec 2026, déjà gouvernés issue #45) : taux marginal combiné à 95 000 $ ≈ 36 % (fédéral 20,5 % × abattement 83,5 % ≈ 17,1 % + Québec 19 %); à 55 000 $ ≈ 31 %. Le taux de 52 % ne s'applique qu'à un revenu imposable bien plus élevé (proche du dernier palier). | 2026-09-05 | corrigé | 2026-12-01 | 52 % remplacé par ≈ 36 %, 40 % remplacé par ≈ 31 %, et l'économie d'impôt immédiate recalculée en conséquence (≈ 360 $ par 1 000 $ cotisé plutôt que ≈ 520 $). |
| Exemple chiffré de Jean (42 000 $/an) : l'article d'origine affirmait un taux marginal d'« environ 38 % ». | Même calculateur : taux marginal combiné à 42 000 $ ≈ 26 % (fédéral 14 % × abattement 83,5 % ≈ 11,7 % + Québec 14 %). | 2026-09-05 | corrigé | 2026-12-01 | 38 % remplacé par ≈ 26 %. |
| Exemple qualitatif de Claire (58 ans, 28 000 $/an, CELI exclusivement en raison de l'impact potentiel sur le SRG). | Non chiffré précisément par l'article d'origine; logique qualitative (retraits REER imposables pouvant réduire le SRG) non contredite par cet audit. | 2026-09-05 | confirmé (non chiffré) | 2026-12-01 | Inchangé. |

## Résidu et incertitude

Aucune source de vérité versionnée n'existe dans `src/data/finance-2026/` pour les plafonds CELI/REER
eux-mêmes; cet article reste gouverné par ce ledger seul pour ces plafonds, avec réutilisation du calculateur
fiscal déjà gouverné (`src/lib/tax-calculator.ts`) pour les taux marginaux des exemples chiffrés plutôt qu'un
recalcul indépendant.

Risque principal restant : les seuils de récupération du SRG et de la PSV mentionnés qualitativement dans
l'article ne sont pas chiffrés ici; ils sont déjà gouvernés séparément dans
`docs/claims/securite-vieillesse-quebec-2026.md` et `docs/claims/supplement-revenu-garanti-2026.md`, non
dupliqués dans ce ledger.
