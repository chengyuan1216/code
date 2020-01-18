const server = require('express')()
/**
 *  与server1不同的是这里引入的是通过webpack构建好的文件
 */
const createApp = require('../dist/server').default
console.log('createApp', createApp)

const renderer = require('vue-server-renderer').createRenderer(
  {
    template: require('fs').readFileSync('./index.html', 'utf-8')
  }
)

server.get('*', (req, res) => {
  const app = createApp()

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