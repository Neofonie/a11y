<script lang="ts">
    export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = 'h2';

    let classNames = '';

    if (tag !== 'h1') {
        classNames = 'mt-4 mb-1';
    }
</script>

<svelte:element this={tag} class={classNames}>
    <slot />
</svelte:element>

<style>
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Oswald', Arial, Helvetica, sans-serif;
        color: red;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-weight: 600;
        font-size: 1.5rem;
    }
</style>
