# Plan de visibilité web — Akago

Établi le 11/06/2026 à partir de l'audit du site (Lighthouse, revue design, analyse SEO).
Cible : particuliers et entreprises qui veulent créer une application ou un SaaS.
Constat clé : le site ne contient presque pas les mots que la cible tape dans Google
(« créer une application », « développer un SaaS », « combien coûte une app »…).

## Phase 1 — Fondations techniques (faite le 11/06/2026, sauf comptes)

### Côté site (fait)

- [x] **Images du défilé** : converties en WebP redimensionnées (400 px mobiles, 1140 px
      desktop). 8,9 Mo → 536 Ko ; page totale 6,3 Mo → 454 Ko ; Perf Lighthouse 82 → 93
      (mobile throttlé ; LCP 4,4 s → 3,2 s). PNG originaux conservés dans
      `archive/showcase-png/`. Aller plus loin = inliner le CSS critique (non retenu).
- [x] **Préchargement des polices critiques** : preload des 2 woff2 « latin »
      (Bricolage + DM Sans) sur les 3 pages.
- [x] **robots.txt** : autorise tout, déclare le sitemap.
- [x] **sitemap.xml** : index, about, legal.
- [x] **Données structurées JSON-LD** : `ProfessionalService` (avec les 3 offres et prix
      planchers) + `FAQPage` 7 Q/R sur index ; `FAQPage` 4 Q/R sur about.
- [x] **Image de partage social** 1200×630 : `assets/akago/og-image.png`, générée depuis
      `tools/og-image.html` via `node tools/og-shot.mjs` (regénérer après modif).
      `twitter:card` passé en `summary_large_image` sur les 3 pages.
- [x] **Title/meta d'index.html** élargis au vocabulaire de recherche :
      « Akago — Création d'applications web, mobiles et SaaS pour projets à impact ».

### Côté Antoine (comptes)

- [x] **Google Search Console** : propriété akago.fr validée, sitemap soumis (11/06/2026).
- [x] **Bing Webmaster Tools** : importé depuis Search Console (11/06/2026).
- [x] **Google Business Profile** : fiche créée (11/06/2026). Reste : collecter les avis
      Google des 5 clients témoins (Ping, Libélaw, YippyLingo, Moofize, Famyhelp) et
      ajouter des photos d'équipe « humaines » quand disponibles.
- [x] **Analytics : Plausible** — script posé sur les 3 pages (sans cookie, pas de bandeau).
      Liens Tally taggés `Reserver Appel`, liens email taggés `Contact Email`.
      Reste côté Plausible : ajouter le site akago.fr au compte, puis créer les goals
      « Reserver Appel » et « Contact Email » (Site Settings → Goals → Custom event).

## Phase 2 — Contenu qui capte la recherche (mois 1-3)

- [ ] **Pages réalisations** : une page par cas client (problème → solution → résultat
      chiffré + témoignage). Répond au retour de Charlotte (du concret, du chiffré)
      et capte la longue traîne (« application pour avocats », « app pour aidants »…).
- [ ] **Deux pages d'offre dédiées** : « Créer votre application mobile » et
      « Développer votre SaaS sur mesure » — une page par requête commerciale,
      maillées depuis les packs.
- [ ] **3 à 5 guides** sur les requêtes de la phase de réflexion :
      - « Combien coûte une application en 2026 ? » (requête n°1 — et Akago affiche
        ses prix, avantage rare) ;
      - « MVP : budget et délais » ;
      - « No-code ou sur-mesure ? » ;
      - « CII : financer 20 % de votre application ».

## Phase 3 — Autorité et canaux hors SEO (continu)

- [ ] **Backlinks clients** : un discret « Conçu par Akago » dans le footer des apps/sites
      livrés — le backlink le plus naturel qui existe.
- [ ] **Plateformes** : Malt, Sortlist, Codeur.com, annuaire des prestataires agréés CII.
      Ces annuaires sont aussi ce que citent les assistants IA (« qui peut développer mon app »).
- [ ] **LinkedIn** : un post/semaine (coulisses de sprint, avant/après d'un écran, leçon
      d'un projet), relayé par les 6 membres de l'équipe. Canal n°1 du B2B français.
- [ ] **Écosystème impact/ESS** : incubateurs, France Active, CCI, réseaux de coopératives —
      ateliers « de l'idée à l'app » = leads directs cohérents avec le positionnement.

## Phase 4 — Mesure (dès la phase 1)

- [ ] Revue mensuelle : positions Search Console, conversions Tally, Core Web Vitals.
- [ ] Itérer le contenu de la phase 2 selon les requêtes qui montent.
