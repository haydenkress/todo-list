"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/EuclidCircularA-Regular-WebS.woff2 */ "./src/assets/EuclidCircularA-Regular-WebS.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/EuclidCircularA-Medium-WebS.woff2 */ "./src/assets/EuclidCircularA-Medium-WebS.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Euclid\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Euclid\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n  font-weight: 500;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100vw;\n  font-family: \"Euclid\", sans-serif;\n}\n\nbutton {\n  font-family: \"Euclid\", sans-serif;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.header {\n  height: 50px;\n  background-color: lightblue;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0px 20px;\n}\n\n.page-title {\n  font-size: 20px;\n  font-weight: 500;\n  margin-left: 25px;\n}\n\n.main {\n  flex: 1;\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) 5fr;\n  grid-template-rows: auto;\n  background-color: white;\n}\n\n.sidebar {\n  grid-row: 1;\n  border: 1px black;\n  background-color: #f8f8f8;\n  box-sizing: border-box;\n  padding: 30px;\n}\n\n.menu-icon {\n  width: 30px;\n}\n\n.heading {\n  font-size: 20px;\n  margin: 20px 0px;\n  padding: 0px 10px;\n  font-weight: 500;\n}\n\n.project {\n  margin: 10px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: 12px;\n  padding: 5px 10px;\n  font-weight: 400;\n}\n\n.project:hover {\n  background-color: #ededed;\n}\n\n.project-name {\n  font-size: 20px;\n  flex: 1;\n}\n\n.remove-btn {\n  width: 10px;\n  align-self: flex-end center;\n}\n\n.add-project-btn {\n  display: block;\n  box-sizing: border-box;\n  background-color: #f27e3d;\n  color: white;\n  padding: 5px 15px;\n  font-size: 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  margin: 20px 0px 20px 10px;\n  border-style: none;\n}\n\n.project-input {\n  margin: 20px 0px;\n}\n\n.project-area {\n  box-sizing: border-box;\n  padding: 30px;\n  grid-row: 1;\n}\n\n.title {\n  font-size: 30px;\n  box-sizing: border-box;\n  font-weight: 500;\n}\n\n.task-area {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: 30px;\n  padding: 20px 0px;\n}\n\n.task {\n  align-items: center;\n  padding: 5px 10px;\n  display: flex;\n  gap: 20px;\n}\n\n.task:hover {\n  background-color: #ededed;\n}\n\n.task-circle {\n  width: 20px;\n}\n\n.task-name {\n  color: black;\n  font-size: 15px;\n}\n\n.add-task-btn {\n  background-color: #489ae7;\n  border-style: none;\n  border-radius: 8px;\n  padding: 5px 15px;\n  color: white;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4DAAuE;EACvE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,4DAAsE;EACtE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,6CAA6C;EAC7C,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,yBAAyB;EACzB,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,OAAO;AACT;;AAEA;EACE,WAAW;EACX,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,0BAA0B;EAC1B,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd","sourcesContent":["@font-face {\n  font-family: \"Euclid\";\n  src: url(\"./assets/EuclidCircularA-Regular-WebS.woff2\") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Euclid\";\n  src: url(\"./assets/EuclidCircularA-Medium-WebS.woff2\") format(\"woff2\");\n  font-weight: 500;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100vw;\n  font-family: \"Euclid\", sans-serif;\n}\n\nbutton {\n  font-family: \"Euclid\", sans-serif;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.header {\n  height: 50px;\n  background-color: lightblue;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0px 20px;\n}\n\n.page-title {\n  font-size: 20px;\n  font-weight: 500;\n  margin-left: 25px;\n}\n\n.main {\n  flex: 1;\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) 5fr;\n  grid-template-rows: auto;\n  background-color: white;\n}\n\n.sidebar {\n  grid-row: 1;\n  border: 1px black;\n  background-color: #f8f8f8;\n  box-sizing: border-box;\n  padding: 30px;\n}\n\n.menu-icon {\n  width: 30px;\n}\n\n.heading {\n  font-size: 20px;\n  margin: 20px 0px;\n  padding: 0px 10px;\n  font-weight: 500;\n}\n\n.project {\n  margin: 10px 0px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: 12px;\n  padding: 5px 10px;\n  font-weight: 400;\n}\n\n.project:hover {\n  background-color: #ededed;\n}\n\n.project-name {\n  font-size: 20px;\n  flex: 1;\n}\n\n.remove-btn {\n  width: 10px;\n  align-self: flex-end center;\n}\n\n.add-project-btn {\n  display: block;\n  box-sizing: border-box;\n  background-color: #f27e3d;\n  color: white;\n  padding: 5px 15px;\n  font-size: 14px;\n  border-radius: 8px;\n  cursor: pointer;\n  margin: 20px 0px 20px 10px;\n  border-style: none;\n}\n\n.project-input {\n  margin: 20px 0px;\n}\n\n.project-area {\n  box-sizing: border-box;\n  padding: 30px;\n  grid-row: 1;\n}\n\n.title {\n  font-size: 30px;\n  box-sizing: border-box;\n  font-weight: 500;\n}\n\n.task-area {\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: 30px;\n  padding: 20px 0px;\n}\n\n.task {\n  align-items: center;\n  padding: 5px 10px;\n  display: flex;\n  gap: 20px;\n}\n\n.task:hover {\n  background-color: #ededed;\n}\n\n.task-circle {\n  width: 20px;\n}\n\n.task-name {\n  color: black;\n  font-size: 15px;\n}\n\n.add-task-btn {\n  background-color: #489ae7;\n  border-style: none;\n  border-radius: 8px;\n  padding: 5px 15px;\n  color: white;\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
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
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


(0,_modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todolist */ "./src/modules/Todolist.js");

const myToDoList = (0,_Todolist__WEBPACK_IMPORTED_MODULE_0__["default"])();
const createProject = (title) => {
  const tasks = [];

  function getProjectTasksFromLocalStorage(projectName) {
    const projectsData = JSON.parse(localStorage.getItem("projects"));
    if (projectsData) {
      const projectData = projectsData.find(
        (project) => project.title === projectName
      );
      if (projectData) {
        return projectData.tasks || []; // Return tasks array or an empty array if not found
      }
    }
  }

  return {
    title,
    tasks,

    addTask: function (todo) {
      this.tasks.push(todo);
    },

    getName: function () {
      return title;
    },

    removeTask: function (taskName) {
      const taskToDelete = this.tasks.find((task) => task === taskName); // Changed from task.name to task.title assuming title is the property name
      this.tasks.splice(this.tasks.indexOf(taskToDelete), 1);
      myToDoList.saveCurrentProject(this);
    },

    getTasks: function () {
      const tasksFromLocalStorage = getProjectTasksFromLocalStorage(this.title);
      if (tasksFromLocalStorage) {
        return tasksFromLocalStorage;
      } else {
        return this.tasks;
      }
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTask = (title) => {
  return {
    title, // Include title property and assign it the value of the title argument
    isComplete: false,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


/***/ }),

/***/ "./src/modules/Todolist.js":
/*!*********************************!*\
  !*** ./src/modules/Todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");



function toDoList() {
  let projects = [];

  return {
    projects,

    saveToLocalStorage: function () {
      //console.log(this.projects);
      localStorage.setItem("projects", JSON.stringify(this.projects));
    },

    deleteCurrentProject: function () {
      const localItem = localStorage.removeItem("currentProject");
      if (!localItem) {
        console.log("No current project");
      }
    },

    loadFromLocalStorage: function () {
      const projectsData = JSON.parse(localStorage.getItem("projects"));
      if (projectsData) {
        this.projects = projectsData.map((projectData) => {
          const project = (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectData.title);
          if (projectData.tasks) {
            project.tasks = projectData.tasks.map((taskData) => {
              const task = (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskData.title); // Update to use 'title' property instead of 'name'
              task.isComplete = taskData.isComplete; // Set isComplete property from taskData
              return task;
            });
          }
          return project;
        });
      } else {
        this.generateProject("Inbox");
        this.saveToLocalStorage(); // Save the updated myToDoList object with default projects to local storage
      }
      return this.projects;
    },

    saveCurrentProject: function (project) {
      localStorage.setItem("currentProject", JSON.stringify(project));
    },

    loadCurrentProject: function () {
      const currentProject = JSON.parse(localStorage.getItem("currentProject"));
      if (currentProject) {
        const project = (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])(currentProject.title);
        if (currentProject.tasks) {
          // Update to use 'currentProject.tasks' instead of 'project.tasks'
          project.tasks = currentProject.tasks.map((taskData) => {
            const task = (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskData.title);
            task.isComplete = taskData.isComplete;
            return task; // Update to return 'task' instead of 'project.tasks'
          });
        }
        return project;
      }
    },

    getProject: function (projectName) {
      return this.projects.find((project) => project.getName() === projectName);
    },

    getProjects: function () {
      this.loadFromLocalStorage();
    },

    setProjects: function (projects) {
      this.projects = projects;
      this.saveToLocalStorage();
    },

    generateProject: function (name) {
      const project = (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
      this.projects.push(project);
      project.addTask((0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])("do the dishes"));
      this.saveToLocalStorage();
      return project;
    },

    saveTask: function (project, title) {
      const task = (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(title);
      project.addTask(task);
      const projectIndex = this.projects.findIndex(
        (p) => p.title === project.title
      );
      this.projects[projectIndex] = project;
      this.saveToLocalStorage();
      this.saveCurrentProject(project);
      return task;
    },

    addProject: function (newProject) {
      if (this.projects.find((project) => project.name === newProject.name))
        return;
      this.projects.push(newProject);
      this.saveToLocalStorage();
    },

    deleteProject: function (projectName) {
      const projectToDelete = this.projects.find(
        (project) => project === projectName
      );
      this.projects.splice(this.projects.indexOf(projectToDelete), 1);
      this.saveToLocalStorage();
    },
  };
}


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _Todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todolist */ "./src/modules/Todolist.js");
/* harmony import */ var _assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/menu.svg */ "./src/assets/icons/menu.svg");
/* harmony import */ var _assets_icons_remove_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/remove.svg */ "./src/assets/icons/remove.svg");
/* harmony import */ var _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/circle.svg */ "./src/assets/icons/circle.svg");






