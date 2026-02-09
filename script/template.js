function pokemoncard(pokemonInfo) {
  return `
    <article onclick= "openDialog(${allPokemons.indexOf(pokemonInfo)})" class="article-card ${pokemonInfo.types[0].type.name}">
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
    </article>`;
  }

function notFound() {
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
    </article>`;
}

function DialogPokemoncard(pokemonInfo) {
  return `<article class="article-card-dialog ${pokemonInfo.types[0].type.name}">
    <section class="article-card-header">
    <div class="article-card-Image-dialog ${pokemonInfo.types[0].type.name}">
    <span class="article-card-id-dialog">#${pokemonInfo.id}</span>
    <img class="pokemon-type-icon"  src="assets/icon/${pokemonInfo.types[0].type.name}.svg" alt="${pokemonInfo.types[0].type.name} type icon">
     ${pokemonInfo.types[1] ? `<img class="pokemon-type-icon_2" src="assets/icon/${pokemonInfo.types[1].type.name}.svg" alt="${pokemonInfo.types[1].type.name} type icon">` : ""}
    <img class="pokemon-image-dialog" src="${pokemonInfo.sprites.other.dream_world.front_default}" alt="${pokemonInfo.name}"></div>
    </section>
    <div class="card-content">
    <h2 class="article-card-title-dialog"> ${pokemonInfo.name}</h2>
    <div class="tab-bar">
    <button class="tab-button" onclick="openTab('about')">About</button>
    <button class="tab-button " onclick="openTab('baseStats')">Base Stats</button>
   
    </div>
    <div id="about" class="name">
    <div class="about">
    <h3>Height</h3>
    <span>${(pokemonInfo.height / 10).toFixed(2).replace('.', ',')} m</span>
    </div>
    <div class="about">
    <h3>Weight</h3>
    <span>${(pokemonInfo.weight / 10).toFixed(2).replace('.', ',')} kg</span>
    </div>
    <div class="about">
    <h3>Abilities</h3>
    <div>
    <span class="about-span">${pokemonInfo.abilities[0].ability.name}</span>
    ${pokemonInfo.abilities[1] ? `, ${pokemonInfo.abilities[1].ability.name}` : ""}
    </div>
    </div>
    <div class="about">
    <h3>Type</h3>
    <span class="about-span-last">
    ${pokemonInfo.types[0].type.name}
    ${pokemonInfo.types[1] ? `, ${pokemonInfo.types[1].type.name}` : ""}
    </span>
    </div>
    </div>
    <div id="baseStats" class="name" style="display:none">
    <div class="progress-container">
    <h3 class="card-text">HP</h3>
    <div class="progress">
    <div class="progress-bar" style="width:${pokemonInfo.stats[0].base_stat}%">${pokemonInfo.stats[0].base_stat} HP</div>
    </div>
    </div>
    <div class="progress-container">
    <h3 class="card-text">Attack</h3>
    <div class="progress">
    <div class="progress-bar" style="width:${pokemonInfo.stats[1].base_stat}%">${pokemonInfo.stats[1].base_stat} ATK</div>
    </div>
    </div>
    <div class="progress-container">
    <h3 class="card-text">Defense</h3>
    <div class="progress">
    <div class="progress-bar" style="width:${pokemonInfo.stats[2].base_stat}%">${pokemonInfo.stats[2].base_stat} DEF</div>
    </div>
    </div>
    <div class="progress-container">
    <h3 class="card-text">Sp.Atk</h3>
    <div class="progress">
    <div class="progress-bar" style="width:${pokemonInfo.stats[3].base_stat}%">${pokemonInfo.stats[3].base_stat} SP.A</div>
    </div>
    </div>
    <div class="progress-container">
    <h3 class="card-text">Sp.Def</h3>
    <div class="progress">
    <div class="progress-bar" style="width:${pokemonInfo.stats[4].base_stat}%">${pokemonInfo.stats[4].base_stat} SP.D</div>
    </div>
    </div>
    <div class="progress-container">
    <h3 class="card-text">Speed</h3>
    <div class="progress">
    <div class="progress-bar" style="width:${pokemonInfo.stats[5].base_stat}%">${pokemonInfo.stats[5].base_stat} SPD</div>
    </div>
    </div>
    </div>
    </section>
    </article>`;
}
