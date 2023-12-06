<script>
  import PlanetCard from '../components/PlanetCard.svelte';
  import PlanetTypeList from '../components/PlanetTypeList.svelte';

  let lastPlanetId = 0;

  let comparedPlanets = [];

  const handleAddPlanet = (event) => {
    const { type, size } = event.detail;
    comparedPlanets = [
      ...comparedPlanets,
      { id: lastPlanetId++, type, size }
    ];
  }

  const removePlanet = (id) => {
    comparedPlanets = comparedPlanets.filter(planet => planet.id !== id);
  }

</script>

<div class="container">
  <aside class="planet-types">
    <h3>Planet types</h3>
    <PlanetTypeList on:add={handleAddPlanet} />
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


</style>
