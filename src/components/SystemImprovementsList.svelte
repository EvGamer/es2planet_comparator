<script>
  import Button from './Button.svelte';
  import ListTab from './ListTab.svelte';
  import { SYSTEM_IMPROVEMENTS } from '../constants/systemImprovements';
  import Select from './Select.svelte';

  const factionOptions = SYSTEM_IMPROVEMENTS
    .filter(improvement => improvement.faction)
    .map(improvement => improvement.faction);

  let selectedFaction = null;

  function getFactionReplacements(improvements, faction) {
    const replacements = {};

    for (const improvement of improvements) {
      if (improvement.faction !== faction) continue;
      if (!improvement.replaces) continue;

      replacements[improvement.replaces] = improvement;
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

  export let selected = [];

  function setList(list) {
    selected = list;
  }

  const filterCommon = (improvements) => improvements.filter(
    improvement => !improvement.faction
  )
</script>

<ListTab
  items={availableImprovements}
  bind:selected={selected}
>
  <div class="faction">
    <div>Faction:</div>
    <div class="select">
      <Select
        placeholder="Select faction"
        items={factionOptions}
        bind:value={selectedFaction}
      />
    </div>
  </div>
  <svelte:fragment slot="actions">
    <Button
      text="Select common"
      on:click={() => setList(filterCommon(availableImprovements))}
    />
  </svelte:fragment>
</ListTab>

<!--
<div class="container">
  <div class="faction">
    <div>Faction:</div>
    <div class="select">
      <Select
        placeholder="Select faction"
        items={factionOptions}
        bind:value={selectedFaction}
      />
    </div>
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
-->

<style>
  .container {
    display: flex;
    align-items: stretch;
    padding: 1px 0;
    gap: 1px;
    flex-direction: column;
  }

  .faction {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .faction .select {
    flex: 1;
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
