const promise = require('../node_modules/es6-promise/dist/es6-promise.js') 
let p = new promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hh')
    })
})

p.then(data => {
    console.log(data)
}).then(data => {
    console.log(data)
})