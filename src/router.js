import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage'
import BoxRenting from './components/BoxRenting'
import Menu from './components/Menu'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'MainPage',
    component: MainPage,
    children:[
      {
        path:'menu',
        component: Menu
      }
    ]
  },
  {
    path: '/renting/:id',
    name: 'BoxRenting',
    component: BoxRenting
  }
  ]
})