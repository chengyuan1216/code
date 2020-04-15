const path = require('path')
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: path.resolve(process.cwd(), 'src/index.js')
    },
    output: {
        path: path.resolve(process.cwd(), 'public'),
        filename: 'app.build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use:[
                    path.resolve(__dirname, './loader/transform-loader.js')
                ]
            }
        ]
    }
}