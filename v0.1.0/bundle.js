/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*global*/\n.hidden {\n  display: none;\n}\n\n.absolute {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20%;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n\n  background-color: lavender;\n  padding: 2rem;\n  border: 5px solid black;\n}\nsection {\n  color: black;\n}\n\n/*main page*/\n:root {\n  text-align: center;\n  color: white;\n}\n* {\n  padding: 0;\n  margin: 0;\n}\nbody {\n  background-color: #1b1310;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.heading {\n  padding: 1rem;\n  background-color: hsl(12, 29%, 2%);\n  text-shadow: 2px 2px 0.1rem rgb(128, 115, 0);\n}\n.main {\n  display: flex;\n  flex: 1;\n}\n.list {\n  background-color: #24120b;\n  border: 3px solid black;\n  padding: 0.5rem;\n  margin: 0.2rem;\n}\n.project-heading {\n  padding: 0.5rem 1rem;\n  font-size: 2rem;\n  text-shadow: 3px 3px 0.1rem black;\n}\n.project-default {\n  padding: 1rem;\n  border: 2px solid white;\n  background-color: rgb(20, 8, 20);\n}\n.project-default:hover {\n  background-color: rgb(75, 30, 75);\n}\n.project-cell {\n  padding: 1rem;\n  border: 2px solid rgb(37, 37, 37);\n  background-color: hsl(17, 53%, 3%);\n}\n\n.project-delete {\n  background-color: hsl(0, 100%, 20%);\n  color: white;\n  padding: 0.1rem;\n  border: 1px solid black;\n}\n.project-delete:hover {\n  transform: scale(1.05);\n}\n\n.add-project-button {\n  background-color: hsl(254, 50%, 30%);\n  padding: 1rem;\n  border: 1px solid black;\n}\n.add-project-button:hover {\n  transform: scale(1.05);\n  background-color: hsl(254, 50%, 50%);\n}\n.task-area {\n  flex-grow: 1;\n  margin: 0.2rem;\n  border: 2px solid black;\n}\n.task-cell {\n  padding: 1rem;\n  margin: 0 auto;\n  background-color: hsl(117, 30%, 15%);\n  border-top: 1px solid black;\n}\n.task-delete {\n  background-color: hsl(0, 100%, 20%);\n  color: white;\n  padding: 0.1rem;\n  margin: 0 auto;\n  width: 12rem;\n  border: 1px solid black;\n}\n.task-delete:hover {\n  transform: scale(1.1);\n}\n.add-task-button {\n  background-color: hsl(254, 50%, 30%);\n  padding: 1rem;\n  border: 1px solid black;\n  border-left: none;\n}\n.add-task-button:hover {\n  background-color: hsl(254, 50%, 50%);\n}\n\n.footer {\n  background-color: #3f3f3f;\n  padding: 1rem;\n  border: 2px solid black;\n}\n\n/*add project */\n.add-project > header > h2 {\n  padding: 1rem;\n}\n.button-field {\n  padding: 1rem;\n}\n\n.button {\n  padding: 0.5rem;\n  margin: 1rem;\n}\n\n/*add task*/\n\n.add-task-input-fields {\n  max-width: 22rem;\n}\n.add-task-input-fields>label {\n  display: flex;\n  justify-content: right;\n  padding: 1rem;\n}\n.add-task-input-fields>label>input {\n  margin: 0 0 0 0.5rem;\n}\n.priority-buttons {\n  display: flex;\n  justify-content: right;\n}\n.priority-buttons input{\n  margin: 0.4rem;\n}\n#task-description {\n  padding: 1rem;\n  width: 90%;\n  max-width: 10rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,SAAS;AACT;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,QAAQ;EACR,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;;EAEV,0BAA0B;EAC1B,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,YAAY;AACd;;AAEA,YAAY;AACZ;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,UAAU;EACV,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,kCAAkC;EAClC,4CAA4C;AAC9C;AACA;EACE,aAAa;EACb,OAAO;AACT;AACA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,eAAe;EACf,cAAc;AAChB;AACA;EACE,oBAAoB;EACpB,eAAe;EACf,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,gCAAgC;AAClC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,iCAAiC;EACjC,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,sBAAsB;EACtB,oCAAoC;AACtC;AACA;EACE,YAAY;EACZ,cAAc;EACd,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,cAAc;EACd,oCAAoC;EACpC,2BAA2B;AAC7B;AACA;EACE,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,cAAc;EACd,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;AACzB;;AAEA,eAAe;AACf;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA,WAAW;;AAEX;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,UAAU;EACV,gBAAgB;AAClB","sourcesContent":["/*global*/\n.hidden {\n  display: none;\n}\n\n.absolute {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20%;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n\n  background-color: lavender;\n  padding: 2rem;\n  border: 5px solid black;\n}\nsection {\n  color: black;\n}\n\n/*main page*/\n:root {\n  text-align: center;\n  color: white;\n}\n* {\n  padding: 0;\n  margin: 0;\n}\nbody {\n  background-color: #1b1310;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.heading {\n  padding: 1rem;\n  background-color: hsl(12, 29%, 2%);\n  text-shadow: 2px 2px 0.1rem rgb(128, 115, 0);\n}\n.main {\n  display: flex;\n  flex: 1;\n}\n.list {\n  background-color: #24120b;\n  border: 3px solid black;\n  padding: 0.5rem;\n  margin: 0.2rem;\n}\n.project-heading {\n  padding: 0.5rem 1rem;\n  font-size: 2rem;\n  text-shadow: 3px 3px 0.1rem black;\n}\n.project-default {\n  padding: 1rem;\n  border: 2px solid white;\n  background-color: rgb(20, 8, 20);\n}\n.project-default:hover {\n  background-color: rgb(75, 30, 75);\n}\n.project-cell {\n  padding: 1rem;\n  border: 2px solid rgb(37, 37, 37);\n  background-color: hsl(17, 53%, 3%);\n}\n\n.project-delete {\n  background-color: hsl(0, 100%, 20%);\n  color: white;\n  padding: 0.1rem;\n  border: 1px solid black;\n}\n.project-delete:hover {\n  transform: scale(1.05);\n}\n\n.add-project-button {\n  background-color: hsl(254, 50%, 30%);\n  padding: 1rem;\n  border: 1px solid black;\n}\n.add-project-button:hover {\n  transform: scale(1.05);\n  background-color: hsl(254, 50%, 50%);\n}\n.task-area {\n  flex-grow: 1;\n  margin: 0.2rem;\n  border: 2px solid black;\n}\n.task-cell {\n  padding: 1rem;\n  margin: 0 auto;\n  background-color: hsl(117, 30%, 15%);\n  border-top: 1px solid black;\n}\n.task-delete {\n  background-color: hsl(0, 100%, 20%);\n  color: white;\n  padding: 0.1rem;\n  margin: 0 auto;\n  width: 12rem;\n  border: 1px solid black;\n}\n.task-delete:hover {\n  transform: scale(1.1);\n}\n.add-task-button {\n  background-color: hsl(254, 50%, 30%);\n  padding: 1rem;\n  border: 1px solid black;\n  border-left: none;\n}\n.add-task-button:hover {\n  background-color: hsl(254, 50%, 50%);\n}\n\n.footer {\n  background-color: #3f3f3f;\n  padding: 1rem;\n  border: 2px solid black;\n}\n\n/*add project */\n.add-project > header > h2 {\n  padding: 1rem;\n}\n.button-field {\n  padding: 1rem;\n}\n\n.button {\n  padding: 0.5rem;\n  margin: 1rem;\n}\n\n/*add task*/\n\n.add-task-input-fields {\n  max-width: 22rem;\n}\n.add-task-input-fields>label {\n  display: flex;\n  justify-content: right;\n  padding: 1rem;\n}\n.add-task-input-fields>label>input {\n  margin: 0 0 0 0.5rem;\n}\n.priority-buttons {\n  display: flex;\n  justify-content: right;\n}\n.priority-buttons input{\n  margin: 0.4rem;\n}\n#task-description {\n  padding: 1rem;\n  width: 90%;\n  max-width: 10rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/DOM.js":
/*!*******************************!*\
  !*** ./src/components/DOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOM = (function () {
  function find(f) {
    return document.querySelector(f);
  }

  //tasks
  const addTaskButton = find("#add-task-button");
  const tasksContainer = find("#tasks");

  //projects
  const addProjectButton = find("#add-project-button");
  const projectsContainer = find("#projects");
  const defaultProjects = find("#project-default");

  //project menu
  const projectMenu = find("#add-project-menu");
  const projectName = find("#project-name-input");
  const projectAcceptButton = find("#project-accept-button");
  const projectCancelButton = find("#project-accept-cancel");

  //task menu
  const taskMenu = find("#add-task-menu");
  const taskName = find("#task-name");
  const taskDate = find("#task-date");
  const taskPriorityHigh = find("#button-high");
  const taskPriorityMedium = find("#button-medium");
  const taskPriorityLow = find("#button-low");
  const taskPriorityButtons=[...document.querySelectorAll(".priority-buttons input")];
  const taskDescription = find("#task-description");
  const taskAcceptButton = find("#task-accept-button");
  const taskCancelButton = find("#task-cancel-button");

  return {
    addTaskButton,
    tasksContainer,
    addProjectButton,
    projectsContainer,
    defaultProjects,
    projectMenu,
    projectName,
    projectAcceptButton,
    projectCancelButton,
    taskMenu,
    taskName,
    taskDate,
    taskDescription,
    taskAcceptButton,
    taskCancelButton,
    taskPriorityHigh,
    taskPriorityMedium,
    taskPriorityLow,
    taskPriorityButtons,
  };
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);


/***/ }),

