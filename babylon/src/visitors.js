const babel = require('babel-core')
const t = require('babel-types')

const code = `
  if(3>5) {}
`

const visitor = {
  BinaryExpression(path) {
    if(path.node.operator === '>') {
      path.replaceWith(
        t.binaryExpression(
          '<=',
          path.node.left,
          path.node.right
        )
      );
    }
  }
}

const result = babel.transform(code, {
  plugins: [
    { visitor }
  ]
})

console.log(result.code)