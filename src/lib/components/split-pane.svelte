<script>
    import { watchResize } from '$lib/directives/watch-component-resizing';

    export let orientation = 'horizontal',
        /* The initial position for the slider. Ideally you should use a 'px' or '%' value. */
        initialPosition = '200px',
        /* Size for the divider. Note that, due to the pure CSS solution, the divider
            should not be > 16px. Actually it can, but the handle will be only only
            working in the center of the divider and won't react outside a range of 16px. */
        dividerSize = '5px',
        dividerPosition = undefined,
        /* Color for the divider (default). */
        dividerColor = 'hsl(0deg 0% 0% / .25)',
        /* Color for the divider when highlighted/hovered. */
        dividerHighlightColor = 'hsl(0deg 0% 0% / .5)',
        dividerHandleColor = 'hsl(0deg 0% 0% / .5)',
        /* The minimum size each size must have, going smaller won't work. If you want to move
            the slider from position 0px to max-width then set '0' as value. */
        minContentSize = '32px',
        leftMinContentSize = minContentSize,
        rightMinContentSize = minContentSize,
        draggable = 'true',
        style = undefined;

    let cls = undefined,
        isDraggable = false,
        containerSize = 0,
        normalizedInitialPosition = undefined;

    export { cls as class };

    $: if (draggable !== undefined) {
        isDraggable = Boolean(draggable);
    }
    $: if (initialPosition) {
        if (/%$/.test(initialPosition)) {
            normalizedInitialPosition = `calc(${containerSize}px * ${parseFloat(initialPosition) / 100})`;
        } else {
            normalizedInitialPosition = initialPosition;
        }
    }

    function onElementResize(e) {
        containerSize = e?.detail?.size?.width;
    }
</script>

<!--
    SplitPane

    This a pure CSS-solution for a splitpane, without any JavaScript. Achieved by
     using the CSS-property 'resize' and a complex structure of elements.
    Due to its nature there are some caveats:
    - You can define an initial position, but it has to be a absolute value like 'px'
       but not a relative value like '%'.
    - You cannot grab the complete divider bar to drag it, instead you'll need to grab
       the handle in the center.

    Attributes:
    - initialPosition [CSS pixel, default: 200px]: defines the starting location for the divider
    - dividerSize [CSS pixel, default: 5px]: defines the size of the divider. Ideally you
       should select a value not greater then 16px as the resize-handle used (which is native)
       won't be bigger then that and for now it cannot not be configured.
    - dividerPosition [CSS pixel, default: undefined]: A fix location for the divider which
       can be set to keep it sticked to that position. It should be set to 'undefined' if it should
       have no effect.
    - dividerColor [CSS color, default: red]: defines the color the divider.
    - dividerHighlightColor [CSS color, default: orange]: defines the color the divider when
       highlighted.
    - minContentSize [CSS size unit, default: 32px]: defines the minimum size each panel can have,
       that said it cannot be smaller then that and the divider won't go beyond.
    - draggable [Boolean or boolean string, default: true]: defines if the divider can be dragged
       or not.
-->
<section
    use:watchResize
    on:element:resize={onElementResize}
    class="--{orientation}"
    style="---containerSize: {containerSize}; ---dividerPosition: {dividerPosition}; ---dividerSize: {dividerSize}; ---initialPosition: {normalizedInitialPosition}; ---minContentSize: {minContentSize}; ---leftMinContentSize: {leftMinContentSize}; ---rightMinContentSize: {rightMinContentSize}; ---dividerColor: {dividerColor}; ---dividerHighlightColor: {dividerHighlightColor}; ---dividerHandleColor: {dividerHandleColor}; {style}{$$props.style}">
    <div class="first">
        <div class="dragHandle">
            <div class="dragSpacer"></div>
            <div class="dragResize" class:--draggable={isDraggable} class:--fixPosition={dividerPosition !== undefined}></div>
            <div class="leftContent"><slot name="first" /></div>
            <div class="dragHighlighter" class:--draggable={isDraggable}></div>
        </div>
    </div>
    <div class="dividerSpace"></div>
    <div class="second">
        <div class="rightContent"><slot name="second" /></div>
    </div>
</section>

