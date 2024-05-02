<!-- checkbox.svelte -->
<script lang="ts">
  export let label: string = "";
  export let value: boolean = false;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleChange() {
    value = !value;
    console.log("checked", value);
    // notify parent component
    dispatch("change", { checked: value });
  }
</script>

<input
  type="checkbox"
  bind:checked={value}
  id="checkbox"
  on:click={handleChange}
/>
{#if label}
  <label for="checkbox">{label}</label>
{:else}
  <slot />
{/if}

<div class="checkbox slot">
  <slot name="named" />
</div>

<style>
  .checkbox {
    &.slot {
      background: red;
    }
  }
</style>