function UI() {
  const myToDoList = (0,_Todolist__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const body = document.querySelector("body");
  const content = document.createElement("div");
  content.classList.add("content");
  body.append(content);

  const mainContent = (function () {
    const header = document.createElement("div");
    header.classList.add("header");
    content.append(header);

    const Menu = new Image();
    Menu.src = _assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_2__;
    Menu.classList.add("menu-icon");
    header.append(Menu);

    const pageTitle = document.createElement("div");
    pageTitle.classList.add("page-title");
    pageTitle.textContent = "ToDo List";
    header.append(pageTitle);

    const main = document.createElement("div");
    main.classList.add("main");

    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    const projectArea = document.createElement("div");
    projectArea.classList.add("project-area");

    content.append(main);
    main.append(sidebar);
    main.append(projectArea);

    return {
      main,
      header,
      sidebar,
      projectArea,
      Menu,
    };
  })();

  const initiateSidebar = function () {
    const totalProjects = myToDoList.loadFromLocalStorage();
    const defaultProjects = totalProjects.slice(0, 1);
    const createdProjects = totalProjects.slice(1);

    const defaultProjectList = document.createElement("div");
    defaultProjectList.classList.add("default-projects");
    mainContent.sidebar.append(defaultProjectList);

    function addDefaultProjects() {
      defaultProjects.forEach((project) => {
        const addedProject = addProjectToDOM(project);
        defaultProjectList.appendChild(addedProject);
      });
    }

    const projectsHeading = document.createElement("div");
    projectsHeading.classList.add("heading");
    projectsHeading.textContent = "My Projects";
    mainContent.sidebar.append(projectsHeading);

    const lineBreak = document.createElement("hr");
    mainContent.sidebar.append(lineBreak);

    const projectList = document.createElement("div");
    projectList.classList.add("projects");
    mainContent.sidebar.append(projectList);

    function addCreatedProjects() {
      createdProjects.forEach((project) => {
        const addedProject = addProjectToDOM(project);
        projectList.append(addedProject);
      });
    }

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("add-project-btn");
    addProjectBtn.textContent = "Add Project";
    mainContent.sidebar.append(addProjectBtn);

    addProjectBtn.addEventListener("click", () => {
      const projectInput = document.createElement("input");
      projectInput.classList.add("project-input");
      projectList.append(projectInput);
      addProjectBtn.remove();

      projectInput.addEventListener("blur", () => {
        const projectName = projectInput.value;
        if (projectName.trim() !== "" && projectName !== "Inbox") {
          const newProject = myToDoList.generateProject(projectName);
          const addedProject = addProjectToDOM(newProject);
          projectList.append(addedProject);
        }
        projectInput.remove();
        mainContent.sidebar.append(addProjectBtn);
      });
    });

    mainContent.Menu.addEventListener("click", () => {
      if (mainContent.main.contains(mainContent.sidebar)) {
        mainContent.sidebar.remove();
        mainContent.main.style.gridTemplateColumns = "1fr";
      } else {
        mainContent.main.style.gridTemplateColumns = "minmax(200px, 1fr) 5fr";
        mainContent.main.insertBefore(
          mainContent.sidebar,
          mainContent.main.firstChild
        );
      }
    });

    addDefaultProjects();
    addCreatedProjects();
  };

  function addProjectToDOM(project) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.classList.add(
      project.getName().toLowerCase().replace(/\s+/g, "-")
    );
    const projectName = document.createElement("div");
    projectName.textContent = project.getName();
    projectName.classList.add("project-name");
    projectElement.append(projectName);

    if (project.getName() !== "Inbox") {
      const Remove = new Image();
      Remove.src = _assets_icons_remove_svg__WEBPACK_IMPORTED_MODULE_3__;
      Remove.classList.add("remove-btn");

      projectElement.append(Remove);

      Remove.addEventListener("click", () => {
        const currentProject = myToDoList.loadCurrentProject();
        if (currentProject) {
          if (currentProject.title === project.title) {
            clearTaskList();
            myToDoList.deleteCurrentProject();
          }
        }
        myToDoList.deleteProject(project);
        projectElement.remove();
      });
    }
    projectName.addEventListener("click", () => {
      clearTaskList();
      openProject(project, project.tasks);
    });

    return projectElement;
  }

  function clearTaskList() {
    mainContent.projectArea.innerHTML = "";
  }

  // opening the project in the task area
  function openProject(project, tasks) {
    myToDoList.saveCurrentProject(project);

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = project.title;
    mainContent.projectArea.append(title);

    const taskArea = document.createElement("div");
    taskArea.classList.add("task-area");
    mainContent.projectArea.append(taskArea);

    tasks.forEach((task) => {
      const addedTask = addTaskToDOM(project, task);
      taskArea.append(addedTask);
    });

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.textContent = "Add Task";
    mainContent.projectArea.append(addTaskBtn);

    addTaskBtn.addEventListener("click", () => {
      const taskInput = document.createElement("input");
      mainContent.projectArea.append(taskInput);
      addTaskBtn.remove();

      taskInput.addEventListener("blur", () => {
        const taskName = taskInput.value;
        if (taskName.trim() !== "") {
          const newTask = myToDoList.saveTask(project, taskName);
          const addedTask = addTaskToDOM(project, newTask);
          taskArea.append(addedTask);
        }
        taskInput.remove();
        mainContent.projectArea.append(addTaskBtn);
      });
    });
  }

  function addTaskToDOM(project, task) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskName = document.createElement("div");
    taskName.classList.add("task-name");
    taskName.textContent = task.title;

    const taskCircle = new Image();
    taskCircle.classList.add("task-circle");
    taskCircle.src = _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_4__;

    taskElement.append(taskCircle);
    taskElement.append(taskName);

    taskCircle.addEventListener("click", () => {
      task.isComplete = true;
      project.removeTask(task);
      myToDoList.saveToLocalStorage();
      myToDoList.saveCurrentProject(project);
      taskElement.remove();
    });
    return taskElement;
  }

  (function () {
    initiateSidebar();
    const currentProject = myToDoList.loadCurrentProject();
    if (currentProject) {
      clearTaskList();
      openProject(currentProject, currentProject.tasks);
    }
  })();
}


