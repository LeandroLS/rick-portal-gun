const express = require('express');
const app = express();
const port = 3000;
const characterRouter = require('./resources/character.js');
const rickandmortyapi = require('./resources/rickmortyapi');
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static('public'));
app.use('/character', characterRouter);
app.get('/', async (req, res) => {
    rickandmortyapi.getRandomChacters().then(result => console.log(result.data));
    res.render('index');
});
console.log('rick-portal-gun listening port', port);
app.listen('3000');