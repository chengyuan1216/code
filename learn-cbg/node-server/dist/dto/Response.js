"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Response =
/*#__PURE__*/
function () {
  function Response(code, msg, data) {
    (0, _classCallCheck2["default"])(this, Response);
    this.code = code;
    this.msg = msg;
    this.data = data;
    console.log("返回值", JSON.stringify(data));
  }

  (0, _createClass2["default"])(Response, [{
    key: "setCode",
    value: function setCode(code) {
      this.code = code;
    }
  }, {
    key: "getCode",
    value: function getCode(code) {
      return this.code;
    }
  }, {
    key: "setMsg",
    value: function setMsg(code) {
      this.code = code;
    }
  }, {
    key: "getMsg",
    value: function getMsg(code) {
      return this.code;
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.code = code;
    }
  }, {
    key: "getData",
    value: function getData(data) {
      return this.code;
    }
  }]);
  return Response;
}();

Response.success = function (res, data) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json;charset=utf-8');
  res.end(JSON.stringify(new Response(Response.SUCCESS.code, Response.SUCCESS.msg, data)));
};

Response.error = function (res, data) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json;charset=utf-8');
  res.end(JSON.stringify(new Response(Response.ERROR.code, Response.ERROR.msg, data)));
};

Response.exception = function (res, data) {
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