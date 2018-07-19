import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import AboutMe from '../components/AboutMe.vue';
import Playground from '../components/Playground.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about-me',
      name: 'About Me',
      component: AboutMe,
    },
    {
      path: '/playground',
      name: 'Playground',
      component: Playground,
    },
  ],
});
