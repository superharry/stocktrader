// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Button,
  ButtonGroup,
  Form,
  FormItem,
  Icon,
  Row,
  Col,
  Slider,
  Card
} from 'element-ui'

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
Vue.component(CollapseTransition.name, CollapseTransition)

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Slider)
Vue.use(Card)

Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)

import { StockModule } from './vuex/Stocks.js'
import { PortfolioModule } from './vuex/Portfolio.js'

const store = new Vuex.Store({
  actions: {
    load ({ dispatch, commit }) {
      dispatch('loadStocks')
        .then(() => {
          dispatch('loadPortfolio')
            .then(() => commit('loaded'))
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    },
    save ({ dispatch, commit }) {
      dispatch('saveStocks')
        .then(() => {
          dispatch('savePortfolio')
            .then(() => commit('saved'))
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }
  },
  mutations: {
    saved (state) { console.log('Data saved') },
    loaded (state) { console.log('Data loaded') }
  },
  modules: {
    'stocks': StockModule,
    'portfolio': PortfolioModule
  }
})

console.log('Initial store hydration')
store.dispatch('load')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
