<demo>
默认
</demo>
<template>
  <Switch v-model:value="bool"/>
</template>

<script lang="ts">
import {ref} from 'vue';
export default {
  name: 'SwitchDemo1',
  setup() {
    const bool = ref(false);
    return {
      bool
    };
  }
};
</script>
