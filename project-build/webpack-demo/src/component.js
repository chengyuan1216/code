// 引入的css文件的内容将会手动插入到head中
require('./css/index.css')
const image = require('./images/logo.png')
const getTime = require('./common.js')
module.exports =  function component() {
    var element = document.createElement('div');
    element.innerHTML = '当前时间是： ' + getTime();
    element.classList.add('hello')

    var oImage = document.createElement('img')
    oImage.src = image
    element.appendChild(oImage)

    var oH1 = document.createElement('h1')
    oH1.innerHTML = lodashJoin(['hello', 'lodash'], '')
    element.appendChild(oH1)
    
    return element;
}