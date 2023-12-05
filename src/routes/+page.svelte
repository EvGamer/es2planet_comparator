<script>
  import PlanetCard from '../components/PlanetCard.svelte';
  import Button from '../components/Button.svelte';
  import { PlanetSize } from '../constants/planetSize';
  import { PLANET_STATS } from '../constants/planetStats';

  let lastPlanetId = 0;
  let planetSize = PlanetSize.huge;

  let comparedPlanets = [];

  const addPlanet = (planetType, size) => {
    comparedPlanets = [
      ...comparedPlanets,
      { id: lastPlanetId++, type: planetType, size }
    ];
  }

  const planetOptions = Object.entries(PLANET_STATS)
    .map(([type, stats]) => ({ type, stats }))

  const availableSizes = [
    { text: "XS", size: PlanetSize.tiny },
    { text: "S", size: PlanetSize.small },
    { text: "M", size: PlanetSize.medium },
    { text: "L", size: PlanetSize.large },
    { text: "XL", size: PlanetSize.huge }
  ]
</script>

<div class="container">
  <aside class="planet-types">
    <h3>Planet types</h3>
    {#each planetOptions as planet}
      <div
        key={planet.name}
        class="option"
        on:click={() => addPlanet(planet)}
      >
        <div class="title">{planet.type}</div>

        <div class="sizes">
          {#each availableSizes as { text, size }}
            <Button text={text} on:click={() => addPlanet(planet.type, size)}/>
          {/each}
        </div>
      </div>
    {/each}
  </aside>
  <main>
    <h3>Planet comparison</h3>
    <div class="comparison">
      {#each comparedPlanets as { id, type, size }}
        <PlanetCard
          key={id}
          planetType={type}
          size={size}
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
  }

  .container>aside {
    flex: 1;
  }

  .planet-types {
    max-width: 300px;
  }

  .planet-types .option {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .planet-types .option .sizes {
    gap: 10px;
  }

</style>
