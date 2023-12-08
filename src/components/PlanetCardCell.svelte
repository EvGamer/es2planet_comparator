<script>
  import { ResourceType } from '../constants/resourceType';

  export let type = "";
</script>

<div
  class="cell"
  class:food={type === ResourceType.food}
  class:industry={type === ResourceType.industry}
  class:dust={type === ResourceType.dust}
  class:science={type === ResourceType.science}
  class:pop={type === ResourceType.maxPopCapacity}
  class:happiness={type === ResourceType.happiness}
>
  <slot />
</div>

<style>
  .cell {
    justify-self: end;
    align-self: center;
  }
  .food {
    color: #addb61;
  }

  .industry {
    color: #efb352;
  }

  .dust {
    color: #fff674;
  }

  .science {
    color: #8ed2eb;
  }

  .happiness {
    color: #ffb2e5;
  }

  .pop {
    color: #c7c7c7;
  }
</style>
