import Vue from 'vue'
import App from './App.vue'

import router from '@/startup/routes-manifest.js';
import store from '@/store/store.js';
import lodash from 'lodash'

import '@/startup/common-components.js';

Vue.config.productionTip = false

Vue.prototype._ = lodash

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')