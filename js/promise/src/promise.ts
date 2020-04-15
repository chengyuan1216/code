let id: number = 0
function nextId():number {
    return id++
}
function noop() {}

enum State {
    PENDING = 0,
    FULFILLED = 1,
    REJECTED = 2
}

interface ResolverParams<T> {
    (val: T):any
}
interface Resolver<T> {
    (resove:ResolverParams<T>, reject:ResolverParams<any>) : any
}

// 将所有的回掉加入一个全局的异步任务中遍历执行
const queue = new Array(1000)
let len: number = 0
// const subscribers:Array<Function|promise<any>> = []

export default class promise<T> {
    public PROMISE_ID:number
    public result:T | undefined
    public state:State
    public subscribers:Array<Function|promise<any>>

    constructor(resolver: Resolver<T>) {
        this.PROMISE_ID = nextId()
        this.subscribers = []
        this.result  = undefined
        this.state = 0
        if (this instanceof promise) {
            this.initializePromise(this, resolver)
        }
    }

    /**
     * 
     * @param promise 
     * @param resolver 
     */
    private initializePromise(
        promise: promise<T>, 
        resolver: Resolver<T>
    ) {
        try {
            let resolve = (value: T) => {
                this.resolve(promise, value)
            }
            let reject = (reason:any) => {
                this.reject(promise, reason)
            }
            // 同步执行resolver, 传入的两个参数用于改变状态
            resolver(resolve, reject)
        } catch(e) {
          this.reject(promise, e)
        }
    }

    /**
     * 
     * @param promise 
     * @param value 
     */
    private resolve(promise: promise<T>, value:T) {
        this.fulfill(promise, value)
    }

    /**
     * 
     * @param promise 
     * @param value 
     */
    private fulfill(promise: promise<T>, value: T) {
        if (promise.state !== State.PENDING) {
          return
        }
        promise.result = value
        promise.state = State.FULFILLED
      
        if (promise.subscribers.length !== 0) {
            queue[len] = this.publish.bind(this)
            queue[len + 1] = promise
            len += 2
            // 如果len等于2说明新的异步任务还未开启
            if (len === 2) {
                setTimeout(this.flush, 0)
            }
        }
    }

    /**
     * 
     * @param promise 
     */
    private publish(promise: promise<any>) {
        let subscribers = promise.subscribers
        let settled = promise.state
      
        if (subscribers.length === 0) { 
            return 
        }
      
        let child, callback, detail = promise.result
      
        for (let i = 0; i < subscribers.length; i += 3) {
          child = subscribers[i]
          callback = subscribers[i + settled]
          this.invokeCallback(settled, <promise<any>>child, <Function>callback , detail)
        //   if (child) {
        //     (callback as Function)(detail)
        //   }
        }
      
        promise.subscribers.length = 0
    }

    private invokeCallback(settled: State, child: promise<any>, callback: Function, detail: T) {
        let value
        let succeeded:boolean = true
        let error: Error | null = null
        if (typeof callback == 'function') {
            try {
                value = callback(detail)
            } catch (e) {
                succeeded = false
                error = e
            }
          
            if (promise === value) {
                this.reject(child, new Error('不能返回promise对象本身'))
                return
            }
        } else {
            value = detail
        }

        if (child.state !== State.PENDING) {
            // noop
        } else if (typeof callback == 'function' && succeeded) {
            child.resolve(child, value)
        } else if (succeeded === false) {
            child.reject(child, error)
        } else if (settled === State.FULFILLED) {
            child.fulfill(child, value)
        } else if (settled === State.REJECTED) {
            child.reject(child, value)
        }
    }

    /**
     * 
     * @param promise 
     * @param reason 
     */
    private reject(promise: promise<T>, reason:any) {
        // 如果状态已经改变就不允许再改变了
        if (promise.state !== State.PENDING) { 
            return
        }
        promise.state = State.REJECTED
        promise.result = reason

        if (promise.subscribers.length !== 0) {
            queue[len] = this.publish.bind(this)
            queue[len + 1] = promise
            len += 2
            // 如果len等于2说明新的异步任务还未开启
            if (len === 2) {
                setTimeout(this.flush, 0)
            }
        }
    }

    /**
     * 
     * @param onFulfillment 
     * @param onRejection 
     */
    public then(onFulfillment?: (value: T)=> any, onRejection?: (value: any)=> any): promise<any> {
        let parent = this
        let state = this.state
        let child = new promise<any>(noop)

        // 
        if (state === State.PENDING) {
            this.subscribe(parent, child, onFulfillment, onRejection)
        } else {

        }
        return child
    }

    /**
     * 
     * @param parent 
     * @param child 
     * @param onFulfillment 
     * @param onRejection 
     */
    private subscribe(
        parent: promise<T>, 
        child: promise<any>, 
        onFulfillment: (value: T)=> any = noop, 
        onRejection: (value: any)=> any = noop
    ) {
        let subscribers = parent.subscribers
        let length = subscribers.length
        subscribers[length] = child // 0
        subscribers[length + State.FULFILLED] = onFulfillment // 1
        subscribers[length + State.REJECTED] = onRejection // 2
    }

    /**
     * 执行异步任务队列
     */
    private flush() {
        for (let i = 0; i < len; i += 2) {
            let callback = queue[i]
            let arg = queue[i + 1]
            callback(arg)
            queue[i] = undefined
            queue[i + 1] = undefined
        }
        len = 0
    }
}