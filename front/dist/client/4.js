"use strict";
(Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] || []).push([[4],{

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
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");
/* harmony import */ var _default_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.sass */ "./src/layouts/default.sass");
/* harmony import */ var _parts_NavMenu_navMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/NavMenu/navMenu */ "./src/layouts/parts/NavMenu/navMenu.jsx");
/* harmony import */ var _parts_defaultFooter_defaultFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/defaultFooter/defaultFooter */ "./src/layouts/parts/defaultFooter/defaultFooter.jsx");
/* harmony import */ var _websocket_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/websocket/client */ "./src/websocket/client.js");






const Layout = ({
  children,
  title,
  description
}) => {
  _websocket_client__WEBPACK_IMPORTED_MODULE_4__["default"].addEventListener("open", ev => {
    (0,_websocket_client__WEBPACK_IMPORTED_MODULE_4__.websocketSendEcho)('lorem!');
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_5__.HelmetProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_5__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: description
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_NavMenu_navMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content_page"
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_defaultFooter_defaultFooter__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _routes_routesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes/routesData */ "./src/routes/routesData.js");
/* harmony import */ var _navMenu_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navMenu.sass */ "./src/layouts/parts/NavMenu/navMenu.sass");




const NavMenu = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "nav-menu"
  }, _routes_routesData__WEBPACK_IMPORTED_MODULE_1__.routesArray.map((item, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
      className: "nav-menu_item",
      to: item.path,
      key: key
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

/***/ "./src/websocket/client.js":
/*!*********************************!*\
  !*** ./src/websocket/client.js ***!
  \*********************************/
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


/***/ })

}]);
//# sourceMappingURL=4.js.map