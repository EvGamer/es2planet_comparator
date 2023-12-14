<script>
  import Select from 'svelte-select';

  export let value = undefined;
</script>

<div class="container">
  <Select bind:value={value} {...$$restProps}/>
</div>

<style>
  .container {
    --background: var(--secondary-bg-color);
    --border-radius: 0;
    --border: none;
    --border-hover: none;
    --list-border-radius: 0;
    --input-padding: 0;
    --padding: 0 0 0 10px;
    --item-padding: 0 0 0 10px;
    --list-background: var(--secondary-bg-color);
    --item-hover-bg: var(--secondary-hover-bg-color);
    --item-is-active-bg: var(--secondary-active-bg-color);
    --item-first-border-radius: 0;
    --value-container-padding: 0;
    --height: 1.4em;
    --clear-select-width: 1.4em;
  }
</style>
