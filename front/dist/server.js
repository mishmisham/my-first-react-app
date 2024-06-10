/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/layouts/default.jsx":
/*!*********************************!*\
  !*** ./src/layouts/default.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ \"react-helmet-async\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _default_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.sass */ \"./src/layouts/default.sass\");\n/* harmony import */ var _websocket_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../websocket/client */ \"./websocket/client.js\");\n\n\n\n\nconst Layout = ({\n  children,\n  title,\n  description\n}) => {\n  _websocket_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addEventListener(\"open\", ev => {\n    (0,_websocket_client__WEBPACK_IMPORTED_MODULE_3__.websocketSendEcho)('lorem!');\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.HelmetProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: description\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, children)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/layouts/default.jsx");

/***/ }),

/***/ "./src/pages/PageFirst.jsx":
/*!*********************************!*\
  !*** ./src/pages/PageFirst.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst PageFirst = () => {\n  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('componentA');\n  const refreshMode = () => {\n    console.log('click');\n    const newMode = mode === 'componentA' ? 'componentB' : 'componentA';\n    setMode(newMode);\n  };\n  let DynamiComponent = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({\n    resolved: {},\n    chunkName() {\n      return \"components-componentA\";\n    },\n    isReady(props) {\n      const key = this.resolve(props);\n      if (this.resolved[key] !== true) {\n        return false;\n      }\n      if (true) {\n        return !!__webpack_require__.m[key];\n      }\n      return false;\n    },\n    importAsync: () => __webpack_require__.e(/*! import() | components-componentA */ \"components-componentA\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentA */ \"./src/components/componentA.jsx\")),\n    requireAsync(props) {\n      const key = this.resolve(props);\n      this.resolved[key] = false;\n      return this.importAsync(props).then(resolved => {\n        this.resolved[key] = true;\n        return resolved;\n      });\n    },\n    requireSync(props) {\n      const id = this.resolve(props);\n      if (true) {\n        return __webpack_require__(id);\n      }\n      return eval('module.require')(id);\n    },\n    resolve() {\n      if (true) {\n        return /*require.resolve*/(/*! ../components/componentA */ \"./src/components/componentA.jsx\");\n      }\n      return eval('require.resolve')(\"../components/componentA\");\n    }\n  });\n  if (mode === 'componentA') {\n    DynamiComponent = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({\n      resolved: {},\n      chunkName() {\n        return \"components-componentB\";\n      },\n      isReady(props) {\n        const key = this.resolve(props);\n        if (this.resolved[key] !== true) {\n          return false;\n        }\n        if (true) {\n          return !!__webpack_require__.m[key];\n        }\n        return false;\n      },\n      importAsync: () => __webpack_require__.e(/*! import() | components-componentB */ \"components-componentB\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentB */ \"./src/components/componentB.jsx\")),\n      requireAsync(props) {\n        const key = this.resolve(props);\n        this.resolved[key] = false;\n        return this.importAsync(props).then(resolved => {\n          this.resolved[key] = true;\n          return resolved;\n        });\n      },\n      requireSync(props) {\n        const id = this.resolve(props);\n        if (true) {\n          return __webpack_require__(id);\n        }\n        return eval('module.require')(id);\n      },\n      resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ../components/componentB */ \"./src/components/componentB.jsx\");\n        }\n        return eval('require.resolve')(\"../components/componentB\");\n      }\n    });\n  } else {\n    DynamiComponent = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({\n      resolved: {},\n      chunkName() {\n        return \"components-componentA\";\n      },\n      isReady(props) {\n        const key = this.resolve(props);\n        if (this.resolved[key] !== true) {\n          return false;\n        }\n        if (true) {\n          return !!__webpack_require__.m[key];\n        }\n        return false;\n      },\n      importAsync: () => __webpack_require__.e(/*! import() | components-componentA */ \"components-componentA\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentA */ \"./src/components/componentA.jsx\")),\n      requireAsync(props) {\n        const key = this.resolve(props);\n        this.resolved[key] = false;\n        return this.importAsync(props).then(resolved => {\n          this.resolved[key] = true;\n          return resolved;\n        });\n      },\n      requireSync(props) {\n        const id = this.resolve(props);\n        if (true) {\n          return __webpack_require__(id);\n        }\n        return eval('module.require')(id);\n      },\n      resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ../components/componentA */ \"./src/components/componentA.jsx\");\n        }\n        return eval('require.resolve')(\"../components/componentA\");\n      }\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"bg-color\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/second\"\n  }, \"second\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    onClick: refreshMode\n  }, \"Change\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DynamiComponent, null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageFirst);\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/pages/PageFirst.jsx");

