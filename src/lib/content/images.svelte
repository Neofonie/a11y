<script>
import Headline from "$lib/components/headline.svelte";
import StoredCheckbox from "$lib/components/stored-checkbox.svelte";
</script>
<Headline tag="h2">Bilder</Headline>

<StoredCheckbox key="img-alt" label="Alle `<img>-Elemente` haben ein Alt-Attribut" />
<StoredCheckbox key="svg-aria-hidden" label="rein dekorative SVGs haben `aria-hidden=&quot;true&quot;`" />
<StoredCheckbox key="img-svg-role"
                label="`<img>-Elemente` mit source SVG haben das role-Attribut `role=&quot;img&quot;`" />
