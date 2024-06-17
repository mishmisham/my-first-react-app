"use strict";
(Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] || []).push([[9],{

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
/* harmony import */ var _components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/primitives/Preloader/preloader */ "./src/components/primitives/Preloader/preloader.jsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js");
let _ = t => t,
  _t;




const USER_QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_t || (_t = _`
query Query($id: Int!) {

  getUserByID(id: $id) {
    name
  }

  getAllUsers {
    name
    id
  }
}

`));
const UserItem = ({
  id,
  onNoData
}) => {
  const [currentID, setCurrentID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [getUser, {
    loading,
    error,
    data
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useLazyQuery)(USER_QUERY, {
    variables: {
      id: id
    }
  });
  const ready = data && !loading;
  if (!data && !loading && id !== currentID) {
    getUser();
    setCurrentID(id);
  }
  if (data) {
    console.log(id, data);
  }
  if (error) {
    onNoData();
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, ready && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, data.getUserByID.name));
};
const PageSecond = () => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [currentID, setCurrentID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const CompA = mode ? /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(__webpack_require__, /*! @/components/componentA */ "./src/components/componentA.jsx"))) : /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(__webpack_require__, /*! @/components/componentB */ "./src/components/componentB.jsx")));
  const setter = () => {
    const newMode = !mode;
    const newID = currentID + 1;
    setMode(newMode);
    setCurrentID(newID);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      height: "100px"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserItem, {
    id: currentID,
    onNoData: e => setCurrentID(1)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: setter
  }, mode ? 'da' : 'net'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_Preloader_preloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      height: "100px"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CompA, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSecond);

/***/ })

}]);
//# sourceMappingURL=9.js.map