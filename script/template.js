function pokemoncard(pokemonInfo) {
  return `
    <article onclick="openDialog(${allPokemons.length - 1})" class="article-card ${pokemonInfo.types[0].type.name}">
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
    <img class="pokemon-image-dialog" src="${pokemonInfo.sprites.other.dream_world.front_default}" alt="${pokemonInfo.name}"></div>
    
    </section>
    <div class="card-content">
    <h2 class="article-card-title"> ${pokemonInfo.name}</h2>
 
  <div class="tab-bar">
  <button class="tab-button" onclick="openTab('about')">About</button>
  <button class="tab-button " onclick="openTab('baseStats')">Base Stats</button>
  <button class="tab-button" onclick="openTab('evolution')">Evolution</button>
  <button class="tab-button" onclick="openTab('moves')">Moves</button>

</div>

<div id="about" class="name">
<div class="progress-container">
<span class="card-text">HP</span>
<div class="progress">
<div class="progress-bar" style="width:${pokemonInfo.stats[0].base_stat}%">${pokemonInfo.stats[0].base_stat}HP</div>
</div>
</div>
<div class="progress-container">
<span class="card-text">Attack</span>
<div class="progress">
<div class="progress-bar" style="width:${pokemonInfo.stats[1].base_stat}%">${pokemonInfo.stats[1].base_stat}HP</div>
</div>
</div>
<div class="progress-container">
<span class="card-text">Defense</span>
<div class="progress">
<div class="progress-bar" style="width:${pokemonInfo.stats[2].base_stat}%">${pokemonInfo.stats[2].base_stat}HP</div>
</div>
</div>
<div class="progress-container">
<span class="card-text">Sp.Atk</span>
<div class="progress">
<div class="progress-bar" style="width:${pokemonInfo.stats[3].base_stat}%">${pokemonInfo.stats[3].base_stat}HP</div>
</div>
</div>
<div class="progress-container">
<span class="card-text">Sp.Def</span>
<div class="progress">
<div class="progress-bar" style="width:${pokemonInfo.stats[4].base_stat}%">${pokemonInfo.stats[4].base_stat}HP</div>
</div>
</div>
<div class="progress-container">
<span class="card-text">Sprrd</span>
<div class="progress">
<div class="progress-bar" style="width:${pokemonInfo.stats[5].base_stat}%">${pokemonInfo.stats[5].base_stat}HP</div>
</div>
</div>
<div class="progress-container">
<span class="card-text">Total</span>
<div class="progress">
<div class="progress-bar" style="width:${pokemonInfo.stats[0].base_stat}%">${pokemonInfo.stats[0].base_stat}HP</div>
</div>
</div>
</div>





<div id="baseStats" class="name" style="display:none">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p> 
</div>

<div id="evolution" class="name" style="display:none">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>
<div id="moves" class="name" style="display:none">
  <h2></h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

    
    
    </section>
    </article>`;
}
