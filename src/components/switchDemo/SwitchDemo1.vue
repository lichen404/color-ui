<demo>
默认
</demo>
<template>
  <ul class="switch-list">
    <li>
      <span>Primary</span>
      <Switch v-model:value="bool" class="ml-8"/>
    </li>
    <li>
      <span>Success</span>
      <Switch v-model:value="bool1" color="success" class="ml-8"/>
    </li>
    <li>
      <span>Danger</span>
      <Switch v-model:value="bool2" color="danger" class="ml-8"/>
    </li>

  </ul>


</template>

<script lang="ts">
import {ref} from 'vue';
export default {
  name: 'SwitchDemo1',
  setup() {
    const bool = ref(false);
    const bool1 = ref(true);
    const bool2 = ref(true);
    return {
      bool,
      bool1,
      bool2
    };
  }
};
</script>
<style lang="scss" scoped>
.ml-8 {
  margin-left: 8px;
}
ul.switch-list {
  display: flex;
  flex-wrap: wrap;
  > li {
    display: flex;
    align-items: center;
    margin:4px;
  }
}
</style>
