<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" title="Dialog">
    <template v-slot:content>
      <p>
        我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体，我能吞下玻璃而不伤身体
      </p>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">showDialog</Button>
  <h1>示例3</h1>
  <Button @click="toggle1">toggle</Button>
  <Dialog v-model:visible="visible1" title="Dialog" :is-valid="valid">
    <template v-slot:content>
      <label class="input-account">
        <span>输入账户</span>
        <input :value="text" @input="handleChange"/>
      </label>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref, watch} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  name: 'DialogDemo',
  components: {Dialog, Button},
  setup() {
    const visible = ref(false);
    const visible1 = ref(false);
    const valid = ref(false);
    const text = ref('');
    const toggle = () => {
      visible.value = !visible.value;
    };
    const toggle1 = () => {
      visible1.value = !visible1.value;
    };
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        onAccept: () => {
          console.log('accept');
        },
        onCancel: () => {
          console.log('cancel');
        }
      });
    };
    const handleChange = (e) => {
      text.value = e.target.value;
    };
    watch(text, () => {
      valid.value = !!text.value;

    });
    return {
      visible,
      visible1,
      toggle,
      toggle1,
      showDialog,
      valid,
      text,
      handleChange
    };
  }
};
</script>

<style lang="scss" scoped>
.input-account {
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  min-width: 250px;

  > input {
    border: none;
    border-bottom: 1px solid black;
    outline: none;

  }
}
</style>
