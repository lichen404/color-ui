<template>
  <div class="color-tabs">
    <div class="color-tabs-nav" ref="container">
      <div class="color-tabs-nav-item" v-for="(t,index) in titles"
           :ref="el => { if (index === selectedIndex) this.selectedItem = el }"
           @click="select(index)" :class="{selected: index === selectedIndex}" :key="index">{{ t }}
      </div>
      <span class="color-tabs-nav-indicator" ref="indicator"></span>
    </div>
    <div class="color-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>

  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {
  computed,
  ref,
  watchEffect,
  onMounted
} from 'vue';

export default {
  name: 'Tabs',
  props: {
    value: {
      type: Number
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
      return defaults.find((tag, index) => index === selectedIndex.value)
    });
    const select = (index: number) => {
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
};
</script>

<style lang="scss">
$blue: #1980ff;
$border-color: #d9d9d9;
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

      &:hover,&.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      display: block;
      height: 2px;
      background: linear-gradient(30deg, rgba($blue, 1), rgba($blue, .5));
      box-shadow: 0 0 8px rgba($blue, .4);
      left: 0;
      bottom: -1px;
      width: 50px;
      transition: all 250ms;
      will-change: left,width;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
