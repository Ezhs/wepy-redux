import wepy from 'wepy'

/**
 * @param { OBJECT } params 转成 a=10&b=20格式
 */
let encodeCore = function (params) {
  let tmpArr = []
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      tmpArr.push(`${key}=${params[key]}`)
    }
  }
  return tmpArr.join('&')
}

// 所有页面的路径
export const PAGES = {
  INDEX: '/pages/index',
  TOOL: '/pages/tool',
  QUERY_ASCRIPTION: '/pages/query-ascription',
  QUERY_Hotel: '/pages/query-hotel',
  MY_WEB_VIEWL: '/pages/my-web-view'
}

export function navigateTo(path, params) {
  wepy.navigateTo({ url: `${path}${params ? ('?' + encodeCore(params)) : ''}` })
}
