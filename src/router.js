import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage'
import BoxList from './components/BoxList'
import Menu from './components/Menu'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'MainPage',
    component: MainPage,
    children:[
      {
        name: 'menu',
        path: 'menu',
        component: Menu
      },
      {
        name: 'boxlist',
        path: 'box',
        component: BoxList,
        children: [

        ]
      }
    ]
  }
  ]
})