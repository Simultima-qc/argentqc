# Ledger de claims - rap-reer-premier-acheteur-quebec-2026

Année effective : 2026. Article audité : `src/data/blog/entries/rap-reer-premier-acheteur-quebec-2026.tsx`.
Ledger créé le 2026-09-05 (issue #83). Prochaine revue : 2026-12-01, alignée sur la cadence des ledgers voisins
sans module `finance-2026` dédié.

Méthode : accès direct bloqué par la politique réseau de cet environnement pour `canada.ca` (`EGRESS_BLOCKED`),
comme pour les audits précédents. Les valeurs ci-dessous sont recoupées sur plusieurs sources convergentes
(Conseiller, Finance et Investissement, iA, CFFP, banques) citant explicitement le budget fédéral 2024-2025 et
les pages ARC sur le RAP, et confirmées par la source déjà gouvernée `src/data/programmes.json` (entrée
`rap-reer` / description RAP, revalidée issue #51/PR #52, qui documente déjà le relèvement à 60 000 $ et
l'allègement temporaire de remboursement).

| claim | source officielle | date de vérification | statut | prochaine vérification | action |
| --- | --- | --- | --- | --- | --- |
| Plafond de retrait RAP de 60 000 $ par personne (120 000 $ pour un couple), relevé depuis 35 000 $ pour les retraits effectués après le 16 avril 2024. | ARC — Régime d'accession à la propriété, budget fédéral 2024-2025. Déjà confirmé et gouverné dans `src/data/programmes.json` (issue #51). Recoupé par recherche web convergente (Conseiller, Finance et Investissement, iA Groupe financier). | 2026-09-05 | confirmé | 2026-12-01 | Inchangé : ces montants étaient déjà exacts dans l'article d'origine. |
| Délai et montant de remboursement annuel : l'article d'origine affirmait qu'on a « jusqu'au 60e jour de la 2e année civile suivant le retrait » pour commencer à rembourser. | ARC : le premier remboursement doit être versé **pendant** la 2e année civile suivant le retrait, **ou** dans les 60 premiers jours de l'année suivante (donc jusqu'à ~14 mois plus tard que ce que l'article laissait entendre). Confirmé par plusieurs sources convergentes citant explicitement la règle des « 60 jours après la fin de la 2e année suivant le retrait ». | 2026-09-05 | corrigé | 2026-12-01 | Reformulé à l'étape 5 pour refléter la vraie fenêtre de remboursement. |
| Allègement temporaire de remboursement (non mentionné par l'article d'origine) : pour un premier retrait RAP effectué entre le 1er janvier 2022 et le 31 décembre 2025, le remboursement débute la 5e année suivant le retrait plutôt que la 2e. | Budget fédéral 2024-2025, confirmé par `src/data/programmes.json` (issue #51) et par recherche web convergente. Ne s'applique pas à un retrait effectué en 2026 (fenêtre de l'allègement expirée le 2025-12-31). | 2026-09-05 | confirmé (ajout) | 2026-12-01 | Ajouté comme précision à l'étape 5, en clarifiant explicitement qu'elle ne s'applique pas à un retrait fait en 2026, pour éviter toute confusion chez un lecteur qui planifierait un retrait cette année. |
| Combinaison RAP + CELIAPP : mise de fonds totale de 200 000 $ pour un couple (60 000 $ + 60 000 $ RAP, 40 000 $ + 40 000 $ CELIAPP). | Cohérent avec le ledger `docs/claims/celiapp-premier-acheteur-quebec-2026.md` (même issue) et `src/data/programmes.json` (`celiapp-fed`). | 2026-09-05 | confirmé | 2026-12-01 | Inchangé : ce calcul était déjà exact dans l'article d'origine. |
| Conditions d'admissibilité (premier acheteur sur 4 ans, REER en place depuis 90 jours, résidence admissible, contrat d'achat signé), formulaire T1036, feuillet T4RSP. | ARC — Régime d'accession à la propriété. Non identifié comme contradictoire par cet audit. | 2026-09-05 | confirmé (non revalidé en profondeur) | 2026-12-01 | Inchangé. |

## Résidu et incertitude

Aucune source de vérité versionnée n'existe dans `src/data/finance-2026/` spécifiquement pour le RAP au-delà de
la description sommaire dans `programmes.json`; cet article reste gouverné par ce ledger seul (pas de
`datasetModule`), conformément au principe de ne pas créer de nouvelle infrastructure pour cette issue.

Risque principal restant : le détail exact du calcul du remboursement minimum annuel (1/15 arrondi, traitement
d'un remboursement en trop) n'a pas été revalidé en profondeur dans cette issue, faute d'avoir été identifié
comme contradictoire; une revalidation directe est recommandée dès qu'un accès à `canada.ca` sera possible
depuis cet environnement.
