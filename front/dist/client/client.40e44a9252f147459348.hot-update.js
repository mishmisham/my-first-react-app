"use strict";
self["webpackHotUpdateapp"]("client",{

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
  websocketClient.send(JSON.stringify({
    action: 'ECHO',
    data: value.toString()
  }));
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
        // 1717987994340
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjQwZTQ0YTkyNTJmMTQ3NDU5MzQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FkbWluL0RvY3VtZW50cy92Q29kZS90cXVlc3RzL2p3dC9mcm9udC93ZWJzb2NrZXQvY2xpZW50LmpzIiwid2VicGFjazovL2FwcC8uL3NyYy9sYXlvdXRzL2RlZmF1bHQuc2Fzcz9hNWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdlYnNvY2tldENsaWVudCA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vbG9jYWxob3N0OjkwMDAnKTtcblxud2Vic29ja2V0Q2xpZW50Lm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygn0L/QvtC00LrQu9GO0YfQuNC70YHRjycpO1xufTtcbndlYnNvY2tldENsaWVudC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlOiAlcycsIG1lc3NhZ2UuZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3Qgd2Vic29ja2V0U2VuZEVjaG8gPSAodmFsdWUpID0+IHtcbiAgICB3ZWJzb2NrZXRDbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7YWN0aW9uOiAnRUNITycsIGRhdGE6IHZhbHVlLnRvU3RyaW5nKCl9KSk7XG59XG5cbmV4cG9ydCBjb25zdCB3ZWJzb2NrZXRTZW5kUGluZyA9ICgpID0+IHtcbiAgICB3ZWJzb2NrZXRDbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7YWN0aW9uOiAnUElORyd9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYnNvY2tldENsaWVudFxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTcxNzk4Nzk5NDM0MFxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9