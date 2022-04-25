/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Context/Context.js":
/*!****************************!*\
  !*** ./Context/Context.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextProvider\": () => (/* binding */ ContextProvider),\n/* harmony export */   \"useMainContext\": () => (/* binding */ useMainContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst mainContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction useMainContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(mainContext);\n}\nfunction ContextProvider({ children  }) {\n    //All of the data from NASA EONET\n    const { 0: eventData , 1: setEventData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    //Used to store the event that the user wants to go to\n    const { 0: selectedEvent , 1: setSelectedEvent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    //Need to re-render markers because user has changed filer option\n    const { 0: reRenderMarkers , 1: setReRenderMarkers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const value = {\n        eventData,\n        setEventData,\n        selectedEvent,\n        setSelectedEvent,\n        reRenderMarkers,\n        setReRenderMarkers\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mainContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/Context/Context.js\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db250ZXh0L0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBb0Q7QUFFcEQsTUFBTUcsV0FBVyxpQkFBR0gsMERBQW1CLEVBQUU7QUFFbEMsU0FBU0ssY0FBYyxHQUFHO0lBQy9CLE9BQU9KLGlEQUFVLENBQUNFLFdBQVcsQ0FBQyxDQUFDO0NBQ2hDO0FBRU0sU0FBU0csZUFBZSxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFFO0lBQzVDLGlDQUFpQztJQUNqQyxNQUFNLEVBVlIsR0FVU0MsU0FBUyxHQVZsQixHQVVvQkMsWUFBWSxNQUFJUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxzREFBc0Q7SUFDdEQsTUFBTSxFQVpSLEdBWVNRLGFBQWEsR0FadEIsR0FZd0JDLGdCQUFnQixNQUFJVCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUN4RCxpRUFBaUU7SUFDakUsTUFBTSxFQWRSLEdBY1NVLGVBQWUsR0FkeEIsR0FjMEJDLGtCQUFrQixNQUFJWCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUU1RCxNQUFNWSxLQUFLLEdBQUc7UUFDWk4sU0FBUztRQUNUQyxZQUFZO1FBQ1pDLGFBQWE7UUFDYkMsZ0JBQWdCO1FBQ2hCQyxlQUFlO1FBQ2ZDLGtCQUFrQjtLQUNuQjtJQUVELHFCQUFPLDhEQUFDVixXQUFXLENBQUNZLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUFHUCxRQUFROzs7OztZQUF3QixDQUFDO0NBQzlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2lyb3Etd2VhdGhlci1ldmVudHMvLi9Db250ZXh0L0NvbnRleHQuanM/YTE5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IG1haW5Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWFpbkNvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KG1haW5Db250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgLy9BbGwgb2YgdGhlIGRhdGEgZnJvbSBOQVNBIEVPTkVUXG4gIGNvbnN0IFtldmVudERhdGEsIHNldEV2ZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIC8vVXNlZCB0byBzdG9yZSB0aGUgZXZlbnQgdGhhdCB0aGUgdXNlciB3YW50cyB0byBnbyB0b1xuICBjb25zdCBbc2VsZWN0ZWRFdmVudCwgc2V0U2VsZWN0ZWRFdmVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgLy9OZWVkIHRvIHJlLXJlbmRlciBtYXJrZXJzIGJlY2F1c2UgdXNlciBoYXMgY2hhbmdlZCBmaWxlciBvcHRpb25cbiAgY29uc3QgW3JlUmVuZGVyTWFya2Vycywgc2V0UmVSZW5kZXJNYXJrZXJzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIGV2ZW50RGF0YSxcbiAgICBzZXRFdmVudERhdGEsXG4gICAgc2VsZWN0ZWRFdmVudCxcbiAgICBzZXRTZWxlY3RlZEV2ZW50LFxuICAgIHJlUmVuZGVyTWFya2VycyxcbiAgICBzZXRSZVJlbmRlck1hcmtlcnMsXG4gIH07XG5cbiAgcmV0dXJuIDxtYWluQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L21haW5Db250ZXh0LlByb3ZpZGVyPjtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIm1haW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1haW5Db250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJldmVudERhdGEiLCJzZXRFdmVudERhdGEiLCJzZWxlY3RlZEV2ZW50Iiwic2V0U2VsZWN0ZWRFdmVudCIsInJlUmVuZGVyTWFya2VycyIsInNldFJlUmVuZGVyTWFya2VycyIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Context/Context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/Context */ \"./Context/Context.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context_Context__WEBPACK_IMPORTED_MODULE_2__.ContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ3NCO0FBRXJELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCw2REFBZTtrQkFDZCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNaLENBQ2xCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2lyb3Etd2VhdGhlci1ldmVudHMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vQ29udGV4dC9Db250ZXh0JztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRleHRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();