/***/ "./src/components/controller.js":
/*!**************************************!*\
  !*** ./src/components/controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/components/DOM.js");
/* harmony import */ var _taskMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskMenu.js */ "./src/components/taskMenu.js");
/* harmony import */ var _projectMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectMenu.js */ "./src/components/projectMenu.js");




const controller = (function () {
  const projects = [];
  function display() {
    const active = getActiveProject();
    if (!active) {
      displayAll();
      return;
    }
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.addTaskButton.style.display = "";
    displayProjects();
    displayTasks();
  }

  function displayProjects() {
    const projectBar = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.projectsContainer;
    projectBar.innerHTML = "";
    for (const project of projects) {
      let res = createProjectDiv(project, projects.indexOf(project));
      projectBar.append(res);
    }
  }

  function createProjectDiv(project, i) {
    const div = document.createElement("div");
    div.classList.add("project-cell");
    div.setAttribute("data-id", i);
    div.addEventListener("click", makeDivActive);

    const projectText = document.createElement("div");
    projectText.classList.add("project-text");
    projectText.innerText = project.name;

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("project-delete");
    deleteBtn.innerText = "D";
    deleteBtn.setAttribute("data-id", i);
    deleteBtn.addEventListener("click", deleteProject);

    div.append(projectText, deleteBtn);

    return div;
  }

  function makeDivActive(event) {
    projects.forEach((project) => {
      project.active = false;
    });
    const div = event.target;
    const index = div.getAttribute("data-id");

    projects[+index].active = true;
    display();
  }

  function deleteProject(event) {
    const deleteBtn = event.target;
    const index = deleteBtn.getAttribute("data-id");
    projects.splice(index, 1);
    display();
  }

  function deleteTask(event) {
    const deleteBtn = event.target;
    const index = deleteBtn.getAttribute("data-id");
    const activeProject = getActiveProject();
    activeProject.tasks.splice(index, 1);
    display();
  }

  function displayTasks() {
    const project = getActiveProject();

    const taskBar = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.tasksContainer;
    taskBar.innerHTML = "";

    for (const task of project.tasks) {
      const div = createTaskDiv(task.name, project.tasks.indexOf(task));
      taskBar.append(div);
    }
  }
  function createTaskDiv(name, i) {
    const div = document.createElement("div");
    div.classList.add("task-cell");
    div.setAttribute("data-id", i);

    const taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.innerText = name;

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("task-delete");
    deleteBtn.innerText = "D";
    deleteBtn.setAttribute("data-id", i);
    deleteBtn.addEventListener("click", deleteTask);

    div.append(taskText, deleteBtn);

    return div;
  }

  function displayAll() {
    const taskBar = _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.tasksContainer;
    taskBar.innerHTML = "";

    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.default.addTaskButton.style.display = "none";

    for (const project of projects) {
      for (const task of project.tasks) {
        const div = createTaskDiv(task.name, project.tasks.indexOf(task));
        taskBar.append(div);
      }
    }
  }

  function getActiveProject() {
    return projects.find((project) => {
      return project.active;
    });
  }

  function taskFactory(name, date, priority, description) {
    return { name, date, priority, description };
  }

  function addNewTask(name, date, description, priority) {
    const active = getActiveProject();
    const task = taskFactory(name, date, description, priority);
    active.tasks.push(task);
  }

  function addProject(name) {
    projects.forEach((project) => {
      project.active = false;
    });
    const project = projectFactory(name);
    projects.push(project);
    display();
  }

  function projectFactory(name) {
    let res = {};
    res.name = name;
    res.tasks = [];
    res.active = true;
    return res;
  }

  function addTask() {}

  return { addTask, addProject, display, addNewTask, displayAll };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);


/***/ }),

