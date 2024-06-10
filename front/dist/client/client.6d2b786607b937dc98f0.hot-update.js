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
  let router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.createBrowserRouter)(_src_routes_routesData__WEBPACK_IMPORTED_MODULE_3__.routesArray);
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot(react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.RouterProvider, {
    router: router
  }))));
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
        // 1717998188991
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjZkMmI3ODY2MDdiOTM3ZGM5OGYwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFLQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zc3IvY2xpZW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvbGF5b3V0cy9kZWZhdWx0LnNhc3M/YTVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQge1xuICBjcmVhdGVCcm93c2VyUm91dGVyLFxuICBSb3V0ZXJQcm92aWRlcixcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGxvYWRhYmxlUmVhZHkgfSBmcm9tIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyByb3V0ZXNBcnJheSB9IGZyb20gXCIuLi8uLi9zcmMvcm91dGVzL3JvdXRlc0RhdGFcIjtcblxuY29uc3QgcmVuZGVyQXBwID0gKCkgPT4ge1xuXG4gXG5cblxuICBsZXQgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihyb3V0ZXNBcnJheSk7XG4gIFJlYWN0RE9NLmh5ZHJhdGVSb290KFxuICAgICBSZWFjdERPTS5jcmVhdGVSb290KFxuICAgICAgXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIiksXG4gICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gICAgKVxuICApO1xufVxuXG5sb2FkYWJsZVJlYWR5KCgpID0+IHtcbiAgcmVuZGVyQXBwKCk7XG59KTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTc5OTgxODg5OTFcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==