import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from './plugin'

import 'lib-flexible/flexible'
import './style/common.scss'

Vue.config.productionTip = false


Vue.use(plugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
