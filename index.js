const express = require('express');
const app = express();
const port = 3000;
const CharacterRouter = require('./resources/CharacterRouter.js');
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static('public'));
app.use('/character', CharacterRouter);
app.get('/', async (req, res) => {
    res.render('index');
});
app.listen('3000');