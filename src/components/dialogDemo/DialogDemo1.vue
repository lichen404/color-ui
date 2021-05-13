<demo>默认</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" title="Dialog">
    <template v-slot:content>
      <p>
        我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体
      </p>
    </template>
  </Dialog>
  <Button @click="toggle1" color="danger">toggle</Button>
  <Dialog v-model:visible="visible1" title="Dialog" color="danger">
    <template v-slot:content>
      <p>
        我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体
      </p>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  name: 'DialogDemo1',
  setup() {
    const visible = ref(false);
    const toggle = () => visible.value = !visible.value;
    const visible1 = ref(false);
    const toggle1 = () => visible1.value = !visible1.value;
    return {
      visible,
      toggle,
      visible1,
      toggle1
    };
  }
};
</script>
