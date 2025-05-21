# TopiQuote version dynamique

Tu te souviens le site TopiQuote que tu avais réalisé en faisant pas mal de copier coller pour créer des pages qui se ressemblent beaucoup ?

On va le faire aujourd'hui en version dynamique !

Pour cela nous voici dans un projet qui combine à la fois ce qu'on a vu en frontend avec l'utilisation du bundler Parcel et ce qu'on a vu en backend avec un serveur HTTP mis en place avec Express.

Voici ce qui a été fait dans l'ordre :

1. Construction d'une intégration statique des pages types (enfin la page type, il n'y en a qu'une) avec Parcel en travaillant dans `src`
2. Génération de l'intégration statique finale en faisant le `build` avec Parcel dans un dossier ~`dist`~ -> `public`. Ici les options de Parcel ont été changées dans le `package.json` et dans un fichier [`.parcelrc`](https://parceljs.org/features/plugins/#.parcelrc) pour correspondre à nos habitudes côté serveur
3. Mise en place d'un serveur avec Express pour servir les assets statiques générés précédemment

Voici ce qu'il reste à faire :

4. Mettre en place des routes et des vues pour décrire dynamiquement les pages citations

C'est là que tu interviens ! Comme toujours allons-y par étapes, ça peut être bien de prendre connaissance de toutes les étapes pour bien avoir en tête ce qu'on cherche à faire, puis d'y aller une étape à la fois.

## Etape 1 - Mise en place d'un routeur

Nous avons deux routes à mettre en place, si possible dans un routeur pour la séparation des responsabilités.

- La route d'accueil `/`
- Une route paramétrée pour chaque citation du type `/quote/NUMERO-CITATION`

Contente toi d'une réponse la plus basique possible déjà pour voir si tes routes fonctionnent, on complètera les réponses dans les étapes suivantes

## Etape 2 - Moteur de template

Bon, on va devoir étoffer une réponse contenant du HTML pour la rendre un peu plus intéressante. On va donc passer par un moteur de template.

Reprends les étapes de mise en place d'installation et de configuration de `EJS`.

## Etape 3 - Rendu d'une vue

L'accueil doit afficher la première citation, puis chaque page de citation doit afficher une citation en fonction du numéro demandé.

Il n'y a donc qu'une page type.

Fais le rendu d'une même vue pour chacune de tes routes. 

:point_up: Pour récupérer le code HTML type, tu peux copier le travail de l'intégrateur présent dans le dossier `src` !

## Etape 4 - Dynamisation de la vue

C'est là qu'on a le plus de travail. Il va falloir dynamiser les vues avec les vraies informations des citations maintenant.

On procède pas étape

1. D'abord on peut dynamiser la route de l'accueil
  - On doit fournir des données toutes prêtes à la vue, pour cela on part de la route qui s'occupe de l'accueil
  - On récupère les citations (disponibles dans le module `app/data.js`) et on cible en particulier la première
  - On passe les données de la première citation à la vue
  - Enfin, dans la vue, on utilise les tags EJS pour dynamiser la citation
2. On fait de même pour la route dynamique des citations. Il va falloir identifier la citation demandée par son numéro

## Etape 5 - Vue d'erreur

Prévois une vue dans le cas où on demande une page non trouvée.

## Etape 6 - Factorisation des vues

Si ce n'est pas déjà fait, factorise dans des vues partielles ce qui se répète dans tes vues

## Etape 7 - Dynamisation du menu

Passe les données des citations à toutes les vues et utilise ces données pour dynamiser le menu.

## Etape 8 - Nouvelle citation

Au fait il manquait une citation, tu peux l'ajouter ?

> On sait jamais, sur un malentendu ça peut marcher. - Jean-Claude Dusse

Pas mal non ? on voit là tout l'intérêt d'un site dynamique.

## Aller plus loin

Si tu as fini n'hésite pas à imaginer d'autres pages et à tester d'autres choses !
