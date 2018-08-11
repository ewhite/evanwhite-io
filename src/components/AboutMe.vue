<template>
  <div>
    <div class="container">
      <section class="section">
        <div class="container">
          <h1 class="title">About Me</h1>
        </div>
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
        <div class="container">
          <div class="columns">
            <div class="column">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import WorkExperience from './about-me/WorkExperience.vue';

const workExperiences = [
  {
    jobTitle: 'Application Developer',
    companyName: 'Mutual of Omaha Insurance',
    startDate: 'May 2017*',
    endDate: 'Now',
    summary: 'Created enterprise-scale web applications for tens of thousands of users in modern toolsets',
    details: [
      'Created and released a brand new insurance enrollment site in React',
      'Advocated for and began implementation of E2E testing for sites, reducing manual test load by 30%',
      'Actively developed an insurance enrollment rules REST API with over 100 rules and over 1000 E2E tests',
    ],
    footer: '* Worked as an intern between May 2017 and Nov 2017',
    open: true,
  },
  {
    jobTitle: 'Web Development Intern',
    companyName: 'American Fidelity Assurance',
    startDate: 'Jan 2016',
    endDate: 'May 2017',
    summary: 'Supported development team by building tools and assisting in website redesign',
    details: [
      'Created code snippet web database for all developers utilized by whole team with over 100 active snippets',
      'Designed and built several full pages in redesigned website',
    ],
    open: true,
  },
  {
    jobTitle: 'Agile Product Designer',
    companyName: 'CCEW at OU',
    startDate: 'May 2016',
    endDate: 'Jan 2016',
    summary: 'Researched, designed, and built a product for the rapidly growing UAS (unmanned aerial systems) market',
    details: [
      'Conducted over 100 interviews with experts in the field to gain insight into market opportunities',
      'Designed and built electronics and code for created drone add-on',
      'Started a company receiving $10,000 in seed funding',
    ],
    open: false,
  },
];
export default {
  name: 'AboutMe',
  components: { WorkExperience },
  data() {
    return {
      workExperiences,
    };
  },
};
</script>

<style scoped>

</style>
