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
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
  name: "DialogDemo1",
  setup(){
    const visible = ref(false);
    const toggle = ()=> visible.value = !visible.value
    return {
      visible,
      toggle
    }
  }
}
</script>
