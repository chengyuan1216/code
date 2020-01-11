import EventEmitter from './core/events'
import {render} from './core/render'
import {Context} from './core/context'

export default function HiComponent() {
    console.log('constructor333')
    this.context = new Context()
    this.eventBus = new EventEmitter()
    this._init()
}

let cid = 0
HiComponent.prototype = {
    constructor: HiComponent,
    render,
    _init() {
        this.eventBus.on('context:mounted', data => {
            console.log('context:mounted', data)
            // this._flush()
            let component = Object.create(null)
            component.parent = data.parent
            this.context.components[cid++] = component
        })
    },
    _flush() {
        
    }
}
HiComponent.EventEmitter = EventEmitter

 