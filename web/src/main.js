import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
axios.baseURL = 'http://localhost:3000'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
