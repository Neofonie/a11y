<script lang="ts">
  import Storer from "$lib/storer.svelte";

  // create unique uuid
  export let key : string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  // define props
  export let label: string = "";
  export let checked: boolean = false;
  export let handleChange: () => void = () => {};

  
</script>

<Storer bind:key={key}>
  <input type="checkbox" bind:checked on:click={handleChange} />
  {#if label}
    <label for="checkbox">{label}</label>
  {/if}
  <label for="checkbox">{label}</label>
  <slot></slot>
</Storer>
