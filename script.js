let allPokemons = [];
let currentPokemon = 0;
let currentIndex = 0;
let limit = 30

const contentRef = document.getElementById("container");
const dialogRef = document.getElementById("pokemon-dialog")
const openPokemonRef = document.getElementById("show-pokemon")

async function init() {
    loadingSpinner()
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
    const pokemonRef = responseAsJson.results;
    for (let i = 0; i < pokemonRef.length; i++) {
        const pokemon = pokemonRef[i];
        const pokemonInfo = await loadPokemon(pokemon.url);
        contentRef.innerHTML += pokemoncard(pokemonInfo);
    }
    
};

function filterPokemon() {
    loadingSpinner()
    let inputRef = document.getElementById("search-input");
    let inputText = inputRef.value.toLowerCase();
    let filterRef = allPokemons.filter(p => p.name.toLowerCase().includes(inputText));
    contentRef.innerHTML = "";
    document.getElementById("load-pokemon-list").classList.add("d-none-button");
    
    if (inputText.length < 3) {
        inputRef.value = "text must be at least 3 characters";
        contentRef.innerHTML += notFound()
       
    } else if (filterRef.length === 0) {
       
        contentRef.innerHTML += notFound()
       

    } else {
        for (let index = 0; index < filterRef.length; index++) {
            let pokemonInfo = filterRef[index];
            contentRef.innerHTML += pokemoncard(pokemonInfo);
           
     }
    }};

async function loadAndShowPokemon() {
    loadingSpinner()
    let load = await fetchData();
    currentPokemon += limit;
    await renderPokemons(load);
   
}

function openDialog(index){
    currentIndex = index;
    let pokemonInfo = allPokemons[currentIndex];
  
    openPokemonRef.innerHTML += DialogPokemoncard(pokemonInfo);
    dialogRef.showModal();
    
}

function leftArray() {
    if (currentIndex > 0) {
    currentIndex -= 1;
    } else {
    currentIndex = allPokemons.length - 1;
 }
 openPokemonRef.innerHTML = "";
    openDialog(currentIndex);
}

function rightArray() {
    if (currentIndex < allPokemons.length - 1) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
   openPokemonRef.innerHTML = "";
    openDialog(currentIndex);
}


function closeDialog(){
    dialogRef.close()
    openPokemonRef.innerHTML = "";
}

function openTab(tabName) {
  let i;
  let x = document.getElementsByClassName("name");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}

function loadingSpinner(){
    document.getElementById("loading-spinner").classList.remove("show-spinner-none")
    setTimeout(closeloadingSpinner, 1000);
}

function closeloadingSpinner(){
    document.getElementById("loading-spinner").classList.add("show-spinner-none")
}



