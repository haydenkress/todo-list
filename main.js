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
      //console.log(project);
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

    function menuToggle() {
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
    }
    menuToggle();
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
      const currentProject = myToDoList.loadCurrentProject();
      if (currentProject) {
        if (currentProject.title === project.title) {
          return;
        } else {
          clearTaskList();
          openProject(project, project.tasks);
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG1EQUFPO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscURBQVU7QUFDN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIscURBQU07O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9FdWNsaWRDaXJjdWxhckEtUmVndWxhci1XZWJTLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvRXVjbGlkQ2lyY3VsYXJBLU1lZGl1bS1XZWJTLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFdWNsaWRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFdWNsaWRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmb250LWZhbWlseTogXFxcIkV1Y2xpZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIkV1Y2xpZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwcHggMjBweDtcXG59XFxuXFxuLnBhZ2UtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIDVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXJvdzogMTtcXG4gIGJvcmRlcjogMXB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4ubWVudS1pY29uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW46IDIwcHggMHB4O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5yZW1vdmUtYnRuIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjdlM2Q7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMjBweCAwcHggMjBweCAxMHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dCB7XFxuICBtYXJnaW46IDIwcHggMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1hcmVhIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRhc2stYXJlYSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG59XFxuXFxuLnRhc2stY2lyY2xlIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg5YWU3O1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNERBQXVFO0VBQ3ZFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNERBQXNFO0VBQ3RFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1osaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0Msd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFdWNsaWRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL0V1Y2xpZENpcmN1bGFyQS1SZWd1bGFyLVdlYlMud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRXVjbGlkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9FdWNsaWRDaXJjdWxhckEtTWVkaXVtLVdlYlMud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFdWNsaWRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFdWNsaWRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxufVxcblxcbi5wYWdlLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tbGVmdDogMjVweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBib3JkZXI6IDFweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLm1lbnUtaWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4IDBweDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucmVtb3ZlLWJ0biB7XFxuICB3aWR0aDogMTBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kIGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI3ZTNkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDIwcHggMHB4IDIwcHggMTBweDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQge1xcbiAgbWFyZ2luOiAyMHB4IDBweDtcXG59XFxuXFxuLnByb2plY3QtYXJlYSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50YXNrLWFyZWEge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtYXV0by1yb3dzOiAzMHB4O1xcbiAgcGFkZGluZzogMjBweCAwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XFxufVxcblxcbi50YXNrLWNpcmNsZSB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4OWFlNztcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5cblVJKCk7XG4iLCJpbXBvcnQgdG9Eb0xpc3QgZnJvbSBcIi4vVG9kb2xpc3RcIjtcbmNvbnN0IG15VG9Eb0xpc3QgPSB0b0RvTGlzdCgpO1xuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldFByb2plY3RUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0c0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGlmIChwcm9qZWN0c0RhdGEpIHtcbiAgICAgIGNvbnN0IHByb2plY3REYXRhID0gcHJvamVjdHNEYXRhLmZpbmQoXG4gICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0TmFtZVxuICAgICAgKTtcbiAgICAgIGlmIChwcm9qZWN0RGF0YSkge1xuICAgICAgICByZXR1cm4gcHJvamVjdERhdGEudGFza3MgfHwgW107IC8vIFJldHVybiB0YXNrcyBhcnJheSBvciBhbiBlbXB0eSBhcnJheSBpZiBub3QgZm91bmRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRhc2tzLFxuXG4gICAgYWRkVGFzazogZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgIHRoaXMudGFza3MucHVzaCh0b2RvKTtcbiAgICB9LFxuXG4gICAgZ2V0TmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH0sXG5cbiAgICByZW1vdmVUYXNrOiBmdW5jdGlvbiAodGFza05hbWUpIHtcbiAgICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzayA9PT0gdGFza05hbWUpOyAvLyBDaGFuZ2VkIGZyb20gdGFzay5uYW1lIHRvIHRhc2sudGl0bGUgYXNzdW1pbmcgdGl0bGUgaXMgdGhlIHByb3BlcnR5IG5hbWVcbiAgICAgIHRoaXMudGFza3Muc3BsaWNlKHRoaXMudGFza3MuaW5kZXhPZih0YXNrVG9EZWxldGUpLCAxKTtcbiAgICAgIG15VG9Eb0xpc3Quc2F2ZUN1cnJlbnRQcm9qZWN0KHRoaXMpO1xuICAgIH0sXG5cbiAgICBnZXRUYXNrczogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgdGFza3NGcm9tTG9jYWxTdG9yYWdlID0gZ2V0UHJvamVjdFRhc2tzRnJvbUxvY2FsU3RvcmFnZSh0aGlzLnRpdGxlKTtcbiAgICAgIGlmICh0YXNrc0Zyb21Mb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzRnJvbUxvY2FsU3RvcmFnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0O1xuIiwiY29uc3QgY3JlYXRlVGFzayA9ICh0aXRsZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLCAvLyBJbmNsdWRlIHRpdGxlIHByb3BlcnR5IGFuZCBhc3NpZ24gaXQgdGhlIHZhbHVlIG9mIHRoZSB0aXRsZSBhcmd1bWVudFxuICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFzaztcbiIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9Eb0xpc3QoKSB7XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdHMsXG5cbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5wcm9qZWN0cyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlQ3VycmVudFByb2plY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGxvY2FsSXRlbSA9IGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY3VycmVudFByb2plY3RcIik7XG4gICAgICBpZiAoIWxvY2FsSXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGN1cnJlbnQgcHJvamVjdFwiKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9hZEZyb21Mb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHByb2plY3RzRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgICBpZiAocHJvamVjdHNEYXRhKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c0RhdGEubWFwKChwcm9qZWN0RGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3REYXRhLnRpdGxlKTtcbiAgICAgICAgICBpZiAocHJvamVjdERhdGEudGFza3MpIHtcbiAgICAgICAgICAgIHByb2plY3QudGFza3MgPSBwcm9qZWN0RGF0YS50YXNrcy5tYXAoKHRhc2tEYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tEYXRhLnRpdGxlKTsgLy8gVXBkYXRlIHRvIHVzZSAndGl0bGUnIHByb3BlcnR5IGluc3RlYWQgb2YgJ25hbWUnXG4gICAgICAgICAgICAgIHRhc2suaXNDb21wbGV0ZSA9IHRhc2tEYXRhLmlzQ29tcGxldGU7IC8vIFNldCBpc0NvbXBsZXRlIHByb3BlcnR5IGZyb20gdGFza0RhdGFcbiAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVByb2plY3QoXCJJbmJveFwiKTtcbiAgICAgICAgdGhpcy5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTsgLy8gU2F2ZSB0aGUgdXBkYXRlZCBteVRvRG9MaXN0IG9iamVjdCB3aXRoIGRlZmF1bHQgcHJvamVjdHMgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfSxcblxuICAgIHNhdmVDdXJyZW50UHJvamVjdDogZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgIC8vY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgICB9LFxuXG4gICAgbG9hZEN1cnJlbnRQcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50UHJvamVjdFwiKSk7XG4gICAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoY3VycmVudFByb2plY3QudGl0bGUpO1xuICAgICAgICBpZiAoY3VycmVudFByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAvLyBVcGRhdGUgdG8gdXNlICdjdXJyZW50UHJvamVjdC50YXNrcycgaW5zdGVhZCBvZiAncHJvamVjdC50YXNrcydcbiAgICAgICAgICBwcm9qZWN0LnRhc2tzID0gY3VycmVudFByb2plY3QudGFza3MubWFwKCh0YXNrRGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGFza0RhdGEudGl0bGUpO1xuICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdGFza0RhdGEuaXNDb21wbGV0ZTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrOyAvLyBVcGRhdGUgdG8gcmV0dXJuICd0YXNrJyBpbnN0ZWFkIG9mICdwcm9qZWN0LnRhc2tzJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRQcm9qZWN0OiBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gICAgfSxcblxuICAgIGdldFByb2plY3RzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgfSxcblxuICAgIHNldFByb2plY3RzOiBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlUHJvamVjdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgcHJvamVjdC5hZGRUYXNrKGNyZWF0ZVRhc2soXCJkbyB0aGUgZGlzaGVzXCIpKTtcbiAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9LFxuXG4gICAgc2F2ZVRhc2s6IGZ1bmN0aW9uIChwcm9qZWN0LCB0aXRsZSkge1xuICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGl0bGUpO1xuICAgICAgcHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAgIChwKSA9PiBwLnRpdGxlID09PSBwcm9qZWN0LnRpdGxlXG4gICAgICApO1xuICAgICAgdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdID0gcHJvamVjdDtcbiAgICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICB0aGlzLnNhdmVDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0sXG5cbiAgICBhZGRQcm9qZWN0OiBmdW5jdGlvbiAobmV3UHJvamVjdCkge1xuICAgICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuZXdQcm9qZWN0Lm5hbWUpKVxuICAgICAgICByZXR1cm47XG4gICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH0sXG5cbiAgICBkZWxldGVQcm9qZWN0OiBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QgPT09IHByb2plY3ROYW1lXG4gICAgICApO1xuICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0RlbGV0ZSksIDEpO1xuICAgICAgdGhpcy5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgdG9Eb0xpc3QgZnJvbSBcIi4vVG9kb2xpc3RcIjtcbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvbWVudS5zdmdcIjtcbmltcG9ydCByZW1vdmVJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvcmVtb3ZlLnN2Z1wiO1xuaW1wb3J0IENpcmNsZSBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2NpcmNsZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVUkoKSB7XG4gIGNvbnN0IG15VG9Eb0xpc3QgPSB0b0RvTGlzdCgpO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gIGJvZHkuYXBwZW5kKGNvbnRlbnQpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcik7XG5cbiAgICBjb25zdCBNZW51ID0gbmV3IEltYWdlKCk7XG4gICAgTWVudS5zcmMgPSBNZW51QmFyO1xuICAgIE1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaWNvblwiKTtcbiAgICBoZWFkZXIuYXBwZW5kKE1lbnUpO1xuXG4gICAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYWdlVGl0bGUuY2xhc3NMaXN0LmFkZChcInBhZ2UtdGl0bGVcIik7XG4gICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJUb0RvIExpc3RcIjtcbiAgICBoZWFkZXIuYXBwZW5kKHBhZ2VUaXRsZSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IHByb2plY3RBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QXJlYS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hcmVhXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmQobWFpbik7XG4gICAgbWFpbi5hcHBlbmQoc2lkZWJhcik7XG4gICAgbWFpbi5hcHBlbmQocHJvamVjdEFyZWEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1haW4sXG4gICAgICBoZWFkZXIsXG4gICAgICBzaWRlYmFyLFxuICAgICAgcHJvamVjdEFyZWEsXG4gICAgICBNZW51LFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgaW5pdGlhdGVTaWRlYmFyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvdGFsUHJvamVjdHMgPSBteVRvRG9MaXN0LmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzID0gdG90YWxQcm9qZWN0cy5zbGljZSgwLCAxKTtcbiAgICBjb25zdCBjcmVhdGVkUHJvamVjdHMgPSB0b3RhbFByb2plY3RzLnNsaWNlKDEpO1xuXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWZhdWx0UHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcImRlZmF1bHQtcHJvamVjdHNcIik7XG4gICAgbWFpbkNvbnRlbnQuc2lkZWJhci5hcHBlbmQoZGVmYXVsdFByb2plY3RMaXN0KTtcblxuICAgIGZ1bmN0aW9uIGFkZERlZmF1bHRQcm9qZWN0cygpIHtcbiAgICAgIGRlZmF1bHRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZGVkUHJvamVjdCA9IGFkZFByb2plY3RUb0RPTShwcm9qZWN0KTtcbiAgICAgICAgZGVmYXVsdFByb2plY3RMaXN0LmFwcGVuZENoaWxkKGFkZGVkUHJvamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0c0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgICBwcm9qZWN0c0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIk15IFByb2plY3RzXCI7XG4gICAgbWFpbkNvbnRlbnQuc2lkZWJhci5hcHBlbmQocHJvamVjdHNIZWFkaW5nKTtcblxuICAgIGNvbnN0IGxpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbiAgICBtYWluQ29udGVudC5zaWRlYmFyLmFwcGVuZChsaW5lQnJlYWspO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcbiAgICBtYWluQ29udGVudC5zaWRlYmFyLmFwcGVuZChwcm9qZWN0TGlzdCk7XG5cbiAgICBmdW5jdGlvbiBhZGRDcmVhdGVkUHJvamVjdHMoKSB7XG4gICAgICBjcmVhdGVkUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRlZFByb2plY3QgPSBhZGRQcm9qZWN0VG9ET00ocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChhZGRlZFByb2plY3QpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICAgIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgbWFpbkNvbnRlbnQuc2lkZWJhci5hcHBlbmQoYWRkUHJvamVjdEJ0bik7XG5cbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5wdXRcIik7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdElucHV0KTtcbiAgICAgIGFkZFByb2plY3RCdG4ucmVtb3ZlKCk7XG5cbiAgICAgIHByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdElucHV0LnZhbHVlO1xuICAgICAgICBpZiAocHJvamVjdE5hbWUudHJpbSgpICE9PSBcIlwiICYmIHByb2plY3ROYW1lICE9PSBcIkluYm94XCIpIHtcbiAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbXlUb0RvTGlzdC5nZW5lcmF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgIGNvbnN0IGFkZGVkUHJvamVjdCA9IGFkZFByb2plY3RUb0RPTShuZXdQcm9qZWN0KTtcbiAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQoYWRkZWRQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0SW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIG1haW5Db250ZW50LnNpZGViYXIuYXBwZW5kKGFkZFByb2plY3RCdG4pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xuICAgICAgbWFpbkNvbnRlbnQuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAobWFpbkNvbnRlbnQubWFpbi5jb250YWlucyhtYWluQ29udGVudC5zaWRlYmFyKSkge1xuICAgICAgICAgIG1haW5Db250ZW50LnNpZGViYXIucmVtb3ZlKCk7XG4gICAgICAgICAgbWFpbkNvbnRlbnQubWFpbi5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIxZnJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYWluQ29udGVudC5tYWluLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIm1pbm1heCgyMDBweCwgMWZyKSA1ZnJcIjtcbiAgICAgICAgICBtYWluQ29udGVudC5tYWluLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgIG1haW5Db250ZW50LnNpZGViYXIsXG4gICAgICAgICAgICBtYWluQ29udGVudC5tYWluLmZpcnN0Q2hpbGRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgbWVudVRvZ2dsZSgpO1xuICAgIGFkZERlZmF1bHRQcm9qZWN0cygpO1xuICAgIGFkZENyZWF0ZWRQcm9qZWN0cygpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3RUb0RPTShwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXG4gICAgICBwcm9qZWN0LmdldE5hbWUoKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgXCItXCIpXG4gICAgKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZChwcm9qZWN0TmFtZSk7XG5cbiAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IFwiSW5ib3hcIikge1xuICAgICAgY29uc3QgUmVtb3ZlID0gbmV3IEltYWdlKCk7XG4gICAgICBSZW1vdmUuc3JjID0gcmVtb3ZlSWNvbjtcbiAgICAgIFJlbW92ZS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLWJ0blwiKTtcblxuICAgICAgcHJvamVjdEVsZW1lbnQuYXBwZW5kKFJlbW92ZSk7XG5cbiAgICAgIFJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IG15VG9Eb0xpc3QubG9hZEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdC50aXRsZSA9PT0gcHJvamVjdC50aXRsZSkge1xuICAgICAgICAgICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgICAgICAgICAgbXlUb0RvTGlzdC5kZWxldGVDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBteVRvRG9MaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IG15VG9Eb0xpc3QubG9hZEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRpdGxlID09PSBwcm9qZWN0LnRpdGxlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICAgICAgICBvcGVuUHJvamVjdChwcm9qZWN0LCBwcm9qZWN0LnRhc2tzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJUYXNrTGlzdCgpIHtcbiAgICBtYWluQ29udGVudC5wcm9qZWN0QXJlYS5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgLy8gb3BlbmluZyB0aGUgcHJvamVjdCBpbiB0aGUgdGFzayBhcmVhXG4gIGZ1bmN0aW9uIG9wZW5Qcm9qZWN0KHByb2plY3QsIHRhc2tzKSB7XG4gICAgbXlUb0RvTGlzdC5zYXZlQ3VycmVudFByb2plY3QocHJvamVjdCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBtYWluQ29udGVudC5wcm9qZWN0QXJlYS5hcHBlbmQodGl0bGUpO1xuXG4gICAgY29uc3QgdGFza0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBcmVhLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWFyZWFcIik7XG4gICAgbWFpbkNvbnRlbnQucHJvamVjdEFyZWEuYXBwZW5kKHRhc2tBcmVhKTtcblxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IGFkZGVkVGFzayA9IGFkZFRhc2tUb0RPTShwcm9qZWN0LCB0YXNrKTtcbiAgICAgIHRhc2tBcmVhLmFwcGVuZChhZGRlZFRhc2spO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgbWFpbkNvbnRlbnQucHJvamVjdEFyZWEuYXBwZW5kKGFkZFRhc2tCdG4pO1xuXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgbWFpbkNvbnRlbnQucHJvamVjdEFyZWEuYXBwZW5kKHRhc2tJbnB1dCk7XG4gICAgICBhZGRUYXNrQnRuLnJlbW92ZSgpO1xuXG4gICAgICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKHRhc2tOYW1lLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBteVRvRG9MaXN0LnNhdmVUYXNrKHByb2plY3QsIHRhc2tOYW1lKTtcbiAgICAgICAgICBjb25zdCBhZGRlZFRhc2sgPSBhZGRUYXNrVG9ET00ocHJvamVjdCwgbmV3VGFzayk7XG4gICAgICAgICAgdGFza0FyZWEuYXBwZW5kKGFkZGVkVGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgdGFza0lucHV0LnJlbW92ZSgpO1xuICAgICAgICBtYWluQ29udGVudC5wcm9qZWN0QXJlYS5hcHBlbmQoYWRkVGFza0J0bik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRhc2tUb0RPTShwcm9qZWN0LCB0YXNrKSB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWVcIik7XG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgY29uc3QgdGFza0NpcmNsZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRhc2tDaXJjbGUuY2xhc3NMaXN0LmFkZChcInRhc2stY2lyY2xlXCIpO1xuICAgIHRhc2tDaXJjbGUuc3JjID0gQ2lyY2xlO1xuXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kKHRhc2tDaXJjbGUpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZCh0YXNrTmFtZSk7XG5cbiAgICB0YXNrQ2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0YXNrLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgcHJvamVjdC5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgbXlUb0RvTGlzdC5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIG15VG9Eb0xpc3Quc2F2ZUN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgdGFza0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhc2tFbGVtZW50O1xuICB9XG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBpbml0aWF0ZVNpZGViYXIoKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IG15VG9Eb0xpc3QubG9hZEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICBjbGVhclRhc2tMaXN0KCk7XG4gICAgICBvcGVuUHJvamVjdChjdXJyZW50UHJvamVjdCwgY3VycmVudFByb2plY3QudGFza3MpO1xuICAgIH1cbiAgfSkoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==