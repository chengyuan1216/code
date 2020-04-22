module.exports = {
    configureWebpack(config) {

    },
    publicPath: '/frame',
    devServer: {
        port: '8085',
        proxy: {
          '/a': {
            target: 'http://localhost:8086',
            changeOrigin: true,
            pathRewrite: {
              // '^/a': ''
            }
          },
          '/b': {
            target: 'http://localhost:8087',
            changeOrigin: true,
            pathRewrite: {
              // '^/b': ''
            }
          }
        }
    }
}