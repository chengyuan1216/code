const path = require('path')
const fs = require('fs')
const favicon = require('serve-favicon')
const express = require('express')
const server = express()
const { createBundleRenderer } = require('vue-server-renderer')
const LRU = require('lru-cache')
const resolve = file => path.resolve(__dirname, file)

function createRenderer (bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    basedir: resolve('../dist'),
    runInNewContext: false
  }))
}

const templatePath = resolve('./index.html')
const template = fs.readFileSync(templatePath, 'utf-8')
const bundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')
const renderer = createRenderer(bundle, {
  template,
  clientManifest
})


server.use('/dist', express.static(resolve('../dist')))
server.use(favicon('./public/favicon.jpg'))
/**
 * 
 *  在server2的基础上扩展， 支持路由。
 *  还存在的问题：
 *  1、怎么获取异步数据？
 *  2、页面并不能进行交互， 因为此时返回给客户端的只是字符串，并没有交互的逻辑。
 */
server.get('*', (req, res) => {
    const context = {
      title: 'server template',
      url: req.url
    }
    res.setHeader('Content-Type','text/html;charset=utf-8')

    renderer.renderToString(context, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(html)
    })
})

server.listen(3000, err => {
  if (err) {
    console.log('err => ', err)
  } else {
    console.log('3000')
  }
})