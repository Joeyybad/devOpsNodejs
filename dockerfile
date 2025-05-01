FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers dans le conteneur
COPY . .

# Installer les dépendances
RUN npm install

# Commande par défaut si on lance le conteneur
CMD ["node", "test.js"]