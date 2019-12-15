(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_4__);





var log = __webpack_require__(/*! ./log */ "./src/log.js");



var App =
/*#__PURE__*/
function () {
  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, App);

    this.render();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(App, [{
    key: "render",
    value: function render() {
      new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('hello webpack');
        });
      }).then(function (data) {
        document.write("<div class=\"main\">".concat(log(data), "</div>"));
      });
    }
  }]);

  return App;
}();

new App();

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (wrap) {
  console.log(new Date().toLocaleString() + ': ' + wrap);
  return wrap;
};

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[["./src/app.js","manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2luZGV4LnNjc3MiXSwibmFtZXMiOlsibG9nIiwicmVxdWlyZSIsIkFwcCIsInJlbmRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInRoZW4iLCJkYXRhIiwiZG9jdW1lbnQiLCJ3cml0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ3cmFwIiwiY29uc29sZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxHQUFHLEdBQUdDLG1CQUFPLENBQUMsMkJBQUQsQ0FBbkI7O0FBQ0E7O0lBRU1DLEc7OztBQUNGLGlCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsTUFBTDtBQUNIOzs7OzZCQUNRO0FBQ0wsVUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUM3QkMsa0JBQVUsQ0FBQyxZQUFNO0FBQ2JGLGlCQUFPLENBQUMsZUFBRCxDQUFQO0FBQ0gsU0FGUyxDQUFWO0FBR0gsT0FKRCxFQUlHRyxJQUpILENBSVEsVUFBQUMsSUFBSSxFQUFJO0FBQ1pDLGdCQUFRLENBQUNDLEtBQVQsK0JBQW9DWCxHQUFHLENBQUNTLElBQUQsQ0FBdkM7QUFDSCxPQU5EO0FBT0g7Ozs7OztBQUdMLElBQUlQLEdBQUosRzs7Ozs7Ozs7Ozs7QUNsQkFVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDNUJDLFNBQU8sQ0FBQ2YsR0FBUixDQUFZLElBQUlnQixJQUFKLEdBQVdDLGNBQVgsS0FBOEIsSUFBOUIsR0FBcUNILElBQWpEO0FBQ0EsU0FBT0EsSUFBUDtBQUNILENBSEQsQzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJhcHAuYTc5YmE0MTBkZjRmMzNkMDA4YzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2cgPSByZXF1aXJlKCcuL2xvZycpXHJcbmltcG9ydCAnLi9zdHlsZS9pbmRleC5zY3NzJ1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKClcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgnaGVsbG8gd2VicGFjaycpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQud3JpdGUoYDxkaXYgY2xhc3M9XCJtYWluXCI+JHtsb2coZGF0YSl9PC9kaXY+YClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgQXBwKCkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHdyYXApIHtcclxuICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSArICc6ICcgKyB3cmFwKVxyXG4gICAgcmV0dXJuIHdyYXBcclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==