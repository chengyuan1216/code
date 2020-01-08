const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const chalk = require('chalk')

// 动态获取入口
module.exports.getEntry = function(basePath = 'src/pages') {
  let entry = {}
  let htmlTemplatePlugin = []
  let pageDir = path.resolve(process.cwd(), basePath)
  if (fs.existsSync(pageDir)) {
    let pages = fs.readdirSync(pageDir)
    pages.forEach(pageName => {
      entry[pageName] = path.resolve(process.cwd(), `${basePath}/${pageName}/${pageName}.js`)
      htmlTemplatePlugin.push(
        new HtmlWebpackPlugin({
          filename: `${pageName}.html`,
          template: path.resolve(process.cwd(), `${basePath}/${pageName}/${pageName}.ejs`),
          chunks: [pageName]
        })
      )
    })
  }
  return [entry, htmlTemplatePlugin]
}

module.exports.log = function log(title, ...msg) {
    console.log(chalk.green(`【${title}】 `), ...msg)
}