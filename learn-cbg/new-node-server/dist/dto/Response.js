"use strict";

class Response {
  constructor(code, msg, data) {
    this.code = code;
    this.msg = msg;
    this.data = data;
    console.log("返回值", JSON.stringify(data));
  }

  setCode(code) {
    this.code = code;
  }

  getCode(code) {
    return this.code;
  }

  setMsg(code) {
    this.code = code;
  }

  getMsg(code) {
    return this.code;
  }

  setData(data) {
    this.code = code;
  }

  getData(data) {
    return this.code;
  }

}

Response.success = (res, data) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json;charset=utf-8');
  res.end(JSON.stringify(new Response(Response.SUCCESS.code, Response.SUCCESS.msg, data)));
};

Response.error = (res, data) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json;charset=utf-8');
  res.end(JSON.stringify(new Response(Response.ERROR.code, Response.ERROR.msg, data)));
};

Response.exception = (res, data) => {
  try {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json;charset=utf-8');
    var result = JSON.stringify(new Response(Response.EXCEPTION.code, Response.EXCEPTION.msg, data));
    res.end(result);
    throw new Error(result);
  } catch (e) {
    console.error(e);
  }
};

Response.SUCCESS = {
  code: 0,
  msg: '操作成功'
};
Response.ERROR = {
  code: -1,
  msg: '操作失败'
};
Response.EXCEPTION = {
  code: -2,
  msg: '请求出现异常'
};
module.exports = Response;