/***/ }),

/***/ "./src/pages/PageSecond.jsx":
/*!**********************************!*\
  !*** ./src/pages/PageSecond.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst PageSecond = () => {\n  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  let Comp = mode ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ \"components-componentA\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentA */ \"./src/components/componentA.jsx\"))) : /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ \"components-componentB\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/componentB */ \"./src/components/componentB.jsx\")));\n  const setter = () => {\n    console.log('mode', mode);\n    setMode(!mode);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Second\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    onClick: setter\n  }, mode ? 'da' : 'net'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Comp, null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSecond);\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/pages/PageSecond.jsx");

/***/ }),

/***/ "./src/routes/routesData.js":
/*!**********************************!*\
  !*** ./src/routes/routesData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   routesArray: () => (/* binding */ routesArray)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/default */ \"./src/layouts/default.jsx\");\n/* harmony import */ var _pages_PageFirst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/PageFirst */ \"./src/pages/PageFirst.jsx\");\n/* harmony import */ var _pages_PageSecond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/PageSecond */ \"./src/pages/PageSecond.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/index */ \"./src/store/actions/index.js\");\n\n\n\n\n\n\nconst routesArray = [{\n  path: \"/\",\n  loader() {\n    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.json)({\n      message: \"Welcome to React Router!\"\n    });\n  },\n  loadData: ({\n    dispatch\n  }) => dispatch((0,_store_actions_index__WEBPACK_IMPORTED_MODULE_5__.fetchCurrentUser)()),\n  Component() {\n    // let data = useLoaderData();\n    // console.log(data)\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_default__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: \"Homepage\",\n      description: \"home page seo description\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_PageFirst__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n  }\n}, {\n  path: \"/second\",\n  loader() {\n    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.json)({\n      message: \"Welcome to React Router!\"\n    });\n  },\n  Component() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layouts_default__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: \"Second page\",\n      description: \"other page seo description\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_PageSecond__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n  }\n}];\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/routes/routesData.js");

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FETCH_ADMINS: () => (/* binding */ FETCH_ADMINS),\n/* harmony export */   FETCH_CURRENT_USER: () => (/* binding */ FETCH_CURRENT_USER),\n/* harmony export */   FETCH_USERS: () => (/* binding */ FETCH_USERS),\n/* harmony export */   fetchAdmins: () => (/* binding */ fetchAdmins),\n/* harmony export */   fetchCurrentUser: () => (/* binding */ fetchCurrentUser),\n/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers)\n/* harmony export */ });\nconst FETCH_USERS = 'FETCH_USERS';\nconst fetchUsers = () => async (dispatch, getState, api) => {\n  const res = {\n    lorem: 'chocopie'\n  };\n  dispatch({\n    type: FETCH_USERS,\n    payload: res\n  });\n};\nconst FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';\nconst fetchCurrentUser = () => async (dispatch, getState, api) => {\n  const res = {\n    lorem: 'ipsum'\n  };\n  dispatch({\n    type: FETCH_CURRENT_USER,\n    payload: res\n  });\n};\nconst FETCH_ADMINS = 'FETCH_ADMINS';\nconst fetchAdmins = () => async (dispatch, getState, api) => {\n  const res = {\n    lorem: 'opossum'\n  };\n  dispatch({\n    type: FETCH_ADMINS,\n    payload: res\n  });\n};\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/store/actions/index.js");

/***/ }),

/***/ "./src/store/reducers/adminsReducer.js":
/*!*********************************************!*\
  !*** ./src/store/reducers/adminsReducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = [], action) => {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__.FETCH_ADMINS:\n      return action.payload.data;\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/store/reducers/adminsReducer.js");

/***/ }),

