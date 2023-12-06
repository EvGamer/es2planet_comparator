<script>
  export let text = '';
  export let active = false
</script>

<button
  class="button"
  class:active={active}
  on:click
>
  {text}
</button>


<style>
  .button {
    border: none;
    appearance: none;
    background: var(--secondary-bg-color);
    color: var(--text-color);
    font-size: 1em;
    transition: 50ms cubic-bezier(0.445, 0.05, 0.55, 0.95) background-color;
    cursor: pointer;
    padding: 5px 10px;
  }

  .button:hover {
    background: var(--secondary-hover-bg-color);
  }


  .button:active, .button.active {
    background: var(--secondary-active-bg-color);
  }
</style>
