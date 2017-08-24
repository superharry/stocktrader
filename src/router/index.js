import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Stocks from '@/components/Stocks'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '*',
      redirect: 'Home'
    }
  ]
})
