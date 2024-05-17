<!-- checkbox.svelte -->
<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';
    import { linkA11yRule } from '$lib/helpers/a11y-manager.js';
    import { createEventDispatcher } from 'svelte';

    export let label: string = '';
    export let value: boolean = false;
    export let id: string = '';
    export let rule: string = '';

    const dispatch = createEventDispatcher();

    // dispatch native change-Event because we are custom in here
    function handleChange() {
        value = !value;
        dispatch('change', { checked: value });
    }
</script>

<div class="flex items-start gap-2">
    <input {id} data-rule={rule} use:linkA11yRule type="checkbox" class="mt-1 h-4 w-4 shrink-0" bind:checked={value} on:click={handleChange} />
    <div class="flex gap-1">
        <label for={id} class="flex gap-1">
            {#if label}
                <SvelteMarkdown source={label} />
            {/if}
            <slot />
        </label>

        <slot name="show-code" />
    </div>
</div>
