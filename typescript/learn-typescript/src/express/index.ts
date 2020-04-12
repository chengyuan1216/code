import express from 'express'
import {Logger, DateUtil} from '../utils/index';

Logger.i(DateUtil.format('kkk'))

const App = express()
const post = 8080

App.get('/ping', (req, res) => {
    Logger.i('ping.....')
    // res.statusCode = 200
    res.write(`
        <h1>hello world</h1>
    `)
    res.end()
    // res.send({
    //     a: 1
    // })
})

App.listen(post, error => {
    if (!error) {
        Logger.i('service start at 8080 ....')
    }
})
