<script>
    import { ruleset } from '$lib/helpers/a11y-manager.js';

    import StoredCheckbox from './stored-checkbox.svelte';

</script>

{#each Object.keys(ruleset.groups) as group }
    {#if Object.keys(ruleset.groups[group]).length > 0}
        {@const uuid = crypto.randomUUID()}
        <section>
            <h2>
                <input id={uuid} type="checkbox" hidden />
                <label for={uuid}><span>{group}</span><span></span></label>
            </h2>

            {#each Object.keys(ruleset.groups[group]) as rule}
                <div>
                    <StoredCheckbox id={rule} key={rule} label={ruleset.groups[group][rule].description} />
                </div>
            {/each}
        </section>
    {/if}
{/each}

<style>
    section {
        ---ally-rule-lineheight: 2.5em;
        box-sizing: border-box;
        background-color: hsl(0deg 0% 0% / .05);
        border-radius: 5px;
        margin-bottom: 1em;
        overflow: hidden;

        & > h2 {
            font-family: var(--font-family-title);
            font-size: 1.5em;
            color: var(--color-primary);
            padding: .25em 1em 0;
            transition: background-position 250ms ease-in-out, box-shadow 250ms ease-in-out;
            background-image: linear-gradient(hsl(0deg 100% 50% / .05), transparent 50%);
            background-size: 100% 200%;
            background-position: 0 100%;

            &:hover {
                background-position: 0 0;
            }
            & > label {
                display: flex;
                width: 100%;
                font: inherit;
                align-items: center;
                cursor: pointer;
                transition: background-color 250ms;

                & > * {
                    flex: 1;
                    font: inherit;
                }
                & > *:last-child {
                    flex: 0;
                    min-width: 32px;
                    min-height: 32px;
                    max-width: 32px;
                    max-height: 32px;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;

                    &::after {
                        content: '˄';
                    }
                }
            }
            & > input[type=checkbox]:checked + label {
                & > *:last-child::after {
                    content: '˅';
                }
            }
        }
        & > div {
            position: relative;
            max-height: 999px;
            padding: .5em 1em .5em 2.5em;
            transition: max-height 250ms ease-in-out, padding 250ms ease-in-out;

            & > * {
                position: relative;
                height: var(---ally-rule-lineheight);
            }
        }
        &:has(h2 > input[type=checkbox]:checked) {
            box-shadow: inset 0 -2px 0 hsl(0deg 100% 50% / .25);

            & > div {
                max-height: 0;
                padding: 0 0 0 1em;
                transition: max-height 150ms ease-in-out, padding 150ms ease-in-out;
                overflow: hidden;
            }
        }
    }
</style>