"use strict";
(Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] = Object(typeof self !== 'undefined' ? self : this)["webpackChunkapp"] || []).push([[9],{

/***/ "./src/components/modules/svgDrawer/SvgDrawer.jsx":
/*!********************************************************!*\
  !*** ./src/components/modules/svgDrawer/SvgDrawer.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parts_pathComponent_PathComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/pathComponent/PathComponent */ "./src/components/modules/svgDrawer/parts/pathComponent/PathComponent.jsx");
/* harmony import */ var _parts_controlsComponent_ControlsComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/controlsComponent/ControlsComponent */ "./src/components/modules/svgDrawer/parts/controlsComponent/ControlsComponent.jsx");
/* harmony import */ var _parts_menuComponent_MenuComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/menuComponent/MenuComponent */ "./src/components/modules/svgDrawer/parts/menuComponent/MenuComponent.jsx");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




const tmp = [{
  type: 'path',
  cssClass: 'path-class',
  cssID: 'path-id',
  id: 1,
  line: [{
    start: {
      x: 10,
      y: 10
    },
    end: {
      x: 100,
      y: 100
    },
    bend: {
      start: {
        x: 40,
        y: 40
      },
      end: {
        x: 70,
        y: 70
      }
    }
  }],
  styles: {
    fill: null,
    // '#ccc'
    stroke: '#333',
    strokeWidth: 3
  }
}];
const SvgDrawer = () => {
  /*
      {
          type: 'path', // 'line' / 'polyline'
          id: 1,
          start: {
              x: 10,
              y: 10,
          },
          end: {
              x: 100,
              y: 100,
          },
          props: {
              fill: null, // '#ccc'
              stroke: '#333',
              strokeWidth: 3,
          },
          bend: {
              start: {
                  x: 40,
                  y: 40,
              },
              end: {
                  x: 70,
                  y: 70,
              }
          }
      }
  */

  const [lines, setLines] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tmp);
  const updateLine = line => {
    const lineIndex = lines.findIndex(item => item.id === line.id);
    lines[lineIndex] = {
      ...line
    };
    setLines([...lines]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "svg-drawer"
  }, lines.map(lineProps => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_controlsComponent_ControlsComponent__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      key: lineProps.id,
      update: updateLine
    }, lineProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_pathComponent_PathComponent__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: lineProps.id
    }, lineProps)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_parts_menuComponent_MenuComponent__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDrawer);

/***/ }),

/***/ "./src/components/modules/svgDrawer/parts/controlsComponent/ControlsComponent.jsx":
/*!****************************************************************************************!*\
  !*** ./src/components/modules/svgDrawer/parts/controlsComponent/ControlsComponent.jsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ControlsComponent = props => {
  const {
    line
  } = props;
  const defaultPointRadius = 30;
  const defaultBezierPointRadius = 20;

  /*
      TODO 
      перетащить расчет координат для контролов
  */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, line.map(path => {
    const {
      start,
      end,
      bend
    } = path;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
      cx: start.x,
      cy: start.y,
      r: defaultPointRadius,
      className: "point"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
      cx: end.x,
      cy: end.y,
      r: defaultPointRadius,
      className: "point"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
      cx: "100",
      cy: "100",
      r: defaultBezierPointRadius,
      className: "point"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
      cx: "400",
      cy: "100",
      r: defaultBezierPointRadius,
      className: "point"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      x1: start.x,
      y1: start.y,
      x2: "100",
      y2: "100"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
      x1: end.x,
      y1: end.y,
      x2: "400",
      y2: "100"
    }));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlsComponent);

/***/ }),

/***/ "./src/components/modules/svgDrawer/parts/menuComponent/MenuComponent.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/modules/svgDrawer/parts/menuComponent/MenuComponent.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MenuComponent = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuComponent);

/***/ }),

/***/ "./src/components/modules/svgDrawer/parts/pathComponent/PathComponent.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/modules/svgDrawer/parts/pathComponent/PathComponent.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

const PathComponent = ({
  type,
  id,
  cssClass,
  cssID,
  line,
  styles
}) => {
  const coordinates = line.map(path => {
    const {
      start,
      end,
      bend
    } = path;
    const startCoords = `M${start.x},${start.y}`;
    const endCoords = `${end.x},${end.y}`;
    const bendCoords = bend && bend.hasOwnProperty('start') || bend.hasOwnProperty('end') ? `C${bend.start.x},${bend.start.y} ${bend.end.x},${bend.end.y}` : '';
    return `${startCoords} ${bendCoords} ${endCoords}`;
  }).join(' ');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", _extends({
    d: coordinates,
    className: cssClass,
    id: cssID
  }, styles));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathComponent);

/***/ }),

/***/ "./src/pages/SvgDrawerPage/SvgDrawerPage.jsx":
/*!***************************************************!*\
  !*** ./src/pages/SvgDrawerPage/SvgDrawerPage.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modules_svgDrawer_SvgDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/modules/svgDrawer/SvgDrawer */ "./src/components/modules/svgDrawer/SvgDrawer.jsx");


const SvgDrawerPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_modules_svgDrawer_SvgDrawer__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDrawerPage);

/***/ })

}]);
//# sourceMappingURL=9.js.map