const axios = require("axios");

function catchPokemon(pokemonId) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/
    `).then(function(res) {
        console.log(`id: ${res.data.id}\nname: ${res.data.name}`);
    }).catch(function(err) {
        console.log(err);
    });
}

catchPokemon(500);