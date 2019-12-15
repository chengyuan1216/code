// var moduleA = require('./moduleA')
// var moduleB = require('./moduleB')
// console.log('index')
// console.log(moduleA.b === moduleB)
// console.log('process.argv', process.argv)
// //console.log('当前目录是：', process.cwd())
// console.log('process.execArgv', process.execArgv)
// console.log('process.execPath', process.execPath)
// // console.log('process.env', process.env)
// console.log('process.platform', process.platform)
//process.stdin.resume();
process.on('SIGINT', function(a, b, c) {
    console.log('收到信号',a, b, c)
})
console.log('试着按下 ctrl + C');
setTimeout(function() {
    console.log('end');
}, 50000);