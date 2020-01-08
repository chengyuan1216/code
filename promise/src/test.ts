import promise from './promise'
new promise<string> (function(resolve, reject) {
    setTimeout(() => {
        resolve('123')
    })
}).then(function(data:string) {
    console.log(data)
    return 'ok'
}, function(data:string) {
    console.log(data)
    return 'ok1'
}).then(function(data) {
    console.log(data)
})