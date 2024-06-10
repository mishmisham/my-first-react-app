"use strict";
self["webpackHotUpdateapp"]("client",{

/***/ "./src/layouts/default.jsx":
/*!*********************************!*\
  !*** ./src/layouts/default.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");
/* harmony import */ var _default_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.sass */ "./src/layouts/default.sass");




// import websocketClient, { websocketSendEcho, websocketSendPing } from '../../websocket/client';

const Layout = ({
  children,
  title,
  description
}) => {
  // const hasWindow = (typeof window !== 'undefined') ? true : false;

  // if (hasWindow) {
  //   websocketSendEcho('lorem!');
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.HelmetProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

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

/***/ "./src/pages/PageSecond.jsx":
/*!**********************************!*\
  !*** ./src/pages/PageSecond.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



const PageSecond = () => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let Comp = mode ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "components-componentA").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentA */ "./src/components/componentA.jsx"))) : /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "components-componentB").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentB */ "./src/components/componentB.jsx")));
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

/***/ "./src/routes/routesData.js":
/*!**********************************!*\
  !*** ./src/routes/routesData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routesArray: () => (/* binding */ routesArray)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/default */ "./src/layouts/default.jsx");
/* harmony import */ var _pages_PageFirst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/PageFirst */ "./src/pages/PageFirst.jsx");
/* harmony import */ var _pages_PageSecond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/PageSecond */ "./src/pages/PageSecond.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/@remix-run/router/dist/router.js");
/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/index */ "./src/store/actions/index.js");






const routesArray = [{
  path: "/",
  loader() {
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.json)({
      message: "Welcome to React Router!"
    });
  },
  loadData: ({
    dispatch
  }) => dispatch((0,_store_actions_index__WEBPACK_IMPORTED_MODULE_4__.fetchCurrentUser)()),
  Component() {
    // let data = useLoaderData();
    // console.log(data)

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_default__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Homepage",
      description: "home page seo description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_PageFirst__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }
}, {
  path: "/second",
  loader() {
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.json)({
      message: "Welcome to React Router!"
    });
  },
  Component() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_default__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Second page",
      description: "other page seo description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_PageSecond__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }
}];

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FETCH_ADMINS: () => (/* binding */ FETCH_ADMINS),
/* harmony export */   FETCH_CURRENT_USER: () => (/* binding */ FETCH_CURRENT_USER),
/* harmony export */   FETCH_USERS: () => (/* binding */ FETCH_USERS),
/* harmony export */   fetchAdmins: () => (/* binding */ fetchAdmins),
/* harmony export */   fetchCurrentUser: () => (/* binding */ fetchCurrentUser),
/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers)
/* harmony export */ });
const FETCH_USERS = 'FETCH_USERS';
const fetchUsers = () => async (dispatch, getState, api) => {
  const res = {
    lorem: 'chocopie'
  };
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = {
    lorem: 'ipsum'
  };
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};
const FETCH_ADMINS = 'FETCH_ADMINS';
const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = {
    lorem: 'opossum'
  };
  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};

/***/ }),

/***/ "./ssr/client/index.jsx":
/*!******************************!*\
  !*** ./ssr/client/index.jsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/esm/loadable.esm.mjs");
/* harmony import */ var _src_routes_routesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/routes/routesData */ "./src/routes/routesData.js");





