<!-- StoredCheckbox.svelte -->
<script>
  import Checkbox from "./checkbox.svelte";
  import StoredInput from "./stored-input.svelte";

  export let key = '';
  export let label = '';
</script>

<div>
<StoredInput {key} let:value let:handleChange>
  <Checkbox {value} on:change={handleChange} label={label}></Checkbox>
  <slot></slot>
  <slot name="named" />
</StoredInput>
</div>