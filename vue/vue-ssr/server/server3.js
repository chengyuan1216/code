const server = require('express')()
const createApp = require('../dist/server').default
const renderer = require('vue-server-renderer').createRenderer(
  {
    template: require('fs').readFileSync('./index.html', 'utf-8')
  }
)

/**
 * 
 *  在server2的基础上扩展， 支持路由。
 *  还存在的问题：
 *  1、怎么获取异步数据？
 *  2、页面并不能进行交互， 因为此时返回给客户端的只是字符串，并没有交互的逻辑。
 */
server.get('*', (req, res) => {
  createApp({
    url: req.url
  }).then(app => {
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
})

server.listen(3000)