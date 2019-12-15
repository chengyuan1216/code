"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var uuid = require('uuid');

var moment = require('moment');

var bcrypt = require('bcrypt'); // 加密


var token = require('../utils/token.js');
/**
 * 用户
 */


module.exports = function (context) {
  var Response = context.Response,
      dao = context.dao;
  var UserDao = dao.UserDao;
  return (
    /*#__PURE__*/
    function () {
      function UserService() {
        (0, _classCallCheck2["default"])(this, UserService);
      }

      (0, _createClass2["default"])(UserService, [{
        key: "add",
        value: function () {
          var _add = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee(req, res) {
            var users;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return UserDao.select(new UserDao.Condition().where('name', req.body.name));

                  case 2:
                    users = _context.sent;

                    if (users.length > 0) {
                      Response.error(res, {
                        message: "该用户名已被注册"
                      });
                    } else {
                      // 加密后存到数据库
                      bcrypt.hash(req.body.password, 10, function (err, encryptPassword) {
                        UserDao.add({
                          id: uuid.v1(),
                          name: req.body.name,
                          password: encryptPassword,
                          create_date: moment().format('YYYY-MM-DD HH:mm:ss')
                        }).then(function () {
                          Response.success(res, {
                            message: "注册成功"
                          });
                        });
                      });
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function add(_x, _x2) {
            return _add.apply(this, arguments);
          }

          return add;
        }()
      }, {
        key: "login",
        value: function () {
          var _login = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee3(req, res) {
            var condition, users;
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    condition = new UserDao.Condition();
                    condition.where('name', req.body.name);
                    _context3.next = 4;
                    return UserDao.select(condition);

                  case 4:
                    users = _context3.sent;

                    if (users.length > 0) {
                      bcrypt.compare(req.body.password, users[0].password,
                      /*#__PURE__*/
                      function () {
                        var _ref = (0, _asyncToGenerator2["default"])(
                        /*#__PURE__*/
                        _regenerator["default"].mark(function _callee2(err, isAccess) {
                          var userToken;
                          return _regenerator["default"].wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (!(isAccess === true)) {
                                    _context2.next = 8;
                                    break;
                                  }

                                  userToken = token.createToken({
                                    id: users[0].id,
                                    name: users[0].name
                                  }, 10000);
                                  console.log(userToken); // 将token存到数据库

                                  _context2.next = 5;
                                  return UserDao.update(new UserDao.Condition().set('token', userToken).where('id', users[0].id));

                                case 5:
                                  Response.success(res, {
                                    message: "登陆成功",
                                    user: {
                                      token: userToken,
                                      name: users[0].name
                                    }
                                  });
                                  _context2.next = 9;
                                  break;

                                case 8:
                                  Response.error(res, {
                                    message: "用户名或密码错误"
                                  });

                                case 9:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        return function (_x5, _x6) {
                          return _ref.apply(this, arguments);
                        };
                      }());
                    } else {
                      Response.error(res, {
                        message: "不存在的用户名"
                      });
                    }

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function login(_x3, _x4) {
            return _login.apply(this, arguments);
          }

          return login;
        }()
      }]);
      return UserService;
    }()
  );
};