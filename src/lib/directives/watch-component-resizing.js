/**
 * This is used with the 'use'-directive in Svelte:
 *
 * Import this file with `import { watchResize } from './directives/component-resize';`.
 * After that select a HTML-element you want to watch for resize events and add
 * `use:watchResize`. Additionally you need to add an event listeners called `element:resize`
 * like this: `<div use:watchResize on:element:resize={myResizeHandler}`. Finally define
 * your event listener like `function myResizeHandler(event) { ... }`, where `event` (as
 * CustomEvent) contains a property 'detail' and inside you'll find 'size', containing
 * the current dimension of the watched element.
 *
 * @param {*} node HTML-Element to monitor
 * @returns destroy-function used by Svelte to remove this use directive when needed
 */
export function watchResize(node) {
  new ResizeObserver((event) => {
    const { contentRect, target } = event ? event[0] : {};

    node.dispatchEvent(
      new CustomEvent("element:resize", {
        detail: {
          size: {
            width: contentRect.width,
            height: contentRect.height,
          },
        },
      }),
    );
  }).observe(node);

  return {
    destroy() {},
  };
}
