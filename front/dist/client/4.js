"use strict";
(Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] || []).push([[4],{

/***/ "./src/components/combined/logout/logoutButton.jsx":
/*!*********************************************************!*\
  !*** ./src/components/combined/logout/logoutButton.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony import */ var _layouts_parts_GlobalLayoutContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/parts/GlobalLayoutContext */ "./src/layouts/parts/GlobalLayoutContext.js");
/* harmony import */ var _store_reducers_user_userReducer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/reducers/user/userReducer.js */ "./src/store/reducers/user/userReducer.js");
let _ = t => t,
  _t;







const LOGOUT_ACTION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_t || (_t = _`
    mutation LogoutAction($input: LogoutInput!) {
        logout(input: $input) {
            result
        }
    }
`));
const LogoutButton = () => {
  const userID = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user.about.id);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const layoutContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_layouts_parts_GlobalLayoutContext__WEBPACK_IMPORTED_MODULE_2__.GlobalLayoutContext);
  const [logout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(LOGOUT_ACTION, {
    onError: ({
      operation,
      response,
      graphQLErrors,
      networkError
    }) => {
      layoutContext.showNotify({
        text: 'graphql error' + graphQLErrors.join(' ')
      });
    }
  });
  const letsLogout = () => {
    try {
      logout({
        variables: {
          input: {
            id: userID
          }
        }
      }).then(res => {
        dispatch((0,_store_reducers_user_userReducer_js__WEBPACK_IMPORTED_MODULE_3__.logoutUser)());
        localStorage.removeItem('refreshToken');
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set('token', '');
        navigate('/');
      });
    } catch (err) {
      console.log(err);
      layoutContext.showNotify({
        text: 'graphql error' + JSON.stringify(err)
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: letsLogout
  }, "Log out");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoutButton);

/***/ }),

/***/ "./src/components/primitives/notifyComponent/notifyComponent.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/primitives/notifyComponent/notifyComponent.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notifyComponent_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyComponent.sass */ "./src/components/primitives/notifyComponent/notifyComponent.sass");



const NotifyComponent = ({
  show,
  text,
  timeout,
  type,
  onHide
}) => {
  const [displayNotify, setDisplayNotify] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [displayTimeout, setDisplayTimeout] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5000);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (timeout) {
      setDisplayTimeout(timeout);
    }
    setDisplayNotify(show);
    if (displayTimeout > 0 && displayNotify) {
      setTimeout(() => {
        onHide();
        setDisplayNotify(false);
      }, displayTimeout);
    }
  });
  const hideNotify = () => {
    onHide();
    setDisplayNotify(false);
  };
  const wrapperClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'notify-component': true,
    'notify-component--visible': displayNotify,
    'notify-component--hidden': !displayNotify
  });
  const innerContentClass = 'notify-component_inner-content notify-component_inner-content--' + type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: wrapperClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "notify-component_inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: innerContentClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "notify-component_inner-content-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: hideNotify,
    className: "notify-component_inner-content-header-close"
  }, "x")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "notify-component_inner-content-body"
  }, text))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotifyComponent);

/***/ }),

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
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");
/* harmony import */ var _default_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.sass */ "./src/layouts/default.sass");
/* harmony import */ var _parts_NavMenu_navMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/NavMenu/navMenu */ "./src/layouts/parts/NavMenu/navMenu.jsx");
/* harmony import */ var _parts_userShortInfo_userShortInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/userShortInfo/userShortInfo */ "./src/layouts/parts/userShortInfo/userShortInfo.jsx");
/* harmony import */ var _components_primitives_notifyComponent_notifyComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/primitives/notifyComponent/notifyComponent */ "./src/components/primitives/notifyComponent/notifyComponent.jsx");
/* harmony import */ var _parts_defaultFooter_defaultFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/defaultFooter/defaultFooter */ "./src/layouts/parts/defaultFooter/defaultFooter.jsx");
/* harmony import */ var _parts_GlobalLayoutContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/GlobalLayoutContext */ "./src/layouts/parts/GlobalLayoutContext.js");
/* harmony import */ var _websocket_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/websocket/client */ "./src/websocket/client.js");









const Layout = ({
  children,
  title,
  description
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== undefined) {
      (0,_websocket_client__WEBPACK_IMPORTED_MODULE_7__.websocketSend)('lorem!');
    }
  });
  const [displayNotify, setDisplayNotify] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    show: false,
    text: '',
    type: 'error',
    timeout: 5000
  });
  const showNotify = params => {
    setDisplayNotify({
      ...displayNotify,
      ...params,
      show: true
    });
  };
  const onHideNotify = () => {
    setDisplayNotify({
      ...displayNotify,
      show: false,
      text: ''
    });
  };
  const contextData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    showNotify
  }), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_8__.HelmetProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_8__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_NavMenu_navMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_userShortInfo_userShortInfo__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content_page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_GlobalLayoutContext__WEBPACK_IMPORTED_MODULE_6__.GlobalLayoutContext.Provider, {
    value: contextData
  }, children))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_defaultFooter_defaultFooter__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_notifyComponent_notifyComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: displayNotify.show,
    text: displayNotify.text,
    type: displayNotify.type,
    timeout: displayNotify.timeout,
    onHide: onHideNotify
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/layouts/parts/GlobalLayoutContext.js":
/*!**************************************************!*\
  !*** ./src/layouts/parts/GlobalLayoutContext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalLayoutContext: () => (/* binding */ GlobalLayoutContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const GlobalLayoutContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  showNotify: () => {}
});

