import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage'
import Vtify from '../components/Vtify'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/onsen',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/',
    name: 'Vtify',
    component: Vtify
  }
  ]
})
