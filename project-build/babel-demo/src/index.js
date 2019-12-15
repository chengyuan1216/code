const getTime = () => new Date().toLocaleString()

class Test {
    constructor() {
        this.printTime()
    }

    @log
    printTime() {
        const time = getTime()
        console.log(time)
    }
}

function log(target, name, descriptor) {
    let oldValue = descriptor.value
    descriptor.value = function() {
        console.log('当前时间:')
        return oldValue.apply(null, arguments)
    }
    return descriptor
}

new Test()