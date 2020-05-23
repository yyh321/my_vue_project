import axios from 'axios'
import config from '@/config'

import { getLocal } from '@/utils/local'

class HttpRequest {
  constructor() {
    this.baseURL = config.baseURL
    this.timeout = 3000 // 3s超时
  }

  setInterceptors(instance) {
    instance.interceptors.request.use(config => {
      // 设置token
      config.headers.authorization = 'Bearer ' + getLocal('token')
      return config
    })

    instance.interceptors.response.use(
      res => {
        if (res.status == 200) {
          // 服务端返回的结果放在data中
          if (res.data.err === 0) {
            return Promise.resolve(res.data)
          } else {
            return Promise.reject(res.data.data)
          }
        } else {
          return Promise.reject(res.data.data)
        }
      },
      err => {
        // 单独处理其他的状态码异常
        switch (err.response.status) {
          case '401':
            console.log(err)
            break
          default:
            break
        }
        Promise.reject(err)
      }
    )
  }

  // 合并参数
  mergeOptions(options) {
    return { baseURL: this.baseURL, timeout: this.timeout, ...options }
  }

  request(options) {
    const instance = axios.create() // 创建axios实例
    this.setInterceptors(instance)
    const opts = this.mergeOptions(options)
    return instance(opts)
  }

  //get 方法
  get(url, config) {
    return this.request({
      url,
      method: 'get',
      ...config
    })
  }

  //post 方法
  post(url, data) {
    return this.request({
      url,
      method: 'post',
      data
    })
  }
}

export default new HttpRequest()
