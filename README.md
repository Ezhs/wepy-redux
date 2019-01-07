# wepy + redux

## Project setup
````
npm install
````

### Compiles and hot-reloads
```
开发环境
npm run watch:dev
测试环境
npm run watch:test
生产环境
npm run watch:prod
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies for web:production
```
npm run dev:web
```

## wepy-cli 
````
npm install wepy-cli -g // 全局安装wepy-cli 
wepy init standard project // 初始化项目
cd project // 切换到项目目录
npm install // 安装项目依赖
wepy build --watch | npm run dev // 启动项目
````

## 注意 wepy-cli 生成的项目
- 初始化之后报错 thirdScriptError 小程序详情取消es6 -> es5
- 上传代码压缩混淆会造成 props.sync 的方式传参失效等问题


## 使用 babel-plugin-transform-node-env-inline 定义 NODE_ENV 全局变量
- 安装插件 babel-plugin-transform-object-rest-spread
- 在 package.json 的scripts 中配置 例："watch:dev": "cross-env NODE_ENV=development wepy build --watch";
- 在wepy.config.js 中的 babel 下的plugins 下添加 'transform-node-env-inline'
- 全局中就可以使用 process.env.NODE_ENV 获取 设置的变量值

## wepy 
- requestfix 解决了 小程序 请求并发最大上限 5 个的问题。 通过队列的方式 如果超过5个 添加到队列中在其他接口调用完成之后 在执行下一个 详情可以查看 wepy/lib/app.js 中的 RequestMQ 对象
- promisify 使用wepy.xxx的方式请求小程序原生API都将Promise化.
- 不能在页面中调用方法 {{ fn() }} // 方法不会执行 但是 如果使用 {{ fn() ? true : false }} 会返回false 
- 组件的遍历-  使用 repeat 组件  遍历repeat 组件 嵌套自己的组件 https://tencent.github.io/wepy/document.html#/?id=%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98  官网 prop 属性是不支持的- 但是 测试 有效 其他属性是不支持的