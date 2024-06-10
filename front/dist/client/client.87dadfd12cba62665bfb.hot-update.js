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
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const refreshMode = () => {
    setMode(!mode);
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
  if (mode) {
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
  }, mode ? 'da' : 'net'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DynamiComponent, null));
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
        // 1717988392465
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50Ljg3ZGFkZmQxMmNiYTYyNjY1YmZiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvc3JjL3BhZ2VzL1BhZ2VGaXJzdC5qc3giLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2xheW91dHMvZGVmYXVsdC5zYXNzP2E1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGxvYWRhYmxlIGZyb20gJ0Bsb2FkYWJsZS9jb21wb25lbnQnXG5cblxuY29uc3QgUGFnZUZpcnN0ID0gKCkgPT4ge1xuICBcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgY29uc3QgcmVmcmVzaE1vZGUgPSAoKSA9PiB7XG4gICAgc2V0TW9kZSghbW9kZSlcbiAgfVxuXG4gIGxldCBEeW5hbWlDb21wb25lbnQgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50QScpKVxuICBpZiAobW9kZSkge1xuICAgIER5bmFtaUNvbXBvbmVudCA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21wb25lbnRCJykpO1xuICB9IGVsc2Uge1xuICAgIER5bmFtaUNvbXBvbmVudCA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21wb25lbnRBJykpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctY29sb3InPlxuICAgICAgPExpbmsgdG89XCIvc2Vjb25kXCI+c2Vjb25kPC9MaW5rPlxuICAgICAgPGJyLz5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9e3JlZnJlc2hNb2RlfT57bW9kZSA/ICdkYScgOiAnbmV0J308L3NwYW4+XG4gICAgICA8RHluYW1pQ29tcG9uZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlRmlyc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzE3OTg4MzkyNDY1XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=