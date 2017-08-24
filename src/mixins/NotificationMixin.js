import { Message } from 'element-ui'

export const NotificationMixin = {
  data () {
    return {
      unsubscribe: () => {}
    }
  },
  created () {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      var message = ''
      var type = 'info'
      switch (mutation.type) {
        case 'buy':
          message = 'Bought ' + mutation.payload.amount + ' shares of ' + mutation.payload.ticker + ' at ' + mutation.payload.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
          type = 'success'
          break
        case 'sell':
          message = 'Sold ' + mutation.payload.amount + ' shares of ' + mutation.payload.ticker + ' at ' + mutation.payload.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
          type = 'success'
          break
        case 'day':
          message = 'A new day'
          type = 'info'
          break
        case 'saved':
          message = 'Data saved'
          type = 'success'
          break
        case 'loaded':
          message = 'Data loaded'
          type = 'success'
          break
        default:
          message = 'No message'
          type = 'skip'
          break
      }
      if (type !== 'skip') {
        Message({
          message: message,
          type: type,
          duration: 1000
        })
      }
    })
  },
  beforeDestroy () {
    this.unsubscribe()
  }
}
