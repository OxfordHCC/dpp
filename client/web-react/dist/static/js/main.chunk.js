(this["webpackJsonpweb-react"] = this["webpackJsonpweb-react"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/history.less":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/history.less ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".history.page {\n  display: flex;\n  overflow: hidden;\n}\n.history.page .vertical-scroll-container {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.history.page .fill {\n  flex: 1;\n}\n.history.page .sidebar .history-nav .intersection-list .cards {\n  overflow: auto;\n}\n.history.page #map {\n  flex: 1;\n}\n@media (max-width: 600px) {\n  .history.page {\n    flex-direction: column-reverse;\n  }\n  .history-nav {\n    flex-direction: column-reverse;\n  }\n  .history-nav .header {\n    flex-direction: column-reverse;\n  }\n  .history-nav .intersection-list .cards {\n    max-height: 50vh;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/settings.less":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/settings.less ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page.settings {\n  margin: 20px;\n  overflow: hidden;\n}\n.page.settings .header {\n  align-items: center;\n}\n.page.settings .back-link {\n  display: flex;\n  align-items: center;\n}\n.page.settings .settings-container {\n  display: flex;\n  position: relative;\n  transition: left 0.3s;\n  left: 0vw;\n}\n.page.settings .menu {\n  max-width: 300px;\n}\n#settings-page-root {\n  background-color: white;\n}\n#settings-page-root #back {\n  display: none;\n}\n@media (max-width: 600px) {\n  .page.settings .menu {\n    max-width: 600px;\n  }\n  .page.settings .settings-container.expanded {\n    left: -100vw;\n  }\n  #settings-page-root {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 100vw;\n  }\n  #settings-page-root #back {\n    display: flex;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!leaflet/dist/leaflet.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/leaflet/dist/leaflet.css");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! material-design-icons/iconfont/MaterialIcons-Regular.woff2 */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! material-design-icons/iconfont/MaterialIcons-Regular.woff */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! material-design-icons/iconfont/MaterialIcons-Regular.ttf */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n#root{\n\tdisplay:flex;\n\tflex-direction:column;\n\theight:100vh;\n}\n.page{\n\tflex:1 1;\n}\n\n.menu{\n\t\n}\n\n@font-face{\n\tfont-family: 'Material Icons';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: local('Material Icons'),\n\tlocal('MaterialIcons-Regular'),\n\turl(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n\turl(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"),\n\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n}\n\n.m-i{\n\tfont-family: 'Material Icons';\n\tfont-weight: normal;\n\tfont-style: normal;\n\tfont-size: 24px;\n\tdisplay:inline-block;\n\tline-height: 1;\n\ttext-transform: none;\n\tletter-spacing: normal;\n\tword-wrap: normal;\n\twhite-space: nowrap;\n\tdirection: ltr;\n\t-webkit-font-smoothing: antialiased;\n\ttext-rendering:optimizeLegibility;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-feature-settings: 'liga';\n}\n\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/google-import.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/style/google-import.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n#google-import #import-log {\n        height: 300px; \n        overflow: scroll; \n        background-color: lightgrey; \n        font-family: Lucida Console, Courier, monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/intersection-card.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/style/intersection-card.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".intersection-card{\n    min-width:200px;\n    box-shadow: 1px 1px 3px 0px gray;\n    margin:10px;\n    border-radius:10px;\n}\n.intersection-card .title{\n    font-weight:bold;\n    \n}\n\n.intersection-card .controller-list{\n}\n\n.intersection-card .details{\n    max-height:0;\n    transition: max-height 0.15s ease-out;\n    overflow:hidden;\n}\n\n.intersection-card .details.expanded{\n    max-height:600px;\n    transition: max-height 0.25s ease-in;\n}\n\n.intersection-card .inner{\n    padding:10px;\n}\n\n.intersection-card .bottom{\n    text-align: right;\n}\n\n.intersection-card .manifest-details{\n    margin-left:20px;\n}\n\n.intersection-card .provenance{\n    color: grey;\n}\n\n.Pane{\n    margin-left:20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/intersection-list.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/style/intersection-list.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js?name=0!./src/workers/compression.worker.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/workers/compression.worker.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/js/0.chunk.worker.js"

/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js?name=1!./src/workers/intersection.worker.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=1!./src/workers/intersection.worker.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/js/1.chunk.worker.js"

/***/ }),

/***/ "./src/actions/history.js":
/*!********************************!*\
  !*** ./src/actions/history.js ***!
  \********************************/
/*! exports provided: UPDATE_HISTORY_ENTRIES, updateHistory, SELECT_DATE, showHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HISTORY_ENTRIES", function() { return UPDATE_HISTORY_ENTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHistory", function() { return updateHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_DATE", function() { return SELECT_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHistory", function() { return showHistory; });
/* harmony import */ var _lib_intersection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/intersection */ "./src/lib/intersection.js");

const UPDATE_HISTORY_ENTRIES = "UPDATE_HISTORY_ENTRIES";
const updateHistory = entries => ({
  type: UPDATE_HISTORY_ENTRIES,
  entries
});
const SELECT_DATE = "SELECT_DATE";

const selectDate = selectedDateISO => ({
  type: SELECT_DATE,
  selectedDateISO
});

const showHistory = date => async dispatch => {
  const selectedDate = new Date(date);
  console.log('show history', date);

  if (selectedDate > new Date()) {
    return;
  }

  await dispatch(selectDate(date));
  const fromMs = selectedDate.setHours(0, 0, 0, 0);
  const toMs = fromMs + 24 * 60 * 60 * 1000;
  const entries = await _lib_intersection__WEBPACK_IMPORTED_MODULE_0__["default"].get(fromMs, toMs);
  await dispatch(updateHistory(entries));
  return;
};

/***/ }),

/***/ "./src/actions/settings/detectionServices.js":
/*!***************************************************!*\
  !*** ./src/actions/settings/detectionServices.js ***!
  \***************************************************/
/*! exports provided: UPDATE_STATUS, updateStatus, SET_LIST, setList, toggle, init, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STATUS", function() { return UPDATE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStatus", function() { return updateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LIST", function() { return SET_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setList", function() { return setList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _lib_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/native */ "./src/lib/native.js");

const UPDATE_STATUS = "UPDATE_STATUS";
const updateStatus = (service, status) => ({
  type: UPDATE_STATUS,
  service,
  status
});
const SET_LIST = "SET_LIST";
const setList = list => ({
  type: SET_LIST,
  list
});
const toggle = service => async (dispatch, getState) => {
  //call native, get reply and update_status with reply
  const status = await _lib_native__WEBPACK_IMPORTED_MODULE_0__["default"].settings.toggleService(service);
  dispatch(updateStatus(service, status));
};

const shouldInit = state => {
  const services = state.settings.detectionServices;

  if (services.length === 0) {
    return true;
  }

  return false;
};

const init = () => async (dispatch, getState) => {
  if (!shouldInit(getState())) {
    return;
  }

  const services = await _lib_native__WEBPACK_IMPORTED_MODULE_0__["default"].getServices();
  return dispatch(setList(services));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  toggle,
  init
});

/***/ }),

/***/ "./src/component/current-intersections.js":
/*!************************************************!*\
  !*** ./src/component/current-intersections.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _intersection_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intersection-list */ "./src/component/intersection-list.js");
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/component/current-intersections.js";



const NoIntersections = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "no-intersections",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }, "No intersections");
};

const CurrentIntersections = ({
  intersections
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "current-intersections",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, intersections.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_intersection_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
    intersections: intersections,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoIntersections, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrentIntersections);

/***/ }),

/***/ "./src/component/intersection-card.js":
/*!********************************************!*\
  !*** ./src/component/intersection-card.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_intersection_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/intersection-card.css */ "./src/style/intersection-card.css");
/* harmony import */ var _style_intersection_card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_intersection_card_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atlaskit_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @atlaskit/panel */ "./node_modules/@atlaskit/panel/dist/esm/index.js");
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/component/intersection-card.js";



const timeFormatter = Intl.DateTimeFormat('en-GB', {
  hour: 'numeric',
  minute: 'numeric'
});

const TimeLabels = ({
  start,
  end
}) => {
  if (!start && !end) {
    return;
  }

  let startTimeLabel = start && timeFormatter.format(new Date(start));
  let endTimeLabel = end && timeFormatter.format(new Date(end));
  startTimeLabel = startTimeLabel || endTimeLabel;
  endTimeLabel = endTimeLabel || startTimeLabel;

  if (startTimeLabel === endTimeLabel) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "times",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }
    }, startTimeLabel);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "times",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, startTimeLabel, " - ", endTimeLabel);
};

