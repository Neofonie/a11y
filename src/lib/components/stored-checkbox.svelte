<!-- stored-checkbox.svelte -->
<script>
  import Checkbox from "./checkbox.svelte";
  import StoredInput from "./stored-input.svelte";

  export let key = "";
  export let label = "";
  export let id = "";
</script>

<div>
  <StoredInput {key} let:value let:handleChange>
    <Checkbox {id} {value} on:change={handleChange} {label}>
      <slot></slot>
      <div slot="named"><slot name="named" /></div>
    </Checkbox>
    
  </StoredInput>
</div>
