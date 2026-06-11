# TODO — Site vitrine Akago

Liste des évolutions à apporter au site. Cocher une fois fait.

## Contenu

### Pages réalisations — collecte par client (phase 2 du plan de visibilité)

Infos à récupérer pour chaque projet avant de rédiger sa page :

| # | Info | Usage |
|---|------|-------|
| 1 | Problème de départ (1-2 phrases) | Accroche de la page |
| 2 | Mission : formule, durée, plateformes, depuis quand | Fiche d'identité |
| 3 | 2-3 fonctionnalités marquantes | Section solution |
| 4 | **1 à 3 résultats chiffrés** (utilisateurs, volume/mois, note stores, financement…) | Le cœur de la page (retour Charlotte) |
| 5 | Citation + signataire (nom, fonction) | Crédibilité du témoignage |
| 6 | Lien public actif (site, stores) — à vérifier | Preuve « utilisez l'app » |
| 7 | **Accord écrit** : page détaillée + chiffres + (option) mise en relation prospects | Indispensable avant publication |
| 8 | (Bonus) anecdote de collaboration | Touche vivante |

État par client :

- [ ] **Moofize** (4 ans, priorité 1) — manque : chiffres, signataire, accord.
- [ ] **Libélaw** (priorité 1, brouillon démarré dans `_drafts/`) — signataire ✓ (Maxence Laurent, CEO) ; manque : chiffres, accord.
- [ ] **Famyhelp** — manque : chiffres, signataire, accord.
- [ ] **Ping** — manque : chiffres (ou angle « de l'idée au lancement »), accord.
- [ ] **YippyLingo** — manque : chiffres, 2-3 captures supplémentaires, accord.
- [ ] **Leezay** — manque : tout (citation, chiffres, captures, accord).

- [x] **Témoignages** : ~~ajouter un lien vers le site du projet sur chaque carte~~ — abandonné : plusieurs sites projets n'existent plus.
- [ ] **Témoignages** : récupérer puis réintégrer la citation de **Leezay** (sa carte est retirée du site en attendant). YippyLingo, Ping, Libélaw, Moofize, Famyhelp affichées.
- [x] **RGPD** : Q/R ajoutée à la FAQ accueil (hébergement en France, privacy by design, accompagnement conformité + DPO). Pas de contrat de sous-traitance art. 28 mentionné (pas encore en place).
- [x] **IA** : Q/R « Vous utilisez de l'IA pour coder mon app ? » ajoutée à la FAQ accueil (transparence dev). Reste optionnel : en parler aussi dans le bloc 2 (section *Approche*).

## Design / Identité

- [ ] **Illustrations** : ajouter des illustrations propres pour renforcer l'identité visuelle d'Akago et casser l'« effet IA »/générique du site. À ancrer sur le design-system (palette crème + `--accent`, Bricolage Grotesque).
- [ ] **Charte graphique & logo** : revoir un jour la charte graphique globale ainsi que le logo.

## Accessibilité

- [ ] **Contraste du texte atténué (global)** : `--ink-mute` (#8A7F71) sur fond clair ≈ 3,9:1, sous le seuil AA (4,5:1) pour les petits textes (taglines, descriptifs témoignages, `.pack-for`…). Assombrir le token (ou en ajouter un plus foncé), correctif à passer globalement, pas section par section.

## Retour Charlotte — Évolutions site Akago

Source : retour de Charlotte, transmis via Virginie (27/05/2026). Avis à chaud, bienveillant, à arbitrer.
Objectif : pistes d'évolution pour une prochaine itération du site.

**Synthèse** — Fil rouge : privilégier le concret et le chiffré au process, et réduire les frictions de navigation. Le reste est positif (bon accueil global).

- [ ] **1. Section « Une formule pour chaque étape de votre projet »** — _priorité haute (impact perçu fort, touche au discours commercial)_
  Réorienter le contenu du « comment on fait » (mécanique / méthode) vers le **résultat** : exemples concrets de réalisations, chiffres, bénéfice/impact client. Selon Charlotte, c'est ce que le client cherche en priorité, plus que le déroulé interne.
- [x] **2. Section « Collaborations qui durent »** — _fait (lisibilité immédiate privilégiée, tracking au clic abandonné)_
  Les retours s'affichent désormais directement (fin du hover/clic). Carte refondue : badge durée, citation en clair, attribution. Si on veut réintroduire une mesure d'engagement plus tard : option « extrait + lien lire plus ».
- [ ] **3. Page Expériences / Équipe — incohérence de chiffres** ⚠️ — _priorité haute si confirmé, faible coût_
  Vérifier et corriger un décompte qui ne semble pas cohérent (nombre de structures / d'expériences affiché qui ne correspond pas partout). Transcription incomplète → confirmer la nature exacte de l'écart (quel chiffre, à quel endroit) avant correction.
- [ ] **4. Présentation de l'équipe** — _priorité moyenne (travail éditorial + collecte d'infos auprès de l'équipe)_
  Rendre la section plus vivante : aujourd'hui trop factuelle (« entrepreneur depuis 10 ans », etc.). Propositions de Charlotte :
  - défis relevés, avec des chiffres ;
  - une touche personnelle par membre (ex. un slogan de carrière, un fait marquant) ;
  - des éléments qui donnent envie de travailler avec l'équipe.
