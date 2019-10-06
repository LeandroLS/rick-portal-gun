const express = require('express');
const router = express.Router();
const queryString = require('querystring');
const axios = require('axios');
const rickandmortyapi = 'https://rickandmortyapi.com/api';
router.get('/', (req, res) => {
    delete req.query['search-type'];
    let query = queryString.stringify(req.query);
    axios.get(`${rickandmortyapi}/character/?${query}`).then(characters => {
        res.render('index', { 'characters' : characters.data.results })
    });
});
module.exports = router;