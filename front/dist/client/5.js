"use strict";
(Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] || []).push([[5],{

/***/ "./src/components/combined/login/forms/authForm/authForm.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/combined/login/forms/authForm/authForm.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authSubmitButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authSubmitButton */ "./src/components/combined/login/forms/authForm/authSubmitButton.jsx");
/* harmony import */ var _components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/primitives/inputText/InputText */ "./src/components/primitives/inputText/InputText.jsx");
/* harmony import */ var _authFormFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authFormFields */ "./src/components/combined/login/forms/authForm/authFormFields.js");
/* harmony import */ var _authForm_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authForm.sass */ "./src/components/combined/login/forms/authForm/authForm.sass");
/* harmony import */ var react_client_only__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-client-only */ "./node_modules/react-client-only/index.mjs");






const AuthForm = () => {
  const [authData, setAuthData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    ..._authFormFields__WEBPACK_IMPORTED_MODULE_3__.authFormFields
  });
  const onInput = (val, field) => {
    const fieldObject = authData[field];
    fieldObject.value = val;
    setAuthData({
      ...authData,
      [field]: fieldObject
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "auth-form"
  }, Object.keys(authData).map((inputKey, key) => {
    const {
      value,
      label,
      placeholder,
      type,
      field
    } = authData[inputKey];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: value,
      label: label,
      placeholder: placeholder,
      type: type,
      key: key,
      onInput: newValue => onInput(newValue, field)
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_client_only__WEBPACK_IMPORTED_MODULE_5__.ClientOnly, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_authSubmitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    authData: authData
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthForm);

/***/ }),

/***/ "./src/components/combined/login/forms/authForm/authFormFields.js":
/*!************************************************************************!*\
  !*** ./src/components/combined/login/forms/authForm/authFormFields.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authFormFields: () => (/* binding */ authFormFields)
/* harmony export */ });
const authFormFields = {
  email: {
    value: '',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'text',
    field: 'email'
  },
  password: {
    value: '',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    field: 'password'
  }
};

/***/ }),

/***/ "./src/components/combined/login/forms/authForm/authSubmitButton.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/combined/login/forms/authForm/authSubmitButton.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _layouts_parts_GlobalLayoutContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/parts/GlobalLayoutContext */ "./src/layouts/parts/GlobalLayoutContext.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
let _ = t => t,
  _t;






const AUTH_ACTION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_t || (_t = _`
    mutation AuthAction($input: LoginInput!) {
        login(input: $input) {
            data {
                name
                id
                email
                refreshToken
            }
            errors {
                message
                errors
            }
        }
    }
`));
const AuthSubmitButton = ({
  authData
}) => {
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  const [login] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(AUTH_ACTION, {
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
  const layoutContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_layouts_parts_GlobalLayoutContext__WEBPACK_IMPORTED_MODULE_2__.GlobalLayoutContext);
  const submit = async () => {
    const {
      email,
      password
    } = authData;
    login({
      variables: {
        input: {
          email: email.value,
          password: password.value
        }
      }
    }).then(response => {
      const {
        errors,
        data
      } = response.data.login;
      if (errors) {
        layoutContext.showNotify({
          text: errors.message
        });
        return;
      }

      // console.log(data)

      localStorage.setItem('refreshToken', data.refreshToken);
      // navigate('/');
    });
  };
  const computedStyle = {
    marginTop: '12px'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: submit,
    className: "btn btn--submit",
    style: computedStyle
  }, "Login");
};
AuthSubmitButton.propTypes = {
  authData: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthSubmitButton);

/***/ }),

/***/ "./src/components/primitives/inputText/InputText.jsx":
/*!***********************************************************!*\
  !*** ./src/components/primitives/inputText/InputText.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inputText_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputText.sass */ "./src/components/primitives/inputText/inputText.sass");


const InputText = props => {
  const label = props.label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, props.label) : null;
  const emitInput = e => {
    const value = e.target.value;
    props.onInput(value, e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-text"
  }, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: props.type || 'text',
    value: props.value,
    placeholder: props.placeholder || '',
    onInput: emitInput
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputText);

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

/***/ "./src/components/combined/login/forms/authForm/authForm.sass":
/*!********************************************************************!*\
  !*** ./src/components/combined/login/forms/authForm/authForm.sass ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/primitives/inputText/inputText.sass":
/*!************************************************************!*\
  !*** ./src/components/primitives/inputText/inputText.sass ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=5.js.map