"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _require = require('../config/mysql.js'),
    getConnection = _require.getConnection;

var Sql =
/*#__PURE__*/
function () {
  function Sql(tableName) {
    (0, _classCallCheck2["default"])(this, Sql);
    this.tableName = tableName;
  }
  /**
   * 通过id查询记录
   * @param {*} id 
   */


  (0, _createClass2["default"])(Sql, [{
    key: "selectById",
    value: function () {
      var _selectById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(id) {
        var sql, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sql = "SELECT * FROM ".concat(this.tableName, " where id = '").concat(id, "'");
                _context.next = 3;
                return this.query(sql);

              case 3:
                result = _context.sent;
                return _context.abrupt("return", result[0]);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function selectById(_x) {
        return _selectById.apply(this, arguments);
      }

      return selectById;
    }()
    /**
     * 通过id删除一条记录
     * @param {*} id 
     */

  }, {
    key: "deleteById",
    value: function () {
      var _deleteById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        var sql, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sql = "DELETE FROM ".concat(this.tableName, " WHERE id = '").concat(id, "'");
                result = this.query(sql);
                return _context2.abrupt("return", result);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteById(_x2) {
        return _deleteById.apply(this, arguments);
      }

      return deleteById;
    }()
    /**
     * 增加一条记录
     * @param {*} sql 
     */

  }, {
    key: "add",
    value: function () {
      var _add = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(row) {
        var fileds, values, sql;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fileds = Object.keys(row);
                values = [];
                fileds.forEach(function (key) {
                  values.push("'".concat(row[key], "'"));
                });
                sql = "INSERT INTO ".concat(this.tableName, " (").concat(fileds.join(','), ") VALUES (").concat(values.join(','), ");");
                _context3.next = 6;
                return this.query(sql);

              case 6:
                return _context3.abrupt("return", _context3.sent);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function add(_x3) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
    /**
     * 条件查询
     * @param {*} condition 
     */

  }, {
    key: "select",
    value: function () {
      var _select = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(condition) {
        var whereCondition, limitCondition, sql, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                whereCondition = '';
                limitCondition = '';

                if (condition instanceof Condition) {
                  whereCondition = condition.whereCondition;
                  limitCondition = condition.limitCondition;
                }

                sql = "SELECT * FROM ".concat(this.tableName, " ").concat(whereCondition, " ").concat(limitCondition);
                _context4.next = 6;
                return this.query(sql);

              case 6:
                result = _context4.sent;
                return _context4.abrupt("return", result);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function select(_x4) {
        return _select.apply(this, arguments);
      }

      return select;
    }()
    /**
     * 更新记录
     * @param {*} condition 
     */

  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(condition) {
        var setCondition, whereCondition, sql;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                setCondition = '';
                whereCondition = '';

                if (condition instanceof Condition) {
                  setCondition = condition.setCondition;
                  whereCondition = condition.whereCondition;
                }

                sql = "UPDATE ".concat(this.tableName, " ").concat(setCondition, " ").concat(whereCondition);
                _context5.next = 6;
                return this.query(sql);

              case 6:
                return _context5.abrupt("return", _context5.sent);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function update(_x5) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
    /**
     * 查询列表
     * @param {*} sql 
     */

  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(condition) {
        var result, count;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.select(new Condition().page(condition.pageNum, condition.pageSize));

              case 2:
                result = _context6.sent;
                _context6.next = 5;
                return this.count();

              case 5:
                count = _context6.sent;
                return _context6.abrupt("return", {
                  data: result,
                  total: count[0]['count'],
                  pageNum: condition.pageNum,
                  hasNextPage: result.length + (condition.pageNum - 1) * condition.pageSize < count[0]['count']
                });

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function list(_x6) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
    /**
     * 查询表的记录总条数
     * @param {*} sql 
     */

  }, {
    key: "count",
    value: function () {
      var _count = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7() {
        var sql;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                sql = "SELECT COUNT(*) AS count FROM ".concat(this.tableName);
                _context7.next = 3;
                return this.query(sql);

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function count() {
        return _count.apply(this, arguments);
      }

      return count;
    }()
    /**
     * 执行sql语句
     * @param {*} sql 
     */

  }, {
    key: "query",
    value: function query(sql) {
      console.log("sql ==> ".concat(sql));
      return new Promise(function (reslove, reject) {
        getConnection().then(function (con) {
          con.query(sql, function (err, data) {
            if (err) {
              reject(err);
            } else {
              reslove(data);
            }
          });
        });
      });
    }
  }]);
  return Sql;
}();
/**
 * 查询条件类
 */


var Condition =
/*#__PURE__*/
function () {
  function Condition() {
    (0, _classCallCheck2["default"])(this, Condition);
    this.whereCondition = '';
    this.setCondition = '';
    this.orderCondition = '';
    this.limitCondition = '';
  } // 条件


  (0, _createClass2["default"])(Condition, [{
    key: "where",
    value: function where(filed, value) {
      if (this.whereCondition) {
        this.whereCondition += " and ".concat(filed, "='").concat(value, "' ");
      } else {
        this.whereCondition += " WHERE ".concat(filed, "='").concat(value, "' ");
      }

      return this;
    } // 更新字段

  }, {
    key: "set",
    value: function set(filed, value) {
      if (this.setCondition) {
        this.setCondition += ", ".concat(filed, "='").concat(value, "' ");
      } else {
        this.setCondition += "SET ".concat(filed, "='").concat(value, "'");
      }

      return this;
    } // 排序

  }, {
    key: "orderBy",
    value: function orderBy(filed, value) {
      if (this.setCondition) {
        this.setCondition += ", ".concat(filed, "='").concat(value, "' ");
      } else {
        this.orderCondition += "ORDER BY ".concat(filed, " '").concat(value, "'");
      }

      return this;
    }
  }, {
    key: "limit",
    value: function limit(start, size) {
      this.limitCondition = "LIMIT ".concat(start, ", ").concat(end);
      return this;
    } // 分页

  }, {
    key: "page",
    value: function page(pageNum, pageSize) {
      this.limitCondition = "LIMIT ".concat((pageNum - 1) * pageSize, ", ").concat(pageSize);
      return this;
    }
  }]);
  return Condition;
}();

Sql.Condition = Condition;
module.exports = Sql;