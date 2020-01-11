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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
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

/***/ "./src/core/context.js":
/*!*****************************!*\
  !*** ./src/core/context.js ***!
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

/***/ "./src/core/events.js":
/*!****************************!*\
  !*** ./src/core/events.js ***!
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/core/util.js");




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

      if (!arguments.length) {
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

/***/ "./src/core/render.js":
/*!****************************!*\
  !*** ./src/core/render.js ***!
  \****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/core/util.js");
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

/***/ "./src/core/util.js":
/*!**************************!*\
  !*** ./src/core/util.js ***!
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HiComponent; });
/* harmony import */ var _core_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/events */ "./src/core/events.js");
/* harmony import */ var _core_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/render */ "./src/core/render.js");
/* harmony import */ var _core_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/context */ "./src/core/context.js");



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IaUNvbXBvbmVudC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuNy43QEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuNy43QEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9zcmMvY29yZS9jb250ZXh0LmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvcmVuZGVyLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvdXRpbC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiQ29udGV4dCIsImNvbXBvbmVudHMiLCJjcmVhdGUiLCJFdmVudEVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZlbnQiLCJmbiIsInZtIiwiQXJyYXkiLCJpc0FycmF5IiwibCIsIm9uIiwicHVzaCIsIm9mZiIsImFwcGx5IiwiYXJndW1lbnRzIiwiY2JzIiwiY2IiLCJzcGxpY2UiLCJ0b0FycmF5IiwiYXJncyIsImhhbmRsZXIiLCJjYWxsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlbmRlciIsImh0bWwiLCJ3cmFwIiwiYXN5bmMiLCJfcmVuZGVyIiwicGFyZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImV2ZW50QnVzIiwiZW1pdCIsImxpc3QiLCJzdGFydCIsInJldCIsImNvbnRleHQiLCJzZXRUaW1lb3V0IiwiSGlDb21wb25lbnQiLCJsb2ciLCJfaW5pdCIsImNpZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImNvbXBvbmVudCIsIl9mbHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFB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QWRtQixDQUF4QjtBQWdCQVAsV0FBVyxDQUFDekMsWUFBWixHQUEyQkEsb0RBQTNCLEMiLCJmaWxlIjoiSGlDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIaUNvbXBvbmVudFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIaUNvbXBvbmVudFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImV4cG9ydCBjbGFzcyBDb250ZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7dG9BcnJheX0gZnJvbSAnLi91dGlsJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbClcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgQXJyYXk8c3RyaW5nPn0gZXZlbnQgXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBcclxuICAgICAqL1xyXG4gICAgb24oZXZlbnQsIGZuKSB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5vbihldmVudFtpXSwgZm4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAodm0uX2V2ZW50c1tldmVudF0gfHwgKHZtLl9ldmVudHNbZXZlbnRdID0gW10pKS5wdXNoKGZuKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdm1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gXHJcbiAgICAgKi9cclxuICAgIG9uY2UoZXZlbnQsIGZuKSB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzXHJcbiAgICAgICAgZnVuY3Rpb24gb24gKCkge1xyXG4gICAgICAgICAgICB2bS5vZmYoZXZlbnQsIG9uKVxyXG4gICAgICAgICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBvbi5mbiA9IGZuXHJcbiAgICAgICAgdm0ub24oZXZlbnQsIG9uKVxyXG4gICAgICAgIHJldHVybiB2bVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEFycmF5PHN0cmluZz59IGV2ZW50IFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gXHJcbiAgICAgKi9cclxuICAgIG9mZihldmVudCwgZm4pIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXNcclxuICAgICAgICAvLyBhbGxcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgIHZtLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgICAgICAgICByZXR1cm4gdm1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYXJyYXkgb2YgZXZlbnRzXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICB2bS5vZmYoZXZlbnRbaV0sIGZuKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHZtXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNwZWNpZmljIGV2ZW50XHJcbiAgICAgICAgY29uc3QgY2JzID0gdm0uX2V2ZW50c1tldmVudF1cclxuICAgICAgICBpZiAoIWNicykge1xyXG4gICAgICAgICAgcmV0dXJuIHZtXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZm4pIHtcclxuICAgICAgICAgIHZtLl9ldmVudHNbZXZlbnRdID0gbnVsbFxyXG4gICAgICAgICAgcmV0dXJuIHZtXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcclxuICAgICAgICBsZXQgY2JcclxuICAgICAgICBsZXQgaSA9IGNicy5sZW5ndGhcclxuICAgICAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgICBjYiA9IGNic1tpXVxyXG4gICAgICAgICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgICAgICAgY2JzLnNwbGljZShpLCAxKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdm1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFxyXG4gICAgICovXHJcbiAgICBlbWl0KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzXHJcbiAgICAgICAgbGV0IGNicyA9IHZtLl9ldmVudHNbZXZlbnRdXHJcbiAgICAgICAgaWYgKGNicykge1xyXG4gICAgICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyB0b0FycmF5KGNicykgOiBjYnNcclxuICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSlcclxuICAgICAgICAgIGxldCBoYW5kbGVyXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBoYW5kbGVyID0gY2JzW2ldXHJcbiAgICAgICAgICAgICAgYXJncyA/IGhhbmRsZXIuYXBwbHkobnVsbCwgYXJncykgOiBoYW5kbGVyLmNhbGwobnVsbClcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXZlbnQgaGFuZGxlciBmb3IgXCIke2V2ZW50fVwiYClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdm1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBcclxuICovXHJcbmltcG9ydCB7YXN5bmN9IGZyb20gJy4vdXRpbCdcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihodG1sLCB3cmFwKSB7XHJcbiAgICBhc3luYyhfcmVuZGVyLCB0aGlzLCBodG1sLCB3cmFwKVxyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVuZGVyKGh0bWwsIHdyYXApIHtcclxuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdyYXApXHJcbiAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignd3JhcCDkuI3lrZjlnKgnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgaHRtbCA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHBhcmVudC5pbm5lckhUTUwgPSBodG1sXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChodG1sKVxyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudEJ1cy5lbWl0KCdjb250ZXh0Om1vdW50ZWQnLCB7XHJcbiAgICAgICAgcGFyZW50XHJcbiAgICB9KVxyXG59XHJcblxyXG4iLCIvKipcclxuICogXHJcbiAqIEBwYXJhbSB7YW55fSBsaXN0IFxyXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheSAobGlzdCwgc3RhcnQpIHtcclxuICAgIHN0YXJ0ID0gc3RhcnQgfHwgMFxyXG4gICAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0XHJcbiAgICBjb25zdCByZXQgPSBuZXcgQXJyYXkoaSlcclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3luYyhjYiwgY29udGV4dCwgLi4uYXJncykge1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjYi5jYWxsKGNvbnRleHQsIC4uLmFyZ3MpXHJcbiAgfSwgMClcclxufVxyXG4gICIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb3JlL2V2ZW50cydcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJy4vY29yZS9yZW5kZXInXHJcbmltcG9ydCB7Q29udGV4dH0gZnJvbSAnLi9jb3JlL2NvbnRleHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaUNvbXBvbmVudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcjQ0NDQnKVxyXG4gICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQoKVxyXG4gICAgdGhpcy5ldmVudEJ1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gICAgdGhpcy5faW5pdCgpXHJcbn1cclxuXHJcbmxldCBjaWQgPSAwXHJcbkhpQ29tcG9uZW50LnByb3RvdHlwZSA9IHtcclxuICAgIGNvbnN0cnVjdG9yOiBIaUNvbXBvbmVudCxcclxuICAgIHJlbmRlcixcclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMub24oJ2NvbnRleHQ6bW91bnRlZCcsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29udGV4dDptb3VudGVkJywgZGF0YSlcclxuICAgICAgICAgICAgLy8gdGhpcy5fZmx1c2goKVxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxyXG4gICAgICAgICAgICBjb21wb25lbnQucGFyZW50ID0gZGF0YS5wYXJlbnRcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNvbXBvbmVudHNbY2lkKytdID0gY29tcG9uZW50XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBfZmx1c2goKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuSGlDb21wb25lbnQuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyXHJcblxyXG4gIl0sInNvdXJjZVJvb3QiOiIifQ==