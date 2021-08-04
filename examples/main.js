import Vue from 'vue'
import App from './App.vue'
import yfUi from '../packages'
Vue.config.productionTip = false
Vue.use(yfUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
