<template>
  <div class="box">
    <div class="row header">
      <Menu/>
    </div>
    <div
      id="app"
      class="row content">
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
  }

  .box {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .box .row {
    border: 1px dotted gray;
  }

  .box .row.header {
    flex: 0 1 auto;
  }

  .box .row.content {
    flex: 1 1 auto;
  }

  .box .row.footer {
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
