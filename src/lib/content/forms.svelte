<script>
import Headline from "$lib/components/headline.svelte";
import StoredCheckbox from "$lib/components/stored-checkbox.svelte";
</script>

<Headline tag="h2">Formulare</Headline>

<StoredCheckbox key="inputs-labels" label="Alle Inputs sind mit einem entsprechenden Label verbunden" />
<StoredCheckbox key="form-input-autocomplete" label="Form-Inputs unterstützen grundsätzlich Autovervollständigung" />
<StoredCheckbox key="input-errors" label="Eingabefehler werden direkt mit den entsprechenden Feldern assoziiert" />
