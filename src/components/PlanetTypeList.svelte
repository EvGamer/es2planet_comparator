<script>
  import { createEventDispatcher } from 'svelte';
  import Button from '../components/Button.svelte';
  import { PlanetSize } from '../constants/planetSize';
  import { PlanetTypes } from '../constants/planetTypes';

  const dispatch = createEventDispatcher();

  const planetTypes = Object.values(PlanetTypes);

  const availableSizes = [
    { text: "XS", size: PlanetSize.tiny },
    { text: "S", size: PlanetSize.small },
    { text: "M", size: PlanetSize.medium },
    { text: "L", size: PlanetSize.large },
    { text: "XL", size: PlanetSize.huge }
  ];
</script>

<div class="list">
  {#each planetTypes as type}
    <div class="option">
      <div class="title">{type}</div>

      <div class="sizes">
        {#each availableSizes as { text, size }}
          <Button
            text={text}
            on:click={() => dispatch('add', { type, size })}
          />
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .list{
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-gap: 5px 10px;
    margin-top: 10px;
  }

  .option {
    width: 100%;
    display: contents;
    align-items: center;
  }

  .sizes {
    display: flex;
    gap: 5px;
  }

  .title {
    align-self: center;
  }

</style>
