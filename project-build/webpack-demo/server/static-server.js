const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname, process.env.publicPath)))

app.listen(8001, () => {
    console.log('服务已启动，访问地址： localhost:8001!\n');
})
