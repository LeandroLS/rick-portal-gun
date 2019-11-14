const express = require('express');
const router = express.Router();
const queryString = require('querystring');
const axios = require('axios');
const rickandmortyapi = 'https://rickandmortyapi.com/api';
router.get('/', (req, res) => {
    let query = queryString.stringify(req.query);
    axios.get(`${rickandmortyapi}/character/?${query}`).then(characters => {
        res.send({
            characters : characters.data.results,
            info: characters.data.info
        });
    }).catch(erro =>{
        res.send({ 
            erro : true,
            message: erro.response.data
        });
    });
});
module.exports = router;