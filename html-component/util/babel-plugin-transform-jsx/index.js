const jsxsyntax = require("@babel/plugin-syntax-jsx")
const generator = require('babel-generator').default
module.exports = function (babel) {
  const { types, template } = babel
  const visitor = {
      JSXElement:{
        enter(path, file) {
          debugger
          let code = generator(path.node, {
            retainLines: false,
            compact: "auto",
            concise: false,
            quotes:"double"
          }).code
          path.replaceWithSourceString(types.stringLiteral(code))
          console.log("JSXElement Entered!");
        },
        exit() {
          console.log("JSXElement Exited!");
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
      }
  };

  return {
      name: "transform-react-jsx",
      inherits: jsxsyntax.default,
      visitor
  };
};