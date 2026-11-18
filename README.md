# Bangkok Watthana · 4 → 7 janvier 2027

Application mobile (PWA) du séjour à Bangkok. Basée sur l'app Tanzanie, simplifiée au maximum :
Next.js 14, sans framework CSS, sans base de données (les coches restent sur l'appareil).

Pages (App Router) :

- `/` **Programme** jour par jour (J1 → J4), étapes à cocher, lien Maps.
- `/restos` **Restos** et bars autour de Thong Lo / Ekkamai, filtrables.
- `/transport` **Transport**.
- `/nuit` **Nuit** : quartiers adultes, ping pong show, arnaques à éviter.
- `/infos` **Bons plans** et checklist avant départ.

Toutes les données sont dans `lib/data.js`.

```bash
npm install
npm run dev
```

Photos réelles : Wikimedia Commons (licences libres), chargées à distance.
