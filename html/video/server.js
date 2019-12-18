const express = require('express')
const app = express()
app.use(express.static('src'))
app.listen(8888, function() {
    console.log('localhost:8888')
})