const monInput = document.getElementById("pokemon-input");
const searchBtn = document.getElementById("search-btn");

const fetchMon = (monName) => {
    const uniformName = monName.toLowerCase().trim(); //incase cases and random spaces

    const url = `https://pokeapi.co/api/v2/pokemon/${uniformName}`; //link to api + mon name

    fetch(url)
        .then(res => {
            if (!res.ok){
                throw new Error ("Pokemon not found...");
            }
            return res.json();
        })

        .then(data => {
            const pokemon = {};
            pokemon['name'] = data.name;
            pokemon['types'] = data.types;
            pokemon['image'] = data.sprites.front_default;

            const nameDisplay = document.getElementById("mon-name");
            const typeDisplay = document.getElementById("mon-type");
            const typeSplit = pokemon.types.map(t => t.type.name).join('/');
            nameDisplay.textContent = pokemon.name;
            typeDisplay.textContent = `Type(s): ${typeSplit}`;

        })
        .catch(err => {
            console.error(err.message);
            alert("Checking spelling or make sure it exists lowkey");
        });
};

searchBtn.addEventListener("click", () => {
    const userIpt = monInput.value;
    if (userIpt){
        fetchMon(userIpt);
    }else{
        alert("Type Pokemon please :(");
    }
});

