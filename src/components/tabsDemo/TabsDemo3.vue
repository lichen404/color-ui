<demo>颜色</demo>
<template>
  <Tabs :color="color" v-model:value="value">
    <Tab title="Primary">Primary</Tab>
    <Tab title="Success">Success</Tab>
    <Tab title="Warning">Warning</Tab>
    <Tab title="Danger">Danger</Tab>
  </Tabs>
</template>

<script lang="ts">

import {ref, watch} from 'vue';

export default {
  name: 'TabsDemo3',
  setup() {
    const colorList = ['primary', 'success', 'warning', 'danger'];
    const value = ref(2);
    const color = ref(colorList[2]);
    watch(value, (value) => {
      color.value = colorList[value];
    });
    return {
      value,
      color
    };

  }
};

</script>
