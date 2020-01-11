(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HiComponent"] = factory();
	else
		root["HiComponent"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/classCallCheck.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/classCallCheck.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/createClass.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/createClass.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./src/core/context.ts":
/*!*****************************!*\
  !*** ./src/core/context.ts ***!
  \*****************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Context =
/*#__PURE__*/
function () {
  function Context() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Context);

    this.components = Object.create(null);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Context, [{
    key: "init",
    value: function init() {}
  }]);

  return Context;
}();

/***/ }),

/***/ "./src/core/events.ts":
/*!****************************!*\
  !*** ./src/core/events.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEmitter; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/core/util.ts");




var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EventEmitter);

    this._events = Object.create(null);
  }
  /**
   *
   * @param {string | Array<string>} event
   * @param {Function} fn
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EventEmitter, [{
    key: "on",
    value: function on(event, fn) {
      var vm = this;

      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
      }

      return vm;
    }
    /**
     *
     * @param {string} event
     * @param {Function} fn
     */

  }, {
    key: "once",
    value: function once(event, fn) {
      var vm = this;

      function on() {
        vm.off(event, on);
        fn.apply(vm, arguments);
      }

      on.fn = fn;
      vm.on(event, on);
      return vm;
    }
    /**
     *
     * @param {string | Array<string>} event
     * @param {Function} fn
     */

  }, {
    key: "off",
    value: function off(event, fn) {
      var vm = this; // all

      if (event == undefined) {
        vm._events = Object.create(null);
        return vm;
      } // array of events


      if (Array.isArray(event)) {
        for (var _i = 0, l = event.length; _i < l; _i++) {
          vm.off(event[_i], fn);
        }

        return vm;
      } // specific event


      var cbs = vm._events[event];

      if (!cbs) {
        return vm;
      }

      if (!fn) {
        vm._events[event] = null;
        return vm;
      } // specific handler


      var cb;
      var i = cbs.length;

      while (i--) {
        cb = cbs[i];

        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break;
        }
      }

      return vm;
    }
    /**
     *
     * @param {string} event
     */

  }, {
    key: "emit",
    value: function emit(event) {
      var vm = this;
      var cbs = vm._events[event];

      if (cbs) {
        cbs = cbs.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["toArray"])(cbs) : cbs;
        var args = Object(_util__WEBPACK_IMPORTED_MODULE_2__["toArray"])(arguments, 1);
        var handler;

        for (var i = 0, l = cbs.length; i < l; i++) {
          try {
            handler = cbs[i];
            args ? handler.apply(null, args) : handler.call(null);
          } catch (e) {
            console.error("event handler for \"".concat(event, "\""));
            console.error(e);
          }
        }
      }

      return vm;
    }
  }]);

  return EventEmitter;
}();



/***/ }),

/***/ "./src/core/render.ts":
/*!****************************!*\
  !*** ./src/core/render.ts ***!
  \****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/core/util.ts");
/**
 *
 */

function render(html, wrap) {
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["async"])(_render, this, html, wrap);
}

function _render(html, wrap) {
  var parent = document.querySelector(wrap);

  if (!parent) {
    throw new Error('wrap 不存在');
  }

  if (typeof html == 'string') {
    parent.innerHTML = html;
  } else {
    parent.innerHTML = '';
    parent.appendChild(html);
  }

  this.eventBus.emit('context:mounted', {
    parent: parent
  });
}

/***/ }),

/***/ "./src/core/util.ts":
/*!**************************!*\
  !*** ./src/core/util.ts ***!
  \**************************/
/*! exports provided: toArray, async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/**
 *
 * @param {any} list
 * @param {number} start
 */
function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
function async(cb, context) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  setTimeout(function () {
    cb.call.apply(cb, [context].concat(args));
  }, 0);
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HiComponent; });
/* harmony import */ var _core_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/events */ "./src/core/events.ts");
/* harmony import */ var _core_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/render */ "./src/core/render.ts");
/* harmony import */ var _core_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/context */ "./src/core/context.ts");



