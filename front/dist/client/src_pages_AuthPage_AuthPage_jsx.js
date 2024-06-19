"use strict";
exports.id = "src_pages_AuthPage_AuthPage_jsx";
exports.ids = ["src_pages_AuthPage_AuthPage_jsx"];
exports.modules = {

/***/ "./src/pages/AuthPage/AuthPage.jsx":
/*!*****************************************!*\
  !*** ./src/pages/AuthPage/AuthPage.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/primitives/Preloader/preloader */ "./src/components/primitives/Preloader/preloader.jsx");


const AuthPage = () => {
  const LoginForms = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_combined_login_LoginForms_jsx").then(__webpack_require__.bind(__webpack_require__, /*! @/components/combined/login/LoginForms */ "./src/components/combined/login/LoginForms.jsx")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      height: "300px"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoginForms, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthPage);

/***/ })

};
;
//# sourceMappingURL=src_pages_AuthPage_AuthPage_jsx.js.map