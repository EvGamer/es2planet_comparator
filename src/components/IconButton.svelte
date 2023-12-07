<button on:click>
  <slot />
</button>

<style>
  button {
    font-size: 1em;
    width: 1.4em;
    height: 1.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
    background: none;
    appearance: none;
    border: none;
    vertical-align: baseline;
    cursor: pointer;
    transition: 50ms cubic-bezier(0.445, 0.05, 0.55, 0.95) background-color;
  }

  button:hover {
    background: #ffffff10;
  }

  button:active {
    background: #ffffff30;
  }


  button :global(svg) {
    height: 1.2em;
  }

</style>
