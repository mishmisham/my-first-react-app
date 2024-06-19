"use strict";
exports.id = "src_components_combined_registerForm_registerForm_jsx";
exports.ids = ["src_components_combined_registerForm_registerForm_jsx"];
exports.modules = {

/***/ "./src/components/combined/registerForm/registerForm.jsx":
/*!***************************************************************!*\
  !*** ./src/components/combined/registerForm/registerForm.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registerSubmitButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerSubmitButton */ "./src/components/combined/registerForm/registerSubmitButton.jsx");
/* harmony import */ var _components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/primitives/inputText/InputText */ "./src/components/primitives/inputText/InputText.jsx");
/* harmony import */ var react_client_only__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-client-only */ "react-client-only");
/* harmony import */ var react_client_only__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_client_only__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _registerForm_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registerForm.sass */ "./src/components/combined/registerForm/registerForm.sass");





const RegisterForm = () => {
  const [registerData, setRegisterData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: {
      value: '',
      label: 'Name',
      placeholder: 'Enter your name',
      type: 'text',
      field: 'name'
    },
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
  });
  const onInput = (val, field) => {
    const fieldObject = registerData[field];
    fieldObject.value = val;
    setRegisterData({
      ...registerData,
      [field]: fieldObject
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "register-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Registration"), Object.keys(registerData).map((inputKey, key) => {
    const {
      value,
      label,
      placeholder,
      type,
      field
    } = registerData[inputKey];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: value,
      label: label,
      placeholder: placeholder,
      type: type,
      key: key,
      onInput: newValue => onInput(newValue, field)
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_client_only__WEBPACK_IMPORTED_MODULE_3__.ClientOnly, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_registerSubmitButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    registerData: registerData
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);

/***/ }),

/***/ "./src/components/combined/registerForm/registerSubmitButton.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/combined/registerForm/registerSubmitButton.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
let _ = t => t,
  _t;


const REGISTER_ACTION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_t || (_t = _`
    mutation RegisterAction($input: RegisterInput!) {
        register(input: $input) {
            name
            email
        }
    }
`));
const RegisterSubmitButton = ({
  registerData
}) => {
  const [login, {
    data,
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(REGISTER_ACTION);
  const submit = () => {
    const {
      email,
      password,
      name
    } = registerData;
    login({
      variables: {
        input: {
          name: name.value,
          email: email.value,
          password: password.value
        }
      }
    });
    console.log(data, loading, error);
  };
  const computedStyle = {
    marginTop: '12px'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: submit,
    className: "btn btn--submit",
    style: computedStyle
  }, "Register");
};
RegisterSubmitButton.propTypes = {
  registerData: {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterSubmitButton);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ "./src/components/combined/registerForm/registerForm.sass":
/*!****************************************************************!*\
  !*** ./src/components/combined/registerForm/registerForm.sass ***!
  \****************************************************************/
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

};
;
//# sourceMappingURL=src_components_combined_registerForm_registerForm_jsx.js.map