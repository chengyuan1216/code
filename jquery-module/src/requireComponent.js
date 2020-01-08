// 下面的代码不会打包
module.exports = function(componentName, data = {}) {
    console.log('hhhh', `@/components/${componentName}/${componentName}.js`)
    var js = require(`@/components/${componentName}/${componentName}.js`)
    var style = require(`@/components/${componentName}/${componentName}.css`)
    return `
        ${require(`@/components/${componentName}/${componentName}.ejs`)(data)}
        <style>${style[0][1]}</style>
    `
}