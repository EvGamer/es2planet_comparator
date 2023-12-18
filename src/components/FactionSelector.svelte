<script>
  import { Faction } from '../constants/faction';

  export let faction;

  const factionOptions = Object.values(Faction);

</script>

<div class="faction">
  <div>Faction:</div>
  <div class="select">
    <Select
      placeholder="Select faction"
      items={factionOptions}
      bind:value={faction}
    />
  </div>
</div>