const renderApp = () => {
  let router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.createBrowserRouter)(_src_routes_routesData__WEBPACK_IMPORTED_MODULE_3__.routesArray);
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot(react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.RouterProvider, {
    router: router
  })), document.getElementById("root")));
};
(0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__.loadableReady)(() => {
  renderApp();
});
if (true) {
  module.hot.accept();
}

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
        // 1717998170981
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjRkYTI3MzgzNzRkZWNkNDAxOTc1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQWFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUdBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L3NyYy9sYXlvdXRzL2RlZmF1bHQuanN4IiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zcmMvcGFnZXMvUGFnZUZpcnN0LmpzeCIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvc3JjL3BhZ2VzL1BhZ2VTZWNvbmQuanN4IiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zcmMvcm91dGVzL3JvdXRlc0RhdGEuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L3NyYy9zdG9yZS9hY3Rpb25zL2luZGV4LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zc3IvY2xpZW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvbGF5b3V0cy9kZWZhdWx0LnNhc3M/YTVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0UHJvdmlkZXIsIEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYyc7XG5pbXBvcnQgJy4vZGVmYXVsdC5zYXNzJztcblxuLy8gaW1wb3J0IHdlYnNvY2tldENsaWVudCwgeyB3ZWJzb2NrZXRTZW5kRWNobywgd2Vic29ja2V0U2VuZFBpbmcgfSBmcm9tICcuLi8uLi93ZWJzb2NrZXQvY2xpZW50JztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG5cbiAgLy8gY29uc3QgaGFzV2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHRydWUgOiBmYWxzZTtcblxuICAvLyBpZiAoaGFzV2luZG93KSB7XG4gIC8vICAgd2Vic29ja2V0U2VuZEVjaG8oJ2xvcmVtIScpO1xuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICA8SGVsbWV0UHJvdmlkZXI+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPC9IZWxtZXQ+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvSGVsbWV0UHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgbG9hZGFibGUgZnJvbSAnQGxvYWRhYmxlL2NvbXBvbmVudCdcblxuY29uc3QgUGFnZUZpcnN0ID0gKCkgPT4ge1xuICBcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2NvbXBvbmVudEEnKTtcbiAgXG4gIGNvbnN0IHJlZnJlc2hNb2RlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjbGljaycpXG4gICAgY29uc3QgbmV3TW9kZSA9IG1vZGUgPT09ICdjb21wb25lbnRBJyA/ICdjb21wb25lbnRCJyA6ICdjb21wb25lbnRBJztcbiAgICBzZXRNb2RlKG5ld01vZGUpXG4gIH1cblxuICBsZXQgRHluYW1pQ29tcG9uZW50ID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL2NvbXBvbmVudEEnKSlcbiAgaWYgKG1vZGUgPT09ICdjb21wb25lbnRBJykge1xuICAgIER5bmFtaUNvbXBvbmVudCA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21wb25lbnRCJykpO1xuICB9IGVsc2Uge1xuICAgIER5bmFtaUNvbXBvbmVudCA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21wb25lbnRBJykpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctY29sb3InPlxuICAgICAgPExpbmsgdG89XCIvc2Vjb25kXCI+c2Vjb25kPC9MaW5rPlxuICAgICAgPGJyLz5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9e3JlZnJlc2hNb2RlfT5DaGFuZ2U8L3NwYW4+XG4gICAgICA8RHluYW1pQ29tcG9uZW50IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlRmlyc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgU3VzcGVuc2UsIGxhenksIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQYWdlU2Vjb25kID0gKCkgPT4ge1xuXG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBsZXQgQ29tcCA9IG1vZGUgPyBsYXp5KCgpPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL2NvbXBvbmVudEEnKSkgOiBsYXp5KCgpPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL2NvbXBvbmVudEInKSlcblxuICBjb25zdCBzZXR0ZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ21vZGUnLCBtb2RlKVxuICAgIHNldE1vZGUoIW1vZGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlNlY29uZDwvaDE+XG4gICAgICA8TGluayB0bz1cIi9cIj5ob21lPC9MaW5rPlxuICAgICAgPHNwYW4gb25DbGljaz17c2V0dGVyfT57bW9kZSA/ICdkYScgOiAnbmV0J308L3NwYW4+XG4gICAgICA8U3VzcGVuc2U+XG4gICAgICAgIDxDb21wIC8+XG4gICAgICA8L1N1c3BlbnNlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVNlY29uZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9kZWZhdWx0JztcbmltcG9ydCBQYWdlRmlyc3QgZnJvbSBcIi4uL3BhZ2VzL1BhZ2VGaXJzdFwiO1xuaW1wb3J0IFBhZ2VTZWNvbmQgZnJvbSBcIi4uL3BhZ2VzL1BhZ2VTZWNvbmRcIjtcbmltcG9ydCB7IGpzb24sIHVzZUxvYWRlckRhdGEgfWZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBmZXRjaEN1cnJlbnRVc2VyIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCdcblxuZXhwb3J0IGNvbnN0IHJvdXRlc0FycmF5ID0gW1xuICAgIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgbG9hZGVyKCkge1xuICAgICAgICByZXR1cm4ganNvbih7IG1lc3NhZ2U6IFwiV2VsY29tZSB0byBSZWFjdCBSb3V0ZXIhXCIgfSk7XG4gICAgICB9LFxuXG4gICAgICBsb2FkRGF0YTogKHsgZGlzcGF0Y2ggfSkgPT4gZGlzcGF0Y2goZmV0Y2hDdXJyZW50VXNlcigpKSxcblxuICAgICAgQ29tcG9uZW50KCkge1xuICAgICAgICAvLyBsZXQgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICByZXR1cm4gPExheW91dFxuICAgICAgICAgICAgdGl0bGU9XCJIb21lcGFnZVwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj0naG9tZSBwYWdlIHNlbyBkZXNjcmlwdGlvbidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFnZUZpcnN0IC8+XG4gICAgICAgICAgPC9MYXlvdXQ+O1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvc2Vjb25kXCIsXG5cbiAgICAgICAgbG9hZGVyKCkge1xuICAgICAgICAgIHJldHVybiBqc29uKHsgbWVzc2FnZTogXCJXZWxjb21lIHRvIFJlYWN0IFJvdXRlciFcIiB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBDb21wb25lbnQoKSB7XG4gICAgICAgICAgcmV0dXJuIDxMYXlvdXRcbiAgICAgICAgICAgICAgdGl0bGU9XCJTZWNvbmQgcGFnZVwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPSdvdGhlciBwYWdlIHNlbyBkZXNjcmlwdGlvbidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBhZ2VTZWNvbmQgLz5cbiAgICAgICAgICAgIDwvTGF5b3V0PjtcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcbiIsImV4cG9ydCBjb25zdCBGRVRDSF9VU0VSUyA9ICdGRVRDSF9VU0VSUyc7XG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGFwaSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgbG9yZW06ICdjaG9jb3BpZSdcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEZFVENIX1VTRVJTLFxuICAgICAgICBwYXlsb2FkOiByZXMsXG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBGRVRDSF9DVVJSRU5UX1VTRVIgPSAnRkVUQ0hfQ1VSUkVOVF9VU0VSJztcbmV4cG9ydCBjb25zdCBmZXRjaEN1cnJlbnRVc2VyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgYXBpKSA9PiB7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgICBsb3JlbTogJ2lwc3VtJ1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogRkVUQ0hfQ1VSUkVOVF9VU0VSLFxuICAgICAgICBwYXlsb2FkOiByZXMsXG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBGRVRDSF9BRE1JTlMgPSAnRkVUQ0hfQURNSU5TJztcbmV4cG9ydCBjb25zdCBmZXRjaEFkbWlucyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGFwaSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgbG9yZW06ICdvcG9zc3VtJ1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogRkVUQ0hfQURNSU5TLFxuICAgICAgICBwYXlsb2FkOiByZXMsXG4gICAgfSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlQnJvd3NlclJvdXRlcixcbiAgUm91dGVyUHJvdmlkZXIsXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBsb2FkYWJsZVJlYWR5IH0gZnJvbSBcIkBsb2FkYWJsZS9jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgcm91dGVzQXJyYXkgfSBmcm9tIFwiLi4vLi4vc3JjL3JvdXRlcy9yb3V0ZXNEYXRhXCI7XG5cbmNvbnN0IHJlbmRlckFwcCA9ICgpID0+IHtcblxuIFxuXG5cbiAgbGV0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIocm91dGVzQXJyYXkpO1xuICBSZWFjdERPTS5oeWRyYXRlUm9vdChcbiAgICAgUmVhY3RET00uY3JlYXRlUm9vdChcbiAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT4sXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbiAgICApXG4gICk7XG59XG5cbmxvYWRhYmxlUmVhZHkoKCkgPT4ge1xuICByZW5kZXJBcHAoKTtcbn0pO1xuXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTcxNzk5ODE3MDk4MVxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9