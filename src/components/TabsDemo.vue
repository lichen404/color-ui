<template>
  <div> Tabs 示例</div>
  <h1>示例1</h1>
  <span>当前选中的 tabIndex :{{value}}</span>
  <Tabs v-model:value="value">
    <Tab title="Home">Home</Tab>
    <Tab title="Service">Service</Tab>
    <Tab title="Login">Login</Tab>
    <Tab title="Lorem ipsum dolor sit amet">Lorem ipsum dolor sit amet</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import {ref} from 'vue';

export default {
  name: 'TabsDemo',
  components: {Tab, Tabs},
  setup(){
    const value = ref(1);
    return {
      value
    }

  }
};
</script>

<style scoped>

</style>
