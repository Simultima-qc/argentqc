# Ledger de claims - renoclimat-2026-guide-complet

Année effective : 2026. Article audité : `src/data/blog/entries/renoclimat-2026-guide-complet.tsx`.
Ledger créé le 2026-09-05 (issue #83), **corrigé le 2026-09-05 suite à une revue indépendante NO-GO du
Product Owner** sur la PR #84 (voir commentaire dans l'issue #83), qui a identifié plusieurs claims matériels
faux non détectés par la première passe de cet audit. Prochaine revue : 2026-12-01.

## Constat majeur (correction post-NO-GO)

La première version de ce ledger s'appuyait presque exclusivement sur `src/data/programmes.json` et sur des
recherches web ne convergeant pas toujours vers la page officielle actuelle, faute d'accès direct
(`EGRESS_BLOCKED`). Le Product Owner, avec accès direct à la page officielle actuelle de Rénoclimat, a identifié
plusieurs divergences que cette première passe n'avait pas détectées, dont un bloquant majeur : l'article
présentait la thermopompe comme un équipement admissible à Rénoclimat (y compris un exemple chiffré de cumul
« Rénoclimat + LogisVert » sur la même thermopompe), alors que l'installation, le remplacement ou la réparation
d'une thermopompe **n'est pas admissible à Rénoclimat** — cet équipement relève exclusivement de LogisVert
(Hydro-Québec). Les deux programmes ne sont complémentaires que pour des travaux distincts au sein d'un même
projet, jamais pour le même équipement.

Méthode pour cette correction : les valeurs ci-dessous proviennent directement de la revue indépendante du
Product Owner (accès direct à la page officielle actuelle, hors des contraintes réseau de cet environnement),
traitée comme source de vérité prioritaire au même titre qu'une source primaire, conformément à la hiérarchie
de gouvernance de `AGENTS.md` (le Product Owner autorise et arbitre le contenu publié).

| claim | source officielle | date de vérification | statut | prochaine vérification | action |
| --- | --- | --- | --- | --- | --- |
| Admissibilité de l'habitation : l'article affirmait « construite avant 2012 seulement ». | Revue indépendante du Product Owner (page officielle Rénoclimat actuelle) : l'habitation doit être construite et habitable depuis au moins 12 mois; aucun cutoff par année de construction. | 2026-09-05 | corrigé | 2026-12-01 | « Maisons construites avant 2012 » remplacé par « construite et habitée depuis au moins 12 mois » dans l'encadré « En bref » et l'étape 1. |
| Type de propriété admissible : l'article exigeait que la propriété soit la « résidence principale » du demandeur. | Revue indépendante du Product Owner : Rénoclimat accepte notamment maisons unifamiliales, duplex, triplex, petits multilogements, syndicats de copropriété, entreprises, OBNL, et certains chalets quatre saisons; l'exigence générale de résidence principale est trop restrictive. | 2026-09-05 | corrigé | 2026-12-01 | Étape 1 reformulée pour lister les types de propriétés admissibles sans exiger la résidence principale. |
| Entrepreneur RBQ obligatoire : l'article affirmait « faites effectuer les travaux par un entrepreneur qualifié RBQ ». | Revue indépendante du Product Owner : Rénoclimat n'exige pas un entrepreneur licencié RBQ pour l'ensemble des travaux; seules certaines catégories réglementées (plomberie, électricité, etc.) doivent être confiées au professionnel requis par la loi. | 2026-09-05 | corrigé | 2026-12-01 | Étape 3 reformulée pour ne plus présenter un entrepreneur RBQ comme une exigence générale. |
| **Thermopompe présentée comme travail admissible à Rénoclimat**, avec exemple chiffré « Rénoclimat jusqu'à 3 000 $ » cumulé à LogisVert sur le même équipement. | Revue indépendante du Product Owner : l'installation/le remplacement/la réparation d'une thermopompe n'est **pas admissible** à l'aide Rénoclimat; cet équipement relève exclusivement de LogisVert. Les deux programmes sont complémentaires seulement pour des travaux distincts. | 2026-09-05 | corrigé (bloquant) | 2026-12-01 | Thermopompe retirée de la liste des travaux admissibles à Rénoclimat (section 2), avertissement explicite ajouté; exemple de la section « cumuler les programmes » réécrit pour montrer Rénoclimat (isolation) + LogisVert (thermopompe) comme deux aides sur deux volets distincts du même projet, jamais sur le même équipement; ligne du tableau des exemples de subventions renommée « Isolation + fenêtres et portes » plutôt que « Thermopompe + isolation ». |
| Administrateur du programme : « ministère responsable de l'énergie » (formulation vague, issue de la 1re passe de cette issue). | Revue indépendante du Product Owner : ministère de l'Environnement, de la Lutte contre les changements climatiques, de la Faune et des Parcs (MELCCFP). | 2026-09-05 | corrigé | 2026-12-01 | Nom du ministère précisé dans la section 1. |
| Coût de la première évaluation énergétique : l'article affirmait « 150 $ à 300 $ ». | Revue indépendante du Product Owner : 150 $ + taxes pour la première évaluation; la deuxième évaluation (après travaux) est gratuite. | 2026-09-05 | corrigé | 2026-12-01 | Étape 2 corrigée à « 150 $ + taxes »; étape 4 précise que la deuxième évaluation est gratuite. |
| Délai de versement : l'article affirmait « 4 à 12 semaines ». | Revue indépendante du Product Owner : 8 à 10 semaines après l'évaluation après travaux. | 2026-09-05 | corrigé | 2026-12-01 | Étape 5 corrigée à « 8 à 10 semaines après l'évaluation après travaux ». |
| Plafond de subvention de 20 000 $ pour une habitation unifamiliale. | Revue indépendante du Product Owner : confirmé exact, non bloquant. | 2026-09-05 | confirmé | 2026-12-01 | Inchangé (déjà corrigé lors de la première passe de cette issue, alignée sur `programmes.json`). |
| Cumul avec LogisVert (Hydro-Québec) jusqu'à 6 700 $ pour une thermopompe. | Hydro-Québec — LogisVert 2026, montant confirmé lors de la première passe. Le montant lui-même n'est pas en cause; c'est sa présentation comme cumulable avec Rénoclimat sur le même équipement qui était fausse (voir ligne ci-dessus). | 2026-09-05 | confirmé (montant), corrigé (contexte de présentation) | 2026-12-01 | Montant inchangé; présentation corrigée pour clarifier qu'il s'agit d'une aide distincte pour un équipement non couvert par Rénoclimat. |

## Résidu et incertitude

Cette correction traite les points explicitement signalés par la revue indépendante du Product Owner. Elle ne
constitue pas une revalidation exhaustive de chaque paramètre restant de l'article (ex. : liste complète des
travaux d'isolation admissibles, barème détaillé par unité ÉnerGuide) au-delà des points corrigés ci-dessus.

Risques principaux restants : (1) le nom exact et la structure interne du MELCCFP pour ce programme n'ont pas
été revalidés au-delà de la correction du nom du ministère; (2) la liste des travaux additionnels admissibles
(hors thermopompe, désormais exclue) n'a pas été revalidée exhaustivement contre la page officielle dans cette
correction; une revalidation directe complète est recommandée dès qu'un accès à `quebec.ca` sera possible
depuis cet environnement, plutôt que de se fier uniquement à des revues ponctuelles.
