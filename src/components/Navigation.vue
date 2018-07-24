<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link
        id="site-logo"
        to="/"
        class="navbar-item">
        evanwhite.info
      </router-link>
      <div
        :class="{'is-active': navIsActive}"
        class="navbar-burger burger"
        data-target="mainNav"
        @click="toggleMenu">
        <span/>
        <span/>
        <span/>
      </div>
    </div>

    <div
      id="mainNav"
      :class="{'is-active': navIsActive}"
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
  data() {
    return {
      navIsActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.navIsActive = !this.navIsActive;
    },
  },
};
</script>

<style scoped>
  #site-logo {
    font-style: italic;
  }
  .router-link-exact-active {
    color: #7957d5;
  }
</style>
