console.log(process.env.NODE_ENV)

let host = {
  development: '开发环境域名',
  test: '测试环境域名',
  production: '生产环境域名'
}

export default {
  host: host[process.env.NODE_ENV]
}
