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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react_photo_album__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-photo-album */ \"./node_modules/react-photo-album/dist/index.esm.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_images_DSC_0006_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/DSC_0006.jpg */ \"./public/images/DSC_0006.jpg\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\nvar photos = [\n    {\n        src: \"/images/DSC_0001.jpg\",\n        width: 3872,\n        height: 2592\n    },\n    {\n        src: \"/images/DSC_0006.jpg\",\n        width: 2592,\n        height: 2592\n    },\n    {\n        src: \"/images/DSC_0009.jpg\",\n        width: 2592,\n        height: 3872\n    },\n    {\n        src: \"/images/DSC_0022.jpg\",\n        width: 3872,\n        height: 2592\n    },\n    {\n        src: \"/images/DSC_0029.jpg\",\n        width: 2592,\n        height: 3872\n    },\n    {\n        src: \"/images/DSC_0051.jpg\",\n        width: 2592,\n        height: 2592\n    },\n    {\n        src: \"/images/DSC_0078.jpg\",\n        width: 2592,\n        height: 3872\n    }\n];\nvar Index = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(Index, _Component);\n    var _super = _createSuper(Index);\n    function Index(props) {\n        _classCallCheck(this, Index);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            photoCols: 1\n        };\n        _this.updateCols = _this.updateCols.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(Index, [\n        {\n            key: \"updateCols\",\n            value: function updateCols() {\n                if (window.matchMedia(\"(min-width: 481px)\").matches) {\n                    if (window.matchMedia(\"(min-width: 769px)\").matches) {\n                        this.setState(function() {\n                            return {\n                                photoCols: 3\n                            };\n                        });\n                    } else {\n                        this.setState(function() {\n                            return {\n                                photoCols: 2\n                            };\n                        });\n                    }\n                }\n            }\n        },\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                this.updateCols();\n            }\n        },\n        {\n            key: \"componentDidUpdate\",\n            value: function componentDidUpdate(prevState) {}\n        },\n        {\n            key: \"componentWillUnmount\",\n            value: function componentWillUnmount() {\n                window.matchMedia(\"(min-width: 481px)\").removeEventListener(\"change\", this.updateCols());\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: \"Natasha Photography\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kristin\\\\NatashaPhoto\\\\pages\\\\index.js\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kristin\\\\NatashaPhoto\\\\pages\\\\index.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().gallery),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_photo_album__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                layout: \"masonry\",\n                                photos: photos,\n                                columns: this.state.photoCols.toString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Kristin\\\\NatashaPhoto\\\\pages\\\\index.js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kristin\\\\NatashaPhoto\\\\pages\\\\index.js\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_8___default().about),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"About Me\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kristin\\\\NatashaPhoto\\\\pages\\\\index.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"This is an example bio! Hi, I'm Natasha Navarrete, and I'm a family and event photographer based in Chicago, IL. Write some other stuff about being awesome and having a dog because people like dog owners. Please click \\\"Contact\\\" in the menu above to get in touch with me!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Kristin\\\\NatashaPhoto\\\\pages\\\\index.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Kristin\\\\NatashaPhoto\\\\pages\\\\index.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true);\n            }\n        }\n    ]);\n    return Index;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQ0YseURBQVU7Z0NBQUM0QixNQUFNLEVBQUMsU0FBUztnQ0FBQ3hCLE1BQU0sRUFBRUEsTUFBTTtnQ0FBRXlCLE9BQU8sRUFBRSxJQUFJLENBQUNuQixLQUFLLENBQUNDLFNBQVMsQ0FBQ21CLFFBQVEsRUFBRTs7Ozs7b0NBQUk7Ozs7O2dDQUNuRjtzQ0FFViw4REFBQ0wsU0FBTzs0QkFBQ0MsU0FBUyxFQUFFeEIsd0VBQVk7OzhDQUM1Qiw4REFBQzhCLElBQUU7OENBQUMsVUFBUTs7Ozs7d0NBQUs7OENBQ2pCLDhEQUFDQyxHQUFDOzhDQUFDLGtSQUE4UTs7Ozs7d0NBQUk7Ozs7OztnQ0FDL1E7O2dDQUNYLENBQ0Y7YUFDSjs7OztDQUNKLENBckRtQnhDLHdEQUFlLENBcURsQztBQUVELCtEQUFlZSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7ZmFCYXJzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgUGhvdG9BbGJ1bSBmcm9tICdyZWFjdC1waG90by1hbGJ1bSdcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgcGljMiBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL0RTQ18wMDA2LmpwZydcclxuXHJcbmNvbnN0IHBob3RvcyA9IFtcclxuICAgIHtcclxuICAgICAgICBzcmM6IFwiL2ltYWdlcy9EU0NfMDAwMS5qcGdcIixcclxuICAgICAgICB3aWR0aDogMzg3MixcclxuICAgICAgICBoZWlnaHQ6IDI1OTJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9pbWFnZXMvRFNDXzAwMDYuanBnXCIsXHJcbiAgICAgICAgd2lkdGg6IDI1OTIsXHJcbiAgICAgICAgaGVpZ2h0OiAyNTkyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNyYzogXCIvaW1hZ2VzL0RTQ18wMDA5LmpwZ1wiLFxyXG4gICAgICAgIHdpZHRoOiAyNTkyLFxyXG4gICAgICAgIGhlaWdodDogMzg3MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzcmM6IFwiL2ltYWdlcy9EU0NfMDAyMi5qcGdcIixcclxuICAgICAgICB3aWR0aDogMzg3MixcclxuICAgICAgICBoZWlnaHQ6IDI1OTJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiBcIi9pbWFnZXMvRFNDXzAwMjkuanBnXCIsXHJcbiAgICAgICAgd2lkdGg6IDI1OTIsXHJcbiAgICAgICAgaGVpZ2h0OiAzODcyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNyYzogXCIvaW1hZ2VzL0RTQ18wMDUxLmpwZ1wiLFxyXG4gICAgICAgIHdpZHRoOiAyNTkyLFxyXG4gICAgICAgIGhlaWdodDogMjU5MlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzcmM6IFwiL2ltYWdlcy9EU0NfMDA3OC5qcGdcIixcclxuICAgICAgICB3aWR0aDogMjU5MixcclxuICAgICAgICBoZWlnaHQ6IDM4NzJcclxuICAgIH1cclxuXTtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBob3RvQ29sczogMSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb2xzID0gdGhpcy51cGRhdGVDb2xzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVDb2xzKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDQ4MXB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDc2OXB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9Db2xzOiAzXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKCk9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIHBob3RvQ29sczogMlxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29scygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2U3RhdGUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDQ4MXB4KVwiKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMudXBkYXRlQ29scygpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5OYXRhc2hhIFBob3RvZ3JhcGh5PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeX0+XHJcbiAgICAgICAgICAgICAgICA8UGhvdG9BbGJ1bSBsYXlvdXQ9XCJtYXNvbnJ5XCIgcGhvdG9zPXtwaG90b3N9IGNvbHVtbnM9e3RoaXMuc3RhdGUucGhvdG9Db2xzLnRvU3RyaW5nKCl9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFib3V0fT5cclxuICAgICAgICAgICAgICAgIDxoMT5BYm91dCBNZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIGFuIGV4YW1wbGUgYmlvISBIaSwgSSdtIE5hdGFzaGEgTmF2YXJyZXRlLCBhbmQgSSdtIGEgZmFtaWx5IGFuZCBldmVudCBwaG90b2dyYXBoZXIgYmFzZWQgaW4gQ2hpY2FnbywgSUwuIFdyaXRlIHNvbWUgb3RoZXIgc3R1ZmYgYWJvdXQgYmVpbmcgYXdlc29tZSBhbmQgaGF2aW5nIGEgZG9nIGJlY2F1c2UgcGVvcGxlIGxpa2UgZG9nIG93bmVycy4gUGxlYXNlIGNsaWNrIFwiQ29udGFjdFwiIGluIHRoZSBtZW51IGFib3ZlIHRvIGdldCBpbiB0b3VjaCB3aXRoIG1lITwvcD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsIkltYWdlIiwiSGVhZCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQmFycyIsIlBob3RvQWxidW0iLCJMYXlvdXQiLCJzdHlsZXMiLCJwaWMyIiwicGhvdG9zIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJJbmRleCIsInByb3BzIiwic3RhdGUiLCJwaG90b0NvbHMiLCJ1cGRhdGVDb2xzIiwiYmluZCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZTdGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsInRpdGxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImdhbGxlcnkiLCJsYXlvdXQiLCJjb2x1bW5zIiwidG9TdHJpbmciLCJhYm91dCIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});