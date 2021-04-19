<template>
  <div class="layout">
    <TopNav class="nav" toggle-menu-button-visible/>
    <div class="content">
        <aside v-if="menuVisible">
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
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </aside>
        <main>
          <router-view/>
        </main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
import {inject, Ref} from 'vue';
export default {
  components:{TopNav},
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    return {
      menuVisible
    }
  }
}
</script>
<style lang="scss" scoped>
.router-link-active {
  text-decoration: underline;
}
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    display: flex;
    position: relative;
    flex-grow: 1;
    > aside {
      flex-shrink: 0;
      background: lightblue;
      width:150px;
      padding:16px;
      > h2 {
        margin-bottom: 4px;
      }
      > ol {
        > li {
          padding: 4px 0;
        }
      }
      @media (max-width:500px) {
        position: fixed;
        top: 70px;
        left:0;

      }
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      background-color:lightgreen;
      overflow: auto;
    }
  }
}

</style>
