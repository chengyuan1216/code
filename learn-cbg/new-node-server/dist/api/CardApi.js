"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _index = require("../anotation/index");

var _Response = _interopRequireDefault(require("../dto/Response"));

var _dec, _dec2, _class, _class2;

var StudentApi = (_dec = (0, _index.Inject)([]), _dec2 = (0, _index.Get)('/getCardList'), _dec(_class = (_class2 = class StudentApi {
  constructor() {}

  list(req, res) {
    return (0, _asyncToGenerator2.default)(function* () {
      _Response.default.success(res, [{
        id: 1,
        name: 'test'
      }]);
    })();
  }

}, ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "list", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "list"), _class2.prototype)), _class2)) || _class);
exports.default = StudentApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvQ2FyZEFwaS50cyJdLCJuYW1lcyI6WyJTdHVkZW50QXBpIiwiY29uc3RydWN0b3IiLCJsaXN0IiwicmVxIiwicmVzIiwiUmVzcG9uc2UiLCJzdWNjZXNzIiwiaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7SUFJcUJBLFUsV0FEcEIsbUJBQU8sRUFBUCxDLFVBS0MsZ0JBQUksY0FBSixDLDJCQUxGLE1BQ3FCQSxVQURyQixDQUNnQztBQUMvQkMsRUFBQUEsV0FBVyxHQUFHLENBQ2I7O0FBR0tDLEVBQUFBLElBRE4sQ0FDV0MsR0FEWCxFQUNpQ0MsR0FEakMsRUFDd0Q7QUFBQTtBQUN2REMsd0JBQVNDLE9BQVQsQ0FBaUJGLEdBQWpCLEVBQXNCLENBQ3JCO0FBQUVHLFFBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUFBLElBQUksRUFBRTtBQUFmLE9BRHFCLENBQXRCO0FBRHVEO0FBSXZEOztBQVQ4QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgeyBHZXQsIEluamVjdCB9IGZyb20gJy4uL2Fub3RhdGlvbi9pbmRleCdcclxuaW1wb3J0IFJlc3BvbnNlIGZyb20gJy4uL2R0by9SZXNwb25zZSdcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuXHJcbkBJbmplY3QoW10pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0dWRlbnRBcGkge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdH1cclxuXHJcblx0QEdldCgnL2dldENhcmRMaXN0JylcclxuXHRhc3luYyBsaXN0KHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcclxuXHRcdFJlc3BvbnNlLnN1Y2Nlc3MocmVzLCBbXHJcblx0XHRcdHsgaWQ6IDEsIG5hbWU6ICd0ZXN0JyB9XHJcblx0XHRdKVxyXG5cdH1cclxufVx0XHJcbiJdfQ==