function HiComponent() {
  console.log('constructor4444');
  this.context = new _core_context__WEBPACK_IMPORTED_MODULE_2__["Context"]();
  this.eventBus = new _core_events__WEBPACK_IMPORTED_MODULE_0__["default"]();

  this._init();
}
var cid = 0;
HiComponent.prototype = {
  constructor: HiComponent,
  render: _core_render__WEBPACK_IMPORTED_MODULE_1__["render"],
  _init: function _init() {
    var _this = this;

    this.eventBus.on('context:mounted', function (data) {
      console.log('context:mounted', data); // this._flush()

      var component = Object.create(null);
      component.parent = data.parent;
      _this.context.components[cid++] = component;
    });
  },
  _flush: function _flush() {}
};
HiComponent.EventEmitter = _core_events__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IaUNvbXBvbmVudC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuNy43QEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuNy43QEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9zcmMvY29yZS9jb250ZXh0LnRzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvZXZlbnRzLnRzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvcmVuZGVyLnRzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvdXRpbC50cyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY29tcG9uZW50cyIsIk9iamVjdCIsImNyZWF0ZSIsIkV2ZW50RW1pdHRlciIsIl9ldmVudHMiLCJldmVudCIsImZuIiwidm0iLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsImxlbmd0aCIsIm9uIiwicHVzaCIsIm9mZiIsImFwcGx5IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY2JzIiwiY2IiLCJzcGxpY2UiLCJ0b0FycmF5IiwiYXJncyIsImhhbmRsZXIiLCJjYWxsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlbmRlciIsImh0bWwiLCJ3cmFwIiwiYXN5bmMiLCJfcmVuZGVyIiwicGFyZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImV2ZW50QnVzIiwiZW1pdCIsImxpc3QiLCJzdGFydCIsInJldCIsImNvbnRleHQiLCJzZXRUaW1lb3V0IiwiSGlDb21wb25lbnQiLCJsb2ciLCJfaW5pdCIsImNpZCIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImNvbXBvbmVudCIsIl9mbHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTyxJQUFNQSxPQUFiO0FB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ZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhpQ29tcG9uZW50XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhpQ29tcG9uZW50XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZXhwb3J0IGNsYXNzIENvbnRleHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCBBcnJheTxzdHJpbmc+fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgICAqL1xyXG4gICAgb24oZXZlbnQsIGZuKSB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdm0ub24oZXZlbnRbaV0sIGZuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2bTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgICAqL1xyXG4gICAgb25jZShldmVudCwgZm4pIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICAgICAgICAgIHZtLm9mZihldmVudCwgb24pO1xyXG4gICAgICAgICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb24uZm4gPSBmbjtcclxuICAgICAgICB2bS5vbihldmVudCwgb24pO1xyXG4gICAgICAgIHJldHVybiB2bTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgQXJyYXk8c3RyaW5nPn0gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAgICAgKi9cclxuICAgIG9mZihldmVudCwgZm4pIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAgICAgLy8gYWxsXHJcbiAgICAgICAgaWYgKGV2ZW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhcnJheSBvZiBldmVudHNcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZtLm9mZihldmVudFtpXSwgZm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICAgICAgICBjb25zdCBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcclxuICAgICAgICBpZiAoIWNicykge1xyXG4gICAgICAgICAgICByZXR1cm4gdm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZm4pIHtcclxuICAgICAgICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcclxuICAgICAgICBsZXQgY2I7XHJcbiAgICAgICAgbGV0IGkgPSBjYnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgICAgY2IgPSBjYnNbaV07XHJcbiAgICAgICAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgICAgICAgICAgICBjYnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZtO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XHJcbiAgICAgKi9cclxuICAgIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xyXG4gICAgICAgIGlmIChjYnMpIHtcclxuICAgICAgICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyB0b0FycmF5KGNicykgOiBjYnM7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlciA9IGNic1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzID8gaGFuZGxlci5hcHBseShudWxsLCBhcmdzKSA6IGhhbmRsZXIuY2FsbChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXZlbnQgaGFuZGxlciBmb3IgXCIke2V2ZW50fVwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdm07XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJy4vdXRpbCc7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoaHRtbCwgd3JhcCkge1xyXG4gICAgYXN5bmMoX3JlbmRlciwgdGhpcywgaHRtbCwgd3JhcCk7XHJcbn1cclxuZnVuY3Rpb24gX3JlbmRlcihodG1sLCB3cmFwKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3cmFwKTtcclxuICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3cmFwIOS4jeWtmOWcqCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBodG1sID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcGFyZW50LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGh0bWwpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudEJ1cy5lbWl0KCdjb250ZXh0Om1vdW50ZWQnLCB7XHJcbiAgICAgICAgcGFyZW50XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKipcclxuICpcclxuICogQHBhcmFtIHthbnl9IGxpc3RcclxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShsaXN0LCBzdGFydCkge1xyXG4gICAgc3RhcnQgPSBzdGFydCB8fCAwO1xyXG4gICAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xyXG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5KGkpO1xyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jKGNiLCBjb250ZXh0LCAuLi5hcmdzKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjYi5jYWxsKGNvbnRleHQsIC4uLmFyZ3MpO1xyXG4gICAgfSwgMCk7XHJcbn1cclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvcmUvZXZlbnRzJztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9jb3JlL3JlbmRlcic7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL2NvcmUvY29udGV4dCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpQ29tcG9uZW50KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yNDQ0NCcpO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQoKTtcclxuICAgIHRoaXMuZXZlbnRCdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbn1cclxubGV0IGNpZCA9IDA7XHJcbkhpQ29tcG9uZW50LnByb3RvdHlwZSA9IHtcclxuICAgIGNvbnN0cnVjdG9yOiBIaUNvbXBvbmVudCxcclxuICAgIHJlbmRlcixcclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMub24oJ2NvbnRleHQ6bW91bnRlZCcsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb250ZXh0Om1vdW50ZWQnLCBkYXRhKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5fZmx1c2goKVxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICAgICAgY29tcG9uZW50LnBhcmVudCA9IGRhdGEucGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY29tcG9uZW50c1tjaWQrK10gPSBjb21wb25lbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgX2ZsdXNoKCkge1xyXG4gICAgfVxyXG59O1xyXG5IaUNvbXBvbmVudC5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=