/***/ "./src/store/reducers/authReducer.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/authReducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = null, action) => {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__.FETCH_CURRENT_USER:\n      state.users.push('qwerty');\n      return {\n        ...state\n      };\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/store/reducers/authReducer.js");

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ \"./src/store/reducers/authReducer.js\");\n/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usersReducer */ \"./src/store/reducers/usersReducer.js\");\n/* harmony import */ var _adminsReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminsReducer */ \"./src/store/reducers/adminsReducer.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  users: _usersReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  auth: _authReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  admins: _adminsReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/store/reducers/index.js");

/***/ }),

/***/ "./src/store/reducers/usersReducer.js":
/*!********************************************!*\
  !*** ./src/store/reducers/usersReducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = [], action) => {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__.FETCH_USERS:\n      return action.payload.data;\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/store/reducers/usersReducer.js");

/***/ }),

/***/ "./ssr/server/createStore.js":
/*!***********************************!*\
  !*** ./ssr/server/createStore.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_store_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/store/reducers */ \"./src/store/reducers/index.js\");\n/* harmony import */ var _src_routes_routesData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/routes/routesData.js */ \"./src/routes/routesData.js\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async req => {\n  const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default().create({\n    baseURL: '/',\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n  const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: _src_store_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    middleware: () => [(0,redux_thunk__WEBPACK_IMPORTED_MODULE_1__.withExtraArgument)(axiosInstance)],\n    devTools: \"development\" !== 'production'\n  });\n  const PromiseArray = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.matchRoutes)(_src_routes_routesData_js__WEBPACK_IMPORTED_MODULE_5__.routesArray, req.path);\n  let promises = [];\n  const promiseList = PromiseArray ? PromiseArray.map(({\n    route\n  }) => {\n    return route && route !== null && route !== void 0 && route.loadData ? route === null || route === void 0 ? void 0 : route.loadData(store) : null;\n  }) : null;\n  if (promiseList) {\n    promises = [...promises, promiseList.map(promise => {\n      if (promise) {\n        return new Promise((resolve, reject) => {\n          promise.then(resolve).catch(resolve);\n        });\n      }\n    })];\n  }\n  await Promise.all(promises);\n  return store;\n});\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/ssr/server/createStore.js");

/***/ }),

/***/ "./ssr/server/html.js":
/*!****************************!*\
  !*** ./ssr/server/html.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({\n  styles,\n  children,\n  extractor,\n  store\n}) => {\n  return `<html lang=\"en\" class=\"h-100\">\n    <head>\n      <base href=\"/\" />\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <link rel=\"icon\" type=\"image/x-icon\" href=\"/client/favicon.ico\">\n      ${styles}\n      ${extractor.getStyleTags()}\n    </head>\n    <body>\n      <div id=\"root\">${children}</div>\n      <script>\n        window.INITIAL_STATE = ${serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default()(store.getState())}\n      </script>\n      ${extractor.getScriptTags()}\n    </body>\n  </html>`;\n});\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/ssr/server/html.js");

/***/ }),

/***/ "./ssr/server/index.jsx":
/*!******************************!*\
  !*** ./ssr/server/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderer.js */ \"./ssr/server/renderer.js\");\n/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createStore */ \"./ssr/server/createStore.js\");\n/* eslint @typescript-eslint/no-var-requires: 0 */\n\n\n\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default().config();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nif (true) {\n  const webpackConfig = __webpack_require__(/*! ../../webpack/dev/webpack.dev.client.js */ \"./webpack/dev/webpack.dev.client.js\");\n  const compiler = webpack__WEBPACK_IMPORTED_MODULE_3___default()(webpackConfig);\n  app.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler, {\n    publicPath: webpackConfig.output.publicPath,\n    serverSideRender: true\n  }));\n  app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default()(compiler));\n}\napp.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"dist\"));\napp.get(\"*\", async (req, res) => {\n  const context = {};\n  const store = await (0,_createStore__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(req);\n  const content = await (0,_renderer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req, res, store, context);\n  try {\n    if (context.url) {\n      res.redirect(301, context.url);\n    }\n    if (context.notFound) {\n      res.status(404);\n    }\n    res.send(content);\n  } catch (err) {\n    console.log(\"error in rendering server side:\", err);\n  }\n});\napp.listen(3000, () => {\n  console.log(\"Listening on port 3000\");\n});\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/ssr/server/index.jsx");

