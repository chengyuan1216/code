module.exports = {
    configureWebpack(config) {
        config.output.library = 'projectB'
        config.output.libraryTarget = 'umd'
        config.output.filename = 'js/[name].js'
        config.devtool = 'source-map'
        config.mode="development"
    },
    publicPath: '/b',
    filenameHashing: false,
    devServer: {
        port: '8087',
    }
}