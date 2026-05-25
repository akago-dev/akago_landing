# Akago — Site vitrine

Landing page **statique** d'Akago (collectif numérique pour projets engagés). Généré au départ via Claude Design, désormais maintenu à la main.

## Pile

- HTML écrit à la main, **aucun framework, aucun build**.
- Un seul `style.css` (~1000 lignes), CSS vanilla avec variables.
- Quelques `<script>` inline (nav au scroll, etc.). Pas de JS externe.
- Polices : Google Fonts (Bricolage Grotesque, DM Sans, JetBrains Mono).
- Formulaires délégués à **Tally** ; contact en `mailto:`.

## Structure

- `index.html` — page d'accueil (hero, vision, équipe, packs, contact).
- `about.html` — à propos.
- `legal.html` — mentions légales.
- `style.css` — toutes les styles. Sections balisées par des bandeaux `/* ===== ZONE ===== */`.
- `assets/` — logo et images de marque (versionné).
- `uploads/` — médias additionnels (versionné).
- `_old/` — ancien miroir Framer, **non versionné** (`.gitignore`), à ne pas toucher.

## Conventions

- **Design tokens** : tout passe par les variables CSS de `:root` (couleurs `--accent` #E25E3E, `--ink`, `--bg` #FBF7F0…, rayons `--radius*`, polices `--display/--sans/--mono`). Ne pas coder de couleurs/tailles en dur — réutiliser les tokens existants.
- Conteneurs : `.wrap` (1240px), `.wrap-tight` (1040px), `.wrap-narrow` (820px).
- Le site est en **français** (lang="fr").
- Garder les pages cohérentes entre elles (nav/footer identiques).

## Développement

```bash
npm run serve            # preview locale -> http://localhost:8000
npm run shot index.html  # capture desktop + mobile -> tools/screenshots/
npm run audit index.html # Lighthouse (perf/a11y/seo) -> tools/reports/
```

Après une modif CSS/HTML, faire un `npm run shot <page>` et **regarder le rendu** (les PNG sont lisibles directement) plutôt que de modifier à l'aveugle. Le skill `/design-review` enchaîne capture + critique UX.

### Skills design

- `/design-review` — capture + critique UX de l'existant.
- `frontend-design` (plugin) — création de nouveaux composants/sections. **À ancrer sur le design-system existant** (tokens `:root`, palette crème + `--accent`, Bricolage Grotesque) : l'utiliser pour la qualité d'exécution, **pas** pour réinventer la direction visuelle d'Akago à chaque fois.
- MCP **Figma** — parité avec le design-system source.

Baseline Lighthouse `index.html` : Perf 99 · A11y 93 · Best Practices 100 · SEO 100 — ne pas régresser.

## Déploiement

Hébergé sur **GitHub Pages** depuis `main` / racine → https://akago-dev.github.io/akago_landing/
Chaque `git push` sur `main` redéploie automatiquement. Pas d'étape de build.

⚠️ Ne **jamais signer les commits** (pas de trailer `Co-Authored-By`).