/***/ }),

/***/ "./src/assets/EuclidCircularA-Medium-WebS.woff2":
/*!******************************************************!*\
  !*** ./src/assets/EuclidCircularA-Medium-WebS.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf58c9f0b39b1c584c9e.woff2";

/***/ }),

/***/ "./src/assets/EuclidCircularA-Regular-WebS.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/EuclidCircularA-Regular-WebS.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cf5f4fa5485739e871f.woff2";

/***/ }),

/***/ "./src/assets/icons/circle.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/circle.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7cf3a28f0ddd73e282b.svg";

/***/ }),

/***/ "./src/assets/icons/menu.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/menu.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a411e1fef5989db1e06d.svg";

/***/ }),

/***/ "./src/assets/icons/remove.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/remove.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74abf0038320edd3405e.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxtREFBTztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxREFBVTtBQUM3Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFNOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Ub2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvRXVjbGlkQ2lyY3VsYXJBLVJlZ3VsYXItV2ViUy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0V1Y2xpZENpcmN1bGFyQS1NZWRpdW0tV2ViUy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXVjbGlkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXVjbGlkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFdWNsaWRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFdWNsaWRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxufVxcblxcbi5wYWdlLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tbGVmdDogMjVweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBib3JkZXI6IDFweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLm1lbnUtaWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4IDBweDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucmVtb3ZlLWJ0biB7XFxuICB3aWR0aDogMTBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kIGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3ZTNkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDIwcHggMHB4IDIwcHggMTBweDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQge1xcbiAgbWFyZ2luOiAyMHB4IDBweDtcXG59XFxuXFxuLnByb2plY3QtYXJlYSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50YXNrLWFyZWEge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtYXV0by1yb3dzOiAzMHB4O1xcbiAgcGFkZGluZzogMjBweCAwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XFxufVxcblxcbi50YXNrLWNpcmNsZSB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4OWFlNztcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDREQUF1RTtFQUN2RSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDREQUFzRTtFQUN0RSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXVjbGlkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9FdWNsaWRDaXJjdWxhckEtUmVndWxhci1XZWJTLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkV1Y2xpZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvRXVjbGlkQ2lyY3VsYXJBLU1lZGl1bS1XZWJTLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXVjbGlkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXVjbGlkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgYm9yZGVyOiAxcHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5tZW51LWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbjogMjBweCAwcHg7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnJlbW92ZS1idG4ge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCBjZW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyN2UzZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDEwcHg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IHtcXG4gIG1hcmdpbjogMjBweCAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWFyZWEge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGFzay1hcmVhIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLWF1dG8tcm93czogMzBweDtcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xcbn1cXG5cXG4udGFzay1jaXJjbGUge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODlhZTc7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiO1xuXG5VSSgpO1xuIiwiaW1wb3J0IHRvRG9MaXN0IGZyb20gXCIuL1RvZG9saXN0XCI7XG5jb25zdCBteVRvRG9MaXN0ID0gdG9Eb0xpc3QoKTtcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgdGFza3MgPSBbXTtcblxuICBmdW5jdGlvbiBnZXRQcm9qZWN0VGFza3NGcm9tTG9jYWxTdG9yYWdlKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdHNEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBpZiAocHJvamVjdHNEYXRhKSB7XG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IHByb2plY3RzRGF0YS5maW5kKFxuICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICk7XG4gICAgICBpZiAocHJvamVjdERhdGEpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3REYXRhLnRhc2tzIHx8IFtdOyAvLyBSZXR1cm4gdGFza3MgYXJyYXkgb3IgYW4gZW1wdHkgYXJyYXkgaWYgbm90IGZvdW5kXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICB0YXNrcyxcblxuICAgIGFkZFRhc2s6IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICB0aGlzLnRhc2tzLnB1c2godG9kbyk7XG4gICAgfSxcblxuICAgIGdldE5hbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlVGFzazogZnVuY3Rpb24gKHRhc2tOYW1lKSB7XG4gICAgICBjb25zdCB0YXNrVG9EZWxldGUgPSB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2sgPT09IHRhc2tOYW1lKTsgLy8gQ2hhbmdlZCBmcm9tIHRhc2submFtZSB0byB0YXNrLnRpdGxlIGFzc3VtaW5nIHRpdGxlIGlzIHRoZSBwcm9wZXJ0eSBuYW1lXG4gICAgICB0aGlzLnRhc2tzLnNwbGljZSh0aGlzLnRhc2tzLmluZGV4T2YodGFza1RvRGVsZXRlKSwgMSk7XG4gICAgICBteVRvRG9MaXN0LnNhdmVDdXJyZW50UHJvamVjdCh0aGlzKTtcbiAgICB9LFxuXG4gICAgZ2V0VGFza3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHRhc2tzRnJvbUxvY2FsU3RvcmFnZSA9IGdldFByb2plY3RUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UodGhpcy50aXRsZSk7XG4gICAgICBpZiAodGFza3NGcm9tTG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIHJldHVybiB0YXNrc0Zyb21Mb2NhbFN0b3JhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcbiIsImNvbnN0IGNyZWF0ZVRhc2sgPSAodGl0bGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSwgLy8gSW5jbHVkZSB0aXRsZSBwcm9wZXJ0eSBhbmQgYXNzaWduIGl0IHRoZSB2YWx1ZSBvZiB0aGUgdGl0bGUgYXJndW1lbnRcbiAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XG4iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRG9MaXN0KCkge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3RzLFxuXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XG4gICAgfSxcblxuICAgIGRlbGV0ZUN1cnJlbnRQcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBsb2NhbEl0ZW0gPSBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImN1cnJlbnRQcm9qZWN0XCIpO1xuICAgICAgaWYgKCFsb2NhbEl0ZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBjdXJyZW50IHByb2plY3RcIik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGxvYWRGcm9tTG9jYWxTdG9yYWdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBwcm9qZWN0c0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgICAgaWYgKHByb2plY3RzRGF0YSkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNEYXRhLm1hcCgocHJvamVjdERhdGEpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0RGF0YS50aXRsZSk7XG4gICAgICAgICAgaWYgKHByb2plY3REYXRhLnRhc2tzKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzID0gcHJvamVjdERhdGEudGFza3MubWFwKCh0YXNrRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayh0YXNrRGF0YS50aXRsZSk7IC8vIFVwZGF0ZSB0byB1c2UgJ3RpdGxlJyBwcm9wZXJ0eSBpbnN0ZWFkIG9mICduYW1lJ1xuICAgICAgICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSB0YXNrRGF0YS5pc0NvbXBsZXRlOyAvLyBTZXQgaXNDb21wbGV0ZSBwcm9wZXJ0eSBmcm9tIHRhc2tEYXRhXG4gICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVQcm9qZWN0KFwiSW5ib3hcIik7XG4gICAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7IC8vIFNhdmUgdGhlIHVwZGF0ZWQgbXlUb0RvTGlzdCBvYmplY3Qgd2l0aCBkZWZhdWx0IHByb2plY3RzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH0sXG5cbiAgICBzYXZlQ3VycmVudFByb2plY3Q6IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICB9LFxuXG4gICAgbG9hZEN1cnJlbnRQcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UHJvamVjdFwiKSk7XG4gICAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoY3VycmVudFByb2plY3QudGl0bGUpO1xuICAgICAgICBpZiAoY3VycmVudFByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAvLyBVcGRhdGUgdG8gdXNlICdjdXJyZW50UHJvamVjdC50YXNrcycgaW5zdGVhZCBvZiAncHJvamVjdC50YXNrcydcbiAgICAgICAgICBwcm9qZWN0LnRhc2tzID0gY3VycmVudFByb2plY3QudGFza3MubWFwKCh0YXNrRGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGFza0RhdGEudGl0bGUpO1xuICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdGFza0RhdGEuaXNDb21wbGV0ZTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrOyAvLyBVcGRhdGUgdG8gcmV0dXJuICd0YXNrJyBpbnN0ZWFkIG9mICdwcm9qZWN0LnRhc2tzJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRQcm9qZWN0OiBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gICAgfSxcblxuICAgIGdldFByb2plY3RzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgfSxcblxuICAgIHNldFByb2plY3RzOiBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlUHJvamVjdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgcHJvamVjdC5hZGRUYXNrKGNyZWF0ZVRhc2soXCJkbyB0aGUgZGlzaGVzXCIpKTtcbiAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9LFxuXG4gICAgc2F2ZVRhc2s6IGZ1bmN0aW9uIChwcm9qZWN0LCB0aXRsZSkge1xuICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGl0bGUpO1xuICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAgIChwKSA9PiBwLnRpdGxlID09PSBwcm9qZWN0LnRpdGxlXG4gICAgICApO1xuICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdID0gcHJvamVjdDtcbiAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICB0aGlzLnNhdmVDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0sXG5cbiAgICBhZGRQcm9qZWN0OiBmdW5jdGlvbiAobmV3UHJvamVjdCkge1xuICAgICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuZXdQcm9qZWN0Lm5hbWUpKVxuICAgICAgICByZXR1cm47XG4gICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH0sXG5cbiAgICBkZWxldGVQcm9qZWN0OiBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QgPT09IHByb2plY3ROYW1lXG4gICAgICApO1xuICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0RlbGV0ZSksIDEpO1xuICAgICAgdGhpcy5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgdG9Eb0xpc3QgZnJvbSBcIi4vVG9kb2xpc3RcIjtcbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvbWVudS5zdmdcIjtcbmltcG9ydCByZW1vdmVJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvcmVtb3ZlLnN2Z1wiO1xuaW1wb3J0IENpcmNsZSBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2NpcmNsZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVUkoKSB7XG4gIGNvbnN0IG15VG9Eb0xpc3QgPSB0b0RvTGlzdCgpO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gIGJvZHkuYXBwZW5kKGNvbnRlbnQpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcik7XG5cbiAgICBjb25zdCBNZW51ID0gbmV3IEltYWdlKCk7XG4gICAgTWVudS5zcmMgPSBNZW51QmFyO1xuICAgIE1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaWNvblwiKTtcbiAgICBoZWFkZXIuYXBwZW5kKE1lbnUpO1xuXG4gICAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYWdlVGl0bGUuY2xhc3NMaXN0LmFkZChcInBhZ2UtdGl0bGVcIik7XG4gICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJUb0RvIExpc3RcIjtcbiAgICBoZWFkZXIuYXBwZW5kKHBhZ2VUaXRsZSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IHByb2plY3RBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QXJlYS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hcmVhXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG4gICAgbWFpbi5hcHBlbmQoc2lkZWJhcik7XG4gICAgbWFpbi5hcHBlbmQocHJvamVjdEFyZWEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1haW4sXG4gICAgICBoZWFkZXIsXG4gICAgICBzaWRlYmFyLFxuICAgICAgcHJvamVjdEFyZWEsXG4gICAgICBNZW51LFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgaW5pdGlhdGVTaWRlYmFyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvdGFsUHJvamVjdHMgPSBteVRvRG9MaXN0LmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzID0gdG90YWxQcm9qZWN0cy5zbGljZSgwLCAxKTtcbiAgICBjb25zdCBjcmVhdGVkUHJvamVjdHMgPSB0b3RhbFByb2plY3RzLnNsaWNlKDEpO1xuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWZhdWx0UHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcImRlZmF1bHQtcHJvamVjdHNcIik7XG4gICAgbWFpbkNvbnRlbnQuc2lkZWJhci5hcHBlbmQoZGVmYXVsdFByb2plY3RMaXN0KTtcblxuICAgIGZ1bmN0aW9uIGFkZERlZmF1bHRQcm9qZWN0cygpIHtcbiAgICAgIGRlZmF1bHRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZGVkUHJvamVjdCA9IGFkZFByb2plY3RUb0RPTShwcm9qZWN0KTtcbiAgICAgICAgZGVmYXVsdFByb2plY3RMaXN0LmFwcGVuZENoaWxkKGFkZGVkUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0c0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgICBwcm9qZWN0c0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIk15IFByb2plY3RzXCI7XG4gICAgbWFpbkNvbnRlbnQuc2lkZWJhci5hcHBlbmQocHJvamVjdHNIZWFkaW5nKTtcblxuICAgIGNvbnN0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgICBtYWluQ29udGVudC5zaWRlYmFyLmFwcGVuZChsaW5lQnJlYWspO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcbiAgICBtYWluQ29udGVudC5zaWRlYmFyLmFwcGVuZChwcm9qZWN0TGlzdCk7XG5cbiAgICBmdW5jdGlvbiBhZGRDcmVhdGVkUHJvamVjdHMoKSB7XG4gICAgICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRlZFByb2plY3QgPSBhZGRQcm9qZWN0VG9ET00ocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChhZGRlZFByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICAgIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgbWFpbkNvbnRlbnQuc2lkZWJhci5hcHBlbmQoYWRkUHJvamVjdEJ0bik7XG5cbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5wdXRcIik7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdElucHV0KTtcbiAgICAgIGFkZFByb2plY3RCdG4ucmVtb3ZlKCk7XG5cbiAgICAgIHByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdElucHV0LnZhbHVlO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUudHJpbSgpICE9PSBcIlwiICYmIHByb2plY3ROYW1lICE9PSBcIkluYm94XCIpIHtcbiAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbXlUb0RvTGlzdC5nZW5lcmF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgIGNvbnN0IGFkZGVkUHJvamVjdCA9IGFkZFByb2plY3RUb0RPTShuZXdQcm9qZWN0KTtcbiAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYWRkZWRQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0SW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIG1haW5Db250ZW50LnNpZGViYXIuYXBwZW5kKGFkZFByb2plY3RCdG4pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBtYWluQ29udGVudC5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAobWFpbkNvbnRlbnQubWFpbi5jb250YWlucyhtYWluQ29udGVudC5zaWRlYmFyKSkge1xuICAgICAgICBtYWluQ29udGVudC5zaWRlYmFyLnJlbW92ZSgpO1xuICAgICAgICBtYWluQ29udGVudC5tYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjFmclwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFpbkNvbnRlbnQubWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJtaW5tYXgoMjAwcHgsIDFmcikgNWZyXCI7XG4gICAgICAgIG1haW5Db250ZW50Lm1haW4uaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIG1haW5Db250ZW50LnNpZGViYXIsXG4gICAgICAgICAgbWFpbkNvbnRlbnQubWFpbi5maXJzdENoaWxkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhZGREZWZhdWx0UHJvamVjdHMoKTtcbiAgICBhZGRDcmVhdGVkUHJvamVjdHMoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0VG9ET00ocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgcHJvamVjdC5nZXROYW1lKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxuICAgICk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmQocHJvamVjdE5hbWUpO1xuXG4gICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIkluYm94XCIpIHtcbiAgICAgIGNvbnN0IFJlbW92ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgUmVtb3ZlLnNyYyA9IHJlbW92ZUljb247XG4gICAgICBSZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZS1idG5cIik7XG5cbiAgICAgIHByb2plY3RFbGVtZW50LmFwcGVuZChSZW1vdmUpO1xuXG4gICAgICBSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBteVRvRG9MaXN0LmxvYWRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgICBpZiAoY3VycmVudFByb2plY3QudGl0bGUgPT09IHByb2plY3QudGl0bGUpIHtcbiAgICAgICAgICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICAgICAgICAgIG15VG9Eb0xpc3QuZGVsZXRlQ3VycmVudFByb2plY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbXlUb0RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgICAgb3BlblByb2plY3QocHJvamVjdCwgcHJvamVjdC50YXNrcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclRhc2tMaXN0KCkge1xuICAgIG1haW5Db250ZW50LnByb2plY3RBcmVhLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICAvLyBvcGVuaW5nIHRoZSBwcm9qZWN0IGluIHRoZSB0YXNrIGFyZWFcbiAgZnVuY3Rpb24gb3BlblByb2plY3QocHJvamVjdCwgdGFza3MpIHtcbiAgICBteVRvRG9MaXN0LnNhdmVDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIG1haW5Db250ZW50LnByb2plY3RBcmVhLmFwcGVuZCh0aXRsZSk7XG5cbiAgICBjb25zdCB0YXNrQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FyZWEuY2xhc3NMaXN0LmFkZChcInRhc2stYXJlYVwiKTtcbiAgICBtYWluQ29udGVudC5wcm9qZWN0QXJlYS5hcHBlbmQodGFza0FyZWEpO1xuXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgYWRkZWRUYXNrID0gYWRkVGFza1RvRE9NKHByb2plY3QsIHRhc2spO1xuICAgICAgdGFza0FyZWEuYXBwZW5kKGFkZGVkVGFzayk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idG5cIik7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBtYWluQ29udGVudC5wcm9qZWN0QXJlYS5hcHBlbmQoYWRkVGFza0J0bik7XG5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBtYWluQ29udGVudC5wcm9qZWN0QXJlYS5hcHBlbmQodGFza0lucHV0KTtcbiAgICAgIGFkZFRhc2tCdG4ucmVtb3ZlKCk7XG5cbiAgICAgIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza0lucHV0LnZhbHVlO1xuICAgICAgICBpZiAodGFza05hbWUudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgICAgY29uc3QgbmV3VGFzayA9IG15VG9Eb0xpc3Quc2F2ZVRhc2socHJvamVjdCwgdGFza05hbWUpO1xuICAgICAgICAgIGNvbnN0IGFkZGVkVGFzayA9IGFkZFRhc2tUb0RPTShwcm9qZWN0LCBuZXdUYXNrKTtcbiAgICAgICAgICB0YXNrQXJlYS5hcHBlbmQoYWRkZWRUYXNrKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrSW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIG1haW5Db250ZW50LnByb2plY3RBcmVhLmFwcGVuZChhZGRUYXNrQnRuKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGFza1RvRE9NKHByb2plY3QsIHRhc2spIHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICBjb25zdCB0YXNrQ2lyY2xlID0gbmV3IEltYWdlKCk7XG4gICAgdGFza0NpcmNsZS5jbGFzc0xpc3QuYWRkKFwidGFzay1jaXJjbGVcIik7XG4gICAgdGFza0NpcmNsZS5zcmMgPSBDaXJjbGU7XG5cbiAgICB0YXNrRWxlbWVudC5hcHBlbmQodGFza0NpcmNsZSk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kKHRhc2tOYW1lKTtcblxuICAgIHRhc2tDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICBwcm9qZWN0LnJlbW92ZVRhc2sodGFzayk7XG4gICAgICBteVRvRG9MaXN0LnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgbXlUb0RvTGlzdC5zYXZlQ3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICB0YXNrRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFza0VsZW1lbnQ7XG4gIH1cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIGluaXRpYXRlU2lkZWJhcigpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gbXlUb0RvTGlzdC5sb2FkQ3VycmVudFByb2plY3QoKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICAgIG9wZW5Qcm9qZWN0KGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50UHJvamVjdC50YXNrcyk7XG4gICAgfVxuICB9KSgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9