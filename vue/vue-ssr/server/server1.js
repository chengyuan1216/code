const Vue = require('vue')
const server = require('express')()

/**
 *  服务端使用的插件， 将组件渲染成html字符串
 * 
 */
const renderer = require('vue-server-renderer').createRenderer(
  { 
    // html模板
    template: require('fs').readFileSync('./index.html', 'utf-8')
  }
)

server.get('*', (req, res) => {
  // 动态创建Vue实例, 这种方式是纯后端渲染， 并未做客户端渲染同构
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  const context = {
    title: 'server template'
  }

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(html)
  })
})

server.listen(3000)