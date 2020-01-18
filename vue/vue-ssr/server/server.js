const server = require('express')()
const createApp = require('../dist/server').default
const renderer = require('vue-server-renderer').createRenderer(
  {
    template: require('fs').readFileSync('./index.html', 'utf-8')
  }
)

server.get('*', (req, res) => {
  debugger
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