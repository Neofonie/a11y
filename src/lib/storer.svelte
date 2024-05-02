<!-- ParentComponent.svelte -->
<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { browser } from '$app/environment';

  export let key;

  const storedValue = writable(browser && localStorage.getItem(key) || '', set => {
    onMount(() => {
      set(browser && localStorage.getItem(key) || '');
    });
    return val => {
      if (browser) localStorage.setItem(key, val);
    }
  });

  function save() {
    // Save name to window.localStorage
    storedValue.set('New Value');
    console.log('Saved to localStorage:', storedValue);
  }
</script>

<div>
  <input bind:value={$storedValue} />
  <button on:click={save}>Save</button>
  <slot></slot>
</div>