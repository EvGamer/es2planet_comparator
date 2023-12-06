<script>
  import PlanetCard from '../components/PlanetCard.svelte';
  import Button from '../components/Button.svelte';
  import { PlanetSize } from '../constants/planetSize';
  import { PLANET_STATS } from '../constants/planetStats';

  let lastPlanetId = 0;

  let comparedPlanets = [];

  const addPlanet = (planetType, size) => {
    comparedPlanets = [
      ...comparedPlanets,
      { id: lastPlanetId++, type: planetType, size }
    ];
  }

  const removePlanet = (id) => {
    comparedPlanets = comparedPlanets.filter(planet => planet.id !== id);
  }

  const planetOptions = Object.entries(PLANET_STATS)
    .map(([type, stats]) => ({ type, stats }))

  const availableSizes = [
    { text: "XS", size: PlanetSize.tiny },
    { text: "S", size: PlanetSize.small },
    { text: "M", size: PlanetSize.medium },
    { text: "L", size: PlanetSize.large },
    { text: "XL", size: PlanetSize.huge }
  ];

</script>

<div class="container">
  <aside class="planet-types">
    <h3>Planet types</h3>
    <div class="list">
      {#each planetOptions as planet}
        <div
          key={planet.name}
          class="option"
        >
          <div class="title">{planet.type}</div>

          <div class="sizes">
            {#each availableSizes as { text, size }}
              <Button text={text} on:click={() => addPlanet(planet.type, size)}/>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </aside>
  <main>
    <h3>Planet comparison</h3>
    <div class="comparison">
      {#each comparedPlanets as { id, type, size }}
        <PlanetCard
          key={id}
          planetType={type}
          size={size}
          on:remove={() => removePlanet(id)}
        />
      {/each}
    </div>
  </main>

</div>

<style>
  .container {
    background: #222328;
    color: #d0cbad;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
  }

  .container>main {
    flex: 2;
    margin: 0 10px
  }

  .container>aside {
    flex: 1;
  }

  .planet-types .list{
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-gap: 5px 10px;
  }

  .planet-types .option {
    width: 100%;
    display: contents;
    align-items: center;
  }

  .planet-types .option .sizes {
    display: flex;
    gap: 5px;
  }

  .planet-types .option .title {
    align-self: center;
  }

</style>
