/**
 * 
 */
import {async} from './util'
export function render(html, wrap) {
    async(_render, this, html, wrap)
}

function _render(html, wrap) {
    let parent = document.querySelector(wrap)
    if (!parent) {
        throw new Error('wrap 不存在')
    }

    if (typeof html == 'string') {
        parent.innerHTML = html
    } else {
        parent.innerHTML = ''
        parent.appendChild(html)
    }
    this.eventBus.emit('context:mounted', {
        parent
    })
}

