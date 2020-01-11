import {Context} from '../core/context'
import EventEmitter from '../core/events'

export interface IHiComponent {
    context: Context,
    eventBus: EventEmitter,
    _init: () => void,
    _flush: () => void
}
