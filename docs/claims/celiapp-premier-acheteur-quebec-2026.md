# Ledger de claims - celiapp-premier-acheteur-quebec-2026

Année effective : 2026. Article audité : `src/data/blog/entries/celiapp-premier-acheteur-quebec-2026.tsx`.
Ledger créé le 2026-09-05 (issue #83, tranche `medium` restante après l'issue #81/PR #82).
Prochaine revue : 2026-12-01, alignée sur la cadence des ledgers voisins sans module `finance-2026` dédié.

Méthode : accès direct bloqué par la politique réseau de cet environnement pour `canada.ca` (testé explicitement
lors de cette revalidation, `EGRESS_BLOCKED`), comme pour les audits précédents (issues #34, #41, #43, #54, #71,
#74, #81). Les valeurs ci-dessous proviennent de recherches web ciblées recoupées sur plusieurs sources
convergentes (institutions financières, cabinets fiscaux, CFFP) citant explicitement les pages CRA/ARC sur le
CELIAPP, complétées par la source de vérité déjà gouvernée `src/data/programmes.json` (entrée `celiapp-fed`,
revalidée issue #51/PR #52) et par le ledger déjà gouverné `docs/claims/rap-reer-premier-acheteur-quebec-2026.md`
pour la partie RAP de la combinaison. Aucune valeur n'a été inventée ou extrapolée sans confirmation convergente.

| claim | source officielle | date de vérification | statut | prochaine vérification | action |
| --- | --- | --- | --- | --- | --- |
| Cotisation annuelle maximale de 8 000 $, plafond à vie de 40 000 $. | ARC — CELIAPP, définitions et cotisations (canada.ca/.../first-home-savings-account), recoupé avec `src/data/programmes.json` (`celiapp-fed`, déjà gouverné issue #51). | 2026-09-05 | confirmé | 2026-12-01 | Inchangé. |
| Droits inutilisés reportables jusqu'à 8 000 $ de plus (donc cotisation max 16 000 $ une année donnée), non cumulables au-delà de ce plafond de report. | ARC — Participer à vos CELIAPP (canada.ca), recoupé par plusieurs sources bancaires convergentes (Banque Nationale, Scotia, Sun Life). | 2026-09-05 | confirmé | 2026-12-01 | Inchangé; l'exemple chiffré de l'article (report de 5 000 $ + cotisation normale de 8 000 $ = 13 000 $) reste cohérent avec la règle de report plafonné à 8 000 $. |
| Âge d'admissibilité 18-71 ans, test de premier acheteur sur 4 années civiles, durée maximale du compte 15 ans ou jusqu'à 71 ans. | ARC — Admissibilité au CELIAPP, recoupé avec `src/data/programmes.json` (`celiapp-fed`). | 2026-09-05 | confirmé | 2026-12-01 | Inchangé. |
| Condition de retrait admissible « avant le 1er octobre » : l'article d'origine affirmait que **le retrait lui-même** devait être fait avant le 1er octobre de la même année pour acheter avant la fin de l'année. | ARC — retraits admissibles du CELIAPP : c'est l'**entente écrite d'achat ou de construction** qui doit être conclue avant le 1er octobre de l'année civile **suivant** celle du retrait, pas le retrait lui-même. Recoupé par plusieurs sources convergentes (Sun Life, TD, CFFP). | 2026-09-05 | corrigé | 2026-12-01 | Reformulé dans la section « Comment faire un retrait admissible » pour refléter la vraie condition (entente d'achat, échéance décalée d'un an par rapport au retrait). |
| Combinaison CELIAPP + RAP : l'article d'origine chiffrait le RAP à 35 000 $ par personne, total combiné 75 000 $, 150 000 $ pour un couple. | Contredit directement le ledger déjà gouverné `docs/claims/rap-reer-premier-acheteur-quebec-2026.md` et l'article `rap-reer-premier-acheteur-quebec-2026.tsx` (même dépôt), qui donnent tous deux 60 000 $ depuis le budget fédéral 2024 (retraits après le 16 avril 2024). Confirmé aussi par `src/data/programmes.json` (entrée RAP) et par recherche web convergente (Conseiller, Finance et Investissement). | 2026-09-05 | corrigé | 2026-12-01 | RAP corrigé à 60 000 $, total combiné à 100 000 $ par personne, 200 000 $ pour un couple. Élimine une contradiction directe entre deux des 7 articles de cette issue. |

## Résidu et incertitude

Aucune source de vérité versionnée n'existe dans `src/data/finance-2026/` spécifiquement pour le CELIAPP : cet
article reste gouverné par ce ledger seul (pas de `datasetModule`), conformément au principe de ne pas créer de
nouvelle infrastructure pour cette issue. Le RAP est référencé depuis le ledger déjà gouverné plutôt que
revalidé une seconde fois de façon indépendante, conformément au principe de ne pas dupliquer une source de
vérité déjà établie dans ce dépôt.

Risque principal restant : les règles précises encadrant les retraits multiples et le transfert au REER en cas
de retrait non admissible n'ont pas été revalidées en détail dans cette issue, faute d'avoir été identifiées
comme contradictoires; une revalidation directe est recommandée dès qu'un accès à `canada.ca` sera possible
depuis cet environnement.
