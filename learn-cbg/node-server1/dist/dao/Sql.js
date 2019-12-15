"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

const {
  getConnection
} = require('../config/mysql.js');

class Sql {
  constructor(tableName) {
    this.tableName = tableName;
  }
  /**
   * 通过id查询记录
   * @param {*} id 
   */


  selectById(id) {
    var _this = this;

    return (0, _asyncToGenerator2.default)(function* () {
      let sql = "SELECT * FROM ".concat(_this.tableName, " where id = '").concat(id, "'");
      let result = yield _this.query(sql);
      return result[0];
    })();
  }
  /**
   * 通过id删除一条记录
   * @param {*} id 
   */


  deleteById(id) {
    var _this2 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      let sql = "DELETE FROM ".concat(_this2.tableName, " WHERE id = '").concat(id, "'");

      let result = _this2.query(sql);

      return result;
    })();
  }
  /**
   * 增加一条记录
   * @param {*} sql 
   */


  add(row) {
    var _this3 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      let fileds = Object.keys(row);
      let values = [];
      fileds.forEach(key => {
        values.push("'".concat(row[key], "'"));
      });
      let sql = "INSERT INTO ".concat(_this3.tableName, " (").concat(fileds.join(','), ") VALUES (").concat(values.join(','), ");");
      return yield _this3.query(sql);
    })();
  }
  /**
   * 条件查询
   * @param {*} condition 
   */


  select(condition) {
    var _this4 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      let whereCondition = '';
      let limitCondition = '';

      if (condition instanceof Condition) {
        whereCondition = condition.whereCondition;
        limitCondition = condition.limitCondition;
      }

      let sql = "SELECT * FROM ".concat(_this4.tableName, " ").concat(whereCondition, " ").concat(limitCondition);
      let result = yield _this4.query(sql);
      return result;
    })();
  }
  /**
   * 更新记录
   * @param {*} condition 
   */


  update(condition) {
    var _this5 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      let setCondition = '';
      let whereCondition = '';

      if (condition instanceof Condition) {
        setCondition = condition.setCondition;
        whereCondition = condition.whereCondition;
      }

      let sql = "UPDATE ".concat(_this5.tableName, " ").concat(setCondition, " ").concat(whereCondition);
      return yield _this5.query(sql);
    })();
  }
  /**
   * 查询列表
   * @param {*} sql 
   */


  list(condition) {
    var _this6 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      // 查询的结果
      let result = yield _this6.select(new Condition().page(condition.pageNum, condition.pageSize)); // 总条数

      let count = yield _this6.count();
      return {
        data: result,
        total: count[0]['count'],
        pageNum: condition.pageNum,
        hasNextPage: result.length + (condition.pageNum - 1) * condition.pageSize < count[0]['count']
      };
    })();
  }
  /**
   * 查询表的记录总条数
   * @param {*} sql 
   */


  count() {
    var _this7 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      let sql = "SELECT COUNT(*) AS count FROM ".concat(_this7.tableName);
      return yield _this7.query(sql);
    })();
  }
  /**
   * 执行sql语句
   * @param {*} sql 
   */


  query(sql) {
    console.log("sql ==> ".concat(sql));
    return new Promise((reslove, reject) => {
      getConnection().then(con => {
        con.query(sql, (err, data) => {
          if (err) {
            reject(err);
          } else {
            reslove(data);
          }
        });
      });
    });
  }

}
/**
 * 查询条件类
 */


class Condition {
  constructor() {
    this.whereCondition = '';
    this.setCondition = '';
    this.orderCondition = '';
    this.limitCondition = '';
  } // 条件


  where(filed, value) {
    if (this.whereCondition) {
      this.whereCondition += " and ".concat(filed, "='").concat(value, "' ");
    } else {
      this.whereCondition += " WHERE ".concat(filed, "='").concat(value, "' ");
    }

    return this;
  } // 更新字段


  set(filed, value) {
    if (this.setCondition) {
      this.setCondition += ", ".concat(filed, "='").concat(value, "' ");
    } else {
      this.setCondition += "SET ".concat(filed, "='").concat(value, "'");
    }

    return this;
  } // 排序


  orderBy(filed, value) {
    if (this.setCondition) {
      this.setCondition += ", ".concat(filed, "='").concat(value, "' ");
    } else {
      this.orderCondition += "ORDER BY ".concat(filed, " '").concat(value, "'");
    }

    return this;
  }

  limit(start, size) {
    this.limitCondition = "LIMIT ".concat(start, ", ").concat(end);
    return this;
  } // 分页


  page(pageNum, pageSize) {
    this.limitCondition = "LIMIT ".concat((pageNum - 1) * pageSize, ", ").concat(pageSize);
    return this;
  }

}

Sql.Condition = Condition;
module.exports = Sql;