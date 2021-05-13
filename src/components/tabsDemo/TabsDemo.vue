<template>
  <div>
    <h1> Tabs 示例</h1>
    <Demo :component="TabsDemo1"/>
    <Demo :component="TabsDemo2"/>
    <Demo :component="TabsDemo3"/>
  </div>

</template>

<script lang="ts">
import Demo from '../Demo.vue';
import TabsDemo1 from './TabsDemo1.vue';
import TabsDemo2 from './TabsDemo2.vue';
import TabsDemo3 from './TabsDemo3.vue';
export default {
  name: 'TabsDemo',
  components: {Demo},
  setup() {
    return {
      TabsDemo2,
      TabsDemo1,
      TabsDemo3
    };
  }
};
</script>

