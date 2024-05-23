<script lang="ts">
    import Github from '$lib/components/github.svelte';
    import SplitPane from '$lib/components/split-pane.svelte';
    import Headline from '$lib/components/headline.svelte';
    import Tooltip from '$lib/components/tooltip.svelte';
    import BuildDate from '$lib/components/build-date.svelte';
    import Links from '$lib/content/links.svelte';
    import Common from '$lib/content/common.svelte';
    import Markup from '$lib/content/markup.svelte';
    import Content from '$lib/content/content.svelte';
    import Images from '$lib/content/images.svelte';
    import Media from '$lib/content/media.svelte';
    import Forms from '$lib/content/forms.svelte';
    import Mobile from '$lib/content/mobile.svelte';
    import Keyboard from '$lib/content/keyboard.svelte';
    import A11yListView from '$lib/components/a11y-list-view.svelte';
    import A11yInspector from '$lib/components/a11y-inspector.svelte';
    import ThemeSwitcher from '$lib/components/themeswitcher.svelte';
</script>

<Github />

<SplitPane class="h-full w-full" initialPosition="60%">
    <div slot="first" class="box-border h-full w-full overflow-y-auto p-1">
        <div class="container relative mx-auto px-4 py-4">
            <Headline tag="h1">
                Neofonie Accessibility „A11y“ Tool <Tooltip label="'11' steht für 11 Buchstaben, ergo für eine Abkürzung" />
            </Headline>

            <p>
                Diese Checkliste wird von unseren Entwicklern genutzt, um eine gewisse Barriere-Freiheit für unsere Endkunden zu gewährleisten. Jede Komponente/Seite sollte gegen diese Checkliste
                geprüft werden.
            </p>

            <BuildDate />

            <Links />
            <Common />
            <Markup />
            <Content />
            <Images />
            <Media />
            <Forms />
            <Mobile />
            <Keyboard />

            <ThemeSwitcher class="absolute top-[1em] right-[1em]" />
        </div>

        <hr />

        <A11yListView />
    </div>
    <div slot="second" class="flex flex-col h-full w-full items-stretch justify-center">
        <div class="flex-grow">
            <A11yInspector />
        </div>
    </div>
</SplitPane>
