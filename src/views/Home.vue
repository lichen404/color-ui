<template>
  <div class="home_background">
    <TopNav/>
    <div class="banner">
      <h1>Color UI</h1>
      <h2>一款基于 Vue3 和 TypeScript 的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>

  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>主要使用 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import Button from '../lib/Button.vue';

export default {
  components: {Button, TopNav}
};
</script>

<style lang="scss" scoped>
$green: #17c964;
$blue: #1980ff;
$red: #f2135d;
$border-radius: 6px;
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    color: transparent;
    background: linear-gradient(30deg, rgba($red, 1), rgba($blue, .8));
    -webkit-background-clip: text;
  }
  > h2 {
    padding: 0 20px;
    text-align: center;
  }


  > .actions {
    margin-top: 20px;

    a {
      margin: 0 8px;
      background: #22c1c3;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
        border: none;
      }
    }
  }
}

.features {
  margin: 64px auto;
  @media (min-width: 400px) {
    width: 400px;
    >ul {
      > li {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
  @media (min-width: 768px) {
    width: 768px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      li {
        width: 33.3%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}

.home_background {
  background: linear-gradient(30deg, rgba($green, .4), rgba($green, .8));
  clip-path: ellipse(80% 60% at 50% 40%);

}
</style>
