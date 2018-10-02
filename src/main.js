import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import store from './store'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { firestore } from './firebase'

Vue.prototype.$db = firestore;
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  methods:{
    init: function() {
      // ble start scan
    }
  }
})

document.addEventListener('deviceready', app.init, function (err) {
  console.log(err);
})