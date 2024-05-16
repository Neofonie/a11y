<script lang="ts">
    export let
        title: string = undefined;

    let
        elmDialog = undefined,
        showCode: boolean = false;

    $: showPlayground = showCode;
</script>

<button class="link" on:click={_ => elmDialog?.showModal()}>{!showPlayground ? 'Show' : 'Hide'} Code</button>
<dialog bind:this={elmDialog}>
    <h3><span>A11y-Code Example{title ? ': ' + title : ''}</span> <button on:click={_ => elmDialog?.close()}/></h3>
    <playground-ide line-numbers resizable class="playground-theme-zenburn">
        <svelte:element this="script" type="sample/html" filename="index.html">
            <slot/>
        </svelte:element>
    </playground-ide>
    <button />
</dialog>

<style>
    playground-ide {
        --playground-code-font-size: 18px;
        --playground-highlight-color: var(--color-primary);
    }

    dialog {
        box-shadow: 0 20px 20px -20px hsl(0deg 25% 25% / .25);
        resize: both;
        border: 1px solid var(--color-primary);

        &::backdrop {
            background-color: hsl(0deg 50% 50% / .25);
            backdrop-filter: grayscale(.5) blur(2px);
        }
        & h3 {
            display: flex;
            align-items: center;
            width: 100%;
            font-family: var(--font-family-title);
            font-size: 1.25em;
            padding: .25em .5em;
            background-color: hsl(var(--color-primary-hsl) / .05);
            color: var(--color-primary);

            & * {
                flex: 1;
                font: inherit;
            }
            & > button {
                flex: 0;

                &::after {
                    content: '⨯';
                    width: 1em;
                    height: 1em;
                    font-size: 1.5em;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    transition: transform 250ms ease-in-out;
                }
                &:hover::after {
                    transform: scale(1.25);
                }
            }
        }
    }
</style>