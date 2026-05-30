const monInput = document.getElementById("pokemon-input");
const searchBtn = document.getElementById("search-btn");

const fetchMon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url)
        .then(res => {
            return res.json();
        })

        .then(data => {
            console.log(data);
            const pokemon = {};
            pokemon['name'] = data.name;
            pokemon['types'] = data.types;
            console.log(pokemon);
        })
};

fetchMon();