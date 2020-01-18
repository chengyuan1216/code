const path = require('path')
module.exports.resolve = function resolve(source) {
    return path.resolve(process.cwd(), source)
}