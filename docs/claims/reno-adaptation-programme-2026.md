# Ledger de claims - reno-adaptation-programme-2026

Année effective : 2026. Article audité : `src/data/blog/entries/reno-adaptation-programme-2026.tsx`.
Ledger créé le 2026-09-05 (issue #83). Prochaine revue : 2026-11-01 (plus rapprochée que la cadence habituelle
de 2026-12-01, en raison de la réouverture très récente du programme après une longue suspension — voir
constat majeur ci-dessous — et du risque réel qu'un nouveau blocage administratif survienne).

## Constat majeur

Le « Programme d'adaptation de domicile (PAD) », que l'article désigne par son ancien nom « Réno-Adaptation »,
a été **suspendu aux nouvelles inscriptions du 1er avril 2025 au 12 août 2026** par la Société d'habitation du
Québec (SHQ), en raison du volume très élevé de demandes. Les inscriptions ont repris le 12 août 2026 — soit
moins d'un mois avant la date de cette revalidation (2026-09-05) — via un nouveau formulaire en ligne
sécurisé, plutôt que par la démarche locale via municipalités/OSBL décrite par l'article d'origine. L'article
présentait le programme comme une démarche active et continue sans mentionner cette interruption ni le
changement de procédure d'inscription, ce qui aurait pu induire un lecteur en erreur sur la marche à suivre
réelle pendant une bonne partie de l'année 2026.

Méthode : accès direct bloqué par la politique réseau de cet environnement pour `habitation.gouv.qc.ca`
(`EGRESS_BLOCKED`). La suspension et sa levée sont recoupées sur plusieurs sources convergentes et
indépendantes (Radio-Canada, La Revue, Ville de Montréal, MRC régionales, communiqué Newswire du gouvernement
du Québec annonçant la reprise des inscriptions). Le montant maximal de 16 000 $ est déjà gouverné dans
`src/data/programmes.json` (entrée `adaptation-domicile-shq`, revalidée issue #51/PR #52).

| claim | source officielle | date de vérification | statut | prochaine vérification | action |
| --- | --- | --- | --- | --- | --- |
| Existence et statut actif du programme : l'article d'origine ne mentionnait aucune interruption. | SHQ : nouvelles inscriptions suspendues du 2025-04-01 au 2026-08-12, reprises depuis cette date via formulaire en ligne. Confirmé par recoupement convergent (Radio-Canada, La Revue, Ville de Montréal, communiqué gouvernemental Newswire). | 2026-09-05 | corrigé (historique ajouté) | 2026-11-01 | Ajout d'un avertissement explicite sur la suspension 2025-2026 et la reprise récente, avec invitation à confirmer le statut courant auprès de la SHQ avant d'entamer une démarche. |
| Nom du programme : « Réno-Adaptation ». | Le nom officiel actuel du programme est « Programme d'adaptation de domicile (PAD) »; « Réno-Adaptation » demeure un nom d'usage répandu mais n'est plus la désignation officielle courante de la SHQ. | 2026-09-05 | corrigé (précision) | 2026-11-01 | Le nom officiel actuel (PAD) est maintenant introduit explicitement dès la première section, en conservant « Réno-Adaptation » comme nom d'usage pour la continuité éditoriale et le SEO. |
| Montant maximal de la subvention : jusqu'à 16 000 $ pour les ménages à faible revenu. | Déjà gouverné dans `src/data/programmes.json` (`adaptation-domicile-shq`, montant_max 16 000 $, issue #51). | 2026-09-05 | confirmé | 2026-11-01 | Inchangé : ce montant était déjà exact et est cohérent avec la source déjà gouvernée du dépôt. |
| Démarche de demande : contacter la municipalité ou un OSBL partenaire mandaté par la SHQ. | Depuis la reprise du 2026-08-12, l'inscription se fait via un formulaire en ligne sécurisé de la SHQ; certains organismes partenaires peuvent encore accompagner la démarche mais ce n'est plus décrit comme le point d'entrée principal. | 2026-09-05 | corrigé | 2026-11-01 | Étape 1 reformulée pour indiquer l'inscription en ligne via la SHQ comme démarche actuelle, tout en mentionnant les organismes partenaires possibles. |
| Paliers de revenu et taux d'aide (100 %/75 %/50 % selon le revenu familial). | Non identifié comme contradictoire par cet audit; non confirmé non plus de façon indépendante dans cette issue (accès direct bloqué). | 2026-09-05 | non revalidé dans cette issue | 2026-11-01 | Inchangé : hors des paramètres identifiés comme contradictoires par cette revalidation; l'article conserve déjà sa propre mise en garde éditoriale invitant à vérifier les barèmes en vigueur auprès de la SHQ. |

## Résidu et incertitude

Ce claim réutilise `src/data/programmes.json` (`adaptation-domicile-shq`) comme source de vérité pour le
montant maximal, et s'appuie sur des sources d'actualité convergentes et indépendantes pour la suspension et
sa levée (un événement récent qui ne pouvait pas encore avoir été capté par la revalidation de `programmes.json`
à l'issue #51, antérieure à la reprise du 2026-08-12).

Risques principaux restants : (1) les paliers de revenu détaillés (seuils exacts, taux d'aide par palier)
n'ont pas pu être confirmés directement dans cette issue et restent tels quels dans l'article, avec sa mise en
garde éditoriale déjà existante; (2) la procédure d'inscription en ligne étant très récente (moins d'un mois
avant cette revalidation), sa description reste sommaire et devrait être revalidée en détail dès qu'un accès
direct à `habitation.gouv.qc.ca` sera possible; la revue au 2026-11-01 est délibérément rapprochée pour ce
motif plutôt que la cadence par défaut de 2026-12-01 utilisée pour les autres ledgers de cette issue.
