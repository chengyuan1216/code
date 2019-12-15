"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dec, _class;

const SuperService = require('./SuperService.js');

const {
  Inject
} = require('../anotation/index.js');

let StudentService = (_dec = Inject(['StudentDao']), _dec(_class = class StudentService extends SuperService {
  constructor() {
    super();
  }

  selectOne(id) {
    var _this = this;

    return (0, _asyncToGenerator2.default)(function* () {
      return yield _this.StudentDao.selectById(id);
    })();
  }

  deleteOne(id) {
    var _this2 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      return yield _this2.StudentDao.deleteById(id);
    })();
  }

  list(query) {
    var _this3 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      return yield _this3.StudentDao.list(query);
    })();
  }

}) || _class);
module.exports = StudentService;