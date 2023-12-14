<script>
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';
  import SystemImprovment from './SystemImprovement.svelte';
  import SystemImprovement  from './SystemImprovement.svelte';
  import { SYSTEM_IMPROVEMENTS } from '../constants/systemImprovements';
  import ButtonRemove from './ButtonRemove.svelte';
  import IconButton from './IconButton.svelte';
  import Select from './Select.svelte';
  import Plus from './icons/Plus.svelte';

  const factionOptions = SYSTEM_IMPROVEMENTS
    .filter(improvement => improvement.faction)
    .map(improvement => improvement.faction);

  let selectedFaction = null;

  function getFactionReplacements(improvements, faction) {
    const replacements = {};

    for (const improvement of improvements) {
      if (
        improvement.faction !== faction
        || !improvements.replaces
      ) {
        continue;
      }
      replacements[improvement.replaces];
    }

    return replacements;
  }

  function filterAvailableImprovements(improvements, faction) {
    const replacements = getFactionReplacements(improvements, faction);

    return improvements
      .filter(improvement =>
        (!improvement.faction || improvement.faction === faction)
        && !improvement.replaces
      ).map(improvement =>
        replacements[improvement.id] ?? improvement
      );
  }

  $: availableImprovements = filterAvailableImprovements(
    SYSTEM_IMPROVEMENTS,
    selectedFaction?.value,
  )

  const dispatch = createEventDispatcher();

  export let selected = [];

  function filterUnselected(improvements, selectedImprovements) {
    const selectedIdSet = new Set(selectedImprovements.map(
      improvement => improvement.id
    ));
    return improvements.filter((
      improvement => !selectedIdSet.has(improvement.id)
    ))
  }

  function setList(list) {
    dispatch("set-list", { list });
  }

  const filterCommon = (improvements) => improvements.filter(
    improvement => !improvement.faction
  )

  $: unselected = filterUnselected(availableImprovements, selected);
</script>

<div class="container">
  <div class="faction">
    <Select
      placeholder="Select faction"
      items={factionOptions}
      bind:value={selectedFaction}
    />
  </div>
  <div class="actions">
    <Button
      text="Select all"
      on:click={() => setList(availableImprovements)}
    />
    <Button
      text="Select common"
      on:click={() => setList(filterCommon(availableImprovements))}
    />
    <Button
      text="Unselect all"
      on:click={() => setList([])}
    />
  </div>
  <div class="list">
    {#each selected as improvement}
      <SystemImprovement selected={true} improvement={improvement}>
        <ButtonRemove
          slot="action"
          on:click={() => dispatch("remove", { id: improvement.id })}
        />
      </SystemImprovement>
    {/each}
    {#each unselected as improvement}
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
</div>

<style>
  .container {
    display: flex;
    gap: 1px;
    flex-direction: column;
  }
  .actions {
    display: flex;
    gap: 1px;
  }
  .list {
    display: grid;
    grid-template-columns: 1fr max-content;
  }
</style>
