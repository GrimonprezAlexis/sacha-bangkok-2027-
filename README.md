# Bangkok Watthana · 4 → 7 janvier 2027

Application mobile (PWA) du séjour à Bangkok. Basée sur l'app Madrid (dépôt `Valencia`) :
Next.js 14, Leaflet, sans framework CSS, sans base de données.

## Onglets

- **Programme** : jour par jour (J1 → J4), conseil du jour, carte, fiches lieux avec photos et itinéraire.
- **Carte** : tous les lieux, filtrables par jour.
- **Restos** : restos et bars autour de Thong Lo / Ekkamai, filtrables.
- **Nuit** : quartiers adultes, ping pong show, arnaques à éviter, alternatives.
- **Infos** : à faire avant le départ, pratique, thaï de survie, urgences.

## Données

- `lib/data.js` : jours, étapes, restos (vols à ajouter dans `TRIP.flights`).
- `lib/extra.js` : conseils, nuit, infos pratiques.
- `lib/photos.js` : photos réelles Wikimedia Commons (licences libres), chargées à distance.

Prix indicatifs et coordonnées approximatives : à revérifier sur place.

```bash
npm install
npm run dev
```
