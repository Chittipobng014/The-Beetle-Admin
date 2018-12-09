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
const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App :ready="ready"/>',
  components: { App },
  data() {
    return {
      ready: false
    }
  },
  methods: {
    onReady: function () {
      StatusBar.hide()
      this.ready = true
    }
  }
})

document.addEventListener('deviceready', app.onReady, function (err) {
  console.log(err);
})