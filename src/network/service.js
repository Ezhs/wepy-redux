import wepy from 'wepy'
let xhrToast = 0 // 定义正在请求的 请求个数
export async function request (params) {
  // 清除请求参数中的空值
  if (params.data) {
    for (let k in params.data) {
      if (params.data[k] === '' || params.data[k] === null || params.data[k] === undefined) {
        delete params.data[k]
      }
    }
  }
  // header 在这里可以配置一些通用的参数
  const o = {
    url: params.url || '',
    method: params.method || 'GET',
    data: params.data,
    header: params.header || {}
  }
  // params.noLoading 不显示loading
  if (!params.noLoading) {
    xhrToast++
    wepy.showLoading({
      title: '加载中',
      icon: 'loading'
    })
  }
  return wepy.request(o).then(res => {
    if (!params.noLoading) {
      xhrToast--
      if (xhrToast === 0) {
        wepy.hideLoading()
      }
    }

    // 处理http code
    return new Promise((resolve, reject) => {
      if (res.statusCode === 200) {
        resolve(res.data)
      } else {
        reject(res)
      }
    })
  }, err => {
    // 直接返回 让下面的then 方法处理
    if (!params.noLoading) {
      xhrToast++
      wepy.showLoading({
        title: '加载中',
        icon: 'loading'
      })
    }
    return {
      code: 500,
      desc: JSON.stringify(err)
    }
  }).then(res => {
    return new Promise((resolve, reject) => {
      // 业务code
      if (res.data) {
        resolve(res)
      } else {
        // 处理异常弹窗
        if (!params.noToast) {
          wepy.showToast({
            icon: 'none',
            title: res.desc || '请求异常'
          })
        }
        reject(res)
      }
    })
  })
}
