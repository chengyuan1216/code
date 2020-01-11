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
  console.log('constructor6666');
  this.context = new _core_context__WEBPACK_IMPORTED_MODULE_2__["Context"]();
  this.eventBus = new _core_events__WEBPACK_IMPORTED_MODULE_0__["default"]();

  this._init();

  return this;
}
var cid = 0;
var target = null;
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
HiComponent.EventEmitter = _core_events__WEBPACK_IMPORTED_MODULE_0__["default"]; // HiComponent.target = null

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IaUNvbXBvbmVudC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuNy43QEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuNy43QEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9zcmMvY29yZS9jb250ZXh0LnRzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvZXZlbnRzLnRzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvcmVuZGVyLnRzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvdXRpbC50cyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDb250ZXh0IiwiY29tcG9uZW50cyIsIk9iamVjdCIsImNyZWF0ZSIsIkV2ZW50RW1pdHRlciIsIl9ldmVudHMiLCJldmVudCIsImZuIiwidm0iLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsImxlbmd0aCIsIm9uIiwicHVzaCIsIm9mZiIsImFwcGx5IiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY2JzIiwiY2IiLCJzcGxpY2UiLCJ0b0FycmF5IiwiYXJncyIsImhhbmRsZXIiLCJjYWxsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlbmRlciIsImh0bWwiLCJ3cmFwIiwiYXN5bmMiLCJfcmVuZGVyIiwicGFyZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImV2ZW50QnVzIiwiZW1pdCIsImxpc3QiLCJzdGFydCIsInJldCIsImNvbnRleHQiLCJzZXRUaW1lb3V0IiwiSGlDb21wb25lbnQiLCJsb2ciLCJfaW5pdCIsImNpZCIsInRhcmdldCIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImNvbXBvbmVudCIsIl9mbHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTyxJQUFN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QUFaLEdBQTJCQSxvREFBM0IsQyxDQUNBLDRCIiwiZmlsZSI6IkhpQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSGlDb21wb25lbnRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSGlDb21wb25lbnRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJleHBvcnQgY2xhc3MgQ29udGV4dCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi91dGlsJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEFycmF5PHN0cmluZz59IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gICAgICovXHJcbiAgICBvbihldmVudCwgZm4pIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5vbihldmVudFtpXSwgZm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAodm0uX2V2ZW50c1tldmVudF0gfHwgKHZtLl9ldmVudHNbZXZlbnRdID0gW10pKS5wdXNoKGZuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZtO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gICAgICovXHJcbiAgICBvbmNlKGV2ZW50LCBmbikge1xyXG4gICAgICAgIGNvbnN0IHZtID0gdGhpcztcclxuICAgICAgICBmdW5jdGlvbiBvbigpIHtcclxuICAgICAgICAgICAgdm0ub2ZmKGV2ZW50LCBvbik7XHJcbiAgICAgICAgICAgIGZuLmFwcGx5KHZtLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbi5mbiA9IGZuO1xyXG4gICAgICAgIHZtLm9uKGV2ZW50LCBvbik7XHJcbiAgICAgICAgcmV0dXJuIHZtO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCBBcnJheTxzdHJpbmc+fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgICAqL1xyXG4gICAgb2ZmKGV2ZW50LCBmbikge1xyXG4gICAgICAgIGNvbnN0IHZtID0gdGhpcztcclxuICAgICAgICAvLyBhbGxcclxuICAgICAgICBpZiAoZXZlbnQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFycmF5IG9mIGV2ZW50c1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdm0ub2ZmKGV2ZW50W2ldLCBmbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzcGVjaWZpYyBldmVudFxyXG4gICAgICAgIGNvbnN0IGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xyXG4gICAgICAgIGlmICghY2JzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFmbikge1xyXG4gICAgICAgICAgICB2bS5fZXZlbnRzW2V2ZW50XSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiB2bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3BlY2lmaWMgaGFuZGxlclxyXG4gICAgICAgIGxldCBjYjtcclxuICAgICAgICBsZXQgaSA9IGNicy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgICAgICBjYiA9IGNic1tpXTtcclxuICAgICAgICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgICAgICAgICAgIGNicy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdm07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcclxuICAgICAqL1xyXG4gICAgZW1pdChldmVudCwgLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IHZtID0gdGhpcztcclxuICAgICAgICBsZXQgY2JzID0gdm0uX2V2ZW50c1tldmVudF07XHJcbiAgICAgICAgaWYgKGNicykge1xyXG4gICAgICAgICAgICBjYnMgPSBjYnMubGVuZ3RoID4gMSA/IHRvQXJyYXkoY2JzKSA6IGNicztcclxuICAgICAgICAgICAgY29uc3QgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyID0gY2JzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPyBoYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3MpIDogaGFuZGxlci5jYWxsKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBldmVudCBoYW5kbGVyIGZvciBcIiR7ZXZlbnR9XCJgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2bTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICpcclxuICovXHJcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAnLi91dGlsJztcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihodG1sLCB3cmFwKSB7XHJcbiAgICBhc3luYyhfcmVuZGVyLCB0aGlzLCBodG1sLCB3cmFwKTtcclxufVxyXG5mdW5jdGlvbiBfcmVuZGVyKGh0bWwsIHdyYXApIHtcclxuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdyYXApO1xyXG4gICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dyYXAg5LiN5a2Y5ZyoJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGh0bWwgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICBwYXJlbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaHRtbCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmV2ZW50QnVzLmVtaXQoJ2NvbnRleHQ6bW91bnRlZCcsIHtcclxuICAgICAgICBwYXJlbnRcclxuICAgIH0pO1xyXG59XHJcbiIsIi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge2FueX0gbGlzdFxyXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5KGxpc3QsIHN0YXJ0KSB7XHJcbiAgICBzdGFydCA9IHN0YXJ0IHx8IDA7XHJcbiAgICBsZXQgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnQ7XHJcbiAgICBjb25zdCByZXQgPSBuZXcgQXJyYXkoaSk7XHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXN5bmMoY2IsIGNvbnRleHQsIC4uLmFyZ3MpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNiLmNhbGwoY29udGV4dCwgLi4uYXJncyk7XHJcbiAgICB9LCAwKTtcclxufVxyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29yZS9ldmVudHMnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL2NvcmUvcmVuZGVyJztcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vY29yZS9jb250ZXh0JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlDb21wb25lbnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY29uc3RydWN0b3I2NjY2Jyk7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dCgpO1xyXG4gICAgdGhpcy5ldmVudEJ1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHRoaXMuX2luaXQoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG59XHJcbmxldCBjaWQgPSAwO1xyXG5sZXQgdGFyZ2V0ID0gbnVsbDtcclxuSGlDb21wb25lbnQucHJvdG90eXBlID0ge1xyXG4gICAgY29uc3RydWN0b3I6IEhpQ29tcG9uZW50LFxyXG4gICAgcmVuZGVyLFxyXG4gICAgX2luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudEJ1cy5vbignY29udGV4dDptb3VudGVkJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnRleHQ6bW91bnRlZCcsIGRhdGEpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLl9mbHVzaCgpXHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgICAgICBjb21wb25lbnQucGFyZW50ID0gZGF0YS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jb21wb25lbnRzW2NpZCsrXSA9IGNvbXBvbmVudDtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBfZmx1c2goKSB7XHJcbiAgICB9XHJcbn07XHJcbkhpQ29tcG9uZW50LkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcclxuLy8gSGlDb21wb25lbnQudGFyZ2V0ID0gbnVsbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9