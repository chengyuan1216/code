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
    filename: '[name].js',
    /** 设置/public之后， 所有资源都带有前缀, 如果设置了，那么开发服务器也应该设置。 */
    //publicPath: ''
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

module.exports = config