/***/ "./src/components/projectMenu.js":
/*!***************************************!*\
  !*** ./src/components/projectMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/components/controller.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/components/DOM.js");



const projectMenu = (function () {
  _DOM__WEBPACK_IMPORTED_MODULE_1__.default.addProjectButton.addEventListener("click", () => {
    _DOM__WEBPACK_IMPORTED_MODULE_1__.default.projectMenu.classList.toggle("hidden");
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.display();
  });

  _DOM__WEBPACK_IMPORTED_MODULE_1__.default.projectAcceptButton.addEventListener("click", () => {
    _DOM__WEBPACK_IMPORTED_MODULE_1__.default.projectMenu.classList.toggle("hidden");
    const projectName=_DOM__WEBPACK_IMPORTED_MODULE_1__.default.projectName.value;
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.addProject(projectName)
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.display();
  });

  _DOM__WEBPACK_IMPORTED_MODULE_1__.default.projectCancelButton.addEventListener("click", () => {
    _DOM__WEBPACK_IMPORTED_MODULE_1__.default.projectMenu.classList.toggle("hidden");
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.display();
  });

  _DOM__WEBPACK_IMPORTED_MODULE_1__.default.defaultProjects.addEventListener("click",()=>{
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.displayAll();
  })
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectMenu);


/***/ }),

