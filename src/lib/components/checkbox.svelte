<!-- checkbox.svelte -->
<script lang="ts">
  export let label: string = "";
  export let value: boolean = false;

  import { createEventDispatcher } from "svelte";
  // import "$lib/global.css";

  const dispatch = createEventDispatcher();

  function handleChange() {
    value = !value;
    dispatch("change", { checked: value });
  }
</script>

<div class="checkbox">
  <input type="checkbox" class="mr-1 h-4 w-4 relative top-0.5" bind:checked={value} on:click={handleChange} />
  {#if label}
    <label for="checkbox">{label}</label>
  {:else}
    <slot />
  {/if}
  <div class="checkbox slot">
    <slot name="named" />
  </div>
</div>

<style lang="scss">
  //@import "$lib/global.css";
  .checkbox {
    &.slot {
      background: red;
    }
  }
</style>
