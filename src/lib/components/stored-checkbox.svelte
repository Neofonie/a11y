<script lang="ts">
  import Checkbox from "./checkbox.svelte";
  import StoredInput from "./stored-input.svelte";

  export let key: string = '';
  export let label:string = '';
</script>

<StoredInput {key} let:value let:handleChange>
  <Checkbox {value} on:change={handleChange} {label}>
    <slot />
    <div slot="show-code">
      <slot name="show-code" />
    </div>
  </Checkbox>
</StoredInput>