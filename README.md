# CV-HTML-V2 ![HTML](https://img.shields.io/badge/HTML5-structure-orange) ![SCSS](https://img.shields.io/badge/SCSS-style-pink) ![Docker](https://img.shields.io/badge/Docker-deploy-blue)

> Projet personnel visant à créer un CV dynamique multi-pages, déployé via Docker sur Render.

&nbsp;

## Objectif du projet

L’idée derrière ce projet était de créer un site web structuré sur plusieurs pages afin de rendre mon CV plus interactif et vivant.  
Chaque page correspond à une thématique (profil, expériences, compétences, contact…), avec une navigation fluide assurée par des boutons JavaScript.

Le projet est inspiré d’un atelier réalisé au cours de ma formation. J’ai conservé la structure de base dans le dossier `src`, que j’ai ensuite adapté à mes besoins.

Mon objectif n’était pas de tout recréer de zéro, mais de tester ma capacité à :
- reprendre un projet existant,
- le modifier et l’adapter à un objectif précis,
- corriger les erreurs de build,
- et le déployer dans un environnement Dockerisé.

&nbsp;

## Fonctionnement

- Création d’une page HTML par section du CV
- Navigation entre les pages via des boutons JavaScript
- Stylisation en SCSS compilé avec Parcel
- Serveur Express pour servir les fichiers statiques
- Dockerisation complète du projet
- Déploiement sur Render

&nbsp;

## Lancer le projet en local

Une fois les dépendances installées, il suffit de lancer :

```npm run dev```

&nbsp;

🔗 Démo en ligne
👉 [Voir le site en ligne](https://cv-html-v2.onrender.com)

&nbsp;

À noter : Le projet a été dockerisé pour garantir un environnement stable et reproductible. Le lien ci-dessus pointe vers la version déployée sur Render, accessible publiquement.

&nbsp;

Projet réalisé par Kevin Coelho, dans le cadre d’un projet personnel – 2025
