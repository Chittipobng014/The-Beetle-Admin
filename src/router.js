import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'MainPage',
    component: MainPage
  }
  ]
})