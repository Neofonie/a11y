<section>
    <div class="viewport">
        <input class="address" type="text" bind:value={src}>
        <iframe bind:this={elmIframe} src="" title="a11y-inspector"></iframe>
    </div>
</section>

<script>
    import { watchedA11yContent, testA11yRules } from '$lib/helpers/a11y-manager';
    import { onMount } from 'svelte';

    export let
        src = 'https://google.com/';
    
    const
        proxyUrl = 'http://localhost:8080/';

    let
        elmIframe,
        inputDelay;

    $:if (src) {
        if (inputDelay) {
            clearTimeout(inputDelay);
        }
        inputDelay = setTimeout(() => loadPagePerProxy(), 250);
    }

    function loadPagePerProxy() {
        if (src && elmIframe) {
            fetch(proxyUrl + src)
                .then(response => response.text())
                .then(rawHTML => {
                    elmIframe.src = `data:text/html;charset=utf-8,${escape(rawHTML)}`;

                    if (DOMParser) {
                        const
                            parser = new DOMParser(),
                            doc = parser.parseFromString(rawHTML, "text/html");

                        watchedA11yContent(doc);
                        testA11yRules();
                    }
                });
        }
    }

    onMount(() => {
        loadPagePerProxy();
    });
</script>

<style>
    section {
        ---border-radius: 5px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 1em;
        position: relative;
    }
    div.viewport {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: .5em;

        &>h4 {
            text-align: center;
        }
    }
    input.address {
        border: none;
        padding: 1em .5em;
        font-size: 1.25em;
        border-radius: var(---border-radius);
        background-color: hsl(0deg 0% 0% / .05);
    }
    iframe {
        width: 100%;
        height: 100%;
        border: 1px dashed hsl(0deg 0% 0% / .1);
        border-radius: var(---border-radius);
        box-shadow: inset 0 0 10px hsl(0deg 0% 0% / .2);

    }
</style>