<style>
    section {
        ---knobSize: 24px;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        width: 100%;
        height: 100%;
        position: relative;
    }
    div.first,
    div.second {
        position: relative;
        z-index: 0;
    }
    div.first {
        min-width: var(---leftMinContentSize, var(---minContentSize));
        min-height: var(---leftMinContentSize, var(---minContentSize));
        z-index: 1;
        flex-grow: 0;
    }
    div.second {
        min-width: var(---rightMinContentSize, var(---minContentSize));
        min-height: var(---rightMinContentSize, var(---minContentSize));
        z-index: 0;
        flex-grow: 1;
    }
    /* This is used to create a space for the divider which is actually
        rendered as child element in 'first'. */
    div.dividerSpace {
        width: var(---dividerSize);
        height: 100%;
        pointer-events: none;
        position: relative;
    }
    div.dragHandle {
        height: 100%;
        z-index: 1000;
        transform: translateX(var(---dividerSize));
        pointer-events: none;

        /* This is used as space to move the drag-handle (css 'resize') in
            a centered position. We can't just move it as any 'position' breaks
            with the 'resize'-property. */
        & > div.dragSpacer {
            width: 1px;
            height: calc(50% - 8px);
        }
        /* This is the resizer, providing a native handle by using css 'resize'.
           As we resize it we stretch out the parent container faking a 'dragging'.*/
        & > div.dragResize {
            width: var(---initialPosition, 0);
            height: 16px;
            overflow: hidden; /* needed for 'resize' */
            opacity: 0;
            /* min-width: var(---leftMinContentSize, var(---minContentSize));
            max-width: calc(100% - var(---rightMinContentSize, var(---minContentSize)));
            min-height: 16px;
            max-height: 16px; */

            &.--draggable {
                resize: horizontal;
                pointer-events: all;
            }
            &.--fixPosition {
                width: var(---dividerPosition);
                min-width: var(---dividerPosition);
                max-width: var(---dividerPosition);
            }
        }
        /* This is used for highlight and effects. It needs to be ineffective for events
            as it is triggered indirect by a combined CSS-selector at hover.*/
        & > div.dragHighlighter {
            position: absolute;
            width: var(---dividerSize);
            height: 100%;
            background-color: var(---dividerColor);
            right: 0;
            top: 0;
            pointer-events: none;
            transition: background-color 250ms;

            /* This represents the 'knob' which is just a visual effect. */
            &::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                height: var(---knobSize);
                transform: translate(-50%, -50%);
                background-color: var(---dividerHandleColor);
                opacity: 0;
                box-shadow: 0 0 0 0 hsl(0deg 0% 0% / 0);
                border-radius: 0;
                transition:
                    box-shadow 250ms,
                    border 250ms,
                    width 250ms,
                    height 250ms,
                    border-radius 250ms;
            }
            &.--draggable::after {
                opacity: 1;
            }
        }
        & > div.dragResize:hover ~ div.dragHighlighter {
            background-color: var(---dividerHighlightColor);

            &::after {
                width: var(---knobSize);
                box-shadow: 0 5px 10px 0 hsl(0deg 0% 0% / 0.25);
                border-radius: 50%;
            }
        }
    }
    div.leftContent,
    div.rightContent {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    div.leftContent {
        transform: translateX(-5px);
        pointer-events: all;
    }

    section.--vertical {
        flex-direction: column;

        & div.dividerSpace {
            width: 100%;
            height: var(---dividerSize);
        }
        & div.dragHandle {
            height: revert;
            width: 100%;
            transform: translateY(var(---dividerSize));

            & > div.dragSpacer {
                width: calc(50% - 8px);
                height: 1px;
                float: left;
            }
            & > div.dragResize {
                width: 16px;
                height: var(---initialPosition, 0);

                &.--draggable {
                    resize: vertical;
                }
                &.--fixPosition {
                    width: revert;
                    min-width: revert;
                    max-width: revert;
                    height: var(---dividerPosition);
                    min-height: var(---dividerPosition);
                    max-height: var(---dividerPosition);
                }
            }
            /* This is used for highlight and effects. It needs to be ineffective for events
                as it is triggered indirect by a combined CSS-selector at hover.*/
            & > div.dragHighlighter {
                width: 100%;
                height: var(---dividerSize);
                right: revert;
                top: revert;
                left: 0;
                bottom: 0;

                /* This represents the 'knob' which is just a visual effect. */
                &::after {
                    width: var(---knobSize);
                    height: 100%;
                }
            }
            & > div.dragResize:hover ~ div.dragHighlighter {
                &::after {
                    height: var(---knobSize);
                }
            }
        }
        & div.leftContent {
            transform: translateY(-5px);
        }
    }
</style>
