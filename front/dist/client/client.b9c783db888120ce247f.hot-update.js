self["webpackHotUpdateapp"]("client",{

/***/ "./src/components/combined/authForm/AuthForm.jsx":
/*!*******************************************************!*\
  !*** ./src/components/combined/authForm/AuthForm.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authForm_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authForm.sass */ "./src/components/combined/authForm/authForm.sass");
/* harmony import */ var _components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/primitives/inputText/InputText */ "./src/components/primitives/inputText/InputText.jsx");
/* harmony import */ var _components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_2__);



const AuthForm = props => {
  const [authData, setAuthData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: {
      value: '',
      label: 'Email',
      placeholder: 'Enter your email',
      type: 'text'
    },
    password: {
      value: '',
      label: 'Password',
      placeholder: 'Enter your password',
      type: 'password'
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "auth-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_2___default()), null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthForm);

/***/ }),

/***/ "./src/components/primitives/inputText/InputText.jsx":
/*!***********************************************************!*\
  !*** ./src/components/primitives/inputText/InputText.jsx ***!
  \***********************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/admin/Documents/vCode/stones/front/src/components/primitives/inputText/InputText.jsx: Unexpected token (10:31)\n\n\u001b[0m \u001b[90m  8 |\u001b[39m     \u001b[36mconst\u001b[39m emitInput \u001b[33m=\u001b[39m (e) \u001b[33m=>\u001b[39m {\n \u001b[90m  9 |\u001b[39m         \u001b[36mconst\u001b[39m value \u001b[33m=\u001b[39m e\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39mvalue\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 10 |\u001b[39m         props\u001b[33m.\u001b[39monInput(value\u001b[33m,\u001b[39m e\u001b[33m.\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m    |\u001b[39m                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 11 |\u001b[39m     }\n \u001b[90m 12 |\u001b[39m\n \u001b[90m 13 |\u001b[39m     \u001b[36mreturn\u001b[39m (\u001b[0m\n    at constructor (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:351:19)\n    at JSXParserMixin.raise (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:3233:19)\n    at JSXParserMixin.unexpected (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:3253:16)\n    at JSXParserMixin.parseIdentifierName (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11703:12)\n    at JSXParserMixin.parseIdentifier (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11686:23)\n    at JSXParserMixin.parseMember (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10633:28)\n    at JSXParserMixin.parseSubscript (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10612:21)\n    at JSXParserMixin.parseSubscripts (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10581:19)\n    at JSXParserMixin.parseExprSubscripts (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10572:17)\n    at JSXParserMixin.parseUpdate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10551:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10529:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10383:61)\n    at JSXParserMixin.parseExprOps (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10388:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10365:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10326:21)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10296:39\n    at JSXParserMixin.allowInAnd (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11920:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10296:17)\n    at JSXParserMixin.parseExprListItem (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11680:18)\n    at JSXParserMixin.parseCallExpressionArguments (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10754:22)\n    at JSXParserMixin.parseCoverCallAndAsyncArrowHead (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10671:29)\n    at JSXParserMixin.parseSubscript (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10608:19)\n    at JSXParserMixin.parseSubscripts (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10581:19)\n    at JSXParserMixin.parseExprSubscripts (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10572:17)\n    at JSXParserMixin.parseUpdate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10551:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10529:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10383:61)\n    at JSXParserMixin.parseExprOps (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10388:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10365:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10326:21)\n    at JSXParserMixin.parseExpressionBase (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10280:23)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10276:39\n    at JSXParserMixin.allowInAnd (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11915:16)\n    at JSXParserMixin.parseExpression (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10276:17)\n    at JSXParserMixin.parseStatementContent (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12356:23)\n    at JSXParserMixin.parseStatementLike (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12223:17)\n    at JSXParserMixin.parseStatementListItem (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12203:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12780:61)\n    at JSXParserMixin.parseBlockBody (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12773:10)\n    at JSXParserMixin.parseBlock (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12761:10)\n    at JSXParserMixin.parseFunctionBody (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11600:24)\n    at JSXParserMixin.parseArrowExpression (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11575:10)\n    at JSXParserMixin.parseParenAndDistinguishExpression (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11189:12)\n    at JSXParserMixin.parseExprAtom (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10835:23)\n    at JSXParserMixin.parseExprAtom (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:6781:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10568:23)\n    at JSXParserMixin.parseUpdate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10551:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10529:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10383:61)\n    at JSXParserMixin.parseExprOps (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10388:23)");

/***/ }),

/***/ "./src/components/combined/authForm/authForm.sass":
/*!********************************************************!*\
  !*** ./src/components/combined/authForm/authForm.sass ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1718492076110
        var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
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
  

/***/ }),

/***/ "./src/layouts/default.sass":
/*!**********************************!*\
  !*** ./src/layouts/default.sass ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1718492076106
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
  

/***/ }),

/***/ "./src/layouts/parts/NavMenu/navMenu.sass":
/*!************************************************!*\
  !*** ./src/layouts/parts/NavMenu/navMenu.sass ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1718492076111
        var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
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
  

/***/ }),

/***/ "./src/pages/AuthPage/authPage.sass":
/*!******************************************!*\
  !*** ./src/pages/AuthPage/authPage.sass ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1718492076108
        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmI5Yzc4M2RiODg4MTIwY2UyNDdmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvc3RvbmVzL2Zyb250L3NyYy9jb21wb25lbnRzL2NvbWJpbmVkL2F1dGhGb3JtL0F1dGhGb3JtLmpzeCIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvY29tcG9uZW50cy9jb21iaW5lZC9hdXRoRm9ybS9hdXRoRm9ybS5zYXNzPzVhMDciLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2xheW91dHMvZGVmYXVsdC5zYXNzP2E1ZDYiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2xheW91dHMvcGFydHMvTmF2TWVudS9uYXZNZW51LnNhc3M/YTkwZiIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvcGFnZXMvQXV0aFBhZ2UvYXV0aFBhZ2Uuc2Fzcz9hOWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9hdXRoRm9ybS5zYXNzJztcblxuaW1wb3J0IElucHV0VGV4dCBmcm9tICdAL2NvbXBvbmVudHMvcHJpbWl0aXZlcy9pbnB1dFRleHQvSW5wdXRUZXh0JztcblxuY29uc3QgQXV0aEZvcm0gPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFthdXRoRGF0YSwgc2V0QXV0aERhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgZW1haWwnLFxuICAgICAgICAgICAgdHlwZTogJ3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBwYXNzd29yZCcsXG4gICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F1dGgtZm9ybSc+XG4gICAgICAgICAgICA8SW5wdXRUZXh0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTcxODQ5MjA3NjExMFxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTcxODQ5MjA3NjEwNlxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTcxODQ5MjA3NjExMVxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTcxODQ5MjA3NjEwOFxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9