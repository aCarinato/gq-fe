"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Map */ \"./components/Map.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _components_events_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/events-filter */ \"./components/events-filter.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Context/Context */ \"./Context/Context.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n// import Loader from '../Components/Loader';\n// import Search from '../Components/Search';\n\n//Main Context\n\nvar _s = $RefreshSig$();\nfunction App() {\n    _s();\n    var ref = (0,_Context_Context__WEBPACK_IMPORTED_MODULE_7__.useMainContext)(), setEventData = ref.setEventData, reRenderMarkers = ref.reRenderMarkers;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null), bounds = ref2[0], setBounds = ref2[1];\n    //Event to render\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), renderEvent = ref3[0], setRenderEvent = ref3[1];\n    // FILTER EVENTS\n    var today = new Date();\n    var todayISO = today.toISOString().split(\"T\")[0];\n    var sett = today.setDate(today.getDate() + 7);\n    var oneWeek = new Date(sett);\n    var oneWeekISO = oneWeek.toISOString().split(\"T\")[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(todayISO), firstDate = ref4[0], setFirstDate = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(oneWeekISO), lastDate = ref5[0], setLastDate = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true, \n    ]), categoryCheck = ref6[0], setCategoryCheck = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        var fetchEvents = function() {\n            var _ref = _asyncToGenerator(_Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res, events;\n                return _Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            setLoading(true);\n                            _ctx.next = 3;\n                            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"\".concat(\"http://localhost:8000/api\", \"/events/\"));\n                        case 3:\n                            res = _ctx.sent;\n                            events = res.data;\n                            console.log(events);\n                            //Event data is globally accessible. But 'renderEvent' is just to render out the MAP with the markers\n                            setEventData(events);\n                            setRenderEvent(events);\n                            setLoading(false);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchEvents() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchEvents();\n    }, []);\n    //   useEffect(() => {\n    //     if (reRenderMarkers !== null) {\n    //       setRenderEvent(reRenderMarkers);\n    //     }\n    //   }, [reRenderMarkers]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        // if (bounds) {\n        if (bounds !== null) {\n            var getEvents = function() {\n                var _ref = _asyncToGenerator(_Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var blLat, trLat, blLong, trLong, types, filterParams, retrievedEvents;\n                    return _Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                console.log(bounds);\n                                blLat = bounds.sw.lat;\n                                trLat = bounds.ne.lat;\n                                blLong = bounds.sw.lng;\n                                trLong = bounds.ne.lng;\n                                types = categoryCheck.map(function(tipo, index) {\n                                    if (tipo) {\n                                        return index;\n                                    } else {\n                                        return 1000;\n                                    }\n                                });\n                                filterParams = {\n                                    firstDate: firstDate,\n                                    lastDate: lastDate,\n                                    trLat: trLat,\n                                    trLong: trLong,\n                                    blLat: blLat,\n                                    blLong: blLong,\n                                    types: types\n                                };\n                                _ctx.prev = 7;\n                                _ctx.next = 10;\n                                return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"\".concat(\"http://localhost:8000/api\", \"/events/\"), filterParams);\n                            case 10:\n                                retrievedEvents = _ctx.sent;\n                                setRenderEvent(retrievedEvents);\n                                _ctx.next = 17;\n                                break;\n                            case 14:\n                                _ctx.prev = 14;\n                                _ctx.t0 = _ctx[\"catch\"](7);\n                                console.log(_ctx.t0);\n                            case 17:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            7,\n                            14\n                        ]\n                    ]);\n                }));\n                return function getEvents() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            getEvents();\n        }\n    }, [\n        firstDate,\n        lastDate,\n        bounds,\n        categoryCheck\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"appRow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_events_filter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    categoryCheck: categoryCheck,\n                    setCategoryCheck: setCategoryCheck,\n                    firstDate: firstDate,\n                    setFirstDate: setFirstDate,\n                    lastDate: lastDate,\n                    setLastDate: setLastDate\n                }, void 0, false, {\n                    fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/index.js\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/index.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Map__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                eventData: renderEvent,\n                categoryCheck: categoryCheck,\n                bounds: bounds,\n                setBounds: setBounds\n            }, void 0, false, {\n                fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/index.js\",\n                lineNumber: 136,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/index.js\",\n                lineNumber: 143,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/index.js\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"yQzKvrS7//LHgbafJ+mmlg5LB3E=\", false, function() {\n    return [\n        _Context_Context__WEBPACK_IMPORTED_MODULE_7__.useMainContext\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxFQUFFQSxNQUFNO2dCQUNkQyxTQUFTLEVBQUVBLFNBQVM7Ozs7O29CQUNwQixpQkFFRiw4REFBQ1gsMERBQU07Ozs7b0JBQUc7Ozs7OztZQUVSLENBQ047Q0FDSDtHQXhJUUssR0FBRzs7UUFDZ0NELDREQUFjOzs7QUFEakRDLEtBQUFBLEdBQUc7QUEwSVosK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXInO1xuaW1wb3J0IEV2ZW50c0ZpbHRlciBmcm9tICcuLi9jb21wb25lbnRzL2V2ZW50cy1maWx0ZXInO1xuLy8gaW1wb3J0IExvYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0xvYWRlcic7XG4vLyBpbXBvcnQgU2VhcmNoIGZyb20gJy4uL0NvbXBvbmVudHMvU2VhcmNoJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vL01haW4gQ29udGV4dFxuaW1wb3J0IHsgdXNlTWFpbkNvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0L0NvbnRleHQnO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgc2V0RXZlbnREYXRhLCByZVJlbmRlck1hcmtlcnMgfSA9IHVzZU1haW5Db250ZXh0KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbYm91bmRzLCBzZXRCb3VuZHNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy9FdmVudCB0byByZW5kZXJcbiAgY29uc3QgW3JlbmRlckV2ZW50LCBzZXRSZW5kZXJFdmVudF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gRklMVEVSIEVWRU5UU1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvZGF5SVNPID0gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuXG4gIGNvbnN0IHNldHQgPSB0b2RheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIDcpO1xuICBjb25zdCBvbmVXZWVrID0gbmV3IERhdGUoc2V0dCk7XG4gIGNvbnN0IG9uZVdlZWtJU08gPSBvbmVXZWVrLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcblxuICBjb25zdCBbZmlyc3REYXRlLCBzZXRGaXJzdERhdGVdID0gdXNlU3RhdGUodG9kYXlJU08pO1xuICBjb25zdCBbbGFzdERhdGUsIHNldExhc3REYXRlXSA9IHVzZVN0YXRlKG9uZVdlZWtJU08pO1xuICBjb25zdCBbY2F0ZWdvcnlDaGVjaywgc2V0Q2F0ZWdvcnlDaGVja10gPSB1c2VTdGF0ZShbXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9L2V2ZW50cy9gKTtcbiAgICAgIC8vRXh0cmFjdCB0aGUgQXJyYXkgY29udGFpbmVkIGluIHRoZSAnZXZlbnRzJyBmaWVsZC5cbiAgICAgIGNvbnN0IGV2ZW50cyA9IHJlcy5kYXRhO1xuICAgICAgY29uc29sZS5sb2coZXZlbnRzKTtcbiAgICAgIC8vRXZlbnQgZGF0YSBpcyBnbG9iYWxseSBhY2Nlc3NpYmxlLiBCdXQgJ3JlbmRlckV2ZW50JyBpcyBqdXN0IHRvIHJlbmRlciBvdXQgdGhlIE1BUCB3aXRoIHRoZSBtYXJrZXJzXG4gICAgICBzZXRFdmVudERhdGEoZXZlbnRzKTtcbiAgICAgIHNldFJlbmRlckV2ZW50KGV2ZW50cyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGZldGNoRXZlbnRzKCk7XG4gIH0sIFtdKTtcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBpZiAocmVSZW5kZXJNYXJrZXJzICE9PSBudWxsKSB7XG4gIC8vICAgICAgIHNldFJlbmRlckV2ZW50KHJlUmVuZGVyTWFya2Vycyk7XG4gIC8vICAgICB9XG4gIC8vICAgfSwgW3JlUmVuZGVyTWFya2Vyc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKGJvdW5kcykge1xuICAgIGlmIChib3VuZHMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGdldEV2ZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYm91bmRzKTtcbiAgICAgICAgY29uc3QgYmxMYXQgPSBib3VuZHMuc3cubGF0O1xuICAgICAgICBjb25zdCB0ckxhdCA9IGJvdW5kcy5uZS5sYXQ7XG4gICAgICAgIGNvbnN0IGJsTG9uZyA9IGJvdW5kcy5zdy5sbmc7XG4gICAgICAgIGNvbnN0IHRyTG9uZyA9IGJvdW5kcy5uZS5sbmc7XG5cbiAgICAgICAgY29uc3QgdHlwZXMgPSBjYXRlZ29yeUNoZWNrLm1hcCgodGlwbywgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAodGlwbykge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMTAwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlclBhcmFtcyA9IHtcbiAgICAgICAgICBmaXJzdERhdGUsXG4gICAgICAgICAgbGFzdERhdGUsXG4gICAgICAgICAgdHJMYXQsXG4gICAgICAgICAgdHJMb25nLFxuICAgICAgICAgIGJsTGF0LFxuICAgICAgICAgIGJsTG9uZyxcbiAgICAgICAgICB0eXBlcyxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJQYXJhbXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJldHJpZXZlZEV2ZW50cyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9L2V2ZW50cy9gLFxuICAgICAgICAgICAgZmlsdGVyUGFyYW1zXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRSZW5kZXJFdmVudChyZXRyaWV2ZWRFdmVudHMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZ2V0RXZlbnRzKCk7XG4gICAgfVxuICB9LCBbZmlyc3REYXRlLCBsYXN0RGF0ZSwgYm91bmRzLCBjYXRlZ29yeUNoZWNrXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBSb3dcIj5cbiAgICAgICAgPEV2ZW50c0ZpbHRlclxuICAgICAgICAgIGNhdGVnb3J5Q2hlY2s9e2NhdGVnb3J5Q2hlY2t9XG4gICAgICAgICAgc2V0Q2F0ZWdvcnlDaGVjaz17c2V0Q2F0ZWdvcnlDaGVja31cbiAgICAgICAgICBmaXJzdERhdGU9e2ZpcnN0RGF0ZX1cbiAgICAgICAgICBzZXRGaXJzdERhdGU9e3NldEZpcnN0RGF0ZX1cbiAgICAgICAgICBsYXN0RGF0ZT17bGFzdERhdGV9XG4gICAgICAgICAgc2V0TGFzdERhdGU9e3NldExhc3REYXRlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7IWxvYWRpbmcgPyAoXG4gICAgICAgIDxNYXBcbiAgICAgICAgICBldmVudERhdGE9e3JlbmRlckV2ZW50fVxuICAgICAgICAgIGNhdGVnb3J5Q2hlY2s9e2NhdGVnb3J5Q2hlY2t9XG4gICAgICAgICAgYm91bmRzPXtib3VuZHN9XG4gICAgICAgICAgc2V0Qm91bmRzPXtzZXRCb3VuZHN9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8TG9hZGVyIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJNYXAiLCJMb2FkZXIiLCJFdmVudHNGaWx0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1haW5Db250ZXh0IiwiQXBwIiwic2V0RXZlbnREYXRhIiwicmVSZW5kZXJNYXJrZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJib3VuZHMiLCJzZXRCb3VuZHMiLCJyZW5kZXJFdmVudCIsInNldFJlbmRlckV2ZW50IiwidG9kYXkiLCJEYXRlIiwidG9kYXlJU08iLCJ0b0lTT1N0cmluZyIsInNwbGl0Iiwic2V0dCIsInNldERhdGUiLCJnZXREYXRlIiwib25lV2VlayIsIm9uZVdlZWtJU08iLCJmaXJzdERhdGUiLCJzZXRGaXJzdERhdGUiLCJsYXN0RGF0ZSIsInNldExhc3REYXRlIiwiY2F0ZWdvcnlDaGVjayIsInNldENhdGVnb3J5Q2hlY2siLCJmZXRjaEV2ZW50cyIsInJlcyIsImV2ZW50cyIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldEV2ZW50cyIsImJsTGF0IiwidHJMYXQiLCJibExvbmciLCJ0ckxvbmciLCJ0eXBlcyIsImZpbHRlclBhcmFtcyIsInJldHJpZXZlZEV2ZW50cyIsInN3IiwibGF0IiwibmUiLCJsbmciLCJtYXAiLCJ0aXBvIiwiaW5kZXgiLCJwb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZXZlbnREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});