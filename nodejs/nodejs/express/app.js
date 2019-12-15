var express = require('express')
var app = express()
app.listen(3000);
console.log('express server start： localhost:3000')

app.get('/', function (req, res) {
  res.send('hello world')
})