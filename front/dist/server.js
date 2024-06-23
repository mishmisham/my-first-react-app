/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/primitives/Preloader/preloader.jsx":
/*!***********************************************************!*\
  !*** ./src/components/primitives/Preloader/preloader.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preloader_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloader.sass */ "./src/components/primitives/Preloader/preloader.sass");


const Preloader = props => {
  const color = props.color || '#9a6eff';
  const iconSize = props.iconSize || '64px';
  const height = props.height || 'auto';
  const background = props.background || 'transparent';
  const computedStyle = {
    height,
    background
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: computedStyle,
    className: "preloader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: iconSize,
    height: iconSize,
    version: "1.1",
    id: "L7",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 100 100",
    enableBackground: "new 0 0 100 100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: color,
    d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "2s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: color,
    d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "1s",
    from: "0 50 50",
    to: "-360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fill: color,
    d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "2s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCESS_TOKEN_TIMEOUT: () => (/* binding */ ACCESS_TOKEN_TIMEOUT),
/* harmony export */   REFRESH_TOKEN_TIMEOUT: () => (/* binding */ REFRESH_TOKEN_TIMEOUT),
/* harmony export */   SECRET_LENGTH: () => (/* binding */ SECRET_LENGTH)
/* harmony export */ });
const SECRET_LENGTH = 32;
const ACCESS_TOKEN_TIMEOUT = 10 * 1000;
const REFRESH_TOKEN_TIMEOUT = 24 * 60 * 60 * 1000;

/***/ }),

/***/ "./src/graphql/reAuthorizeWithJWT.js":
/*!*******************************************!*\
  !*** ./src/graphql/reAuthorizeWithJWT.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reAuthorizeWithJWT: () => (/* binding */ reAuthorizeWithJWT)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/config.js */ "./src/config/config.js");

const REFETCH_WITH_ACCESS_TOKEN = `
    mutation ContinueWithAccessToken($input: ReAuthByTokenInput!) {
        reAuthorize(input: $input) {
            data {
                name
                id
                email
                refreshToken
                accessToken
            }
            errors {
                message
                errors
            }
        }
    }
`;
const reAuthorizeWithJWT = async (token, mode = 'accessToken', req = null, res = null) => {
  const qlHost = {"env":{"GRAPHQL_HOST":"http://localhost:4000/ql/","FRONTEND_PORT":"3000","WS_PORT":"9000","NODE_ENV":"development"}}.env.GRAPHQL_HOST;
  try {
    var _response, _response2;
    let response = await fetch(qlHost, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: REFETCH_WITH_ACCESS_TOKEN,
        variables: {
          input: {
            token,
            mode
          }
        }
      })
    });
    response = await response.json();
    const issetData = ((_response = response) === null || _response === void 0 || (_response = _response.data) === null || _response === void 0 || (_response = _response.reAuthorize) === null || _response === void 0 ? void 0 : _response.data) && !response.errors && !((_response2 = response) !== null && _response2 !== void 0 && (_response2 = _response2.data) !== null && _response2 !== void 0 && (_response2 = _response2.reAuthorize) !== null && _response2 !== void 0 && _response2.errors);
    if (issetData && res) {
      res.cookie('token', response.data.reAuthorize.data.accessToken, {
        maxAge: _config_config_js__WEBPACK_IMPORTED_MODULE_0__.ACCESS_TOKEN_TIMEOUT
      });
    }
    if (issetData) {
      return response.data.reAuthorize.data;
    }
    return null;
  } catch (err) {
    return null;
  }
};

/***/ }),

/***/ "./src/routes/routesData.js":
/*!**********************************!*\
  !*** ./src/routes/routesData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routesArray: () => (/* binding */ routesArray)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/primitives/Preloader/preloader */ "./src/components/primitives/Preloader/preloader.jsx");




