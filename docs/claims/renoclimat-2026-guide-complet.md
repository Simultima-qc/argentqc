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

## Mise à jour du 2026-10-21 (issue #124) — nouvelles modalités Rénoclimat en vigueur depuis le 2026-10-01

Vérification directe des pages officielles quebec.ca le 2026-10-21 (accès réseau disponible pour ce domaine).
Cette mise à jour ne rafraîchit pas mécaniquement les autres claims du ledger ci-dessus : seuls les énoncés
clairement contredits par la source officielle ont été corrigés. `nextReviewAt` reste inchangé (2026-12-01).

| claim | source officielle | date de vérification | statut | action |
| --- | --- | --- | --- | --- |
| « Évaluation énergétique obligatoire avant ET après les travaux » (encadré « En bref », section 1, étape 2). | quebec.ca, « Aide financière Rénoclimat pour améliorer la performance énergétique d'une habitation et l'adapter aux inondations » : « L'évaluation énergétique avant travaux n'est plus obligatoire, mais elle est recommandée […] Une aide financière pour l'évaluation énergétique est maintenant offerte » (jusqu'à 500 $). | 2026-10-21 | corrigé | Encadré, section 1 et étape 2 reformulés (facultative depuis le 2026-10-01, obligatoire sous les anciennes modalités). Le coût « 150 $ + taxes » est retiré : il décrivait les anciennes modalités. |
| Transition et fin des anciennes modalités (absent de l'article). | Même page et page « systèmes mécaniques » : plus de rendez-vous avant travaux selon les anciennes modalités; si une évaluation a déjà eu lieu, travaux terminés et évaluation après travaux d'ici le 2027-03-31. | 2026-10-21 | ajouté | Encadré daté en tête d'article. |
| Thermopompe / système de chauffage non admissible à Rénoclimat. | quebec.ca, page « systèmes mécaniques » : « Le programme Rénoclimat n'offre plus d'aide financière pour l'installation ou le remplacement d'un système de chauffage. » | 2026-10-21 | confirmé | Aucune réécriture de l'énoncé existant; mention ajoutée dans l'encadré. |
| Plafond 20 000 $, exemples de subventions typiques (500–1 500 $, etc.), total combiné 10 700 $, deuxième évaluation gratuite, délai 8–10 semaines. | Non contredits ni confirmés par les pages consultées (nouveau barème par mesure : toit jusqu'à 2 000 $, murs 7 000 $, fondations 2 500 $, fenêtres 4 500 $ pour une maison). | 2026-10-21 | **non revalidé** | Inchangés; l'encadré avertit que ces montants reposent en partie sur les anciennes modalités. À revalider par le Product Owner (voir résidus). |

Résidus (P3) : le plafond de 20 000 $ et `montant_affiche` de `renoclimat-qc` dans `programmes.json`, les exemples
de montants et le total combiné « 10 700 $ » (somme de deux maximums sans preuve de cumul) ne sont pas revalidés
contre le nouveau barème. Décision laissée au jalon #123 (2026-12-01).
