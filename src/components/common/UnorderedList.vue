<template>
  <ul>
    <li
      v-for="element in elements"
      :key="element"
      class="">
      {{ element }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UnorderedList',
  props: {
    elements: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
