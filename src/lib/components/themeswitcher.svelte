<script lang="ts">
  import { onMount } from 'svelte';

  let themes = ['light', 'dark'];
  let currentTheme: string = 'light';

  // Function to set the theme
  function setTheme(theme: string) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // automatically set the theme based on the user's preference
  onMount(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });

  function handleSetTheme(event: any) {
    const theme = event.target.value;
    setTheme(theme);
  }
</script>

<div class={$$props.class}>
  <div class="flex flex-row items-center">
    <!-- Dropdown -->
    <select class="select select-sm bg-base-100 hover:bg-base-200 ml-2" id="theme-switcher" bind:value={currentTheme} on:change={handleSetTheme} aria-label="Theme Switcher">
      {#each themes as theme}
        <option value={theme}>{theme}</option>
      {/each}
    </select>
  </div>
</div>
