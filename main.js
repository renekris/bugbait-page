/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\",\\n        Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\",\\n        sans-serif;\\n    --hl-orange: #fb7e14;\\n    background-color: #1a1a1a;\\n}\\n\\n::selection {\\n    color: black;\\n    background: #fb7e14;\\n}\\n\\n::-webkit-scrollbar {\\n    background-color: #0a0a0a;\\n}\\n\\n::-webkit-scrollbar-thumb {\\n    background-color: #fb7e14;\\n}\\n\\nbody {\\n    margin: 0;\\n    height: 100vh;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n    box-sizing: border-box;\\n}\\n\\n#container {\\n    display: flex;\\n    align-items: center;\\n    flex-direction: column;\\n    height: 100%;\\n    width: 100%;\\n    background-color: #1a1a1a;\\n}\\n\\n/* HEADER */\\n\\n#header {\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    width: clamp(80% 800px 100%);\\n    height: 3rem;\\n    background-color: #0a0a0a;\\n    border-bottom: 2px solid var(--hl-orange);\\n    box-shadow: 0 0 3px 2px var(--hl-orange);\\n    z-index: 100;\\n}\\n\\n#header .icon {\\n    display: flex;\\n    margin: 0.5rem;\\n    outline: none;\\n}\\n\\n#header .icon img {\\n    width: 2.5rem;\\n    animation: flicker 5s ease-in infinite;\\n}\\n\\n#header .icon:hover,\\n#header .icon:focus {\\n    filter: drop-shadow(0 0 3px var(--hl-orange));\\n}\\n\\n#header ul {\\n    display: flex;\\n    width: 100%;\\n    justify-content: space-around;\\n    padding: 0;\\n    list-style: none;\\n}\\n\\n#header li a {\\n    margin: 0.5rem;\\n    text-decoration: none;\\n    font-weight: bolder;\\n    color: var(--hl-orange);\\n    scale: 1;\\n    transition: 0.05s ease-in;\\n    cursor: pointer;\\n}\\n\\n#header li a:hover,\\n#header li a:focus {\\n    border-bottom: var(--hl-orange) solid 2px;\\n    outline: none;\\n    filter: drop-shadow(0 0 3px var(--hl-orange));\\n}\\n\\n/* CONTENT */\\n\\n#content-wrapper {\\n    display: flex;\\n    justify-content: center;\\n    height: 100%;\\n    overflow: auto;\\n    width: 100%;\\n}\\n\\n#content {\\n    height: 100%;\\n    width: 80%;\\n    margin: 10% 0;\\n    display: flex;\\n    flex-direction: column;\\n    height: fit-content;\\n    padding: 5%;\\n    background-color: #0a0a0a;\\n    color: var(--hl-orange);\\n    border-radius: 25px;\\n}\\n\\n#content h1 {\\n    display: flex;\\n    justify-content: center;\\n    margin: 0 0 1rem 0;\\n}\\n\\n#content img {\\n    width: 100%;\\n    height: auto;\\n}\\n\\n.image-grid {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    gap: 5%;\\n}\\n\\n.image-grid img {\\n    border: var(--hl-orange) 3px solid;\\n    padding: 2.5%;\\n    transition: 0.05s ease;\\n}\\n\\n.image-grid img:hover {\\n    scale: 1.15;\\n    z-index: 100;\\n    cursor: zoom-in;\\n}\\n\\n/* FOOTER */\\n\\n#footer {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin-top: auto;\\n    width: 100%;\\n    height: 2rem;\\n    background-color: #0a0a0a;\\n    color: var(--hl-orange);\\n    border-top: 1px solid var(--hl-orange);\\n    font-size: 0.5rem;\\n    box-shadow: 0 0 2px 1px var(--hl-orange);\\n    z-index: 100;\\n}\\n\\n/* KEYFRAMES */\\n\\n@keyframes flicker {\\n    0% {\\n        filter: drop-shadow(0px 0px 9px var(--hl-orange));\\n    }\\n\\n    50% {\\n        filter: drop-shadow(0px 0px 14px var(--hl-orange));\\n    }\\n\\n    100% {\\n        filter: drop-shadow(0px 0px 9px var(--hl-orange));\\n    }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://bugbait-page/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://bugbait-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://bugbait-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://bugbait-page/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://bugbait-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://bugbait-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://bugbait-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://bugbait-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://bugbait-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://bugbait-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/create-base.js":
/*!****************************!*\
  !*** ./src/create-base.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContentWrapper\": () => (/* binding */ createContentWrapper),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createHeader() {\n    // CREATE PARENT\n    const elHeader = document.createElement('div');\n    elHeader.id = 'header';\n\n    // ICON\n    const elIconLink = document.createElement('a');\n    elIconLink.className = 'icon';\n    const elIconImage = document.createElement('img');\n    elIconImage.src = './svg/Orange_lambda.svg';\n    elIconImage.alt = 'Lambda Icon';\n    elIconLink.appendChild(elIconImage);\n\n    elHeader.appendChild(elIconLink);\n\n    // NAV\n    const elUl = document.createElement('ul');\n    const aNames = ['Home', 'Locations', 'Contact'];\n\n    for (let i = 0; i < aNames.length; i++) {\n        const elLi = document.createElement('li');\n        const elA = document.createElement('a');\n        elA.textContent = aNames[i];\n        elA.id = aNames[i].toLowerCase();\n        elLi.appendChild(elA);\n        elUl.appendChild(elLi);\n    }\n\n    elHeader.appendChild(elUl);\n\n    // RETURN\n    return elHeader;\n}\n\nfunction createContentWrapper(appendElement = null) {\n    const elWrapper = document.createElement('div');\n    elWrapper.id = 'content-wrapper';\n\n    if (appendElement !== null) {\n        elWrapper.appendChild(appendElement);\n    }\n\n    return elWrapper;\n}\n\nfunction createFooter() {\n    // CREATE PARENT\n    const elFooter = document.createElement('div');\n    elFooter.id = 'footer';\n\n    // PARAGRAPH\n    const elP = document.createElement('p');\n    elP.textContent = '© 2022 Renekris. All bugs baited.';\n    elFooter.appendChild(elP);\n\n    // RETURN\n    return elFooter;\n}\n\n\n\n\n//# sourceURL=webpack://bugbait-page/./src/create-base.js?");

/***/ }),

