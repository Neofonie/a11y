<script>
    export let
        label = undefined;
</script>

<span
    data-tooltip={label}
>
    {#if $$slots.default}
        <slot />
    {:else}
        ?
    {/if}
</span>

<style>
    span {
        ---tooltip-yOffset: calc(-100% + 4px);
        ---tooltip-animTime: 250ms;
        ---tooltip-animDelay: 500ms;
        ---tooltip-animEase: ease-in-out;
        ---tooltip-anim: var(---tooltip-animTime) var(---tooltip-animDelay) var(---tooltip-animEase);
        position: relative;
        font: inherit;
        font-size: 1.25em;
        font-weight: bold;
        background-color: white;
        border-radius: 50%;
        display: inline-flex;
        width: 16px;
        height: 16px;
        font-size: 12px;
        border: 1px solid currentColor;
        justify-content: center;
        align-items: center;
        position: relative;
        vertical-align: top;
        transform: translateY(12px);
        cursor: help;

        &::before, &::after {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: transform var(---tooltip-anim), 
                        opacity var(---tooltip-anim);
            pointer-events: none;
            background-color: inherit;
        }
        &::before {
            content: attr(data-tooltip);
            transform: translate(-14px, calc(var(---tooltip-yOffset) - 10px));
            font-size: 12px;
            box-sizing: border-box;
            border: 1px solid currentColor;
            padding: .25em;
            border-radius: 5px;
            white-space: nowrap;
            box-shadow: 0 5px 10px -5px hsl(0deg 0% 0% / .25);
        }
        &::after {
            content: '';
            width: 12px;
            height: 12px;
            transform: translate(2px, calc(var(---tooltip-yOffset) - 4px)) rotate(-45deg) skew(-15deg,-15deg);
            border-left-width: 1px;
            border-left-style: solid;
            border-left-color: currentColor;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: currentColor;
        }
        &:hover {
            ---tooltip-yOffset: -100%;

            &::before, &::after {
                opacity: 1;
            }
        }
    }
</style>