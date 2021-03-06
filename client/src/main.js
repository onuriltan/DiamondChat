import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
window.localStorage.clear();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
