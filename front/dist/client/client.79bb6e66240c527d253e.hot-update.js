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
/* harmony import */ var _default_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.sass */ "./src/layouts/default.sass");



const Layout = ({
  children,
  title,
  description,
  assetMap
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", {
    lang: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("base", {
    href: "/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charset: "UTF-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/client/favicon.ico"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, children)));
};
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
        // 1717953684744
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50Ljc5YmI2ZTY2MjQwYzUyN2QyNTNlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zcmMvbGF5b3V0cy9kZWZhdWx0LmpzeCIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvc3JjL3JvdXRlcy9yb3V0ZXNEYXRhLmpzIiwid2VicGFjazovL2FwcC8uL3NyYy9sYXlvdXRzL2RlZmF1bHQuc2Fzcz9hNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXRQcm92aWRlciwgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJztcblxuaW1wb3J0ICcuL2RlZmF1bHQuc2Fzcyc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZGVzY3JpcHRpb24sIGFzc2V0TWFwIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8YmFzZSBocmVmPVwiL1wiIC8+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL2NsaWVudC9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvZGVmYXVsdCc7XG5pbXBvcnQgUGFnZUZpcnN0IGZyb20gXCIuLi9wYWdlcy9QYWdlRmlyc3RcIjtcbmltcG9ydCBQYWdlU2Vjb25kIGZyb20gXCIuLi9wYWdlcy9QYWdlU2Vjb25kXCI7XG5pbXBvcnQgeyBqc29uLCB1c2VMb2FkZXJEYXRhIH1mcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgZmV0Y2hDdXJyZW50VXNlciB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnXG5cbmV4cG9ydCBjb25zdCByb3V0ZXNBcnJheSA9IFtcbiAgICB7XG4gICAgICBwYXRoOiBcIi9cIixcbiAgICAgIGxvYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIGpzb24oeyBtZXNzYWdlOiBcIldlbGNvbWUgdG8gUmVhY3QgUm91dGVyIVwiIH0pO1xuICAgICAgfSxcblxuICAgICAgbG9hZERhdGE6ICh7IGRpc3BhdGNoIH0pID0+IGRpc3BhdGNoKGZldGNoQ3VycmVudFVzZXIoKSksXG5cbiAgICAgIENvbXBvbmVudCgpIHtcbiAgICAgICAgLy8gbGV0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgcmV0dXJuIDxMYXlvdXRcbiAgICAgICAgICAgIHRpdGxlPVwiSG9tZXBhZ2VcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249J2hvbWUgcGFnZSBzZW8gZGVzY3JpcHRpb24nXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBhZ2VGaXJzdCAvPlxuICAgICAgICAgIDwvTGF5b3V0PjtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL3NlY29uZFwiLFxuXG4gICAgICAgIGxvYWRlcigpIHtcbiAgICAgICAgICByZXR1cm4ganNvbih7IG1lc3NhZ2U6IFwiV2VsY29tZSB0byBSZWFjdCBSb3V0ZXIhXCIgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgQ29tcG9uZW50KCkge1xuICAgICAgICAgIHJldHVybiA8TGF5b3V0XG4gICAgICAgICAgICAgIHRpdGxlPVwiU2Vjb25kIHBhZ2VcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj0nb3RoZXIgcGFnZSBzZW8gZGVzY3JpcHRpb24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQYWdlU2Vjb25kIC8+XG4gICAgICAgICAgICA8L0xheW91dD47XG4gICAgICAgIH0sXG4gICAgfSxcbl07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzE3OTUzNjg0NzQ0XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=