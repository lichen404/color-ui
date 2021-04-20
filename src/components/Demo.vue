<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
     <pre class="language-html" v-html="html"/>

    </div>
  </div>
</template>

<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import Button from '../lib/Button.vue';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism

export default {
  name: 'Demo',
  components: {Button},
  props: {
    component:Object
  },
  setup(props){
    const html = computed(()=>{
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const toggleCode = () => codeVisible.value = !codeVisible.value
    const codeVisible = ref(false)
    return {
      Prism,
      html,
      codeVisible,
      toggleCode
    }
  }
};
</script>

