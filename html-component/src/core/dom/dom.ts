// import { isSVG, objectToStyleString } from './utils'
import context from '../../index'
let cid = 0
let handleId = ''
function dom(tag, attrs, ...children) {
  debugger
  if (typeof tag === 'function') {
    const result = tag(Object.assign({}, attrs, { children }))
    return result === 'FRAGMENT' ? children : result
  }

  if (typeof tag === 'string') {
    let html = ''
    html += `<${tag}`
    attrs && Object.keys(attrs).forEach(key => {
        if (/^on/.test(key)) {
            handleId = `date-handler-${cid++}`
            html += `  ${handleId}`
            ;(function(handleId, key, handler){
              setTimeout(() => {
                console.log(handleId, key)
                    let eventName = key.slice(2).toLowerCase()
                    document.querySelector(`[${handleId}]`) && document.querySelector(`[${handleId}]`).addEventListener(eventName, handler)
              }, 2000)
            })(handleId, key, attrs[key])
        } else {
            html += ` ${key}="${attrs[key]}"`
        }
    })
    html +='>'
    children &&  children.forEach(child => {
        html += Array.isArray(child)? child.join(''): child
    })
    html +=`</${tag}>`
    return html
  }

  throw new Error(`does not handle ${typeof tag}`)
}

export default dom
export const Fragment = () => 'FRAGMENT'
