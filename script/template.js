function pokemoncard(pokemonInfo) {
    return `<article class="article-card ${pokemonInfo.types[0].type.name}">
    <section class="article-card-header">
        <div class="article-card-Image  ${pokemonInfo.types[0].type.name}">
            <span class="article-card-id">#${pokemonInfo.id}</span>
            <img class="pokemon-image" src="${pokemonInfo.sprites.other.dream_world.front_default}" alt="${pokemonInfo.name}">
             <img src="assets/icon/${pokemonInfo.types[0].type.name}.svg" alt="${pokemonInfo.name}">
        </div>
    </section>
    <section class="article-main-content">
        <h2 class="article-card-title"> ${pokemonInfo.name}</h2>
    </section>
</article>`
}

function notFound(){
    return `   <section class="not_found">
    <div><p>4</p></div>
    <div><img src="assets/img/pokeball.png" alt="pokeball-logo"></div>
    <div><p>4</p></div>
</section>`
 
}