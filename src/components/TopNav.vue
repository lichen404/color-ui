<template>
  <div>
    <div class="top_nav">

      <svg class="logo" aria-hidden="true">
        <use xlink:href="#icon-color"></use>
      </svg>

      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>

      <svg aria-hidden="true" @click="toggleMenu" class="toggleAside" v-if="toggleMenuButtonVisible">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>
  </div>

</template>
<script lang="ts">
import {inject,Ref} from 'vue';
export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default:false
    }
  },
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value
    }
    return {
      toggleMenu
    }

  }
}
</script>
<style lang="scss" scoped>
.top_nav {
  position: relative;
  display: flex;
  padding: 16px;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > svg.logo {
    height: 40px;
    width: 40px;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width:24px;
    height:24px;
    position: absolute;
    left:16px;
    top:50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width:500px){
      >.menu {
        display: none;
      }
      >.logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: inline-block;
      }
  }
}
</style>
