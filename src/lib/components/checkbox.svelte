<style>
:global(code) {
    background: #f3f3f3;
    padding: 2px 4px;
    border-radius: 6px;
}
</style>

<!-- checkbox.svelte -->
<script lang="ts">
import SvelteMarkdown from 'svelte-markdown';
import { createEventDispatcher } from 'svelte';

export let label: string = '';

export let value: boolean = false;

const dispatch = createEventDispatcher();

// dispatch native change-Event because we are custom in here
function handleChange() {
    value = !value;
    dispatch('change', { checked: value });
}
</script>

<label class="flex items-center gap-2">
    <input type="checkbox" class="h-4 w-4 shrink-0" bind:checked="{value}" on:click="{handleChange}" />
    <div>
        {#if label}
            <SvelteMarkdown source={label}/>
        {:else}
            <slot />
        {/if}

        <slot name="show-code" />
    </div>
</label>
