<script>
import Headline from "$lib/components/headline.svelte";
import StoredCheckbox from "$lib/components/stored-checkbox.svelte";
</script>
<Headline tag="h2">Content</Headline>

<StoredCheckbox key="button-a-label"
                label="`<button>`, `<a>` und `<label>` sind eindeutig und selbsterklärend" />
<StoredCheckbox key="h1-per-page" label="Es gibt nur eine `<h1>` pro Seite" />
