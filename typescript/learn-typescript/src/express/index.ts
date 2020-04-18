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

  var app = document.getElementById('app')
  var o = {
    "8l2w6hkr3ng93fwd": true,
    "goodscenter": true,
    "goods_lib": true,
    "goods_group": true,
    "goods_basesetting": true,
    "goods_species": true,
    "goods_brand": true,
    "goods_type": true,
    "goods_specs": true,
    "goods_tag": true,
    "goods_image_space": true,
    "goods_video_space": true,
    "goods_erp_manage": true,
    "dispatch_center": true,
    "dispatch_wms": true
  }
  Object.keys(o).forEach(k => {
    app.__vue__.$allow[k] = o[k]
  })