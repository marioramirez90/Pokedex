function pokemoncard(pokemonInfo, image) {
    return `<article class="article-card">
    <section class="article-card-header">
        <div class="article-card-Image  ${pokemonInfo.types[0].type.name}">
            <img src="${image}" alt="${pokemonInfo.name}">
        </div>
    </section>
    <section class="article-main-content">
        <h2 class="article-card-title">#${pokemonInfo.id} ${pokemonInfo.name}</h2>
    </section>
</article>`
}
