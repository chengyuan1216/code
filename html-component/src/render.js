import html2ast from './html2ast.js'

let oldast = null
export function render(html, dom) {
    debugger
    let ast = html2ast(html) 
    console.log('ast', JSON.stringify(ast, null, 2))
    if (!oldast) {
        let componentdom = createElement(ast)
        dom.appendChild(componentdom)
    } else {
        if (ast.tag != oldast.tag ) {
            let componentdom = createElement(ast)
            dom.innerHTML = ''
            dom.appendChild(componentdom)
        } else {
            patch(oldast, ast)
        }
    }
    oldast = ast
}

export function patch(oldast, ast) {
    ast.attrs.forEach(attr => {
        oldast.__dom__.setAttribute(attr.name, attr.value)
    })
    ast.__dom__ = oldast.__dom__
}

export function createElement(ele) {
    debugger
    if (typeof ele == 'string') {
        return document.createTextNode(ele)
    } else {
        let eleDom = document.createElement(ele.tag)
        ele.attrs.forEach(attr => {
            eleDom.setAttribute(attr.name, attr.value)
        })
        ele.children.forEach(child => {
            eleDom.appendChild(createElement(child))
        })
        ele.__dom__ = eleDom
        return eleDom
    }
}