const LayoutComponent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_layouts_default_jsx").then(__webpack_require__.bind(__webpack_require__, /*! @/layouts/default */ "./src/layouts/default.jsx")));
const HomePage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_pages_PageFirst_jsx").then(__webpack_require__.bind(__webpack_require__, /*! @/pages/PageFirst */ "./src/pages/PageFirst.jsx")));
const SecondPage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_pages_PageSecond_jsx").then(__webpack_require__.bind(__webpack_require__, /*! @/pages/PageSecond */ "./src/pages/PageSecond.jsx")));
const LoginPage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_pages_AuthPage_AuthPage_jsx").then(__webpack_require__.bind(__webpack_require__, /*! @/pages/AuthPage/AuthPage */ "./src/pages/AuthPage/AuthPage.jsx")));
const routesArray = [{
  path: "/",
  name: 'Home',
  async loader() {
    // console.log('LOADER', res)
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.json)({
      message: "Welcome to React Router!"
    });
  },
  loadData: async ({
    dispatch
  }) => {
    // console.log('reload', res)
  },
  Component() {
    // let data = useLoaderData();
    // console.log(data)

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LayoutComponent, {
      title: "Homepage",
      description: "home page seo description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      isDeferred: true,
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        height: "300px"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HomePage, null)));
  }
}, {
  path: "/second",
  name: 'Second page',
  loader() {
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.json)({
      message: "Welcome to React Router!"
    });
  },
  Component() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LayoutComponent, {
      title: "Second page",
      description: "other page seo description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      isDeferred: true,
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        height: "300px"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SecondPage, null)));
  }
}, {
  path: '/auth',
  name: 'Auth',
  // это server side мидлвара
  // (редиректим на главную если авторизован)
  loadData: async (store, req, res) => {
    var _store$getState$user$;
    if (((_store$getState$user$ = store.getState().user.about) === null || _store$getState$user$ === void 0 ? void 0 : _store$getState$user$.id) > 0) {
      res.redirect(301, '/');
    }
  },
  Component() {
    // редирект авторизованным если переходят по внутреннему роутеру
    const userID = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user.about.id);
    try {
      // useNavigate почему то не срабатывает
      if (userID > 0 && window) {
        window.location.replace('/');
      }
    } catch (err) {
      console.log("Oops, `window` is not defined");
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LayoutComponent, {
      title: "Login"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      isDeferred: true,
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        height: "300px"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoginPage, null)));
  }
}];

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/userReducer */ "./src/store/reducers/user/userReducer.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  user: _user_userReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/user/userReducer.js":
/*!************************************************!*\
  !*** ./src/store/reducers/user/userReducer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   logoutUser: () => (/* binding */ logoutUser),
/* harmony export */   setupUser: () => (/* binding */ setupUser),
/* harmony export */   userSlice: () => (/* binding */ userSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'user',
  initialState: {
    about: {
      name: ''
    }
  },
  reducers: {
    setupUser: (state, action) => {
      state.about = {
        ...state.about,
        ...action.payload
      };
    },
    logoutUser: state => {
      state.about = {
        name: ''
      };
    }
  }
});
const {
  setupUser,
  logoutUser
} = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);

/***/ }),

/***/ "./src/utils/getCookie.js":
/*!********************************!*\
  !*** ./src/utils/getCookie.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCookie: () => (/* binding */ getCookie)
/* harmony export */ });
const getCookie = (cookiename, cookie) => {
  const cookiestring = RegExp(cookiename + "=[^;]+").exec(cookie);
  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : "");
};

/***/ }),

/***/ "./ssr/server/createStore.js":
/*!***********************************!*\
  !*** ./ssr/server/createStore.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/reducers */ "./src/store/reducers/index.js");
/* harmony import */ var _store_reducers_user_userReducer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/reducers/user/userReducer.js */ "./src/store/reducers/user/userReducer.js");
/* harmony import */ var _routes_routesData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/routes/routesData.js */ "./src/routes/routesData.js");
/* harmony import */ var _utils_getCookie_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/getCookie.js */ "./src/utils/getCookie.js");
/* harmony import */ var _graphql_reAuthorizeWithJWT_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/graphql/reAuthorizeWithJWT.js */ "./src/graphql/reAuthorizeWithJWT.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  // const axiosInstance = axios.create({
  //     baseURL: '/',
  //     headers: {
  //         cookie: req.get('cookie') || '',
  //     },
  // });

  const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: _store_reducers__WEBPACK_IMPORTED_MODULE_4__["default"]
    // middleware: ()=>[withExtraArgument(axiosInstance)],
    // devTools: process.env.NODE_ENV !== 'production',
  });

  // пробуем авторизоваться на стороне сервера
  const accessToken = (0,_utils_getCookie_js__WEBPACK_IMPORTED_MODULE_7__.getCookie)('token', req.get('cookie'));
  if (accessToken) {
    const userData = await (0,_graphql_reAuthorizeWithJWT_js__WEBPACK_IMPORTED_MODULE_8__.reAuthorizeWithJWT)(accessToken, 'accessToken', req, res);
    if (userData) {
      store.dispatch((0,_store_reducers_user_userReducer_js__WEBPACK_IMPORTED_MODULE_5__.setupUser)(userData));
    }
  }
  const PromiseArray = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.matchRoutes)(_routes_routesData_js__WEBPACK_IMPORTED_MODULE_6__.routesArray, req.path);
  let promises = [];
  const promiseList = PromiseArray ? PromiseArray.map(({
    route
  }) => {
    return route && route !== null && route !== void 0 && route.loadData ? route === null || route === void 0 ? void 0 : route.loadData(store, req, res) : null;
  }) : null;
  if (promiseList) {
    promises = [...promises, promiseList.map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    })];
  }
  await Promise.all(promises);
  return store;
});