/***/ "./src/components/taskMenu.js":
/*!************************************!*\
  !*** ./src/components/taskMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/components/controller.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/components/DOM.js");



const taskMenu = (function () {
  _DOM__WEBPACK_IMPORTED_MODULE_1__.default.taskAcceptButton.addEventListener("click", (e) => {
    const name = _DOM__WEBPACK_IMPORTED_MODULE_1__.default.taskName.value;
    const date = _DOM__WEBPACK_IMPORTED_MODULE_1__.default.taskDate.value;
    const description = _DOM__WEBPACK_IMPORTED_MODULE_1__.default.taskDescription.value;
    const priority = _DOM__WEBPACK_IMPORTED_MODULE_1__.default.taskPriorityButtons.find((button) => {
      return button.checked == true;
    }).value;
    
    _DOM__WEBPACK_IMPORTED_MODULE_1__.default.taskMenu.classList.toggle("hidden");
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.addNewTask(name, date, description, priority);
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.display();
  });

  _DOM__WEBPACK_IMPORTED_MODULE_1__.default.addTaskButton.addEventListener("click", () => {
    _DOM__WEBPACK_IMPORTED_MODULE_1__.default.taskMenu.classList.toggle("hidden");
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.display();
  });


  _DOM__WEBPACK_IMPORTED_MODULE_1__.default.taskCancelButton.addEventListener("click", () => {
    _DOM__WEBPACK_IMPORTED_MODULE_1__.default.taskMenu.classList.toggle("hidden");
    _controller_js__WEBPACK_IMPORTED_MODULE_0__.default.display();
  });
  
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskMenu);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DOM.js */ "./src/components/DOM.js");
/* harmony import */ var _components_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controller.js */ "./src/components/controller.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0TWVudS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrTWVudS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwrREFBK0Qsa0JBQWtCLEdBQUcsZUFBZSx1QkFBdUIsWUFBWSxhQUFhLGFBQWEsc0JBQXNCLHVCQUF1QixlQUFlLGlDQUFpQyxrQkFBa0IsNEJBQTRCLEdBQUcsV0FBVyxpQkFBaUIsR0FBRywwQkFBMEIsdUJBQXVCLGlCQUFpQixHQUFHLEtBQUssZUFBZSxjQUFjLEdBQUcsUUFBUSw4QkFBOEIsc0JBQXNCLGtCQUFrQiwyQkFBMkIsR0FBRyxZQUFZLGtCQUFrQix1Q0FBdUMsaURBQWlELEdBQUcsU0FBUyxrQkFBa0IsWUFBWSxHQUFHLFNBQVMsOEJBQThCLDRCQUE0QixvQkFBb0IsbUJBQW1CLEdBQUcsb0JBQW9CLHlCQUF5QixvQkFBb0Isc0NBQXNDLEdBQUcsb0JBQW9CLGtCQUFrQiw0QkFBNEIscUNBQXFDLEdBQUcsMEJBQTBCLHNDQUFzQyxHQUFHLGlCQUFpQixrQkFBa0Isc0NBQXNDLHVDQUF1QyxHQUFHLHFCQUFxQix3Q0FBd0MsaUJBQWlCLG9CQUFvQiw0QkFBNEIsR0FBRyx5QkFBeUIsMkJBQTJCLEdBQUcseUJBQXlCLHlDQUF5QyxrQkFBa0IsNEJBQTRCLEdBQUcsNkJBQTZCLDJCQUEyQix5Q0FBeUMsR0FBRyxjQUFjLGlCQUFpQixtQkFBbUIsNEJBQTRCLEdBQUcsY0FBYyxrQkFBa0IsbUJBQW1CLHlDQUF5QyxnQ0FBZ0MsR0FBRyxnQkFBZ0Isd0NBQXdDLGlCQUFpQixvQkFBb0IsbUJBQW1CLGlCQUFpQiw0QkFBNEIsR0FBRyxzQkFBc0IsMEJBQTBCLEdBQUcsb0JBQW9CLHlDQUF5QyxrQkFBa0IsNEJBQTRCLHNCQUFzQixHQUFHLDBCQUEwQix5Q0FBeUMsR0FBRyxhQUFhLDhCQUE4QixrQkFBa0IsNEJBQTRCLEdBQUcsa0RBQWtELGtCQUFrQixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxhQUFhLG9CQUFvQixpQkFBaUIsR0FBRyw0Q0FBNEMscUJBQXFCLEdBQUcsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsa0JBQWtCLEdBQUcsc0NBQXNDLHlCQUF5QixHQUFHLHFCQUFxQixrQkFBa0IsMkJBQTJCLEdBQUcsMEJBQTBCLG1CQUFtQixHQUFHLHFCQUFxQixrQkFBa0IsZUFBZSxxQkFBcUIsR0FBRyxTQUFTLHFGQUFxRixLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUs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O1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDaUI7QUFDYyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qZ2xvYmFsKi9cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hYnNvbHV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDIwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDUwJTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5zZWN0aW9uIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyptYWluIHBhZ2UqL1xcbjpyb290IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjEzMTA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaGVhZGluZyB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDEyLCAyOSUsIDIlKTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDAuMXJlbSByZ2IoMTI4LCAxMTUsIDApO1xcbn1cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuLmxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MTIwYjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAwLjJyZW07XFxufVxcbi5wcm9qZWN0LWhlYWRpbmcge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCAwLjFyZW0gYmxhY2s7XFxufVxcbi5wcm9qZWN0LWRlZmF1bHQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCA4LCAyMCk7XFxufVxcbi5wcm9qZWN0LWRlZmF1bHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAzMCwgNzUpO1xcbn1cXG4ucHJvamVjdC1jZWxsIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzcsIDM3LCAzNyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTcsIDUzJSwgMyUpO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDEwMCUsIDIwJSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1NCwgNTAlLCAzMCUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjU0LCA1MCUsIDUwJSk7XFxufVxcbi50YXNrLWFyZWEge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luOiAwLjJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLnRhc2stY2VsbCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTE3LCAzMCUsIDE1JSk7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi50YXNrLWRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMTAwJSwgMjAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuMXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDEycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi50YXNrLWRlbGV0ZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1NCwgNTAlLCAzMCUpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcbi5hZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1NCwgNTAlLCA1MCUpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi8qYWRkIHByb2plY3QgKi9cXG4uYWRkLXByb2plY3QgPiBoZWFkZXIgPiBoMiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uYnV0dG9uLWZpZWxkIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4vKmFkZCB0YXNrKi9cXG5cXG4uYWRkLXRhc2staW5wdXQtZmllbGRzIHtcXG4gIG1heC13aWR0aDogMjJyZW07XFxufVxcbi5hZGQtdGFzay1pbnB1dC1maWVsZHM+bGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uYWRkLXRhc2staW5wdXQtZmllbGRzPmxhYmVsPmlucHV0IHtcXG4gIG1hcmdpbjogMCAwIDAgMC41cmVtO1xcbn1cXG4ucHJpb3JpdHktYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG59XFxuLnByaW9yaXR5LWJ1dHRvbnMgaW5wdXR7XFxuICBtYXJnaW46IDAuNHJlbTtcXG59XFxuI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDEwcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVM7QUFDVDtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7O0VBRVYsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsT0FBTztBQUNUO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKmdsb2JhbCovXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWJzb2x1dGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAyMCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiA1MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuc2VjdGlvbiB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qbWFpbiBwYWdlKi9cXG46cm9vdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxMzEwO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmhlYWRpbmcge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxMiwgMjklLCAyJSk7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwLjFyZW0gcmdiKDEyOCwgMTE1LCAwKTtcXG59XFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcbi5saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDEyMGI7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMC4ycmVtO1xcbn1cXG4ucHJvamVjdC1oZWFkaW5nIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMC4xcmVtIGJsYWNrO1xcbn1cXG4ucHJvamVjdC1kZWZhdWx0IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgOCwgMjApO1xcbn1cXG4ucHJvamVjdC1kZWZhdWx0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgMzAsIDc1KTtcXG59XFxuLnByb2plY3QtY2VsbCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDM3LCAzNywgMzcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE3LCA1MyUsIDMlKTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAxMDAlLCAyMCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC4xcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNTQsIDUwJSwgMzAlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1NCwgNTAlLCA1MCUpO1xcbn1cXG4udGFzay1hcmVhIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1hcmdpbjogMC4ycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbi50YXNrLWNlbGwge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDExNywgMzAlLCAxNSUpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4udGFzay1kZWxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDEwMCUsIDIwJSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjFyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4udGFzay1kZWxldGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNTQsIDUwJSwgMzAlKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNTQsIDUwJSwgNTAlKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vKmFkZCBwcm9qZWN0ICovXFxuLmFkZC1wcm9qZWN0ID4gaGVhZGVyID4gaDIge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmJ1dHRvbi1maWVsZCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLyphZGQgdGFzayovXFxuXFxuLmFkZC10YXNrLWlucHV0LWZpZWxkcyB7XFxuICBtYXgtd2lkdGg6IDIycmVtO1xcbn1cXG4uYWRkLXRhc2staW5wdXQtZmllbGRzPmxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLmFkZC10YXNrLWlucHV0LWZpZWxkcz5sYWJlbD5pbnB1dCB7XFxuICBtYXJnaW46IDAgMCAwIDAuNXJlbTtcXG59XFxuLnByaW9yaXR5LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxufVxcbi5wcmlvcml0eS1idXR0b25zIGlucHV0e1xcbiAgbWFyZ2luOiAwLjRyZW07XFxufVxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiAxMHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IERPTSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGZpbmQoZikge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGYpO1xuICB9XG5cbiAgLy90YXNrc1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZmluZChcIiNhZGQtdGFzay1idXR0b25cIik7XG4gIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZmluZChcIiN0YXNrc1wiKTtcblxuICAvL3Byb2plY3RzXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBmaW5kKFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBmaW5kKFwiI3Byb2plY3RzXCIpO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdHMgPSBmaW5kKFwiI3Byb2plY3QtZGVmYXVsdFwiKTtcblxuICAvL3Byb2plY3QgbWVudVxuICBjb25zdCBwcm9qZWN0TWVudSA9IGZpbmQoXCIjYWRkLXByb2plY3QtbWVudVwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBmaW5kKFwiI3Byb2plY3QtbmFtZS1pbnB1dFwiKTtcbiAgY29uc3QgcHJvamVjdEFjY2VwdEJ1dHRvbiA9IGZpbmQoXCIjcHJvamVjdC1hY2NlcHQtYnV0dG9uXCIpO1xuICBjb25zdCBwcm9qZWN0Q2FuY2VsQnV0dG9uID0gZmluZChcIiNwcm9qZWN0LWFjY2VwdC1jYW5jZWxcIik7XG5cbiAgLy90YXNrIG1lbnVcbiAgY29uc3QgdGFza01lbnUgPSBmaW5kKFwiI2FkZC10YXNrLW1lbnVcIik7XG4gIGNvbnN0IHRhc2tOYW1lID0gZmluZChcIiN0YXNrLW5hbWVcIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZmluZChcIiN0YXNrLWRhdGVcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eUhpZ2ggPSBmaW5kKFwiI2J1dHRvbi1oaWdoXCIpO1xuICBjb25zdCB0YXNrUHJpb3JpdHlNZWRpdW0gPSBmaW5kKFwiI2J1dHRvbi1tZWRpdW1cIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eUxvdyA9IGZpbmQoXCIjYnV0dG9uLWxvd1wiKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5QnV0dG9ucz1bLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eS1idXR0b25zIGlucHV0XCIpXTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZmluZChcIiN0YXNrLWRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCB0YXNrQWNjZXB0QnV0dG9uID0gZmluZChcIiN0YXNrLWFjY2VwdC1idXR0b25cIik7XG4gIGNvbnN0IHRhc2tDYW5jZWxCdXR0b24gPSBmaW5kKFwiI3Rhc2stY2FuY2VsLWJ1dHRvblwiKTtcblxuICByZXR1cm4ge1xuICAgIGFkZFRhc2tCdXR0b24sXG4gICAgdGFza3NDb250YWluZXIsXG4gICAgYWRkUHJvamVjdEJ1dHRvbixcbiAgICBwcm9qZWN0c0NvbnRhaW5lcixcbiAgICBkZWZhdWx0UHJvamVjdHMsXG4gICAgcHJvamVjdE1lbnUsXG4gICAgcHJvamVjdE5hbWUsXG4gICAgcHJvamVjdEFjY2VwdEJ1dHRvbixcbiAgICBwcm9qZWN0Q2FuY2VsQnV0dG9uLFxuICAgIHRhc2tNZW51LFxuICAgIHRhc2tOYW1lLFxuICAgIHRhc2tEYXRlLFxuICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICB0YXNrQWNjZXB0QnV0dG9uLFxuICAgIHRhc2tDYW5jZWxCdXR0b24sXG4gICAgdGFza1ByaW9yaXR5SGlnaCxcbiAgICB0YXNrUHJpb3JpdHlNZWRpdW0sXG4gICAgdGFza1ByaW9yaXR5TG93LFxuICAgIHRhc2tQcmlvcml0eUJ1dHRvbnMsXG4gIH07XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IERPTTtcbiIsImltcG9ydCBET00gZnJvbSBcIi4vRE9NLmpzXCI7XG5pbXBvcnQgdGFza01lbnUgZnJvbSBcIi4vdGFza01lbnUuanNcIjtcbmltcG9ydCBwcm9qZWN0TWVueSBmcm9tIFwiLi9wcm9qZWN0TWVudS5qc1wiO1xuXG5jb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBjb25zdCBhY3RpdmUgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgIGRpc3BsYXlBbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgRE9NLmFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdEJhciA9IERPTS5wcm9qZWN0c0NvbnRhaW5lcjtcbiAgICBwcm9qZWN0QmFyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICBsZXQgcmVzID0gY3JlYXRlUHJvamVjdERpdihwcm9qZWN0LCBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKTtcbiAgICAgIHByb2plY3RCYXIuYXBwZW5kKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpdihwcm9qZWN0LCBpKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2VsbFwiKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBpKTtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1ha2VEaXZBY3RpdmUpO1xuXG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHRcIik7XG4gICAgcHJvamVjdFRleHQuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSBcIkRcIjtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBpKTtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuXG4gICAgZGl2LmFwcGVuZChwcm9qZWN0VGV4dCwgZGVsZXRlQnRuKTtcblxuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlRGl2QWN0aXZlKGV2ZW50KSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBkaXYgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgaW5kZXggPSBkaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgIHByb2plY3RzWytpbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICBkaXNwbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGV2ZW50KSB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGluZGV4ID0gZGVsZXRlQnRuLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBkaXNwbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGluZGV4ID0gZGVsZXRlQnRuLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgICBhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgZGlzcGxheSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG5cbiAgICBjb25zdCB0YXNrQmFyID0gRE9NLnRhc2tzQ29udGFpbmVyO1xuICAgIHRhc2tCYXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAoY29uc3QgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICBjb25zdCBkaXYgPSBjcmVhdGVUYXNrRGl2KHRhc2submFtZSwgcHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spKTtcbiAgICAgIHRhc2tCYXIuYXBwZW5kKGRpdik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVRhc2tEaXYobmFtZSwgaSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNlbGxcIik7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgaSk7XG5cbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1RleHQuY2xhc3NMaXN0LmFkZChcInRhc2stdGV4dFwiKTtcbiAgICB0YXNrVGV4dC5pbm5lclRleHQgPSBuYW1lO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSBcIkRcIjtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBpKTtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spO1xuXG4gICAgZGl2LmFwcGVuZCh0YXNrVGV4dCwgZGVsZXRlQnRuKTtcblxuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5QWxsKCkge1xuICAgIGNvbnN0IHRhc2tCYXIgPSBET00udGFza3NDb250YWluZXI7XG4gICAgdGFza0Jhci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgRE9NLmFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVUYXNrRGl2KHRhc2submFtZSwgcHJvamVjdC50YXNrcy5pbmRleE9mKHRhc2spKTtcbiAgICAgICAgdGFza0Jhci5hcHBlbmQoZGl2KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCkge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiB7XG4gICAgICByZXR1cm4gcHJvamVjdC5hY3RpdmU7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0YXNrRmFjdG9yeShuYW1lLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4geyBuYW1lLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24gfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE5ld1Rhc2sobmFtZSwgZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgY29uc3QgYWN0aXZlID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrRmFjdG9yeShuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICAgIGFjdGl2ZS50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkobmFtZSk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBkaXNwbGF5KCk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeShuYW1lKSB7XG4gICAgbGV0IHJlcyA9IHt9O1xuICAgIHJlcy5uYW1lID0gbmFtZTtcbiAgICByZXMudGFza3MgPSBbXTtcbiAgICByZXMuYWN0aXZlID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGFzaygpIHt9XG5cbiAgcmV0dXJuIHsgYWRkVGFzaywgYWRkUHJvamVjdCwgZGlzcGxheSwgYWRkTmV3VGFzaywgZGlzcGxheUFsbCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjtcbiIsImltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IHByb2plY3RNZW51ID0gKGZ1bmN0aW9uICgpIHtcbiAgRE9NLmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBET00ucHJvamVjdE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBjb250cm9sbGVyLmRpc3BsYXkoKTtcbiAgfSk7XG5cbiAgRE9NLnByb2plY3RBY2NlcHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBET00ucHJvamVjdE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZT1ET00ucHJvamVjdE5hbWUudmFsdWU7XG4gICAgY29udHJvbGxlci5hZGRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgIGNvbnRyb2xsZXIuZGlzcGxheSgpO1xuICB9KTtcblxuICBET00ucHJvamVjdENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIERPTS5wcm9qZWN0TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGNvbnRyb2xsZXIuZGlzcGxheSgpO1xuICB9KTtcblxuICBET00uZGVmYXVsdFByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgY29udHJvbGxlci5kaXNwbGF5QWxsKCk7XG4gIH0pXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWVudTtcbiIsImltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IHRhc2tNZW51ID0gKGZ1bmN0aW9uICgpIHtcbiAgRE9NLnRhc2tBY2NlcHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IERPTS50YXNrTmFtZS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gRE9NLnRhc2tEYXRlLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gRE9NLnRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IERPTS50YXNrUHJpb3JpdHlCdXR0b25zLmZpbmQoKGJ1dHRvbikgPT4ge1xuICAgICAgcmV0dXJuIGJ1dHRvbi5jaGVja2VkID09IHRydWU7XG4gICAgfSkudmFsdWU7XG4gICAgXG4gICAgRE9NLnRhc2tNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgY29udHJvbGxlci5hZGROZXdUYXNrKG5hbWUsIGRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSk7XG4gICAgY29udHJvbGxlci5kaXNwbGF5KCk7XG4gIH0pO1xuXG4gIERPTS5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgRE9NLnRhc2tNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgY29udHJvbGxlci5kaXNwbGF5KCk7XG4gIH0pO1xuXG5cbiAgRE9NLnRhc2tDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBET00udGFza01lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBjb250cm9sbGVyLmRpc3BsYXkoKTtcbiAgfSk7XG4gIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza01lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBkb20gZnJvbSBcIi4vY29tcG9uZW50cy9ET00uanNcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL2NvbXBvbmVudHMvY29udHJvbGxlci5qc1wiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==