const IntersectionCard = ({
  intersection,
  expanded = false
}) => {
  const Header = pManifest => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, pManifest.name || getGenericName(pManifest));

  const getDetectionType = intersection => {
    if (intersection.detectionType === 'geolocation') {
      return "🌍 Geolocation";
    }

    return;
  };

  const getGenericName = pManifest => {
    if (pManifest['man_made']) {
      const manMade = pManifest['man_made'];

      if (manMade === 'surveillance') {
        return "👁️ Surveillance device";
      }
    }

    return 'Unnamed device';
  };

  const Description = pManifest => {
    return Object.keys(pManifest).map(k => {
      let value = pManifest[k];

      if (Array.isArray(value)) {
        value = value.join();
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: k,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 20
        }
      }, k, ": ", value);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intersection-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "manifest-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeLabels, {
    start: intersection.startMs,
    end: intersection.endMs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: Header(intersection.device.privacy_manifest),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, Description(intersection.device.privacy_manifest)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "provenance",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, getDetectionType(intersection)))));
};

/* harmony default export */ __webpack_exports__["default"] = (IntersectionCard);

/***/ }),

/***/ "./src/component/intersection-list.js":
/*!********************************************!*\
  !*** ./src/component/intersection-list.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/util */ "./src/lib/util.js");
/* harmony import */ var _intersection_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intersection-card */ "./src/component/intersection-card.js");
/* harmony import */ var _style_intersection_list_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/intersection-list.css */ "./src/style/intersection-list.css");
/* harmony import */ var _style_intersection_list_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_intersection_list_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/component/intersection-list.js";





const IntersectionList = ({
  intersections
}) => {
  const categories = intersections.filter(Object(_lib_util__WEBPACK_IMPORTED_MODULE_1__["Unique"])('provenance')).map(x => x.provenance);
  const intersectionCards = intersections.map(intersection => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_intersection_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    intersection: intersection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "intersection-list vertical-scroll-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, categories.map(cat => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 40
    }
  }, cat))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cards",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, intersectionCards));
};

/* harmony default export */ __webpack_exports__["default"] = (IntersectionList);

/***/ }),

/***/ "./src/component/map.js":
/*!******************************!*\
  !*** ./src/component/map.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/component/map.js";


window.L = leaflet__WEBPACK_IMPORTED_MODULE_1___default.a;
class Map extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.getCenter(props)
    };
    console.log('map constructor');
  }

  getCenter(props) {
    if (props.bounds && props.bounds.length === 2) {
      return leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.latLngBounds(props.bounds).getCenter();
    }

    if (props.latitude && props.longitude) {
      return [props.latitude, props.longitude];
    }

    return [0, 0];
  }

  drawPath(path) {
    const points = path.points.filter(x => x !== undefined);
    const line = leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.polyline(points, path.options).addTo(this.userLayer);
    const _path = line._path;

    const pathLen = _path.getTotalLength();

    const pxSecSpeed = 1000 / 1; //1000px/s;

    const time = pathLen / pxSecSpeed;

    _path.style.setProperty('--pathLength', pathLen);

    _path.style.setProperty('--time', `${time}s`);

    setTimeout(() => {
      _path.style.setProperty('stroke-dasharray', 0);
    }, time + 100);
  }

  drawCircle({
    point,
    options
  }) {
    return leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.circle(point, options).addTo(this.userLayer);
  }

  drawMarker({
    point,
    options
  }) {
    return leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.marker(point, options).addTo(this.userLayer);
  }

  componentDidUpdate(prevProps) {
    this.userLayer.clearLayers(); //for each path, draw path

    if (this.props.paths) {
      this.props.paths.filter(x => x !== undefined).forEach(path => this.drawPath(path));
    }

    if (this.props.markers) {
      this.props.markers.filter(x => x !== undefined).forEach(x => this.drawMarker(x));
    }

    if (this.props.circles) {
      this.props.circles.filter(x => x !== undefined).forEach(x => this.drawCircle(x));
    }

    this.center = this.getCenter(this.props);
    this.zoom = this.props.bounds && this.props.bounds.length === 2 && this.mapElem.getBoundsZoom(this.props.bounds) || 16;
    this.mapElem.flyTo(this.center, this.zoom);
  }

  componentDidMount() {
    const longPress = {
      timeout: null,
      threshold: 1500
    };
    this.mapElem = leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.map('map', {
      zoomControl: false,
      attributionControl: false,
      center: this.state.center,
      zoom: 16,
      layers: [leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.tileLayer(`https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png`, {
        attribution: "Tile layer by stamen.com"
      })]
    });
    this.mapElem.on('mouseup', evt => {
      clearTimeout(longPress.timeout);

      if (this.props.onMouseUp && typeof this.props.onMouseUp === 'function') {
        this.props.onMouseUp(evt);
      }

      if (!this.moved) {
        if (this.props.onMouseClick && typeof this.props.onMouseClick === 'function') {
          this.props.onMouseClick(evt);
        }
      }
    });
    this.mapElem.on('mousedown', evt => {
      this.moved = false;
      longPress.timeout = setTimeout(() => {
        console.log('long press');
      }, longPress.threshold);

      if (this.props.onMouseDown && typeof this.props.onMouseDown === 'function') {
        this.props.onMouseDown(evt);
      }
    });
    this.mapElem.on('move', evt => {
      this.moved = true;
      clearTimeout(longPress.timeout);
    });
    this.userLayer = leaflet__WEBPACK_IMPORTED_MODULE_1___default.a.layerGroup().addTo(this.mapElem);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "map",
      id: "map",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 16
      }
    });
  }

}

/***/ }),

/***/ "./src/component/recent-intersections.js":
/*!***********************************************!*\
  !*** ./src/component/recent-intersections.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _intersection_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intersection-list */ "./src/component/intersection-list.js");
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/component/recent-intersections.js";



const RecentIntersections = ({
  intersections
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "recent-intersections",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "Recent intersections:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_intersection_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
    intersections: intersections,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RecentIntersections);

/***/ }),

/***/ "./src/container/current.jsx":
/*!***********************************!*\
  !*** ./src/container/current.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _component_current_intersections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/current-intersections */ "./src/component/current-intersections.js");
/* harmony import */ var _component_recent_intersections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/recent-intersections */ "./src/component/recent-intersections.js");
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/container/current.jsx";




/**
 * Main container shows currently intersecting controllers and the most recent
 * intersections.
 *  
 */

const Current = ({
  recentIntersections,
  currentIntersections
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_current_intersections__WEBPACK_IMPORTED_MODULE_2__["default"], {
    intersections: currentIntersections,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }));
};

const connectState = state => {
  return {
    currentIntersections: [],
    recentIntersections: []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(connectState)(Current));

/***/ }),

/***/ "./src/container/detectionServiceList.jsx":
/*!************************************************!*\
  !*** ./src/container/detectionServiceList.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_settings_detectionServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/settings/detectionServices */ "./src/actions/settings/detectionServices.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/container/settings.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/container/detectionServiceList.jsx";






const detectionServiceList = ({
  services,
  toggleService
}) => {
  console.log('services is ', services);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "detection-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, services.map(serv => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings__WEBPACK_IMPORTED_MODULE_3__["FakeButton"], {
    key: serv.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    toggle: true,
    label: serv.name,
    onChange: () => toggleService(serv.id),
    checked: serv.status,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }))));
};

const connectState = state => ({
  services: state.settings.detectionServices
});

const connectDispatch = dispatch => ({
  toggleService: name => dispatch(Object(_actions_settings_detectionServices__WEBPACK_IMPORTED_MODULE_2__["toggle"])(name))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(connectState, connectDispatch)(detectionServiceList));

/***/ }),

/***/ "./src/container/google-import.jsx":
/*!*****************************************!*\
  !*** ./src/container/google-import.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/util.js */ "./src/lib/util.js");
/* harmony import */ var _lib_location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/location.js */ "./src/lib/location.js");
/* harmony import */ var _style_google_import_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/google-import.css */ "./src/style/google-import.css");
/* harmony import */ var _style_google_import_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_google_import_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/container/google-import.jsx";





const GoogleImport = () => {
  const fileInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(); // const importProgressSpan = React.createRef();
  // const importDetailsSpan = React.createRef();
  // const importLog = React.createRef();

  const [progress, setProgress] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  const [details, setDetails] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({});
  const [log, setLog] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const state = {
    stopImport: false
  };
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    console.log('called use effect');

    fileInput.current.onchange = evt => {
      const file = evt.target.files[0];
      importHistory(file, state, {
        onClose: () => {
          console.log('on close called'); // importDetailsSpan.current.textContent = '';
          // importProgressSpan.current.textContent = "Stopped!";
          //setProgress(0);

          evt.target.value = null;
        },
        onLog: str => {// let line = document.createElement('div');
          // line.textContent = `${Date.now()} > ${str}`;
          // importLog.current.appendChild(line);
        },
        onReadChunk: chunkIndex => {
          // importProgressSpan.current.textContent = `Reading chunk ${chunkCount}`;
          setProgress(chunkIndex / details.chunkLen);
          console.log('details is ', details);
          setDetails({ ...details,
            chunkIndex
          });
        },
        onStart: chunkSize => {
          // importLog.current.innerHTML = "";
          console.log('Started import...', file.size, chunkSize);
          const fileSize = file.size;
          let chunkLen = Math.ceil(fileSize / chunkSize);
          console.log('chunkLen', chunkLen);
          setDetails({
            fileSize,
            chunkSize,
            chunkLen,
            chunkIndex: 0
          });
          console.log('details is ', details);
        }
      });
    };
  }, [details, fileInput, state]);

  const stopImport = () => {
    console.log('clicked stopImport');
    state.stopImport = true;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "settings-page",
    id: "google-import",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Import Google Location History"), "Download your google location data and import file from ./Takeout/Location History.json (after unzipping).", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    ref: fileInput,
    type: "file",
    accept: ".json",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "import-progress-detail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, "File size: ", details.fileSize, "Chunk size: ", details.chunkSize, "Reading chunk ", details.chunkIndex, " out of ", details.chunkLen, ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Progress: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "import-progress",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 31
    }
  }, progress)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "stop-import",
    onClick: stopImport,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 22
    }
  }, "Stop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "import-log",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }))));
}; //Read file chunk by chunk so we don't kill the browser.


