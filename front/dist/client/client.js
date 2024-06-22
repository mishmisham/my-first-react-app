/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/primitives/Preloader/preloader.jsx":
/*!***********************************************************!*\
  !*** ./src/components/primitives/Preloader/preloader.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./src/graphql/refreshJWT.js":
/*!***********************************!*\
  !*** ./src/graphql/refreshJWT.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshJWT: () => (/* binding */ refreshJWT),
/* harmony export */   runJWTRefresher: () => (/* binding */ runJWTRefresher)
/* harmony export */ });
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/config.js */ "./src/config/config.js");

const REFRESH_JWT_TOKEN = `
    mutation RefreshJWTToken($input: RefreshTokensInput!) {
        refreshTokens(input: $input) {
            data {
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
const refreshJWT = async () => {
  console.log('refresh token');
  const qlHost = {"env":{"GRAPHQL_HOST":"http://localhost:4000/ql/","FRONTEND_PORT":"3000","WS_PORT":"9000","NODE_ENV":"development"}}.env.GRAPHQL_HOST;
  try {
    var _response, _response2;
    const refresh_token = localStorage.getItem('refreshToken');
    if (!refresh_token) {
      return;
    }
    let response = await fetch(qlHost, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: REFRESH_JWT_TOKEN,
        variables: {
          input: {
            refresh_token
          }
        }
      })
    });
    response = await response.json();
    const issetData = ((_response = response) === null || _response === void 0 || (_response = _response.data) === null || _response === void 0 || (_response = _response.reAuthorize) === null || _response === void 0 ? void 0 : _response.data) && !response.errors && !((_response2 = response) !== null && _response2 !== void 0 && (_response2 = _response2.data) !== null && _response2 !== void 0 && (_response2 = _response2.reAuthorize) !== null && _response2 !== void 0 && _response2.errors);
    if (issetData && res) {
      res.cookie('token', response.data.refreshTokens.data.accessToken, {
        maxAge: _config_config_js__WEBPACK_IMPORTED_MODULE_0__.ACCESS_TOKEN_TIMEOUT
      });
    }
    if (issetData) {
      return response.data.refreshTokens.data;
    }
    return null;
  } catch (err) {
    return null;
  }
};
const runJWTRefresher = () => {
  // секунду на обновление токена
  const safeRefreshTimeout = _config_config_js__WEBPACK_IMPORTED_MODULE_0__.ACCESS_TOKEN_TIMEOUT - 1000;
  if (window.__refreshJWTTimeout__) {
    clearTimeout(window.__refreshJWTTimeout__);
  }
  window.__refreshJWTTimeout__ = setTimeout(() => {
    refreshJWT();
    runJWTRefresher();
  }, safeRefreshTimeout);
};

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/@remix-run/router/dist/router.js");
/* harmony import */ var _components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/primitives/Preloader/preloader */ "./src/components/primitives/Preloader/preloader.jsx");



const LayoutComponent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(4)]).then(__webpack_require__.bind(__webpack_require__, /*! @/layouts/default */ "./src/layouts/default.jsx")));
const HomePage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(9)]).then(__webpack_require__.bind(__webpack_require__, /*! @/pages/PageFirst */ "./src/pages/PageFirst.jsx")));
const SecondPage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(10)]).then(__webpack_require__.bind(__webpack_require__, /*! @/pages/PageSecond */ "./src/pages/PageSecond.jsx")));
const LoginPage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(__webpack_require__, /*! @/pages/AuthPage/AuthPage */ "./src/pages/AuthPage/AuthPage.jsx")));
const routesArray = [{
  path: "/",
  name: 'Home',
  async loader() {
    // console.log('LOADER', res)
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.json)({
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
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        height: "300px"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HomePage, null)));
  }
}, {
  path: "/second",
  name: 'Second page',
  loader() {
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.json)({
      message: "Welcome to React Router!"
    });
  },
  Component() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LayoutComponent, {
      title: "Second page",
      description: "other page seo description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      isDeferred: true,
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        height: "300px"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SecondPage, null)));
  }
}, {
  path: '/auth',
  name: 'Auth',
  Component() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LayoutComponent, {
      title: "Login"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      isDeferred: true,
      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/dist/redux.mjs");
/* harmony import */ var _user_userReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/userReducer */ "./src/store/reducers/user/userReducer.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  user: _user_userReducer__WEBPACK_IMPORTED_MODULE_0__["default"]
}));

/***/ }),

/***/ "./src/store/reducers/user/userReducer.js":
/*!************************************************!*\
  !*** ./src/store/reducers/user/userReducer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   setupUser: () => (/* binding */ setupUser),
/* harmony export */   userSlice: () => (/* binding */ userSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");

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
    }
  }
});
const {
  setupUser
} = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);

/***/ }),

/***/ "./ssr/client/apolloClient.js":
/*!************************************!*\
  !*** ./ssr/client/apolloClient.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configureApolloClient: () => (/* binding */ configureApolloClient)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/link/http/createHttpLink.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/core/ApolloClient.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/link/context */ "./node_modules/@apollo/client/link/context/index.js");


const configureApolloClient = () => {
  const httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink)({
    uri: {"env":{"GRAPHQL_HOST":"http://localhost:4000/ql/","FRONTEND_PORT":"3000","WS_PORT":"9000","NODE_ENV":"development"}}.env.GRAPHQL_HOST,
    credentials: 'include' // || same-origin
  });
  const authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_1__.setContext)(async (_, {
    headers
  }) => {
    // const token = Cookies.get('token');
    return {
      headers: {
        ...headers
        // authorization: token || '',
      }
    };
  });
  const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache().restore(window.__APOLLO_STATE__),
    ssrMode: true,
    link: authLink.concat(httpLink),
    credentials: 'include',
    ssrForceFetchDelay: 100,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: {
          cookie: headers && headers.cookie
        }
      });
    }
  });
  return client;
};

/***/ }),

/***/ "./ssr/client/createStore.js":
/*!***********************************!*\
  !*** ./ssr/client/createStore.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/reducers */ "./src/store/reducers/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _graphql_reAuthorizeWithJWT_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/reAuthorizeWithJWT.js */ "./src/graphql/reAuthorizeWithJWT.js");
/* harmony import */ var _graphql_refreshJWT_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/graphql/refreshJWT.js */ "./src/graphql/refreshJWT.js");






// авторизационные коррекции на фронте
const onBeforeInitStoreMiddleware = async () => {
  const currentState = window.__INITIAL_STATE__;
  let isAuthorized = false;

  // если авторизовались через куку на сервере - сохраним в localStorage новое значение
  if ('refreshToken' in currentState.user.about) {
    localStorage.setItem('refreshToken', currentState.user.about.refreshToken);
    delete window.__INITIAL_STATE__.user.about.refreshToken;
    isAuthorized = true;
  }
  if ('accessToken' in currentState.user.about) {
    // Cookies.set('token', currentState.user.about.accessToken)
    delete window.__INITIAL_STATE__.user.about.accessToken;
    isAuthorized = true;
  }

  // если не авторизовались но в localStorage есть refreshToken - пробуем авторизоваться через него
  const refreshToken = localStorage.getItem('refreshToken');
  if (!('id' in currentState.user.about) && refreshToken) {
    const userData = await (0,_graphql_reAuthorizeWithJWT_js__WEBPACK_IMPORTED_MODULE_2__.reAuthorizeWithJWT)(refreshToken, 'refreshToken');
    if (userData) {
      localStorage.setItem('refreshToken', userData.refreshToken);
      js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set('token', userData.accessToken);
      delete userData.refreshToken;
      delete userData.accessToken;
      window.__INITIAL_STATE__.user.about = {
        ...window.__INITIAL_STATE__.user.about,
        ...userData
      };
      isAuthorized = true;
    }
  }
  if (isAuthorized) {
    // обновление access и refresh по таймауту
    (0,_graphql_refreshJWT_js__WEBPACK_IMPORTED_MODULE_3__.runJWTRefresher)();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
  await onBeforeInitStoreMiddleware();
  const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
    reducer: _store_reducers__WEBPACK_IMPORTED_MODULE_0__["default"],
    preloadedState: window.__INITIAL_STATE__
    // devTools: process.env.NODE_ENV !== 'production',
  });
  delete window.__INITIAL_STATE__;
  return store;
});

/***/ }),

/***/ "./ssr/client/index.jsx":
/*!******************************!*\
  !*** ./ssr/client/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/context/ApolloProvider.js");
/* harmony import */ var _apolloClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apolloClient */ "./ssr/client/apolloClient.js");
/* harmony import */ var _routes_routesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/routes/routesData */ "./src/routes/routesData.js");
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createStore */ "./ssr/client/createStore.js");








const renderApp = async () => {
  const apolloClient = (0,_apolloClient__WEBPACK_IMPORTED_MODULE_2__.configureApolloClient)();
  const router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.createBrowserRouter)(_routes_routesData__WEBPACK_IMPORTED_MODULE_3__.routesArray);
  const store = await (0,_createStore__WEBPACK_IMPORTED_MODULE_4__["default"])();
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot(document.querySelector('#root'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {
    client: apolloClient
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.RouterProvider, {
    router: router,
    suppressHydrationWarning: true
  }))));
};
renderApp();

/***/ }),

/***/ "./src/components/primitives/Preloader/preloader.sass":
/*!************************************************************!*\
  !*** ./src/components/primitives/Preloader/preloader.sass ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 			return "" + ({"1":"components-componentA","2":"components-componentB"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 1 ? "components-componentA" : chunkId) + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/client/";
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
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"1":1,"4":1,"5":1,"6":1,"7":1};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [3], () => (__webpack_require__("./ssr/client/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=client.js.map