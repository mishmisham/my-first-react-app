"use strict";
self["webpackHotUpdateapp"]("client",{

/***/ "./src/pages/AuthPage.jsx":
/*!********************************!*\
  !*** ./src/pages/AuthPage.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/esm/loadable.esm.mjs");


const AuthPage = () => {
  const [authMode, setAuthMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [modeText, setModeText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('auth');
  const changeMode = () => {
    setAuthMode(!authMode);
    const newText = authMode ? 'Auth' : 'Register';
    setModeText(newText);
  };
  const [registerContent, setRegisterContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    name: '',
    password: ''
  });
  const [authContent, setAuthContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: ''
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: changeMode
  }, modeText));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthPage);

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
/* harmony import */ var _pages_AuthPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/AuthPage */ "./src/pages/AuthPage.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/@remix-run/router/dist/router.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/index */ "./src/store/actions/index.js");







const routesArray = [{
  path: "/",
  loader() {
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.json)({
      message: "Welcome to React Router!"
    });
  },
  loadData: ({
    dispatch
  }) => dispatch((0,_store_actions_index__WEBPACK_IMPORTED_MODULE_5__.fetchCurrentUser)()),
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
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.json)({
      message: "Welcome to React Router!"
    });
  },
  Component() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_default__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Second page",
      description: "other page seo description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_PageSecond__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }
}, {
  path: '/auth',
  Component() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_default__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_AuthPage__WEBPACK_IMPORTED_MODULE_4__["default"], null));
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
        // 1718439698490
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjMzZWU2ZTU2NGYyMjIxYjk5Nzc2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3N0b25lcy9mcm9udC9zcmMvcGFnZXMvQXV0aFBhZ2UuanN4IiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS9zdG9uZXMvZnJvbnQvc3JjL3JvdXRlcy9yb3V0ZXNEYXRhLmpzIiwid2VicGFjazovL2FwcC8uL3NyYy9sYXlvdXRzL2RlZmF1bHQuc2Fzcz9hNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xuXG5jb25zdCBBdXRoUGFnZSA9ICgpID0+IHtcbiAgXG4gIGNvbnN0IFthdXRoTW9kZSwgc2V0QXV0aE1vZGVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW21vZGVUZXh0LCBzZXRNb2RlVGV4dF0gPSB1c2VTdGF0ZSgnYXV0aCcpO1xuXG4gIGNvbnN0IGNoYW5nZU1vZGUgPSAoKSA9PiB7XG4gICAgc2V0QXV0aE1vZGUoIWF1dGhNb2RlKTtcbiAgICBjb25zdCBuZXdUZXh0ID0gYXV0aE1vZGUgPyAnQXV0aCcgOiAnUmVnaXN0ZXInO1xuICAgIHNldE1vZGVUZXh0KG5ld1RleHQpO1xuICB9XG5cbiAgY29uc3QgW3JlZ2lzdGVyQ29udGVudCwgc2V0UmVnaXN0ZXJDb250ZW50XSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgbmFtZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnXG4gIH0pO1xuXG4gIGNvbnN0IFthdXRoQ29udGVudCwgc2V0QXV0aENvbnRlbnRdID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJydcbiAgfSk7XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgIDxidXR0b24gb25DbGljaz17Y2hhbmdlTW9kZX0+e21vZGVUZXh0fTwvYnV0dG9uPlxuICAgIFxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aFBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvZGVmYXVsdCc7XG5pbXBvcnQgUGFnZUZpcnN0IGZyb20gXCIuLi9wYWdlcy9QYWdlRmlyc3RcIjtcbmltcG9ydCBQYWdlU2Vjb25kIGZyb20gXCIuLi9wYWdlcy9QYWdlU2Vjb25kXCI7XG5pbXBvcnQgQXV0aFBhZ2UgZnJvbSBcIi4uL3BhZ2VzL0F1dGhQYWdlXCI7XG5pbXBvcnQgeyBqc29uLCB1c2VMb2FkZXJEYXRhIH1mcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgZmV0Y2hDdXJyZW50VXNlciB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnXG5cbmV4cG9ydCBjb25zdCByb3V0ZXNBcnJheSA9IFtcbiAgICB7XG4gICAgICBwYXRoOiBcIi9cIixcbiAgICAgIGxvYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIGpzb24oeyBtZXNzYWdlOiBcIldlbGNvbWUgdG8gUmVhY3QgUm91dGVyIVwiIH0pO1xuICAgICAgfSxcblxuICAgICAgbG9hZERhdGE6ICh7IGRpc3BhdGNoIH0pID0+IGRpc3BhdGNoKGZldGNoQ3VycmVudFVzZXIoKSksXG5cbiAgICAgIENvbXBvbmVudCgpIHtcbiAgICAgICAgLy8gbGV0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgcmV0dXJuIDxMYXlvdXRcbiAgICAgICAgICAgIHRpdGxlPVwiSG9tZXBhZ2VcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249J2hvbWUgcGFnZSBzZW8gZGVzY3JpcHRpb24nXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBhZ2VGaXJzdCAvPlxuICAgICAgICAgIDwvTGF5b3V0PjtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL3NlY29uZFwiLFxuXG4gICAgICAgIGxvYWRlcigpIHtcbiAgICAgICAgICByZXR1cm4ganNvbih7IG1lc3NhZ2U6IFwiV2VsY29tZSB0byBSZWFjdCBSb3V0ZXIhXCIgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgQ29tcG9uZW50KCkge1xuICAgICAgICAgIHJldHVybiA8TGF5b3V0XG4gICAgICAgICAgICAgIHRpdGxlPVwiU2Vjb25kIHBhZ2VcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj0nb3RoZXIgcGFnZSBzZW8gZGVzY3JpcHRpb24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQYWdlU2Vjb25kIC8+XG4gICAgICAgICAgICA8L0xheW91dD47XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2F1dGgnLFxuICAgICAgQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gPExheW91dD5cbiAgICAgICAgICA8QXV0aFBhZ2UgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICB9XG4gICAgfVxuXTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTg0Mzk2OTg0OTBcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==