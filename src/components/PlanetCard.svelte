<script>
  import { createEventDispatcher } from 'svelte';
  import { PlanetSize } from '../constants/planetSize';
  import { PLANET_STATS } from '../constants/planetStats';
  import { PlanetTypes } from '../constants/planetTypes';
  import ButtonRemove from './ButtonRemove.svelte';

  const dispatch = createEventDispatcher();

  export let planetType = PlanetTypes.terran;
  export let size = PlanetSize.medium;

  const stats = PLANET_STATS[planetType]
  const {
    food,
    industry,
    dust,
    science,
    happiness,
  } = PLANET_STATS[planetType];

  const maxPop = stats.popCapacityBySize[size]

  const getTotal = (statName) => maxPop * stats[statName];
</script>

<div class="card">
  <div class="title">
    <div class="text">{size} {planetType}</div>
    <ButtonRemove on:click={() => dispatch('remove')}/>
  </div>
  <div class="stats">
    <div class="cell food header">Food</div>
    <div class="cell industry header">Industry</div>
    <div class="cell dust header">Dust</div>
    <div class="cell science header">Science</div>
    <div class="cell pop header">Capacity</div>
    <div class="cell moral header">Happiness</div>
    <div class="cell row-name per-pop">Per pop</div>
    <div class="cell food per-pop">{food}</div>
    <div class="cell industry per-pop">{industry}</div>
    <div class="cell dust per-pop">{dust}</div>
    <div class="cell science per-pop">{science}</div>
    <div class="cell pop per-pop">{maxPop}</div>
    <div class="cell moral per-pop">{happiness}</div>
    <div class="cell row-name total">Total</div>
    <div class="cell food total">{getTotal("food")}</div>
    <div class="cell industry total">{getTotal("industry")}</div>
    <div class="cell dust total">{getTotal("dust")}</div>
    <div class="cell science total">{getTotal("science")}</div>
    <div class="cell moral total">{getTotal("happiness")}</div>
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
    grid-template-rows:
      [header] auto
      [per-pop] auto
      [total] auto;
  }

  .cell.row-name{
    grid-column: row-name;
  }

  .cell.food{
    grid-column: food;
  }

  .cell:not(.header):not(.row-name) {
    justify-self: end;
  }

  .cell.food:not(.header) {
    color: #addb61;
  }

  .cell.industry{
    grid-column: industry;
  }
  .cell.industry:not(.header) {
    color: #efb352;
  }

  .cell.dust{
    grid-column: dust;
  }
  .cell.dust:not(.header) {
    color: #fff674;
  }

  .cell.science{
    grid-column: science;
  }
  .cell.science:not(.header) {
    color: #8ed2eb;
  }

  .cell.moral {
    grid-column: happiness;
  }
  .cell.moral:not(.header) {
    color: #ffb2e5;
  }

  .cell.pop {
    grid-column: capacity;
  }
  .cell.pop:not(.header) {
    color: #c7c7c7;
  }

  .cell.header {
    grid-row: header;
  }

  .cell.per-pop{
    grid-row: per-pop;
  }

  .cell.total{
    grid-row: total;
  }
</style>
