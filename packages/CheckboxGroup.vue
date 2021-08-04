<template>
  <label for="name"
         class="yf-Checkbox-group">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'yfCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss">
</style>
