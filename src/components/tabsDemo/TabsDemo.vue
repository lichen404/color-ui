<template>
  <h1> Tabs 示例</h1>
  <Demo :component="TabsDemo1"/>
  <Demo :component="TabsDemo2"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import TabsDemo1 from './TabsDemo1.vue';
import TabsDemo2 from './TabsDemo2.vue';

export default {
  name: 'TabsDemo',
  components: {Demo},
  setup() {
    return {
      TabsDemo2,
      TabsDemo1
    };
  }
};
</script>

