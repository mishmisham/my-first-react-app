"use strict";
self["webpackHotUpdateapp"]("client",{

/***/ "./src/pages/PageFirst.jsx":
/*!*********************************!*\
  !*** ./src/pages/PageFirst.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/esm/loadable.esm.mjs");



const PageFirst = () => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('componentA');
  const refreshMode = () => {
    console.log('click');
    const newMode = mode === 'componentA' ? 'componentB' : 'componentA';
    setMode(newMode);
  };
  let DynamiComponent = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
    resolved: {},
    chunkName() {
      return "components-componentA";
    },
    isReady(props) {
      const key = this.resolve(props);
      if (this.resolved[key] !== true) {
        return false;
      }
      if (true) {
        return !!__webpack_require__.m[key];
      }
      return false;
    },
    importAsync: () => __webpack_require__.e(/*! import() | components-componentA */ "components-componentA").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentA */ "./src/components/componentA.jsx")),
    requireAsync(props) {
      const key = this.resolve(props);
      this.resolved[key] = false;
      return this.importAsync(props).then(resolved => {
        this.resolved[key] = true;
        return resolved;
      });
    },
    requireSync(props) {
      const id = this.resolve(props);
      if (true) {
        return __webpack_require__(id);
      }
      return eval('module.require')(id);
    },
    resolve() {
      if (true) {
        return /*require.resolve*/(/*! ../components/componentA */ "./src/components/componentA.jsx");
      }
      return eval('require.resolve')("../components/componentA");
    }
  });
  if (mode === 'componentA') {
    DynamiComponent = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
      resolved: {},
      chunkName() {
        return "components-componentB";
      },
      isReady(props) {
        const key = this.resolve(props);
        if (this.resolved[key] !== true) {
          return false;
        }
        if (true) {
          return !!__webpack_require__.m[key];
        }
        return false;
      },
      importAsync: () => __webpack_require__.e(/*! import() | components-componentB */ "components-componentB").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentB */ "./src/components/componentB.jsx")),
      requireAsync(props) {
        const key = this.resolve(props);
        this.resolved[key] = false;
        return this.importAsync(props).then(resolved => {
          this.resolved[key] = true;
          return resolved;
        });
      },
      requireSync(props) {
        const id = this.resolve(props);
        if (true) {
          return __webpack_require__(id);
        }
        return eval('module.require')(id);
      },
      resolve() {
        if (true) {
          return /*require.resolve*/(/*! ../components/componentB */ "./src/components/componentB.jsx");
        }
        return eval('require.resolve')("../components/componentB");
      }
    });
  } else {
    DynamiComponent = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
      resolved: {},
      chunkName() {
        return "components-componentA";
      },
      isReady(props) {
        const key = this.resolve(props);
        if (this.resolved[key] !== true) {
          return false;
        }
        if (true) {
          return !!__webpack_require__.m[key];
        }
        return false;
      },
      importAsync: () => __webpack_require__.e(/*! import() | components-componentA */ "components-componentA").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentA */ "./src/components/componentA.jsx")),
      requireAsync(props) {
        const key = this.resolve(props);
        this.resolved[key] = false;
        return this.importAsync(props).then(resolved => {
          this.resolved[key] = true;
          return resolved;
        });
      },
      requireSync(props) {
        const id = this.resolve(props);
        if (true) {
          return __webpack_require__(id);
        }
        return eval('module.require')(id);
      },
      resolve() {
        if (true) {
          return /*require.resolve*/(/*! ../components/componentA */ "./src/components/componentA.jsx");
        }
        return eval('require.resolve')("../components/componentA");
      }
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-color"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/second"
  }, "second"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: refreshMode
  }, "Change"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DynamiComponent, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageFirst);

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
        // 1717994185610
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjRkMjFkNDQ0ZDljMWFkYTljMjRkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L3NyYy9wYWdlcy9QYWdlRmlyc3QuanN4Iiwid2VicGFjazovL2FwcC8uL3NyYy9sYXlvdXRzL2RlZmF1bHQuc2Fzcz9hNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xuXG5jb25zdCBQYWdlRmlyc3QgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgnY29tcG9uZW50QScpO1xuICBcbiAgY29uc3QgcmVmcmVzaE1vZGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrJylcbiAgICBjb25zdCBuZXdNb2RlID0gbW9kZSA9PT0gJ2NvbXBvbmVudEEnID8gJ2NvbXBvbmVudEInIDogJ2NvbXBvbmVudEEnO1xuICAgIHNldE1vZGUobmV3TW9kZSlcbiAgfVxuXG4gIGxldCBEeW5hbWlDb21wb25lbnQgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50QScpKVxuICBpZiAobW9kZSA9PT0gJ2NvbXBvbmVudEEnKSB7XG4gICAgRHluYW1pQ29tcG9uZW50ID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL2NvbXBvbmVudEInKSk7XG4gIH0gZWxzZSB7XG4gICAgRHluYW1pQ29tcG9uZW50ID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL2NvbXBvbmVudEEnKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1jb2xvcic+XG4gICAgICA8TGluayB0bz1cIi9zZWNvbmRcIj5zZWNvbmQ8L0xpbms+XG4gICAgICA8YnIvPlxuICAgICAgPHNwYW4gb25DbGljaz17cmVmcmVzaE1vZGV9PkNoYW5nZTwvc3Bhbj5cbiAgICAgIDxEeW5hbWlDb21wb25lbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VGaXJzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTc5OTQxODU2MTBcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==