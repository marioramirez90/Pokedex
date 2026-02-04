function pokemoncard(pokemonInfo, image) {
    return `<article>
    <section class="article-card-header">
        <div class="article-card-Image">
            <img src="${image}" alt="${pokemonInfo.name}">
        </div>
    </section>
    <section class="article-main-content">
        <h2 class="card-title">${pokemonInfo.name}</h2>
    </section>
</article>`
}
