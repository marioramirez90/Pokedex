let allPokemons = [];
let currentPokemon = 0;
let limit = 20

async function init(){
    await loadAndShowPokemon();
    
    
}

async function fetchData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentPokemon}`);
    const responseAsJson = await response.json();
    return responseAsJson;

}

async function loadPokemon(url) {  
    const response = await fetch(url);
    const pokemonInfo = await response.json();

    allPokemons.push(pokemonInfo)
    return pokemonInfo;

}

async function renderPokemons(responseAsJson) {
    const contentRef = document.getElementById("container");
    const pokemonRef = responseAsJson.results;

    for (let i = 0; i < pokemonRef.length; i++) {
        const pokemon = pokemonRef[i];
        const pokemonInfo = await loadPokemon(pokemon.url);
        const image = pokemonInfo.sprites.other.dream_world.front_default;

        contentRef.innerHTML += pokemoncard(pokemonInfo, image);

    }};

    function filterPokemon(){
        let inputRef = document.getElementById("search-input").value.toLowerCase();
        let contentRef = document.getElementById("container")
        let filterRef = allPokemons.filter(p => p.name.toLowerCase().includes(inputRef));
        contentRef.innerHTML = "";

        for (let index = 0; index < filterRef.length; index++) {
            let pokemonInfo = filterRef[index];
            let image = pokemonInfo.sprites.other.dream_world.front_default;
            contentRef.innerHTML += pokemoncard(pokemonInfo, image);
        }
    }

    async function loadAndShowPokemon() {
         let load = await fetchData();
         currentPokemon += limit;
         await renderPokemons(load);

        
    }


    //responseAsJson.results.forEach(async (pokemon) => {
     //   
      //  

      //  contentRef.innerHTML += pokemoncard(pokemonInfo, image);
   

