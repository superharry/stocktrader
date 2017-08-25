import firebase from '@/Firebase.js'

export const StockModule = {
  state: {
    stocks: []
  },
  getters: {
    stocks: (state) => state.stocks
  },
  actions: {
    day ({ commit }) {
      setTimeout(() => { commit('day') }, 200)
    },
    async loadStocks ({ state, commit, rootState }, payload) {
      firebase.get('/stocks.json').then(response => {
        commit('loadStocks', response)
      })
      .catch(e => console.log(e))
    },
    saveStocks: ({ state, commit, rootState }, payload) => {
      return firebase.put('/stocks.json', {...state})
    }
  },
  mutations: {
    loadStocks: (state, payload) => {
      state.stocks = payload.data.stocks
    },
    day (state) {
      console.log('A new day:')
      state.stocks.forEach(s => {
        var rand = Math.floor((Math.random() * 20) + 90) / 100
        const oldPrice = s.price
        s.price = Math.round(s.price * rand * 100) / 100
        console.log(s.ticker + ': ' + oldPrice + ' => ' + s.price)
      })
    }
  }
}
