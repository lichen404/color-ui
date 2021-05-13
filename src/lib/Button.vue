<template>
  <button class="color-button" :class="[type,size,{'disabled':disabled},`color-${color}`]" type="button">
    <span class="color-button-text">
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'filled'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled:{
      type:Boolean,
      default:false
    },
    color:{
      type:String,
      default:'primary'
    }
  },
  setup(props, context) {
    const { ...rest } = context.attrs;
    return { rest };
  },
});
</script>
<style lang="scss">
// 默认高度
$h: 32px;
// 边框默认颜色
$border-color: #d9d9d9;
// 默认字体颜色
$color: #fff;
// 角度参数
$radius: 6px;
button.color-button {
  padding: 10px;
  cursor: pointer;
  white-space: nowrap;
  background: transparent;
  color: $color;
  border-radius: $radius;
  //   相邻组件间相隔8px
  & + & {
    margin-left: 8px;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  > .color-button-text {
    color: inherit;
    display: inline-block;
    font-size: 14px;

  }
  &.large {
    font-size: 1.2em;
    padding: 12px;
  }
  &.small {
    font-size: .8rem;
    padding: 8px;
  }

  &.filled {
    @mixin style($color){
      background: rgb(var($color));
      &:hover {
        box-shadow: 0 8px 24px -8px var($color);
      }
    }
    &.color-primary {
      @include style(--color-primary)
    }
    &.color-danger {
      @include style(--color-danger)
    }
    &.color-success {
      @include style(--color-success)
    }
    &.color-dark {
      @include style(--color-dark)
    }
    &.color-light {
      @include style(--color-light)
    }
    &.color-warning {
      @include style(--color-warning)
    }
  }

  &.border {
    @mixin style($color){
      color:rgb(var($color));
      border: 1px solid rgb(var($color));
      &:hover {
        background: rgba(var($color),.2);
      }
    }
    &.color-primary {
      @include style(--color-primary)
    }
    &.color-danger {
      @include style(--color-danger)
    }
    &.color-success {
      @include style(--color-success)
    }
    &.color-dark {
      @include style(--color-dark)
    }
    &.color-light {
      @include style(--color-light)
    }
    &.color-warning {
      @include style(--color-warning)
    }



  }
  &.disabled {
    opacity: .5;
    cursor: default;
    pointer-events: none;
  }

}
</style>
