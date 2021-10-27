import Vue from 'vue'
import App from './App.vue'
import './plugin/bootstrapVue.js'
import router from "./plugin/router";

import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

// install rules
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
