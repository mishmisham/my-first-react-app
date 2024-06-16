"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_combined_authForm_authForm_jsx";
exports.ids = ["src_components_combined_authForm_authForm_jsx"];
exports.modules = {

/***/ "./src/components/combined/authForm/authForm.jsx":
/*!*******************************************************!*\
  !*** ./src/components/combined/authForm/authForm.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/primitives/inputText/InputText */ \"./src/components/primitives/inputText/InputText.jsx\");\n/* harmony import */ var _authForm_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authForm.sass */ \"./src/components/combined/authForm/authForm.sass\");\n\n\n\nconst AuthForm = () => {\n  const [authData, setAuthData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    email: {\n      value: '',\n      label: 'Email',\n      placeholder: 'Enter your email',\n      type: 'text',\n      field: 'email'\n    },\n    password: {\n      value: '',\n      label: 'Password',\n      placeholder: 'Enter your password',\n      type: 'password',\n      field: 'password'\n    }\n  });\n  const onInput = (val, field) => {\n    const fieldObject = authData[field];\n    fieldObject.value = val;\n    setAuthData({\n      ...authData,\n      [field]: fieldObject\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"auth-form\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Please login\"), Object.keys(authData).map((inputKey, key) => {\n    const {\n      value,\n      label,\n      placeholder,\n      type,\n      field\n    } = authData[inputKey];\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      value: value,\n      label: label,\n      placeholder: placeholder,\n      type: type,\n      key: key,\n      onInput: newValue => onInput(newValue, field)\n    });\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthForm);\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/components/combined/authForm/authForm.jsx");

/***/ }),

/***/ "./src/components/primitives/inputText/InputText.jsx":
/*!***********************************************************!*\
  !*** ./src/components/primitives/inputText/InputText.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inputText_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputText.sass */ \"./src/components/primitives/inputText/inputText.sass\");\n\n\nconst InputText = props => {\n  const label = props.label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, props.label) : null;\n  const emitInput = e => {\n    const value = e.target.value;\n    props.onInput(value, e);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-text\"\n  }, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: props.type || 'text',\n    value: props.value,\n    placeholder: props.placeholder || '',\n    onInput: emitInput\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputText);\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/components/primitives/inputText/InputText.jsx");

/***/ }),

/***/ "./src/components/combined/authForm/authForm.sass":
/*!********************************************************!*\
  !*** ./src/components/combined/authForm/authForm.sass ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/components/combined/authForm/authForm.sass");

/***/ }),

/***/ "./src/components/primitives/inputText/inputText.sass":
/*!************************************************************!*\
  !*** ./src/components/primitives/inputText/inputText.sass ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/components/primitives/inputText/inputText.sass");

/***/ })

};
;