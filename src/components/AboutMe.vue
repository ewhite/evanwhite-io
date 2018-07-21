<template>
  <div class="ball-container" :style="{height: '600px'}">
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
  import _ from 'lodash'
  import UnderConstruction from './common/UnderConstruction.vue'
  import Ball from './common/balls/Ball.vue'
  import { createPositionsConstantDiameter, generatePositionForBall } from './common/balls/Position'
  import UnorderedList from './common/UnorderedList.vue'

  const educationPosition = generatePositionForBall()
  const education = {
    title: 'Education',
    content: 'U. of Oklahoma',
    details: ['B.S. Comp Eng', 'B.A. Math'],
    position: educationPosition,
  }

  const languageBallSize = 100
  const languages = ['Java', 'JS', 'C#', 'C++']
  const languagePositions = _.tail(createPositionsConstantDiameter(
    [educationPosition],
    languageBallSize,
    languages.length,
  ))

  const lanaguageBalls = _.zip(languages, languagePositions).map(([language, position]) => ({
    title: language,
    position,
    size: position.radius * 2,
  }))

  export default {
    name: 'AboutMe',
    components: {UnorderedList, Ball, UnderConstruction},
    data () {
      return {
        education,
        lanaguageBalls,
        languageBallSize,
      }
    },
  }
</script>

<style scoped>
  .ball-container {
    width: 100%;
    position: fixed;
    border: 1px solid lightblue;
  }
</style>
