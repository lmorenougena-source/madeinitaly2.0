# Configuration Make pour les réservations

Le formulaire du site est prêt pour Make.

L'URL Make actuellement installée dans le site est :

```txt
https://hook.eu1.make.com/ufk9jzbjuihgsp6liyqrk8ige71rbxpn
```

Si tu dois changer d'URL Make plus tard, dans `index.html`, remplace cette ligne :

```js
const MAKE_RESERVATION_WEBHOOK_URL = 'TON_URL_MAKE_ICI';
```

par ta nouvelle URL Make, par exemple :

```js
const MAKE_RESERVATION_WEBHOOK_URL = 'https://hook.eu1.make.com/xxxxxxxx';
```

## Champs envoyés par le site

- `name` : nom du client
- `phone` : téléphone
- `area` : emplacement souhaité, salle intérieure ou terrasse extérieure
- `date` : date choisie
- `time` : heure choisie, par créneaux de 30 minutes entre 11h00 et 00h00
- `people` : nombre de personnes
- `message` : message du client
- `google_start` : début recommandé pour Make, exemple `2026-05-15 12:00`
- `google_end` : fin recommandée pour Make, exemple `2026-05-15 14:00`
- `summary` : titre prêt pour Google Agenda
- `description` : description prête pour Google Agenda

## Mapping recommandé dans Make

Module 1 :

```txt
Webhooks > Custom webhook
```

Module 2 :

```txt
Google Calendar > Create an Event
```

Dans Google Calendar :

```txt
Summary     = summary
Start Date  = google_start
End Date    = google_end
Description = description
```

L'événement créé durera 2 heures par défaut.

Si Make te propose un champ de fuseau horaire, choisis :

```txt
Europe/Paris
```

Important : dans Google Calendar, n'utilise pas seulement `date`, `time` ou `now` pour Start Date. Utilise `google_start`, sinon Make peut créer l'événement à la date du jour.

Pour éviter que des données techniques apparaissent dans Google Agenda, le champ Description doit être uniquement :

```txt
Description = description
```

Ne mets pas le bundle complet du webhook dans Description.

Si tu vois encore une ligne comme `start = 2026-05-15T12:00:00+02:00` dans Google Agenda, c'est que Make utilise encore l'ancien test du webhook ou le bundle complet dans la description. Clique sur `Run once`, renvoie une nouvelle réservation depuis le site mis à jour, puis remappe `Description = description`.
