<demo>
带边框的按钮
</demo>
<template>
  <Button type="border">Primary</Button>
  <Button type="border" color="success">Success</Button>
  <Button type="border" color="danger">Danger</Button>
  <Button type="border" color="warning">Warning</Button>
  <Button type="border" color="dark">Dark</Button>
</template>

<script>

import Button from '../../lib/Button/Button.vue'
export default {
  name: 'ButtonDemo4',
  components: {Button},
}
</script>
