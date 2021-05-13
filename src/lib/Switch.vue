<template>
  <button @click="toggle" :class="[{checked:value},disabled,`color-${color}`]" class="color-switch">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
   props:{
     value:Boolean,
     disabled:{
       type:Boolean,
       default:false
     },
     color:{
       type:String,
       default:'primary'
     }

   },
    setup(props,context){
      const toggle = ()=>{
       context.emit("update:value",!props.value)
      }
      return {toggle};
    }
}
</script>

<style lang="scss">
  $h:22px;
  $h2:$h - 4px;
  .color-switch {
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
      @mixin style($color){
        background:rgb(var($color));
      }
      &.color-primary {
        @include style(--color-primary)
      }
      &.color-danger {
        @include style(--color-danger)
      }
      &.color-success {
        @include style(--color-success)
      }
      &.color-dark {
        @include style(--color-dark)
      }
      &.color-light {
        @include style(--color-light)
      }
      &.color-warning {
        @include style(--color-warning)
      }

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
    &.disabled {
      opacity: .5;
      cursor: default;
      pointer-events: none;
    }
  }


</style>
