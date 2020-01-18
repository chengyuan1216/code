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

/***/ "./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/typeof.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/typeof.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_a-function.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_a-function.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_add-to-unscopables.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_add-to-unscopables.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.11@core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.11@core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_an-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_an-object.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.11@core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_array-includes.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_array-includes.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_classof.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_classof.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.11@core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.11@core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_cof.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_cof.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_core.js":
/*!***************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_core.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_ctx.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_ctx.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/_core-js@2.6.11@core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_defined.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_defined.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_descriptors.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_descriptors.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.11@core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_dom-create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_dom-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.11@core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.11@core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_enum-bug-keys.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_enum-bug-keys.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_export.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_export.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.11@core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.11@core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.11@core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/_core-js@2.6.11@core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/_core-js@2.6.11@core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_fails.js":
/*!****************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_fails.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_function-to-string.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_function-to-string.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.6.11@core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_global.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_has.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_has.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_hide.js":
/*!***************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_hide.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.11@core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.11@core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_html.js":
/*!***************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_html.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.11@core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_ie8-dom-define.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_ie8-dom-define.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.11@core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.11@core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/_core-js@2.6.11@core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_iobject.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_iobject.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.11@core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_is-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_is-object.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_iter-create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_iter-create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.11@core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/_core-js@2.6.11@core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.11@core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.11@core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_iter-define.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_iter-define.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.11@core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.11@core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/_core-js@2.6.11@core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.11@core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.11@core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/_core-js@2.6.11@core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/_core-js@2.6.11@core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.11@core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_iter-step.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_iter-step.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_iterators.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_iterators.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_library.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_library.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_object-assign.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_object-assign.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.11@core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/_core-js@2.6.11@core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.11@core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_object-create.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_object-create.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.11@core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/_core-js@2.6.11@core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.6.11@core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/_core-js@2.6.11@core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/_core-js@2.6.11@core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_object-dp.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_object-dp.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.11@core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/_core-js@2.6.11@core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.11@core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_object-dps.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_object-dps.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.11@core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.11@core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_object-gops.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_object-gops.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_object-gpo.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_object-gpo.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.11@core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.6.11@core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_object-keys-internal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_object-keys-internal.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.11@core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/_core-js@2.6.11@core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.6.11@core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_object-keys.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_object-keys.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/_core-js@2.6.11@core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_object-pie.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_object-pie.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_object-sap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_object-sap.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.11@core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.11@core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.11@core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_property-desc.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_property-desc.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_redefine.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_redefine.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.11@core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.11@core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.11@core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.11@core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/_core-js@2.6.11@core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.11@core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_set-to-string-tag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_set-to-string-tag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.11@core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.11@core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_shared-key.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_shared-key.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.6.11@core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.11@core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_shared.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_shared.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.11@core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.11@core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.11@core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_to-absolute-index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_to-absolute-index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_to-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_to-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_to-iobject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_to-iobject.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/_core-js@2.6.11@core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.6.11@core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_to-length.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_to-length.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_to-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_to-object.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.6.11@core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_to-primitive.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_to-primitive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.11@core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_uid.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_uid.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/_wks.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/_wks.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.6.11@core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.11@core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.11@core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/es6.array.iterator.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/es6.array.iterator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/_core-js@2.6.11@core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/_core-js@2.6.11@core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.11@core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/_core-js@2.6.11@core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/es6.object.assign.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/es6.object.assign.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.11@core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/es6.object.keys.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/es6.object.keys.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.11@core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/es6.object.to-string.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/es6.object.to-string.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/_core-js@2.6.11@core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.11@core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/_core-js@2.6.11@core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/_core-js@2.6.11@core-js/modules/web.dom.iterable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.11@core-js/modules/web.dom.iterable.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/_core-js@2.6.11@core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.11@core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/_core-js@2.6.11@core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.11@core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.11@core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.11@core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.11@core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


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

/***/ "./src/core/dom/dom.ts":
/*!*****************************!*\
  !*** ./src/core/dom/dom.ts ***!
  \*****************************/
