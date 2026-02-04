async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    const responseAsJson = await response.json();

    renderPokemons(responseAsJson)
}

function renderPokemons(responseAsJson) {
    const contentRef = document.getElementById("container");

    responseAsJson.results.forEach((pokemon) => {
        contentRef.innerHTML += `<article class="article">
            <h2>${pokemon.name}</h2>
        </article>`;        
    });
}
