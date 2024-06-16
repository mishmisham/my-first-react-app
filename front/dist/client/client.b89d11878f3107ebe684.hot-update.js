self["webpackHotUpdateapp"]("client",{

/***/ "./src/layouts/default.jsx":
/*!*********************************!*\
  !*** ./src/layouts/default.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");
/* harmony import */ var _default_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.sass */ "./src/layouts/default.sass");
/* harmony import */ var _parts_navMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/navMenu */ "./src/layouts/parts/navMenu.jsx");
/* harmony import */ var _parts_navMenu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_navMenu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _websocket_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../websocket/client */ "./websocket/client.js");





const Layout = ({
  children,
  title,
  description
}) => {
  _websocket_client__WEBPACK_IMPORTED_MODULE_3__["default"].addEventListener("open", ev => {
    (0,_websocket_client__WEBPACK_IMPORTED_MODULE_3__.websocketSendEcho)('lorem!');
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_4__.HelmetProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_4__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_parts_navMenu__WEBPACK_IMPORTED_MODULE_2___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/layouts/parts/navMenu.jsx":
/*!***************************************!*\
  !*** ./src/layouts/parts/navMenu.jsx ***!
  \***************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/admin/Documents/vCode/stones/front/src/layouts/parts/navMenu.jsx: Unexpected token (9:16)\n\n\u001b[0m \u001b[90m  7 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m  8 |\u001b[39m             routesArray\u001b[33m.\u001b[39mmap(item \u001b[33m=>\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 |\u001b[39m                 \u001b[36mreturn\u001b[39m (\u001b[33m<\u001b[39m\u001b[33mLink\u001b[39m to\u001b[33m=\u001b[39m{item\u001b[33m.\u001b[39mpath}\u001b[33m>\u001b[39m{item\u001b[33m.\u001b[39mname}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mLink\u001b[39m\u001b[33m>\u001b[39m)\n \u001b[90m    |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 10 |\u001b[39m             })\n \u001b[90m 11 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 12 |\u001b[39m     )\u001b[33m;\u001b[39m\u001b[0m\n    at constructor (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:351:19)\n    at JSXParserMixin.raise (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:3233:19)\n    at JSXParserMixin.unexpected (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:3253:16)\n    at JSXParserMixin.parseExprAtom (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10952:16)\n    at JSXParserMixin.parseExprAtom (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:6781:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10568:23)\n    at JSXParserMixin.parseUpdate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10551:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10529:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10383:61)\n    at JSXParserMixin.parseExprOps (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10388:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10365:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10326:21)\n    at JSXParserMixin.parseExpressionBase (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10280:23)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10276:39\n    at JSXParserMixin.allowInAnd (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11920:12)\n    at JSXParserMixin.parseExpression (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10276:17)\n    at JSXParserMixin.jsxParseExpressionContainer (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:6649:31)\n    at JSXParserMixin.jsxParseElementAt (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:6728:36)\n    at JSXParserMixin.jsxParseElement (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:6766:17)\n    at JSXParserMixin.parseExprAtom (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:6776:19)\n    at JSXParserMixin.parseExprSubscripts (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10568:23)\n    at JSXParserMixin.parseUpdate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10551:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10529:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10383:61)\n    at JSXParserMixin.parseExprOps (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10388:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10365:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10326:21)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10296:39\n    at JSXParserMixin.allowInAnd (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11920:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10296:17)\n    at JSXParserMixin.parseParenAndDistinguishExpression (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11177:28)\n    at JSXParserMixin.parseExprAtom (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10835:23)\n    at JSXParserMixin.parseExprAtom (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:6781:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10568:23)\n    at JSXParserMixin.parseUpdate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10551:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10529:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10383:61)\n    at JSXParserMixin.parseExprOps (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10388:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10365:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10326:21)\n    at JSXParserMixin.parseExpressionBase (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10280:23)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10276:39\n    at JSXParserMixin.allowInAnd (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:11915:16)\n    at JSXParserMixin.parseExpression (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:10276:17)\n    at JSXParserMixin.parseReturnStatement (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12603:28)\n    at JSXParserMixin.parseStatementContent (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12254:21)\n    at JSXParserMixin.parseStatementLike (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12223:17)\n    at JSXParserMixin.parseStatementListItem (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12203:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12780:61)\n    at JSXParserMixin.parseBlockBody (/Users/admin/Documents/vCode/stones/front/node_modules/@babel/parser/lib/index.js:12773:10)");

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
        // 1718440046459
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmI4OWQxMTg3OGYzMTA3ZWJlNjg0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBU0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvc3RvbmVzL2Zyb250L3NyYy9sYXlvdXRzL2RlZmF1bHQuanN4Iiwid2VicGFjazovL2FwcC8uL3NyYy9sYXlvdXRzL2RlZmF1bHQuc2Fzcz9hNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXRQcm92aWRlciwgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJztcbmltcG9ydCAnLi9kZWZhdWx0LnNhc3MnO1xuaW1wb3J0IE5hdk1lbnUgZnJvbSAnLi9wYXJ0cy9uYXZNZW51JztcblxuaW1wb3J0IHdlYnNvY2tldENsaWVudCwgeyB3ZWJzb2NrZXRTZW5kRWNobywgd2Vic29ja2V0U2VuZFBpbmcgfSBmcm9tICcuLi8uLi93ZWJzb2NrZXQvY2xpZW50JztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG5cbiAgd2Vic29ja2V0Q2xpZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsIChldikgPT4ge1xuICAgIHdlYnNvY2tldFNlbmRFY2hvKCdsb3JlbSEnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICA8SGVsbWV0UHJvdmlkZXI+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPC9IZWxtZXQ+XG4gICAgICAgIDxOYXZNZW51IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSGVsbWV0UHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzE4NDQwMDQ2NDU5XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=