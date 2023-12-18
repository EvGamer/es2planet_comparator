<script>
  import Button from './Button.svelte';
  import ListTab from './ListTab.svelte';
  import { SYSTEM_IMPROVEMENTS } from '../constants/systemImprovements';

  export let faction = null;
  export let selected = [];

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
    faction,
  )


  function setList(list) {
    selected = list;
  }

  const filterCommon = (improvements) => improvements.filter(
    improvement => !improvement.faction
  )

  $: console.log('sis imrovement list selected', selected);
</script>

<ListTab
  items={availableImprovements}
  bind:selected={selected}
>
  <svelte:fragment slot="actions">
    <Button
      text="Select common"
      on:click={() => setList(filterCommon(availableImprovements))}
    />
  </svelte:fragment>
</ListTab>
