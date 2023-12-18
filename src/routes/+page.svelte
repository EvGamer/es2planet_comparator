<script>
  import PlanetCard from '../components/PlanetCard.svelte';
  import PlanetTypeList from '../components/PlanetTypeList.svelte';
  import SystemImprovementsList from '../components/SystemImprovementsList.svelte';
  import TabContainer from '../components/TabContainer.svelte';
  import TabContent from '../components/TabContent.svelte';
  import Globe from '../components/icons/Globe.svelte';
  import Building from '../components/icons/Building.svelte';
  import { localStorageWriteable } from '../lib/localStorage';

  const tabs = [
    {
      id: "planets",
      icon: Globe,
    },
    {
      id: "improvements",
      icon: Building,
    },
  ]

  let lastPlanetId = 0;

  let comparedPlanets = localStorageWriteable(
    'comparedPlanets', []
  );
  let systemImprovements = localStorageWriteable(
    'systemImprovements', []
  );

  function handleAddPlanet(event) {
    const { type, size } = event.detail;
    comparedPlanets.update(comparedPlanets => [
      ...comparedPlanets,
      { id: lastPlanetId++, type, size }
    ]);
  }

  function removePlanet(id) {
    comparedPlanets.update(comparedPlanets =>
      comparedPlanets.filter(planet => planet.id !== id)
    );
  }

</script>

<div class="container">
  <aside class="planet-types">
    <h3>Planet types</h3>
    <TabContainer
      tabs={tabs}
    >
      <TabContent id="planets">
        <PlanetTypeList on:add={handleAddPlanet} />
      </TabContent>
      <TabContent id="improvements">
        <SystemImprovementsList
          bind:selected={$systemImprovements}
        />
        <div slot="improvements">Improvements</div>
      </TabContent>
    </TabContainer>
  </aside>
  <main>
    <h3>Planet comparison</h3>
    <div class="comparison">
      {#each $comparedPlanets as { id, type, size }}
        <PlanetCard
          key={id}
          planetType={type}
          size={size}
          systemImprovements={$systemImprovements}
          on:remove={() => removePlanet(id)}
        />
      {/each}
    </div>
  </main>

</div>

<style>
  .container {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    min-height: 100%;
    color: var(--text-color);
  }

  .container>main {
    flex: 2;
    margin: 0 10px
  }

  .container>aside {
    flex: 1;
  }

  .planet-types {
    padding-left: 10px;
  }


</style>
