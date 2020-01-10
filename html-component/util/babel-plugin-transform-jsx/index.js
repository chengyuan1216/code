const jsxsyntax = require("@babel/plugin-syntax-jsx")
const generator = require('babel-generator').default
module.exports = function (babel) {
  const { types, template } = babel

  function transformCode(node) {
    let code = ''
    if (node.type == 'JSXElement') { // 节点
      let tagName = node.openingElement.name.name
      code += `<${tagName} ${getAttrs(node)}>`
      if (node.children) {
        node.children.forEach(child => {
          code += transformCode(child)
        })
      }
      code += `</${tagName}>`
    } else if (node.type == 'JSXText') { // text
      code += node.value
    } else if (node.type == 'JSXExpressionContainer') { // expression {}
      if (node.expression.type == 'Identifier') {
        code += '${' + node.expression.name +'}'
      } else if (node.expression.type == 'CallExpression') {
        code += '${' + generator(node.expression, {}).code  +'}'
      }
    }
    return code
  }

  function getAttrs(node) {
    let attrs = ''
    let key = ''
    let val = ''
    let attributes = node.openingElement.attributes || []
    attributes.forEach(attr => {
      key = attr.name.name
      val = attr.value.value
      val = /^{/.test(val)? '$'+val: val
      attrs += `${key}="${val}" `
    })
    return attrs
  }

  const visitor = {
      Program:{
        exit(path, file) {
          console.log('Program exit...')
        },        
        enter() {
          console.log("Program Entered!");
        },
        exit() {
          console.log("Program Exited!");
        }
      },
      JSXElement:{
        enter(path, file) {
          debugger
          let code = transformCode(path.node)

          // let code = generator(path.node, {}).code
          // console.log('code 前', code)
          // code = code.replace(/{/g, '${')
          // console.log('code 后', code)
          path.replaceWithSourceString('`'+ code +'`')
          console.log("JSXElement Entered!");
        },
        exit() {
          console.log("JSXElement Exited!");
        }
      },
      JSXExpressionContainer:{
        enter(path, file) {
          debugger
          console.log("JSXExpressionContainer enter!")
        },
        exit() {
          console.log("JSXExpressionContainer Exited!");
        }
      },
      JSXAttribute:{
        exit(path, file) {
          console.log('JSXElement exit...')
        },        
        enter() {
          console.log("JSXAttribute Entered!");
        },
        exit() {
          console.log("JSXAttribute Exited!");
        }
      },
      JSXFragment:{
        exit(path, file) {
          console.log('JSXFragment exit...')
        },        
        enter() {
          console.log("JSXFragment Entered!");
        },
        exit() {
          console.log("JSXFragment Exited!");
        }
      },
      JSXNamespacedName:{
        exit(path, file) {
          console.log('JSXNamespacedName exit...')
        },        
        enter() {
          console.log("JSXNamespacedName Entered!");
        },
        exit() {
          console.log("JSXNamespacedName Exited!");
        }
      },
      JSXSpreadChild:{
        exit(path, file) {
          console.log('JSXSpreadChild exit...')
        },        
        enter() {
          console.log("JSXSpreadChild Entered!");
        },
        exit() {
          console.log("JSXSpreadChild Exited!");
        }
      },
  };

  return {
      name: "transform-react-jsx",
      inherits: jsxsyntax.default,
      visitor
  }
}