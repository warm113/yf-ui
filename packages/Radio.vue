<template>
  <label class="yf-radio"
         :class="{'is-checked':label === model}">
    <span class="yf-radio__input">
      <span class="yf-radio__inner"></span>
      <input class="yf-radio__original"
             type="radio"
             :value="label"
             v-model="model">
    </span>
    <span class="yf-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'yfRadio',
  props: {
    label: {
      type: [String, Boolean, Number],
      dedault: ''
    },
    value: null,
    name: {
      type: String,
      dedault: ''
    }
  },
  inject: {
    RadioGroup: {
      dedault: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // this.$emit('input', value)
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  }
}
</script>
<style lang="scss">
.yf-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 20px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .yf-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .yf-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .yf-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .yf-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.yf-radio.is-checked {
  .yf-radio_input {
    .yf-radio_inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .yf-radio_label {
    color: #409eff;
  }
}
</style>