/***/ }),

/***/ "./ssr/server/renderer.js":
/*!********************************!*\
  !*** ./ssr/server/renderer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ \"./ssr/server/html.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_routes_routesData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/routes/routesData.js */ \"./src/routes/routesData.js\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request */ \"./ssr/server/request.js\");\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res, store, contextData) => {\n  const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_6__.ServerStyleSheet();\n  const loadableJson = path__WEBPACK_IMPORTED_MODULE_4___default().resolve(__dirname, \"./loadable-stats.json\");\n  const extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_5__.ChunkExtractor({\n    statsFile: loadableJson,\n    entrypoints: [\"client\"]\n  });\n  const handler = (0,react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__.createStaticHandler)(_src_routes_routesData_js__WEBPACK_IMPORTED_MODULE_7__.routesArray);\n  const fetchRequest = (0,_request__WEBPACK_IMPORTED_MODULE_9__.createFetchRequest)(req, res);\n  const context = await handler.query(fetchRequest);\n  const router = (0,react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__.createStaticRouter)(handler.dataRoutes, context);\n  const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)(sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_loadable_server__WEBPACK_IMPORTED_MODULE_5__.ChunkExtractorManager, {\n    extractor: extractor\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__.StaticRouterProvider, {\n    router: router,\n    context: context,\n    location: req.url\n  })))));\n  const styles = sheet.getStyleTags();\n  const htmlData = {\n    styles,\n    children: content,\n    extractor,\n    store\n  };\n  const html = (0,_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(htmlData);\n  return html;\n});\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/ssr/server/renderer.js");

/***/ }),

/***/ "./ssr/server/request.js":
/*!*******************************!*\
  !*** ./ssr/server/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFetchRequest: () => (/* binding */ createFetchRequest)\n/* harmony export */ });\nfunction createFetchRequest(req, res) {\n  let origin = `${req.protocol}://${req.get(\"host\")}`;\n  // Note: This had to take originalUrl into account for presumably vite's proxying\n  let url = new URL(req.originalUrl || req.url, origin);\n  let controller = new AbortController();\n  res.on(\"close\", () => controller.abort());\n  let headers = new Headers();\n  for (let [key, values] of Object.entries(req.headers)) {\n    if (values) {\n      if (Array.isArray(values)) {\n        for (let value of values) {\n          headers.append(key, value);\n        }\n      } else {\n        headers.set(key, values);\n      }\n    }\n  }\n  let init = {\n    method: req.method,\n    headers,\n    signal: controller.signal\n  };\n  if (req.method !== \"GET\" && req.method !== \"HEAD\") {\n    init.body = req.body;\n  }\n  return new Request(url.href, init);\n}\n;\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/ssr/server/request.js");

/***/ }),

