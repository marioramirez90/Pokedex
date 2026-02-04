async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1&offset=0");
    const responseAsJson = await response.json();
    renderPokemons(responseAsJson);
}

async function loadPokemon(url) {  
    const response = await fetch(url);
    return await response.json();
}

function renderPokemons(responseAsJson) {
    const contentRef = document.getElementById("container");

    responseAsJson.results.forEach(async (pokemon) => {
        const pokemonInfo = await loadPokemon(pokemon.url);
        const image = pokemonInfo.sprites.other.dream_world.front_default;

        contentRef.innerHTML += `<article class="article">
            <h2>#${pokemonInfo.id} ${pokemonInfo.name}</h2>
             <img src="${image}" alt="${pokemonInfo.name}">
        </article>`;
    });
}
