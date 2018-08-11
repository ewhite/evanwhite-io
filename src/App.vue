<template>
  <div>
    <Menu/>
    <router-view/>
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
    margin: 0;
    padding: 0;
  }
</style>
