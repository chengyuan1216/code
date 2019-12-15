"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var SuperDao = require('./SuperDao.js');
/**
 * 用户
 */


module.exports =
/*#__PURE__*/
function (_SuperDao) {
  (0, _inherits2["default"])(UserDao, _SuperDao);

  function UserDao() {
    (0, _classCallCheck2["default"])(this, UserDao);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(UserDao).call(this, 'user'));
  }

  return UserDao;
}(SuperDao);