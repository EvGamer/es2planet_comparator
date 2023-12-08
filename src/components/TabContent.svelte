<script>
  import { getContext, onMount } from 'svelte';

  export let id = null;

  const activeTabId = getContext("activeTabId");

  $: isActive = id && $activeTabId === id;
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
