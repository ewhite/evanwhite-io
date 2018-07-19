<template>
  <section class="hero is-light is-bold">
    <div class="hero-body">
      <div class="container">
        <img
          class="profile-photo"
          src="../assets/evan-profile-lg.jpeg">
        <h1 class="title">
          Evan White
        </h1>
        <h2 class="subtitle">
          A full stack web developer with a passion for learning new things,
          the continuous improvement of himself and his code, getting the job done.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Evan White',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .profile-photo {
    max-width: 50vw;
    max-height: 40vh;
    border-radius: 50%;
  }
</style>
