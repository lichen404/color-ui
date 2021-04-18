<template>
<div>
  <div> Switch 示例</div>
  <h1>示例1</h1>
  <Switch v-model:value = "value"/>
  <h1>示例2</h1>
  <Switch disabled v-model:value="value2"></Switch>
</div>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
export default {
name: "SwitchDemo",
  components: {Switch},
  setup(){
    const value = ref(false);
    const value2 = ref(true)
    return {value,value2}
  }
}
</script>

<style scoped>

</style>
