<template>
  <div class="ball-container">
    <ball
      :title="education.title"
      :content="education.content"
      :details="education.details"
      :position="education.position"
    />
    <ball
      v-for="language in languages"
      :key="language.title"
      :title="language.title"
      :position="language.position"
      :size="languageBallSize"
    />
  </div>
</template>

<script>
import UnderConstruction from './common/UnderConstruction.vue';
import Ball from './common/balls/Ball.vue';
import { generatePositionForBall } from './common/balls/Position';
import UnorderedList from './common/UnorderedList.vue';

const education = {
  title: 'Education',
  content: 'U. of Oklahoma',
  details: ['B.S. Comp Eng', 'B.A. Math'],
  position: generatePositionForBall(),
};

const languageBallSize = 100;
const languages = ['Java', 'JS', 'C#', 'C++'].map(language => ({
  title: language,
  position: generatePositionForBall(languageBallSize),
}));

export default {
  name: 'AboutMe',
  components: { UnorderedList, Ball, UnderConstruction },
  data() {
    return {
      education,
      languages,
      languageBallSize,
    };
  },
};
</script>

<style scoped>
  .ball-container {
    height: 100%;
    width: 100%;
    position: fixed;
  }
  </style>
