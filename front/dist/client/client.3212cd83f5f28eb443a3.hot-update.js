self["webpackHotUpdateapp"]("client",{

/***/ "./src/pages/PageFirst.jsx":
/*!*********************************!*\
  !*** ./src/pages/PageFirst.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    setParams(params);
  };
  let DynamiComponent = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
  // if (params.mode === 'componentA') {
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

/***/ "./src/pages/PageSecond.jsx":
/*!**********************************!*\
  !*** ./src/pages/PageSecond.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



const PageSecond = () => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let Comp = mode ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_componentA_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentA */ "./src/components/componentA.jsx"))) : /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_componentB_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentB */ "./src/components/componentB.jsx")));
  const setter = () => {
    console.log('mode', mode);
    setMode(!mode);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Second"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: setter
  }, mode ? 'da' : 'net'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Comp, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSecond);

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
        // 1717990214357
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

/***/ "./src/components lazy recursive ^\\.\\/.*$":
/*!********************************************************!*\
  !*** ./src/components/ lazy ^\.\/.*$ namespace object ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./componentA": [
		"./src/components/componentA.jsx",
		"src_components_componentA_jsx"
	],
	"./componentA.jsx": [
		"./src/components/componentA.jsx",
		"src_components_componentA_jsx"
	],
	"./componentB": [
		"./src/components/componentB.jsx",
		"src_components_componentB_jsx"
	],
	"./componentB.jsx": [
		"./src/components/componentB.jsx",
		"src_components_componentB_jsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/components lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/components weak recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./src/components/ weak ^\.\/.*$ ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./componentA": "./src/components/componentA.jsx",
	"./componentA.jsx": "./src/components/componentA.jsx",
	"./componentB": "./src/components/componentB.jsx",
	"./componentB.jsx": "./src/components/componentB.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	if(!__webpack_require__.m[id]) {
		var e = new Error("Module '" + req + "' ('" + id + "') is not available (weak dependency)");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
webpackContext.id = "./src/components weak recursive ^\\.\\/.*$";
module.exports = webpackContext;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjMyMTJjZDgzZjVmMjhlYjQ0M2EzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBRUE7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zcmMvcGFnZXMvUGFnZUZpcnN0LmpzeCIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvc3JjL3BhZ2VzL1BhZ2VTZWNvbmQuanN4Iiwid2VicGFjazovL2FwcC8uL3NyYy9sYXlvdXRzL2RlZmF1bHQuc2Fzcz9hNWQ2IiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zcmMvY29tcG9uZW50c3xsYXp5fC9eLy4vLy4qJC98Z3JvdXBPcHRpb25zOiB7fXxuYW1lc3BhY2Ugb2JqZWN0IiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zcmMvY29tcG9uZW50c3x3ZWFrfC9eLy4vLy4qJCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgbG9hZGFibGUgZnJvbSAnQGxvYWRhYmxlL2NvbXBvbmVudCdcblxuY29uc3QgUGFnZUZpcnN0ID0gKCkgPT4ge1xuICBcbiAgY29uc3QgW3BhcmFtcywgc2V0UGFyYW1zXSA9IHVzZVN0YXRlKHtcbiAgICBtb2RlOidjb21wb25lbnRBJyxcbiAgICB0ZXh0OiAnQ29tcG9uZW50IEEnXG4gIH0pO1xuICBcbiAgY29uc3QgcmVmcmVzaE1vZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtb2RlIH0gPSBwYXJhbXM7XG4gICAgcGFyYW1zLm1vZGUgPSBtb2RlID09PSAnY29tcG9uZW50QScgPyAnY29tcG9uZW50QicgOiAnY29tcG9uZW50QSc7XG4gICAgcGFyYW1zLnRleHQgPSBtb2RlID09PSAnY29tcG9uZW50QScgPyAnQ29tcG9uZW50IEInIDogJ0NvbXBvbmVudCBBJztcbiAgICBzZXRQYXJhbXMocGFyYW1zKVxuICB9XG5cbiAgbGV0IER5bmFtaUNvbXBvbmVudCA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy8nK3BhcmFtcy5tb2RlKSlcbiAgLy8gaWYgKHBhcmFtcy5tb2RlID09PSAnY29tcG9uZW50QScpIHtcbiAgLy8gICBEeW5hbWlDb21wb25lbnQgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50QicpKTtcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICBEeW5hbWlDb21wb25lbnQgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50QScpKTtcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLWNvbG9yJz5cbiAgICAgIDxMaW5rIHRvPVwiL3NlY29uZFwiPnNlY29uZDwvTGluaz5cbiAgICAgIDxici8+XG4gICAgICA8c3BhbiBvbkNsaWNrPXtyZWZyZXNoTW9kZX0+e3BhcmFtcy50ZXh0fTwvc3Bhbj5cbiAgICAgIDxEeW5hbWlDb21wb25lbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VGaXJzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBTdXNwZW5zZSwgbGF6eSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBhZ2VTZWNvbmQgPSAoKSA9PiB7XG5cbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGxldCBDb21wID0gbW9kZSA/IGxhenkoKCk9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50QScpKSA6IGxhenkoKCk9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50QicpKVxuXG4gIGNvbnN0IHNldHRlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbW9kZScsIG1vZGUpXG4gICAgc2V0TW9kZSghbW9kZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+U2Vjb25kPC9oMT5cbiAgICAgIDxMaW5rIHRvPVwiL1wiPmhvbWU8L0xpbms+XG4gICAgICA8c3BhbiBvbkNsaWNrPXtzZXR0ZXJ9Pnttb2RlID8gJ2RhJyA6ICduZXQnfTwvc3Bhbj5cbiAgICAgIDxTdXNwZW5zZT5cbiAgICAgICAgPENvbXAgLz5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlU2Vjb25kO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTcxNzk5MDIxNDM1N1xuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIiwidmFyIG1hcCA9IHtcblx0XCIuL2NvbXBvbmVudEFcIjogW1xuXHRcdFwiLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRBLmpzeFwiLFxuXHRcdFwic3JjX2NvbXBvbmVudHNfY29tcG9uZW50QV9qc3hcIlxuXHRdLFxuXHRcIi4vY29tcG9uZW50QS5qc3hcIjogW1xuXHRcdFwiLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRBLmpzeFwiLFxuXHRcdFwic3JjX2NvbXBvbmVudHNfY29tcG9uZW50QV9qc3hcIlxuXHRdLFxuXHRcIi4vY29tcG9uZW50QlwiOiBbXG5cdFx0XCIuL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudEIuanN4XCIsXG5cdFx0XCJzcmNfY29tcG9uZW50c19jb21wb25lbnRCX2pzeFwiXG5cdF0sXG5cdFwiLi9jb21wb25lbnRCLmpzeFwiOiBbXG5cdFx0XCIuL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudEIuanN4XCIsXG5cdFx0XCJzcmNfY29tcG9uZW50c19jb21wb25lbnRCX2pzeFwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY29tcG9uZW50QVwiOiBcIi4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50QS5qc3hcIixcblx0XCIuL2NvbXBvbmVudEEuanN4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRBLmpzeFwiLFxuXHRcIi4vY29tcG9uZW50QlwiOiBcIi4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50Qi5qc3hcIixcblx0XCIuL2NvbXBvbmVudEIuanN4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRCLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubVtpZF0pIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIk1vZHVsZSAnXCIgKyByZXEgKyBcIicgKCdcIiArIGlkICsgXCInKSBpcyBub3QgYXZhaWxhYmxlICh3ZWFrIGRlcGVuZGVuY3kpXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzIHdlYWsgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==