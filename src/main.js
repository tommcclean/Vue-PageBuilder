import Vue from 'vue'
import App from './App.vue'

import router from '@/startup/routes-manifest.js';
import store from '@/store/store.js';

import '@/startup/common-components.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
