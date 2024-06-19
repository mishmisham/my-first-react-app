"use strict";
(Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] || []).push([[7],{

/***/ "./src/components/combined/login/LoginForms.jsx":
/*!******************************************************!*\
  !*** ./src/components/combined/login/LoginForms.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/primitives/Preloader/preloader */ "./src/components/primitives/Preloader/preloader.jsx");
/* harmony import */ var _loginFormsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginFormsContext */ "./src/components/combined/login/loginFormsContext.js");
/* harmony import */ var _loginForms_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginForms.sass */ "./src/components/combined/login/loginForms.sass");




const LoginForms = () => {
  const [authMode, setAuthMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const CurrentForm = authMode ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(5)]).then(__webpack_require__.bind(__webpack_require__, /*! ./forms/authForm/authForm */ "./src/components/combined/login/forms/authForm/authForm.jsx"))) : /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(6)]).then(__webpack_require__.bind(__webpack_require__, /*! ./forms/registerForm/registerForm */ "./src/components/combined/login/forms/registerForm/registerForm.jsx")));
  const changeMode = () => {
    const newMode = !authMode;
    setAuthMode(newMode);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      height: "300px"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_loginFormsContext__WEBPACK_IMPORTED_MODULE_2__.LoginFormsContext.Provider, {
    value: authMode
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CurrentForm, {
    onSetAuth: changeMode
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "login-forms_mode-btn btn",
    onClick: changeMode
  }, authMode ? 'Create account' : 'Go to login'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForms);

/***/ }),

/***/ "./src/components/combined/login/loginFormsContext.js":
/*!************************************************************!*\
  !*** ./src/components/combined/login/loginFormsContext.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginFormsContext: () => (/* binding */ LoginFormsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LoginFormsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  authMode: true,
  changeMode: () => {}
});

/***/ }),

/***/ "./src/components/combined/login/loginForms.sass":
/*!*******************************************************!*\
  !*** ./src/components/combined/login/loginForms.sass ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=7.js.map