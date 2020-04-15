"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 0;
function nextId() {
    return id++;
}
function noop() { }
var State;
(function (State) {
    State[State["PENDING"] = 0] = "PENDING";
    State[State["FULFILLED"] = 1] = "FULFILLED";
    State[State["REJECTED"] = 2] = "REJECTED";
})(State || (State = {}));
// 将所有的回掉加入一个全局的异步任务中遍历执行
const queue = new Array(1000);
let len = 0;
// const subscribers:Array<Function|promise<any>> = []
class promise {
    constructor(resolver) {
        this.PROMISE_ID = nextId();
        this.subscribers = [];
        this.result = undefined;
        this.state = 0;
        if (this instanceof promise) {
            this.initializePromise(this, resolver);
        }
    }
    /**
     *
     * @param promise
     * @param resolver
     */
    initializePromise(promise, resolver) {
        try {
            let resolve = (value) => {
                this.resolve(promise, value);
            };
            let reject = (reason) => {
                this.reject(promise, reason);
            };
            // 同步执行resolver, 传入的两个参数用于改变状态
            resolver(resolve, reject);
        }
        catch (e) {
            this.reject(promise, e);
        }
    }
    /**
     *
     * @param promise
     * @param value
     */
    resolve(promise, value) {
        this.fulfill(promise, value);
    }
    /**
     *
     * @param promise
     * @param value
     */
    fulfill(promise, value) {
        if (promise.state !== State.PENDING) {
            return;
        }
        promise.result = value;
        promise.state = State.FULFILLED;
        if (promise.subscribers.length !== 0) {
            queue[len] = this.publish.bind(this);
            queue[len + 1] = promise;
            len += 2;
            // 如果len等于2说明新的异步任务还未开启
            if (len === 2) {
                setTimeout(this.flush, 0);
            }
        }
    }
    /**
     *
     * @param promise
     */
    publish(promise) {
        let subscribers = promise.subscribers;
        let settled = promise.state;
        if (subscribers.length === 0) {
            return;
        }
        let child, callback, detail = promise.result;
        for (let i = 0; i < subscribers.length; i += 3) {
            child = subscribers[i];
            callback = subscribers[i + settled];
            this.invokeCallback(settled, child, callback, detail);
            //   if (child) {
            //     (callback as Function)(detail)
            //   }
        }
        promise.subscribers.length = 0;
    }
    invokeCallback(settled, child, callback, detail) {
        let value;
        let succeeded = true;
        let error = null;
        if (typeof callback == 'function') {
            try {
                value = callback(detail);
            }
            catch (e) {
                succeeded = false;
                error = e;
            }
            if (promise === value) {
                this.reject(child, new Error('不能返回promise对象本身'));
                return;
            }
        }
        else {
            value = detail;
        }
        if (child.state !== State.PENDING) {
            // noop
        }
        else if (typeof callback == 'function' && succeeded) {
            child.resolve(child, value);
        }
        else if (succeeded === false) {
            child.reject(child, error);
        }
        else if (settled === State.FULFILLED) {
            child.fulfill(child, value);
        }
        else if (settled === State.REJECTED) {
            child.reject(child, value);
        }
    }
    /**
     *
     * @param promise
     * @param reason
     */
    reject(promise, reason) {
        // 如果状态已经改变就不允许再改变了
        if (promise.state !== State.PENDING) {
            return;
        }
        promise.state = State.REJECTED;
        promise.result = reason;
        if (promise.subscribers.length !== 0) {
            queue[len] = this.publish.bind(this);
            queue[len + 1] = promise;
            len += 2;
            // 如果len等于2说明新的异步任务还未开启
            if (len === 2) {
                setTimeout(this.flush, 0);
            }
        }
    }
    /**
     *
     * @param onFulfillment
     * @param onRejection
     */
    then(onFulfillment, onRejection) {
        let parent = this;
        let state = this.state;
        let child = new promise(noop);
        // 
        if (state === State.PENDING) {
            this.subscribe(parent, child, onFulfillment, onRejection);
        }
        else {
        }
        return child;
    }
    /**
     *
     * @param parent
     * @param child
     * @param onFulfillment
     * @param onRejection
     */
    subscribe(parent, child, onFulfillment = noop, onRejection = noop) {
        let subscribers = parent.subscribers;
        let length = subscribers.length;
        subscribers[length] = child; // 0
        subscribers[length + State.FULFILLED] = onFulfillment; // 1
        subscribers[length + State.REJECTED] = onRejection; // 2
    }
    /**
     * 执行异步任务队列
     */
    flush() {
        for (let i = 0; i < len; i += 2) {
            let callback = queue[i];
            let arg = queue[i + 1];
            callback(arg);
            queue[i] = undefined;
            queue[i + 1] = undefined;
        }
        len = 0;
    }
}
exports.default = promise;