/***/ "./src/create-contact.js":
/*!*******************************!*\
  !*** ./src/create-contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\n    // CREATE PARENT\n    const elContent = document.createElement('div');\n\n    // CONTENT\n    elContent.id = 'content';\n\n    const elH1 = document.createElement('h1');\n    elH1.textContent = 'Contact Bugbait';\n    elContent.appendChild(elH1);\n\n\n    let elP = document.createElement('p');\n    elP.textContent = '';\n    elContent.appendChild(elP);\n\n    elP = document.createElement('p');\n    elP.textContent = 'test';\n    elContent.appendChild(elP);\n\n    elP = document.createElement('p');\n    elP.textContent = 'test 2';\n    elContent.appendChild(elP);\n\n\n    // RETURN\n    return elContent;\n}\n\n\n\n\n//# sourceURL=webpack://bugbait-page/./src/create-contact.js?");

/***/ }),

/***/ "./src/create-home.js":
/*!****************************!*\
  !*** ./src/create-home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n    // CREATE PARENT\n    const elContent = document.createElement('div');\n\n    // CONTENT\n    elContent.id = 'content';\n\n    const elH1 = document.createElement('h1');\n    elH1.textContent = 'Half-Life Bugbait';\n    elContent.appendChild(elH1);\n\n\n    let elP = document.createElement('p');\n    elP.textContent = 'Half-Life Bugbait is a family of stores where Half-Life foods and weapons are available to purchase.';\n    elContent.appendChild(elP);\n\n    elP = document.createElement('p');\n    elP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officiis, quaerat ab provident esse asperiores ut aliquam facilis! Doloremque fugit enim facere culpa ad nam, cumque repellat voluptatibus eius nostrum! Debitis commodi fuga dicta aut temporibus, quia accusamus molestiae eos possimus at rem. Quisquam assumenda odit ut expedita impedit vitae asperiores hic, iure deserunt quasi doloremque consequuntur tenetur consectetur! Perspiciatis. Inventore id, commodi magnam, laborum, in tempora dolores tenetur cupiditate vitae alias nobis impedit.';\n    elContent.appendChild(elP);\n\n    elP = document.createElement('p');\n    elP.textContent = 'Fuga in voluptates eligendi enim quis facilis deleniti adipisci, architecto saepe omnis quisquam nobis sed harum? Ullam exercitationem sunt tempore reiciendis cumque iusto voluptatum odio saepe quae repellat, natus error eos velit vel officiis aliquid cum a quasi ut! Veritatis, aut. Minus excepturi odio nemo animi! Aliquid consequatur blanditiis totam sed aspernatur deserunt assumenda consequuntur quam, earum ducimus sint et.';\n    elContent.appendChild(elP);\n\n\n    // RETURN\n    return elContent;\n}\n\n\n\n\n//# sourceURL=webpack://bugbait-page/./src/create-home.js?");

/***/ }),

