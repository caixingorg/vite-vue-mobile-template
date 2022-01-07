<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="header"> test demo </div>
  <section class="content">
    <ul>
      <li>中国 人不欺骗中国人</li>
      <li>人不欺骗中国人2</li>
      <li>人不欺骗中国人3</li>
      <li>人不欺骗中国人3</li>
      <li>人不欺骗中国人4</li>
      <li>人不欺骗中国人5</li>
      <li>人不欺骗中国人56</li>
      <li>人不欺骗中国人8</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld,
    },
  })
</script>

<style lang="less">
  #app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
  }

  .content {
    li {
      height: 30px;
      font-size: 30px;
      line-height: 30px;
      list-style: none;
    }
  }
</style>
