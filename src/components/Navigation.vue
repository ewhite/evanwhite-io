<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link
        id="site-logo"
        to="/"
        class="navbar-item">
        evanwhite.info
      </router-link>
    </div>

    <div
      id="navbarExampleTransparentExample"
      class="navbar-menu">
      <div class="navbar-start">
        <router-link
          to="/about-me"
          class="navbar-item">
          About Me
        </router-link>
        <router-link
          to="/playground"
          class="navbar-item">
          Playground
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>
#site-logo {
  font-style: italic;
}
</style>
