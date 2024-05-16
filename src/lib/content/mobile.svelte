<script>
import Headline from "$lib/components/headline.svelte";
import StoredCheckbox from "$lib/components/stored-checkbox.svelte";
</script>

<Headline tag="h2">Mobil</Headline>

<StoredCheckbox key="no-horizontal-scroll" label="Die Seite kann nicht horizontal gescrollt werden" />
<StoredCheckbox key="viewport-zoom" label="Viewport Zoom ist deaktiviert" />
<StoredCheckbox key="click-areas-size"
                label="Alle Klick-Flächen mind. `44x44px`, außer bei Inline-Elementen wie Links" />
