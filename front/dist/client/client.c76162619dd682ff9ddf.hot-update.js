self["webpackHotUpdateapp"]("client",{

/***/ "./src/layouts/parts/NavMenu/navMenu.jsx":
/*!***********************************************!*\
  !*** ./src/layouts/parts/NavMenu/navMenu.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _routes_routesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes/routesData */ "./src/routes/routesData.js");
/* harmony import */ var _navMenu_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navMenu.sass */ "./src/layouts/parts/NavMenu/navMenu.sass");
/* harmony import */ var _navMenu_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navMenu_sass__WEBPACK_IMPORTED_MODULE_2__);




const NavMenu = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "nav-menu"
  }, _routes_routesData__WEBPACK_IMPORTED_MODULE_1__.routesArray.map((item, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
      className: "nav-menu_item",
      to: item.path,
      key: key
    }, item.name);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMenu);

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
        // 1718442033633
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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nExpected expression.\n   ╷\n22 │             background: : lighten($linkColor, 85)\n   │                         ^\n   ╵\n  src/layouts/parts/NavMenu/navMenu.sass 22:25  root stylesheet\n    at tryRunOrWebpackError (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5241:12)\n    at __webpack_require__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5198:18)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5270:20\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5176:43\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5138:16\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5106:15\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5052:8\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3490:6\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:113:20)\n    at ItemCacheFacade.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3489:11\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:99:5\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:81:18)\n    at ItemCacheFacade.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3456:9)\n    at codeGen (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5040:11)\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5070:14\n    at processQueue (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nExpected expression.\n   ╷\n22 │             background: : lighten($linkColor, 85)\n   │                         ^\n   ╵\n  src/layouts/parts/NavMenu/navMenu.sass 22:25  root stylesheet\n    at Object.<anonymous> (/Users/admin/Documents/vCode/stones/front/node_modules/css-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/node_modules/sass-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/src/layouts/parts/NavMenu/navMenu.sass:1:7)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10\n    at Hook.eval [as call] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5243:39\n    at tryRunOrWebpackError (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5241:12)\n    at __webpack_require__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5198:18)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5270:20\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5176:43\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5138:16\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5106:15\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5052:8\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3490:6\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:113:20)\n    at ItemCacheFacade.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3489:11\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:99:5\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:81:18)\n    at ItemCacheFacade.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3456:9)\n    at codeGen (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5040:11)\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5070:14\n    at processQueue (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for /Users/admin/Documents/vCode/stones/front/node_modules/css-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/node_modules/sass-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/src/layouts/parts/NavMenu/navMenu.sass\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nExpected expression.\\n   ╷\\n22 │             background: : lighten($linkColor, 85)\\n   │                         ^\\n   ╵\\n  src/layouts/parts/NavMenu/navMenu.sass 22:25  root stylesheet\");");

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
        // 1718442033634
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmM3NjE2MjYxOWRkNjgyZmY5ZGRmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS9zdG9uZXMvZnJvbnQvc3JjL2xheW91dHMvcGFydHMvTmF2TWVudS9uYXZNZW51LmpzeCIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvbGF5b3V0cy9kZWZhdWx0LnNhc3M/YTVkNiIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvcGFnZXMvQXV0aFBhZ2UvYXV0aFBhZ2Uuc2Fzcz9hOWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHJvdXRlc0FycmF5IH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzL3JvdXRlc0RhdGEnO1xuaW1wb3J0ICcuL25hdk1lbnUuc2Fzcyc7XG5jb25zdCBOYXZNZW51ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2LW1lbnVcIj5cbiAgICAgICAgICAgIHtyb3V0ZXNBcnJheS5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbmF2LW1lbnVfaXRlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17aXRlbS5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9uYXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2TWVudTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzE4NDQyMDMzNjMzXG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzE4NDQyMDMzNjM0XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=