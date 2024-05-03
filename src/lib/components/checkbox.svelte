<!-- checkbox.svelte -->
<script lang="ts">
    import { linkA11yRule } from '$lib/helpers/a11y-manager.js';
  import { onMount, createEventDispatcher } from "svelte";

  export let label: string = "";
  export let value: boolean = false;
  export let id: string = "";


  const dispatch = createEventDispatcher();

  let elmCheckbox;

  function handleChange() {
    value = !value;
    dispatch("change", { checked: value });
  }

  onMount(() => linkA11yRule(elmCheckbox));
</script>

<div class="checkbox">
  <input bind:this={elmCheckbox} {id} type="checkbox" class="mr-1 h-4 w-4 relative top-0.5" bind:checked={value} on:click={handleChange} />
  {#if label}
    <label for={id}>{label}</label>
  {:else}
    <slot />
  {/if}

  <div class="checkbox slot">
    <slot name="named" />
  </div>
</div>

<style>
  .checkbox {
    &.slot {
      background: red;
    }
    }
</style>
