class Chain {
    constructor(task, next) {
        this.task = task
        this.next = next
    }

    run() {
        new Promise(this.task).then(data => {
            console.log('resolve', data)
            if (this.next) {
                this.next.run()
            }
        }).catch(err => {
            console.log('err', err)
        })  
    }

    setNext(next) {
        this.next = next
        return next
    }
}


let chain1 = new Chain((resolve, reject) => {
    setTimeout(() => {
        resolve('chain1 通过')
    }, 20)
})

let chain2 = new Chain((resolve, reject) => {
    setTimeout(() => {
        reject('chain2 通过')
    }, 20)
})

let chain3 = new Chain((resolve, reject) => {
    setTimeout(() => {
        resolve('chain3 通过')
    }, 20)
})

chain1.setNext(chain2)
chain2.setNext(chain3)

chain1.run()