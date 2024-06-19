<script>
    import Headline from '$lib/components/headline.svelte';
    import Link from '$lib/components/link.svelte';
    import StoredCheckbox from '$lib/components/stored-checkbox.svelte';
</script>

<Headline tag="h2">Allgemein</Headline>

<StoredCheckbox key="auto-tests">Alle automatischen Accessibility-Tests laufen durch</StoredCheckbox>

<StoredCheckbox key="axe-chrome-extension" label="Axe Chrome Extension">
    <Link href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd">Link</Link>
</StoredCheckbox>
<StoredCheckbox key="wave-chrome-extension" label="Wave Chrome Extension">
    <Link href="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=de">Link</Link>
</StoredCheckbox>
<StoredCheckbox key="lighthouse" label="Lighthouse (Accessibility)">
    <Link href="assets/chrome-devtools.png">
        <img src="assets/chrome-devtools.png" alt="Dev Console im Chrome" class="w-20" />
    </Link>
</StoredCheckbox>
<StoredCheckbox key="capo" label="Capo Chrome Extension (Get your `<head>` sorted)">
    <Link href="https://rviscomi.github.io/capo.js/user/extension/">Link</Link>
</StoredCheckbox>
