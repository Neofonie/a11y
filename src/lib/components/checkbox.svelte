<script type="ts">
    export let test = "456";
</script>

<style>
    .checkbox {
      &.slot {
        background: red;
      }
    }
</style>

<label class="checkbox">
    <input type="checkbox" />
    {test}
    <div><slot /></div>

    <div class="checkbox slot">
    <slot name="named" />
    </div>
</label>