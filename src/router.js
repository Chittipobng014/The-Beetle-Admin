import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage'
import BoxList from './components/BoxList'
import Menu from './components/Menu'
import BoxView from './components/BoxView'

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
        name: 'boxview',
        path: 'box',
        component: BoxView,
        children: [
          {
            name: 'boxlist',
            path: '1',
            component: BoxList
          },
          {
            name: 'renting',
            path: '2',
            component: BoxList
          },
          {
            name: 'faceReg',
            path: '3',
            component: BoxList
          }
        ]
      }
    ]
  }
  ]
})