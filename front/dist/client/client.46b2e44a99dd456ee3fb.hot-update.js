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
  console.log(value);
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
        // 1717999337852
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjQ2YjJlNDRhOTlkZDQ1NmVlM2ZiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvdkNvZGUvdHF1ZXN0cy9qd3QvZnJvbnQvd2Vic29ja2V0L2NsaWVudC5qcyIsIndlYnBhY2s6Ly9hcHAvLi9zcmMvbGF5b3V0cy9kZWZhdWx0LnNhc3M/YTVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3ZWJzb2NrZXRDbGllbnQgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo5MDAwJyk7XG5cbndlYnNvY2tldENsaWVudC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ9C/0L7QtNC60LvRjtGH0LjQu9GB0Y8nKTtcbn07XG53ZWJzb2NrZXRDbGllbnQub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZygnTWVzc2FnZTogJXMnLCBtZXNzYWdlLmRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IHdlYnNvY2tldFNlbmRFY2hvID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB3ZWJzb2NrZXRDbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7YWN0aW9uOiAnRUNITycsIGRhdGE6IHZhbHVlLnRvU3RyaW5nKCl9KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB3ZWJzb2NrZXRTZW5kUGluZyA9ICgpID0+IHtcbiAgICB3ZWJzb2NrZXRDbGllbnQuc2VuZChKU09OLnN0cmluZ2lmeSh7YWN0aW9uOiAnUElORyd9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYnNvY2tldENsaWVudFxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTcxNzk5OTMzNzg1MlxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9