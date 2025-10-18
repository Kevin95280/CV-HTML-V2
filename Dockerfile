# Etape 1 : image Node officielle
FROM node:latest

# Étape 2 : dossier de travail
WORKDIR /app

# Étape 3 : copier les fichiers
COPY . .

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : builder le front avec Parcel
RUN npm run build

# Étape 6 : exposer le port du serveur
EXPOSE 3000

# Étape 7 : lancer le serveur Express
CMD ["node", "index.js"]