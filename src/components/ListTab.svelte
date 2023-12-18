<script>
  import Button from './Button.svelte';
  import ListTabItem from './ListTabItem.svelte';
  import ButtonRemove from './ButtonRemove.svelte';
  import IconButton from './IconButton.svelte';
  import Plus from './icons/Plus.svelte';

  export let items = [];
  export let selected = [];

  function addItem(item) {
    selected = [...selected, item];
  }

  function removeItem(itemId) {
    selected = selected.filter(
      item => item.id !== itemId
    )
  }

  function setList(list) {
    selected = list;
  }

  function filterUnselected(improvements, selectedImprovements) {
    const selectedIdSet = new Set(selectedImprovements.map(
      improvement => improvement.id
    ));
    return improvements.filter((
      improvement => !selectedIdSet.has(improvement.id)
    ))
  }

  $: unselected = filterUnselected(items, selected);
</script>

<div class="container">
  <slot />
  <div class="actions">
    <Button
      text="Unselect all"
      on:click={() => setList([])}
    />
    <Button
      text="Select all"
      on:click={() => setList(items)}
    />
    <slot name="actions" />
  </div>
  <div class="list">
    {#each selected as item}
      <ListTabItem selected={true} item={item}>
        <ButtonRemove
          slot="action"
          on:click={() => removeItem(item.id)}
        />
      </ListTabItem>
    {/each}
    {#each unselected as item}
      <ListTabItem item={item}>
        <IconButton
          slot="action"
          on:click={() => addItem(item)}
        >
          <Plus />
        </IconButton>
      </ListTabItem>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: stretch;
    padding: 1px 0;
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
