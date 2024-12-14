import axios from 'axios'
const baseURL = 'https://sleep-power-json-server.vercel.app'
const instance = axios.create({
  baseURL,
  tiemout: 10000
})

instance.interceptors.request.use(
  (config) => 
    {
    return config
  },
  (err) => Promise.reject(err)
)
instance.interceptors.response.use(
  (res) => {
    if (res.status === 200){
      return res
    }
    return Promise.reject(res.data)

  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }