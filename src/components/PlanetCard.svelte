<script>
  import { PlanetSize } from '../constants/planetSize';
  import { PLANET_STATS } from '../constants/planetStats';
  import { PlanetTypes } from '../constants/planetTypes';

  export let planetType = PlanetTypes.terran;
  export let size = PlanetSize.medium;

  const stats = PLANET_STATS[planetType]
  const {
    food,
    industry,
    science,
    happiness,
  } = PLANET_STATS[planetType];

  const maxPop = stats.popCapacityBySize[size]

  const getTotal = (statName) => maxPop * stats[statName];
</script>

<div class="card">
  <div class="title">{size} {planetType}</div>
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
    margin-bottom: 5px;
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

  .cell.industry{
    grid-column: industry;
  }

  .cell.dust{
    grid-column: dust;
  }

  .cell.science{
    grid-column: science;
  }

  .cell.moral {
    grid-column: happiness;
  }

  .cell.pop {
    grid-column: capacity;
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
