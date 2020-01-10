const template = require('babel-template')
const generator = require('babel-generator').default
const t = require('babel-types')


let code = `
<div class="timer">
  <div>{time}</div>
</div>
`

let build = template(code, {
    plugins: [
        'jsx'
    ]
})

const ast = build({
    // IMPORT_NAME: t.identifier("myModule"),
    // SOURCE: t.stringLiteral("my-module")
    'time': t.identifier('t1')
});
   
console.log(generator(ast).code);
{/* <div class="timer">
  <div>{t1}</div>
</div>; */}