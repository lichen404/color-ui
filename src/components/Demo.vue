<template>
  <div class="demo">
    <div class="demo-header">
      <h2>{{ component.__sourceCodeTitle }}</h2>
      <div class="demo-actions">
        <svg class="icons" aria-hidden="true" @click="toggleCode" v-if="codeVisible">
          <use xlink:href="#icon-code-close"></use>
        </svg>
        <svg class="icons" aria-hidden="true" @click="toggleCode" v-else>
          <use xlink:href="#icon-code-open"></use>
        </svg>
      </div>
    </div>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-code-wrapper" :style="{height:computedHeight + 'px'}">
      <div class="demo-code" ref="demoCode">
        <pre class="language-html" v-html="html"/>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import Button from '../lib/Button.vue';
import {computed, ref, watchEffect} from 'vue';

const Prism = (window as any).Prism;

export default {
  name: 'Demo',
  components: {Button},
  props: {
    component: Object
  },
  setup(props) {
    let codeHeight = 0;
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const demoCode = ref<HTMLDivElement>(null);
    const toggleCode = () => {
      codeVisible.value = !codeVisible.value;
      computedHeight.value = codeVisible.value ? codeHeight : 0;
    };
    const codeVisible = ref(false);
    const computedHeight = ref(0);

    watchEffect(() => {
      if (demoCode.value) {
        const {
          height
        } = demoCode.value.getBoundingClientRect();
        codeHeight = height;
      }

    },{
      flush:'sync'
    });

    return {
      Prism,
      html,
      codeVisible,
      toggleCode,
      computedHeight,
      demoCode
    };
  }
};
</script>
<style lang="scss" scoped>


.demo {
  border-radius: 6px;
  margin: 16px 0 32px;
  background-color: #fff;
  box-shadow: 0 4px 25px rgb(0 0 0 /10%);

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0;

    > h2 {
      font-size: 20px;

    }

    .demo-actions {
      > svg.icons {
        cursor: pointer;
        height: 16px;
        width: 16px;
      }
    }
  }


  &-component {
    padding: 16px;
  }


  &-code {
    padding: 8px 16px 16px;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;

    }

    &-wrapper {
      transition: all .2s;
      overflow: hidden;
    }
  }
}
</style>

