// code string -> ast
const babylon = require('babylon')
// ast -> code string 
const generator = require('babel-generator').default
// 提供ast所有的节点类型
const types = require('babel-types')
const template = require('babel-template')

const fs = require('fs')
const path = require('path')

function resolvePath(p) {
    // return path.resolve(process.cwd(), '' + p)
    // retun 
}

let code = fs.readFileSync(__dirname + '/code1.js', 'utf8')

let result = babylon.parse(code, {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    // sourceFilename: '',
    plugin: []
})

// console.log(result)

let r_code = 'let a = 1;'
let result_code = generator(result, {
    auxiliaryCommentBefore: '****before*****',
    auxiliaryCommentAfter: '****after*****' 
}, r_code)

// console.log(result_code)
// console.log(result_code.code)
// console.log(r_code)
