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

## Branchement Make + Google Sheets

Pour l'instant, le dashboard affiche des données de démonstration propres. Pour afficher les vraies réservations, la méthode la plus simple est :

```txt
Site
→ Make
→ Google Calendar
→ SMS
→ Google Sheets
→ Dashboard
```

## 1. Créer le Google Sheet

Crée un Google Sheet nommé :

```txt
Réservations Made in Italy
```

Première ligne du tableau :

```txt
id,eventId,date,time,name,phone,people,area,status,message
```

Un modèle CSV existe aussi ici :

```txt
reservations-dashboard-template.csv
```

## 2. Ajouter une ligne depuis Make

Dans le scénario principal de réservation, après Google Calendar et avant ou après le SMS, ajoute :

```txt
Google Sheets > Add a Row
```

Remplis les colonnes comme ceci :

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

Et ajoute aussi :

```txt
eventId = ID de l'événement Google Calendar créé
status  = confirmed
```

## 3. Mettre à jour lors d'une annulation

Dans le scénario d'annulation :

```txt
Webhook annulation
→ Google Calendar Update an Event
→ Google Sheets Update a Row
```

But :

```txt
status = cancelled
```

Pour retrouver la bonne ligne, utilise la colonne :

```txt
eventId
```

## 4. Publier le Sheet pour le dashboard

Dans Google Sheets :

```txt
Fichier
→ Partager
→ Publier sur le Web
```

Choisis :

```txt
Format CSV
```

Google donne une URL qui ressemble à :

```txt
https://docs.google.com/spreadsheets/d/e/xxxx/pub?gid=0&single=true&output=csv
```

## 5. Brancher l'URL dans le dashboard

Puis dans `dashboard.html`, remplacer :

```js
const DASHBOARD_FEED_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQOuHuyjj9W-gBZ6vN7S7VDqPNRHbNbFLBCsO7gUnPSyibAXbfj5cneQ1Smixf0ztrUjW1Ixv5ss2CZ/pub?gid=0&single=true&output=csv';
```

par l'URL CSV de Google Sheets :

```js
const DASHBOARD_FEED_URL = 'https://docs.google.com/spreadsheets/d/e/xxxx/pub?gid=0&single=true&output=csv';
```

Statuts recommandés :

```txt
confirmed
pending
cancelled
```

Important : publier un Google Sheet en CSV rend ces données accessibles à toute personne qui possède le lien. Pour un restaurant réel, évite de partager ce lien et passe ensuite à une vraie protection serveur si le dashboard contient des numéros de téléphone clients.
