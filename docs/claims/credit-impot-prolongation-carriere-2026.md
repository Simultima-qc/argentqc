# Ledger de claims - credit-impot-prolongation-carriere-2026

Année effective : 2026. Article audité : `src/data/blog/entries/credit-impot-prolongation-carriere-2026.tsx`.
Ledger créé le 2026-09-03 (issue #54, suite au P1 identifié par l'audit #53) : l'article publiait des
règles/montants 2026 contredisant le ledger déjà gouverné `docs/claims/impots-revenus-retraite-quebec-2026.md`
(issue #43), qui reprend les mêmes paramètres primaires pour cette même mesure. Prochaine revue : 2026-12-01,
alignée sur la cadence des ledgers voisins (`fractionnement-revenu-retraite-2026.md`,
`impots-revenus-retraite-quebec-2026.md`).

Méthode : accès direct bloqué par la politique réseau de cet environnement pour `canada.ca`,
`revenuquebec.ca`, `budget.finances.gouv.qc.ca` et `cffp.recherche.usherbrooke.ca` (proxy de sortie,
erreur `EGRESS_BLOCKED`), comme pour les audits précédents (issues #34, #41, #43). Les valeurs 2026
ci-dessous ne sont pas revalidées de novo dans cette issue : elles réutilisent, sans les dupliquer
aveuglément, les paramètres primaires déjà établis et convergents (recoupement Avantages.ca,
Finance et Investissement, CFFP - Université de Sherbrooke, H&R Block, DT Max, ministère des Finances
du Québec - fiche 110903) et déjà intégrés au ledger `impots-revenus-retraite-quebec-2026.md` lors de
la revue indépendante de la PR #44 le 2026-09-03, conformément au principe de réutiliser une source de
vérité déjà gouvernée dans ce dépôt plutôt que d'en revalider une seconde fois la même donnée. Aucune
valeur n'a été inventée ou extrapolée sans confirmation convergente.

| claim | source officielle | date de vérification | statut | prochaine vérification | action |
| --- | --- | --- | --- | --- | --- |
| Âge d'admissibilité au crédit pour la prolongation de carrière : présenté par l'article d'origine comme « 60 ans et plus ». | Avantages.ca - « Québec reporte le crédit pour prolongation de carrière »; Finance et Investissement - « Québec révise le crédit d'impôt pour la prolongation de carrière »; CFFP - Université de Sherbrooke, Crédit d'impôt pour la prolongation de carrière, https://cffp.recherche.usherbrooke.ca/outils-ressources/guide-mesures-fiscales/credit-impot-prolongation-carriere/ ; recoupé H&R Block, DT Max et Revenu Québec (page du crédit). Convergence indépendante sur trois sources, déjà établie et gouvernée dans `impots-revenus-retraite-quebec-2026.md` (issue #43, 2026-09-03) : l'âge d'admissibilité a été relevé de 60 à 65 ans à compter de l'année d'imposition 2025; les 60-64 ans ne sont plus admissibles. | 2026-09-03 | corrigé | 2026-12-01 | « 60 ans et plus » remplacé par « 65 ans et plus (depuis l'année d'imposition 2025) » dans le résumé, l'encadré « En bref », la section d'admissibilité et le calcul, y compris dans `baseMetadata.title`/`keywords` et dans `article.titre`. |
| Montant maximal du crédit : présenté par l'article d'origine comme « jusqu'à 1 650 $ ». | Ministère des Finances du Québec - Dépenses fiscales 2025, fiche 110903, Crédit d'impôt pour la prolongation de carrière, https://www.budget.finances.gouv.qc.ca/Budget/outils/depenses-fiscales/fiches/fiche-110903.asp — paramètres 2026 : exclusion de 7 655 $, revenu de travail admissible plafonné à 12 755 $, taux du crédit 14 %, réduit de 7 % du revenu net au-delà de 57 660 $. Crédit maximal 2026 avant réduction = 14 % × 12 755 $ = 1 785,70 $, arrondi à 1 786 $ (calcul mécanique à partir des paramètres primaires cités, pas une valeur publiée telle quelle par Revenu Québec). Déjà établi et gouverné dans `impots-revenus-retraite-quebec-2026.md` (issue #43, 2026-09-03). | 2026-09-03 | corrigé | 2026-12-01 | 1 650 $ remplacé par 1 786 $ partout dans l'article (résumé, encadré « En bref », avantages cumulés, `baseMetadata.description`/`article.description` implicitement via les montants du corps). |
| Taux du crédit : présenté par l'article d'origine comme « 15 % ». | Fiche 110903 (ci-dessus) : taux du crédit 2026 de 14 %. Cohérent avec la baisse générale du taux du premier palier fédéral/québécois documentée pour 2026 (15 % → 14,5 % → 14 %) déjà utilisée dans `fractionnement-revenu-retraite-2026.md` (issue #41) pour le crédit fédéral pour revenu de pension. | 2026-09-03 | corrigé | 2026-12-01 | 15 % remplacé par 14 % dans l'encadré « En bref » et la section de calcul du crédit. |
| Seuil d'exclusion (revenu de travail en-deçà duquel aucun crédit ne s'applique) : présenté par l'article d'origine comme « 5 000 $ ». | Fiche 110903 (ci-dessus) : exclusion 2026 de 7 655 $. | 2026-09-03 | corrigé | 2026-12-01 | 5 000 $ remplacé par 7 655 $ dans le texte explicatif, le tableau de calcul et la note sous le tableau. |
| Plafond de revenu de travail admissible (portion excédentaire donnant droit au crédit) : présenté par l'article d'origine comme « 11 000 $ ». | Fiche 110903 (ci-dessus) : revenu de travail admissible plafonné à 12 755 $ pour 2026. | 2026-09-03 | corrigé | 2026-12-01 | 11 000 $ remplacé par 12 755 $ dans l'encadré « En bref », le texte explicatif et le tableau de calcul; revenu total pour atteindre le maximum recalculé de 16 000 $ à 20 410 $ (7 655 $ + 12 755 $). |
| Réduction du crédit selon le revenu net (mécanisme absent de l'article d'origine, qui ne mentionnait aucune réduction). | Fiche 110903 (ci-dessus) : le crédit calculé est réduit de 7 % de la portion du revenu net qui excède 57 660 $ (2026), jusqu'à élimination complète à un revenu net plus élevé. | 2026-09-03 | corrigé (ajout) | 2026-12-01 | Note ajoutée sous le tableau de calcul pour éviter de laisser croire qu'un travailleur à revenu élevé touche systématiquement le maximum de 1 786 $ quel que soit son revenu net total. |
| Bonification de la rente RRQ (« jusqu'à +42 % à 70 ans vs 65 ans ») et report de la PSV (« jusqu'à +36 % à 70 ans vs 65 ans ») citées dans la section « Combinaison avec d'autres avantages », comme avantages distincts du crédit lui-même. | RRQ : hors périmètre de ce ledger (mesure distincte du crédit pour la prolongation de carrière); PSV : ledger déjà gouverné `docs/claims/securite-vieillesse-quebec-2026.md` (issue #34/#36), confirmé +0,6 %/mois soit +7,2 %/an, +36 % à 70 ans. | 2026-09-03 | confirmé (PSV), non revalidé dans cette issue (RRQ) | 2026-12-01 | Inchangé : ces deux valeurs ne font pas partie du périmètre de l'issue #54 (le bucketing d'âge du moteur de matching RRQ est explicitement hors scope, Finding B de #53); seule la ligne relative au crédit lui-même, dans le même encadré, a été corrigée (1 786 $). |

## Résidu et incertitude

Comme pour les ledgers voisins (`fractionnement-revenu-retraite-2026.md`, `impots-revenus-retraite-quebec-2026.md`),
aucune source de vérité versionnée n'existe dans `src/data/finance-2026/` pour ce crédit : cet article reste
gouverné par ce ledger seul (pas de `datasetModule`), conformément au principe de ne pas créer de nouvelle
infrastructure pour cette issue.

Risques principaux restants : (1) les valeurs 2026 de la fiche 110903 (exclusion 7 655 $, plafond 12 755 $,
taux 14 %, seuil de réduction 57 660 $) ont été reprises telles qu'intégrées dans `impots-revenus-retraite-quebec-2026.md`
lors de la revue indépendante de la PR #44 (2026-09-03), sans nouvel accès direct à `budget.finances.gouv.qc.ca`
dans cette issue; une revalidation directe est recommandée dès qu'un accès à ce domaine est possible depuis
cet environnement; (2) la mention RRQ (« +42 % à 70 ans vs 65 ans ») dans la section « Combinaison avec
d'autres avantages » n'a pas été revalidée dans cette issue et reste hors périmètre (mesure distincte du
crédit audité ici).