function importHistory(file, state, listeners) {
  //WARNING FRAGILE CODE AHEAD
  //DO NOT CHANGE
  const HEADER = `{
  "locations" : [ `;
  const FOOTER = `]
}`;
  const CLOSED_CURLY_BRACE = 125; //OK, CAN CHANGE FROM HERE 

  const CHUNK_SIZE = 1000 * 1024; //1MB 

  let ARR_END = file.size - FOOTER.length;
  let start = HEADER.length; //skip header

  let chunkCount = 0;
  let textEncoder = new TextEncoder();

  const domLog = str => listeners && listeners.onLog && listeners.onLog(str);

  const reader = new FileReader(); //flIndicator -- f(irst)l(evel)Indicator -- when we pass latitudeE7 
  //we know we're on the first level

  const flIndicatorUint8 = textEncoder.encode('latitudeE7');

  const reachedFirstLevel = (i, buffer) => {
    for (let j = 0, n = flIndicatorUint8.length; j < n; j++) {
      if (flIndicatorUint8[j] !== buffer[i + j]) {
        return false;
      }
    }

    return true;
  };

  reader.onload = async () => {
    let buffer = new Uint8Array(reader.result);
    let end = start + buffer.length;
    let onFirstLevel = false;
    const isLastChunk = start + CHUNK_SIZE >= ARR_END; //BEFORE:
    //{____________},_{_____
    //[START          END]     <-- "buffer pointers"

    for (let i = buffer.length; i > 0; i--) {
      if (reachedFirstLevel(i, buffer)) {
        onFirstLevel = true;
      }

      if (onFirstLevel && buffer[i] === CLOSED_CURLY_BRACE) {
        break;
      }

      end = end - 1;
    }

    end += 1; //AFTER: 
    //{____________},_{_____  
    //[START    END]           <-- "buffer pointers"
    //process array between start, end;

    await processChunk(buffer.slice(0, end - start), chunkCount);
    chunkCount += 1;
    start = end + 2; //skip ', ';

    if (start < ARR_END && !state.stopImport && !isLastChunk) {
      seek();
    } else {
      listeners && listeners.onClose && listeners.onClose();
    }
  }; //TODO: if the entries in the tail were duplicates,
  //the head of the next chunk may continue the series
  //of duplicates.


  async function processChunk(buffer, cC) {
    const ascii = new TextDecoder('utf8').decode(buffer);

    try {
      const jsonData = JSON.parse(`${HEADER}${ascii}${FOOTER}`);
      const entries = jsonData.locations.map(googleEntry => ({
        timestampMs: Number(googleEntry.timestampMs),
        latitude: Object(_lib_util_js__WEBPACK_IMPORTED_MODULE_1__["deNormCoord"])(googleEntry.latitudeE7),
        longitude: Object(_lib_util_js__WEBPACK_IMPORTED_MODULE_1__["deNormCoord"])(googleEntry.longitudeE7),
        accuracy: googleEntry.accuracy
      }));
      domLog(`[chunk ${cC}] : ${entries.length} entries`);
      let res = await _lib_location_js__WEBPACK_IMPORTED_MODULE_2__["default"].bulkPut(entries);
      domLog(`[chunk ${cC}]: stored ${res} compressed entries`);
      listeners && listeners.onReadChunk && listeners.onReadChunk(cC);
    } catch (err) {
      console.error(err);
      reader.abort();
      printTail(buffer.length - 1, buffer);
      return Promise.reject(err);
    }
  }

  function seek() {
    let end = start + CHUNK_SIZE;

    if (end > ARR_END) {
      end = ARR_END;
    }

    let slice = file.slice(start, end);
    reader.readAsArrayBuffer(slice);
  }

  seek();
  listeners && listeners.onStart && listeners.onStart(CHUNK_SIZE);
} //DEBUGGING FNs


function printSlice(slice) {
  console.log(new TextDecoder('utf-8').decode(slice));
}

function printTail(i, buffer) {
  console.log('TAIL: printing position', i);
  const windowSize = 50;
  let slice = buffer.slice(i - windowSize, i);
  printSlice(slice);
}

function printHead(i, buffer) {
  console.log('HEAD: printing position', i);
  const windowSize = 50;
  let slice = buffer.slice(i, i + windowSize);
  printSlice(slice);
}

/* harmony default export */ __webpack_exports__["default"] = (GoogleImport);

/***/ }),

/***/ "./src/container/history-navigation.jsx":
/*!**********************************************!*\
  !*** ./src/container/history-navigation.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_intersection_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/intersection-list */ "./src/component/intersection-list.js");
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/container/history-navigation.jsx";



const HistoryNavigation = ({
  intersections,
  date
}) => {
  console.log('history navigation: ', date);
  const dateFormat = {
    month: 'long',
    day: 'numeric'
  };
  const selectedDate = new Date(date);
  const selectedDateString = selectedDate.toLocaleString('en-GB', dateFormat);

  const urlDate = date => new Date(date).toISOString().split('T')[0];

  const nextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    window.location.hash = `#history/${urlDate(newDate)}`;
  };

  const prevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    window.location.hash = `#history/${urlDate(newDate)}`;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "history-nav vertical-scroll-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, selectedDateString), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "controls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: prevDay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "Prev"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: nextDay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Next"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_intersection_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
    intersections: intersections,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HistoryNavigation);

/***/ }),

/***/ "./src/container/history.jsx":
/*!***********************************!*\
  !*** ./src/container/history.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _component_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/map */ "./src/component/map.js");
/* harmony import */ var _container_history_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/history-navigation */ "./src/container/history-navigation.jsx");
/* harmony import */ var _style_history_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/history.less */ "./src/style/history.less");
/* harmony import */ var _style_history_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_history_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/history */ "./src/actions/history.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/container/history.jsx";








const getDeviceCircle = point => point && {
  point: [point.latitude, point.longitude],
  options: {
    radius: point.radius || 30,
    color: "red",
    stroke: false
  }
};

const getIntersectionCircle = point => ({
  point: [point.device.latitude, point.device.longitude],
  options: {
    radius: point.accuracy || 30,
    color: 'red'
  }
});

const getLocationCircle = entry => ({
  point: [entry.latitude, entry.longitude],
  options: {
    radius: entry.accuracy,
    color: 'blue',
    stroke: false
  }
});

const getOpenRouteLine = points => ({
  points: points.map(({
    latitude,
    longitude
  }) => [latitude, longitude]),
  options: {
    color: "#7d7dff",
    className: "animated-path",
    weight: 5
  }
});

const History = ({
  intersections,
  openroutes,
  locations,
  devices,
  bounds,
  showHistory
}) => {
  const params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useParams"])();
  console.log('params', params);
  const date = new Date(params.date).toISOString();
  console.log('history params date', date);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    console.log('use effect called', date);
    showHistory(date);
  }, [date, showHistory]);
  const deviceCircles = devices.map(getDeviceCircle);
  const locationCircles = locations.map(getLocationCircle);
  const intersectionCircles = intersections.map(getIntersectionCircle);
  const paths = openroutes && [getOpenRouteLine(openroutes)];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "history page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar vertical-scroll-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_history_navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    intersections: intersections,
    date: date,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    paths: paths,
    circles: [...deviceCircles, ...locationCircles, ...intersectionCircles],
    bounds: bounds,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }));
};

const connectState = state => state.history.entries;

const connectDispatch = dispatch => ({
  showHistory: date => dispatch(Object(_actions_history__WEBPACK_IMPORTED_MODULE_5__["showHistory"])(date))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(connectState, connectDispatch)(History));

/***/ }),

/***/ "./src/container/main.jsx":
/*!********************************!*\
  !*** ./src/container/main.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current */ "./src/container/current.jsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/container/settings.jsx");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history */ "./src/container/history.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/container/main.jsx";







const CustomMenuItem = ({
  to,
  children
}) => {
  const match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])({
    exact: false,
    path: to
  });
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  const goToRoute = () => {
    history.push(to);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    active: match !== null,
    onClick: goToRoute,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, children);
};

