const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = env => {
    return {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: {
            app: path.resolve(process.cwd(), 'example/app.js')
        },
        output: {
            path: path.resolve(process.cwd(), 'dist'),
            filename: 'app.js'
        },
        plugins: [
            new htmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(process.cwd(), 'example/index.html')
            })
        ]
    }
}