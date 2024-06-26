<script lang="ts">
    import { watchedA11yContent, testA11yRules } from '$lib/helpers/a11y-manager';
    import { onMount } from 'svelte';
    import Ripple from '$lib/components/ripple.svelte';

    let elmIframe: any,
        isLoading = false,
        // The URL to test (initial value).let
        src = 'https://google.com/',
        // The URL for the proxy-server we're using to bypass CORS-issues.
        proxy = 'https://a11y.neofonie.de/cors?url=',
        inputDelay: any;

    // As soon 'src' or 'proxy' changes (like when editing text in any input)
    //  this will be triggered. We use `setTimeout` to delay the input
    //  so loading will happen after the user has stopped typing after
    //  a reasonable time (250ms).
    $: if (src || proxy) {
        if (inputDelay) {
            clearTimeout(inputDelay);
        }
        inputDelay = setTimeout(() => loadPagePerProxy(), 500);
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
            isLoading = true;
            fetch(proxy + src)
                .then((response) => response.json())
                .then((json) => {
                    elmIframe.src = `data:text/html;charset=utf-8,${escape(json.html)}`;

                    if (DOMParser) {
                        const parser = new DOMParser(),
                            doc = parser.parseFromString(json.html, 'text/html');

                        watchedA11yContent(doc);
                        testA11yRules();

                        isLoading = false;
                    }
                });
        }
    }

    // After mounting the component, we do an initial page load
    //  in case an URL is already set.
    onMount(loadPagePerProxy);
</script>

<section class="h-full w-full">
    <label title="URL to test"><input type="text" bind:value={src} /></label>
    <div class="relative h-full w-full">
        <Ripple class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" show={isLoading} />
        <iframe bind:this={elmIframe} src="" title="a11y-inspector" class="h-full w-full"></iframe>
    </div>
</section>

<style>
    section {
        ---border-radius: 5px;
        box-sizing: border-box;
        padding: 1em;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        & > label {
            width: 100%;
            position: relative;

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
                top: 0.25em;
                left: 1em;
                font-size: 0.75em;
                font-family: var(--font-family-title);
                color: var(--color-primary);
                pointer-events: none;
            }
        }
    }
    iframe {
        border: 1px dashed hsl(0deg 0% 0% / 0.1);
        border-radius: var(---border-radius);
        box-shadow: inset 0 0 10px hsl(0deg 0% 0% / 0.2);
    }
</style>
