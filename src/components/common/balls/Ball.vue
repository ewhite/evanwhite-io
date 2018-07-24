<template>
  <section
    :style="{ width: `${size}px`, height: `${size}px`, top: position.topPx, left: position.leftPx}"
    class="stage"
  >
    <figure class="ball bubble">
      <div class="ball-interior">
        <h1 class="ball-title">{{ title }}</h1>
        <div class="ball-content">{{ content }}</div>
        <unordered-list :elements="details" />
      </div>
    </figure>
  </section>
</template>

<script>
import Position from './Position';
import UnorderedList from '../UnorderedList.vue';

const DEF_DIAMETER = 200;

export default {
  name: 'Ball',
  components: { UnorderedList },
  props: {
    title: {
      type: String,
      default: () => '',
    },
    content: {
      type: String,
      default: () => '',
    },
    details: {
      type: Array,
      default: () => [],
    },
    position: {
      type: Object,
      default: () => Position(0, 0, DEF_DIAMETER),
    },
    size: {
      type: Number,
      default: () => DEF_DIAMETER,
    },
  },
};
</script>

<style scoped>
  .ball-interior {
    position: relative;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .ball-title {
    font-weight: bold;
    font-size: 130%;
    margin-bottom: 3%;
  }
  .ball-content {
    margin-bottom: 3%;
  }
  .ball {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: relative;
    background: radial-gradient(
      circle at 50% 55%,
      rgba(240, 245, 255, 0.9),
      rgba(240, 245, 255, 0.9) 40%,
      rgba(225, 238, 255, 0.18) 60%,
      rgba(43, 130, 255, 0.48)
    );
  }

  .ball:before {
    content: "";
    position: absolute;
    top: 1%;
    left: 5%;
    width: 90%;
    height: 90%;
    border-radius: 100%;
    background: radial-gradient(circle at top, white, rgba(255, 255, 255, 0) 58%);
    -webkit-filter: blur(5px);
    filter: blur(5px);
    z-index: 2;
  }

  .ball:after {
    content: "";
    position: absolute;
    display: none;
    top: 5%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 100%;
    -webkit-filter: blur(1px);
    filter: blur(1px);
    z-index: 2;
    -webkit-transform: rotateZ(-30deg);
    transform: rotateZ(-30deg);
  }

  .ball.bubble {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: radial-gradient(
      circle at 50% 55%,
      rgba(240, 245, 255, 0.9),
      rgba(240, 245, 255, 0.9) 40%,
      rgba(225, 238, 255, 0.33) 60%,
      rgba(43, 130, 255, 0.19)
    );
  }
  .ball.bubble:hover {
    transform: scale(1.1);
  }

  .ball.bubble:after {
    display: block;
    background: radial-gradient(
      circle at 50% 80%,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0) 74%,
      white 80%,
      white 84%,
      rgba(255, 255, 255, 0) 100%);
  }

  .stage {
    display: inline-block;
    position: absolute;
    perspective: 1200px;
    perspective-origin: 50% 50%;
  }
</style>
