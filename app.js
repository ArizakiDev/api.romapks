const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const xiaomiRoutes = require('./routes/xiaomi');
const samsungRoutes = require('./routes/samsung');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/xiaomi', xiaomiRoutes);
app.use('/samsung', samsungRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Serveur à l'écoute sur le port ${port}`);
});
