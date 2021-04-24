<template>
  <div>
    <h1>Switch 示例</h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import Switch1Demo from './SwitchDemo1.vue';
import Switch2Demo from './SwitchDemo2.vue';
import Demo from '../Demo.vue';

export default {
  name: 'SwitchDemo',
  components: {
    Demo
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo
    };
  }
};
</script>


