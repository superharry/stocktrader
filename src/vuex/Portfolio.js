import firebase from '@/Firebase.js'

export const PortfolioModule = {
  state: {
    portfolio: [],
    cash: 0
  },
  getters: {
    total: (state, getters, rootState) => {
      return state.cash + state.portfolio
        .map(h => h.amount * rootState.stocks.stocks.find(s => s.ticker === h.ticker).price)
        .reduce((a, b) => a + b, 0)
    },
    portfolio: (state) => state.portfolio,
    cash: (state) => state.cash
  },
  actions: {
    sell: ({ state, commit, rootState }, payload) => {
      var price = rootState.stocks.stocks.find(s => s.ticker === payload.ticker).price
      commit('sell', {...payload, 'price': price})
    },
    buy: ({ state, commit, rootState }, payload) => {
      var price = rootState.stocks.stocks.find(s => s.ticker === payload.ticker).price
      commit('buy', {...payload, 'price': price})
    },
    loadPortfolio: ({ state, commit, rootState }, payload) => {
      firebase.get('/portfolio.json').then(response => {
        commit('loadPortfolio', response)
      })
      .catch(e => console.log(e))
    },
    savePortfolio: ({ state, commit, rootState }, payload) => {
      return firebase.put('/portfolio.json', {...state})
    }
  },
  mutations: {
    loadPortfolio (state, payload) {
      state.portfolio = payload.data.portfolio
      if (!state.portfolio) {
        state.portfolio = []
      }
      state.cash = payload.data.cash
    },
    sell (state, payload) {
      var holding = state.portfolio.find(s => s.ticker === payload.ticker)
      var effectiveAmount = Math.min(holding.amount, payload.amount)
      holding.amount -= effectiveAmount
      state.cash += payload.price * effectiveAmount
      if (holding.amount === 0) {
        state.portfolio = state.portfolio.filter(s => s.ticker !== payload.ticker)
      }
    },
    buy (state, payload) {
      var holding = state.portfolio.find(s => s.ticker === payload.ticker)
      if (!holding) {
        state.portfolio.push({...payload})
      } else {
        holding.amount += payload.amount
      }
      state.cash -= payload.price * payload.amount
    }
  }
}
