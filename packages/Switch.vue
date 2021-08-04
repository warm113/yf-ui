<template>
  <label for="name"
         class="yf-switch"
         :class="{
           'is-checked':value
         }"
         @click="handleClick">
    <span class="yf-switch_core"
          ref="core">
      <span class="yf-switch_button"></span>
    </span>
    <input type="Checkbox"
           ref="input"
           class="yf-switch_input"
           :name="name">
  </label>
</template>

<script>
export default {
  name: 'yfSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)

      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss">
.yf-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .yf-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .yf-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .yf-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.yf-switch.is-checked {
  .yf-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .yf-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>
