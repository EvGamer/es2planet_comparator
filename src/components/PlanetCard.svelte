<script>
  import { createEventDispatcher } from 'svelte';
  import Select from 'svelte-select';
  import { BonusType } from '../constants/bonusType';
  import { PlanetSize } from '../constants/planetSize';
  import { PLANET_SPECIALIZATION_STATS } from '../constants/planetSpecialization';
  import { PLANET_STATS } from '../constants/planetStats';
  import { PlanetTypes } from '../constants/planetTypes';
  import { ResourceType } from '../constants/resourceType';
  import { sumBonuses, sumImprovementBonuses } from '../lib/sumBonuses';
  import ButtonRemove from './ButtonRemove.svelte';
  import PlanetCardCell from './PlanetCardCell.svelte';

  const dispatch = createEventDispatcher();

  export let planetType = PlanetTypes.terran;
  export let size = PlanetSize.medium;
  export let systemImprovements = [];

  const planet = PLANET_STATS[planetType];

  let planetSpecialization = null;

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

  const mapResources = (resources, getValue) => resources.map(
    (resource, i) => ({
      type: resource,
      value: getValue(resource, i)
    })
  )

  $: perPopImprovmentBonus = mapResources(
    displayedResources,
    (resource) => sumImprovementBonuses({
      improvements: systemImprovements,
      planet,
      resource,
      bonusType: BonusType.perPop
    }),
  )

  $: perPopSpecializationBonuses = mapResources(
    displayedResources,
    (resource) => (planetSpecialization
      ? sumBonuses({
        bonuses: planetSpecialization.bonuses,
        planet,
        resource,
        bonusType: BonusType.perPop,
      })
      : 0
    ),
  )

  $: popCapacityBonus = sumImprovementBonuses({
    improvements: systemImprovements,
    planet,
    resource: ResourceType.maxPopCapacity,
    bonusType: BonusType.perPlanet,
  });

  $: totalPopCapacity = maxPopCapacity + popCapacityBonus;

  $: perPopTotal = mapResources(
    displayedResources,
    (resource, i) => (
      perPopImprovmentBonus[i].value
      + perPopSpecializationBonuses[i].value
      + planet[resource]
    ),
  )
</script>

<div class="card">
  <div class="title">
    <div class="text">{size} {planetType}</div>
    <ButtonRemove on:click={() => dispatch('remove')}/>
  </div>
  <div class="stats">
    <PlanetCardCell>Specialization</PlanetCardCell>
    <div class="specialization">
      <Select
        itemId="id"
        label="name"
        bind:value={planetSpecialization}
        items={PLANET_SPECIALIZATION_STATS}
      />
    </div>
    <div style:grid-column="1"></div>
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

  .stats>* {
    align-self: center;
  }

  .specialization {
    grid-column: food / happiness;
    --background: var(--secondary-bg-color);
    --border-radius: 0;
    --border: none;
    --border-hover: none;
    --list-border-radius: 0;
    --input-padding: 0;
    --padding: 0 0 0 10px;
    --item-padding: 0 0 0 10px;
    --list-background: var(--secondary-bg-color);
    --item-hover-bg: var(--secondary-hover-bg-color);
    --item-is-active-bg: var(--secondary-active-bg-color);
    --item-first-border-radius: 0;
    --value-container-padding: 0;
    --height: 1.4em;
    --clear-select-width: 1.4em;
  }

</style>
