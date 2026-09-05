# Ledger de claims - renoclimat-2026-guide-complet

Année effective : 2026. Article audité : `src/data/blog/entries/renoclimat-2026-guide-complet.tsx`.
Ledger créé le 2026-09-05 (issue #83). Prochaine revue : 2026-12-01, alignée sur la cadence trimestrielle du
catalogue `programmes-2026.ts` dont ce programme fait partie (revue déjà prévue au 2026-12-01).

Méthode : accès direct bloqué par la politique réseau de cet environnement pour `quebec.ca` et
`transitionenergetique.gouv.qc.ca` (`EGRESS_BLOCKED`). Ce claim réutilise en priorité la source de vérité déjà
gouvernée `src/data/programmes.json` (entrée `renoclimat-qc`, revalidée à l'issue #51/PR #52), complétée par
recherche web ciblée pour les points non couverts par cette entrée (organisme historique, admissibilité par
date de construction).

| claim | source officielle | date de vérification | statut | prochaine vérification | action |
| --- | --- | --- | --- | --- | --- |
| Organisme administrateur : l'article d'origine affirmait « administré par Transition énergétique Québec (TEQ) », présentée comme une entité active. | TEQ (société d'État) a été dissoute en 2020-2022, ses programmes transférés au ministère responsable de l'énergie (Le Devoir; portail transitionenergetique.gouv.qc.ca lui-même, qui documente le transfert). Déjà noté dans `src/data/programmes.json` (`renoclimat-qc` : « l'ancienne agence Transition énergétique Québec a été dissoute et intégrée au ministère »), revalidé issue #51. | 2026-09-05 | corrigé | 2026-12-01 | Reformulé pour indiquer que TEQ a été dissoute et que le programme est administré directement par le gouvernement du Québec/le ministère responsable de l'énergie, sans affirmer un nom de ministère précis non confirmé directement. |
| Plafond de subvention : l'article d'origine affirmait « 100 $ à 10 000 $ ». | Déjà gouverné dans `src/data/programmes.json` (`renoclimat-qc`) : plafond relevé au-delà de l'ancien maximum de 10 000 $, jusqu'à 20 000 $ pour une maison unifamiliale selon des sources récentes (non confirmé directement sur la page officielle par l'audit de l'issue #51 non plus, marqué « à vérifier » dans le dataset lui-même). | 2026-09-05 | non universel / incertain (réutilise la valeur déjà gouvernée) | 2026-12-01 | 10 000 $ remplacé par 20 000 $ dans le titre, l'encadré « En bref » et l'exemple de rénovation complète, avec la même réserve d'incertitude que `programmes.json` plutôt qu'une affirmation catégorique. |
| Admissibilité : maison construite avant 2012. | Déjà gouverné dans `src/data/programmes.json` (`renoclimat-qc`, condition « Maison construite avant 2012 »). Une recherche web indépendante dans cette issue a renvoyé un résultat contradictoire (« avant le 1er octobre 2018 »), mais provenant d'une page indexant potentiellement notre propre article en circularité et non convergent avec une source primaire distincte fiable; la valeur déjà gouvernée du dépôt est conservée plutôt qu'une valeur non confirmée. | 2026-09-05 | confirmé (valeur déjà gouvernée conservée) | 2026-12-01 | Inchangé, conformément au principe de ne pas dupliquer une deuxième vérité indépendante quand une valeur est déjà gouvernée ailleurs dans le dépôt. |
| Cumul avec LogisVert (Hydro-Québec) jusqu'à 6 700 $ pour une thermopompe. | Hydro-Québec — LogisVert 2026 : aide de 1 700 $ à 6 700 $ pour une thermopompe centrale certifiée ENERGY STAR ou climat froid, programme actif en 2026 (le volet gratuit pour ménages à revenu modeste est suspendu aux nouvelles inscriptions, mais le volet régulier cité par l'article demeure actif). Recoupement convergent (plusieurs guides spécialisés 2026). | 2026-09-05 | confirmé | 2026-12-01 | Inchangé : ce montant et le statut actif du programme étaient déjà exacts. |
| Étapes de demande (évaluation avant/après travaux, conseiller certifié, délai de remboursement 4-12 semaines). | Non identifié comme contradictoire par cet audit. | 2026-09-05 | confirmé (non revalidé en profondeur) | 2026-12-01 | Inchangé. |

## Résidu et incertitude

Ce claim réutilise `src/data/programmes.json` (`renoclimat-qc`) comme source de vérité principale plutôt que
de revalider indépendamment chaque paramètre, conformément au principe de ne pas dupliquer une deuxième
vérité dans ce dépôt. L'incertitude déjà documentée dans ce dataset (plafond exact « à vérifier »,
admissibilité par date de construction) est héritée telle quelle par ce ledger.

Risques principaux restants : (1) le plafond exact de 20 000 $ n'est pas confirmé directement sur une page
officielle dans cette issue non plus; (2) le nom exact du ministère responsable en 2026 n'a pas pu être établi
avec confiance (plusieurs candidats sont apparus dans la recherche web sans convergence suffisante) et n'est
donc pas nommé explicitement dans l'article corrigé, pour éviter d'inventer une valeur; une revalidation
directe est recommandée dès qu'un accès à `quebec.ca` sera possible depuis cet environnement.
