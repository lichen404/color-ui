<demo>
提供 isValid 字段决定是否允许点击确定
</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" title="Dialog" :is-valid="valid">
    <template v-slot:content>
      <label class="input-account">
        <span>输入账户</span>
        <input :value="text" @input="handleChange"/>
      </label>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {ref, watch} from 'vue';
export default {
  name: 'DialogDemo3',
  setup() {
    const visible = ref(false);
    const valid = ref(false);
    const text = ref('');
    const handleChange = (e:InputEvent) => {
      text.value = (e.target as HTMLInputElement).value;
    };
    const toggle = () => visible.value = !visible.value;
    watch(text, () => {
      valid.value = !!text.value;

    });
    return {
      text,
      valid,
      visible,
      handleChange,
      toggle
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
