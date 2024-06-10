"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["client"],{

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
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");
/* harmony import */ var _default_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.sass */ "./src/layouts/default.sass");
/* harmony import */ var _websocket_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../websocket/client */ "./websocket/client.js");




const Layout = ({
  children,
  title,
  description
}) => {
  _websocket_client__WEBPACK_IMPORTED_MODULE_2__["default"].addEventListener("open", ev => {
    (0,_websocket_client__WEBPACK_IMPORTED_MODULE_2__.websocketSendEcho)('lorem!');
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__.HelmetProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, children)));
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
  const router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.createBrowserRouter)(_src_routes_routesData__WEBPACK_IMPORTED_MODULE_3__.routesArray);
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot(document.querySelector('#root'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.RouterProvider, {
    router: router
  })));
};
(0,_loadable_component__WEBPACK_IMPORTED_MODULE_2__.loadableReady)(() => {
  renderApp();
});
if (true) {
  module.hot.accept();
}

/***/ }),

/***/ "./websocket/client.js":
/*!*****************************!*\
  !*** ./websocket/client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   websocketSendEcho: () => (/* binding */ websocketSendEcho),
/* harmony export */   websocketSendPing: () => (/* binding */ websocketSendPing)
/* harmony export */ });
const websocketClient = new WebSocket('ws://localhost:9000');
websocketClient.onopen = function () {
  console.log('подключился');
};
websocketClient.onmessage = function (message) {
  console.log('Message: %s', message.data);
};
const websocketSendEcho = value => {
  if (typeof window !== 'object') {
    return;
  }
  try {
    websocketClient.send(JSON.stringify({
      action: 'ECHO',
      data: value.toString()
    }));
  } catch (err) {
    console.log(err);
  }
};
const websocketSendPing = () => {
  websocketClient.send(JSON.stringify({
    action: 'PING'
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (websocketClient);

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
        // 1717999627692
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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__("./node_modules/webpack-hot-middleware/client.js?reload=true&noInfo=true"), __webpack_exec__("./ssr/client/index.jsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBYUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zcmMvbGF5b3V0cy9kZWZhdWx0LmpzeCIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvc3JjL3BhZ2VzL1BhZ2VGaXJzdC5qc3giLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L3NyYy9wYWdlcy9QYWdlU2Vjb25kLmpzeCIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvc3JjL3JvdXRlcy9yb3V0ZXNEYXRhLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zcmMvc3RvcmUvYWN0aW9ucy9pbmRleC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvc3NyL2NsaWVudC9pbmRleC5qc3giLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L3dlYnNvY2tldC9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2xheW91dHMvZGVmYXVsdC5zYXNzP2E1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldFByb3ZpZGVyLCBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQtYXN5bmMnO1xuaW1wb3J0ICcuL2RlZmF1bHQuc2Fzcyc7XG5cbmltcG9ydCB3ZWJzb2NrZXRDbGllbnQsIHsgd2Vic29ja2V0U2VuZEVjaG8sIHdlYnNvY2tldFNlbmRQaW5nIH0gZnJvbSAnLi4vLi4vd2Vic29ja2V0L2NsaWVudCc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuXG4gIHdlYnNvY2tldENsaWVudC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoZXYpID0+IHtcbiAgICB3ZWJzb2NrZXRTZW5kRWNobygnbG9yZW0hJyk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgPEhlbG1ldFByb3ZpZGVyPlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9IZWxtZXRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xuXG5jb25zdCBQYWdlRmlyc3QgPSAoKSA9PiB7XG4gIFxuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZSgnY29tcG9uZW50QScpO1xuICBcbiAgY29uc3QgcmVmcmVzaE1vZGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrJylcbiAgICBjb25zdCBuZXdNb2RlID0gbW9kZSA9PT0gJ2NvbXBvbmVudEEnID8gJ2NvbXBvbmVudEInIDogJ2NvbXBvbmVudEEnO1xuICAgIHNldE1vZGUobmV3TW9kZSlcbiAgfVxuXG4gIGxldCBEeW5hbWlDb21wb25lbnQgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50QScpKVxuICBpZiAobW9kZSA9PT0gJ2NvbXBvbmVudEEnKSB7XG4gICAgRHluYW1pQ29tcG9uZW50ID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL2NvbXBvbmVudEInKSk7XG4gIH0gZWxzZSB7XG4gICAgRHluYW1pQ29tcG9uZW50ID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCcuLi9jb21wb25lbnRzL2NvbXBvbmVudEEnKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1jb2xvcic+XG4gICAgICA8TGluayB0bz1cIi9zZWNvbmRcIj5zZWNvbmQ8L0xpbms+XG4gICAgICA8YnIvPlxuICAgICAgPHNwYW4gb25DbGljaz17cmVmcmVzaE1vZGV9PkNoYW5nZTwvc3Bhbj5cbiAgICAgIDxEeW5hbWlDb21wb25lbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VGaXJzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBTdXNwZW5zZSwgbGF6eSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBhZ2VTZWNvbmQgPSAoKSA9PiB7XG5cbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGxldCBDb21wID0gbW9kZSA/IGxhenkoKCk9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50QScpKSA6IGxhenkoKCk9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvY29tcG9uZW50QicpKVxuXG4gIGNvbnN0IHNldHRlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbW9kZScsIG1vZGUpXG4gICAgc2V0TW9kZSghbW9kZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+U2Vjb25kPC9oMT5cbiAgICAgIDxMaW5rIHRvPVwiL1wiPmhvbWU8L0xpbms+XG4gICAgICA8c3BhbiBvbkNsaWNrPXtzZXR0ZXJ9Pnttb2RlID8gJ2RhJyA6ICduZXQnfTwvc3Bhbj5cbiAgICAgIDxTdXNwZW5zZT5cbiAgICAgICAgPENvbXAgLz5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlU2Vjb25kO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL2RlZmF1bHQnO1xuaW1wb3J0IFBhZ2VGaXJzdCBmcm9tIFwiLi4vcGFnZXMvUGFnZUZpcnN0XCI7XG5pbXBvcnQgUGFnZVNlY29uZCBmcm9tIFwiLi4vcGFnZXMvUGFnZVNlY29uZFwiO1xuaW1wb3J0IHsganNvbiwgdXNlTG9hZGVyRGF0YSB9ZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGZldGNoQ3VycmVudFVzZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4J1xuXG5leHBvcnQgY29uc3Qgcm91dGVzQXJyYXkgPSBbXG4gICAge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICBsb2FkZXIoKSB7XG4gICAgICAgIHJldHVybiBqc29uKHsgbWVzc2FnZTogXCJXZWxjb21lIHRvIFJlYWN0IFJvdXRlciFcIiB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGxvYWREYXRhOiAoeyBkaXNwYXRjaCB9KSA9PiBkaXNwYXRjaChmZXRjaEN1cnJlbnRVc2VyKCkpLFxuXG4gICAgICBDb21wb25lbnQoKSB7XG4gICAgICAgIC8vIGxldCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgICAgIHJldHVybiA8TGF5b3V0XG4gICAgICAgICAgICB0aXRsZT1cIkhvbWVwYWdlXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPSdob21lIHBhZ2Ugc2VvIGRlc2NyaXB0aW9uJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYWdlRmlyc3QgLz5cbiAgICAgICAgICA8L0xheW91dD47XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9zZWNvbmRcIixcblxuICAgICAgICBsb2FkZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIGpzb24oeyBtZXNzYWdlOiBcIldlbGNvbWUgdG8gUmVhY3QgUm91dGVyIVwiIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIENvbXBvbmVudCgpIHtcbiAgICAgICAgICByZXR1cm4gPExheW91dFxuICAgICAgICAgICAgICB0aXRsZT1cIlNlY29uZCBwYWdlXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249J290aGVyIHBhZ2Ugc2VvIGRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGFnZVNlY29uZCAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+O1xuICAgICAgICB9LFxuICAgIH0sXG5dO1xuIiwiZXhwb3J0IGNvbnN0IEZFVENIX1VTRVJTID0gJ0ZFVENIX1VTRVJTJztcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgYXBpKSA9PiB7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgICBsb3JlbTogJ2Nob2NvcGllJ1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogRkVUQ0hfVVNFUlMsXG4gICAgICAgIHBheWxvYWQ6IHJlcyxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IEZFVENIX0NVUlJFTlRfVVNFUiA9ICdGRVRDSF9DVVJSRU5UX1VTRVInO1xuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlLCBhcGkpID0+IHtcbiAgICBjb25zdCByZXMgPSB7XG4gICAgICAgIGxvcmVtOiAnaXBzdW0nXG4gICAgfVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBGRVRDSF9DVVJSRU5UX1VTRVIsXG4gICAgICAgIHBheWxvYWQ6IHJlcyxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IEZFVENIX0FETUlOUyA9ICdGRVRDSF9BRE1JTlMnO1xuZXhwb3J0IGNvbnN0IGZldGNoQWRtaW5zID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSwgYXBpKSA9PiB7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgICBsb3JlbTogJ29wb3NzdW0nXG4gICAgfVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBGRVRDSF9BRE1JTlMsXG4gICAgICAgIHBheWxvYWQ6IHJlcyxcbiAgICB9KTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQge1xuICBjcmVhdGVCcm93c2VyUm91dGVyLFxuICBSb3V0ZXJQcm92aWRlcixcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGxvYWRhYmxlUmVhZHkgfSBmcm9tIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyByb3V0ZXNBcnJheSB9IGZyb20gXCIuLi8uLi9zcmMvcm91dGVzL3JvdXRlc0RhdGFcIjtcblxuY29uc3QgcmVuZGVyQXBwID0gKCkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIocm91dGVzQXJyYXkpO1xuICBSZWFjdERPTS5oeWRyYXRlUm9vdChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpLFxuICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgKTtcbn1cblxubG9hZGFibGVSZWFkeSgoKSA9PiB7XG4gIHJlbmRlckFwcCgpO1xufSk7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG4iLCJjb25zdCB3ZWJzb2NrZXRDbGllbnQgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo5MDAwJyk7XG5cbndlYnNvY2tldENsaWVudC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ9C/0L7QtNC60LvRjtGH0LjQu9GB0Y8nKTtcbn07XG53ZWJzb2NrZXRDbGllbnQub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZygnTWVzc2FnZTogJXMnLCBtZXNzYWdlLmRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHdlYnNvY2tldFNlbmRFY2hvID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7YWN0aW9uOiAnRUNITycsIGRhdGE6IHZhbHVlLnRvU3RyaW5nKCl9KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB3ZWJzb2NrZXRTZW5kUGluZyA9ICgpID0+IHtcbiAgICB3ZWJzb2NrZXRDbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7YWN0aW9uOiAnUElORyd9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYnNvY2tldENsaWVudFxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTcxNzk5OTYyNzY5MlxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9