# 📌 API des Métiers de la Tech

Bienvenue sur l'API des Métiers de la Tech ! Cette API fournit des informations détaillées sur différents métiers du secteur technologique, y compris leurs missions, compétences requises, outils utilisés et salaires moyens.

## 🚀 Accès à l'API
L'API est déployée sur Render et accessible à cette adresse :  
👉 **[https://metiersapi.onrender.com](https://metiersapi.onrender.com)**

## 📖 Fonctionnalités
L'API permet de :
- Lister tous les métiers de la tech.
- Rechercher un métier spécifique par son nom.

## 🛠️ Routes disponibles

### 1️⃣ Obtenir tous les métiers
- **Méthode** : `GET`
- **URL** : `/metiers`
- **Exemple** : [`https://metiersapi.onrender.com/metiers`](https://metiersapi.onrender.com/metiers)

### 2️⃣ Rechercher un métier spécifique
- **Méthode** : `GET`
- **URL** : `/metiers/:nom`
- **Exemple** : [`https://metiersapi.onrender.com/metiers/frontend`](https://metiersapi.onrender.com/metiers/frontend)

## 🏗️ Technologies utilisées
- **Node.js** avec **Express.js** pour le backend.
- **MongoDB** pour stocker les données (si utilisé dans l'avenir).
- **Render** pour le déploiement.

## 📌 Comment utiliser l'API localement ?

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/Williams-12/LIBRARY.git
cd LIBRARY
```

### 2️⃣ Installer les dépendances
```bash
npm install
```

### 3️⃣ Lancer le serveur en mode développement
```bash
npm run dev
```

### 4️⃣ Accéder à l'API localement
- Ouvre [http://localhost:5000/metiers](http://localhost:5000/metiers) dans ton navigateur ou Postman.

## 🔗 Liens utiles
- 🌍 **API en ligne** : [https://metiersapi.onrender.com](https://metiersapi.onrender.com)
- 📂 **Dépôt GitHub** : https://github.com/Williams-12/LIBRARY.git

---
