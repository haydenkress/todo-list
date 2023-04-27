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
      } else {
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
        clearTaskList();
        const currentProject = myToDoList.loadCurrentProject();
        if (currentProject.title === project.title) {
          myToDoList.deleteCurrentProject();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxtREFBTztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFVO0FBQzdCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxREFBTTs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0V1Y2xpZENpcmN1bGFyQS1SZWd1bGFyLVdlYlMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9FdWNsaWRDaXJjdWxhckEtTWVkaXVtLVdlYlMud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkV1Y2xpZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkV1Y2xpZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXVjbGlkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXVjbGlkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgYm9yZGVyOiAxcHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5tZW51LWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbjogMjBweCAwcHg7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnJlbW92ZS1idG4ge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCBjZW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyN2UzZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDEwcHg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0IHtcXG4gIG1hcmdpbjogMjBweCAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWFyZWEge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBncmlkLXJvdzogMTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGFzay1hcmVhIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLWF1dG8tcm93czogMzBweDtcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xcbn1cXG5cXG4udGFzay1jaXJjbGUge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODlhZTc7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0REFBdUU7RUFDdkUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0REFBc0U7RUFDdEUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLDZDQUE2QztFQUM3Qyx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkV1Y2xpZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvRXVjbGlkQ2lyY3VsYXJBLVJlZ3VsYXItV2ViUy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFdWNsaWRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL0V1Y2xpZENpcmN1bGFyQS1NZWRpdW0tV2ViUy53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmb250LWZhbWlseTogXFxcIkV1Y2xpZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIkV1Y2xpZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG59XFxuXFxuLnBhZ2UtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXJvdzogMTtcXG4gIGJvcmRlcjogMXB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4ubWVudS1pY29uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW46IDIwcHggMHB4O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5yZW1vdmUtYnRuIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjdlM2Q7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMjBweCAwcHggMjBweCAxMHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCB7XFxuICBtYXJnaW46IDIwcHggMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1hcmVhIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRhc2stYXJlYSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG59XFxuXFxuLnRhc2stY2lyY2xlIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg5YWU3O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIjtcblxuVUkoKTtcbiIsImltcG9ydCB0b0RvTGlzdCBmcm9tIFwiLi9Ub2RvbGlzdFwiO1xuY29uc3QgbXlUb0RvTGlzdCA9IHRvRG9MaXN0KCk7XG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZShwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgaWYgKHByb2plY3RzRGF0YSkge1xuICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBwcm9qZWN0c0RhdGEuZmluZChcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHByb2plY3ROYW1lXG4gICAgICApO1xuICAgICAgaWYgKHByb2plY3REYXRhKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0RGF0YS50YXNrcyB8fCBbXTsgLy8gUmV0dXJuIHRhc2tzIGFycmF5IG9yIGFuIGVtcHR5IGFycmF5IGlmIG5vdCBmb3VuZFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgdGFza3MsXG5cbiAgICBhZGRUYXNrOiBmdW5jdGlvbiAodG9kbykge1xuICAgICAgdGhpcy50YXNrcy5wdXNoKHRvZG8pO1xuICAgIH0sXG5cbiAgICBnZXROYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfSxcblxuICAgIHJlbW92ZVRhc2s6IGZ1bmN0aW9uICh0YXNrTmFtZSkge1xuICAgICAgY29uc3QgdGFza1RvRGVsZXRlID0gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrID09PSB0YXNrTmFtZSk7IC8vIENoYW5nZWQgZnJvbSB0YXNrLm5hbWUgdG8gdGFzay50aXRsZSBhc3N1bWluZyB0aXRsZSBpcyB0aGUgcHJvcGVydHkgbmFtZVxuICAgICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRhc2tUb0RlbGV0ZSksIDEpO1xuICAgICAgbXlUb0RvTGlzdC5zYXZlQ3VycmVudFByb2plY3QodGhpcyk7XG4gICAgfSxcblxuICAgIGdldFRhc2tzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB0YXNrc0Zyb21Mb2NhbFN0b3JhZ2UgPSBnZXRQcm9qZWN0VGFza3NGcm9tTG9jYWxTdG9yYWdlKHRoaXMudGl0bGUpO1xuICAgICAgaWYgKHRhc2tzRnJvbUxvY2FsU3RvcmFnZSkge1xuICAgICAgICByZXR1cm4gdGFza3NGcm9tTG9jYWxTdG9yYWdlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3Q7XG4iLCJjb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsIC8vIEluY2x1ZGUgdGl0bGUgcHJvcGVydHkgYW5kIGFzc2lnbiBpdCB0aGUgdmFsdWUgb2YgdGhlIHRpdGxlIGFyZ3VtZW50XG4gICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrO1xuIiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RvTGlzdCgpIHtcbiAgbGV0IHByb2plY3RzID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0cyxcblxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb2plY3RzKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cykpO1xuICAgIH0sXG5cbiAgICBkZWxldGVDdXJyZW50UHJvamVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgbG9jYWxJdGVtID0gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJjdXJyZW50UHJvamVjdFwiKTtcbiAgICAgIGlmICghbG9jYWxJdGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY3VycmVudCBwcm9qZWN0XCIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBsb2FkRnJvbUxvY2FsU3RvcmFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgcHJvamVjdHNEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICAgIGlmIChwcm9qZWN0c0RhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzRGF0YS5tYXAoKHByb2plY3REYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdERhdGEudGl0bGUpO1xuICAgICAgICAgIGlmIChwcm9qZWN0RGF0YS50YXNrcykge1xuICAgICAgICAgICAgcHJvamVjdC50YXNrcyA9IHByb2plY3REYXRhLnRhc2tzLm1hcCgodGFza0RhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGFza0RhdGEudGl0bGUpOyAvLyBVcGRhdGUgdG8gdXNlICd0aXRsZScgcHJvcGVydHkgaW5zdGVhZCBvZiAnbmFtZSdcbiAgICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdGFza0RhdGEuaXNDb21wbGV0ZTsgLy8gU2V0IGlzQ29tcGxldGUgcHJvcGVydHkgZnJvbSB0YXNrRGF0YVxuICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdlbmVyYXRlUHJvamVjdChcIkluYm94XCIpO1xuICAgICAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpOyAvLyBTYXZlIHRoZSB1cGRhdGVkIG15VG9Eb0xpc3Qgb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9qZWN0cyB0byBsb2NhbCBzdG9yYWdlXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9LFxuXG4gICAgc2F2ZUN1cnJlbnRQcm9qZWN0OiBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50UHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG4gICAgfSxcblxuICAgIGxvYWRDdXJyZW50UHJvamVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFByb2plY3RcIikpO1xuICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgLy8gVXBkYXRlIHRvIHVzZSAnY3VycmVudFByb2plY3QudGFza3MnIGluc3RlYWQgb2YgJ3Byb2plY3QudGFza3MnXG4gICAgICAgICAgcHJvamVjdC50YXNrcyA9IGN1cnJlbnRQcm9qZWN0LnRhc2tzLm1hcCgodGFza0RhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tEYXRhLnRpdGxlKTtcbiAgICAgICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRhc2tEYXRhLmlzQ29tcGxldGU7XG4gICAgICAgICAgICByZXR1cm4gdGFzazsgLy8gVXBkYXRlIHRvIHJldHVybiAndGFzaycgaW5zdGVhZCBvZiAncHJvamVjdC50YXNrcydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0UHJvamVjdDogZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIH0sXG5cbiAgICBnZXRQcm9qZWN0czogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIH0sXG5cbiAgICBzZXRQcm9qZWN0czogZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH0sXG5cbiAgICBnZW5lcmF0ZVByb2plY3Q6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgIHByb2plY3QuYWRkVGFzayhjcmVhdGVUYXNrKFwiZG8gdGhlIGRpc2hlc1wiKSk7XG4gICAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfSxcblxuICAgIHNhdmVUYXNrOiBmdW5jdGlvbiAocHJvamVjdCwgdGl0bGUpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRpdGxlKTtcbiAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgICAocCkgPT4gcC50aXRsZSA9PT0gcHJvamVjdC50aXRsZVxuICAgICAgKTtcbiAgICAgIHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XSA9IHByb2plY3Q7XG4gICAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgdGhpcy5zYXZlQ3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9LFxuXG4gICAgYWRkUHJvamVjdDogZnVuY3Rpb24gKG5ld1Byb2plY3QpIHtcbiAgICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmV3UHJvamVjdC5uYW1lKSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgdGhpcy5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlUHJvamVjdDogZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gICAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0ID09PSBwcm9qZWN0TmFtZVxuICAgICAgKTtcbiAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKTtcbiAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHRvRG9MaXN0IGZyb20gXCIuL1RvZG9saXN0XCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL21lbnUuc3ZnXCI7XG5pbXBvcnQgcmVtb3ZlSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3JlbW92ZS5zdmdcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9jaXJjbGUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVJKCkge1xuICBjb25zdCBteVRvRG9MaXN0ID0gdG9Eb0xpc3QoKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICBib2R5LmFwcGVuZChjb250ZW50KTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xuXG4gICAgY29uc3QgTWVudSA9IG5ldyBJbWFnZSgpO1xuICAgIE1lbnUuc3JjID0gTWVudUJhcjtcbiAgICBNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LWljb25cIik7XG4gICAgaGVhZGVyLmFwcGVuZChNZW51KTtcblxuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwYWdlLXRpdGxlXCIpO1xuICAgIHBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9EbyBMaXN0XCI7XG4gICAgaGVhZGVyLmFwcGVuZChwYWdlVGl0bGUpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFyZWEuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYXJlYVwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xuICAgIG1haW4uYXBwZW5kKHNpZGViYXIpO1xuICAgIG1haW4uYXBwZW5kKHByb2plY3RBcmVhKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtYWluLFxuICAgICAgaGVhZGVyLFxuICAgICAgc2lkZWJhcixcbiAgICAgIHByb2plY3RBcmVhLFxuICAgICAgTWVudSxcbiAgICB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGluaXRpYXRlU2lkZWJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0b3RhbFByb2plY3RzID0gbXlUb0RvTGlzdC5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IHRvdGFsUHJvamVjdHMuc2xpY2UoMCwgMSk7XG4gICAgY29uc3QgY3JlYXRlZFByb2plY3RzID0gdG90YWxQcm9qZWN0cy5zbGljZSgxKTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVmYXVsdFByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0LXByb2plY3RzXCIpO1xuICAgIG1haW5Db250ZW50LnNpZGViYXIuYXBwZW5kKGRlZmF1bHRQcm9qZWN0TGlzdCk7XG5cbiAgICBmdW5jdGlvbiBhZGREZWZhdWx0UHJvamVjdHMoKSB7XG4gICAgICBkZWZhdWx0UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRlZFByb2plY3QgPSBhZGRQcm9qZWN0VG9ET00ocHJvamVjdCk7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChhZGRlZFByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdHNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0hlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gICAgcHJvamVjdHNIZWFkaW5nLnRleHRDb250ZW50ID0gXCJNeSBQcm9qZWN0c1wiO1xuICAgIG1haW5Db250ZW50LnNpZGViYXIuYXBwZW5kKHByb2plY3RzSGVhZGluZyk7XG5cbiAgICBjb25zdCBsaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG4gICAgbWFpbkNvbnRlbnQuc2lkZWJhci5hcHBlbmQobGluZUJyZWFrKTtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gICAgbWFpbkNvbnRlbnQuc2lkZWJhci5hcHBlbmQocHJvamVjdExpc3QpO1xuXG4gICAgZnVuY3Rpb24gYWRkQ3JlYXRlZFByb2plY3RzKCkge1xuICAgICAgY3JlYXRlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgYWRkZWRQcm9qZWN0ID0gYWRkUHJvamVjdFRvRE9NKHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYWRkZWRQcm9qZWN0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcbiAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIG1haW5Db250ZW50LnNpZGViYXIuYXBwZW5kKGFkZFByb2plY3RCdG4pO1xuXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWlucHV0XCIpO1xuICAgICAgcHJvamVjdExpc3QuYXBwZW5kKHByb2plY3RJbnB1dCk7XG4gICAgICBhZGRQcm9qZWN0QnRuLnJlbW92ZSgpO1xuXG4gICAgICBwcm9qZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lLnRyaW0oKSAhPT0gXCJcIiAmJiBwcm9qZWN0TmFtZSAhPT0gXCJJbmJveFwiKSB7XG4gICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG15VG9Eb0xpc3QuZ2VuZXJhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICBjb25zdCBhZGRlZFByb2plY3QgPSBhZGRQcm9qZWN0VG9ET00obmV3UHJvamVjdCk7XG4gICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKGFkZGVkUHJvamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdElucHV0LnJlbW92ZSgpO1xuICAgICAgICBtYWluQ29udGVudC5zaWRlYmFyLmFwcGVuZChhZGRQcm9qZWN0QnRuKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgbWFpbkNvbnRlbnQuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG1haW5Db250ZW50Lm1haW4uY29udGFpbnMobWFpbkNvbnRlbnQuc2lkZWJhcikpIHtcbiAgICAgICAgbWFpbkNvbnRlbnQuc2lkZWJhci5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1haW5Db250ZW50Lm1haW4uaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgIG1haW5Db250ZW50LnNpZGViYXIsXG4gICAgICAgICAgbWFpbkNvbnRlbnQubWFpbi5maXJzdENoaWxkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhZGREZWZhdWx0UHJvamVjdHMoKTtcbiAgICBhZGRDcmVhdGVkUHJvamVjdHMoKTtcbiAgfTtcblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0VG9ET00ocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgcHJvamVjdC5nZXROYW1lKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxuICAgICk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmQocHJvamVjdE5hbWUpO1xuXG4gICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIkluYm94XCIpIHtcbiAgICAgIGNvbnN0IFJlbW92ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgUmVtb3ZlLnNyYyA9IHJlbW92ZUljb247XG4gICAgICBSZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZS1idG5cIik7XG5cbiAgICAgIHByb2plY3RFbGVtZW50LmFwcGVuZChSZW1vdmUpO1xuXG4gICAgICBSZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IG15VG9Eb0xpc3QubG9hZEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdC50aXRsZSA9PT0gcHJvamVjdC50aXRsZSkge1xuICAgICAgICAgIG15VG9Eb0xpc3QuZGVsZXRlQ3VycmVudFByb2plY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBteVRvRG9MaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbGVhclRhc2tMaXN0KCk7XG4gICAgICBvcGVuUHJvamVjdChwcm9qZWN0LCBwcm9qZWN0LnRhc2tzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0RWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyVGFza0xpc3QoKSB7XG4gICAgbWFpbkNvbnRlbnQucHJvamVjdEFyZWEuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuXG4gIC8vIG9wZW5pbmcgdGhlIHByb2plY3QgaW4gdGhlIHRhc2sgYXJlYVxuICBmdW5jdGlvbiBvcGVuUHJvamVjdChwcm9qZWN0LCB0YXNrcykge1xuICAgIG15VG9Eb0xpc3Quc2F2ZUN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgbWFpbkNvbnRlbnQucHJvamVjdEFyZWEuYXBwZW5kKHRpdGxlKTtcblxuICAgIGNvbnN0IHRhc2tBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQXJlYS5jbGFzc0xpc3QuYWRkKFwidGFzay1hcmVhXCIpO1xuICAgIG1haW5Db250ZW50LnByb2plY3RBcmVhLmFwcGVuZCh0YXNrQXJlYSk7XG5cbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBhZGRlZFRhc2sgPSBhZGRUYXNrVG9ET00ocHJvamVjdCwgdGFzayk7XG4gICAgICB0YXNrQXJlYS5hcHBlbmQoYWRkZWRUYXNrKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ0blwiKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIG1haW5Db250ZW50LnByb2plY3RBcmVhLmFwcGVuZChhZGRUYXNrQnRuKTtcblxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIG1haW5Db250ZW50LnByb2plY3RBcmVhLmFwcGVuZCh0YXNrSW5wdXQpO1xuICAgICAgYWRkVGFza0J0bi5yZW1vdmUoKTtcblxuICAgICAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSB0YXNrSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICh0YXNrTmFtZS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbXlUb0RvTGlzdC5zYXZlVGFzayhwcm9qZWN0LCB0YXNrTmFtZSk7XG4gICAgICAgICAgY29uc3QgYWRkZWRUYXNrID0gYWRkVGFza1RvRE9NKHByb2plY3QsIG5ld1Rhc2spO1xuICAgICAgICAgIHRhc2tBcmVhLmFwcGVuZChhZGRlZFRhc2spO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tJbnB1dC5yZW1vdmUoKTtcbiAgICAgICAgbWFpbkNvbnRlbnQucHJvamVjdEFyZWEuYXBwZW5kKGFkZFRhc2tCdG4pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUYXNrVG9ET00ocHJvamVjdCwgdGFzaykge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgIGNvbnN0IHRhc2tDaXJjbGUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0YXNrQ2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNpcmNsZVwiKTtcbiAgICB0YXNrQ2lyY2xlLnNyYyA9IENpcmNsZTtcblxuICAgIHRhc2tFbGVtZW50LmFwcGVuZCh0YXNrQ2lyY2xlKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmQodGFza05hbWUpO1xuXG4gICAgdGFza0NpcmNsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGFzay5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIHByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcbiAgICAgIG15VG9Eb0xpc3Quc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICBteVRvRG9MaXN0LnNhdmVDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcbiAgICAgIHRhc2tFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0YXNrRWxlbWVudDtcbiAgfVxuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgaW5pdGlhdGVTaWRlYmFyKCk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBteVRvRG9MaXN0LmxvYWRDdXJyZW50UHJvamVjdCgpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgICAgb3BlblByb2plY3QoY3VycmVudFByb2plY3QsIGN1cnJlbnRQcm9qZWN0LnRhc2tzKTtcbiAgICB9XG4gIH0pKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=