<!-- checkbox.svelte -->
<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import {linkA11yRule} from '$lib/helpers/a11y-manager.js';
    import {onMount, createEventDispatcher} from 'svelte';

    export let label: string = '';
    export let value: boolean = false;
    export let id: string = "";

    const dispatch = createEventDispatcher();

    let elmCheckbox;

    // dispatch native change-Event because we are custom in here
    function handleChange() {
        value = !value;
        dispatch('change', {checked: value});
    }

    onMount(() => linkA11yRule(elmCheckbox));
</script>

<style>
    :global(code) {
        background: #f3f3f3;
        padding: 2px 4px;
        border-radius: 6px;
    }
</style>

<div class="flex gap-2 items-start">
    <input bind:this={elmCheckbox} {id}
           type="checkbox"
           class="h-4 w-4 mt-1 shrink-0"
           bind:checked={value}
           on:click={handleChange}/>
    <div>
        <label for={id}>
            {#if label}
                <SvelteMarkdown source={label}/>
            {:else}
                <slot/>
            {/if}
        </label>

        <slot name="show-code"/>
    </div>
</div>