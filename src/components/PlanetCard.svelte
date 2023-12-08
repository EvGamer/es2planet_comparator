<script>
  import { createEventDispatcher } from 'svelte';
  import { BonusType } from '../constants/bonusType';
  import { PlanetSize } from '../constants/planetSize';
  import { PLANET_STATS } from '../constants/planetStats';
  import { PlanetTypes } from '../constants/planetTypes';
  import { ResourceType } from '../constants/resourceType';
  import { sumImprovementBonuses } from '../lib/sumImprovmentBonuses';
  import ButtonRemove from './ButtonRemove.svelte';
  import PlanetCardCell from './PlanetCardCell.svelte';

  const dispatch = createEventDispatcher();

  export let planetType = PlanetTypes.terran;
  export let size = PlanetSize.medium;
  export let systemImprovements = [];

  const planet = PLANET_STATS[planetType];
  const {
    food,
    industry,
    dust,
    science,
    happiness,
  } = planet;

  const maxPopCapacity = planet.popCapacityBySize[size];

  const displayedResources = [
    ResourceType.food,
    ResourceType.industry,
    ResourceType.dust,
    ResourceType.science,
    ResourceType.happiness,
  ]

  const l = v => {
    console.log(v);
    return v;
  }

  $: perPopImprovmentBonus = displayedResources.map(
    (resource) => ({
      type: resource,
      value: sumImprovementBonuses({
        improvements: systemImprovements,
        planet,
        resource,
        bonusType: BonusType.perPop
      })
    })
  );

  $: popCapacityBonus = sumImprovementBonuses({
    improvements: systemImprovements,
    planet,
    resource: ResourceType.maxPopCapacity,
    bonusType: BonusType.perPlanet,
  });

  $: totalPopCapacity = maxPopCapacity + popCapacityBonus;

  $: perPopTotal = displayedResources.map((resource, i) => ({
    type: resource,
    value: perPopImprovmentBonus[i].value + planet[resource],
  }))
</script>

<div class="card">
  <div class="title">
    <div class="text">{size} {planetType}</div>
    <ButtonRemove on:click={() => dispatch('remove')}/>
  </div>
  <div class="stats">
    <div></div>
    <PlanetCardCell>Food</PlanetCardCell>
    <PlanetCardCell>Industry</PlanetCardCell>
    <PlanetCardCell>Dust</PlanetCardCell>
    <PlanetCardCell>Science</PlanetCardCell>
    <PlanetCardCell>Happiness</PlanetCardCell>
    <PlanetCardCell>Capacity</PlanetCardCell>

    <PlanetCardCell>Per pop</PlanetCardCell>
    {#each displayedResources as type}
      <PlanetCardCell key={type} type={type}>
        {planet[type]}
      </PlanetCardCell>
    {/each}
    <PlanetCardCell type="maxPopCapacity">
      {maxPopCapacity}
    </PlanetCardCell>


    <PlanetCardCell>With improvements</PlanetCardCell>
    {#each perPopTotal as { value, type }}
      <PlanetCardCell key={type} type={type}>
        {value}
      </PlanetCardCell>
    {/each}
    <PlanetCardCell type="maxPopCapacity">
      {popCapacityBonus}
    </PlanetCardCell>

    <PlanetCardCell type="row-name">Total</PlanetCardCell>
    {#each perPopTotal as { value, type }}
      <PlanetCardCell key={type} type={type}>
        {value * totalPopCapacity}
      </PlanetCardCell>
    {/each}
    <PlanetCardCell type="maxPopCapacity">
      {totalPopCapacity}
    </PlanetCardCell>
  </div>
</div>

<style>
  .card {
    margin-bottom: 15px;
  }

  .title {
    font-size: 1.2em;
    margin-bottom: 5px;
    color: #fdfae7;
    display: flex;
    align-items: center;
    gap: 0.2em;
  }

  .stats {
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
  }
</style>
