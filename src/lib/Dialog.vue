<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="color-dialog-overlay" @click="onClickOverlay"></div>
      <div class="color-dialog-wrapper">
        <div class="color-dialog">
          <header>
            <span class="color-dialog-title">
            {{ title }}
          </span>
            <svg class="color-dialog-close" aria-hidden="true" @click="close">
              <use xlink:href="#icon-close"></use>
            </svg>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button @click="onAccept" :disabled="!isValid">{{ acceptText }}</Button>
            <Button @click="onCancel">{{ cancelText }}</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import Button from './Button.vue';

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
    },
    acceptText: {
      type: String,
      default: 'Accept'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    title: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:visible', 'accept', 'cancel'], //声明要触发的自定义事件，否则会有警告
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const onCancel = () => {
      context.emit('cancel');
      close();
    };
    const onAccept = () => {
      context.emit('accept');
      close();
    };

    return {
      close,
      onClickOverlay,
      onAccept,
      onCancel
    };
  }
}
</script>
<style lang="scss">
$radius: 6px;
$border-color: #d9d9d9;
$blue: #1980ff;
.color-dialog {
  background: white;
  box-shadow: 0 0 3px fade-out(black, 0.5);
  border-radius: $radius;
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
    max-width: 90%;
    min-width: 15em;
  }

  &-title {
    color: $blue;
    font-weight: 600;
  }

  > header {
    border-radius: $radius;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    padding: 12px 16px;
    background: #f8f8f8;

  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    padding: 12px 16px 4px;
    text-align: right;
    position: relative;

    &:before {
      content: "";
      top: 0;
      left: 0;
      position: absolute;
      width: 90%;
      height: 1px;
      margin-left: 5%;
      background: $border-color;
    }
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
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
      fill: $blue;

      &::before,
      &::after {
        background-color: #fff;
      }
    }
  }
}
</style>
