<script>
  import SystemImprovment from './SystemImprovement.svelte';
  import SystemImprovement  from './SystemImprovement.svelte';
  import { createEventDispatcher } from 'svelte';
  import { SYSTEM_IMPROVEMENTS } from '../constants/systemImprovements';
  import ButtonRemove from './ButtonRemove.svelte';
  import IconButton from './IconButton.svelte';
  import Plus from './icons/Plus.svelte';

  const dispatch = createEventDispatcher();

  export let selected = [];

  function getUnselected(selectedImprovements) {
    const selectedIdSet = new Set(selectedImprovements.map(
      improvement => improvement.id
    ));
    console.log(SYSTEM_IMPROVEMENTS);
    return SYSTEM_IMPROVEMENTS.filter((
      improvement => !selectedIdSet.has(improvement.id)
    ))
  }
</script>

<div class="list">
  {#each selected as improvement}
    <SystemImprovement selected={true} improvement={improvement}>
      <ButtonRemove
        slot="action"
        on:click={() => dispatch("remove", { id: improvement.id })}
      />
    </SystemImprovement>
  {/each}
  {#each getUnselected(selected) as improvement}
    <SystemImprovment improvement={improvement}>
      <IconButton
        slot="action"
        on:click={() => dispatch("add", { improvement })}
      >
        <Plus />
      </IconButton>
    </SystemImprovment>
  {/each}
</div>

<style>
  .list {
    display: grid;
    grid-template-columns: 1fr max-content;
  }
</style>
