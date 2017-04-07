/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _common = __webpack_require__(1);
	
	var _common2 = _interopRequireDefault(_common);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import twoD from './twoD';
	
	module.exports = {
	  common: _common2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _actions = __webpack_require__(2);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _easing = __webpack_require__(5);
	
	var _easing2 = _interopRequireDefault(_easing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  actions: _actions2.default,
	  // activities,
	  // behaviours,
	  // counters,
	  // debug,
	  // displayObjects,
	  easing: _easing2.default
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Age = __webpack_require__(3);
	
	var _Age2 = _interopRequireDefault(_Age);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  Age: _Age2.default
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ActionBase2 = __webpack_require__(4);
	
	var _ActionBase3 = _interopRequireDefault(_ActionBase2);
	
	var _easing2 = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Age = function (_ActionBase) {
	  _inherits(Age, _ActionBase);
	
	  /**
	   * The constructor creates an Age action for use by an emitter.
	   * To add an Age to all particles created by an emitter, use the
	   * emitter's addAction method.
	   *
	   * @param easing an easing function to use to modify the
	   * energy curve over the lifetime of the particle. The default
	   * null produces a linear response with no easing.
	   *
	   * @see org.flintparticles.common.emitters.Emitter#addAction()
	   */
	  function Age(easing) {
	    _classCallCheck(this, Age);
	
	    var _this = _possibleConstructorReturn(this, (Age.__proto__ || Object.getPrototypeOf(Age)).call(this));
	
	    if (easing == null) {
	      _this._easing = _easing2.Linear.easeNone;
	    } else {
	      _this._easing = easing;
	    }
	    return _this;
	  }
	
	  /**
	   * The easing function used to modify the energy over the
	   * lifetime of the particle.
	   */
	
	
	  _createClass(Age, [{
	    key: 'update',
	
	
	    /**
	     * Sets the energy of the particle based on its age and the easing function.
	     *
	     * <p>This method is called by the emitter and need not be called by the
	     * user</p>
	     *
	     * @param emitter The Emitter that created the particle.
	     * @param particle The particle to be updated.
	     * @param time The duration of the frame - used for time based updates.
	     *
	     * @see org.flintparticles.common.actions.Action#update()
	     */
	    value: function update(emitter, particle, time) {
	      particle.age += time;
	      if (particle.age >= particle.lifetime) {
	        particle.energy = 0;
	        particle.isDead = true;
	      } else {
	        particle.energy = _easing(particle.age, 1, -1, particle.lifetime);
	      }
	    }
	  }, {
	    key: 'easing',
	    get: function get() {
	      return this._easing;
	    },
	    set: function set(value) {
	      this._easing = value;
	    }
	  }]);
	
	  return Age;
	}(_ActionBase3.default);
	
	exports.default = Age;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ActionBase = function () {
	  /**
	   * The constructor creates an ActionBase object. But you shouldn't use it
	   * directly because the ActionBase class is abstract.
	   */
	  function ActionBase() {
	    _classCallCheck(this, ActionBase);
	
	    this._priority = 0;
	  }
	
	  /**
	   * Returns a default priority of 0 for this action. Derived classes
	   * override this method if they want a different default priority.
	   *
	   */
	
	
	  _createClass(ActionBase, [{
	    key: "addedToEmitter",
	
	
	    /**
	     * This method does nothing. Some derived classes override this method
	     * to perform actions when the action is added to an emitter.
	     *
	     * @param emitter The Emitter that the Action was added to.
	     *
	     */
	    value: function addedToEmitter(emitter) {}
	
	    /**
	     * This method does nothing. Some derived classes override this method
	     * to perform actions when the action is removed from the emitter.
	     *
	     * @param emitter The Emitter that the Action was removed from.
	     *
	     */
	
	  }, {
	    key: "removedFromEmitter",
	    value: function removedFromEmitter(emitter) {}
	
	    /**
	     * This method does nothing. All derived classes override this method
	     * to update each particle every frame.
	     *
	     * @param emitter The Emitter that created the particle.
	     * @param particle The particle to be updated.
	     * @param time The duration of the frame - used for time based updates.
	     *
	     */
	
	  }, {
	    key: "update",
	    value: function update(emitter, particle, time) {}
	  }, {
	    key: "priority",
	    get: function get() {
	      return this._priority;
	    },
	    set: function set(value) {
	      this._priority = value;
	    }
	  }]);
	
	  return ActionBase;
	}();
	
	exports.default = ActionBase;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Back = __webpack_require__(6);
	
	var _Back2 = _interopRequireDefault(_Back);
	
	var _Bounce = __webpack_require__(7);
	
	var _Bounce2 = _interopRequireDefault(_Bounce);
	
	var _Circular = __webpack_require__(8);
	
	var _Circular2 = _interopRequireDefault(_Circular);
	
	var _Cubic = __webpack_require__(9);
	
	var _Cubic2 = _interopRequireDefault(_Cubic);
	
	var _Elastic = __webpack_require__(10);
	
	var _Elastic2 = _interopRequireDefault(_Elastic);
	
	var _Linear = __webpack_require__(11);
	
	var _Linear2 = _interopRequireDefault(_Linear);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  Back: _Back2.default,
	  Bounce: _Bounce2.default,
	  Circular: _Circular2.default,
	  Cubic: _Cubic2.default,
	  Elastic: _Elastic2.default,
	  Linear: _Linear2.default
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Back = function () {
	  function Back() {
	    _classCallCheck(this, Back);
	  }
	
	  _createClass(Back, null, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
	
	      return c * (t /= d) * t * ((s + 1) * t - s) + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
	
	      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;
	
	      if ((t /= d * 0.5) < 1) {
	        return c * 0.5 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
	      }
	      return c * 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	    }
	  }]);
	
	  return Back;
	}();
	
	exports.default = Back;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Bounce = function () {
	  function Bounce() {
	    _classCallCheck(this, Bounce);
	  }
	
	  _createClass(Bounce, null, [{
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      if ((t /= d) < 1 / 2.75) {
	        return c * (7.5625 * t * t) + b;
	      } else if (t < 2 / 2.75) {
	        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
	      } else if (t < 2.5 / 2.75) {
	        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
	      } else {
	        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
	      }
	    }
	  }, {
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return c - easeOut(d - t, 0, c, d) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      if (t < d * 0.5) {
	        return easeIn(t * 2, 0, c, d) * 0.5 + b;
	      } else {
	        return easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
	      }
	    }
	  }]);
	
	  return Bounce;
	}();
	
	exports.default = Bounce;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Circular = function () {
	  function Circular() {
	    _classCallCheck(this, Circular);
	  }
	
	  _createClass(Circular, null, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      if ((t /= d * 0.5) < 1) {
	        return -c * 0.5 * (Math.sqrt(1 - t * t) - 1) + b;
	      }
	      return c * 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	    }
	  }]);
	
	  return Circular;
	}();
	
	exports.default = Circular;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Cubic = function () {
	  function Cubic() {
	    _classCallCheck(this, Cubic);
	  }
	
	  _createClass(Cubic, null, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return c * (t /= d) * t * t + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      return c * ((t = t / d - 1) * t * t + 1) + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      if ((t /= d * 0.5) < 1) {
	        return c * 0.5 * t * t * t + b;
	      }
	      return c * 0.5 * ((t -= 2) * t * t + 2) + b;
	    }
	  }]);
	
	  return Cubic;
	}();
	
	exports.default = Cubic;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Elastic = function () {
	  function Elastic() {
	    _classCallCheck(this, Elastic);
	  }
	
	  _createClass(Elastic, null, [{
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	      var p = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	      if (t === 0) {
	        return b;
	      }
	      if ((t /= d) === 1) {
	        return b + c;
	      }
	      if (!p) {
	        p = d * 0.3;
	      }
	      var s = void 0;
	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p * 0.25;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(c / a);
	      }
	
	      return -(a * Math.pow(2, 10 * --t) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	      var p = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	      if (t === 0) {
	        return b;
	      }
	      if ((t /= d) === 1) {
	        return b + c;
	      }
	      if (!p) {
	        p = d * 0.3;
	      }
	      var s = void 0;
	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p * 0.25;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(c / a);
	      }
	
	      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	      var p = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
	      if (t === 0) {
	        return b;
	      }
	      if ((t /= d * 0.5) === 2) {
	        return b + c;
	      }
	      if (!p) {
	        p = d * (0.3 * 1.5);
	      }
	      var s = void 0;
	      if (!a || a < Math.abs(c)) {
	        a = c;
	        s = p * 0.25;
	      } else {
	        s = p / (2 * Math.PI) * Math.asin(c / a);
	      }
	
	      if (t < 1) {
	        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	      }
	
	      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
	    }
	  }]);
	
	  return Elastic;
	}();
	
	exports.default = Elastic;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Linear = function () {
	  function Linear() {
	    _classCallCheck(this, Linear);
	  }
	
	  _createClass(Linear, null, [{
	    key: "easeNone",
	    value: function easeNone(t, b, c, d) {
	      return c * t / d + b;
	    }
	  }, {
	    key: "easeIn",
	    value: function easeIn(t, b, c, d) {
	      return c * t / d + b;
	    }
	  }, {
	    key: "easeOut",
	    value: function easeOut(t, b, c, d) {
	      return c * t / d + b;
	    }
	  }, {
	    key: "easeInOut",
	    value: function easeInOut(t, b, c, d) {
	      return c * t / d + b;
	    }
	  }]);
	
	  return Linear;
	}();
	
	exports.default = Linear;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTFlMTAwZjgzMmYzYzg3NDZjNjMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9hY3Rpb25zL0FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vYWN0aW9ucy9BY3Rpb25CYXNlLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9lYXNpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2Vhc2luZy9CYWNrLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9lYXNpbmcvQm91bmNlLmpzIiwid2VicGFjazovLy8uL2NvbW1vbi9lYXNpbmcvQ2lyY3VsYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2Vhc2luZy9DdWJpYy5qcyIsIndlYnBhY2s6Ly8vLi9jb21tb24vZWFzaW5nL0VsYXN0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2Vhc2luZy9MaW5lYXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNvbW1vbiIsImFjdGlvbnMiLCJlYXNpbmciLCJBZ2UiLCJfZWFzaW5nIiwiZWFzZU5vbmUiLCJlbWl0dGVyIiwicGFydGljbGUiLCJ0aW1lIiwiYWdlIiwibGlmZXRpbWUiLCJlbmVyZ3kiLCJpc0RlYWQiLCJ2YWx1ZSIsIkFjdGlvbkJhc2UiLCJfcHJpb3JpdHkiLCJCYWNrIiwiQm91bmNlIiwiQ2lyY3VsYXIiLCJDdWJpYyIsIkVsYXN0aWMiLCJMaW5lYXIiLCJ0IiwiYiIsImMiLCJkIiwicyIsImVhc2VPdXQiLCJlYXNlSW4iLCJNYXRoIiwic3FydCIsImEiLCJwIiwiYWJzIiwiUEkiLCJhc2luIiwicG93Iiwic2luIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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dkI7QUFDRDs7Ozs7O21CQWhCa0JGLE0iLCJmaWxlIjoiZmxpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMWUxMDBmODMyZjNjODc0NmM2MyIsImltcG9ydCBjb21tb24gZnJvbSAnLi9jb21tb24nO1xuLy8gaW1wb3J0IHR3b0QgZnJvbSAnLi90d29EJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbW1vbixcbiAgLy8gdHdvRCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4vZWFzaW5nJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFjdGlvbnMsXG4gIC8vIGFjdGl2aXRpZXMsXG4gIC8vIGJlaGF2aW91cnMsXG4gIC8vIGNvdW50ZXJzLFxuICAvLyBkZWJ1ZyxcbiAgLy8gZGlzcGxheU9iamVjdHMsXG4gIGVhc2luZyxcbiAgLy8gZW1pdHRlcnMsXG4gIC8vIGV2ZW50cyxcbiAgLy8gaW5pdGlhbGl6ZXJzLFxuICAvLyBwYXJ0aWNsZXMsXG4gIC8vIHJlbmRlcmVycyxcbiAgLy8gdXRpbHNcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vaW5kZXguanMiLCJpbXBvcnQgQWdlIGZyb20gJy4vQWdlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFnZSxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IEFjdGlvbkJhc2UgZnJvbSAnLi9BY3Rpb25CYXNlJztcbmltcG9ydCB7IExpbmVhciwgQm91bmNlIH0gZnJvbSAnLi4vZWFzaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlIGV4dGVuZHMgQWN0aW9uQmFzZSB7XG5cbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBjcmVhdGVzIGFuIEFnZSBhY3Rpb24gZm9yIHVzZSBieSBhbiBlbWl0dGVyLlxuICAgKiBUbyBhZGQgYW4gQWdlIHRvIGFsbCBwYXJ0aWNsZXMgY3JlYXRlZCBieSBhbiBlbWl0dGVyLCB1c2UgdGhlXG4gICAqIGVtaXR0ZXIncyBhZGRBY3Rpb24gbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0gZWFzaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0byB1c2UgdG8gbW9kaWZ5IHRoZVxuICAgKiBlbmVyZ3kgY3VydmUgb3ZlciB0aGUgbGlmZXRpbWUgb2YgdGhlIHBhcnRpY2xlLiBUaGUgZGVmYXVsdFxuICAgKiBudWxsIHByb2R1Y2VzIGEgbGluZWFyIHJlc3BvbnNlIHdpdGggbm8gZWFzaW5nLlxuICAgKlxuICAgKiBAc2VlIG9yZy5mbGludHBhcnRpY2xlcy5jb21tb24uZW1pdHRlcnMuRW1pdHRlciNhZGRBY3Rpb24oKVxuICAgKi9cbiAgY29uc3RydWN0b3IoZWFzaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoIGVhc2luZyA9PSBudWxsICkge1xuICAgICAgdGhpcy5fZWFzaW5nID0gTGluZWFyLmVhc2VOb25lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lYXNpbmcgPSBlYXNpbmc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBlYXNpbmcgZnVuY3Rpb24gdXNlZCB0byBtb2RpZnkgdGhlIGVuZXJneSBvdmVyIHRoZVxuICAgKiBsaWZldGltZSBvZiB0aGUgcGFydGljbGUuXG4gICAqL1xuICBnZXQgZWFzaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9lYXNpbmc7XG4gIH1cbiAgc2V0IGVhc2luZyggdmFsdWUgKSB7XG4gICAgdGhpcy5fZWFzaW5nID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZW5lcmd5IG9mIHRoZSBwYXJ0aWNsZSBiYXNlZCBvbiBpdHMgYWdlIGFuZCB0aGUgZWFzaW5nIGZ1bmN0aW9uLlxuICAgKlxuICAgKiA8cD5UaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlIGVtaXR0ZXIgYW5kIG5lZWQgbm90IGJlIGNhbGxlZCBieSB0aGVcbiAgICogdXNlcjwvcD5cbiAgICpcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIEVtaXR0ZXIgdGhhdCBjcmVhdGVkIHRoZSBwYXJ0aWNsZS5cbiAgICogQHBhcmFtIHBhcnRpY2xlIFRoZSBwYXJ0aWNsZSB0byBiZSB1cGRhdGVkLlxuICAgKiBAcGFyYW0gdGltZSBUaGUgZHVyYXRpb24gb2YgdGhlIGZyYW1lIC0gdXNlZCBmb3IgdGltZSBiYXNlZCB1cGRhdGVzLlxuICAgKlxuICAgKiBAc2VlIG9yZy5mbGludHBhcnRpY2xlcy5jb21tb24uYWN0aW9ucy5BY3Rpb24jdXBkYXRlKClcbiAgICovXG4gIHVwZGF0ZShlbWl0dGVyLCBwYXJ0aWNsZSwgdGltZSkge1xuICAgIHBhcnRpY2xlLmFnZSArPSB0aW1lO1xuICAgIGlmKHBhcnRpY2xlLmFnZSA+PSBwYXJ0aWNsZS5saWZldGltZSkge1xuICAgICAgcGFydGljbGUuZW5lcmd5ID0gMDtcbiAgICAgIHBhcnRpY2xlLmlzRGVhZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRpY2xlLmVuZXJneSA9IF9lYXNpbmcoIHBhcnRpY2xlLmFnZSwgMSwgLTEsIHBhcnRpY2xlLmxpZmV0aW1lICk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9hY3Rpb25zL0FnZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkJhc2Uge1xuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdG9yIGNyZWF0ZXMgYW4gQWN0aW9uQmFzZSBvYmplY3QuIEJ1dCB5b3Ugc2hvdWxkbid0IHVzZSBpdFxuICAgKiBkaXJlY3RseSBiZWNhdXNlIHRoZSBBY3Rpb25CYXNlIGNsYXNzIGlzIGFic3RyYWN0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBkZWZhdWx0IHByaW9yaXR5IG9mIDAgZm9yIHRoaXMgYWN0aW9uLiBEZXJpdmVkIGNsYXNzZXNcbiAgICogb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSB3YW50IGEgZGlmZmVyZW50IGRlZmF1bHQgcHJpb3JpdHkuXG4gICAqXG4gICAqL1xuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFNvbWUgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kXG4gICAqIHRvIHBlcmZvcm0gYWN0aW9ucyB3aGVuIHRoZSBhY3Rpb24gaXMgYWRkZWQgdG8gYW4gZW1pdHRlci5cbiAgICpcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIEVtaXR0ZXIgdGhhdCB0aGUgQWN0aW9uIHdhcyBhZGRlZCB0by5cbiAgICpcbiAgICovXG4gIGFkZGVkVG9FbWl0dGVyKGVtaXR0ZXIpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIFNvbWUgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kXG4gICAqIHRvIHBlcmZvcm0gYWN0aW9ucyB3aGVuIHRoZSBhY3Rpb24gaXMgcmVtb3ZlZCBmcm9tIHRoZSBlbWl0dGVyLlxuICAgKlxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgRW1pdHRlciB0aGF0IHRoZSBBY3Rpb24gd2FzIHJlbW92ZWQgZnJvbS5cbiAgICpcbiAgICovXG4gIHJlbW92ZWRGcm9tRW1pdHRlcihlbWl0dGVyKSB7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLiBBbGwgZGVyaXZlZCBjbGFzc2VzIG92ZXJyaWRlIHRoaXMgbWV0aG9kXG4gICAqIHRvIHVwZGF0ZSBlYWNoIHBhcnRpY2xlIGV2ZXJ5IGZyYW1lLlxuICAgKlxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgRW1pdHRlciB0aGF0IGNyZWF0ZWQgdGhlIHBhcnRpY2xlLlxuICAgKiBAcGFyYW0gcGFydGljbGUgVGhlIHBhcnRpY2xlIHRvIGJlIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB0aW1lIFRoZSBkdXJhdGlvbiBvZiB0aGUgZnJhbWUgLSB1c2VkIGZvciB0aW1lIGJhc2VkIHVwZGF0ZXMuXG4gICAqXG4gICAqL1xuICB1cGRhdGUoZW1pdHRlciwgcGFydGljbGUsIHRpbWUpIHtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2FjdGlvbnMvQWN0aW9uQmFzZS5qcyIsImltcG9ydCBCYWNrIGZyb20gJy4vQmFjayc7XG5pbXBvcnQgQm91bmNlIGZyb20gJy4vQm91bmNlJztcbmltcG9ydCBDaXJjdWxhciBmcm9tICcuL0NpcmN1bGFyJztcbmltcG9ydCBDdWJpYyBmcm9tICcuL0N1YmljJztcbmltcG9ydCBFbGFzdGljIGZyb20gJy4vRWxhc3RpYyc7XG5pbXBvcnQgTGluZWFyIGZyb20gJy4vTGluZWFyJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJhY2ssXG4gIEJvdW5jZSxcbiAgQ2lyY3VsYXIsXG4gIEN1YmljLFxuICBFbGFzdGljLFxuICBMaW5lYXJcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9lYXNpbmcvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrIHtcbiAgc3RhdGljIGVhc2VJbih0LCBiLCBjLCBkLCBzID0gMS43MDE1OCkge1xuICAgIHJldHVybiBjICogKCB0IC89IGQgKSAqIHQgKiAoICggcyArIDEgKSAqIHQgLSBzICkgKyBiO1xuICB9XG5cbiAgc3RhdGljIGVhc2VPdXQodCwgYiwgYywgZCwgcyA9IDEuNzAxNTgpIHtcbiAgICByZXR1cm4gYyAqICggKCB0ID0gdCAvIGQgLSAxICkgKiB0ICogKCAoIHMgKyAxICkgKiB0ICsgcyApICsgMSApICsgYjtcbiAgfVxuXG4gIHN0YXRpYyBlYXNlSW5PdXQodCwgYiwgYywgZCwgcyA9IDEuNzAxNTgpIHtcbiAgICBpZiAoICggdCAvPSBkICogMC41ICkgPCAxICkge1xuICAgICAgcmV0dXJuIGMgKiAwLjUgKiAoIHQgKiB0ICogKCAoICggcyAqPSAoIDEuNTI1ICkgKSArIDEgKSAqIHQgLSBzICkgKSArIGI7XG4gICAgfVxuICAgIHJldHVybiBjICogMC41ICogKCAoIHQgLT0gMiApICogdCAqICggKCAoIHMgKj0gKCAxLjUyNSApICkgKyAxICkgKiB0ICsgcyApICsgMiApICsgYjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2Vhc2luZy9CYWNrLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmNlIHtcbiAgc3RhdGljIGVhc2VPdXQoIHQsIGIsIGMsIGQgKSB7XG4gICAgaWYgKCAoIHQgLz0gZCApIDwgKCAxIC8gMi43NSApICkge1xuICAgICAgcmV0dXJuIGMgKiAoIDcuNTYyNSAqIHQgKiB0ICkgKyBiO1xuICAgIH0gZWxzZSBpZiAoIHQgPCAoIDIgLyAyLjc1ICkgKSB7XG4gICAgICByZXR1cm4gYyAqICggNy41NjI1ICogKCB0IC09ICggMS41IC8gMi43NSApICkgKiB0ICsgMC43NSApICsgYjtcbiAgICB9IGVsc2UgaWYgKCB0IDwgKCAyLjUgLyAyLjc1ICkgKSB7XG4gICAgICByZXR1cm4gYyAqICggNy41NjI1ICogKCB0IC09ICggMi4yNSAvIDIuNzUgKSApICogdCArIDAuOTM3NSApICsgYjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGMgKiAoIDcuNTYyNSAqICggdCAtPSAoIDIuNjI1IC8gMi43NSApICkgKiB0ICsgMC45ODQzNzUgKSArIGI7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVhc2VJbiggdCwgYiwgYywgZCApIHtcbiAgICByZXR1cm4gYyAtIGVhc2VPdXQoIGQgLSB0LCAwLCBjLCBkICkgKyBiO1xuICB9XG5cbiAgc3RhdGljIGVhc2VJbk91dCggdCwgYiwgYywgZCApIHtcbiAgICBpZiAoIHQgPCBkICogMC41ICkge1xuICAgICAgcmV0dXJuIGVhc2VJbiggdCAqIDIsIDAsIGMsIGQgKSAqIDAuNSArIGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlYXNlT3V0KCB0ICogMiAtIGQsIDAsIGMsIGQgKSAqIDAuNSArIGMgKiAwLjUgKyBiO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2Vhc2luZy9Cb3VuY2UuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjdWxhciB7XG4gIHN0YXRpYyBlYXNlSW4odCwgYiwgYywgZCkge1xuICAgIHJldHVybiAtYyAqIChNYXRoLnNxcnQoMSAtICh0IC89IGQpICogdCkgLSAxKSArIGI7XG4gIH1cblxuICBzdGF0aWMgZWFzZU91dCh0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgKiBNYXRoLnNxcnQoMSAtICh0ID0gdCAvIGQgLSAxKSAqIHQpICsgYjtcbiAgfVxuXG4gIHN0YXRpYyBlYXNlSW5PdXQodCwgYiwgYywgZCkge1xuICAgIGlmICgodCAvPSBkICogMC41KSA8IDEpIHtcbiAgICAgIHJldHVybiAtYyAqIDAuNSAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpICsgYjtcbiAgICB9XG4gICAgcmV0dXJuIGMgKiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSkgKyBiO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vZWFzaW5nL0NpcmN1bGFyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViaWMge1xuICBzdGF0aWMgZWFzZUluKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKyBiO1xuICB9XG5cbiAgc3RhdGljIGVhc2VPdXQodCwgYiwgYywgZCkge1xuICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiB0ICsgMSkgKyBiO1xuICB9XG5cbiAgc3RhdGljIGVhc2VJbk91dCh0LCBiLCBjLCBkKSB7XG4gICAgaWYgKCh0IC89IGQgKiAwLjUpIDwgMSkge1xuICAgICAgcmV0dXJuIGMgKiAwLjUgKiB0ICogdCAqIHQgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gYyAqIDAuNSAqICgodCAtPSAyKSAqIHQgKiB0ICsgMikgKyBiO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vZWFzaW5nL0N1YmljLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxhc3RpYyB7XG4gIHN0YXRpYyBlYXNlSW4odCwgYiwgYywgZCwgYSA9IDAsIHAgPSAwKSB7XG4gICAgaWYgKHQgPT09IDApIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICBpZiAoKHQgLz0gZCkgPT09IDEpIHtcbiAgICAgIHJldHVybiBiICsgYztcbiAgICB9XG4gICAgaWYgKCFwKSB7XG4gICAgICBwID0gZCAqIDAuMztcbiAgICB9XG4gICAgbGV0IHM7XG4gICAgaWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xuICAgICAgYSA9IGM7XG4gICAgICBzID0gcCAqIDAuMjU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLShhICogTWF0aC5wb3coMiwgMTAgKiAoLS10KSkgKiBNYXRoLnNpbigodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSkgKyBiO1xuICB9XG5cbiAgc3RhdGljIGVhc2VPdXQodCwgYiwgYywgZCwgYSA9IDAsIHAgPSAwKSB7XG4gICAgaWYgKHQgPT09IDApIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICBpZiAoKHQgLz0gZCkgPT09IDEpIHtcbiAgICAgIHJldHVybiBiICsgYztcbiAgICB9XG4gICAgaWYgKCFwKSB7XG4gICAgICBwID0gZCAqIDAuMztcbiAgICB9XG4gICAgbGV0IHM7XG4gICAgaWYgKCFhIHx8IGEgPCBNYXRoLmFicyhjKSkge1xuICAgICAgYSA9IGM7XG4gICAgICBzID0gcCAqIDAuMjU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKGMgLyBhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyBjICsgYjtcbiAgfVxuXG4gIHN0YXRpYyBlYXNlSW5PdXQodCwgYiwgYywgZCwgYSA9IDAsIHAgPSAwKSB7XG4gICAgaWYgKHQgPT09IDApIHtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICBpZiAoKHQgLz0gZCAqIDAuNSkgPT09IDIpIHtcbiAgICAgIHJldHVybiBiICsgYztcbiAgICB9XG4gICAgaWYgKCFwKSB7XG4gICAgICBwID0gZCAqICgwLjMgKiAxLjUpO1xuICAgIH1cbiAgICBsZXQgcztcbiAgICBpZiAoIWEgfHwgYSA8IE1hdGguYWJzKGMpKSB7XG4gICAgICBhID0gYztcbiAgICAgIHMgPSBwICogMC4yNTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oYyAvIGEpO1xuICAgIH1cblxuICAgIGlmICh0IDwgMSkge1xuICAgICAgcmV0dXJuIC0wLjUgKiAoYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpICsgYjtcbiAgICB9XG5cbiAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICogMC41ICsgYyArIGI7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9lYXNpbmcvRWxhc3RpYy5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVhciB7XG5cbiAgc3RhdGljIGVhc2VOb25lKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gKChjICogdCkgLyBkKSArIGI7XG4gIH1cblxuICBzdGF0aWMgZWFzZUluKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gKChjICogdCkgLyBkKSArIGI7XG4gIH1cblxuICBzdGF0aWMgZWFzZU91dCh0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuICgoYyAqIHQpIC8gZCkgKyBiO1xuICB9XG5cbiAgc3RhdGljIGVhc2VJbk91dCh0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuICgoYyAqIHQpIC8gZCkgKyBiO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9lYXNpbmcvTGluZWFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==