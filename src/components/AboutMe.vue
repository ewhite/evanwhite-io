<template>
  <div
    v-if="ready"
    :style="{height, width}"
    class="ball-container">
    <ball
      v-for="ball in balls"
      :key="ball.title"
      :title="ball.title"
      :content="ball.content"
      :details="ball.details"
      :position="ball.position"
      :size="ball.size"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';
import UnderConstruction from './common/UnderConstruction.vue';
import Ball from './common/balls/Ball.vue';
import { Container, createPositions } from './common/balls/Position';
import UnorderedList from './common/UnorderedList.vue';

const education = {
  title: 'Education',
  content: 'U. of Oklahoma',
  details: ['B.S. Comp Eng', 'B.A. Math'],
  size: 200,
};
const languages = ['Java', 'JS', 'C#', 'C++', 'MATLAB']
  .map(language => ({
    title: language,
    size: 95,
  }));

const frameworks = ['React', 'Spring', 'Vue', 'Redux']
  .map(framework => ({
    title: framework,
    size: 95,
  }));

const balls = [education, ...languages, ...frameworks];

export default {
  name: 'AboutMe',
  components: { UnorderedList, Ball, UnderConstruction },
  data() {
    return {
      height: undefined,
      width: undefined,
    };
  },
  computed: {
    container() {
      return Container(this.height, this.width);
    },
    ready() {
      return this.container !== undefined
        && this.container.height !== undefined
        && this.container.width !== undefined;
    },
    balls() {
      if (this.ready) {
        const diameters = balls.map(ball => ball.size);
        const positions = createPositions([], diameters, this.container);
        return _.zip(balls, positions)
          .map(([ball, position]) => Object.assign({}, ball, { position }));
      }
      return [];
    },
  },
  mounted() {
    this.setDimensions();
  },
  methods: {
    setDimensions() {
      const { app } = this.$parent.$refs;
      const height = app.offsetHeight;
      const width = app.offsetWidth;

      Vue.set(this, 'height', height);
      Vue.set(this, 'width', width);
    },
  },
};
</script>

<style scoped>
  .ball-container {
    width: 100%;
    position: fixed;
  }
</style>
