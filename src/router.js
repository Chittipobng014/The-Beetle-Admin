import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage'
import BoxRenting from './components/BoxRenting'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/renting/:id',
    name: 'BoxRenting',
    component: BoxRenting
  }
  ]
})