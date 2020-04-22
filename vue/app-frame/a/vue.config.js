module.exports = {
    configureWebpack(config) {
        config.output.library = 'projectA'
        config.output.libraryTarget = 'umd'
        config.output.filename = 'js/[name].js'
        config.devtool = 'source-map'
        config.mode="development"
    },
    publicPath: '/a',
    filenameHashing: false,
    devServer: {
        port: '8086',
    }
}