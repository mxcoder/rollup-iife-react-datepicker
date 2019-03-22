var Datepicker = (function (React,reactDom,classnames,moment) {
	'use strict';

	var React__default = 'default' in React ? React['default'] : React;
	classnames = classnames && classnames.hasOwnProperty('default') ? classnames['default'] : classnames;
	moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var reactIs_production_min = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
	60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
	exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
	exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
	exports.isSuspense=function(a){return t(a)===p};
	});

	unwrapExports(reactIs_production_min);
	var reactIs_production_min_1 = reactIs_production_min.typeOf;
	var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
	var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
	var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
	var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
	var reactIs_production_min_6 = reactIs_production_min.Element;
	var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
	var reactIs_production_min_8 = reactIs_production_min.Fragment;
	var reactIs_production_min_9 = reactIs_production_min.Lazy;
	var reactIs_production_min_10 = reactIs_production_min.Memo;
	var reactIs_production_min_11 = reactIs_production_min.Portal;
	var reactIs_production_min_12 = reactIs_production_min.Profiler;
	var reactIs_production_min_13 = reactIs_production_min.StrictMode;
	var reactIs_production_min_14 = reactIs_production_min.Suspense;
	var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
	var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
	var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
	var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
	var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
	var reactIs_production_min_20 = reactIs_production_min.isElement;
	var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
	var reactIs_production_min_22 = reactIs_production_min.isFragment;
	var reactIs_production_min_23 = reactIs_production_min.isLazy;
	var reactIs_production_min_24 = reactIs_production_min.isMemo;
	var reactIs_production_min_25 = reactIs_production_min.isPortal;
	var reactIs_production_min_26 = reactIs_production_min.isProfiler;
	var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
	var reactIs_production_min_28 = reactIs_production_min.isSuspense;

	var reactIs_development = createCommonjsModule(function (module, exports) {
	});

	unwrapExports(reactIs_development);
	var reactIs_development_1 = reactIs_development.typeOf;
	var reactIs_development_2 = reactIs_development.AsyncMode;
	var reactIs_development_3 = reactIs_development.ConcurrentMode;
	var reactIs_development_4 = reactIs_development.ContextConsumer;
	var reactIs_development_5 = reactIs_development.ContextProvider;
	var reactIs_development_6 = reactIs_development.Element;
	var reactIs_development_7 = reactIs_development.ForwardRef;
	var reactIs_development_8 = reactIs_development.Fragment;
	var reactIs_development_9 = reactIs_development.Lazy;
	var reactIs_development_10 = reactIs_development.Memo;
	var reactIs_development_11 = reactIs_development.Portal;
	var reactIs_development_12 = reactIs_development.Profiler;
	var reactIs_development_13 = reactIs_development.StrictMode;
	var reactIs_development_14 = reactIs_development.Suspense;
	var reactIs_development_15 = reactIs_development.isValidElementType;
	var reactIs_development_16 = reactIs_development.isAsyncMode;
	var reactIs_development_17 = reactIs_development.isConcurrentMode;
	var reactIs_development_18 = reactIs_development.isContextConsumer;
	var reactIs_development_19 = reactIs_development.isContextProvider;
	var reactIs_development_20 = reactIs_development.isElement;
	var reactIs_development_21 = reactIs_development.isForwardRef;
	var reactIs_development_22 = reactIs_development.isFragment;
	var reactIs_development_23 = reactIs_development.isLazy;
	var reactIs_development_24 = reactIs_development.isMemo;
	var reactIs_development_25 = reactIs_development.isPortal;
	var reactIs_development_26 = reactIs_development.isProfiler;
	var reactIs_development_27 = reactIs_development.isStrictMode;
	var reactIs_development_28 = reactIs_development.isSuspense;

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_production_min;
	}
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	/**
	 * Check whether some DOM node is our Component's node.
	 */
	function isNodeFound(current, componentNode, ignoreClass) {
	  if (current === componentNode) {
	    return true;
	  } // SVG <use/> elements do not technically reside in the rendered DOM, so
	  // they do not have classList directly, but they offer a link to their
	  // corresponding element, which can have classList. This extra check is for
	  // that case.
	  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
	  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


	  if (current.correspondingElement) {
	    return current.correspondingElement.classList.contains(ignoreClass);
	  }

	  return current.classList.contains(ignoreClass);
	}
	/**
	 * Try to find our node in a hierarchy of nodes, returning the document
	 * node as highest node if our node is not found in the path up.
	 */

	function findHighest(current, componentNode, ignoreClass) {
	  if (current === componentNode) {
	    return true;
	  } // If source=local then this event came from 'somewhere'
	  // inside and should be ignored. We could handle this with
	  // a layered approach, too, but that requires going back to
	  // thinking in terms of Dom node nesting, running counter
	  // to React's 'you shouldn't care about the DOM' philosophy.


	  while (current.parentNode) {
	    if (isNodeFound(current, componentNode, ignoreClass)) {
	      return true;
	    }

	    current = current.parentNode;
	  }

	  return current;
	}
	/**
	 * Check if the browser scrollbar was clicked
	 */

	function clickedScrollbar(evt) {
	  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
	}

	// ideally will get replaced with external dep
	// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
	var testPassiveEventSupport = function testPassiveEventSupport() {
	  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
	    return;
	  }

	  var passive = false;
	  var options = Object.defineProperty({}, 'passive', {
	    get: function get() {
	      passive = true;
	    }
	  });

	  var noop = function noop() {};

	  window.addEventListener('testPassiveEventSupport', noop, options);
	  window.removeEventListener('testPassiveEventSupport', noop, options);
	  return passive;
	};

	function autoInc(seed) {
	  if (seed === void 0) {
	    seed = 0;
	  }

	  return function () {
	    return ++seed;
	  };
	}

	var uid = autoInc();

	var passiveEventSupport;
	var handlersMap = {};
	var enabledInstances = {};
	var touchEvents = ['touchstart', 'touchmove'];
	var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
	/**
	 * Options for addEventHandler and removeEventHandler
	 */

	function getEventHandlerOptions(instance, eventName) {
	  var handlerOptions = null;
	  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

	  if (isTouchEvent && passiveEventSupport) {
	    handlerOptions = {
	      passive: !instance.props.preventDefault
	    };
	  }

	  return handlerOptions;
	}
	/**
	 * This function generates the HOC function that you'll use
	 * in order to impart onOutsideClick listening to an
	 * arbitrary component. It gets called at the end of the
	 * bootstrapping code to yield an instance of the
	 * onClickOutsideHOC function defined inside setupHOC().
	 */


	function onClickOutsideHOC(WrappedComponent, config) {
	  var _class, _temp;

	  var componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  return _temp = _class =
	  /*#__PURE__*/
	  function (_Component) {
	    _inheritsLoose(onClickOutside, _Component);

	    function onClickOutside(props) {
	      var _this;

	      _this = _Component.call(this, props) || this;

	      _this.__outsideClickHandler = function (event) {
	        if (typeof _this.__clickOutsideHandlerProp === 'function') {
	          _this.__clickOutsideHandlerProp(event);

	          return;
	        }

	        var instance = _this.getInstance();

	        if (typeof instance.props.handleClickOutside === 'function') {
	          instance.props.handleClickOutside(event);
	          return;
	        }

	        if (typeof instance.handleClickOutside === 'function') {
	          instance.handleClickOutside(event);
	          return;
	        }

	        throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
	      };

	      _this.enableOnClickOutside = function () {
	        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
	          return;
	        }

	        if (typeof passiveEventSupport === 'undefined') {
	          passiveEventSupport = testPassiveEventSupport();
	        }

	        enabledInstances[_this._uid] = true;
	        var events = _this.props.eventTypes;

	        if (!events.forEach) {
	          events = [events];
	        }

	        handlersMap[_this._uid] = function (event) {
	          if (_this.componentNode === null) return;

	          if (_this.props.preventDefault) {
	            event.preventDefault();
	          }

	          if (_this.props.stopPropagation) {
	            event.stopPropagation();
	          }

	          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
	          var current = event.target;

	          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
	            return;
	          }

	          _this.__outsideClickHandler(event);
	        };

	        events.forEach(function (eventName) {
	          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
	        });
	      };

	      _this.disableOnClickOutside = function () {
	        delete enabledInstances[_this._uid];
	        var fn = handlersMap[_this._uid];

	        if (fn && typeof document !== 'undefined') {
	          var events = _this.props.eventTypes;

	          if (!events.forEach) {
	            events = [events];
	          }

	          events.forEach(function (eventName) {
	            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
	          });
	          delete handlersMap[_this._uid];
	        }
	      };

	      _this.getRef = function (ref) {
	        return _this.instanceRef = ref;
	      };

	      _this._uid = uid();
	      return _this;
	    }
	    /**
	     * Access the WrappedComponent's instance.
	     */


	    var _proto = onClickOutside.prototype;

	    _proto.getInstance = function getInstance() {
	      if (!WrappedComponent.prototype.isReactComponent) {
	        return this;
	      }

	      var ref = this.instanceRef;
	      return ref.getInstance ? ref.getInstance() : ref;
	    };

	    /**
	     * Add click listeners to the current document,
	     * linked to this component's state.
	     */
	    _proto.componentDidMount = function componentDidMount() {
	      // If we are in an environment without a DOM such
	      // as shallow rendering or snapshots then we exit
	      // early to prevent any unhandled errors being thrown.
	      if (typeof document === 'undefined' || !document.createElement) {
	        return;
	      }

	      var instance = this.getInstance();

	      if (config && typeof config.handleClickOutside === 'function') {
	        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

	        if (typeof this.__clickOutsideHandlerProp !== 'function') {
	          throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
	        }
	      }

	      this.componentNode = reactDom.findDOMNode(this.getInstance()); // return early so we dont initiate onClickOutside

	      if (this.props.disableOnClickOutside) return;
	      this.enableOnClickOutside();
	    };

	    _proto.componentDidUpdate = function componentDidUpdate() {
	      this.componentNode = reactDom.findDOMNode(this.getInstance());
	    };
	    /**
	     * Remove all document's event listeners for this component
	     */


	    _proto.componentWillUnmount = function componentWillUnmount() {
	      this.disableOnClickOutside();
	    };
	    /**
	     * Can be called to explicitly enable event listening
	     * for clicks and touches outside of this element.
	     */


	    /**
	     * Pass-through render
	     */
	    _proto.render = function render() {
	      // eslint-disable-next-line no-unused-vars
	      var _props = this.props,
	          excludeScrollbar = _props.excludeScrollbar,
	          props = _objectWithoutProperties(_props, ["excludeScrollbar"]);

	      if (WrappedComponent.prototype.isReactComponent) {
	        props.ref = this.getRef;
	      } else {
	        props.wrappedRef = this.getRef;
	      }

	      props.disableOnClickOutside = this.disableOnClickOutside;
	      props.enableOnClickOutside = this.enableOnClickOutside;
	      return React.createElement(WrappedComponent, props);
	    };

	    return onClickOutside;
	  }(React.Component), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
	    eventTypes: ['mousedown', 'touchstart'],
	    excludeScrollbar: config && config.excludeScrollbar || false,
	    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
	    preventDefault: false,
	    stopPropagation: false
	  }, _class.getClass = function () {
	    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
	  }, _temp;
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	function _inheritsLoose$1(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var inheritsLoose = _inheritsLoose$1;

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty = _defineProperty;

	/**!
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version 1.14.7
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */
	var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

	var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
	var timeoutDuration = 0;
	for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
	  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
	    timeoutDuration = 1;
	    break;
	  }
	}

	function microtaskDebounce(fn) {
	  var called = false;
	  return function () {
	    if (called) {
	      return;
	    }
	    called = true;
	    window.Promise.resolve().then(function () {
	      called = false;
	      fn();
	    });
	  };
	}

	function taskDebounce(fn) {
	  var scheduled = false;
	  return function () {
	    if (!scheduled) {
	      scheduled = true;
	      setTimeout(function () {
	        scheduled = false;
	        fn();
	      }, timeoutDuration);
	    }
	  };
	}

	var supportsMicroTasks = isBrowser && window.Promise;

	/**
	* Create a debounced version of a method, that's asynchronously deferred
	* but called in the minimum time possible.
	*
	* @method
	* @memberof Popper.Utils
	* @argument {Function} fn
	* @returns {Function}
	*/
	var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

	/**
	 * Check if the given variable is a function
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Any} functionToCheck - variable to check
	 * @returns {Boolean} answer to: is a function?
	 */
	function isFunction(functionToCheck) {
	  var getType = {};
	  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}

	/**
	 * Get CSS computed property of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Eement} element
	 * @argument {String} property
	 */
	function getStyleComputedProperty(element, property) {
	  if (element.nodeType !== 1) {
	    return [];
	  }
	  // NOTE: 1 DOM access here
	  var window = element.ownerDocument.defaultView;
	  var css = window.getComputedStyle(element, null);
	  return property ? css[property] : css;
	}

	/**
	 * Returns the parentNode or the host of the element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} parent
	 */
	function getParentNode(element) {
	  if (element.nodeName === 'HTML') {
	    return element;
	  }
	  return element.parentNode || element.host;
	}

	/**
	 * Returns the scrolling parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} scroll parent
	 */
	function getScrollParent(element) {
	  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
	  if (!element) {
	    return document.body;
	  }

	  switch (element.nodeName) {
	    case 'HTML':
	    case 'BODY':
	      return element.ownerDocument.body;
	    case '#document':
	      return element.body;
	  }

	  // Firefox want us to check `-x` and `-y` variations as well

	  var _getStyleComputedProp = getStyleComputedProperty(element),
	      overflow = _getStyleComputedProp.overflow,
	      overflowX = _getStyleComputedProp.overflowX,
	      overflowY = _getStyleComputedProp.overflowY;

	  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
	    return element;
	  }

	  return getScrollParent(getParentNode(element));
	}

	var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
	var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

	/**
	 * Determines if the browser is Internet Explorer
	 * @method
	 * @memberof Popper.Utils
	 * @param {Number} version to check
	 * @returns {Boolean} isIE
	 */
	function isIE(version) {
	  if (version === 11) {
	    return isIE11;
	  }
	  if (version === 10) {
	    return isIE10;
	  }
	  return isIE11 || isIE10;
	}

	/**
	 * Returns the offset parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} offset parent
	 */
	function getOffsetParent(element) {
	  if (!element) {
	    return document.documentElement;
	  }

	  var noOffsetParent = isIE(10) ? document.body : null;

	  // NOTE: 1 DOM access here
	  var offsetParent = element.offsetParent || null;
	  // Skip hidden elements which don't have an offsetParent
	  while (offsetParent === noOffsetParent && element.nextElementSibling) {
	    offsetParent = (element = element.nextElementSibling).offsetParent;
	  }

	  var nodeName = offsetParent && offsetParent.nodeName;

	  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
	    return element ? element.ownerDocument.documentElement : document.documentElement;
	  }

	  // .offsetParent will return the closest TH, TD or TABLE in case
	  // no offsetParent is present, I hate this job...
	  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
	    return getOffsetParent(offsetParent);
	  }

	  return offsetParent;
	}

	function isOffsetContainer(element) {
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY') {
	    return false;
	  }
	  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
	}

	/**
	 * Finds the root node (document, shadowDOM root) of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} node
	 * @returns {Element} root node
	 */
	function getRoot(node) {
	  if (node.parentNode !== null) {
	    return getRoot(node.parentNode);
	  }

	  return node;
	}

	/**
	 * Finds the offset parent common to the two provided nodes
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element1
	 * @argument {Element} element2
	 * @returns {Element} common offset parent
	 */
	function findCommonOffsetParent(element1, element2) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
	    return document.documentElement;
	  }

	  // Here we make sure to give as "start" the element that comes first in the DOM
	  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
	  var start = order ? element1 : element2;
	  var end = order ? element2 : element1;

	  // Get common ancestor container
	  var range = document.createRange();
	  range.setStart(start, 0);
	  range.setEnd(end, 0);
	  var commonAncestorContainer = range.commonAncestorContainer;

	  // Both nodes are inside #document

	  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
	    if (isOffsetContainer(commonAncestorContainer)) {
	      return commonAncestorContainer;
	    }

	    return getOffsetParent(commonAncestorContainer);
	  }

	  // one of the nodes is inside shadowDOM, find which one
	  var element1root = getRoot(element1);
	  if (element1root.host) {
	    return findCommonOffsetParent(element1root.host, element2);
	  } else {
	    return findCommonOffsetParent(element1, getRoot(element2).host);
	  }
	}

	/**
	 * Gets the scroll value of the given element in the given side (top and left)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {String} side `top` or `left`
	 * @returns {number} amount of scrolled pixels
	 */
	function getScroll(element) {
	  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

	  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    var html = element.ownerDocument.documentElement;
	    var scrollingElement = element.ownerDocument.scrollingElement || html;
	    return scrollingElement[upperSide];
	  }

	  return element[upperSide];
	}

	/*
	 * Sum or subtract the element scroll values (left and top) from a given rect object
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} rect - Rect object you want to change
	 * @param {HTMLElement} element - The element from the function reads the scroll values
	 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
	 * @return {Object} rect - The modifier rect object
	 */
	function includeScroll(rect, element) {
	  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var scrollTop = getScroll(element, 'top');
	  var scrollLeft = getScroll(element, 'left');
	  var modifier = subtract ? -1 : 1;
	  rect.top += scrollTop * modifier;
	  rect.bottom += scrollTop * modifier;
	  rect.left += scrollLeft * modifier;
	  rect.right += scrollLeft * modifier;
	  return rect;
	}

	/*
	 * Helper to detect borders of a given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {CSSStyleDeclaration} styles
	 * Result of `getStyleComputedProperty` on the given element
	 * @param {String} axis - `x` or `y`
	 * @return {number} borders - The borders size of the given axis
	 */

	function getBordersSize(styles, axis) {
	  var sideA = axis === 'x' ? 'Left' : 'Top';
	  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

	  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
	}

	function getSize(axis, body, html, computedStyle) {
	  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
	}

	function getWindowSizes(document) {
	  var body = document.body;
	  var html = document.documentElement;
	  var computedStyle = isIE(10) && getComputedStyle(html);

	  return {
	    height: getSize('Height', body, html, computedStyle),
	    width: getSize('Width', body, html, computedStyle)
	  };
	}

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();





	var defineProperty$1 = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	/**
	 * Given element offsets, generate an output similar to getBoundingClientRect
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} offsets
	 * @returns {Object} ClientRect like output
	 */
	function getClientRect(offsets) {
	  return _extends({}, offsets, {
	    right: offsets.left + offsets.width,
	    bottom: offsets.top + offsets.height
	  });
	}

	/**
	 * Get bounding client rect of given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} element
	 * @return {Object} client rect
	 */
	function getBoundingClientRect(element) {
	  var rect = {};

	  // IE10 10 FIX: Please, don't ask, the element isn't
	  // considered in DOM in some circumstances...
	  // This isn't reproducible in IE10 compatibility mode of IE11
	  try {
	    if (isIE(10)) {
	      rect = element.getBoundingClientRect();
	      var scrollTop = getScroll(element, 'top');
	      var scrollLeft = getScroll(element, 'left');
	      rect.top += scrollTop;
	      rect.left += scrollLeft;
	      rect.bottom += scrollTop;
	      rect.right += scrollLeft;
	    } else {
	      rect = element.getBoundingClientRect();
	    }
	  } catch (e) {}

	  var result = {
	    left: rect.left,
	    top: rect.top,
	    width: rect.right - rect.left,
	    height: rect.bottom - rect.top
	  };

	  // subtract scrollbar size from sizes
	  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
	  var width = sizes.width || element.clientWidth || result.right - result.left;
	  var height = sizes.height || element.clientHeight || result.bottom - result.top;

	  var horizScrollbar = element.offsetWidth - width;
	  var vertScrollbar = element.offsetHeight - height;

	  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
	  // we make this check conditional for performance reasons
	  if (horizScrollbar || vertScrollbar) {
	    var styles = getStyleComputedProperty(element);
	    horizScrollbar -= getBordersSize(styles, 'x');
	    vertScrollbar -= getBordersSize(styles, 'y');

	    result.width -= horizScrollbar;
	    result.height -= vertScrollbar;
	  }

	  return getClientRect(result);
	}

	function getOffsetRectRelativeToArbitraryNode(children, parent) {
	  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var isIE10 = isIE(10);
	  var isHTML = parent.nodeName === 'HTML';
	  var childrenRect = getBoundingClientRect(children);
	  var parentRect = getBoundingClientRect(parent);
	  var scrollParent = getScrollParent(children);

	  var styles = getStyleComputedProperty(parent);
	  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
	  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

	  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
	  if (fixedPosition && isHTML) {
	    parentRect.top = Math.max(parentRect.top, 0);
	    parentRect.left = Math.max(parentRect.left, 0);
	  }
	  var offsets = getClientRect({
	    top: childrenRect.top - parentRect.top - borderTopWidth,
	    left: childrenRect.left - parentRect.left - borderLeftWidth,
	    width: childrenRect.width,
	    height: childrenRect.height
	  });
	  offsets.marginTop = 0;
	  offsets.marginLeft = 0;

	  // Subtract margins of documentElement in case it's being used as parent
	  // we do this only on HTML because it's the only element that behaves
	  // differently when margins are applied to it. The margins are included in
	  // the box of the documentElement, in the other cases not.
	  if (!isIE10 && isHTML) {
	    var marginTop = parseFloat(styles.marginTop, 10);
	    var marginLeft = parseFloat(styles.marginLeft, 10);

	    offsets.top -= borderTopWidth - marginTop;
	    offsets.bottom -= borderTopWidth - marginTop;
	    offsets.left -= borderLeftWidth - marginLeft;
	    offsets.right -= borderLeftWidth - marginLeft;

	    // Attach marginTop and marginLeft because in some circumstances we may need them
	    offsets.marginTop = marginTop;
	    offsets.marginLeft = marginLeft;
	  }

	  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
	    offsets = includeScroll(offsets, parent);
	  }

	  return offsets;
	}

	function getViewportOffsetRectRelativeToArtbitraryNode(element) {
	  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var html = element.ownerDocument.documentElement;
	  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
	  var width = Math.max(html.clientWidth, window.innerWidth || 0);
	  var height = Math.max(html.clientHeight, window.innerHeight || 0);

	  var scrollTop = !excludeScroll ? getScroll(html) : 0;
	  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

	  var offset = {
	    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
	    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
	    width: width,
	    height: height
	  };

	  return getClientRect(offset);
	}

	/**
	 * Check if the given element is fixed or is inside a fixed parent
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {Element} customContainer
	 * @returns {Boolean} answer to "isFixed?"
	 */
	function isFixed(element) {
	  var nodeName = element.nodeName;
	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    return false;
	  }
	  if (getStyleComputedProperty(element, 'position') === 'fixed') {
	    return true;
	  }
	  var parentNode = getParentNode(element);
	  if (!parentNode) {
	    return false;
	  }
	  return isFixed(parentNode);
	}

	/**
	 * Finds the first parent of an element that has a transformed property defined
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} first transformed parent or documentElement
	 */

	function getFixedPositionOffsetParent(element) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element || !element.parentElement || isIE()) {
	    return document.documentElement;
	  }
	  var el = element.parentElement;
	  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
	    el = el.parentElement;
	  }
	  return el || document.documentElement;
	}

	/**
	 * Computed the boundaries limits and return them
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} popper
	 * @param {HTMLElement} reference
	 * @param {number} padding
	 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
	 * @param {Boolean} fixedPosition - Is in fixed position mode
	 * @returns {Object} Coordinates of the boundaries
	 */
	function getBoundaries(popper, reference, padding, boundariesElement) {
	  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	  // NOTE: 1 DOM access here

	  var boundaries = { top: 0, left: 0 };
	  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

	  // Handle viewport case
	  if (boundariesElement === 'viewport') {
	    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
	  } else {
	    // Handle other cases based on DOM element used as boundaries
	    var boundariesNode = void 0;
	    if (boundariesElement === 'scrollParent') {
	      boundariesNode = getScrollParent(getParentNode(reference));
	      if (boundariesNode.nodeName === 'BODY') {
	        boundariesNode = popper.ownerDocument.documentElement;
	      }
	    } else if (boundariesElement === 'window') {
	      boundariesNode = popper.ownerDocument.documentElement;
	    } else {
	      boundariesNode = boundariesElement;
	    }

	    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

	    // In case of HTML, we need a different computation
	    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
	      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
	          height = _getWindowSizes.height,
	          width = _getWindowSizes.width;

	      boundaries.top += offsets.top - offsets.marginTop;
	      boundaries.bottom = height + offsets.top;
	      boundaries.left += offsets.left - offsets.marginLeft;
	      boundaries.right = width + offsets.left;
	    } else {
	      // for all the other DOM elements, this one is good
	      boundaries = offsets;
	    }
	  }

	  // Add paddings
	  padding = padding || 0;
	  var isPaddingNumber = typeof padding === 'number';
	  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
	  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
	  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
	  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

	  return boundaries;
	}

	function getArea(_ref) {
	  var width = _ref.width,
	      height = _ref.height;

	  return width * height;
	}

	/**
	 * Utility used to transform the `auto` placement to the placement with more
	 * available space.
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
	  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

	  if (placement.indexOf('auto') === -1) {
	    return placement;
	  }

	  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

	  var rects = {
	    top: {
	      width: boundaries.width,
	      height: refRect.top - boundaries.top
	    },
	    right: {
	      width: boundaries.right - refRect.right,
	      height: boundaries.height
	    },
	    bottom: {
	      width: boundaries.width,
	      height: boundaries.bottom - refRect.bottom
	    },
	    left: {
	      width: refRect.left - boundaries.left,
	      height: boundaries.height
	    }
	  };

	  var sortedAreas = Object.keys(rects).map(function (key) {
	    return _extends({
	      key: key
	    }, rects[key], {
	      area: getArea(rects[key])
	    });
	  }).sort(function (a, b) {
	    return b.area - a.area;
	  });

	  var filteredAreas = sortedAreas.filter(function (_ref2) {
	    var width = _ref2.width,
	        height = _ref2.height;
	    return width >= popper.clientWidth && height >= popper.clientHeight;
	  });

	  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

	  var variation = placement.split('-')[1];

	  return computedPlacement + (variation ? '-' + variation : '');
	}

	/**
	 * Get offsets to the reference element
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} state
	 * @param {Element} popper - the popper element
	 * @param {Element} reference - the reference element (the popper will be relative to this)
	 * @param {Element} fixedPosition - is in fixed position mode
	 * @returns {Object} An object containing the offsets which will be applied to the popper
	 */
	function getReferenceOffsets(state, popper, reference) {
	  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
	  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
	}

	/**
	 * Get the outer sizes of the given element (offset size + margins)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Object} object containing width and height properties
	 */
	function getOuterSizes(element) {
	  var window = element.ownerDocument.defaultView;
	  var styles = window.getComputedStyle(element);
	  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
	  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
	  var result = {
	    width: element.offsetWidth + y,
	    height: element.offsetHeight + x
	  };
	  return result;
	}

	/**
	 * Get the opposite placement of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement
	 * @returns {String} flipped placement
	 */
	function getOppositePlacement(placement) {
	  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash[matched];
	  });
	}

	/**
	 * Get offsets to the popper
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} position - CSS position the Popper will get applied
	 * @param {HTMLElement} popper - the popper element
	 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
	 * @param {String} placement - one of the valid placement options
	 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
	 */
	function getPopperOffsets(popper, referenceOffsets, placement) {
	  placement = placement.split('-')[0];

	  // Get popper node sizes
	  var popperRect = getOuterSizes(popper);

	  // Add position, width and height to our offsets object
	  var popperOffsets = {
	    width: popperRect.width,
	    height: popperRect.height
	  };

	  // depending by the popper placement we have to compute its offsets slightly differently
	  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
	  var mainSide = isHoriz ? 'top' : 'left';
	  var secondarySide = isHoriz ? 'left' : 'top';
	  var measurement = isHoriz ? 'height' : 'width';
	  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

	  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
	  if (placement === secondarySide) {
	    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
	  } else {
	    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
	  }

	  return popperOffsets;
	}

	/**
	 * Mimics the `find` method of Array
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function find(arr, check) {
	  // use native find if supported
	  if (Array.prototype.find) {
	    return arr.find(check);
	  }

	  // use `filter` to obtain the same behavior of `find`
	  return arr.filter(check)[0];
	}

	/**
	 * Return the index of the matching object
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function findIndex(arr, prop, value) {
	  // use native findIndex if supported
	  if (Array.prototype.findIndex) {
	    return arr.findIndex(function (cur) {
	      return cur[prop] === value;
	    });
	  }

	  // use `find` + `indexOf` if `findIndex` isn't supported
	  var match = find(arr, function (obj) {
	    return obj[prop] === value;
	  });
	  return arr.indexOf(match);
	}

	/**
	 * Loop trough the list of modifiers and run them in order,
	 * each of them will then edit the data object.
	 * @method
	 * @memberof Popper.Utils
	 * @param {dataObject} data
	 * @param {Array} modifiers
	 * @param {String} ends - Optional modifier name used as stopper
	 * @returns {dataObject}
	 */
	function runModifiers(modifiers, data, ends) {
	  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

	  modifiersToRun.forEach(function (modifier) {
	    if (modifier['function']) {
	      // eslint-disable-line dot-notation
	      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
	    }
	    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
	    if (modifier.enabled && isFunction(fn)) {
	      // Add properties to offsets to make them a complete clientRect object
	      // we do this before each modifier to make sure the previous one doesn't
	      // mess with these values
	      data.offsets.popper = getClientRect(data.offsets.popper);
	      data.offsets.reference = getClientRect(data.offsets.reference);

	      data = fn(data, modifier);
	    }
	  });

	  return data;
	}

	/**
	 * Updates the position of the popper, computing the new offsets and applying
	 * the new style.<br />
	 * Prefer `scheduleUpdate` over `update` because of performance reasons.
	 * @method
	 * @memberof Popper
	 */
	function update() {
	  // if popper is destroyed, don't perform any further update
	  if (this.state.isDestroyed) {
	    return;
	  }

	  var data = {
	    instance: this,
	    styles: {},
	    arrowStyles: {},
	    attributes: {},
	    flipped: false,
	    offsets: {}
	  };

	  // compute reference element offsets
	  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

	  // store the computed placement inside `originalPlacement`
	  data.originalPlacement = data.placement;

	  data.positionFixed = this.options.positionFixed;

	  // compute the popper offsets
	  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

	  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

	  // run the modifiers
	  data = runModifiers(this.modifiers, data);

	  // the first `update` will call `onCreate` callback
	  // the other ones will call `onUpdate` callback
	  if (!this.state.isCreated) {
	    this.state.isCreated = true;
	    this.options.onCreate(data);
	  } else {
	    this.options.onUpdate(data);
	  }
	}

	/**
	 * Helper used to know if the given modifier is enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @returns {Boolean}
	 */
	function isModifierEnabled(modifiers, modifierName) {
	  return modifiers.some(function (_ref) {
	    var name = _ref.name,
	        enabled = _ref.enabled;
	    return enabled && name === modifierName;
	  });
	}

	/**
	 * Get the prefixed supported property name
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} property (camelCase)
	 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
	 */
	function getSupportedPropertyName(property) {
	  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
	  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

	  for (var i = 0; i < prefixes.length; i++) {
	    var prefix = prefixes[i];
	    var toCheck = prefix ? '' + prefix + upperProp : property;
	    if (typeof document.body.style[toCheck] !== 'undefined') {
	      return toCheck;
	    }
	  }
	  return null;
	}

	/**
	 * Destroys the popper.
	 * @method
	 * @memberof Popper
	 */
	function destroy() {
	  this.state.isDestroyed = true;

	  // touch DOM only if `applyStyle` modifier is enabled
	  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
	    this.popper.removeAttribute('x-placement');
	    this.popper.style.position = '';
	    this.popper.style.top = '';
	    this.popper.style.left = '';
	    this.popper.style.right = '';
	    this.popper.style.bottom = '';
	    this.popper.style.willChange = '';
	    this.popper.style[getSupportedPropertyName('transform')] = '';
	  }

	  this.disableEventListeners();

	  // remove the popper if user explicity asked for the deletion on destroy
	  // do not use `remove` because IE11 doesn't support it
	  if (this.options.removeOnDestroy) {
	    this.popper.parentNode.removeChild(this.popper);
	  }
	  return this;
	}

	/**
	 * Get the window associated with the element
	 * @argument {Element} element
	 * @returns {Window}
	 */
	function getWindow(element) {
	  var ownerDocument = element.ownerDocument;
	  return ownerDocument ? ownerDocument.defaultView : window;
	}

	function attachToScrollParents(scrollParent, event, callback, scrollParents) {
	  var isBody = scrollParent.nodeName === 'BODY';
	  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
	  target.addEventListener(event, callback, { passive: true });

	  if (!isBody) {
	    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
	  }
	  scrollParents.push(target);
	}

	/**
	 * Setup needed event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function setupEventListeners(reference, options, state, updateBound) {
	  // Resize event listener on window
	  state.updateBound = updateBound;
	  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

	  // Scroll event listener on scroll parents
	  var scrollElement = getScrollParent(reference);
	  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
	  state.scrollElement = scrollElement;
	  state.eventsEnabled = true;

	  return state;
	}

	/**
	 * It will add resize/scroll events and start recalculating
	 * position of the popper element when they are triggered.
	 * @method
	 * @memberof Popper
	 */
	function enableEventListeners() {
	  if (!this.state.eventsEnabled) {
	    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
	  }
	}

	/**
	 * Remove event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function removeEventListeners(reference, state) {
	  // Remove resize event listener on window
	  getWindow(reference).removeEventListener('resize', state.updateBound);

	  // Remove scroll event listener on scroll parents
	  state.scrollParents.forEach(function (target) {
	    target.removeEventListener('scroll', state.updateBound);
	  });

	  // Reset state
	  state.updateBound = null;
	  state.scrollParents = [];
	  state.scrollElement = null;
	  state.eventsEnabled = false;
	  return state;
	}

	/**
	 * It will remove resize/scroll events and won't recalculate popper position
	 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
	 * unless you call `update` method manually.
	 * @method
	 * @memberof Popper
	 */
	function disableEventListeners() {
	  if (this.state.eventsEnabled) {
	    cancelAnimationFrame(this.scheduleUpdate);
	    this.state = removeEventListeners(this.reference, this.state);
	  }
	}

	/**
	 * Tells if a given input is a number
	 * @method
	 * @memberof Popper.Utils
	 * @param {*} input to check
	 * @return {Boolean}
	 */
	function isNumeric(n) {
	  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	}

	/**
	 * Set the style to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the style to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setStyles(element, styles) {
	  Object.keys(styles).forEach(function (prop) {
	    var unit = '';
	    // add unit if the value is numeric and is one of the following
	    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
	      unit = 'px';
	    }
	    element.style[prop] = styles[prop] + unit;
	  });
	}

	/**
	 * Set the attributes to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the attributes to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setAttributes(element, attributes) {
	  Object.keys(attributes).forEach(function (prop) {
	    var value = attributes[prop];
	    if (value !== false) {
	      element.setAttribute(prop, attributes[prop]);
	    } else {
	      element.removeAttribute(prop);
	    }
	  });
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} data.styles - List of style properties - values to apply to popper element
	 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The same data object
	 */
	function applyStyle(data) {
	  // any property present in `data.styles` will be applied to the popper,
	  // in this way we can make the 3rd party modifiers add custom styles to it
	  // Be aware, modifiers could override the properties defined in the previous
	  // lines of this modifier!
	  setStyles(data.instance.popper, data.styles);

	  // any property present in `data.attributes` will be applied to the popper,
	  // they will be set as HTML attributes of the element
	  setAttributes(data.instance.popper, data.attributes);

	  // if arrowElement is defined and arrowStyles has some properties
	  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
	    setStyles(data.arrowElement, data.arrowStyles);
	  }

	  return data;
	}

	/**
	 * Set the x-placement attribute before everything else because it could be used
	 * to add margins to the popper margins needs to be calculated to get the
	 * correct popper offsets.
	 * @method
	 * @memberof Popper.modifiers
	 * @param {HTMLElement} reference - The reference element used to position the popper
	 * @param {HTMLElement} popper - The HTML element used as popper
	 * @param {Object} options - Popper.js options
	 */
	function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
	  // compute reference element offsets
	  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

	  popper.setAttribute('x-placement', placement);

	  // Apply `position` to popper before anything else because
	  // without the position applied we can't guarantee correct computations
	  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

	  return options;
	}

	/**
	 * @function
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
	 * @returns {Object} The popper's position offsets rounded
	 *
	 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
	 * good as it can be within reason.
	 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
	 *
	 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
	 * as well on High DPI screens).
	 *
	 * Firefox prefers no rounding for positioning and does not have blurriness on
	 * high DPI screens.
	 *
	 * Only horizontal placement and left/right values need to be considered.
	 */
	function getRoundedOffsets(data, shouldRound) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	  var round = Math.round,
	      floor = Math.floor;

	  var noRound = function noRound(v) {
	    return v;
	  };

	  var referenceWidth = round(reference.width);
	  var popperWidth = round(popper.width);

	  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
	  var isVariation = data.placement.indexOf('-') !== -1;
	  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
	  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

	  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
	  var verticalToInteger = !shouldRound ? noRound : round;

	  return {
	    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
	    top: verticalToInteger(popper.top),
	    bottom: verticalToInteger(popper.bottom),
	    right: horizontalToInteger(popper.right)
	  };
	}

	var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeStyle(data, options) {
	  var x = options.x,
	      y = options.y;
	  var popper = data.offsets.popper;

	  // Remove this legacy support in Popper.js v2

	  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'applyStyle';
	  }).gpuAcceleration;
	  if (legacyGpuAccelerationOption !== undefined) {
	    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
	  }
	  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

	  var offsetParent = getOffsetParent(data.instance.popper);
	  var offsetParentRect = getBoundingClientRect(offsetParent);

	  // Styles
	  var styles = {
	    position: popper.position
	  };

	  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

	  var sideA = x === 'bottom' ? 'top' : 'bottom';
	  var sideB = y === 'right' ? 'left' : 'right';

	  // if gpuAcceleration is set to `true` and transform is supported,
	  //  we use `translate3d` to apply the position to the popper we
	  // automatically use the supported prefixed version if needed
	  var prefixedProperty = getSupportedPropertyName('transform');

	  // now, let's make a step back and look at this code closely (wtf?)
	  // If the content of the popper grows once it's been positioned, it
	  // may happen that the popper gets misplaced because of the new content
	  // overflowing its reference element
	  // To avoid this problem, we provide two options (x and y), which allow
	  // the consumer to define the offset origin.
	  // If we position a popper on top of a reference element, we can set
	  // `x` to `top` to make the popper grow towards its top instead of
	  // its bottom.
	  var left = void 0,
	      top = void 0;
	  if (sideA === 'bottom') {
	    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
	    // and not the bottom of the html element
	    if (offsetParent.nodeName === 'HTML') {
	      top = -offsetParent.clientHeight + offsets.bottom;
	    } else {
	      top = -offsetParentRect.height + offsets.bottom;
	    }
	  } else {
	    top = offsets.top;
	  }
	  if (sideB === 'right') {
	    if (offsetParent.nodeName === 'HTML') {
	      left = -offsetParent.clientWidth + offsets.right;
	    } else {
	      left = -offsetParentRect.width + offsets.right;
	    }
	  } else {
	    left = offsets.left;
	  }
	  if (gpuAcceleration && prefixedProperty) {
	    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	    styles[sideA] = 0;
	    styles[sideB] = 0;
	    styles.willChange = 'transform';
	  } else {
	    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
	    var invertTop = sideA === 'bottom' ? -1 : 1;
	    var invertLeft = sideB === 'right' ? -1 : 1;
	    styles[sideA] = top * invertTop;
	    styles[sideB] = left * invertLeft;
	    styles.willChange = sideA + ', ' + sideB;
	  }

	  // Attributes
	  var attributes = {
	    'x-placement': data.placement
	  };

	  // Update `data` attributes, styles and arrowStyles
	  data.attributes = _extends({}, attributes, data.attributes);
	  data.styles = _extends({}, styles, data.styles);
	  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

	  return data;
	}

	/**
	 * Helper used to know if the given modifier depends from another one.<br />
	 * It checks if the needed modifier is listed and enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @param {Array} modifiers - list of modifiers
	 * @param {String} requestingName - name of requesting modifier
	 * @param {String} requestedName - name of requested modifier
	 * @returns {Boolean}
	 */
	function isModifierRequired(modifiers, requestingName, requestedName) {
	  var requesting = find(modifiers, function (_ref) {
	    var name = _ref.name;
	    return name === requestingName;
	  });

	  var isRequired = !!requesting && modifiers.some(function (modifier) {
	    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
	  });

	  if (!isRequired) {
	    var _requesting = '`' + requestingName + '`';
	    var requested = '`' + requestedName + '`';
	    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
	  }
	  return isRequired;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function arrow(data, options) {
	  var _data$offsets$arrow;

	  // arrow depends on keepTogether in order to work
	  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
	    return data;
	  }

	  var arrowElement = options.element;

	  // if arrowElement is a string, suppose it's a CSS selector
	  if (typeof arrowElement === 'string') {
	    arrowElement = data.instance.popper.querySelector(arrowElement);

	    // if arrowElement is not found, don't run the modifier
	    if (!arrowElement) {
	      return data;
	    }
	  } else {
	    // if the arrowElement isn't a query selector we must check that the
	    // provided DOM node is child of its popper node
	    if (!data.instance.popper.contains(arrowElement)) {
	      console.warn('WARNING: `arrow.element` must be child of its popper element!');
	      return data;
	    }
	  }

	  var placement = data.placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

	  var len = isVertical ? 'height' : 'width';
	  var sideCapitalized = isVertical ? 'Top' : 'Left';
	  var side = sideCapitalized.toLowerCase();
	  var altSide = isVertical ? 'left' : 'top';
	  var opSide = isVertical ? 'bottom' : 'right';
	  var arrowElementSize = getOuterSizes(arrowElement)[len];

	  //
	  // extends keepTogether behavior making sure the popper and its
	  // reference have enough pixels in conjunction
	  //

	  // top/left side
	  if (reference[opSide] - arrowElementSize < popper[side]) {
	    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
	  }
	  // bottom/right side
	  if (reference[side] + arrowElementSize > popper[opSide]) {
	    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
	  }
	  data.offsets.popper = getClientRect(data.offsets.popper);

	  // compute center of the popper
	  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

	  // Compute the sideValue using the updated popper offsets
	  // take popper margin in account because we don't have this info available
	  var css = getStyleComputedProperty(data.instance.popper);
	  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
	  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
	  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

	  // prevent arrowElement from being placed not contiguously to its popper
	  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

	  data.arrowElement = arrowElement;
	  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

	  return data;
	}

	/**
	 * Get the opposite placement variation of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement variation
	 * @returns {String} flipped placement variation
	 */
	function getOppositeVariation(variation) {
	  if (variation === 'end') {
	    return 'start';
	  } else if (variation === 'start') {
	    return 'end';
	  }
	  return variation;
	}

	/**
	 * List of accepted placements to use as values of the `placement` option.<br />
	 * Valid placements are:
	 * - `auto`
	 * - `top`
	 * - `right`
	 * - `bottom`
	 * - `left`
	 *
	 * Each placement can have a variation from this list:
	 * - `-start`
	 * - `-end`
	 *
	 * Variations are interpreted easily if you think of them as the left to right
	 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
	 * is right.<br />
	 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
	 *
	 * Some valid examples are:
	 * - `top-end` (on top of reference, right aligned)
	 * - `right-start` (on right of reference, top aligned)
	 * - `bottom` (on bottom, centered)
	 * - `auto-end` (on the side with more space available, alignment depends by placement)
	 *
	 * @static
	 * @type {Array}
	 * @enum {String}
	 * @readonly
	 * @method placements
	 * @memberof Popper
	 */
	var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

	// Get rid of `auto` `auto-start` and `auto-end`
	var validPlacements = placements.slice(3);

	/**
	 * Given an initial placement, returns all the subsequent placements
	 * clockwise (or counter-clockwise).
	 *
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement - A valid placement (it accepts variations)
	 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
	 * @returns {Array} placements including their variations
	 */
	function clockwise(placement) {
	  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var index = validPlacements.indexOf(placement);
	  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
	  return counter ? arr.reverse() : arr;
	}

	var BEHAVIORS = {
	  FLIP: 'flip',
	  CLOCKWISE: 'clockwise',
	  COUNTERCLOCKWISE: 'counterclockwise'
	};

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function flip(data, options) {
	  // if `inner` modifier is enabled, we can't use the `flip` modifier
	  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
	    return data;
	  }

	  if (data.flipped && data.placement === data.originalPlacement) {
	    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	    return data;
	  }

	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

	  var placement = data.placement.split('-')[0];
	  var placementOpposite = getOppositePlacement(placement);
	  var variation = data.placement.split('-')[1] || '';

	  var flipOrder = [];

	  switch (options.behavior) {
	    case BEHAVIORS.FLIP:
	      flipOrder = [placement, placementOpposite];
	      break;
	    case BEHAVIORS.CLOCKWISE:
	      flipOrder = clockwise(placement);
	      break;
	    case BEHAVIORS.COUNTERCLOCKWISE:
	      flipOrder = clockwise(placement, true);
	      break;
	    default:
	      flipOrder = options.behavior;
	  }

	  flipOrder.forEach(function (step, index) {
	    if (placement !== step || flipOrder.length === index + 1) {
	      return data;
	    }

	    placement = data.placement.split('-')[0];
	    placementOpposite = getOppositePlacement(placement);

	    var popperOffsets = data.offsets.popper;
	    var refOffsets = data.offsets.reference;

	    // using floor because the reference offsets may contain decimals we are not going to consider here
	    var floor = Math.floor;
	    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

	    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
	    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
	    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
	    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

	    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

	    // flip the variation if required
	    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

	    if (overlapsRef || overflowsBoundaries || flippedVariation) {
	      // this boolean to detect any flip loop
	      data.flipped = true;

	      if (overlapsRef || overflowsBoundaries) {
	        placement = flipOrder[index + 1];
	      }

	      if (flippedVariation) {
	        variation = getOppositeVariation(variation);
	      }

	      data.placement = placement + (variation ? '-' + variation : '');

	      // this object contains `position`, we want to preserve it along with
	      // any additional property we may add in the future
	      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

	      data = runModifiers(data.instance.modifiers, data, 'flip');
	    }
	  });
	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function keepTogether(data) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var placement = data.placement.split('-')[0];
	  var floor = Math.floor;
	  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	  var side = isVertical ? 'right' : 'bottom';
	  var opSide = isVertical ? 'left' : 'top';
	  var measurement = isVertical ? 'width' : 'height';

	  if (popper[side] < floor(reference[opSide])) {
	    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
	  }
	  if (popper[opSide] > floor(reference[side])) {
	    data.offsets.popper[opSide] = floor(reference[side]);
	  }

	  return data;
	}

	/**
	 * Converts a string containing value + unit into a px value number
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} str - Value + unit string
	 * @argument {String} measurement - `height` or `width`
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @returns {Number|String}
	 * Value in pixels, or original string if no values were extracted
	 */
	function toValue(str, measurement, popperOffsets, referenceOffsets) {
	  // separate value from unit
	  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
	  var value = +split[1];
	  var unit = split[2];

	  // If it's not a number it's an operator, I guess
	  if (!value) {
	    return str;
	  }

	  if (unit.indexOf('%') === 0) {
	    var element = void 0;
	    switch (unit) {
	      case '%p':
	        element = popperOffsets;
	        break;
	      case '%':
	      case '%r':
	      default:
	        element = referenceOffsets;
	    }

	    var rect = getClientRect(element);
	    return rect[measurement] / 100 * value;
	  } else if (unit === 'vh' || unit === 'vw') {
	    // if is a vh or vw, we calculate the size based on the viewport
	    var size = void 0;
	    if (unit === 'vh') {
	      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	    } else {
	      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	    }
	    return size / 100 * value;
	  } else {
	    // if is an explicit pixel unit, we get rid of the unit and keep the value
	    // if is an implicit unit, it's px, and we return just the value
	    return value;
	  }
	}

	/**
	 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} offset
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @argument {String} basePlacement
	 * @returns {Array} a two cells array with x and y offsets in numbers
	 */
	function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
	  var offsets = [0, 0];

	  // Use height if placement is left or right and index is 0 otherwise use width
	  // in this way the first offset will use an axis and the second one
	  // will use the other one
	  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

	  // Split the offset string to obtain a list of values and operands
	  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
	  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
	    return frag.trim();
	  });

	  // Detect if the offset string contains a pair of values or a single one
	  // they could be separated by comma or space
	  var divider = fragments.indexOf(find(fragments, function (frag) {
	    return frag.search(/,|\s/) !== -1;
	  }));

	  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
	    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
	  }

	  // If divider is found, we divide the list of values and operands to divide
	  // them by ofset X and Y.
	  var splitRegex = /\s*,\s*|\s+/;
	  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

	  // Convert the values with units to absolute pixels to allow our computations
	  ops = ops.map(function (op, index) {
	    // Most of the units rely on the orientation of the popper
	    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
	    var mergeWithPrevious = false;
	    return op
	    // This aggregates any `+` or `-` sign that aren't considered operators
	    // e.g.: 10 + +5 => [10, +, +5]
	    .reduce(function (a, b) {
	      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
	        a[a.length - 1] = b;
	        mergeWithPrevious = true;
	        return a;
	      } else if (mergeWithPrevious) {
	        a[a.length - 1] += b;
	        mergeWithPrevious = false;
	        return a;
	      } else {
	        return a.concat(b);
	      }
	    }, [])
	    // Here we convert the string values into number values (in px)
	    .map(function (str) {
	      return toValue(str, measurement, popperOffsets, referenceOffsets);
	    });
	  });

	  // Loop trough the offsets arrays and execute the operations
	  ops.forEach(function (op, index) {
	    op.forEach(function (frag, index2) {
	      if (isNumeric(frag)) {
	        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
	      }
	    });
	  });
	  return offsets;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @argument {Number|String} options.offset=0
	 * The offset value as described in the modifier description
	 * @returns {Object} The data object, properly modified
	 */
	function offset(data, _ref) {
	  var offset = _ref.offset;
	  var placement = data.placement,
	      _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var basePlacement = placement.split('-')[0];

	  var offsets = void 0;
	  if (isNumeric(+offset)) {
	    offsets = [+offset, 0];
	  } else {
	    offsets = parseOffset(offset, popper, reference, basePlacement);
	  }

	  if (basePlacement === 'left') {
	    popper.top += offsets[0];
	    popper.left -= offsets[1];
	  } else if (basePlacement === 'right') {
	    popper.top += offsets[0];
	    popper.left += offsets[1];
	  } else if (basePlacement === 'top') {
	    popper.left += offsets[0];
	    popper.top -= offsets[1];
	  } else if (basePlacement === 'bottom') {
	    popper.left += offsets[0];
	    popper.top += offsets[1];
	  }

	  data.popper = popper;
	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function preventOverflow(data, options) {
	  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

	  // If offsetParent is the reference element, we really want to
	  // go one step up and use the next offsetParent as reference to
	  // avoid to make this modifier completely useless and look like broken
	  if (data.instance.reference === boundariesElement) {
	    boundariesElement = getOffsetParent(boundariesElement);
	  }

	  // NOTE: DOM access here
	  // resets the popper's position so that the document size can be calculated excluding
	  // the size of the popper element itself
	  var transformProp = getSupportedPropertyName('transform');
	  var popperStyles = data.instance.popper.style; // assignment to help minification
	  var top = popperStyles.top,
	      left = popperStyles.left,
	      transform = popperStyles[transformProp];

	  popperStyles.top = '';
	  popperStyles.left = '';
	  popperStyles[transformProp] = '';

	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

	  // NOTE: DOM access here
	  // restores the original style properties after the offsets have been computed
	  popperStyles.top = top;
	  popperStyles.left = left;
	  popperStyles[transformProp] = transform;

	  options.boundaries = boundaries;

	  var order = options.priority;
	  var popper = data.offsets.popper;

	  var check = {
	    primary: function primary(placement) {
	      var value = popper[placement];
	      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
	        value = Math.max(popper[placement], boundaries[placement]);
	      }
	      return defineProperty$1({}, placement, value);
	    },
	    secondary: function secondary(placement) {
	      var mainSide = placement === 'right' ? 'left' : 'top';
	      var value = popper[mainSide];
	      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
	        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
	      }
	      return defineProperty$1({}, mainSide, value);
	    }
	  };

	  order.forEach(function (placement) {
	    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
	    popper = _extends({}, popper, check[side](placement));
	  });

	  data.offsets.popper = popper;

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function shift(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var shiftvariation = placement.split('-')[1];

	  // if shift shiftvariation is specified, run the modifier
	  if (shiftvariation) {
	    var _data$offsets = data.offsets,
	        reference = _data$offsets.reference,
	        popper = _data$offsets.popper;

	    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
	    var side = isVertical ? 'left' : 'top';
	    var measurement = isVertical ? 'width' : 'height';

	    var shiftOffsets = {
	      start: defineProperty$1({}, side, reference[side]),
	      end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
	    };

	    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
	  }

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function hide(data) {
	  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
	    return data;
	  }

	  var refRect = data.offsets.reference;
	  var bound = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'preventOverflow';
	  }).boundaries;

	  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === true) {
	      return data;
	    }

	    data.hide = true;
	    data.attributes['x-out-of-boundaries'] = '';
	  } else {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === false) {
	      return data;
	    }

	    data.hide = false;
	    data.attributes['x-out-of-boundaries'] = false;
	  }

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function inner(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

	  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

	  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

	  data.placement = getOppositePlacement(placement);
	  data.offsets.popper = getClientRect(popper);

	  return data;
	}

	/**
	 * Modifier function, each modifier can have a function of this type assigned
	 * to its `fn` property.<br />
	 * These functions will be called on each update, this means that you must
	 * make sure they are performant enough to avoid performance bottlenecks.
	 *
	 * @function ModifierFn
	 * @argument {dataObject} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {dataObject} The data object, properly modified
	 */

	/**
	 * Modifiers are plugins used to alter the behavior of your poppers.<br />
	 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
	 * needed by the library.
	 *
	 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
	 * All the other properties are configurations that could be tweaked.
	 * @namespace modifiers
	 */
	var modifiers = {
	  /**
	   * Modifier used to shift the popper on the start or end of its reference
	   * element.<br />
	   * It will read the variation of the `placement` property.<br />
	   * It can be one either `-end` or `-start`.
	   * @memberof modifiers
	   * @inner
	   */
	  shift: {
	    /** @prop {number} order=100 - Index used to define the order of execution */
	    order: 100,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: shift
	  },

	  /**
	   * The `offset` modifier can shift your popper on both its axis.
	   *
	   * It accepts the following units:
	   * - `px` or unit-less, interpreted as pixels
	   * - `%` or `%r`, percentage relative to the length of the reference element
	   * - `%p`, percentage relative to the length of the popper element
	   * - `vw`, CSS viewport width unit
	   * - `vh`, CSS viewport height unit
	   *
	   * For length is intended the main axis relative to the placement of the popper.<br />
	   * This means that if the placement is `top` or `bottom`, the length will be the
	   * `width`. In case of `left` or `right`, it will be the `height`.
	   *
	   * You can provide a single value (as `Number` or `String`), or a pair of values
	   * as `String` divided by a comma or one (or more) white spaces.<br />
	   * The latter is a deprecated method because it leads to confusion and will be
	   * removed in v2.<br />
	   * Additionally, it accepts additions and subtractions between different units.
	   * Note that multiplications and divisions aren't supported.
	   *
	   * Valid examples are:
	   * ```
	   * 10
	   * '10%'
	   * '10, 10'
	   * '10%, 10'
	   * '10 + 10%'
	   * '10 - 5vh + 3%'
	   * '-10px + 5vh, 5px - 6%'
	   * ```
	   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
	   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
	   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  offset: {
	    /** @prop {number} order=200 - Index used to define the order of execution */
	    order: 200,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: offset,
	    /** @prop {Number|String} offset=0
	     * The offset value as described in the modifier description
	     */
	    offset: 0
	  },

	  /**
	   * Modifier used to prevent the popper from being positioned outside the boundary.
	   *
	   * A scenario exists where the reference itself is not within the boundaries.<br />
	   * We can say it has "escaped the boundaries" — or just "escaped".<br />
	   * In this case we need to decide whether the popper should either:
	   *
	   * - detach from the reference and remain "trapped" in the boundaries, or
	   * - if it should ignore the boundary and "escape with its reference"
	   *
	   * When `escapeWithReference` is set to`true` and reference is completely
	   * outside its boundaries, the popper will overflow (or completely leave)
	   * the boundaries in order to remain attached to the edge of the reference.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  preventOverflow: {
	    /** @prop {number} order=300 - Index used to define the order of execution */
	    order: 300,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: preventOverflow,
	    /**
	     * @prop {Array} [priority=['left','right','top','bottom']]
	     * Popper will try to prevent overflow following these priorities by default,
	     * then, it could overflow on the left and on top of the `boundariesElement`
	     */
	    priority: ['left', 'right', 'top', 'bottom'],
	    /**
	     * @prop {number} padding=5
	     * Amount of pixel used to define a minimum distance between the boundaries
	     * and the popper. This makes sure the popper always has a little padding
	     * between the edges of its container
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='scrollParent'
	     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
	     * `viewport` or any DOM element.
	     */
	    boundariesElement: 'scrollParent'
	  },

	  /**
	   * Modifier used to make sure the reference and its popper stay near each other
	   * without leaving any gap between the two. Especially useful when the arrow is
	   * enabled and you want to ensure that it points to its reference element.
	   * It cares only about the first axis. You can still have poppers with margin
	   * between the popper and its reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  keepTogether: {
	    /** @prop {number} order=400 - Index used to define the order of execution */
	    order: 400,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: keepTogether
	  },

	  /**
	   * This modifier is used to move the `arrowElement` of the popper to make
	   * sure it is positioned between the reference element and its popper element.
	   * It will read the outer size of the `arrowElement` node to detect how many
	   * pixels of conjunction are needed.
	   *
	   * It has no effect if no `arrowElement` is provided.
	   * @memberof modifiers
	   * @inner
	   */
	  arrow: {
	    /** @prop {number} order=500 - Index used to define the order of execution */
	    order: 500,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: arrow,
	    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
	    element: '[x-arrow]'
	  },

	  /**
	   * Modifier used to flip the popper's placement when it starts to overlap its
	   * reference element.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   *
	   * **NOTE:** this modifier will interrupt the current update cycle and will
	   * restart it if it detects the need to flip the placement.
	   * @memberof modifiers
	   * @inner
	   */
	  flip: {
	    /** @prop {number} order=600 - Index used to define the order of execution */
	    order: 600,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: flip,
	    /**
	     * @prop {String|Array} behavior='flip'
	     * The behavior used to change the popper's placement. It can be one of
	     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
	     * placements (with optional variations)
	     */
	    behavior: 'flip',
	    /**
	     * @prop {number} padding=5
	     * The popper will flip if it hits the edges of the `boundariesElement`
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='viewport'
	     * The element which will define the boundaries of the popper position.
	     * The popper will never be placed outside of the defined boundaries
	     * (except if `keepTogether` is enabled)
	     */
	    boundariesElement: 'viewport'
	  },

	  /**
	   * Modifier used to make the popper flow toward the inner of the reference element.
	   * By default, when this modifier is disabled, the popper will be placed outside
	   * the reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  inner: {
	    /** @prop {number} order=700 - Index used to define the order of execution */
	    order: 700,
	    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
	    enabled: false,
	    /** @prop {ModifierFn} */
	    fn: inner
	  },

	  /**
	   * Modifier used to hide the popper when its reference element is outside of the
	   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
	   * be used to hide with a CSS selector the popper when its reference is
	   * out of boundaries.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   * @memberof modifiers
	   * @inner
	   */
	  hide: {
	    /** @prop {number} order=800 - Index used to define the order of execution */
	    order: 800,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: hide
	  },

	  /**
	   * Computes the style that will be applied to the popper element to gets
	   * properly positioned.
	   *
	   * Note that this modifier will not touch the DOM, it just prepares the styles
	   * so that `applyStyle` modifier can apply it. This separation is useful
	   * in case you need to replace `applyStyle` with a custom implementation.
	   *
	   * This modifier has `850` as `order` value to maintain backward compatibility
	   * with previous versions of Popper.js. Expect the modifiers ordering method
	   * to change in future major versions of the library.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  computeStyle: {
	    /** @prop {number} order=850 - Index used to define the order of execution */
	    order: 850,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: computeStyle,
	    /**
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3D transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties
	     */
	    gpuAcceleration: true,
	    /**
	     * @prop {string} [x='bottom']
	     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
	     * Change this if your popper should grow in a direction different from `bottom`
	     */
	    x: 'bottom',
	    /**
	     * @prop {string} [x='left']
	     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
	     * Change this if your popper should grow in a direction different from `right`
	     */
	    y: 'right'
	  },

	  /**
	   * Applies the computed styles to the popper element.
	   *
	   * All the DOM manipulations are limited to this modifier. This is useful in case
	   * you want to integrate Popper.js inside a framework or view library and you
	   * want to delegate all the DOM manipulations to it.
	   *
	   * Note that if you disable this modifier, you must make sure the popper element
	   * has its position set to `absolute` before Popper.js can do its work!
	   *
	   * Just disable this modifier and define your own to achieve the desired effect.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  applyStyle: {
	    /** @prop {number} order=900 - Index used to define the order of execution */
	    order: 900,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: applyStyle,
	    /** @prop {Function} */
	    onLoad: applyStyleOnLoad,
	    /**
	     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3D transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties
	     */
	    gpuAcceleration: undefined
	  }
	};

	/**
	 * The `dataObject` is an object containing all the information used by Popper.js.
	 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
	 * @name dataObject
	 * @property {Object} data.instance The Popper.js instance
	 * @property {String} data.placement Placement applied to popper
	 * @property {String} data.originalPlacement Placement originally defined on init
	 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
	 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
	 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
	 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.boundaries Offsets of the popper boundaries
	 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
	 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
	 */

	/**
	 * Default options provided to Popper.js constructor.<br />
	 * These can be overridden using the `options` argument of Popper.js.<br />
	 * To override an option, simply pass an object with the same
	 * structure of the `options` object, as the 3rd argument. For example:
	 * ```
	 * new Popper(ref, pop, {
	 *   modifiers: {
	 *     preventOverflow: { enabled: false }
	 *   }
	 * })
	 * ```
	 * @type {Object}
	 * @static
	 * @memberof Popper
	 */
	var Defaults = {
	  /**
	   * Popper's placement.
	   * @prop {Popper.placements} placement='bottom'
	   */
	  placement: 'bottom',

	  /**
	   * Set this to true if you want popper to position it self in 'fixed' mode
	   * @prop {Boolean} positionFixed=false
	   */
	  positionFixed: false,

	  /**
	   * Whether events (resize, scroll) are initially enabled.
	   * @prop {Boolean} eventsEnabled=true
	   */
	  eventsEnabled: true,

	  /**
	   * Set to true if you want to automatically remove the popper when
	   * you call the `destroy` method.
	   * @prop {Boolean} removeOnDestroy=false
	   */
	  removeOnDestroy: false,

	  /**
	   * Callback called when the popper is created.<br />
	   * By default, it is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onCreate}
	   */
	  onCreate: function onCreate() {},

	  /**
	   * Callback called when the popper is updated. This callback is not called
	   * on the initialization/creation of the popper, but only on subsequent
	   * updates.<br />
	   * By default, it is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onUpdate}
	   */
	  onUpdate: function onUpdate() {},

	  /**
	   * List of modifiers used to modify the offsets before they are applied to the popper.
	   * They provide most of the functionalities of Popper.js.
	   * @prop {modifiers}
	   */
	  modifiers: modifiers
	};

	/**
	 * @callback onCreate
	 * @param {dataObject} data
	 */

	/**
	 * @callback onUpdate
	 * @param {dataObject} data
	 */

	// Utils
	// Methods
	var Popper = function () {
	  /**
	   * Creates a new Popper.js instance.
	   * @class Popper
	   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
	   * @param {HTMLElement} popper - The HTML element used as the popper
	   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
	   * @return {Object} instance - The generated Popper.js instance
	   */
	  function Popper(reference, popper) {
	    var _this = this;

	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    classCallCheck(this, Popper);

	    this.scheduleUpdate = function () {
	      return requestAnimationFrame(_this.update);
	    };

	    // make update() debounced, so that it only runs at most once-per-tick
	    this.update = debounce(this.update.bind(this));

	    // with {} we create a new object with the options inside it
	    this.options = _extends({}, Popper.Defaults, options);

	    // init state
	    this.state = {
	      isDestroyed: false,
	      isCreated: false,
	      scrollParents: []
	    };

	    // get reference and popper elements (allow jQuery wrappers)
	    this.reference = reference && reference.jquery ? reference[0] : reference;
	    this.popper = popper && popper.jquery ? popper[0] : popper;

	    // Deep merge modifiers options
	    this.options.modifiers = {};
	    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
	      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
	    });

	    // Refactoring modifiers' list (Object => Array)
	    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
	      return _extends({
	        name: name
	      }, _this.options.modifiers[name]);
	    })
	    // sort the modifiers by order
	    .sort(function (a, b) {
	      return a.order - b.order;
	    });

	    // modifiers have the ability to execute arbitrary code when Popper.js get inited
	    // such code is executed in the same order of its modifier
	    // they could add new properties to their options configuration
	    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
	    this.modifiers.forEach(function (modifierOptions) {
	      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
	        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
	      }
	    });

	    // fire the first update to position the popper in the right place
	    this.update();

	    var eventsEnabled = this.options.eventsEnabled;
	    if (eventsEnabled) {
	      // setup event listeners, they will take care of update the position in specific situations
	      this.enableEventListeners();
	    }

	    this.state.eventsEnabled = eventsEnabled;
	  }

	  // We can't use class properties because they don't get listed in the
	  // class prototype and break stuff like Sinon stubs


	  createClass(Popper, [{
	    key: 'update',
	    value: function update$$1() {
	      return update.call(this);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy$$1() {
	      return destroy.call(this);
	    }
	  }, {
	    key: 'enableEventListeners',
	    value: function enableEventListeners$$1() {
	      return enableEventListeners.call(this);
	    }
	  }, {
	    key: 'disableEventListeners',
	    value: function disableEventListeners$$1() {
	      return disableEventListeners.call(this);
	    }

	    /**
	     * Schedules an update. It will run on the next UI update available.
	     * @method scheduleUpdate
	     * @memberof Popper
	     */


	    /**
	     * Collection of utilities useful when writing custom modifiers.
	     * Starting from version 1.7, this method is available only if you
	     * include `popper-utils.js` before `popper.js`.
	     *
	     * **DEPRECATION**: This way to access PopperUtils is deprecated
	     * and will be removed in v2! Use the PopperUtils module directly instead.
	     * Due to the high instability of the methods contained in Utils, we can't
	     * guarantee them to follow semver. Use them at your own risk!
	     * @static
	     * @private
	     * @type {Object}
	     * @deprecated since version 1.8
	     * @member Utils
	     * @memberof Popper
	     */

	  }]);
	  return Popper;
	}();

	/**
	 * The `referenceObject` is an object that provides an interface compatible with Popper.js
	 * and lets you use it as replacement of a real DOM node.<br />
	 * You can use this method to position a popper relatively to a set of coordinates
	 * in case you don't have a DOM node to use as reference.
	 *
	 * ```
	 * new Popper(referenceObject, popperNode);
	 * ```
	 *
	 * NB: This feature isn't supported in Internet Explorer 10.
	 * @name referenceObject
	 * @property {Function} data.getBoundingClientRect
	 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
	 * @property {number} data.clientWidth
	 * An ES6 getter that will return the width of the virtual reference element.
	 * @property {number} data.clientHeight
	 * An ES6 getter that will return the height of the virtual reference element.
	 */


	Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
	Popper.placements = placements;
	Popper.Defaults = Defaults;

	var key = '__global_unique_id__';

	var gud = function() {
	  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction$1 = function emptyFunction() {};

	emptyFunction$1.thatReturns = makeEmptyFunction;
	emptyFunction$1.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction$1.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction$1.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction$1.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction$1.thatReturnsArgument = function (arg) {
	  return arg;
	};

	var emptyFunction_1 = emptyFunction$1;

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction_1;

	var warning_1 = warning;

	var implementation = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _react2 = _interopRequireDefault(React__default);



	var _propTypes2 = _interopRequireDefault(propTypes);



	var _gud2 = _interopRequireDefault(gud);



	var _warning2 = _interopRequireDefault(warning_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MAX_SIGNED_31_BIT_INT = 1073741823;

	// Inlined Object.is polyfill.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	function objectIs(x, y) {
	  if (x === y) {
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function createEventEmitter(value) {
	  var handlers = [];
	  return {
	    on: function on(handler) {
	      handlers.push(handler);
	    },
	    off: function off(handler) {
	      handlers = handlers.filter(function (h) {
	        return h !== handler;
	      });
	    },
	    get: function get() {
	      return value;
	    },
	    set: function set(newValue, changedBits) {
	      value = newValue;
	      handlers.forEach(function (handler) {
	        return handler(value, changedBits);
	      });
	    }
	  };
	}

	function onlyChild(children) {
	  return Array.isArray(children) ? children[0] : children;
	}

	function createReactContext(defaultValue, calculateChangedBits) {
	  var _Provider$childContex, _Consumer$contextType;

	  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

	  var Provider = function (_Component) {
	    _inherits(Provider, _Component);

	    function Provider() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, Provider);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    Provider.prototype.getChildContext = function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
	    };

	    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (this.props.value !== nextProps.value) {
	        var oldValue = this.props.value;
	        var newValue = nextProps.value;
	        var changedBits = void 0;

	        if (objectIs(oldValue, newValue)) {
	          changedBits = 0; // No change
	        } else {
	          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

	          changedBits |= 0;

	          if (changedBits !== 0) {
	            this.emitter.set(nextProps.value, changedBits);
	          }
	        }
	      }
	    };

	    Provider.prototype.render = function render() {
	      return this.props.children;
	    };

	    return Provider;
	  }(React__default.Component);

	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

	  var Consumer = function (_Component2) {
	    _inherits(Consumer, _Component2);

	    function Consumer() {
	      var _temp2, _this2, _ret2;

	      _classCallCheck(this, Consumer);

	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
	        value: _this2.getValue()
	      }, _this2.onUpdate = function (newValue, changedBits) {
	        var observedBits = _this2.observedBits | 0;
	        if ((observedBits & changedBits) !== 0) {
	          _this2.setState({ value: _this2.getValue() });
	        }
	      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	    }

	    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var observedBits = nextProps.observedBits;

	      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
	      : observedBits;
	    };

	    Consumer.prototype.componentDidMount = function componentDidMount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].on(this.onUpdate);
	      }
	      var observedBits = this.props.observedBits;

	      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
	      : observedBits;
	    };

	    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].off(this.onUpdate);
	      }
	    };

	    Consumer.prototype.getValue = function getValue() {
	      if (this.context[contextProp]) {
	        return this.context[contextProp].get();
	      } else {
	        return defaultValue;
	      }
	    };

	    Consumer.prototype.render = function render() {
	      return onlyChild(this.props.children)(this.state.value);
	    };

	    return Consumer;
	  }(React__default.Component);

	  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


	  return {
	    Provider: Provider,
	    Consumer: Consumer
	  };
	}

	exports.default = createReactContext;
	module.exports = exports['default'];
	});

	unwrapExports(implementation);

	var lib = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _react2 = _interopRequireDefault(React__default);



	var _implementation2 = _interopRequireDefault(implementation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createContext || _implementation2.default;
	module.exports = exports['default'];
	});

	var createContext = unwrapExports(lib);

	var ManagerContext = createContext({
	  setReferenceNode: undefined,
	  referenceNode: undefined
	});

	var Manager =
	/*#__PURE__*/
	function (_React$Component) {
	  inheritsLoose(Manager, _React$Component);

	  function Manager() {
	    var _this;

	    _this = _React$Component.call(this) || this;

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setReferenceNode", function (referenceNode) {
	      if (!referenceNode || _this.state.context.referenceNode === referenceNode) {
	        return;
	      }

	      _this.setState(function (_ref) {
	        var context = _ref.context;
	        return {
	          context: _extends_1({}, context, {
	            referenceNode: referenceNode
	          })
	        };
	      });
	    });

	    _this.state = {
	      context: {
	        setReferenceNode: _this.setReferenceNode,
	        referenceNode: undefined
	      }
	    };
	    return _this;
	  }

	  var _proto = Manager.prototype;

	  _proto.render = function render() {
	    return React.createElement(ManagerContext.Provider, {
	      value: this.state.context
	    }, this.props.children);
	  };

	  return Manager;
	}(React.Component);

	/**
	 * Takes an argument and if it's an array, returns the first item in the array,
	 * otherwise returns the argument. Used for Preact compatibility.
	 */
	var unwrapArray = function unwrapArray(arg) {
	  return Array.isArray(arg) ? arg[0] : arg;
	};
	/**
	 * Takes a maybe-undefined function and arbitrary args and invokes the function
	 * only if it is defined.
	 */

	var safeInvoke = function safeInvoke(fn) {
	  if (typeof fn === "function") {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return fn.apply(void 0, args);
	  }
	};

	var initialStyle = {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  opacity: 0,
	  pointerEvents: 'none'
	};
	var initialArrowStyle = {};
	var InnerPopper =
	/*#__PURE__*/
	function (_React$Component) {
	  inheritsLoose(InnerPopper, _React$Component);

	  function InnerPopper() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
	      data: undefined,
	      placement: undefined
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "popperInstance", void 0);

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "popperNode", null);

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "arrowNode", null);

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setPopperNode", function (popperNode) {
	      if (!popperNode || _this.popperNode === popperNode) return;
	      safeInvoke(_this.props.innerRef, popperNode);
	      _this.popperNode = popperNode;

	      _this.updatePopperInstance();
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setArrowNode", function (arrowNode) {
	      _this.arrowNode = arrowNode;
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "updateStateModifier", {
	      enabled: true,
	      order: 900,
	      fn: function fn(data) {
	        var placement = data.placement;

	        _this.setState({
	          data: data,
	          placement: placement
	        });

	        return data;
	      }
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getOptions", function () {
	      return {
	        placement: _this.props.placement,
	        eventsEnabled: _this.props.eventsEnabled,
	        positionFixed: _this.props.positionFixed,
	        modifiers: _extends_1({}, _this.props.modifiers, {
	          arrow: _extends_1({}, _this.props.modifiers && _this.props.modifiers.arrow, {
	            enabled: !!_this.arrowNode,
	            element: _this.arrowNode
	          }),
	          applyStyle: {
	            enabled: false
	          },
	          updateStateModifier: _this.updateStateModifier
	        })
	      };
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getPopperStyle", function () {
	      return !_this.popperNode || !_this.state.data ? initialStyle : _extends_1({
	        position: _this.state.data.offsets.popper.position
	      }, _this.state.data.styles);
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getPopperPlacement", function () {
	      return !_this.state.data ? undefined : _this.state.placement;
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getArrowStyle", function () {
	      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getOutOfBoundariesState", function () {
	      return _this.state.data ? _this.state.data.hide : undefined;
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "destroyPopperInstance", function () {
	      if (!_this.popperInstance) return;

	      _this.popperInstance.destroy();

	      _this.popperInstance = null;
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "updatePopperInstance", function () {
	      _this.destroyPopperInstance();

	      var _assertThisInitialize = assertThisInitialized(assertThisInitialized(_this)),
	          popperNode = _assertThisInitialize.popperNode;

	      var referenceElement = _this.props.referenceElement;
	      if (!referenceElement || !popperNode) return;
	      _this.popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
	    });

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "scheduleUpdate", function () {
	      if (_this.popperInstance) {
	        _this.popperInstance.scheduleUpdate();
	      }
	    });

	    return _this;
	  }

	  var _proto = InnerPopper.prototype;

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	    // If the Popper.js options have changed, update the instance (destroy + create)
	    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
	      this.updatePopperInstance();
	    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
	      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
	    } // A placement difference in state means popper determined a new placement
	    // apart from the props value. By the time the popper element is rendered with
	    // the new position Popper has already measured it, if the place change triggers
	    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


	    if (prevState.placement !== this.state.placement) {
	      this.scheduleUpdate();
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    safeInvoke(this.props.innerRef, null);
	    this.destroyPopperInstance();
	  };

	  _proto.render = function render() {
	    return unwrapArray(this.props.children)({
	      ref: this.setPopperNode,
	      style: this.getPopperStyle(),
	      placement: this.getPopperPlacement(),
	      outOfBoundaries: this.getOutOfBoundariesState(),
	      scheduleUpdate: this.scheduleUpdate,
	      arrowProps: {
	        ref: this.setArrowNode,
	        style: this.getArrowStyle()
	      }
	    });
	  };

	  return InnerPopper;
	}(React.Component);

	defineProperty(InnerPopper, "defaultProps", {
	  placement: 'bottom',
	  eventsEnabled: true,
	  referenceElement: undefined,
	  positionFixed: false
	});
	function Popper$1(_ref) {
	  var referenceElement = _ref.referenceElement,
	      props = objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

	  return React.createElement(ManagerContext.Consumer, null, function (_ref2) {
	    var referenceNode = _ref2.referenceNode;
	    return React.createElement(InnerPopper, _extends_1({
	      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
	    }, props));
	  });
	}

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var warning$1 = function() {};

	var warning_1$1 = warning$1;

	var InnerReference =
	/*#__PURE__*/
	function (_React$Component) {
	  inheritsLoose(InnerReference, _React$Component);

	  function InnerReference() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

	    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "refHandler", function (node) {
	      safeInvoke(_this.props.innerRef, node);
	      safeInvoke(_this.props.setReferenceNode, node);
	    });

	    return _this;
	  }

	  var _proto = InnerReference.prototype;

	  _proto.render = function render() {
	    warning_1$1(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
	    return unwrapArray(this.props.children)({
	      ref: this.refHandler
	    });
	  };

	  return InnerReference;
	}(React.Component);

	function Reference(props) {
	  return React.createElement(ManagerContext.Consumer, null, function (_ref) {
	    var setReferenceNode = _ref.setReferenceNode;
	    return React.createElement(InnerReference, _extends_1({
	      setReferenceNode: setReferenceNode
	    }, props));
	  });
	}

	// Public components
	 // Public types

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};









	var classCallCheck$1 = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass$1 = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();







	var _extends$1 = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};



	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};











	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	function generateYears(year, noOfYear, minDate, maxDate) {
	  var list = [];
	  for (var i = 0; i < 2 * noOfYear + 1; i++) {
	    var newYear = year + noOfYear - i;
	    var isInRange = true;

	    if (minDate) {
	      isInRange = minDate.year() <= newYear;
	    }

	    if (maxDate && isInRange) {
	      isInRange = maxDate.year() >= newYear;
	    }

	    if (isInRange) {
	      list.push(newYear);
	    }
	  }

	  return list;
	}

	var YearDropdownOptions = function (_React$Component) {
	  inherits(YearDropdownOptions, _React$Component);

	  function YearDropdownOptions(props) {
	    classCallCheck$1(this, YearDropdownOptions);

	    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.renderOptions = function () {
	      var selectedYear = _this.props.year;
	      var options = _this.state.yearsList.map(function (year) {
	        return React__default.createElement(
	          "div",
	          {
	            className: selectedYear === year ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option",
	            key: year,
	            ref: year,
	            onClick: _this.onChange.bind(_this, year)
	          },
	          selectedYear === year ? React__default.createElement(
	            "span",
	            { className: "react-datepicker__year-option--selected" },
	            "\u2713"
	          ) : "",
	          year
	        );
	      });

	      var minYear = _this.props.minDate ? _this.props.minDate.year() : null;
	      var maxYear = _this.props.maxDate ? _this.props.maxDate.year() : null;

	      if (!maxYear || !_this.state.yearsList.find(function (year) {
	        return year === maxYear;
	      })) {
	        options.unshift(React__default.createElement(
	          "div",
	          {
	            className: "react-datepicker__year-option",
	            ref: "upcoming",
	            key: "upcoming",
	            onClick: _this.incrementYears
	          },
	          React__default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
	        ));
	      }

	      if (!minYear || !_this.state.yearsList.find(function (year) {
	        return year === minYear;
	      })) {
	        options.push(React__default.createElement(
	          "div",
	          {
	            className: "react-datepicker__year-option",
	            ref: "previous",
	            key: "previous",
	            onClick: _this.decrementYears
	          },
	          React__default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
	        ));
	      }

	      return options;
	    };

	    _this.onChange = function (year) {
	      _this.props.onChange(year);
	    };

	    _this.handleClickOutside = function () {
	      _this.props.onCancel();
	    };

	    _this.shiftYears = function (amount) {
	      var years = _this.state.yearsList.map(function (year) {
	        return year + amount;
	      });

	      _this.setState({
	        yearsList: years
	      });
	    };

	    _this.incrementYears = function () {
	      return _this.shiftYears(1);
	    };

	    _this.decrementYears = function () {
	      return _this.shiftYears(-1);
	    };

	    var yearDropdownItemNumber = props.yearDropdownItemNumber,
	        scrollableYearDropdown = props.scrollableYearDropdown;

	    var noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);

	    _this.state = {
	      yearsList: generateYears(_this.props.year, noOfYear, _this.props.minDate, _this.props.maxDate)
	    };
	    return _this;
	  }

	  YearDropdownOptions.prototype.render = function render() {
	    var dropdownClass = classnames({
	      "react-datepicker__year-dropdown": true,
	      "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
	    });

	    return React__default.createElement(
	      "div",
	      { className: dropdownClass },
	      this.renderOptions()
	    );
	  };

	  return YearDropdownOptions;
	}(React__default.Component);

	YearDropdownOptions.propTypes = {
	  minDate: propTypes.object,
	  maxDate: propTypes.object,
	  onCancel: propTypes.func.isRequired,
	  onChange: propTypes.func.isRequired,
	  scrollableYearDropdown: propTypes.bool,
	  year: propTypes.number.isRequired,
	  yearDropdownItemNumber: propTypes.number
	};

	var dayOfWeekCodes = {
	  1: "mon",
	  2: "tue",
	  3: "wed",
	  4: "thu",
	  5: "fri",
	  6: "sat",
	  7: "sun"
	};

	// These functions are not exported so
	// that we avoid magic strings like 'days'
	function set$1(date, unit, to) {
	  return date.set(unit, to);
	}

	function add(date, amount, unit) {
	  return date.add(amount, unit);
	}

	function subtract(date, amount, unit) {
	  return date.subtract(amount, unit);
	}

	function get$1(date, unit) {
	  return date.get(unit);
	}

	function getStartOf(date, unit) {
	  return date.startOf(unit);
	}

	// ** Date Constructors **

	function newDate(point) {
	  return moment(point);
	}

	function newDateWithOffset(utcOffset) {
	  return moment().utc().utcOffset(utcOffset);
	}

	function now(maybeFixedUtcOffset) {
	  if (maybeFixedUtcOffset == null) {
	    return newDate();
	  }
	  return newDateWithOffset(maybeFixedUtcOffset);
	}

	function cloneDate(date) {
	  return date.clone();
	}

	function parseDate(value, _ref) {
	  var dateFormat = _ref.dateFormat,
	      locale = _ref.locale;

	  var m = moment(value, dateFormat, locale || moment.locale(), true);
	  return m.isValid() ? m : null;
	}

	// ** Date "Reflection" **

	function isMoment(date) {
	  return moment.isMoment(date);
	}

	function isDate(date) {
	  return moment.isDate(date);
	}

	// ** Date Formatting **

	function formatDate(date, format) {
	  return date.format(format);
	}

	function safeDateFormat(date, _ref2) {
	  var dateFormat = _ref2.dateFormat,
	      locale = _ref2.locale;

	  return date && date.clone().locale(locale || moment.locale()).format(Array.isArray(dateFormat) ? dateFormat[0] : dateFormat) || "";
	}

	// ** Date Setters **

	function setTime(date, _ref3) {
	  var hour = _ref3.hour,
	      minute = _ref3.minute,
	      second = _ref3.second;

	  date.set({ hour: hour, minute: minute, second: second });
	  return date;
	}

	function setMonth(date, month) {
	  return set$1(date, "month", month);
	}

	function setYear(date, year) {
	  return set$1(date, "year", year);
	}



	// ** Date Getters **

	function getSecond(date) {
	  return get$1(date, "second");
	}

	function getMinute(date) {
	  return get$1(date, "minute");
	}

	function getHour(date) {
	  return get$1(date, "hour");
	}

	// Returns day of week
	function getDay(date) {
	  return get$1(date, "day");
	}

	function getWeek(date) {
	  return get$1(date, "week");
	}

	function getMonth(date) {
	  return get$1(date, "month");
	}

	function getYear(date) {
	  return get$1(date, "year");
	}

	// Returns day of month
	function getDate(date) {
	  return get$1(date, "date");
	}



	function getDayOfWeekCode(day) {
	  return dayOfWeekCodes[day.isoWeekday()];
	}

	// *** Start of ***

	function getStartOfDay(date) {
	  return getStartOf(date, "day");
	}

	function getStartOfWeek(date) {
	  return getStartOf(date, "week");
	}
	function getStartOfMonth(date) {
	  return getStartOf(date, "month");
	}

	function getStartOfDate(date) {
	  return getStartOf(date, "date");
	}

	// *** End of ***





	// ** Date Math **

	// *** Addition ***

	function addMinutes(date, amount) {
	  return add(date, amount, "minutes");
	}

	function addHours(date, amount) {
	  return add(date, amount, "hours");
	}

	function addDays(date, amount) {
	  return add(date, amount, "days");
	}

	function addWeeks(date, amount) {
	  return add(date, amount, "weeks");
	}

	function addMonths(date, amount) {
	  return add(date, amount, "months");
	}

	function addYears(date, amount) {
	  return add(date, amount, "years");
	}

	// *** Subtraction ***
	function subtractDays(date, amount) {
	  return subtract(date, amount, "days");
	}

	function subtractWeeks(date, amount) {
	  return subtract(date, amount, "weeks");
	}

	function subtractMonths(date, amount) {
	  return subtract(date, amount, "months");
	}

	function subtractYears(date, amount) {
	  return subtract(date, amount, "years");
	}

	// ** Date Comparison **

	function isBefore(date1, date2) {
	  return date1.isBefore(date2);
	}

	function isAfter(date1, date2) {
	  return date1.isAfter(date2);
	}

	function equals(date1, date2) {
	  return date1.isSame(date2);
	}

	function isSameYear(date1, date2) {
	  if (date1 && date2) {
	    return date1.isSame(date2, "year");
	  } else {
	    return !date1 && !date2;
	  }
	}

	function isSameMonth(date1, date2) {
	  if (date1 && date2) {
	    return date1.isSame(date2, "month");
	  } else {
	    return !date1 && !date2;
	  }
	}

	function isSameDay(moment1, moment2) {
	  if (moment1 && moment2) {
	    return moment1.isSame(moment2, "day");
	  } else {
	    return !moment1 && !moment2;
	  }
	}



	function isDayInRange(day, startDate, endDate) {
	  var before = startDate.clone().startOf("day").subtract(1, "seconds");
	  var after = endDate.clone().startOf("day").add(1, "seconds");
	  return day.clone().startOf("day").isBetween(before, after);
	}

	// *** Diffing ***



	// ** Date Localization **

	function localizeDate(date, locale) {
	  return date.clone().locale(locale || moment.locale());
	}







	function getLocaleData(date) {
	  return date.localeData();
	}

	function getLocaleDataForLocale(locale) {
	  return moment.localeData(locale);
	}

	function getFormattedWeekdayInLocale(locale, date, formatFunc) {
	  return formatFunc(locale.weekdays(date));
	}

	function getWeekdayMinInLocale(locale, date) {
	  return locale.weekdaysMin(date);
	}

	function getWeekdayShortInLocale(locale, date) {
	  return locale.weekdaysShort(date);
	}

	// TODO what is this format exactly?
	function getMonthInLocale(locale, date, format) {
	  return locale.months(date, format);
	}

	function getMonthShortInLocale(locale, date) {
	  return locale.monthsShort(date);
	}

	// ** Utils for some components **

	function isDayDisabled(day) {
	  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      minDate = _ref4.minDate,
	      maxDate = _ref4.maxDate,
	      excludeDates = _ref4.excludeDates,
	      includeDates = _ref4.includeDates,
	      filterDate = _ref4.filterDate;

	  return minDate && day.isBefore(minDate, "day") || maxDate && day.isAfter(maxDate, "day") || excludeDates && excludeDates.some(function (excludeDate) {
	    return isSameDay(day, excludeDate);
	  }) || includeDates && !includeDates.some(function (includeDate) {
	    return isSameDay(day, includeDate);
	  }) || filterDate && !filterDate(day.clone()) || false;
	}

	function isOutOfBounds(day) {
	  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      minDate = _ref5.minDate,
	      maxDate = _ref5.maxDate;

	  return minDate && day.isBefore(minDate, "day") || maxDate && day.isAfter(maxDate, "day");
	}

	function isTimeDisabled(time, disabledTimes) {
	  var l = disabledTimes.length;
	  for (var i = 0; i < l; i++) {
	    if (disabledTimes[i].get("hours") === time.get("hours") && disabledTimes[i].get("minutes") === time.get("minutes")) {
	      return true;
	    }
	  }

	  return false;
	}

	function isTimeInDisabledRange(time, _ref6) {
	  var minTime = _ref6.minTime,
	      maxTime = _ref6.maxTime;

	  if (!minTime || !maxTime) {
	    throw new Error("Both minTime and maxTime props required");
	  }

	  var base = moment().hours(0).minutes(0).seconds(0);
	  var baseTime = base.clone().hours(time.get("hours")).minutes(time.get("minutes"));
	  var min = base.clone().hours(minTime.get("hours")).minutes(minTime.get("minutes"));
	  var max = base.clone().hours(maxTime.get("hours")).minutes(maxTime.get("minutes"));

	  return !(baseTime.isSameOrAfter(min) && baseTime.isSameOrBefore(max));
	}

	function allDaysDisabledBefore(day, unit) {
	  var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      minDate = _ref7.minDate,
	      includeDates = _ref7.includeDates;

	  var dateBefore = day.clone().subtract(1, unit);
	  return minDate && dateBefore.isBefore(minDate, unit) || includeDates && includeDates.every(function (includeDate) {
	    return dateBefore.isBefore(includeDate, unit);
	  }) || false;
	}

	function allDaysDisabledAfter(day, unit) {
	  var _ref8 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      maxDate = _ref8.maxDate,
	      includeDates = _ref8.includeDates;

	  var dateAfter = day.clone().add(1, unit);
	  return maxDate && dateAfter.isAfter(maxDate, unit) || includeDates && includeDates.every(function (includeDate) {
	    return dateAfter.isAfter(includeDate, unit);
	  }) || false;
	}

	function getEffectiveMinDate(_ref9) {
	  var minDate = _ref9.minDate,
	      includeDates = _ref9.includeDates;

	  if (includeDates && minDate) {
	    return moment.min(includeDates.filter(function (includeDate) {
	      return minDate.isSameOrBefore(includeDate, "day");
	    }));
	  } else if (includeDates) {
	    return moment.min(includeDates);
	  } else {
	    return minDate;
	  }
	}

	function getEffectiveMaxDate(_ref10) {
	  var maxDate = _ref10.maxDate,
	      includeDates = _ref10.includeDates;

	  if (includeDates && maxDate) {
	    return moment.max(includeDates.filter(function (includeDate) {
	      return maxDate.isSameOrAfter(includeDate, "day");
	    }));
	  } else if (includeDates) {
	    return moment.max(includeDates);
	  } else {
	    return maxDate;
	  }
	}

	function getHightLightDaysMap() {
	  var highlightDates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var defaultClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "react-datepicker__day--highlighted";

	  var dateClasses = new Map();
	  for (var i = 0, len = highlightDates.length; i < len; i++) {
	    var obj = highlightDates[i];
	    if (isMoment(obj)) {
	      var key = obj.format("MM.DD.YYYY");
	      var classNamesArr = dateClasses.get(key) || [];
	      if (!classNamesArr.includes(defaultClassName)) {
	        classNamesArr.push(defaultClassName);
	        dateClasses.set(key, classNamesArr);
	      }
	    } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
	      var keys = Object.keys(obj);
	      var className = keys[0];
	      var arrOfMoments = obj[keys[0]];
	      if (typeof className === "string" && arrOfMoments.constructor === Array) {
	        for (var k = 0, _len = arrOfMoments.length; k < _len; k++) {
	          var _key = arrOfMoments[k].format("MM.DD.YYYY");
	          var _classNamesArr = dateClasses.get(_key) || [];
	          if (!_classNamesArr.includes(className)) {
	            _classNamesArr.push(className);
	            dateClasses.set(_key, _classNamesArr);
	          }
	        }
	      }
	    }
	  }

	  return dateClasses;
	}

	function timesToInjectAfter(startOfDay, currentTime, currentMultiplier, intervals, injectedTimes) {
	  var l = injectedTimes.length;
	  var times = [];
	  for (var i = 0; i < l; i++) {
	    var injectedTime = addMinutes(addHours(cloneDate(startOfDay), getHour(injectedTimes[i])), getMinute(injectedTimes[i]));
	    var nextTime = addMinutes(cloneDate(startOfDay), (currentMultiplier + 1) * intervals);

	    if (injectedTime.isBetween(currentTime, nextTime)) {
	      times.push(injectedTimes[i]);
	    }
	  }

	  return times;
	}

	var WrappedYearDropdownOptions = onClickOutsideHOC(YearDropdownOptions);

	var YearDropdown = function (_React$Component) {
	  inherits(YearDropdown, _React$Component);

	  function YearDropdown() {
	    var _temp, _this, _ret;

	    classCallCheck$1(this, YearDropdown);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      dropdownVisible: false
	    }, _this.renderSelectOptions = function () {
	      var minYear = _this.props.minDate ? getYear(_this.props.minDate) : 1900;
	      var maxYear = _this.props.maxDate ? getYear(_this.props.maxDate) : 2100;

	      var options = [];
	      for (var i = minYear; i <= maxYear; i++) {
	        options.push(React__default.createElement(
	          "option",
	          { key: i, value: i },
	          i
	        ));
	      }
	      return options;
	    }, _this.onSelectChange = function (e) {
	      _this.onChange(e.target.value);
	    }, _this.renderSelectMode = function () {
	      return React__default.createElement(
	        "select",
	        {
	          value: _this.props.year,
	          className: "react-datepicker__year-select",
	          onChange: _this.onSelectChange
	        },
	        _this.renderSelectOptions()
	      );
	    }, _this.renderReadView = function (visible) {
	      return React__default.createElement(
	        "div",
	        {
	          key: "read",
	          style: { visibility: visible ? "visible" : "hidden" },
	          className: "react-datepicker__year-read-view",
	          onClick: function onClick(event) {
	            return _this.toggleDropdown(event);
	          }
	        },
	        React__default.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
	        React__default.createElement(
	          "span",
	          { className: "react-datepicker__year-read-view--selected-year" },
	          _this.props.year
	        )
	      );
	    }, _this.renderDropdown = function () {
	      return React__default.createElement(WrappedYearDropdownOptions, {
	        key: "dropdown",
	        ref: "options",
	        year: _this.props.year,
	        onChange: _this.onChange,
	        onCancel: _this.toggleDropdown,
	        minDate: _this.props.minDate,
	        maxDate: _this.props.maxDate,
	        scrollableYearDropdown: _this.props.scrollableYearDropdown,
	        yearDropdownItemNumber: _this.props.yearDropdownItemNumber
	      });
	    }, _this.renderScrollMode = function () {
	      var dropdownVisible = _this.state.dropdownVisible;

	      var result = [_this.renderReadView(!dropdownVisible)];
	      if (dropdownVisible) {
	        result.unshift(_this.renderDropdown());
	      }
	      return result;
	    }, _this.onChange = function (year) {
	      _this.toggleDropdown();
	      if (year === _this.props.year) return;
	      _this.props.onChange(year);
	    }, _this.toggleDropdown = function (event) {
	      _this.setState({
	        dropdownVisible: !_this.state.dropdownVisible
	      }, function () {
	        if (_this.props.adjustDateOnChange) {
	          _this.handleYearChange(_this.props.date, event);
	        }
	      });
	    }, _this.handleYearChange = function (date, event) {
	      _this.onSelect(date, event);
	      _this.setOpen();
	    }, _this.onSelect = function (date, event) {
	      if (_this.props.onSelect) {
	        _this.props.onSelect(date, event);
	      }
	    }, _this.setOpen = function () {
	      if (_this.props.setOpen) {
	        _this.props.setOpen(true);
	      }
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  YearDropdown.prototype.render = function render() {
	    var renderedDropdown = void 0;
	    switch (this.props.dropdownMode) {
	      case "scroll":
	        renderedDropdown = this.renderScrollMode();
	        break;
	      case "select":
	        renderedDropdown = this.renderSelectMode();
	        break;
	    }

	    return React__default.createElement(
	      "div",
	      {
	        className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--" + this.props.dropdownMode
	      },
	      renderedDropdown
	    );
	  };

	  return YearDropdown;
	}(React__default.Component);

	YearDropdown.propTypes = {
	  adjustDateOnChange: propTypes.bool,
	  dropdownMode: propTypes.oneOf(["scroll", "select"]).isRequired,
	  maxDate: propTypes.object,
	  minDate: propTypes.object,
	  onChange: propTypes.func.isRequired,
	  scrollableYearDropdown: propTypes.bool,
	  year: propTypes.number.isRequired,
	  yearDropdownItemNumber: propTypes.number,
	  date: propTypes.object,
	  onSelect: propTypes.func,
	  setOpen: propTypes.func
	};

	var MonthDropdownOptions = function (_React$Component) {
	  inherits(MonthDropdownOptions, _React$Component);

	  function MonthDropdownOptions() {
	    var _temp, _this, _ret;

	    classCallCheck$1(this, MonthDropdownOptions);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderOptions = function () {
	      return _this.props.monthNames.map(function (month, i) {
	        return React__default.createElement(
	          "div",
	          {
	            className: _this.props.month === i ? "react-datepicker__month-option --selected_month" : "react-datepicker__month-option",
	            key: month,
	            ref: month,
	            onClick: _this.onChange.bind(_this, i)
	          },
	          _this.props.month === i ? React__default.createElement(
	            "span",
	            { className: "react-datepicker__month-option--selected" },
	            "\u2713"
	          ) : "",
	          month
	        );
	      });
	    }, _this.onChange = function (month) {
	      return _this.props.onChange(month);
	    }, _this.handleClickOutside = function () {
	      return _this.props.onCancel();
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  MonthDropdownOptions.prototype.render = function render() {
	    return React__default.createElement(
	      "div",
	      { className: "react-datepicker__month-dropdown" },
	      this.renderOptions()
	    );
	  };

	  return MonthDropdownOptions;
	}(React__default.Component);

	MonthDropdownOptions.propTypes = {
	  onCancel: propTypes.func.isRequired,
	  onChange: propTypes.func.isRequired,
	  month: propTypes.number.isRequired,
	  monthNames: propTypes.arrayOf(propTypes.string.isRequired).isRequired
	};

	var WrappedMonthDropdownOptions = onClickOutsideHOC(MonthDropdownOptions);

	var MonthDropdown = function (_React$Component) {
	  inherits(MonthDropdown, _React$Component);

	  function MonthDropdown() {
	    var _temp, _this, _ret;

	    classCallCheck$1(this, MonthDropdown);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      dropdownVisible: false
	    }, _this.renderSelectOptions = function (monthNames) {
	      return monthNames.map(function (M, i) {
	        return React__default.createElement(
	          "option",
	          { key: i, value: i },
	          M
	        );
	      });
	    }, _this.renderSelectMode = function (monthNames) {
	      return React__default.createElement(
	        "select",
	        {
	          value: _this.props.month,
	          className: "react-datepicker__month-select",
	          onChange: function onChange(e) {
	            return _this.onChange(e.target.value);
	          }
	        },
	        _this.renderSelectOptions(monthNames)
	      );
	    }, _this.renderReadView = function (visible, monthNames) {
	      return React__default.createElement(
	        "div",
	        {
	          key: "read",
	          style: { visibility: visible ? "visible" : "hidden" },
	          className: "react-datepicker__month-read-view",
	          onClick: _this.toggleDropdown
	        },
	        React__default.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
	        React__default.createElement(
	          "span",
	          { className: "react-datepicker__month-read-view--selected-month" },
	          monthNames[_this.props.month]
	        )
	      );
	    }, _this.renderDropdown = function (monthNames) {
	      return React__default.createElement(WrappedMonthDropdownOptions, {
	        key: "dropdown",
	        ref: "options",
	        month: _this.props.month,
	        monthNames: monthNames,
	        onChange: _this.onChange,
	        onCancel: _this.toggleDropdown
	      });
	    }, _this.renderScrollMode = function (monthNames) {
	      var dropdownVisible = _this.state.dropdownVisible;

	      var result = [_this.renderReadView(!dropdownVisible, monthNames)];
	      if (dropdownVisible) {
	        result.unshift(_this.renderDropdown(monthNames));
	      }
	      return result;
	    }, _this.onChange = function (month) {
	      _this.toggleDropdown();
	      if (month !== _this.props.month) {
	        _this.props.onChange(month);
	      }
	    }, _this.toggleDropdown = function () {
	      return _this.setState({
	        dropdownVisible: !_this.state.dropdownVisible
	      });
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  MonthDropdown.prototype.render = function render() {
	    var _this2 = this;

	    var localeData = getLocaleDataForLocale(this.props.locale);
	    var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function (M) {
	      return getMonthShortInLocale(localeData, newDate({ M: M }));
	    } : function (M) {
	      return getMonthInLocale(localeData, newDate({ M: M }), _this2.props.dateFormat);
	    });

	    var renderedDropdown = void 0;
	    switch (this.props.dropdownMode) {
	      case "scroll":
	        renderedDropdown = this.renderScrollMode(monthNames);
	        break;
	      case "select":
	        renderedDropdown = this.renderSelectMode(monthNames);
	        break;
	    }

	    return React__default.createElement(
	      "div",
	      {
	        className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--" + this.props.dropdownMode
	      },
	      renderedDropdown
	    );
	  };

	  return MonthDropdown;
	}(React__default.Component);

	MonthDropdown.propTypes = {
	  dropdownMode: propTypes.oneOf(["scroll", "select"]).isRequired,
	  locale: propTypes.string,
	  dateFormat: propTypes.string.isRequired,
	  month: propTypes.number.isRequired,
	  onChange: propTypes.func.isRequired,
	  useShortMonthInDropdown: propTypes.bool
	};

	function generateMonthYears(minDate, maxDate) {
	  var list = [];

	  var currDate = getStartOfMonth(cloneDate(minDate));
	  var lastDate = getStartOfMonth(cloneDate(maxDate));

	  while (!isAfter(currDate, lastDate)) {
	    list.push(cloneDate(currDate));

	    addMonths(currDate, 1);
	  }

	  return list;
	}

	var MonthYearDropdownOptions = function (_React$Component) {
	  inherits(MonthYearDropdownOptions, _React$Component);

	  function MonthYearDropdownOptions(props) {
	    classCallCheck$1(this, MonthYearDropdownOptions);

	    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.renderOptions = function () {
	      return _this.state.monthYearsList.map(function (monthYear) {
	        var monthYearPoint = monthYear.valueOf();

	        var isSameMonthYear = isSameYear(_this.props.date, monthYear) && isSameMonth(_this.props.date, monthYear);

	        return React__default.createElement(
	          "div",
	          {
	            className: isSameMonthYear ? "react-datepicker__month-year-option --selected_month-year" : "react-datepicker__month-year-option",
	            key: monthYearPoint,
	            ref: monthYearPoint,
	            onClick: _this.onChange.bind(_this, monthYearPoint)
	          },
	          isSameMonthYear ? React__default.createElement(
	            "span",
	            { className: "react-datepicker__month-year-option--selected" },
	            "\u2713"
	          ) : "",
	          formatDate(monthYear, _this.props.dateFormat)
	        );
	      });
	    };

	    _this.onChange = function (monthYear) {
	      return _this.props.onChange(monthYear);
	    };

	    _this.handleClickOutside = function () {
	      _this.props.onCancel();
	    };

	    _this.state = {
	      monthYearsList: generateMonthYears(_this.props.minDate, _this.props.maxDate)
	    };
	    return _this;
	  }

	  MonthYearDropdownOptions.prototype.render = function render() {
	    var dropdownClass = classnames({
	      "react-datepicker__month-year-dropdown": true,
	      "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
	    });

	    return React__default.createElement(
	      "div",
	      { className: dropdownClass },
	      this.renderOptions()
	    );
	  };

	  return MonthYearDropdownOptions;
	}(React__default.Component);

	MonthYearDropdownOptions.propTypes = {
	  minDate: propTypes.object.isRequired,
	  maxDate: propTypes.object.isRequired,
	  onCancel: propTypes.func.isRequired,
	  onChange: propTypes.func.isRequired,
	  scrollableMonthYearDropdown: propTypes.bool,
	  date: propTypes.object.isRequired,
	  dateFormat: propTypes.string.isRequired
	};

	var WrappedMonthYearDropdownOptions = onClickOutsideHOC(MonthYearDropdownOptions);

	var MonthYearDropdown = function (_React$Component) {
	  inherits(MonthYearDropdown, _React$Component);

	  function MonthYearDropdown() {
	    var _temp, _this, _ret;

	    classCallCheck$1(this, MonthYearDropdown);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      dropdownVisible: false
	    }, _this.renderSelectOptions = function () {
	      var currDate = getStartOfMonth(localizeDate(_this.props.minDate, _this.props.locale));
	      var lastDate = getStartOfMonth(localizeDate(_this.props.maxDate, _this.props.locale));

	      var options = [];

	      while (!isAfter(currDate, lastDate)) {
	        var timepoint = currDate.valueOf();
	        options.push(React__default.createElement(
	          "option",
	          { key: timepoint, value: timepoint },
	          formatDate(currDate, _this.props.dateFormat)
	        ));

	        addMonths(currDate, 1);
	      }

	      return options;
	    }, _this.onSelectChange = function (e) {
	      _this.onChange(e.target.value);
	    }, _this.renderSelectMode = function () {
	      return React__default.createElement(
	        "select",
	        {
	          value: getStartOfMonth(_this.props.date).valueOf(),
	          className: "react-datepicker__month-year-select",
	          onChange: _this.onSelectChange
	        },
	        _this.renderSelectOptions()
	      );
	    }, _this.renderReadView = function (visible) {
	      var yearMonth = formatDate(localizeDate(newDate(_this.props.date), _this.props.locale), _this.props.dateFormat);

	      return React__default.createElement(
	        "div",
	        {
	          key: "read",
	          style: { visibility: visible ? "visible" : "hidden" },
	          className: "react-datepicker__month-year-read-view",
	          onClick: function onClick(event) {
	            return _this.toggleDropdown(event);
	          }
	        },
	        React__default.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
	        React__default.createElement(
	          "span",
	          { className: "react-datepicker__month-year-read-view--selected-month-year" },
	          yearMonth
	        )
	      );
	    }, _this.renderDropdown = function () {
	      return React__default.createElement(WrappedMonthYearDropdownOptions, {
	        key: "dropdown",
	        ref: "options",
	        date: _this.props.date,
	        dateFormat: _this.props.dateFormat,
	        onChange: _this.onChange,
	        onCancel: _this.toggleDropdown,
	        minDate: localizeDate(_this.props.minDate, _this.props.locale),
	        maxDate: localizeDate(_this.props.maxDate, _this.props.locale),
	        scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown
	      });
	    }, _this.renderScrollMode = function () {
	      var dropdownVisible = _this.state.dropdownVisible;

	      var result = [_this.renderReadView(!dropdownVisible)];
	      if (dropdownVisible) {
	        result.unshift(_this.renderDropdown());
	      }
	      return result;
	    }, _this.onChange = function (monthYearPoint) {
	      _this.toggleDropdown();

	      var changedDate = newDate(parseInt(monthYearPoint));

	      if (isSameYear(_this.props.date, changedDate) && isSameMonth(_this.props.date, changedDate)) {
	        return;
	      }

	      _this.props.onChange(changedDate);
	    }, _this.toggleDropdown = function () {
	      return _this.setState({
	        dropdownVisible: !_this.state.dropdownVisible
	      });
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  MonthYearDropdown.prototype.render = function render() {
	    var renderedDropdown = void 0;
	    switch (this.props.dropdownMode) {
	      case "scroll":
	        renderedDropdown = this.renderScrollMode();
	        break;
	      case "select":
	        renderedDropdown = this.renderSelectMode();
	        break;
	    }

	    return React__default.createElement(
	      "div",
	      {
	        className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--" + this.props.dropdownMode
	      },
	      renderedDropdown
	    );
	  };

	  return MonthYearDropdown;
	}(React__default.Component);

	MonthYearDropdown.propTypes = {
	  dropdownMode: propTypes.oneOf(["scroll", "select"]).isRequired,
	  dateFormat: propTypes.string.isRequired,
	  locale: propTypes.string,
	  maxDate: propTypes.object.isRequired,
	  minDate: propTypes.object.isRequired,
	  date: propTypes.object.isRequired,
	  onChange: propTypes.func.isRequired,
	  scrollableMonthYearDropdown: propTypes.bool
	};

	var Day = function (_React$Component) {
	  inherits(Day, _React$Component);

	  function Day() {
	    var _temp, _this, _ret;

	    classCallCheck$1(this, Day);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (!_this.isDisabled() && _this.props.onClick) {
	        _this.props.onClick(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.isDisabled() && _this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.isSameDay = function (other) {
	      return isSameDay(_this.props.day, other);
	    }, _this.isKeyboardSelected = function () {
	      return !_this.props.disabledKeyboardNavigation && !_this.props.inline && !_this.isSameDay(_this.props.selected) && _this.isSameDay(_this.props.preSelection);
	    }, _this.isDisabled = function () {
	      return isDayDisabled(_this.props.day, _this.props);
	    }, _this.getHighLightedClass = function (defaultClassName) {
	      var _this$props = _this.props,
	          day = _this$props.day,
	          highlightDates = _this$props.highlightDates;


	      if (!highlightDates) {
	        return false;
	      }

	      // Looking for className in the Map of {'day string, 'className'}
	      var dayStr = day.format("MM.DD.YYYY");
	      return highlightDates.get(dayStr);
	    }, _this.isInRange = function () {
	      var _this$props2 = _this.props,
	          day = _this$props2.day,
	          startDate = _this$props2.startDate,
	          endDate = _this$props2.endDate;

	      if (!startDate || !endDate) {
	        return false;
	      }
	      return isDayInRange(day, startDate, endDate);
	    }, _this.isInSelectingRange = function () {
	      var _this$props3 = _this.props,
	          day = _this$props3.day,
	          selectsStart = _this$props3.selectsStart,
	          selectsEnd = _this$props3.selectsEnd,
	          selectingDate = _this$props3.selectingDate,
	          startDate = _this$props3.startDate,
	          endDate = _this$props3.endDate;


	      if (!(selectsStart || selectsEnd) || !selectingDate || _this.isDisabled()) {
	        return false;
	      }

	      if (selectsStart && endDate && selectingDate.isSameOrBefore(endDate)) {
	        return isDayInRange(day, selectingDate, endDate);
	      }

	      if (selectsEnd && startDate && selectingDate.isSameOrAfter(startDate)) {
	        return isDayInRange(day, startDate, selectingDate);
	      }

	      return false;
	    }, _this.isSelectingRangeStart = function () {
	      if (!_this.isInSelectingRange()) {
	        return false;
	      }

	      var _this$props4 = _this.props,
	          day = _this$props4.day,
	          selectingDate = _this$props4.selectingDate,
	          startDate = _this$props4.startDate,
	          selectsStart = _this$props4.selectsStart;


	      if (selectsStart) {
	        return isSameDay(day, selectingDate);
	      } else {
	        return isSameDay(day, startDate);
	      }
	    }, _this.isSelectingRangeEnd = function () {
	      if (!_this.isInSelectingRange()) {
	        return false;
	      }

	      var _this$props5 = _this.props,
	          day = _this$props5.day,
	          selectingDate = _this$props5.selectingDate,
	          endDate = _this$props5.endDate,
	          selectsEnd = _this$props5.selectsEnd;


	      if (selectsEnd) {
	        return isSameDay(day, selectingDate);
	      } else {
	        return isSameDay(day, endDate);
	      }
	    }, _this.isRangeStart = function () {
	      var _this$props6 = _this.props,
	          day = _this$props6.day,
	          startDate = _this$props6.startDate,
	          endDate = _this$props6.endDate;

	      if (!startDate || !endDate) {
	        return false;
	      }
	      return isSameDay(startDate, day);
	    }, _this.isRangeEnd = function () {
	      var _this$props7 = _this.props,
	          day = _this$props7.day,
	          startDate = _this$props7.startDate,
	          endDate = _this$props7.endDate;

	      if (!startDate || !endDate) {
	        return false;
	      }
	      return isSameDay(endDate, day);
	    }, _this.isWeekend = function () {
	      var weekday = getDay(_this.props.day);
	      return weekday === 0 || weekday === 6;
	    }, _this.isOutsideMonth = function () {
	      return _this.props.month !== undefined && _this.props.month !== getMonth(_this.props.day);
	    }, _this.getClassNames = function (date) {
	      var dayClassName = _this.props.dayClassName ? _this.props.dayClassName(date) : undefined;
	      return classnames("react-datepicker__day", dayClassName, "react-datepicker__day--" + getDayOfWeekCode(_this.props.day), {
	        "react-datepicker__day--disabled": _this.isDisabled(),
	        "react-datepicker__day--selected": _this.isSameDay(_this.props.selected),
	        "react-datepicker__day--keyboard-selected": _this.isKeyboardSelected(),
	        "react-datepicker__day--range-start": _this.isRangeStart(),
	        "react-datepicker__day--range-end": _this.isRangeEnd(),
	        "react-datepicker__day--in-range": _this.isInRange(),
	        "react-datepicker__day--in-selecting-range": _this.isInSelectingRange(),
	        "react-datepicker__day--selecting-range-start": _this.isSelectingRangeStart(),
	        "react-datepicker__day--selecting-range-end": _this.isSelectingRangeEnd(),
	        "react-datepicker__day--today": _this.isSameDay(now(_this.props.utcOffset)),
	        "react-datepicker__day--weekend": _this.isWeekend(),
	        "react-datepicker__day--outside-month": _this.isOutsideMonth()
	      }, _this.getHighLightedClass("react-datepicker__day--highlighted"));
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  Day.prototype.render = function render() {
	    return React__default.createElement(
	      "div",
	      {
	        className: this.getClassNames(this.props.day),
	        onClick: this.handleClick,
	        onMouseEnter: this.handleMouseEnter,
	        "aria-label": "day-" + getDate(this.props.day),
	        role: "option"
	      },
	      this.props.renderDayContents ? this.props.renderDayContents(getDate(this.props.day)) : getDate(this.props.day)
	    );
	  };

	  return Day;
	}(React__default.Component);

	Day.propTypes = {
	  disabledKeyboardNavigation: propTypes.bool,
	  day: propTypes.object.isRequired,
	  dayClassName: propTypes.func,
	  endDate: propTypes.object,
	  highlightDates: propTypes.instanceOf(Map),
	  inline: propTypes.bool,
	  month: propTypes.number,
	  onClick: propTypes.func,
	  onMouseEnter: propTypes.func,
	  preSelection: propTypes.object,
	  selected: propTypes.object,
	  selectingDate: propTypes.object,
	  selectsEnd: propTypes.bool,
	  selectsStart: propTypes.bool,
	  startDate: propTypes.object,
	  utcOffset: propTypes.oneOfType([propTypes.number, propTypes.string]),
	  renderDayContents: propTypes.func
	};

	var WeekNumber = function (_React$Component) {
	  inherits(WeekNumber, _React$Component);

	  function WeekNumber() {
	    var _temp, _this, _ret;

	    classCallCheck$1(this, WeekNumber);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
	      if (_this.props.onClick) {
	        _this.props.onClick(event);
	      }
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  WeekNumber.prototype.render = function render() {
	    var weekNumberClasses = {
	      "react-datepicker__week-number": true,
	      "react-datepicker__week-number--clickable": !!this.props.onClick
	    };
	    return React__default.createElement(
	      "div",
	      {
	        className: classnames(weekNumberClasses),
	        "aria-label": "week-" + this.props.weekNumber,
	        onClick: this.handleClick
	      },
	      this.props.weekNumber
	    );
	  };

	  return WeekNumber;
	}(React__default.Component);

	WeekNumber.propTypes = {
	  weekNumber: propTypes.number.isRequired,
	  onClick: propTypes.func
	};

	var Week = function (_React$Component) {
	  inherits(Week, _React$Component);

	  function Week() {
	    var _temp, _this, _ret;

	    classCallCheck$1(this, Week);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
	      if (_this.props.onDayClick) {
	        _this.props.onDayClick(day, event);
	      }
	    }, _this.handleDayMouseEnter = function (day) {
	      if (_this.props.onDayMouseEnter) {
	        _this.props.onDayMouseEnter(day);
	      }
	    }, _this.handleWeekClick = function (day, weekNumber, event) {
	      if (typeof _this.props.onWeekSelect === "function") {
	        _this.props.onWeekSelect(day, weekNumber, event);
	      }
	    }, _this.formatWeekNumber = function (startOfWeek) {
	      if (_this.props.formatWeekNumber) {
	        return _this.props.formatWeekNumber(startOfWeek);
	      }
	      return getWeek(startOfWeek);
	    }, _this.renderDays = function () {
	      var startOfWeek = getStartOfWeek(cloneDate(_this.props.day));
	      var days = [];
	      var weekNumber = _this.formatWeekNumber(startOfWeek);
	      if (_this.props.showWeekNumber) {
	        var onClickAction = _this.props.onWeekSelect ? _this.handleWeekClick.bind(_this, startOfWeek, weekNumber) : undefined;
	        days.push(React__default.createElement(WeekNumber, { key: "W", weekNumber: weekNumber, onClick: onClickAction }));
	      }
	      return days.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
	        var day = addDays(cloneDate(startOfWeek), offset);
	        return React__default.createElement(Day, {
	          key: offset,
	          day: day,
	          month: _this.props.month,
	          onClick: _this.handleDayClick.bind(_this, day),
	          onMouseEnter: _this.handleDayMouseEnter.bind(_this, day),
	          minDate: _this.props.minDate,
	          maxDate: _this.props.maxDate,
	          excludeDates: _this.props.excludeDates,
	          includeDates: _this.props.includeDates,
	          inline: _this.props.inline,
	          highlightDates: _this.props.highlightDates,
	          selectingDate: _this.props.selectingDate,
	          filterDate: _this.props.filterDate,
	          preSelection: _this.props.preSelection,
	          selected: _this.props.selected,
	          selectsStart: _this.props.selectsStart,
	          selectsEnd: _this.props.selectsEnd,
	          startDate: _this.props.startDate,
	          endDate: _this.props.endDate,
	          dayClassName: _this.props.dayClassName,
	          utcOffset: _this.props.utcOffset,
	          renderDayContents: _this.props.renderDayContents,
	          disabledKeyboardNavigation: _this.props.disabledKeyboardNavigation
	        });
	      }));
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  Week.prototype.render = function render() {
	    return React__default.createElement(
	      "div",
	      { className: "react-datepicker__week" },
	      this.renderDays()
	    );
	  };

	  return Week;
	}(React__default.Component);

	Week.propTypes = {
	  disabledKeyboardNavigation: propTypes.bool,
	  day: propTypes.object.isRequired,
	  dayClassName: propTypes.func,
	  endDate: propTypes.object,
	  excludeDates: propTypes.array,
	  filterDate: propTypes.func,
	  formatWeekNumber: propTypes.func,
	  highlightDates: propTypes.instanceOf(Map),
	  includeDates: propTypes.array,
	  inline: propTypes.bool,
	  maxDate: propTypes.object,
	  minDate: propTypes.object,
	  month: propTypes.number,
	  onDayClick: propTypes.func,
	  onDayMouseEnter: propTypes.func,
	  onWeekSelect: propTypes.func,
	  preSelection: propTypes.object,
	  selected: propTypes.object,
	  selectingDate: propTypes.object,
	  selectsEnd: propTypes.bool,
	  selectsStart: propTypes.bool,
	  showWeekNumber: propTypes.bool,
	  startDate: propTypes.object,
	  utcOffset: propTypes.oneOfType([propTypes.number, propTypes.string]),
	  renderDayContents: propTypes.func
	};

	var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;

	var Month = function (_React$Component) {
	  inherits(Month, _React$Component);

	  function Month() {
	    var _temp, _this, _ret;

	    classCallCheck$1(this, Month);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
	      if (_this.props.onDayClick) {
	        _this.props.onDayClick(day, event);
	      }
	    }, _this.handleDayMouseEnter = function (day) {
	      if (_this.props.onDayMouseEnter) {
	        _this.props.onDayMouseEnter(day);
	      }
	    }, _this.handleMouseLeave = function () {
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave();
	      }
	    }, _this.isWeekInMonth = function (startOfWeek) {
	      var day = _this.props.day;
	      var endOfWeek = addDays(cloneDate(startOfWeek), 6);
	      return isSameMonth(startOfWeek, day) || isSameMonth(endOfWeek, day);
	    }, _this.renderWeeks = function () {
	      var weeks = [];
	      var isFixedHeight = _this.props.fixedHeight;
	      var currentWeekStart = getStartOfWeek(getStartOfMonth(cloneDate(_this.props.day)));
	      var i = 0;
	      var breakAfterNextPush = false;

	      while (true) {
	        weeks.push(React__default.createElement(Week, {
	          key: i,
	          day: currentWeekStart,
	          month: getMonth(_this.props.day),
	          onDayClick: _this.handleDayClick,
	          onDayMouseEnter: _this.handleDayMouseEnter,
	          onWeekSelect: _this.props.onWeekSelect,
	          formatWeekNumber: _this.props.formatWeekNumber,
	          minDate: _this.props.minDate,
	          maxDate: _this.props.maxDate,
	          excludeDates: _this.props.excludeDates,
	          includeDates: _this.props.includeDates,
	          inline: _this.props.inline,
	          highlightDates: _this.props.highlightDates,
	          selectingDate: _this.props.selectingDate,
	          filterDate: _this.props.filterDate,
	          preSelection: _this.props.preSelection,
	          selected: _this.props.selected,
	          selectsStart: _this.props.selectsStart,
	          selectsEnd: _this.props.selectsEnd,
	          showWeekNumber: _this.props.showWeekNumbers,
	          startDate: _this.props.startDate,
	          endDate: _this.props.endDate,
	          dayClassName: _this.props.dayClassName,
	          utcOffset: _this.props.utcOffset,
	          disabledKeyboardNavigation: _this.props.disabledKeyboardNavigation,
	          renderDayContents: _this.props.renderDayContents
	        }));

	        if (breakAfterNextPush) break;

	        i++;
	        currentWeekStart = addWeeks(cloneDate(currentWeekStart), 1);

	        // If one of these conditions is true, we will either break on this week
	        // or break on the next week
	        var isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
	        var isNonFixedAndOutOfMonth = !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);

	        if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
	          if (_this.props.peekNextMonth) {
	            breakAfterNextPush = true;
	          } else {
	            break;
	          }
	        }
	      }

	      return weeks;
	    }, _this.getClassNames = function () {
	      var _this$props = _this.props,
	          selectingDate = _this$props.selectingDate,
	          selectsStart = _this$props.selectsStart,
	          selectsEnd = _this$props.selectsEnd;

	      return classnames("react-datepicker__month", {
	        "react-datepicker__month--selecting-range": selectingDate && (selectsStart || selectsEnd)
	      });
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  Month.prototype.render = function render() {
	    return React__default.createElement(
	      "div",
	      {
	        className: this.getClassNames(),
	        onMouseLeave: this.handleMouseLeave,
	        role: "listbox",
	        "aria-label": "month-" + this.props.day.format("YYYY-MM")
	      },
	      this.renderWeeks()
	    );
	  };

	  return Month;
	}(React__default.Component);

	Month.propTypes = {
	  disabledKeyboardNavigation: propTypes.bool,
	  day: propTypes.object.isRequired,
	  dayClassName: propTypes.func,
	  endDate: propTypes.object,
	  excludeDates: propTypes.array,
	  filterDate: propTypes.func,
	  fixedHeight: propTypes.bool,
	  formatWeekNumber: propTypes.func,
	  highlightDates: propTypes.instanceOf(Map),
	  includeDates: propTypes.array,
	  inline: propTypes.bool,
	  maxDate: propTypes.object,
	  minDate: propTypes.object,
	  onDayClick: propTypes.func,
	  onDayMouseEnter: propTypes.func,
	  onMouseLeave: propTypes.func,
	  onWeekSelect: propTypes.func,
	  peekNextMonth: propTypes.bool,
	  preSelection: propTypes.object,
	  selected: propTypes.object,
	  selectingDate: propTypes.object,
	  selectsEnd: propTypes.bool,
	  selectsStart: propTypes.bool,
	  showWeekNumbers: propTypes.bool,
	  startDate: propTypes.object,
	  utcOffset: propTypes.oneOfType([propTypes.number, propTypes.string]),
	  renderDayContents: propTypes.func
	};

	var Time = function (_React$Component) {
	  inherits(Time, _React$Component);

	  function Time() {
	    var _temp, _this, _ret;

	    classCallCheck$1(this, Time);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (time) {
	      if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || _this.props.excludeTimes && isTimeDisabled(time, _this.props.excludeTimes) || _this.props.includeTimes && !isTimeDisabled(time, _this.props.includeTimes)) {
	        return;
	      }

	      _this.props.onChange(time);
	    }, _this.liClasses = function (time, currH, currM) {
	      var classes = ["react-datepicker__time-list-item"];

	      if (currH === getHour(time) && currM === getMinute(time)) {
	        classes.push("react-datepicker__time-list-item--selected");
	      }
	      if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || _this.props.excludeTimes && isTimeDisabled(time, _this.props.excludeTimes) || _this.props.includeTimes && !isTimeDisabled(time, _this.props.includeTimes)) {
	        classes.push("react-datepicker__time-list-item--disabled");
	      }
	      if (_this.props.injectTimes && (getHour(time) * 60 + getMinute(time)) % _this.props.intervals !== 0) {
	        classes.push("react-datepicker__time-list-item--injected");
	      }

	      return classes.join(" ");
	    }, _this.renderTimes = function () {
	      var times = [];
	      var format = _this.props.format ? _this.props.format : "hh:mm A";
	      var intervals = _this.props.intervals;
	      var activeTime = _this.props.selected ? _this.props.selected : newDate();
	      var currH = getHour(activeTime);
	      var currM = getMinute(activeTime);
	      var base = getStartOfDay(newDate());
	      var multiplier = 1440 / intervals;
	      var sortedInjectTimes = _this.props.injectTimes && _this.props.injectTimes.sort(function (a, b) {
	        return a - b;
	      });
	      for (var i = 0; i < multiplier; i++) {
	        var currentTime = addMinutes(cloneDate(base), i * intervals);
	        times.push(currentTime);

	        if (sortedInjectTimes) {
	          var timesToInject = timesToInjectAfter(base, currentTime, i, intervals, sortedInjectTimes);
	          times = times.concat(timesToInject);
	        }
	      }

	      return times.map(function (time, i) {
	        return React__default.createElement(
	          "li",
	          {
	            key: i,
	            onClick: _this.handleClick.bind(_this, time),
	            className: _this.liClasses(time, currH, currM),
	            ref: function ref(li) {
	              if (currH === getHour(time) && currM === getMinute(time) || currH === getHour(time) && !_this.centerLi) {
	                _this.centerLi = li;
	              }
	            }
	          },
	          formatDate(time, format)
	        );
	      });
	    }, _temp), possibleConstructorReturn(_this, _ret);
	  }

	  Time.prototype.componentDidMount = function componentDidMount() {
	    // code to ensure selected time will always be in focus within time window when it first appears
	    this.list.scrollTop = Time.calcCenterPosition(this.props.monthRef ? this.props.monthRef.clientHeight - this.header.clientHeight : this.list.clientHeight, this.centerLi);
	  };

	  Time.prototype.render = function render() {
	    var _this2 = this;

	    var height = null;
	    if (this.props.monthRef && this.header) {
	      height = this.props.monthRef.clientHeight - this.header.clientHeight;
	    }

	    return React__default.createElement(
	      "div",
	      {
	        className: "react-datepicker__time-container " + (this.props.todayButton ? "react-datepicker__time-container--with-today-button" : "")
	      },
	      React__default.createElement(
	        "div",
	        {
	          className: "react-datepicker__header react-datepicker__header--time",
	          ref: function ref(header) {
	            _this2.header = header;
	          }
	        },
	        React__default.createElement(
	          "div",
	          { className: "react-datepicker-time__header" },
	          this.props.timeCaption
	        )
	      ),
	      React__default.createElement(
	        "div",
	        { className: "react-datepicker__time" },
	        React__default.createElement(
	          "div",
	          { className: "react-datepicker__time-box" },
	          React__default.createElement(
	            "ul",
	            {
	              className: "react-datepicker__time-list",
	              ref: function ref(list) {
	                _this2.list = list;
	              },
	              style: height ? { height: height } : {}
	            },
	            this.renderTimes.bind(this)()
	          )
	        )
	      )
	    );
	  };

	  createClass$1(Time, null, [{
	    key: "defaultProps",
	    get: function get$$1() {
	      return {
	        intervals: 30,
	        onTimeChange: function onTimeChange() {},
	        todayButton: null,
	        timeCaption: "Time"
	      };
	    }
	  }]);
	  return Time;
	}(React__default.Component);

	Time.propTypes = {
	  format: propTypes.string,
	  includeTimes: propTypes.array,
	  intervals: propTypes.number,
	  selected: propTypes.object,
	  onChange: propTypes.func,
	  todayButton: propTypes.node,
	  minTime: propTypes.object,
	  maxTime: propTypes.object,
	  excludeTimes: propTypes.array,
	  monthRef: propTypes.object,
	  timeCaption: propTypes.string,
	  injectTimes: propTypes.array
	};

	Time.calcCenterPosition = function (listHeight, centerLiRef) {
	  return centerLiRef.offsetTop - (listHeight / 2 - centerLiRef.clientHeight / 2);
	};

	function CalendarContainer(_ref) {
	  var className = _ref.className,
	      children = _ref.children,
	      _ref$arrowProps = _ref.arrowProps,
	      arrowProps = _ref$arrowProps === undefined ? {} : _ref$arrowProps;

	  return React__default.createElement(
	    "div",
	    { className: className },
	    React__default.createElement("div", _extends$1({ className: "react-datepicker__triangle" }, arrowProps)),
	    children
	  );
	}

	CalendarContainer.propTypes = {
	  className: propTypes.string,
	  children: propTypes.node,
	  arrowProps: propTypes.object // react-popper arrow props
	};

	var DROPDOWN_FOCUS_CLASSNAMES = ["react-datepicker__year-select", "react-datepicker__month-select", "react-datepicker__month-year-select"];

	var isDropdownSelect = function isDropdownSelect() {
	  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var classNames = (element.className || "").split(/\s+/);
	  return DROPDOWN_FOCUS_CLASSNAMES.some(function (testClassname) {
	    return classNames.indexOf(testClassname) >= 0;
	  });
	};

	var Calendar = function (_React$Component) {
	  inherits(Calendar, _React$Component);
	  createClass$1(Calendar, null, [{
	    key: "defaultProps",
	    get: function get$$1() {
	      return {
	        onDropdownFocus: function onDropdownFocus() {},
	        monthsShown: 1,
	        forceShowMonthNavigation: false,
	        timeCaption: "Time",
	        previousMonthButtonLabel: "Previous Month",
	        nextMonthButtonLabel: "Next Month"
	      };
	    }
	  }]);

	  function Calendar(props) {
	    classCallCheck$1(this, Calendar);

	    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.handleClickOutside = function (event) {
	      _this.props.onClickOutside(event);
	    };

	    _this.handleDropdownFocus = function (event) {
	      if (isDropdownSelect(event.target)) {
	        _this.props.onDropdownFocus();
	      }
	    };

	    _this.getDateInView = function () {
	      var _this$props = _this.props,
	          preSelection = _this$props.preSelection,
	          selected = _this$props.selected,
	          openToDate = _this$props.openToDate,
	          utcOffset = _this$props.utcOffset;

	      var minDate = getEffectiveMinDate(_this.props);
	      var maxDate = getEffectiveMaxDate(_this.props);
	      var current = now(utcOffset);
	      var initialDate = openToDate || selected || preSelection;
	      if (initialDate) {
	        return initialDate;
	      } else {
	        if (minDate && isBefore(current, minDate)) {
	          return minDate;
	        } else if (maxDate && isAfter(current, maxDate)) {
	          return maxDate;
	        }
	      }
	      return current;
	    };

	    _this.localizeDate = function (date) {
	      return localizeDate(date, _this.props.locale);
	    };

	    _this.increaseMonth = function () {
	      _this.setState({
	        date: addMonths(cloneDate(_this.state.date), 1)
	      }, function () {
	        return _this.handleMonthChange(_this.state.date);
	      });
	    };

	    _this.decreaseMonth = function () {
	      _this.setState({
	        date: subtractMonths(cloneDate(_this.state.date), 1)
	      }, function () {
	        return _this.handleMonthChange(_this.state.date);
	      });
	    };

	    _this.handleDayClick = function (day, event) {
	      return _this.props.onSelect(day, event);
	    };

	    _this.handleDayMouseEnter = function (day) {
	      return _this.setState({ selectingDate: day });
	    };

	    _this.handleMonthMouseLeave = function () {
	      return _this.setState({ selectingDate: null });
	    };

	    _this.handleYearChange = function (date) {
	      if (_this.props.onYearChange) {
	        _this.props.onYearChange(date);
	      }
	    };

	    _this.handleMonthChange = function (date) {
	      if (_this.props.onMonthChange) {
	        _this.props.onMonthChange(date);
	      }
	      if (_this.props.adjustDateOnChange) {
	        if (_this.props.onSelect) {
	          _this.props.onSelect(date);
	        }
	        if (_this.props.setOpen) {
	          _this.props.setOpen(true);
	        }
	      }
	    };

	    _this.handleMonthYearChange = function (date) {
	      _this.handleYearChange(date);
	      _this.handleMonthChange(date);
	    };

	    _this.changeYear = function (year) {
	      _this.setState({
	        date: setYear(cloneDate(_this.state.date), year)
	      }, function () {
	        return _this.handleYearChange(_this.state.date);
	      });
	    };

	    _this.changeMonth = function (month) {
	      _this.setState({
	        date: setMonth(cloneDate(_this.state.date), month)
	      }, function () {
	        return _this.handleMonthChange(_this.state.date);
	      });
	    };

	    _this.changeMonthYear = function (monthYear) {
	      _this.setState({
	        date: setYear(setMonth(cloneDate(_this.state.date), getMonth(monthYear)), getYear(monthYear))
	      }, function () {
	        return _this.handleMonthYearChange(_this.state.date);
	      });
	    };

	    _this.header = function () {
	      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;

	      var startOfWeek = getStartOfWeek(cloneDate(date));
	      var dayNames = [];
	      if (_this.props.showWeekNumbers) {
	        dayNames.push(React__default.createElement(
	          "div",
	          { key: "W", className: "react-datepicker__day-name" },
	          _this.props.weekLabel || "#"
	        ));
	      }
	      return dayNames.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
	        var day = addDays(cloneDate(startOfWeek), offset);
	        var localeData = getLocaleData(day);
	        var weekDayName = _this.formatWeekday(localeData, day);

	        return React__default.createElement(
	          "div",
	          { key: offset, className: "react-datepicker__day-name" },
	          weekDayName
	        );
	      }));
	    };

	    _this.formatWeekday = function (localeData, day) {
	      if (_this.props.formatWeekDay) {
	        return getFormattedWeekdayInLocale(localeData, day, _this.props.formatWeekDay);
	      }
	      return _this.props.useWeekdaysShort ? getWeekdayShortInLocale(localeData, day) : getWeekdayMinInLocale(localeData, day);
	    };

	    _this.renderPreviousMonthButton = function () {
	      if (_this.props.renderCustomHeader) {
	        return;
	      }

	      var allPrevDaysDisabled = allDaysDisabledBefore(_this.state.date, "month", _this.props);

	      if (!_this.props.forceShowMonthNavigation && !_this.props.showDisabledMonthNavigation && allPrevDaysDisabled || _this.props.showTimeSelectOnly) {
	        return;
	      }

	      var classes = ["react-datepicker__navigation", "react-datepicker__navigation--previous"];

	      var clickHandler = _this.decreaseMonth;

	      if (allPrevDaysDisabled && _this.props.showDisabledMonthNavigation) {
	        classes.push("react-datepicker__navigation--previous--disabled");
	        clickHandler = null;
	      }

	      return React__default.createElement(
	        "button",
	        {
	          type: "button",
	          className: classes.join(" "),
	          onClick: clickHandler
	        },
	        _this.props.previousMonthButtonLabel
	      );
	    };

	    _this.renderNextMonthButton = function () {
	      if (_this.props.renderCustomHeader) {
	        return;
	      }

	      var allNextDaysDisabled = allDaysDisabledAfter(_this.state.date, "month", _this.props);

	      if (!_this.props.forceShowMonthNavigation && !_this.props.showDisabledMonthNavigation && allNextDaysDisabled || _this.props.showTimeSelectOnly) {
	        return;
	      }

	      var classes = ["react-datepicker__navigation", "react-datepicker__navigation--next"];
	      if (_this.props.showTimeSelect) {
	        classes.push("react-datepicker__navigation--next--with-time");
	      }
	      if (_this.props.todayButton) {
	        classes.push("react-datepicker__navigation--next--with-today-button");
	      }

	      var clickHandler = _this.increaseMonth;

	      if (allNextDaysDisabled && _this.props.showDisabledMonthNavigation) {
	        classes.push("react-datepicker__navigation--next--disabled");
	        clickHandler = null;
	      }

	      return React__default.createElement(
	        "button",
	        {
	          type: "button",
	          className: classes.join(" "),
	          onClick: clickHandler
	        },
	        _this.props.nextMonthButtonLabel
	      );
	    };

	    _this.renderCurrentMonth = function () {
	      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;

	      var classes = ["react-datepicker__current-month"];

	      if (_this.props.showYearDropdown) {
	        classes.push("react-datepicker__current-month--hasYearDropdown");
	      }
	      if (_this.props.showMonthDropdown) {
	        classes.push("react-datepicker__current-month--hasMonthDropdown");
	      }
	      if (_this.props.showMonthYearDropdown) {
	        classes.push("react-datepicker__current-month--hasMonthYearDropdown");
	      }
	      return React__default.createElement(
	        "div",
	        { className: classes.join(" ") },
	        formatDate(date, _this.props.dateFormat)
	      );
	    };

	    _this.renderYearDropdown = function () {
	      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (!_this.props.showYearDropdown || overrideHide) {
	        return;
	      }
	      return React__default.createElement(YearDropdown, {
	        adjustDateOnChange: _this.props.adjustDateOnChange,
	        date: _this.state.date,
	        onSelect: _this.props.onSelect,
	        setOpen: _this.props.setOpen,
	        dropdownMode: _this.props.dropdownMode,
	        onChange: _this.changeYear,
	        minDate: _this.props.minDate,
	        maxDate: _this.props.maxDate,
	        year: getYear(_this.state.date),
	        scrollableYearDropdown: _this.props.scrollableYearDropdown,
	        yearDropdownItemNumber: _this.props.yearDropdownItemNumber
	      });
	    };

	    _this.renderMonthDropdown = function () {
	      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (!_this.props.showMonthDropdown || overrideHide) {
	        return;
	      }
	      return React__default.createElement(MonthDropdown, {
	        dropdownMode: _this.props.dropdownMode,
	        locale: _this.props.locale,
	        dateFormat: _this.props.dateFormat,
	        onChange: _this.changeMonth,
	        month: getMonth(_this.state.date),
	        useShortMonthInDropdown: _this.props.useShortMonthInDropdown
	      });
	    };

	    _this.renderMonthYearDropdown = function () {
	      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (!_this.props.showMonthYearDropdown || overrideHide) {
	        return;
	      }
	      return React__default.createElement(MonthYearDropdown, {
	        dropdownMode: _this.props.dropdownMode,
	        locale: _this.props.locale,
	        dateFormat: _this.props.dateFormat,
	        onChange: _this.changeMonthYear,
	        minDate: _this.props.minDate,
	        maxDate: _this.props.maxDate,
	        date: _this.state.date,
	        scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown
	      });
	    };

	    _this.renderTodayButton = function () {
	      if (!_this.props.todayButton || _this.props.showTimeSelectOnly) {
	        return;
	      }
	      return React__default.createElement(
	        "div",
	        {
	          className: "react-datepicker__today-button",
	          onClick: function onClick(e) {
	            return _this.props.onSelect(getStartOfDate(now(_this.props.utcOffset)), e);
	          }
	        },
	        _this.props.todayButton
	      );
	    };

	    _this.renderDefaultHeader = function (_ref) {
	      var monthDate = _ref.monthDate,
	          i = _ref.i;
	      return React__default.createElement(
	        "div",
	        { className: "react-datepicker__header" },
	        _this.renderCurrentMonth(monthDate),
	        React__default.createElement(
	          "div",
	          {
	            className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--" + _this.props.dropdownMode,
	            onFocus: _this.handleDropdownFocus
	          },
	          _this.renderMonthDropdown(i !== 0),
	          _this.renderMonthYearDropdown(i !== 0),
	          _this.renderYearDropdown(i !== 0)
	        ),
	        React__default.createElement(
	          "div",
	          { className: "react-datepicker__day-names" },
	          _this.header(monthDate)
	        )
	      );
	    };

	    _this.renderCustomHeader = function (_ref2) {
	      var monthDate = _ref2.monthDate,
	          i = _ref2.i;

	      if (i !== 0) {
	        return null;
	      }

	      var prevMonthButtonDisabled = allDaysDisabledBefore(_this.state.date, "month", _this.props);

	      var nextMonthButtonDisabled = allDaysDisabledAfter(_this.state.date, "month", _this.props);

	      return React__default.createElement(
	        "div",
	        {
	          className: "react-datepicker__header react-datepicker__header--custom",
	          onFocus: _this.props.onDropdownFocus
	        },
	        _this.props.renderCustomHeader(_extends$1({}, _this.state, {
	          changeMonth: _this.changeMonth,
	          changeYear: _this.changeYear,
	          decreaseMonth: _this.decreaseMonth,
	          increaseMonth: _this.increaseMonth,
	          prevMonthButtonDisabled: prevMonthButtonDisabled,
	          nextMonthButtonDisabled: nextMonthButtonDisabled
	        })),
	        React__default.createElement(
	          "div",
	          { className: "react-datepicker__day-names" },
	          _this.header(monthDate)
	        )
	      );
	    };

	    _this.renderMonths = function () {
	      if (_this.props.showTimeSelectOnly) {
	        return;
	      }

	      var monthList = [];
	      for (var i = 0; i < _this.props.monthsShown; ++i) {
	        var monthDate = addMonths(cloneDate(_this.state.date), i);
	        var monthKey = "month-" + i;
	        monthList.push(React__default.createElement(
	          "div",
	          {
	            key: monthKey,
	            ref: function ref(div) {
	              _this.monthContainer = div;
	            },
	            className: "react-datepicker__month-container"
	          },
	          _this.props.renderCustomHeader ? _this.renderCustomHeader({ monthDate: monthDate, i: i }) : _this.renderDefaultHeader({ monthDate: monthDate, i: i }),
	          React__default.createElement(Month, {
	            day: monthDate,
	            dayClassName: _this.props.dayClassName,
	            onDayClick: _this.handleDayClick,
	            onDayMouseEnter: _this.handleDayMouseEnter,
	            onMouseLeave: _this.handleMonthMouseLeave,
	            onWeekSelect: _this.props.onWeekSelect,
	            formatWeekNumber: _this.props.formatWeekNumber,
	            minDate: _this.props.minDate,
	            maxDate: _this.props.maxDate,
	            excludeDates: _this.props.excludeDates,
	            highlightDates: _this.props.highlightDates,
	            selectingDate: _this.state.selectingDate,
	            includeDates: _this.props.includeDates,
	            inline: _this.props.inline,
	            fixedHeight: _this.props.fixedHeight,
	            filterDate: _this.props.filterDate,
	            preSelection: _this.props.preSelection,
	            selected: _this.props.selected,
	            selectsStart: _this.props.selectsStart,
	            selectsEnd: _this.props.selectsEnd,
	            showWeekNumbers: _this.props.showWeekNumbers,
	            startDate: _this.props.startDate,
	            endDate: _this.props.endDate,
	            peekNextMonth: _this.props.peekNextMonth,
	            utcOffset: _this.props.utcOffset,
	            renderDayContents: _this.props.renderDayContents,
	            disabledKeyboardNavigation: _this.props.disabledKeyboardNavigation
	          })
	        ));
	      }
	      return monthList;
	    };

	    _this.renderTimeSection = function () {
	      if (_this.props.showTimeSelect && (_this.state.monthContainer || _this.props.showTimeSelectOnly)) {
	        return React__default.createElement(Time, {
	          selected: _this.props.selected,
	          onChange: _this.props.onTimeChange,
	          format: _this.props.timeFormat,
	          includeTimes: _this.props.includeTimes,
	          intervals: _this.props.timeIntervals,
	          minTime: _this.props.minTime,
	          maxTime: _this.props.maxTime,
	          excludeTimes: _this.props.excludeTimes,
	          timeCaption: _this.props.timeCaption,
	          todayButton: _this.props.todayButton,
	          showMonthDropdown: _this.props.showMonthDropdown,
	          showMonthYearDropdown: _this.props.showMonthYearDropdown,
	          showYearDropdown: _this.props.showYearDropdown,
	          withPortal: _this.props.withPortal,
	          monthRef: _this.state.monthContainer,
	          injectTimes: _this.props.injectTimes
	        });
	      }
	    };

	    _this.state = {
	      date: _this.localizeDate(_this.getDateInView()),
	      selectingDate: null,
	      monthContainer: null
	    };
	    return _this;
	  }

	  Calendar.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;

	    // monthContainer height is needed in time component
	    // to determine the height for the ul in the time component
	    // setState here so height is given after final component
	    // layout is rendered
	    if (this.props.showTimeSelect) {
	      this.assignMonthContainer = function () {
	        _this2.setState({ monthContainer: _this2.monthContainer });
	      }();
	    }
	  };

	  Calendar.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.preSelection && !isSameDay(this.props.preSelection, prevProps.preSelection)) {
	      this.setState({
	        date: this.localizeDate(this.props.preSelection)
	      });
	    } else if (this.props.openToDate && !isSameDay(this.props.openToDate, prevProps.openToDate)) {
	      this.setState({
	        date: this.localizeDate(this.props.openToDate)
	      });
	    }
	  };

	  Calendar.prototype.render = function render() {
	    var Container = this.props.container || CalendarContainer;

	    return React__default.createElement(
	      Container,
	      {
	        className: classnames("react-datepicker", this.props.className, {
	          "react-datepicker--time-only": this.props.showTimeSelectOnly
	        })
	      },
	      this.renderPreviousMonthButton(),
	      this.renderNextMonthButton(),
	      this.renderMonths(),
	      this.renderTodayButton(),
	      this.renderTimeSection(),
	      this.props.children
	    );
	  };

	  return Calendar;
	}(React__default.Component);

	Calendar.propTypes = {
	  adjustDateOnChange: propTypes.bool,
	  className: propTypes.string,
	  children: propTypes.node,
	  container: propTypes.func,
	  dateFormat: propTypes.oneOfType([propTypes.string, propTypes.array]).isRequired,
	  dayClassName: propTypes.func,
	  disabledKeyboardNavigation: propTypes.bool,
	  dropdownMode: propTypes.oneOf(["scroll", "select"]),
	  endDate: propTypes.object,
	  excludeDates: propTypes.array,
	  filterDate: propTypes.func,
	  fixedHeight: propTypes.bool,
	  formatWeekNumber: propTypes.func,
	  highlightDates: propTypes.instanceOf(Map),
	  includeDates: propTypes.array,
	  includeTimes: propTypes.array,
	  injectTimes: propTypes.array,
	  inline: propTypes.bool,
	  locale: propTypes.string,
	  maxDate: propTypes.object,
	  minDate: propTypes.object,
	  monthsShown: propTypes.number,
	  onClickOutside: propTypes.func.isRequired,
	  onMonthChange: propTypes.func,
	  onYearChange: propTypes.func,
	  forceShowMonthNavigation: propTypes.bool,
	  onDropdownFocus: propTypes.func,
	  onSelect: propTypes.func.isRequired,
	  onWeekSelect: propTypes.func,
	  showTimeSelect: propTypes.bool,
	  showTimeSelectOnly: propTypes.bool,
	  timeFormat: propTypes.string,
	  timeIntervals: propTypes.number,
	  onTimeChange: propTypes.func,
	  minTime: propTypes.object,
	  maxTime: propTypes.object,
	  excludeTimes: propTypes.array,
	  timeCaption: propTypes.string,
	  openToDate: propTypes.object,
	  peekNextMonth: propTypes.bool,
	  scrollableYearDropdown: propTypes.bool,
	  scrollableMonthYearDropdown: propTypes.bool,
	  preSelection: propTypes.object,
	  selected: propTypes.object,
	  selectsEnd: propTypes.bool,
	  selectsStart: propTypes.bool,
	  showMonthDropdown: propTypes.bool,
	  showMonthYearDropdown: propTypes.bool,
	  showWeekNumbers: propTypes.bool,
	  showYearDropdown: propTypes.bool,
	  startDate: propTypes.object,
	  todayButton: propTypes.node,
	  useWeekdaysShort: propTypes.bool,
	  formatWeekDay: propTypes.func,
	  withPortal: propTypes.bool,
	  utcOffset: propTypes.oneOfType([propTypes.number, propTypes.string]),
	  weekLabel: propTypes.string,
	  yearDropdownItemNumber: propTypes.number,
	  setOpen: propTypes.func,
	  useShortMonthInDropdown: propTypes.bool,
	  showDisabledMonthNavigation: propTypes.bool,
	  previousMonthButtonLabel: propTypes.string,
	  nextMonthButtonLabel: propTypes.string,
	  renderCustomHeader: propTypes.func,
	  renderDayContents: propTypes.func
	};

	var popperPlacementPositions = ["bottom", "bottom-end", "bottom-start", "left", "left-end", "left-start", "right", "right-end", "right-start", "top", "top-end", "top-start"];

	var PopperComponent = function (_React$Component) {
	  inherits(PopperComponent, _React$Component);

	  function PopperComponent() {
	    classCallCheck$1(this, PopperComponent);
	    return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  PopperComponent.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        hidePopper = _props.hidePopper,
	        popperComponent = _props.popperComponent,
	        popperModifiers = _props.popperModifiers,
	        popperPlacement = _props.popperPlacement,
	        popperProps = _props.popperProps,
	        targetComponent = _props.targetComponent;


	    var popper = void 0;

	    if (!hidePopper) {
	      var classes = classnames("react-datepicker-popper", className);
	      popper = React__default.createElement(
	        Popper$1,
	        _extends$1({
	          modifiers: popperModifiers,
	          placement: popperPlacement
	        }, popperProps),
	        function (_ref) {
	          var ref = _ref.ref,
	              style = _ref.style,
	              placement = _ref.placement,
	              arrowProps = _ref.arrowProps;
	          return React__default.createElement(
	            "div",
	            _extends$1({ ref: ref, style: style }, {
	              className: classes,
	              "data-placement": placement
	            }),
	            React__default.cloneElement(popperComponent, { arrowProps: arrowProps })
	          );
	        }
	      );
	    }

	    if (this.props.popperContainer) {
	      popper = React__default.createElement(this.props.popperContainer, {}, popper);
	    }

	    return React__default.createElement(
	      Manager,
	      null,
	      React__default.createElement(
	        Reference,
	        null,
	        function (_ref2) {
	          var ref = _ref2.ref;
	          return React__default.createElement(
	            "div",
	            { ref: ref, className: "react-datepicker-wrapper" },
	            targetComponent
	          );
	        }
	      ),
	      popper
	    );
	  };

	  createClass$1(PopperComponent, null, [{
	    key: "defaultProps",
	    get: function get$$1() {
	      return {
	        hidePopper: true,
	        popperModifiers: {
	          preventOverflow: {
	            enabled: true,
	            escapeWithReference: true,
	            boundariesElement: "viewport"
	          }
	        },
	        popperProps: {},
	        popperPlacement: "bottom-start"
	      };
	    }
	  }]);
	  return PopperComponent;
	}(React__default.Component);

	PopperComponent.propTypes = {
	  className: propTypes.string,
	  hidePopper: propTypes.bool,
	  popperComponent: propTypes.element,
	  popperModifiers: propTypes.object, // <datepicker/> props
	  popperPlacement: propTypes.oneOf(popperPlacementPositions), // <datepicker/> props
	  popperContainer: propTypes.func,
	  popperProps: propTypes.object,
	  targetComponent: propTypes.element
	};

	var outsideClickIgnoreClass = "react-datepicker-ignore-onclickoutside";
	var WrappedCalendar = onClickOutsideHOC(Calendar);

	// Compares dates year+month combinations
	function hasPreSelectionChanged(date1, date2) {
	  if (date1 && date2) {
	    return getMonth(date1) !== getMonth(date2) || getYear(date1) !== getYear(date2);
	  }

	  return date1 !== date2;
	}

	function hasSelectionChanged(date1, date2) {
	  if (date1 && date2) {
	    return !equals(date1, date2);
	  }

	  return false;
	}

	/**
	 * General datepicker component.
	 */
	var INPUT_ERR_1 = "Date input not valid.";

	var DatePicker = function (_React$Component) {
	  inherits(DatePicker, _React$Component);
	  createClass$1(DatePicker, null, [{
	    key: "defaultProps",
	    get: function get$$1() {
	      return {
	        allowSameDay: false,
	        dateFormat: "L",
	        dateFormatCalendar: "MMMM YYYY",
	        onChange: function onChange() {},

	        disabled: false,
	        disabledKeyboardNavigation: false,
	        dropdownMode: "scroll",
	        onFocus: function onFocus() {},
	        onBlur: function onBlur() {},
	        onKeyDown: function onKeyDown() {},
	        onInputClick: function onInputClick() {},
	        onSelect: function onSelect() {},
	        onClickOutside: function onClickOutside$$1() {},
	        onMonthChange: function onMonthChange() {},

	        preventOpenOnFocus: false,
	        onYearChange: function onYearChange() {},
	        onInputError: function onInputError() {},

	        monthsShown: 1,
	        readOnly: false,
	        withPortal: false,
	        shouldCloseOnSelect: true,
	        showTimeSelect: false,
	        timeIntervals: 30,
	        timeCaption: "Time",
	        previousMonthButtonLabel: "Previous Month",
	        nextMonthButtonLabel: "Next month",
	        renderDayContents: function renderDayContents(date) {
	          return date;
	        }
	      };
	    }
	  }]);

	  function DatePicker(props) {
	    classCallCheck$1(this, DatePicker);

	    var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.getPreSelection = function () {
	      return _this.props.openToDate ? newDate(_this.props.openToDate) : _this.props.selectsEnd && _this.props.startDate ? newDate(_this.props.startDate) : _this.props.selectsStart && _this.props.endDate ? newDate(_this.props.endDate) : now(_this.props.utcOffset);
	    };

	    _this.calcInitialState = function () {
	      var defaultPreSelection = _this.getPreSelection();
	      var minDate = getEffectiveMinDate(_this.props);
	      var maxDate = getEffectiveMaxDate(_this.props);
	      var boundedPreSelection = minDate && isBefore(defaultPreSelection, minDate) ? minDate : maxDate && isAfter(defaultPreSelection, maxDate) ? maxDate : defaultPreSelection;
	      return {
	        open: _this.props.startOpen || false,
	        preventFocus: false,
	        preSelection: _this.props.selected ? newDate(_this.props.selected) : boundedPreSelection,
	        // transforming highlighted days (perhaps nested array)
	        // to flat Map for faster access in day.jsx
	        highlightDates: getHightLightDaysMap(_this.props.highlightDates),
	        focused: false
	      };
	    };

	    _this.clearPreventFocusTimeout = function () {
	      if (_this.preventFocusTimeout) {
	        clearTimeout(_this.preventFocusTimeout);
	      }
	    };

	    _this.setFocus = function () {
	      if (_this.input && _this.input.focus) {
	        _this.input.focus();
	      }
	    };

	    _this.setBlur = function () {
	      if (_this.input && _this.input.blur) {
	        _this.input.blur();
	      }

	      if (_this.props.onBlur) {
	        _this.props.onBlur();
	      }

	      _this.cancelFocusInput();
	    };

	    _this.setOpen = function (open) {
	      var skipSetBlur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      _this.setState({
	        open: open,
	        preSelection: open && _this.state.open ? _this.state.preSelection : _this.calcInitialState().preSelection,
	        lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
	      }, function () {
	        if (!open) {
	          _this.setState(function (prev) {
	            return {
	              focused: skipSetBlur ? prev.focused : false
	            };
	          }, function () {
	            !skipSetBlur && _this.setBlur();

	            _this.setState({ inputValue: null });
	          });
	        }
	      });
	    };

	    _this.inputOk = function () {
	      return isMoment(_this.state.preSelection) || isDate(_this.state.preSelection);
	    };

	    _this.isCalendarOpen = function () {
	      return _this.props.open === undefined ? _this.state.open && !_this.props.disabled && !_this.props.readOnly : _this.props.open;
	    };

	    _this.handleFocus = function (event) {
	      if (!_this.state.preventFocus) {
	        _this.props.onFocus(event);
	        if (!_this.props.preventOpenOnFocus && !_this.props.readOnly) {
	          _this.setOpen(true);
	        }
	      }
	      _this.setState({ focused: true });
	    };

	    _this.cancelFocusInput = function () {
	      clearTimeout(_this.inputFocusTimeout);
	      _this.inputFocusTimeout = null;
	    };

	    _this.deferFocusInput = function () {
	      _this.cancelFocusInput();
	      _this.inputFocusTimeout = setTimeout(function () {
	        return _this.setFocus();
	      }, 1);
	    };

	    _this.handleDropdownFocus = function () {
	      _this.cancelFocusInput();
	    };

	    _this.handleBlur = function (event) {
	      if (_this.state.open && !_this.props.withPortal) {
	        _this.deferFocusInput();
	      } else {
	        _this.props.onBlur(event);
	      }
	      _this.setState({ focused: false });
	    };

	    _this.handleCalendarClickOutside = function (event) {
	      if (!_this.props.inline) {
	        _this.setOpen(false);
	      }
	      _this.props.onClickOutside(event);
	      if (_this.props.withPortal) {
	        event.preventDefault();
	      }
	    };

	    _this.handleChange = function () {
	      for (var _len = arguments.length, allArgs = Array(_len), _key = 0; _key < _len; _key++) {
	        allArgs[_key] = arguments[_key];
	      }

	      var event = allArgs[0];
	      if (_this.props.onChangeRaw) {
	        _this.props.onChangeRaw.apply(_this, allArgs);
	        if (typeof event.isDefaultPrevented !== "function" || event.isDefaultPrevented()) {
	          return;
	        }
	      }
	      _this.setState({
	        inputValue: event.target.value,
	        lastPreSelectChange: PRESELECT_CHANGE_VIA_INPUT
	      });
	      var date = parseDate(event.target.value, _this.props);
	      if (date || !event.target.value) {
	        _this.setSelected(date, event, true);
	      }
	    };

	    _this.handleSelect = function (date, event) {
	      // Preventing onFocus event to fix issue
	      // https://github.com/Hacker0x01/react-datepicker/issues/628
	      _this.setState({ preventFocus: true }, function () {
	        _this.preventFocusTimeout = setTimeout(function () {
	          return _this.setState({ preventFocus: false });
	        }, 50);
	        return _this.preventFocusTimeout;
	      });
	      _this.setSelected(date, event);
	      if (!_this.props.shouldCloseOnSelect || _this.props.showTimeSelect) {
	        _this.setPreSelection(date);
	      } else if (!_this.props.inline) {
	        _this.setOpen(false);
	      }
	    };

	    _this.setSelected = function (date, event, keepInput) {
	      var changedDate = date;

	      if (changedDate !== null && isDayDisabled(changedDate, _this.props)) {
	        if (isOutOfBounds(changedDate, _this.props)) {
	          _this.props.onChange(date, event);
	          _this.props.onSelect(changedDate, event);
	        }

	        return;
	      }

	      if (!isSameDay(_this.props.selected, changedDate) || _this.props.allowSameDay) {
	        if (changedDate !== null) {
	          if (_this.props.selected) {
	            var selected = _this.props.selected;
	            if (keepInput) selected = newDate(changedDate);
	            changedDate = setTime(newDate(changedDate), {
	              hour: getHour(selected),
	              minute: getMinute(selected),
	              second: getSecond(selected)
	            });
	          }
	          if (!_this.props.inline) {
	            _this.setState({
	              preSelection: changedDate
	            });
	          }
	        }
	        _this.props.onChange(changedDate, event);
	      }

	      _this.props.onSelect(changedDate, event);

	      if (!keepInput) {
	        _this.setState({ inputValue: null });
	      }
	    };

	    _this.setPreSelection = function (date) {
	      var isDateRangePresent = typeof _this.props.minDate !== "undefined" && typeof _this.props.maxDate !== "undefined";
	      var isValidDateSelection = isDateRangePresent && date ? isDayInRange(date, _this.props.minDate, _this.props.maxDate) : true;
	      if (isValidDateSelection) {
	        _this.setState({
	          preSelection: date
	        });
	      }
	    };

	    _this.handleTimeChange = function (time) {
	      var selected = _this.props.selected ? _this.props.selected : _this.getPreSelection();
	      var changedDate = setTime(cloneDate(selected), {
	        hour: getHour(time),
	        minute: getMinute(time)
	      });

	      _this.setState({
	        preSelection: changedDate
	      });

	      _this.props.onChange(changedDate);
	      if (_this.props.shouldCloseOnSelect) {
	        _this.setOpen(false);
	      }
	      _this.setState({ inputValue: null });
	    };

	    _this.onInputClick = function () {
	      if (!_this.props.disabled && !_this.props.readOnly) {
	        _this.setOpen(true);
	      }

	      _this.props.onInputClick();
	    };

	    _this.onInputKeyDown = function (event) {
	      _this.props.onKeyDown(event);
	      var eventKey = event.key;
	      if (!_this.state.open && !_this.props.inline && !_this.props.preventOpenOnFocus) {
	        if (eventKey === "ArrowDown" || eventKey === "ArrowUp") {
	          _this.onInputClick();
	        }
	        return;
	      }
	      var copy = newDate(_this.state.preSelection);
	      if (eventKey === "Enter") {
	        event.preventDefault();
	        if (_this.inputOk() && _this.state.lastPreSelectChange === PRESELECT_CHANGE_VIA_NAVIGATE) {
	          _this.handleSelect(copy, event);
	          !_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
	        } else {
	          _this.setOpen(false);
	        }
	      } else if (eventKey === "Escape") {
	        event.preventDefault();

	        _this.setOpen(false);
	        if (!_this.inputOk()) {
	          _this.props.onInputError({ code: 1, msg: INPUT_ERR_1 });
	        }
	      } else if (eventKey === "Tab") {
	        _this.setOpen(false, true);
	      } else if (!_this.props.disabledKeyboardNavigation) {
	        var newSelection = void 0;
	        switch (eventKey) {
	          case "ArrowLeft":
	            newSelection = subtractDays(copy, 1);
	            break;
	          case "ArrowRight":
	            newSelection = addDays(copy, 1);
	            break;
	          case "ArrowUp":
	            newSelection = subtractWeeks(copy, 1);
	            break;
	          case "ArrowDown":
	            newSelection = addWeeks(copy, 1);
	            break;
	          case "PageUp":
	            newSelection = subtractMonths(copy, 1);
	            break;
	          case "PageDown":
	            newSelection = addMonths(copy, 1);
	            break;
	          case "Home":
	            newSelection = subtractYears(copy, 1);
	            break;
	          case "End":
	            newSelection = addYears(copy, 1);
	            break;
	        }
	        if (!newSelection) {
	          if (_this.props.onInputError) {
	            _this.props.onInputError({ code: 1, msg: INPUT_ERR_1 });
	          }
	          return; // Let the input component handle this keydown
	        }
	        event.preventDefault();
	        _this.setState({ lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE });
	        if (_this.props.adjustDateOnChange) {
	          _this.setSelected(newSelection);
	        }
	        _this.setPreSelection(newSelection);
	      }
	    };

	    _this.onClearClick = function (event) {
	      if (event) {
	        if (event.preventDefault) {
	          event.preventDefault();
	        }
	      }
	      _this.props.onChange(null, event);
	      _this.setState({ inputValue: null });
	    };

	    _this.clear = function () {
	      _this.onClearClick();
	    };

	    _this.renderCalendar = function () {
	      if (!_this.props.inline && !_this.isCalendarOpen()) {
	        return null;
	      }
	      return React__default.createElement(
	        WrappedCalendar,
	        {
	          ref: function ref(elem) {
	            _this.calendar = elem;
	          },
	          locale: _this.props.locale,
	          adjustDateOnChange: _this.props.adjustDateOnChange,
	          setOpen: _this.setOpen,
	          dateFormat: _this.props.dateFormatCalendar,
	          useWeekdaysShort: _this.props.useWeekdaysShort,
	          formatWeekDay: _this.props.formatWeekDay,
	          dropdownMode: _this.props.dropdownMode,
	          selected: _this.props.selected,
	          preSelection: _this.state.preSelection,
	          onSelect: _this.handleSelect,
	          onWeekSelect: _this.props.onWeekSelect,
	          openToDate: _this.props.openToDate,
	          minDate: _this.props.minDate,
	          maxDate: _this.props.maxDate,
	          selectsStart: _this.props.selectsStart,
	          selectsEnd: _this.props.selectsEnd,
	          startDate: _this.props.startDate,
	          endDate: _this.props.endDate,
	          excludeDates: _this.props.excludeDates,
	          filterDate: _this.props.filterDate,
	          onClickOutside: _this.handleCalendarClickOutside,
	          formatWeekNumber: _this.props.formatWeekNumber,
	          highlightDates: _this.state.highlightDates,
	          includeDates: _this.props.includeDates,
	          includeTimes: _this.props.includeTimes,
	          injectTimes: _this.props.injectTimes,
	          inline: _this.props.inline,
	          peekNextMonth: _this.props.peekNextMonth,
	          showMonthDropdown: _this.props.showMonthDropdown,
	          useShortMonthInDropdown: _this.props.useShortMonthInDropdown,
	          showMonthYearDropdown: _this.props.showMonthYearDropdown,
	          showWeekNumbers: _this.props.showWeekNumbers,
	          showYearDropdown: _this.props.showYearDropdown,
	          withPortal: _this.props.withPortal,
	          forceShowMonthNavigation: _this.props.forceShowMonthNavigation,
	          showDisabledMonthNavigation: _this.props.showDisabledMonthNavigation,
	          scrollableYearDropdown: _this.props.scrollableYearDropdown,
	          scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown,
	          todayButton: _this.props.todayButton,
	          weekLabel: _this.props.weekLabel,
	          utcOffset: _this.props.utcOffset,
	          outsideClickIgnoreClass: outsideClickIgnoreClass,
	          fixedHeight: _this.props.fixedHeight,
	          monthsShown: _this.props.monthsShown,
	          onDropdownFocus: _this.handleDropdownFocus,
	          onMonthChange: _this.props.onMonthChange,
	          onYearChange: _this.props.onYearChange,
	          dayClassName: _this.props.dayClassName,
	          showTimeSelect: _this.props.showTimeSelect,
	          showTimeSelectOnly: _this.props.showTimeSelectOnly,
	          onTimeChange: _this.handleTimeChange,
	          timeFormat: _this.props.timeFormat,
	          timeIntervals: _this.props.timeIntervals,
	          minTime: _this.props.minTime,
	          maxTime: _this.props.maxTime,
	          excludeTimes: _this.props.excludeTimes,
	          timeCaption: _this.props.timeCaption,
	          className: _this.props.calendarClassName,
	          container: _this.props.calendarContainer,
	          yearDropdownItemNumber: _this.props.yearDropdownItemNumber,
	          previousMonthButtonLabel: _this.props.previousMonthButtonLabel,
	          nextMonthButtonLabel: _this.props.nextMonthButtonLabel,
	          disabledKeyboardNavigation: _this.props.disabledKeyboardNavigation,
	          renderCustomHeader: _this.props.renderCustomHeader,
	          popperProps: _this.props.popperProps,
	          renderDayContents: _this.props.renderDayContents
	        },
	        _this.props.children
	      );
	    };

	    _this.renderDateInput = function () {
	      var _classnames, _React$cloneElement;

	      var className = classnames(_this.props.className, (_classnames = {}, _classnames[outsideClickIgnoreClass] = _this.state.open, _classnames));

	      var customInput = _this.props.customInput || React__default.createElement("input", { type: "text" });
	      var customInputRef = _this.props.customInputRef || "ref";
	      var inputValue = typeof _this.props.value === "string" ? _this.props.value : typeof _this.state.inputValue === "string" ? _this.state.inputValue : safeDateFormat(_this.props.selected, _this.props);

	      return React__default.cloneElement(customInput, (_React$cloneElement = {}, _React$cloneElement[customInputRef] = function (input) {
	        _this.input = input;
	      }, _React$cloneElement.value = inputValue, _React$cloneElement.onBlur = _this.handleBlur, _React$cloneElement.onChange = _this.handleChange, _React$cloneElement.onClick = _this.onInputClick, _React$cloneElement.onFocus = _this.handleFocus, _React$cloneElement.onKeyDown = _this.onInputKeyDown, _React$cloneElement.id = _this.props.id, _React$cloneElement.name = _this.props.name, _React$cloneElement.autoFocus = _this.props.autoFocus, _React$cloneElement.placeholder = _this.props.placeholderText, _React$cloneElement.disabled = _this.props.disabled, _React$cloneElement.autoComplete = _this.props.autoComplete, _React$cloneElement.className = className, _React$cloneElement.title = _this.props.title, _React$cloneElement.readOnly = _this.props.readOnly, _React$cloneElement.required = _this.props.required, _React$cloneElement.tabIndex = _this.props.tabIndex, _React$cloneElement));
	    };

	    _this.renderClearButton = function () {
	      if (_this.props.isClearable && _this.props.selected != null) {
	        return React__default.createElement("button", {
	          type: "button",
	          className: "react-datepicker__close-icon",
	          onClick: _this.onClearClick,
	          title: _this.props.clearButtonTitle,
	          tabIndex: -1
	        });
	      } else {
	        return null;
	      }
	    };

	    _this.state = _this.calcInitialState();
	    return _this;
	  }

	  DatePicker.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	    if (prevProps.inline && hasPreSelectionChanged(prevProps.selected, this.props.selected)) {
	      this.setPreSelection(this.props.selected);
	    }
	    if (prevProps.highlightDates !== this.props.highlightDates) {
	      this.setState({
	        highlightDates: getHightLightDaysMap(this.props.highlightDates)
	      });
	    }
	    if (!prevState.focused && hasSelectionChanged(prevProps.selected, this.props.selected)) {
	      this.setState({ inputValue: null });
	    }
	  };

	  DatePicker.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearPreventFocusTimeout();
	  };

	  DatePicker.prototype.render = function render() {
	    var calendar = this.renderCalendar();

	    if (this.props.inline && !this.props.withPortal) {
	      return calendar;
	    }

	    if (this.props.withPortal) {
	      return React__default.createElement(
	        "div",
	        null,
	        !this.props.inline ? React__default.createElement(
	          "div",
	          { className: "react-datepicker__input-container" },
	          this.renderDateInput(),
	          this.renderClearButton()
	        ) : null,
	        this.state.open || this.props.inline ? React__default.createElement(
	          "div",
	          { className: "react-datepicker__portal" },
	          calendar
	        ) : null
	      );
	    }

	    return React__default.createElement(PopperComponent, {
	      className: this.props.popperClassName,
	      hidePopper: !this.isCalendarOpen(),
	      popperModifiers: this.props.popperModifiers,
	      targetComponent: React__default.createElement(
	        "div",
	        { className: "react-datepicker__input-container" },
	        this.renderDateInput(),
	        this.renderClearButton()
	      ),
	      popperContainer: this.props.popperContainer,
	      popperComponent: calendar,
	      popperPlacement: this.props.popperPlacement,
	      popperProps: this.props.popperProps
	    });
	  };

	  return DatePicker;
	}(React__default.Component);

	DatePicker.propTypes = {
	  adjustDateOnChange: propTypes.bool,
	  allowSameDay: propTypes.bool,
	  autoComplete: propTypes.string,
	  autoFocus: propTypes.bool,
	  calendarClassName: propTypes.string,
	  calendarContainer: propTypes.func,
	  children: propTypes.node,
	  className: propTypes.string,
	  customInput: propTypes.element,
	  customInputRef: propTypes.string,
	  // eslint-disable-next-line react/no-unused-prop-types
	  dateFormat: propTypes.oneOfType([propTypes.string, propTypes.array]),
	  dateFormatCalendar: propTypes.string,
	  dayClassName: propTypes.func,
	  disabled: propTypes.bool,
	  disabledKeyboardNavigation: propTypes.bool,
	  dropdownMode: propTypes.oneOf(["scroll", "select"]).isRequired,
	  endDate: propTypes.object,
	  excludeDates: propTypes.array,
	  filterDate: propTypes.func,
	  fixedHeight: propTypes.bool,
	  formatWeekNumber: propTypes.func,
	  highlightDates: propTypes.array,
	  id: propTypes.string,
	  includeDates: propTypes.array,
	  includeTimes: propTypes.array,
	  injectTimes: propTypes.array,
	  inline: propTypes.bool,
	  isClearable: propTypes.bool,
	  locale: propTypes.string,
	  maxDate: propTypes.object,
	  minDate: propTypes.object,
	  monthsShown: propTypes.number,
	  name: propTypes.string,
	  onBlur: propTypes.func,
	  onChange: propTypes.func.isRequired,
	  onSelect: propTypes.func,
	  onWeekSelect: propTypes.func,
	  onClickOutside: propTypes.func,
	  onChangeRaw: propTypes.func,
	  onFocus: propTypes.func,
	  onInputClick: propTypes.func,
	  onKeyDown: propTypes.func,
	  onMonthChange: propTypes.func,
	  onYearChange: propTypes.func,
	  onInputError: propTypes.func,
	  open: propTypes.bool,
	  openToDate: propTypes.object,
	  peekNextMonth: propTypes.bool,
	  placeholderText: propTypes.string,
	  popperContainer: propTypes.func,
	  popperClassName: propTypes.string, // <PopperComponent/> props
	  popperModifiers: propTypes.object, // <PopperComponent/> props
	  popperPlacement: propTypes.oneOf(popperPlacementPositions), // <PopperComponent/> props
	  popperProps: propTypes.object,
	  preventOpenOnFocus: propTypes.bool,
	  readOnly: propTypes.bool,
	  required: propTypes.bool,
	  scrollableYearDropdown: propTypes.bool,
	  scrollableMonthYearDropdown: propTypes.bool,
	  selected: propTypes.object,
	  selectsEnd: propTypes.bool,
	  selectsStart: propTypes.bool,
	  showMonthDropdown: propTypes.bool,
	  showMonthYearDropdown: propTypes.bool,
	  showWeekNumbers: propTypes.bool,
	  showYearDropdown: propTypes.bool,
	  forceShowMonthNavigation: propTypes.bool,
	  showDisabledMonthNavigation: propTypes.bool,
	  startDate: propTypes.object,
	  startOpen: propTypes.bool,
	  tabIndex: propTypes.number,
	  timeCaption: propTypes.string,
	  title: propTypes.string,
	  todayButton: propTypes.node,
	  useWeekdaysShort: propTypes.bool,
	  formatWeekDay: propTypes.func,
	  utcOffset: propTypes.oneOfType([propTypes.number, propTypes.string]),
	  value: propTypes.string,
	  weekLabel: propTypes.string,
	  withPortal: propTypes.bool,
	  yearDropdownItemNumber: propTypes.number,
	  shouldCloseOnSelect: propTypes.bool,
	  showTimeSelect: propTypes.bool,
	  showTimeSelectOnly: propTypes.bool,
	  timeFormat: propTypes.string,
	  timeIntervals: propTypes.number,
	  minTime: propTypes.object,
	  maxTime: propTypes.object,
	  excludeTimes: propTypes.array,
	  useShortMonthInDropdown: propTypes.bool,
	  clearButtonTitle: propTypes.string,
	  previousMonthButtonLabel: propTypes.string,
	  nextMonthButtonLabel: propTypes.string,
	  renderCustomHeader: propTypes.func,
	  renderDayContents: propTypes.func
	};
	var PRESELECT_CHANGE_VIA_INPUT = "input";
	var PRESELECT_CHANGE_VIA_NAVIGATE = "navigate";

	return DatePicker;

}(React,ReactDOM,classNames,moment));
