<template>
  <div class="top_nav">
    <router-link to="/">
      <svg class="logo" aria-hidden="true">
        <use xlink:href="#icon-color"></use>
      </svg>
    </router-link>

    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>

    <svg aria-hidden="true" @click="toggleMenu" class="toggle-aside" v-if="toggleMenuButtonVisible">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';


export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    return {
      toggleMenu
    };

  }
};
</script>
<style lang="scss" scoped>
.top_nav {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, .04);
  position: fixed;
  top:0;
  left:0;
  display: flex;
  padding: 4px 16px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;

  > a {
    margin-right: auto;

    > svg.logo {
      height: 40px;
      width: 40px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggle-aside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    > .menu {
      display: none;
    }
    > a {
      margin: 0 auto;
    }
    > .toggle-aside {
      display: inline-block;
    }
  }
}
</style>
