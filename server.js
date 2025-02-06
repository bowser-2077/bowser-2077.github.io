const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir les fichiers statiques comme le HTML et les assets
app.use(express.static(path.join(__dirname, 'assets')));


// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
