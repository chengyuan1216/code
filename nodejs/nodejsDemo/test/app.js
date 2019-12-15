const express = require('express')
const axios = require('axios')

const app = new express()

app.get('/hello', (req, res) => {
    axios.get('http://localhost:8888/api/card/list?pageNum=1&pageSize=10')
    .then(data => {
        console.log(JSON.stringify(data.data))
        res.setHeader({})
        res.end(JSON.stringify(data.data))
    })
})

app.listen(9999, () => {
    console.log('http://localhost:9999')
})