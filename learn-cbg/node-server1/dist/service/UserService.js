"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dec, _class;

const UserDao = require('../dao/UserDao.js');

const Response = require('../dto/Response.js');

const SuperService = require('./SuperService.js');

const {
  Inject
} = require('../anotation/index.js');

const uuid = require('uuid');

const moment = require('moment');

const bcrypt = require('bcrypt'); // 加密


const Sql = require('../dao/Sql.js');

const token = require('../utils/token.js');
/**
 * 用户
 */


let UserService = (_dec = Inject(['UserDao']), _dec(_class = class UserService extends SuperService {
  constructor() {
    super();
  }

  add(req, res) {
    var _this = this;

    return (0, _asyncToGenerator2.default)(function* () {
      let users = yield _this.UserDao.select(new Sql.Condition().where('name', req.body.name));

      if (users.length > 0) {
        Response.error(res, {
          message: "该用户名已被注册"
        });
      } else {
        // 加密后存到数据库
        bcrypt.hash(req.body.password, 10, (err, encryptPassword) => {
          _this.UserDao.add({
            id: uuid.v1(),
            name: req.body.name,
            password: encryptPassword,
            create_date: moment().format('YYYY-MM-DD HH:mm:ss')
          }).then(() => {
            Response.success(res, {
              message: "注册成功"
            });
          });
        });
      }
    })();
  }

  login(req, res) {
    var _this2 = this;

    return (0, _asyncToGenerator2.default)(function* () {
      let condition = new Sql.Condition();
      condition.where('name', req.body.name);
      let users = yield _this2.UserDao.select(condition);

      if (users.length > 0) {
        bcrypt.compare(req.body.password, users[0].password,
        /*#__PURE__*/
        function () {
          var _ref = (0, _asyncToGenerator2.default)(function* (err, isAccess) {
            if (isAccess === true) {
              let userToken = token.createToken({
                id: users[0].id,
                name: users[0].name
              }, 10000);
              console.log(userToken); // 将token存到数据库

              yield _this2.UserDao.update(new Sql.Condition().set('token', userToken).where('id', users[0].id));
              Response.success(res, {
                message: "登陆成功",
                user: {
                  token: userToken,
                  name: users[0].name
                }
              });
            } else {
              Response.error(res, {
                message: "用户名或密码错误"
              });
            }
          });

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      } else {
        Response.error(res, {
          message: "不存在的用户名"
        });
      }
    })();
  }

}) || _class);
module.exports = UserService;