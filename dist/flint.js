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
	
	var _ActionBase = __webpack_require__(1);
	
	var _ActionBase2 = _interopRequireDefault(_ActionBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var age = new _ActionBase2.default();
	console.log(age);

/***/ },
/* 1 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGQ1YzU5MWFhNjg0MWVmNzBmYzAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2FjdGlvbnMvQWN0aW9uQmFzZS5qcyJdLCJuYW1lcyI6WyJhZ2UiLCJjb25zb2xlIiwibG9nIiwiQWN0aW9uQmFzZSIsIl9wcmlvcml0eSIsImVtaXR0ZXIiLCJwYXJ0aWNsZSIsInRpbWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FBRUEsS0FBTUEsTUFBTSwwQkFBWjtBQUNBQyxTQUFRQyxHQUFSLENBQVlGLEdBQVosRTs7Ozs7Ozs7Ozs7Ozs7OztLQ0hxQkcsVTtBQUNuQjs7OztBQUlBLHlCQUFjO0FBQUE7O0FBQ1osVUFBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNEOztBQUVEOzs7Ozs7Ozs7OztBQWFBOzs7Ozs7O29DQU9lQyxPLEVBQVMsQ0FDdkI7O0FBRUQ7Ozs7Ozs7Ozs7d0NBT21CQSxPLEVBQVMsQ0FDM0I7O0FBRUQ7Ozs7Ozs7Ozs7Ozs0QkFTT0EsTyxFQUFTQyxRLEVBQVVDLEksRUFBTSxDQUMvQjs7O3lCQXRDYztBQUNiLGNBQU8sS0FBS0gsU0FBWjtBQUNELE07dUJBRVlJLEssRUFBTztBQUNsQixZQUFLSixTQUFMLEdBQWlCSSxLQUFqQjtBQUNEOzs7Ozs7bUJBcEJrQkwsVSIsImZpbGUiOiJmbGludC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRkNWM1OTFhYTY4NDFlZjcwZmMwIiwiaW1wb3J0IEFnZSBmcm9tICcuL2NvbW1vbi9hY3Rpb25zL0FjdGlvbkJhc2UnO1xuXG5jb25zdCBhZ2UgPSBuZXcgQWdlKCk7XG5jb25zb2xlLmxvZyhhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQmFzZSB7XG4gIC8qKlxuICAgKiBUaGUgY29uc3RydWN0b3IgY3JlYXRlcyBhbiBBY3Rpb25CYXNlIG9iamVjdC4gQnV0IHlvdSBzaG91bGRuJ3QgdXNlIGl0XG4gICAqIGRpcmVjdGx5IGJlY2F1c2UgdGhlIEFjdGlvbkJhc2UgY2xhc3MgaXMgYWJzdHJhY3QuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IDA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGRlZmF1bHQgcHJpb3JpdHkgb2YgMCBmb3IgdGhpcyBhY3Rpb24uIERlcml2ZWQgY2xhc3Nlc1xuICAgKiBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IHdhbnQgYSBkaWZmZXJlbnQgZGVmYXVsdCBwcmlvcml0eS5cbiAgICpcbiAgICovXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gU29tZSBkZXJpdmVkIGNsYXNzZXMgb3ZlcnJpZGUgdGhpcyBtZXRob2RcbiAgICogdG8gcGVyZm9ybSBhY3Rpb25zIHdoZW4gdGhlIGFjdGlvbiBpcyBhZGRlZCB0byBhbiBlbWl0dGVyLlxuICAgKlxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgRW1pdHRlciB0aGF0IHRoZSBBY3Rpb24gd2FzIGFkZGVkIHRvLlxuICAgKlxuICAgKi9cbiAgYWRkZWRUb0VtaXR0ZXIoZW1pdHRlcikge1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGRvZXMgbm90aGluZy4gU29tZSBkZXJpdmVkIGNsYXNzZXMgb3ZlcnJpZGUgdGhpcyBtZXRob2RcbiAgICogdG8gcGVyZm9ybSBhY3Rpb25zIHdoZW4gdGhlIGFjdGlvbiBpcyByZW1vdmVkIGZyb20gdGhlIGVtaXR0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBlbWl0dGVyIFRoZSBFbWl0dGVyIHRoYXQgdGhlIEFjdGlvbiB3YXMgcmVtb3ZlZCBmcm9tLlxuICAgKlxuICAgKi9cbiAgcmVtb3ZlZEZyb21FbWl0dGVyKGVtaXR0ZXIpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuIEFsbCBkZXJpdmVkIGNsYXNzZXMgb3ZlcnJpZGUgdGhpcyBtZXRob2RcbiAgICogdG8gdXBkYXRlIGVhY2ggcGFydGljbGUgZXZlcnkgZnJhbWUuXG4gICAqXG4gICAqIEBwYXJhbSBlbWl0dGVyIFRoZSBFbWl0dGVyIHRoYXQgY3JlYXRlZCB0aGUgcGFydGljbGUuXG4gICAqIEBwYXJhbSBwYXJ0aWNsZSBUaGUgcGFydGljbGUgdG8gYmUgdXBkYXRlZC5cbiAgICogQHBhcmFtIHRpbWUgVGhlIGR1cmF0aW9uIG9mIHRoZSBmcmFtZSAtIHVzZWQgZm9yIHRpbWUgYmFzZWQgdXBkYXRlcy5cbiAgICpcbiAgICovXG4gIHVwZGF0ZShlbWl0dGVyLCBwYXJ0aWNsZSwgdGltZSkge1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vYWN0aW9ucy9BY3Rpb25CYXNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==