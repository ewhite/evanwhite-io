import Vue from 'vue';
import HelloWorld from '../../../src/components/Home.vue';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Evan White\'s personal site.');
  });
});
