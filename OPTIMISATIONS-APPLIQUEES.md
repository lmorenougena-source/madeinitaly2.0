# Optimisations appliquées — Made in Italy Lourdes (pizza)

Optimisations Design/UX + SEO appliquées directement dans ce dossier le 29/05/2026.

## ✅ Fait automatiquement

### SEO
- **`<head>` réécrit** : `<title>` et meta description optimisés (mots-clés « pizzeria napolitaine Lourdes »), `canonical`, balise `robots`, Open Graph complet (og:url, og:image, og:site_name, og:locale), Twitter Card.
- **JSON-LD `Restaurant` enrichi** : ajout de `url`, `@id`, `image`, `logo`, `geo`, `hasMap`, `sameAs` (Facebook), `acceptsReservations`, `hasMenu`. Horaires alignés sur ceux affichés (8h-2h, 7j/7). **Validé** (JSON conforme).
- **`robots.txt`** créé (bloque dashboard / dossier-rdv / analyse de l'indexation).
- **`sitemap.xml`** créé (pages publiques).
- **`og-image.jpg`** (1200×630, 105 Ko) généré pour les aperçus de partage social.

### Photos & performance
- **Vraies photos en `src` direct** (au lieu du chargement Unsplash externe) partout où la photo existe : terrasse, salle, ambiance, galerie. Plus de dépendance externe + images indexables par Google.
- **`env.webp`** créé (copie de `environnement.webp`) pour que le système de bascule fonctionne.
- **Compression des images lourdes** : `assets/photos-reelles/` passe de **~17 Mo à 1,9 Mo** (largeur max 1600 px, qualité 80). Ex. : p5 3,3 Mo → 225 Ko, p4 2,4 Mo → 127 Ko, terr2 2,4 Mo → 173 Ko.
- **`alt` descriptifs** ajoutés aux pizzas du menu (« Pizza Margherita napolitaine · Made in Italy Lourdes », etc.).

## ⚠️ À faire toi-même (impossible depuis l'environnement)

1. **Remplacer le domaine** : tout est en `https://VOTRE-DOMAINE.fr` (placeholder). Fais un chercher/remplacer dans `index.html`, `robots.txt`, `sitemap.xml` le jour de la mise en ligne.

2. **Compiler Tailwind** (le registre npm était bloqué ici). Le CDN `cdn.tailwindcss.com` est toujours en place — le site fonctionne, mais le CDN est déconseillé en prod (bloque le rendu). Sur ton ordinateur :
   ```bash
   npx tailwindcss@3 -c tailwind.config.js -i input.css -o assets/tailwind.css --minify
   ```
   Puis, dans `index.html`, remplace la ligne `<script src="https://cdn.tailwindcss.com"></script>` et le bloc `<script>tailwind.config = {…}</script>` par :
   ```html
   <link rel="stylesheet" href="assets/tailwind.css" />
   ```
   (`tailwind.config.js` et `input.css` sont déjà prêts à la racine.)

3. **Supprimer les 4 dossiers de déploiement dupliqués** (droits en lecture seule ici) : `made-in-italy-netlify-v31-…`, `…v33-…`, `…v37-…`, `netlify-deploy 14`. Et le fichier `index.html.bak` (sauvegarde que j'ai créée).

4. **Photos des pizzas** : les 5 images du menu (Margherita, Mortazza, Diavola, Truffe, Tiramisu) sont encore des photos de stock — à remplacer par les tiennes (les `alt` sont déjà prêts).

5. **Photos manquantes** : `hero.webp` (grande photo d'accueil), `fac.webp` (façade), `p7.webp` restent en stock Unsplash car absentes du dossier. Dépose-les avec ces noms exacts dans `assets/photos-reelles/` et elles s'afficheront automatiquement.

## Vérifs recommandées
- Données structurées : https://search.google.com/test/rich-results
- Performance : https://pagespeed.web.dev/
- Aperçu social : https://www.opengraph.xyz/
