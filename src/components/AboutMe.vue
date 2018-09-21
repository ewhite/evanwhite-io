<template>
  <div class="container">
    <section class="section">
      <h1 class="title">About Me</h1>
    </section>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            In one sentence...
          </h1>
          <h2 class="subtitle">
            I am a passionate developer with expertise from SQL to React with a
            drive to create modern systems built on sustainable code.
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <h1 class="title">Work Experience</h1>
      <ul>
        <work-experience
          v-for="experience in workExperiences"
          :key="`${experience.jobTitle}-${experience.companyName}`"
          :job-title="experience.jobTitle"
          :company-name="experience.companyName"
          :start-date="experience.startDate"
          :end-date="experience.endDate"
          :summary="experience.summary"
          :details="experience.details"
          :open="experience.open"
          :footer="experience.footer"
        />
      </ul>
    </section>
    <section class="section">
      <h1 class="title">Education</h1>
      <div class="has-text-weight-bold">University of Oklahoma</div>
      <div>
        Graduated December 2017
        <span class="is-italic">cum laude</span>
      </div>
    </section>
    <section class="section content">
      <h1 class="title">References</h1>
      <ul>
        <Reference
          v-for="reference in references"
          :key="reference.name"
          :name="reference.name"
          :title="reference.title"
          :email="reference.email"
          :phone="reference.phone"
        />
      </ul>
    </section>
  </div>
</template>

<script>
import WorkExperience from './about-me/WorkExperience.vue';
import Reference from './about-me/Reference.vue';
import workExperiences from './about-me/work-experiences';
import references from './about-me/references';

export default {
  name: 'AboutMe',
  components: { Reference, WorkExperience },
  data() {
    return {
      workExperiences,
      references,
    };
  },
};
</script>

<style scoped>
  section.section:not(:first-of-type):not(:last-of-type) {
    padding-bottom: 0;
  }
</style>
