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
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");
/* harmony import */ var _default_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.sass */ "./src/layouts/default.sass");



const Layout = ({
  children,
  title,
  description
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.HelmetProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
  name: "description",
  content: description
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, children)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/routes/routesData.js":
/*!**********************************!*\
  !*** ./src/routes/routesData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routesArray: () => (/* binding */ routesArray)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/default */ "./src/layouts/default.jsx");
/* harmony import */ var _pages_PageFirst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/PageFirst */ "./src/pages/PageFirst.jsx");
/* harmony import */ var _pages_PageSecond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/PageSecond */ "./src/pages/PageSecond.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/@remix-run/router/dist/router.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/index */ "./src/store/actions/index.js");






const routesArray = [{
  path: "/",
  loader() {
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.json)({
      message: "Welcome to React Router!"
    });
  },
  loadData: ({
    dispatch
  }) => dispatch((0,_store_actions_index__WEBPACK_IMPORTED_MODULE_4__.fetchCurrentUser)()),
  Component() {
    // let data = useLoaderData();
    // console.log(data)

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_default__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Homepage",
      description: "home page seo description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_PageFirst__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }
}, {
  path: "/second",
  loader() {
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.json)({
      message: "Welcome to React Router!"
    });
  },
  Component() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_default__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Second page",
      description: "other page seo description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_PageSecond__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }
}];

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
        // 1717955332814
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50Ljg0Njc4MzJlZjE4Njc2N2Q2ZWI5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L3NyYy9sYXlvdXRzL2RlZmF1bHQuanN4IiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zcmMvcm91dGVzL3JvdXRlc0RhdGEuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2xheW91dHMvZGVmYXVsdC5zYXNzP2E1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldFByb3ZpZGVyLCBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQtYXN5bmMnO1xuXG5pbXBvcnQgJy4vZGVmYXVsdC5zYXNzJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiAoXG4gICAgPD5cbiAgICAgPEhlbG1ldFByb3ZpZGVyPlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0hlbG1ldFByb3ZpZGVyPlxuICAgIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9kZWZhdWx0JztcbmltcG9ydCBQYWdlRmlyc3QgZnJvbSBcIi4uL3BhZ2VzL1BhZ2VGaXJzdFwiO1xuaW1wb3J0IFBhZ2VTZWNvbmQgZnJvbSBcIi4uL3BhZ2VzL1BhZ2VTZWNvbmRcIjtcbmltcG9ydCB7IGpzb24sIHVzZUxvYWRlckRhdGEgfWZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBmZXRjaEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCdcblxuZXhwb3J0IGNvbnN0IHJvdXRlc0FycmF5ID0gW1xuICAgIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgbG9hZGVyKCkge1xuICAgICAgICByZXR1cm4ganNvbih7IG1lc3NhZ2U6IFwiV2VsY29tZSB0byBSZWFjdCBSb3V0ZXIhXCIgfSk7XG4gICAgICB9LFxuXG4gICAgICBsb2FkRGF0YTogKHsgZGlzcGF0Y2ggfSkgPT4gZGlzcGF0Y2goZmV0Y2hDdXJyZW50VXNlcigpKSxcblxuICAgICAgQ29tcG9uZW50KCkge1xuICAgICAgICAvLyBsZXQgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICByZXR1cm4gPExheW91dFxuICAgICAgICAgICAgdGl0bGU9XCJIb21lcGFnZVwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj0naG9tZSBwYWdlIHNlbyBkZXNjcmlwdGlvbidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFnZUZpcnN0IC8+XG4gICAgICAgICAgPC9MYXlvdXQ+O1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvc2Vjb25kXCIsXG5cbiAgICAgICAgbG9hZGVyKCkge1xuICAgICAgICAgIHJldHVybiBqc29uKHsgbWVzc2FnZTogXCJXZWxjb21lIHRvIFJlYWN0IFJvdXRlciFcIiB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBDb21wb25lbnQoKSB7XG4gICAgICAgICAgcmV0dXJuIDxMYXlvdXRcbiAgICAgICAgICAgICAgdGl0bGU9XCJTZWNvbmQgcGFnZVwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPSdvdGhlciBwYWdlIHNlbyBkZXNjcmlwdGlvbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBhZ2VTZWNvbmQgLz5cbiAgICAgICAgICAgIDwvTGF5b3V0PjtcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTc5NTUzMzI4MTRcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==