/***/ }),

/***/ "./ssr/server/index.jsx":
/*!******************************!*\
  !*** ./ssr/server/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack */ "webpack");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");
/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");
/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderer.js */ "./ssr/server/renderer.js");
/* harmony import */ var _createStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createStore.js */ "./ssr/server/createStore.js");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_8__);
/* eslint @typescript-eslint/no-var-requires: 0 */










dotenv__WEBPACK_IMPORTED_MODULE_2___default().config();
const port = {"env":{"GRAPHQL_HOST":"http://localhost:4000/ql/","FRONTEND_PORT":"3000","WS_PORT":"9000","NODE_ENV":"development"}}.env.FRONTEND_PORT;
const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const corsOptions = {
  origin: 'http://localhost',
  credentials: true
};
app.use(cors__WEBPACK_IMPORTED_MODULE_8___default()(corsOptions));
if (true) {
  const webpackConfig = __webpack_require__(/*! ../../webpack/dev/webpack.dev.client.js */ "./webpack/dev/webpack.dev.client.js");
  const compiler = webpack__WEBPACK_IMPORTED_MODULE_3___default()(webpackConfig);
  app.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler, {
    publicPath: webpackConfig.output.publicPath,
    serverSideRender: true
  }));
  app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_5___default()(compiler));
}
app.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]("dist"));
app.get("*", async (req, res) => {
  const context = {};
  const store = await (0,_createStore_js__WEBPACK_IMPORTED_MODULE_7__["default"])(req, res);
  await (0,_renderer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(req, res, store, context);
  try {
    if (context.url) {
      res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
  } catch (err) {
    console.log("error in rendering server side:", err);
  }
});
app.listen(port, () => {
  console.log("Listening on port " + port);
});

/***/ }),

/***/ "./ssr/server/renderer.js":
/*!********************************!*\
  !*** ./ssr/server/renderer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_routes_routesData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/routes/routesData.js */ "./src/routes/routesData.js");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request */ "./ssr/server/request.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res, store, contextData) => {
  const apolloClient = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloClient({
    ssrMode: true,
    link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.createHttpLink)({
      uri: {"env":{"GRAPHQL_HOST":"http://localhost:4000/ql/","FRONTEND_PORT":"3000","WS_PORT":"9000","NODE_ENV":"development"}}.env.GRAPHQL_HOST,
      credentials: 'same-origin',
      // ||  include
      headers: {
        cookie: req.header('Cookie')
      }
    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.InMemoryCache()
  });
  const handler = (0,react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.createStaticHandler)(_src_routes_routesData_js__WEBPACK_IMPORTED_MODULE_2__.routesArray);
  const fetchRequest = (0,_request__WEBPACK_IMPORTED_MODULE_6__.createFetchRequest)(req, res);
  const context = await handler.query(fetchRequest);
  const router = (0,react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.createStaticRouter)(handler.dataRoutes, context, {
    future: {
      v7_partialHydration: true
    }
  });
  const initialApolloState = apolloClient.extract();
  const App = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
      rel: "stylesheet",
      href: "/client/client.css"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
      rel: "icon",
      type: "image/x-icon",
      href: "/client/favicon.ico"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "App")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      id: "root"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {
      client: apolloClient
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
      store: store
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouterProvider, {
      router: router,
      context: context,
      location: req.url
    }))))));
  };
  const {
    pipe,
    abort
  } = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_7__.renderToPipeableStream)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), {
    bootstrapScripts: ['/client/vendor.js', '/client/client.js'],
    bootstrapScriptContent: `
        window.__APOLLO_STATE__ = ${serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(initialApolloState)};
        window.__INITIAL_STATE__ = ${serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState())};
      `,
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    }
  });
});

/***/ }),

/***/ "./ssr/server/request.js":
/*!*******************************!*\
  !*** ./ssr/server/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFetchRequest: () => (/* binding */ createFetchRequest)
