import axios from 'axios'

export default axios.create({
  baseURL: 'https://stock-trader-53690.firebaseio.com'
})
