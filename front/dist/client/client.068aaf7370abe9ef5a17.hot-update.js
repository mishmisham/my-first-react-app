"use strict";
self["webpackHotUpdateapp"]("client",{

/***/ "./src/layouts/default.jsx":
/*!*********************************!*\
  !*** ./src/layouts/default.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");
/* harmony import */ var _default_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.sass */ "./src/layouts/default.sass");
/* harmony import */ var _websocket_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../websocket/client */ "./websocket/client.js");





const Layout = ({
  children,
  title,
  description
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (document && window) {
      (0,_websocket_client__WEBPACK_IMPORTED_MODULE_2__.websocketSendEcho)('lorem!');
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__.HelmetProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/layouts/default.sass":
/*!**********************************!*\
  !*** ./src/layouts/default.sass ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1717999452625
        var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjA2OGFhZjczNzBhYmU5ZWY1YTE3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFhQTtBQUVBOzs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvc3JjL2xheW91dHMvZGVmYXVsdC5qc3giLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2xheW91dHMvZGVmYXVsdC5zYXNzP2E1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldFByb3ZpZGVyLCBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQtYXN5bmMnO1xuaW1wb3J0ICcuL2RlZmF1bHQuc2Fzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB3ZWJzb2NrZXRDbGllbnQsIHsgd2Vic29ja2V0U2VuZEVjaG8sIHdlYnNvY2tldFNlbmRQaW5nIH0gZnJvbSAnLi4vLi4vd2Vic29ja2V0L2NsaWVudCc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50ICYmIHdpbmRvdykge1xuICAgICAgd2Vic29ja2V0U2VuZEVjaG8oJ2xvcmVtIScpO1xuICAgIH1cbiAgIFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgIDxIZWxtZXRQcm92aWRlcj5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSGVsbWV0UHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzE3OTk5NDUyNjI1XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=