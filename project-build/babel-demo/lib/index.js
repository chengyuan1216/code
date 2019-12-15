"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _class;

var getTime = function getTime() {
  return new Date().toLocaleString();
};

var Test = (_class =
/*#__PURE__*/
function () {
  function Test() {
    (0, _classCallCheck2.default)(this, Test);
    this.printTime();
  }

  (0, _createClass2.default)(Test, [{
    key: "printTime",
    value: function printTime() {
      var time = getTime();
      console.log(time);
    }
  }]);
  return Test;
}(), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "printTime", [log], Object.getOwnPropertyDescriptor(_class.prototype, "printTime"), _class.prototype)), _class);

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function () {
    console.log('当前时间:');
    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

new Test();