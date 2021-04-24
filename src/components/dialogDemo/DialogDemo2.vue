<demo>支持函数调用</demo>
<template>
  <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
import {openDialog} from '../../lib/openDialog';
export default {
  name: 'DialogDemo2',
  setup(){
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
    return {
      showDialog
    }
  }
}
</script>

