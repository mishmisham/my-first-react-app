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
  try {
    if (typeof window === 'undefined') {
      return;
    }
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
        // 1717999262079
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LjZlN2U1MDliNDhhNTc0Y2U1ODY1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL3ZDb2RlL3RxdWVzdHMvand0L2Zyb250L3dlYnNvY2tldC9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vYXBwLy4vc3JjL2xheW91dHMvZGVmYXVsdC5zYXNzP2E1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2Vic29ja2V0Q2xpZW50ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6OTAwMCcpO1xuXG53ZWJzb2NrZXRDbGllbnQub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCfQv9C+0LTQutC70Y7Rh9C40LvRgdGPJyk7XG59O1xud2Vic29ja2V0Q2xpZW50Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2coJ01lc3NhZ2U6ICVzJywgbWVzc2FnZS5kYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3ZWJzb2NrZXRTZW5kRWNobyA9ICh2YWx1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgd2Vic29ja2V0Q2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkoe2FjdGlvbjogJ0VDSE8nLCBkYXRhOiB2YWx1ZS50b1N0cmluZygpfSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgd2Vic29ja2V0U2VuZFBpbmcgPSAoKSA9PiB7XG4gICAgd2Vic29ja2V0Q2xpZW50LnNlbmQoSlNPTi5zdHJpbmdpZnkoe2FjdGlvbjogJ1BJTkcnfSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWJzb2NrZXRDbGllbnRcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3MTc5OTkyNjIwNzlcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==