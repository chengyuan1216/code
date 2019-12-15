"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

module.exports = function (context) {
  var Response = context.Response,
      dao = context.dao;
  var StudentDao = dao.StudentDao;
  return (
    /*#__PURE__*/
    function () {
      function StudentService() {
        (0, _classCallCheck2["default"])(this, StudentService);
      }

      (0, _createClass2["default"])(StudentService, [{
        key: "selectOne",
        value: function () {
          var _selectOne = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee(req, res) {
            var reault;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (req.query.id) {
                      _context.next = 4;
                      break;
                    }

                    Response.exception(res, 'id不能为空');
                    _context.next = 8;
                    break;

                  case 4:
                    _context.next = 6;
                    return StudentDao.selectById(req.query.id);

                  case 6:
                    reault = _context.sent;
                    Response.success(res, reault);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function selectOne(_x, _x2) {
            return _selectOne.apply(this, arguments);
          }

          return selectOne;
        }()
      }, {
        key: "deleteOne",
        value: function () {
          var _deleteOne = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee2(req, res) {
            var result;
            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (req.query.id) {
                      _context2.next = 4;
                      break;
                    }

                    Response.exception(res, 'id不能为空');
                    _context2.next = 8;
                    break;

                  case 4:
                    _context2.next = 6;
                    return StudentDao.deleteById(req.query.id);

                  case 6:
                    result = _context2.sent;
                    Response.success(res, result);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function deleteOne(_x3, _x4) {
            return _deleteOne.apply(this, arguments);
          }

          return deleteOne;
        }()
      }, {
        key: "list",
        value: function () {
          var _list = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee3(req, res) {
            var result;
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return StudentDao.list(req.query);

                  case 2:
                    result = _context3.sent;
                    Response.success(res, result);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function list(_x5, _x6) {
            return _list.apply(this, arguments);
          }

          return list;
        }()
      }]);
      return StudentService;
    }()
  );
};