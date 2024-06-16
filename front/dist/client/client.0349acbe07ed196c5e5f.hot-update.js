self["webpackHotUpdateapp"]("client",{

/***/ "./src/components/primitives/inputText/InputText.jsx":
/*!***********************************************************!*\
  !*** ./src/components/primitives/inputText/InputText.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inputText_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputText.sass */ "./src/components/primitives/inputText/inputText.sass");
/* harmony import */ var _inputText_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inputText_sass__WEBPACK_IMPORTED_MODULE_1__);


const InputText = props => {
  const label = props.label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, props.label) : null;
  const emitInput = e => {
    const value = e.target.value;
    props.onInput(value, e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-text"
  }, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: props.type || 'text',
    value: props.value,
    placeholder: props.placeholder || '',
    onInput: emitInput
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputText);

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
        // 1718493597746
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

/***/ "./src/components/primitives/inputText/inputText.sass":
/*!************************************************************!*\
  !*** ./src/components/primitives/inputText/inputText.sass ***!
  \************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nExpected identifier.\n   ╷\n13 │         color: #\n   │                 ^\n   ╵\n  src/components/primitives/inputText/inputText.sass 13:17  root stylesheet\n    at tryRunOrWebpackError (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5241:12)\n    at __webpack_require__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5198:18)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5270:20\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5176:43\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5138:16\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5106:15\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5052:8\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3490:6\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:113:20)\n    at ItemCacheFacade.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3489:11\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:99:5\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:81:18)\n    at ItemCacheFacade.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3456:9)\n    at codeGen (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5040:11)\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5070:14\n    at processQueue (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nExpected identifier.\n   ╷\n13 │         color: #\n   │                 ^\n   ╵\n  src/components/primitives/inputText/inputText.sass 13:17  root stylesheet\n    at Object.<anonymous> (/Users/admin/Documents/vCode/stones/front/node_modules/css-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/node_modules/sass-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/src/components/primitives/inputText/inputText.sass:1:7)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10\n    at Hook.eval [as call] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5243:39\n    at tryRunOrWebpackError (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5241:12)\n    at __webpack_require__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5198:18)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5270:20\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5176:43\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5138:16\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5106:15\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5052:8\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3490:6\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:113:20)\n    at ItemCacheFacade.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3489:11\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:99:5\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:81:18)\n    at ItemCacheFacade.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3456:9)\n    at codeGen (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5040:11)\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5070:14\n    at processQueue (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for /Users/admin/Documents/vCode/stones/front/node_modules/css-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/node_modules/sass-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/src/components/primitives/inputText/inputText.sass\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nExpected identifier.\\n   ╷\\n13 │         color: #\\n   │                 ^\\n   ╵\\n  src/components/primitives/inputText/inputText.sass 13:17  root stylesheet\");");

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
        // 1718493597736
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
        // 1718493597740
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

/***/ "./src/layouts/parts/defaultFooter/defaultFooter.sass":
/*!************************************************************!*\
  !*** ./src/layouts/parts/defaultFooter/defaultFooter.sass ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1718493597739
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
        // 1718493597738
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjAzNDlhY2JlMDdlZDE5NmM1ZTVmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3N0b25lcy9mcm9udC9zcmMvY29tcG9uZW50cy9wcmltaXRpdmVzL2lucHV0VGV4dC9JbnB1dFRleHQuanN4Iiwid2VicGFjazovL2FwcC8uL3NyYy9jb21wb25lbnRzL2NvbWJpbmVkL2F1dGhGb3JtL2F1dGhGb3JtLnNhc3M/NWEwNyIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvbGF5b3V0cy9kZWZhdWx0LnNhc3M/YTVkNiIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvbGF5b3V0cy9wYXJ0cy9OYXZNZW51L25hdk1lbnUuc2Fzcz9hOTBmIiwid2VicGFjazovL2FwcC8uL3NyYy9sYXlvdXRzL3BhcnRzL2RlZmF1bHRGb290ZXIvZGVmYXVsdEZvb3Rlci5zYXNzP2Y4NWQiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL3BhZ2VzL0F1dGhQYWdlL2F1dGhQYWdlLnNhc3M/YTlkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vaW5wdXRUZXh0LnNhc3MnO1xuXG5jb25zdCBJbnB1dFRleHQgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IGxhYmVsID0gcHJvcHMubGFiZWwgPyAoPGxhYmVsPntwcm9wcy5sYWJlbH08L2xhYmVsPikgOiBudWxsO1xuICAgIFxuICAgIGNvbnN0IGVtaXRJbnB1dCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHByb3BzLm9uSW5wdXQodmFsdWUsIGUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtdGV4dFwiPlxuICAgICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPXtwcm9wcy50eXBlIHx8ICd0ZXh0J31cbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyIHx8ICcnfVxuICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2VtaXRJbnB1dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRUZXh0OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTg0OTM1OTc3NDZcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTg0OTM1OTc3MzZcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTg0OTM1OTc3NDBcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTg0OTM1OTc3MzlcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTg0OTM1OTc3MzhcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==