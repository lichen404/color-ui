<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible">
    <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  name: 'DialogDemo',
  components: {Dialog, Button},
  setup() {
    const visible = ref(false);
    const toggle = ()=>{
      visible.value = !visible.value
    }
    const showDialog = ()=>{
      openDialog({
        title:"标题",
        content:"你好"
      })
    }

    return {
      visible,
      toggle,
      showDialog
    };
  }
};
</script>

<style scoped>

</style>
