import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import store from './store'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
