<template>
  <div class="flex-box">
    <div class="flex-row flex-header">
      <Menu/>
    </div>
    <div
      id="app"
      ref="app"
      class="flex-row flex-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Navigation.vue';

export default {
  name: 'App',
  components: { Menu },
};
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .flex-box {
    display: flex;
    flex-flow: column;
    height: 100%;
    padding: 0;
  }

  .flex-box .flex-row {
  }

  .flex-box .flex-row.flex-header {
    flex: 0 1 auto;
  }

  .flex-box .flex-row.flex-content {
    flex: 1 1 auto;
  }

  .flex-box .flex-row.footer {
    flex: 0 1 40px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
