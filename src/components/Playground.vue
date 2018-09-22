<template>
  <div class="container">
    <section class="section">
      <h1 class="title">Playground</h1>
      <p class="subtitle">Check out what I'm working on right now!</p>
      <div class="current-projects">
        <div class="current-project">
          <h2 class="title is-4">Google Photos Album Viewer</h2>
          <div class="is-flex is-horizontal-center">
            <figure class="image">
              <img src="../assets/album-viewer-image.png">
            </figure>
          </div>
          <p>
            I won't say that my girlfriend Monica and I are the
            cutest couple <i>ever</i>, but we are still pretty
            cute. (Admittedly, she does all the heavy lifting in
            the cuteness realm.)
          </p>
          <br>
          <p>
            To celebrate that, I'm working to create a live Google
            Photos Album Viewer that can be installed/run on any
            Raspberry Pi. Hoping to turn it into a really sweet
            custom photo frame that displays our shared albums.
          </p>
          <div class="current-project">
            <h2 class="title is-4">Personal Website</h2>
            <router-link
              to="/"
              class="is-flex is-horizontal-center"
            >
              <figure class="image">
                <img src="../assets/personal-site-image.png">
              </figure>
            </router-link>
            <p>
              As I'm sure is clear,
              <router-link
                to="/"
                class="is-link">
                evanwhite.info
              </router-link>
              could still use a lot of polish. My website is
              a place for me to experiment with new technologies, showcase
              cool stuff, and generally have a good time with code.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UnderConstruction from './common/UnderConstruction.vue';

export default {
  name: 'Playground',
  components: { UnderConstruction },
};
</script>

<style scoped>
  .current-project {
    margin-top: 1.5rem;
  }

  .is-horizontal-center {
    justify-content: center;
  }

  figure.image {
    position: relative;
    max-width: 80%;
    padding: 1rem;
  }

  img {
    border-radius: 2rem;
    border: 1px solid lightgray;
  }
</style>
