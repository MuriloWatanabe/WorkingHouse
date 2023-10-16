import axios from 'axios'

const api = axios.create({
  baseURL: 'http://191.52.57.216:19000/api/'
  // 191.52.57.216:19000
})

export default api