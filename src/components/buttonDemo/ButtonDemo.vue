<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="ButtonDemo1"/>
    <Demo :component="ButtonDemo2"/>
    <Demo :component="ButtonDemo3"/>
  </div>

</template>

<script lang="ts">
import ButtonDemo1 from './ButtonDemo1.vue';
import ButtonDemo2 from './ButtonDemo2.vue';
import ButtonDemo3 from './ButtonDemo3.vue';
import Demo from '../Demo.vue';
export default {
  name: 'ButtonDemo',
  components: {Demo},
  setup() {
    return {
      ButtonDemo2,
      ButtonDemo1,
      ButtonDemo3
    };
  }
};
</script>


