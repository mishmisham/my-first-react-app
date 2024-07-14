"use strict";
(Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] || []).push([[5],{

/***/ "./src/components/combined/login/forms/registerForm/registerForm.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/combined/login/forms/registerForm/registerForm.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _registerSubmitButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerSubmitButton */ "./src/components/combined/login/forms/registerForm/registerSubmitButton.jsx");
/* harmony import */ var _components_primitives_inputText_InputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/primitives/inputText/InputText */ "./src/components/primitives/inputText/InputText.jsx");
/* harmony import */ var react_client_only__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-client-only */ "./node_modules/react-client-only/index.mjs");
/* harmony import */ var _registerFormFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registerFormFields */ "./src/components/combined/login/forms/registerForm/registerFormFields.js");
/* harmony import */ var _registerForm_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registerForm.sass */ "./src/components/combined/login/forms/registerForm/registerForm.sass");






const RegisterForm = () => {
  const [registerData, setRegisterData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(JSON.parse(JSON.stringify({
    ..._registerFormFields__WEBPACK_IMPORTED_MODULE_4__.registerFormFields
  })));
  const onInput = (val, field) => {
    const fieldObject = registerData[field];
    fieldObject.value = val;
    setRegisterData({
      ...registerData,
      [field]: fieldObject
    });
  };
  const clearFormValues = () => {
    setRegisterData({
      ..._registerFormFields__WEBPACK_IMPORTED_MODULE_4__.registerFormFields
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "register-form"
  }, Object.keys(registerData).map((inputKey, key) => {
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
    registerData: registerData,
    clearFormValues: clearFormValues
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterForm);

/***/ }),

/***/ "./src/components/combined/login/forms/registerForm/registerFormFields.js":
/*!********************************************************************************!*\
  !*** ./src/components/combined/login/forms/registerForm/registerFormFields.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerFormFields: () => (/* binding */ registerFormFields)
/* harmony export */ });
const registerFormFields = {
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
};

/***/ }),

/***/ "./src/components/combined/login/forms/registerForm/registerSubmitButton.jsx":
/*!***********************************************************************************!*\
  !*** ./src/components/combined/login/forms/registerForm/registerSubmitButton.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _loginFormsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../loginFormsContext */ "./src/components/combined/login/loginFormsContext.js");
/* harmony import */ var _layouts_parts_GlobalLayoutContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/parts/GlobalLayoutContext */ "./src/layouts/parts/GlobalLayoutContext.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
let _ = t => t,
  _t;





const REGISTER_ACTION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_t || (_t = _`
    mutation RegisterAction($input: RegisterInput!) {
        register(input: $input) {
            data {
                name
            }
        }
    }
`));
const RegisterSubmitButton = ({
  registerData,
  clearFormValues
}) => {
  const [register, {
    data,
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(REGISTER_ACTION);
  const loginFormsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_loginFormsContext__WEBPACK_IMPORTED_MODULE_1__.LoginFormsContext);
  const layoutContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_layouts_parts_GlobalLayoutContext__WEBPACK_IMPORTED_MODULE_2__.GlobalLayoutContext);
  const submit = async () => {
    const {
      email,
      password,
      name
    } = registerData;
    console.log(email, password, name);
    try {
      await register({
        variables: {
          input: {
            name: name.value,
            email: email.value,
            password: password.value
          }
        }
      }).then(response => {
        const {
          errors,
          data
        } = response.data.register;
        if (errors) {
          layoutContext.showNotify({
            text: errors.message
          });
          return;
        }
        clearFormValues();
        loginFormsContext.changeAuthMode(true);
      });
    } catch (err) {
      layoutContext.showNotify({
        text: 'error || data'
      });
    }
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
  registerData: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  clearFormValues: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
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

/***/ "./src/components/combined/login/forms/registerForm/registerForm.sass":
/*!****************************************************************************!*\
  !*** ./src/components/combined/login/forms/registerForm/registerForm.sass ***!
  \****************************************************************************/
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