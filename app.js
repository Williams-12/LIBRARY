require('dotenv').config(); // Charger les variables d'environnement

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Pour traiter les requêtes JSON

// Charger les données depuis le fichier JSON
const metiersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'metiers.json')));

app.get('/', (req, res) => {
    res.send('🚀 API en ligne et fonctionnelle !');
  });
  

// Route pour récupérer tous les métiers
app.get('/metiers', (req, res) => {
  res.json(metiersData);
});

// Route pour récupérer un métier par son nom
app.get('/metiers/:nom', (req, res) => {
  const nomRecherche = req.params.nom.toLowerCase();
  const metier = metiersData.find(m => m.nom.toLowerCase().includes(nomRecherche));

  if (metier) {
    res.json(metier);
  } else {
    res.status(404).json({ message: "Métier non trouvé" });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
