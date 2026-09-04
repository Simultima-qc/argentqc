# Ledger de claims - credit-impot-maintien-domicile-2026

Année effective : 2026. Article audité : `src/data/blog/entries/credit-impot-maintien-domicile-2026.tsx`.
Ledger créé le 2026-09-03 (issue #54, suite au P1 identifié par l'audit #53) : l'article publiait des
paramètres 2026 contredisant le ledger déjà gouverné `docs/claims/impots-revenus-retraite-quebec-2026.md`
(issue #43), qui reprend la même valeur de crédit maximal pour cette même mesure. Prochaine revue :
2026-12-01, alignée sur la cadence des ledgers voisins.

Méthode : accès direct bloqué par la politique réseau de cet environnement pour `canada.ca`,
`revenuquebec.ca` et `budget.finances.gouv.qc.ca` (proxy de sortie, erreur `EGRESS_BLOCKED`), comme
pour les audits précédents (issues #34, #41, #43). Les valeurs 2026 ci-dessous ne sont pas revalidées
de novo dans cette issue : elles réutilisent, sans les dupliquer aveuglément, le paramètre primaire déjà
établi (ministère des Finances du Québec, fiche 110101) et déjà intégré au ledger
`impots-revenus-retraite-quebec-2026.md` lors de la revue indépendante de la PR #44 le 2026-09-03,
conformément au principe de réutiliser une source de vérité déjà gouvernée dans ce dépôt plutôt que d'en
revalider une seconde fois la même donnée. Aucune valeur n'a été inventée ou extrapolée sans confirmation
convergente.

| claim | source officielle | date de vérification | statut | prochaine vérification | action |
| --- | --- | --- | --- | --- | --- |
| Taux du crédit : présenté par l'article d'origine comme « 36 % (autonome) » et « 38 % (non autonome) ». | Ministère des Finances du Québec - Dépenses fiscales 2025, fiche 110101, Crédit d'impôt remboursable pour maintien à domicile des aînés, https://www.budget.finances.gouv.qc.ca/Budget/outils/depenses-fiscales/fiches/fiche-110101.asp — taux 2026 unique de 40 %, applicable aux deux catégories (autonome et non autonome). Déjà établi et gouverné dans `impots-revenus-retraite-quebec-2026.md` (issue #43, 2026-09-03). | 2026-09-03 | corrigé | 2026-12-01 | 36 % et 38 % remplacés par un taux unique de 40 % dans l'encadré « En bref », le tableau « Taux et plafonds 2026 » et l'exemple chiffré (Madeleine). |
| Plafond de dépenses admissibles : présenté par l'article d'origine comme « 19 500 $/an » (autonome) et « 25 500 $/an » (non autonome). | Fiche 110101 (ci-dessus) : plafond de dépenses admissibles 2026 de 19 500 $ (aîné autonome) et 25 500 $ (aîné non autonome). | 2026-09-03 | confirmé | 2026-12-01 | Inchangé : ces deux plafonds étaient déjà exacts dans l'article d'origine. |
| Montant maximal du crédit avant réduction : présenté par l'article d'origine comme « ~6 000 $ » (autonome) et « ~9 700 $ » (non autonome). | Fiche 110101 (ci-dessus) : maximum avant réduction selon le revenu de 7 800 $ (autonome, soit 40 % × 19 500 $) et 10 200 $ (non autonome, soit 40 % × 25 500 $). Déjà établi et gouverné dans `impots-revenus-retraite-quebec-2026.md` (issue #43, 2026-09-03). | 2026-09-03 | corrigé | 2026-12-01 | ~6 000 $ remplacé par 7 800 $ et ~9 700 $ remplacé par 10 200 $ dans le titre, le résumé (`baseMetadata.title`/`article.titre`), l'encadré « En bref », le tableau, l'exemple chiffré (Madeleine : maximum recalculé à 7 800 $ au lieu de 7 020 $) et le total cumulé de la section combinaison d'aides (recalculé à « plus de 24 000 $/an » au lieu de « plus de 22 500 $/an », soit 7 800 $ + 14 500 $ + 2 040 $ = 24 340 $). |
| Âge d'admissibilité (70 ans et plus) et services admissibles/non admissibles (section 2 et 3 de l'article). | Non identifié comme contredisant le ledger `impots-revenus-retraite-quebec-2026.md` ni la fiche 110101; non modifié par l'audit #53. | 2026-09-03 | non revalidé dans cette issue | 2026-12-01 | Inchangé : hors des paramètres cités par l'audit #53 comme contradictoires; une revalidation directe des catégories de services admissibles resterait à faire séparément si un futur audit l'identifie comme prioritaire. |
| « Le crédit n'est pas réduit en fonction du revenu : même une personne à revenu élevé y a droit au même taux. » | Fiche 110101 ne mentionne aucun mécanisme de réduction selon le revenu pour ce crédit (contrairement au crédit pour la prolongation de carrière, qui en a un — voir `docs/claims/credit-impot-prolongation-carriere-2026.md`). | 2026-09-03 | confirmé (absence de contradiction relevée) | 2026-12-01 | Inchangé. |

## Résidu et incertitude

Comme pour les ledgers voisins, aucune source de vérité versionnée n'existe dans `src/data/finance-2026/`
pour ce crédit : cet article reste gouverné par ce ledger seul (pas de `datasetModule`), conformément au
principe de ne pas créer de nouvelle infrastructure pour cette issue.

Risques principaux restants : (1) le taux et les montants maximaux de la fiche 110101 ont été repris tels
qu'intégrés dans `impots-revenus-retraite-quebec-2026.md` lors de la revue indépendante de la PR #44
(2026-09-03), sans nouvel accès direct à `budget.finances.gouv.qc.ca` dans cette issue; une revalidation
directe est recommandée dès qu'un accès à ce domaine est possible depuis cet environnement; (2) l'âge
d'admissibilité (70 ans) et le détail des catégories de services admissibles/non admissibles n'ont pas
été revalidés dans cette issue, faute d'avoir été identifiés comme contradictoires par l'audit #53.
