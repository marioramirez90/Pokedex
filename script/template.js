function pokemoncard(pokemonInfo) {
    return `<article onclick="openDialog(${allPokemons.length - 1})" class="article-card ${pokemonInfo.types[0].type.name}">
    <section class="article-card-header">
        <div class="article-card-Image  ${pokemonInfo.types[0].type.name}">
            <span class="article-card-id">#${pokemonInfo.id}</span>
            <img class="pokemon-image" src="${pokemonInfo.sprites.other.dream_world.front_default}" alt="${pokemonInfo.name}">
            <img class="pokemon-type-icon"  src="assets/icon/${pokemonInfo.types[0].type.name}.svg" alt="${pokemonInfo.types[0].type.name} type icon">
            
        </div>
    </section>
    <section class="article-main-content">
        <h2 class="article-card-title"> ${pokemonInfo.name}</h2>
    </section>
</article>`
}

function notFound(){
    return `   
    <article class="article-card ">
    <section class="article-card-header">
        <div class="article-card-Image-no ">
            <span class="article-card-id">#404</span>
            <img class="pokemon-image" src="assets/img/nofound.png" alt="pokeball-logo">
        </div>
    </section>
    <section class="article-main-content">
        <h2 class="article-card-title">Not Found</h2>
    </section>
</article>`
    
 
}

function DialogPokemoncard(pokemonInfo) {
    return `<article class="article-card ${pokemonInfo.types[0].type.name}">
    <section class="article-card-header">
        <div class="article-card-Image  ${pokemonInfo.types[0].type.name}">
            <span class="article-card-id">#${pokemonInfo.id}</span>
            <img class="pokemon-image" src="${pokemonInfo.sprites.other.dream_world.front_default}" alt="${pokemonInfo.name}">
            <img class="pokemon-type-icon"  src="assets/icon/${pokemonInfo.types[0].type.name}.svg" alt="${pokemonInfo.types[0].type.name} type icon">
            
        </div>
    </section>
    <section class="article-main-content">
        <h2 class="article-card-title"> ${pokemonInfo.name}</h2>
    </section>
</article>`
}
