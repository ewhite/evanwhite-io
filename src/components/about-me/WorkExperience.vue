<template>
  <li>
    <b-collapse
      :open="open"
      class="card">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header">
        <div class="card-header-title columns is-marginless">
          <div class="column">
            <span class="has-text-weight-bold has-text-primary">
              {{ jobTitle }}
            </span>
            , {{ companyName }}
          </div>
          <div class="column is-narrow">
            <span class="is-pulled-right">{{ startDate }} - {{ endDate }}</span>
          </div>
        </div>
        <a class="card-header-icon">
          <b-icon
            :icon="props.open ? 'menu-down' : 'menu-up'"
          />
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          {{ summary }}
          <ul>
            <li
              v-for="detail in details"
              :key="detail">{{ detail }}</li>
          </ul>
        </div>
      </div>
      <footer
        v-if="footer"
        class="card-footer">
        <div class="card-footer-item">{{ footer }}</div>
      </footer>
    </b-collapse>
  </li>
</template>

<script>
export default {
  name: 'WorkExperience',
  props: {
    jobTitle: {
      type: String,
      default: '',
    },
    companyName: {
      type: String,
      default: '',
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
    summary: {
      type: String,
      default: '',
    },
    details: {
      type: Array,
      default: () => ([]),
    },
    footer: {
      type: String,
      default: '',
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
  footer.card-footer > div.card-footer-item {
    justify-content: left;
  }
</style>