/***/ "./webpack/dev/webpack.dev.client.js":
/*!*******************************************!*\
  !*** ./webpack/dev/webpack.dev.client.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst {\n  merge\n} = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst baseConfig = __webpack_require__(/*! ../webpack.base.js */ \"./webpack/webpack.base.js\");\nconst ROOT_DIR = path.resolve(__dirname, '../../');\nconst resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);\nconst BUILD_DIR = resolvePath('dist');\nconst LoadablePlugin = __webpack_require__(/*! @loadable/webpack-plugin */ \"@loadable/webpack-plugin\");\nconst MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\nconst CopyWebpackPlugin = __webpack_require__(/*! copy-webpack-plugin */ \"copy-webpack-plugin\");\nconst clientConfig = {\n  target: 'web',\n  mode: 'development',\n  entry: {\n    client: ['webpack-hot-middleware/client?reload=true&noInfo=true', './ssr/client/index.jsx']\n  },\n  devtool: 'inline-cheap-module-source-map',\n  devServer: {\n    contentBase: './dist',\n    compress: true,\n    historyApiFallback: true,\n    hot: true,\n    open: true\n  },\n  output: {\n    path: resolvePath(BUILD_DIR, 'client'),\n    publicPath: '/client/',\n    filename: '[name].js',\n    chunkFilename: '[name].js',\n    // Point sourcemap entries to original disk location (format as URL on Windows)\n    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\\\/g, '/'),\n    assetModuleFilename: 'assets/[hash][ext][query]'\n  },\n  resolve: {\n    ...baseConfig.resolve\n  },\n  module: {\n    ...baseConfig.module,\n    rules: [{\n      test: /\\.(css|less|styl|scss|sass|sss)$/,\n      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']\n    }]\n  },\n  plugins: [new MiniCssExtractPlugin(), new webpack.HotModuleReplacementPlugin(),\n  //loadable plugin will create all the chunks\n  new LoadablePlugin({\n    outputAsset: false,\n    // to avoid writing loadable-stats in the same output as client\n    writeToDisk: true,\n    filename: `${BUILD_DIR}/loadable-stats.json`\n  }), new CopyWebpackPlugin({\n    patterns: [{\n      from: 'public'\n    }]\n  })\n  // you can add additional plugins here like BundleAnalyzerPlugin, Copy Plugin etc.\n  ],\n  optimization: {\n    runtimeChunk: 'single',\n    // creates a runtime file to be shared for all generated chunks.\n    splitChunks: {\n      chunks: 'all',\n      // This indicates which chunks will be selected for optimization.\n      automaticNameDelimiter: '-',\n      cacheGroups: {\n        vendor: {\n          // to convert long vendor generated large name into vendor.js\n          test: /[\\\\/]node_modules[\\\\/]/,\n          name: 'vendor',\n          chunks: 'all'\n        }\n      }\n    },\n    minimize: false,\n    minimizer: []\n  }\n};\nmodule.exports = merge(baseConfig, clientConfig);\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/webpack/dev/webpack.dev.client.js");

/***/ }),

/***/ "./webpack/webpack.base.js":
/*!*********************************!*\
  !*** ./webpack/webpack.base.js ***!
  \*********************************/
/***/ ((module) => {

eval("const scriptExtensions = /\\.(tsx|ts|js|jsx|mjs)$/;\nconst imageExtensions = /\\.(bmp|gif|jpg|jpeg|png)$/;\nconst fontsExtension = /\\.(eot|otf|ttf|woff|woff2)$/;\nmodule.exports = {\n  resolve: {\n    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']\n  },\n  module: {\n    rules: [{\n      test: scriptExtensions,\n      exclude: /node_modules/,\n      use: 'babel-loader'\n    }, {\n      test: fontsExtension,\n      type: 'asset'\n    }, {\n      test: /\\.svg/,\n      type: 'asset/inline'\n    }, {\n      test: imageExtensions,\n      type: 'asset/resource'\n    }]\n  }\n};\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/webpack/webpack.base.js");

/***/ }),

/***/ "./websocket/client.js":
/*!*****************************!*\
  !*** ./websocket/client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   websocketSendEcho: () => (/* binding */ websocketSendEcho),\n/* harmony export */   websocketSendPing: () => (/* binding */ websocketSendPing)\n/* harmony export */ });\nconst websocketClient = new WebSocket('ws://localhost:9000');\nwebsocketClient.onopen = function () {\n  console.log('подключился');\n};\nwebsocketClient.onmessage = function (message) {\n  console.log('Message: %s', message.data);\n};\nconst websocketSendEcho = value => {\n  if (typeof window !== 'object') {\n    return;\n  }\n  try {\n    websocketClient.send(JSON.stringify({\n      action: 'ECHO',\n      data: value.toString()\n    }));\n  } catch (err) {\n    console.log(err);\n  }\n};\nconst websocketSendPing = () => {\n  websocketClient.send(JSON.stringify({\n    action: 'PING'\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (websocketClient);\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/websocket/client.js");

/***/ }),

/***/ "./src/layouts/default.sass":
/*!**********************************!*\
  !*** ./src/layouts/default.sass ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=Users/admin/Documents/vCode/stones/front/src/layouts/default.sass");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/server");

/***/ }),

/***/ "@loadable/webpack-plugin":
/*!*******************************************!*\
  !*** external "@loadable/webpack-plugin" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/webpack-plugin");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ "copy-webpack-plugin":
/*!**************************************!*\
  !*** external "copy-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("copy-webpack-plugin");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet-async":
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet-async");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("serialize-javascript");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-merge");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "chunks/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"server": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./ssr/server/index.jsx");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;