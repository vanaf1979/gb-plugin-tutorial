/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/BrowserTitleField.js":
/*!************************************************!*\
  !*** ./src/js/components/BrowserTitleField.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * External dependencies.
 */

/**
 * WordPress dependencies.
 */

var __ = wp.i18n.__;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var TextControl = wp.components.TextControl;
/**
 * Browser title input component.
 *
 * @since 1.0.0
 */

var BrowserTitleField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BrowserTitleField, _React$Component);

  function BrowserTitleField() {
    _classCallCheck(this, BrowserTitleField);

    return _possibleConstructorReturn(this, _getPrototypeOf(BrowserTitleField).call(this));
  }

  _createClass(BrowserTitleField, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "metatags-browser-title-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextControl, {
        label: __("Brwoser title", "metatags"),
        value: this.props.metaFieldValue,
        onChange: this.props.setMetaFieldValue
      }));
    }
  }]);

  return BrowserTitleField;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(function (dispatch, props) {
  return {
    setMetaFieldValue: function setMetaFieldValue(value) {
      dispatch('core/editor').editPost({
        meta: {
          metatags_browser_title: value
        }
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaFieldValue: select('core/editor').getEditedPostAttribute('meta')['metatags_browser_title']
  };
})])(BrowserTitleField));

/***/ }),

/***/ "./src/js/components/MetaDescriptionField.js":
/*!***************************************************!*\
  !*** ./src/js/components/MetaDescriptionField.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * External dependencies.
 */

/**
 * WordPress dependencies.
 */

var __ = wp.i18n.__;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var TextareaControl = wp.components.TextareaControl;
/**
 * Meta description input component.
 *
 * @since 1.0.0
 */

var MetaDescriptionField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MetaDescriptionField, _React$Component);

  function MetaDescriptionField() {
    _classCallCheck(this, MetaDescriptionField);

    return _possibleConstructorReturn(this, _getPrototypeOf(MetaDescriptionField).call(this));
  }

  _createClass(MetaDescriptionField, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "metatags-browser-title-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextareaControl, {
        label: __("Meta description", "metatags"),
        value: this.props.metaFieldValue,
        onChange: this.props.setMetaFieldValue
      }));
    }
  }]);

  return MetaDescriptionField;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(function (dispatch, props) {
  return {
    setMetaFieldValue: function setMetaFieldValue(value) {
      dispatch('core/editor').editPost({
        meta: {
          metatags_description_field: value
        }
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaFieldValue: select('core/editor').getEditedPostAttribute('meta')['metatags_description_field']
  };
})])(MetaDescriptionField));

/***/ }),

/***/ "./src/js/components/MetaRobotsField.js":
/*!**********************************************!*\
  !*** ./src/js/components/MetaRobotsField.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * External dependencies.
 */

/**
 * WordPress dependencies.
 */

var __ = wp.i18n.__;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var RadioControl = wp.components.RadioControl;
/**
 * Meta robots input component.
 *
 * @since 1.0.0
 */

var MetaRobotsField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MetaRobotsField, _React$Component);

  function MetaRobotsField() {
    _classCallCheck(this, MetaRobotsField);

    return _possibleConstructorReturn(this, _getPrototypeOf(MetaRobotsField).call(this));
  }

  _createClass(MetaRobotsField, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "metatags-browser-title-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioControl, {
        label: __("Robots", "metatags"),
        selected: this.props.metaFieldValue ? this.props.metaFieldValue : 'index, follow',
        options: [{
          label: 'Index, Follow',
          value: 'index, follow'
        }, {
          label: 'Index, NoFollow',
          value: 'index, nofollow'
        }, {
          label: 'NoIndex, NoFollow',
          value: 'noindex, nofollow'
        }, {
          label: 'NoIndex, Follow',
          value: 'noindex, follow'
        }],
        onChange: this.props.setMetaFieldValue
      }));
    }
  }]);

  return MetaRobotsField;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(function (dispatch, props) {
  return {
    setMetaFieldValue: function setMetaFieldValue(value) {
      dispatch('core/editor').editPost({
        meta: {
          metatags_robots_field: value
        }
      });
    }
  };
}), withSelect(function (select, props) {
  return {
    metaFieldValue: select('core/editor').getEditedPostAttribute('meta')['metatags_robots_field']
  };
})])(MetaRobotsField));

/***/ }),

/***/ "./src/js/components/sidebar.js":
/*!**************************************!*\
  !*** ./src/js/components/sidebar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BrowserTitleField_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserTitleField.js */ "./src/js/components/BrowserTitleField.js");
/* harmony import */ var _MetaDescriptionField_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MetaDescriptionField.js */ "./src/js/components/MetaDescriptionField.js");
/* harmony import */ var _MetaRobotsField_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MetaRobotsField.js */ "./src/js/components/MetaRobotsField.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * External dependencies.
 */

/**
 * Local dependencies.
 */




/**
 * WordPress dependencies.
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$editPost = wp.editPost,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem,
    PluginSidebar = _wp$editPost.PluginSidebar;
var Panel = wp.components.Panel;
/**
 * Sidebar component voor the gutenberg editor.
 *
 * @since 1.0.0
 */

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this));
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PluginSidebarMoreMenuItem, {
        target: "metatags-sidebar",
        icon: "editor-customchar"
      }, __("MetaTags", "metatags")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PluginSidebar, {
        name: "metatags-sidebar",
        title: __("MetaTags", "metatags")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "metabox-sidebar-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BrowserTitleField_js__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MetaDescriptionField_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MetaRobotsField_js__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/js/metatags.js":
/*!****************************!*\
  !*** ./src/js/metatags.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sidebar.js */ "./src/js/components/sidebar.js");
/**
 * Local dependencies.
 */

/**
 * WordPress dependencies.
 */

var registerPlugin = wp.plugins.registerPlugin;
/**
 * Register the MetaTags plugin.
 */

registerPlugin("metatags", {
  icon: 'editor-customchar',
  render: _components_sidebar_js__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/scss/metatags.scss":
/*!********************************!*\
  !*** ./src/scss/metatags.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./src/js/metatags.js ./src/scss/metatags.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/saskia/Documents/repos/websites/wptest/wp-content/plugins/metatags/src/js/metatags.js */"./src/js/metatags.js");
module.exports = __webpack_require__(/*! /Users/saskia/Documents/repos/websites/wptest/wp-content/plugins/metatags/src/scss/metatags.scss */"./src/scss/metatags.scss");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });