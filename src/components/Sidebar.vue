<template>
  <div class="sidebar-wrapper" :class="{'aside-open':menuVisible}">
    <div class="aside-mask"  @click="closeMenu"/>
    <aside>
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs</router-link>
        </li>
      </ol>
    </aside>

  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue';
export default {
  name: 'Sidebar',
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const closeMenu = () => {
      menuVisible.value = false;
    };
    return {
      menuVisible,
      closeMenu
    };
  }

}
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  &.aside-open {
    > .aside-mask {
      display: block;
    }
    > aside {
      z-index: 12;
      transform: translateX(0);
    }
  }
  > .aside-mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
  }
  > aside {
    flex-shrink: 0;
    width: 200px;
    padding: 16px 0;
    height: calc(100vh - 54px);
    position: fixed;
    top:54px;
    left: 0;
    background-color: #f5f7fb;
    > h2 {
      margin-bottom: 4px;
      margin-left: 10px;
      font-size: 18px;
      padding: 10px;
      font-weight: 600;
    }
    > ol {
      > li {
        > a.router-link-active {
          border-left-color: rgb(25,128,255);
          color: rgb(25,128,255);
          opacity: 1;
        }
        > a {
          border-left:4px solid transparent;
          display: inline-block;
          padding: 4px 20px;
          opacity: .8;
          transition: all .2s;
        }
      }
    }

    @media (max-width: 720px) {
      position: fixed;
      top: 54px;
      left: 0;
      transition:transform .2s;
      transform: translateX(-100%);

    }
  }
}
</style>
