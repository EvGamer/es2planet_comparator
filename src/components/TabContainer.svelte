<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Button from './Button.svelte';

  export let tabs = [];

  const activeTabId = writable(tabs[0]?.id ?? null);

  setContext('activeTabId', activeTabId);
</script>

<div class="container">
  <nav class="tabs">
    {#each tabs as { name, id }}
      <Button
        text={name}
        active={$activeTabId === id}
        on:click={() => activeTabId.set(id)}
      >
        {name}
      </Button>
    {/each}
  </nav>
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .tabs {
    display: flex;
  }
</style>
