"use strict";
self["webpackHotUpdateapp"]("client",{

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../layouts/default'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../layouts/default'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../layouts/default'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Second page",
      description: "other page seo description"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_PageSecond__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }
}];

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmM3OTYxMDc3MjQ1NDU3NjMwMzUxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC9zcmMvcm91dGVzL3JvdXRlc0RhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL2RlZmF1bHQnO1xuaW1wb3J0IFBhZ2VGaXJzdCBmcm9tIFwiLi4vcGFnZXMvUGFnZUZpcnN0XCI7XG5pbXBvcnQgUGFnZVNlY29uZCBmcm9tIFwiLi4vcGFnZXMvUGFnZVNlY29uZFwiO1xuaW1wb3J0IHsganNvbiwgdXNlTG9hZGVyRGF0YSB9ZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IGZldGNoQ3VycmVudFVzZXIgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4J1xuXG5leHBvcnQgY29uc3Qgcm91dGVzQXJyYXkgPSBbXG4gICAge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICBsb2FkZXIoKSB7XG4gICAgICAgIHJldHVybiBqc29uKHsgbWVzc2FnZTogXCJXZWxjb21lIHRvIFJlYWN0IFJvdXRlciFcIiB9KTtcbiAgICAgIH0sXG5cbiAgICAgIGxvYWREYXRhOiAoeyBkaXNwYXRjaCB9KSA9PiBkaXNwYXRjaChmZXRjaEN1cnJlbnRVc2VyKCkpLFxuXG4gICAgICBDb21wb25lbnQoKSB7XG4gICAgICAgIC8vIGxldCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgICAgIHJldHVybiA8TGF5b3V0XG4gICAgICAgICAgICB0aXRsZT1cIkhvbWVwYWdlXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPSdob21lIHBhZ2Ugc2VvIGRlc2NyaXB0aW9uJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYWdlRmlyc3QgLz5cbiAgICAgICAgICA8L0xheW91dD47XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9zZWNvbmRcIixcblxuICAgICAgICBsb2FkZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIGpzb24oeyBtZXNzYWdlOiBcIldlbGNvbWUgdG8gUmVhY3QgUm91dGVyIVwiIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIENvbXBvbmVudCgpIHtcbiAgICAgICAgICByZXR1cm4gPExheW91dFxuICAgICAgICAgICAgICB0aXRsZT1cIlNlY29uZCBwYWdlXCJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249J290aGVyIHBhZ2Ugc2VvIGRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGFnZVNlY29uZCAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+O1xuICAgICAgICB9LFxuICAgIH0sXG5dO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9