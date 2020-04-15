const webpack = require('webpack')
const config = require('./webpack.config')

const copliler =  webpack(config)
copliler.run((err) => {
    err? console.log(err) : (function() {
        console.log('build success')
    })()
})