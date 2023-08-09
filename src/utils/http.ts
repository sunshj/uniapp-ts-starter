const baseURL = 'https://open.sunshj.top/api'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    options.timeout = 10000
    /**
     * TODO:add token
     */
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface ResData<T> {
  code: number
  message: string
  data: T
}

export function http<T>(url: string, options?: Omit<UniApp.RequestOptions, 'url'>) {
  return new Promise<ResData<T>>((resolve, reject) => {
    uni.request({
      url,
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as ResData<T>)
        } else if (res.statusCode === 401) {
          /**
           * TODO:清除用户信息，跳转login
           */
          reject(res)
        } else {
          uni.showToast({
            icon: 'error',
            title: (res.data as ResData<string>).data || '请求错误',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({ icon: 'error', title: '网络错误，请重试' })
        reject(err)
      },
    })
  })
}
