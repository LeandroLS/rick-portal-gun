const express = require('express')();
const port = 3000;
express.set('view engine', 'pug');
express.set('views', 'views');
express.get('/', (req, res) => {
    res.render('index');
});
console.log('rick-portal-gun listening port 3000.');
express.listen('3000');