const path = require('path')
const fs = require('fs')
function XuiStatistics(name) {
  this.name = name
}

XuiStatistics.prototype.apply = function(compiler) {
  // console.log('compiler======================')
  // console.log(compiler)
  compiler.hooks.done.tap('XuiStatistics', function(compilation) {
    // console.log(Object.keys(compilation.compilation))
    // console.log(compilation.compilation)
    //const stats = JSON.stringify(compilation.compilation);
    //fs.writeFileSync(path.join(__dirname, 'data.json'), compilation.compilation);
    // console.log(path.join(__dirname, 'data.json'))
    //console.log(compilation.compilation)
  })
}

module.exports = XuiStatistics