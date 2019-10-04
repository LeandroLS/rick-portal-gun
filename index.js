const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});
console.log('rick-portal-gun listening port 3000.');
app.listen('3000');