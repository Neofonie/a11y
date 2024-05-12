<script lang="ts">
let showCode: boolean = false;
const toggleCode = () => {
    showCode = !showCode;
};

$: showPlayground = showCode;
</script>

<button class="link" on:click="{toggleCode}">Show Code</button>
{#if showPlayground}
    <playground-ide editable-file-system line-numbers resizable><slot /></playground-ide>
{/if}
