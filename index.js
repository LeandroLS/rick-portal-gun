const express = require('express');
const app = express();
const port = 3000;
const characterRouter = require('./resources/character.js');
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static('public'));
app.use('/character', characterRouter);
app.get('/', async (req, res) => {
    res.render('teste');
});
console.log('rick-portal-gun listening port', port);
app.listen('3000');