/***/ "./src/create-locations.js":
/*!*********************************!*\
  !*** ./src/create-locations.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createLocations\": () => (/* binding */ createLocations)\n/* harmony export */ });\nfunction createLocations() {\n    // CREATE PARENT\n    const elContent = document.createElement('div');\n\n    // CONTENT\n    elContent.id = 'content';\n\n    const elH1 = document.createElement('h1');\n    elH1.textContent = 'Bugbait Locations';\n    elContent.appendChild(elH1);\n\n\n    const elH2 = document.createElement('h2');\n    elH2.textContent = 'These are our locations that are available to visit at working hours.';\n    elContent.appendChild(elH2);\n\n\n\n    const locations = ['Stores', 'Restaurants', 'Factories'];\n    for (let y = 0; y < locations.length; y++) {\n        const elDiv = document.createElement('div');\n        elDiv.className = locations[y].toLowerCase();\n        const elH3 = document.createElement('h3');\n        elH3.textContent = locations[y];\n        elDiv.appendChild(elH3);\n\n\n        const elImgDiv = document.createElement('div');\n        elImgDiv.className = 'image-grid';\n        elDiv.appendChild(elImgDiv);\n\n        const HOW_MANY_IMAGES_PER_LOCATION_NAME = 3;\n        const locationNames = ['store', 'restaurant', 'factory'];\n        for (let x = 0; x < HOW_MANY_IMAGES_PER_LOCATION_NAME; x++) {\n            const elImg = document.createElement('img');\n            elImg.src = `./img/${locationNames[y]}${x + 1}.jpg`;\n            console.log(`./img/${locationNames[y]}${x + 1}.jpg`);\n            elImg.alt = `${locationNames[y]}${x + 1}`;\n            elImgDiv.appendChild(elImg);\n        }\n        elContent.appendChild(elDiv);\n    }\n\n    // RETURN\n    return elContent;\n}\n\n\n\n\n//# sourceURL=webpack://bugbait-page/./src/create-locations.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-base */ \"./src/create-base.js\");\n/* harmony import */ var _create_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-home.js */ \"./src/create-home.js\");\n/* harmony import */ var _create_locations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-locations */ \"./src/create-locations.js\");\n/* harmony import */ var _create_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-contact */ \"./src/create-contact.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\n\n\n\n\n(function main() {\n    // DOM CACHE\n    const elContainer = document.getElementById('container');\n\n    // DRAW HOME ELEMENTS\n    elContainer.append((0,_create_base__WEBPACK_IMPORTED_MODULE_0__.createHeader)());\n    elContainer.append((0,_create_base__WEBPACK_IMPORTED_MODULE_0__.createContentWrapper)((0,_create_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)()));\n    elContainer.append((0,_create_base__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n\n    // DOM CACHE\n    const elHome = document.getElementById('home');\n    const elStores = document.getElementById('locations');\n    const elContact = document.getElementById('contact');\n\n    // NAV EVENT LISTENERS\n    elHome.addEventListener('pointerdown', eventHome);\n    elStores.addEventListener('pointerdown', eventStores);\n    elContact.addEventListener('pointerdown', eventContact);\n})();\n\nfunction eventHome() {\n    replaceContent((0,_create_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)());\n}\n\nfunction eventStores() {\n    replaceContent((0,_create_locations__WEBPACK_IMPORTED_MODULE_2__.createLocations)());\n}\n\nfunction eventContact() {\n    replaceContent((0,_create_contact__WEBPACK_IMPORTED_MODULE_3__.createContact)());\n}\n\nfunction replaceContent(element = null) {\n    if (!(element instanceof HTMLDivElement) || element === null) return;\n    const contentWrapper = document.getElementById('content-wrapper');\n    contentWrapper.innerHTML = '';\n    contentWrapper.append(element);\n}\n\n\n//# sourceURL=webpack://bugbait-page/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;