const Main = () => {
  const defaultDate = new Date().toISOString().split('T')[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    exact: true,
    from: "/history",
    to: `/history/${defaultDate}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/history/:date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_history__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_current__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
    widths: 3,
    fluid: true,
    icon: "labeled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomMenuItem, {
    to: "/current",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    name: "gamepad",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), "Current"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomMenuItem, {
    to: "/history",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    name: "gamepad",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), "History"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomMenuItem, {
    to: "/settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    name: "gamepad",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), "Settings"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/container/settings.jsx":
/*!************************************!*\
  !*** ./src/container/settings.jsx ***!
  \************************************/
/*! exports provided: FakeButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeButton", function() { return FakeButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _google_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-import */ "./src/container/google-import.jsx");
/* harmony import */ var _lib_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/credentials */ "./src/lib/credentials.js");
/* harmony import */ var _detectionServiceList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detectionServiceList */ "./src/container/detectionServiceList.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @atlaskit/menu */ "./node_modules/@atlaskit/menu/dist/esm/index.js");
/* harmony import */ var _style_settings_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/settings.less */ "./src/style/settings.less");
/* harmony import */ var _style_settings_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_settings_less__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/container/settings.jsx";








const NoPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }, "Empty settings pages");
};

const classObj = style => Object.entries(style).filter(([k, v]) => v).map(([k, v]) => k).join(' ');

const FakeButton = props => {
  const styleFn = currentStyles => ({ ...currentStyles,
    '&: hover': {
      'backgroundColor': 'transparent'
    }
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__["ButtonItem"], {
    elemBefore: props.elemBefore,
    cssFn: styleFn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }
  }, props.children);
}; //TODO: use react routing for sub-routes.

const Settings = params => {
  const [page, showPage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NoPage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 45
    }
  }));
  const [subtitle, setSubTitle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  let openrouteInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const getAPIKey = async () => {
      openrouteInput.current.value = (await _lib_credentials__WEBPACK_IMPORTED_MODULE_2__["default"].getKey('openroute')) || '';
    };

    getAPIKey();
  }, []);

  const hidePage = () => {
    setSubTitle(null);
  };

  const selectPage = (title, component) => {
    showPage(component);
    setSubTitle(title);
  };

  const BackButton = () => {
    if (subtitle !== null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#settings",
        className: "back-link",
        onClick: hidePage,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "m-i",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }, "navigate_before"), "Back");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#history",
      className: "back-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "m-i",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, "navigate_before"), "Back");
  };

  let timeout;

  const onOpenRouteChange = evt => {
    const val = openrouteInput.current.value.trim();

    if (timeout) {
      clearInterval(timeout);
    }

    timeout = setTimeout(async () => {
      await _lib_credentials__WEBPACK_IMPORTED_MODULE_2__["default"].setKey('openroute', val);
    }, 500);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackButton, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classObj({
      "settings-container": true,
      "expanded": subtitle !== null
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__["MenuGroup"], {
    className: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    title: "Detection Services",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_detectionServiceList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    title: "API Keys",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FakeButton, {
    elemBefore: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "m-i",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 41
      }
    }, "directions"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, "Openroute"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    ref: openrouteInput,
    type: "text",
    onChange: onOpenRouteChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    title: "Import",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__["ButtonItem"], {
    elemBefore: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "m-i",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 41
      }
    }, "history"),
    onClick: () => selectPage("Google Import", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_google_import__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 116
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "Import Google Location history"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__["ButtonItem"], {
    elemBefore: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "m-i",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 33
      }
    }, "publish"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "Import DPP file. Coming soon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    title: "Export",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__["ButtonItem"], {
    elemBefore: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "m-i",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 33
      }
    }, "get_app"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "Export")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_menu__WEBPACK_IMPORTED_MODULE_5__["Section"], {
    title: "About",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "A short description of the DPP project.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 51
    }
  }, "More details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "Privacy Policy"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "settings-page-root",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, page)));
};

const connectState = state => ({});

const connectDispatch = dispatch => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(connectState, connectDispatch)(Settings));

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _container_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container/main */ "./src/container/main.jsx");
/* harmony import */ var _actions_settings_detectionServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/settings/detectionServices */ "./src/actions/settings/detectionServices.js");
var _jsxFileName = "/Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/index.jsx";











const appRoot = document.getElementById('root');
const store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_7__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 2
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_main__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 4
  }
})), appRoot);
store.dispatch(Object(_actions_settings_detectionServices__WEBPACK_IMPORTED_MODULE_10__["init"])()); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_8__["unregister"]();

/***/ }),

/***/ "./src/lib/credentials.js":
/*!********************************!*\
  !*** ./src/lib/credentials.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/lib/store.js");
//API keys and such

const API_AUTH_TYPE = 'api-auth';
const apiKeys = {};
const apiKeyInitialization = new Promise(async (resolve, reject) => {
  try {
    (await _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].meta.toArray()).filter(metaEntry => metaEntry.type === API_AUTH_TYPE).reduce((acc, curr) => {
      acc[curr.service] = curr.key;
      return acc;
    }, apiKeys);
    resolve();
  } catch (err) {
    reject(err);
  }
});

async function getKey(service) {
  await apiKeyInitialization;
  return apiKeys[service];
}

function setKey(service, key) {
  return _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].meta.put({
    id: `${API_AUTH_TYPE}-${service}`,
    type: API_AUTH_TYPE,
    service,
    key
  }).then(() => {
    apiKeys[service] = key;
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  setKey,
  getKey
});

/***/ }),

/***/ "./src/lib/devices.js":
/*!****************************!*\
  !*** ./src/lib/devices.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remote */ "./src/lib/remote.js");
 //bounds = [ LatLon, LatLon ]

async function getDevicesAround(bounds) {
  try {
    console.log('bounds is ', bounds);
    return await _remote__WEBPACK_IMPORTED_MODULE_0__["default"].getDevicesBounded(bounds);
  } catch (err) {
    console.error('Err while getting devices from remote');
    console.error(err);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getDevicesAround
});

/***/ }),

/***/ "./src/lib/geometry.js":
/*!*****************************!*\
  !*** ./src/lib/geometry.js ***!
  \*****************************/
/*! exports provided: pointProjectionOnLine, getMedianIntersection, getIntersectionSegment, latLongToCartesian, cartesianToLatLong, distanceCartesian, distanceLatLongPythagora, distanceLatLongHaversine, isPointBetween, isCircleIntersectingCircle, isSegmentIntersectingCircle, getIntersections, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointProjectionOnLine", function() { return pointProjectionOnLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMedianIntersection", function() { return getMedianIntersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntersectionSegment", function() { return getIntersectionSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latLongToCartesian", function() { return latLongToCartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianToLatLong", function() { return cartesianToLatLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceCartesian", function() { return distanceCartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceLatLongPythagora", function() { return distanceLatLongPythagora; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceLatLongHaversine", function() { return distanceLatLongHaversine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointBetween", function() { return isPointBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCircleIntersectingCircle", function() { return isCircleIntersectingCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSegmentIntersectingCircle", function() { return isSegmentIntersectingCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntersections", function() { return getIntersections; });
//TODO: Capitalize point param names
//Get projection of point t on a line (a, b): a line that goes through a and b
function pointProjectionOnLine(t, [a, b]) {
  //let s be the slope of line (a, b)
  let s = (a.y - b.y) / (a.x - b.x); //we get the basis(?) of the line, so we can compute the equation of the
  //line later

  let bS = a.y - s * a.x; //let r be the slope of the line orthogonal to our line

  let r = -1 / s; //since we know that point t is on this line, we can compute the basis of 
  //this line

  let bR = t.y - r * t.x; //the point we're interested in is on both lines (at the intersection), 
  //so it satisfies both line equations:
  // 		y = s * x + bS;
  //and 	y = r * x + bR;
  //we replace y in the second equation to get x, then get y using x in the first eq.

  let x = (bR - bS) / (s - r);
  let y = s * x + bS;
  return {
    x,
    y
  };
} //given two overlapping circles, get the middle point of their intersection.
//c1 - {x, y, r} -> coords and radius of circle 1
//idm c2
//d - optional distance param to avoid computing again: usually if this function is called, it's
//because the distnance has been calculated before.

function getMedianIntersection(c1, c2, d) {
  d = d || distanceCartesian(c1, c2);
  let segment = getIntersectionSegment(c1, c2, d);
  return {
    x: (segment[0].x + segment[1].x) / 2,
    y: (segment[0].y + segment[1].y) / 2
  };
}
function getIntersectionSegment(c1, c2, d) {
  const s = c1.r + c2.r - d;
  const l = c1.r - s;
  const k = c2.r - s; //why am I not using this? TODO:investigate

  const uc1c2 = [(c2.x - c1.x) / d, (c2.y - c1.y) / d]; //unit vector from c1 to c2

  const uc2c1 = uc1c2.map(c => -c); //invert unit vector (unit vector from c2 to c1)

  const a = {
    x: c1.x + l * uc1c2[0],
    y: c1.y + l * uc1c2[1]
  };
  const b = {
    x: c2.x + l * uc2c1[0],
    y: c2.y + l * uc2c1[1]
  };
  return [a, b];
}
function latLongToCartesian(lat, long, lat0) {
  if (!lat0) {
    lat0 = lat;
  }

  const R = 6371e3;
  const longRad = long * (Math.PI / 180);
  const latRad = lat * (Math.PI / 180);
  const lat0Rad = lat0 * (Math.PI / 180);
  const x = R * longRad * Math.cos(lat0Rad);
  const y = R * latRad;
  return {
    x,
    y
  };
}
function cartesianToLatLong(x, y, lat0) {
  const R = 6371e3;
  const lat0Rad = lat0 * (Math.PI / 180);
  const longRad = x / (R * Math.cos(lat0Rad));
  const latRad = y / R;
  const latitude = latRad / (Math.PI / 180);
  const longitude = longRad / (Math.PI / 180);
  return {
    latitude,
    longitude
  };
}
/*
DISTANCE BETWEEN POINTS
*/
//naive pythagora for flat earthers

function distanceCartesian(a, b) {
  let v = a.y - b.y;
  let u = a.x - b.x;
  return Math.sqrt(v * v + u * u);
} //https://www.movable-type.co.uk/scripts/latlong.html

function distanceLatLongPythagora(a, b) {
  const R = 6371e3;
  const x = (b.longitude - a.longitude) * Math.cos((a.latitude + b.latitude) / 2);
  const y = b.latitude - a.latitude;
  return Math.sqrt(x * x + y * y) * R;
} //https://www.movable-type.co.uk/scripts/latlong.html

function distanceLatLongHaversine(a, b) {
  var R = 6371e3;
  var φ1 = a.latitude * (Math.PI / 180);
  var φ2 = b.latitude * (Math.PI / 180);
  var Δφ = (b.latitude - a.latitude) * (Math.PI / 180);
  var Δλ = (b.longitude - a.longitude) * (Math.PI / 180);
  var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
} //given point P on a line and [A, B] a segment on the same line, is P between
//segment bounds?

function isPointBetween(P, [A, B]) {
  let dotProd = (A.x - P.x) * (A.x - B.x) + (A.y - P.y) * (B.y - A.y);

  if (dotProd < 0) {
    return false;
  }

  let abSquareDist = (A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y);

  if (dotProd > abSquareDist) {
    return false;
  }

  return true;
}
function isCircleIntersectingCircle(C1, r1, C2, r2) {
  if (distanceCartesian(C1, C2) > r1 + r2) {
    return false;
  }

  return true;
} //given a circle with center at point C and radius r, and a segment [A, B], 
//does the segment ntersect the circle?

function isSegmentIntersectingCircle(C, r, [A, B]) {
  //let P = projection of C on (A,B) 
  let P = pointProjectionOnLine(C, [A, B]); //if radius is smaller than the distance between C and its projections, then
  //the circle is too far away

  let d = distanceCartesian(C, P); //console.log('distance between C, P', d);

  if (isNaN(d)) {
    return false;
  }

  if (d > r) {
    return false;
  } //check if  P is between [A, B];


  if (!isPointBetween(P, [A, B])) {
    return false;
  }

  return true;
} //given an array of paths and an array of circles, return their intersections

function getIntersections(paths, devices) {
  let res = [];

  for (let i = 0, n = paths.length; i < n; i++) {
    for (let j = 0, m = devices.length; j < m; j++) {
      if (isSegmentIntersectingCircle(devices[j], devices[j].r, paths[i])) {
        res.push({
          device: devices[j],
          path: paths[i],
          pathIndex: i,
          deviceIndex: j
        });
      }
    }
  }

  return res;
}
const geometryHelper = {
  getIntersections,
  isSegmentIntersectingCircle,
  isPointBetween,
  distanceCartesian,
  pointProjectionOnLine,
  latLongToCartesian,
  cartesianToLatLong,
  isCircleIntersectingCircle
};
/* harmony default export */ __webpack_exports__["default"] = (geometryHelper);

/***/ }),

/***/ "./src/lib/intersection.js":
/*!*********************************!*\
  !*** ./src/lib/intersection.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__1) {/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/lib/store.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./src/lib/location.js");
/* harmony import */ var _openroute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openroute */ "./src/lib/openroute.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devices */ "./src/lib/devices.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);





const IX_VALID_EDGE = 'intersection-valid-edge-left';
let sharedIntersectionWorker;

function getIntersectionWorker() {
  if (!sharedIntersectionWorker) {
    sharedIntersectionWorker = new Worker(__webpack__worker__1, );
  }

  return sharedIntersectionWorker;
}

function computeIntersections(entries, devices) {
  if (!entries || entries.length === 0 || !devices || devices.length === 0) {
    return [];
  }

  return new Promise((resolve, reject) => {
    const intersectionWorker = getIntersectionWorker();
    const channel = new MessageChannel();
    const port1 = channel.port1;
    const port2 = channel.port2;

    port1.onmessage = msg => {
      if (msg.data.event === "done") {
        resolve(msg.data.entries);
        port1.close();
      }
    };

    intersectionWorker.onerror = err => reject(err);

    intersectionWorker.postMessage({
      entries,
      devices,
      port: port2
    }, [port2]);
  });
} //TODO: rename to update history


async function updateIntersections(fromMs, toMs) {
  console.log('computing'); //get location history

  const locations = await _location__WEBPACK_IMPORTED_MODULE_1__["default"].getLocationHistory(fromMs, toMs);
  console.log('updateIx: locations', locations); //get openroute

  const openroutes = await getEstimatedPath(locations);
  console.log('updateIx: openroutes', openroutes);

  if (openroutes.length < 1) {
    return {
      intersections: [],
      devices: [],
      openroutes: [],
      bounds: [],
      locations: []
    };
  } //get bounds for devices


  const latLonPath = openroutes.map(({
    latitude,
    longitude
  }) => [latitude, longitude]);
  const bounds = leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.polyline(latLonPath).getBounds().pad(0.1);
  const boundsArr = [bounds.getSouthWest(), bounds.getNorthEast()].map(({
    lat,
    lng
  }) => [lat, lng]);
  const deviceBounds = leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.latLngBounds(bounds);
  const minBounds = deviceBounds.getCenter().toBounds(5000);
  deviceBounds.extend(minBounds); //get devices

  const deviceBoundsArr = [deviceBounds.getSouthWest(), deviceBounds.getNorthEast()].map(({
    lat,
    lng
  }) => [lat, lng]);
  const devices = await _devices__WEBPACK_IMPORTED_MODULE_3__["default"].getDevicesAround(deviceBoundsArr); //compute intersections

  const intersections = await computeIntersections(openroutes, devices);
  await _store__WEBPACK_IMPORTED_MODULE_0__["default"].intersection.bulkPut(intersections); //store openroute

  await _store__WEBPACK_IMPORTED_MODULE_0__["default"].openroute.where('timestampMs').between(fromMs, toMs).delete();
  await _store__WEBPACK_IMPORTED_MODULE_0__["default"].openroute.bulkPut(openroutes); //update IX_VALID_EDGE

  await _store__WEBPACK_IMPORTED_MODULE_0__["default"].meta.put({
    id: IX_VALID_EDGE,
    value: fromMs
  });
  return {
    intersections,
    devices,
    openroutes,
    bounds: boundsArr,
    locations
  };
} //get history between from and to


async function get(fromMs, toMs) {
  const ixValidEdgeObj = (await _store__WEBPACK_IMPORTED_MODULE_0__["default"].meta.toArray()).find(m => m.id === IX_VALID_EDGE);
  let ixValidEdge = ixValidEdgeObj && ixValidEdgeObj.value || Date.now();
  console.log('ixValidEdge', ixValidEdge, fromMs); //Note: true is there to skip retrieval from db since the ixValidEdge check is not correct
  //TODO: find way to check if need to recompute

  if (true) {
    //if invalidated, update and return
    return updateIntersections(fromMs, toMs);
  }

  console.log('retrieving from db'); //if not invalidated, we can just retrieve everything from local dbs

  const intersections = await _store__WEBPACK_IMPORTED_MODULE_0__["default"].intersection.where('timestampMs').between(fromMs, toMs).toArray();
  const locations = await _location__WEBPACK_IMPORTED_MODULE_1__["default"].getLocationHistory(fromMs, toMs);
  const openroutes = await _store__WEBPACK_IMPORTED_MODULE_0__["default"].openroute.where('timestampMs').between(fromMs, toMs).toArray();
  const path = openroutes.map(({
    latitude,
    longitude
  }) => [latitude, longitude]);
  const bounds = leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.polyline(path).getBounds().pad(1);
  const minBounds = bounds.getCenter().toBounds(5000);
  bounds.extend(minBounds);
  const boundsArr = [bounds.getSouthWest(), bounds.getNorthEast()].map(({
    lat,
    lng
  }) => [lat, lng]);
  const devices = await _devices__WEBPACK_IMPORTED_MODULE_3__["default"].getDevicesAround(boundsArr);
  console.log('returning from intersections', {
    intersections,
    devices,
    openroutes,
    bounds: boundsArr,
    locations
  });
  return {
    intersections,
    devices,
    openroutes,
    bounds: boundsArr,
    locations
  };
} //TODO: there seems to be a bug with time estimation... need to investigate


function estimateTimestampsNSquared(recorded, estimated) {
  //this is not euclidean distance, but it's just good enough to determine _relative_ "likeness"
  const distance = (a, b) => (a.latitude - b.latitude) * (a.latitude - b.latitude) + (a.longitude - b.longitude) * (a.longitude - b.longitude);

  let r = 1;
  let l = r;
  let min = 200;
  estimated[0].timestampMs = recorded[0].timestampMs;

  for (let i = 1, n = recorded.length; i < n; i++) {
    min = 200;

    for (let j = r, m = estimated.length; j < m; j++) {
      let dist = distance(recorded[i], estimated[j]);

      if (dist < min) {
        min = dist;
        r = j;
      }
    }

    interpolate(estimated, l, r, recorded[i - 1].timestampMs, recorded[i].timestampMs);
    l = r;
  }

  return estimated;
} //BORKED, do not use


function matchEntries(recorded, estimated) {
  const distance = (a, b) => (a.latitude - b.latitude) * (a.latitude - b.latitude) + (a.longitude - b.longitude) * (a.longitude - b.longitude);

  let eL = 1;
  let eR = estimated.length - 2;
  let rL = 1;
  let rR = recorded.length - 2;
  let minDistanceL = 200;
  let minDistanceR = 200;
  let lastL = eL;
  let lastR = eR;

  while (eL < eR && rL < rR) {
    let distanceL = distance(estimated[eL], recorded[rL]);

    if (distanceL > minDistanceL) {
      interpolate(estimated, lastL, eL, recorded[rL].timestamp, recorded[rL - 1].timestamp);
      rL++;
      lastL = eL;
      minDistanceL = 200;
    } else {
      eL++;
      minDistanceL = distanceL;
    }

    let distanceR = distance(estimated[eR], recorded[rR]);

    if (distanceR > minDistanceR) {
      interpolate(estimated, eR, lastR, recorded[rR].timestamp, recorded[rR + 1].timestamp);
      rR--;
      lastR = eR;
      minDistanceR = 200;
    } else {
      eR--;
      minDistanceR = distanceR;
    }
  }
}

function estimateTime(recorded, estimated) {
  return estimateTimestampsNSquared(recorded, estimated);
}

async function getEstimatedPath(entries) {
  if (!entries || entries.length === 0) {
    console.warn("getEstimatedPath entries length 0.");
    return [];
  }

  const coordinates = entries.map(entry => [entry.longitude, entry.latitude]);
  const estimated = (await _openroute__WEBPACK_IMPORTED_MODULE_2__["default"].estimatePath(coordinates)).map(coord => ({
    longitude: coord[0],
    latitude: coord[1]
  }));
  estimateTime(entries, estimated);
  return estimated;
}

function interpolate(entries, l, r, t1, t2) {
  const n = r - l || 1;
  const dt = t2 - t1;
  let Ti = dt / n;

  for (let i = l; i <= r; i++) {
    entries[i].timestampMs = t1 + Ti * (i - l || 1);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=1!../workers/intersection.worker.js */ "./node_modules/worker-plugin/dist/loader.js?name=1!./src/workers/intersection.worker.js")))

/***/ }),

/***/ "./src/lib/location.js":
/*!*****************************!*\
  !*** ./src/lib/location.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/lib/store.js");

const MAX_ACCURACY_RADIUS = 50; //discard entries that have accuracy of less than value in m

const entryKeyFn = pt => `${pt.latitude}/${pt.longitude}`;

const isAccurate = pt => pt.accuracy < MAX_ACCURACY_RADIUS;

const tooSimilar = (pt, prev, next) => {
  if (!prev || !next) {
    return false;
  }

  if (entryKeyFn(prev) !== entryKeyFn(pt)) {
    return false;
  }

  if (entryKeyFn(next) !== entryKeyFn(pt)) {
    return false;
  }

  return true;
};

let lastPosition;

async function getLastPosition() {
  return lastPosition || (await _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.limit(1).last());
}

window.getLastPosition = getLastPosition;

async function updateLastPosition(pos) {
  lastPosition = pos;
}

function storeLastPos(pos) {
  _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.put(pos);
  updateLastPosition(pos);
}

let sharedCompressionWorker;

function getCompressionWorker() {
  if (!sharedCompressionWorker) {
    sharedCompressionWorker = new Worker(__webpack__worker__0, );
  }

  return sharedCompressionWorker;
}

async function put(pos) {
  let scWorker = getCompressionWorker();
  let channel = new MessageChannel();
  let lastPos = await getLastPosition();

  if (!lastPos) {
    return storeLastPos(pos);
  }

  let inEntries = [lastPos, pos];

  channel.port1.onmessage = msg => {
    if (msg.data.event === 'done') {
      let outEntries = msg.data.entries;

      if (outEntries.length === 1) {
        //entries were compressed, so update the last entry
        console.log('overwritting last position');
        lastPos.latitude = outEntries[0].latitude;
        lastPos.longitude = outEntries[0].longitude;
        return storeLastPos(lastPos);
      } //the new entry is different enough to warrant a new, separate entry


      storeLastPos(pos);
    }
  };

  scWorker.postMessage({
    entries: inEntries,
    port: channel.port2
  }, [channel.port2]);
} //TODO: rename to "simplify" (or smth else)


function compressPoints(points) {
  if (!points || points.length === 0) {
    return;
  }

  return new Promise((resolve, reject) => {
    let scWorker = getCompressionWorker();
    let channel = new MessageChannel();
    let port1 = channel.port1;

    port1.onmessage = msg => {
      if (msg.data.event === 'done') {
        resolve(msg.data.entries);
        port1.close();
      }
    };

    port1.onerrormessage = msg => reject(msg);

    scWorker.postMessage({
      entries: points,
      port: channel.port2
    }, [channel.port2]);
  });
} //TODO: isAccurate check should be moved at a lower level


async function bulkPut(entries) {
  const compressed = [];
  console.log('entries ', entries.length);

  for (let i = 0, n = entries.length; i < n; i++) {
    let entry = entries[i];

    if (isAccurate(entry) && !tooSimilar(entry, entries[i - 1], entries[i + 1])) {
      compressed.push(entry);
    }
  }

  await _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.bulkPut(compressed);
  return compressed.length;
} //newBulkPut accomodates the new native event handling pipeline and fixes the issues raised
//with old bulkPut. It should gradually replace the old bulkPut.


async function newBulkPut(entries) {
  const simplified = await compressPoints(entries);
  return _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.bulkPut(simplified);
}

function getLocationHistory(startMs, endMs) {
  return _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.where('timestampMs').between(startMs, endMs).toArray().then(compressPoints);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getLocationHistory,
  bulkPut,
  newBulkPut,
  put
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=0!../workers/compression.worker.js */ "./node_modules/worker-plugin/dist/loader.js?name=0!./src/workers/compression.worker.js")))

/***/ }),

/***/ "./src/lib/native.js":
/*!***************************!*\
  !*** ./src/lib/native.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _native_android_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native/android.js */ "./src/lib/native/android.js");
/* harmony import */ var _native_mock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./native/mock.js */ "./src/lib/native/mock.js");
/* harmony import */ var _native_ios_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./native/ios.js */ "./src/lib/native/ios.js");
/* harmony import */ var _native_web_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./native/web.js */ "./src/lib/native/web.js");
/* harmony import */ var _native_nativeInterface_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./native/nativeInterface.js */ "./src/lib/native/nativeInterface.js");





const android = window.Android;
const ios = window.iOS;

const getNative = () => {
  if (android) {
    return new _native_android_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  if (ios) {
    return new _native_ios_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  return new _native_web_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
};

const nativeInterface = Object(_native_nativeInterface_js__WEBPACK_IMPORTED_MODULE_4__["default"])(getNative());
/* harmony default export */ __webpack_exports__["default"] = (nativeInterface);

/***/ }),

/***/ "./src/lib/native/android.js":
/*!***********************************!*\
  !*** ./src/lib/native/android.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AndroidInterface; });
/* harmony import */ var _nativeInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nativeInterface.js */ "./src/lib/native/nativeInterface.js");
/* harmony import */ var _lib_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/location */ "./src/lib/location.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/util */ "./src/lib/util.js");



class AndroidInterface {
  constructor() {
    window.AndroidInterface = this;
    this.callbackMap = {};
  }

  reply(message, {
    data,
    error
  }) {
    return {
      id: message.id,
      data,
      error
    };
  }

  handleReply(message) {
    const {
      id,
      data,
      error
    } = message;
    const cb = this.callback[id];
    data && cb.resolve(data) || error && cb.reject(error);
    delete this.callbackMap[message.id];
  }

  async receive(message) {
    //from native
    try {
      if (this.callbackMap[message.id]) {
        return this.handleReply(message);
      }

      this.send(this.reply(message, {
        data: await this.handleMessage(message)
      }));
      return;
    } catch (error) {
      this.send(this.reply(message, {
        error
      }));
    }
  }

  send(message) {
    //to native
    window.Android.sendMessage(message);
    return Promise.race([new Promise((resolve, reject) => {
      this.callbackMap[message.id] = {
        resolve,
        reject
      };
    }), new Promise((resolve, reject) => {
      setTimeout(() => reject({
        error: "Timeout"
      }), 5000);
    })]);
  }

  setMessageHandler(handler) {
    this.handleMessage = handler;
  }

}

/***/ }),

/***/ "./src/lib/native/ios.js":
/*!*******************************!*\
  !*** ./src/lib/native/ios.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return iOSInterface; });
/* harmony import */ var _nativeInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nativeInterface.js */ "./src/lib/native/nativeInterface.js");

class iOSInterface {}

/***/ }),

/***/ "./src/lib/native/mock.js":
/*!********************************!*\
  !*** ./src/lib/native/mock.js ***!
  \********************************/
/*! exports provided: default, addMockDevice, rmMockDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MockInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMockDevice", function() { return addMockDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rmMockDevice", function() { return rmMockDevice; });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store.js */ "./src/lib/store.js");
/* harmony import */ var _nativeInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nativeInterface.js */ "./src/lib/native/nativeInterface.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry.js */ "./src/lib/geometry.js");



class MockInterface {
  async proximityCheck(pos) {
    try {
      const mockDevices = await _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].mockDevices.toArray();
      const posC = _geometry_js__WEBPACK_IMPORTED_MODULE_2__["default"].latLongToCartesian(pos.latitude, pos.longitude, pos.latitude);

      const inProximity = ({
        devC,
        devR
      }) => {
        return _geometry_js__WEBPACK_IMPORTED_MODULE_2__["default"].isCircleIntersectingCircle(devC, devR, posC, pos.accuracy);
      };

      mockDevices.map(device => ({
        devC: _geometry_js__WEBPACK_IMPORTED_MODULE_2__["default"].latLongToCartesian(device.latitude, device.longitude, pos.latitude),
        devR: device.radius,
        device
      })).filter(inProximity).forEach(dev => {
        //super.detectDevice({...(dev.device), timestamp: Date.now()});
        console.log('device in proximity', dev);
      });
    } catch (err) {
      if (err.name === "NotFoundError") {
        //TODO: change to instanceof check;
        console.log('no mock devices found in db');
      } else {
        console.error(err);
      }
    }
  }

  mockLocation(pos) {
    //super.updateLocation(pos);
    this.proximityCheck(pos);
  }

}
const addMockDevice = async mockDevice => await _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].mockDevices.put(mockDevice);
const rmMockDevice = async mockDevice => await _store_js__WEBPACK_IMPORTED_MODULE_0__["default"].mockDevice.delete(mockDevice);
window.mock = {
  nativeInterface: new MockInterface(),
  addMockDevice,
  rmMockDevice
};

/***/ }),

/***/ "./src/lib/native/nativeInterface.js":
/*!*******************************************!*\
  !*** ./src/lib/native/nativeInterface.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/lib/util.js");
/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location.js */ "./src/lib/location.js");


const eventHandlers = {
  location: locationUpdate
};

function locationUpdate(events) {
  const MIN_ACCURACY = 50; //meters

  let locations = events.filter(evt => evt.data.accuracy < MIN_ACCURACY).map(evt => ({ ...evt.data,
    timestamp: evt.timestamp
  }));
  return _location_js__WEBPACK_IMPORTED_MODULE_1__["default"].newBulkPut(locations);
}

function UDPHandler(events) {}

function defaultEventHandler(event) {
  console.log('no event handler found for event of type', event.type);
}

function handleMessage({
  type,
  data
}) {
  if (!type) {
    return;
  }

  if (type === 'event') {
    return handleEvent(data);
  }

  throw "message type unknown";
}

function handleEvent(data) {
  return Promise.all(Object.values(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["groupBy"])(data, "type")).map(([type, entries]) => eventHandlers[type](entries)));
}

const nativeInterface = native => {
  const sendMessage = (type, data) => native.send({
    type,
    data
  });

  native.setMessageHandler(handleMessage);
  sendMessage('webview_ready');
  return {
    test: () => sendMessage('test'),
    getServices: () => sendMessage("get_detection_services"),
    settings: {
      toggleService: id => sendMessage("toggle_detection_service", {
        id
      })
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (nativeInterface);

/***/ }),

/***/ "./src/lib/native/web.js":
/*!*******************************!*\
  !*** ./src/lib/native/web.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebInterface; });
const locationService = webInterface => {
  const LS_KEY = "settings_location_service";
  let listenerId;
  init();

  const sendEvent = (...events) => {
    webInterface.send({
      type: 'event',
      data: events
    });
  };

  const sendLocation = location => {
    sendEvent({
      type: 'location',
      data: location
    });
  };

  function init(_this) {
    if (getStatus()) {
      start();
    }

    return _this;
  }

  function start() {
    localStorage.setItem(LS_KEY, true);
    listenerId = navigator.geolocation.watchPosition(geoLoc => {
      sendLocation({
        timestampMs: geoLoc.timestamp || Date.now(),
        latitude: geoLoc.coords.latitude,
        longitude: geoLoc.coords.longitude,
        accuracy: geoLoc.coords.accuracy
      });
    }, error => {
      console.error(error);
      stop();
    }, {
      enableHighAccuracy: true
    });
  }

  function stop() {
    localStorage.setItem(LS_KEY, false);
    navigator.geolocation.clearWatch(listenerId);
  }

  function getStatus() {
    return localStorage.getItem(LS_KEY) === 'true' || false;
  }

  function getName() {
    return "Location";
  }

  function toggle() {
    getStatus() ? stop() : start();
    return getStatus();
  }

  return {
    start,
    stop,
    toggle,
    getStatus,
    getName
  };
};

const theWeb = webInterface => {
  const detectionServices = {
    location: locationService(webInterface)
  };

  function toggleDetectionService({
    id
  }) {
    console.log('id is ', id);
    return detectionServices[id].toggle();
  }

  function receiveMessage(message) {
    const {
      type,
      data
    } = message;

    if (type === "toggle_detection_service") {
      return toggleDetectionService(data);
    }

    if (type === "get_detection_services") {
      return getServices();
    }

    return Promise.reject({
      error: `Undefined message type '${message.type}'`
    });
  }

  function getServices() {
    return Object.entries(detectionServices).map(([id, service]) => ({
      id,
      name: service.getName(),
      status: service.getStatus()
    }));
  }

  return {
    receiveMessage
  };
}; //The reason I split it into theWeb and the WebInterface is to emulate the native counterpart that would
//exist on native implementations. The WebInterface then looks more similar to AndroidInterface and the
//IOSInterface classes.
//This makes code more uniform and lets patterns emerge for future refactoring.


class WebInterface {
  constructor() {
    this.theWeb = theWeb(this);
  }

  send(message) {
    //to native
    return this.theWeb.receiveMessage(message);
  }

  receive(message) {
    //from native
    return this.handleMessage(message);
  }

  setMessageHandler(handler) {
    this.handleMessage = handler;
  }

}

/***/ }),

/***/ "./src/lib/openroute.js":
/*!******************************!*\
  !*** ./src/lib/openroute.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _credentials_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credentials.js */ "./src/lib/credentials.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./src/lib/util.js");



async function directionsRequest(coordinates) {
  if (coordinates.length < 2) {
    return coordinates;
  }

  const endPoint = 'https://api.openrouteservice.org/v2/directions/foot-walking/geojson';
  const apiKey = await _credentials_js__WEBPACK_IMPORTED_MODULE_0__["default"].getKey('openroute');
  const body = JSON.stringify({
    coordinates
  });

  if (!apiKey) {
    throw new Error("Missing api key for openroute");
  }

  return fetch(endPoint, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
      'Authorization': apiKey
    },
    body
  }).then(res => res.json()).then(data => data.features[0].geometry.coordinates);
}

async function estimatePath(coordinates) {
  if (coordinates.length < 2) {
    return coordinates;
  }

  return Promise.all(Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["chunk"])(coordinates, 40).map(directionsRequest)).then(_util_js__WEBPACK_IMPORTED_MODULE_1__["flatten"]);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  estimatePath
});

/***/ }),

/***/ "./src/lib/remote.js":
/*!***************************!*\
  !*** ./src/lib/remote.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const HOST = 'http://192.168.43.33';
const PORT = '3000';
const defaultHeaders = {
  'Content-Type': 'application/json'
};

async function getDemoRoute(points) {
  let coordinates = points.map(pt => [pt.longitude, pt.latitude]);
  let res = await POST('/demo-openroute', {
    coordinates
  });

  if (res.error) {
    throw res.error;
  }

  return res.features[0].geometry.coordinates.map(([lon, lat]) => [lat, lon]);
}

async function getMarkers({
  lat,
  lon
}) {
  try {
    return await GET(`/v2/markers?lat=${lat}&lon=${lon}&precision=4`);
  } catch (err) {
    console.error(err);
    throw err;
  }
} //min = [ latlon, latlon ] - lower left corner
//max = [ latlon, latlon ] - upper right corner


async function getDevicesBounded([min, max]) {
  const [minlat, minlon] = min;
  const [maxlat, maxlon] = max;
  const query = `minlat=${minlat}&minlon=${minlon}&maxlat=${maxlat}&maxlon=${maxlon}`;
  const res = await GET(`/v2/markers?${query}`);

  if (res.error) {
    console.log('error', res.error);
    throw new Error(res.error);
  }

  return res.results;
}

function appendDefaultHeaders(headers) {
  return Object.assign({}, defaultHeaders, headers);
}

function api(endpoint, opts) {
  opts.headers = appendDefaultHeaders(opts.headers);
  return fetch(`${HOST}:${PORT}${endpoint}`, opts).then(res => res.json());
}

function GET(endpoint, opts) {
  return api(endpoint, { ...opts,
    method: 'GET'
  });
}

function POST(endpoint, body, opts) {
  return api(endpoint, { ...opts,
    method: 'POST',
    body: JSON.stringify(body)
  });
}

function DELETE(endpoint, body, opts) {
  return api(endpoint, { ...opts,
    method: 'DELETE',
    body: JSON.stringify(body)
  });
}

function PUT(endpoint, body, opts) {
  return api(endpoint, { ...opts,
    method: 'PUT',
    body: JSON.stringify(body)
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getMarkers,
  getDemoRoute,
  getDevicesBounded
});

/***/ }),

/***/ "./src/lib/store.js":
/*!**************************!*\
  !*** ./src/lib/store.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");
//handle persistent data storage on the client side
//!! Note that schema declarations only declare the primary keys.
//	 So do NOT add every field you want to use. Only add the primary keys.

const db = new dexie__WEBPACK_IMPORTED_MODULE_0__["default"]('test');
db.version(1).stores({
  location: 'timestampMs',
  device: 'id, lat, long',
  meta: 'id',
  mock_device: '++id, lat, long',
  intersection: '++id, startMs, endMs',
  openroute: 'timestampMs'
});
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),

/***/ "./src/lib/util.js":
/*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
/*! exports provided: uuidv4, groupBy, htmlCompile, cssCompile, htmlEscape, gel, gell, deNormCoord, html, css, chunk, flatten, DEVICE_RADIUS, Evented, Unique, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuidv4", function() { return uuidv4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlCompile", function() { return htmlCompile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssCompile", function() { return cssCompile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlEscape", function() { return htmlEscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gel", function() { return gel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gell", function() { return gell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deNormCoord", function() { return deNormCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return chunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE_RADIUS", function() { return DEVICE_RADIUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evented", function() { return Evented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unique", function() { return Unique; });
function noopTag(t) {
  for (var o = [t[0]], i = 1, l = arguments.length; i < l; i++) {
    o.push(arguments[i], t[i]);
  }

  return o.join('').trim();
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}
function groupBy(data, key) {
  return data.reduce((acc, curr) => {
    (acc[curr[key]] = acc[curr[key]] || []).push(curr);
    return acc;
  }, {});
}
function htmlCompile(t) {
  for (var o = [t[0]], i = 1, l = arguments.length; i < l; i++) {
    let val = arguments[i];

    if (val instanceof HTMLElement) {
      val = `<fosh-placeholder id="${i}"></fosh-placeholder>`;
    }

    o.push(val, t[i]);
  }

  let tempNode = document.createElement('template');
  let htmlStr = o.join('').trim();
  tempNode.innerHTML = htmlStr;
  tempNode = tempNode.content;

  for (const pHolder of tempNode.querySelectorAll('fosh-placeholder')) {
    pHolder.replaceWith(arguments[pHolder.getAttribute('id')]);
  }

  return tempNode;
}
function cssCompile(t) {
  for (var o = [t[0]], i = 1, l = arguments.length; i < l; i++) {
    o.push(arguments[i], t[i]);
  }

  let styleNode = document.createElement('style');
  styleNode.innerHTML = o.join('').trim();
  return styleNode;
} //could use this instead:
//(c)(opied from)https://gist.github.com/aishikaty/dcb6e7f3441c1c8321a34437139bf17f

function htmlEscape(strings, ...values) {
  return Array.from(strings).map((string, index) => string + (Array.isArray(values[index]) ? values[index].join("") : new Option(values[index]).innerHTML)).join('');
}
function gel(elem) {
  return document.querySelector(elem);
}
function gell(elem) {
  return document.querySelectorAll(elem);
}
function deNormCoord(coord) {
  return coord / 10000000;
}
const html = noopTag;
const css = noopTag;
function chunk(arr, size) {
  let chunks = Math.ceil(arr.length / size);
  return arr.reduce((acc, curr, i) => {
    let groupIndex = Math.floor(i / size);
    acc[groupIndex].push(curr);
    return acc;
  }, Array(chunks).fill(null).map(() => []));
} //flatten one levelx

function flatten(arr) {
  return arr.reduce((acc, curr) => {
    acc = acc.concat(curr);
    return acc;
  }, []);
} //SHOULD BE DEPRECATED

const DEVICE_RADIUS = 33;
class Evented {
  constructor() {
    this.callbacks = {};
    return this;
  }

  trigger(id, ...args) {
    if (this.callbacks[id] === undefined) {
      return;
    }

    this.callbacks[id].forEach(cb => cb.apply(null, args));
  }

  on(id, cb) {
    (this.callbacks[id] = this.callbacks[id] || []).push(cb);
    return cb;
  }

  once(id, cb) {
    const cbOnce = function () {
      cb.apply(null, arguments);
      this.off(id, cb);
    };

    this.on(id, cbOnce);
    return this;
  }

  off(id, cb) {
    let indx = this.callbacks[id].find(cb);
    this.callbacks[id].splice(indx, 1);
    return this;
  }

}
const Unique = field => {
  let map = {};

  const keyFn = x => field && x[field] || x;

  return x => {
    const key = keyFn(x);

    if (map[key]) {
      return false;
    }

    map[key] = x;
    return true;
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  gel,
  html,
  deNormCoord,
  DEVICE_RADIUS,
  chunk,
  Evented,
  cssCompile
});

/***/ }),

/***/ "./src/reducers/history.js":
/*!*********************************!*\
  !*** ./src/reducers/history.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_history_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/history.js */ "./src/actions/history.js");


const defaultState = {
  selectedDateISO: new Date().toISOString(),
  entries: {
    locations: [],
    devices: [],
    intersections: [],
    bounds: [],
    openroutes: []
  }
};

const historyReducer = (state = defaultState, action) => {
  console.log('called reducer', state, action);

  switch (action.type) {
    case _actions_history_js__WEBPACK_IMPORTED_MODULE_0__["SELECT_DATE"]:
      return { ...state,
        selectedDateISO: action.selectedDateISO
      };

    case _actions_history_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_HISTORY_ENTRIES"]:
      return { ...state,
        entries: action.entries
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (historyReducer);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history */ "./src/reducers/history.js");
/* harmony import */ var _settings___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/ */ "./src/reducers/settings/index.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  history: _history__WEBPACK_IMPORTED_MODULE_1__["default"],
  settings: _settings___WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/reducers/settings/detectionServices.js":
/*!****************************************************!*\
  !*** ./src/reducers/settings/detectionServices.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_settings_detectionServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/settings/detectionServices */ "./src/actions/settings/detectionServices.js");

/* harmony default export */ __webpack_exports__["default"] = ((state = [], action) => {
  switch (action.type) {
    case _actions_settings_detectionServices__WEBPACK_IMPORTED_MODULE_0__["SET_LIST"]:
      return action.list;

    case _actions_settings_detectionServices__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STATUS"]:
      return state.map(service => {
        let newService = Object.assign({}, service);

        if (newService.id === action.service) {
          newService.status = action.status;
        }

        return newService;
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/settings/index.js":
/*!****************************************!*\
  !*** ./src/reducers/settings/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _detectionServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detectionServices */ "./src/reducers/settings/detectionServices.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  detectionServices: _detectionServices__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/style/google-import.css":
/*!*************************************!*\
  !*** ./src/style/google-import.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./google-import.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/google-import.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./google-import.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/google-import.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./google-import.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/google-import.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/style/history.less":
/*!********************************!*\
  !*** ./src/style/history.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./history.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/history.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./history.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/history.less", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./history.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/history.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/style/intersection-card.css":
/*!*****************************************!*\
  !*** ./src/style/intersection-card.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./intersection-card.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/intersection-card.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./intersection-card.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/intersection-card.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./intersection-card.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/intersection-card.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/style/intersection-list.css":
/*!*****************************************!*\
  !*** ./src/style/intersection-list.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./intersection-list.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/intersection-list.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./intersection-list.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/intersection-list.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./intersection-list.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/intersection-list.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/style/settings.less":
/*!*********************************!*\
  !*** ./src/style/settings.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./settings.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/settings.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./settings.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/settings.less", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./settings.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/settings.less");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!***********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.jsx ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/alexzugravu/workspace/max/p_tracker/client/web-react/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/alexzugravu/workspace/max/p_tracker/client/web-react/src/index.jsx */"./src/index.jsx");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map