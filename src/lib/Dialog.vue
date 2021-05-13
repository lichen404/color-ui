<template>
  <Teleport to="body">
    <transition name="dialog">
      <div v-if="visible">
        <div class="color-dialog-overlay" @click="onClickOverlay"></div>
        <div class="color-dialog-wrapper">
          <div class="color-dialog">
            <header>
            <span class="color-dialog-title" :class="`color-${color}`">
            {{ title }}
          </span>
              <svg aria-hidden="true" @click="close" class="color-dialog-close" :class="`color-${color}`">
                <use xlink:href="#icon-close"></use>
              </svg>
            </header>
            <main>
              <slot name="content"/>
            </main>
            <footer>
              <Button @click="onAccept" :disabled="!isValid" :color="color" >{{ acceptText }}</Button>
              <Button @click="onCancel" type="border">{{ cancelText }}</Button>
            </footer>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
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
    },
    color:{
      type:String,
      default:'primary'
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
};
</script>
<style lang="scss">
$radius: 6px;
$border-color: #d9d9d9;

.dialog-enter-from .color-dialog, .dialog-leave-to .color-dialog {
  transform: scale(.8);
  opacity: 0;
}

.dialog-leave-active, .dialog-enter-active {
  transition: all .2s;
}

.color-dialog {
  background: white;
  box-shadow: 0 0 3px fade-out(black, 0.5);
  border-radius: $radius;
  transition: all .2s;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 11;

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
    font-weight: 600;
    @mixin style($color){
      color:rgb(var($color));
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

    &:hover {
      @mixin style($color){
        fill:rgb(var($color));
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
  }
}
</style>
