<script>
import Headline from "$lib/components/headline.svelte";
import StoredCheckbox from "$lib/components/stored-checkbox.svelte";
</script>
<Headline tag="h2">Tastatur</Headline>

<StoredCheckbox key="keyboard-control" label="Tastatursteuerung muss komplett möglich sein" />
<StoredCheckbox key="interactive-elements-focus"
                label="Alle interaktiven Elemente müssen einen sichtbaren focustyle haben" />
<StoredCheckbox key="keyboard-focus-order" label="Keyboard-Focus-Reihenfolge gleicht der des visuellen Layouts" />
<StoredCheckbox key="no-invisible-focusable" label="Es gibt keine unsichtbaren fokusierbaren Elemente" />
<StoredCheckbox key="buttons-space-enter" label="Buttons können über Leertaste und Eingabetaste betätigt werden" />
<StoredCheckbox key="menus-overlays-esc" label="Menüs und Overlays können via ESC-Taste wieder geschlossen werden" />