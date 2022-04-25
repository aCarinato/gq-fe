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

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* harmony import */ var use_supercluster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-supercluster */ \"./node_modules/use-supercluster/dist/use-supercluster.esm.js\");\n/* harmony import */ var _LocationMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LocationMarker */ \"./components/LocationMarker.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Map(props) {\n    var _this = this;\n    _s();\n    var center = props.center, eventData = props.eventData, categoryCheck = props.categoryCheck, bounds1 = props.bounds, setBounds = props.setBounds;\n    var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(13), zoom1 = ref[0], setZoom = ref[1];\n    var points = eventData.map(function(event) {\n        return {\n            type: \"Feature\",\n            properties: {\n                cluster: false,\n                eventId: event._id,\n                eventCategory: event.category,\n                eventStartDate: event.startDate,\n                eventEndDate: event.endDate,\n                eventStartTime: event.startTime,\n                eventEndTime: event.endTime,\n                eventTitle: event.title,\n                eventOrganiser: event.organiser,\n                eventDescription: event.description,\n                eventCity: event.city,\n                eventStreet: event.street,\n                eventImage: event.image,\n                eventLat: event.lat,\n                eventLong: event.long\n            },\n            geometry: {\n                type: \"Point\",\n                coordinates: [\n                    event.long,\n                    event.lat\n                ]\n            }\n        };\n    });\n    var ref1 = (0,use_supercluster__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        points: points,\n        bounds: bounds1,\n        zoom: zoom1,\n        options: {\n            radius: 75,\n            maxZoom: 20\n        }\n    }), clusters = ref1.clusters, supercluster = ref1.supercluster;\n    var handleMapChange = function(bounds) {\n        console.log(\"La mappa ha cambiato\");\n        console.log(bounds.sw);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"map-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(google_map_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            bootstrapURLKeys: {\n                key: \"AIzaSyDCcIebhgyEdQTd9DB6KK_ePVXNCNk1G6k\"\n            },\n            center: center,\n            zoom: zoom1,\n            yesIWantToUseGoogleMapApiInternals: true,\n            // Next thing will give access to the actual js map object (?)\n            onGoogleApiLoaded: function(param) {\n                var map = param.map;\n                mapRef.current = map;\n            },\n            onChange: function(param) {\n                var zoom = param.zoom, bounds = param.bounds;\n                setZoom(zoom);\n                setBounds([\n                    bounds.sw.lat,\n                    bounds.ne.lat,\n                    bounds.sw.lng,\n                    bounds.ne.lng, \n                ]);\n                //   console.log(bounds);\n                handleMapChange(bounds);\n            },\n            children: clusters.map(function(cluster) {\n                var _coordinates = _slicedToArray(cluster.geometry.coordinates, 2), longitude = _coordinates[0], latitude = _coordinates[1];\n                var _properties = cluster.properties, isCluster = _properties.cluster, pointCount = _properties.point_count;\n                if (isCluster) {\n                    var changeSize = Math.round(pointCount / points.length * 5);\n                    //Can't exceed 40 px\n                    var addSize = Math.min(changeSize * 10, 40);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        lat: latitude,\n                        lng: longitude,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cluster-marker\",\n                            style: {\n                                width: \"\".concat(addSize + changeSize, \"px\"),\n                                height: \"\".concat(addSize + changeSize, \"px\")\n                            },\n                            onClick: function() {\n                                var expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id), 20);\n                                mapRef.current.setZoom(expansionZoom);\n                                mapRef.current.panTo({\n                                    lat: latitude,\n                                    lng: longitude\n                                });\n                            },\n                            children: pointCount\n                        }, void 0, false, {\n                            fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/components/Map.js\",\n                            lineNumber: 87,\n                            columnNumber: 17\n                        }, _this)\n                    }, cluster.id, false, {\n                        fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/components/Map.js\",\n                        lineNumber: 86,\n                        columnNumber: 15\n                    }, _this);\n                } else {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LocationMarker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        lat: latitude,\n                        lng: longitude,\n                        category: cluster.properties.eventCategory[0],\n                        zoom: zoom1\n                    }, \"\".concat(cluster.properties.eventId), false, {\n                        fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/components/Map.js\",\n                        lineNumber: 108,\n                        columnNumber: 15\n                    }, _this);\n                }\n            //   Not a cluster\n            //   if (categoryCheck[+cluster.properties.eventCategory[0]]) {\n            //     return (\n            //       <LocationMarker\n            //         key={`${cluster.properties.eventId}`}\n            //         lat={latitude}\n            //         lng={longitude}\n            //         category={cluster.properties.eventCategory[0]}\n            //         zoom={zoom}\n            //       />\n            //   <Marker\n            //     key={`${cluster.properties.eventId}`}\n            //     lat={latitude}\n            //     lng={longitude}\n            //   >\n            //     <CustomMarker\n            //       key={cluster.properties.eventId}\n            //       id={cluster.properties.eventId}\n            //       title={cluster.properties.eventTitle}\n            //       setCurrentPlaceId={setCurrentPlaceId}\n            //       mobileView={mobileView}\n            //       category={cluster.properties.eventCategory[0]}\n            //       zoom={zoom}\n            //     />\n            //   </Marker>\n            // );\n            //   }\n            })\n        }, void 0, false, {\n            fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/components/Map.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alessandrocarinato/Documents/learning/Maps/giroq-weather-events/components/Map.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Map, \"trf2GLX80/l37YclQmBZjalumFQ=\", false, function() {\n    return [\n        use_supercluster__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Map;\nMap.defaultProps = {\n    center: {\n        lat: 45.76,\n        lng: 11.73\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkIsT0FBM0JPLE9BQU8sQ0FBQ0QsVUFBVSxDQUFDRSxPQUFPLENBQUU7Ozs7NkJBS3BDLENBQ0Y7aUJBQ0g7WUFFRCxrQkFBa0I7WUFDbEIsK0RBQStEO1lBQy9ELGVBQWU7WUFDZix3QkFBd0I7WUFDeEIsZ0RBQWdEO1lBQ2hELHlCQUF5QjtZQUN6QiwwQkFBMEI7WUFDMUIseURBQXlEO1lBQ3pELHNCQUFzQjtZQUN0QixXQUFXO1lBQ1gsWUFBWTtZQUNaLDRDQUE0QztZQUM1QyxxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLE1BQU07WUFDTixvQkFBb0I7WUFDcEIseUNBQXlDO1lBQ3pDLHdDQUF3QztZQUN4Qyw4Q0FBOEM7WUFDOUMsOENBQThDO1lBQzlDLGdDQUFnQztZQUNoQyx1REFBdUQ7WUFDdkQsb0JBQW9CO1lBQ3BCLFNBQVM7WUFDVCxjQUFjO1lBQ2QsS0FBSztZQUNMLE1BQU07YUFDUCxDQUFDOzs7OztnQkFDYTs7Ozs7WUFDYixDQUNOO0NBQ0g7R0EvSVFoQixHQUFHOztRQStCeUJGLHdEQUFlOzs7QUEvQjNDRSxLQUFBQSxHQUFHO0FBaUpaQSxHQUFHLENBQUN3RixZQUFZLEdBQUc7SUFDakJ0RixNQUFNLEVBQUU7UUFDTnVDLEdBQUcsRUFBRSxLQUFLO1FBQ1YwQixHQUFHLEVBQUUsS0FBSztLQUNYO0NBQ0YsQ0FBQztBQUVGLCtEQUFlbkUsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwLmpzP2U1MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdvb2dsZU1hcFJlYWN0IGZyb20gJ2dvb2dsZS1tYXAtcmVhY3QnO1xuaW1wb3J0IHVzZVN1cGVyY2x1c3RlciBmcm9tICd1c2Utc3VwZXJjbHVzdGVyJztcbmltcG9ydCBMb2NhdGlvbk1hcmtlciBmcm9tICcuL0xvY2F0aW9uTWFya2VyJztcblxuZnVuY3Rpb24gTWFwKHByb3BzKSB7XG4gIGNvbnN0IHsgY2VudGVyLCBldmVudERhdGEsIGNhdGVnb3J5Q2hlY2ssIGJvdW5kcywgc2V0Qm91bmRzIH0gPSBwcm9wcztcblxuICBjb25zdCBtYXBSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGUoMTMpO1xuXG4gIGNvbnN0IHBvaW50cyA9IGV2ZW50RGF0YS5tYXAoKGV2ZW50KSA9PiAoe1xuICAgIHR5cGU6ICdGZWF0dXJlJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBjbHVzdGVyOiBmYWxzZSxcbiAgICAgIGV2ZW50SWQ6IGV2ZW50Ll9pZCxcbiAgICAgIGV2ZW50Q2F0ZWdvcnk6IGV2ZW50LmNhdGVnb3J5LFxuICAgICAgZXZlbnRTdGFydERhdGU6IGV2ZW50LnN0YXJ0RGF0ZSxcbiAgICAgIGV2ZW50RW5kRGF0ZTogZXZlbnQuZW5kRGF0ZSxcbiAgICAgIGV2ZW50U3RhcnRUaW1lOiBldmVudC5zdGFydFRpbWUsXG4gICAgICBldmVudEVuZFRpbWU6IGV2ZW50LmVuZFRpbWUsXG4gICAgICBldmVudFRpdGxlOiBldmVudC50aXRsZSxcbiAgICAgIGV2ZW50T3JnYW5pc2VyOiBldmVudC5vcmdhbmlzZXIsXG4gICAgICBldmVudERlc2NyaXB0aW9uOiBldmVudC5kZXNjcmlwdGlvbixcbiAgICAgIGV2ZW50Q2l0eTogZXZlbnQuY2l0eSxcbiAgICAgIGV2ZW50U3RyZWV0OiBldmVudC5zdHJlZXQsXG4gICAgICBldmVudEltYWdlOiBldmVudC5pbWFnZSxcbiAgICAgIGV2ZW50TGF0OiBldmVudC5sYXQsXG4gICAgICBldmVudExvbmc6IGV2ZW50LmxvbmcsXG4gICAgfSxcbiAgICBnZW9tZXRyeToge1xuICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgIGNvb3JkaW5hdGVzOiBbZXZlbnQubG9uZywgZXZlbnQubGF0XSxcbiAgICB9LFxuICB9KSk7XG5cbiAgY29uc3QgeyBjbHVzdGVycywgc3VwZXJjbHVzdGVyIH0gPSB1c2VTdXBlcmNsdXN0ZXIoe1xuICAgIHBvaW50cyxcbiAgICBib3VuZHMsXG4gICAgem9vbSxcbiAgICBvcHRpb25zOiB7IHJhZGl1czogNzUsIG1heFpvb206IDIwIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZU1hcENoYW5nZSA9IChib3VuZHMpID0+IHtcbiAgICBjb25zb2xlLmxvZygnTGEgbWFwcGEgaGEgY2FtYmlhdG8nKTtcbiAgICBjb25zb2xlLmxvZyhib3VuZHMuc3cpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtY29udGFpbmVyXCI+XG4gICAgICA8R29vZ2xlTWFwUmVhY3RcbiAgICAgICAgYm9vdHN0cmFwVVJMS2V5cz17eyBrZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BUElfS0VZIH19XG4gICAgICAgIGNlbnRlcj17Y2VudGVyfVxuICAgICAgICB6b29tPXt6b29tfVxuICAgICAgICB5ZXNJV2FudFRvVXNlR29vZ2xlTWFwQXBpSW50ZXJuYWxzXG4gICAgICAgIC8vIE5leHQgdGhpbmcgd2lsbCBnaXZlIGFjY2VzcyB0byB0aGUgYWN0dWFsIGpzIG1hcCBvYmplY3QgKD8pXG4gICAgICAgIG9uR29vZ2xlQXBpTG9hZGVkPXsoeyBtYXAgfSkgPT4ge1xuICAgICAgICAgIG1hcFJlZi5jdXJyZW50ID0gbWFwO1xuICAgICAgICB9fVxuICAgICAgICBvbkNoYW5nZT17KHsgem9vbSwgYm91bmRzIH0pID0+IHtcbiAgICAgICAgICBzZXRab29tKHpvb20pO1xuICAgICAgICAgIHNldEJvdW5kcyhbXG4gICAgICAgICAgICBib3VuZHMuc3cubGF0LFxuICAgICAgICAgICAgYm91bmRzLm5lLmxhdCxcbiAgICAgICAgICAgIGJvdW5kcy5zdy5sbmcsXG4gICAgICAgICAgICBib3VuZHMubmUubG5nLFxuICAgICAgICAgICAgLy8gYm91bmRzLm53LmxuZyxcbiAgICAgICAgICAgIC8vIGJvdW5kcy5zZS5sYXQsXG4gICAgICAgICAgICAvLyBib3VuZHMuc2UubG5nLFxuICAgICAgICAgICAgLy8gYm91bmRzLm53LmxhdCxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGJvdW5kcyk7XG4gICAgICAgICAgaGFuZGxlTWFwQ2hhbmdlKGJvdW5kcyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjbHVzdGVycy5tYXAoKGNsdXN0ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBbbG9uZ2l0dWRlLCBsYXRpdHVkZV0gPSBjbHVzdGVyLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICAgICAgICAgIGNvbnN0IHsgY2x1c3RlcjogaXNDbHVzdGVyLCBwb2ludF9jb3VudDogcG9pbnRDb3VudCB9ID1cbiAgICAgICAgICAgIGNsdXN0ZXIucHJvcGVydGllcztcblxuICAgICAgICAgIGlmIChpc0NsdXN0ZXIpIHtcbiAgICAgICAgICAgIGxldCBjaGFuZ2VTaXplID0gTWF0aC5yb3VuZCgocG9pbnRDb3VudCAvIHBvaW50cy5sZW5ndGgpICogNSk7XG4gICAgICAgICAgICAvL0Nhbid0IGV4Y2VlZCA0MCBweFxuICAgICAgICAgICAgbGV0IGFkZFNpemUgPSBNYXRoLm1pbihjaGFuZ2VTaXplICogMTAsIDQwKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxzZWN0aW9uIGtleT17Y2x1c3Rlci5pZH0gbGF0PXtsYXRpdHVkZX0gbG5nPXtsb25naXR1ZGV9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsdXN0ZXItbWFya2VyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHthZGRTaXplICsgY2hhbmdlU2l6ZX1weGAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7YWRkU2l6ZSArIGNoYW5nZVNpemV9cHhgLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwYW5zaW9uWm9vbSA9IE1hdGgubWluKFxuICAgICAgICAgICAgICAgICAgICAgIHN1cGVyY2x1c3Rlci5nZXRDbHVzdGVyRXhwYW5zaW9uWm9vbShjbHVzdGVyLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAyMFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBtYXBSZWYuY3VycmVudC5zZXRab29tKGV4cGFuc2lvblpvb20pO1xuICAgICAgICAgICAgICAgICAgICBtYXBSZWYuY3VycmVudC5wYW5Ubyh7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9uZ2l0dWRlIH0pO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cG9pbnRDb3VudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExvY2F0aW9uTWFya2VyXG4gICAgICAgICAgICAgICAga2V5PXtgJHtjbHVzdGVyLnByb3BlcnRpZXMuZXZlbnRJZH1gfVxuICAgICAgICAgICAgICAgIGxhdD17bGF0aXR1ZGV9XG4gICAgICAgICAgICAgICAgbG5nPXtsb25naXR1ZGV9XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NsdXN0ZXIucHJvcGVydGllcy5ldmVudENhdGVnb3J5WzBdfVxuICAgICAgICAgICAgICAgIHpvb209e3pvb219XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vICAgTm90IGEgY2x1c3RlclxuICAgICAgICAgIC8vICAgaWYgKGNhdGVnb3J5Q2hlY2tbK2NsdXN0ZXIucHJvcGVydGllcy5ldmVudENhdGVnb3J5WzBdXSkge1xuICAgICAgICAgIC8vICAgICByZXR1cm4gKFxuICAgICAgICAgIC8vICAgICAgIDxMb2NhdGlvbk1hcmtlclxuICAgICAgICAgIC8vICAgICAgICAga2V5PXtgJHtjbHVzdGVyLnByb3BlcnRpZXMuZXZlbnRJZH1gfVxuICAgICAgICAgIC8vICAgICAgICAgbGF0PXtsYXRpdHVkZX1cbiAgICAgICAgICAvLyAgICAgICAgIGxuZz17bG9uZ2l0dWRlfVxuICAgICAgICAgIC8vICAgICAgICAgY2F0ZWdvcnk9e2NsdXN0ZXIucHJvcGVydGllcy5ldmVudENhdGVnb3J5WzBdfVxuICAgICAgICAgIC8vICAgICAgICAgem9vbT17em9vbX1cbiAgICAgICAgICAvLyAgICAgICAvPlxuICAgICAgICAgIC8vICAgPE1hcmtlclxuICAgICAgICAgIC8vICAgICBrZXk9e2Ake2NsdXN0ZXIucHJvcGVydGllcy5ldmVudElkfWB9XG4gICAgICAgICAgLy8gICAgIGxhdD17bGF0aXR1ZGV9XG4gICAgICAgICAgLy8gICAgIGxuZz17bG9uZ2l0dWRlfVxuICAgICAgICAgIC8vICAgPlxuICAgICAgICAgIC8vICAgICA8Q3VzdG9tTWFya2VyXG4gICAgICAgICAgLy8gICAgICAga2V5PXtjbHVzdGVyLnByb3BlcnRpZXMuZXZlbnRJZH1cbiAgICAgICAgICAvLyAgICAgICBpZD17Y2x1c3Rlci5wcm9wZXJ0aWVzLmV2ZW50SWR9XG4gICAgICAgICAgLy8gICAgICAgdGl0bGU9e2NsdXN0ZXIucHJvcGVydGllcy5ldmVudFRpdGxlfVxuICAgICAgICAgIC8vICAgICAgIHNldEN1cnJlbnRQbGFjZUlkPXtzZXRDdXJyZW50UGxhY2VJZH1cbiAgICAgICAgICAvLyAgICAgICBtb2JpbGVWaWV3PXttb2JpbGVWaWV3fVxuICAgICAgICAgIC8vICAgICAgIGNhdGVnb3J5PXtjbHVzdGVyLnByb3BlcnRpZXMuZXZlbnRDYXRlZ29yeVswXX1cbiAgICAgICAgICAvLyAgICAgICB6b29tPXt6b29tfVxuICAgICAgICAgIC8vICAgICAvPlxuICAgICAgICAgIC8vICAgPC9NYXJrZXI+XG4gICAgICAgICAgLy8gKTtcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L0dvb2dsZU1hcFJlYWN0PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5NYXAuZGVmYXVsdFByb3BzID0ge1xuICBjZW50ZXI6IHtcbiAgICBsYXQ6IDQ1Ljc2LFxuICAgIGxuZzogMTEuNzMsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJHb29nbGVNYXBSZWFjdCIsInVzZVN1cGVyY2x1c3RlciIsIkxvY2F0aW9uTWFya2VyIiwiTWFwIiwicHJvcHMiLCJjZW50ZXIiLCJldmVudERhdGEiLCJjYXRlZ29yeUNoZWNrIiwiYm91bmRzIiwic2V0Qm91bmRzIiwibWFwUmVmIiwiem9vbSIsInNldFpvb20iLCJwb2ludHMiLCJtYXAiLCJldmVudCIsInR5cGUiLCJwcm9wZXJ0aWVzIiwiY2x1c3RlciIsImV2ZW50SWQiLCJfaWQiLCJldmVudENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJldmVudFN0YXJ0RGF0ZSIsInN0YXJ0RGF0ZSIsImV2ZW50RW5kRGF0ZSIsImVuZERhdGUiLCJldmVudFN0YXJ0VGltZSIsInN0YXJ0VGltZSIsImV2ZW50RW5kVGltZSIsImVuZFRpbWUiLCJldmVudFRpdGxlIiwidGl0bGUiLCJldmVudE9yZ2FuaXNlciIsIm9yZ2FuaXNlciIsImV2ZW50RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImV2ZW50Q2l0eSIsImNpdHkiLCJldmVudFN0cmVldCIsInN0cmVldCIsImV2ZW50SW1hZ2UiLCJpbWFnZSIsImV2ZW50TGF0IiwibGF0IiwiZXZlbnRMb25nIiwibG9uZyIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZXMiLCJvcHRpb25zIiwicmFkaXVzIiwibWF4Wm9vbSIsImNsdXN0ZXJzIiwic3VwZXJjbHVzdGVyIiwiaGFuZGxlTWFwQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInN3IiwiZGl2IiwiY2xhc3NOYW1lIiwiYm9vdHN0cmFwVVJMS2V5cyIsImtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQVBJX0tFWSIsInllc0lXYW50VG9Vc2VHb29nbGVNYXBBcGlJbnRlcm5hbHMiLCJvbkdvb2dsZUFwaUxvYWRlZCIsImN1cnJlbnQiLCJvbkNoYW5nZSIsIm5lIiwibG5nIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJpc0NsdXN0ZXIiLCJwb2ludF9jb3VudCIsInBvaW50Q291bnQiLCJjaGFuZ2VTaXplIiwiTWF0aCIsInJvdW5kIiwibGVuZ3RoIiwiYWRkU2l6ZSIsIm1pbiIsInNlY3Rpb24iLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsImV4cGFuc2lvblpvb20iLCJnZXRDbHVzdGVyRXhwYW5zaW9uWm9vbSIsImlkIiwicGFuVG8iLCJkZWZhdWx0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Map.js\n");

/***/ })

});