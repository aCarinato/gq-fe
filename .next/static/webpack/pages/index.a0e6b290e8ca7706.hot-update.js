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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Map */ \"./components/Map.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _components_events_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/events-filter */ \"./components/events-filter.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Context/Context */ \"./Context/Context.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n// import Loader from '../Components/Loader';\n// import Search from '../Components/Search';\n\n//Main Context\n\nvar _s = $RefreshSig$();\nfunction App() {\n    _s();\n    var ref = (0,_Context_Context__WEBPACK_IMPORTED_MODULE_7__.useMainContext)(), setEventData = ref.setEventData, reRenderMarkers = ref.reRenderMarkers;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null), bounds = ref2[0], setBounds = ref2[1];\n    //Event to render\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), renderEvent = ref3[0], setRenderEvent = ref3[1];\n    // FILTER EVENTS\n    var today = new Date();\n    var todayISO = today.toISOString().split(\"T\")[0];\n    var sett = today.setDate(today.getDate() + 7);\n    var oneWeek = new Date(sett);\n    var oneWeekISO = oneWeek.toISOString().split(\"T\")[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(todayISO), firstDate = ref4[0], setFirstDate = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(oneWeekISO), lastDate = ref5[0], setLastDate = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true, \n    ]), categoryCheck = ref6[0], setCategoryCheck = ref6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        var fetchEvents = function() {\n            var _ref = _asyncToGenerator(_Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res, events;\n                return _Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            setLoading(true);\n                            _ctx.next = 3;\n                            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"\".concat(\"http://localhost:8000/api\", \"/events/\"));\n                        case 3:\n                            res = _ctx.sent;\n                            events = res.data;\n                            console.log(events);\n                            //Event data is globally accessible. But 'renderEvent' is just to render out the MAP with the markers\n                            setEventData(events);\n                            setRenderEvent(events);\n                            setLoading(false);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchEvents() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchEvents();\n    }, []);\n    //   useEffect(() => {\n    //     if (reRenderMarkers !== null) {\n    //       setRenderEvent(reRenderMarkers);\n    //     }\n    //   }, [reRenderMarkers]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        // if (bounds) {\n        if (bounds !== null) {\n            var getEvents = function() {\n                var _ref = _asyncToGenerator(_Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _Users_alessandrocarinato_Documents_learning_Maps_giroq_weather_events_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                console.log(bounds);\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                //     const blLat = bounds.sw.lat;\n                //     const trLat = bounds.ne.lat;\n                //     const blLong = bounds.sw.lng;\n                //     const trLong = bounds.ne.lng;\n                //     const types = categoryCheck.map((tipo, index) => {\n                //       if (tipo) {\n                //         return index;\n                //       } else {\n                //         return 1000;\n                //       }\n                //     });\n                //     const filterParams = {\n                //       firstDate,\n                //       lastDate,\n                //       trLat,\n                //       trLong,\n                //       blLat,\n                //       blLong,\n                //       types,\n                //     };\n                //     // console.log(filterParams);\n                //     try {\n                //       const retrievedEvents = await axios.post(\n                //         `${process.env.NEXT_PUBLIC_API}/events/`,\n                //         filterParams\n                //       );\n                //       setRenderEvent(retrievedEvents);\n                //     } catch (err) {\n                //       console.log(err);\n                //     }\n                }));\n                return function getEvents() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            getEvents();\n        }\n    }, [\n        firstDate,\n        lastDate,\n        bounds,\n        categoryCheck\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"appRow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_events_filter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    categoryCheck: categoryCheck,\n                    setCategoryCheck: setCategoryCheck,\n                    firstDate: firstDate,\n                    setFirstDate: setFirstDate,\n                    lastDate: lastDate,\n                    setLastDate: setLastDate\n                }, void 0, false, {\n                    fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/index.js\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/index.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Map__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                eventData: renderEvent,\n                categoryCheck: categoryCheck,\n                bounds: bounds,\n                setBounds: setBounds\n            }, void 0, false, {\n                fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/index.js\",\n                lineNumber: 136,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/index.js\",\n                lineNumber: 143,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/pages/index.js\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"yQzKvrS7//LHgbafJ+mmlg5LB3E=\", false, function() {\n    return [\n        _Context_Context__WEBPACK_IMPORTED_MODULE_7__.useMainContext\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7ZUFtQ2Q7WUFDREEsU0FBUyxFQUFFLENBQUM7U0FDYjtLQUNGLEVBQUU7UUFBQ2hCLFNBQVM7UUFBRUUsUUFBUTtRQUFFaEIsTUFBTTtRQUFFa0IsYUFBYTtLQUFDLENBQUMsQ0FBQztJQUVqRCxxQkFDRSw4REFBQ2EsS0FBRzs7MEJBQ0YsOERBQUNBLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxRQUFROzBCQUNyQiw0RUFBQ3pDLGlFQUFZO29CQUNYMkIsYUFBYSxFQUFFQSxhQUFhO29CQUM1QkMsZ0JBQWdCLEVBQUVBLGdCQUFnQjtvQkFDbENMLFNBQVMsRUFBRUEsU0FBUztvQkFDcEJDLFlBQVksRUFBRUEsWUFBWTtvQkFDMUJDLFFBQVEsRUFBRUEsUUFBUTtvQkFDbEJDLFdBQVcsRUFBRUEsV0FBVzs7Ozs7d0JBQ3hCOzs7OztvQkFDRTtZQUNMLENBQUNuQixPQUFPLGlCQUNQLDhEQUFDVCx1REFBRztnQkFDRjRDLFNBQVMsRUFBRS9CLFdBQVc7Z0JBQ3RCZ0IsYUFBYSxFQUFFQSxhQUFhO2dCQUM1QmxCLE1BQU0sRUFBRUEsTUFBTTtnQkFDZEMsU0FBUyxFQUFFQSxTQUFTOzs7OztvQkFDcEIsaUJBRUYsOERBQUNYLDBEQUFNOzs7O29CQUFHOzs7Ozs7WUFFUixDQUNOO0NBQ0g7R0F4SVFLLEdBQUc7O1FBQ2dDRCw0REFBYzs7O0FBRGpEQyxLQUFBQSxHQUFHO0FBMElaLCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGVyJztcbmltcG9ydCBFdmVudHNGaWx0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ldmVudHMtZmlsdGVyJztcbi8vIGltcG9ydCBMb2FkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9Mb2FkZXInO1xuLy8gaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9Db21wb25lbnRzL1NlYXJjaCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLy9NYWluIENvbnRleHRcbmltcG9ydCB7IHVzZU1haW5Db250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dC9Db250ZXh0JztcblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB7IHNldEV2ZW50RGF0YSwgcmVSZW5kZXJNYXJrZXJzIH0gPSB1c2VNYWluQ29udGV4dCgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2JvdW5kcywgc2V0Qm91bmRzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vRXZlbnQgdG8gcmVuZGVyXG4gIGNvbnN0IFtyZW5kZXJFdmVudCwgc2V0UmVuZGVyRXZlbnRdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIEZJTFRFUiBFVkVOVFNcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheUlTTyA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcblxuICBjb25zdCBzZXR0ID0gdG9kYXkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyA3KTtcbiAgY29uc3Qgb25lV2VlayA9IG5ldyBEYXRlKHNldHQpO1xuICBjb25zdCBvbmVXZWVrSVNPID0gb25lV2Vlay50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG5cbiAgY29uc3QgW2ZpcnN0RGF0ZSwgc2V0Rmlyc3REYXRlXSA9IHVzZVN0YXRlKHRvZGF5SVNPKTtcbiAgY29uc3QgW2xhc3REYXRlLCBzZXRMYXN0RGF0ZV0gPSB1c2VTdGF0ZShvbmVXZWVrSVNPKTtcbiAgY29uc3QgW2NhdGVnb3J5Q2hlY2ssIHNldENhdGVnb3J5Q2hlY2tdID0gdXNlU3RhdGUoW1xuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgICB0cnVlLFxuICAgIHRydWUsXG4gICAgdHJ1ZSxcbiAgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEV2ZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfS9ldmVudHMvYCk7XG4gICAgICAvL0V4dHJhY3QgdGhlIEFycmF5IGNvbnRhaW5lZCBpbiB0aGUgJ2V2ZW50cycgZmllbGQuXG4gICAgICBjb25zdCBldmVudHMgPSByZXMuZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50cyk7XG4gICAgICAvL0V2ZW50IGRhdGEgaXMgZ2xvYmFsbHkgYWNjZXNzaWJsZS4gQnV0ICdyZW5kZXJFdmVudCcgaXMganVzdCB0byByZW5kZXIgb3V0IHRoZSBNQVAgd2l0aCB0aGUgbWFya2Vyc1xuICAgICAgc2V0RXZlbnREYXRhKGV2ZW50cyk7XG4gICAgICBzZXRSZW5kZXJFdmVudChldmVudHMpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcbiAgICBmZXRjaEV2ZW50cygpO1xuICB9LCBbXSk7XG5cbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgaWYgKHJlUmVuZGVyTWFya2VycyAhPT0gbnVsbCkge1xuICAvLyAgICAgICBzZXRSZW5kZXJFdmVudChyZVJlbmRlck1hcmtlcnMpO1xuICAvLyAgICAgfVxuICAvLyAgIH0sIFtyZVJlbmRlck1hcmtlcnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIChib3VuZHMpIHtcbiAgICBpZiAoYm91bmRzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBnZXRFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGJvdW5kcyk7XG4gICAgICAgIC8vICAgICBjb25zdCBibExhdCA9IGJvdW5kcy5zdy5sYXQ7XG4gICAgICAgIC8vICAgICBjb25zdCB0ckxhdCA9IGJvdW5kcy5uZS5sYXQ7XG4gICAgICAgIC8vICAgICBjb25zdCBibExvbmcgPSBib3VuZHMuc3cubG5nO1xuICAgICAgICAvLyAgICAgY29uc3QgdHJMb25nID0gYm91bmRzLm5lLmxuZztcblxuICAgICAgICAvLyAgICAgY29uc3QgdHlwZXMgPSBjYXRlZ29yeUNoZWNrLm1hcCgodGlwbywgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gICAgICAgaWYgKHRpcG8pIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIDEwMDA7XG4gICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pO1xuXG4gICAgICAgIC8vICAgICBjb25zdCBmaWx0ZXJQYXJhbXMgPSB7XG4gICAgICAgIC8vICAgICAgIGZpcnN0RGF0ZSxcbiAgICAgICAgLy8gICAgICAgbGFzdERhdGUsXG4gICAgICAgIC8vICAgICAgIHRyTGF0LFxuICAgICAgICAvLyAgICAgICB0ckxvbmcsXG4gICAgICAgIC8vICAgICAgIGJsTGF0LFxuICAgICAgICAvLyAgICAgICBibExvbmcsXG4gICAgICAgIC8vICAgICAgIHR5cGVzLFxuICAgICAgICAvLyAgICAgfTtcblxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coZmlsdGVyUGFyYW1zKTtcbiAgICAgICAgLy8gICAgIHRyeSB7XG4gICAgICAgIC8vICAgICAgIGNvbnN0IHJldHJpZXZlZEV2ZW50cyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIC8vICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfS9ldmVudHMvYCxcbiAgICAgICAgLy8gICAgICAgICBmaWx0ZXJQYXJhbXNcbiAgICAgICAgLy8gICAgICAgKTtcbiAgICAgICAgLy8gICAgICAgc2V0UmVuZGVyRXZlbnQocmV0cmlldmVkRXZlbnRzKTtcbiAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgfTtcbiAgICAgIGdldEV2ZW50cygpO1xuICAgIH1cbiAgfSwgW2ZpcnN0RGF0ZSwgbGFzdERhdGUsIGJvdW5kcywgY2F0ZWdvcnlDaGVja10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwUm93XCI+XG4gICAgICAgIDxFdmVudHNGaWx0ZXJcbiAgICAgICAgICBjYXRlZ29yeUNoZWNrPXtjYXRlZ29yeUNoZWNrfVxuICAgICAgICAgIHNldENhdGVnb3J5Q2hlY2s9e3NldENhdGVnb3J5Q2hlY2t9XG4gICAgICAgICAgZmlyc3REYXRlPXtmaXJzdERhdGV9XG4gICAgICAgICAgc2V0Rmlyc3REYXRlPXtzZXRGaXJzdERhdGV9XG4gICAgICAgICAgbGFzdERhdGU9e2xhc3REYXRlfVxuICAgICAgICAgIHNldExhc3REYXRlPXtzZXRMYXN0RGF0ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgeyFsb2FkaW5nID8gKFxuICAgICAgICA8TWFwXG4gICAgICAgICAgZXZlbnREYXRhPXtyZW5kZXJFdmVudH1cbiAgICAgICAgICBjYXRlZ29yeUNoZWNrPXtjYXRlZ29yeUNoZWNrfVxuICAgICAgICAgIGJvdW5kcz17Ym91bmRzfVxuICAgICAgICAgIHNldEJvdW5kcz17c2V0Qm91bmRzfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPExvYWRlciAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiTWFwIiwiTG9hZGVyIiwiRXZlbnRzRmlsdGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VNYWluQ29udGV4dCIsIkFwcCIsInNldEV2ZW50RGF0YSIsInJlUmVuZGVyTWFya2VycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYm91bmRzIiwic2V0Qm91bmRzIiwicmVuZGVyRXZlbnQiLCJzZXRSZW5kZXJFdmVudCIsInRvZGF5IiwiRGF0ZSIsInRvZGF5SVNPIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInNldHQiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIm9uZVdlZWsiLCJvbmVXZWVrSVNPIiwiZmlyc3REYXRlIiwic2V0Rmlyc3REYXRlIiwibGFzdERhdGUiLCJzZXRMYXN0RGF0ZSIsImNhdGVnb3J5Q2hlY2siLCJzZXRDYXRlZ29yeUNoZWNrIiwiZmV0Y2hFdmVudHMiLCJyZXMiLCJldmVudHMiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRFdmVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJldmVudERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});