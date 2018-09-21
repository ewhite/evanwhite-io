<template>
  <li>
    <h5 class="has-text-weight-bold">{{ name }}</h5>
    <div>{{ title }}</div>
    <a
      v-if="email"
      :href="`mailto:${email}`"
    >
      {{ email }}
    </a>
    <span v-if="email && phone">&nbsp;|&nbsp;</span>
    <span v-if="phone">{{ phone }}</span>
  </li>
</template>

<script>
export default {
  name: 'Reference',
  props: {
    name: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: undefined,
    },
    phone: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style scoped>
  li {
    padding-bottom: 1rem;
  }
</style>
