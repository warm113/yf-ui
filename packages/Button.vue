<template>
  <button class="yf-button"
          :class="[`yf-button-${type}`,{
            'is-plain':plain,
            'is-round':round,
            'is-circle':circle,
            'is-disabled':disabled
          }]"
          :disabled="disabled"
          @click="handleClick">
    <i v-if="icon"
       :class="icon"></i>
    <!-- 如果没有传入任何的内容 当我们没有传入插槽的时候 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'yfButton',
  // 封装一个通用的组件，会对props做一个约束，props进行校验
  props: {
    type: {
      type: String
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.yf-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: nyf;
  text-align: center;
  box-sizing: border-box;
  outline: nyf;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: nyf;
  -webkit-user-select: nyf;
  -moz-user-select: nyf;
  -ms-user-select: nyf;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.yf-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.yf-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.yf-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.yf-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.yf-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮样式
.yf-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.yf-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.yf-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b047;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.yf-button-info.is-plain {
  color: #909399;
  background: #d3d4d64a;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.yf-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab152;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.yf-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c459;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

.yf-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

.yf-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

.yf-button [class*="yf-icon-"] + span {
  margin-left: 5px;
}

.yf-button.is-disabled {
  cursor: no-drop;
}
</style>
