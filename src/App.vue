<template>
  <div>
    <Menu />
    <div id="app">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
