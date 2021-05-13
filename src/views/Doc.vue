<template>
  <div class="layout">
    <TopNav class="nav" toggle-menu-button-visible/>
    <div class="content">
      <Sidebar/>
      <main>

        <router-view v-slot="{Component}">
          <transition name="router-switch" appear mode="out-in">
             <component :is="Component"/>
          </transition>
        </router-view>

      </main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
  components: {Sidebar, TopNav},
};
</script>
<style lang="scss" scoped>
.router-switch-enter-active,.router-switch-leave-active {
  transition: all 250ms;
}
.router-switch-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.router-switch-leave-to {
  transform: translateX(100%);
  opacity: 0;
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
    padding: 54px 0 0 200px;
    @media (max-width: 720px) {
      padding-left: 0;
    }
    > main {
      flex-grow: 1;
      overflow: auto;
      max-width: 1024px;
      padding: 16px;
      margin: 0 auto;
    }
  }
}

</style>
