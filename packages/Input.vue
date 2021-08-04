<template>
  <div class="yf-input"
       :class="{
    'yf-input--suffix':showSuffix
  }">
    <input class="yf-input_inner"
           :class="{'is-disabled':disabled}"
           :placeholder="placeholder"
           :type='showPassword ? (this.passwordVisiable ? "text":"password"):type'
           :name="name"
           :disabled="disabled"
           :value="value"
           @input="handleInput">
    <span class="yf-input_suffix"
          v-if="showSuffix">
      <i class="yf-input_icon yf-icon-circle-close"
         v-if="clearable && value"
         @click="clear"></i>
      <i class="yf-input_icon yf-icon-view"
         v-if="showPassword"
         @click="handlePassword"
         :class="{'yf-icon-view-active':passwordVisiable}"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'yfInput',
  data () {
    return {
      passwordVisiable: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisiable = !this.passwordVisiable
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  }
}
</script>
<style lang="scss" >
.yf-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .yf-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.yf-input--suffix {
  .yf-input_inner {
    padding-right: 30px;
  }
  .yf-input_suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .yf-icon-view-active {
      color: blue;
    }
  }
}
</style>
