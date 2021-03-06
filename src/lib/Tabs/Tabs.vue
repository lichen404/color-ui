<template>
  <div class="color-tabs">
    <div class="color-tabs-nav" ref="container">
      <div class="color-tabs-nav-item" v-for="(t,index) in titles"
           :ref="el => { if (index === selectedIndex) this.selectedItem = el }"
           @click="select(index)" :class="{selected: index === selectedIndex, [`color-${color}`]:index===selectedIndex}" :key="index">{{ t }}
      </div>
      <span class="color-tabs-nav-indicator" ref="indicator" :class="`color-${color}`"></span>
    </div>
    <div class="color-tabs-content">
      <transition name="fade-color-tab" mode="out-in">
        <component :is="current" :key="current.props.title"/>
      </transition>
    </div>

  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {
  computed,
  ref,
  watchEffect,
  onMounted,
  defineComponent
} from 'vue';

export default defineComponent({
  name: 'Tabs',
  props: {
    value: {
      type: Number
    },
    color:{
      type:String,
      default:'primary'
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLSpanElement>(null);
    const container = ref<HTMLDivElement>(null);
    const selectedIndex = ref(props.value || 0);
    onMounted(() => {
      watchEffect(() => {
        const {
          width
        } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {
          left: left1
        } = container.value.getBoundingClientRect();
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
      }, {
        // 解决异步
        flush: 'sync', //效果更新需要缓冲时间

      });
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const current = computed(() => {
      return defaults.find((tag, index) => index === selectedIndex.value);
    });
    const select = (index) => {
      context.emit('update:value', index);
      selectedIndex.value = index;
    };
    return {
      current,
      defaults,
      titles,
      select,
      selectedItem,
      selectedIndex,
      indicator,
      container
    };
  }
});
</script>

<style lang="scss">
$blue: #1980ff;
$border-color: #d9d9d9;
.fade-color-tab-enter-active, .fade-color-tab-leave-active {
  transition: all .3s;
}

.fade-color-tab-enter-from {
  opacity: 0;
  display: inline-block;
  transform: translateX(-100%);
}

.fade-color-tab-leave-to {
  opacity: 0;
  display: inline-block;
  transform: translateX(100%);
}

.color-tabs {
  &-nav {
    display: flex;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 10px !important;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &:hover, &.selected {
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
    }

    &-indicator {
      position: absolute;
      display: block;
      height: 2px;
      @mixin style($color){
        background: linear-gradient(30deg, rgba(var($color), 1), rgba(var($color), .5));
        box-shadow: 0 0 8px rgba(var($color), .4);
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
      left: 0;
      bottom: -1px;
      width: 50px;
      transition: all 250ms;
      will-change: left, width;
    }
  }

  &-content {
    padding: 8px !important;
    position: relative;
  }
}
</style>
