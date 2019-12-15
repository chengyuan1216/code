"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

module.exports = function (context) {
  var Response = context.Response,
      dao = context.dao;
  var CardDao = dao.CardDao;
  return (
    /*#__PURE__*/
    function () {
      function CardService() {
        (0, _classCallCheck2["default"])(this, CardService);
      }

      (0, _createClass2["default"])(CardService, [{
        key: "selectOne",
        value: function selectOne(req, res) {
          console.log('service层 selectOne');

          if (!req.query.id) {
            Response.exception(res, 'id不能为空');
            console.error('抛异常后');
          } else {
            CardDao.selectById(req.query.id).then(function (data) {
              Response.success(res, data);
            })["catch"](function (err) {
              console.error('service层捕获异常', err);
            });
          }
        }
      }, {
        key: "deleteOne",
        value: function deleteOne(req, res) {
          if (!req.query.id) {
            Response.exception(res, 'id不能为空');
            console.error('抛异常后');
          } else {
            CardDao.deleteById(req.query.id).then(function (data) {
              Response.success(res, data);
            })["catch"](function (err) {
              console.error('service层捕获异常', err);
            });
          }
        }
      }, {
        key: "add",
        value: function add(row) {
          return CardDao.add(row);
        }
      }, {
        key: "list",
        value: function () {
          var _list = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee(req, res) {
            var result;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return CardDao.list(req.query);

                  case 2:
                    result = _context.sent;
                    Response.success(res, result);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function list(_x, _x2) {
            return _list.apply(this, arguments);
          }

          return list;
        }()
      }]);
      return CardService;
    }()
  );
};