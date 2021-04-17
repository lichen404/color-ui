<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="color-dialog-overlay" @click="onClickOverlay"></div>
      <div class="color-dialog-wrapper">
        <div class="color-dialog">
          <header>标题<span class="color-dialog-close" @click="close"></span></header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button>确定</Button>
            <Button>取消</Button>
          </footer>
        </div>
      </div>
    </Teleport>

  </template>
</template>
<script>
import Button from './Button.vue'

export default {
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }

    return {
      close,
      onClickOverlay
    }
  }
}
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.color-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 50%;
      top: 50%;
      left: 50%;
      background: black;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:hover {
      background-color: #f57272;

      &::before,
      &::after {
        background-color: #fff;
      }
    }
  }
}
</style>
