---
name: design-review
description: Capture une ou plusieurs pages du site (desktop + mobile) puis les critique selon des heuristiques UX/design de landing page. Utiliser après une modif visuelle, avant un commit visuel, ou quand l'utilisateur demande un avis design/UX, une revue de mise en page, du responsive, ou de la hiérarchie visuelle.
---

# Design review — landing page Akago

Boucle « voir puis juger » pour le travail visuel sur ce site statique.

## Procédure

1. **Capturer** les pages concernées (défaut : `index.html`) :
   ```bash
   npm run shot index.html about.html
   ```
   Les PNG desktop + mobile sont écrits dans `tools/screenshots/`.

2. **Regarder** chaque capture avec l'outil Read (les PNG sont rendus visuellement). Toujours examiner desktop **et** mobile.

3. **Critiquer** contre les heuristiques ci-dessous. Être concret : citer la section et proposer un correctif actionnable (idéalement avec le token CSS concerné). Distinguer 🔴 bloquant / 🟡 à améliorer / 🟢 ok.

## Heuristiques

**Hero / above-the-fold**
- Proposition de valeur claire en < 5 s ; CTA principal visible sans scroller.
- Un seul CTA primaire dominant ; les secondaires sont visuellement subordonnés.

**Hiérarchie & rythme**
- Échelle typographique cohérente (`--display` pour les titres, `--sans` pour le corps).
- Espacement vertical régulier entre sections ; pas de blocs qui se collent ou flottent.
- Contraste suffisant texte/fond (viser AA) — attention aux `--ink-mute` sur `--bg`.

**Cohérence design system**
- Couleurs, rayons, ombres = tokens de `:root` (pas de valeurs en dur).
- Nav et footer identiques entre les pages.
- Accent `--accent` (#E25E3E) utilisé avec parcimonie, réservé aux actions.

**Responsive (mobile 390px)**
- Pas de débordement horizontal ni de texte tronqué.
- Cibles tactiles ≥ ~44px ; nav utilisable ; grilles qui repassent en colonne.
- Images nettes (deviceScaleFactor 2) et non déformées.

**Conversion**
- Chaque section pousse vers l'action (réserver un appel / contact).
- Liens Tally et `mailto:` présents et cohérents.

**Accessibilité (compléter avec `npm run audit`)**
- `alt` sur les images, ordre de titres logique, focus visible.

## Sortie attendue

Une synthèse par page : points forts, puis liste priorisée de corrections. Si l'utilisateur valide, appliquer les corrections dans `style.css`/HTML puis re-capturer pour confirmer.
