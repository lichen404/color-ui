<template>
  <div>
    <h1>Dialog 示例</h1>
    <Demo :component="DialogDemo1"/>
    <Demo :component="DialogDemo2"/>
    <Demo :component="DialogDemo3"/>
  </div>

</template>

<script lang="ts">
import Demo from '../Demo.vue';
import DialogDemo1 from './DialogDemo1.vue';
import DialogDemo2 from './DialogDemo2.vue';
import DialogDemo3 from './DialogDemo3.vue';

export default {
  name: 'DialogDemo',
  components: {Demo},
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
      DialogDemo3
    };

  }
};
</script>


