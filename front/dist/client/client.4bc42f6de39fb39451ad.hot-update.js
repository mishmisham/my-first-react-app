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
  const [params, setParams] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    mode: 'componentA',
    text: 'Component A'
  });
  const refreshMode = () => {
    const {
      mode
    } = params;
    params.mode = mode === 'componentA' ? 'componentB' : 'componentA';
    params.text = mode === 'componentA' ? 'Component B' : 'Component A';
    componentA(params);
  };
  const DynamiComponent = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
    resolved: {},
    chunkName() {
      return "";
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
    importAsync: () => __webpack_require__("./src/components lazy recursive ^\\.\\/.*$")("./" + params.mode),
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
        return /*require.resolve*/(__webpack_require__("./src/components weak recursive ^\\.\\/.*$").resolve("./" + params.mode));
      }
      return eval('require.resolve')('../components/' + params.mode);
    }
  });
  // if (mode) {
  //   DynamiComponent = loadable(() => import('../components/componentB'));
  // } else {
  //   DynamiComponent = loadable(() => import('../components/componentA'));
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-color"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/second"
  }, "second"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: refreshMode
  }, params.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DynamiComponent, null));
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
        // 1717990082567
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjRiYzQyZjZkZTM5ZmIzOTQ1MWFkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L3NyYy9wYWdlcy9QYWdlRmlyc3QuanN4Iiwid2VicGFjazovL2FwcC8uL3NyYy9sYXlvdXRzL2RlZmF1bHQuc2Fzcz9hNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xuXG5jb25zdCBQYWdlRmlyc3QgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBbcGFyYW1zLCBzZXRQYXJhbXNdID0gdXNlU3RhdGUoe1xuICAgIG1vZGU6J2NvbXBvbmVudEEnLFxuICAgIHRleHQ6ICdDb21wb25lbnQgQSdcbiAgfSk7XG4gIFxuICBjb25zdCByZWZyZXNoTW9kZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1vZGUgfSA9IHBhcmFtcztcbiAgICBwYXJhbXMubW9kZSA9IG1vZGUgPT09ICdjb21wb25lbnRBJyA/ICdjb21wb25lbnRCJyA6ICdjb21wb25lbnRBJztcbiAgICBwYXJhbXMudGV4dCA9IG1vZGUgPT09ICdjb21wb25lbnRBJyA/ICdDb21wb25lbnQgQicgOiAnQ29tcG9uZW50IEEnO1xuICAgIGNvbXBvbmVudEEocGFyYW1zKVxuICB9XG5cbiAgY29uc3QgRHluYW1pQ29tcG9uZW50ID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzLycrcGFyYW1zLm1vZGUpKVxuICAvLyBpZiAobW9kZSkge1xuICAvLyAgIER5bmFtaUNvbXBvbmVudCA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21wb25lbnRCJykpO1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIER5bmFtaUNvbXBvbmVudCA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21wb25lbnRBJykpO1xuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctY29sb3InPlxuICAgICAgPExpbmsgdG89XCIvc2Vjb25kXCI+c2Vjb25kPC9MaW5rPlxuICAgICAgPGJyLz5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9e3JlZnJlc2hNb2RlfT57cGFyYW1zLnRleHR9PC9zcGFuPlxuICAgICAgPER5bmFtaUNvbXBvbmVudCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUZpcnN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTcxNzk5MDA4MjU2N1xuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9