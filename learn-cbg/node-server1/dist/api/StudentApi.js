"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;

const {
  Get,
  Inject
} = require('../anotation/index.js');

const Response = require('../dto/Response.js');

let StudentApi = (_dec = Inject(['StudentService', 'CardService']), _dec2 = Get('/api/getOne'), _dec3 = Get('/api/deleteOne'), _dec4 = Get('/api/list'), _dec5 = Get('/api/student/card_list'), _dec(_class = (_class2 = class StudentApi {
  constructor() {}

  getOne(req, res) {
    var _this = this;

    return (0, _asyncToGenerator2.default)(function* () {
      if (!req.query.id) {
        Response.exception(res, 'id不能为空');
      } else {
        let reault = yield _this.StudentService.selectOne(req.query.id);
        Response.success(res, reault);
      }
    })();
  }

  deleteOne(req, res) {
    var _this2 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      if (!req.query.id) {
        Response.exception(res, 'id不能为空');
      } else {
        let result = yield _this2.StudentService.deleteOne(req.query.id);
        Response.success(res, result);
      }
    })();
  }

  list(req, res) {
    var _this3 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      let result = yield _this3.StudentService.list(req.query);
      Response.success(res, result);
    })();
  }

  cardList(req, res) {
    var _this4 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      _this4.CardService.list(req, res);
    })();
  }

}, ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getOne", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "getOne"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "deleteOne", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "deleteOne"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "list", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "list"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "cardList", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "cardList"), _class2.prototype)), _class2)) || _class);
module.exports = StudentApi;