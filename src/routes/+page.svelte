<script>
  import { PLANET_STATS } from '../constants/planetStats';
  
  let lastPlanetId = 0;

  let selectedPlanets = [];

  const addPlanet = (planet) => {
    selectedPlanets = [...selectedPlanets, planet];
  }

  const planetOptions = Object.entries(PLANET_STATS)
    .map(([name, stats]) => ({ name, stats }))
</script>

<div class="container">
  <aside class="planet-types">
    <h3>Planet types</h3>
    {#each planetOptions as planet}
      <div 
        key={planet.name}
        class="option"
        role="button"
        on:click={() => addPlanet(planet)}
      >
        {planet.name}
      </div>
    {/each}
  </aside>
  <main>
    <h3>Planet comparison</h3>
    <div class="comparison">
      {#each selectedPlanets as { id, name, stats }}
        <div key={id} class="card">
          <div class="title">{name}</div>
          <div class="stats">
            <div class="cell food header">Food</div>
            <div class="cell industry header">Industry</div>
            <div class="cell dust header">Dust</div>
            <div class="cell science header">Science</div>
            <div class="cell pop header">Capacity</div>
            <div class="cell moral header">Happiness</div>
            <div class="cell row-name per-pop">Per pop</div>
            <div class="cell food per-pop">{stats.food}</div>
            <div class="cell industry per-pop">{stats.industry}</div>
            <div class="cell dust per-pop">{stats.industry}</div>
            <div class="cell science per-pop">{stats.science}</div>
            <div class="cell pop per-pop">{stats.popCapacityBySize.huge}</div>
            <div class="cell moral per-pop">{stats.happiness}</div>
          </div>
        </div>
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
    max-width: 200px;
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
  
  .comparison .card {
    margin-bottom: 15px;
  }

  .comparison .card .title {
    margin-bottom: 5px;
  }
  
  .comparison .card .stats {
    display: grid;
    gap: 4px 10px;
    grid-template-columns: 
      [row-name] auto 
      [food] 1fr
      [industry] 1fr
      [dust] 1fr
      [science] 1fr
      [happiness] 1fr
      [capacity] 1fr;
    grid-template-rows:
      [header] auto
      [per-pop] auto;
  }

  .comparison .card .stats .cell.row-name{
    grid-column: row-name;
  }

  .comparison .card .stats .cell.food{
    grid-column: food;
  }

  .comparison .card .stats .cell.industry{
    grid-column: industry;
  }

  .comparison .card .stats .cell.dust{
    grid-column: dust;
  }

  .comparison .card .stats .cell.science{
    grid-column: science;
  }

  .comparison .card .stats .cell.moral {
    grid-column: happiness;
  }

  .comparison .card .stats .cell.pop {
    grid-column: capacity;
  }

  .comparison .card .stats .cell.header {
    grid-row: header;
  }

  .comparison .card .stats .cell.per-pop{
    grid-row: per-pop;
  }
</style>