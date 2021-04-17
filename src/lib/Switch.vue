<template>
  <button @click="toggle" :class="{checked:value}">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
   props:{
     value:Boolean
   },
    setup(props,context){
      const toggle = ()=>{
       context.emit("update:value",!props.value)
      }
      return {toggle};
    }
}
</script>

<style lang="scss" scoped>
  $h:22px;
  $h2:$h - 4px;
  button {
    position: relative;
    display: inline-block;
    width: $h * 2;
    height: $h;
    line-height: $h;
    vertical-align: middle;
    border: none;
    background-color: #bfbfbf;
    border-radius: $h/2;
    outline: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
    > span {
      transition: all .25s;
      position: absolute;
      top:2px;
      left:2px;
      width: $h2;
      height:$h2;
      border: none;
      border-radius: $h/2;
      background-color: #fff;
    }
    &:active {
      > span {
        width: $h2 + 4px;
      }
    }
    &.checked {
      background-color: #1890ff;
      > span {
        left:calc(100% - #{$h2} - 2px)
      }
      &:active {
        > span {
          width:$h2 + 4px;
          margin-left: -4px;
        }
      }
    }
  }


</style>
