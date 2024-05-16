<script lang="ts">
    import Checkbox from './checkbox.svelte';
    import StoredInput from './stored-input.svelte';
    import {randomId} from "$lib/helpers/random-id";

    export let key: string = '';
    export let label: string = '';
    export let id: string = randomId();
</script>

<StoredInput {key} let:value let:handleChange>
    <Checkbox id="checkbox-{id}" {value} on:change={handleChange} {label}>
        <slot />
        <div slot="show-code">
            <slot name="show-code" />
        </div>
    </Checkbox>
</StoredInput>
