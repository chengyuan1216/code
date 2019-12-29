const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.static('src'))

app.get('/test', function(req,res) {
    var data = fs.readFileSync(file_path)
})

app.listen(8888, function() {
    console.log('localhost:8888')
})