<script>
  import { getContext, onMount } from 'svelte';

  export let id = null;

  let isActive = false;

  const activeTabId = getContext("activeTabId");
  onMount(() => {
    activeTabId.subscribe((activeTabId) => {
      isActive = id && id === activeTabId;
    })
  })
</script>

<div class:hidden={!isActive}>
  <slot />
</div>

<style>
  .hidden {
    /*display: none;*/
    height: 0;
    overflow: hidden;
  }
</style>
