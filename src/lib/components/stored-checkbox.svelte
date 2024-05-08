<script lang="ts">
import Checkbox from './checkbox.svelte';
import StoredInput from './stored-input.svelte';

export let key: string = '';
export let label: string = '';
</script>

<StoredInput key="{key}" let:value let:handleChange>
    <Checkbox value="{value}" on:change="{handleChange}" label="{label}">
        <slot />
        <div slot="show-code">
            <slot name="show-code" />
        </div>
    </Checkbox>
</StoredInput>
