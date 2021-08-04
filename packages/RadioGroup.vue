<template>
  <div class="yf-radioGroup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'yfRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style lang="scss">
</style>
