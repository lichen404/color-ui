<demo>
 默认
</demo>
<template>
  <div class="button-list">
    <Button>Primary</Button>
    <Button color="success">Success</Button>
    <Button color="danger">Danger</Button>
    <Button color="warning">Warning</Button>
    <Button color="dark">Dark</Button>
  </div>

</template>

<script>

import Button from '../../lib/Button/Button.vue'
export default {
  name: 'ButtonDemo1',
  components: {Button},
}
</script>
<style lang="scss" scoped>
.button-list {
  display: flex;
  flex-wrap: wrap;
  > button {
    margin-top: 8px;
  }
}

</style>
