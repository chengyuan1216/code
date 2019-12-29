const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const fs = require('fs')
app.use(express.static('src'))

app.get('/test', function(req,res) {
    var data = fs.readFileSync(file_path)
})

app.get('/test', function(req, res) {
    console.log('test ..........')
    res.send({
        msg: 'ok'
    })
})
app.get('/img', function(req, res){
    let data = fs.readFileSync(path.resolve(__dirname, 'src/logo.png'))
    res.setHeader('Content-Type', 'image/png')
    res.end(data)
})
app.listen(8888, function() {
    console.log('localhost:8888')
})