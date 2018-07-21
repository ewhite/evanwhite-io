<template>
  <div
    :style="{height, width}"
    class="ball-container">
    <ball
      :title="education.title"
      :content="education.content"
      :details="education.details"
      :position="education.position"
    />
    <ball
      v-for="languageBall in lanaguageBalls"
      :key="languageBall.title"
      :title="languageBall.title"
      :position="languageBall.position"
      :size="languageBall.size"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';
import UnderConstruction from './common/UnderConstruction.vue';
import Ball from './common/balls/Ball.vue';
import { createPositionsConstantDiameter, generatePositionForBall } from './common/balls/Position';
import UnorderedList from './common/UnorderedList.vue';

const startTime = new Date().getTime();
const educationPosition = generatePositionForBall();
const education = {
  title: 'Education',
  content: 'U. of Oklahoma',
  details: ['B.S. Comp Eng', 'B.A. Math'],
  position: educationPosition,
};

const languageBallSize = 95;
const languages = ['Java', 'JS', 'C#', 'C++', 'MATLAB', 'React', 'Spring', 'Vue', 'Redux'];
const languagePositions = _.tail(createPositionsConstantDiameter([educationPosition], languageBallSize, languages.length));

const lanaguageBalls = _.zip(languages, languagePositions).map(([language, position]) => ({
  title: language,
  position,
  size: position.radius * 2,
}));

const endTime = new Date().getTime();
console.log(`calculating locations took: ${endTime - startTime} milliseconds.`);

export default {
  name: 'AboutMe',
  components: { UnorderedList, Ball, UnderConstruction },
  data() {
    return {
      height: '',
      width: '',
      education,
      lanaguageBalls,
      languageBallSize,
    };
  },
  mounted() {
    this.setDimensions();
  },
  methods: {
    setDimensions() {
      const { app } = this.$parent.$refs;
      const height = app.offsetHeight;
      const width = app.offsetWidth;

      Vue.set(this, 'height', `${height}px`);
      Vue.set(this, 'width', `${width}px`);
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
