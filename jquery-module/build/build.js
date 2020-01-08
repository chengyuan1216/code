const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const {getEntry, log} = require('./util')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const express = require('express')
const devMiddleware = require('webpack-dev-middleware')
const webpackDevServer = require('webpack-dev-server')
const merge = require('webpack-merge')

const defaultArgs = {
  watch: false,
  dev: false,
  middleware: false
}

let args = require('minimist')(process.argv.slice(2), {})
args = Object.assign(defaultArgs, args)
log('args', args)

const [entry, htmlTemplatePlugin] = getEntry()
log('entry', Object.keys(entry))

let config = {
  // 模式
  mode: 'development',
  // source map
  devtool: 'inline-source-map',
  // 入口
  entry: {
    ...entry
  },
  // 输出
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].js'
  },
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  },

  module: {
    rules: [
      {
        test: /.ejs$/,
        loader: ['ejs-loader']
      },
      {
        test: /.css$/,
        loader:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...htmlTemplatePlugin
  ]
}

let compiler = null


if (args.watch) {
  compiler = webpack(config)
  // 监听文件
  compiler.watch({
      aggregateTimeout: 1000, // 将多个更改聚合到单个重构建(rebuild)
      poll: true,
      poll: 500, // 间隔单位 ms
    },
    function (err,stats) {
      if (!(err || stats.hasErrors())) {
        log('watch', 'build success.')
      }
  })
} else if (args.middleware) {
  // middleware
  // TODO 热重载不起作用
  Object.keys(config.entry).forEach(key => {
    config.entry[key] = [
      // 'webpack-hot-middleware/client',
      config.entry[key]
    ]
  })
  log('entry', config.entry)

  config = merge(config, {
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  })
  compiler = webpack(config)
  const app = express()
  app.use(devMiddleware(compiler, {
    // 本地静态资源
    contentBase: './dist',
    // 代理请求
    proxy: {

    },
    // enable gzip compression
    compress: false,
    // TODO
    historyApiFallback: true,
    // 热重载
    hot: true, 
    // true for self-signed, object for cert authority
    https: false, 
    // only errors & warns on hot reload
    noInfo: true
  }))

  app.listen(8888, function(error) {
    if (!error) {
      log('dev server', 'localhost:8888')
    }
  })

} else if(args.dev) {
  // dev
  // 注意： webpackDevServer 需要配合 HotModuleReplacementPlugin 使用
  config = merge(config, {
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  })
  compiler = webpack(config)
  let options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
  }
  webpackDevServer.addDevServerEntrypoints(config, options)
  let  server = new webpackDevServer(compiler, options)
  server.listen(8888, function(error) {
    if (!error) {
      log('dev server', 'localhost:8888')
    }
  })
} else {
  // build
  compiler = webpack(config)
  compiler.run(function (err,stats) {
    if (!(err || stats.hasErrors())) {
      log('build', 'build success.')
    }
  })
}
