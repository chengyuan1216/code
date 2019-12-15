"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _dec, _dec2, _dec3, _class, _class2;

const {
  Controller,
  Post,
  Inject
} = require('../anotation/index.js');

let UserApi = (_dec = Inject(['UserService']), _dec2 = Post('/api/user/register'), _dec3 = Post('/api/user/login'), _dec(_class = (_class2 = class UserApi {
  constructor() {}

  register(req, res) {
    this.UserService.add(req, res);
  }

  login(req, res) {
    this.UserService.login(req, res);
  }

}, ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "register", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "register"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "login", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "login"), _class2.prototype)), _class2)) || _class);
module.exports = UserApi;