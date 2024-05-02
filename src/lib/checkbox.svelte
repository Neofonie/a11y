<!-- checkbox.svelte -->
<script lang="ts">
  export let label: string = "";
  export let checked: boolean = false;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  
  function handleChange() {
    checked = !checked;
    console.log("checked", checked);
    // notify parent component
    dispatch("change", { checked });
  }

</script>

<input type="checkbox" bind:checked id="checkbox" on:click={handleChange} />
{#if label}
  <label for="checkbox">{label}</label>
{/if}
