import {toArray} from './util'
export default class EventEmitter {
    constructor() {
      this._events = Object.create(null)
    }
    
    /**
     * 
     * @param {string | Array<string>} event 
     * @param {Function} fn 
     */
    on(event, fn) {
        const vm = this
        if (Array.isArray(event)) {
            for (let i = 0, l = event.length; i < l; i++) {
                vm.on(event[i], fn)
            }
        } else {
            (vm._events[event] || (vm._events[event] = [])).push(fn)
        }
        return vm
    }

    /**
     * 
     * @param {string} event 
     * @param {Function} fn 
     */
    once(event, fn) {
        const vm = this
        function on () {
            vm.off(event, on)
            fn.apply(vm, arguments)
        }
        on.fn = fn
        vm.on(event, on)
        return vm
    }

    /**
     * 
     * @param {string | Array<string>} event 
     * @param {Function} fn 
     */
    off(event, fn) {
        const vm = this
        // all
        if (!arguments.length) {
          vm._events = Object.create(null)
          return vm
        }
        // array of events
        if (Array.isArray(event)) {
          for (let i = 0, l = event.length; i < l; i++) {
            vm.off(event[i], fn)
          }
          return vm
        }
        // specific event
        const cbs = vm._events[event]
        if (!cbs) {
          return vm
        }
        if (!fn) {
          vm._events[event] = null
          return vm
        }
        // specific handler
        let cb
        let i = cbs.length
        while (i--) {
          cb = cbs[i]
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i, 1)
            break
          }
        }
        return vm
    }

    /**
     * 
     * @param {string} event 
     */
    emit(event) {
        const vm = this
        let cbs = vm._events[event]
        if (cbs) {
          cbs = cbs.length > 1 ? toArray(cbs) : cbs
          const args = toArray(arguments, 1)
          let handler
          for (let i = 0, l = cbs.length; i < l; i++) {
            try {
              handler = cbs[i]
              args ? handler.apply(null, args) : handler.call(null)
            } catch (e) {
                console.error(`event handler for "${event}"`)
                console.error(e)
            }
          }
        }
        return vm
    }
}