<script>
  export let text = '';
</script>

<button class="button">
  {text}
</button>


<style>
  .button {
    border: none;
    appearance: none;
    background: #2e2f36;
    color: #d0cbad;
    font-size: 1em;
    transition: 50ms cubic-bezier(0.445, 0.05, 0.55, 0.95) background-color;
    cursor: pointer;
    padding: 5px 10px;
  }

  .button:hover {
    background: #444550;
  }

  .button:active {
    background: #62636a;
  }
</style>
