"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _index = require("../anotation/index");

var _Response = _interopRequireDefault(require("../dto/Response"));

var _dec, _dec2, _class, _class2;

var StudentApi = (_dec = (0, _index.Inject)([]), _dec2 = (0, _index.Get)('/getCardList'), _dec(_class = (_class2 = class StudentApi {
  constructor() {}

  list(req, res) {
    _Response.default.success(res, [{
      id: 1,
      name: 'test'
    }]);
  }

}, ((0, _applyDecoratedDescriptor2.default)(_class2.prototype, "list", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "list"), _class2.prototype)), _class2)) || _class);
exports.default = StudentApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvQ2FyZEFwaS50cyJdLCJuYW1lcyI6WyJTdHVkZW50QXBpIiwiY29uc3RydWN0b3IiLCJsaXN0IiwicmVxIiwicmVzIiwiUmVzcG9uc2UiLCJzdWNjZXNzIiwiaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0lBSXFCQSxVLFdBRHBCLG1CQUFPLEVBQVAsQyxVQUtDLGdCQUFJLGNBQUosQywyQkFMRixNQUNxQkEsVUFEckIsQ0FDZ0M7QUFDL0JDLEVBQUFBLFdBQVcsR0FBRyxDQUNiOztBQUdEQyxFQUFBQSxJQURBLENBQ0tDLEdBREwsRUFDMkJDLEdBRDNCLEVBQ2tEO0FBQ2pEQyxzQkFBU0MsT0FBVCxDQUFpQkYsR0FBakIsRUFBc0IsQ0FDckI7QUFBRUcsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsSUFBSSxFQUFFO0FBQWYsS0FEcUIsQ0FBdEI7QUFHQTs7QUFUOEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHsgR2V0LCBJbmplY3QgfSBmcm9tICcuLi9hbm90YXRpb24vaW5kZXgnXHJcbmltcG9ydCBSZXNwb25zZSBmcm9tICcuLi9kdG8vUmVzcG9uc2UnXHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcblxyXG5ASW5qZWN0KFtdKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHVkZW50QXBpIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHR9XHJcblxyXG5cdEBHZXQoJy9nZXRDYXJkTGlzdCcpXHJcblx0bGlzdChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKSB7XHJcblx0XHRSZXNwb25zZS5zdWNjZXNzKHJlcywgW1xyXG5cdFx0XHR7IGlkOiAxLCBuYW1lOiAndGVzdCcgfVxyXG5cdFx0XSlcclxuXHR9XHJcbn1cdFxyXG4iXX0=