/* harmony export */ });
function createFetchRequest(req, res) {
  let origin = `${req.protocol}://${req.get("host")}`;
  let url = new URL(req.originalUrl || req.url, origin);
  let controller = new AbortController();
  res.on("close", () => controller.abort());
  let headers = new Headers();
  for (let [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (let value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }
  let init = {
    method: req.method,
    headers,
    signal: controller.signal
  };
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }
  return new Request(url.href, init);
}
;

/***/ }),

/***/ "./webpack/dev/webpack.dev.client.js":
/*!*******************************************!*\
  !*** ./webpack/dev/webpack.dev.client.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const webpack = __webpack_require__(/*! webpack */ "webpack");
const {
  merge
} = __webpack_require__(/*! webpack-merge */ "webpack-merge");
const path = __webpack_require__(/*! path */ "path");
const baseConfig = __webpack_require__(/*! ../webpack.base.js */ "./webpack/webpack.base.js");
const ROOT_DIR = path.resolve(__dirname, '../../');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('dist');
const MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ "mini-css-extract-plugin");
const CopyWebpackPlugin = __webpack_require__(/*! copy-webpack-plugin */ "copy-webpack-plugin");
const clientConfig = {
  target: 'web',
  mode: 'development',
  entry: {
    client: ['./ssr/client/index.jsx']
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    historyApiFallback: true
    // hot: true,
    // open: true,
  },
  output: {
    path: resolvePath(BUILD_DIR, 'client'),
    publicPath: '/client/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    asyncChunks: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
    globalObject: `typeof self !== 'undefined' ? self : this`
  },
  resolve: {
    ...baseConfig.resolve
  },
  module: {
    ...baseConfig.module,
    rules: [{
      test: /\.(css|less|styl|scss|sass|sss)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }]
  },
  plugins: [new MiniCssExtractPlugin(), new CopyWebpackPlugin({
    patterns: [{
      from: 'public'
    }]
  })],
  optimization: {
    chunkIds: 'natural',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    minimize: false
  }
};
module.exports = merge(baseConfig, clientConfig);

/***/ }),

/***/ "./webpack/webpack.base.js":
/*!*********************************!*\
  !*** ./webpack/webpack.base.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const webpack = __webpack_require__(/*! webpack */ "webpack");
const dotenv = (__webpack_require__(/*! dotenv */ "dotenv").config)({
  path: '.env',
  safe: true
});
const path = __webpack_require__(/*! path */ "path");
const scriptExtensions = /\.(tsx|ts|js|jsx|mjs)$/;
const imageExtensions = /\.(bmp|gif|jpg|jpeg|png)$/;
const fontsExtension = /\.(eot|otf|ttf|woff|woff2)$/;
const isDevelopment = "development" !== 'production';
module.exports = {
  // devtool: false,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@/pages': path.resolve(__dirname, '../src/pages'),
      '@/layouts': path.resolve(__dirname, '../src/layouts'),
      '@/component': path.resolve(__dirname, '../src/components'),
      '@/store': path.resolve(__dirname, '../src/store'),
      '@/router': path.resolve(__dirname, '../src/routes'),
      '@/graphql': path.resolve(__dirname, '../src/graphql'),
      '@/websocket': path.resolve(__dirname, '../src/websocket'),
      '@/utils': path.resolve(__dirname, '../src/utils'),
      '@/config': path.resolve(__dirname, '../src/config')
    }
  },
  module: {
    rules: [{
      test: scriptExtensions,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          sourceMaps: true
        }
      }
    }, {
      test: fontsExtension,
      type: 'asset'
    }, {
      test: /\.svg/,
      type: 'asset/inline'
    }, {
      test: imageExtensions,
      type: 'asset/resource'
    }]
  },
  plugins: [new webpack.DefinePlugin({
    process: JSON.stringify({
      env: {
        ...dotenv.parsed,
        NODE_ENV: isDevelopment ? 'development' : 'production'
      }
    })
  })]
};

/***/ }),

/***/ "./src/components/primitives/Preloader/preloader.sass":
/*!************************************************************!*\
  !*** ./src/components/primitives/Preloader/preloader.sass ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/component");

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

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

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

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

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

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-client-only":
/*!************************************!*\
  !*** external "react-client-only" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-client-only");

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
/******/ 			return "client/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
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
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"server": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"src_layouts_default_jsx":1,"components-componentA":1,"src_components_combined_login_LoginForms_jsx":1,"src_components_combined_login_forms_authForm_authForm_jsx":1,"src_components_combined_login_forms_registerForm_registerForm_jsx":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
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
//# sourceMappingURL=server.js.map