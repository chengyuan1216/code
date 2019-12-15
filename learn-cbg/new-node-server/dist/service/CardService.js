"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dec, _class;

const CardDao = require('../dao/CardDao.js');

const Response = require('../dto/Response.js');

const SuperService = require('./SuperService.js');

const {
  Inject
} = require('../anotation/index.js');

let StudentService = (_dec = Inject(['CardDao']), _dec(_class = class StudentService extends SuperService {
  constructor() {
    super();
  }

  selectOne(req, res) {
    if (!req.query.id) {
      Response.exception(res, 'id不能为空');
    } else {
      this.CardDao.selectById(req.query.id).then(data => {
        Response.success(res, data);
      }).catch(err => {
        console.error('service层捕获异常', err);
      });
    }
  }

  deleteOne(req, res) {
    if (!req.query.id) {
      Response.exception(res, 'id不能为空');
    } else {
      this.CardDao.deleteById(req.query.id).then(data => {
        Response.success(res, data);
      }).catch(err => {
        console.error('service层捕获异常', err);
      });
    }
  }

  add(row) {
    return this.CardDao.add(row);
  }

  list(req, res) {
    var _this = this;

    return (0, _asyncToGenerator2.default)(function* () {
      let result = yield _this.CardDao.list(req.query);
      Response.success(res, result);
    })();
  }

}) || _class);
module.exports = StudentService;