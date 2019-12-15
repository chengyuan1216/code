var app = require('express')();
var express = require("express");
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3389, function() {
  console.log('服务器启动成功。。。', 'localhost:3389')
});

app.use(express.static("./static"));


/**
 * 用于保存当前登录的用户的socket连接
 * 便于定向推送信息
 */

var userMap = {

}

io.on('connection', function (socket) {
  console.log('websocket has connected')

  socket.emit('client', {
    type: 'hello',
    message: '你好， 欢迎连接！'
  })
  
  /**
   * 登录
   * {
   *    name: 'liu'
   * }
   */
  socket.on('login', function(data) {
    if (userMap[data.name]) {
      socket.emit('client', {
        type: 'loginResponse',
        data: data,
        stats: 'failure',
        message: socket === userMap[data.name]? '你已经登录啦': '该名字已经有人使用啦， 换个名字吧~~~'
      })
    } else {
      userMap[data.name] = socket
      socket.emit('client', {
        type: 'loginResponse',
        data: data,
        stats: 'success',
        message: data.name + ', 登录成功'
      })
      io.sockets.emit('client', {
        type: 'broadcast',
        message: '欢迎, ' + data.name 
      })
    }
  })

  socket.on('singleSendMessage', function(data) {
    userMap[data.to].emit('client', {
      from: data.from,
      message: data.message
    })

    // socket.emit('client', {
    //   type: 'responseStats',
    //   data: data,
    //   stats: 'success'
    // })
  })

  socket.on('groupSendMessage', function(data) {
    console.log(data)
    io.sockets.emit('client', {
      from: data.from,
      message: data.message
    })
  })
});