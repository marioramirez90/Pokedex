async function fetchData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    const responseAsJson = await response.json();
}

function renderPokemons(responseAsJson) {
    const contentRef = document.getElementById("container");

    responseA

}
