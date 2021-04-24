<demo>支持绑定激活的 tab 下标</demo>
<template>
  <span>当前选中的 tabIndex :{{value}}</span>
  <Tabs v-model:value="value">
    <Tab title="Home">Home</Tab>
    <Tab title="Service">Service</Tab>
    <Tab title="Login">Login</Tab>
    <Tab title="Lorem ipsum dolor sit amet">Lorem ipsum dolor sit amet</Tab>
  </Tabs>
</template>

<script lang="ts">
import {ref} from 'vue';
export default {
  name: 'TabsDemo2',

  setup(){
    const value = ref(1);
    return {
      value
    }

  }
};
</script>
