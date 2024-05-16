<script>
    import { watchedA11yContent, testA11yRules } from '$lib/helpers/a11y-manager';
    import { onMount } from 'svelte';

    let
        elmIframe,
        // The URL to test (initial value).
        src = 'https://google.com/',
        // The URL for the proxy-server we're using to bypass CORS-issues.
        proxy = 'http://localhost:8080/',
        inputDelay;

    // As soon 'src' or 'proxy' changes (like when editing text in any input)
    //  this will be triggered. We use `setTimeout` to delay the input
    //  so loading will happen after the user has stopped typing after
    //  a reasonable time (250ms).
    $: if (src || proxy) {
        if (inputDelay) {
            clearTimeout(inputDelay);
        }
        inputDelay = setTimeout(() => loadPagePerProxy(), 250);
    }

    /**
     * Used to load an URL via proxy and to put the result either as DOM
     *  into the a11y-inspector (`watchedA11yContent()`) and into the
     *  IFRAME as rendered HTML-context. Note that the IFRAME will spill
     *  out -a lot- of errors due to the reason that most additional
     *  resource can't be requested due to CORS-issues, this is intentional
     *  and an expected behaviour.
     */
    function loadPagePerProxy() {
        if (src && elmIframe) {
            fetch(proxy + src)
                .then((response) => response.text())
                .then((rawHTML) => {
                    elmIframe.src = `data:text/html;charset=utf-8,${escape(rawHTML)}`;

                    if (DOMParser) {
                        const parser = new DOMParser(),
                            doc = parser.parseFromString(rawHTML, 'text/html');

                        watchedA11yContent(doc);
                        testA11yRules();
                    }
                });
        }
    }

    // After mounting the component, we do an initial page load
    //  in case an URL is already set.
    onMount(loadPagePerProxy);
</script>

<section>
    <label title="Proxy URL (must end with '/'!)"><input type="text" bind:value={proxy} /></label>
    <label title="URL to test"><input type="text" bind:value={src} /></label>
    <iframe bind:this={elmIframe} src="" title="a11y-inspector"></iframe>
</section>

<style>
    section {
        ---border-radius: 5px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 1em;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        & > label {
            width: 100%;
            position: relative;;

            & > input {
                width: 100%;
                border: none;
                padding: 1em 0.5em;
                font-size: 1.25em;
                border-radius: var(---border-radius);
                background-color: hsl(0deg 0% 0% / 0.05);

                &:focus {
                    outline: 2px solid var(--color-primary);
                }
            }
            &::after {
                content: attr(title);
                position: absolute;
                top: .25em;
                left: 1em;
                font-size: .75em;
                font-family: var(--font-family-title);
                color: var(--color-primary);
                pointer-events: none;
            }
        }
    }
    iframe {
        width: 100%;
        height: 100%;
        border: 1px dashed hsl(0deg 0% 0% / 0.1);
        border-radius: var(---border-radius);
        box-shadow: inset 0 0 10px hsl(0deg 0% 0% / 0.2);
    }
</style>
