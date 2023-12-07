<script>
  export let improvement = null;
  export let selected = false;
</script>

<div class="improvement" class:selected={selected}>
  <div class="cell name">{improvement.name}</div>
  <div class="cell action">
    <slot name="action" />
  </div>
</div>

<style>
  .cell {
    align-self: stretch;
    justify-self: stretch;
  }

  .name {
    padding: 10px;
  }

  .action {
    width: 40px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .improvement {
    display: contents;
  }

  .improvement.selected .cell {
    background-color: var(--secondary-bg-color);
  }
</style>
