import App from './components/App.js';
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));
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
    res.render('teste'); return;
    rickandmortyapi.getRandomChacters().then(characters => {
        res.render('index', { characters : characters.data });
    }).catch(err => {
        res.render('index', { err : true });
    });
});
console.log('rick-portal-gun listening port', port);
app.listen('3000');