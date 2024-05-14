<script lang="ts">
    let showCode: boolean = false;
    const toggleCode = () => {
        showCode = !showCode;
    }

    $: showPlayground = showCode;
</script>

<button class="link" on:click={toggleCode}>{!showPlayground ? 'Show' : 'Hide'} Code</button>
{#if showPlayground}
<playground-ide line-numbers resizable class="playground-theme-zenburn">
    <svelte:element this="script" type="sample/html" filename="index.html">
        <slot/>
    </svelte:element>
</playground-ide>
{/if}

<style>
    :global(#playground) {
        --playground-code-font-size: 18px;
        --playground-highlight-color: #f00000;
    }
</style>