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
        // 1718440479818
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

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nexpected \":\".\n  ╷\n1 │ $linkColor = #00b399\n  │            ^\n  ╵\n  src/layouts/parts/NavMenu/navMenu.sass 1:12  root stylesheet\n    at tryRunOrWebpackError (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5241:12)\n    at __webpack_require__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5198:18)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5270:20\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5176:43\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5138:16\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5106:15\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5052:8\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3490:6\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:113:20)\n    at ItemCacheFacade.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3489:11\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:99:5\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:81:18)\n    at ItemCacheFacade.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3456:9)\n    at codeGen (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5040:11)\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5070:14\n    at processQueue (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at processTicksAndRejections (node:internal/process/task_queues:77:11)\n    at runNextTicks (node:internal/process/task_queues:64:3)\n    at process.processImmediate (node:internal/timers:449:9)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nexpected \":\".\n  ╷\n1 │ $linkColor = #00b399\n  │            ^\n  ╵\n  src/layouts/parts/NavMenu/navMenu.sass 1:12  root stylesheet\n    at Object.<anonymous> (/Users/admin/Documents/vCode/stones/front/node_modules/css-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/node_modules/sass-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/src/layouts/parts/NavMenu/navMenu.sass:1:7)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10\n    at Hook.eval [as call] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5243:39\n    at tryRunOrWebpackError (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5241:12)\n    at __webpack_require__ (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5198:18)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5270:20\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5176:43\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5138:16\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5106:15\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3527:9)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5052:8\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3490:6\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:113:20)\n    at ItemCacheFacade.store (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3489:11\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:99:5\n    at Hook.eval [as callAsync] (eval at create (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Cache.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Cache.js:81:18)\n    at ItemCacheFacade.get (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:3456:9)\n    at codeGen (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5040:11)\n    at symbolIterator (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/admin/Documents/vCode/stones/front/node_modules/neo-async/async.js:3463:5)\n    at /Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/Compilation.js:5070:14\n    at processQueue (/Users/admin/Documents/vCode/stones/front/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at processTicksAndRejections (node:internal/process/task_queues:77:11)\n    at runNextTicks (node:internal/process/task_queues:64:3)\n    at process.processImmediate (node:internal/timers:449:9)\n\nGenerated code for /Users/admin/Documents/vCode/stones/front/node_modules/css-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/node_modules/sass-loader/dist/cjs.js!/Users/admin/Documents/vCode/stones/front/src/layouts/parts/NavMenu/navMenu.sass\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\":\\\".\\n  ╷\\n1 │ $linkColor = #00b399\\n  │            ^\\n  ╵\\n  src/layouts/parts/NavMenu/navMenu.sass 1:12  root stylesheet\");");

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjViNDE3OGU1OTZmMzg2OGRjN2QyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3N0b25lcy9mcm9udC9zcmMvbGF5b3V0cy9wYXJ0cy9OYXZNZW51L25hdk1lbnUuanN4Iiwid2VicGFjazovL2FwcC8uL3NyYy9sYXlvdXRzL2RlZmF1bHQuc2Fzcz9hNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHJvdXRlc0FycmF5IH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzL3JvdXRlc0RhdGEnO1xuaW1wb3J0ICcuL25hdk1lbnUuc2Fzcyc7XG5jb25zdCBOYXZNZW51ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2LW1lbnVcIj5cbiAgICAgICAgICAgIHtyb3V0ZXNBcnJheS5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbmF2LW1lbnVfaXRlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17aXRlbS5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L25hdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZNZW51OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTg0NDA0Nzk4MThcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==