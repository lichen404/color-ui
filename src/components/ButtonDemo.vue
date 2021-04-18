<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>Primary</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button type="border">Border</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <Button size="large">Large</Button>
    <Button size="small">Small</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
name: "ButtonDemo",
  components: {Button},
  setup(){
    const onClick = () => {
      console.log('hi')
    }
    return {onClick}
  }
}
</script>

<style lang="scss" scoped>

</style>
