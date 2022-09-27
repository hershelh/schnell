import type { AxiosResponse } from 'axios'
import { router } from '@/main'

interface ResponseType<T = null> {
  code: number
  data: T
  msg: string
}

export const service = axios.create({
  baseURL: 'http://localhost:5001',
  timeout: 3000,
})

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token)
      config.headers!.Authorization = `Bearer ${token}`
    return config
  },
  (err) => {
    return Promise.reject(new Error(err))
  },
)

const jumpToLogin = () => {
  router.replace('/')
}

service.interceptors.response.use(
  ({ data: { code, data, msg } }: AxiosResponse<ResponseType>) => {
    if (code === 200)
      return data
    if (code === 401) {
      setTimeout(jumpToLogin, 1000)
      return
    }
    return Promise.reject(msg)
  },
  (err) => {
    return Promise.reject(new Error(err))
  },
)

