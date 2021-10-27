import Vue from 'vue'
import App from './App.vue'
import './plugin/bootstrapVue.js'

/*import Vuelidate from 'vuelidate'*/
import router from "./plugin/router";

Vue.config.productionTip = false
/*Vue.use(Vuelidate);*/

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