/***/ }),

/***/ "./src/layouts/parts/NavMenu/navMenu.jsx":
/*!***********************************************!*\
  !*** ./src/layouts/parts/NavMenu/navMenu.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _routes_routesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes/routesData */ "./src/routes/routesData.js");
/* harmony import */ var _navMenu_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navMenu.sass */ "./src/layouts/parts/NavMenu/navMenu.sass");





const NavMenu = () => {
  const userID = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.user.about.id);
  const filteredRoutes = _routes_routesData__WEBPACK_IMPORTED_MODULE_1__.routesArray.filter(route => {
    if (userID > 0) {
      return route.path !== '/auth';
    }
    return true;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "nav-menu"
  }, filteredRoutes.map((item, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
      className: "nav-menu_item",
      to: item.path,
      key: item.path
    }, item.name);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMenu);

/***/ }),

/***/ "./src/layouts/parts/defaultFooter/defaultFooter.jsx":
/*!***********************************************************!*\
  !*** ./src/layouts/parts/defaultFooter/defaultFooter.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultFooter_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultFooter.sass */ "./src/layouts/parts/defaultFooter/defaultFooter.sass");


const DefaultFooter = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "default-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 Hello world ", new Date().getFullYear())));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultFooter);

/***/ }),

/***/ "./src/layouts/parts/userShortInfo/userShortInfo.jsx":
/*!***********************************************************!*\
  !*** ./src/layouts/parts/userShortInfo/userShortInfo.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_client_only__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-client-only */ "./node_modules/react-client-only/index.mjs");
/* harmony import */ var _components_combined_logout_logoutButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/combined/logout/logoutButton */ "./src/components/combined/logout/logoutButton.jsx");
/* harmony import */ var _userShortInfo_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userShortInfo.sass */ "./src/layouts/parts/userShortInfo/userShortInfo.sass");





const UserShortInfo = () => {
  const userName = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user.about.name);
  if (userName) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_client_only__WEBPACK_IMPORTED_MODULE_1__.ClientOnly, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "user-short-info"
    }, userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_combined_logout_logoutButton__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserShortInfo);

/***/ }),

/***/ "./src/websocket/client.js":
/*!*********************************!*\
  !*** ./src/websocket/client.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   websocketSend: () => (/* binding */ websocketSend)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");

const websocketURL = 'ws://localhost:' + {"env":{"GRAPHQL_HOST":"http://localhost:4000/ql/","FRONTEND_PORT":"3000","WS_PORT":"9000","NODE_ENV":"development"}}.env.WS_PORT;
const connectionOptions = {
  "force new connection": true,
  "reconnectionAttempts": "Infinity",
  //avoid having user reconnect manually in order to prevent dead clients after a server restart
  "timeout": 10000,
  //before connect_error and connect_timeout are emitted.
  "transports": [
  // "polling",
  "websocket"
  // "webtransport"
  ]
  // withCredentials: true,
  // extraHeaders: {
  //   "my-custom-header": "abcd"
  // }
  // cors: {
  //     origin: websocketURL
  // }
};
const websocketClient = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(websocketURL, connectionOptions);
websocketClient.on('open', e => {
  console.log('websocket client open');
});
websocketClient.on('message', message => {
  console.log('Message: %s', message);
});
const websocketSend = value => {
  if (typeof window !== 'object') {
    return;
  }
  try {
    websocketClient.emit('message', {
      action: 'ECHO',
      data: value
    });
  } catch (err) {
    console.log(err);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (websocketClient);

/***/ }),

/***/ "./src/components/primitives/notifyComponent/notifyComponent.sass":
/*!************************************************************************!*\
  !*** ./src/components/primitives/notifyComponent/notifyComponent.sass ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/layouts/default.sass":
/*!**********************************!*\
  !*** ./src/layouts/default.sass ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/layouts/parts/NavMenu/navMenu.sass":
/*!************************************************!*\
  !*** ./src/layouts/parts/NavMenu/navMenu.sass ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/layouts/parts/defaultFooter/defaultFooter.sass":
/*!************************************************************!*\
  !*** ./src/layouts/parts/defaultFooter/defaultFooter.sass ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/layouts/parts/userShortInfo/userShortInfo.sass":
/*!************************************************************!*\
  !*** ./src/layouts/parts/userShortInfo/userShortInfo.sass ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=4.js.map