const express = require('express');
const router = express.Router();
const queryString = require('querystring');
const axios = require('axios');
const rickandmortyapi = 'https://rickandmortyapi.com/api';
router.get('/', async (req, res) => {
    return 'passei aqui';
    let query = queryString.stringify(req.query);
    axios.get(`${rickandmortyapi}/character/?${query}`).then(characters => {
        res.send(characters.data.results);
    });
});
module.exports = router;