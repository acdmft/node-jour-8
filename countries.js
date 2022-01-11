const axios = require("axios");

const countriesNames = [];

function getCountries() {
    axios.get("https://restcountries.com/v3.1/all")
    .then(function(res) {
        res.data.forEach(element => {
            countriesNames.push(element.name.common);
        });;
        console.log(countriesNames);
    })
    .catch(function(err) {
        console.error(err);
    });
}

getCountries();
