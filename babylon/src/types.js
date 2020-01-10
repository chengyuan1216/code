const types = require('babel-types')
const generator = require('babel-generator').default

let te = types.templateElement({
    raw: "qq",
    cooked: "qq"
}, true)

console.log(te)
let tl = types.templateLiteral([te], [])
console.log(tl)

let result= generator(tl)
console.log(result.code)
