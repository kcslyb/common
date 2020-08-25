import Vue from 'vue'
import App from './App.vue'
import router from './router'
import KcsCommon from '../packages/index'

Vue.use(KcsCommon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
