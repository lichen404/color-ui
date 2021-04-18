<template>
  <button class="color-button" :class="[type,size]" type="button">
    <span class="color-button-text">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'filled'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props, context) {
    const { ...rest } = context.attrs;
    return { rest };
  },
};
</script>
<style lang="scss">
// 默认高度
$h: 32px;
// 边框默认颜色
$border-color: #d9d9d9;
// 默认字体颜色
$color: #fff;
// 背景颜色参数
$blue: #1980ff;
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
    background: $blue;

    &:hover {
      box-shadow: 0 8px 24px -8px $blue;
    }
  }

  &.border {
    border: 1px solid $blue;
    color: $blue;
    background: transparent;

    &:hover {
      background: rgba($blue, .2);
    }
  }

}
</style>
