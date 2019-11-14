const axios = require('axios');
const rickandmortyapi = 'https://rickandmortyapi.com/api';

module.exports = {
    getRandomNumber(){
        let maxOfCharacters = 493;
        return Math.floor(Math.random() * maxOfCharacters);
    },

    async getRandomCharacters(){
        let numberOfRandomNumbers = 6;
        let randomNumbers = [];
        for (let index = 0; index < numberOfRandomNumbers; index++) {
            randomNumbers.push(this.getRandomNumber());
        }
        return await axios.get(`${rickandmortyapi}/character/${randomNumbers}`).then(data => data);
    }
}