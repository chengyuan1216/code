"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var mysql = require('mysql'); // 数据库设置


var config = {
  connectionLimit: 50,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'stockmgt'
};

var Mysql =
/*#__PURE__*/
function () {
  function Mysql(cfg) {
    (0, _classCallCheck2["default"])(this, Mysql);
    this.pool = null;
    this.config = cfg || config;
    this.createPool(this.config);
  }

  (0, _createClass2["default"])(Mysql, [{
    key: "createPool",
    value: function createPool(config) {
      this.pool = mysql.createPool(config);
    }
  }, {
    key: "getConnection",
    value: function getConnection() {
      var _this = this;

      if (!this.pool) {
        console.error('未创建数据连接池');
      }

      var connection = null;
      var connect = new Promise(function (reslove, reject) {
        _this.pool.getConnection(function (err, con) {
          if (err) {
            reject(err);
          }

          connection = con;
          reslove(con);
        });
      });
      connect["finally"](function () {
        try {
          connection && connection.release();
        } catch (e) {
          console.error('connection.release() 执行异常');
        }
      });
      return connect;
    }
  }]);
  return Mysql;
}(); // 保存实例


var instance = null;

Mysql.getInstance = function () {
  return instance;
};

Mysql.getConnection = function () {
  return instance.getConnection();
};

Mysql.init = function () {
  if (!instance) {
    instance = new Mysql();
    console.log("\u521D\u59CB\u5316 mysql \u6210\u529F");
  }
};

module.exports = Mysql;