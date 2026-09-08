# Bell Québec — preuve complémentaire pour la revue de #105

Consultation directe du navigateur le 2026-09-08. Mandat : répondre au NO-GO
de la PR #105 sur le mode d'engagement et les frais d'installation. Ce relevé
est une observation de page publique, pas une qualification d'adresse ni un contrat.

## Parcours reproductible

1. Ouvrir https://www.bell.ca/Services_Internet/Acces_Internet.
2. Vérifier le sélecteur de province dans l'en-tête, pas seulement la langue française.
3. Ouvrir les détails Fibe 500 et Gigabit 1,5, puis leurs fiches produit officielles.
4. Comparaison effectuée en sélectionnant Ontario dans le menu, puis Québec
   explicitement dans le même menu. Lire la province après navigation : certains
   clics initiaux n'ont pas changé la région (panneau de clavardage / défilement).
   Seules les lectures après confirmation ON ou QC sont retenues ci-dessous.
5. Aucun mode caché n'a été activé artificiellement; aucune adresse saisie.

## État des contrôles après retour explicite au Québec

Lecture DOM limitée aux éléments de la page et à leur visibilité, sans lecture
de cookies, de variables internes ou d'API privée. `visible` ci-dessous signifie
que l'élément a des rectangles de rendu (`getClientRects().length > 0`).

```json
{
  "province": "QC",
  "controls": [
    { "id": "wbx-mobility-toggle", "visible": false, "checked": true },
    { "id": "tab-2year-guarantee", "visible": false, "aria-selected": "true" },
    { "id": "tab-no-guarantee", "visible": false, "aria-selected": "false" }
  ],
  "wbx-two-year-toggle": "absent",
  "productUrls": [
    "/Services_Internet/Produits/Internet-Fibe-500-FTTH",
    "/Services_Internet/Produits/Internet-Fibe-Gigabit15-FTTH"
  ]
}
```

**Mode sélectionné dans l'interface Québec : aucun choix visible entre deux ans
et au mois.** Le DOM conserve un ancien onglet masqué `aria-selected=true` pour
deux ans. Ce marqueur est rapporté, et non omis; il ne suffit pas à qualifier les
offres Québec affichées. Le contrôle visible d'engagement est absent; les liens
produit ne portent pas `promoCont=2YearContract`. Inversement, cela ne prouve pas
que l'offre est sans engagement. Les fiches ne précisent pas la durée contractuelle.

## Calcul complet des fiches Québec

Les deux fiches suivantes ont été ouvertes directement à partir des chemins
exposés par la page Québec, dans la même session; leur en-tête affiche QC et
leurs modalités désignent les nouveaux clients résidentiels du Québec.

- Fibe 500 : https://www.bell.ca/Services_Internet/Produits/Internet-Fibe-500-FTTH
- Gigabit 1,5 : https://www.bell.ca/Services_Internet/Produits/Internet-Fibe-Gigabit15-FTTH

| Ligne du tableau de prix | Fibe 500 | Gigabit 1,5 |
|---|---:|---:|
| Forfait, crédit pour autopaiement déjà inclus | 80,00 $/mois | 90,00 $/mois |
| Crédit mensuel – 24 mois | −5,00 $/mois | −10,00 $/mois |
| Location du modem incluse | 0,00 $ | 0,00 $ |
| Total affiché | 75,00 $/mois | 80,00 $/mois |
| Crédit à terme de 2 ans | Aucune ligne affichée | Aucune ligne affichée |
| Crédit Mobilité | Aucune ligne affichée | Aucune ligne affichée |

Le montant distinct du crédit d'autopaiement n'est pas fourni : il est déjà
compris dans les bases 80/90; aucun montant additionnel n'est inventé.
Les vitesses sont respectivement 500/500 Mbps et 1500/940 Mbps.
Les fiches avertissent que les prix peuvent augmenter pendant l'abonnement.

Installation sur **chacune des deux fiches QC** : gratuite pour l'auto-installation
ou lorsque celle-ci est indisponible et qu'une installation professionnelle est
nécessaire; **100 $** si l'auto-installation disponible est refusée. Conditions
communes : autopaiement par débit sous 31 jours, taxes en sus, admissibilité
selon adresse et technologie. Le 100 $ est donc une observation Québec explicite,
pas une déduction depuis un tarif Ontario.

## Contrôle de comparaison Ontario

Sur la même page de forfaits après sélection Ontario, en-tête **ON** :

- `wbx-two-year-toggle` visible, coché : engagement deux ans sélectionné.
- `wbx-mobility-toggle` visible : décoché explicitement pour le relevé final.
- Le lien Fibe 500 porte alors
  `/Services_Internet/Produits/Internet-Fibe-500-FTTH?promoCont=2YearContract`.
- Le détail annonce un prix garanti deux ans et une durée d'engagement de deux ans.
- Calcul intégral Fibe 500 : base avec autopaiement 105 $, crédit à terme deux ans
  −15 $, modem 0 $, total 90 $; aucun crédit Mobilité après désactivation.
- Les modalités désignent l'Ontario et indiquent **150 $** pour refus de
  l'auto-installation disponible.

Cette lecture reproduit les éléments signalés par le reviewer, mais dans un
contexte ON explicite. Elle ne démontre pas que son environnement utilisait ON;
elle montre pourquoi il faut conserver la région et le mode avec chaque prix.

## Décision bornée

Conserver les valeurs QC 75/80 $, upload 940 Mbps et installation 100 $, maintenant
associées à leurs fiches et au calcul complet. Conserver `contrat:null`, car la
fiche publique Québec ne permet pas d'établir la durée d'engagement : ni `true`
ni `false` n'est suffisamment étayé. Ne pas convertir l'absence de crédit à terme
en promesse sans engagement. Les offres restent exclues du filtre sans contrat,
avec avertissement et `termesVerifies:false`.

La copie FR/EN précise désormais que la durée n'est pas indiquée sur la fiche
Québec. Aucune mutation de prix supplémentaire. TekSavvy et Intact inchangés;
aucun bump de fraîcheur. Revue indépendante requise; aucun merge autorisé par
ce document. Si une preuve d'engagement QC propre à ces prix apparaît, la règle
de contrat devra être révisée avant merge.
