<script>
  import { PLANET_STATS } from '../constants/planetStats';

  const planetOptions = Object.entries(PLANET_STATS)
    .map(([name, stats]) => ({ name, stats }))
</script>

<div class="container">
  <aside class="planet-types">
    <h3>Planet types</h3>
    {#each planetOptions as planet}
      <div class="option">
        {planet.name}
      </div>
    {/each}
  </aside>
  <main>
    <h3>Planet comparison</h3>
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
    flex: 2,
  }

  .container>aside {
    flex: 1,
  }
  
  .planet-types {
    max-width: 200px;
    flex: 1,
  }

  .planet-types .option {
    padding: 5px 10px;
    cursor: pointer;
    transition: 50ms cubic-bezier(0.445, 0.05, 0.55, 0.95) background-color;
  }
  
  .planet-types .option:hover {
    background-color: #ffffff14;
  }

  .planet-types .option:active {
    background-color: #ffffff2e;
  }
</style>