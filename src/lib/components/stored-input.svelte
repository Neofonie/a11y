<!-- StoredInput.svelte -->
<script lang="ts">
import { onMount } from 'svelte';

export let key: string;

let value = false;

onMount(() => {
    if (typeof window !== 'undefined') {
        value = localStorage.getItem(key) === 'true';
    }
});

function handleChange(event: CustomEvent) {
    value = event.detail.checked;
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, value ? 'true' : 'false');
    }
}
</script>

<slot value="{value}" handleChange="{handleChange}"></slot>