/*! exports provided: default, Fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/_core-js@2.6.11@core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/_core-js@2.6.11@core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/_core-js@2.6.11@core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/_core-js@2.6.11@core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/_core-js@2.6.11@core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5__);






// 当前组件id
var cid = 0; // 注册事件队列

var queue = []; // 为加入dom树子组件

var childNodes = [];
var pending = false;

function flush() {
  if (pending) {
    return;
  }

  pending = true;
  setTimeout(function () {
    task();

    if (childNodes.length) {
      setTimeout(task, 0);
    } else {
      console.timeEnd('test');
      pending = false;
    }
  }, 0);
}

function task() {
  for (var i = 0; i < childNodes.length; i = i + 2) {
    try {
      var placeholder = document.querySelector("[".concat(childNodes[i], "]"));
      var child = childNodes[i + 1];

      if (placeholder && placeholder.parentNode) {
        placeholder.parentNode.replaceChild(child, placeholder);
        childNodes.splice(i, 2);
        i -= 2;
      }
    } catch (e) {
      console.log('error in task: ', e);
    }
  }
}

function appendChild(html, children) {
  // children &&  children.forEach(child => {
  //   if (child.nodeType == 1) {
  //     let placeholder = `componnet-placeholder-${childNodes.length}`
  //     html += `<div ${placeholder}></div>`
  //     childNodes.push(placeholder)
  //     childNodes.push(child)
  //     flush()
  //   } else {
  //     html += Array.isArray(child)? child.join(''): child
  //   }
  // })
  // return html
  children && children.forEach(function (child) {
    if (child.nodeType == 1) {
      var placeholder = "componnet-placeholder-".concat(childNodes.length);
      html += "<div ".concat(placeholder, "></div>");
      childNodes.push(placeholder);
      childNodes.push(child);
      flush();
    } else {
      if (Array.isArray(child)) {
        html = appendChild(html, child);
      } else {
        html += child;
      }
    }
  });
  return html;
}

function dom(tag, attrs) {
  // console.error(tag, attrs, children)
  debugger;

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (typeof tag === 'function') {
    var result = tag(Object.assign({}, attrs, {
      children: children
    })); // return result === 'FRAGMENT' ? children : result

    if (result === 'FRAGMENT') {
      return children;
    } else {
      return function () {
        var div = document.createElement('div');
        div.innerHTML = result;
        var current = null;

        while (queue.length > 0) {
          current = queue.pop();

          if (current) {
            current(div);
          }
        }

        current = null;
        return div.children[0];
      }();
    }
  }

  if (typeof tag === 'string') {
    var html = '';
    html += "<".concat(tag);
    attrs && Object.keys(attrs).forEach(function (key) {
      if (/^on/.test(key)) {
        var handleId = "date-handler-".concat(cid++);
        html += "  ".concat(handleId);

        (function (handleId, key, handler) {
          queue.push(function (parent) {
            var eventName = key.slice(2).toLowerCase();
            var dom = parent.querySelector("[".concat(handleId, "]"));

            if (dom) {
              dom.addEventListener(eventName, handler);
            }
          });
        })(handleId, key, attrs[key]);
      } else {
        html += " ".concat(key, "=\"").concat(attrs[key], "\"");
      }
    });
    html += '>';
    html = appendChild(html, children);
    html += "</".concat(tag, ">");
    return html;
  }

  throw new Error("does not handle ".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(tag)));
}

/* harmony default export */ __webpack_exports__["default"] = (dom);
var Fragment = function Fragment() {
  return 'FRAGMENT';
};

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
/* harmony import */ var _core_dom_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/dom/dom */ "./src/core/dom/dom.ts");




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
HiComponent.EventEmitter = _core_events__WEBPACK_IMPORTED_MODULE_0__["default"];
HiComponent.dom = _core_dom_dom__WEBPACK_IMPORTED_MODULE_3__["default"];
HiComponent.Fragment = _core_dom_dom__WEBPACK_IMPORTED_MODULE_3__["Fragment"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IaUNvbXBvbmVudC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuNy43QEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuNy43QEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX0BiYWJlbF9ydW50aW1lQDcuNy43QEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjYuMTFAY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNi4xMUBjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi42LjExQGNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2NvcmUvY29udGV4dC50cyIsIndlYnBhY2s6Ly9IaUNvbXBvbmVudC8uL3NyYy9jb3JlL2RvbS9kb20udHMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9zcmMvY29yZS9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9zcmMvY29yZS9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vSGlDb21wb25lbnQvLi9zcmMvY29yZS91dGlsLnRzIiwid2VicGFjazovL0hpQ29tcG9uZW50Ly4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJjb21wb25lbnRzIiwiT2JqZWN0IiwiY3JlYXRlIiwiY2lkIiwicXVldWUiLCJjaGlsZE5vZGVzIiwicGVuZGluZyIsImZsdXNoIiwic2V0VGltZW91dCIsInRhc2siLCJsZW5ndGgiLCJjb25zb2xlIiwidGltZUVuZCIsImkiLCJwbGFjZWhvbGRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNoaWxkIiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsInNwbGljZSIsImUiLCJsb2ciLCJhcHBlbmRDaGlsZCIsImh0bWwiLCJjaGlsZHJlbiIsImZvckVhY2giLCJub2RlVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJkb20iLCJ0YWciLCJhdHRycyIsInJlc3VsdCIsImFzc2lnbiIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjdXJyZW50IiwicG9wIiwia2V5cyIsImtleSIsInRlc3QiLCJoYW5kbGVJZCIsImhhbmRsZXIiLCJwYXJlbnQiLCJldmVudE5hbWUiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkVycm9yIiwiRnJhZ21lbnQiLCJFdmVudEVtaXR0ZXIiLCJfZXZlbnRzIiwiZXZlbnQiLCJmbiIsInZtIiwibCIsIm9uIiwib2ZmIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJjYnMiLCJjYiIsInRvQXJyYXkiLCJhcmdzIiwiY2FsbCIsImVycm9yIiwicmVuZGVyIiwid3JhcCIsImFzeW5jIiwiX3JlbmRlciIsImV2ZW50QnVzIiwiZW1pdCIsImxpc3QiLCJzdGFydCIsInJldCIsImNvbnRleHQiLCJIaUNvbXBvbmVudCIsIl9pbml0IiwidGFyZ2V0IiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJkYXRhIiwiY29tcG9uZW50IiwiX2ZsdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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TCxHQUFnQixJQUFJckIsb0RBQUosRUFBaEI7O0FBQ0EsT0FBSzRCLEtBQUw7O0FBQ0EsU0FBTyxJQUFQO0FBQ0g7QUFDRCxJQUFJOUUsR0FBRyxHQUFHLENBQVY7QUFDQSxJQUFJK0UsTUFBTSxHQUFHLElBQWI7QUFDQUYsV0FBVyxDQUFDRyxTQUFaLEdBQXdCO0FBQ3BCQyxhQUFXLEVBQUVKLFdBRE87QUFFcEJWLFFBQU0sRUFBTkEsbURBRm9CO0FBR3BCVyxPQUhvQixtQkFHWjtBQUFBOztBQUNKLFNBQUtQLFFBQUwsQ0FBY2YsRUFBZCxDQUFpQixpQkFBakIsRUFBb0MsVUFBQzBCLElBQUQsRUFBVTtBQUMxQzFFLGFBQU8sQ0FBQ1csR0FBUixDQUFZLGlCQUFaLEVBQStCK0QsSUFBL0IsRUFEMEMsQ0FFMUM7O0FBQ0EsVUFBSUMsU0FBUyxHQUFHckYsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxDQUFoQjtBQUNBb0YsZUFBUyxDQUFDeEMsTUFBVixHQUFtQnVDLElBQUksQ0FBQ3ZDLE1BQXhCO0FBQ0EsV0FBSSxDQUFDaUMsT0FBTCxDQUFhL0UsVUFBYixDQUF3QkcsR0FBRyxFQUEzQixJQUFpQ21GLFNBQWpDO0FBQ0gsS0FORDtBQU9ILEdBWG1CO0FBWXBCQyxRQVpvQixvQkFZWCxDQUNSO0FBYm1CLENBQXhCO0FBZUFQLFdBQVcsQ0FBQzNCLFlBQVosR0FBMkJBLG9EQUEzQjtBQUNBMkIsV0FBVyxDQUFDakQsR0FBWixHQUFrQkEscURBQWxCO0FBQ0FpRCxXQUFXLENBQUM1QixRQUFaLEdBQXVCQSxzREFBdkIsQyIsImZpbGUiOiJIaUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhpQ29tcG9uZW50XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkhpQ29tcG9uZW50XCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4xMScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBTID0gU3ltYm9sKCk7XG4gIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICB2YXIgaXNFbnVtID0gcElFLmY7XG4gIHdoaWxlIChhTGVuID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IGlzRW51bS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuL19mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciB0ZXN0ID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbnRleHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8g5b2T5YmN57uE5Lu2aWRcclxubGV0IGNpZCA9IDA7XHJcbi8vIOazqOWGjOS6i+S7tumYn+WIl1xyXG5sZXQgcXVldWUgPSBbXTtcclxuLy8g5Li65Yqg5YWlZG9t5qCR5a2Q57uE5Lu2XHJcbmxldCBjaGlsZE5vZGVzID0gW107XHJcbmxldCBwZW5kaW5nID0gZmFsc2U7XHJcbmZ1bmN0aW9uIGZsdXNoKCkge1xyXG4gICAgaWYgKHBlbmRpbmcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwZW5kaW5nID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRhc2soKTtcclxuICAgICAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0YXNrLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUudGltZUVuZCgndGVzdCcpO1xyXG4gICAgICAgICAgICBwZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbn1cclxuZnVuY3Rpb24gdGFzaygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkgPSBpICsgMikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske2NoaWxkTm9kZXNbaV19XWApO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZE5vZGVzW2kgKyAxXTtcclxuICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyICYmIHBsYWNlaG9sZGVyLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNoaWxkLCBwbGFjZWhvbGRlcik7XHJcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzLnNwbGljZShpLCAyKTtcclxuICAgICAgICAgICAgICAgIGkgLT0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gdGFzazogJywgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFwcGVuZENoaWxkKGh0bWwsIGNoaWxkcmVuKSB7XHJcbiAgICAvLyBjaGlsZHJlbiAmJiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAvLyAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxKSB7XHJcbiAgICAvLyAgICAgbGV0IHBsYWNlaG9sZGVyID0gYGNvbXBvbm5ldC1wbGFjZWhvbGRlci0ke2NoaWxkTm9kZXMubGVuZ3RofWBcclxuICAgIC8vICAgICBodG1sICs9IGA8ZGl2ICR7cGxhY2Vob2xkZXJ9PjwvZGl2PmBcclxuICAgIC8vICAgICBjaGlsZE5vZGVzLnB1c2gocGxhY2Vob2xkZXIpXHJcbiAgICAvLyAgICAgY2hpbGROb2Rlcy5wdXNoKGNoaWxkKVxyXG4gICAgLy8gICAgIGZsdXNoKClcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBodG1sICs9IEFycmF5LmlzQXJyYXkoY2hpbGQpPyBjaGlsZC5qb2luKCcnKTogY2hpbGRcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICAgIC8vIHJldHVybiBodG1sXHJcbiAgICBjaGlsZHJlbiAmJiBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBgY29tcG9ubmV0LXBsYWNlaG9sZGVyLSR7Y2hpbGROb2Rlcy5sZW5ndGh9YDtcclxuICAgICAgICAgICAgaHRtbCArPSBgPGRpdiAke3BsYWNlaG9sZGVyfT48L2Rpdj5gO1xyXG4gICAgICAgICAgICBjaGlsZE5vZGVzLnB1c2gocGxhY2Vob2xkZXIpO1xyXG4gICAgICAgICAgICBjaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICBmbHVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sID0gYXBwZW5kQ2hpbGQoaHRtbCwgY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSBjaGlsZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGh0bWw7XHJcbn1cclxuZnVuY3Rpb24gZG9tKHRhZywgYXR0cnMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICAvLyBjb25zb2xlLmVycm9yKHRhZywgYXR0cnMsIGNoaWxkcmVuKVxyXG4gICAgZGVidWdnZXI7XHJcbiAgICBpZiAodHlwZW9mIHRhZyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRhZyhPYmplY3QuYXNzaWduKHt9LCBhdHRycywgeyBjaGlsZHJlbiB9KSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHJlc3VsdCA9PT0gJ0ZSQUdNRU5UJyA/IGNoaWxkcmVuIDogcmVzdWx0XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ0ZSQUdNRU5UJykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50KGRpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2LmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdGFnID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGxldCBodG1sID0gJyc7XHJcbiAgICAgICAgaHRtbCArPSBgPCR7dGFnfWA7XHJcbiAgICAgICAgYXR0cnMgJiYgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKC9eb24vLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmRsZUlkID0gYGRhdGUtaGFuZGxlci0ke2NpZCsrfWA7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGAgICR7aGFuZGxlSWR9YDtcclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoaGFuZGxlSWQsIGtleSwgaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goKHBhcmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnROYW1lID0ga2V5LnNsaWNlKDIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkb20gPSBwYXJlbnQucXVlcnlTZWxlY3RvcihgWyR7aGFuZGxlSWR9XWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KShoYW5kbGVJZCwga2V5LCBhdHRyc1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gYCAke2tleX09XCIke2F0dHJzW2tleV19XCJgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaHRtbCArPSAnPic7XHJcbiAgICAgICAgaHRtbCA9IGFwcGVuZENoaWxkKGh0bWwsIGNoaWxkcmVuKTtcclxuICAgICAgICBodG1sICs9IGA8LyR7dGFnfT5gO1xyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBkb2VzIG5vdCBoYW5kbGUgJHt0eXBlb2YgdGFnfWApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGRvbTtcclxuZXhwb3J0IGNvbnN0IEZyYWdtZW50ID0gKCkgPT4gJ0ZSQUdNRU5UJztcclxuIiwiaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCBBcnJheTxzdHJpbmc+fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgICAqL1xyXG4gICAgb24oZXZlbnQsIGZuKSB7XHJcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGV2ZW50Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdm0ub24oZXZlbnRbaV0sIGZuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgKHZtLl9ldmVudHNbZXZlbnRdIHx8ICh2bS5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2bTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgICAqL1xyXG4gICAgb25jZShldmVudCwgZm4pIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICAgICAgICAgIHZtLm9mZihldmVudCwgb24pO1xyXG4gICAgICAgICAgICBmbi5hcHBseSh2bSwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb24uZm4gPSBmbjtcclxuICAgICAgICB2bS5vbihldmVudCwgb24pO1xyXG4gICAgICAgIHJldHVybiB2bTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgQXJyYXk8c3RyaW5nPn0gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAgICAgKi9cclxuICAgIG9mZihldmVudCwgZm4pIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAgICAgLy8gYWxsXHJcbiAgICAgICAgaWYgKGV2ZW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2bS5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhcnJheSBvZiBldmVudHNcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZtLm9mZihldmVudFtpXSwgZm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2bTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICAgICAgICBjb25zdCBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcclxuICAgICAgICBpZiAoIWNicykge1xyXG4gICAgICAgICAgICByZXR1cm4gdm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZm4pIHtcclxuICAgICAgICAgICAgdm0uX2V2ZW50c1tldmVudF0gPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNwZWNpZmljIGhhbmRsZXJcclxuICAgICAgICBsZXQgY2I7XHJcbiAgICAgICAgbGV0IGkgPSBjYnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICAgICAgY2IgPSBjYnNbaV07XHJcbiAgICAgICAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgICAgICAgICAgICBjYnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZtO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XHJcbiAgICAgKi9cclxuICAgIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNicyA9IHZtLl9ldmVudHNbZXZlbnRdO1xyXG4gICAgICAgIGlmIChjYnMpIHtcclxuICAgICAgICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyB0b0FycmF5KGNicykgOiBjYnM7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlciA9IGNic1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzID8gaGFuZGxlci5hcHBseShudWxsLCBhcmdzKSA6IGhhbmRsZXIuY2FsbChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXZlbnQgaGFuZGxlciBmb3IgXCIke2V2ZW50fVwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdm07XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJy4vdXRpbCc7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoaHRtbCwgd3JhcCkge1xyXG4gICAgYXN5bmMoX3JlbmRlciwgdGhpcywgaHRtbCwgd3JhcCk7XHJcbn1cclxuZnVuY3Rpb24gX3JlbmRlcihodG1sLCB3cmFwKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3cmFwKTtcclxuICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3cmFwIOS4jeWtmOWcqCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBodG1sID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcGFyZW50LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGh0bWwpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ldmVudEJ1cy5lbWl0KCdjb250ZXh0Om1vdW50ZWQnLCB7XHJcbiAgICAgICAgcGFyZW50XHJcbiAgICB9KTtcclxufVxyXG4iLCIvKipcclxuICpcclxuICogQHBhcmFtIHthbnl9IGxpc3RcclxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShsaXN0LCBzdGFydCkge1xyXG4gICAgc3RhcnQgPSBzdGFydCB8fCAwO1xyXG4gICAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xyXG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5KGkpO1xyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jKGNiLCBjb250ZXh0LCAuLi5hcmdzKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjYi5jYWxsKGNvbnRleHQsIC4uLmFyZ3MpO1xyXG4gICAgfSwgMCk7XHJcbn1cclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvcmUvZXZlbnRzJztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9jb3JlL3JlbmRlcic7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL2NvcmUvY29udGV4dCc7XHJcbmltcG9ydCBkb20sIHsgRnJhZ21lbnQgfSBmcm9tICcuL2NvcmUvZG9tL2RvbSc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpQ29tcG9uZW50KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yNjY2NicpO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gbmV3IENvbnRleHQoKTtcclxuICAgIHRoaXMuZXZlbnRCdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxufVxyXG5sZXQgY2lkID0gMDtcclxubGV0IHRhcmdldCA9IG51bGw7XHJcbkhpQ29tcG9uZW50LnByb3RvdHlwZSA9IHtcclxuICAgIGNvbnN0cnVjdG9yOiBIaUNvbXBvbmVudCxcclxuICAgIHJlbmRlcixcclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRCdXMub24oJ2NvbnRleHQ6bW91bnRlZCcsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb250ZXh0Om1vdW50ZWQnLCBkYXRhKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5fZmx1c2goKVxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICAgICAgY29tcG9uZW50LnBhcmVudCA9IGRhdGEucGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY29tcG9uZW50c1tjaWQrK10gPSBjb21wb25lbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgX2ZsdXNoKCkge1xyXG4gICAgfVxyXG59O1xyXG5IaUNvbXBvbmVudC5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XHJcbkhpQ29tcG9uZW50LmRvbSA9IGRvbTtcclxuSGlDb21wb25lbnQuRnJhZ21lbnQgPSBGcmFnbWVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==