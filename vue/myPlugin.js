const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const chalk = require('chalk')

function Test() {

}

Test.prototype.apply = function(compiler) {
  compiler.hooks.beforeCompile.tap('beforeCompile', (compilation) => {
    console.log(compilation)
  })
}

/*
  "vuePlugins": {
    "service":["myPlugin"]
  },
*/


// module.exports = api => {
//     api.configureWebpack(webpackConfig => {
//         return {
//             mode:'development'
//         }
//     })

//     api.registerCommand('play:build', args => {
//         console.log(chalk.green('build start.'))
//         debugger
        let compiler = webpack({
            mode: 'development',
            devtool: 'inline-source-map',
            context: process.cwd(),
            entry: {
                app: [path.resolve(__dirname,'src/main.js')]
            },
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: '[name].js',
                chunkFilename: '[id].js'
            },
            plugins: [
                new Test()
            ]
        })
        compiler.run(err => {
            if (!err) {
                console.log(chalk.green('build success.'))
            }
        })
//     })
// }

// module.exports.defaultModes = {
//     'my-build': 'production'
// }

