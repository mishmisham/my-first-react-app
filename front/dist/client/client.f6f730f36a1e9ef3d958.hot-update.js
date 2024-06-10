"use strict";
self["webpackHotUpdateapp"]("client",{

/***/ "./ssr/client/index.jsx":
/*!******************************!*\
  !*** ./ssr/client/index.jsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/esm/loadable.esm.mjs");
/* harmony import */ var _src_routes_routesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/routes/routesData */ "./src/routes/routesData.js");





const renderApp = () => {
  window.addEventListener("DOMContentLoaded", function (e) {
    let router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.createBrowserRouter)(_src_routes_routesData__WEBPACK_IMPORTED_MODULE_3__.routesArray);
    react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot(document.getElementById("root"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.RouterProvider, {
      router: router
    }));
  });
};
(0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__.loadableReady)(() => {
  renderApp();
});
if (true) {
  module.hot.accept();
}

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
        // 1717994953102
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmY2ZjczMGYzNmExZTllZjNkOTU4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvc3NyL2NsaWVudC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2xheW91dHMvZGVmYXVsdC5zYXNzP2E1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlQnJvd3NlclJvdXRlcixcbiAgUm91dGVyUHJvdmlkZXIsXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBsb2FkYWJsZVJlYWR5IH0gZnJvbSBcIkBsb2FkYWJsZS9jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgcm91dGVzQXJyYXkgfSBmcm9tIFwiLi4vLi4vc3JjL3JvdXRlcy9yb3V0ZXNEYXRhXCI7XG5cbmNvbnN0IHJlbmRlckFwcCA9ICgpID0+IHtcbiAgXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKHJvdXRlc0FycmF5KTtcbiAgICBSZWFjdERPTS5oeWRyYXRlUm9vdChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSxcbiAgICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgICApO1xuICB9KTtcbn1cblxubG9hZGFibGVSZWFkeSgoKSA9PiB7XG4gIHJlbmRlckFwcCgpO1xufSk7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzE3OTk0OTUzMTAyXG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=