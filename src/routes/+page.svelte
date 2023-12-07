<script>
  import PlanetCard from '../components/PlanetCard.svelte';
  import PlanetTypeList from '../components/PlanetTypeList.svelte';
  import SystemImprovementsList from '../components/SystemImprovementsList.svelte';
  import TabContainer from '../components/TabContainer.svelte';
  import TabContent from '../components/TabContent.svelte';

  const tabs = [
    { id: "planets", name: "Planets" },
    { id: "improvements", name: "Improvements" },
  ]

  let lastPlanetId = 0;

  let comparedPlanets = [];
  let systemImprovements = [];

  const handleAddSystemImprovement = (event) => {
    const { improvement } = event.detail;
    systemImprovements = [...systemImprovements, improvement];
  }

  const handleRemoveSystemImprovement = (event) => {
    const { id } = event.detail;
    systemImprovements = systemImprovements.filter(
      improvement => improvement.id !== id
    )
  }

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
    <TabContainer
      tabs={tabs}
    >
      <TabContent id="planets">
        <PlanetTypeList on:add={handleAddPlanet} />
      </TabContent>
      <TabContent id="improvements">
        <SystemImprovementsList
          selected={systemImprovements}
          on:add={handleAddSystemImprovement}
          on:remove={handleRemoveSystemImprovement}
        />
        <div slot="improvements">Improvements</div>
      </TabContent>
    </TabContainer>
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
