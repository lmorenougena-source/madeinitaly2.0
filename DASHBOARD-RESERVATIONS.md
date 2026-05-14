# Dashboard réservations

Une page privée visuelle a été ajoutée :

```txt
dashboard.html
```

Après publication sur Netlify, elle sera accessible avec :

```txt
https://ton-site.netlify.app/dashboard.html
```

## Code d'accès

Le code actuel est :

```txt
1130
```

Ce code masque la page pour un usage simple, mais ce n'est pas une vraie sécurité serveur. Pour un accès vraiment privé, il faudra ajouter une protection côté hébergeur ou une authentification.

## Ce que le dashboard montre

- réservations du jour
- nombre de couverts
- répartition salle / terrasse
- annulations
- prochaine table à préparer
- horaires les plus chargés
- prévision midi et soir

## Branchement Make plus tard

Pour l'instant, le dashboard affiche des données de démonstration propres.

Quand tu voudras le connecter aux vraies réservations, il faudra créer dans Make un scénario qui renvoie une liste JSON avec ces champs :

```txt
name
phone
date
time
people
area
status
message
```

Puis dans `dashboard.html`, remplacer :

```js
const DASHBOARD_FEED_URL = '';
```

par l'URL Make qui renvoie les réservations :

```js
const DASHBOARD_FEED_URL = 'https://hook.eu1.make.com/xxxx';
```

Statuts recommandés :

```txt
confirmed
pending
cancelled
```
